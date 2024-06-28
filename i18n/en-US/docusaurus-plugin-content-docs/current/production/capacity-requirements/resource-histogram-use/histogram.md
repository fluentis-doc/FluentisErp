---
title: Histogram
sidebar_position: 3
---

In this tab, that consists of a result grid and of a graphic element, user can view a line for every phase of the production and/or planned orders, which are filtered according to search criteria set on the “Filter” tab.

The columns displayed in the result grid are the following:

1) Document: the column shows if the selected line refers to a Production Order or to a Planned Order;

2) Document Status: the column shows the document status in the event that it is a Production Order. The status can be “Launched”, “Executive”, “Executed”

3) Priority: the column shows the document priority;

4) Comp.: the column shows a flag (“Compulsory”), that, if active, enables the user to indicate that the planned order cannot be moved absolutely;

5) Year: the column shows the document year;

6) Order: the column shows the document number;

7) Order Type Code: the column shows the document code;

8) Order Type Description: the column shows the document description;

9) Job Order Year: the column shows the production job order year, from which the document was created. In case that the same document was created manually or it came from an MRP elaboration, the column is empty;

10) Job Order Number: the column shows the production job order number, from which the same document was created. In case that the same document was created manually or it came from an MRP elaboration, the column is empty;

11) Job Order Type Code: the column shows the Production Job Order Type Code;

12) Job Order Type Description: the column shows the Production Job Order Type Description;

13) Order Start Date: the column shows the document estimated start date; this date represents the estimated start date of the first working phase of the item route;

14) Order End Date: the column shows the document estimated end date; this date represents the estimated end date of the last working phase of the item route;

15) Ready Goods Date: the column shows the ready goods date of the sales order line, where the job order, whose scheduling or MRP elaboration have created the selected order, was created. Obviously the field is empty in the event that the job order, which has created the production or planned order, was created through a “Forecast” plan or manually;

16) Estimated Delivery Date: the column shows the estimated delivery date of the sales order line, where the job order, whose scheduling or MRP elaboration have created the selected order, was created. Obviously the field is empty in the event that the job order, which has created the production or planned order, was created through a “Forecast” plan or manually;

17) Phase, Subphase, Phase Description: these fields show the working phase data of the production or planned order within the selected line;

18) Work Center: this combo box, that shows the Work Center Code related to the selected phase, enables the user to modify also the WkC, giving the selected phase to another Work Center consequently;

19) Phase Start Date/ Phase End Date: these are the start and end date of the selected phase. They are calculated according to the working phase times, and more precisely according to the highest time between the worker and the machine total time for the selected phase;

20) UM Time: the column shows the unit of measure used for the selected phase and for times that are in the following columns. These may be Seconds, Minutes, Hours, Days;

21) Setup Time: the column shows the setup time set for the selected phase;

22) Maschine Time: the column shows the unit machine time set for the selected phase and quantity phase

23) Assigned Time: the column shows the unit worker time set for the selected phase and quantity phase

24) Class: the column shows the document item class;

25) Item Code: the column shows the document item code;

26) Variant: the column shows the possible document item variant;

27) Quantity: the column shows the quantity to produce for that selected order phase;

28) Quantity Produced: the column shows the quantity, already produced (and so reported), for that selected order phase;

29) Residual Quantity: the column shows the difference between the 2 above fields and consequently the quantity already to produce for that selected order phase;

30) Notes: the column shows the notes within the Notes tabe of the production or planned order for the selected phase;

31) Job Order: the column shows the possible sales job order linked to the document;

32) Customer: the column shows the customer account and detail account linked to the document

33) Customer Description: the column shows the company name of the customer linked to the document

34) Item Description: the column shows the document item description

35) Work Center Description: the column shows the Work Center description defined for the selected phase

Through the selection of a grid line, the section below shows the graphic, related to the work center used on the selected phase, highlighting the time used by that phase with a yellow colour. On the contrary the histogram related to the available productive capacity of the work center through the graphic is highlighted with a red colour. Then with blue colour the histogram, related to the time used in the planned orders is highlighted. Lastly with green colour the histogram, related to the time used in the production orders, is highlighted. On the axis of abscissae it is possible to view the factory calendar days (the working days are marked by red colour histogram), on the contrary on the axis of ordinates the available working minutes per day are defined and calculated according to the calendar of the single productive capacity. For example, in case that a work center has a daily capacity of 8 hours, in the graphic the red vertical bar will obtain a value up to 480 minutes shown on the axis of ordinates.

Through a double click on the grid line the user can enter in document (planned or production order) directly. Furthermore the document contains the phase from which user started, with the possibility to edit the document and, after a visualization refresh, to see the updated situation even graphically but always thanks to user rights presence.






