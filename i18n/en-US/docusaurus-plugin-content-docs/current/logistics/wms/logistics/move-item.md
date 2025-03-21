---
title: Move Item 
sidebar_position: 3
---

:::important What it is for
The **item movement** feature allows for transferring a product from a specific location to another within the warehouse. Operators can enter the starting and destination locations, and specify the quantity to be moved. In the case of batch-managed items, it is also possible to indicate the batch to be moved. This procedure automatically generates the necessary warehouse movement to record both the discharge from the old location and the loading in the new one.
:::

This procedure is used to create a movement to relocate an item from one specific location to another. 
The reading of the first location in the form will populate the field related to the starting location, while the second will populate the destination location.     
Subsequent readings of locations will overwrite only the destination location.     
At this point, it is possible to enter the quantity to be moved using the **+** and **-** buttons or by entering it directly.  
Additionally, it is possible to print the item code label using the **Print Report** button or to visualize the preview directly on the terminal with the **Preview** button.     
The **Clear All** button allows you to empty the form of all entered data.      
In case the item is managed in batches, the corresponding field to enter the batch that should be moved will also be displayed.        
Upon confirmation, the warehouse movement is generated, which in this case, in addition to the main discharge record, also presents the counter entry that has loaded the item into the new location.

:::note Note
The reason used must be a discharge reason with a loading reason as a counter entry.
:::

**Load/Unload Parameters** to be entered in the table [Warehouse Loading/Discharge Parameters per User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveItem |

:::note Note
If in the [Warehouse Loading/Discharge Parameters per User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) a single warehouse is associated for that user, that one is proposed by default, otherwise if there are multiple associated, none is proposed by default and the user can only choose among those entered.
:::

For all information on how to encode the barcodes to be read in the **Input code** field, consult the page related to the [Barcode Tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).