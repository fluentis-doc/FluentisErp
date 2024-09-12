---
title: Restore
sidebar_position: 4
---

Through this tab it is possible to view the list of planned orders that wait for the release restore, and that can be filtered through a series of selection criteria. The execution of the planned order restore procedure enables the user to delete the release, previously performed, by restoring the situation before the same release. Obviously this operation can be performed only according specific conditions:

As regards the **production planned order**: only if the generated production order is in the 'lanched' status; in case that the production order is 'executive' it is necessary to release the rollback of the planned order, unless user starts from the record rollbask of the production signal

As regards the **purchase planned order**: only in case that the generated purchase request line has the 'Not Executed' status; in case that the Purchase Request line has been already executed with the purchase order creation, it will be necessary to start from the purchase document up to which user has arrived

As regards the **subcontractor planned order**: only in case that the generated subcontractor order line has not been executed, or a delivery note has not been generated for material related to the subcontractor order line

In order to perform the release it is necessary to select one or more lines from the grid above and click on the 'Restore' button on the ribbon bar.

The tab consists of a filter area, a result grid and another grid made up of 3 different tabs, which depends on the selected line of the grid above.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following: 





| Function | Meaning |
| --- | --- |
| Search | Button to apply search filters within database of the Planned Orders inserted and already released. |
| Restore | It refers to the procedure to perform rollback of the Purchase or Subcontractor Production planned orders release selected into the result grid, as explained in this tab detail. |

FILTER AREA: the filter area contains the list of possible data type thanks to which it is possible to perform a selection, a search on the total of Planned Orders that have already been released. Typically filters have 'AND' condition and it is possible to specify more filter criteria at the same time.

The user can use the following filters:

**Item**: the first combo enables the user to set the item class. Through a double click on the second field it is possible to open a 'Items Help' through which user can select the single item (code and description)

**Variant**: through a double click user can open a variants help through which it is possible to select the item variant.

**Maintenance Orders**: through this flag it is possible to view or not the maintenance planned orders

**J.O. Type**: through this combo it is possible to insert the Production Job Order Type and filter according to this criterium, viewing so all the planned orders generated from job orders belonging to the selected type

**Job Order**: in this field and through the specific job order help it is possible to insert the sales job order number

**Customer**: through these 3 fields it is possible to specify the customer data: 'account', 'detail account', 'customer name'. Through a double click on the first field it is possible to open an 'Accounts Help' from which to select the customer to filter

**Vendor**: in these 3 fields it is possible to specify the vendor data: 'account', 'detail account', 'customer company name'. Through a double click on the first field it is possible to open a 'Accounts Help' frm which to select the desired vendor

**Prod. J.O.**: in these 2 fields it is possible to set the production job order number and year

RESULT GRID: in the result grid it is possible to view the list og the Planned Orders that correspond to the filter data, above mentioned. After having specified the values through which to obtain a search of the Planned Orders, the user, by clicking on the Search button in the related Ribbon, will obtain the list of the desired Planned Orders in the grid.

The columns, that can be viewed in the result grid, are the following:

**Release User**: the column shows the user of Ideale who has performed the release of the selected planned order

**Release Date**: the column shows the date in which user, above mentioned, has released

**Year**: the column shows the Planned Order year

**Order**: the column shows the Planned Order number

**Order Type Code**: the column shows the Planned Order Type code

**Order Type Description**: the column shows the Planned Order Type description

**Job Order Year**: the column shows the production job order year from which the production order has been generated. The column is free in case that the planned order has been manually generated or comes from MRP elaboration

**Job Order Number**: the column shows the production job order number from which the planned order has been generated. The column is free in case that the planned order has been manually generated or comes from MRP elaboration

**Job Order Type Code**: the column shows the Production Job Order Type code

**Job Order Type Description**: the column shows the Production Job Order Type description

**Class**: the column shows the Planned Order item class

**Item Code**: the column shows the Planned Order item code

**Variant**: the column shows the possible item variant

**Start Date**: the column shows the estimated start date of the Planned Order. In case of a purchase or subcontractor planned order this date represents the date on which the purchase order has to be sent to vendor and it will be certainly generated with the release of the same order; on the contrary, in case of production planned order this date represents the estimated start date of the first working phase of item route

**End Date**: the column shows the estimated end date of Planned Order. In case of a purchase or subcontractor planned order this date represents the date on which the forniture has to be received and it will correspond with the estimated reception date of the purchase order line, that will be subsequently generated through the release of the same order; on the contrary, in case of production planned order this date represents the estimated end date of the last working phase of item route

**Quantity**: the column shows the item Planned Order quantity

**Job Order**: the column shows the possible sales job order linked to the Planned Order

**Customer**: the column shows the customer account and detail account linked to the Planned Order

**Vendor**: the column shows the vendor account and detail account linked to the purchase or subcontractor Planned Order

**Characteristic**: the column shows the item Characteristic code of the Planned Order

**Item Description**: the column shows the item description of the Planned Order

**Customer Description**: the column shows the customer company name linked to the Planned Order

**Vendor Description**: the column shows the vendor company name linked to the purchase or subcontractor Planned Order

**Characteristic Description**: the column shows the item Characteristic description of the Planned Order

Selecting one of the lines in the result grid it is possible to view a detail in the grid below related to the document generated by planned order as in line of the grid above. The document can be, as previously mentioned:

**Production Order**: in this case it is possible to view the detail within the 'Production Orders' tab

**Subcontractor Order**: in this case it is possible to view the detail within the 'Subcontractor Orders' tab

**Purchase Request**: in this case it is possible to view the detail within the 'Purchase Request' tab

Each document will have a detail similar to the one that it is possible to obtain searching documents into the related search windows located in the related application modules.






