---
title: Introduction 
sidebar_position: 1
---

:::note[Info]
The practice of advancing invoices in the bank is a financial operation commonly used by companies to obtain immediate liquidity by anticipating the collection of invoices issued to customers. This operation, also known as invoice discounting, allows for converting accounts receivable into cash, thus improving the company's cash management and its ability to meet payments or investments without having to wait for customer payment times.

The company presents one or more invoices to the bank that have not yet been paid by the customers. The bank advances a portion of the invoice value, typically between 70% and 90%, withholding a share as a guarantee until the complete payment is settled. Once the customer pays the invoice, the bank retains a fee and credits the remaining balance to the company.

From an accounting perspective, the company records a liability to the bank for the amount advanced; when the customer pays, the company settles the debt with the bank and records the costs for fees, etc.
:::

With this module of Fluentis ERP, it is possible to manage the invoices advance lists to be presented to the bank net of fees and interests, and to account for both the presentation and the final collection.

Before entering new advance lists, it is necessary to first manage the ADVANCE TYPES Table.

In this table, the possible types of lists and their related parameters are defined.

![](/img/it-it/treasury/advance/advances-collections/image01.png)

**Code/Description**: Freely assignable by the user to qualify the type.

**Calculation type** (code / description): possible options are Taxable / Total: Document. Indicates whether the percentage advanced by the bank should be calculated with reference to the total invoice or only to the taxable amount.

**Advance invoice percent**: enter here the value of the percentage of the invoice that will be advanced by the bank.

![](/img/it-it/treasury/advance/advances-collections/image02.png)

**Acquisition Type**: possible options are Due Dates / Invoices. This option only controls how the data is displayed in the search mask for creating the new list, that is, whether the entire invoice or the individual due dates of the invoice will be selectable. In any case, from a data perspective, all due dates are managed even in the Invoices mode.

**Numeration**: it is necessary to set a numbering from the relevant numbering table for this type of document.

**Bank c/c**: (account / detail account description): enter here the detail account that will be used in the ledger records related to the bank account.

**Advance bank account**: enter the support account used to account for the bank advance.

![](/img/it-it/treasury/advance/advances-collections/image03.png)

**Passive interest account**: enter the account to be used for accounting interests.

**Charges bank account**: enter the account to be used for accounting bank fees.