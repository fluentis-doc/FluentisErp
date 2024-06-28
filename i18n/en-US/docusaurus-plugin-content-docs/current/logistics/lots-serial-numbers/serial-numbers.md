---
title: Serial Numbers
sidebar_position: 3
---

The Serial Numbers Search window can be opened through the following path Logistics > Lots/SN > Lots > Serial Numbers and has the list of all Serial Numbers on database, enabling the user to edit them and view details.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following: 



| Function | Meaning |
| --- | --- |
| Search  | Button to apply search filters within database of the inserted Serial Numbers. |
| Edit Serial Number | It refers to the procedure to edit an inserted Serial Number. |
| View Serial Number | It refers to the procedure to view an inserted Serial Number. |

The use of 'Edit Serial Number' button, as explained before in ribbon bar section, enables the user to edit Serial Number detail, opening 'Edit Serial Number' window.

The window consists of a filter area and a result grid.

FILTER AREA: the filter area contains the list of possible data types thanks to which it is possible to perform a selection, a research on the total loaded Serial Numbers. Typically filters have 'AND' condition and it is possible to specify more search filters at the same time.

The user can use the following filters:

**Item**: the first combo enables the user to set the item class. Through a double click on the second field it is possible to open a 'Items Help' thanks to which user can select the single item (code and description);

**Variant**: through a double click it is possible to open a variants help thanks to which user can select the item variant;

**SN Code**: through this field it is possible to filter according to Serial Number Code;

**Warehouse**: in this combo it is possible to set warehouse code on which to search Serial Numbers to be viewed in grid;

**Lot No**: through this field it is possible to filter according to lot code to which the serial number belongs in order to view it in grid;

**Start/End Rec**. Date: in these 2 fields it is possible to set a date range in order to filter lots according to their warehouse load date;

**Serial Numbers on Date**: in this field it is possible to view only the serial numbers on a certain date. In this case the procedure controls all warehouse movements that have interested items managed per Serial Number and views only Serial Number on a certain date;

**Situations of S.N.**: in this section it is possible to find 4 flags that enable the user to filter Unloaded (the ones that have already been committed in some unload documents and not available), Loaded (already loaded on warehouse), Not unloaded (available and not already committed in some unload documents), Not loaded (already generated within a load document as for example purchase delivery note, but load document has not been loaded on warehouse) Serial Numbers. Obviously the combination of these flags enables the user to view Serial Numbers according to their status;

**Show Expired Serial Numbers**: this flag enables the user to view even the expired Serial Numbers on grid, that are those with End Date previous then the current one.

RESULT GRID: in the result grid it is possible to view the list of Serial Numbers which correspond to filter data, above mentioned. After having specified values through which to obtain a Serial Numbers search, the user, by clicking on Search button on the related Ribbon, will obtain the list of the desired Serial Numbers in the result grid.

The result grid can view the following columns:

**Serial Number**: the column shows the Serial Number;

**Loaded/ Not Loaded**: the column shows the 'Loaded' status if document, through which Serial Number has been generated, has already been loaded from warehouse, 'Not loaded' in the opposite case;

**Unloaded/Not Unloaded**: the column shows 'Unloaded' status if document through which the Serial Number has been generated, has already been unloaded from warehouse, 'Not unloaded' in the opposite case;

**Start Date**: the column shows the Serial Number start date;

**End Date**: the column shows the Serial Number end date;

**Lot Code**: the column shows the Lot Code associated to the Serial Number;

**Class**: the column shows the item class to which the Serial Number refers;

**Item Code**: the column shows the item code to which the Serial Number refers;

**Variant Code**: the column shows the item variant to which the Serial Number refers;

**Warehouse**: the column shows the warehouse code on which there is the Serial Number;

**Warehouse Description**: the column shows the warehouse description on which there is the Serial Number;

**Location**: the column shows the location code on which there is the Serial Number;

**Item Description**: the column shows the item description to which the Serial Number refers;

**Variant Description**: the column shows the description of item variant to which Serial Number refers.






