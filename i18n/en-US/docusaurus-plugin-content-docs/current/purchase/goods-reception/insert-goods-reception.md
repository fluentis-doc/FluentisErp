---
title: Goods Reception Management
sidebar_position: 3
---

In order to insert a new goods reception it is necessary to insert:

**Vendor**: through help or manual insertion of account and detail account,

**Date**: it has to be proposed the same as the current date,

**Number:**it has to be proposed the last progressive number for date,

**Type**: Goods reception.

The items type that can be inserted on goods receptions concern only items codified on register and can be inserted manually or through import from barcode or purchase orders.

**Code**: it refers to “barcode item code” inserted on Items, “Barcode” tab. During the insertion the program takes automatically the associated items with all data of its register. The insertion of class or matrix can occur manually or thanks to “Items help” (double click on yellow field) which will propose all the related data inserted into item register. After the item insertion, its description will be taken automatically by register. If item has variants, it will be necessary to select the desired variant from Variants combo box.

**Variants**: it refers to variants of the selected item, if exist. The choice of variant is necessary for items with this particular configuration, that can be have a different price compared to the standard one set. Consequently the item price with variants can be different than the item price without variants. This may require the management of item variants on reference sales price list.

**Vendor Item**: it refers to the vendor items table, the item can be selected through help or inserted manually.

**Vendor Item Variant**: it refers to the table of vendor items variant, the variant can be selected through help or inserted manually.

**Unit of Measure**: it is possible to propose the main item U.M., but the user has the possibility to choose the alternative unit of measure.

**Document Quantity**: it represents the main U.M. quantity; it is possible to insert the quantity referred to the executed purchase order, this is not obligatory.

**Received Quantity**: it represents the received quantity.

**Alternative Unit of Measure**: it is possible to propose the U.M. that is located within the alternative U.M. tab of item register with default flag set.

**Alternative Quantity**: it is possible to propose value related to the alternative U.M., calculated by multiplying or dividing the operational quantity (related to the main U.M.) with conversion factor set on item register.

**Price**: it represents the price that is located within purchase order or the last cost of items register.

**Option**: obligatory data which correspond to the options table of list.

**Warehouse**: it is the goods reception warehouse, it is taken by the purchase order if reception line has executed a purchase order line or it can be inserted manually by the user.

**Template**: it refers to the goods reception template, it is taken from purchase order if reception line has executed a purchase order line or it can be inserted manually by the user.

**Item Description**: it is possible to propose the item description and it is not possible to edit it

**Order Reference**: if line has been created by executing a purchase order line, it is possible to report the executed order number

**Location**: if template has a default location it is possible to propose that location, otherwise it can be inserted manually if warehouse is managed with locations.

**Job Order**: it is possible to associate a sales job order to each reception line.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions about a pre-existing document rather than to create a new one. The list of features is the following: 

 



| Function | Meaning |
| --- | --- |
| Save Goods Receipt | It saves reception. |
| New Item | It inserts a new item on items grid. |
| Delete Items | It deletes the selected item lines. |
| Item Property | It item line has executed a purchase order line through this function, it is possible to view data of reference purchase order and summarized data of item line. |
| From Purchase Order | The procedure enables the user to create reception lines by executing purchase orders. See procedure point 6.1. |
| Import from Barcode | The procedure enables the user to import item lines from a table configured on parameters. See 6.2. procedure. |






