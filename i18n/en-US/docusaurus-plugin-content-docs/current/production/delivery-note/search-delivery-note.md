---
title: Search Delivery Note
sidebar_position: 2
---

The Delivery Note window can be opened through the following path Subcontractor > Delivery Notes > Delivery Notes > Delivery Notes and consists of the list of subcontractor Delivery Notes that have been already inserted and that the user can edit, view and insert new ones.



| Function | Meaning |
| --- | --- |
| Search | Button to apply search filters within database of the inserted Delivery Notes and Subcontractor. |
| Insert | It refers to the procedure to insert a new Delivery Note. |
| Edit | It refers to the procedure to edit a Delivery Note. |
| View | It refers to the procedure to view a Delivery Note. |
| Delete | It refers to the procedure to delete a Delivery Note previously inserted. |
| Edit Attributes Filter | It opens a window that enables the user to activate or not the Attributes Filter. This enables the user also to filter the Subcontractor and Delivery Note according to attributes inserted through the encoder into items of the same delivery note. |

The window consists of a filter area and of a result grid.

FILTER AREA: the filter area contains the list of possible data type thanks to which it is possible to perform a selection, a search on the total of the inserted Delivery Notes. Typically filters have “AND” condition and it is possible to specify more search filters at the same time.

The user can use the following filters:


 1. Subcontractor: through these 2 fields it is possible to specify the Subcontractor data to whom the delivery note is addressed: “account” and “detail account”; on the contrary the subcontractor company name appears automatically. Thanks to a double click on the first field it is possible to open a “Accounts Help” from which to select the subcontractor in order to filter. The subcontractor is usually inserted into chart of accounts among vendors
 2. Return Type: through this combo it is possible to insert the Delivery Note Type and filter following this criterium, viewing all the Delivery Notes belonging to the selected type. The combo box shows a list of all Sales Delivery Note types, considering that the Delivery Notes are linked to the sales ones as regards the management and considering that they area delivery notes that control the goods flow out of company
 3. From DN Number…To DN Number…: in these fields it is possible to insert (in a range) the Delivery Note number (from…to…)
 4. From DN Date…To DN Date…: in these fields it is possible to insert (in a range) the insertion date of Delivery Note (from…to…)
 5. Job Order: in this fields and through the specific job order help it is possible to insert the sales job order number
 6. Unloaded: this flag enables the user to filter the Delivery Notes that have been already unloaded into warehouse, delivery notes for which the “Delivery Notes Unload” operation has been performed
 7. Printed: this flag enables the user to filter the already printed Delivery Notes. The search delivery notes window can be opened with these last 2 flags disabled automatically, for this reason it is necessary their activation in order to view them
 8. Items Search: this button activates a section that enables the user to filter using a series of other parameters, detailed as follows
 9. Class/Item Code/Description: the first combo enables the user to set the item class. Through a double click on the second field it is possible to open an “Items Help” through which user can select the single item (code and description)
 10. Job Order / Year: in this field and through the specific job orders help it is possible to insert the sales job order number. In this case it is a sales job order linked to the single Delivery Note item line
 11. J.O.Type: through this combo it is possible to insert the Production Job Order Type and to filter according to this criterium, viewing all the returns linked to the selected job orders type
 12. Prod. J.O.: in these 2 fields it is possible to set the production job order number and year

RESULT GRID: in the result grid it is possible to view the list of Delivery Notes that correspond to filter data, above mentioned. After having specified the values through which it is possible to obtain a Delivery Notes search, the user, clicking on Search Button in the related Ribbon, will obtain the list of the desired Delivery Notes into the result grid.

The columns, that can be viewed in the result grid, are the following:


 1. Printed: the flag enables the user to understand if the delivery note has been printed or not. If the delivery note has not been printed, the unload operation of the same DN can not be performed
 2. Unload: the flag enables the user to understand if the delivery note has been unloaded or not
 3. Number: the column shows the Delivery Note number
 4. Date: the column shows the Delivery Note date
 5. Subcontractor: the column shows the subcontractor account and detail account to whom the Delivery Note has been addressed
 6. Subcontractor Description: the column shows the subcontractor company name to whom the Delivery Note has been addressed
 7. Total: the column shows the total delivery note before VAT rate






