---
title: Vendor Payments Accounting
sidebar_position: 1
---

The form can be found under Treasury > Supplier Payments > Accounting > Vendor Payments Accounting (Tesoreria > Pagamenti Fornitori > Contabilizzazione > Contabilizzazione Pagamenti Fornitore).

From this mask, it is possible to account for the payments entered in the payment batches previously created.

Alternatively, you can use the integrated procedure [*Automatic Supplier Payment Creation*](/docs/treasury/vendors-payments/procedures/automatic-vendor-payments-creation), which generates the batch and accounts for the payments at the same time.

## How to account for payments

1. Use the upper part of the mask with filters to search for payments created but not yet accounted for: press the *Search (Ricerca)* button, and a grid will display all the detail lines of the payments present in the various batches, which could therefore be partially accounted for. The normal situation, however, is to filter by the references of the batch and account for it in bulk.

2. Enter at the bottom the management data of the operation: the **Ledger Records Template** to use for the registration, the **Registration and competence dates (Date di registrazione e competenza)**. If you expand the section, you can choose a **grouping criterion (criterio di raggruppamento)** for the accounting entry.

The default option, *bank grouping (raggruppamento banca)*, allows you to record one entry for each outgoing bank subaccount, which is the best management practice to simplify the reconciliation of bank movements from the printed statements. Alternatively, a *supplier subaccount grouping (raggruppamento per sottoconto fornitore)* is available, as well as a detailed payment-by-payment recording option (*Do not group (Non raggruppare)*).

The **subaccount** for recording the **active and passive discounts (abbuoni attivi e passivi)** entered in the batch is proposed based on the subaccount for *Casual profits* present in the accounting parameters.

**Date and document number (Data e numero documento)** are optional to enter as references for the header of the registration (this could be the batch number/date).

The **closure flag (chiusura partita)** (proposed by default, to be kept checked) correctly manages the payment in the aging report.

If the accounting reason requires managing the bank value date and a number of days has been defined within the bank registry for calculating it in relation to the used accounting reason, the field will be automatically managed in the resulting registration.

3. Press the **Accounting** button to start the procedure.

### The Recovery Tab 

allows you to view the accounting registration via a double click in the section related to registrations, as well as the partial/total cancellation of the selected payment operations. Cancellation will only be possible if the period is still modifiable (journal book printing and account closures have not been executed).

**Specific buttons**

**Search**: Searches the list of executed accounting registrations.

**Rollback accounting**: This button restores the entire selected accounting entry.

**Rollback Ledger Records**: This button restores the individual selected accounting entries.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>