---
title: Picking Lists/Packing List (WPF and WMS version) (Liste di prelievo/Packing list (versione WPF e WMS))
sidebar_position: 1
---

### Picking Lists/Packing List (WPF version) (Liste di prelievo/Packing list (versione WPF))

:::important Purpose (A cosa serve)
The Fluentis UDC Picking List / Packing List offers an innovative method for managing the picking of load units, in contrast to the traditional picking procedure based on individual items. This feature is particularly useful when shipping goods to a customer, allowing for the grouping of items within predefined load units.

Creating a new picking list simply requires entering information such as the type of picking, the warehouse, and the user. Operators can then select already created and loaded load units directly in the "Load Unit Details" tab, thus facilitating the association of items to be shipped with the corresponding customer order. Thanks to the "Help UDC" button, users can easily navigate among the available load units, making the selection process quick and efficient.

UDC picking lists not only simplify the preparation of shipments but also allow for the direct generation of transport documents such as DDTs and invoices, containing all the necessary information regarding the items and load units involved in the shipment. This integration ensures a smoother and more effective management process in logistics and shipping.
:::

With **picking lists (liste di prelievo)**, it is possible to create a picking of load units, as opposed to normal picking which consists of single items.        
From the **Search** form, previously entered lists can be searched.    
To create a new List, click **New**.   

The mandatory data to be entered are:         
**Picking type**: enter the type of [picking](/docs/logistics/picking/picking-management) to be used;       
**User**: enter the coded employee who creates the document;      
**User for conf.**: enter the employee who has the right to confirm the list.      

After entering the necessary data, it is possible to save the Picking List.       
With the ribbon bar button **Help UDC**, you can open the form to select the UDCs to be picked.             
The search can be made on load units linked to customer orders (by enabling the **Search on sales order** flag), thus, for each customer order, we can view the items that comprise it and if they have been previously entered into a load unit, in the table below we can see all the details related to the UDC that contains them. Once the relevant UDCs have been selected, they are added to the list.     
Alternatively, by disabling the **Search on customer orders** flag, load units can also be searched among all those created, even if not linked to a customer order, and in the same way, they can be selected and added to our picking list.         
In the *Detail* grid, only UDCs in loaded status will appear, after which it is possible to save the *List* and close it.       
Returning to the *Search Picking Lists* form, the List will be present with status **Stopped**. It is necessary to unload the UDCs of the List (see *Specific buttons* below) to change to status **Controled**. Only with the latter status will the ribbon bar buttons **Invoice** and **DDT** be enabled.    

*Specific buttons: (Pulsanti specifici:)*
> **Invoices**: creates the invoice from the selected *List*; in the outgoing form, the [Invoice Type (Tipo Fattura)](/docs/configurations/tables/sales/invoices-type) to be created and any grouping to adopt are requested; the invoice is created already *Unloaded (Scaricata)* (to avoid the risk of double unloading).      
> **DDT**: creates the DDT from the selected *List*; in the outgoing form, the [DDT Type (Tipo DDT)](/docs/configurations/tables/sales/delivery-notes-type) to be created and any grouping to adopt are requested; the DDT is created already *Unloaded* (to avoid the risk of double unloading).   
> **Loading Unit Management**: selecting a *Picking List* and clicking this button opens the **Manage UDC** form where the UDCs of the list are pre-filtered. In this form, UDCs can be managed at the warehouse level with the various ribbon bar buttons.       

For all information on how to use this form from WMS, refer to the [Picking Lists/Packing List](/docs/logistics/wms/udc/loading-unit-picking-list).

### Picking Lists/Packing List (WMS version) (Liste di prelievo/Packing list (versione WMS))

:::important Purpose (A cosa serve)
The Picking Lists / Packing List function of the Fluentis WMS allows for the creation of a picking of load units, facilitating the preparation of shipments directly linked to customer orders. 
With this tool, users can effectively select, modify, and manage UDCs, optimizing the picking process and ensuring correct documentation for shipments.
:::

This procedure is used for creating picking lists with load units.     

