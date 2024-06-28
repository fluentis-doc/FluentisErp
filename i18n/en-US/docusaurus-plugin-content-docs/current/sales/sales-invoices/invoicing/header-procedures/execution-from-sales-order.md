---
title: Execution from Sales Order
sidebar_position: 1
---

The procedure gives the possibility to execute an invoice from a sales order.

Conditions: the customers of order and invoice have to be the same; the order has to set the Printed flag and order confirmation date; documents types have to be compatible: on Orders Types table, the order type has to have the same invoice type.

This procedure uses all data of order and, as consequently it will be possible to apply the order conditions, even if these are currently changed (e.g.: updated price lists). In mask all printed, confirmed and not/partially executed orders are proposed for the selected customer. At this moment the user can: select the order totally (by setting flag at the beginning of the order line); import the order on invoice thanks to the button or select only a part of order items, possibly, with different quantities. For this reason and thanks to a double click on the order line, the user can select the whole quantity of the related line (by setting flag at the beginning of the line) or can change the 'quantity' field in order to partially execute the order. At the end, the user has to click on 'Transfer Items' button.

RIBBON BAR: it represents the Form menu that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Search Orders  | It enables the user to search sales orders. |
| Transfer Items | It enables the user to transfer the selected items. |
| View Order Status | It enables the user to view the order status. |
| View Order | It enables the user to view the sales order. |
| Legend | Legend |
| Forced Execution of Order | It allows the forced execution of order. |
| Order Execution | It enables the user to execute order. |
| Select Items | It enables the user to select all items. |
| Find Object in List | It enables the user to select the items of list. |
| Up | It enables the user to go up list. |
| Down | It enables the user to go down list. |
| Block Orders for Execution | It enables the user to block orders for the execution. |
| Unblock Orders to Be Executed | It enables the user unblock orders for the execution. |
| Delete Registry Settings | It enables the user to delete the registry settings. |
| View/Hide Selected Object Parent | It enables the user to view/hide the selected onject parent. |
| View/Hide Orders Panel | It enables the user to view/hide the orders panel. |






