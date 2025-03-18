---
title: MRP
sidebar_position: 3
--- 

:::important What is it for 
The **MRP** (**Manufacturing Resource Planning**) function of Fluentis allows users to analyze the availability of materials and production resources based on production planning. Through this procedure, the operator receives suggestions on how to optimize material management, including guidance for anticipating supplies, integrating necessary quantities, or canceling unnecessary orders. Fluentis MRP takes into account production constraints, raw materials, and available or ordered semi-finished products, thus allowing efficient control of each active Job Order. This system aims to optimize company inventories, reducing stock levels and improving operational efficiency.
::: 

This procedure allows the user to have an analysis of the correct availability of materials and production resources based on production planning. Through this processing, the operator can receive a series of suggestions related to anticipating some material supplies, integrating necessary quantities, or canceling orders for unnecessary items in order to make the control and management of operations as smooth as possible. The MRP performs production planning while considering different production constraints, as well as available and ordered raw materials and semi-finished products. Thanks to this procedure, the operator is able to analyze the production coverage of each active Job Order, managing and coordinating all processes related to acquisition, production, and delivery of the finished product. The basic principle of the material requirements planning system is the optimization of stocks based on business needs, which results in reduced stock levels and a consequent increase in efficiency. Essentially, through the algorithms of this function, Fluentis MRP is able to understand the commitment of each material present in inventory and the availability on the specified date. 

### M.R.P.

In this tab, it is possible to consult the results by selecting the processing from those present in the history.    
It is noted that processes are maintained in history for the number of days indicated in the field **MRP History Days to Keep**, present in the [Material Requirements Parameters](/docs/configurations/parameters/production/resource-requirements-parameters).      
This form consists of a filter area where it is possible to filter by item, type of supply, or even by the type of suggestion provided by the procedure.  
On the right side, there is a list of all the items that the procedure has processed, for each of which the proposed actions are also indicated.    
Once one of these rows is selected, all the information related to the actions to be taken is displayed in the central table, where availability, requirement, and any confirmed requirement are reported if the procedure has been launched with the **Confirmed Production request Difference** flag active; while in the lower table, we find all the information related to all documents related to the item, indicating request, offer, and availability on the specified date.    
By selecting a scheduled order created by the MRP procedure, it is possible to release it by pressing the **Release Planned Orders** button.

### Job Order 

In this tab, it is possible to filter and select the production Job Orders that you want to process, so as to operate partially on some selected Job Orders or globally on all Job Orders present in production.

### Parameters 

Through this tab, all the general parameters concerning the MRP procedure are set. Some settings present in this tab are taken from the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) window and are related to the specific item. 

**Planning**: 
> **Plan until**: indicates the date by which the system should consider the entered documents. This is proposed as the last day of the year if the current date is until June 30 of the current year; otherwise, after July 1, the last day of the following year is proposed.     
> **Materials Flag**: if enabled, the materials to be consumed are listed in the created scheduled orders. If the flag is not active, scheduled orders will still be created but without the materials inside;       
> **Resources Flag**: if enabled, the processing phases are also listed in the created scheduled orders. If the flag is not active, scheduled orders will still be created but without the processing phases inside;            
> **Planned Purchase Orders Flag**: if enabled, planned purchase orders are considered in planning;    
> **Planned Production Orders Flag**: if enabled, planned production orders are considered in planning;    
> **Planned Subcontractors Flag**: if enabled, planned Subcontractors are considered in planning;   

**For documents without necessary dates:**    
> **Supplier Orders and Purchase Requests**: it is possible to decide not to consider items without a scheduled delivery date, or to consider the manually indicated delivery date in this section;    
> **Sales Orders**: it is possible to decide not to consider items without a scheduled delivery date, or to consider the manually indicated delivery date in this section;    

**Consider availabilities coming from**:    
> **Purchases**: if activated, the flag ensures that documents from the management area *Purchases* must be taken into account during the processing of the MRP procedure;   
> **Sales**: if activated, the flag ensures that documents from the management area *Sales* must be taken into account during the processing of the MRP procedure;    
> **Warehouse**: if activated, the flag ensures that documents from the management area *Inventory* must be taken into account during the processing of the MRP procedure;   
> **Subcontractor**: if activated, the flag ensures that documents from the management area *Subcontractor* must be taken into account during the processing of the MRP procedure;   
> **Planning**: if activated, the flag ensures that documents from the management area *Planning* (thus Production Job Orders, Planned Purchase Orders, Subcontractors, and/or Production) must be taken into account during the processing of the MRP procedure;   
> **Production**: if activated, the flag ensures that documents from the management area *Released Production* (thus Production Orders) must be taken into account during the processing of the MRP procedure;    

**Also consider alternative materials**: *IN DEVELOPMENT*    
**Also consider alternative phases**: *IN DEVELOPMENT*

**Reading BOM/Cycles**:   
> **Version**: indicates the default version to consider for BOM/cycles;   

**Consider quantities based on the economic lot**: if activated, the flag ensures that the economic lot (i.e., the minimum quantity) of production or purchase is taken into account for the item;   
**Consider multiples of the economic lot**: if activated, the flag ensures that the multiple of the economic lot of production or purchase is taken into account for the item;   
**Replenish minimum stock of the item**: if activated, the flag ensures that the minimum stock set in its registry, tab *Supply*, is replenished for the item;   
**Consider coverage index**: if activated, the flag ensures that the coverage index set in its registry, tab *Supply*, is taken into account for the item; the coverage index is expressed in weeks and when indicated, it means that the system is instructed to cover the needs for the indicated weeks in this field;   
**Without suggestions**: if active, the MRP does not make proposals for increasing, decreasing, cancelling, anticipating, and postponing the scheduled orders already created;   
**Consider past**: if activated, for those documents with a scheduled delivery date past relative to the current date (today), availability is also considered in the past; if not active, all past documents (relative to today) will be considered with a scheduled delivery date of today;       
**Differentiate confirmed production request**: if active, the MRP is executed twice; the first execution only considers requirements coming from executive documents (areas: SCM - Purchases, SCS - Subcontractor, and MES - Production), generating scheduled orders if necessary, also valuing the "confirmed quantity" field (present in the scheduled order just created); this first execution generates the strictly necessary documents to satisfy the request for more urgent documents, namely those executive ones. 
The second execution takes into account requirements coming from all documents including Production Job Orders; this second execution generates missing documents without optimizing them with those generated in the first execution in order to allow them to be confirmed/released separately;       
**Consider items without a Job Order**: if activated, during the processing of the MRP procedure, all items with a policy of predictive management and requirement (excluding those archived and/or fictitious) and with a policy of Job Order management (only if the flag *Consider the item in MRP calculation* is active in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) of the item), will be taken into account even if without a Job Order;     
**Control requirements with planned orders generation**: allows you to choose whether to generate scheduled orders or not. If not active, only suggestions for creating scheduled orders are proposed; note that scheduled orders created by MRP do not have references to Job Orders;    
**Items with stock**: takes all items that have a stock management policy in the MRP parameters of the item; moreover, in the MRP parameters, at least one of the minimum stock parameters and reorder point must be set;    
**Tolerance for the occupation of w. center**: used in generating loading for the phases of planned production orders to define when the MRP should use an alternative work phase.      

### History

In this tab, it is possible to filter and view the list of launched MRP procedures, with the indication of the user and the time they were executed.