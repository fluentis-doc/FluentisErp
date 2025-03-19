---
title: Management of Main and Alternative Units of Measure 
sidebar_position: 4
---

This functionality allows for the definition and use of different **units of measure** for the same product in different contexts, such as sales, purchases, or warehouse management.

:::note
To enable the management of **alternative units of measure**, the **Management of double UM** flag must be activated in the [Parameters](/docs/configurations/parameters/sales/dn-parameters).
:::

The **main unit of measure**, which is mandatory, is defined for each item in its registry and cannot be modified after the item has been used in documents or warehouse movements. The **Alternative Measurement Unit**, on the other hand, allows for the management of the product in a unit different from the main one and can be set in the [Alternative Units of Measure](https://docs/erp-home/registers/items/create-new-items/item-registry/alternative-um) tab of the item registry.

In documents, the main unit of measure is shown in the **Items** grid, while the alternative unit of measure widget is visible in the **Item data** tab, containing the **Alternative quantity** and **Alternative Unit of Measure Price** fields, but only if the **Management of double UM** flag is active in the module parameters.

If the **Automatic proposal of alternative measurement unit** flag is enabled, the system will automatically propose the alternative unit of measure with the **Default** flag active in the item registry, calculating and automatically entering the alternative quantity using the conversion factor.

The flags present in the **Alternative measurement units** tab of the item registry affect the proposal and calculation of quantities in documents. If the **Default** flag is active, that will be the unit of measure used for the automatic proposal. If the **Compulsory** flag is activated, any modification of the main or alternative quantity will automatically recalculate the counterpart, maintaining the link through the conversion factor. With the **Priority** flag active, instead, the alternative quantity prevails, calculating the main quantity without recalculating the alternative.

The calculation of the alternative quantity is based on the **Conversion Factor**, which can be multiplied or divided by the main quantity; this choice is configured in the [Initial Warehouse Parameters](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) through specific flags.

In documents, in the **Units of Measure** column, the main unit of measure of the item is proposed, but the user can replace it with one of the available alternative units of measure. If an alternative unit of measure is selected in this column, it will not be possible to specify another one in the same widget, as only two units of measure can be used in a warehouse movement: the management unit (which is always the main unit of measure of the item) and the alternative one, specified in the **Units of Measure** column or in the Alternative Unit of Measure widget.