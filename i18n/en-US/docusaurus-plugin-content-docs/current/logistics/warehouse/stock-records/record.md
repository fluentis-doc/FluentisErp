---
title: New Record 
sidebar_position: 3
---

:::important Purpose
The introduction to warehouse records in Fluentis is a crucial element for the efficient management of logistics operations, allowing for an accurate registration of the movements of goods within the system. Records can be created automatically through various procedures, such as document receipt (for example, DDT and purchase invoices) or shipping (via DDT and sales invoice). This process not only simplifies the entry of movements but also ensures the synchronization of information between the various operational documents.

Each warehouse record allows the operator to specify fundamental details such as storage location, reason, and date. The registration of items occurs through a grid that allows for the indication of quantities and units of measure, with the option to manage batches and serial numbers when necessary. Additionally, several flags are implemented that govern the need for mandatory documents and the handling of counterparty reasons, ensuring the traceability and compliance of warehouse operations.

Another distinctive aspect is the ability to customize records based on the specific needs of the warehouse, choosing between management by location, project, or customer/supplier. This flexibility allows the system to adapt to various corporate logistics configurations, making Fluentis a powerful tool for warehouse management.
:::

The form can be opened:
- through the path **Logistics > Warehouse > Records > New Record**  
or  
- by clicking on the **New** button from the **Records** search form.

## Automatic Record Creation

Warehouse records can be created automatically through the *receipt procedures* of purchase DDT, purchase invoices, goods receipts, and through the *shipping procedures* of sales DDT, sales invoices, picking lists, material withdrawal lists, delivery DDT for work contracts, or through the *production report registration and work contract returns procedures*. 

## Manual Record Creation 

The user can also manually enter warehouse records by filling in all required fields depending on the type of item and the type of reason they choose to use.

The window for the new warehouse record consists of 2 tabs: **Record** and **Offset**.

:::note Note 
The **Offset** tab is active only if the reason entered in the first tab has an associated counterparty reason in the specific [Warehouse Templates](/docs/configurations/tables/logistics/warehouse-templates) table.     
:::

Within the warehouse record, multiple warehouse movements can be entered for different items and with different management types.

## Record 
This tab consists of a header and 4 different grids, the first of which contains the items that are being moved through the warehouse record; the other 3 grids are used depending on how the item registry and the warehouse template entered in the header are set.

### Record - Fixed Section 

**Warehouse**: represents the code of the warehouse on which to perform the registration;  
**Warehouse Templates**: mandatory data for the entry of warehouse movements. It is selected using the appropriate combo box, which only proposes the reasons related to the selected warehouse.       
**Posting date**: automatically set to the current date and specifically identifies the day when the warehouse movements are to be entered into the appropriate grid, so it can also be modified by setting, for example, a date prior to the current date. This date must always be within the Start and End Period dates entered in the first tab of the *Initial Warehouse Parameters*;   
**Record number**: proposed automatically; it is a progressive number for the warehouse that resets every day, starting automatically from number 1. Both data fields are editable by the user;

:::note Note 
After entering the first item in the grid, the date and registration number become read-only.
:::

After entering this data, the user can proceed to enter the movements into the item grid. However, there are other header data that can be filled in, specifically:

**Internal document**: in this field, the user can provide further specifics regarding the reason for creating the record. If the record has been created automatically from a *Production report*, this field shows the indication regarding the number of the report and the phase for which it was made; in the **Internal document** date field, the user can specify the date related to the document based on which they are entering the record. If the record was created automatically through the *receipt* or *shipping* of a document, this field is automatically set to the date of insertion of the document.  
If the record was created automatically from a *Production report*, this field shows the actual start date of the production order for which the production report was made.  

**Version**: through this combo box, the user can set a version different from the default, which is automatically proposed by the procedure;

**Account**: in these 3 fields, the corresponding data of the Customer/Supplier is specified: *Account*, *Detail account*, *Company name*.  
If the record was created automatically through the *receipt* or *shipping* of a document, this field automatically sets the data of the customer or supplier named on the document itself.

**Reference document**: in this field, the user can specify the document that generated the record itself.  
If the record was created automatically through the *receipt* or *shipping* of a document, this field automatically sets a parametric description of the document, showing both the description of the type of document and its number.  
If the record was created automatically from a *Production report*, this field shows the production order number for which the production report was made.  

**Project**: a double-click opens a *Project Help* that allows connecting a project to the entire record being entered. This is then replicated in each of the article lines entered in the grid;

