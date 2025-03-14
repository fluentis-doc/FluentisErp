---
title: Management of Main and Alternative Units of Measure (Gestione Unità di misura principale e alternativa)
sidebar_position: 5
---

This feature allows for the definition and use of different units of measure for the same product in different contexts, such as sales, purchases, or inventory management.

:::note
To enable the management of alternative units of measure, it is necessary to activate the flag for Managing double unit of measure in the [Parameters](/docs/configurations/parameters/sales/dn-parameters).
:::

The main unit of measure, which is mandatory, is defined for each item in its registry and cannot be modified after the item has been used in documents or warehouse movements. The alternative unit of measure, on the other hand, allows for the management of the product in a unit different from the main one and can be set in the "Alternative Units of Measure" tab of the item registry.

In the documents, the main unit of measure is displayed in the grid of [Items](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn), while the alternative unit of measure widget is visible in the "Item Data" tab, containing the fields "Alternative Quantity" and "Alternative Unit of Measure Price," but only if the flag "Management of Double Unit of Measure" is active in the module parameters.

If the flag "Automatic Proposal of Alternative Unit of Measure" is enabled, the system will automatically propose the alternative unit of measure with the "Default" flag active in the item registry, calculating and automatically entering the alternative quantity using the conversion factor.

The flags present in the "Alternative Units of Measure" tab of the item registry influence the proposal and calculation of quantities in the documents. If the "Default" flag is active, that will be the unit of measure used for the automatic proposal. If the "Mandatory" flag is activated, any modification of the main or alternative quantity will result in the automatic recalculation of the counterpart, maintaining the link through the conversion factor. With the "Priority" flag active, however, the alternative quantity prevails, calculating the main quantity without recalculating the alternative.

The calculation of the alternative quantity is based on the conversion factor, which can be multiplied or divided by the main quantity; this choice is configured in the [Initial Warehouse Parameters](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) through specific flags.

In the documents, in the "Unit of Measure" column, the main unit of measure of the item is proposed, but the user can replace it with one of the available alternative units of measure. If an alternative unit of measure is selected in this column, it will not be possible to specify another in the corresponding widget, as only two units of measure can be used in a warehouse movement: the management unit (always the main unit of measure of the item) and the alternative one, specified in the "Unit of Measure" column or in the Alternative Unit of Measure widget.