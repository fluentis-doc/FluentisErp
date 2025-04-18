---
title: Vendor Payments Accounting
sidebar_position: 1
---

The form can be found under Treasury > Supplier Payments > Accounting > Vendor Payments Accounting.

From this mask, it is possible to account for the payments entered in the payment batches previously created.

Alternatively, you can use the integrated procedure [*Automatic Supplier Payment Creation*](/docs/treasury/vendors-payments/procedures/automatic-vendor-payments-creation), which generates the batch and accounts for the payments at the same time.

## How to account for payments

1. Use the upper part of the mask with filters to search for payments created but not yet accounted for: press the *Search* button, and a grid will display all the detail lines of the payments present in the various batches, which could therefore be partially accounted for. The normal situation, however, is to filter by the references of the batch and account for it in bulk.

2. Enter at the bottom the management data of the operation: the **Ledger Records Template** to use for the registration, the **Registration and competence dates**. If you expand the section, you can choose a **grouping criterion** for the ledger record.

The default option, *bank grouping*, allows you to record one entry for each outgoing bank detail account, which is the best management practice to simplify the reconciliation of bank movements from the printed statements. Alternatively, a *supplier detail account grouping* is available, as well as a detailed payment-by-payment recording option (*Do not group*).

The **detail account** for recording the **Allowance received and granted** entered in the batch is proposed based on the detail account for *Casual profits* present in the accounting parameters.

**Date and document number** are optional to enter as references for the header of the registration (this could be the batch number/date).

The **closure mat. value** (proposed by default, to be kept checked) correctly manages the payment in the aging report.

If the ledger template requires managing the bank value date and a number of days has been defined within the bank registry for calculating it in relation to the used ledger template, the field will be automatically managed in the resulting registration.

3. Press the **Accounting** button to start the procedure.

### The Recovery Tab 

allows you to view the accounting registration via a double click in the section related to registrations, as well as the partial/total cancellation of the selected payment operations. Cancellation will only be possible if the period is still modifiable (journal book printing and account closures have not been executed).

**Specific buttons**

**Search**: Searches the list of executed accounting registrations.

**Rollback accounting**: This button restores the entire selected ledger record.

**Rollback Ledger Records**: This button restores the individual selected ledger records.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>