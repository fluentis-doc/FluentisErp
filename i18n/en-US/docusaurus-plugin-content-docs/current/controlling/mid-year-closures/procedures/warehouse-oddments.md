---
title: Inventory accounting
sidebar_position: 2
---

Within the mid-year closing module, after creating a mid-year closing, it is possible to automatically value the initial/final inventory balances.

Once the form is opened, we will manage the date range to use, the type of stock to consider (*Positive/Negative*), the cost calculation type (*Average cost, Latest cost, FIFO yearly rise, LIFO yearly rise, Management Area, By effective cost batches*), and the ledger template to use for the records to be created. The presence or absence of the Controlling flag will manage the operations in two different ways:

- If the flag *is not present*, **FluentisERP** will create the records for the initial and final balances on the start and end dates of the Mid-Year Closing, and will insert them at the end of the other adjusting records of the closure itself.
- If the flag *is present*, **FluentisERP** will create the records for the initial and final balances of each individual month within the date range relevant to the Mid-Year Closing, and will insert them as Off-balance Records of the Area associated with the closure itself (therefore, these will not be records of the closure, but records valid only for Controlling).

:::tip Note 
The processing performs a test on the presence or absence of this type of records, and thus, if they are already present, it asks whether to delete and recreate them or if they should be added (as in the case where only some warehouses are selected and not all, through the available dropdown). If both Area records for controlling and Adjustment records in the Closure are desired, it is sufficient to run the procedure *first* with the Controlling flag active and *then* with the flag deactivated.
:::