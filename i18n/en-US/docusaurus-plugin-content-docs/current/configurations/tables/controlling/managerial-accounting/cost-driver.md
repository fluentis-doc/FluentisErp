---
title: Cost Driver 
sidebar position: 6
---

Within the ***Cost Driver*** table, we can encode all the logic for reallocating costs between centers. Let's take a closer look at the individual properties available.


:::tip Note
The Cost Driver table is available, in a *simplified* version, even for companies that do not have *Controlling* activated. 
In this case, *which is not detailed as it is of marginal interest*, the cost driver requires a Code and a Description, followed only by a list of beneficiary Centers valued solely in percentage (which can vary optionally by accounting year). The cost driver must then be linked to the corporate Centers to be allocated according to this percentage logic, through the ***Cost Driver Records*** procedure present in the ***Mid-Year Closures*** module. 

For example, we can define a criterion 'square meters warehouse x', which provides for a distribution of 60%-40% on two production centers, and then connect this driver to a center 'Warehouse x' that sums all costs under its purview, to be reallocated to the target production centers.
:::

## GENERAL FIELDS

- ***CODE*** of the rule we are entering. Within each processing cycle, ***FluentisERP*** evaluates the drivers in order of code.

:::tip Note
To provide a coding criterion, we suggest:
    -   A: for ATTRIBUTIONS. All As are those related to the general center ‘VALUES WITH ATTRIBUTION IN CONTROLLING’, which is the corporate center that has the FLAG on ACCOUNTS TO BE ASSIGNED. The first step in controlling processing is to attribute these generic accounts that accounting cannot manage or that need to be assigned with more variable logic than that known by an accountant. 
    -   R for REALLOCATIONS; when I reallocate the values of one center to other centers.
    -   P for PROJECTS; It must be noted that processes concerning projects will logically be applied at the end of all, because with these we will be assigning indirect costs already calculated in the 'industrial/direct' dimension.
:::


- ***DESCRIPTION*** of the driver, which can be more or less explanatory of what it manages.

- [***AREA***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas): in Cost Drivers *the area is always mandatory*. We will have specific rules for certain areas (maybe for a simulation) while the general rules will be those of the generic area of the Rule Set.

- ***CYCLE NUMBER***: the controlling processing of ***FluentisERP*** must have a logical order. First of all, it starts with the calculation of physical movements of the period, then there are the depreciations of the assets, and then we move on to the drivers, for which we must start with the attributions with cycle number 1 (because first we must empty the *generic center to be reassigned*), then we will move on to reallocations in their order of cycle, and finally, for those who have valued a project/job order dimension typically, the drivers of the last attribution cycle given from the management to the projects. When the cycle numbers are the same, the drivers are processed in the order of the driver code.

- ***ACCOUNT/DETAIL ACCOUNT***: means linking the driver to the detail account-center combination, that is, it will take the total movements of this account and the center indicated later, and then the driver will dictate where and how to reallocate them to the destination centers in the list on the lower left. The account/detail account is a mandatory field only for cost drivers related to the generic center to be reassigned, for others it is optional.

- [***RECIPIENTS CENTERS SIZE***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension); this dimension filters the recipients centers of the values in the grid on the lower left. In ***FluentisERP***, in fact, we can have drivers that move or copy data from one dimension to another of our centers: as previously mentioned, the typical case is the allocation of direct/indirect costs to the project analysis dimension.

- ***START DATE*** and ***END DATE***: in these fields, we set from which date to which date the driver is valid. It is not allowed for two rules in the same area for the same center (and account, if valued) to overlap. If over time we notice that it is necessary to make changes to a rule, we can close it on a certain date to then apply a different one from the subsequent period.

