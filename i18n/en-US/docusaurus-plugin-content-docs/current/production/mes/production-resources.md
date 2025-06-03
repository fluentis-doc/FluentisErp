---
title: Production Resources
sidebar_position: 4
---

:::important What It Is For
The production resources in Fluentis's MES system allow for the management of all parameters necessary for planning and optimizing production operations. Through an intuitive interface, users can import different types of resources, including items, machines, employees, work centers, and measuring instruments. 

Moreover, it is possible to customize the layout and behavior of the work center, adapting the system to specific business needs easily, quickly, and autonomously. 

This functionality not only simplifies the management of production resources but also allows for easy copying of default settings from existing resources, ensuring that the data is always updated and consistent.
:::

Through this window, all parameters concerning the management of production resources within the MES are set.

*Specific button*:  

> **Import**: allows importing into the **Production resources** table the following types of resources: *Item*, *Machine*, *Employee*, *Work Center*, and *Measuring Instrument*; it is also possible to import more than one at a time by simply selecting them via the *Import* pop-up.
If there are already records in the table and the operator selects one of a certain type of resource, when the *Import* button is pressed, the procedure will already filter for that same type of resource and will also copy all the settings entered in the selected resource (i.e., the one already present in the resource grid) to the new records of the resources entered through the import procedure.

### Production resources

The form consists of a first grid containing data related to the entered resources, including:       
**Code**: indicates the production resource code;       
**Description**: indicates the description of the production resource code;      
**Type of resource**: indicates the type of resource among: *Employee*, *ITEM*, *Machine*, *Measurement tool*, and *Work center*;         
**Machine**: indicates the code of the machine associated with the resource; it is enabled only if the *Resource Type* is *Machine*;       
**Machine description**: indicates the description of the machine associated with the resource; it is enabled only if the *Resource Type* is *Machine*;     
**Work center**: indicates the code of the work center associated with the resource; it is enabled only if the *Resource Type* is *Work Center*;      
**Work center description**: indicates the description of the work center associated with the resource; it is enabled only if the *Resource Type* is *Work Center*;     
**Employee**: indicates the code of the employee associated with the resource; it is enabled only if the *Resource Type* is *Employee*;     
**Surname**: indicates the last name of the employee associated with the resource; it is enabled only if the *Resource Type* is *Employee*;     
**First Name**: indicates the first name of the employee associated with the resource; it is enabled only if the *Resource Type* is *Employee*;     
**Class**: indicates the class of the item associated with the resource; it is enabled only if the *Resource Type* is *Measuring Instrument*;       
**Item code**: indicates the code of the item associated with the resource; it is enabled only if the *Resource Type* is *Measuring Instrument*;       
**Item description**: indicates the description of the item associated with the resource; it is enabled only if the *Resource Type* is *Measuring Instrument*;       
**Measurement tool**: indicates the code of the measuring instrument equipment associated with the resource; it is enabled only if the *Resource Type* is *Measuring Instrument*;        
**Refresh interval(secs)**: indicates the number of seconds for refreshing MES forms, for example: for refreshing data in the *Analysis* tab or for refreshing the automatic working time.     

To each resource entered in the upper grid, all the information present in the subsequent tabs is associated.

## General

In this tab, a number of pieces of information that influence the behavior of the individual production resource during Production Declarations are present.    

