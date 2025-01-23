---
title: Management Records 
sidebar_position: 3
---

This form is essentially the same as the ***Historical Records Management***, that is, it shows the result of the ***Process Periods*** but filtering only the rows that are directly attributed to project/job order, which typically will be the costs/revenues directly attributed to the analysis dimension for the project/job order.

The fields are the same as the generic form of the directional dimension, which are:

- ***Detail account***
- [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Corporate Center***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [***Assignor Center***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), which will be populated only for rows related to drivers
- ***Year***
- ***Date Range***
- ***Debit***
- ***Credit***
- ***Fixed value***, which added to the subsequent variable value will give the previous Debit or Credit value
- ***Variable value***, which added to the previous fixed value will give the previous Debit or Credit value
- ***Division***
- ***Currency***, always the same as the company's currency
- ***Periods distribution*** associated with the row
- ***Type line***, which can be:
    - *0* meaning source rows: used for rows originating from closures or manual area closure recordings, but also for allocation driver rows
    - *1* meaning ceded rows: for rollover drivers, these are the rows that reverse the value from the *Corporate Center*
    - *2* meaning received rows: for rollover drivers, these are the rows that roll over the value from the *Assignor Center* to the *Corporate Center*
:::tip Note
The *allocation* rows are essentially the rollover rows of the *Cost drivers* that from the convenient Center *Accounts to be reassigned* populate the actual *Corporate Centers* of the directional dimension. The *rollover* drivers are essentially all the others.
:::
- ***Distribution type*** of the applied driver
- [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) applied
- ***Source***, meaning the origin of the data, which can be:
    - *Accounting (1)*, meaning directly from the *Mid-Year Closing*
    - *Manual (2)*, meaning from the *Off-balance records for area*
    - *Formula (3)*, meaning from recordings created by *Formula*
    - *Depreciations (4)*, meaning from recordings created by the processing of depreciations from controlling
    - *Adjustment (5)*, meaning from recordings of mid-year or yearly adjustment
    - *Rate drivers (6)*, meaning from the drivers for applying the rates 
    - *Inventory (7)*, meaning from recordings of inventory in controlling
    - *Production materials (8)*, meaning from costs for production materials
    - *External workings (9)*, meaning from costs of labor accounts
    - *Production transformations (10)*, meaning from internal processing in production
    - *Controlling consolidation (15)*, meaning from the *Master Consolidation* procedure of controlling, in multi-company installations

:::tip Note
There are another 4 types of data origins, visible in the project consolidated history:
    - *machine time (11)*
    - *manpower timing (12)*
    - *machine rig time (13)*
    - *worker rig time (14)*
:::

- ***Number***, ***Year***, ***Row***, ***WBS***: will always be populated by references to the projects

Deleting, modification, or data insertion in the grid is not permitted.