---
title: Introduction 
sidebar_position: 1
---

The Cash Flow module of Fluentis ERP is a useful tool for analyzing expected business cash flows.

It allows for precise monitoring of cash inflows and outflows, helping companies maintain a clear and up-to-date view of their liquidity. The module integrates with accounting and treasury data to provide an accurate analysis and detailed forecasts of future cash flows.

The module also includes the ability to manually enter extra-accounting deadlines related to data not present in the system, such as a future projection of employee salaries, a repayment plan for a debt already written off from accounting, and so on.

**Main Features**:

- Automatic generation of cash flow with the ability to include or exclude types of financial flow enabled by toggling a simple flag.
- Date filtering options for each individual flow.
- Detailed visualization of cash flow processing with the option to export the data in various formats including Excel.
- Execution of an analytical printout for reading results with emphasis on the trend of cash flow at the end of each month.
- Option to read the analytical printout grouped by supporting bank.
- Ability to define a due date for each flow, parallel to the natural due date.

**List of tables necessary for managing the module:**

[Financial Account Types](/docs/configurations/tables/treasury/cash-flow-module-tables/financial-account-types),  

[Flow Type](/docs/configurations/tables/treasury/cash-flow-module-tables/flux-types),  

[Due Date Types](/docs/configurations/tables/treasury/cash-flow-module-tables/due-date-types),  

[Types of order/note/invoice](/docs/configurations/tables/treasury/cash-flow-module-tables/order-dn-invoice-types),  

[Customer/vendor/agent registry](/docs/configurations/tables/treasury/cash-flow-module-tables/customer-vendor-agent-register).

Furthermore, for each type of financial flow that is activated, it is necessary to manage within the related tables, such as Types DDT, Types of orders (customers and suppliers), etc., which specific types of documents should be monitored.

For example, a DDT that is not a sale consignment, such as a deposit account or sight account, will typically be excluded as it will not generate cash flow.