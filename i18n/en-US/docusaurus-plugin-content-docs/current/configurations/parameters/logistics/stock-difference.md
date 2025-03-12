---
title: Stock difference parameters
sidebar_position: 3
---

:::important Purpose (A cosa serve)
The introduction to the inventory difference parameters of Fluentis is essential to ensure effective alignment between physical and logical stock within the warehouse. This feature allows operators to manage and record identified discrepancies systematically, ensuring that every warehouse movement is tracked and accounted for accurately.

The inventory difference parameters can be found in the configuration section and allow for the establishment of warehouse reasons to be used during the calculation process of differences. Each warehouse can have customized configurations, in which it is necessary to set both a loading reason for positive inventory adjustments and a unloading reason for negative adjustments. Additionally, the system automates the generation of compensation records, thus simplifying the management of any variations in stock levels.

In the inventory difference procedure, Fluentis offers the option to calculate differences on a specific date, allowing for retroactive management and accurate recording of stock levels.
:::

The form allows setting up, for each warehouse, the reasons that will be automatically used by the application in case of automatic creation of warehouse records through the use of the *Stock Difference* procedure. It enables the calculation of the difference between the logical quantity and the physical quantity, that is, the one detected from the physical inventory, and automatically generates compensation records for the differences between logical and physical quantities.

The warehouse reasons that can be set in this tab are exclusively those that have the flag *Physical Inventory Management (Gestione inventario fisico)* active in the [Warehouse Reasons (Causali di magazzino)](/docs/configurations/tables/logistics/warehouse-templates). It is necessary to set, for each warehouse, a loading reason for inventory adjustments and a unloading reason for inventory adjustments.

For all details not covered in this document regarding the common functionality of forms, please refer to the following link [Common Features, Buttons, and Fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).