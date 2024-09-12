---
title: Edit Lot
sidebar_position: 4
---

This window shows the lot detail and consists of 4 different sections: the first one shows general header data of the same lot and then there are other 3 sections called 'Load Documents', 'Quantity and Document for unload lot', 'Unload Documents'.

**Section 1 - Lot Header**:

Through this section it is possible to view and edit some of the main data related to lot and in particular:

**Item**: in the related 3 fields it is possible to view item class, code and description to which lot refers. It is certainly an item with 'Lots Management' flag activated in Lots/SN tab of item register, otherwise it would be not possible to perform the lot load for the same item;

**Variant**: in the related 2 fields it is possible to view item variant code and description to which the lot, if available, refers;

**Lot No** **.**: in this field it is possible to view the Lot Code. This field can be edited by the user, although during load operations it can be generated automatically according to some rules that are set in 'Lot Codes' tab on Warehouse Initial Parameters. First it is necessary to insert a lot code type code and description, to save line and to decide which parameters to use for the composition of the just created lot code type. As regards each parameter it is possible to decide how many characters can form it and even the leader character to be used. For example, with the 'Progressive Number' parameter by setting as leader character '0' and lenght 5 it would be possible to create lots with first number 00000, then 00001, then 00002 and so on. The lot code type has to ve linked to item register into the specific field that is located in 'Lots/SN' tab, so that in procedures, that create the lot code automatically for item in question, it is possible to generate the same lot according to particular settings in 'Lot Codes' of Warehouse Initial Parameters and that are linked to item lot code type. The alphanumeric field can reach the lenght of 50 characters. It does not correspond to the lot identification, because it is possible to perform more loads in different moments of the same lot; in this case it would be possible to view more lines with the same Lot Code within Lots Search grid;

**Vendor Lot**: in this field it is possible to view Vendor Lot code, that is the name attributed by vendor to lot. It can be edited by the user and it can not be generated automatically during the load operations. It can reach a lenght of 50 characters and it can be the same even for different lots of differen items;

**Validity Start Date**: in this field it is possible to view the date on which the lot has been loaded and it can be edited by the user. If lot has been loaded through stock record, this date is the same as the one on which record has been created; if lot has been loaded through a purchase delivery note load or subcontractor return record, this date is set as the same of purchase or subcontractor delivery note one (unless within the delivery note the user has not manually edited); if lot has been loaded through a production signal record, this date is the same as the production signal date;

**Due Date**: through this field it is possible to view the lot due date, that can be edited by the user and that, during the lot creation and the related warehouse movement load, is calculated starting from the start date and adding lot validity days inserted into the Lots/SN tab of item register;

**Quantity**: in this field it is possible to view the initial quantity loaded per lot and through the first document that has loaded the same lot;

**Warehouse**: in these 2 fields there are warehouse code and description on which the lot has been loaded;

**J.O./Year**: in this field it is possible to view the sales job order that can be edited by the user and linked to lot. Usually it concerns the sales job order linked to the item line that has been loaded and that has loaded the same lot;

**Notes**: in this field it is possible to view notes inserted into the warehouse record regarding the lot load. The field can be edited by the user and can be viewed even within Lots Search, as defined above;

**Closed**: the 'Closed' flag, if available, indicates that the lot has been completely unloaded by warehouse. Remember that, after having closed the warehouse, all the rest lots of the closing year are automatically set as 'Closed', because the 'twins' lots are loaded again on initial stock of the new year together with rest quantity at the end of the year before closing;

**Lot Status**: the combo shows the lot status. It can be edited by the user and refers to data coming from the specific 'Lot Status' table. The lot status determines the possibility to use or not the lot in sales, production documents and warehouse unload records. It is a not binding management and the user has not to take advantage of 'Lot Status' table functions;

**Lot Evaluation**: the combo shows data related to lot evaluation. It can be edited by the user and refers to data coming from the specific 'Lot Evaluation' table. This fact has descriptive functions, without having any particular influence on procedures and windows of Ideale, and it is optional;

**Sales Lot**: 'Sales Lot' flag, if active, highlights that the lot is available in order to be taken within sales, production documents or stock records. The user can establish the possibility to collect or not a lot, as an alternative to the difficult and complex management of lots status.

**Section 2 – Load Documents** ****:

Through this section it is possible to view the most important documents data that have contributed to load lot. Generally there is always a detail of Stock Record that has loaded lot; if this record has been generated through a document load (DN, return, etc.), it is possible to view a line where there are details of this document. Data can be viewed in a grid where it is possible to find the following columns:

**Document**: through this field it ispossible to view the document type that has generated lot load. It can correspond to a stock record, a purchase delivery note or a subcontractor return;

**Number**: through this field it is possible to view document number;

**Date**: through this field it is possible to view document date.

Remember that, thanks to a double click on document line, it is possible, according to user's rights, to view the related document.

**Section 3 – Quantity and Document per Unload Lot** ****:

In this section it is possible to view chronologically the main data of the first document, that has commit a lot. If lot has been unloaded directly through a warehouse record, this grid is free, because the lot unload stock record is located always in 4 section. Data can be viewed in a grid where it is possible to view even the following columns:

**Quantity **: in this field it is possible to view the lot quantity that has been committed in document;

**Document**: in this field it is possible to view the document type that as first has committed lot. It can be a production order, a sales order, a sales delivery note, a sales invoice, a picking list, a subcontractor delivery note a subcontractor return;

**Number**: in this field it is possible to view document number;

**Date**: in this field it is possible to view document date.

Remember that, thanks to a double click on document line, it is possible, according to user's rights, to view the related document.

**Section 4 – Unload Document** ****:

In this section it is possible to view the most important data of stock record that has unloaded lot and of other documents on which lot has been committed, with relation to the selected document in grid section 3. Data can be viewed in a grid on which it is possible to view the following columns:

**Document**: in this field it is possible to view the document type within which there is lot and with relation to the selected document in grid section 3. It can be represented by a sales delivery note, a sales invoice, a picking list, a subcontractor delivery note, a subcontractor return;

**Number**: in this field it is possible to view the document number;

**Date**: in this field it is possible to view the document date.

Remember that, thanks to a double click on document line, it is possible, together with user's rights, to view the related document.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions. The list of features is the following:  



| Function | Meaning |
| --- | --- |
| Save  | Button to save modifications made on lot data. |
| View Lot Attributes | It opens another window within which the user can assign a series of attributes to lot, obtaining information from Encoder tables. |