**Mandatory operator**: if active, it requires the operator to enter a type of employee resource in the *Resource* field of the main Production Declarations form before proceeding with the rest of the activities. This will be the employee indicated as the operator making the declaration;         
**Require password**: if active, it requires the operator to enter a password to proceed; the required passwords are in the following order: the password present in the [Employee](/docs/project-management/registers/employee/new-employee/) form, and if not present, the system password is requested. If neither is present, the user will be required to enter one.
:::note Note
If both **Mandatory Operator** and **Mandatory Password** flags are enabled, the operator will have to enter the employee first and then, upon the procedure's request, the password.
:::
**Mandatory team**: if active, it enables a check that requires the operator to enter at least one team member before proceeding with the declaration activity;     
**Allow Overlapping Reporting**: if active, it allows the phases of a production order to be declared without following the indicated sequence in the cycle; if not activated, overlapping phases or declaring phases without following the cycle's sequence is not possible;    
**Enable multi-phase**: if active, it allows for declarations of multiple phases simultaneously.
In this case, time is divided among the various phases as follows: if a quantity (produced or scrapped) is declared, then the time for each phase is calculated using the following formula:              
"**(Declared time / total quantity (produced + scrapped)) x declared quantity (produced + scrapped) for the individual phase = Phase time**"           
If no quantity is declared, but only time, then it is calculated using the formula:              
"**Declared time / number of phases = Phase time**"      
**Maximum number of phases**: allows indicating the maximum number of phases that can be declared simultaneously;    
**Manual time entry**: if active, it enables the operator to input working time;     
**Time Proposed**: if active, it enables the automatic proposal of working time input;             
**Quantity distribution type**: indicates the method by which the quantity is allocated in the case of simultaneous declarations of multiple processing phases. The active methods are: *Sequence*: quantity is allocated to the phases in work based on the planned or entered sequence, *Proportional*: quantity is allocated proportionally based on the produced quantity of the declaration and the quantities to be produced of the individual phases; *Manual* allows for manually indicating the produced quantities in each individual phase;         
**Mandatory manual material declaration**: if active, along with the flag **Mandatory manual material declaration** present in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) of the item, ensures that in the *Materials* tab of the Production Declarations, the item is proposed with a quantity of zero, thus requiring the user to manually input a value before proceeding;    
**Mandatory WorkSheet**: if active, it enables a check that prevents the operator from adding a phase that does not yet have the "Final Print" flag enabled. This "Final Print" flag can be enabled through the print procedure of the [Work Sheet](/docs/production/pp-production-in-progress/reports/worksheet);    
**Mandatory label printing**: if active, it enables a check that requires the operator to print all labels before proceeding with the declaration activity;    
**Mandatory defect if declared reject**: if active, it enables a check that requires the operator to enter the type of defect if they enter a scrapped quantity;    
**Automatic registration**: if active, it allows for the automatic creation of stock registration upon declaration confirmation.    
**Import all phases of the group**: if active, the corresponding flag present in the *help phases* of the *production* tab in the MES is also activated by default. In this way, if the user selects a phase belonging to a group and adds it, all other phases belonging to the group are also added.

### *Document Management*     
**Document Origin Type to Exclude**: this table is linked to the *Documents and Operating Instructions* tab of Fluentis MES and allows defining which types of documents should be excluded; thus, files attached to these document types will not be displayed in the *Documents and Operating Instructions* tab.     
The types of documents that can be excluded are: 
> *None*: none of the document types is excluded;   
> *ITEM*: all documents (files, images, ...) related to the item will not be displayed in the *Documents and Operating Instructions* tab;     
> *Sales Order*: all documents (files, images, ...) related to the customer order will not be displayed in the *Documents and Operating Instructions* tab;      
> *Job order*: all documents (files, images, ...) related to the job will not be displayed in the *Documents and Operating Instructions* tab;   
> *Production order*: all documents (files, images, ...) related to the production order will not be displayed in the *Documents and Operating Instructions* tab;
> *Phase of Production Order*: all documents (files, images, ...) related to the individual phase of a production order (within the *Attached Documents* tab related to the phase) will not be displayed in the *Documents and Operating Instructions* tab.          

### *Quality Controls*
Contains a series of controls related to the *Quality Control* tab of Fluentis MES.     
**Type of control to consider**: it is the document type of the item control in which the measured values will be stored;      
**Article detail to consider**: it is the highest detail of the item that is considered for testing (None, Batch, S.N., U.D.C.);     
**The phase is lockable**: upon the first non-compliant value or the average of the measured values being non-compliant, the phase itself and subsequent phases are blocked until they are unlocked by an authorized operator. In this case, the **Suspension reason of phase block** indicated in the section dedicated to suspension reasons will be used.        

### *Suspension Reasons*       
**Interruption reason to be excluded**: in this table, it is possible to indicate all the suspension reasons that one wants to exclude within Fluentis MES.

**Interruption reason proposed**: indicates the suspension reason that is used by default when an operator creates a suspension without indicating a suspension reason in the related field in the Fluentis MES *Production* tab.

**Automatic interrupt**: if enabled, it allows for automatic interruptions of declarations according to the times indicated in the work center;        
**Night break interruption reason**: indicates the suspension reason used to create the suspension for the night break;      
**Lunch break interruption reason**: indicates the suspension reason used to create the suspension for the lunch break;      
**Suspension reason of phase block**: indicates the suspension reason used to block the phases in case of non-compliance in quality controls.      

## Layout

*Specific buttons*:  

