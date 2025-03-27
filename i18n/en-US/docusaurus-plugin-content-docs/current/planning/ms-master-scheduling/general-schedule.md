---
title: General Planning
sidebar_position: 2
---

:::important What is it for
General planning in Fluentis is a process that operates under the assumption of infinite capacity, which means that planning does not take into account physical limitations in work centers or available resources. This methodology allows for scheduling production operations with a certain degree of flexibility.

Planning can be carried out using two distinct logics: **as soon as possible** and **as late as possible**. The ***as soon as possible*** logic aims to initiate operations as soon as possible, while the **as late as possible** logic schedules operations as late as possible without compromising deadlines. These approaches enable optimized analysis of production needs and management of processing times based on business priorities and operational necessities.
:::

The form consists of four tabs: *Job Orders*, *General Parameters*, *Monitor*, and *History*.

## Job Orders 

The Job Orders tab consists of a filter area that allows filtering the Job Orders that will then be displayed in the results grid below.       
In addition to filters for item, year, and Job Order number, there is also a filter for Job Order Type: which allows viewing single-product, multi-product, or both Job Orders.

There is also a filter for *Production Site* so that only the Job Orders of a specific production site can be planned, and a series of flags: *Delayed*, *Expired*, *Launched*, and *Executive*, which allow you to choose whether to view also the Job Orders delayed with respect to the date, or expired, and only if in the **General Planning Parameters** the flag *planning of launched or executive Job Orders* has been activated, will the flags *Launched* and *Executive* be activated as well; otherwise, these two fields will always be inactive.          
If the flag *planning of launched or executive Job Orders* is not active, only Job Orders in the state of *not examined* or *scheduled* will be displayed in the grid.       
By selecting one or more Job Orders, based on the planning parameters set in the relevant tab, the general planning button will create the planned orders of the three types provided: production, purchase, and job orders, starting from the information present in the Job Orders and cross-referencing the data with the corresponding bill of materials and work cycles.

Once created, the planned orders can be viewed in the form [Search Planned Orders](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders), or this form can be opened via the **Open Search Planned Orders** button. 
In the event that a Job Order is selected in the results grid and then the **Open Search Planned Orders** button is pressed, the planned orders form will open filtering the results for that Job Order.

*Specific buttons*:

> **General Planning**: allows the system to schedule the selected Job Orders;  
> **Open Search Planned Orders**: this button allows opening the screen of [Search Planned Orders](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders); if a row of a Job Order is selected before pressing this button, the planned orders form will open already pre-filtered for that Job Order;               
> **Change Expected End Date with Suggested Date**: this button allows you to update the *expected end date* with the *suggested date* calculated by planning if it was launched with the **Check Late Documents with ATP** flag active;     
> **Sequence Job Orders**: through this functionality, you can access the Job Order sequence, within which you can view the Job Orders based on the sequence assigned, also through a graph.

*Specific filters*:

**Job Order Type**: through this combo, you can select the type of Job Order you want to view, whether single-product Job Orders, multi-product Job Orders, or both;

**Production Site**: you can view the Job Orders based on the production site in which they need to be produced by selecting it through the appropriate combo;

**Delayed/Expired/Launched/Executive**: these flags allow you to choose whether to see also the Job Orders delayed with respect to the date or expired, and only if in the [General Planning Parameters](/docs/planning/ms-master-scheduling/general-schedule) the flag *planning of launched or executive Job Orders* is set, otherwise the two fields are inactive; otherwise, as explained in the item on planning parameters, in the Job Orders tab, only those in the state of not examined or scheduled will be visible; but these will assume the state of launched and/or executive if this flag is not set and the Job Orders will not be viewable within this tab.

*Specific Fields in the Results Grid*

**Suggested Date**: as explained in the item related to the general planning parameters, by activating a particular flag called [Check with ATP the delayed documents](/docs/planning/ms-master-scheduling/general-schedule), the planning procedure will execute reasoning such that if even one of the orders being scheduled and generated is delayed compared to the expected date, the system will delete all created orders and will restart calculating them from the **Start MS Date** (which is always defined in parameters and activated only by setting the **Check with ATP the delayed documents** flag) using the *as soon as possible* logic and will propose the new date for the Job Orders right in the *Suggested Date* field present in the results grid.

### General Planning Procedure

Once the Job Orders that you want to schedule are selected, the **General Planning** button present in the ribbon bar of the form will be activated, and by clicking on that button, the system will proceed with the planning of the selected Job Orders.

To view all completed scheduling and the related production orders created for each Job Order, simply move to the **History** tab.

:::danger Note    
Manually created Job Orders are always produced regardless of the availability of the item to produce.    
:::   

## General Planning Parameters 

:::note Note
Before proceeding with planning, it is important to set the parameters within this tab to be followed for executing the planning.
::: 

