---
title: Costing
sidebar_position: 6
---

:::important What it is for
The **Costing** of production job orders represents a crucial element in the effective management of company production processes.         
This management system allows for the establishment, monitoring, and comparison of expected and actual costs associated with a job, providing a clear and detailed picture of the resources employed.         
Through a structured interface, the system allows for setting preliminary parameters, managing documents, and entering or modifying additional costs, both at a global level and specific to each job.          
The ability to analyze costs both synthetically and analytically, and to make corrections and savings, makes **Costing** an essential tool for maintaining competitiveness and production efficiency.
:::

**Preliminary Settings**

Before proceeding, please refer to what is indicated on the following pages regarding *Costing of production job orders*:    

> [MS Parameters -> Job Order Costing Tab](/docs/configurations/parameters/production/mps-parameters)  
> [Job Order Costing Type](/docs/configurations/tables/production/production-job-order-cost-type)      
> [Document Types](/docs/configurations/tables/production/documents-types)     
> [Subcontractor Parameters -> Material Processing Value](/docs/configurations/parameters/production/subcontractor-parameters/)        

*Specific Buttons*:
 
> **Additional Costs**: allows you to enter additional costs that can be proposed by default in every subsequent costing (these costs are not linked to the individual order, but are global). These costs are divided into *Total direct costs*, *General Costs*, and *Other Costs*. These will be brought by default into the corresponding sections of estimated and actual costs in the *Total Costs* tab;     
> **Execute Costing**: allows you to launch the costing procedure for the orders;    
> **Insert Costing**: allows you to insert a new costing; automatically all default data entered in the preliminary parameterization phase will be included, which can obviously be manually changed for the individual costing;     
> **Delete Costing**: allows you to delete an already created costing;     
> **Expand Costing**: allows you to expand the document tree of an already created costing. 

:::note Note
The **Costing** tab is present in the management of both single-product orders and multi-product orders; in the case of multiproduct, the costing will take into account all items present in that order.
::: 

This tab consists of a header section containing information related to the selected costing and a series of underlying tabs: **Cost Detail**, **Total Costs**, and **Cost Analysis**.          
In the header section, there is a grid listing all the valuations launched for that job, while on the right side, the general information related to the selected costing is displayed.             
In the ribbon bar, there are buttons that allow you to open the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) of the item, the [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), and the [Work Cycle](/docs/erp-home/registers/production/routes/new-route). 
By clicking the **Insert Costing** button, a new costing will automatically be created, and all the default data entered during the preliminary parameterization phase will be included, which can still be manually modified for each individual row.           
By selecting a costing row, it is possible to expand the document tree using the **Expand Costing** button, or delete it with the **Delete Costing** button.        
Using the **Additional Costs** button, it is possible to enter additional costs that can be proposed as default in each subsequent costing (these costs are not tied to the individual job but are global). These costs are divided into *Direct costs*, *General costs*, and *Other costs*. They will default in the corresponding sections of estimated and actual costs in the **Total Costs** tab. Otherwise, it will always be possible to manually enter or modify them in the respective section of the total costs tab.           
Once all the parameters are decided, to execute or re-execute a costing, it will be sufficient to select it and press the **Execute Costing** button.

## Cost Details

In the cost details tab, detailed information about the costs related to the selected costing at the top of the form will be displayed.
In the left table, you can view the document tree that makes up the costing with the following information:
**Document Type**: indicates the type of document;    
**Year**: indicates the document year;     
**Number**: indicates the document number;     
**Batch**: indicates the batch number of the document (if present);     
**Type**: indicates the code of the document type;    
**Class**: indicates the class of the item in the document;     
**Item Code**: indicates the code of the item in the document;    
**Variant**: indicates the variant of the item in the document;      
**M.U.**: indicates the unit of measure of the item in the document;      
**Quantity**: indicates the quantity of the item in the document;      
**Total Estimated Cost**: indicates the total estimated cost of the item in the document;      
**Total Effective Cost**: indicates the total actual cost of the item in the document;      
**Item Description**: indicates the description of the item in the document;      
**Variant Description**: indicates the description of the variant of the item in the document.      

Once a document is selected from the tree, all detailed information related to it is displayed on the right side of the form, divided into:

#### *Internal Processing*  

