---
title: Bank Loans Management
sidebar_position: 2
---

### Introduction 

From this form, it is possible to search and enter new passive bank loans.

The management of the passive bank loan allows, in detail, to enter all related data, particularly the amortization plan of the bank loan, in order to subsequently proceed with the automatic accounting of the payment of installments on the scheduled due dates.

The main fields displayed in the mask are those present in the detail.

To enter a new bank loan, press **New**.

The first mandatory data to enter is the type of bank loan, through a combo box that refers to the appropriate table *Bank Loan Types* (also accessible with the right-click and Open form command).

### Bank Loan Types Table 

:::note Bank Loan Types Table Fields 
**Bank Loan Type**: code to recall the data

**Description of the Bank Loan type**: extended description of the data

**Flux Type / Description**: field to recall (in the *Financial Flux Types* table) which type of financial flow related to the Cash Flow processing will be associated with the bank loan installments, so they can be automatically represented in the cash flow processing

**Template**: ledger template associated to allow the automatic accounting of the installments
:::

### New Bank Loan Detail 

The other mandatory fields are the contract description and the main accounts for subsequent accounting operations

- Bank: to enter the bank account with which the installments will be paid
- Debit: to enter the debit account from which the payments of the installments will be debited, **on the principal** (e.g., "Passive Bank Loans")
- Interest: to enter the account on which the interest portion of each installment will be accounted for
- Costs: to enter the account where the commission or other costs of each installment will be accounted for

Other important fields include the disbursed amount, the currency (especially if different from Euro to activate the relevant exchange rate)

**EAPR:** interest rate applied to the Bank Loan, the data is used by the automatic calculation procedure of the amortization plan.

The Version field is connected to the **New Version** button present in the search form which allows, even after entering the amortization plan and the accounting of some installments, to make modifications in the plan while historicizing the previous situation.

In the detail grid, the amortization plan is inserted, composed of all the expected installments, filling in the date (which will be picked up in the accounting procedure), the principal portion, the interest portion, and the related commissions (in the **Cost** column).

The subsequent columns, highlighted in blue, are managed by Fluentis to highlight the total installment, the completed accounting via the related procedure, and the reference to the generated accounting record.

### Available Procedures in the Ribbon Bar 

The available procedures, namely Calculate Depreciation Plan, Change Date Rate, and Update Rate Expenses, are the same available for the management of leases, therefore please refer to the [**corresponding page**](/docs/finance-area/leasing/new).

### Accounting of Bank Loan Rate 

This occurs using the commands placed in the **Accounting** ribbon bar (and **Restore Accounting** to undo the operation).