With the **UDC Picking Lists / Packing list** it is possible to create a *picking* of load units, unlike the normal picking procedure that creates a picking list made up of single items.    
UDC picking lists are used when goods are to be shipped to a customer, while in the case of transferring UDCs within warehouses, it is advisable to use [UDC Transfer Lists (Liste di Trasferimento UDC)](/docs/logistics/wms/udc/loading-unit-transfer-list).    

In the filter form, lists of interest can be searched by filtering: by insertion date, shipping date, and also by the status of the picking list; once selected, it is possible to open the list with the **Open** button, within which the user has the option to modify the load units contained in the *UDC Detail* tab.      
In this tab, it is possible to select an existing load unit and delete it from the list with the **Delete pallet** button; or, to add a new one simply by scanning the corresponding barcode.      
Once modifications are complete, it is necessary to save the list using the **Save** button.       

From the filter, a new list can also be created with the **New** button.       
By default, the current date and the warehouse indicated in the Load/Unload Warehouse Parameters table for the user are proposed; furthermore, when entering the picking type, the list number is also proposed.
At this point, the user can enter, in the *UDC Detail* tab, the load units to be added to the list by scanning the corresponding barcodes. Once the entry is complete, it will suffice to save the list with the appropriate button.

**Load/Unload Parameters** to be entered in the [Load/Unload Parameters for user (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | PickingList |

For this parameter, the warehouse reason can be left empty.

:::note Note
If in the [Load/Unload Parameters for user (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) a single warehouse is associated for that user, it will be proposed by default; otherwise, if there are multiple warehouses associated, none will be proposed by default, and the user can only choose among those entered.
:::

For all information on how to encode the barcodes to be scanned in the **Input code** field, refer to the page regarding the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### UDC Transfer Confirmation (WMS version) (Conferma trasferimento UDC (versione WMS))

:::important Purpose (A cosa serve)
This procedure is used to search for and confirm an existing [UDC Transfer List (Lista di Trasferimento UDC)](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) to perform the warehouse movement.
:::

The **UDC Transfer Confirmation** form is used to confirm an existing [UDC Transfer List (Lista di Trasferimento UDC)](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) to perform the warehouse movement.

In the filter, it is possible to search for the list of interest by: date, number, and warehouse; it is also possible to confirm it directly with the **Confirm** button without having to open it.       
Otherwise, it is possible to enter the list via the **Open** button and view the load units not yet unloaded and those already unloaded within the respective tabs: non-transferred load units and transferred units, before confirming it and creating the warehouse movement.

**Load/Unload Parameters** to be entered in the [Load/Unload Parameters for user (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmPickingList |

The parameters are entered twice because the form uses: a loading reason with the warehouse as the destination of the list, and an unloading reason with the warehouse where the load units to be transferred are stored.            
Both reasons used must have the *Bill of Materials* flag deactivated and be without counter-party.    

For all information on how to encode the barcodes to be scanned in the **Input code** field, refer to the page regarding the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

### UDC Picking Confirmation (WMS version) (Conferma prelievo UDC (versione WMS))

:::important Purpose (A cosa serve)
The **UDC Picking Confirmation** form is used to search for and confirm an existing [UDC Picking List / Packing List (Lista di prelievo UDC / Packing list)](/docs/logistics/udc/loading-unit-packing-lists/transfer-unit) to perform the unloading warehouse movement.
:::

In the filter, it is possible to search for the list of interest by: date, number, and warehouse; it is also possible to confirm it directly with the **Confirm** button without having to open it.       
Otherwise, it is possible to enter the list via the **Open** button and view the load units not yet unloaded and those already unloaded within the respective tabs: non-unloaded load units and unloaded units, before confirming it and creating the warehouse movement.
   
**Load/Unload Parameters** to be entered in the [Load/Unload Parameters for user (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | ConfirmUnloadPickingList |

This parameter must be created with the warehouse of the *picking list* and with a warehouse reason with unloading type and without a counter-party.

For all information on how to encode the barcodes to be scanned in the **Input code** field, refer to the page regarding the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).