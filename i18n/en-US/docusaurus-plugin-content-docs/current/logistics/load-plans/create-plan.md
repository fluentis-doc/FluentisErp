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
**ITEM**: in this column, you can enter the quantity of the item you want to fulfill; this quantity can differ from the remaining quantity.          

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

## Legend 

In this tab, the positions and compartments for rows of the load plan are displayed; these are configured in the *Motorvehicle* registry.

## Load Plan Summary 

In this tab, the summary of the data related to the *Load Plan* is displayed.