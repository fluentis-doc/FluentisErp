---
title: Accounting
sidebar_position: 2
---

The mask shows on its upper part the search filters in order to identify the list of system invoices to be accounted.

In order to account an invoice, it has to fulfill some conditions: on its header it has to have set the 'Printed' flag; the invoice type has to have the general template for the accounting. There are more options for the accounting record that it is necessary to create: record date corresponding to the document date; VAT competence date corresponding to document date; use of cost template inserted for record of invoice in cost accounting.

At the base of the mask there are some accounting management parameters:

**Recording Date equal to Document Date**: this flag imposes the accounting of every single invoice to its issue date. If flag is not disabled, it is necessary to activate the following field on which it is possible to set a record fix date;

**Use the exchange from the exchange table**: through this flag it is possible to oblige system to verify the exchange table in order to use the exchange belonging to invoice/record date (or the last one inserted previously). If flag is not set, on the contrary it will be necessary to use field located on invoice header;

**Update Exchange on Document**: the field is active only if the previous flag is set. The related task refers the updating of exchange that is located on invoice header, subscribing the current one;

**Accrual VAT = Document Date**: the flag sets that VAT competence of movements has to be the same of invoice date one. In case that the user wants to use the possibility to invoice from 15 of the following month to the delivery date (invoicing differed), the flag has to be cut in order to take VAT competence on transport start date of delivery note, as required by VAT rules;

**Cost Accounting**: the field has to be set in order to manage the cost accounting. The accounting template field, that the user enables, is obligatory because it is associated to the invoice type and encoded by the cost template to be used.

The 'Invoices Accounting' procedure consists as follows:

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Search Invoice | Button to search invoices; all printed and not accounted invoices are proposed. |
| Automatic Accounting of Invoices | It performs the accounting of the selected invoices. |






