---
title: Document Types 
sidebar_position: 25
---

:::tip[FAst Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

In case you want to configure manually, please refer to the checklist of the linked page.
:::

This table manages the types of documents associated with General Ledger reasons and, consequently, with the accounting records or interim or managerial records that refer to these reasons.

:::tip Note
The **Fast Start** creates document types by associating them with the relevant geographical location, in order to have a list of documents for Italy or Romania, etc. 
The object indeed includes the country field, which can be viewed in the grid from the object navigator: for backward compatibility, it is also possible to have document types *without* a link to a country, so they are visible in all companies in the database indiscriminately.
Every new entry, anyway, will adopt the country of the active company.
:::

The available fields are:
- *Code Type* is the code of the type
- *Description type*, the description
- *Invoice*
- *Official receipt*
- *Parcel*
- *Account settlement*
- *Transfer*
- *General*
- *Credit note*: for this document type, ***FluentisERP*** will check that the accounting entry has negative lines in the VAT section
- *Debit note*
- *Variation note*: for simplified credit notes of VAT only (TD08)
- *Summary*
- *Selfbilling*
- *Collection*
- *Payment*
- *Code for electronic invoices*: is the code that will be used to populate the Sdi file (TD01, TD04, etc.)

:::tip Note
In the grid below, it is possible to attach a specific numerator for the Document Type: it will be used for an internal, unofficial numerator of the accounting records, not directly visible in the interface.
:::