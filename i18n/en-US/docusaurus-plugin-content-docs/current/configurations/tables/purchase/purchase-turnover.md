---
title: Purchases Turnover
sidebar_position: 9
---

The table opens via the path **Tables > Purchases > Purchases Turnover** and contains necessary data for the accounting of documents.

*Specific fields*:

**Type**: identification code of the turnover;

**Description**: description of the turnover;

**Account/Detail Account/Detail Account Description**: cost account used in the accounting of documents;

**VAT Type**: used in the registration of the accounting of the document. It is usually set to generic; for other details, check its use in ledger templates and ledger records in the finance area;

**Analytic Account/Detail Account/Description**: account used to account for the document in analytic accounting.

**Type/Description**: used in the registration of the accounting of the document. For other details, check its [using]( /docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) in ledger records in the finance area.

For everything not detailed in this document about the common functioning of forms, refer to the following link [Custom features, buttons, and common fields](/docs/guide/common).

:::note Note
If the *Turnover type* is entered in the *Items Registry*, this code is proposed in the item lines of the purchase document and automates the accounting of documents on a specific offset account.
:::

*Example of a purchase invoice*:

If, therefore, the *Turnover type* is already present in the *Item Registry*, in the purchase documents we will find it reported in the *Items* tab, in the *Purchases Turnover* field; if it is not present in the item registry, it can be selected directly within the purchase document through the appropriate combo box.

If it is not entered in the item registry and one does not remember to insert it manually in the purchase document, the system, in order not to block the accounting of documents, allows (if this choice is deemed appropriate) to take the default offset detail account that has been decided to be set in the *Contact Register > Accounting Data tab > Finance tab* in the **Offset Cost/Revenue (defined)** field.