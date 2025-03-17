---
title: Cost Driver
sidebar position: 6
---

Within the **Cost Driver** table, we can code all the logic of redistribution between centers. Let's detail the individual properties available.

:::tip note
The Cost Driver table is also available in a *simplified* version for companies that do not have *Controlling* activated. In this case, *which is not detailed as it is of marginal interest*, the cost driver includes a Code and a Description, with only a list of recipient Centers valued solely as a percentage (optionally variable by fiscal year). The cost driver must then be linked to the business Centers to be redistributed according to this percentage logic, through the procedure **Entries for cost driver** present in the **Interim Closures** module. 

For example, we can define a criterion 'square meters warehouse x', which provides a 60%-40% distribution over two production centers, and then link this driver to a center 'Warehouse x' that sums all the costs under its responsibility to be redistributed to the recipient production centers.
:::

## General Data

- **Code**: of the rule we are inserting. Within each processing cycle, **FluentisERP** evaluates the drivers in code order.

:::tip Note
To provide a coding criterion, we suggest:
    -   A: for ATTRIBUTIONS. All A are those related to the generic center ‘VALUES WITH ATTRIBUTION IN CONTROLLING’, which is the business center that has the FLAG on ACCOUNTS TO REASSIGN. The first step of controlling processing is to attribute these generic accounts that accounting cannot manage, or that need to be assigned with more variable logic compared to what an accountant knows.
    -   R for RE-ALLOCATIONS; when the values of a center are reallocated to other centers.
    -   P for PROJECTS; it should be noted that the processes related to projects will logically be applied at the end of everything, because with these we will be assigning the indirect costs already calculated in the ‘industrial/managerial’ dimension.
:::

- **Description**: of the driver, which can be more or less explanatory of what it manages.

- [**Area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas): in Cost Drivers *the area is always mandatory*. We will have specific rules for certain areas (for a simulation perhaps) while the general rules will be those of the generic area of the set of rules.

- **Production cycle number**: the controlling processing of **FluentisERP** must have a logical order. First of all, it starts with calculating the physical movements of the period, then there are the depreciations of assets, and then we move to the drivers, starting with attributions with cycle number 1 (because the first thing is to empty the *generic center to be reassigned*), then we will move on to reallocations according to their cycle order, and finally, for those who have valued a project/job dimension typically, the drivers of the last cycle of attribution from management to projects. With the same cycle number, drivers are then processed in the order of the driver code.

- **Account/Detail acc.**: means linking the driver to the subaccount-center combination, i.e., the total of the movements of this account and the center indicated subsequently will be taken and then the driver will specify where and how to reassign them to the destination centers listed in the lower left. The account/subaccount is a mandatory field only for cost drivers linked to the generic center to be reassigned; for others, it is optional.

- [**DIMENSION OF RECIPIENT CENTERS**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension); this dimension is what filters the recipient centers for the values of the grid in the lower left. In **FluentisERP**, we can indeed have drivers that move or copy data from one dimension to another of our centers: as already mentioned, the typical case is the assignment of direct/indirect costs to the analysis dimension of projects.

- **Start date** and **End date**: in these fields, you set from which date to which date the driver is valid. It is not allowed for two rules of the same area for the same center (and account, if valued) to overlap. If over time we realize it is necessary to make modifications to a rule, we can close it on a certain date to then apply a different one from the subsequent period.

## DISTRIBUTION TYPES

