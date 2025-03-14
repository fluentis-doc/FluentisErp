---
title: New Monoproduct Job Order
sidebar_position: 4
---

The form opens via the path **Planning > Production Job Orders** by clicking on the **Insert Job Order** button in the **Production Job Orders** form.  

## Specific Buttons

> [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): with this button, it is possible to open the screen related to the MRP parameters of the item;      
> [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): allows opening the screen related to the bill of materials of the item;  
> [Work Cycles](/docs/erp-home/registers/production/routes/new-route): allows viewing the work cycle and the related production phases of the item.

## Monoproduct Job Orders Management

Within this tab, the main data that the production job must contain is indicated.

**Job Order Type**: the default type is proposed as the default type;    

**Number**: indicates the progressive number of the job, which is proposed automatically;     

**Year**: the current year is proposed automatically;   

**Client**: indicates the account/subaccount references and description of the customer;    

**Date**: the current date is proposed automatically;        

**Compulsory**: if active, indicates whether this job is of fundamental importance;    

**Job Order Status**: the system automatically proposes *Not examined*, the status that the job assumes as soon as it is created;    

The other statuses that it can assume are:

- **Scheduled**: the job moves to this status after undergoing the General Scheduling process;  
- **Launched**: the job moves to this status after at least one of the planned production orders generated from it during the General Scheduling has been released (no other planned orders of purchase or job work should have been released; otherwise, the job moves to executive status);      
- **Executive**: the job moves to this status after at least one of the production orders generated from it has been released and has become executive, or after at least one of the planned purchase orders or job work generated from it has been released;   
- **Closed**: the job moves to this status after the production order generated for the item subject to the job has moved to *Executed*;   
- **Historicized**: the job can be set to this status manually to ensure it no longer appears when searching for *Executed* jobs;  
- **Cancelled**: the job can be set to this status manually, instead of deleting it entirely, to indicate that the job, which was initially planned, has not been brought into production.

**Description**: allows entering a description related to the job;        

**Procurement type**: generally coincides with the supply type of the item entered in the production job. The supply type of the item is indicated in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the latter;     

**Procurement Priority**: indicates the priority of the supply;           
       
**Projects**: indicates the project in which the job is included;       

**Production Site**: indicates the production site where the job will be produced. This field has a check that, in case the job originates from a customer order, verifies that the warehouse indicated on the customer order line belongs to the same production site indicated in the production job.  

**Ready Goods Date**: in this column, the date of the ready goods set in the customer order line of which the detail is displayed is shown;      

**Suggested Date**: a field where the date suggested by the system appears if the user has scheduled the job using the *Check Late Documents with ATP* parameter and having set, also in the parameters of *General Scheduling*, a *MS Start Date* (Master Scheduling). The suggested date is what the user has the option to decide to become the expected end date of the job;

**Estimated Working Date Start/End**: in these fields, the expected start/end dates of the *Production Job Order* appear. As long as the Production Job Order remains in the *Not examined* state, these dates are identical to each other and equal to the ready goods date of the Customer Order line from which the job was generated, or equal to the end date of the Sales Forecast from which the job was generated. After the Production Job Order has been scheduled, the expected start date of the job coincides with the expected start date of the first planned order generated from the scheduling of the job order. Finally, it is worth noting that in case of manual entry of the Production Job Order, the user is required to manually enter this data, otherwise it will not be possible to save the job order itself;

**Effective working date Start/End**: in these fields, the Start/End dates of the actual processing appear, that is, respectively, the date of the first production reporting of a production order generated from the job order and the date of the last production reporting that caused the definitive closure of the production order whose item is the same as that of the Production Job Order. Obviously, the actual end date is present only if the job order is in the *Closed* status;

*Mandatory fields for the generation of the production job order*: **Item** (with its related class, code, and description), **Version**, **Quantity** of the job, and the related **Units of Measure**.  
Finally, there are a series of fields that are all taken from the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the selected item such as: **Cycle**, **Economic Lot** with the related **Multiples**, **Lead Time**, **Scrap Rage** on quantity, and **Procurement Type**. The fields **Start/End Forecast Date** indicate the start and end of the period considered for the sales forecast that generated that job order. 

### Sales Orders References

The tab contains a read-only grid, in which the customer orders linked to the relevant production job order appear when the job order was generated from one or more customer order lines.  
**Type/Year/Number**: in these columns, the *Type/Year/Number* of the customer order containing the line for which the detail is displayed is shown;  
**N./Quantity/Units of Measure**: in this column, the quantity of the customer order line for which the detail is displayed is shown;  
**Ready Goods Date**: in this column, the date of the ready goods that was set in the sales order line for which the detail is displayed is shown;  
**Account**: in this column, the account and subaccount of the customer to whom the sales order in which the line for which the detail is displayed is registered is shown.

### Extra Data

This tab is also made up of a grid where all extra data related to the item present in the production job order will be reported.

## Costing

All information related to **Costing** can be consulted on the [Costing Page](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra Data

This tab, which is alongside the *Monoproduct Job Orders Management* tab, contains all the sets of [extra data](/docs/configurations/utility/extra-data/extradata/search-extradata) related to the production job order.

For details on the common functionality of the forms, please refer to the link [Custom Features, Buttons, and Fields](/docs/guide/common).