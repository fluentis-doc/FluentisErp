---
title: Load/Move UDC (Carico/Sposta UDC)
sidebar_position: 2
---

:::important Purpose (A cosa serve)
The **Load/Move UDC** function of Fluentis WMS is designed to simplify the process of managing load units. It allows operators to load a load unit that has not yet been registered in the system or to move an already loaded unit from one location to another, all through barcode scanning. With this functionality, the system facilitates real-time warehouse operations.
:::

This procedure is used for reading a load unit in order to proceed with *Load* if the load unit is not loaded, or with *Moving* if the load unit is already loaded.

In a simple and quick manner, the operator can perform these operations by directly reading the barcode of the load unit. If the unit is not loaded, the procedure automatically suggests the location in which the UDC should be loaded based on the one present in the header of the UDC itself and enables the **Load** button, which creates the warehouse movement in real time.      

Conversely, if the unit is already loaded, the procedure will prompt for the destination location of the move, activating the **Move** button, which will create the relevant unloading movements with a counterpart of loading in the new location.     
  
The **Clear All** button allows you to empty the form of all entered data.    

**Load/Unload Parameters** to be entered in the table [Loading/Unloading Parameters per User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveLoadingUnit |

Parameters are entered twice because the form uses both a loading reason for the load units to be loaded and an unloading reason for the load units already loaded and therefore to be unloaded. The unloading reason must have a loading reason as a counterpart.     

For all information on how to encode the barcodes to be read in the **Input code** field, refer to the page related to the [Barcode Tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).