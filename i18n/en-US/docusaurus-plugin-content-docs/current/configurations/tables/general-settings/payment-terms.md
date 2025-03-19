---
title: Payment Terms
sidebar_position: 10
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist on the linked page.
:::

The table contains the payment solutions to be used in the management system for calculating deadlines and open items.

:::danger Attention
The correct entry of a payment solution requires filling out both the upper grid and the detailed grid that defines the calculation of expiration days. Although the program allows saving without the detailed grid, a solution created this way will not be usable.
:::

### Upper Grid

**Solution / Description**: Represents the code and description of the payment extension to apply.

**Monthly settlement**: the active flag moves the payment extension to the end of the month after applying the number of days defined in the detailed grid below.

**Weekly settlement**: the active flag moves the payment extension to the following Friday after the date obtained by applying the number of days defined in the detailed grid below.

**Days**: number of days to add to the end of the month to obtain the fixed expiration day (the correct setting therefore requires defining the number of extension days below, even zero if applicable, then the end of month flag is read and finally additional days are added beyond the end of the month. To normalize the calculation, it is recommended to also combine the flag for the commercial calendar which makes all months 30 days).

**DL Art 62**: flag that identifies the two installments of 30 and 60 days that will be used for calculating payment deadlines in invoices containing perishable goods according to Art. 62 of the Law Decree of January 24, 2012, no. 1.

[**See client and supplier registries**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information)

**Country**: filter to make that payment solution visible only to companies in the database that have the specified nationality (useful as the table, being basic, is visible to all companies in the same database).


### Lower Grid

At the installment level, it is possible to distribute the taxable amount, VAT, and document expenses in percentage across the various installments (the % expenses cannot be directly applied in general accounting records). If the percentage is left at zero, ***Fluentis*** will distribute uniformly across the number of installments present.

**Commercial**: with this option, we can only enter multiples of 30 days in the related field, which will be managed as a single month.

A typical case is a deadline of 30 days end of month, when the invoice date is 01/31: if we apply 30 calendar days (thus without the 'commercial' flag), we will get a deadline on 03/02, and thus the end of the month will move the deadline to 03/31, that is substantially 60 days later and not 30 as intended by the name. If the commercial flag is present, the 30 days will actually be managed as 1 more month + end of month, so from 01/31 we will correctly go to 02/28 or 02/29 as per the calendar.

### Languages

For each payment type selected in the upper grid, it is possible to define descriptions in language: usable for customized prints.