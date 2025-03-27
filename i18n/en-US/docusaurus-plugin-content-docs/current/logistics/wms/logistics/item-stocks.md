---
title: Item Stock 
sidebar_position: 5
---

:::important Purpose 
The **item stock** function allows operators to quickly view the stock levels for each registered item. Through an interactive grid, it is possible to extract detailed information regarding the management stock, units of measure, and batches. Additionally, the function allows for analyzing stock aggregated by item, location, or project, thus providing a comprehensive view of material availability. This procedure facilitates inventory monitoring and allows for more accurate and informed management of warehouse operations, thereby contributing to optimizing overall logistical efficiency.
:::

This procedure is used to view the stock of an item.     
The form presents a grid that changes its columns based on the filters entered for the search. 

For example, if only the code of a location is read, using the **Search** button, the search results will be displayed in the grid below with the following columns populated:

> **ITEM**: indicates the item code;     
> **Stock (Gest.)**: indicates the stock in the management unit of measure (main);      
> **Units of Measure**: indicates the item's unit of measure;          
> **Stock**: is populated only if the *Default WMS* flag is enabled in the tab [Alternative Units of Measure in the Item Registry](/docs/erp-home/registers/items/create-new-item). This value indicates the stock expressed in the alternative unit of measure, calculated based on the warehouse movements;         
> **Stock (FC)**: is populated only if the *Default WMS* flag is enabled in the tab [Alternative Units of Measure in the Item Registry](/docs/erp-home/registers/items/create-new-item). This value indicates the stock expressed in the alternative unit of measure, calculated using the conversion factor;               
> **Batch**: indicates the item's batch;       
> **Item description**: indicates the description of the item;      
> **Variant**: indicates the variant code of the item;    
> **Variant description**: indicates the description of the item's variant.     

Meanwhile, when reading the item to adjust, using the **Search** button, the search results will be displayed in the grid below with the following columns populated:

> **Location**: indicates the item's location;        
> **ITEM**: indicates the item code;     
> **Stock (Gest.)**: indicates the stock in the management unit of measure (main);      
> **Units of Measure**: indicates the item's unit of measure;          
> **Stock**: is populated only if the *Default WMS* flag is enabled in the tab [Alternative Units of Measure in the Item Registry](/docs/erp-home/registers/items/create-new-item). This value indicates the stock expressed in the alternative unit of measure, calculated based on the warehouse movements;         
> **Stock (FC)**: is populated only if the *Default WMS* flag is enabled in the tab [Alternative Units of Measure in the Item Registry](/docs/erp-home/registers/items/create-new-item). This value indicates the stock expressed in the alternative unit of measure, calculated using the conversion factor;               
> **Batch**: indicates the item's batch;       
> **Variant**: indicates the variant code of the item;    
> **Variant description**: indicates the description of the item's variant.     

:::note Note
The columns related to stock are three: 
- *Stock (Gest.)* - (management) 
- *Stock*  
- *Stock (FC)* - (FC = Conversion Factor)

If the **Default WMS** flag is used in the tab [Alternative Units of Measure in the Item Registry](/docs/erp-home/registers/items/create-new-item), the first will be populated with the item's main unit of measure, the second will be populated with the stock expressed in the item's alternative unit of measure and derived from the sum of movements, while the third will be the stock expressed in the alternative unit of measure but calculated using the conversion factor.
If the **Default WMS** flag is not enabled, the *Stock* and *Stock (FC)* columns will not be populated.
:::

**Load/Unload Parameters** to be entered in the table [Load/Unload Parameters for User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | ItemStocks |

This parameter should only be entered if you want to filter stocks for a specific warehouse (the reason can be left empty); otherwise, if not entered, the stocks for all warehouses will be displayed.

:::note Note
If in the [Load/Unload Parameters for User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) one warehouse is associated for that user, it is proposed by default; if more than one is associated, none is proposed by default, and the user can only choose from those provided.
:::

For all information on how to encode barcodes to read in the **Input code** field, refer to the page related to the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).