## DISTRIBUTION TYPES
- ***DISTRIBUTION TYPE***: defines how the attribution or the reallocation is managed. We have codes available from 01 to 09 to be used for attributions; there are 3 more for reallocations between centers, where we can also use center rates; we will instead have 6 different, specific to the project/job order destination dimension. In detail:
    - distribution types for attributions and reallocations
        - ***01 Percentage**: the source data, period by period, will be allocated based on the percentage of the individual recipient center.
        - ***02 Total debit**: for each period, a percentage will be calculated based on the total debit of the individual recipient center compared to the total debit of all recipients centers.
        - ***03 Total credit***: as for the previous one, but considering the total credit.
        - ***04 Margins***: as for the previous one, but considering debit-credit (in absolute value).
        - ***05 On selected detail account***: the percentage is obtained by considering the debit-credit (in absolute value) of the recipients centers, but filtered by the list of *detail accounts* in the right grid.
        - ***06 On selected account***: the percentage is obtained by considering the debit-credit (in absolute value) of the recipients centers, but filtered by the list of *accounts* in the right grid.
        - ***07 Excluding selected detail accounts***: the percentage is obtained by considering the debit-credit (in absolute value) of the recipients centers, but filtered by excluding the list of *detail accounts* from the right grid.
        - ***08 Excluding selected accounts***: the percentage is obtained by considering the debit-credit (in absolute value) of the recipients centers, but filtered by excluding the list of *accounts* from the right grid.
        - ***09 On physical dimension***: the percentage is obtained by considering the quantities (of the unit of measure set in the dedicated field) of the recipients centers compared to the total quantities of all recipients centers.
    - specific distribution types for reallocations
        - ***10 Reversion on production at standard rate***: we reallocate a Center to multiple Centers based on a flow of Physical Movements between the Origin Center (which is the center linked to the driver) and the recipients Centers (which are the destination centers of the driver): therefore, the Hours of the Origin Center will be equal to the Hours of the recipients Centers. The assignor Center is not completely emptied, so it will have a remaining value different from zero.
        - ***11 Direct reversion at standard rate***: allows reallocating a Center to multiple Centers based on a Standard Rate of the Origin Center (the driver center) and on a flow of Physical Movements of the recipients Centers. The amount attributed to the recipients Centers will be the product of the Standard Rate of the Origin Center and the amount of the Physical Quantity of each recipient Center. Similarly, the assignor Center is not completely emptied, so it will have a remaining value different from zero.
        - ***12 Reversion on production at calculated rate***: allows reallocating a Center to multiple Centers based on a Calculated Rate of the Origin Center and a flow of Physical Movements between the Origin Center and the recipients Centers, so the Hours of the Origin Center will be equal to the Hours of the recipients Centers. The amount attributed to the recipients Centers will be the product of the Calculated Rate of the Origin Center and the amount of the Physical Quantity of each recipient Center, thus the assignor Center is completely emptied and will have a remaining value equal to zero.
    - specific distribution types for the project/job order dimension (detailed below)
        - ***13 Reversion on production by project** 
        - ***14 Reversion margins by project**
        - ***15 Reversion of specific depreciations by project**
        - ***16 Reversion on project revenues**
        - ***17 Reversion on project costs**
        - ***18 Reversion on project industrial cost**


- [***UNITS OF MEASURE***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units): this field is activated for distribution types *09 - 10 - 11 - 12* and is used to select the unit of measure to be searched in physical movements.


## OTHER FIELDS
- ***ERROR MANAGEMENT***: in this field, we can indicate how to handle cases where there is no data for applying the rule.
    - *LOCK*: the lock clearly interrupts the processing if the necessary data for applying the driver is not there.
    - *RESIDUAL VALUE*: Residual value cannot be used for attributions but only for reallocations, because it leaves in the origin center the remaining value that could not be assigned to the destination centers. The generic center must always be empty, and thus this type of error management cannot be used in attributions.
    - *AVERAGE OF EXISTING VALUES*, instead, spreads in the current period, when there is no value, based on the average of existing values in other periods of the year being processed.

:::tip Note
For example, it can help avoid locks in periods such as August, during which the quantities or values to be used in the driver could be zero due to the company's closure for holidays.
:::

- ***VALUES TO USE***: I indicate which data I must consider for the recipients centers. The choice is between
    - ALL: reads all assigned movements (up to the specific cycle that I am processing) 
    - ONLY SOURCE LINES: only the data that comes from the initial attributions.

:::tip Note
Essentially, for reallocations, this field defines whether or not to consider the values received from reallocations from other centers for the recipients Centers. Therefore, it is only relevant for Distribution Types from 02 to 08 inclusive, and is irrelevant for the remaining types that are based on rates.
:::


