---
title: Customer Risk Module Tables
sidebar_position: 7
---

There are no specific tables of this module, but it is necessary to mark that different purchase and sales document type have settings linked to the customer risk.

The customer credit collects data from the following sales area documents:

 [**Sales Order Type**](/docs/configurations/tables/sales/sales-order-types) : the credit flag indicates if document (printed and confirmed) is considered during the customer credit calculation or not. The 'Exclude Block' flag excludes this document type from customer block.

**Delivery Note Type**: the 'credit' flag indicated if document (printed and confirmed) is considered during the customer credit calculation or not. The 'Exclude Block' flag excludes this document type from customer block.

**Invoice Types**: the 'credit' flag indicated if document (printed and confirmed) is considered during the customer credit calculation or not. The 'Exclude Block' flag excludes this document type from customer block. Lastly, every  customer register has two settings linked to this module:

**Credit Control Type**:

**Doc. Block and Credit Monitor**: the sales area document, that overruns the credit, will be blocked and for this reason there will be the necessity to authorize it in order to move along the next phase of documental flow;

**Credit Monitor**: a credit control will be performed together with a message to the user for the occured overrun;

**Group Block**: this is like the first one, except for the calculation, which is cumulative for all database companies referred to the same customer register;

**Group Monitor**: this is like the second one, except for the calculation, which is cumulative for all database companies referred to the same customer register;

The second setting is 'Statement Control' check that make mask customer visible of customers statement.






