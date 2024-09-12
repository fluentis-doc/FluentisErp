---
title: Items
sidebar_position: 4
---

The line type gives the possibility to select items with different features:

** Codified Item**: it refers to codified items on register and can be accounted in analytical accounting and recorded on stock; 

**Not codified Item**: it refers to descriptive items that can be accounted in analytical accounting, but that cannot be moved on warehouse; 

**Charges Item**: it refers to codified or not codified items and are summarized on documents. If charge item is codified and if it has fiscal interest, it will be moved on warehouse; if it is not codified and it has not fiscal interest it will not possible to move items on warehouse; 

**Notes Item**: it is a simple note, that does not influence on accounting and on warehouse. Giveaway Item: it is managed as a codified or not item for fiscal purposes but being a giveaways it is counted separately in invoice summaries and according to “Vat Recourse” is calculated the giveaway VAT amount at the expense of the customer or not.

These data can be inserted automatically when class or matrix are inserted, because the line type “codified item” is selected automatically. 

**Code**: it refers to the “barcode item code” inserted on Items, tab “Barcode code”. At the moment on which this is inserted, the program will use automatically the item associated with all data of its register.

The insertion of class or matrix can occur manually or thanks to “Items Help” (double click on yellow field) which will propose all the related data inserted on item register. After the insertion of item, its description will be taken by register automatically. If the item has variants, it will be necessary to select the desired variant from Variants combo box. The lot is generated automatically or its code can be inserted.

**Variants**: it refers to the variants of the selected item, if exist. The choice of the variant is necessary for items with this particular configuration, that can be have a different price from the standard one set. Consequently, the item price with variants can be different than the item price without variants. This may require, if necessary, the management of item variants on the reference sales price list.

**Unit of Measure**: it is possible to propose the main item unit of measure, but the user has the possibility to choose the alternative unit of measure.

**Quantity**: it represents the main U.M. quantity; it can be inserted manually or can be taken from purchase document considered for the execution (for example from purchase order).

**Price**: the price is proposed from price list inserted on vendor register; the reference price list for the same item can be viewed on “Totals” tab. The same purchase document could contain items from different price lists, if on vendor register there are more cascade price lists associated (see customer/vendor register). Through a double click on Price Lists field (Tab “Totas”) the user has the possibility to select a different offer compared to the default one, from which it will be possible to take price of the inserted item. Without price list, data proposed correspond to the last cost of item register.

**VAT**: It is a priority to have data inserted on VAT field of vendor register. If this does not exist, it is possible to propose value that is on item register. This is an obligatory field.

**Purchase Turnover**: it is possible to propose data inserted on “Generality” tab of items register. If this does not exist, it is not possible to propose data, but at the moment of invoice accounting, it will be possible to consider value inserted on “Offset Cost/Revenue (def.)” of vendor register.

**Alternative Unit of Measure**: it is possible to propose the U.M. that is in the alternative U.M. of item register with “default” flag set.

**Alternative Quantity**: it is possible to propose value related to the alternative U.M., calculated by multiplying or dividing the operational quantity (related to the main U.M.) together with conversion factor set on item register.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save the performed operations. The same result can be obtained by moving the cursor on a different line from the one to be saved. |
| New Item | Button to insert a new item. |
| Offset Invoices to Be received | Procedure to transfer invoices to be received. |
| Edit Turnover | Button to edit the purchase turnover type. |
| Delete Item | Button to delete the inserted item. |
| Expand/Collapse Items Grid | Button to view or hide the following tabs: “totals”, “data”, “variant”, “lots”. |
| Import from Barcode | Button to import from barcode. |



| Function | Meaning |
| --- | --- |
| Document Manager | Management of document storage associated to the mask in use. |






