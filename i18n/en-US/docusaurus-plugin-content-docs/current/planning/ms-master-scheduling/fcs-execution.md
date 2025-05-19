---
title: F.C.S. Executions 
sidebar_position: 6
---

## F.C.S. Executions (Main Grid)**

The form consists of a main grid where pressing the **Search** button retrieves the list of saved simulations. By selecting one of these, the relevant data is loaded into the various tabs of the form.  
It is possible to delete a simulation by selecting it and pressing the **Delete** button.

All data related to the selected simulation is available in the following tabs:

### Parameters 

This tab shows the parameters that have been used for the selected simulation.

### Import Errors 

This tab lists the warnings generated at the time of importing the simulation. Errors are not listed because in that case the simulation would not have been possible.

### Execution Errors 

This tab reports any errors detected during the simulation.

### Purchase Orders 

This tab lists the planned and confirmed purchase order lines that are unfulfilled, along with the scheduled end date. This is understood as the simulated delivery date projected by the scheduler. In the case of confirmed orders, the scheduled end date coincides with the planned date, possibly postponed according to the value of the scheduling parameter **Item availability after supplier delivery (days)**.  
If this date were earlier than the simulation start date, it would be matched to it. If the order is planned, and the start date is earlier than the simulation start date, this would be matched to it, and as a consequence, the end date would be pushed forward, with the scheduled end date calculated as the sum of the end date and the **Item availability after supplier delivery (days)** parameter.

### Subcontractor Orders

This tab lists planned and confirmed outsourcer order lines that are unfulfilled. The scheduled start date is when the withdrawal of goods to be delivered to the outsourcer was simulated. All these goods must be available in the warehouse to be shipped and start the order; partial withdrawals of goods are not simulated if they are not fully available, as is simulated for production orders.  
The scheduled end date is given by the start date plus the lead time of the order, and the scheduling parameter "Item availability after return from subcontractor (days)".  
For the return of processed goods, partial deliveries are also not simulated, as is the case for production orders. In summary, for subcontractor orders, the values for the batch withdrawals and deposits of items in the MRP parameters are considered null; that is, subcontractor orders are managed in batches and not in flow.

### Production Orders 

This tab contains both planned and confirmed production orders that are unfulfilled. The scheduled start and end dates are determined by the result of the scheduling.

### Operations 

This tab contains the phases related to the production orders displayed in the relevant tab. The scheduled start and end dates are determined by the result of the scheduling.  
On the right side, there are other tabs that show alternative machines, necessary resources, and setup attributes.

### Dependent Demand

This tab shows the material requirements for all production and subcontractor orders.

### Sales Orders 

This tab shows the unfulfilled sales order lines. The scheduled end date is when the scheduler has simulated the delivery. This is never earlier than the order's delivery date and may be later than this if it cannot be executed on the planned date due to unavailability of stock.

### DDMRP Internal Orders 

In a DDMRP environment, this tab shows the internal order lines for goods to be delivered to the nodes of the supply chain managed by DDMRP. Each of these orders works like a sales order, where the customer is a node of the supply chain.

### Tasks 

This tab contains the core result of the scheduling. The tasks are the individual activities (indivisible and non-aggregable) performed in the factory.  
Most of them have a one-to-one correspondence with the lines in the operations tab. Some of them are the result of aggregating multiple operations (machines that have an aggregation rule), according to a one-to-many relationship between tasks and operations.  
In some cases, the opposite is true, where one operation may correspond to multiple tasks (only for machines that have an aggregation rule), since the quantity to be produced for the operation exceeds the capacity limits of the machine, and thus the processing of the operation requires more machine work sessions. In cases where a task cannot be scheduled, the "warnings" column provides a message that reports one (often the only) cause of the scheduling failure, to help understand how to act to remove the cause of the problem.

### Stock Records

This tab reports all simulation records of deposits (positive quantity) and withdrawals of goods (negative quantity) from the warehouses, indicating the order to which it refers. They are thus related to all types of orders imported by the scheduler.  
Only some records do not refer to any order; in fact, for each item and each warehouse, there is a record that corresponds to the stock value at the time of data import of the simulation. This record does not report the stock value at the start date of the simulation because it would only make sense if it were also possible to import confirmed and planned orders on any day in the past, which would require saving a gigantic amount of data that would generally be of little utility.

### Worker Activities 

This tab lists the activities performed by workers during the simulation, related to the tasks present in the relevant tab. For each activity, it indicates whether it relates to machine setup or processing.

### Resource Activities 

This tab lists the uses of generic production resources managed at finite capacity concerning the tasks present in the relevant tab.

For anything not detailed in this document about the common functioning of the forms, refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).