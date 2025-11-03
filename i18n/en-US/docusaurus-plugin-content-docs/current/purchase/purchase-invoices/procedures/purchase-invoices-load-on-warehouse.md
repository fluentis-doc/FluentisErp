---
title: Warehouse Purchase Invoices Load
sidebar_position: 1
keywords:
- Purchase Invoice 
- Warehouse 
---

The procedure opens via the path **Purchases > Purchase Invoices > Procedures > Registration of Purchase Invoices into Warehouse**.

It allows for performing/restoring the operations of automatic registration into the warehouse of the items present in the invoice.

:::important Remember 
Invoices can only be moved to the warehouse if they are of type *Immediate*.
:::

:::tip NOTE 
If the document contains **Warning phantom items**, the procedure will take into account the *Supply Type* defined in the item's MRP Parameters:
- Items of type *Purchase* will not be included in the warehouse registration.   
- Items of type *Production* or *Subcontractor* will be recorded in the warehouse with the first level of the bill of materials.
:::

### Filter

In this tab, the user has the option to enter filters to search for purchase invoices, to select them, and then register them in the warehouse.   
Filtering can be done by: supplier, type of purchase invoice, from/to invoice number, from/to date.

- **Warehouse posting date**: allows specifying the date related to the registration in the warehouse.

:::important Remember 
If in the [Purchase Invoice Parameters](/docs/configurations/parameters/purchase/purchase-invoices-parameters) > Load tab the flag **Create recording with document date** is active, the warehouse registration will always be executed with the document date, ignoring the *Warehouse posting date* entered in this form.    
If the flag in the parameters is not active, the *Load date* manually entered in the invoice header will be used.   
If the *Load date* is not set, the warehouse registration will be created with the *Warehouse posting date* entered in this form.
:::

*Specific buttons*:

> **Search**: allows searching for invoices to register in the warehouse.  
> **Record**: allows executing the registration of the selected invoices in the warehouse, based on the loading algorithms and the parameters entered in the subsequent *Parameters* tab.

### Parameters

If some item lines of the invoices do not have the warehouse and reason for loading, through this mask, the user has the option to specify how to handle exceptions.

The available options are:

- **Do not perform the registration of the invoice in full**: does not allow partial loading of the document;
- **Ignore item without warehouse and template**: allows partial loading of the document; 
- **Accept the following data as warehouse and reason**: ensures full loading of the document. For all items found without warehouse and reason in the selected invoices, it sets the data entered immediately after, in the fields: *Warehouse* and *Template*.

*Specific button*

> **Save Parameters**: allows saving the parameters set for the registration.

### Summary

In this tab, the user has the option to search, view, and cancel the registration operations performed, both those executed by using this procedure and those made from within the document via the *Automatic load on warehouse* button.

The data in the lower grids, **Invoices** and **Record**, corresponds to the selected loading registration in the upper grid (after filtering the data). Additionally, in these last two grids, there is the option to view the invoice and its warehouse registration (double click on the row).

*Specific buttons*:
> **Search**: to search for loaded invoices. The result of this procedure is displayed in the result grids.  
> **Delete load**: to delete the entire selected loading registration.  
> **Rollback Invoice**: to delete the loading of a selected document in the loading registration. This operation will also result in the cancellation of the warehouse registration if it corresponds to a single document or the updating of its data if it corresponds to multiple invoices.