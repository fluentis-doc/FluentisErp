---
title: Deregulation
sidebar_position: 2
---

Allows defining the codes for deregulation of financial flows, meaning essentially the degree of priority/importance of debts, as managed in DocFinance (the code in the management software must be the same as in DocFinance).

It should therefore be understood as a necessary and specific data of the DocFinance software.

:::note[Details]
**if the parameter for export is 0**; the derogability from the chart of accounts is considered by default:

    if it is null in the chart of accounts, however:

it is set to 01 if different from BO and RD (bank transfer and direct payment, fixed strings)

otherwise, the difference in days between the due date and the current date is read: if greater than 90, then 04 is set; if between 30 and 90 days, then 03 is set; and if between 0 and 30, then 02 is set; otherwise, 01 is set.

**if the parameter is 1 then it is read**:

    for suppliers from the derogability of the payment type
    if the derogability is empty (therefore when it is not defined in the supplier or it is not a supplier) then from the derogability of the chart of accounts

:::

It is possible to manage in the chart of accounts and pass to DocFinance as a statistical data also the field **Charge elements**.

available characters: 6, as filled in 

The first 4 characters from the expense item code of the cash flow account, if this is null then from the first 4 characters of the account (FSLedgerAccount.Code)

The second 2 characters are taken from the expense item of the account with the highest taxable VAT in the accounting record that created the entry (therefore it is managed only for the flow of entries, from the account of the VAT grid that has the highest taxable)

typical setting example:

0101      Customers Italy 

0102      Customers Abroad 

0201      Suppliers Italy 

0202      Suppliers Abroad 