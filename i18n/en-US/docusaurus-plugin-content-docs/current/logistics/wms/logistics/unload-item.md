---
title: Unload item
sidebar_position: 2
---

:::important Purpose
The **Unload item** function is designed to facilitate the withdrawal of items from a warehouse. Using the barcode, the operator can select the item and the location from which to retrieve it, enter the quantity to be shipped, and, if necessary, the specific batch. This procedure generates the warehouse shipping movement, updating the stocks and ensuring the correct recording of the flow of goods.
:::

This procedure is used to create a shipping movement of an item from a specific location.        
In the **Input code** field, the operator only needs to scan the Barcode of the item and then the one of the location from which they want to ship it.        
Next, they will only need to enter the quantity to be moved, and once confirmed, the corresponding warehouse movement will also be created.        
If the item is managed in batches, the corresponding field for entering the batch to be shipped will also be displayed.        
Additionally, it is possible to print the item code label using the **Print Report** button or view a preview directly on the terminal with the **Preview** button.        
The **Clear All** button allows you to empty the form of all entered data.

:::note Note
The *Item code* and the *Batch* must have the registry present in Fluentis.
:::

**Load/Unload Parameters** to be entered in the table [Warehouse Loading/Shipping Parameters by User (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | UnloadItem |

:::note Note
If in the [Warehouse Loading/Shipping Parameters by User (Parametri Magazzino Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) a single warehouse is associated for that user, it will be proposed by default; otherwise, if more than one is associated, by default none will be proposed and the user can only choose from those entered.
:::

For all information on how to encode the barcodes to be scanned in the **Input code** field, consult the page related to the [Barcode Tokenizer (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).