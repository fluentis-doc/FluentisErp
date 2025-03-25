---
title: Credit Situation
sidebar_position: 3
---

The **Credit Situation** screen allows for the creation and storage of a calculation of customer credit limit usage for each customer account and thus visualize a historical series. In the list of calculations displayed in the screen, lines with discrepancies will be shown in red.

To process a new calculation, press the **New** button.

Upon opening the detail screen, enter the customer account to be analyzed.

Insert or modify the start date of the calculation, which represents the date from which the data used in the calculation is read.

Then press the **Calculate** button.

The calculation can be saved with the **Save** command.

The **Referred date** constitutes the day to which the available credit limit is calculated.

WARNING: In the case, for example, of bank receipts issued and presented for collection, even if these have been credited with the appropriate accounting procedure, for the purposes of customer credit limits, the amount is still considered committed until the due date of the transaction that generated the bank receipt. Therefore, by modifying the reference date of the calculation beyond this date, you may notice that the value of the credit limit is released for the corresponding amount.

Within the sales documents, such as the customer order, the calculation of the available credit limit (visible in the header) is always tied to the current date, without the possibility of modifying the reference date. Therefore, a new order, if over the credit limit, will not be fulfillable (except through an authorization process) until the day of the expiration of the hypothetical effect that releases a sufficient amount.

The **Update customer credit** button updates the registry of the customer entered in the calculation header and sets in the registry the value read in the **Credit evaluation** field.

This field, in turn, is populated by the Calculate command, applying the value of the **Credit evaluation multiplier** field (e.g., 1) to a (weighted) calculation based on the revenue for the period considered for that customer.

In detail, the calculation is developed as follows:

“12M Revenue” / 365 * “Multiplier” * “Average Payment Terms”, where the latter are in turn calculated based on the invoice due dates of the past 12 months, as “(sum(Due Amount * Payment Days))/(total sum of due dates).

**OTHER FORM FIELDS:**

**12M Revenue** = revenue for the previous twelve months

**Mat. values** = amounts due and respective balances

**Debits / Credits** = collection movements from provisional records (informational data)

**Debits / Credits Balance** = accounting movement if the accounting mode has been chosen

**To Be Accounted** = not yet accounted for (credit because there are Credit Notes); Advances are included for invoices with advance lines

**Delivery Note to Invoice** = (credit if return Delivery Note)

**Value and Number of Unpaid** = (statistical, not included in the calculation)

**Expired** = how much of the open transactions are overdue