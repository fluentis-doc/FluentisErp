---
title: Record
---

This tab consist of a header and 4 different grids: the first grid contains the items that are moved through the stock record; the other 3 ones are used according to their setting in item register and to the warehouse template inserted in the header.

****Record Header**:**

First of all, the application needs the insertion of Stock code, for which to perform record, into the Record tab header. The procedure inserted the record date (Rec. Date) automatically that is the same of the current date and insert even the record number that is a progressive number of warehouse that can be zero every day, starting automatically from the number 1. Both data can be edited by the user; in particular the record date identifies the day on which it is possible to perform the stock movements that will be inserted then into the specific grid. For this reason it can be edited by setting, for example, a date previous than the current one. This date has to be always between Start and End Period Dates inserted into the first tab of Warehouse Initial Parameters. Remember that after the first item insertion in the grid, the record date and number adopt the read only mode.

The second and last obligatory data, that is necessary in order to insert stock movements, corresponds to the warehouse template, which can be selected by using the specific combo box on which the templates linked to the selected warehouse are proposed. After having inserted this data, the user can insert movements into the items grid. In addition there are other header data that can be filled, and precisely:

**CC**: in this field using the specific 'Cost Centres Help', that can be exploded through a double click on the same field, it is possible to insert the cost centre which has to be linked to the whole stock record. Remember that this operation has to be performed only after having inserted a line within the items grid; in this case the procedure will set the cost centre inserted on header for every single movement line;

**Int.** ** Doc.**: through this field, called 'Internal Document', the user can give more details about the reason for which record is created. If the record has been automatically created by a Production Signal record, in this field appears the indication about the signal number and the phase for which the same one has been performed;

**Version**: through this combo box the user can set a different version compared to the default one, automatically proposed by the procedure;

**Ref. Doc** **.**: through this field, called 'Reference Document', the user can specify the most important reason for which the stock record has been inserted. If record has been automatically created by load and unload of a document, in this field it is possible to set a parametric document description automatically, where it is possible to find even the document type description and its number. If record has been automatically created by a Production Signal record, in this field it is possible to find the production order number for which the production signal has been created. This field can be edited by user, even in case that it is filled automatically by the application;

**Ref. Doc. Date**: through this field, called 'Reference Document Date', the user can specify a date related to document in order to insert record. If record has been automatically created through document load and unload, in this field it is possible to set the document insertion date automatically. If record has been automatically created by a Production Signal record,  in this field it is possible to find the start date of a production order for which the production signal has been performed. Anyway this field can be edited by user even in case that it is filled automatically by the application;

**Job Order**: thanks to a double click it is possible to open a 'job orders help' that enables the user to connect a sales job order to the whole record that the user is inserting. Then it is replayed in each item lines inserted into the grid;

**Cus/Ven**: through these fields it is possible to specify the Customer or Vendor data: 'account', 'detail account', 'company name'. Thanks to a double click on the first field it is possible to open an 'Accounts Help' from which it is possible to select the customer or vendor to be linked to a record. If record has been automatically created by a document load and unload, in this field it is possible to set the customer or vendor data of the same document automatically.

As already indicated above, the user can now insert movements of the first grid, the one that will have the specific items to be moved.

**Items/Movements Grid**:

Through the special 'Items Help' button and in this grid the user can insert the list of items to be moved.

The columns, that are in the grid, are the following:

**Class**: through this field and the special combo box it is possible to select the item class;

**Item Code**: through this column it is possible to type the item code manually, or through a double click on this field the user can use the Items Help, which enables the same one to search for item according to a series of search filters;

**Variant**: through this combo box the user can select and insert one of the item variants. If item has no variants, the combo box is disabled;

**Option**: through this combo box it is possible to specify the item option. Usually the default option (Basis Option) is set automatically. The option data is obligatory, otherwise it could be impossible to save the movement line;

**Options Description**: through this column it is possible to view the inserted option description;

**Op. U.M.**: in this column and in read only mode appears the operational unit of measure code of item;

