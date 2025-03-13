---
title: DDT Shipment from Warehouse (Scarico DDT da magazzino)
sidebar_position: 1
---

The mass procedure is opened through the path **Sales > DDT > Procedures > DDT Shipment from Warehouse (Scarico DDT da magazzino)**.

This procedure allows you to execute/restore automatic shipment operations from the warehouse of the items present in the DDT.    
Please note that this procedure can also be executed within the [Header](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) of the single DDT using the button [Automatic Shipment (Scarico automatico)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn). 

The mass procedure consists of three tabs, which we will analyze below.

### Filter (Filtro)

In this tab, the user has the ability to search for and transfer the DDT that have set the *Printed* flag internally and are therefore ready for shipment.     

*Specific Buttons*:

> **Search**: allows you to search for DDT to be shipped.  
> **Unload**: allows you to execute the shipment of the selected DDT from the warehouse, based on the shipment algorithms and the parameters entered in the following *Parameters* tab.

### Parameters (Parametri)

In this form, the user can specify how to handle exceptions for the item lines.

In this case, if the DDT lines have not specified the warehouse and the reason for the shipment, the available options are:

- **Do not perform the shipment of the entire DDT**: does not allow partial shipment of the DDT.     
- **Skip the item without warehouse and reason**: allows partial shipment of the document.       
- **Accept the following data as warehouse and reason**: for all items found without warehouse and reason in the selected DDT in the filter part, sets the data entered immediately afterwards, in the fields: *Warehouse* and *Template* (ensures complete shipment of the document).

*Specific Button*

> **Save Parameters**: allows you to save the parameters set for the registration.

After selecting the DDT (from the *Filter* tab) and setting the parameters, the DDT can be shipped using the *Unload* button.

### Summary (Riepilogativo)

In this tab, the user has the ability to search, view, and cancel executed shipment operations that meet specific conditions for canceling warehouse registrations.

The data in the lower grids, **DDT** and **Record**, corresponds to the selected shipment registration in the upper grid (after filtering the data). Additionally, in these last two grids, there is the possibility to view the DDT and its warehouse registration (double click on the row).

*Specific Buttons*:
> **Search**: to search for shipped DDT. The result of this procedure is displayed in the results grid.  
> **Cancel**: to completely delete the selected shipment operations in the results grid, if they meet the specific conditions for canceling warehouse registrations.  
> **Restore DN**: to delete the selected shipment operations in the results grid, for the DDT in use in the details grid.