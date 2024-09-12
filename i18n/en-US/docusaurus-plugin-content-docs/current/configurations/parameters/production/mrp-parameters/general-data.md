---
title: General Data Tab
sidebar_position: 2
---

If necessary, the item whose bill of materials have to be taken as reference for a possible production job order scheduling for the item/variant (on whose MRP parameters the user is working), is set in the “Reference BOM” section.

The “Politics of management” combo enables the user to manage the item according to:


 1. Forecast: in this case the item is managed through sales forecasts or through the insertion of a Production Main Plan. These two kinds of documents are then sifted through the “MPS Definition” procedure.
 2. “Stockpile”: in this case the item is managed according to the reorder points and  minimum stock data inserted into the Procurement tab of the item register. Even in this case the production job order of the item is obtained through the “MPS Definition” procedure.
 3. Job Order: in this case the item is managed through the “MPS Definition”, “Sales Orders” tab
 4. Requirements: in this case the item is considered in the analysis mask of the MRP belonging to the General Schedule and can be taken into account in case of using “MRP” procedure instead of “MPS definition” procedure.  Even the item managed according to the Requirements can be considered by the “MPS Definition” procedure but in this case, through a dedicated parameter of the “MPS Parameters”, it is possible to automatically generate a job order as soon as the sales order line is inserted thus avoiding the “MPS Definition” procedure.

The “Procurement Type” combo enables the user to decide  the item type:


 1. Purchase: in this case the explosion of the requirements creates a purchase planned order as regards the item involved.
 2. Production: in this case the explosion of the requirements creates a production planned order as regards the item involved.
 3. Subcontractor: in this case the explosion of the requirements creates a subcontracting planned order as regards the item involved.

The “Pickup Type” combo enables the user to choose the item picking type among the following ones:


 1. Manual: with this setting, the item is picked only during the production signal of the BOM level immediately above. The picking is contextual to the signal of the production phase to which the material has been linked, or, in case that there is not a linked phase, it is contextual to the signal of the last inner phase of production.
 2. Automatic: with this setting the item is picked during the production order release and the order status changes from Launched into Executive.
 3. With list: through this setting the item is picked by the generation of a Picking List that uses the homonym procedure of the Production Area.

The “Priority” combo enables the user to choose the type of priority the item should be assigned with. It is a datum taken from the “Procurement Priority”  table that is in Home > Tables > Production

The flag “Prod. Job Order”, if active, indicates that the sales order lines that show this item has to be visualized in the Sales Orders  MPS Definition filter.

 “% scrap” box enables the user to set a fixed scrap percentage for the item. When the item is taken into a BOM, this percentage is always set according to this datum.

 “Route Number” box indicates the default cycle for the item.

The “Consider on subcon.”, if active, enables the item to be considered in the automatic filling of the “Materials to be delivered” tab and the “Materials to be used” tab of the Subcontracting Order.

The “Production Parameters” section is active if the item management policy is “Production”. In this section it is possible to set the following fields:


 1. Lead Time: in this field the user, that does not use the production cycles, can set a production lead time for the item involved, a time calculated with working days according to the factory calendar. This time does not change if the amount to be produced changes.
 2. Productive Capacity Unit: in this field the user can insert the unit of productive capacity; in this way the item lead time must be taken into account.
 3. Fixed Lead Time: in this field the user can consider a fixed lead time instead of a lead time calculated according to its working route, by inserting the value in working days and activating this modality by the means of a flag.
 1. Economic Lot: in this field the user can set the production economic lot of the item: it is taken into account by the “MPS Definition” and “General Schedule” procedures (Just in case that “Consider the availability for the first level” flag is active)
 2. Multiples: in this field the user can set the multiples of the production economic lot of the item. They are considered by the “MPS Definition” and “General Schedule” procedures (just in case that the “Consider the availability for the first level” flag is active)
 3. Period days: in this field the user determines the period on which the procedure groups the possible planned orders. For example, if the parameter value for an item is 5, the planned orders that have a date included in the 5 working days interval (according to factory calendar), are grouped together.
 4. Days of tole advance, Days of tole postpone: the MRP tolerates these days without suggesting the actual advance or postponement but taking advantage of the  possible excess without proposal. To make an example: a specified item has these values Days of tole. Advance=2 and Days of tole. Postpone= 5. This means that in case that the MRP needs to anticipate or postpone a document for that item, this document will not be delivered to the user as an advance/postponement request if it is within the above mentioned intervals of time ( 2 days in case of advance and 5 days in case of postponement)
 5. Tolerance in days/lead time percentage: it determines the time period during which it is possible to anticipate or to postpone (beyond this limit the MRP proposal is to eliminate the document) and the moment until when it is possible to communicate if an item goes beyond the time fixed by the intervals. It can be reported in days or in leadtime percentage. To make an example, if an item has 90 days of tolerance, documents related to that specific item can be anticipated or postponed within an interval of 90 days to the most; if there is the need to go beyond this time limit the MRP suggests to eliminate the document and to create a new one for the date of the need. Moreover, for the specified item, a possible time-availability can be available for 90 days to the most.



In the “Read list/Cycles” section,  the user has the chance to set the list and the route version that has to be taken into account by the MRP of the item.

In the “Consider the availabilities from” section, the user has the possibility to decide the management areas in which documents should be taken into consideration during the elaboration of the MRP procedure.   The possible areas are Purchase, Sales, Warehouse (and in this case through the activation of the special flag it is possible to decide if it is necessary to consider or not lots stocks with not available status), Subcontractor, Planning (Production Job Order, Purchase Planned Orders, Subcontractor and/or Production), Released Production (Production Orders).

On the left side of the window it is possible to set a series of data functional to the MRP procedure  elaboration.  The flags that can be used are the following:


 1. Consider quantities according to economic lot: if active, this flag considers the production or the purchase economic lot set for the item.
 2. Consider the multiples of economic lot: if active, the flag considers the production or the purchase economic lot multiple set for the item.
 3. Replenish item minimum stock: if active, it replenishes the minimum stock set in the “Procurement” tab, within item register.
 4. Replenish item Reorder Point: if active, it replenishes the Reorder Point set in the item register within the “Procurement” tab.
 5. Consider Cover Index: if active, it considers the cover index set in the item register within the “Procurement” tab
 6. Consider also the alternatives of the materials: if active the flag considers the alternatives set in the BOM, within the tab “Alternatives”
 7. Consider the alternative phases: if active, it considers the alternative phases set in the Working Route of the item, if it is an item of the Production. In the “Tolerance for the occupation of w. Center” box, the user can set a percentage that defines the margin of work amount overrun tolerated  on a working center. In the “Production Tolerance” box it is possible to set, always in percentage, the production surplus for the item, compared to the amount expected in the production order.
 8. “Lock for Production”: if active, in case that an item production job order is elaborated by the General Schedule the message “Unable to Schedule. Item XXXX is locked for the production” pops out. In this case the schedule is locked and the user has to re-launch it, excluding the job order related to this item.

Finally, by the means of the “Forecast Manage” combo, it is possible to view how the production job orders have to be generated by the MPS Definition in case of generation by Forecast. The chances are the following ones: the highest quantity between Sales Orders and Sales Forecasts; Always the Sales Forecast; the lowest quantity between Sales Orders and Sales Forecasts; Always Sales Orders; Sales Orders Sum and Sales Forecast.

In the “Purchase/Subcontractor Parameters” section, that results active if the item management policy is “Purchase” or “Subcontracting”, it is possible to view and edit the data inserted within “Preferential Vendors” tab, within item register.






