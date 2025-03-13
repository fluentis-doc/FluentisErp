---
title: MRP Parameters
sidebar_position: 2
---

To modify the MRP Parameters:
1. Open the form located in the path **MRP Parameters**. 
2. Select the item and double-click on the row or use the **Edit parameters** button.

MRP parameters are automatically created by the system when saving a new item entered in the registry, with default values that can be modified manually by the operator individually or en masse via the **Parameters substitution** button present in the filter form.

## 1. General Data 

The parameters that can be defined within this tab are as follows:

**Management Policy**: this combo box allows the user to choose whether to manage the item as follows:  
> **Forecast**: in this case, the item will be managed through the generation of sales forecasts or by entering a master production plan. This management policy is considered in both [Production Order Generation](/docs/planning/mps-master-production-scheduling/job-order-creation) and [MRP](/docs/planning/ms-master-scheduling/mrp).  
> **Stockpile**: in this case, the item will be managed based on the reorder point and minimum stock information entered in the [Procurement](/docs/erp-home/registers/items/create-new-items/item-registry/procurement) tab of the item registry. This is because these are items for which demand arrives too late compared to the need for procurement or production, creating the need to manage them as stock. This allows for procurement before the actual demand arrives. Similarly, the production order generation for the item will be obtained using both the [Production Job Order Generation](/docs/planning/mps-master-production-scheduling/job-order-creation) procedure and the [MRP](/docs/planning/ms-master-scheduling/mrp).
> **Job order**: used for items for which production will be made to order in order to maintain traceability during its production phases; in this case, this type of management policy will be implemented during the [Production Job Order Generation](/docs/planning/mps-master-production-scheduling/job-order-creation), using the Customer Orders tab. This management will generate different production orders, each linked to a specific customer order. It can also be managed with the [MRP](/docs/planning/ms-master-scheduling/mrp) but only if expressly specified via the **Consider the item in the MRP calculation** flag found in the Parameters tab within this form. 
For example: a customer order has been created for 6 pieces of an item managed by Job, and another customer order for 8 pieces for the same item. To keep track of production and the link between the customer order and production orders, two different production orders will be created, each linked to a specific customer order.
> **Requirements**: in this case, these are items for which it may not be necessary to maintain traceability, so multiple demands with different sources can be grouped together (losing the link to the job). In this case, the item can be considered when using the [MRP](/docs/planning/ms-master-scheduling/mrp) procedure instead of the **General planning** procedure. 
For example: in a similar situation to the previous one, with a customer order of 6 pieces and one of 8 pieces for the same item, a cumulative production order of 14 pieces can be generated, but losing the link between order and job and therefore traceability. Alternatively, it can be managed without groupings.

:::note NOTE
The following options for buffers and customer time tolerance are available only with DDMRP.
:::
> **DDMRP Dynamic Buffers**: account for variations over time in the three characteristic zones (green, yellow, red) and consequently the average stock level.          
> **DDMRP Fixed Buffers**: use fixed values for the zones and consequently a fixed average stock level (used in cases of space limitations, investment, security limits, etc.).                
> **DDMRP Min-Max Buffers**: use only the red zone and the green zone.           
>> **Customer tolerance time**: is the delivery time expressed in days that customers generally consider acceptable. (It is enabled only after selecting a type of DDMRP buffer).      

**Procurement Type**: the combo is used to differentiate the type of planned orders created and allows the user to choose if the supply type of the item should be:  
> **Purchase**: in this case, the explosion of needs creates a planned purchase order for the item in question;  
> **Production**: in this case, the explosion of needs creates a planned production order for the item in question;  
> **Subcontractor**: in this case, the explosion of needs creates a planned job work order for the item in question.  

