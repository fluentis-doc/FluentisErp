---
title: Search Planned Orders
sidebar_position: 2
---

The Search Planned Orders window opens through the following path Planning > MPS > Planned Orders > Search Planned Orders and it shows the list of planned orders already inserted in order to enable the user to edit, view and insert new ones.

The window consists of a filter area and of a result grid.

RIBBON BAR: it represents the Form Menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following: 



| Function | Meaning |
| --- | --- |
| Search | Button to apply search filter within database of the inserted Planned Orders. |
| Insert Order | Button to insert a new Planned Order. |
| Edit Orders | Button to edit a Planned Order. |
| View Orders | Button to view a Planned Order. |
| Delete Orders | Button to delete a Planned Order previously inserted. |
| Verify Availability | Button to calculate and view the availability for each single material of the production planned order at the engagement date of the same material. |
| Edit Attributes Filter | It opens a window that enables the user to decide if activate or not the Attributes Filter, which enables the user to filter the Planned Orders according to attributes inserted through the encoder into items of the same order. |

FILTER AREA: the filter area contains the list of the possible data types thanks to which it is possible to perform a selection, a search on the total inserted Planned Orders. Typically Filters have 'AND' condition and it is possible to specify more search criteria at the same time.

The user can use the following filters:

**Item**: the first combo enables the user to set the item class. Through a double click on the second field it is possible to select a single item (code and description);

**Variant**: thanks to a double click the user can open a variants help through which it is possible to select the item variant;

**Customer**: through these 3 fields there are specific Customer data: 'account', 'detail account', 'customer name'. Thanks to a double click on the first field it is possible to open a 'Accounts Help' from which to select the customer in order to filter;

**Job Order**: through this field it is possible to insert the sales job order number through the specific job order help;

**Working Start From…To…**: through these fields it is possible to insert (in a range) the estimated working start date (from…to…);

**Working End From…To…**: through these fields it is possible to insert (in a range) the estimated working end date (from…to…);

**J.O. Type**: through this combo it is possible to insert the Production Job Order Type and to filter according to this criterium and by viewing all the Production Job Orders related to the selected type;

**Prod. J.O.**: through these 2 fields it is possible to set the production job order number and year;

**Order**: through this field it is possible to filter according to the planned order number and year;

**Order Type of**: through these flags it is possible to filter only the Purchase, Production or Subcontractor Orders; in case that the whole number of flags is active, they are totally viewed;

**Group**: through this box it is possible to insert the group number to which the planned orders, that user wants to view in the grid, belong;

**Maintenance Orders**: through this flag it is possible to decide to view even the planned maintenance orders;

**Summary Month**: activating this flag and as regards each item, the result grid shows a line per month, adding the total estimated quantity to all planned orders that are in the month. The new visualization can be activated after having clicked on icon, which enables the user to refresh the visualization on window.

RESULT GRID: In the result grid it is possible to view the list of Planned Orders that correpond to the filter data, above mentioned. After having specified the values through which it is possible to obtain a search of Planned Orders, the user, by clicking on the Search button in the related Ribbon, will obtain the list of the desired Planned Orders in the result grid.

The columns, that can be viewed in the result grid, are the following:

**Procurement**: the column shows the procurement type of the Planned Order (Production, Purchase or Subcontractor) according to the Procurement Type set for the order item into its MRP Parameters;

**Year**: the column shows the Planned Order year;

**Order**: the column shows the Planned Order number;

**Level**: the column shows the bill of material list, that identifies the Planned Order item;

**Order** **Type** **Code**: the column shows the Planned Order Type code;

**Order Type Description**: the column shows the Planned Order Type description;

**Job Order Year**: the column shows the production job order year from which the planned order has been generated. The column is free in case that the planend order has been manually generated or comes from MRP elaboration;

**Job Order Number**: the column shows the production job order number from which the planned order has been generated. The column is free in case that the planned order has been manually generated or comes from MRP elaboration;

**Job Order Type Code**: the column shows the Production Job Order Type code;

**Job Order Type Code**: the column shows the Production Job Order Type description;

**Start Date**: the column shows the estimated start date of the Planned Order. In case that it is a purchase or subcontractor planned order, this date represents the date in which the purchase order has to be sent to vendor and it will be subsequently generated through the same order release. In case that is is a planned production order this date represents the estimated start date of the first working phase of the item route;

**FOB Date**: the column shows the FOB ('Free on Board') Date that is calculated by adding the estimated start date to the Procurement Time inserted into Preferential Vendors tab of the planned order item. This column is managed then only for items with Purchase procurement type;

**ETA Date**: the column shows the ETA ('Estimated Time of Arrival') Date that is calculated by adding the FOB date to the Delivery Lead Time inserted into Preferential Vendors tab of the planned order item. This column is managed then only for items with Purchase procurement type;

**End Date**: the column shows the estimated end date of the Planned Order. In case that it is a purchase or subcontractor planned order, this date represents the estimated end date of the last working phase of item route;

**From Minimum Availability**: the column shows a flag that is active only if the planned order has been generated using the General Scheduling procedure and by having activated into Scheduling parameters the flag that enables the user to consider the minimum availability in period;

**Class**: the column shows the item class of the Planned Order;

**Item Code**: the column shows the item code of the Planned Order;

**Variant**: the column shows the possible item variant;

**Quantity**: the column shows the quantity of the item Planned Order;

**Confirmed** **Quantity**: the column shows the confirmed quantity of the item Planned Order, different to zero only in case of the planned order coming from MRP elaboration;

**Customer**: the column shows the customer account and detail account linked to the Planned Order;

**Vendor**: the column shows the account and detail account of vendor linked to the Planned Order, if purchase or subcontractor;

**Characteristic**: the column shows the item characteristic code of the Planned Order;

**Job Order**: the column shows the possible sales job order linked to the Planned Order;

**Item Description**: the column shows the item description of the Planned Order;

**Customer Description**: the column shows the customer company name linked to the Planned Order;

**Vendor Description**: the column shows the vendor company name linked to the Planned Order, if purchase or subcontractor;

**Characteristic Description**: the column shows the item characteristic description of the Planned Order;

**Purchase Economic Lot**: the column shows the preferential vendor purchase economic lot of purchase Planned Order;

**Multiple Purchase Economic Lot**: the column shows the multiple purchase economic lot of preferential vendor of purchase Planned Order item;

**Procurement Time**: the column shows the procurement time of preferential vendor of purchase Planned Order item;

**Production Economic Lot**: the column shows the production economic lot inserted into MRP parameters of production Planned Order item;

**Multiples Production Economic Lot**: the column shows the multiples production economic lot inserted into MRP parameters of production Planned Order item;

**Reorder Point**: the column shows the value of the reorder level inserted into Procurement tab of item register of Planned Order;

**Minimum Stock**: the column shows the minimum stock value inserted into Procurement tab of item register of the Planned Order;

**Qty. Used**: the column shows the quantity used on the current date of Planned Order item;

**Compulsory**: the column shows a flag that if active enables the user to indicate that the planned order can not be moved absolutely.






