---
title: Purchase Order Types 
sidebar_position: 3
---

This table is essential for defining the various types of purchase orders available, each with its own characteristics. It can be accessed from **Configuration > Tables > Purchases > Purchase Order Types**.

The fields present are:

**Code/Description**: mandatory fields to define the type and description of the purchase order.

**Numeration/Description**: mandatory field for the [Numeration](/docs/configurations/tables/fluentis-numerations) to be associated with the order type.

**Automatic Order Confirmation**: if set, at the time of creating an order with this *Order Type*, the *Order Confirmation Date* field present in the order header is also filled with the current date.

**Cash Flow**: if set, the order type contributes to the cash flow calculation.

**Warehouse/Warehouse Description**: it is the receiving warehouse of the goods that is automatically set on the item lines of orders created with this order type.

**Template/Template Description**: it is the [Template](/docs/configurations/tables/logistics/warehouse-templates) for the movement of incoming goods, which is automatically set on the item lines of orders created with this type.

**Control availability**: if set, orders of this type contribute to the availability calculation and are visible in the [Availability Analysis](/docs/erp-home/registers/items/availability-analysis) form.

**Agricultural VAT Purchases**: if active, at the time of order creation, the system checks if there is an agricultural VAT code for the item used; if it does not exist, the normal VAT code is used.

**Extra Data Matrix Management**: if active, it allows displaying, in the case of managing items with matrices, an additional tab for entering the quantity values for each matrix cell.

**Price list to be updated**: serves to automatically update the list prices based on the prices specified in the order. If this flag is not selected, it will still be possible to manually update the list price on the order lines based on the price indicated on the line.

**Delivery Note type**: it is the type of purchase DDT to create when using the [Get from Orders](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) procedure.

**Print Report**: in this field, you can choose the default print to use (it should be noted that to print the default report, during printing, it will be necessary to select the *Multiple Prints* option); in the next field, it is possible to indicate a **Number of copies** to print.

**Vendor control**: serves to activate a control whereby, at the time of selecting the recipient of the order, the procedure will allow us to select only supplier-type accounts and not customer-type accounts.

**Fixed Assets Management**: this flag enables the [Fixed Assets Management](/docs/finance-area/fixed-assets/general-overview) for that order type and allows you to select the **Operation type** that you want to perform.