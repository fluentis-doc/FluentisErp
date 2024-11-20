---
title: Costing
sidebar_position: 6
---

**Preliminary Settings**   

Before proceeding, please refer to the information provided on the following pages regarding the *Costing of production job orders*:    

> [MS Parameters -> Costing tab of the order](/docs/configurations/parameters/production/mps-parameters)     
> [Document Types](/docs/configurations/tables/production/documents-types)     
> [Production job order cost type](/docs/configurations/tables/production/production-job-order-cost-type)      
> [Parameters Subcontractor ->  Valorization of the work. mat. to cost:](/docs/configurations/parameters/production/subcontractor-parameters/)       

*Specific Buttons*:
 
> **Additional Costs**: allows you to enter additional costs that can be proposed by default in every subsequent costing (these costs are not linked to the individual order, but are global). These costs are divided into *Total direct costs*, *General Costs*, and *Other Costs*. These will be brought by default into the corresponding sections of estimated and actual costs in the *Total Costs* tab;     
> **Execute Costing**: allows you to launch the costing procedure for the orders;    
> **Insert Costing**: allows you to insert a new costing; automatically all default data entered in the preliminary parameterization phase will be included, which can obviously be manually changed for the individual costing;     
> **Delete Costing**: allows you to delete an already created costing;     
> **Expand Costing**: allows you to expand the document tree of an already created costing. 

:::note Note
The **Costing** tab (realtavio alla costificazione) is present in the management of both single-product orders and multi-product orders; in the case of multiproduct, the costing will take into account all items present in that order.
::: 

At the top of the form, there is a grid containing the list of all the valuations launched for that order, while on the right side, general information about the selected order is displayed.
The lower part of the form is composed of the following tabs:

## Cost Details

In this tab, detailed cost information related to the costing selected in the upper part of the form is displayed.
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
**Total Estimated Cost**: indicates the total estimated (preventive) cost of the item in the document;      
**Total Effective Cost**: indicates the total actual (consuntivo) cost of the item in the document;      
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
**Total Direct Cost Comm.**: total of *Industrial Cost* and *Total Direct Costs*;     
**Refill**: allows you to indicate the type of refill, whether as a percentage or as a value, and also the value itself;    
**Total Cost Refilled**: total of *Total direct cost comm.* and *Refill*;     
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

For details on the common functionality of the forms, refer to the link [Custom functionalities, buttons, and fields](/docs/guide/common).