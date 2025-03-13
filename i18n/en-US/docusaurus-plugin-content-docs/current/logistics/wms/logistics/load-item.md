---
title: LOAD ITEM
sidebar_position: 1
---

:::important Purpose
The **LOAD ITEM** function allows for the precise recording of the arrival of items in the warehouses. Through this procedure, operators can scan the barcode of the item and the location, enter the quantity to be loaded, and, in the case of items managed in batches, specify the corresponding batch as well. Once the operation is confirmed, the warehouse movement is automatically created, ensuring effective management of stock levels and complete traceability.
:::

This procedure is used to create a loading movement of an item in a specified location.        
In the **Input code** field, the operator will only need to read the Barcode of the item, and then that of the location where they want to load it.           
Next, they will only need to enter the quantity to be moved, and once confirmed, the corresponding warehouse movement will also be created.       
If the item is managed in batches, the relevant field for entering the batch to be loaded will also be displayed.        
Additionally, it is possible to print the item code label using the **Print Report** button or view the preview directly on the terminal with the **Preview** button.          
The **Clear All** button allows you to clear the form of all entered data.

:::note Note
The *Item code* and the *Batch* must have the registry present in Fluentis.
:::

**Load/Unload Parameters** to be entered in the table [Warehouse Loading/Unloading Parameters for User (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadItem |

:::note Note
If in the [Warehouse Loading/Unloading Parameters for User (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) only one warehouse is associated for that user, it is proposed by default; otherwise, if more than one is associated, none will be proposed by default and the user can only choose from one of those entered.
:::

For all information on how to encode the barcodes to be read in the **Input code** field, refer to the page regarding the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).