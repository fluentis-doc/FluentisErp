---
title: UDC Transfer Lists (UDC Liste di Trasferimento) (version WPF and WMS)
sidebar_position: 2
---

### UDC Transfer Lists (UDC Liste di Trasferimento) (versione WPF)

:::important What it is for
The UDC Transfer List of Fluentis is a tool designed to manage the movements of Load Units (UDC) within its warehouses, offering a systematic and intuitive method for transferring goods. Unlike the UDC Picking List, which is used for shipping to customers, the transfer list focuses on optimizing internal flows of UDC between different warehouse locations.

To create a new transfer list, users simply need to enter the necessary details, such as the type of picking, the source warehouse, and the involved user. The selection of load units to be transferred can be easily performed through the interface, again with the help of the UDC Help button, which assists in finding the UDC to include in the transfer.

This procedure also allows viewing the items linked to specific customer orders, providing a clear overview of the details of the selected UDC. Once the transfer list is completed, it is possible to generate a DDT (Transport Document) directly from the list itself, ensuring that all information related to the items and load units is accurately and completely reported. This approach not only simplifies the management of internal movements but also helps maintain precise inventory traceability.
:::

The **UDC Transfer Lists (Liste di Trasferimento UDC)** are very similar to the [UDC Picking Lists / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), with the difference that they are used in the case of UDC movements within the warehouse, while **UDC Picking Lists / Packing list** are employed when shipping goods to a customer.

From the **Search** mask, it is possible to search for previously entered lists.

To create a new list click **New**.          
The mandatory data to be entered are:        
**Picking type**: enter the type of [picking](/docs/logistics/picking/picking-management) to be used;       
**User**: enter the coded employee creating the document;      
**User for conf.**: enter the employee authorized to confirm the list.    

After entering this data and any others if necessary, it is possible to save the Transfer List. Since this is a transfer, it is also necessary to enter the **Departure Warehouse (Magazzino di partenza)** and the **Warehouse of destination**.       

*Specific buttons present in the detail form:*

> **Delete pallet**: allows you to delete a load unit present in the list;      
> **Rollback transfer (Rollback trasferimento)**: allows you to rollback the confirmation transfer movement; thus, the loading movement created with the transfer confirmation is deleted and replaced with a loading movement at the departure warehouse;         
> **Help pallet**: allows you to add new load units through help.

*Specific buttons present in the filter:*

> **Loading Unit Management**: selecting a Transfer List and clicking this button opens the **UDC Management** mask, where the UDC available for transfer are proposed. It is possible to transfer the UDC with the **Move pallet** button.             
> **DDT**: creates the DDT from the selected **UDC Transfer List (Liste di Trasferimento UDC)**.    

For all information on how to use this form from WMS, refer to the [UDC Transfer Lists](/docs/logistics/wms/udc/loading-unit-transfer-list).

### UDC Transfer Lists (UDC Liste di Trasferimento) (versione WMS)

:::important What it is for
The UDC Transfer Lists feature of Fluentis WMS allows managing the movements of load units within warehouses, facilitating the organization and traceability of UDC during transfers between different locations.        
This functionality enables the efficient creation and modification of transfer lists, thereby improving internal logistics management.
:::

This procedure is used to create transfer lists with load units.        
The **UDC Transfer Lists (Liste di Trasferimento UDC)** are very similar to the [UDC Picking Lists / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), with the difference that they are used in the case of load unit movements within warehouses, while **UDC Picking Lists / Packing list** are employed for shipping goods to a customer.          
In the filter form, it is possible to search for the lists of interest by filtering: by *type*, *date of entry*, *shipping date*, and also by the *status* of the picking list; once selected, it is possible to open the list with the **Open** button, where the user can modify the load units found in the **Detail Loading Unit** tab.       
In this tab, it is possible to select an existing load unit and delete it from the list with the **Delete pallet** button; or, add a new one simply by reading the corresponding barcode.            
Once the modifications are completed, it is necessary to save the list using the **Save** button.           
From the filter, it is also possible to create a new list with the **New** button.        
The *current date* and the *departure warehouse* indicated in the table [Parameters for Loading/Unloading by User (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) are automatically proposed; thus, the operator will have to enter the data related to the destination warehouse and location.           
Additionally, upon entering the *picking type*, the list number is also proposed.        
At this point, the user can enter, in the *Detail Loading Unit* tab, the load units to be added to the list by reading their respective barcodes.          
Once the entry is completed, it will be sufficient to save the list with the appropriate **Save** button.
From the filter tab, it is also possible to: open a selected list in view-only mode with the **View** button and delete one with the **Remove** button.

The related warehouse movement will be generated only through the [Transfer Confirmation (Conferma trasferimento)](/docs/logistics/wms/udc/confirm-transfer) procedure.

**Load/Unload Parameters** to be entered in the table [Parameters for Loading/Unloading by User (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

For this parameter, the warehouse reason can be left empty.

:::note Note
If a single warehouse is associated for that user in the [Loading/Unloading Parameters by User (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping), it is proposed by default; otherwise, if more than one is associated, none is proposed by default, and the user can only choose from those entered.
:::

For all information on how to encode the barcodes to be read in the **Input code** field, refer to the page related to the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).