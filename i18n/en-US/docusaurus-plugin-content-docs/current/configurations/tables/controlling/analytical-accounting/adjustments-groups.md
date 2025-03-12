---
title: Groups of adjustment
sidebar_position: 6
---

The form is located at the path: **Tables (Tabelle) > Controlling > Analytical Accounting (Contabilità analitica) > Groups of adjustment (Gruppi di conguaglio)**

:::tip Note (Nota)
This table is for the exclusive use of companies that have set up *Controlling*.
:::

Within this table, it is possible to code groupings of accounts useful for managing reporting specific to controlling. Some accounts are not used directly in the first instance by controlling but only indirectly and retrospectively: Settlement groups serve to identify logical groups to which individual costs for settlements that we will do inter-annually or only at the end of the financial year should be assigned, in order to group them appropriately in the **Control Values** mask and verify their reconciliation with accounting at the end of the period.

#### Specific Fields:
- **Code**
- **Description**
- **Balance type**: this is fundamentally important for the sub-accounts of opening/closing inventories, for which two specific categories must be defined.

:::tip Note (Nota)
In particular, the **Inventory accounting** procedure for Controlling values the opening and closing inventories of each individual period (month) being processed in the year in the extrabudgetary records of the area. When later requesting, in the Reporting module, the amounts of the opening and closing inventories for the first half of the year YYYY, **FluentisERP** **must** know which accounts to read only the opening period data for January and which to read only the closing period data for June, otherwise you would get the sums of 6 months of opening inventories and 6 of closing inventories, completely compromising the processing!
:::