---
title: Registers
sidebar_position: 1
---

The table manages a series of **information that must be associated to allow communication between Fluentis and DocFinance** (specifically refer to the specific documentation of DocFinance for the meaning of the fields to be associated and the required codifications); 

it consists of 4 sections:

**[Chart of Accounts](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**: in this section, it is necessary to indicate, for the bank detail accounts, the fields 'Bank' and 'RBN'(setting valid codes on DocFinance). The first indicates the relevant credit institution, while the second indicates the type of account (current account, subject to collection, ...) associated with the detail account itself: these two fields are visible and editable also within the bank register. For customer/supplier type detail accounts, it is also possible to manage the 'Deregulation' field from this mask, which can also be managed from the main mask of the register printing for each single detail account line;

**Due Register Flows**: in this section, a code for DocFinance must be assigned to each cash flow stream (refer to the basic documentation of the corresponding module). The same code can be assigned to multiple flow lines;

**[Payment Types](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types)**: in this section, the relevant corresponding code in DocFinance must be indicated for each payment type (the same code can be assigned to multiple lines). It is also possible to indicate a deregulation code for the payment type, which will be used in the data export for DocFinance;

**Company**: for each company, it is mandatory to specify the corresponding code for DocFinance. Companies without a code will be excluded from the data export/import procedures to/from DocFinance.


:::note[In-depth]
Example of standard derogability DocFinance

1    >>         RATING 1

2    >>         RATING 2

3    >>         RATING 3

4    >>         RATING 4

- Logic for exporting Fluentis accounts to DocFinance: the available field size in the file is 16 characters (Fluentis size 8+8 for account and detail account fields), the field is divided into 2 blocks, so for example, account xyz-001 is inserted in the file as ‘xyz     001     ’.

- The codes for Fluentis reasons (max 4 characters available in the DocFinance layout) will be mapped to DocFinance, on the accounting movements that are imported into Fluentis: it is recommended to set both the closing and opening flags for reasons in Fluentis (in case the item is not identified or is a deposit).

- We remind you that the creation of the Sbf bill (and therefore we will create the file in Fluentis to import it into DocFinance) as well as the creation of the default (for reopening the original items) remains managed in Fluentis: in particular, it is necessary to maintain the management of the effects portfolio in Fluentis to correctly manage the accruals of commissions on payment.

The accounting of defaults must foresee having a temporary bank account (which can be set in the parameters of the default module) because DocFinance sends the debit to the current account with a counter-entry to this same temporary account.

All other collection and payment movements involving banks will be managed in DocFinance.

:::