**Work C.**: indicates the code of the work center;    
**Machine**: indicates the machine code;     
**Lab. gr.**: indicates the code of the labor group;     
**Document ref.**: indicates the document reference;    
**Times M.U.**: indicates the unit of measure of times;    
**Estimated Setup Time**: indicates the estimated setup time;     
**Effective Setup Time**: indicates the effective setup time;    
**Estimated Machine Time**: indicates the estimated machine time;    
**Effective Machine Time**: indicates the effective machine time;     
**Estimated Labor Time**: indicates the estimated labor time;    
**Effective Labor Time**: indicates the effective labor time;    
**C.D.L. Description**: indicates the description of the work center item; 
**Machine Description**: indicates the description of the machine;     
**Lab. gr. Description**: indicates the description of the labor group;        
**Total Estimated Cost**: indicates the total estimated cost;    
**Total Effective Cost**: indicates the total effective cost. 

:::note Note
If the actual work center is different from the estimated one, two rows will be displayed in this table, one with the estimated work center with the related costs and one with the effective work center.
::: 

#### *External Processing*

**Contractor**: indicates the subcontractor; 
**Document ref.**: indicates the document reference;    
**M.U.**: indicates the management unit of measure;    
**Estimated Quantity**: indicates the estimated quantity to produce;    
**Effective Quantity**: indicates the effective quantity produced;    
**Estimated Unit Price**: indicates the estimated unit price;    
**Effective Unit Price**: indicates the effective unit price;    
**Total Estimated Cost**: indicates the total estimated cost;    
**Total Effective Cost**: indicates the total effective cost.    

#### *Materials*    

**Class**: indicates the item class;     
**Item Code**: indicates the item code;    
**Item Description**: indicates the item description;      
**Document ref.**: indicates the document reference;    
**M.U.**: indicates the management unit of measure;    
**Estimated Quantity**: indicates the estimated quantity to purchase;    
**Effective Quantity**: indicates the effective quantity purchased;    
**Estimated Unit Price**: indicates the estimated unit price;    
**Effective Unit Price**: indicates the effective unit price;     
**Variant**: indicates the item variant;     
**Variant Description**: indicates the description of the item variant;   
**Total Estimated Cos**: indicates the total estimated cost;    
**Total Effective Cost**: indicates the total effective cost.   

At the bottom of the form, there is an expander called **Document Cost Detail** where the following information is displayed:

**Estimated / Effective Unit Material Cost**: indicates the unit cost of materials (estimated / effective) related to the selected document;    
**Estimated / Effective Unit Cost Working**: indicates the unit cost of processing (internal and external) (estimated / effective) related to the selected document;  
**Total Estimated / Effective Unit Cost Working**: indicates the total unit cost (materials and processing) (estimated / effective) related to the selected document;    
**Total Estimated / Effective Cost Material**: indicates the total material cost (estimated / effective) related to the selected document;    
**Total Estimated / Effective Cost Working**: indicates the total processing cost (internal and external) (estimated / effective) related to the selected document;  
**Total Estimated / Effective Cost **: indicates the total cost (materials and processing) (estimated / effective) related to the selected document;  

## Total Costs

In this tab, the estimated and effective costs related to the selected costing are summarized.     
Specifically, for each section (estimated and effective), the following fields are displayed:     
**Industrial Cost**: total costs of materials and processing costs (internal and external);     
**Total Direct Costs**: total costs entered in the **Direct Costs** section;    
**Total Direct Cost of Job Order**: total of *Industrial Cost* and *Total Direct Costs*;     
**Refill**: allows you to indicate the type of refill, whether as a percentage or as a value, and also the value itself;    
**Total Cost Refilled**: total of *Total direct cost of job order* and *Refill*;     
**Total General Costs**: total costs entered in the **General Costs** section;      
**Total Other Costs**: total costs entered in the **Other Costs** section;     
**Correction**: allows you to enter a value to correct the *Total Cost Refilled*;      
**Rounding**: allows you to decide whether to round up or down and the order of magnitude;     
**Total Job Order Cost**: total of *Total Cost Refilled*, *Total General Costs*, *Total Other Costs*, *Correction*, and *Rounding*. The *Total Order Cost* is highlighted in red in the *Final Costs* section when this is higher than that in the *Previewed costs* section.           

:::note Note
The fields that are automatically reported and aligned between the *Previewed costs* section and the *Final Costs* section are: *Refill* (type of refill and value), *Correction*, and *Rounding* (type of rounding and value). In any case, in the *Final Costs* section, they can be manually varied to differentiate them from the values entered in the *Previewed costs* section.
::: 

Through the **Additional Costs** button, it is possible to enter *Direct Costs*, *General Costs*, and *Other Costs* that can be proposed by default in both estimated and effective costs.      
For each of these costs, it is possible to define whether it is of percentage type or value type, indicating the value itself.    

For all necessary information for creating these costs, refer to the page related to [Cost elements](/docs/configurations/tables/general-settings/cost-elements).         

## Cost Analysis

