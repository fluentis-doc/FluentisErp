---
title: Filter Tab 
sidebar_position: 1
---

| Function | Extended Description |
| --- | --- |
| Search | Button to search for the mat. values related to the detail account to transfer to another detail account. |
| Accounting | Button to perform the accounting of the maturity values giro |

### GENERAL USE 

The mask consists of an upper filter section, within which it is mandatory to indicate the detail account to search for the mat. values to transfer, a selection grid for the mat. values, and at the bottom the setting of the accounting reason, the record/competence dates, and the detail account to reopen the mat. values. In particular, the accounting reason must include both the flag for closing mat. values and that for opening. The result will be the recording of the closure of the selected mat. values to reopen them, maintaining the same original references, but on the destination detail account.


### USE IN THE CONTEXT OF SUSPENDED VAT 
This procedure can also be used in the cases of suspended VAT (so-called cash VAT) which, as is known, provides that after one year from the invoicing of the active or passive operation, if collection or payment has not occurred (which would have made the VAT collectible or deductible), the VAT must be declared taxable or the tax on purchases deducted.

By checking the flag (at the bottom) **Show pending due dates not closed as of** and appropriately filling in the **Suspended VAT date** field, only the open mat. values related to operations with suspended VAT (identified via specifically configured ledger templates) on the date set in the aforementioned field will be extracted.

At this point, by selecting them and setting the desired ledger template, pressing **Accounting** will create the transfer record from the accounts used for the suspended VAT to the accounts for VAT due or to be credited, while leaving (this is the particularity of the commented procedure) the mat. values open. 
The ledger record of collection or payment will automatically record the transfer and will not trigger the automatic entry again for the VAT transfer.