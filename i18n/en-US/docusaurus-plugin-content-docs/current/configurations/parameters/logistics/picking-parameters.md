---
title: Picking Parameters
sidebar_position: 6
---

:::important What it's for 
Through this functionality, users can configure and adapt the system according to various operational needs, ensuring a smooth and consistent operation of logistics activities.

In this section, it is possible to assign default warehouses and shipping reasons, decide whether to check the availability of items, and define whether entering information such as the operator code should be mandatory. Other options include managing items by batches or serial numbers and checking quantities at the time of creating the picking list. This parameterization module not only facilitates operations but also ensures that procedures comply with corporate policies and current regulations, allowing for effective and accurate inventory management.
:::

The form is opened via the path **Parameters > Logistics > Picking Parameters** and allows for all parametrizations regarding the operation of pickings or picking lists. Only after properly parameterizing this mask is it possible to use the Picking module.

#### Specific Button  
> **Restore**: button to restore the previous state of the parameters.

## General

In this tab, the generalities of the Picking management can be parameterized. It is possible to assign a warehouse and a reason to be used by default for the picking discharge. To do this, simply check **Priority picking parameters** and indicate a **Warehouse** and a **Template**.  
It is also possible to choose whether, at the time of discharge, to **Check availability**, **Exclude customer orders** from availability, and/or be blocked if availability does not meet the quantity to be moved (**Compulsory availability**).

If you choose to check availability, you can determine how it should be calculated based on the **Subcontractor**, **Planned production**, **Purchases**, **Released production**, **Sales**, and/or **Warehouse**.

As general settings, you can choose if entering the **User code** is mandatory when creating the picking, if the **Numbering must be progressive by year**, and if the **Operator code confirming the picking** is mandatory.

In case there are particular item managements, the **Management size and colour** can be activated.

In the section **Batch and serial number management**, the following flags can be activated:

**Batch/Serial number management**: enables the possibility of managing batches and serial numbers through the relative grids.

**Suggest Batches/Serial numbers**: if active, when changing the quantity of the picking line, if the item is managed by batches with FIFO picking or expiration date, the batches will be automatically suggested in the relative grid.

**Automatic Movement Check**: if active, in the forms *Check Management* and *Confirm Picking* it performs the automatic unloading of the line, and in this case, it will not be necessary to do it from [Unload from Check](/docs/logistics/picking/unload-check-row-management); while if the flag is not active, then the check will be performed but without the movement, which must be carried out through the procedure [Unload from Check](/docs/logistics/picking/unload-check-row-management).

**Display discharge grid**: if active, the flag enables grid mode in the picking discharge form.

**Display discharge tree**: if active, the flag enables tree mode in the picking discharge form.      

## WMS Mobile  

In this tab, parameters for the operation of Pickings in WMS Mobile can be defined.

**Carrier account type**: represents the carrier that will be entered in the pickings created by WMS Mobile.  

Different types of pickings can also be chosen. 

It is also appropriate to specify the reasons that will be used for the following movements:

- Loading unit discharge for transfer confirmation;

- suggested reason for picking discharge;

- discharge for departure warehouse;

- load for destination warehouse;

- discharge reason for counter work warehouse.

For anything not detailed in this document regarding the common operation of forms, refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).