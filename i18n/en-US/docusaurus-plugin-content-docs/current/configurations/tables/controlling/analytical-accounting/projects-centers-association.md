---
title: Association of Centers / Jobs
sidebar_position: 1
---

The form can be found at the path: **Tables > Controlling > Analytical Accounting > Association of Centers / Jobs**

:::tip Note
This table is for the exclusive use of companies that have set up *Controlling*.
:::

When the company produces by project/job, the interest of the actual analysis may be of two types:
- a specific interest, on an individual project/job, particularly when these do not share common characteristics;
- an interest in a group of projects/jobs produced over a certain period of time, when these projects/jobs have characteristics that allow their type to be generalized.

In this second case, this table becomes essential, as it allows linking the company centers of the *dimension* Projects/Jobs to a characteristic of these, in order to evaluate the total data according to these *project/job centers* without going into detail for each single job.

:::tip Note
If the company is not interested in a macro analysis, the configuration of this table can be skipped and a single *project/job center* can be used, identifying it with the flag *Default center for projects*, details in the table [***COST CENTER***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
:::

The available configuration fields are as follows:
- the ***CODE*** of the association

:::tip Note
***FluentisERP*** will evaluate associations in order of Code: when project X is selected, it will check if the first association allows determining the center to be assigned to the line; if not found, it will check the second association and so on, until the first valid occurrence is found.
:::

- the ***DESCRIPTION*** of the association  
- the ***TYPE*** of association, i.e., the object within which to find the distinctive element  
- the ***PROPERTY*** to consider, which depends on the selection made in the previous field.  

For these last two fields, the options are:
    - *Project*
        - *Project type*
        - *Project year*
        - *Project zone*
        - *Project country*
    - *Client*
        - *Account type*
        - *Customer account*
        - *Customer zone*
        - *Country Guest*
        - *Finance Category*
        - *Commercial category*
        - *Expense entry*
    - *ITEM*
        - *Class*
        - *Product category*
        - *Units of Measure*
        - *Fiscal category*
        - *Characteristic*
        - *Part type*

Depending on the setup, therefore, the association of the Center to the corresponding element will be enabled in the grid below.

:::danger WARNING
The definition of an association related to *Items* will clearly require that:
    - within each project, there is at least one coded item line
    - the assignment of a purchase or sales line, or generally of a line in the analytics in accounting, as a direct cost/revenue of the project/job, must necessarily be assigned to a coded item line within the project; otherwise, ***FluentisERP*** will have no way to value this association and will look for a subsequent association.

For example, if each project is characterized by a finished sale product of *different class*, it is likely easier to manage *different project types* depending on each class rather than requiring the valuation of an item within the single project and selecting it in every downstream document.
:::