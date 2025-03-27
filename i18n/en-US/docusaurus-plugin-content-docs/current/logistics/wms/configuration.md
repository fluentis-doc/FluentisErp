---
title: Configuration 
sidebar_position: 2
---

**Installation on device**

To install the app on a device, you need to use an .apk file.

**Download updates**

If the customer environment is updated, there is no need to reinstall the application, as the app automatically retrieves all information from the server and downloads the updates. However, there are specific cases where it is necessary to replace the apk on the device, so you will need to reinstall the application.

**WPF Configuration**

- **Menu/User**: create a *Menu* customized to show only the forms to be used. The WMS user must have the flag on *Fluentis WMS Solution*.

- **User warehouse load/unload parameters**: these parameters serve to introduce restrictions for users and can be set in the table [Warehouse loading/unloading parameters for user](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) found in *Parameters > General Parameters*. In the absence of these parameters, the user can perform movements in any warehouse, but this implies having to choose a warehouse within each form with the corresponding reason. Obviously, this operation is not correct and is not manageable by the operator. In these parameters, it is possible to indicate for each form and each operator the warehouse and the default reason that will be pre-filled upon opening the form.

- **Barcode tokenizer**: barcodes can be configured within the form [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer), located in: Tables > General Settings > Barcode tokenizer. These allow you to "instruct" the program to interpret the barcodes and execute certain actions.

- **Alternative U.M. - WMS Default**: for the forms *LOAD ITEM*, *Unload item*, *Move Item*, *Item adjustment*, *Stock*, and *Inventory*, the ability to move goods using the Alternative U.M. has been introduced. The configuration is obtained by activating the *Default WMS* flag in the [Alternative U.M.](/docs/erp-home/registers/items/create-new-item/item-registry/alternative-um) tab found in the *Item Registry*. In the indicated forms, only the Alternative U.M. is displayed in the U.M. field, and the created movements have the Alternative U.M. and Alternative Quantity populated according to the conversion factor.

- **Forms in WPF**: to access forms in WPF, the user must have the F21-WMS solution.

- **WMS License**: the WMS has dedicated licenses. In the license tab in WPF, it is possible to check the number of licenses dedicated to the WMS. The license is occupied by the user who uses the F21-WMS Solution. Therefore, whether access is made on a Mobile device or from WPF with that Solution.