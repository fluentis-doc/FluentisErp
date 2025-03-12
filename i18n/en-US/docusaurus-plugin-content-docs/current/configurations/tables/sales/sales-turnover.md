---
title: Sales Turnover 
sidebar_position: 10
---

Allows you to enter new records or search for existing ones to view, modify, or delete them.

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results within the results grid.

To insert records, it is necessary to click on the first empty row of the grid or press the **New** button.

*Specific fields*

**Type**: identification code of the sales turnover;

**Description**: description of the sales turnover;

**Account/Detail Account/Detail Account Description**: Cost account used in the accounting of sales documents;

**VAT Type**: used in the registration of the document’s accounting. It is usually set to generic; for further details, check its usage in ledger templates and ledger records in the finance area;

**Analytic account and detail account and relative Description**: (obsolete) account used to record the document in analytic accounting.

**Type/Description**: used in registering the document’s accounting. For more details, verify its [use](https://docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) in ledger records in the finance area.

**Detail by countries**: this data is used only for data exchange with external programs. In the future, it will be possible to define different cost accounts for country and item accounting type, associated in the customer contact.

For anything not detailed in this document about the common functioning of the forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).

:::note Note
If the *Turnover Type* is entered in the *Item Registry*, this code will be proposed in the item lines of the purchase document and will automate the accounting of documents to a specific offset account.
:::

*Example of a sales invoice*:

If the *Turnover Type* is already present in the *Item Registry*, in the sales documents, we will find it listed in the *Items* tab, in the *Sales Turnover* field; if it is not present in the item registry, it can be selected directly within the sales document via the appropriate combo box.

If it is not entered in the item registry and there is no memory of manually entering it in the sales document, the system will allow (if this choice is deemed appropriate) to take the default offset detail account that has been decided to set in the Contact Register > Accounting Data tab > Finance tab in the **Offset Cost/Revenue (defined)** field.