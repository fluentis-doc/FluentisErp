---
title: Search Returns
sidebar_position: 2
---

The Search Returns window can be opened through the following path Subcontractor > Returns > Search Returns > Search Returns and shows the list of subcontractor returns already inserted, allowing their modification, visualization and insertion of new ones.

The window is made up of a filter area and a result grid.

Hereinafter the list of actions that can be performed through the RIBBON BAR:



| Function | Meaning |
| --- | --- |
| Search  | Button to apply the search filters to the whole database of the inserted Subcontractor Returns. |
| Insert | It refers to the procedure to insert a new Subcontractor Return. |
| Edit  | It refers to the procedure to edit a Subcontractor Return. |
| View  | It refers to the procedure to view a Subcontractor Return. |
| Delete  | It refers to the procedure to delete a Subcontractor Return inserted previously. |
| Edit Attributes Filter | It opens a window which enables the user to activate or not the Attributes Filter. Then the Attributes Filter enables the user to filter the Subcontractor Returns according to attributes inserted through the encoder in items of the same return. |

FILTER AREA: The filter area contains the list of the possible data types thanks to which it is possible to select the total of Subcontractor Returns inserted. Typically Filters have “AND” condition and it is possible to specify more filter criteria at the same time.

User can use the following filters:


 1. Subcontractor: in these 2 fields the subcontractor data of the return are specified: “account” and “detail account”, while the subcontractor company name appears automatically. Thanks to a double click on the first field it is possible to open a “Help Accounts” from which to select the subcontrator in order to be filtered. Usually the subcontractor is inserted in the chart of accounts among vendors.
 2. From/To Delivery Note: through these fieds it is possible to insert (in a range) the Return Delivery Note date of subcontractor (from … to …)
 3. From/To Return Date …: through these fields it possible to insert (in a range) the goods return from subcontractor (from … to …), which is usually different than the relivery note date. It refers to the date in which the stock record of the same return will be proposed
 4. Return Type: through this combo it is possible to insert the Return Type and filter according to this criterium viewing all the Returns of the selected type
 5. Return Delivery Note No.: through this field it is possible to insert the return delivery note number and filter according to this criterium. The delivery note number field is a not numerical text field
 6. Job Order: through this field it is possible to insert the sales job order number thanks also to the specific help job orders
 7. Valorized: this flag enables the user to filter the returns already valorized, that is the returns from which a purchase invoice is already created in the Purchase Area
 8. Loaded: this flag enables the user to filter the stock returns already loaded that is, the returns that have already carried out the Return Record operation
 9. All: this flag enables the user to filter all the subcontractor returns, indipendent from the fact that they are already loaded and/or valorized
 10. Search Items: this button activates a section that enables the user to filter using a series of other parameters, as follows:
 11. Class/Item Code/Description: the first combo enables the user to set the item classi. Thanks to a double click on the second field a “Help items” can be opened through which it is possible to select a single item (code and description)
 12. J.O. Type: through this combo it is possible to insert a Production Job Order Type and to filter according this criterium, viewing all the return linked to the selected job orders type
 13. Prod. J.O.: in these 2 fields the production job order number and year can be set

RESULT GRID: Through the grid of result it is possible to view the list of Subcontractor Returns which correspond to the filter data above mentioned. After having specified the values through which it is possible to obtain a Subcontractor Returns search the user can push the Search button of its Ribbon and in this way obtain the list of the desidered Subcontractor Returns in the grid of result.

The columns that can be viewed in the grid of result are the following:


 1. Controlled: this flag enables the user to verify if the return has been controlled or not. In case that the return has not been controlled, it is not possible to perform neither the valorization nor the record operation of the same return
 2. Valorized: this flag enables the user to verify if the return has been valorized or not
 3. Loaded: this flag enables the user to verify if the return has been recorded or not
 4. Delivery Note: the column shows the return delivery note number
 5. Deliver Note Date: the column shows the return delivery note date
 6. Return Date: the column shows the date of the real goods return by subcontractor
 7. Subcontractor: the column shows the account and detail account subcontractor of return
 8. Subonctractor Description: the column shows the subcontractor company name of return
 9. Total: the column shows the total delivery before the VAT rate






