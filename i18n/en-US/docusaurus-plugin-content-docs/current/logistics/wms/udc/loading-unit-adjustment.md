---
title: Load Unit Adjustment (Rettifica unità di carico)
sidebar_position: 8
---

:::important What it is for (A cosa serve)
The Load Unit Adjustment function of the Fluentis WMS allows modifications to the items contained in a load unit, permitting both positive and negative adjustments.     
Operators can view all present items, change quantities, and add or remove items, making the process of updating stock levels more accurate and efficient.
:::

This procedure is used to adjust the items in a load unit, either positively or negatively, or to add a new item or remove an existing one.   
When reading the load unit, all items contained within it are displayed in the grid below, indicating the following fields:

> **ITEM**: indicates the class and code of the item contained in the load unit;       
> **Description**: indicates the description of the item contained in the load unit;       
> **Quantity**: indicates the quantity of the item contained in the load unit;   
> **Batch**: indicates the batch of the item contained in the load unit (present only if managed by batches);           
> **Variant**: indicates the variant of the item contained in the load unit (present only if managed by variant).       

By selecting one of the items, using the **+** and **-** buttons, or via the keyboard, it is possible to change the quantity displayed in the grid positively or negatively, respectively.       
Once all corrections have been completed for the affected items, clicking the **Confirm** button will validate and carry out the corresponding positive and negative stock adjustment movements within the selected load unit.
The **Clear All** button allows you to empty the form of all entered data.     

If a new item not present in the load unit is added, a message will be displayed allowing the user to decide whether or not to add this new item to the load unit. In this situation, it is important to remember that if the item (to be added) is managed by batches, a valid batch must also be inserted.          
To remove an item, simply set the corresponding quantity to zero.       

**Load/Unload Parameters** to be entered in the table [Load/Unloading Parameters per user](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustLoadingUnit |

The parameters are listed twice because the form uses a reason for unloading for negative adjustments and one for loading for positive adjustments.

For all information on how to code barcodes to be read in the **Input code** field, please refer to the page regarding the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).