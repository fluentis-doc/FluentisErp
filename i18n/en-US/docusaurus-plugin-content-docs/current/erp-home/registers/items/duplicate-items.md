---
title: Duplicate Items 
sidebar_position: 4
---

The procedure for duplicating an item can be accessed through the path **Home > Items > Duplicate Items**.

In this window, new items can be created by duplicating existing items. This way, the common information between the two items can be duplicated.

### Filter Area

In the filter area, it is possible to set a series of filters that allow for searching within the database for the item or items that possess certain characteristics in order to more easily identify an item that closely resembles the item or items to be created, which will serve as the starting point for the duplication procedure.

With the help of these filters, you can view: a single item (for example, by searching with the item code) or multiple items belonging to the same class by entering the item class; items with the same characteristics or the same merchandise category (for example, by searching with characteristic and merchandise category); items of the same type, or the same nomenclature; all items having the same preferred supplier, the same status, or version; in the case of purchased materials, it is possible to search for the item by the supplier's item code; finally, items can be searched by their barcode.

By opening the **Advance search** and **Batches and Serial Number** expanders, you can choose to filter based on the item's status (dummy, archived/unarchived, out of stock/not out of stock) or based on the management of the item (if managed by lots, by serial numbers, Rfid managed or unique Rfid).

Once the desired filter parameters are set, clicking on the **Search** button in the ribbon bar will prompt the system to identify the item or series of items that correspond to the selected parameters and display them in the results grid.

*Specific buttons*: 

> **Generate item prototypes**: a button that will be activated when the parent item is selected and the child item is coded in the first tab of the window called *Item to be duplicated*; this will generate the prototype of the child item that will then be defined and confirmed;  
> **Select/Deselect All**: buttons that allow selecting or deselecting all items resulting from the set search filters;  
> **Delete item prototype**: a button that allows deleting the generated item prototype once selected, before it is officially created through the *Confirm prototype generation* procedure;  
> **Confirm prototype generation**: a button that allows confirming the previously created prototype, officially generating the child item in the database.  

Below, the steps to allow the item duplication will be detailed.

### Item to Duplicate

This tab includes the results grid in which the item and/or the list of items corresponding to the previously set filter criteria for identifying the starting item will be displayed.

Once the parent item to start the duplication process is identified, a few data fields will automatically be populated in the section below: **Company**, **Division**, **Item class**, and **Number of prototypes**.

All this data can still be manually modified through the combo boxes or by entering a different number of prototypes in the **Number of prototypes** field.

The **Item code**, on the other hand, will be created based on the composition of the item code that you have chosen to set according to the item class in the **Item Class** table.

As can be seen, by selecting the item class, the grid on the right contains information that indicates how the codes of the items belonging to that item class should be established; in the example above, the code is composed in order of an extra data point, namely the country (the abbreviation) that will compose both the code and the description; from a second extra data point which will be the color, which will also comprise both the code and the description; a further extra data point which in this case is again the country, followed by a progressive code of 3 digits in length that will be calculated starting from value 1, and finally a fixed value which in this case has been established to be the letter F.

This table is also summarized in the tab itself, **Items to Duplicate**, where the information related to the values mentioned above will be compiled (thus indicating the country, color, etc., based on the type of extra data chosen).

Once the data are set, the code and description of the new item will automatically appear in the **Code** and **Description** fields.

Subsequently, parameters can be set to proceed with the creation of the **Item Prototype** by clicking the corresponding button present in the ribbon bar of the form.

The generated prototype will be displayed in the next tab, Item Prototypes.

### Parameters

In this tab, parameters that should govern the duplication of the item in question can be selected.

The screen contains a series of flags that will indicate which characteristics of the item should be duplicated exactly as they are in the parent item, and which can still be updated and/or modified in the child item.

The information that can be duplicated includes: costs, weights and dimensions, lots and S/N, procurement, variants, preferred suppliers (in the case of purchase items), customers (in the case of sales items), alternative U.M, images, notes, barcode codes, information contained in the Administration tab, extra data, packaging, etc. These are all pieces of information contained within the tabs that form the item, and have been detailed in the corresponding articles (see [Item Creation](/docs/erp-home/registers/items/create-new-items/create-new-item) with the related documents linked).

It is also possible to decide to duplicate the [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) of the item, its [Routing](/docs/erp-home/registers/production/routes/new-route), and the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the item.

Also within this tab, there is a further section where you can define a cell fill color and text color to identify when generating prototypes: the rows containing a missing data point (for example, if one of the pieces of information you want to duplicate is empty in the parent item, the corresponding row in the child item will be highlighted in the chosen color) and items that have already been coded previously (in case you are proceeding with the creation of an item that is exactly identical to an already existing item within the database).

Once the parameters are set, you can proceed with the duplication of the item.

For everything not detailed in this document about the common functionality of forms, please refer to the following link [Common features, buttons, and fields](/docs/guide/common).