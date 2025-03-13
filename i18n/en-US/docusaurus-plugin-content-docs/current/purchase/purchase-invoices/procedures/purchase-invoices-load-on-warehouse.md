---
title: Warehouse Purchase Invoices Load
sidebar_position: 1
keywords:
- Purchase Invoice (Fattura di acquisto)
- Warehouse (Magazzino)
---

The procedure opens via the path **Purchases > Purchase Invoices > Procedures > Registration of Purchase Invoices into Warehouse (Acquisti > Fatture di acquisto > Procedure > Registrazione fatture di acquisto in magazzino)**.

It allows for performing/restoring the operations of automatic registration into the warehouse of the items present in the invoice.

### Filter

In this tab, the user has the option to enter filters to search for purchase invoices, to select them, and then register them in the warehouse.   
Filtering can be done by: supplier, type of purchase invoice, from/to invoice number, from/to date.

- **Warehouse posting date**: allows specifying the date related to the registration in the warehouse.

:::important Remember (Ricorda)
If in the [Purchase Invoice Parameters](/docs/configurations/parameters/purchase/purchase-invoices-parameters#carico) > Load tab the flag **Create recording with document date** is active, the warehouse registration will always be executed with the document date, ignoring the *Warehouse posting date* entered in this form.    
If the flag in the parameters is not active, the *Load date* manually entered in the invoice header will be used.   
If the *Load date* is not set, the warehouse registration will be created with the *Warehouse posting date* entered in this form.
:::

*Specific buttons (Pulsanti specifici)*:

> **Search**: allows searching for invoices to register in the warehouse.  
> **Record**: allows executing the registration of the selected invoices in the warehouse, based on the loading algorithms and the parameters entered in the subsequent *Parameters* tab.

### Parameters

If some item lines of the invoices do not have the warehouse and reason for loading, through this mask, the user has the option to specify how to handle exceptions.

The available options are:

- **Do not perform the registration of the invoice in full (Non effettuare la registrazione della fattura per intero)**: does not allow partial loading of the document;
- **Ignore item without warehouse and template**: allows partial loading of the document; 
- **Accept the following data as warehouse and reason (Accettare come magazzino e causale i seguenti dati)**: ensures full loading of the document. For all items found without warehouse and reason in the selected invoices, it sets the data entered immediately after, in the fields: *Warehouse* and *Template*.

*Specific button (Pulsante specifico)*

> **Save Parameters**: allows saving the parameters set for the registration.

### Summary

In this tab, the user has the option to search, view, and cancel the registration operations performed, both those executed by using this procedure and those made from within the document via the *Automatic load on warehouse* button.

The data in the lower grids, **Invoices** and **Record**, corresponds to the selected loading registration in the upper grid (after filtering the data). Additionally, in these last two grids, there is the option to view the invoice and its warehouse registration (double click on the row).

*Specific buttons (Pulsanti specifici)*:
> **Search**: to search for loaded invoices. The result of this procedure is displayed in the result grids.  
> **Delete load**: to delete the entire selected loading registration.  
> **Rollback Invoice**: to delete the loading of a selected document in the loading registration. This operation will also result in the cancellation of the warehouse registration if it corresponds to a single document or the updating of its data if it corresponds to multiple invoices.