**Note**: in this field, a free note related to the warehouse record can be inserted.

As already mentioned above, at this point, the user can proceed to enter the movements in the first grid, which will contain the items to be moved.

### Items 

In this first grid, the user can enter, using the *Help items*, the list of items to be moved.

**Movement Number**: in this column, the progressive movement number appears. It always starts from 1 and is a simple progressive that resets as soon as another warehouse record is opened. The field is read-only and does not allow manual retrieval of movement numbers in case of manual row deletion.

**Class**: in this field, the user can select the item class through the appropriate combo box;

**Item code**: in this column, the code can be entered manually or using the *Help items*;

**Variant**: through this combo box, the user can select and enter one of the item's variants. If the item has no variants, the combo box is disabled;

**Units of Measure**: in this column, the code of the item's management unit of measure appears in read-only;

**Alternative Measurement Unit**: in this column, the user can select, via the appropriate combo box, the code of one of the alternative units of measure of the item, if present, to perform the movement imputing the quantity in the chosen alternative unit of measure. The managerial quantity would then be automatically calculated based on the conversion factor set in the *Item registry* > *Alternative MU* tab;

**Quantity movement**: in this column, the user must enter the movement quantity, expressed in the management unit of measure if the *Alt. M.U.* column is empty; otherwise, the quantity would be expressed in the alternative unit of measure set in the *Alt. M.U.* column. After the user has entered the item code and it has been recognized as valid by the procedure, the movement quantity is automatically set to 1; at this point, the user can modify it. The movement quantity must always be entered in absolute value, as whether it is a loading or unloading movement is determined by the type of reason used;

**Operational quantity**: in this column, the quantity expressed in the item's management unit of measure appears in read-only. It is identical to the movement quantity if the *Alt. M.U.* column is empty; otherwise, this column becomes editable, and the user must manually enter the management quantity while seeing the movement quantity automatically calculated, which would then equal the management quantity divided or multiplied (depending on what is set in the *Initial Warehouse Parameters*) by the conversion factor set in the *Item registry* > *Alternative MU* tab;

**Amount movement**: in this column, the value of *last cost, average cost, standard cost, or sale price* appears automatically, depending on the setting of the warehouse template used in the record.  
If in the reason, the proposed cost indicates *None*, the procedure proposes a value of zero for the record's cost.  
If the *Alt. M.U.* column is empty, the movement amount is always identical to the management amount; otherwise, this column should contain the unit amount of the item based on the alternative unit of measure entered in the movement line.  
If in the *Initial Warehouse Parameters* the *Show tooltip for stock in records* flag is activated for the current year, the procedure displays the stock of that item in the warehouse where the movement is being created in a tooltip, exactly at the moment when the user is entering or modifying the quantity itself.  
If the stock is insufficient and in the *Initial Warehouse Parameters* the *Allow negative stock* flag is deactivated for that warehouse for the current year, the movement row will not be saved.

**Operational amount**: in this column, the value of *last cost, average cost, standard cost, or selling price* appears automatically, depending on the setting of the warehouse template used in the record.  
If in the reason, the proposed cost indicates *None*, the procedure proposes a value of zero for the record's cost.  
If the *Alt. M.U.* column is empty, the management amount is always identical to the movement amount; otherwise, in this column, which is always read-only, the unit value of the movement is calculated based on the management unit of measure using the following formula: *Movement Amount × Movement Quantity / Management Quantity*;

**Project**: in this column, the user can enter, through the appropriate *Project Help* that opens with a double click on the yellow field, the sales order that should be associated with the movement row;

**Total amount**: in this column, the total amount of the movement row appears, which is not editable. It results from multiplying the management quantity by the management amount;

**Item description**: in this column, the description of the item appears. It is automatically set as soon as the item entered by the user is recognized by the grid;

**Variant description**: in this column, the description of the item's variant appears. It is automatically set as soon as the variant code of the item entered by the user is recognized by the grid;

**Notes**: in this field, a free note can be entered regarding that particular line of the warehouse record;

**Location**: in this field, the location from which the item will be shipped or on which the item will be loaded is specified, obviously based on the type of warehouse template (loading/unloading);   

**Net weight**: the total net weight of the item rows is reported. It is the net weight of the item registry multiplied by the quantity of the row;

**Gross Weight**: the total gross weight of the item rows is reported. It is the gross weight of the item registry multiplied by the quantity of the row;

When the user proceeds to save the movement row, the procedure can either successfully save and make the next row available for entry of a new movement, or it may require the user to complete the entry by loading the batches and/or serial numbers in the appropriate grids below.

