---
title: Nomenclature Data
sidebar_position: 1
---

The 'Nomenclature Data' table consists of 4 sections:

**[Chart of Accounts](/docs/erp-home/registers/accounting/analytic-chart-of-accounts)**: in this section, it is necessary to indicate, for the bank detail accounts, the fields 'Bank' and 'RBN'. The first indicates the relevant credit institution, while the second indicates the type of account (current account, subject to collection, ...) associated with the detail account itself: these two fields are visible and editable also within the bank register. For customer/supplier type detail accounts, it is also possible to manage the 'Deregulation' field from this mask, which can also be managed from the main mask of the register printing for each single detail account line;

**Due Register Flows**: in this section, a code for DocFinance must be assigned to each cash flow stream (refer to the basic documentation of the corresponding module). The same code can be assigned to multiple flow lines;

**[Payment Types](/docs/configurations/tables/treasury/bills-portfolio-module-tables/payment-types)**: in this section, the relevant corresponding code in DocFinance must be indicated for each payment type (the same code can be assigned to multiple lines). It is also possible to indicate a deregulation code for the payment type, which will be used in the data export for DocFinance;

**Company**: for each company, it is mandatory to specify the corresponding code for DocFinance. Companies without a code will be excluded from the data export/import procedures to/from DocFinance.