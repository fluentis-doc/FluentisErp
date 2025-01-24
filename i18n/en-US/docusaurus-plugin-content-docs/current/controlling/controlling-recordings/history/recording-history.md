---
title: Historical Records Management
sidebar_position: 3
---

In this mask, we have the list of registrations created by the ***Process Periods*** of controlling: this is the data base, which is not modifiable, containing the details of each populated line, starting from the monthly values of the accounting source to the individual rollovers of the processed Cost drivers (excluding those from the project final accounts, which have their own calculation procedure and a separate view form).

:::tip Note
Since the ***Process Periods*** of Controlling deletes and recreates the values of the year, there will be a single registration for each year and processed area.
:::

We can open each registration in view mode to check the individual processing steps and the details of the processed data, with full visibility of all characteristics of the data origin, the period distribution, the applied cost driver, and the processing cycle: from this form, therefore, we can trace the logical reasons for any inconsistencies caused by settings inconsistent with the sought results.

The available fields in the grid are as follows:

- ***Detail acoount***
- [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- [***Corporate Center***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)
- [***Assignor Center***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), which will be populated only for the lines related to the drivers
- ***Year***
- ***Date Range***
- ***Debit***
- ***Credit***
- ***Fixed value***, which added to the subsequent variable value will give the previous Debit or Credit value
- ***Variable value***, which added to the previous fixed value will give the previous Debit or Credit value
- ***Division***
- ***Currency***, always the same as the company's currency
- ***Periods distribution*** associated with the line
- ***Type line***, which can be
    - *0* that is source lines: used for both lines originating from closures or manual recordings of closures or area, but also for attribution driver lines
    - *1* that is transferred lines: for rollover drivers, these are the lines that reverse the value from the *Corporate Center*
    - *2* that is received lines: for rollover drivers, these are the lines that rollover the value from the *Assignor Center* to the *Corporate Center*
:::tip Note
The *attribution* lines are essentially the rollover lines of the *Cost drivers* that from the temporary center *Accounts to be assigned* populate the actual *Corporate Centers* of the management. The *rollover* drivers are essentially all the others.
:::
- ***Distribution type*** of the applied driver
- [***Cost driver***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) applied
- ***Source***, that is the origin of the data, which can be:
    - *Accounting* (1), that is coming directly from the *Mid-year closing*
    - *Manual* (2), that is coming from the *Off-balance records for area*
    - *Formula* (3), that is coming from recordings created by the *Formula*
    - *Depreciation* (4), that is coming from recordings created by the depreciation processing of controlling
    - *Adjustments* (5), that is coming from recordings of mid-year or yearly adjustments
    - *Rate drivers* (6), that is coming from the application drivers of the rates 
    - *Oddments* (7), that is coming from recordings of inventory in controlling
    - *Production materials* (8), that is coming from costs for production materials
    - *External workings* (9), that is coming from costs of labor account
    - *Production transformations* (10), that is from internal processing in production
    - *Controlling consolidation* (15), that is from the procedure of *Master consolidation* of controlling, in multi-company installations

:::tip Note
There are 4 other types of data origins, visible in the historical project consolidation:
    - *machine time* (11)
    - *manpower timing* (12)
    - *machine rig time* (13)
    - *worker rig time* (14)
:::

- ***Number***, ***Year***, ***Row***, ***WBS***: references to the projects, not populated

Deleting, modification, or data entry in the grid is not allowed.