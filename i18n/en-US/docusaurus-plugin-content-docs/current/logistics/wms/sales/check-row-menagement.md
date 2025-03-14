---
title: Management of Checkbox and Picking Confirmation (Gestione spunta e Conferma picking)
sidebar_position: 2
---

## Checkbox Management (Gestione spunta)

:::important What it is for
The checkbox management of the Fluentis WMS is a tool designed to confirm the lines of picking actually picked by the operator in the warehouse. If at least one line is checked, the procedures for creating the Transport Document (DDT) and the invoice only consider these lines; otherwise, all the lines of the picking are considered. This system simplifies and speeds up the creation of transport and billing documents, allowing for the manual entry of new lines of items. Additionally, the checkbox management allows for the creation of Load Units (UDC) during the confirmation of the picking lines, grouping items into load units. Once a line is selected and the necessary data is entered, it is possible to create and manage new UDCs with the confirmed items.
:::

Starting from an existing Picking, it is possible to read the items present and group them into UDCs.    
From WPF, it is then possible to proceed to the creation of the DDT or the invoice.

:::note Note
In the **Checkbox Management** form, only pickings created with a *picking type* with the *Mandatory Load Unit* flag enabled will be displayed in the [Picking Types](https://docs/configurations/tables/logistics/picking-type/) table.
:::

The form opens with the picking filter, where it is possible to view all pickings in *Not fulfilled* or *Partially fulfilled* status and with a *picking type* where the *Mandatory Load Unit* flag is activated.     
Results can be filtered by *Picking Type*, *Number*, *Date*, and *Customer*.    
Using the *Open* button, it is possible to open the selected picking.

The main form consists of the following tabs:

- **Items**
This tab displays all the item lines present in the picking.

**Specific buttons**
> **Detail**: allows you to navigate to the **Selected items** tab;        
> **Confirm**: after selecting a line in the **Items**, it opens the **Confirm** tab proposing the selected item.

- **Confirm**
Via the **Input code** field (therefore using a barcode reader), it is possible to enter the data related to the lot, location, picking quantity, and the item if you want to change it from what is proposed.
The user can also change the item by navigating to the **Items** tab, where all the item lines present in the picking are displayed, selecting the one of interest, and pressing the **Confirm** button or returning to the **Confirm** tab to input the data related to the newly selected item.      
If the user confirms the line of an item managed in lots and for which the lot has not been entered, a message will be shown reminding them to enter the lot. There is also a *Load Unit* field present in the tab that must be populated to proceed with the confirmation of the data. 

**Specific buttons**
> **Detail Check**: allows you to navigate to the **Selected items** tab;        
> **Confirm**: allows you to confirm the entered data and subsequently load the data related to the next line;          
> **New UDC**: allows you to create a new *Load Unit* after selecting the type.         

Below the picking quantity, there is a read-only grid with the following columns: *Quantity*, *Location*, and *Lot*. This updates dynamically, for example, if only the item is indicated, it should show all locations with inventory > 0 where that item exists, if the lot is also indicated, it should show all locations with inventory > 0 where that item with that lot exists.

- **UDC**
Allows you to view the composition of *Load Units* created for the current picking.          

**Specific buttons**
> **OPEN LoadingUnit**: allows you to view the details of the selected *Load Unit*. Furthermore, the last *Load Unit* opened will be proposed as the *Load Unit* to insert the next items to be confirmed.            

- **Selected items**
The **Selected items** tab is populated only after selecting an item in the **Items** tab of the Picking.
Thus, from the items list of the Picking, an item is selected, and the **Selected items** tab shows all the readings made of the selected item.
When a *Picking* line is completely fulfilled, it goes to the end of the **Items** tab and is highlighted in red. Selecting that line and pressing the *Detail* button opens the **Selected items** tab where the confirmed lines can be seen, which can also be deleted via the *Cancel* button. 
From this tab, it is possible to select a checked item and delete it.

**Specific buttons**
> **Cancel**: allows you to delete the selected line.

:::note Note
If it is necessary to have the ability to over-fulfill the quantity indicated in the picking, it is necessary to enable the **Over-fulfillable** flag present in the [Picking Types](https://docs/configurations/tables/logistics/picking-type/) table.
:::

**Loading/unloading parameters** to be entered in the [Loading/Unloading Parameters per User](https://docs/configurations/parameters/general-parameters/deliverynotes-grouping) table.

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

The parameters are repeated because the form uses a shipping cause (without counterpart), to unload the picked items, and a loading one to load them into the newly created load units. For the loading cause, it is important to indicate a default location that will be used to load the newly created load unit.    
                                         
For all information on how to encode the barcodes to be read in the **Barcode Code** field, refer to the page related to the [Barcode tokenizer](https://docs/configurations/tables/general-settings/barcode-tokenizer).


## Picking Confirmation (Conferma Picking)

:::important What it is for
Starting from an existing Picking, without using load units, which are created using the [Checkbox Management](https://docs/logistics/wms/sales/check-row-menagement) form, with the **Picking Confirmation** form it is possible to confirm the individual lines of the picking, to move items between two warehouses or locations, directly creating the warehouse movement of displacement.
Subsequently, from WPF, it is then possible to proceed to the creation of the DDT or the invoice.
:::

:::note Note
In the **Picking Confirmation** form, only pickings created with a *picking type* with the *Mandatory Load Unit* flag deactivated will be displayed in the [Picking Types](https://docs/configurations/tables/logistics/picking-type/) table.
:::

The form opens with the picking filter, where it is possible to view all pickings in *Not fulfilled* or *Partially fulfilled* status and with a *picking type* where the *Mandatory Load Unit* flag is deactivated.     
Results can be filtered by *Picking Type*, *Number*, *Date*, and *Customer*.    
Using the *Open* button, it is possible to open the selected picking.

The main form consists of the following tabs:

- **Items**
This tab displays all the item lines present in the picking.

**Specific buttons**
> **Detail**: allows you to navigate to the **Selected items** tab;        
> **Confirm**: after selecting a line in the **Items**, it opens the **Confirm** tab proposing the selected item.

- **Confirm**
Via the **Input code** field (therefore using a barcode reader), it is possible to enter the data related to the lot, location, picking quantity, and the item if you want to change it from what is proposed.
If the user confirms the line of an item managed in lots and for which the lot has not been entered, a message will be shown reminding them to enter the lot. 

**Specific buttons**
> **Detail**: allows you to navigate to the **Selected items** tab;        
> **Confirm**: allows you to confirm the entered data and subsequently load the data related to the next line;          

Below the picking quantity, there is a read-only grid with the following columns: *Quantity*, *Location*, and *Lot*. This updates dynamically, for example, if only the item is indicated, it should show all locations with inventory > 0 where that item exists, if the lot is also indicated, it should show all locations with inventory > 0 where that item with that lot exists.

- **Selected items**       
The **Selected items** tab is populated only after selecting an item in the **Items** tab of the Picking.
Thus, from the items list of the Picking, an item is selected, and the **Selected items** tab shows all the readings made of the selected item.
When a *Picking* line is completely fulfilled, it goes to the end of the **Items** tab and is highlighted in red. Selecting that line and pressing the *Detail* button opens the **Selected items** tab where the confirmed lines can be seen, which can also be deleted via the *Cancel* button. 
From this tab, it is possible to select a checked item and delete it.

**Specific buttons**
> **Cancel**: allows you to delete the selected line.

:::note Note
If it is necessary to have the ability to over-fulfill the quantity indicated in the picking, it is necessary to enable the **Over-fulfillable** flag present in the [Picking Types](https://docs/configurations/tables/logistics/picking-type/) table.
:::

**Loading/unloading parameters** to be entered in the [Loading/Unloading Parameters per User](https://docs/configurations/parameters/general-parameters/deliverynotes-grouping) table.

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

:::note Note
It is important to remember that the reason used must be a shipping reason with a loading reason in counterpart.
:::

For each Picking, a single unloading record will be created with a counterpart of a single loading record that contains the movements of all checked items. 

For all information on how to encode the barcodes to be read in the **Barcode Code** field, refer to the page related to the [Barcode tokenizer](https://docs/configurations/tables/general-settings/barcode-tokenizer).