---
title: Currency Adjustment (Regolarizzazione Valuta)
sidebar_position: 2
---

This form allows you to automatically calculate, at a certain date, the exchange rate differences for currency accounts (such as receivables and payables or bank accounts) and to generate the entries and accounting records for the adjustment.

**First, you need to select a currency** (one at a time) for which the calculation will be performed, along with (using the radio buttons on the right) the type of 
calculation:

- Availability: considers balances (e.g., bank)
- Transactions: reads receivables and payables towards customers / suppliers
    - Active: customers
    - Passive: suppliers

The account / subaccount and Division are optional filters to narrow down the search.

---

In the central grid that displays the details of the searched positions, the amount expressed in the foreign currency, the historical euro equivalent calculated as the algebraic sum of all movements, the current equivalent recalculated at the exchange rate shown further down in the form, and the positive or negative exchange difference are highlighted, account by account.

---

In the *Parameters* area, a series of parameters are defined that will be used for the accounting of the adjustment:

**Is Provisory**: allows generating the exchange difference as a provisional accounting entry;

**Exchange**: with which the updated value is calculated. It is automatically suggested by the program (from the currency exchange table) but can be changed by the user;

**Date** and **Document Number** and **Ledger template** related to the accounting record to be adjusted. **The entered date also represents the date until which the accounting records are selected;**

**Revenue (Conti di ricavo)** and **Cost**: used to record exchange differences;

---

In the *Restore* tab, you can view and restore the results of the adjustment operations performed based on the set filters (From date/To date, the account).

| Function (Funzione) | Meaning (Significato) |
| --- | --- |
| Search (Cerca) | Button to search for accounts to be adjusted based on the entered filters. |
| Accounting (Contabilizzazione) | Button to execute the adjustment operation for the selected accounts in the filter area and according to the parameters set in the related area. |
| Restore Adjustment (Ripristina regolarizzazione) | Button to cancel the selected adjustment operations in the results grid. |