In this tab, all cost components regarding estimated and effective costs are highlighted, using two types of analysis:      

> **Synthetic**: in this type of analysis, the *Industrial Cost* is reported, thus as the sum of material costs and processing costs, in addition to *Direct Costs*, *General Costs*, and *Other Costs* with the total of *Refill* and *Corrections*;     
> **Analytic**: in this type, all items are reported individually in the graph, so the *Industrial Cost* is divided into *Material Cost*, *Internal Work Cost*, and *External Work Cost*; items related to *Refill* and *Corrections* are also reported separately, and obviously, *Direct Costs*, *General Costs*, and *Other Costs* are also reported.

These two types of analysis can be compared through a *cost breakdown* with a pie chart, or with a *cost comparison* using a bar chart.

## Method of calculating estimated and actual costs 

The documents contributing to the calculation of estimated costs are: 
- Job Order
- Planned order 
- Purchase request 
- Purchase order 
- Production order 
- Work order 

The documents contributing to the calculation of actual costs are: 
- Material delivery note 
- Subcontractor returns 
- Production declaration

### Internal Processing 

For the calculation of the processing cost of a preliminary phase, the highest priority is given to the value indicated in the **Unit Cost** field present in the [Work Cycle](/docs/erp-home/registers/production/routes/new-route); therefore, in this case, the times and costs associated with the machine or the labor group are not considered.                
In the case where the **Unit Cost** present in the [Work Cycle](/docs/erp-home/registers/production/routes/new-route) is null or zero, the costs of internal processing are taken from the [Machine](/docs/configurations/tables/production/machines) and the [Labor Group](/docs/configurations/tables/production/labour-group) that are forecasted to be used in the work cycle for estimated costs and from those that were actually used in the production declaration for actual costs.         
To the [Machine](/docs/configurations/tables/production/machines) and the [Labor Group](/docs/configurations/tables/production/labour-group), a [Cost Center](/docs/configurations/tables/production/cost-center) is associated in their respective tables, where this [Cost Center](/docs/configurations/tables/production/cost-center) is associated with a certain rate.         
Of course, the cost indicated in the [Cost Center](/docs/configurations/tables/production/cost-center) will be multiplied by the time indicated in the work cycle for estimated costs, while for actual costs it will be multiplied by the time actually spent as reported in the production declarations. Additionally, it is important to have entered the number of machines and the number of operators in both the cycle and then in the production statement; to have generated the [Factory Calendar](/docs/configurations/tables/production/factory-calendar) and those of [Production Capacities](/docs/configurations/tables/production/productive-capacity-calendar); and also to have indicated within the [Work Centers](/docs/erp-home/registers/production/routes/work-center) the respective start and end times (including breaks).

### External Processing 

For the calculation of the processing cost of a preliminary phase, the highest priority is given to the value indicated in the **Unit Cost** field present in the [Work Cycle](https://docs.fluentis.com/FluentisErp/docs/erp-home/registers/production/routes/new-route); therefore, in this case, the costs present in the work order price lists are not considered.       
In the case where the **Unit Cost** present in the [Work Cycle](https://docs.fluentis.com/FluentisErp/docs/erp-home/registers/production/routes/new-route) is null or zero, the estimated cost is based on the work order list price (as long as the work order has not been created), at the time the work order is created it will be based on the price indicated in the item line.      
As for the actual cost, the cost is taken from the value indicated in the work order return document.       

### Materials 

The material cost is based on the **Cost Type** we selected in the costing, such as last, average, or standard.          
Additionally, it is also based on the **Cost of the batch** and **Job Order Cost** flags. If both are activated, the procedure will value the material cost according to the selected cost type considering values only for that specific job and that specific lot, obviously among the movements made with load reasons with the flag *update last or average cost* (depending on the value indicated in the **Cost Type** field) and the *fiscal interest* flag active; if it does not find any movements with these characteristics, it will look among the movements that have loaded that lot, and if it doesn't find even these, it will look among all the movements of that item. If there are no loading movements for that item, it will check the respective last, average, and standard cost fields of the item registry.         
In the case of the estimated cost, the values will be taken from the [Purchase Request](/docs/purchase/purchase-requests/general-overview) and the [Purchase Order](/docs/purchase/purchase-orders/general-overview) and multiplied by the expected consumption in the [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/assemblies/new-assemble); while for the actual costs, they will be taken from the [Purchase Delivery Notes](/docs/purchase/purchase-delivery-note/general-overview) of the material and multiplied by the quantities used in the [Production Statements](/docs/production/pp-production-in-progress/signals/sisgnals).

For details on the common functionality of the forms, refer to the link [Custom features, buttons, and fields](/docs/guide/common).

