---
title: DDMRP Internal Orders
sidebar_position: 4
---

DDMRP internal orders are orders issued by a facility (any facility excluding the factory) to another facility (including the factory) that will supply the requested goods.

The requesting facility will act as the customer towards the supplying facility, which will act as the supplier.

These orders therefore have a dual nature as procurement orders in the facility that must receive the goods and as orders that generate demand in the facility that must ship the goods.

The order header contains the destination warehouse, which corresponds to the facility that must receive the goods and therefore requests them, and the source warehouse that corresponds to the facility that must supply the goods.

The planning system generates planned internal orders as a result of the calculation of the Net Flow Position (NFP), which are already complete with all the necessary data and can be transformed into actual orders through the relevant procedure (possibly making modifications).

Planned DDMRP internal orders do not generate demand in the supplying facilities; only confirmed orders generate demand.

This choice ensures that DDMRP order proposals do not generate demand in the supplying facilities as long as they are not analyzed and transformed into actual orders by the respective managers according to a multi-level planning process.

For this reason, the factory is the logistical unit that should be planned last, after planning and confirming the orders of the distribution and sales logistics units.

Of course, internal DDMRP orders can be created manually without restrictions.

The order date is considered as the demand date (equivalent to the start date of a production order), which is the same for each item in the order, while the delivery date is specified for each item in the order as it may vary.

In fact, if the destination facility is supplied by a facility that is not the factory, the delivery time of the items at the destination is the same for all and equal to the lead time specified in the Facilities table for the destination facility (unless exceptions outlined in the DDMRP parameters table for some items).

If the supplying facility is the factory, the DLT of each item at the destination facility usually varies because it is due to the sum of the transport time from the factory (the same for all buffer items in the destination unit) and the DLT of the item in the factory, which is equal to the time needed for its production if the item is not a buffer in the latter.

For each item in the order, the ordered, shipped, and received quantities are displayed.

When the shipping time is not negligible, the shipped quantity will be updated during transport, but the received quantity will only be updated upon receipt of the goods.

The reasons for deposit and withdrawal are specified in the Facilities table (logistical structure).