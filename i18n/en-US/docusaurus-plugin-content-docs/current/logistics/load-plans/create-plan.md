---
title: Create Load Plan 
sidebar_position: 2
---

The **Load Plan** is a document created between the sales order and the picking.

## Sales Order Search 

The starting point for creating a load plan is the search and selection of sales orders to be included in the plan. From the filter section, it is possible to perform an advanced search on the orders you want to fulfill among those *Not executed* or *Partially executed*.      
By default, the delivery dates shown as From delivery date and To delivery date are the start and end dates of the current week, but they can also be set differently. 
In the [Load Plan Parameters](/docs/configurations/parameters/logistics/load-plan-parameters), it is possible to change the proposed delivery dates for the search, choose whether to also display item lines present in open load plans, and set different colors for lines, depending on whether there is the necessary availability to fulfill the order or not.

The flag **View orders with delivery date on excluded day** allows you to display in the grid also the orders that have a blocked date (e.g. holiday) on the calendar.         
**View orders with correct delivery day** allows you to display orders with a valid date.           
You can open the Orders with a double click.

Below are some of the data present in the results grid:         
**Type**: contains the [type](/docs/configurations/tables/sales/sales-order-types) of the sales order, followed by order data such as **Number**, **Date**, **ITEM**, etc.;         
**Notes**: the notes of the order lines and the notes of the load plan can be consulted;       
**Quantity**: reports the total quantity of the item line in the order;        
**Residual quantity**: reports the remaining quantity of the order not yet fulfilled;          
**Order present in another load plan**: this flag indicates that the order is already present in another plan;         
**Order present in another open load plan**: this flag indicates that the order is already present in another open plan; these two flags are useful if the user does not set different colors for the lines (in the [parameters](/docs/configurations/parameters/logistics/load-plan-parameters));          
**Availability**: this field is visible only if the related availability flags present in the [Load Plan Parameters](/docs/configurations/parameters/logistics/load-plan-parameters) are activated. The availability is that of the warehouse of the order line at the expected delivery date (if in the future), while if the delivery date is in the past, the availability is calculated as of today. Additionally, if the item line is already included in another loading plan for which no other documents (picking, delivery notes, or invoices) have been created, it is excluded from the availability present in the item line itself. Therefore, the availability present in the load plans may differ from that present in **Availability Analysis**.      
**Stock**: this field is visible only if the related availability flags present in the [Load Plan Parameters](/docs/configurations/parameters/logistics/load-plan-parameters) are activated. The stock is that of the warehouse of the order line at the expected delivery date (if in the future), while if the delivery date is in the past, the stock is calculated as of today.
**ITEM**: in this column, you can enter the quantity of the item you want to fulfill; this quantity can differ from the remaining quantity. The value *Items* is calculated for items not managed by UDC, while the *Number of loading units* is calculated for those managed by UDC; if the value *Items* is equal to zero, it means that the order lines are without availability for the loading plan.         

After selecting the order lines to process in the load plan, various operations can be performed with the buttons on the ribbon bar. Remember that if the parameters do not require mandatory availability, then lines without availability may be fulfilled.           

**Specific Buttons**       
> **Insert Order**: this button transfers the selected lines to the **Load Plan Preparation** tab; 
> **Shipment notes**: this button allows you to view the *Shipment notes* present in the *Delivery* tab of the *Customer contact*;               
> **Order property**: this button opens the **Execution status** of the selected order;       
> **Modify Load Plan Notes**: this button allows you to modify the **Load Plan Notes** entered in the *Items* tab of the sales order.        

## Load Plan Preparation 

In this tab, data for the preparation of the load plan is proposed. The data displayed by default are those set in the [Load Plan Types](/docs/configurations/tables/logistics/load-plan-type), while others can be entered manually.      

**Specific Buttons**         
> **Save**: allows saving of the load plan;     
> **Set carrier**: this button allows you to open the search screen for **Carriers** and select one to associate with the load plan; it will be listed in the Carrier column of the grid;      
> **Modify Carrier note**: this button allows you to modify the notes of the carrier and reflects the notes in the column of the grid *Carrier note*;       
> **Modify carrier number**: if the same carrier arrives, for example, with multiple vans, I could divide the shipment;       
> **Release plan**: this button makes the plan available for the creation of other documents (for example, picking);    
> **Move to another load plan**: this button moves the line to an already existing load plan, chosen from the search screen;      
> **Create picking**: this button allows you to create the *Picking* from the load plan; in the screen, it is necessary to enter the **Picking type**, the **User** and it is possible to choose whether to create a different picking for each order or not. The picking created will be available in the Picking Search.         
In the case where the items present in the Loading Plan are managed in batches, the batches in the created picking are proposed as follows:      
- If present, those in the customer order are always proposed, regardless of the flags **Batches / Serial Number mandatory** and **Propose batches / Serial Number** present in the [Picking Parameters](/docs/configurations/parameters/logistics/picking-parameters/);       
- if not present in the customer order and the flags **Batches / Serial Number mandatory** and **Propose batches / Serial Number** present in the [Picking Parameters](/docs/configurations/parameters/logistics/picking-parameters/) are active, they are proposed according to the **Picking Type** (FIFO or Expiration Date) present in the Batches and Serial Number tab of the item registry (if the **Picking Type** is Manual, the picking will be created without batches and Serial Number even if the mandatory flag is active); if the flag **Batches / Serial Number mandatory** is active, while the flag **Propose batches / Serial Number** is not active, then it will not be possible to create the picking because the batches and Serial Number would not be proposed since the proposal is not active. Instead, with the flag **Batches / Serial Number mandatory** not active and the flag **Propose batches / Serial Number** active, the picking will be created with the proposed batches according to the **Picking Type** (FIFO or Expiration Date) present in the Batches and Serial Number tab of the item registry; if the **Picking Type** is *Manual*, it will be created without them. If both flags **Batches / Serial Number mandatory** and **Propose batches / Serial Number** are not active, the picking will be created without batches and Serial Number.

## Legend 

In this tab, the positions and compartments for rows of the load plan are displayed; these are configured in the *Motorvehicle* registry.

## Load Plan Summary 

In this tab, the summary of the data related to the *Load Plan* is displayed.