---
title: Moving Items Between Two Loading Units
sidebar_position: 7
---

:::important Purpose
The Move Items Between Two Loading Units function of Fluentis WMS allows for easy transfer of items from a starting loading unit to a destination one.     
Through barcode scanning, the operator can view the items contained in the first loading unit and, after selecting the destination UDC, is able to quickly move the desired quantities, making the movement process more efficient.
:::  

Upon reading the first loading unit, it is entered as the starting loading unit, and all items contained within it are displayed in the grid below, indicating: *Item code*, *Quantity*, *Batch*, and *Item description*.        
The second reading, on the other hand, will enter the destination loading unit, and every subsequent reading of a loading unit will be considered as the new destination.      
The next step is to read the item to be moved (which is automatically flagged in the grid below) and enter the quantity; if the item is managed in lots, the corresponding input field will also be displayed.      
After that, it will be sufficient to press the **Move** button to perform the discharge movement from the starting loading unit and the load movement into the destination loading unit.           
The **Clear All** button allows you to clear the form of all entered data.     

:::note Rules to keep in mind for the proper use of the form:
- The starting and arrival loading units must be valid.
- The starting loading unit must be loaded.
- The scanned item must be within the starting loading unit (including any lots).
- The destination loading unit can only be unloaded if it is empty or if the quantities of all items within it are zero; if the quantities of the items within it are greater than zero, that loading unit must be loaded.
- It is not possible to exceed the quantity present in the starting loading unit.
- For the creation of the warehouse movement, availability for the item and lot is checked.
- The starting and destination loading units must not be contained in a **Loading Unit Picking List / Packing List** or in a **Loading Unit Transfer List**. 
:::

**Load/Unload Parameters** to be entered in the table [Loading/Unloading Parameters for User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | MoveLoadingUnitItem |

The parameters are entered twice because the form uses a reason for unloading from the starting loading unit and one for loading into the destination loading unit.

For all information on how to encode barcodes to be read in the **Input code** field, consult the page related to the [Barcode Tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).