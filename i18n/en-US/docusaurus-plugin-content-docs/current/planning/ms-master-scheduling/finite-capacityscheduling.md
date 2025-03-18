---
title: Finite Capacity Scheduling 
sidebar_position: 4
---

:::important Purpose
The Finite Capacity Scheduling function of Fluentis is an advanced tool designed to optimize the management of production resources within a manufacturing company. This module is integrated into the Fluentis ERP system and allows for planning and managing production activities considering the actual capacities of available resources, such as labor, machinery, and materials. Thanks to this functionality, companies can minimize downtime, improve operational efficiency, and respond with increased flexibility to variations in demand.

Finite capacity scheduling takes into account the physical limitations of resources, allowing for the creation of realistic and achievable production plans. Additionally, it offers analytical tools to foresee potential bottlenecks and allows for the optimization of task allocation, integrating with other ERP functionalities for a holistic view of business operations. This system helps companies effectively balance customer demand with production capacities, ultimately improving profitability and customer satisfaction.
:::

Finite capacity production scheduling enables understanding how much work can be expressed within a defined period, considering the limitations of certain resources. The ultimate goal is to ensure maximum efficiency of production rhythms throughout the internal supply chain of the plant, optimizing times and reducing costs of job orders.  
With this planning mode, it is possible to create optimal processing sequences on each individual job order, achieving their maximum saturation.

## Job Orders

The job orders tab only shows job orders that are in an unexamined state.

*Specific buttons*:

> **F.C.S. Scheduling**: allows the system to schedule the processing phases of the expected documents using finite capacity;  
> **Modify job order date**: this button allows you to change the job order date;  
> **Change priority**: through this functionality, you can change the priority of the selected job orders;    
> **MRP Parameters**: allows you to open the MRP parameters of the selected job orders;    
> **Bill of materials**: allows you to open the bills of materials of the selected job orders;    
> **Work cycle**: allows you to open the work cycles of the selected job orders.        

*Specific filters*:

**Type of job order**: through this combo, it is possible to select the type of job order to visualize, whether single-product job orders, multi-product job orders, or both;

**Production site**: you can view job orders based on the production site where they are to be produced, selecting it through the appropriate combo;

*Specific fields in the Results grid*

**Suggested date**: as explained in the article related to the general scheduling parameters, activating a particular flag called [Check late documents with ATP](/docs/planning/ms-master-scheduling/general-schedule), the scheduler will perform reasoning where if even one of the orders scheduled and generated is late compared to the expected date, the system will cancel all created orders and restart from the date defined in the MS parameters, which is activated only by setting the flag check late documents with ATP, and it will propose a new date for the job orders right in the *Suggested date* field present in the results grid.

### F.C.S. Scheduling Procedure    

From the **job orders** tab, it is possible to select the unscheduled job orders you wish to consider. 
By pressing the **F.C.S. Scheduling** button, the procedure will perform a first infinite capacity scheduling of the newly selected unscheduled job orders, using the parameters present in the **General Parameters** tab, and then perform finite capacity scheduling on all documents indicated in the **Finite Capacity Scheduling Parameters**.

