---
title: Packaging 
sidebar_position: 8
---

:::important Purpose
The packaging tab of the item registry in Fluentis is essential for defining the packaging method of an item by specifying the types of Loading Units that compose it. This configuration can have a tree structure, where a pallet, for example, can contain different boxes, each of which can, in turn, contain a certain number of items.

Accurately defining the packaging is crucial as it allows for the automatic generation of the necessary UDCs for shipping when preparing an order.

Additionally, it is possible to associate specific units of measure for volume and define the description for the customer or supplier, thus allowing for customized management based on the specific needs of each customer. This tab thus serves as a key tool to optimize logistics and warehouse management.
:::

Through this tab, the packaging method of the item is defined by identifying the types of loading units that compose it.

It can be a tree structure as, for example, we can set the pallet as the packaging method, which may contain a certain number of boxes that can contain a certain number of items.

Defining the packaging allows the system to create the necessary loading units for shipping when we need to prepare an order for dispatch;

The window consists of a grid in which the following information is entered:

**Loading unit type / Loading unit contained type:** in these fields, the type of loading unit, i.e., the packaging type, and the content type are specified by selecting the relevant option from the corresponding combo; the data present in the combos of these fields have been previously coded in the related table [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types);

**Quantity:** in this field, the quantity that the loading unit can contain is specified;

**Priority:** in this field, the priority of the packaging is indicated (for example, if we have a pallet that contains boxes, the priority must be assigned so that when the system creates the loading units, it knows the packaging priority);

**Account / Subaccount / Customer/Supplier description:** in this field, the customer/supplier requiring this type of loading unit is entered. Thus, it is possible to define different loading units at the individual customer level;

**Unit of measure for dimensions:** in this field, the unit of measure for the dimensions of the loading unit is selected; upon entering the **Loading unit type**, this value is brought from the table [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types);

**Height / Width / Depth:** in these fields, the dimensions of the complete loading unit are specified; upon entering the **Loading unit type**, these values are brought from the table [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types) only if the **Variable volume** flag (present in Loading Unit Types) is deactivated; otherwise, the data will not be proposed and must be entered manually by the operator due to the impossibility of predicting how the items will be placed on the selected loading unit. In any case, they can be modified manually, and each modification will also recalculate the **Volume**;

**Volume unit of measure:** in this field, the volume unit of measure of the loading unit is indicated; upon entering the **Loading unit type**, this value is brought from the table [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types);

**Volume:** in this field, the volume of the complete loading unit is specified. If the **Variable volume** flag is active, upon entering the **Loading unit type**, this value is calculated by summing the volume of the empty loading unit present in the table [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types) and the volume of the item (taken from the *Volume* field present in the Weights/Dimensions tab of the item registry multiplied by the relevant quantity) from the volume of the contained loading units; instead, if the **Variable volume** flag is not active, upon entering the **Loading unit type**, the value of the empty loading unit volume present in the table [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types) will be directly reported since this is not variable. If the dimensions of **Height / Width / Depth** are modified, the **Volume** value will be recalculated accordingly. The **volume** will also be recalculated if there are variations in the volume of the **Contained loading unit type**. This value can always be modified manually;

**Variable volume:** indicates that it is a loading unit with variable volume, so the total volume will vary depending on what and how it will be loaded; it is a read-only field that can be populated in the table [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types);

**Weight unit of measure:** in this field, the weight unit of measure of the loading unit is specified; upon entering the **Loading unit type**, this value is brought from the table [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types);     

**Weight:** in this field, the weight of the complete loading unit is specified; upon entering the **Loading unit type** and the **Quantity**, this value is calculated by summing the weight of the empty loading unit present in the table [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types) and the weight of the items (taken from the *Gross Weight* field present in the Weights/Dimensions tab of the item registry multiplied by the relevant quantity) or from the weight of the contained loading units. This value can always be modified manually;

**Size Tolerance/Quantity Tolerance:** these are used in customizations and are needed when a loading plan creates a UDC pick list with the available loading units in stock. The procedure should insert in the UDC list loading units with dimensions or quantities that differ from those specified in the packaging for the specified percentages. Currently, they are not used as standard;

**Mandatory dimensions:** if active, this flag indicates that the specified dimensions are mandatory;

**Mandatory loading unit:** if active, this flag indicates that this item must be managed through loading units in the production declarations and in the reception of goods in the WMS;

**Loading unit type description / Loading unit contained type description:** in these fields, once the loading unit type and the contained loading unit type are entered, the descriptions of the selected types will automatically be displayed.