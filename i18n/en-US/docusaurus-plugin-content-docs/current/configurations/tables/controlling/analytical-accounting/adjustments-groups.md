---
title: Groups of Adjustment
sidebar_position: 6
---

:::note Path 
**Tables > Controlling > Analytic Accounting > Groups of Adjustment**

Note:
For everything not detailed in this document regarding the common operation of forms, please refer to the following link [Custom features, buttons, and common fields](/docs/guide/common).

:::

---

:::tip Note 
This table is for the exclusive use of companies that have set up *Controlling*.
:::

Inside this table, it is possible to code groupings of accounts useful for managing the specific reporting for controlling. 
Some accounts are not used directly by controlling at first, but only indirectly and subsequently: The groups of adjustment serve to identify logical groups to which individual costs for the adjustments made twice a year or only at the end of the fiscal year can be assigned, in order to group them appropriately in the ***Control Values*** mask and verify their balance with accounting at the end of the period.

The available fields are:
- ***CODE***
- ***DESCRIPTION***
- ***BALANCE TYPE***: the latter is crucial for the detail accounts of initial/final inventories, for which two specific categories must be strictly defined.

:::tip Note 
In particular, the ***Inventory Accounting*** procedure for Controlling values the initial and final inventories of each single period (month) being processed in the year in the off-balance records area. When requesting, in the Reporting module, the amounts of the initial and final inventories for the first half of the year YYYY, ***FluentisERP*** **must** know which accounts to read only the data from the initial period of January and which to read only from the final period of June; otherwise, there would be sums of 6 months of initial inventories and 6 of final inventories, completely affecting the processing!
:::