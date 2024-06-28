---
title: Items
sidebar_position: 1
---

The insertion of an item.

The **Line Type** gives the possibility to select items with different characteristics:

**Encoded Item**: refers to the encoded items in register and can be accounted in cost accounting and recorded on stock; 

**Not Encoded Item**: refers to descriptive items that can be accounted in cost accounting, but that can not be moved in warehouse; 

**Charge Item**: refers to encoded or not encoded items and are reported on documents summary, if charge item is encoded and has a fiscal interest it will be moved in warehouse, if not, it will not moved in warehouse; 

**Notes Item**: is a simple note and does not influence accounting and warehouse;

**Item Giveaway**: the item giveaway is managed as an encoded or not encoded item for tax and warehouse purposes, but being a giveaway it is included in summaries of invoice and according to 'VAT recourse' flag it is possible to calculate the giveaway VAT amount at the expense of customer or not;

**Account Item**: the account item line is used in order to create some account invoices;

**Account Reversal Item**: it closes the account item line and accounts that can be selected through an accounts help. These data can be automatically inserted when class or matrix are inserted because the 'codified item' line type is selected automatically;

**Code**: refers to 'barcode item code' inserted into Items, 'Barcode Code' tab. At the moment of its insertion the program takes the associated item automatically with all data of its register.

The insertion of class or matrix occurs manually or thanks to 'Items Help' (double click on yellow section that will propose all data inserted in item register). After having inserted the item, its description will be taken automatically by register. If item has variants, it will be necessary to select the desired variant from Variants combo box.

**Unit of Measure**: it is possible to propose the main item U.M., but the user can choose an alternative unit of measure;

**Variants**: refers to the selected item variants, if exist. The type of varianti s necessary for item with this particular configuration, that can have a different price compared to the standard one. Consequently, the item price with variants can be different from the price of item without variants. This may require, possibly, the management of item variants in the reference sales price list;

**Quantity**: represents the main U.M. quantity; it can be inserted manually or can be taken from the sales document that has been considered for the execution (e.g. sales order);

**Price**: it is proposed by the price list inserted in customer register; reference price list of the same item is shown in 'Total' tab. The same sales document could contain items from different price lists, if in customer register there are more price lists associated in cascade (see customer/vendor register). Thanks to a double click on Price Lists field ('Total' tab) the user can select a different offer compared to the automatic one, from which it will be possible to consider the price of the inserted item. Without price list, proposed data refer the sales price of item register;

**VAT**: it is very important data inserted into VAT field of customer register. If this is not available, a value of the item register is proposed. This is an obligatory field;

**Sales Turnover**: data inserted in 'Generality' tab of items register are proposed. If this is not, no data are proposed, but at the moment of an invoice accounting, it will be possible to consider value inserted into 'Offset Cost/revenue (def.)' field of customer register;

**Alternative Unit of Measure**: it is possible to propose the U.M. in alternative U.M. tab of customer register with the 'default' (automatic) flag set;

**Alternative Quantity**: it is possible to propose the value related the alternative unit of measure, calculated by multiplying or dividing the operational quantity (related to the main U.M.) with the conversion factor set in item register.



| Function | Meaning |
| --- | --- |
| Save | Button to save the performed operations. The same result can be obtained by moving the cursor on a different line compared to the one that the user wants to save. |
| New Item | Button to insert a new item. |
| Delete Item | Button to delete the inserted item. |
| Several – Search Last Prices | It enables the user to search the sales conditions for item in previous sales documents and enables to consider price and discount. |
| Open Availability | Button to open the “Item Availability”. |
| Expand/Collapse Items Grid  | It enables the user to view or hide “total”, “data”, “variant”, “lots” tabs. |
| Import Items | It enables the user to import item from a document. |
| Import from Barcode | It enables the user to import from barcode. |
| Stock Records | It enables the user to add a note type item from stock records. |
| Accounts Management |  |
| Packing Management |  |
| Item Attributes | Button to open an attributes window from item register. |






