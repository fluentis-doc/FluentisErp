---
title: DN Parameters
sidebar_position: 3
---

The DN parameters allow the basic setting in order to manage correctly and according to specific conditions belonging to each single company.

The ribbon bar represents the Form menu, that is the area in which it is possible to perform actions. The list of possible features is the following: 



| Function | Meaning |
| --- | --- |
| Restore Parameters | It enables the user to restore parameters to the initial values.  |

#1.1 General Tab

| Function | Meaning |
| --- | --- |
| Propose the Commission for All Items | Not longer managed. |
| Management of Double UM | If it is set, it indicates that the alternative unit of measure can be managed within delivery note. |
| Automatic Proposal of Alternative UM | This check can be enabled only if “Double Unit of Measure Management” is active. During the insertion of an item which has an alternative default UM into its Alternatives UM tab register, this UM can be automatically proposed as Alt. Item UM and it is possible to calculate even the alternative quantity by using its conversion factor. |
| Automatic Proposal of Transport Made by Carrier | If it is set, it means that the transport type will correspond to Vector and it will be possible to propose the default vector. |
| Def. U.M. Volume   | If it is set, it means that it corresponds to the default unit of measure for volume during the transport calculation of delivery note. |
| Def. U.M. Weights | If it is set, it means that it corresponds to the default unit of measure for weight during the transport calculation of delivery note. |
| Control Document Sequence Number and Date | If it is set, it means that it will be possible to verify the date/number sequentiality for delivery notes. |
| Recover Only for Current Date | If it is set, it indicates that it will be possible to recover the available numbers only regarding the current day. |
| Automatic Recover | If it is set, it means that it will be possible to propose the first available number automatically.  |
| Control Availability | If it is set, it means that there will be the possibility to verify the availability of delivery note item. |
| Exclude Sales Orders | If it is set, it means that the sales order usage will not be considered during the availability calculation of delivery note item.  |
| Compulsory Availability | If it is set, it means that the delivery note item availability will be obligatory. The quantity could not be higher than the availability.  |
| View Availability | If it is set, it means that the item availability will be viewed by inserting the quantity on line. |
| Subcontractor | If it is set, it means that subcontractor documents will be considered during the availability calculation of delivery note item. |
| Purchase | If it is set, it means that purchase documents will be considered during the availability calculation of delivery note item. |
| Sales | If it is set, it means that sales documents will be considered during the availability calculation of delivery note item. |
| Planned Prod. | If it is set, it means that documents regarding resources requirements and production job order will be considered during the availability calculation of delivery note item. |
| Released Prod. | If it is set, it means that production orders will be considered during the availability calculation of delivery note item. |
| Warehouse | If it is set, it means that stock records will be considered during the availability calculation of delivery note item. |
| Search Item Price in All the Default Price Lists | If it is set, it means that the item inserted on delivery note line will be searched even inside price lists specified on customer register, in addition to the default price list. |
| Compulsory Oper. Code | If it is set, it means that the specification of operator on delivery note header is obligatory. |
| Use Barcode | If it is set, it means that the item Barcode column of Items grid is managed. |
| Size and Colour Management | If it is set, it means that the Lot columns of Variants grid are managed. |
| View Dimensions | If it is set, it means that dimensions columns (Height, Width, Depth) of Items grid are managed. |
| Recompute Transport | If it is set, it means that the delivery note transport is calculated automatically. |
| Allow Discounts for the Giveaways Items | If it is set, it means that giveaways items can manage discounts. |
| Control Integrity | If it is set, it means that it is possible to verify the delivery note integrity.  |
| External Order Ref. | If it is set, it means that it is possible to manage external references of sales order linked to the delivery note item line. |
| Block Document Insertion in Public Holidays | If it is set, it means that public holidays are blocked in order to be used. |
| Line Maxim. No. | It specifies the maximum number allowed in Items grid. |

#1.2 Execution Tab

| Function | Meaning |
| --- | --- |
| Payments | It specifies the value used for paying the delivery note in case in which there is a multiple orders execution: First Order, Register or Manual Selection. |
| Recipient | It specifies the value used for recipient of delivery note in case in which there is a multiple orders execution: First Order, Register or Manual Selection. |
| Control Coherence Between DN Payments and Order | If it is set, it means that there will not possible to execute from orders with different payments. |

#1.3 Unload Tab

| Function | Meaning |
| --- | --- |
| Create Record with Document Date | When it is set, the stock record is performed through the same DN date and it will not necessary to specify the record date into the unload form. |
| Priority Warehouse and Unload Template from DN Items Lines | When this parameter is set, warehouse and unload template are read by DN lines, on the contrary if it is not set, there will be necessary to use warehouse and template inserted into this parameters form. |
| Warehouse | It specifies warehouse to be used to unload delivery note when the following parameter Priority Warehouse and Unload Template from DN Items Lines is not active. |
| Template | It specifies the template to be used in order to unload delivery note when the following parameter Priority Warehouse and Unload Template from DN Items Lines is not active. |
| Automatic Load/Unload | If it is set, it means that the unload of delivery note will be performed automatically during the activation of Printed flag. |
| Warning Fictitious Items | If during the delivery note unload this is set, it can be controlled only if on DN there are fictitious items. If there are this items type, a message is given in order to unload DN; by answering yes, DN can be unloaded however. |

#1.4 Import TabOn this tab the user can specify name and path of file in order to import items from barcode. The import form can be opened from toolbar of DN management into items tab. Through this import it is possible to insert items from file to DN.

#1.5 Barcode Import TabOn this tab the user can specify parameters to import data contained in BL_ImpBCAll table. The import form can be opened from toolbar of DN management into items tab. Through this import it is possible to insert items from a table configured on DN.



| Function | Meaning |
| --- | --- |
| Alternative U.M. | If it is set, it means that the alternative UM column of Import Barcode grid is managed. |
| Location | If it is set, it means that the Location column of Import Barcode grid is managed. |
| Customer/Vendor Account | If it is set, it means that the following columns Account, Detail Account, Customer/Vendor Description of Import barcode grid are managed. |
| Item Price | If it is set, it means that the Price column of Import barcode grid is managed. |
| Option | If it is set, it means that the Option column of Import barcode grid is managed. |
| Variant | If it is set, it means that the Variant column of Import barcode grid is managed. |
| Item Pickup Type | It specifies the item pickup type: Item Class/Code, Lot, Serial Number |

#1.6 Picking Tab

| Function | Meaning |
| --- | --- |
| Turnover Type | It specifies the turnover type to be used during the picking items import within DN. |
| VAT | It specifies the VAT code to be used during the picking items import within DN. |

#1.7 Analytic TabThese parameters indicate the search priority of cost or profit centres in order to be attributed to DN items. When Recalculate flag is set, cost or profit centres are inserted/updated on items through the chosen priority.






