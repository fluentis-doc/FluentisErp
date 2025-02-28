---
title: Item Registry 
sidebar_position: 5
--- 

Within the item, in the **FINANCE** tab, we have the opportunity to associate the item with [***COST CENTERS***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers).

In particular, companies that **do not** have *Controlling* active will have a single association field for one center, while for those with **active** management a grid will be enabled where multiple centers can be valued, even with different dimensions, essentially replicating the logic already detailed in the *Chart of Accounts* (thus also allowing the center to be left empty and only the active dimension to be valued).

:::tip Note
The profit center is visible for backward compatibility; in companies with *Controlling* active, it is recommended to replace the profit centers with a specific dimension to be valued in the corporate centers.
:::

For the ***Inventory Accounting*** procedure present within the budget simulations of the ***Mid-Year Closures*** module, it is also crucial to assign to each item (relevant for warehouse valuation) its related ***Fiscal Category***: from this table, in fact, ***FluentisERP*** will retrieve the detail accounts to be used for valuing the initial and final inventories.