- **Distribution type**: defines how attribution or reallocation is managed. We have codes from 01 to 09 available for attributions; an additional 3 are added for reallocations between centers, when we can also use the rates of the center; instead, we will have 6 different ones specifically for the project/job destination dimension. In detail:
    - distribution types for attributions and reallocations
        - **Percent Completed**: the source data, period by period, will be distributed based on the percentage of the single recipient center.
        - **Total debit**: for each period, a percentage will be calculated based on the total debit of the single recipient center relative to the total debit of all recipient centers.
        - **Total Credit**: as for the previous one, but considering the total credit.
        - **04 Margins**: as for the previous one, but considering debit-credit (in absolute value).
        - **05 On selected subaccount**: the percentage is obtained considering the debit-credit (in absolute value) of the recipient centers, but filtered by the list of *subaccounts* in the right grid.
        - **06 On selected account**: the percentage is obtained considering the debit-credit (in absolute value) of the recipient centers, but filtered by the list of *accounts* in the right grid.
        - **07 Excluding selected subaccounts**: the percentage is obtained considering the debit-credit (in absolute value) of the recipient centers, but filtered excluding the list of *subaccounts* in the right grid.
        - **08 Excluding selected accounts**: the percentage is obtained considering the debit-credit (in absolute value) of the recipient centers, but filtered excluding the list of *accounts* in the right grid.
        - **09 On physical size**: the percentage is obtained considering the quantities (of the unit of measure set in the dedicated field) of the recipient centers compared to the total quantities of all recipient centers.
    - specific distribution types for reallocations
        - **10 Reversion to production at standard rate**: we reallocate a Center to multiple Centers based on a flow of Physical Movements between the originating Center (which is the center linked to the driver) and the recipient Centers (which are the destination centers of the driver); therefore the Hours of the originating Center will equal the Hours of the destination Centers. The ceding Center is not completely emptied, so it will have a residual value different from zero.
        - **11 Direct reversion at standard rate**: allows reallocating a Center to multiple Centers based on a Standard Rate of the originating Center (the driver center) and a flow of Physical Movements of the recipient Centers. The amount assigned to the recipient Centers will be the product of the Standard Rate of the originating Center and the value amount of the Physical Size of each recipient Center. Again, the ceding Center is not completely emptied, so it will have a residual value different from zero.
        - **12 Reversion to production at calculated rate**: allows reallocating a Center to multiple Centers based on a Calculated Rate of the originating Center and a flow of Physical Movements between the originating Center and the recipient Centers; therefore, the Hours of the originating Center will equal the Hours of the destination Centers. The amount assigned to the recipient Centers will be the product of the Calculated Rate of the originating Center and the value amount of the Physical Size of each recipient Center, so the ceding Center is completely emptied and will have a residual value of zero.
    - specific distribution types for project/job dimensions (detailed later)
        - **13 Reversion to production per project**
        - **14 Reversion margins per project**
        - **15 Reversion specific depreciations per project**
        - **16 Reversion on project revenues**
        - **17 Reversion on project costs**
        - **18 Reversion on industrial project costs**

- [**MEASUREMENT UNIT (UNITA’ DI MISURA)**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units): the field is activated for distribution types *09 - 10 - 11 - 12* and is used to select the unit of measure to be searched in the physical movements.

## OTHER FIELDS

- **Error management**: in this field we can indicate how to manage cases where no data is available for applying the rule.
    - *Lock*: the block will clearly interrupt processing if there is no data necessary for the application of the driver.
    - *RESIDUAL VALUE*: Residual value can be used only for reallocations, as it leaves the originating center with the residual value that could not be assigned to the destination centers. The generic center must always be empty, so this type of error management cannot be used for attributions.
    - *AVERAGE OF EXISTING VALUES*, on the other hand, spreads the current period, when there is no value, based on the average of existing values in other periods of the year being processed.

:::tip Note
For example, it can help avoid blocks in periods, like August, when the quantities or values to be used in the driver could be zero due to the company's closure for holidays.
:::

- **Values to use**: I indicate which data I need to consider for the recipient centers. The choice is between:
    - ALL: reads all assigned movements (up to the specific cycle I am processing).
    - ONLY ORIGIN LINES: only the data coming from the initial attributions.

:::tip Note
Essentially, for reallocations, this field defines whether to consider or not, for the Recipient Centers, also the values received from reallocations from other centers. Therefore, it is valid only for Distribution Types from 02 to 08 inclusive; it is irrelevant for the remaining types that are based on rates.
:::

- **CANCELLATION FLAG**: this flag answers whether I need to keep the data from the origin dimension or *move* them to the destination dimension.

