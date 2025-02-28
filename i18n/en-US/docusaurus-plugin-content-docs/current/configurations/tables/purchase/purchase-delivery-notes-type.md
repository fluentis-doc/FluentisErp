---
title: Purchase Delivery Note Types
sidebar_position: 5
---

This table is essential for defining the various types of purchase DDT available, each with its own characteristics. It can be accessed from **Configuration > Tables > Purchases > Purchase Delivery Note Types**.

The fields present are:

**Code/Description**: mandatory fields to define the type and description of the purchase delivery note.

**Numeration/Description**: mandatory field for the [Numeration](/docs/configurations/tables/fluentis-numerations) to be associated with the Purchase Delivery Note type.

**Purchase Invoice Type/Description**: in this field, the [Purchase Invoice Type](/docs/configurations/tables/purchase/purchase-invoices-type) to be created when using the [Valorization Purchase Delivery Note](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) must be defined. It is possible to create the invoice from Purchase Delivery Note only if this field has been filled.

**DN Nature**: in this field, the nature of the DN must be entered: delivery, return, c/view, or return c/view. This value must be selected from a list.

**Warehouse/Warehouse Description**: the warehouse of arrival of the goods that is automatically set on the item lines of the Purchase Delivery Note created with this type.

**Template/Template Description**: this is the [Template](/docs/configurations/tables/logistics/warehouse-templates) for the movement of incoming goods that is automatically set on the item lines of the Purchase Delivery Note created with this type.

**Vendor Control**: this is used to activate a control whereby, during the selection of the addressee of the delivery note, the procedure will only allow the selection of accounts of type supplier and not of type customer.

**Cash Flow**: if set, the order type contributes to the cash flow calculation.

**Unsumed Item Quantity Order**: if set, when fulfilling order lines with partial quantities in the same Purchase Delivery Note, this flag will allow the fulfilled quantities of the order to be reported per item line without summing the quantities.

**Agricultural VAT Purchases**: if active, when creating the delivery note, the system checks if an agricultural VAT code is present for the item used; if it does not exist, the normal VAT code is taken.

**Extra Data Matrix Management**: if active, it allows for the visualization, in the case of managing items with matrices, an additional tab for entering the quantity values for each individual matrix cell.

**Print Report**: in this field, you can choose the default printing to be used (please note that, to print the default report, during printing it will be necessary to select the *Multiple Prints* option); in the next field, it is possible to indicate a **Number of copies** to be printed.

**Recycle Management**: this flag allows for the activation of Conai management for each Purchase Delivery Note type. For more details on managing expenses related to [Recycle partner code](/docs/sales/sales-flow/conai), please refer to the appropriate page of the documentation.

**Quality Control**: Purchase Delivery Note types with this active flag are visible in the form [Import Items To Check](/docs/quality/item-control/items-control/item-control-import/) located in the *Quality* area.

**Fixed Assets Management**: this flag enables [Fixed Assets Management](/docs/finance-area/fixed-assets/general-overview) for that order type and allows selecting the **Operation Type** to be performed, which in the case of purchases will be an *Original Cost*.