### Batches and Serial Numbers 

**Batches**

In this grid, active only if the warehouse template used has the *Batches management* flag activated and if the item is designated as a batch-managed item, the user must necessarily enter information related to the batch or the batches to be moved.

As we know, the warehouse record can be for loading or unloading; depending on the two different cases, the batch grid has different uses and settings.

> *1st case: Loading Record*

When the user proceeds to save the movement row, the procedure leaves the row in update, prompting the user to move to the *Batches* grid and indicate the details of the batches to be loaded.

The columns present in the grid are the following:

**Batch code type**: in this column, the type batch code entered in the item registry is recorded;

**Batch Type**: in this column, the user can optionally enter the Batch Type via the appropriate combo box, which draws from the corresponding table. This is a non-mandatory piece of data;

**Number Batches**: in this column, the code of the batch to be loaded is entered, constructed based on the rules set in the *Initial Warehouse Parameters* associated with the entered *Batch code type*. The field is yellow as the user might decide to perform a new load of a batch that already exists in the database; in this case, with a double click on the yellow field, they would be able, through an appropriate *Help Batches*, to choose the batch to load, filtering it among the batches managed so far in the database and the company they are working in;

**Vendor batch code**: in this column, the supplier batch code, usually the name the supplier assigns to the batch, is entered manually. This field is not automatically generated during loading and is optional. If the Batch Code is entered using the *Help Batches*, this column will be automatically filled with the Supplier Batch associated with the chosen batch;

**Start date**: in this field, the same date as the warehouse record appears, editable by the user. If the Batch Code is entered using the *Help Batches*, this column will be automatically filled with the start date of the chosen batch;

**Expiry date**: in this field, the expiry date of the batch appears, editable by the user, calculated starting from the start date and adding the validity days of the batch entered in the *Batches/SN* tab of the item registry. If the Batch Code is entered using the *Help Batches*, this column will be automatically filled with the expiration date of the chosen batch;

**Quantity**: in this field, the quantity to be assigned to the entered batch appears. In the case of batch creation via the pressing of the ‘Auto’ button, the quantity is automatically filled with the quantity contained in the row of the movement; however, this can be edited by the user, who could then decide to modify the quantity downwards, and by pressing the ‘Auto’ button again on the next row: thus, they would create a new batch, with similar characteristics to the already entered batch but with a different Batch Code;

**Closed**: if active, it indicates that the batch has been completely unloaded from the warehouse. Logically, in the case of loading the batch, the flag is always deactivated;

**Batch sold**: if active, it indicates that the batch is available to be picked in sales documents, production, or warehouse records. This is practically a possibility for the user to define whether or not to allow picking a batch, as opposed to the more complex and articulated management of batch states. Therefore, in the case of automatic batch loading, the flag is set to active by default, although the user can decide to deactivate it at this stage, making the batch unavailable;

**Note**: in this field, the user can enter a note related to the batch being loaded. If the Batch Code is entered using the *Help Batches*, this column will be automatically filled with the note associated with the chosen batch.

Once the user has completed the entry of batches in the *Batches* grid, ensuring that the quantity of the movement row equals the sum of the quantities of the loaded batches, they can proceed to save the movement row without receiving error messages from the procedure.

> *2nd case: Unloading Record*

When the user proceeds to save the movement row, the procedure leaves the row in update, inviting the user to move to the Batches grid and indicate the details of the batches to be unloaded.

The columns present in the grid are the following:

**Number Batches**: in this column, with a double click on the yellow field, the user can, through the appropriate *Help Batches*, choose the batch to unload, filtering it among the batches available in the warehouse of the record;

**Vendor batch code**: this column is automatically filled with the Supplier Batch associated with the chosen batch;

**Start date**: in this field, the start date of the chosen batch appears;

**Expiry date**: in this field, the expiration date of the chosen batch appears;

**Quantity**: in this field, the quantity that the user wants to unload from the chosen batch appears. This is editable by the user, who may decide to modify the quantity downwards, and then perform another search via the batch help but on the following row;

**Location**: in this field, the location where the selected batch is loaded is displayed.

Once the user has completed the entry of batches to be unloaded in the *Batches* grid, ensuring that the quantity of the movement row equals the sum of the quantities of the unloaded batches, they can save the movement row without receiving any more error messages from the procedure.

**Serial number**

In this grid, active only if the warehouse template used has the *Batches manag.* flag activated and if the item is designated as a serial number-managed item, the user must necessarily enter information related to the serial numbers to be moved.

