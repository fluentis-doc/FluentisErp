---
title: Warehouse Purchase Delivery Note Record
sidebar_position: 1
keywords:
- DDT
- Warehouse (Magazzino)
---

The procedure is accessed via the path **Purchases > Purchase DDT > Procedures > Warehouse Purchase Delivery Note Record (Acquisti > DDT di acquisto > Procedure > Registrazione DDT di acquisto in magazzino)** and allows for the execution/restoration of warehouse loading operations for the items present in the DDT.

:::note NOTE
The Purchase DDT can also be registered in the warehouse using the button [*Automatic loading in warehouse*](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) found within the document.
:::

### Filter

It offers the possibility to enter filters to search for purchase DDTs, to select them, and then register them in the warehouse.

- **Warehouse posting date**: allows specifying the date related to the warehouse registration.

:::important Remember
If in the [Purchase DDT Parameters](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters#carico) > Load tab, the flag **Create recording with document date** is active, the warehouse registration will always be executed with the document date, ignoring the *Warehouse posting date* entered in this form.    
If the flag in the parameters is not active, the manually entered *Load date* in the header of the DDT will be used.   
If the *Load date* is not set, the warehouse registration will be created with the *Warehouse posting date* entered in this form.
:::

*Specific buttons*:

> **Search**: allows searching for DDTs to be registered in the warehouse.   
> **Record**: allows executing the warehouse loading of the DDTs selected in the upper grid.


### Parameters

If some item lines of the DDT do not have the warehouse and the reason for loading, this form gives the user the opportunity to choose how to handle the exceptions.

The available options are:

- **Do not register the entire DDT (Non effettuare la registrazione del DDT per intero)**: does not allow partial loading of the document;   
- **Ignore item without warehouse and template**: allows partial loading of the document;    
- **Accept the following data as warehouse and reason (Accettare come magazzino e causale i seguenti dati)**: ensures complete loading of the document. For all items found without a warehouse and reason in the selected DDTs, it sets the data entered immediately after, in the fields: *Warehouse* and *Template*.

:::important Remember
If in the [Purchase DDT Parameters](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters#carico) > Load tab the flag **Priority warehouse and load template** is active, the *Warehouse* and *Template* entered in the parameters will always be used, ignoring those present in the DDT for each item line.
:::

*Specific button*

> **Save Parameters**: allows saving the parameters set for the registration.

### Summary

In this tab, the user has the option to search, view, and cancel the registration operations performed, both those made using this procedure and those performed from within the document using the *Automatic loading* button.

The data in the lower grids, **DDT** and **Registration**, correspond to the selected loading registration in the upper grid (after filtering the data). In these two grids, it is possible to view the DDT and its warehouse registration by double-clicking on the row.

*Specific buttons*:
> **Search**: to search for loaded DDTs. The result of this procedure is displayed in the result grids.  
> **Delete records**: to restore the entire selected loading registration.   
> **Delete Delivery Note**: to delete the loading of a selected document in the loading registration. This operation will also result in the cancellation of the warehouse registration if it corresponds to only one DDT or the updating of its data if it corresponds to multiple DDTs.