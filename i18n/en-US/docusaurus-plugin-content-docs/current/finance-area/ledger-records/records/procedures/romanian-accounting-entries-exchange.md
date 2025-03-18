---
title: Currency Adjustment
sidebar_position: 2
---

This mask allows you to automatically calculate, on a specific date, the exchange differences for currency accounts (such as receivables and payables or bank accounts) and to generate the transactions and accounting entries for adjustments.

**First, you must select a currency** (one at a time) for which the calculation will be performed, along with (using the radio buttons on the right) the type of calculation:

- Availability: considers balances (e.g., bank)
- Transactions: reads receivables and payables to customers/vendors
    - Active: customers
    - Passive: vendors

The account/detail account and the Division are optional filters to narrow down the search.

---

In the central grid that displays the details of the searched positions, the amount expressed in the foreign currency, the historical euro equivalent, calculated as the algebraic sum of all movements, the current equivalent recalculated at the exchange rate shown lower in the mask, and the positive or negative exchange difference are highlighted, account by account.

---

In the *Parameters* section, a series of parameters are defined for carrying out the accounting for the adjustment:

**Temporary**: allows generating the exchange difference as a provisional accounting entry;

**Exchange Rate**: used to calculate the updated value. It is automatically suggested by the program (from the currency exchange rate table), but can be changed by the user;

**Date** and **Document Number** and **Ledger template** related to the accounting entry to be adjusted. **The entered date also represents the date until which accounting entries are selected;**

**Revenue Accounts** and **Cost Accounts**: used to record the exchange differences;

---

In the *Restore* tab, it is possible to view and restore the results of the adjustment operations performed based on the set filters (From date/To date, the account).

#### Buttons

**Search**: Button to search for accounts to be adjusted based on the entered filters.  
**Accounting**: Button to carry out the adjustment operation on the selected accounts in the filters area and corresponding to the parameters entered in the relevant area.  
**Restore regularization**: Button to cancel the selected adjustment operations in the results grid.  