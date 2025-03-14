---
title: Accounting invoices to be received
sidebar_position: 2
---

The procedure opens via the path **Accounting invoices to be received**.

With this procedure, it is possible to carry out the accounting of invoices to be received by reading the incoming goods documents.

### 1. Invoices to be Received from Movements (Fatture da ricevere da movimenti)

The accounting of invoices to be received considers, as data sources, one of three elements:

- **Purchase delivery note**
- **Receipt List**
- **Return of Work Account (Rientro di conto lavoro)**

Depending on the chosen document, the subsequent fields will filter based on the related records.

Essentially, **the recording of year-end invoices to be received can be performed on the documents present in the system that have not yet been invoiced**. Therefore, it is a procedure to be executed right at the beginning of the year on open documents, before proceeding with the documentation flow to close them.

When creating purchase invoices from one of these accounted documents, at the time of accounting the invoice, the system will normally register the invoice and then append a new opposite entry to the movement created by the goods receipt document.

At the base of the form, there are some management parameters for accounting:

- **Posting date**: this is the registration date to be assigned to the registration itself, typically 12/31 of the year;
- **Competence date**: this is the competence date to be assigned to the registration, typically 12/31 of the year;
- **Template**: this is the accounting reason to be used. It is a generic reason, not linked to VAT.

#### Specific Button (Pulsante specifico)  
> **Accounting**: allows executing the accounting of the selected documents.

### 2. Previous Entries (Precedenti)

The form presents a list of the accounting operations performed, in order to view and possibly undo them through the appropriate buttons. A double click in the grid of created entries allows for viewing the accounting entry.

**Accounting invoices to be received**: grid with the details of the executed operations. It is populated after the search procedure, and operations can be selected to apply the ribbon functions.

The data in the lower grids, **Recorded Delivery note** and **Ledger record** corresponds to the operation selected in the upper grid. A double click in the movements/entries section will allow viewing the related movement/accounting entry.

#### Specific Buttons (Pulsanti specifici)  
> **Rollback accounting**: to cancel the selected accounting.  
> **Restore Invoice**: to delete the entire operation selected in the first grid, along with all its details displayed in the two grids below.