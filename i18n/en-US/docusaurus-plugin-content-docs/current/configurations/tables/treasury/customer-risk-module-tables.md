---
title: Customer Risk Form Tables 
sidebar_position: 7
---

There are no specific tables for the module in question, but it should be noted that various document types in purchases and sales have settings related to customer risk.

The customer credit retrieves data from the following documents in the sales area:

**[Sales Order Type](/docs/configurations/tables/sales/sales-order-types)**: the ‘credit flag' indicates whether the document (printed and confirmed) is considered in the calculation of the customer credit or not. The ‘Exclude lock' flag excludes this document type from the customer lock;

**Delivery note types**: the ‘credit flag' indicates whether the document (printed and not valued in the invoice) is considered in the calculation of the customer credit or not. The ‘Exclude lock' excludes this document type from the customer lock;

**[Invoice Types](/docs/configurations/tables/purchase/purchase-invoices-type)**: the ‘credit flag' indicates whether the document (printed and not accounted for) is considered in the calculation of the customer credit or not. The ‘Exclude lock' flag excludes this document type from the customer lock.

Finally, each customer contact has two settings related to the module in question:

**Credit-control Type:**

**Document lock and reliance monitor**: the document in the sales area that exceeds the credit will be blocked, and therefore there will be a need to authorize it to proceed to the subsequent phases of the document flow;

**Reliance monitor**: a check of the credit will simply be performed with a potential message to the user indicating that the limit has been exceeded;

**Group lock**: similar to the first, but the calculation is cumulative for all companies in the database associated with the same customer contact;

**Group monitor**: similar to the second, but the calculation is cumulative for all companies in the database associated with the same customer contact.

The second setting is the ‘exposure control’ check, which makes the customer visible in the customer exposure form.