**Alt. U.M.**: in this column and thanks to the specific combo box the user can select the code of an alternative item unit of measures, if available, in order to perform the movement giving quantity to the alternative unit of measure chosen. The operational quantity would be calculated automatically according the conversion factor that has been set in 'Alternative UM' of Item Register;

**Movement Quantity**: through this column the user has obligatory to insert the movement quantity, expressed in the operational unit of measure in case that the 'Alt. U.M.' column is free; on the contraru the quantity would be expressed in the alternative unit of measure inserted into the 'Alt. U.M.' column. After having inserted the item code that has to be valid by the procedure, it is possible to insert movement quantity with an absolute value, because the load or unload movement is determined by the the templated type used;

**Operational Quantity**: in this column and through the read only mode it is possible to find the quantity expressed in the operational item unit of measure. It is the same of the movement quantity in case that the 'Alt. U.M.' column is free; on the contrary the column can be edited and the user has to insert operational quantity manuallt. Automatically in this way it would be possible to calculate the movement quantity, that would have the same value as the divided or multiplied operative quantity (according to the value set in the Initial Stock Parameters) for conversion factor set in the 'Alternative UM' tab of the Item Register;

**Movement Amount**: in this column it is possible to view automatically the last cost value, average cost, standard cost or sales price according to the warehouse template setting used in the record. If in template there is 'None' cost indication, the procedure will propose a null value as record cost. If the 'Alt. U.M.' column is free, the movement amount is the same as the operational amount. On the contrary in this column it would be necessary to insert the item unit amount according to the alternative unit of measure inserted into movement line. If the 'Show the Stock Tooltip in Records' flag is active for the current year in Initial Warehouse Parameters, the procedure can show the stock of that item on warehouse on which the movement needs to be created, exactly in the same moment in which the user is inserting or editing the same quantity. In case that the stock is not sufficient and the 'Allow Negative Stock' flag is disabled for the current year in the Initial Warehouse Parameters, the movement line will not be saved;

**Operational Amount**: in this column it is possible to view automatically the last cost, average cost, standard cost or sales price according to the warehouse template setting used in the record. In case that in template there is the 'None' cost, the procedure assigns zero value to the record cost. In case that the 'Alt. U.M.' column is free, the operational amount is the same of the movement amount; on the contrary in this read only column the movement unit value could be calculated according the operational unit of measure and through the use of the following formula: Movement amount * Movement quantity / Operational Quantity;

**Sales Job Order**: in this column and through the specific 'Job Orders Help' that can be exploded with a double click on the yellow field, the user can insert the sales job order that has to be associated to the movement line;

**Total Amount**: in this column it is possible to view the not editable total amount of movement line. It comes from the operational quantity multiplication for the operational amount;

**Item Description**: in this column it is possible to view the item description. It can be automatically set as soon as it is identified by the grid the item inserted by the user;

**Variant Description**: in this column it is possible to view the item variant description. It is set automatically as soon as it is identified by the grid the item variant code inserted by the user;

**Movement Number**: in this column it is possible to view the progressive movement number. It starts from the number 1 and it is a progressive number that can be null as soon as a stock record is opened. In case that the movement lines are deleted, the field is in read only mode and does not enable the user to use manually movement numbers.

Summarizing in order to insert a movement into the grid the user has to type the item code into the special column and through the use of tooltip the procedure can identify it through the 'Enter' button or use the 'Items Help'; after that the user can also insert item variant, possible alternative unit of measure, movement quantity (or operational, according to the paragraph conditions), movement value, sales job order, and lastly the user can save the movement line below.

When the user saves the movement line, the procedure can perform the saving correctly and make available the following line in order to insert a new movement, or can make the user complete the insertion through lots and/or serial numbers load into the specific grids below.

**Lots Grid**:

In this grid, that is active only if the used warehouse template has activated 'Lots Manag.' flag and if the item is managed per lots, the user is obliged to insert the information linked to lot or lots to be moved.

The stock record can be a load or unload record according 2 different situations. The lots grid has different uses and settings.

1° case: Load Record

