---
title: Stock Templates
sidebar_position: 7
---

The Stock Templates window can be opened through the following path Home > Tables > Logistics > Stock Templates. Through this window it is possible to set all the stock templates that are necessary for items handling from and for the various warehouses inserted into the specific “Warehouses” table. It consists of a small filter are, through which the user can filter templates inserted per Warehouse (by using the specific combo box that refers to the same table warehouses), per code and template description and then it consists also of a result and insertion grid.

The ribbon bar represents the form Menu, that is the area in which it is possible to perform actions, linked to the procedure in use. The list of the possible features is the following:



| Function | Meaning |
| --- | --- |
| Search | Button to apply search filters within database of the inserted Stock Templates. |
| Delete  | It refers to the procedure to delete a Stock Template previously inserted. Remember that if the template has already been used, it is not possible to delete it more. |
| Print Preview | It shows a print preview of Stock Templates table. |
| Print | It launches the print of Stock Templates table report on the default printer. |

RESULT GRID: in the result grid it is possible to view the list of stock templates which correspond to the filter data, above mentioned. After having specified values through which to obtain a search of templates, the user, by clicking on the Search button in the related Ribbon, will obtain the list of the desired templates on the result grid.

The columns, that are in the result grid, are the following:


 1. Ware: by using the special combo box, that asks for data from “Warehouses” table, the user has to set in this column the warehouse code in order to insert handling template.
 2. Template: in this column the user has to insert the stock template code. It can reach a maximum length of 3 alphanumeric characters. In addition it is possible to create more stock templates with the same code, on condition that templates have to be generated according to different warehouses; two templates with the same code on the same warehouse are not accepted
 3. Description: in this column the user has to insert the stock template description, that can reach a maximum length of 80 alphanumeric characters
 4. Type: in this column the user has to insert the handling type that determines the template. It can be a Load template, in case that the warehouse movement quantity created with that template is saved positively in database, or it can be an Unload template, in case that the warehouse movement quantity created with that template is negatively saved
 5. Proposed Cost: in this column the user has to choose which cost to be proposed automatically during the manual movement insertion. The proposed cost can be last cost, average cost, sales price or standard cost of the moved item. Remember that while the sales price and standard cost are directly taken within the item register, the average cost and last cost are calculated runtime by the application at the moment in which user insert movement according to movements performed with templates that have activated “Up. A.C.” and “Up. L.C.” flags
 6. Up. A.C.: when a stock movement is inserted in record header using the template with the activation of “Update Average Cost” flag it is possible to update the average cost in item register with the movement amount. In addition all movements, that have been performed using an active template flag, can calculate the weighted average cost of item. Remember that, after the use of template the flag can not be activated or disabled even for only one warehouse movement. Usually this flag can be activated only for load movements, but it can be activated even for unload movements, when it is necessary to calculate the item weighted average cost considering the sales prices linked to the warehouse unloads of the same item
 7. Up. L.C: when a warehouse movement is inserted through the use of active “Update Last Cost” template flag  in record template, it is possible to update the last cost in item register with the movement amount. Remember that the flag can not be activated or enabled after that template has already been used even in one stock movement. This flag can be activated only regarding load movements.
 8. Up. S.P.: when the user inserts a warehouse movement by using the template with “Update Sales Price” flag in record header, it is possible to update the sales price in item register with movement amount. Remember that, flag can not be activate or disable after having used template, even in one warehouse. This flag can be activated only for unload movements
 9. Fisc. Int.: when the user inserts a warehouse movement by using the template that has activated  “Fiscal Interest” flag in record header, the same movement is considered in warehouse master and during the calculation of valorized quantity inventory, on the condition that the moved item has activated “Fiscal Interest” flag on “Generality” tab
 10. ABC Calc.: when the user inserts a warehouse movement by using the template that has activated “Calculate ABC” flag in record header, the movement will  be considered in order to calculate the ABC of the moved item
 11. Reorder Level: when the user inserts a warehouse movement by using the template that has activated “Reorder Level” flag in record header, the movement will be considered by the procedure that performs the reorder level calculation. Usually the flag can be activated only in unload templates
 12. Lots Management: when the user inserts a warehouse movement by using the template that has activated “Lots Management” flag in record header, the movement enables the insertion of lot into the specific stock record grid for a certain item which is managed per lots. The same situation occurs as regards the Serial Numbers management
 13. Not Available Lots: when the user inserts a warehouse movement by using the template that has activated “Not Available Lots” flag with movement in record header, it will be possible even to unload lots that are in a not available status
 14. L.C. Lot: when the user inserts a warehouse movement by using the template that has activated “Last Cost Lot” flag in record header and at the same time the proposed cost corresponds to the last cost in case that user loads a certain lot code. Instead of propose the last cost by register in movement amount, i twill be possible to propose the last load cost made through that lot code
 15. Unload Lot: “Unload Lot” flag is necessary in order to propose automatically the unload lot template, that is in the sales document (sales order, sales delivery note or sales invoice), into the same document lots grid. For this reason this flag template will be proposed automatically by the procedure and the user will have to substitute it with another template according to the situation
 16. Cons.: movement, that have been made with a template that has activated “Consumption” flag, can be viewed on production job order costing window in Summary Costs and Times tab in Used Materials grid
 17. Compulsory Document: when the user inserts a warehouse movement by using the template that has activated “Compulsory Document” flag in record header, it is necessary to specify something within “Reference Document” field of stock record
 18. Comulsory Account: when the user inserts a warehouse movement by using the template that has activated “Compulsory Account” flag in record header, it is necessary to specify something within the “Customer/Vendor” field of stock record. Usually it is used for records related to the subcontractor materials consumption and delivery
 19. BOM: when the user inserts a warehouse movement by using template that has activated “BOM” flag in record header and at the moment to save the movement line, rather than the selected item (that has to have a BOM), it is possible to insert the first level items of BOM. Often it is used within offset load templates in order to unload elements of an item that has been loaded by the main template
 20. Phys. Inv. Man.: “Physical Inventory Management” flag enables the user to decide which warehouse templates have to be selected in Initial Warehouse Parameters as templates to be used during the stock differences calculation. Stock records, that will be created automatically by the “Stock Differences” procedure, will show this type of templates in header
 21. Offset Ware.: in this column the user can specify the offset warehouse code, by obtaining information through the specific combo box in Warehouses table. It corresponds to the warehouse that appears in “Offset” tab of warehouse record
 22. Off. Template: in this column the user can specify the template code to be used in offset. During a warehouse movement creation by using the main template, it enables the user to insert an opposed movement. For example, it is possible to set the offset template in order to perform movements among different warehouses or among different locations within the same warehouse
 23. Oddments: with this flag the user can decide for a single warehouse template which template has to be used by “Warehouse Valorization” procedure that performs the warehouse closing in order to create load records for initial inventory
 24. Location: in this column, identified with a yellow field, the user can insert, by keeping from the specific “Locations Help” which can be exploded thanks to a double click on that field, the predefined location that will be proposed in load or unload movement in case that the automatic procedures have not already set the location automatically. The automatic location setting is usually used on load templates, because the unload has to be performed by the location on which the item is at the moment of the same unload procedure
 25. Rotation Index: if this flag is active the records created with that template are considered in the calculation procedure of the warehouse rotation index
 26. Alternatives: the activation of this flag works together with “BOM” flag; if it is active, during a movement creation with an unload template that has both active flags and one of the components has no sufficient quantity to be unloaded, the procedure can control if an alternative item (specified within BOM) has on the contraru sufficient quantity to be unloaded for the main component
 27. Mixed Alternatives: the activation of this flag works together with “BOM” flag; if it is active, the procedure unloads more alternative items at the same time in order to complete the necessary quantity. Is is linked to “Alternatives” flag
 28. Consider Movements to Zero: through this flag activation the user can decide which warehouse movements with zero cost have to calculate the weighted average cost of items. Obviously the flag is activated on templates that have an active “Update Average Cost” flag






