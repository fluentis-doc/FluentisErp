---
title: Registers
sidebar_position: 1
---

In an ERP software like Fluentis, where there is a connection and synergy between various areas and modules and a shared data origin among various managed companies and the different areas and functionalities involved, efficient and effective management of **Registers** plays a fundamental role.

:::tip[Info]
For a general introduction and in-depth information on the **ERP structure**, click [**here**](/docs/guide/intro/intro-erp).
:::

This basic data significantly automates downstream procedures by reading the data contained within it.

:::note[**Example:**]
When entering a new sales invoice, we will automatically obtain the standard payment conditions defined in the customer’s master data, the VAT rate will be pulled from the invoiced item’s master data, any discounts will come from the customer’s master data, or through the price list of the item to which the customer is associated.
:::

Through this section, the following types of master data are managed:
- [the master data of **customers, suppliers, banks,** and **agents**:](/docs/erp-home/registers/contacts/registers-management), which consist of a general part defined as **Contact** that includes basic data such as name or business name, tax information, address, etc., and a detail part defined as **Accounting Data** (since it is connected to and dependent on the creation of an account in the chart of accounts). This section is divided into sub-sections to accommodate data related to:
    - Administrative Data: such as accounts to be used with the subject in question, related VAT rates, etc.
    - Tax Data: e.g., special tax regimes to which the subject adheres and data for electronic invoicing.
    - Payments: standard conditions to propose downstream and supporting banks.
    - Delivery: Recipients and destinations.
    - Expenses and Discounts: fixed discounts and additional expenses to be invoiced.
    - Price Lists: association of sales and purchase price lists to the master data.
    - Agents: association of agents with customers.
    - Other
- [the master data of **items**:](/docs/erp-home/registers/items/master-item-intro) composed of various sections based on the type of data and its related use (e.g., administrative data, units of measure, etc.).
- [chart of **accounts**:](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) which, while included in the context of master data (as it is connected to customer and supplier master data), appears more like a table to define accounts and their groupings.
- **[work cycles,](/docs/erp-home/registers/production/routes/cycle-management-and-production-phases) [bills of materials](/docs/erp-home/registers/production/bill-of-materials/bom), [prototypes:](/docs/erp-home/registers/production/standardization/new-prototype)** elements related to the production context.