:::tip Note
When the driver is linked to the project/job dimension, I certainly need to keep the value also in the origin, which is the managerial center; otherwise, I would be missing some costs, and any income statements would be inaccurate.
:::

- **By department**: we enable the possibility of filtering the origin data to be redistributed based on the division set in the next field.

:::tip note
In terms of division, it is also interesting to note that it is potentially possible to define drivers that operate a reassignment of costs/revenues from one division to another: it is necessary for the company to work across multiple divisions and to have activated the *General parameter* of *management centers by division*.
:::

## SPECIFICITIES FOR PROJECT/COMMITMENT DIMENSION

Now let's shift attention to fields related to project/job drivers. First, let's see the last three fields in the grid.

- **Measurement Type**: in this field, we need to set what the cost index (the rate) is to use to value the center associated with the cost driver. The available options are:
    - *UM1*: the index linked to the first unit of measure of the center will be used.
    - *UM2*: the index linked to the second unit of measure of the center will be used.
    - *%*: the percentage index of the center will be used.

- **Area for index**: in this field, we can specify in which *Area* to look for the previous cost index: essentially, for the project dimension, we can indicate a specific area from which to read the indices, regardless of the area selected for the *Project actual processing*.

- **Index calculation type**: in this field, I can define how to calculate the index according to these options:
    - *Month*: the specific month's index will be used.
    - *Up to period*: an index will be used calculated with cumulative data from the start of the year being processed.
    - *Mobile year*: an index will be used calculated with cumulative data from the 12 months prior to the specific period being processed.
    - *Year*: an index will be used calculated with the cumulative data of all available months in the year being processed.
    - *Standard rate*: the standard rate of the center valid for the specific period being processed will be used.

- **PROJECT/COMMITMENT SPECIFIC DISTRIBUTION TYPES**: first of all, the driver always provides for destination centers, but for a project dimension, we will have not only these 'project' centers but also the specific project linked to them. The reference is to the possibility of having a single *project center* (via the flag *Default center for projects*), which will then be the only one entered as a recipient of the driver, rather than using the *Center/Job Association table* through which to link a list of center codes according to the specific characteristics of the projects. This last possibility allows, potentially, to have different drivers on different project types (for example, because they have different cost structures depending on the type of project). In detail, the distribution types are:

    - **13 Reversion to production per project**: the cost index (for UM1 or 2, area, and calculation type set) of the driver's center will be read and valued on the working hours of the center on the projects/jobs associated with the Cdc in the lower left.
    - **14 Reversion margins per project**: the cost index (%) of the driver's center will be read and valued on the margins of the projects/jobs associated with the Cdc in the lower left.
    - **15 Reversion specific depreciations per project**: the unit costs of the technical depreciations of controlling of the single asset will be searched and multiplied by the quantities produced by the asset on the specific project/job associated with the Cdc in the lower left.
    - **16 Reversion on project revenues**: the cost index (%) of the driver's center will be read and valued on the revenues of the projects/jobs associated with the Cdc in the lower left, possibly filtering the data on the accounts indicated in the right grid.
    - **17 Reversion on project costs**: the cost index (%) of the driver's center will be read and valued on the costs of the projects/jobs associated with the Cdc in the lower left, possibly filtering the data on the accounts indicated in the right grid.
    - **18 Reversion on industrial project costs**: in this case, the percentage index will be applied to the calculated industrial cost, project by project, through the types of *data origin* configured in the right grid. We can therefore indicate *Materials*, *Internal Processing*, *External workings*, and perhaps the amounts of certain subaccounts taken from the *Accounting* origin.

:::tip Note
If we need to value the carpentry center, which is a production center, on the projects being worked on in the period, for example, I should have a driver that takes that cost and reallocates it perhaps for *Reversion to production per project*: I would then read the data retrieved from production, project by project, how much was worked by this center, based on the measurement type of the center (i.e., UM1 or UM2 for production centers). The percentage index, however, is typically used when the distribution criterion is related to project costs/revenues/margins.
:::