**Plan Until**: indicate the date by which the system will need to consider the documents entered. This date is calculated by the system as today's date plus the value in months entered in the field **Maximum Number of Months for Planning** present in the [MS Parameters](/docs/configurations/parameters/production/mps-parameters);       

**Materials / Resources**: activating the **Materials** flag will report the materials to be consumed within the created planned orders. Meanwhile, activating the **Resources** flag will also report the processing phases within the created planned orders. If one or both flags are not active, planned orders will still be created but without the respective materials or processing phases;

**Planned Orders for**: through the 3 flags, it indicates whether you want the system to generate all three types of planned orders expected, thus production, purchase, and job orders; in this way, these types of orders will have a direct link with the Job Order; (for example, if the Purchase flag is not checked, but the Execution MRP flag is maintained, the system will still create purchase orders but these will be disconnected from the Job Order);

**Generate Only Planned Orders for Levels**: in this case, you specify the levels (1-2...) for which you want planned orders to be generated;

**Supplier Orders or Purchase Requests and Customer Orders**: in this case, if there are documents present in the system without commitment date and availability, you can tell the system to consider the date that you can indicate in the appropriate field, or tell the system not to consider them at all;

**Grouping of Planned Orders by**: in the case of working by Job Order, in this field, you set the option *No grouping*; otherwise, you can select through the appropriate combo the type of grouping you want to apply, but in this case, the link between planned orders and Job Order would be lost;

**Grouping As Late or As Soon**: in this case, you can choose to group orders as late as possible (thus based on the last) or as soon as possible (which is recommended) and in the next field called **For a Period in Days**, you will specify the number of days within which to perform the grouping;

**Consider the quantities according to economic lot/Consider the multiples of the economic lot**: by setting the first parameter, you indicate that during planning you want to take into account the economic lot of the item, and consequently, the flag that allows deciding whether to consider the multiples of the economic lot will be activated. 
For the examined item, the economic lot values and its multiples will be considered, if and only if the respective flags are active within the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the item. In the case of an item with production supply type, the economic lot and multiples values will be taken from the production tab of the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of that item, while if it's a purchase supply type item, they will be taken from the default supplier present in the [Preferential Vendors](/docs/erp-home/registers/items/create-new-item/item-registry/preferential-vendors) tab of its registry.

**Compact/Separate Orders**: in this case, you choose whether to keep or not a day of leeway between the end of production of the 1st level order and that of the next level;

**Execute MRP After Planning and Stock Item**: it indicates that after an initial planning, the system should analyze all item codes of the Bill of Materials of the item with a management policy different from that of the Job Order, in order to verify coverage and possibly generate planned orders but without a link to the Job Order. Activating Stock items will make the MRP procedure also consider all items with stock management policy in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters); 

**Planning by Delivery Zone**: by setting this flag, the system will check when the order should be delivered based on its delivery zone and will schedule the order ahead of the delivery day;

**Check with ATP the delayed documents**: if you enable this flag, the next field called **Start MS Date** will be enabled simultaneously; at this point, the planning procedure will execute reasoning such that if even one of the orders being planned and generated is delayed compared to the expected date, the system will delete all created orders and will restart calculating them from the **Start MS Date** using the *as soon as possible* logic and will propose the new date for the Job Orders right in the *Suggested Date* field present in the results grid. At this point, using the dedicated button **Change estimated end date with suggested date** (present in the Job Orders tab of the *General Planning*), it is possible to replace the expected end date with the newly calculated suggested date and then relaunch the planning to have all planned orders correctly;

**Automatic release of planned orders:**: if you decide to enable this parameter, the planning, in addition to generating the orders as planned, will also release them automatically, thus the planned production orders will become production orders, the planned purchase orders will become RDA (purchase requests), and the planned job orders will become job orders;

**Planning as Soon or as Late**: the user can decide which logic should be used for general planning between: as soon as possible and as late as possible. The as soon as possible logic aims to start operations as early as possible, starting from today's date; while the as late as possible logic schedules operations as late as possible without compromising deadlines, thus starting from the delivery date and going back in time. 

**Planning of Launched or Executive Job Orders**: allows enabling the flags: launched and executive present in the *Job Orders* tab; at this point, activating them will make it possible to view and select also the Job Orders in launched or executive status for re-planning. It is important to note that for Job Orders in launched or executive status, only those planned orders that have not yet been released will be re-planned;

**Version**: the procedure will plan the Job Orders in the version set in this field, if no version is entered in the production Job Order. The version entered in the production Job Order will have a higher priority than the version entered in the parameters of the *General Planning*. This is a field that must be filled out, otherwise planning will not be possible;

