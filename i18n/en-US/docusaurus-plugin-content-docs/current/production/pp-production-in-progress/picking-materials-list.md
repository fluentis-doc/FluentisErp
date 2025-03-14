---
title: Picking Materials List
sidebar_position: 4
---

:::important What it is for
The **Picking Materials List** of Fluentis is a fundamental tool for the effective management of materials intended for production orders. It allows the creation and management of detailed lists of materials to be picked, directly linking the operation to the specific production needs. This function is widely used to create a picking document to effectively manage the transfer of materials (for instance, in WIP), simplifying the logistical process and ensuring accurate traceability.
:::

The material picking list allows the creation and management of picking lists for materials for production orders that require their use.

It is possible to search among production orders, in launched and executive states, for the one of interest and then perform two different operations.

The first, through the button **Search materials**, allows for the unloading of all materials contained in the production order that have as **Pickup type**, in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the item, the value **With List**. These materials are consumed when the create movements button is pressed, which in this case creates the warehouse unloading movement.

The second operation allows you to move materials from the warehouse where they are stored to the WIP warehouse, for example. This is done using the button **Search picking materials**; which allows you to create picking documents, so not actual records, but documents for the movement of materials that can then be viewed in the Picking window present in the logistics area.                
In this case, the button **Create Movements** generates the picking document, in which for the materials that are of *Pick type with list*, the reason and the warehouse will be set as already present in the materials line of the production order to be definitively unloaded; while for materials with *Manual pick type*, the reason and the warehouse set in the "Picking type" used will be established. The materials moved to the WIP warehouse will then be unloaded within the production declarations.            
The registration will be made later through the procedure dedicated to unloading the picking.        

## Filter

In this tab, it is possible to search for the desired pickings based on the filters entered.

*Specific buttons*:

> **Search materials**: by searching for materials using this button, it will then be possible to directly create the warehouse records. Among all the data listed below regarding the details of each material, the importance of the Mov. flag should be emphasized, which when active indicates that the pick type with list has been chosen for that material in the MRP Parameters of the item, while if the flag is not active it means that for that material the manual pick type has been opted for. (for more details on the meaning of this type of pickings, please refer to the article related to the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the item).  
> **Search picking materials**: by searching for materials using this button, it will then be possible to create picking documents, thus not actual records, but documents for the movement of materials that can be viewed in the [Picking](/docs/logistics/picking/search-picking) window present in the logistics area. In this case, the registration will be made later, after a second check. 
> **Create Movements**: allows, after selecting the materials based on the type of search performed, to create the warehouse movements (the unloading) or the picking document. In the case where the picking is created, for the materials that are of *Pick type With list*, the reason and the warehouse that are already present in the materials line of the production order will be set; while for materials with *Manual pick type*, the reason and the warehouse set in the *Picking type* will be established.

## Restore Record

In this tab, it is possible to restore any movements created in the previous tab.