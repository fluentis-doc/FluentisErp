---
title: Load Unit Inventory (Inventario unità di carico)
sidebar_position: 9
---

:::important Purpose (A cosa serve)
The Load Unit Inventory function of the Fluentis WMS allows for an accurate inventory of load units present in the warehouse.        
Operators can read the location to view the UDC contained and proceed with recording the quantities, automatically generating adjustment movements to align the logical stock with the physical stock.
:::  

This procedure is used to conduct an inventory of the UDC present in the warehouse.

When reading the location, all the load units contained within it are displayed in the grid below, indicating the following fields: 

> **Loading Units**: indicates the number of the load unit contained in the location;        
> **Type**: indicates the type of the load unit contained in the location;     
> **Inventory date**: indicates the last date the load unit contained in the location was inventoried.  

The next step is to read the load unit to be inventoried; if it is present among those contained in the selected location, the **Inventory date** is updated with the current date. If the read load unit is not present in the location, a warning message will be displayed to the user.      
The **Clear All** button allows for clearing the form of all entered data.     

Once all load unit readings are completed, by pressing the **Confirm** button, only if there are un-inventoried load units will the procedure create unloading movements for those load units from the selected location and loading movements for the same units in the default location indicated in the cause present in the 
[Load/Unload Parameters for User (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

**Load/Unload Parameters** to be entered in the table [Load/Unload Parameters for User (Parametri Carico/Scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadingUnitInventory |

The parameters are entered twice because the form uses a cause for unloading the load unit from the starting location and one for loading the load unit in the destination location.

:::note WARNING (ATTENZIONE)
The associated loading cause must have a default location indicated within the table of [Warehouse Causes (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates/).
:::

For all information on how to encode the barcodes to be read in the **Input code** field, please refer to the page regarding the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).