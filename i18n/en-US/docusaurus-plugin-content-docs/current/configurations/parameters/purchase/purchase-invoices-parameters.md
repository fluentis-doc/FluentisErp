---
title: Purchase Invoices Parameters
sidebar_position: 7
---

The purchase invoices parameters enable the basic import in order to manage correctly and according to specific requests of every single company.

The ribbon bar represents the Form menu, that is the area in which it is possible to perform actions. The possible features list is the following: 



| Function | Meaning |
| --- | --- |
| Restore Parameters | It enables the user to restore parameters to the initial values.  |

#1.1 General Tab

| Function | Meaning |
| --- | --- |
| Double Unit of Measure Management | When it is set, it is possible to enable the Alternative UM combo box and the alternative Quantity Column on Items grid of purchase invoice. |
| Automatic Proposal Alternative U.M. | This check can be enabled only if “Double Unit of Measure Management” is active. When an item, that has the default alternative UM on its alternative UM tab register, is inserted, the UM is automatically proposed as item Alternative UM and it is possible to calculate even the alternative quantity by using the related conversion factor. |
| “Invoice Type”, “VAT Rate”, “Purchase Turnover Type” | These parameters are used as default on the creation of invoices from orders. |
| Obligatory Lots and S.N.  | When it is set for items managed per lots and serial numbers, it is obligatory to specify a lot or serial number on the related tabs. |
| Search Item Price in All Default Price Lists | This parameter is used for searching price on vendor price lists; the search occurs on default price lists in vendor register even if price lists are not valid (the valid price lists are those that have validity start date \<= than the current date and that have validity end date null or \>= than the current date). |
| Allow Discounts For Giveaways Items | If it is set, it is possible to insert discounts also on lines with giveaway type. |

#1.2 Load Tab

| Function | Meaning |
| --- | --- |
| Create Record with Document Date | When it is set, the stock record is performed with the same date as the purchase invoice and it will not necessary to specify the record date on load form. |
| Priority Warehouse and Load Template | When this parameter is set, the load warehouse and template are read by purchase invoices lines or by parameters of load form; on the contrary if it is not set, it will be necessary to use warehouse and template inserted into this parameters form. |
| Warning Fictitious Items | If this is set during the load of invoice it is possible to control if on invoice there are fictitious items; if these are present, it is possible to give a message for loading invoice; answering yes, the invoice will be created. |

#1.3 Import TabIn this tab the user has to specify the name and path of file in order to import items from barcode. The import form can be opened from toolbar of purchase invoices management, items tab. Through this import procedure it is possible to insert items from purchase invoice file.

#1.4 Barcode Import TabIn this tab the user can specify parameters in order to import data contained on FA_ImpBCAll table. The import form can be opened from toolbar of purchase invoice management, items tab. Through this import procedure it is possible to insert items from a table configured on invoice.

#1.5 Tab AnalyticThese parameters indicate the search priority of cost or profit centres in order to attribute items of purchase invoice. When Recalculate flag is set, the cost or profit centres are inserted/updated on items through the chosen priority. 






