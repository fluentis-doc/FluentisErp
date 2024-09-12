---
title: Purchase Delivery Note Parameters
sidebar_position: 6
---

The purchase delivery notes parameters allow the basic setting in order to manage correctly according to specific requests of every single company.

The ribbon bar represents the Form menu, that is the area in which it is possible to perform actions. The possible features list is the following: 



| Function | Meaning |
| --- | --- |
| Restore Parameters | It enables the user to restore parameters to the initial values.  |

#1.1 General Tab

| Function | Meaning |
| --- | --- |
| Double Unit of Measure Management | When it is set, it is possible to activate the Alternative UM combo box and Alternative quantity column on Items grid of purchase delivery note. |
| Automatic Proposal of Alternative U.M.  | This check can be enabled only if “Double Unit of Measure Management” is active. When an item, that has the default alternative UM on its alternative UM tab register, is inserted, the UM is automatically proposed as item Alternative UM and it is possible to calculate even the alternative quantity by using the related conversion factor. |
| View Dimensions | When it is active on item tab of purchase delivery note management there is the possibility to view the following 3 columns: “Height”,”Width”,”Depth”  (data present on Weights/Dimensions Tab of Items register).  |
| Allow Delivery Notes with the Same Number and Vendor | When it is set, it is possible to insert delivery notes regarding the same vendor with the same number and then a warning message can be viewed. |
| Obligatory Lots and Serial Number  | When it is set regarding items managed per lots and serial numbers, it is obligatory to specify a lot or serial numbers on the related tabs. |
| Search Item Price in All the Defaults Price Lists | This parameter is used for searching price on vendor price lists, the search occurs on default price lists in vendor register even if price lists are not valid (the valid price lists are those that have validity start date \<= than the current date and that have validity end date null or \>= than the current date). |
| Allow Discounts for Giveaways Items | If it is set, it is possible to insert discounts also on giveaway type lines. |

#1.2 Load Tab

| Function | Meaning |
| --- | --- |
| Create Record with Document Date  | When it is set, the stock record is performed with the same date of delivery note and it will not necessary to specify the record date on load form. |
| Priority Warehouse and Load Template | When this parameter is set the load warehouse and template are read by load delivery note lines; on the contrary if it is not set, it is necessary to use warehouse and template inserted into this parameters form. |
| Automatic Load/Unload  | If flag is set when the delivery note has the “Controlled” status, the load procedure of delivery note on warehouse starts automatically. |
| Warning Fictitious Items | If it is set, during the load of delivery note, there is the possibility to control if on DN there are fictitious items; in that case, it will be necessary to give a message to load the DN; answering yes, the delivery note will be loaded. |

#1.3 Import TabIn this tab the user has to specify the name and path of file in order to import items from barcode. The import form can be opened from management toolbar of delivery note, within items tab. Through this import procedure it is possible to insert items from file into delivery note.

#1.4 Barcode Import TabIn this tab the user has to specify parameters in order to import data contained on BA_ImpBCAll table. The import form can be opened from management toolbar of delivery note, within items tab. Through this import procedure it is possible to insert items from a table configured on delivery note.





#1.5 Tab AnalyticThese parameters indicate the search priority of cost or profit centres in order to be attributed to purchase order items. When Recalculate flag is set, cost or profit centres are inserted/updated on items through the chosen priority.






