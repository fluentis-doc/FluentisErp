---
title: Management of Returns and Credit Notes (Gestione Resi e Note di Accredito)
sidebar_position: 3
--- 

Managing **supplier returns (resi a fornitore)** and **credit notes (note di accredito)** allows for the administration of the return flows of goods and the related financial adjustments with suppliers.    

:::important Remember (Ricorda)
**Supplier returns (resi fornitore)** differ from other types of invoices because the *Invoice nature* (present in the table [Types of Purchase Invoices](/docs/configurations/tables/purchase/purchase-invoices-type)) is **Supplier Credit Note**. Similarly, the return delivery note (DDT) will have [Nature (Natura)](/docs/configurations/tables/purchase/purchase-delivery-notes-type) **Return**. 
:::

### Creating the Supplier Return (Creazione del Reso fornitore)

When a product is returned to a supplier, the process begins with the creation of a return document in the management system. This document can be entered manually (by creating a return DDT or a credit note and manually entering the items to be reversed), or automatically through the *Transfer* procedure available in the document search. 

In the ribbon bar of the [Purchase Invoice Search (Ricerca fatture di acquisto)](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) there is a **Reversal turnover** button (similarly, in the [Purchase DDT Search (Ricerca DDT di acquisto)](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note) there is a **Transfer** button). This button allows the creation of a return linked to the selected purchase invoice.    
Once the invoice to be reversed is selected and the button is pressed, the **Document Reversal** form opens, where it is necessary to check the items to be returned and indicate the [document type (tipologia)](/docs/configurations/tables/purchase/purchase-invoices-type) to create (only documents with Nature *Credit Note from Supplier* will be proposed). Once the procedure is confirmed, the reversal invoice will be created, visible from the Invoice Search. The invoice is created with the current date and will have the total amount of the items to be reversed taken from the original invoice.    

If a **Return DDT (DDT di reso)** is created, the system can automatically generate the corresponding credit note using the procedures for [Valuing Purchase DDT (Valorizzazione DDT di Acquisto)](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) or through [DDT Fulfillment (Evasione DDT)](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) from within a new *Credit Note*. 

Before being finalized, the credit note can be checked and modified if necessary. Upon saving a credit note, the modification of signs for all associated expense types is proposed, but it is possible to freely decide whether to accept the modification or not.    

Returns also allow the use of various **Reports** provided by the module; you just need to filter by the selected document type. 

### Stock Update (Aggiornamento delle Scorte)

After registering the reversal document in the warehouse, the system automatically updates the warehouse stocks to reflect the return of goods, decreasing the stock and availability of the returned items.    

### Accounting Update (Aggiornamento della Contabilità)

Once accounted for, the **credit note (nota di accredito)** updates the accounting records, reducing the amount owed to the supplier. This can result in a decrease in the open balance or a refund, depending on the contractual agreements with the supplier.    

:::note Note (Nota)
Starting from version 607, **Credit Notes (Note di accredito)** are managed with a negative sign. Upon saving the invoice, **Fluentis** will change the sign of the items and expenses, notifying the user with a pop-up.    
The management of the document accounting does not change from the past, as the negative document continues to be deducted from the VAT register (previously, it was converted to negative upon accounting). Sending the document to the SDI by generating the .xml file involves a new sign change in accordance with the technical specifications for electronic invoicing.   
The modification in the comment was necessary, especially for better management of statistics and related processing.
:::