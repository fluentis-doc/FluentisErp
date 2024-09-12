---
title: Job Orders
sidebar_position: 2
---

The Job Orders window can be opened through the following path Planning > Job Orders > Job Orders. This window enables the user to search the Production Job Orders created previously and to create new ones through special ribbon buttons.

RIBBON BAR: it represents the Form Menu, that is the area in which it is possible to perform actions, linked to the procedure in use. The list of features is the following: 





| Function | Meaning |
| --- | --- |
| Search  | Button to apply search filter within the database of inserted Production Job Orders. |
| Insert Monoproduct Job Order | Button to insert a new Monoproduct Production Job Order. |
| Insert Multiproduct Job Order | Button to insert a new Multiproduct Production Job Order. |
| Edit Job Order | Button to edit a Production Job Order previously inserted. |
| View Job Order | Button to view a Production Job Order previously inserted. |
| Delete Job Order | Button to delete a Production Job Order previously inserted. |
| Edit Job Order Date | Button to edit the estimated end date of one or more Production Job Orders. |
| Edit Attributes Filter | It opens a window in order to enables the user to decide if it is necessary to activate or not the Attributes Filter. Also this filter enables the user to filter the Production Job Orders according to the inserted attributes through the encoder into items of the same job order. |

FILTER AREA: The filter area contains the list of the possible data types thanks to which it is possible to perform the selection, a search on total inserted Job Orders. Typically, filters have always 'AND' status and it is possible to specify more filters criteria at the same time.

The user can use the following filters:

**J.O. Type**: through this combo box it is possible to insert the Production Job Order Type and to filter according to this criterion, viewing in this way all the selected Production Job Orders Type;

**From Number…To Number**: through these fields it is possible to search job orders by inserting a number range;

**From Year…To Year**: through these fields it is possible to search job orders by inserting a time range and considering the job order creation year;

**Item**: in the first combo box it is possible to set the item class. Through a double click on the second and third field it is possible to open an items help, that is necessary to select the item for which the production job orders can be filtered;

**Variant**: in this combo box it is possible to select the item variant for which user wants to use the filter;

**Job Order Type**: through this combo box it is possible to filter per Monoproduct/Multiproduct Job Order or both;

**Sales Order**: through this combo box it is possible to set the order type, description and related number. In this case all the production job orders, linked to the order number for which the filter has been set,  will be viewed;

**Job Order**: in this field through a double click and through a specific Job Orders Help it is possible to select the sales job order to which the Production Job Orders, that user wants to search, are linked;

**Customer**: in these 3 fields it is possible to specify the related Customer data : 'account', 'detail account', 'customer name'. Through a double click on the first field it is possible to open a 'Account Help' in order to select the customer in question. In this way it is necessary to search all the Production Job Orders linked to the selected customer;

**Prod. Site**: from here it is possible to filter the job orders according to the Production Site associated with the same job order;

**Working Estimated End from Date…To Date**: in these fields it is possible to insert (in a range) the working estimated end date (from..to). In case it is possible to specify through specific flags if it is necessary to view job orders in delay and/or the expired ones;

**Procurement Type**: through these flags it is possible to select the procurement type to be filtered in case that is a job order, a production or subcontractor job order;

**Job  Order Status**: through these flags it is possible to filter the Job Order Status to be viewed (Not Examined, Scheduled, Launched, Executive, Executed, Historicized).

RESULT GRID: Through the result grid it is possible to view the list of Production Job Orders which correspond to the filter data, above mentioned. After having specified the values through which it is possible to obtain a Production Job Orders search, the user, by clicking on the Search button of the related Ribbon, will obtain the list of the desired Subcontractor Returns on the result grid.

The columns, that can be viewed in the result grid, are the following:

**Demand Type**: it can be Dependent in case of a job order generated through the MPS Definition automatically or Indipendent, in case of a job order generated manually;

**J.O. Procurement Type**: the column shows the Procurement Type of a Production, Purchase or Subcontractor Job Order, according to the Procurement Type set for the item of job order in its MRP Parameters;

**Year**: the column shows the Production Job Order Year;

**Working Job Order**: the column shows the number of sales job order linked to the Production Job Order;

**Job Order Status**: the column shows the Production Job Order Status (Not Examined, Scheduled, Launched, Executive, Executed, Historicized);

**Working Estimated Start/End Date**: the column shows the the working estimated start/end dates of the Production Job Orders;

**Suggested Date**: if before the execution of the schedule procedure a certain block date into the parameters is set, the column is able to show the date that the general schedule suggests as an estimated end date of the Production Job Order;

**Class**: the column shows the class of items that are contained in the Production Job Order;

**Item Code**: the column shows the code of items that are contained in the Production Job Order;

**Variant**: the column shows the possible item variant;

**Quantity**: the column shows the item quantity to be produced;

**Customer**: the column shows account and detail account of customer linked to the Production Job Order Line;

**Job Order**: the column shows the possible sales job order linked to the Production Job Order line;

**Item Description**: the column shows the item description to be produced;

**Customer Description**: the column shows the customer company name linked to the Production Job Order line;

**Job Order Type Code**: the column shows the Production Job Order Type Code;

**Job Order Type Description**: the column shows the Production Job Order Type Description.






