---
title: Corporate Centers 
sidebar_position: 4
---

:::note Path
**Tables > Controlling > Analytic Accounting > Corporate Centers**

Note:
For anything not detailed in this document about the common functionality of the forms, refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).

:::

---

:::tip Note
The table is of interest only in companies with the *Controlling* flag active.
:::


The table allows for the definition of the structure, even at different levels, and the characteristics of corporate centers.


| **RIBBON BAR BUTTONS** | Extended Description |
| --- | --- |
| New C.C. | Button to enter a new cost center. |
| New C.C. Node | Button to enter a sub-level relative to the one you are positioned on. |
| Delete C.C. Node | Button to delete the sub-level of the C.C. |


:::tip **Modality of insertion new centers**
The tree structure created to organize the centers, and the centers in detail, are visible in the central grid of the form, but new centers are entered by filling in the fields in the lower section of the mask.
WARNING: some fields can, however, be modified directly on the row of the upper grid after entering the new center (e.g. the *Cost driver* field). 
:::




## FIRST TAB - General settings 

### Mandatory fields in the left column  
- [***DIMENSION***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) of belonging
- ***CODE*** alphanumeric, possible 15 characters
- ***DESCRIPTION*** of the center
- ***CATEGORY*** of the center

### Optional fields in the left column 
- ***SECOND DESCRIPTION***
- ***CENTER TYPE*** (direct/indirect) choice that does not influence processing at the operational level

### Optional fields in the right column
- ***START/END VALIDITY DATE*** by setting these dates we will verify if the cost center is valid on the registration date (or the document date), meaning the dropdown menu of centers will only show those valid on that date (or with an empty validity range).
- ***VALORIZABLE FLAG***: indicates whether the center can be valorized in the accounting or documents or if it is a logically structural center.
- ***VISIBLE IN PRODUCTION FLAG***: this makes that center visible in the [Cost Centers](/docs/configurations/tables/production/cost-center) present in production;
- ***RESPONSIBILITY CENTER***. It is a free table where I indicate who is responsible for that center; it does not influence the management logic of analytic accounting but can be used to signal budget overruns to the connected employee via supervisor.

## SECOND TAB - Controlling settings 
- ***ACCOUNTS TO BE ASSIGNED***: only one center can have this flag set (in the same company). We use this flag within convenience centers, particularly in a generic center “VALUES ATTRIBUTED IN CONTROLLING”. 
This flag identifies a kind of default center where the general ledger assigns those costs it cannot attribute precisely. There may also be logical elements that accounting does not have certain elements to value at the time of registration or that would take too long to manage.

:::tip Note
Example: the cost of rents could already be manageable in the chart of accounts with fixed percentages, but passing through this generic center we have the opportunity to manage a *cost driver* where we can set the square meters of the various centers, deriving my percentage from here. By varying the driver, we will value (only in controlling) the new percentage without having to intervene on the already moved historical accounting data.
Or the kwh consumption of various machines, data that accounting does not know where to obtain, which is why it is convenient to park the values in this generic center, and then at the end of the period, once I know how much was consumed, I will value the logic only in controlling by delegating it to a *cost driver*.
:::

- ***DEFAULT CENTER FOR ASSET***: Identifies a generic center to which all asset movements of the accounting will be assigned. Typically, all analytic management is linked only to the economic aspect, but the company may be interested in having a complete overview of balance sheet data in the analytics. The center runs parallel to the asset valuation flag in the Controlling available within the *Division*.

- ***DEFAULT CENTER FOR PROJECTS*** identifies what is the generic corporate center that accommodates the direct costs/revenues of the project/job order. As we explained at the dimensions table level, we have a specific dimension analysis of project values: since there must always be a center in analytics, when I value a direct project/job order cost or revenue, I can use the generic center with this FLAG or I will have to valorize multiple job order centers by setting the [CENTERS/JOB ORDERS ASSOCIATION TABLE](/docs/configurations/tables/controlling/analytical-accounting/projects-centers-association).


- [***RECLASSIFICATION MODEL***](/docs/controlling/reclassifications/create-reclassification-model): allows the association of a reclassification model to the corporate center in order to determine the total costs assigned to the center to obtain the cost index of the center itself. This is because some centers (typically productive) are typically valued in terms of physical sizes (e.g. work hours or number of pieces used), and it is essential to determine the valuation rate for the cost of a single work hour or a single piece. The reclassification model will typically determine the total costs of the center that will be divided by the total value of the hours (for example, or pieces) charged to that center.
:::tip Note
The reclassification model to be associated with the corporate center for the determination of the rate can depend on the theoretical setup one wants to give to their management control system; in any case, it will be a model that aims to determine the overall cost of the center also through the allocation of a portion of indirect and common costs. In detail, the reclassification model is expected to indicate via a special flag the node (the row) that displays the result of the reclassification and thus the total costs of the center that will become the numerator of the quotient (e.g. Total costs of the center / total hours of work of the center) in order to determine, for example, the hourly cost of the center. The images show an example of a specific model called Cost Control Overview. This model is configured to manage as the numerator of the ratio the row Total operating costs.
:::

![Image](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/corporate-center-model-connection.png)

![Image](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/QCC-model.png)

- ***MEASUREMENT TYPE***: we can measure with three methodologies:
    - *in physical dimension*
    - *in percentage*
    - *in percentage and physical dimension*.

If we select the latter to view all available options, we will have...

- ***DENOMINATOR VALUE FILTER***: with this field, for percentage calculations, we define the logic for calculating the denominator for percentage index calculations. The available options are:
    - *02 Total debit*
    - *03 Total credit*
    - *04 Margins*
    - *05 On selected detail account*
    - *06 On selected account*
    - *07 Excluding selected detail accounts*
    - *08 Excluding selected accounts*

For example, by selecting code 02 Total debit, we will sum only the debit of the centers indicated in the lower left grid; with code 03 the credit, 04 the margins, meaning the difference between debit and credit, the subsequent options will also enable the right grid to appropriately filter the data of the centers.

- [***UNITS OF MEASURE 1***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), [***UNITS MEASURE 2***], ***UNCHANGEABLE PART*** and ***CHANGEABLE PART***. These are 4 fields related to the quantity calculation type, where you define what the unit of measure to search for to obtain the total quantity to put in the denominator of the physical index is: we can therefore indicate two units of measure (UM1 and UM2) for calculating a double index, while it is clearly the same unit of measure used for both the fixed and variable share of the first or second index.

:::tip Note
The calculation on physical size, typical of productive centers, will allow you to obtain cost rates of the centers such as € per machine hour or manpower hours, in order to calculate and verify the standard costs used in product costs to create cost estimates in the Bill of Materials instead of a quote.
:::

- ***MEASUREMENT CENTER REFERENCE***: we can indicate which fields of the historical physical movements to filter to identify the quantities of our center: it may particularly be the origin center, the destination center, or prioritizing the destination, otherwise the origin.

## THIRD TAB - Localizations
In the case of installation with differentiated geographical localizations, the Localizations section can be used to manage descriptions in alternative languages, which can be utilized, for example, in the printing of the Cost Center Analysis.