- ***REVERSAL FLAG***: this flag answers the question of whether to keep the data from the origin dimension or to *move* them to the destination dimension.

:::tip Note
When the driver is linked to the project/job order dimension, I must definitely keep the value also in the origin, which is the management; otherwise, I would miss some costs, and any economic accounts would be inaccurate.
:::

- ***BY DEPARTMENT***: we enable the option to filter the source data to be reallocated based on the division set in the next field.

:::tip Note
Regarding the division, it is also interesting to note that it is potentially possible to define drivers that operate a reallocation of costs/revenues from one division to another: it is necessary for the company to operate in multiple divisions and to have activated the *General Parameter* of *management centers by department*.
:::

## SPECIFICITY FOR PROJECT/JOB ORDER DIMENSION
Now let's turn our attention to fields related to project/job order drivers. First, let's look at the last three fields in the grid.

- ***MEASUREMENT TYPE***: in this field, we must set which cost index (the rate) to use to value the center associated with the cost driver. The available options are:
    - *MU1*: the index linked to the first unit of measure of the center will be used.
    - *MU2*: the index linked to the second unit of measure of the center will be used.
    - *%*: the percentage index of the center will be used.

- ***AREA FOR INDEX***: in this field, we can indicate in which *Area* to search for the previous cost index: essentially, for the project dimension, we can specify a specific area from which to read the indices, regardless of the area selected for the *Project Final Calculation*.

- ***INDEX CALCULATION TYPE***: in this field, I can define how to calculate the index, according to the following options:
    - *Month*: the specific index for the single month will be used.
    - *Up to period*: an index calculated with cumulative data from the beginning of the year being processed will be used.
    - *Mobile year*: an index calculated with cumulative data from the 12 months preceding the single period being processed will be used.
    - *Year*: an index calculated with the cumulative data of all available months in the year being processed will be used.
    - *Standard rate*: the standard rate of the center, valid for the single period being processed, will be used.


- Project/job order specific ***DISTRIBUTION TYPES***: first of all, the driver always requires destination centers, but for a project dimension, we will have not only these 'project' centers but also the specific project linked to them. The reference is to the possibility of having a single *project center* (via the flag *Default center for projects*), which will thus be the only one inserted as the driver’s recipient, rather than using the *Center/Job Order Association Table* through which to link a list of center codes according to specific project characteristics. This last possibility potentially allows for different drivers on different project types (for example, due to different cost structures depending on the type of project). In detail, the types of distribution are:

    - ***13 Reversion on production by project***: the cost index (for MU1 or 2, area, and calculation type set) of the driver center will be read and applied to the working hours of the center on the projects/job orders associated with the CdC in the lower left.
    - ***14 Reversion margins by project***: the cost index (%) of the driver center will be read and applied to the margins of the projects/job orders associated with the CdC in the lower left.
    - ***15 Reversion of specific depreciations by project***: the unit costs of technical depreciations of controlling of the individual asset will be searched, and multiplied by the quantities that the asset has produced on the individual project/job order associated with the CdC in the lower left.
    - ***16 Reversion on project revenues***: the cost index (%) of the driver center will be read and applied to the revenues of the projects/job orders associated with the CdC in the lower left, potentially filtering the data on the accounts indicated in the right grid.
    - ***17 Reversion on project costs***: the cost index (%) of the driver center will be read and applied to the costs of the projects/job orders associated with the CdC in the lower left, potentially filtering the data on the accounts indicated in the right grid.
    - ***18 Reversion on project industrial cost***: in this case, the percentage index will be applied to the industrial cost calculated, project by project, through the types of *data origin* configured in the right grid. Thus, we can indicate *Materials*, *Internal processing*, *External workings*, and potentially the amounts of certain detail accounts drawn from the *Accounting* origin.


:::tip Note
If we need to value the carpentry center, which is a production center, on the projects in progress in the period, for example, I will need a driver that takes that cost and reallocates it, perhaps through *Reversion on production by project*: I will then read the data taken from production, project by project, how much has been worked by this center, based on the measurement type of the center (i.e., MU1 or MU2 for production centers). The percentage index, on the other hand, is typically used when the distribution criterion is linked to project costs/revenues/margins.
:::