---
title: Load/Move Multiple Loading Units 
sidebar_position: 3
---

:::important Purpose
The **Load/Move Loading unit** function of Fluentis WMS is designed to simplify the process of managing loading units. It allows operators to load a loading unit not yet registered in the system or to move an already loaded unit from one location to another, all through scanning the barcode. Thanks to this functionality, the system facilitates real-time warehouse operations.
:::

This procedure is used to read one or more loading units in order to proceed with *Mass Load* if the loading units are not loaded, or *Mass Move* if the loading units are already loaded.   

The operator can perform these operations by directly reading the barcode of one or more loading units; if these are not loaded, they are directly added to the grid below the barcode field.     
The procedure automatically proposes the location where the UDC should be loaded, taken from the header of the UDC itself, and activates the **Load** button, which creates the stock movement in real time.        

In the case that they are already loaded, the procedure will request the destination location for the move, activating the **Move** button, which will create the related unloading movements with a counterpart load in the new location.          

The **Clear All** button allows you to empty the form of all entered data.   

**Load/Unload Parameters** to be entered in the table [Load/Unload Parameters by User](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Area | Module | Form |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |
| WM | Fluentis.FluentisErp.Mvvm.WM.Views | LoadMoveMultipleLoadingUnit |

The parameters are entered twice because the form uses both a load reason for the loading units to be loaded and one for the unloading of the units already loaded. The unloading reason must have a counterpart load reason.     

For all information on how to encode the barcodes to be read in the **Input code** field, please refer to the related page on [Barcode Tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).