---
title: Association Centers / Projects 
sidebar_position: 1
---

:::note Path
**Tables > Controlling > Analytic Accounting > Association of Centers / Projects**

Note:
For everything not detailed in this document regarding the common functionality of forms, refer to the following link [Custom features, buttons, and common fields](/docs/guide/common).

:::

---

:::tip Note
This table is for the exclusive use of companies that have set up *Controlling* 
:::

When the company produces on project/job order, the interest of the actual analysis could be of two types:
- a specific interest, on the single project/job order, particularly when these do not have common characteristics among them;
- an interest in a group of projects/job orders produced within a certain period, when these projects/job orders have characteristics that allow for generalization of their type.

In this second case, this table becomes essential, as it allows linking the corporate centers of the *dimension* Projects/Job Orders to a characteristic of these, in order to evaluate the total data according to these *project/job order centers* without going into detail for each single job.

:::tip Note
If the company is not interested in macro analysis, the configuration of this table can be skipped and a single *project/job order center* can be used, identifying it with the flag *Default center for projects*, details in the table [***COST CENTER***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
:::

The available configuration fields are as follows:
- the ***CODE*** of the association

:::tip Note
***FluentisERP*** will evaluate the associations in the order of Code: therefore, when project X is selected, it will check if the first association allows determining the center to be assigned to the line; if not found, it will check the second association, and so forth, until the first valid occurrence.
:::

- the ***DESCRIPTION*** of the association

- the ***TYPE*** of association, that is, the object within which to find the distinguishing element
- the ***PROPERTY*** to be considered, which depends on the selection made in the previous field. The options are:

For these last two fields, the options are:
    - *Project*
        - *Project Type*
        - *Project Year*
        - *Project Zone*
        - *Project Country*
    - *Client*
        - *Account Type*
        - *Customer Account*
        - *Customer Zone*
        - *Customer Country*
        - *Finance Category*
        - *Commercial Category*
        - *Expense Entry*
    - *Item*
        - *Class*
        - *Product Category*
        - *Unit of Measure*
        - *Fiscal Category*
        - *Characteristic*
        - *Item Type*

Depending on the setting, the association of the Center to the corresponding set element will be enabled in the grid below.

:::danger ATTENTION
Defining an association related to *Items* will clearly require that:
    - within each project, there is at least one coded item line
    - the assignment of a purchase or sales line, or in general a line of analytics in accounting, as a direct cost/revenue of the project/job order, must necessarily be assigned to a coded item line within the project; otherwise, ***FluentisERP*** will have no way to value this association and will seek a subsequent association.

If, for example, each project were characterized by a finished product for sale of a different *class*, it would probably be easier to manage different *project types* according to each class rather than requiring the valuation of an item within the single project and selecting it in every document downstream.
:::