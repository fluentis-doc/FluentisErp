---
title: Purchase Orders Parameters
sidebar_position: 5
---

The purchase orders parameters allow the basic setting in order to manage correctly and according to specific requests of every single company.

The ribbon bar represents the Form menu, that is the area in which it is possible to perform actions. The possible features list is the following: 



| Function | Meaning |
| --- | --- |
| Restore Parameters | It enables the user to restore parameters to the initial values. |

#1.1 General Tab

| Function | Meaning |
| --- | --- |
| Double Unit of Measure Management | When it is set, it is possible to enable the Alternative UM combo box and the alternative Quantity Column on Items grid of order. |
| Automatic Proposal of Alternative Unit of Measure | This check can be enabled only if “Double Unit of Measure Management” is active. When an item, that has the default alternative UM on its alternative UM tab register, is inserted, the UM is automatically proposed as item Alternative UM and it is possible to calculate even the alternative quantity by using the related conversion factor. |
| Recover Only for Current Date | When it is set, the recovery of numbers is performed automatically during the day. If during the day it has been possible to create orders number 7,8,11,12 and flag is set, the next number proposed will be 10, that corresponds to the first free number lower than the one inserted by the user.  |
| Auto Insert Variant in Variants Attributes | When it is set, on items tab of orders management the variant code and description become 2 fields that can be edited and as regards data inserted into the 2 fields, it is necessary to save on variants register. In this way by inserting the order lines there is the possibility to create also items variants.  |
| Not Allow to Execute a Greater Quantity | If it is set, when a Goods Receipt is created by an order, the user cannot insert an higher quantity compared to the one that is in order. |
| Control the Sequence of Date and Number | If it is set, it will possible to have progressiveness between document number and date. In this way, if on 11/21/2011 there are 3 orders with number 7, 8, 10 and on 11/22/2011 there is the order number 11 and the user wants to insert an order on 11/22/2011, the only one possible number on that date will be 12 in order to maintain the progressiveness between number and date. |
| Cost Zero if Price Lists Are Missing | When it is set and it does not exist price lists for items inserted into Order, the proposed price will be 0, on the contrary, if it is not set, the last cost of items register will be proposed. |
| View Dimensions  | When it is active on item tab of purchase delivery note management there is the possibility to view the following 3 columns: “Height”,”Width”,”Depth”  (MGAD_Hight, MGAS_Width, MGAS_Depth from MG_DataReg – Weights/Dimensions Tab of Items register). |
| Block Document Insertion in Public Holidays  | When it is active, it is not possible to insert documents with the holiday date of calendar of company holidays. |
| Execute Only Authorized Orders | If it is active, during the reception of goods the orders are executed and it is possible to  view only the authorized orders. |
| Propose Brand with Priority Price List/Sales Order | If it is active, during the insertion of orders items, it is possible to save item mark on order list. Through this check set, the purchase orders creation from sales orders copies the mark of sales order to purchase order. |
| Allow VAT Modification | If it is active, during the automatic Orders Creation from Purchase Requests, the VAT code can be proposed on orders. |
| Mandatory User Code | If it is active, during the Orders Management, it is obligatory to insert the operator/employee.  |
| Search Item Price in All Default Price Lists | 1.	If it is active, this parameter is used for searching price on vendor price lists, the search occurs on default price lists in vendor register even if the price lists are not valid (the valid price lists are those that have validity start date null or >= to the current date). |

#1.2 Import Tab from BarcodeIn this tab the user has to specify parameters to import data contained on OF_ImpBCAll table. The import form can be opened from toolbar of goods receipt management in items tab.

#1.3 Load Tab

| Function | Meaning |
| --- | --- |
| Create Record with Document Date | When it is set, the stock record is performed with the same date as Goods Receipt one, and it will not necessary to specify the record date within load form. |
| Invoice Parameters Priority | When this parameter is set, the load warehouse and template are read by goods receipt lines and if they do not exist, they are read by load form; otherwise if it is not set, it is possible to use warehouse and template inserted into this parameters form. |

#1.4 Tab AnalyticThese parameters indicate the search priority of cost or profit centres in order to be attributed to purchase order items. When Recalculate flag is set, cost or profit centres are inserted/updated on items through the chosen priority.