When the user saves the movement line, the procedure maintains the same line in 'update' mode, asking to user to move into the Lots grid and to indicate details of lots to be loaded.

The columns, that are in the grid, are the following:

**Auto**: by clicking on this button, that is in the beginning of the first grid line, the procedure performs the automatic lot creation according to the Lot Code Type linked to the item register and according to the number of due days inserted into the register;

**Code Type**: in this column and by clicking on 'Auto' button it is possible to insert the automatically the lot code type inserted into the item register. Anyway it can be edited by user;

**Lot Type**: in this column and through the special combo box the user can insert the Lot Type that obtain information from the same table. Anyway it is a not obligatory element;

**Lots No.**: in this column and by clicking on 'Auto' button it is possible to insert automatically the lot code to be loaded, based on rules within the Initial Warehouse Parameters associated to the inserted lot code type. Anyway, it can be edited by the user, who could not use the 'Auto' button and insert the lot code manually. The field has yellow colour because the user, instead of clicking on 'Auto' button, could perform a new load of a lot within database. In this case, thanks to a double click on yellow field, the user could choose the lot to be loaded through the special 'Lots Help' filtering it among lots managed within database up to that moment and within the company in which the user is working;

**Vendor Lot**: in this column it is possible to insert the Vendor Lot code manually, that usually corresponds to the name that the vendor give to the lot. It is a field that can not be generated automatically during load operations and it is not obligatory. In case that the Lot Code is inserted through 'Lots Help', this column would be completed automatically with the Vendor Lot linked to the chosen one;

**Start Date**: in this field appears the same date of the stock record, that can be edited by the user. In case that the Lot Code is inserted with 'Lots Help', this column would be completed automatically with the start date of the chosen lot;

**Due Date**: in this field it is possible to find the lot due date, that can be edited by the user and that is calculated starting from the start date and adding the lot validity days inserted into the Lots/SN tab of the item register. In case that the Lot Code is inserted with 'Lots Help', this column would be completed automatically with the due date of the chosen lot;

**Quantity**: in this field there is the quantity to be attributed to the inserted lot. In case that the lot creation is created through the 'Auto' button, the quantity is filled automatically with the quantity contained in the movement line. It can be edited by the user, who could edit the quantity, decreasing it and clicking again on 'Auto' button of the line above: in this way the user could create a new lot with similar features to the already inserted lot but with a different Lot Code;

**Closed**: the 'Closed' flag, if active, indicates that the lot has been completely unloaded from warehouse. Obviously if the lot has to be loaded, the flag is always disabled;

**Salable Lot**: the 'Salable Lot' flag, if active, highlights that the lot is available in order to be taken within the sales, production documents or stock records. So the user has the possibility to take or not a lot, in alternative to the management of lot status, that is more difficult and articulated;

**Description**: in this field the user can insert a note related to the lot to be loaded. In case that the Lot Code is inserted with 'Lots Help', this column would be completed automatically with a note linked to the chosen lot.

After having inserted lots into the 'Lots' grid, ensuring that the movement line quantity is the same as the loaded lots quantity amount, the user can save movement line without receiving error messages by the procedure.

2° case: Unload Record

When the user saves the movement line, the procedure maintains the same line in 'update' mode, asking to user to move into the Lots grid and to indicate details of lots to be loaded.

The columns, that are in the grid, are the following:

**Lots No.** ****: in this column thanks to a double click on the yellow field and through the special 'Lots Help' button the user can choose the lot to be unloaded, filtering it among available lots in record stock;

**Vendor Lot**: this column is completed automatically with the Vendor Lot linked to the chosen one;

**Start Date**: in this field it is possible to view the start date of the chosen lot;

**Due Date**: in this field it is possible to view the due date of the chosen lot;

**Quantity**: in this field it is possible to view the quantity that the user wants to unload about the chosen lot. It can be edited by the same user, who could edit the quantity, decreasing it, and search again through lots help on the line below;

**Location**: in this field it is possible to view the location in which the chosen lot has been loaded.

