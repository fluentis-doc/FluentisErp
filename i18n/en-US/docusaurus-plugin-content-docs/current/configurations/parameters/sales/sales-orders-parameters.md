---
title: Sales Orders Parameters
sidebar_position: 2
---

The sales orders parameters allow the basic setting in order to manage correctly and according to specific conditions belonging to each single company.

The ribbon bar represents the Form menu, that is the area in which it is possible to perform actions. The list of possible features is the following: 



| Function | Meaning |
| --- | --- |
| Restore Parameters | It enables the user to restore parameters to the initial values. |

#1.1 General Tab

| Function | Meaning |
| --- | --- |
| Propose the Commission for all Items | No longer managed. |
| Management of Double UM | It signals the fact that the alternative unit of measure is managed within the sales order. |
| Automatic Proposal of Alternative UM | If active, it is possible to manage the alternative unit of measure within sales order. |
| Consider the Numeration Gaps | If active, it will be possible to recover available numbers. |
| Mandatory User Code | If active, it is necessary to specify the operator on sales order header. |
| Control Document Sequence, Number and Date | If active, it will be possible to verify date/number sequentiality for sales orders. |
| Recover Only for Current Date | If active, it will be possible to recover available numbers only regarding the current day. |
| Automatic Recover | It signals the fact that the first available number will be proposed automatically. |
| Automatic Insertion of Variants on Variants Attributes | If active, variants of attributes will be inserted into register automatically. |
| If active, variants of attributes will be inserted into register automatically. | If active, during the insertion of an item there will be the possibility to substitute it starting from the first level of its list, if the last one exists. |
| Control Availability | If active, it will be possible to verify the availability of sales order item. |
| Exclude Sales Orders | If active, the usage of sales orders will not be considered during the calculation of sales order item availability. |
| Compulsory Availability | If active, the sales order item availability will be obligatory, that is, that the quantity could not be higher than the availability.  |
| View Availability | If active, it will be possible to view the availability at the level of item line during the insertion of quantity. |
| Subcontractor | If active, subcontractor documents will be considered during the calculation of sales order item availability.  |
| Purchase | If active, purchase documents will be considered during the calculation of sales order item availability.  |
| Sales | If active, sales documents will be considered during the calculation of sales order item availability.  |
| Planned Prod. | If active, documents of resources requirements and production job order will be considered during the availability calculation of sales order item. |
| Released Prod. | If active, the production order will be considered during the availability calculation of sales order item. |
| Warehouse | If active, the stock records will be considered during the availability calculation of sales order item. |
| Search Item Price in All the Default Price Lists | If active, the item inserted into sales order line will be searched even within price lists specified on customer register, in addition to the default price list. |
| Use Barcode | If active, the item Barcode column of items grid can be viewed and managed. |
| Use Customer Item | If active, Customer Item and Customer Item Description columns of the Items grid can be viewed and managed. |
| Size and Colour Management | If active, Lot columns of Variants grid are managed. |
| View Dimensions | If active, dimensions columns (Hight, Width, Depth) of Items grid are managed. |
| Allow Discounts for the Giveaways Items | If active, giveaway items can manage discounts. |
| Control Integrity | If active, it is possible to verify the data integrity of sales order. |
| Obligatory Relation Between Packages and Qty | If active, it will be possible to verify the sales order line related to packages number of item register. |
| Block Document Insertion in Public Holidays | If active, it is not possible to use public holidays. |
| Propose Economic Lot | If active, it is possible to propose the economic lot of item register for quantity of sales order line. |
| Link Cust./Prod. Order | If active, the quantity of sales order line will be the same as the production job order one, with which it is linked. |
| Join Attributes | If active, it will be possible to insert both customer attributes and item register attributes as sales order line ones. |
| Block Attributes | If active, it will be possible to block the grid about sales order item attributes. |

#1.2 Unload Tab

| Function | Meaning |
| --- | --- |
| Priority of Parameters Inserted for Each Order Line | No longer managed. |
| Warehouse | No longer managed. |
| Template | No longer managed. |

#1.3 Configurator Tab

| Function | Meaning |
| --- | --- |
| Configurator | It specifies the Configurator HTTP address.  |
| Sales Orders | It specifies the WSOC HTTP address |
| Version | It specifies the configurator type used: Configurator or Visual Tailor. |

#1.4 Execution Tab

| Function | Meaning |
| --- | --- |
| Payments | It specifies the value used to pay the sales order in case of a multiple sales job order execution: First order, Register or Manual selection. |
| Recipient | It specifies the value used for recipient of sales order in case of a multiple sales job order execution: First order, Register or Manual selection. |
| Execution from Orders Search Group for Payment Type and Terms | It specifies the fact that the sales orders will be grouped per type and payment solution during the direct execution on delivery notes or invoices. |
| Execution from Orders Search Group for Destination | It specifies the fact that sales orders will be grouped for recipient and destination of direct execution in delivery notes or invoices. |

#1.5 Analytic TabIt specifies the priority for the CC/PC search: Turnover type, Register, Items register or Warehouse.






