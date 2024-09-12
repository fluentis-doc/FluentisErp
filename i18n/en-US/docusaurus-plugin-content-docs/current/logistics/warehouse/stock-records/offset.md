---
title: Offset
sidebar_position: 5
---

This tab is the same of the Record one, but it is active only if the warehouse template set on the Record tab has a warehouse and an offset template. The offset templates are set in case that user wants to manage a double stock movement with an onlyone record. So it is possible in the warehouse templates table to set a load template as offset of a unload template and vice-versa.

In Offset tab it is possible to view the data set within Record tab together with the possibility for the user to edit only some header data, as CC, Internal Document, Reference Document, Reference Document Date, Sales Job Order.

The movement line data have to be the same between 2 tabs; the same situation has to occur regarding Lots grids, Serial Numbers, Variants and Cost Centres of the single movement.

There is a situation in which it is possible to insert an item into the Record tab and other items into the Offset tab: this occurs only if the offset template linked to the main template activates the 'BOM' flag, that enables the user to load item in the Record tab (using so a load template) and to view the related BOM in the Offset tab, on which there will be an unload template. Obviously it can be managed vice-versa.

Typically it is possible to unload automatically the subcontractor delivery note, that performs the materials unload to be delivered to the subcontractor from raw material warehouse (or unfinished products), together with the load on subcontractor warehouse of the same materials, that should be used by the subcontractor in order to fullfil the subcontractor order.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following: 



| Function | Meaning |
| --- | --- |
| New Record | Button to save just created record or its modifications and at the same time enables the user to insert a new stock record cleaning all data of the opened window. |
| Save  | Button to save the just created record or its modifications. |
| Insert Movements | It refers to the procedure to insert a new line in the stock movements grid. |
| Delete Selected Movements | It refers to the procedure that enables the user to delete the selected lines in the movement grid. |
| Expand Grid  | It refers to the procedure that enables the user to expand the stock movements grid, hiding the grids below at the same time. |
| Delete Cost Centres  | It refers to the procedure that enables the user to delete the selected lines in the cost centres grid. |
| Delete Serial Number  | It refers to the procedure that enables the user to delete the selected lines in the serial numbers grid. |
| Delete Lots | It refers to the procedure that enables the user to delete the selected lines in the lots grid. |
| Import | It refers to the procedure to import items from a file. The file has to be set within the 'Import' tab of Initial Warehouse Parameters. Clicking on this button it is possible to open a window, called 'Import' [IDD_IMPORTTRAD] on which it is possible to view all the lines that are in the file in a special grid. Selecting the grid lines and clicking on 'Import' button, the same lines are inserted into the movements grid of the stock record. |
| Import from Barcode | It refers to the procedure to import items reading their barcode through a keyboard emulator. By clicking on this button it is possible to open a window, called exactly 'Import from Barcode' [IDD_DABARCODE] on which it is possible to view all the lines that are in a specific grid line. Through the selection of grid lines and clicking on 'Import' button the same lines are inserted into movements grid of the stock record. |
| View the Stock for Item | It refers to the procedure to opens the 'Stocks Visualization' window that has already filtered for the selected item in movements grid and for the warehouse set in record header. If the user clicks on that button without having selected some item in the grid, the procedure will open the 'Stocks Visualization' filtered only for warehouse, but showing stocks of all items in that warehouse. |