**Pickup type**: the combo allows the user to choose the type of withdrawal for the item, i.e., how the material should be removed in the production area, and one can choose between:  
> **Automatic**: with this setting, the item will be withdrawn during the release of the production order, i.e., when the production order is transitioned from Launched to Executive;  
> **With List**: with this setting, the item will be withdrawn through the generation of a withdrawal list that is created manually using the procedure in the production area > Material Withdrawal List. In this case, one will decide manually when to withdraw the material.  
> **Manual**: with this setting, the item will be withdrawn only during the production reporting of the directly upper bill of materials level. The withdrawal will occur simultaneously with the reporting of the production phase to which the material is linked, or, in the absence of a linked phase, simultaneously with the reporting of the last billable production phase. In other words, when I declare the parent of the bill of materials, all quantities of the children that I should have used to produce that parent will be proposed, and confirming the quantities will also proceed with their withdrawal. Note that in the case of using the WIP Warehouse, the Manual withdrawal type involves transferring the material in question from the raw materials warehouse to the WIP warehouse during the release of the production order, and then its withdrawal from WIP during reporting (for an explanation of WIP warehouses, please refer to the article dedicated to the *MRP Parameters* tab called *Warehouses*).

Additionally, the following fields are present:

**Procurement Priority**: this editable field allows the user to set the type of priority to assign to the item. This will be used in the creation of *purchase requests* during [Release of Planned Orders](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders/) if the **Supply procurement property from MRP parameters article (Proprietà approvvigionamento da Parametri MRP articolo)** flag has been activated;     

**Production Job Order generation**: if activated, indicates that the customer order lines that contain this item must be displayed in the filter of the *Sales Orders* tab of the *Production Job Order generation*; furthermore, it will also be considered in the case where the *Automatic generation of production flow* in the [MS Parameters](/docs/configurations/parameters/production/mps-parameters/) is active. If the flag is deactivated, the item will not be considered in either procedure;

**Exclude from planning**: if activated, 

**Scrap Percentage**: allows the user to set a fixed scrap percentage for the item. This percentage is always set with this data when the item is retrieved within a bill of materials.  
*Example*: if it is indicated that to produce that material, there is usually a scrap rate of 10%, if the order to produce is for 100 pieces, the scheduler or MRP, when creating the planned order, will do so for 100 pieces + 10%.

**Consider on Subcontractor**: if activated, allows the user to ensure that the item is considered in the automatic completion of the *Materials to be delivered* tab and the *Materials to be used* tab of the *Subcontractor order*;

There are also several flags that are used by the MRP procedure processing and they are:

**Consider the quantities according to economic lot**: if activated, the flag allows for the economic lot (i.e., the minimum production/purchase quantity) for the item to be considered (set in the production parameters section within this form and detailed later) or for purchase (set in the purchase parameters section within this form and detailed later);

**Consider the multiples of the economic lot**: if activated, the flag allows for the multiples of the economic production or purchase lot set in their respective sections of the form to be taken into account for the item;

**Replenish item minimum stock**: if activated, the flag allows for the replenishment of the minimum stock set in the item's registry, tab *Procurement*;

**Replenish item ROL**: if activated, the flag allows for the replenishment of the reorder point set in the item's registry, tab *Procurement*;

**Consider cover index**: if activated, the flag allows for the coverage index set in the item's registry, tab *Procurement*, to be considered; the coverage index is expressed in weeks, and when indicated, it means that the system is instructed to cover needs for the weeks indicated in this field;

**Consider also the alternatives of the materials**: if activated, the flag allows the item's alternatives set in the bill of materials tab *Alternatives* to be considered if the item is not available;

**Consider the alternative phases**: if activated, the flag allows the alternative phases set in the processing cycle of the item to be considered if it is a Production item. In the *Tolerance for the occupation of w. center* box, a percentage can be set that allows deciding when to consider the CDL full (for example, if I set 90%, when reaching 90% occupancy in that workstation, the program must consider the alternatives set for that center), while in the *Production tolerance* box, a percentage can also be set for how much more can be produced for the item compared to the expected quantity of the production order and similarly at the purchase level for the *Purchase tolerance* field.

**Lock for production**: if activated, the flag ensures that if a production order for this item is processed by Master Planning, the message "Cannot schedule, item XXXX is blocked for production" is displayed. In this case, the planning stops, and the user must restart it, excluding the order related to this item.

**Control requirements with planned orders generation**: if active, this flag ensures that MRP creates planned orders (provided it is also active with the corresponding flag present in the Parameters tab of the [MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)); if not active, MRP will only create the proposal for planned orders (but without creating them).