> **Complete layout**: allows activating the full layout of the MES interface with a single click;           
> **Minimal layout**: allows activating the minimal layout of the MES interface with a single click;               

In this tab, there is a series of pieces of information that influence the layout of the production resource during Production Declarations.      

**Tab sequence**       
This section allows defining whether a tab is visible or not; it is also possible to change their sequence;    

**Do not display**        
This section allows hiding various unnecessary information within Fluentis MES.

### **General**
> *Group*: if active, hides information related to the group;     
> *Sequence*: if active, hides information related to the sequence;     
> *Subphase*: if active, hides information related to the sub-phase;     
> *Work center*: if active, hides information related to the work center;     
> *Machine*: if active, hides information related to the machine;     
> *Labour group*: if active, hides information related to the labor group;     
> *Expected dates*: if active, hides information related to the expected dates;     
> *Variant*: if active, hides information related to the variant;     
> *Production order*: if active, hides information related to the production order;    
> *Job order*: if active, hides information related to the job;    
> *Project*: if active, hides information related to the project;    
> *Batches*: if active, hides information related to lot management;    
> *Serial number*: if active, hides information related to serial number management;    
> *UDC*: if active, hides information related to UDC management;    
  
### **Items produced**
> *Deposit warehouse*: if active, hides information related to the deposit warehouse of produced items in the *Production* tab;    
> *Deposit template*: if active, hides information related to the deposit reason of produced items in the *Production* tab;    
> *Payment location*: if active, hides information related to the deposit location of produced items in the *Production* tab;    
> *Waste deposit warehouse*: if active, hides information related to the scrap deposit warehouse of produced items in the *Production* tab;     
> *Scrap template payment*: if active, hides information related to the scrap deposit reason of produced items in the *Production* tab;     
> *Waste payment location*: if active, hides information related to the scrap deposit location of produced items in the *Production* tab;     
> *Alternative quantity*: if active, hides information related to alternative quantity management;  

### **Materials**
> *Picking warehouse*: if active, hides information related to the withdrawal warehouse of materials in the *Materials* tab;    
> *Template picking*: if active, hides information related to the withdrawal reason of materials in the *Materials* tab;    
> *Waste deposit warehouse*: if active, hides information related to the withdrawal warehouse of scrap materials in the *Materials* tab;    
> *Scrap template payment*: if active, hides information related to the withdrawal reason of scrap materials in the *Materials* tab;    

### **Quality Controls**

> **Sequence**: if active, hides information related to the sequence in the *Quality Controls* tab;     
> **Test Type**: if active, hides information related to the test type in the *Quality Controls* tab;     
> **Measurement Tools**: if active, hides information related to the Measuring Instrument Category and the Measuring Instruments in the *Quality Controls* tab;      
> **Tolerance limits**: if active, hides information related to Tolerance Limits (L.min.(toll-), L.min.(toll+), L.max.(toll-) and L.max.(toll+)) in the *Quality Controls* tab;     
> **Control Type and Frequency**: if active, hides information related to the Control Test Type and Frequency in the *Quality Controls* tab;        
> **Warehouse**: if active, hides information related to the warehouse in the *Quality Controls* tab;         
> **Template**: if active, hides information related to the warehouse reason for non-conforming items in the *Quality Controls* tab;       

### **Other**

*Production*
> *Machine Widget*: if active, hides information related to the machine in the *Production* tab;    
> *Defect*: if active, hides information related to the defect in the *Production* tab;    
> *Interruption reason*: if active, hides information related to the suspension reason in the *Production* tab;       

*Team*
> *Operators no more active*: if active, hides the grid related to the *List of inactive operators* in the *Team* tab;    

*Notes*
> *Notes list*: if active, hides the grid related to the *Documents attached to the report of the selected phase* in the *Documents and Operating Instructions* tab in the *Notes* tab;    

*Analysis*      
> *OEE*: if active, hides the OEE charts in the *Analysis* tab;    
> *Charts*: if active, hides the bar charts (*Quantity analysis*, *Time analysis*) in the *Analysis* tab;    
> *Grids*: if active, hides the tables (*Quantity values*, *Time Values*) in the *Analysis* tab.      

*Extra Data*
> *Extra data list*: if active, hides the grid related to the *Extra Data List (select a phase)* in the *Extra Data* tab;     

For all that is not detailed in this document regarding the common functioning of forms, please refer to the following link: [Custom Features, Buttons, and Fields](/docs/guide/common).