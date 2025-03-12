---
title: Alternative U.M (U.M alternativa)
sidebar_position: 20.1
---

:::important Purpose (A cosa serve)
The Alternative Unit of Measure tab in the item registry of Fluentis offers an important functionality for managing the different units of measure associated with each item. In this tab, it is possible to define an alternative unit of measure, useful for managing items that can be handled in more than one unit. This approach simplifies procurement and inventory operations, as various operators can use a unit of measure they feel more comfortable with or that best suits their operational needs.     
In the tab, there is a section to specify the conversion factor between the main unit of measure and the alternative one, allowing for automatic calculation of the required quantity.     
The available options include settings to define whether a unit of measure is default or mandatory, as well as to establish which units of measure are prioritized during inventory management operations.      
Through these functionalities, companies can more efficiently manage stock levels and orders, adapting the information related to units of measure to specific operational needs and improving interoperability between different management systems, such as the Warehouse Management System (WMS).
:::

In this tab, the alternative unit of measure for the item is indicated where necessary. 

The item can be managed in both units of measure, creating relationships between the two.

**Units of Measure** and **Description**: you will indicate the alternative unit of measure along with its description;

**Conversion Factor**: this is where the conversion factor between the main unit of measure and the alternative unit is defined; the *alternative quantity* in documents is calculated based on the settings made in the [Initial Warehouse Parameters (Parametri iniziali di magazzino)](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)

**Default**: if active, this flag indicates which is the reference unit of measure among the N possible alternatives for the item;

**Compulsory**: if active, this flag determines the invariability of the conversion factor. When entering the management unit of measure via the conversion factor, the system automatically calculates the alternative unit of measure, and vice versa. If the Mandatory flag is not active, that alternative unit of measure can be set as the primary unit of measure, regardless of the **Priority (Prioritaria)** flag;     

**Priority (Prioritaria)**: if active, updating the *management quantity* does not change the *alternative quantity* because the latter takes priority; whereas, if the *alternative quantity* is modified, the *management quantity* is recalculated based on the alternative quantity according to the conversion factor;       

**Default WMS**: if active, this indicates that this unit of measure will be the default one used within the WMS.