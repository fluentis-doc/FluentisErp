---
title: Chart of Accounts
sidebar_position: 3
---

The table of the [***Chart of Accounts***](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) presents a series of very important characteristics at the level of Controlling logic, both understood as simulations of mid-year balance sheets and actual managerial/analytic accounting. Let's look at the specific characteristics point by point.

## GRID OF DETAIL ACCOUNTS

- ***ACCOUNT TYPE***: the connection to the account type is of fundamental importance: in particular, the account type that has the 'Service' flag active (in ***FastStart*** these are *Costs to be adjusted* and *Revenues to be adjusted*) will be the one that activates the automatic management of accruals/prepayments, both at the level of general accounting (procedure for ***Adjustment Records*** for mid-year balance sheet and the related ***Adjustment Records*** and ***Integration Records***).

- flag ***ENABLE CORPORATE CENTERS***: if all associated with economic account types automatically have analytical valuation (if the ledger template also provides for management), this can also be enabled for balance sheet Detail Accounts via this flag.

- ***VARIABILITY***: when the company has the *Controlling* flag active, the managerial accounting that is valued from the analytical aspect requires the division of amounts into *fixed portion* and *variable portion*, which can be defined with this default value when the grid of ***VARIABILITY COST CENTER*** present on the right side of the mask is not valued.

:::tip Note
When the field is not valued, it means that the detail account is 100% a fixed cost.
:::

- ***DO NOT USE IN CONTROLLING*** when the company has the *Controlling* flag active, with this field we can indicate that the data provided by accounting should not be used in controlling calculations, because it is replaced, for example, by an estimated budgeted figure from the beginning of the year (e.g., Compensation for the Board of Statutory Auditors) or by an off-balance logic (e.g., depreciation).

- ***BALANCING TIMING*** the field is activated if the previous flag has been activated and allows us to specify, if set, *when* we want to perform the adjustment between managerial and accounting data. The available options are:
    - *Yearly*
    - *Periodical*

- ***BALANCING TYPE*** the field is activated if the previous flag has been activated and allows us to specify, if set, *how* we want to balance the accounting data. The available options are:
    - *Readjust managerial*: automatic lines will be inserted to bring the total of controlling to accounting values.
    - *Analytic differences*: the controlling data will be canceled and replaced with the values and centers actually used in accounting.

:::tip Note
The first option makes sense when the recording in controlling can differ only by amount from what is recorded in accounting.
The second option makes sense when, at the time of actual accounting entry, not only the amount but also the movement center can be different from the preloaded hypothesis in controlling.
:::

- ***CHANGE OF PERCENTAGE***: when the company has the *Controlling* flag active, with this field we can specify the logic of percentage change to be applied when duplicating the managerial values of this detail account (in the duplication of records of the ***Historical Records Management***).

- ***PERIODS DISTRIBUTION***: when the company has the *Controlling* flag active, with this field we can define how to allocate this detail account across the periods of managerial accounting during *process periods*. If not set, ***FluentisERP*** will use the calendar days relevant to the line.

- ***GROUPS OF ADJUSTMENT***: when the company has the *Controlling* flag active, the field is of fundamental importance for economic detail accounts of initial and final inventories, while it serves to group homogeneous data in the control mask called ***Control Values***.

## GRID OF CENTERS ATTRIBUTION
For each selected detail account, in the *Centers Attribution* tab on the right side, we will have the possibility to predefine a list of centers to be valued when moving this detail account in accounting, or valuing it through the purchases/sales turnover of the item line in the passive/active document cycle, depending on the priorities of the individual module.

In this grid we have the following fields:
- ***NUMBER*** progressive line number.

- [***COST CENTER***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) in this field, the corporate center is associated. This property is mandatory in companies that **do not** manage *Controlling*, while it is optional in those with **active** management. In this second case, indeed, only the *dimension* to be valued and the predefined *category* of the center can be indicated.

- ***PERCENTAGE %*** the percentage of attribution, mandatory to be valued within the range 0-100.

- ***DIVISION*** the division to be assigned by default to the analytical movement.
:::tip Note
In multidivisional installations, it is possible to manage the division in two ways concerning centers: either restrict the use of centers tied to the active/selected division in the line, or allow the valuation of a single center across all business divisions, regardless of the center's belonging division.
:::

- ***STARTING VALIDITY DATE*** and ***END VALIDITY DATE*** this range is currently **not** tested.

- [***DIMENSION***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) this field is specific for companies with *Controlling* active, it is valued according to the center selected in the line but can also be entered manually when the center is not provided in the line. In this case, it is necessary in cases where this dimension is mandatory for balancing (as is typically the *managerial dimension* of the centers) to constrain the user to value it in line with the general.

- ***COST CENTER CATEGORY*** the field is specific for companies with *Controlling* active, it is valued according to the center selected in the line but can also be entered manually when the center is not provided in the line. It is used to limit the visibility of selectable centers in this dimension when valuing this detail account.

:::tip Note
In the event that a specific valuation on a case-by-case basis by the user in accounting is decided, in the Chart of Accounts we can choose to:
- insert multiple centers with a percentage of 0: the user will find these lines in the record and can manually value each line with the case value, and ***FluentisERP*** will delete the remaining lines with a zero amount upon saving. If the center dimension and accounting reason don't allow for unbalanced records, there cannot be any discrepancies.
- insert multiple centers with a percentage of 100: the user will find these lines already valued in the record and can delete those that are not to be valued, rather than modify the values before saving. If the center dimension and accounting reason don't permit unbalanced records, there cannot be any discrepancies.
- For those using the management of Controlling in managerial accounting, it is possible to insert a setup line without a specific center, but only with the center's dimension and, optionally, also the category of centers that should be valued for that account: the user will find in the record the line valued with an empty center and by opening the dropdown will only have visibility of the centers of the dimension (and the category, if set) in question.
:::


## GRID OF VARIABLE ATTRIBUTE  
This section is specific to companies with *Controlling* active and is used to tie the variability of the movement of the selected detail account depending on the center that values it. There may indeed be cases where certain detail accounts are variable depending on the function that values them. This grid takes precedence over the generic *Variability* field that can be valued in the line of the detail account.

:::tip Note
For example, electricity may be 100% variable when associated with production (because if I do not produce, I do not consume) while being completely fixed (i.e., 0% variability) when valued against finance, which is assumed to consume energy regardless of production volume.
:::