---
title: Sales Invoices Parameters
sidebar_position: 5
---

The sales invoices parameters enable the basic setting in order to manage correctly and according to specific conditions belonging to each company.

The ribbon bar represents the Form menu, that is the area in which it is possible to perform actions. The list of the possible features is the following: 



| Function | Meaning |
| --- | --- |
| Restore Parameters | It enables the user to restore parameters to the initial values.  |

General Tab

| Function | Meaning |
| --- | --- |
| Propose Commission Inserted into Document Heading for all Items | No longer managed. |
| Insert Comm. on Line Type 6 and 7 (on-account/reversal) | It indicates the fact that account and reversal item lines manage the agents' commissions. |
| Management of Double UM | When it is set, it is possible to enable the Alternative UM combo box and the alternative Quantity column on grid related to Invoices Items Management. |
| Automatic Proposal of Alternative UM | This check can be enabled only if “Management of Double Unit of Measure” is active. When an item, which has a default alternative UM within its alternative UM tab register, is inserted, the UM can be automatically proposed as an alternative UM of item and it is possible to calculate even the alternative quantity by using the conversion factor of the same one. |
| Automatic Proposal of Transport Made by Carrier | If it is set, it means that the transport type will be Vector and the default vector will be proposed. |
| Volume Def. U.M.  | If it is set, it refers to the default unit of measure for volume during the transport calculation of delivery note. |
| Weights Def. U.M. | If it is set, it refers to the default unit of measure for weight during the transport calculation of delivery note. |
| Recover Only for Current Date | If it is set, it means that there will be the possibility to recover available numbers only as regards the current date. |
| Automatic Recover | If it is set, it means that the first available number will be proposed. |
| Control Availability | If it is set, it means that there will be the possibility to verify the delivery note item availability. |
| Negative Price on Credit Notes | If it is set, it means that the presence of positive prices will be notified into invoices with credit notes type. |
| Exclude Sales Orders | If it is set, it means that the usage of sales orders will not be considered during the delivery note item availability calculation.  |
| Compulsory Availability | If it is set, it means that the delivery note item availability will be obligatory. The quantity could not be higher than the availability.  |
| View Availability | If it is set, it means that, by inserting the quantity into line, there will be the possibility to view the item availability.  |
| Subcontractor | If it is set, it means that subcontractor documents will be considered during the availability calculation of delivery note item. |
| Purchase | If it is set, it means that purchase documents will be considered during the availability calculation of delivery note item. |
| Sales | If it is set, it means that sales documents will be considered during the availability calculation of delivery note item. |
| Planned Prod. | If it is set, it means that documents regarding resources requirements and production job order will be considered during the availability calculation of delivery note item. |
| Released Prod. | If it is set, it means that production orders will be considered during the availability calculation of delivery note item. |
| Warehouse | If it is set, it means that stock records will be considered during the availability calculation of delivery note item. |
| Check Next Price List | It indicates the fact that the item inserted into invoice line will be searched even on price lists specified on customer register, over the default price list. |
| Control Intra-cee | It indicates the fact that there will be the possibility to verify if the invoice type and customer have the same Intra CEE type. |
| Use Barcode | It indicates the fact that the item Barcode column of Items grid is managed. |
| Size and Colour Management | It indicates the fact that Lot columns of Variants grid are managed. |
| View Dimensions | If it is set, it means that the dimensions columns (Height, Width, Depth) of Items grid are managed. |
| Allow Discounts for the Giveaways Items | It indicates the fact that the giveaways items can manage discounts. |
| Control Integrity | It indicates the fact that it is possible to verify the invoice integrity. |
| Recalculate Transport | It indicates the fact that the invoice transport can be automatically calculated. |
| Without Collection Charges in Credit Note | It indicates the fact that collection charges will not be inserted into maturities of invoices with credit notes type. |
| Block Document Insertion in Public Holidays | It indicates the fact that the public holidays are blocked in order to be used. |
| Verify Sales Price Lots | It indicates the fact that there will be the possibility to verify the unit amount of invoice line. |
| Mandatory User Code | It indicates the fact that the operator specification on invoice header is obligatory. |
| External Order Reference | It indicates the fact that it is possible to manage the external reference of sales order linked to the invoice item line. |
| Line Maxim No. | It specifies the maximum number allowed on Items grid. |

Execution Tab

| Function | Meaning |
| --- | --- |
| Payments | It specifies the value used in order to pay invoices as regards the multiple orders execution: First order, Register or Manual selection. |
| Recipient | It specifies the value used for invoice recipient as regards the multiple orders execution: First Order, Register or Manual Selection.  |

Unload Tab

| Function | Meaning |
| --- | --- |
| Create Record with Document Date | When it is set, the stock record is performed through the same date of purchase invoice and it will not necessary to specify the record date on load form. |
| Priority Warehouse and Load Template | When this parameter is set, load warehouse and template are read by invoices lines; on the contrary if it is not set, it is possible to use warehouse and template inserted into this parameters form. |
| Warehouse | It specifies the warehouse to be used for unload of invoice when the following parameter Priority Warehouse and Load Template from items lines of DN is not active. |
| Template | It specifies the template to be used for unload of invoice when the following parameter Priority Warehouse and Load Template from items lines of DN is not active. |
| Warning Fictitious Items | If it is set, during the unload of invoice it is possible to control if there are fictitious items on invoice. A message is given in case in which the user wants to unload the invoice; answering yes, the invoice can be unloaded however.  |

Import TabIn this tab the user specifies name and path of file in order to import items from barcode. The import form can be opened from toolbar of invoices management on items tab. Through this import it is possible to insert items from file into invoice.

Import Barcode TabIn this tab the user can specify parameters in order to import data contained in FT_ImpBCAll table. The import form can be opened from invoices management toolbar on items tab. Through this import it is possible to insert items from a table configured on invoice.



| Function | Meaning |
| --- | --- |
| Alternative U.M.  | If it is set, it means that the alternative UM column of Barcode import grid is managed. |
| Location | If it is set, it means that the Location column of Barcode import grid is managed. |
| Customer/Vendor Account | If it is set, it means that the following column Account, Detail Account, Customer/Vendor Description of barcode import grid are managed. |
| Item Price | If it is set, it means that the Price column of barcode import grid is managed. |
| Option | If it is set, it means that the Option column of barcode import grid is managed. |
| Variant | If it is set, it means that the Variant column of barcode import grid is managed. |
| Item Pickup Type | It specifies the item pickup type: Item Class/Code, Lot, Serial Number |

Picking Tab

| Function | Meaning |
| --- | --- |
| Turnover Type | It specifies the turnover type to be used during the picking items import into invoice. |
| VAT | It specifies the VAT code to be used during the picking items import into invoice. |

Valorization Tab

| Function | Meaning |
| --- | --- |
| Valorization Additional group by clauses | It specifies fields added for grouping of delivery notes into valorization procedure. |

Analytic TabThese parameters set the search priority of cost or profit centres in order to be attributed to invoice items. When recalculate flag is set, cost or profit centres are inserted/added on items through the chosen priority.