As in the case of general planning, the scheduled orders can be viewed in the form [Search for scheduled orders](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

To view all the scheduling performed and the related errors/warnings created for each job order, just go to the **History** tab.    

## General Scheduling Parameters

All parameters related to the phase of General Scheduling can be consulted directly in the article related to [General Scheduling](/docs/planning/ms-master-scheduling/general-schedule) in the **General Scheduling Parameters** section.        

## Finite Capacity Scheduling Parameters   

:::note Note
Before proceeding with F.C.S. scheduling, it is important to set the parameters to follow for executing finite capacity scheduling within this tab.
::: 

**Scheduling as soon as possible or as late as possible**: these flags are disabled and only the *As soon as possible* flag is always active, as finite capacity scheduling seeks to saturate the job orders as soon as possible;        

**From date**: allows you to define the date from which to start finite capacity scheduling; by default, today's date is proposed, but it can be increased by a number of days equal to the value that can be entered from the [MS Parameters](/docs/configurations/parameters/production/mps-parameters) in the *Days until next scheduling* field;

**Operation on planned orders Recalculate time**: the flag is always active and allows for time recalculation in planned orders;    

**Recalculate production orders**: allows you to select which production orders, among *Launched* and/or *Executive*, should be taken into consideration by F.C.S. scheduling;    

**Recalculate phases**: allows you to select which production phases, *Not started* and/or *Already started*, should be considered by F.C.S. scheduling;    

**Phases recalculation mode already started on:**: allows you to choose the mode in which the F.C.S. scheduling procedure should recalculate the remaining part to be executed of the already started phases. It involves defining whether to give priority to the worked time by flagging *Worked time first and then Quantity already produced*, or to give priority to the quantity produced with the flag *Quantity already produced and then Worked time*;     

**Block mandatory orders:**: allows selecting the types of orders among *Planned*, *Launched*, and *Executive*, which, if they have the *Mandatory* flag enabled, will not be modified by the F.C.S. scheduling procedure;    

**Start jobs on material availability**: if active, F.C.S. scheduling will also check material availability up until the date indicated in the **Check availability until** field; beyond that date, scheduling will continue without considering material availability. By activating the flag **Check availability only on Critical Materials**, the procedure will check availability only for materials that have the *Critical* flag active in the bill of materials;   

**Consider Material Availability**: will allow selecting the way to consider material availability between *General* (regardless of the production job order that commits it) and *By Production job order*; currently, only the *General* rule is provided. It should be noted that for materials related to a certain phase, availability will be verified at the beginning of that phase, while for all materials not linked to a phase, availability will be verified at the beginning of the first phase of the cycle. 

In the lower part of the form, it is possible to indicate with what criteria, in the case of equal documents, the finite capacity scheduling should operate.

:::note Note
In accordance with the previously activated or not flags, the F.C.S. scheduling will schedule the various documents in the following order: Already started phases, Not yet started phases, Production orders in executive state, and then launched, and finally Planned orders. 
::: 

From the **Scheduling priority choices** table, it is possible to drag and drop individual entries within the **Scheduling Priority** table, where in the latter it is possible to change their priority. If the entries *Critical customers* or *Critical job orders* are selected, the **Scheduling Priority Details** table will also be enabled, where it will be possible to insert respectively the customers or job orders, also being able to change the priority in this case.   

:::note Attention
The priority for *Phase sequence* and *Critical job orders* is not used in the standard and has been inserted for scheduling only with custom procedures.
::: 

If no scheduling priority is entered, the ordering will be performed as follows:
*Level descending > StartDate ascending > EndDate ascending > Id ascending*

*Specific buttons*:

> **Restore priority**: allows restoring the default priorities within the *Scheduling Priority* table.    

## Monitor

In this tab, by activating or deactivating the existing flags, the user has the opportunity to choose the display of scheduling results in the **History** tab.

You can decide whether to display the **Calendars** considered (the Factory Calendar and the Production Capacity calendar); you can decide that it be reported if there were **Items without** *MRP parameters*, without *Bill of materials*, without *Work cycle*, without a *Preferred supplier* (in the case of purchase orders), without a *Preferred subcontractor* (for job orders), and without indicating the minimum stock for all those items managed in stock. For each **Production job order**, you can choose to display in the history the *Number of scheduled rows* and the details of these rows, the job orders that are late and overdue job orders.

Regarding **Planned Orders**, you can choose whether to display in the history the *Number of generated orders* and their *Detail*, late *Orders* and *Expired* orders, *Alternative materials*; you can also choose to be notified if there are **Planned orders without** *Material*, without *Processing phases*, without a *Supplier* (for purchase), and without a *Subcontractor* (for job orders).

**Legend**: active flags allow receiving alerts and details regarding the selected items.

## History

In the grid of this tab, all summary information regarding the scheduling of the job order is displayed.

**Scheduled prog.**: displays a simple incremental number of the scheduling operation launched by the user;

**User**: displays the user who launched the scheduling;

**No. errors**: displays the number of errors recorded during the scheduling procedure;

**Start date**: displays the date and time the scheduling process started;

**End date**: displays the date and time the scheduling process ended;

**Scheduled data originating from**: displays the precise origin of the scheduled data;

**Forecast**: displays whether the data comes from Sales Forecasts or from the Master Production Plan;

**Period**: displays the type of forecast, weekly or monthly;

**Day**: displays the designated weekday as the day when the scheduled production job order end date must fall as defined by MPS Definition.

All other columns in the grid display the settings used in the **Parameters** tab of the Scheduling related to the selected row.

**Scheduling result**

Based on the selected row in the grid, this section will display any errors and/or warnings with the details requested by the user in the **Monitor** tab.

For details on the common functionality of the forms, please refer to the link [Custom features, buttons, and fields](/docs/guide/common).