---
title: Loading Unit Transfer Lists (version WPF and WMS)
sidebar_position: 2
---

### Loading Unit Transfer Lists 

:::important What it is for
The Loading Unit Transfer List of Fluentis is a tool designed to manage the movements of Load Units within its warehouses, offering a systematic and intuitive method for transferring goods. Unlike the Loading Unit Picking List, which is used for shipping to customers, the transfer list focuses on optimizing internal flows of Loading Unit between different warehouse locations.

To create a new transfer list, users simply need to enter the necessary details, such as the type of picking, the source warehouse, and the involved user. The selection of load units to be transferred can be easily performed through the interface, again with the help of the Loading Unit Help button, which assists in finding the Loading Unit to include in the transfer.

This procedure also allows viewing the items linked to specific customer orders, providing a clear overview of the details of the selected Loading Unit. Once the transfer list is completed, it is possible to generate a DDT (Transport Document) directly from the list itself, ensuring that all information related to the items and load units is accurately and completely reported. This approach not only simplifies the management of internal movements but also helps maintain precise inventory traceability.
:::

The **Loading Unit Transfer Lists** are very similar to the [Loading Unit Picking Lists / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), with the difference that they are used in the case of Loading Unit movements within the warehouse, while **Loading Unit Picking Lists / Packing list** are employed when shipping goods to a customer.

From the **Search** mask, it is possible to search for previously entered lists.

To create a new list click **New**.          
The mandatory data to be entered are:        
**Picking type**: enter the type of [picking](/docs/logistics/picking/picking-management) to be used;       
**User**: enter the coded employee creating the document;      
**User for conf.**: enter the employee authorized to confirm the list.    

After entering this data and any others if necessary, it is possible to save the Transfer List. Since this is a transfer, it is also necessary to enter the **Departure Warehouse** and the **Warehouse of destination**.       

*Specific buttons present in the detail form:*

> **Delete pallet**: allows you to delete a load unit present in the list;      
> **Rollback transfer**: allows you to rollback the confirmation transfer movement; thus, the loading movement created with the transfer confirmation is deleted and replaced with a loading movement at the departure warehouse;         
> **Help pallet**: allows you to add new load units through help.

*Specific buttons present in the filter:*

> **Loading Unit Management**: selecting a Transfer List and clicking this button opens the **Loading Unit Management** mask, where the Loading Unit available for transfer are proposed. It is possible to transfer the Loading Unit with the **Move pallet** button.             
> **DDT**: creates the DDT from the selected **Loading Unit Transfer List**.    

For all information on how to use this form from WMS, refer to the [Loading Unit Transfer Lists](/docs/logistics/wms/udc/loading-unit-transfer-list).

### Loading Unit Transfer Lists (version WMS)

:::important Purpose
The Loading Unit Transfer Lists feature of Fluentis WMS allows managing the movements of load units within warehouses, facilitating the organization and traceability of Loading Unit during transfers between different locations.        
This functionality enables the efficient creation and modification of transfer lists, thereby improving internal logistics management.
:::

This procedure is used to create transfer lists with load units.        
The **Loading Unit Transfer Lists** are very similar to the [Loading Unit Picking Lists / Packing list](/docs/logistics/udc/loading-unit-packing-lists/loading-unit), with the difference that they are used in the case of load unit movements within warehouses, while **Loading Unit Picking Lists / Packing list** are employed for shipping goods to a customer.          
In the filter form, it is possible to search for the lists of interest by filtering: by *type*, *date of entry*, *shipping date*, and also by the *status* of the picking list; once selected, it is possible to open the list with the **Open** button, where the user can modify the load units found in the **Detail Loading Unit** tab.       
In this tab, it is possible to select an existing load unit and delete it from the list with the **Delete pallet** button; or, add a new one simply by reading the corresponding barcode.            
Once the modifications are completed, it is necessary to save the list using the **Save** button.           
From the filter, it is also possible to create a new list with the **New** button.        
The *current date* and the *departure warehouse* indicated in the table [Parameters for Loading/Unloading by User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) are automatically proposed; thus, the operator will have to enter the data related to the destination warehouse and location.           
Additionally, upon entering the *picking type*, the list number is also proposed.        
At this point, the user can enter, in the *Detail Loading Unit* tab, the load units to be added to the list by reading their respective barcodes.          
Once the entry is completed, it will be sufficient to save the list with the appropriate **Save** button.
From the filter tab, it is also possible to: open a selected list in view-only mode with the **View** button and delete one with the **Remove** button.

The related warehouse movement will be generated only through the [Transfer Confirmation](/docs/logistics/wms/udc/confirm-transfer) procedure.

**Load/Unload Parameters** to be entered in the table [Parameters for Loading/Unloading by User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | TransferPickingList |

For this parameter, the warehouse template can be left empty.

:::note Note
If a single warehouse is associated for that user in the [Loading/Unloading Parameters by User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping), it is proposed by default; otherwise, if more than one is associated, none is proposed by default, and the user can only choose from those entered.
:::

For all information on how to encode the barcodes to be read in the **Input code** field, refer to the page related to the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).