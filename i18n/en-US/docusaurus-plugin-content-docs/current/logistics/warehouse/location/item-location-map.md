---
title: Item Location Map
sidebar_position: 3
---

:::important What it's for (A cosa serve)
The "Item Location Map" feature of Fluentis allows for optimal stock management, providing a clear and detailed visualization of the locations of each item within the warehouse. Thanks to this map, users can easily associate specific items with designated locations, thus facilitating storage and picking operations.

Through an intuitive interface, it is possible to enter new items and define key variables such as the reference warehouse, storage priority, and minimum and maximum quantities. The map also allows for identifying which location is default for each item, optimizing the inventory process and improving operational efficiency.

This feature is particularly useful for companies that wish to maintain control over the physical arrangement of their products, ensuring both a more effective organization of the warehouse and perfect traceability of items.
:::

This form allows you to associate a default location to an item.

It consists of a filter form where you can view the list of all items that have been assigned a default location. By pressing the *New* button, the operator can enter an item in the header area and then within the *Item-locations map* table, specify the warehouse and the default location.

For each item, the following parameters can be indicated:
- **Warehouse**: indicates the warehouse of the default location;     
- **Warehouse description**: indicates the description of the warehouse of the default location;    
- **Priority**: indicates the priority of the default location; 

:::note **WARNING (ATTENZIONE)**
The procedures will only consider the location with the lowest priority.
The indicated location will also have priority over the location specified in the [Warehouse Reasons (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates).
:::

- **Minimum stock**: indicates the minimum stock value of the default location;    
- **Maximum stock**: indicates the maximum stock value of the default location;    
- **Location**: indicates the code of the default location.

For everything not detailed in this document about the common operation of forms, please refer to the following link [Common Functions, Buttons, and Fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).