---
title: Payment types
sidebar_position: 7
---
:::tip[Fast Start (FAst Start)]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

In case you want to configure manually, refer to the checklist of the linked page.
:::

The table contains the payment types to be used in the management system.

It allows you to insert new records or search for existing ones to view, modify, or delete them.

To insert new records, click on the first empty row in the upper grid or press the **New** button. 

## Payment Type (Tipo pagamento)

**Payment**: is the alphanumeric identification code;

**Description**: is the description of the payment, normally reported in the various prints of the active/passive cycle;

**Stamp amount**: amount of the stamp duty;

**Payment Percentage (Percentuale Pagamento)**: allows you to associate a type (calling it from the Discounts Types table) and the related discount percentage to the item lines of the document in relation to the payment type; For example, it is possible to define a 5% discount if the cash payment type is used.

:::note Note (Nota)
This is a discount that reduces the taxable amount of the line, along with other discounts derived from price lists and commercial conditions in the registry.
:::

**Financial discount type / Financial discount value (Tipo sconto finanziario / Valore sconto finanziario):** linked to the invoice due date, which therefore does not affect the document total but is applied at the time of the collection registration.


**Bill nature**: allows you to define the type of effect possibly connected or of another type of payment. Currently, the field has only informational value without particular automations associated, except for the bank receipt type which identifies the payment type suitable for the subsequent management of effect creation.

**Intra-community service code (Cod. intra serv.)**: payment code to be included in the intrastat declarations.

**Code for electronic invoices**: identification code of the payment type for electronic invoices and invoices to public administration (e.g. MP01, MP02, etc... see ministerial instructions for completing electronic invoices).

**Country**: filter to make that payment type visible only to the companies in the database that have the specified nationality (useful as the table, being basic, is visible to all companies in the same database).

### Languages (Lingue)

For each payment type selected in the upper grid, it is possible to define descriptions in different languages: usable for customized prints.

### Effect Types (Tipi effetti)

For each payment type selected in the upper grid, it is possible to pre-set the type of effect to be created from the transaction/due date in the *Bills portfolio* module.

:::danger Attention (Attenzione)
The payment-effect association serves to ensure that only coherent transactions for effect creation are displayed in the effect creation screen. For example, the correct setting might be to associate the RiBa payment type with the Bank Receipt effect type, and the Promissory Note payment type with the Promissory Note effect type; in this way, transactions opened with the Bank Transfer payment type will not be displayed in the effect creation screen from transactions or due dates, avoiding generating inconsistent data.
:::

For everything not detailed in this document about the common operation of forms, refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).