**Consider Availability**: if this flag is active, it indicates to the procedure that in the planning process it will need to take into account the availability coming from the warehouses indicated in the grid below, which are those defined within the form [Availability Calculation](/docs/erp-home/registers/items/calculate-availability/); 

**Consider Availability at the Required Date or the Minimum in the Period**: these flags are activated only if the flag **Consider Availability** is active; The **requirement date** means that the procedure needs to consider availability at the moment of producing the order, while, in the case of the **minimum on period** date, the procedure will take into account the minimum availability in the period until the date set in the parameter *Plan Until*.

**Consider batches with 'not available' state**: this flag also activates only if the flag **Consider Availability** is active; if enabled, the procedure will take into account lots in an unavailable state;      

**Consider availability also for first level**: this flag also activates only if the flag **Consider Availability** is active; if enabled, the procedure needs to consider availability also for the first level (thus for the item present in the production Job Order);

**Consider also the negative availability**: if active, the procedure must also consider negative availabilities at the time of planning for the first-level item; in fact, this flag can only be enabled if the flag **Consider availability also for first level** is active;     

**Consider Availability Coming From**: these flags can only be activated if the flag **Consider Availability** is activated and allow indicating whether you want the procedure to consider availabilities coming from purchases, sales, warehouse, job orders, and production;

**Replenishment of Minimum Stock of the Item and Replenishment of the Reorder Point of the Item**: the first flag activates only if the second is set. These two flags indicate that the procedure will need to foresee the replenishment of the reorder point established for that item and if you also want the replenishment of the minimum stock of the item; both of these data are entered in the [Procurement](/docs/erp-home/registers/items/create-new-item) tab of the registry;

**Consider Coverage Index**: if the flag is active, the procedure must account for the coverage index established in the *Procurement* tab of the item;

**Consider Alternatives for Materials**: if active, at the time of Job Order planning, the procedure will also need to consider alternatives of materials present in the *Alternatives* tab of the [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management), in case there is insufficient availability for the main material indicated in the bill;            

**Consider Only Alternative Materials**: activates only when the flag **Consider also the alternatives of the materials** is active; if this flag is enabled, it first checks the availability of alternative components based on their priority, if insufficient, it then checks that of the main component; it is enabled only if the flag **Consider Availability** is active;    

:::note Note
Alternative materials are entered in the **Alternatives** tab related to the main material present in the [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**Consider Alternative Phases**: if active, this flag indicates that at the time of planning, alternative work phases will also need to be considered; activating this flag will activate the subsequent editable field called **Tolerance for the occupation of w. center: %**, in which you can specify the tolerance of center occupancy in %, beyond which the procedure will need to consider alternative phases to the default phase.

## Monitor

In this tab, by activating or not the flags present, the user can choose how to display the results of the planning in the **History** tab.

You can decide whether to display the **Calendars** considered (the *Factory* Calendar and the *Production Capacity* calendar); you can decide to be notified if there were **Items without** *MRP Parameters*, without *Bill of Materials* or *Work Cycles*, without *Preferred Supplier* (in the case of purchase orders), without *Preferential subcontractor* (for job orders), and without the indication of minimum stock for all those items managed as stock. For each **Production Job Order**, you can choose to view in the history the *Number of Scheduled Rows* and the detail of these rows, the delayed Job Orders, and the expired Job Orders.

Regarding the **Planned Orders**, you can choose whether to display in the history the *Number of Generated Orders* and their *Detail*, the orders *Delayed* and *Expired*, the *Alternative materials*; you can also choose to be alerted if there are any **Planned Orders without** *Material*, *Work Phases*, *Supplier* (for purchase) and *Contractor* (for job orders).

**Legend**: active flags allow you to receive alerts and details regarding selected items.

## History 

In the grid of this tab, all summary information related to Job Order planning is displayed.

**Sched. Prog.**: displays a simple progressive number of the planning operation initiated by the user;

**User**: displays the user who initiated the planning;

**No. Errors**: displays the number of errors recorded during the planning procedure;

**Start Date**: displays the date and time of the start of the planning process;

**End Date**: displays the date and time of the end of the planning process;

**Scheduled Data Coming From**: displays the exact origin of the scheduled data;

**Forecast**: displays whether the data comes from Sales Forecasts or the Master Production Plan;

**Period**: displays the type of forecast, weekly or monthly;

**Day**: displays the designated weekday as the day when the end date of the scheduled production Job Order should fall directly from MPS Definition.

All other columns of the grid display the settings used in the **Parameters** tab of the *General Planning* related to the selected row.

**Planning Result**

Based on the selected row in the grid, this section will display the details requested by the user in the **Monitor** tab.

In the planning results, you can see the number of the just-planned Job Order, the number of planned orders generated from that Job Order, and the detail of the generated planned orders.

For details on the common functionality of forms, refer to the link [Custom Features, Buttons, and Fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).