---
title: Safety Stock Execution
sidebar_position: 3
---

The safety stock procedure uses an algorithm that is based on the average daily consumption calculated by the Procurement tab of items register.

Minimum Stock - Reorder Point / Days for Reorder

During the elaboration the stock is considered and it is necessary to control if at the required date and through the average consumption it is possible to go safety stock.

The safety stock procedure consists as follows:

RIBBON BAR: the ribbon bar represents the Form menu, that is the area on which it is possible to perform actions. The possible features list is the following:



| Function | Meaning |
| --- | --- |
| Execute | Once having inserted filters it enables the user to perform the safety stock procedure. |
| Preview | It recalls the print preview procedure. |
| Print | It recalls the procedure for the safety stock report. |

FILTER AREA: The filter area contains the list of the possible data types thanks to which it is possible to perform a selection, a research on the total of sales order lines inserted in system. Typically Filters have 'AND' condition and it is possible to specify more filter criteria at the same time. In particular it is possible to choose item (class, item code, description), variant only for items managed per variant, the date up to which it is necessary to calculate the safety stock. In addition it is possible even to enable the automatic creation of the purchase demands for items safety stock. If this function is active it is necessary to specify the document demand type and to insert a note into header of purchase demand.

RESULT GRID OF EXECUTION: the result grid of execution represents the list of the performed elaborations specifying number and elaboration date. Thanks to a double click in correspondence to the desired line it is possible to open a result and an elaboration detail. The related information concerns the reference of the safety stock items (class, item code, description), variant and variant description, availability to the elaboration date, calculated reorder point, calculated average consumption, date that is responsible for items safety stock and the required quantity in order to fulfill the stock.






