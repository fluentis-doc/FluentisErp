---
title: View Orders
sidebar_position: 4
---

The “View Orders” window is made up of 2 same tabs, each one consists of 2 grids. The lower grid depends on what is selected in the upper grid.

In the first tab, called “Gantt Orders”, user can view, within the upper grid, a line for each production order phase, that regards the work center histogram from which user has exploded this window.

The columns displayed in the results grid are the following:

1) Order Type: the column shows the document type, which can be “Executive”, “Launched” and in terms of planned order, “Planned”;

2) Production Job Orders: the column shows year and number of the production job order, from which the order was created. The column is empty in the event that the planned order was created manually or came from MRP elaboration;

3) Job Order Type Code: the column shows the Production Job Order Type Code;

4) Job Order Type Description: the column shows the Production Job Order Type Description;

5) Order: the column shows the number of the Production or Planned Order;

6) Order Type Code: the column shows the Planned Order Type Code;

7) Order Type Description: the column shows the Planned Order Type Description;

8) Order Start Date: the column shows the estimated start date of the Planned or Production Order. This date represents the estimated start date of the first working phase of the item route;

9) Order End Date: the column shows the estimated end date of the Production or Planned Order. This date represents the estimated end date of the last working phase of the item route;

10) Exec. Order: the column shows the “0” value in case that the order has not yet been indicated, on the contrary the column shows the “1” value in case that it has already had some production signals

11) Class: the column shows the Order item class;

12) Item Code: the column shows the Order item code;

13) Item Description: the column shows the Planned Order item description;

14) Variant: the column shows the possible item variant;

15) Variant Description: the column shows the possible item variant description;

16) Code / Description of Delivery Zone: the columns show the possible code and description of delivery zone;

17) Production Phase: the column shows the phase and subphase codes of production phase

18) Phase Description: the column shows the production phase description;

19) Work Center Time: the column shows the total time used by the starting work center in order to perform a certain phase

20) %: the column shows the time percentage about the available productive capacity regarding that day;

21) Item, Description, Variant, First Level Variant Description: the columns show the information about the first level unfinished product within the BOM;

22) Quantity: the column shows the item Planned Order quantity;

23) Confirmed Quantity: the column shows the confirmed quantity of the item Planned Order, which is different from zero only in case that the planned order comes from the MRP elaboration;

24) Customer: the column shows the customer account and detail account, connected to the Planned Order;

25) Vendor: the column shows the vendor account and detail account, connected to the purchase or subcontracted Planned Order.

The grid below shows the customer orders lines, from which the production job orders were created. Their scheduling  has created also the planned or production orders, that user can view in the upper grid. The viewed information concerns customer order Insertion Type, Year, Number and Date, the Customer in Customer Order, Class, Code, Description, Variant and Variant Description of item within the customer order line, as well as the customer estimated delivery date.

In the second tab user can view the “Orders not in Gantt” with the same structure as that of the “Orders in Gantt” tab.

There is also a small ribbon bar, which enables the user to substitute the work center regarding the selected document and to change its date in the upper grid.

Hereinafter the list of actions that can be performed through the RIBBON BAR:



| Function | Meaning |
| --- | --- |
| Simulation Import | It refers to the procedure regarding the changes confirmation executed by user on documents that can be viewed in graphic. |
| Save Simulation | It refers to the procedure to save the simulation, executed by user, in a file, but without the changes imposition on graphic documents. |
| Load Simulation | This procedure loads an already saved simulation on graphic. |
| Zoom Out | It enables the user to increase the time detail in graphic. |
| Zoom In | It enables the user to decrease the time detail in graphic. |
| M.R.P. | This procedure launches the MRP elaboration on database. |
| Overloaded Work Centers | It opens a pop-up window on which there is a grid where user can view the work centers interested in graphic documents, with the red evidence of the days in which the same work centers are mainly used compared to their daily production capacity. |
| Rollback Simulation | This procedure performs the rollback of the simulation on which user is working at the moment. |






