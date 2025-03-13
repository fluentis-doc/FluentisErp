---
title: Introduction (Introduzione)
sidebar_position: 1
---

The supplier payment module is primarily used to create **payment lists (distinte di pagamento)**, typically for **bank transfers (bonifico bancario)**: the module, in fact, allows for the telematic sending of the **SEPA** (.xml) payment files for bank transfers.

It is also possible to manage files for **SDD lists (Sepa Direct Debit)**, a format that has replaced the previous R.i.d. lists used for direct debit authorizations in current accounts at the European level.

The module also allows for the telematic import of **payment notices for passive bank receipts (ricevute bancarie passive)** and then proceed with their authorization and payment, by sending the return flow with the authorized receipts to the bank, thus completing the procedure with the automatic accounting of executed payments.

You can create a new payment list by retrieving data from the open supplier accounts present, directly interfacing with the administrative module: it will be possible to proceed with the accounting of the related movements, closing the corresponding entries included in the payment list, and reversing the relative balance at the accounting level.

**Preliminary Tables to Use the Module (Tabelle Preliminari per utilizzare il modulo)**:

- **Records associated with bank account type (Anagrafiche associate a tipo conto Banca)**: necessary to address the payment list, the bank account type is populated during the Fast Start procedure.
- Accounting causalities to be used for accounting (Causali contabili da utilizzare per la contabilizzazione): these are the normal supplier payment ones created by the Fast Start procedure.
- Payment type table (Tabella Tipi pagamento): to be called in the payment list header, already populated by the Fast Start procedure.
- Supplier payment numbering (Numerazione pagamenti fornitori): to define the associated numerators, already populated by the Fast Start.

**Parameters**:  

[Supplier Payment Parameters (Parametri pagamenti fornitore)](/docs/configurations/parameters/treasury/vendor-payments-parameters).

---

| Function (Funzione) | Meaning (Significato) | Video Tutorial Link (Link Video Tutorial) |
| --- | --- | --- |
|  [Block passive entries (Blocco partite passive)](/docs/treasury/vendors-payments/procedures/block-passive-maturity-values)  | Button to proceed with mass management of blocks for passive entries. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=05s" target="_blank" rel="noopener noreferrer">YouTube Link </a> |
|  **Automatic supplier payment creation (Creazione automatica pagamento fornitori)** | Button for automatic creation of a supplier payment. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=2m25s" target="_blank" rel="noopener noreferrer">YouTube Link </a> |
|  [Payment support management (Gestione appoggi pagamenti)](/docs/treasury/vendors-payments/procedures/payments-support-management)  | Button to manage banking supports for payments. | <a href="https://youtu.be/DkxoWgTkvUg&amp;t=5m37s" target="_blank" rel="noopener noreferrer">YouTube Link </a> |
|  [Accounting (Contabilizzazione)](/docs/finance-area/professional-men/accounting/payments-accounting/filter)  | Button to proceed with the accounting of supplier payments. | <a href="https://youtu.be/CDCVq0iC29s&amp;t=5m40s" target="_blank" rel="noopener noreferrer">YouTube Link </a> |

---

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DkxoWgTkvUg" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>