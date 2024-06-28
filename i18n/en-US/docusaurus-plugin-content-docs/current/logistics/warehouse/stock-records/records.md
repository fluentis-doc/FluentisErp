---
title: Records
sidebar_position: 2
---

The 'Stock Records Search' window can be opened through the following path Logistics > Stock > Records > Records, and contains the list of database stock records, editing them and viewing a detail.

The window consists of a filter are and of a result grid.

The user can use the following filters:

**Warehouse**: through this combo it is possible to set the warehouse code for which to filter records. In static next there is the description of the selected warehouse;

**Template**: through this combo it is possible to set the warehouse template code for which to filter records. In static next there is the description of the selected template;

**From Number…To Number…**: through these 2 fields it is possible to set a numbers range in order to filter records according to their progressive number;

**From Date…To Date…**: through these 2 fields it is possible to set a dates range in order to filter records according to their insertion date;

**Reference Document**: through this field it is possible to filter stock records according to this field where usually appears the reference document, that has generated the same record;

**Document Date**: through this field it is possible to filter stock records according to the date of the reference document, that has generated the same record;

**Customer / Vendor**: through this field it is possible to filter the stock records according to customer or vendor of document whose load and unload has generated the record;

**Prod. J.O.**: through these 2 fields it is possible to insert year and number of the production job order from which the stock record has been generated thanks to following releases and signals;

**Item**: the first combo enables the user to set the item class. Through a double click on the second field it is possible to open a “Items Help” through which to select the single item (code and description). By filtering per item it is possible to find all records within which there is an item movement;

**Variant**: thanks to a double click it is possible to open a variants help, through which the user can select the item variant and filter records within which there is a movement for that item variant;

**Lots**: through this field it is possible to filter records according to the Lot Code. In this way it is possible even to find all records within which there is a movement of that item lot;

**Job Order**: through this field it is possible to filter records according to the sales job order linked to the header, by using the specific job orders help that can be exploded thanks to a double click on yellow field.

 

Hereinafter the list of columns that can be viewed in the result grid:

**Warehouse**: the column shows the warehouse stock on which the record has been generated;

**Template**: the column shows the warehouse template code that has performed movement and that has been inserted into the record header;

**Date**: the column shows the insertion date of the warehouse record;

**Number**: the column shows the progressive number of the warehouse record;

**Reference Document**: the column shows what is contained in “Reference Document” field of record header;

**Doc. Date**: the column shows the reference document date that is in the record header;

**Load / Unload**: the column shows the record type. It can belong to a load or unload record;

**Offset Ware.**: the column shows the stock code of offset record, if available;

**Offset T.**: the column shows the stock code of offset record, if available;

**Off. No.**: the column shows the progressive number of offset record, if available;

**Detail Account Ref. Document**: the column shows what is located within the “Reference Document” field of the detail record header, if available;

**Account / Detail Account / account/detail account description**: the column shows the account, detail account and company name of customer or vendor who is inserted into stock record header. 

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to a procedure in use. The possible features list is the following: 



| Function | Meaning |
| --- | --- |
| Search  | Button to apply search filter within database of the inserted Stock Records. |
| Insert | It refers to the procedure to insert a new Stock Record. |
| Edit | It refers to the procedure to edit a Stock Record. |
| View | It refers to the procedure to view a Stock Record. |
| Delete | It refers to the procedure to delete a Stock Record previously inserted. |
| Edit Attributes Filter | It opens a window that enables the user to activate or not the Attributes Filter. In this way it is possible to filter the Stock Records according to attributes inserted through the encoder into items of the same Record. |

FILTER AREA: the filter area contains the list of possible data types thanks to which is is possible to perform a selection, a research on the total warehouse records. Typically filters have 'AND' condition and it is possible to specify more search filters at the same time.

RESULT GRID: in the result grid it is possible to view the list of stock records which correspond to filter data, above mentioned. After having specified values through which to obtain a records search the user, by clickin on Search button on the related Ribbon, will obtain the list of the desired records in the result grid.






