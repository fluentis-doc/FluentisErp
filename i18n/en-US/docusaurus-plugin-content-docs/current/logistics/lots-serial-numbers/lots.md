---
title: Lots
sidebar_position: 2
---

The Search Lots window can be opened through the following path Logistics > Lots/SN > Lots > Lots, and it shows the list of whole number of lots in database, allowing the user to edit them and to view details.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following: 



| Function | Meaning |
| --- | --- |
| Search  | Button to apply search filters within database of inserted lots. |
| Edit Lot | It refers to the procedure to edit an inserted lot. |
| View Lot | It refers to the procedure to view an inserted lot. |
| Change Lot Status | It refers to the procedure to change status of selected lots. Using this button it is possible to open a pop-up window called 'New Lot Status' [IDD_NEWSTATOLOTTO] within which it is possible to select one of lots status in the specific table, to click on 'OK' button and to edit massively all the selected lots status. |

The use of 'Edit Lot' button, as explained in section about ribbon bar, enables the user to edit lot in detail, opening the 'Edit Lot' window.



The window consists of a filter are and a result grid.

FILTER AREA: the filter area contains the list of possible data type thanks to which it is possible to perform a selection, a research on the total loaded lots. Typically, filters have 'AND' condition and it is possible to specify more filter criteria at the same time.

The user can use the following filters:

**Item**: the first combo enables the user to set the item class. Through a double click on the second field it is possible to open a 'Items Help' through which to select the single item (code and description);

**Variant**: thanks to a double click the user can open a variants help through which it is possible to select the item variant;

**Lot No** **.**: through this field it is possible to filter according to Lot Code;

**Vendor Lot**: through this field it is possible to filter according to Vendor Lot;

**Warehouse**: in this combo it is possible to set the warehouse code on which user wants to search for lots to be viewed in grid;

**Start/End Val. Date**: in these 2 fields it is possible to set a date range in order to filter lots according to the related start and end validity date;

**From/To Lot Load**: in these 2 fields it is possible to set a date range in order to filter lots according to the related warehouse load date;

**Customer**: in these 3 fields it is possible to specify the Customer data: 'account', 'detail account', 'company name'. Through a double click on the first field it is possible to open a 'Accounts Help' from which to select customer in order to filter;

**All**: activating this flag the user can filter all lots on database;

**Opened**: activating this flag the user can filter only opened lots, that are lots with warehouse stock;

**Closed**: activating this flag the user can filter only closed lots, that are lots with zero stock;

**Group by Lot Code**: activating this flag it is possible to activate another grid within which it is possible to view line for every Lot Code, together with added quantities of different lines of the same lot, warehouse by warehouse and item by item;

**J.O./Year**: through this field it is possible to filter lots according to sales job order linked to them and by using the specific job orders help that can be exploded thanks to a double click on yellow field.

RESULT GRID: in the result grid it is possible to view the list of Lots which correspond to filter data, above mentioned. After having specified values through which to obtain a Lots search the user, by clicking on Search button on the related Ribbon, will obtain the list of the desired Lots in the result grid.

The result grid can show the following columns:

**Closed**: flag, if active, highlights that stock is zero;

**Lot No.**: the column shows the Lot Code;

**Start Date**: the column shows the lot start date;

**Due Date**: the column shows the lot due date;

**Quantity**: the column shows the initial lot quantity for each warehouse;

**Avail. Quantity**: the column shows the available quantity for each lot warehouse, that is quantity in stock less the quantity used in documents. The available quantity can be viewed as zero in case that lot has a 'Not available for automatic pickups' status;

**Lot Status**: the column shows the lot status. It is a fact that could be not managed;

**Sales Lot**: the 'Sales Lot' flag, if active, highlights that lot is available to be taken within sales, production documents or stock records;

**Ware**.: the column shows the warehouse code on which there is the lot;

**Ware. Description**: the column shows the warehouse description on which there is the lot;

**Class**: the column shows the item class to which the lot refers;

**Item Code**: the column shows the item code to which the lot refers;

**Variant**: the column shows the possible item variant to which the lot refers;

**Job Order**: the column shows the sales job order linked to lot;

**Notes**: the column shows the lot notes;

**Variant Description**: the column shows the variant description of item to which lot refers;

**Item Description**: the column shows the item description to which lot refers;

**Vendor Lot**: the column shows the vendor lot;

**Vendor**: the column shows the lot vendor data, regarding the document vendor with which the same lot has been loaded;

**Pallet**: the column shows lot pallet.






