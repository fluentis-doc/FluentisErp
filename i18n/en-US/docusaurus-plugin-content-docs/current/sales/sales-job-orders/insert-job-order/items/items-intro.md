---
title: Items
sidebar_position: 1
---

The** line type** offers the possibility to select items with different features; 

**Codified Item**: it corresponds to codified items in register, that can be accounted on analytical accounting and recorded on warehouse; 

**Not Codified Item**: it corresponds to descriptive items that can be accounted in analytical accounting, but they cannot be moved in warehouse; 

**Charges Item**: it corresponds to codified or not items and they are summarized on documents in a distinct way, if charge item is codified and has fiscal interest it will be possible to move it on warehouse, if it is not codified or has not fiscal interest it will not be move on warehouse; 

**Notes Item**: it consists on a simple note, it does not affect the accounting and warehouse.

These data can be inserted automatically when during the insertion of class or of matrix directly, because the line type 'codified item' is selected automatically.

The insertion of class or matrix can be performed manually or through the use of 'Items Help' (double click on yellow section), which will propose all related data inserted on item register. After having inserted item, its description will be taken automatically by register. If item has variants, it will be necessary to select the desired variant from Variants combo box.

**Quantity**: it represents the main unit of measure quantity; it can be inserted manually or it can be taken by sales document considered for the execution (for example sales order).

**Price**: it is proposed by the price list inserted on customer register; the reference price list for the same item can be viewed on 'Totals' tab. The same sales document could contain items coming from different price lists, if more cascade price lists are associated on customer register (see customer/vendor register). Through a double click on Price Lists field (Tab 'Totals') the user has the possibility to select an offer different from the default one, from which it will be possible to take the price of the inserted item. Without price list, data proposed correspond to sales prices taken by item register.

**VAT**: it is a priority to insert data on VAT field of customer register. If this does not occur, it is necessary to propose value of item register. It is an obligatory field.

**Sales Turnover**: it is necessary to propose data inserted on 'Generality' tab of items register. If this does not occur, no data are proposed but at the moment of invoice accounting, it will be necessary to consider the value inserted on field 'Offset Cost/Revenue (def.)' of customer register or there will be an error message.

**Variants**: it refers to variants of the selected item, if exist. The variant is important for items with this particular configuration, that can have a different price compared to the standard one. Consequently the item price with variants can be different from the item price without variants. This may require, if necessary, the item variants management on reference sales price list.

**Unit of Measure**: it is proposed the main item U.M., but the user has the possibility to choose an alternative unit of measure.

**Alternative Unit of Measure**: it is possible to propose the U.M. that is on alternative U.M. tab of item register with the 'default' flag set.

**Alternative Quantity**: it is proposed value related to the alternative unit of measure, calculated by multiplying or dividing the operational quantity (related to the main U.M.) with conversion factor set on item register.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions. The list of features is the following: 



| Function | Meaning |
| --- | --- |
| Save | Button to save the operations performed. The same result can be obtained by moving the cursor on a different line compared to the one to be saved.  |
| New Item | Button to insert a new item. |
| Delete Item | Button to delete the inserted item. |
| New Child | As regards the job orders configured with a hierarchical structure in <Tables/Sales/Sales Job Orders Type> it is possible to insert items on the current structure. |
| New Brother | As regards the job orders configured with a hierarchical structure in <Tables/Sales/Sales Job Orders Type> it is possible to insert items on the current structure. |
| Expand/Collapse Items Grid | It enables the user to view or hide the following tabs: 'totals', 'data', 'variant', 'lots'. |
| Delete Discounts | It enables the user to delete the discount associated to an item. |



| Function | Meaning |
| --- | --- |
| Document Manager | Management of document storage associated to the mask in use. |






