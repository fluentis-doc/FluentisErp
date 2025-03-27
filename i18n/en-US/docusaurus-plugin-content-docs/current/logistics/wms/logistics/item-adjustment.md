---
title: Item adjustment
sidebar_position: 4
---

:::important Purpose
The **Item adjustment** function is used to correct the stock levels of items in the warehouse, allowing the operator to make positive or negative adjustments. Thanks to a clear interface, the operator can search for the item to adjust, view related information, and modify the quantity directly in the grid. By confirming the modification, the system automatically generates the adjustment movements, ensuring an accurate update of the stock levels.
:::

This procedure is used to create positive or negative adjustments for an item.          
The form presents a grid that changes its columns based on the filters entered for the search.        
For example, if only the code of a location is read, the **Search** button will display the search results in the grid below with the following columns populated:

> **ITEM**: indicates the item code;     
> **Units of Measure**: indicates the item's unit of measure;     
> **Quantity**: indicates the quantity that the operator can manually change or adjust using the **+** and **-** buttons;        
> **Stock**: indicates the stock level of the item calculated based on the warehouse movements;       
> **Stock Level (FC)**: activates only if the *Default WMS* flag is enabled in the [Alternative Units of Measure tab of the item registry](/docs/erp-home/registers/items/create-new-item/item-registry/alternative-um). This value indicates the stock level expressed in the alternative unit of measure, calculated using the conversion factor;               
> **Batch**: indicates the lot of the item;       
> **Item description**: indicates the description of the item.    

Meanwhile, when reading the item to be adjusted, the **Search** button will display the search results in the grid below with the following columns populated:

> **Location**: indicates the item's location;        
> **Units of Measure**: indicates the item's unit of measure;     
> **Quantity**: indicates the quantity that the operator can manually change or adjust using the **+** and **-** buttons;        
> **Stock**: indicates the stock level of the item calculated based on the warehouse movements;       
> **Stock Level (FC)**: activates only if the *Default WMS* flag is enabled in the [Alternative Units of Measure tab of the item registry](/docs/erp-home/registers/items/create-new-item/item-registry/alternative-um). This value indicates the stock level expressed in the alternative unit of measure, calculated using the conversion factor;                      
> **Batch**: indicates the lot of the item.       

:::note **Stock** and **Stock Level (FC)**
It is important to remember that if the *Default WMS* flag is active in the [Alternative Units of Measure tab of the item registry](/docs/erp-home/registers/items/create-new-item/item-registry/alternative-um), the values in the **Stock** and **Stock Level (FC)** fields will be expressed in the corresponding alternative unit of measure. However, if the item is managed in batches, the values in the **Stock** and **Stock Level (FC)** fields will be expressed in the item's primary unit of measure, even if the "Default WMS" flag is active.
:::

To proceed with the adjustment, it is necessary that there is only one record present in the results grid.     
At this point, the operator simply needs to change the quantity manually, modifying the value directly in the grid, or by using the **+** and **-** buttons; after which, pressing the **Confirm** button will create the relevant positive or negative adjustment movements.

Additionally, it is also possible to print the item code label using the **Print Report** button or view the preview directly on the terminal with the **Preview** button.

**Load/Unload Parameters** to be entered in the [Loading/Unloading Parameters for User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) table.

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | AdjustItem |

The parameters are entered twice because the form uses both a loading reason for positive adjustments and a shipping reason for negative adjustments.     

:::note Note
If only one warehouse is associated for that user in the [Loading/Unloading Parameters for User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping), it is proposed as the default. Otherwise, if there are multiple associated, none will be proposed by default, and the user can only choose one of those entered.
:::

For all information on how to encode the barcodes to be scanned in the **Input code** field, please refer to the page related to the [Barcode Tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).