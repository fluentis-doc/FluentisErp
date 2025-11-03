---
title: Goods Receipt Types
sidebar_position: 4
---

The table opens through the path **Tables > Purchases > Goods Receipt Types** and is used to determine the properties of a goods receipt.

The fields present are:

**Code**: code of the type of goods receipt.

**Description**: description of the type of goods receipt.

**Delivery Note**: if active, the system allows the generation of a Purchase Delivery Note from the goods receipt. If not active, it will not be possible to generate the Purchase Delivery Note from the goods receipt, so the warehouse loading operations and Purchase Delivery Note registration will remain unconnected.

**Invoice**: if active, the system allows the generation of an invoice from the goods receipt. If not active, it will not be possible to generate the invoice from the goods receipt, hence the warehouse loading operation will remain unconnected.

**Unsumed Item Quantity Order**: if set, when fulfilling order lines with partial quantities in the same goods receipt, this flag will allow reporting the fulfilled quantities of the order divided by item line without summing the quantities.

**Numeration**: determines the [Numeration](/docs/configurations/tables/fluentis-numerations) and the related **Description** associated with the *Goods Receipt Types*.

**Quality Control**: the *Goods Receipt Types* that have this flag active are visible in the [Import Items To Check](/docs/quality/item-control/items-control/item-control-import/) form located in the *Quality* area.

**Fixed Assets Management**: this flag enables the [Fixed Assets Management](/docs/finance-area/fixed-assets/general-overview) for that type of receipt and allows selecting the **Operation Type** that one wants to perform, which in the case of purchases will be an *Original Cost*.

:::tip NOTE 
The Warehouse and the Template to be used for the Goods Receipt Loading must be defined in the Supplier Order Parameters, tab [Loading](/docs/configurations/parameters/purchase/purchase-orders-parameters).
:::