As we know, the warehouse record can be for loading or unloading; depending on the two different cases, the Serial Numbers grid has different uses and settings.

> *1st case: Loading Record*

When the user proceeds to save the movement row, the procedure leaves the row in update, inviting the user to move to the Serial Numbers grid and indicate the details of the Serial Numbers to be loaded.

The columns present in the grid are the following:

**Serial Number type**: in this column, the type SN code entered in the item registry is automatically recorded. It is also modifiable by the user;

**Serial number**: in this column, the code of the Serial Number to be loaded is entered, constructed based on the rules set in the *Initial Warehouse Parameters* associated with the entered SN code. It can also be edited by the user.

**Customer Serial Number**: indicates the Serial Number used by the customer;

**Supplier Serial Number**: indicates the Serial Number used by the supplier;

**Start date**: indicates the validity start date of the Serial Number;

**Expiry date**: indicates the expiration date of the Serial Number;

**Last edit date**: indicates the last modification date;

**Cancelled**: indicates that the Serial Number is in a cancelled state;

**Forced closed**: indicates that the Serial Number has been forcibly closed;
 
**Batch**: indicates the batch number corresponding to that Serial Number.

Once the user has completed the entry of batches in the *Serial Numbers* grid, ensuring that the quantity of the movement row equals the number of Serial Numbers entered in the grid, they can save the movement row without receiving any more error messages from the procedure.

> *2nd case: Unloading Record*

When the user proceeds to save the movement row, the procedure leaves the row in update, inviting the user to move to the Serial Numbers grid and indicate the details of the Serial Numbers to be unloaded.

The columns present in the grid are the following:

**Serial number**: in this column, the user must insert, via a double click on the yellow field, the Serial Numbers to be unloaded, drawn from the appropriate *Help Serial Numbers*.

**Insert date**: indicates the insertion date of the Serial Number;

**Customer Serial Number**: indicates the Serial Number used by the customer;

**Supplier Serial Number**: indicates the Serial Number used by the supplier;

**Last edit date**: indicates the last modification date;

**Start date**: indicates the validity start date of the Serial Number;

**Cancelled**: indicates that the Serial Number is in a cancelled state;

**Batch**: indicates the batch number corresponding to that Serial Number.

Once the user has completed the entry of batches to be unloaded in the *Serial Numbers* grid, ensuring that the quantity of the movement row equals the number of Serial Numbers entered in the grid, they can save the movement row without receiving any more error messages from the procedure.

### Cost Centers 

In this grid, the user can link one or more cost centers to the movement row, attributing different quantities of the movement to different cost centers.

The grid consists of a column in which a yellow field appears, on which the user can, by double-clicking, open the **Help cost center**, through which they can enter the cost center in the grid row, completing the row with the quantity to which this cost center should refer. If the sum of the quantities entered in the rows of the cost center grid is different from the management quantity of the movement row, the procedure issues a warning and prevents saving the movement.

### Extra Data 

Please refer to the documentation regarding the [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

## Counterparty

This tab is exactly the same as the *Record* tab but is active only if the warehouse template set in the *Record* tab has a warehouse and a counterparty reason.  
Counterparty reasons are set when you want to manage a double warehouse movement with a single record. Therefore, in the warehouse template table, it is possible to set a loading reason as a counterpoint to a unloading reason and vice versa.

In the *Offset* tab, all the data set in the *Record* tab is reported, with the possibility for the user to modify only some of the header data: Internal Document, Reference Document, Sales Order.

The data for the movement row must be identical between the two tabs; the same applies to the grids for Batches, Serial Numbers, Variants, and Cost Centers for each movement. Only the location field is editable within the counterparty tab.

There is a **particular** case where an item is entered in the *Record* tab and others are entered in the *Offset* tab: this happens only when the counterparty reason linked to the main reason has activated the *Bill of Materials* flag, allowing the user to load the item into the *Record* tab (thus using a loading reason) and see its bill of materials entered in the *Offset* tab, in which there would then be an unloading reason. Obviously, the reverse can also be managed.

A **particular** situation that requires the management of reasons with linked counterparties relates to the *automatic unloading of the delivery DDT for work contracts*, which performs the unloading of materials to be delivered to the subcontractor from the raw materials warehouse (or semi-finished goods, depending on the case) with a consequent immediate loading into the subcontractor's warehouse of the same materials, which they will then need to use to produce what has been requested via the work order.

For all matters not detailed in this document concerning the common operation of forms, please refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).