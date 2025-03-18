---
title: Import Records
sidebar_position: 3
---

Through this procedure, the import process of the ledger records file created by DocFinance is executed.

The import occurs through a *Folder Monitor* flow in Bizlink.

Therefore, the file with the records to be imported will be deposited in the folder monitored by the service, which will automatically import them.

At this point, the system will create the corresponding ledger records, closing the items indicated by DocFinance and accounting for the movements on the accounts mapped in the system (the ledger templates must have the same code between ERP and DocFinance).

The result of the import will be visible in the lower grid (while in the upper grid, the executed imports will be displayed), and with the commands on the ribbon bar, it will be possible to delete the import and view the details of any errors encountered during the import.

:::danger WARNING
The import of payments requires that the ID of the open item to be closed is passed in the DocFinance layout, thereby generating a payment linked to it by Fluentis.

If for any reason the ID of the item does not match that of the layout (manual modifications of any kind made after the export of items that were then handled in DocFinance), payments will be generated, but they will not be correctly linked to the items, which will remain open. It is possible to offset such items or to search for the imported payments in this situation, delete them, and manually recreate them by correctly linking the respective item. The operation is performed, after deleting the payment, by pressing the *New* button and then *Create from maturity values/payments* and selecting the item to be closed.
:::


:::note Info
[Link to the technical specifications **Docfinance**](/pdf/it-IT/TRACCIATI_DocFinance_28_Luglio_2021.pdf)
:::