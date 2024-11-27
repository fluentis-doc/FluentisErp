---
sidebar_position: 2
title: Periodical VAT Settlement - mixed reverse charge
---

There is a specific management system in place to further automate the handling of situations known as mixed reverse charge, meaning that in the same purchase invoice, part of the amount is invoiced under reverse charge and the other part under ordinary regime.

This set of settings **adds to** those already present, which previously provided (in a non-complete way) a solution for the mixed situation, particularly the flag *Exclude from automatic templates* present in the table of Rates and VAT method. The current configurations can be used instead of the aforementioned flag for a more complete and functional management.



The specific implementations for this management include:

- A **flag** in the **Rates and VAT methods** table
- A specific **Amount type** in the accounting template

### Rates and VAT Methods Table

Corresponding to the VAT code that will be designated for the portion invoiced under reverse charge, the **Reverse Charge** **flag** will be enabled, which marks the rate to be used for the reverse charge. This means that the VAT for this line will not be included in the total registration nor will it be counted for the entries (the assumption is that the supplier has the logic for calculating entries based on *origin amount + VAT*).

:::tip Note
The logic of the "new configurations" for the mixed situation is therefore reversed compared to the past; instead of identifying the portion not to be journaled because excluded from reverse charge, the portion that is in reverse charge will be indicated.
Thus, the reverse VAT will not be added to the total registration as it was before, nor paid to the supplier monetarily (this was already happening, but without needing to set the method of calculating open entries based on only origin amount, since even leaving the base setting on origin amount + VAT, the portion in reverse is not added to the open entry).
:::

### Accounting templates: Amount Type

In the accounting template that will be used to account for the reverse charge, the amount type *Total doc./record* is valued with origin amount + ordinary VAT - reverse VAT (because the reverse VAT is deducted through the above flag and in this logic should not be added to the total since it does not come from the supplier invoice and therefore is not to be paid).

A new amount type *Reverse Charge* is provided, which is valued with the reverse VAT and is therefore to be used for the transitional VAT line and for the two automatic VAT lines.

:::note Note
The amount type *Reverse Charge* does not consider non-deductible VAT (also for alignment with the amount I have with the supplier). The non-deductible portion thus ends up as a cost in the first registration and then goes into the payable VAT of the journal entry, as VAT to be paid.
:::

The reverse templates thus become: 

![](/img/it-it/finance-area/other/mixrev1.png)

![](/img/it-it/finance-area/other/mixrev2.png)