**Reference BOM**: section where the item/variant whose bill of materials should be used as a reference for planning a potential production order for the item/variant to which the MRP parameters being worked on refer is set, if different from the article code in the header of the MRP parameters. One can then enter the item (including **class**, **code**, and **description**) and any **variant**, while the **unit of measure** will be automatically reported.

**Production parameters**: this section is active if the management policy of the item is *Production*. In it, the following fields can be set:  
> **Lead time**: in this field, the user who does not use production cycles can set a production lead time for the item in question, a time calculated in working days based on the factory calendar that does not vary with the quantity to be produced;
> **Fixed Lead time**: in this field, the user can decide to consider a fixed lead time value and not calculated based on its processing cycles (thus the system will not consider the lead time set in the work cycle but will consider this data), entering the value in working days and activating this mode via the flag. 
If the flag is active, the calculated time will be the sum of the **Fixed Lead time** value (entered next to the flag) plus the **Lead Time Analysis** present in the [Quality](/docs/erp-home/registers/items/create-new-items/item-registry/quality) tab of the *Item registry*, so in this case, the time on the phases is not considered, and the start date is recalculated based on the *Factory Calendar*. If the flag is not active, the start date is recalculated considering the phases, alternative phases, and the *Work Centers Calendar*; 
> **Economic lot**: in this field, the user can set a production economic lot for the item, which will be considered by the procedures of [Production Order Generation](/docs/planning/mps-master-production-scheduling/job-order-creation) and Master Planning (only in the case of the flag 'Consider quantities based on the economic lot explained earlier);  
> **Days of schedule limit**: during scheduling/planning, only orders, commitments, and needs for this duration will be considered, everything beyond this will not be taken into account;
> **Multiples**: in this field, the user can set the multiples of the economic production lot for the item, which will be considered by the procedures of [Production Order Generation](/docs/planning/mps-master-production-scheduling/job-order-creation) and Master Planning (only in the case of the flag 'Consider quantities based on the multiples of the economic lot explained earlier);  
> **To Declare on Mobile**: this flag is activated if the item is managed via the Fluentis Mobile application;  
> **Grouping Days**: in this field, the user determines the time period over which the procedure groups any planned orders. For example, if this parameter is set to 5 for a given item, all planned orders with dates within the range of 5 working days (from the factory calendar) will be grouped together;    
> **Days tolerance advance**, **Days tolerance postpone**: are the days that MRP tolerates in advance or late of a document without proposing the actual early or late adjustment, but utilizing any excess without proposals. For this reason, if a specific item has values Early Tolerance Days = 2 and Late Tolerance Days = 5, it means that if the MRP algorithm detects the need to advance or postpone a document for that item, this will not be communicated to the user as a request for advance or postponement if within the range of 2 days preceding for advancement and within the range of 5 days following for postponement (the user will only be informed that the need has been met by that specific document). Essentially, in the case of *Early Tolerance Days*, MRP checks in the future (for the number of days indicated) if there are loads that cover any prior needs, while, in the case of *Late Tolerance Days*, MRP checks in the past (for the number of days indicated) if there are loads that cover any subsequent needs;     
> **Horizontal Freeze Days**: serves to safeguard orders already launched in this time horizon, while planned ones are regenerated;         
> **Tolerance in days/percentage from lead time**: determines the time period within which one can advance or postpone (beyond this limit, MRP proposes to eliminate the document) and until when to communicate the eventual excess of an item. It can be expressed in days or as a percentage of lead time. For example, if for an item 90 days of tolerance are defined, the documents related to this specific item can be advanced or postponed by a maximum of 90 days; if the need exceeds this threshold, MRP will propose to eliminate the document and create a new one on the date where the need was detected. Furthermore, for this specific item, an excess availability may be available for a maximum of 90 days.
If this parameter is active, MRP will modify the dates of the following types of documents: Planned Orders (if not mandatory), Production Orders (only those without reports), Purchase Requests, Job Work Orders (only if it does not have the already printed flag), Supplier Orders (if not already confirmed), advancing or postponing them by a maximum value equal to the one indicated;   
> **Mandatory manual material declaration**: used in Fluentis MES. If active, along with the flag **Mandatory manual material declaration** present in the [Production Resources](/docs/production/mes/production-resources) table of MES, ensures that in the *Materials* tab of Fluentis MES, the item is proposed with a zero quantity, and therefore the user will be required to manually enter a value before being able to continue;     

**Read B.O.M./Production cycles**: in this section, the user has the option to set the **version** of the bill and the production cycle that must be considered by the MRP procedure for the item in question; and also the **Production cycle number** defined as the default cycle for the item;

**Consider availabilities from**: in this section, the user has the possibility to decide which management areas should be taken into account during the MRP procedure processing. The areas are Purchases, Sales, Warehouse (and in this case, it can be decided whether or not to consider incomplete batch stocks by activating the appropriate flag), Job Work, Planning (therefore Production Orders, Planned Purchase Orders, Job Work and/or Production), Released Production (therefore Production Orders);

**Consider batches with 'not available' state**: as explained in the [Lots and Serial Number](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) tab of the item registry, batches have a status (available, unavailable, quarantined, etc.). If this flag is enabled (which becomes editable only if one chooses to consider availability from Warehouse), the system will also consider the lots that have the unavailable status;

**Exclude negative stock**: if enabled, this flag allows not to consider items with negative stock.

**Consider the item in the MRP calculation**: this flag becomes editable only if the management policy is 'Job'. By enabling this flag, items with a job management policy, which by default will be analyzed by the [Production Order Generation](/docs/planning/mps-master-production-scheduling/job-order-creation), can also be analyzed by the MRP.

**Forecast manage.**: the combo allows one to decide how production orders should be generated by the [Production Order Generation](/docs/planning/mps-master-production-scheduling/job-order-creation) when generated from the Forecast. The possibilities are: The greater of Customer Orders and Sales Forecasts; Always the Sales Forecast; The lesser of Customer Orders and Sales Forecasts; Always the Customer Orders; Sum of Customer Orders and Sales Forecasts. It is recommended to use 'the greater of orders and Forecast' because if we have planned to produce 100 pieces of that material based on forecasts and receive orders for 200 pieces before the production start date, setting this forecast management policy will cause the system to create an order for 200 pieces, and not an order for 100 pieces as per the forecast and 200 pieces from order since the 200 pieces include the initial forecast that was then exceeded in reality.

**Purchase/Job Work Parameters**: the section is active if the management policy of the item is 'Purchase' or 'Job Work'. Here you can view and optionally modify the data entered in the *Preferential vendors* tab of the *Item registry* (shipping lead time, procurement time, total procurement times, minimum purchasable quantity, multiples on the minimum quantity).

## 2. Warehouses 

In this tab, the user has the opportunity to decide that for the item in question, the movement of items through the procedures related to the production area should not occur considering the settings of the *Production Order Parameters* but according to customized settings of the item itself. 
 
*Example*: if in the combo *Warehouse* and in the combo *Template* of the **Raw material** section, a warehouse and a reason different from those set in the same section of the [Production Order Parameters](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro) are set, it means that when that item is withdrawn for production via a withdrawal list, release of production orders, or reporting of production, it must be withdrawn from the warehouse set here and using the reason set here, instead of through the values set in the *Production Order Parameters*, which have general relevance for all items, except for those for which the user has set different values in this *Warehouses* tab of the *MRP Parameters*.

In this tab, therefore, you can set the warehouses related to *Raw material*, *Unfinished products*, *Finished products*, and any *Scrap* with the related loading and unloading reasons.

To set one of these warehouses, simply select through the respective combo boxes the warehouse and the reasons (pre-coded in the respective *Warehouses* and *Reasons* tables) you wish to set.

There are also *W.I.P.* Warehouses that are activated by selecting the *W.I.P* option and proceeding to select within the combo boxes of the warehouses and reasons as for general warehouses.

:::note IMPORTANT
The same warehouses are proposed, in the exact same display, within the [Production Order Parameters](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro) where all the usage logics are explained in detail.
:::

For anything that is not detailed in this document about the common functionality of the forms, refer to the following link [Common functionalities, buttons, and fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).