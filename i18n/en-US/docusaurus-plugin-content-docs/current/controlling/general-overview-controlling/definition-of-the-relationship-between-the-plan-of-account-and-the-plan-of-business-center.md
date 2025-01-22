---
title: Definition of Relationships Between the Chart of Accounts and Corporate Centers 
sidebar_position: 2.2
---

After drafting the [***Cost Centers***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), the next step is to take our [***CHART OF ACCOUNTS***](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) and relate it to the center plan: at this stage, we need to define account by account the attribution logic to the various centers. For example, heating is often divided based on the square meters occupied by the respective centers rather than the power based on a theoretical usage parameter of each center of the same power. Another example is maintenance based on the invoices that accounting receives directly. If we want an objective allocation of maintenances when we receive the invoice, we will also be able to attribute it to the center correctly. It is necessary to detail the existing relationships between accounting accounts and their respective centers, in order to activate analytical ledger in addition to the general one that does not impose excessive workload on the administrative office.

:::tip Note
For those using the Controlling management of Managerial Accounting, instead of predefining an attribution according to fixed percentages at the Chart of Accounts level, it is suggested to associate the virtual center at 100% and then define specific *Cost drivers* for allocation, perhaps even just based on the same percentage logic. In Managerial Accounting, in fact, the analytical data of general ledger is always deleted and recreated for the period being processed, making it much more convenient to apply a cost driver rule downstream, which allows it to be applied within a validity date range (opening the possibility of changing the applied criteria on the fly) without needing to manually intervene on already stored analytical records.
:::

:::tip Note
In the case where a specific case-by-case valuation by the user in accounting is decided, in the Chart of Accounts we can choose to:
- insert multiple centers with a percentage of 0: the user will find these rows in the record and can manually value the single row with the case value, and ***FluentisERP*** will delete those remaining with a zero amount upon saving. If the dimensions of the centers and the template do not allow unbalanced records, squaring cannot occur.
- insert multiple centers with a percentage of 100: the user will find these rows valued in the record and can delete those that are not to be valued, rather than modify the values before saving. If the dimensions of the centers and the template do not allow unbalanced records, squaring cannot occur.
- For those using the Controlling management of Managerial Accounting, it is possible to insert a setting row without a specific center, but with only the dimensions of the centers and, optionally, also the category of the centers that are to be valued for that account: the user will find in the record the row valued with the empty center and by opening the dropdown will only see the centers of the dimension (and the category, if set) of the case.
:::

The linkage to the Chart of Accounts is just one of the points available for connecting centers: depending on the cases, the dimensions to be valued, and the logics to be applied, it may be useful to connect *Corporate Centers* to other registers in ***FluentisERP***. We can indeed associate centers with:
- Item Registries
- Customer/Supplier/Agent Registries
- Employees and activity categories of personnel, in use in the Projects area
- Warehouse Registries
- Asset Registries

:::tip Note
Each module of the active/passive cycle, in the corresponding parameter configuration screen, provides for defining the logical order of searching for centers to value the single item line in the document in question, as well as defining how to act in various data creation processes from one module to another (e.g., how to handle the fulfillment of an order, rather than creating invoices from delivery notes).
These configurations should also be evaluated carefully to define the correct point of data valuation in the document cycle.
:::

An additional important characteristic to define at the level of the chart of accounts is whether or not to use the accounting data in the Controlling processes: some examples can clarify the need to set the option *Do not use in controlling* with any reconciliation criteria.
In the chart of accounts, we will first have a series of costs recognized at a later stage: a typical case is the cost of the board of auditors, which I have to estimate at the beginning of the year for controlling, but which will be reconciled at the end of the year when I have the actual data recorded in accounting.
Alternatively, the company may decide to use the civil/tax amortization from accounting also in evaluations for management accounting, rather than introducing a logic of technical extra-accounting depreciation.
Or personnel costs, when the portions of provisions that materialize in certain periods of the year (like in the months of recognition of thirteenth salaries or additional monthly payments) are not periodically recognized in accounting.