After having inserted lots into the 'Lots' grid, ensuring that the movement line quantity is the same as the unloaded lots quantity amount, the user can save movement line without receiving error messages by the procedure.

**Serial Numbers Grid** ****:

In this grid, that is active only if the used warehouse template has activated 'Lots Manag.' flag and if the item is managed per Serial Numbers, the user is obliged to insert the information linked to Serial Numbers to be moved.

The stock record can be a load or unload record according 2 different situations. The Serial Numbers grid has different uses and settings.

1° case: Load Record

When the user saves the movement line, the procedure maintains the same line in 'update' mode, asking to user to move into the Serial Numbers grid and to indicate details of Serial Numbers to be loaded.

The columns, that are in the grid, are the following:

**Auto**: clicking on this button in the first grid line the procedure will perform the automatic Serial Number creation according to the SN Code Type linked to item register and according to the number of due days inserted always into register. But only the first Serial Number can be created; it will be necessary to insert the same lines number as the quantity inserted in movement line. For example, if movement line has 30 pieces of quantity, in Serial Numbers grid there will be necessary to insert 30 Serial Numbers, one for each grid line. In order to create Serial Numbers automatically in this grid, the faster system could be to take advantage of the external grid field called 'Serial Number Automatic Proposal', on which it will be possible to set the first Serial Number to be loaded and then to click on 'Propose S.N.' button that, starting from the first Serial Number inserted, has the task to create all the other Serial Numbers required by the movement line quantity; in this way, Serial Numbers will be created progressively starting from the first one inserted;

**SN Types**: in this column and by clicking on 'Auto' button it is possible to insert automatically the SN code type inserted into item register. Anyway it can be edited by the user;

**Serial Number**: in this column and by clicking on 'Auto' button it is possible to insert automatically the SN code to be loaded, which is base on certain conditions set in Initial Warehouse Parameters associated to the inserted SN code type. Anyway it can be edited by the user.

After having inserted lots into the 'Serial Numbers' grid, ensuring that the movement line quantity is the same as the Serial Numbers inserted in the grid, the user can save movement line without receiving error messages by the procedure.

2° case: Unload Record

When the user saves the movement line, the procedure maintains the same line in 'update' mode, asking to user to move into the Serial Numbers grid and to indicate details of Serial Numbers to be loaded.

The columns, that are in the grid, are the following:

**No**: in this column it is possible to view the line number and it is a progressive number generated automatically;

**Serial Number**: in this column thanks to a double click on the yellow field the user has to insert the Serial Numbers to be unloaded obtaining information by the special 'Serial Numbers Help'.

After having inserted lots into the 'Serial Numbers' grid, ensuring that the movement line quantity is the same as the Serial Numbers inserted in the grid, the user can save movement line without receiving error messages by the procedure.

**Variants Grid** ****:

In this grid the user can manage the item handling with variants taking advantage of the presence of an automatic 'Attribute' that is inserted into 'Attributes' tab of the item register. Setting the automatic attribute in the special combo box that is in the grid above, the user can link the same movement line to more quantities of different item variants, in order to enable the procedure to perform automatically quantities amount of the single inserted variants lines and to move it into the operational quantity of movement line.

The grid consists of a column in which it is possible to select the item variant and of a column in which it is possible to insert the quantity for that variant. The grid can be used only in case that in the item register there is an automatic attribute.

The data insertion mode within this grid does not change in case of a load or unload record.

**Cost Centres Grid of the single Movement**:

In this grid the user can link one or more cost centres to the movement line, giving different movement quantities to different cost centres.

The grid consists of a column in which there is a yellow field on which through a double click the user can open 'Cost Centres Help' in order to insert the cost centre in the grid line and to complete the line with the quantity referred to this particular cost centre. If the amount of the inserted quantities in grid lines of cost centre is different from the operational quantity of movement line, the procedure warns and prevents the user saving movement.

Remember that, in case that after having inserted the cost centres on every single record movement the user sets the cost centre in the header of the same record, all the cost centres inserted in the single movement lines are substituted by the header cost centre.






