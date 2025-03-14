---
title: Inventory (Inventario)
sidebar_position: 6
---

:::important What it is for (A cosa serve)
The **Inventory** function allows for complete and detailed management of warehouse stock levels. Operators can create specific inventories by entering the number, inventory date, and other relevant information, including notes and details about the operator. Through the creation of inventory lists, it is possible to assign tasks to different operators to facilitate the counting process. During the inventory, the system supports data entry through barcode readers, allowing for quick recording of the quantities detected and managing any lot items. At the end of the inventory, the system automatically adjusts the logical quantities against the physical ones, ensuring accurate and timely alignment of stock levels.
:::

This procedure is used to populate an inventory list created in WPF with items read via barcode.

The operator, through WMS, can search for the relevant inventory and by pressing the *Search* button, will only see the inventory lists associated with themselves.        
By selecting the list and pressing the *Modify* button, the data entry form opens where: by reading the item and its location, the relevant data will be loaded, and the operator will need to enter the quantity.           
By pressing the confirm (conferma) button, the procedure will fill the inventory list in real-time with the newly entered data.         
In case the item read is managed in lots, the related field will also be displayed, where the lot to be inventoried must be entered.         
If an item is read a second time (same Class/Code/Lot (if managed in lots)) and indicated in the same location as the first, a pop-up appears asking whether to **Add** or **Replace (Sostituire)** the previously read quantity.

Once the inventory lists are completed, all adjustment movements will be created from Fluentis through the [Inventory Differences (Differenze inventariali)](/docs/logistics/physical-inventory/stock-difference) procedure.

For the use of this form, there is no need to enter any parameters in the [Load/Unload Parameters for User (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) table.

:::note Note (Nota)
It is possible to change the behavior of the inventory list regarding the location using the **Maintain location** flag in the [Types of Inventory Lists (Tipi liste inventariali)](/docs/configurations/tables/logistics/stock-lists-types) table. If active, this ensures that during inventory with WMS, the entered location will not be changed until another location is read; if, however, it is deactivated, the location must be entered each time before confirming the item.
:::

For all information on how to encode the barcodes to be read in the **Input code** field, refer to the page on the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).