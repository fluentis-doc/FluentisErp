---
title: Job Order Consolidation 
sidebar_position: 5
---

For each processing of a ***Job Order Consolidation*** created from the ***Process Periods*** screen, we will find the corresponding registration here that contains the details of all costs and revenues assigned to projects, whether direct or indirect from the allocation of cost drivers applied to the directional dimension data.

The displayed fields are:

- ***Detail Account***
- [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Corporate Center***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): in this case, it refers to the *Project/Job Order Center*, which is the center that has the flag 'Default for project dimension' rather than the center assigned to the project via the ***Project/Job Order Center Association*** table.
- [***Assignor Center***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), which will be populated by the origin center of the movement, whether derived from a cost driver or not.
- ***Year***
- ***Date Range***
- ***Debit***
- ***Credit***
- ***Fixed value***, which, when added to the subsequent variable value, will give the previous Debit or Credit value.
- ***Variable value***, which, when added to the previous fixed value, will give the previous Debit or Credit value.
- ***Division***
- ***Currency***, always the same as the company's currency.
- ***Type line***, which can be:
    - *0*, that is, source lines: used for both lines that arise from closures or manual closure or area registrations, but also for attribution driver lines.
    - *2*, that is, received lines: for allocation drivers, they are the lines that allocate the value from the *Assignor Center* to the *Corporate Center*.
:::tip Note
The *attribution* lines are essentially the allocation lines of the *Cost drivers*, which from the convenient *Accounts to be assigned* populate the actual *Corporate Centers* of the directional. The *rollover drivers* are essentially all the others.
:::
- ***Distribution type*** of the applied driver
- [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) applied
- ***Source***, that is, the origin of the data, which can be:
    - *Accounting (1)*, that is, directly from the *Mid-Year Closing*
    - *Manual (2)*, that is, coming from *Off-balance records for area*
    - *Formula (3)*, that is, coming from registrations created by *Formula*
    - *Depreciation (4)*, that is, coming from registrations created from the processing of controlling depreciation
    - *Adjustments (5)*, that is, coming from registrations of interim or annual adjustments
    - *Rate drivers (6)*, that is, coming from the rate application drivers
    - *Inventory (7)*, that is, coming from inventory registrations in controlling
    - *Material Production (8)*, that is, coming from costs for production materials
    - *External Processing (9)*, that is, coming from costs of labor accounts
    - *Production Transformations (10)*, that is, from internal processing in production
    - *Machine time (11)*
    - *Manpower timing (12)*
    - *Machine rig time (13)*
    - *Worker rig time (14)*
    - *Controlling Consolidation (15)*, that is, from the *Master Consolidation* procedure of controlling in multi-company installations.
::: 

- ***Cost type*** applied to the line, for lines with origins from *Materials*

- ***Number***, ***Year***, ***Row***, ***WBS***: references to projects, not populated.

- [***Unit of Measure***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), ***Item***, ***Item Description***, ***Phase***, ***Subphase***, ***Number***, ***Description***, and ***Quantity*** of the produced or processed item.

Deleting, modification, or data insertion in the grid is not allowed.