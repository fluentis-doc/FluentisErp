---
title: Edit Serial Number
sidebar_position: 5
---

This window shows the lot detail and consists of 4 different sections: the first section contains the general header data of the same lot and the other 3 ones are called 'Load Documents', 'Quantity and Document for Serial Number Unload', 'Unload Documents'.

**Section 1 - Header Lot**:

In this section it is possible to view and edit some main data related to lot and in particular:

**Item**: in the related 3 fields it is possible to view item class, code and description to which Serial Number refers. It concerns an item with the activation of 'SN Management' flag in Lots/SN tab of item register, otherwise it would be not possible to perform the lot load for the same item

**Variant**: in the related 2 fields it is possible to view item variant code and description to which the Serial Number refers, if available

**Serial Number**: in this field it is possible to view the Serial Number Code. This field can be edited by the user, although during load operations it can be generated automatically according to some rules that are set in 'Serial Number Codes' tab on Warehouse Initial Parameters. First it is necessary to insert a Serial Number code type code and description, to save line and to decide which parameters to use for the composition of the just created lot code type. As regards each parameter it is possible to decide how many characters can form it and even the leader character to be used. For example, with the 'Progressive Number' parameter by setting as leader character '0' and lenght 5 it would be possible to create lots with first number 00000, then 00001, then 00002 and so on. The lot code type has to be linked to item register into the specific field that is located in 'Lots/SN' tab, so that in procedures, that create the Serial Number code automatically for item in question, it is possible to generate the same Serial Number according to particular settings in 'Serial Number Codes' of Warehouse Initial Parameters and that are linked to item lot code type. The alphanumeric field can reach the lenght of 50 characters.

**Lot Code**: in this field there is the Lot code to which the Serial Number belongs. The Serial Number item could be managed even per Lots; for this reason a lot of 100 pieces, for example, could be made of 100 different Serial Numbers. Besides the same Serial Number could belong to different lots of the same item, or to lots of different items

**Warehouse**: in these 2 fields there are warehouse code and description on which the Serial Number has been loaded

**Load/Unload**: in these 2 fields there are the information regarding Serial Number status, mentioned before in paragraph related to the result grid of Serial Numbers Search

**Start Date**: in this field there is usually the date on which Serial Number has been loaded and that can be edited by the user. If the Serial Number has been loaded through stock record, this date is the same to the one in which record has been created; if Serial Number has been loaded through a purchase delivery note or subcontractor return record load, this date is set as the one of delivery note and subcontractor (unless within delivery note the user does not edit it manually); if Serial Number has been loaded through production signal record, this date is the same as the production signal one

**End Date**: in this field there is the Serial Number due date, that can be edited by the user and calculated, during the lot creation and the load of warehouse movement, starting from the start date and adding Serial Number validity days inserted into Lots/SN tab of item register

**Ware. Rec. Load**: in this field there is the information about warehouse record that has loaded the Serial Number

**Section 2 – Load Documents** ****:

In this section it is possible to view the documents main data that have contributed to load Serial Number. Generally it is possible to view the Warehouse Record detail that has loaded the Serial Number; if this has been generated through a document load (DN, return, etc.), it is possible to view a line with document details. Data can be viewed in a grid where it is possible to find the following columns:

**Document**: in this field it is possible to view the document type that has generated the Serial Number load. It can represents a warehouse record, a purchase delivery note or a subcontractor return

**Number**: in this field it is possible to view the document number

**Date**: in this field it is possible to view the document date

Remember that, thanks to a double click on document line, it is possible, together with user's rights, to view the related document.

**Section 3 – Quantity and Document per Lot Unload** ****:

In this section it is possible to view chronologically the first document data that has committed the Serial Number. If the Serial Number has been directly unloaded through a stock record, this grid will be null, because unload stock record of Serial Number is located always in 4 section. Data can be viewed in a grid where it is possible to find the following columns:

**Document Type**: in this field it is possible to view the document type that has first committed the Serial Number. It consists in a production order, sales order, sales delivery note, sales invoice, picking list, subcontractor delivery note, subcontractor return

**Number**: in this field it is possible to view the document number

**Date**: in this field it is possible to view the document date

Remember that, thanks to a double click on document line, it is possible, together with user's rights, to view the related document.

**Section 4 – Unload Document** ****:

In this section it is possible to view the most important data of warehouse record that has unloaded the Serial Number and of other documents on which Serial Number has been committed, with relation to document selected in grid section 3. Data can be viewed in a grid where it is possible to find the following columns:

**Document**: in this field it is possible to view document type within which there is the Serial Number, with relation to the selected document in grid section 3. It consists in sales delivery note, sales invoice, picking list, subcontractor delivery note, subcontractor return

**Number**: in this field it is possible to view the document number

**Date**: in this field it is possible to view the document date

Remember that, thanks to a double click on document line, it is possible, together with user's rights, to view the related document.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions. The list of features is the following: 



| Function | Meaning |
| --- | --- |
| Save  | Button to save modifications on Serial Number data. |






