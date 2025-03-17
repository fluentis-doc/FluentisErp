---
title: Corporate centers
sidebar_position: 4
---


The form is located at: **Tables > Controlling > Analytical Accounting > Corporate centers**

:::tip Note
The table is of interest only in companies with the *Controlling* flag active.
:::

The table allows for the definition of the structure, even at different levels, and the characteristics of corporate centers.

#### Specific buttons

**New CDC**: allows the entry of a new cost center. |
**New C.C.  Node**: allows the entry of a sub-level relative to the one on which you are positioned. |
**Delete C.C. Node**: allows for the deletion of the CDC's sub-level. |


:::tip **Methods for entering new centers**
The tree structure created to organize the centers and the centers in detail are visible in the central grid of the form, but new centers are entered by filling in the fields in the lower area of the mask.
WARNING: some fields are, however, editable directly by acting on the line of the upper grid after entering the new center (e.g., the *Cost Driver* field). 
:::

## General Settings

### Mandatory fields in the left column  
- [**DIMENSION**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) membership
- **Code** alphanumeric, up to 15 characters
- **Description** of the center
- **Category** of the center

### Optional fields in the left column  
- **Second description**
- **TYPE OF CENTER** (direct/indirect) choice that has no influence at the processing level

### Optional fields in the right column  
- **Start date**/**END DATE OF VALIDITY** setting these dates will check if the cost center is valid as of the registration date (or document date), i.e., the dropdown menu of centers will show only those valid at that date (or with an empty validity range)
- FLAG **Valorize**: indicates whether the center can be valued in accounting or documents or if it is a logically structured center
- FLAG **Visible in production**: this makes that center visible in the table [Cost Centers](/docs/configurations/tables/production/cost-center) present in production;
- **RESPONSIBILITY CENTER**. It is a free table where I indicate who is responsible for that center; it does not influence the logic of analytical accounting management but can be used to notify via supervisor any budget overruns to the connected employee.

## Control Settings

- **Accounts to be assigned**: only one center can have this flag set (in the same company). We use this flag within convenience centers, particularly in a generic center “VALUES ATTRIBUTED IN CONTROLLING”. 
This flag identifies a kind of default center where general accounting assigns those costs that cannot be precisely attributed. There may also be logical situations where accounting does not have certain elements to value data at the time of registration or would take too much time to manage.

:::tip Note
Example: the cost of rent could already be managed in the chart of accounts with fixed percentages, but passing through this generic center, we have the possibility to manage a *cost driver* where we can set the square meters of the various centers and derive my percentage from there. By varying the driver, we will value (only in controlling) the new percentage without having to intervene on the already moved historical data in accounting.
Or the kWh consumption of various machines, data that accounting does not know where to retrieve, which is why it is useful to park the values in this generic center and then, at the end of the period, once I know how much has been consumed, I will value the logic only in controlling delegating it to a *cost driver*.
:::

- **Default center for asset**: Identifies a generic center to assign all the patrimonial movements of accounting. Normally, all analytical management is linked only to economic data, but the company may have an interest in a complete square of balance data in analytics. The center goes hand in hand with the flag for the valuation of patrimonial data in Controlling available within the *Division*.

- **Default center for projects** identifies the generic corporate center that accommodates direct project/job costs/revenues. As explained at the table *Dimensions* level, we have a specific dimension for analyzing project values: since there must always be a center in analytics, when I value a direct cost and revenue of a project/job, I can use the generic center with this FLAG or I will need to value multiple job centers by setting the [TABLE OF CENTERS/JOB ASSOCIATION](/docs/configurations/tables/controlling/analytical-accounting/projects-centers-association).

- [**Reclassification model**](/docs/controlling/reclassifications/create-reclassification-model): allows associating a reclassification model to the corporate center to determine the total costs assigned to the center in order to obtain the center's cost index. This is because some centers (typically productive) are typically valued in terms of physical quantities (e.g., hours of work or number of pieces used) and it is necessary to determine the valuation rate for the cost of a single hour of work or of a single piece. The reclassification model will typically determine the total costs of the center that will be divided by the total value of hours (e.g., or pieces), loaded to the center itself.
:::tip Note
The reclassification model to be associated with the corporate center for determining the rate can depend on the theoretical setup you want to give to your management control system; in any case, it will be a model that tends to determine the overall cost of the center through the attribution of a portion of indirect and common costs. In the detail of the reclassification model, it is expected to indicate via a specific flag the node (the line) that exposes the result of the reclassification and therefore the total costs of the center that will become the numerator of the quotient (e.g., Total costs of the center / total hours of work of the center) in order to determine, for example, the hourly cost of the center. The images provide an example of a specific model called Cost Control Framework. This model is configured to manage the Total Operating Costs row as the numerator of the ratio.
:::

![Image](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/corporate-center-model-connection.png)

![Image](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers/QCC-model.png)

- **Measurement Type**: we can measure using three methodologies
    - *in physical dimension*
    - *Percent*
    - *in percentage and physical quantity*.

If we select the latter to view all available options, we will have

- **Denominator value filter**: with this field, for percentage calculations, we define the logic for calculating the denominator for the percentage index calculation. The available options are
    - *Total debit*
    - *Total Credit*
    - *04 Margins*
    - *05 On selected sub-account*
    - *06 On selected account*
    - *07 Excluding selected sub-accounts*
    - *08 Excluding selected accounts*

For example, selecting code 02 Total debit will sum only the debit of the centers indicated in the grid in the lower left, with code 03 for credit, 04 for margins that is the difference between debit and credit, the subsequent options will also enable the right grid to filter the center data appropriately.

- [**MEASUREMENT UNIT 1 (UNITA' DI MISURA 1)**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), [**MEASUREMENT UNIT 2**], **FIXED PART**, and **VARIABLE PART**. These are 4 fields related to the quantity calculation type, where we define which unit of measure to search for to obtain the total quantity to put as the denominator of the physical index: we can indicate two units of measure (UM1 and UM2) for calculating a double index, while it is clearly the same unit of measure that is used for the fixed and variable quota of the first or second index.

:::tip Note
The calculation on physical quantity, typical of production centers, will allow obtaining the cost rates of the centers as € per machine hour or man hours, in order to calculate and verify the standard costs used in product cost for creating cost estimates in the bill of materials rather than a quote.
:::

- **Measurement center reference**: we can specify which fields of the physical movement history to filter to identify the quantities of our center: it can be particularly the origin center, the destination center, or primarily the destination, otherwise the origin.

## Localizations

In case of installation with differentiated geographical localizations, it is possible to use the Localizations section to manage descriptions in alternative languages, which can be used, for example, in the printing of the Cost Center Analysis.