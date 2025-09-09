---
title: MES
sidebar_position: 5
---

:::important What It Is For
The main form of the Production Execution Module (MES) by Fluentis is designed to optimize and simplify the process of declaring production activities. This interface enables operators to monitor and manage production resources in real time, facilitating the entry of data related to processing phases and quantities produced.

Operators can easily manage data entry and modifications, thanks to features such as the barcode Tokenizer and the enabling of specific controls to ensure the accuracy of registrations. Additionally, the system supports various methods for allocating time and quantities, allowing for detailed analysis of production performance and ensuring efficient management of the resources used.

This integrated approach not only improves operational visibility but also contributes to optimizing workflows and the overall productivity of the business.
:::

## *Specific Buttons*:  

**Navigation**
> *Previous*: allows moving to the previous tab;    
> *Next*: allows moving to the next tab;    
> *Update*: allows updating all data in the form, to be used in case any modifications have been made to the utilized resource;      
> *Clear selection*: allows canceling the selections of phases present in the main grid.     

**Confirm Report**
> *Start*: allows creating an opening production report;    
> *Advance*: allows creating an advancement production report;    
> *Suspend*: allows creating a suspension production report;    
> *Resume*: allows creating a resumption production report;    
> *Close*: allows creating a closing production report;    
> *Cancel*: allows resetting all data entered in Fluentis MES.                   

## Main Form

The main form consists of a section with the following fields and a grid containing the ongoing phases: 

- **Barcode**      
Most of the operations that can be performed in Fluentis MES can be facilitated and accelerated using the *Barcode* field, which, if appropriately configured, intelligently reprocesses the data acquired through barcode reading and autonomously inserts the values into the corresponding fields.    
This gives a significant advantage to the operator in terms of speed of entry and efficiency, as they will always read data in the same *Barcode* field without having to change focus.     
Barcodes can be configured within the Barcode tokenizer form, located in: Tables > General Settings > Barcode tokenizer.               
Therefore, this *Barcode* field in the MES can be used by the operator to add individual phases or groups of phases, or, for example, even the phases of an entire production order, or also load batches and/or serial numbers of the materials to be removed, all simply by reading the various barcodes. 

For all information on how to encode barcodes to be read in the **Barcode** field, refer to the related page on [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

- **Workstation**      
The procedure is capable of recognizing the workstation on which it is working, and if a work center has been associated with it, it will automatically load all the phases that were being worked on at that work center. At that point, the operator can choose whether to proceed with the report of those phases or, for example, to add others. All further information can be found in the section dedicated to [Workstation](/docs/production/mes/workstation).     

- **Resource**      
The *Resource* field is used to enter any type of production resource.     
If a resource of type *Work Center* is entered, it will automatically be replaced in the related *Work Center* field, consequently loading the phases related to the newly entered center.    
If, however, a resource of type *Employee* is entered, this will be used as the reporting user. The entry of an employee-type resource is mandatory if the flag *Required Operator* is active in the *General* tab of [Production Resources](/docs/production/mes/production-resources).        

- **Work Center**
Indicates the work center on which the operator is making the declaration; it is possible to view only the work centers linked to the *Workstation*. If the *Workstation* has not been entered, or no *Work Center* has been associated with the *Workstation*, all *Production Resources* of type *Work Center* will be displayed.    

- **Ongoing Phases**
Phases can be added within the grid using the *Barcode* field or by using the specific button *Select New Phases* present in the right menu. The grid contains a series of information related to the job, production order, project, variant, etc. 
All this information can be made visible or hidden through management in the *Layout* tab of [Production Resources](/docs/production/mes/production-resources).   
For the selected row, on the right side of the grid, it is possible to view the default image inserted in the [Item Registry](/docs/erp-home/registers/items/create-new-item); additionally, with a double-click, it will be displayed in full screen.       

### Production Tab      

*Specific Buttons*:

> *Clear resource*: allows removing the value entered in the *Resource* field;    
> *Select new phases*: allows opening help to select new phases to add to those present in the main grid.
In the case of a multi-phase center, if there are already phases (that have already started), it is possible to add more only if the already inserted phases are in a state of *Started* or *Suspension*; otherwise, it is necessary to first bring the phases to a suspended state before additional phases can be added.  
If, for example, there is a phase in a suspended state and the user adds a phase that has not yet started, the procedure will automatically create the start and suspension declaration for the newly added phase with the same date and time; at this point, the user can continue processing for all phases using the *Resumption* button. If, however, the added phases are in a state other than not started, they will be aligned to the *Suspension* state. Upon *Resumption*, the newly added phases will acquire the information of the Work Center and Machine used for the originally present phases.      
> *Delete phase*: allows removing the selected phase(s) from the main grid.    

The **Production** tab is dedicated to entering information related to production/setup times and the quantities produced/discarded. This is the only tab that cannot be made invisible and consists of the following fields:
> **Machine**: in this field, the *Machine* indicated in the *Work Center* is proposed by default if the phase has yet to begin. If declarations have already been entered, it proposes that from the previous declaration. Additionally, it can still be changed manually, but only with one of the alternative machines indicated in the registry of the main machine;      
> **Working time**: allows viewing/modifying the working time manually; its behavior can be varied through the flags *Manual time entry* and *Proposed time* present in [Production Resources](/docs/production/mes/production-resources). The time is automatically calculated as the difference between the current declaration time and the previous one;                   
> **Setup time**: allows entering/modifying the setup time manually;         
> **Quantity produced**: allows entering the quantity produced with that declaration;         
> **Alternative quantity**: allows entering the alternative quantity produced with that declaration;      
> **Warehouse for input**: indicates the warehouse for raw products made with the declaration;       
> **Input reason**: indicates the input reason for raw products made with the declaration;       
> **Input location**: indicates the input location for raw products made with the declaration;       
> **Warehouse for scrap input**: indicates the warehouse for removing products made and discarded with the declaration;       
> **Scrap input reason**: indicates the reason for removing products made and discarded with the declaration;       
> **Scrap input location**: indicates the unloading location for products made and discarded with the declaration;       
> **Defect**: indicates the defect of unloading products made and discarded with the declaration; a dedicated control can be activated through the flag *Defect mandatory if declared scrap* present in [Production Resources](/docs/production/mes/production-resources);           
> **Suspension reason**: indicates the suspension reason that is used in the declaration; if an operator creates a suspension without indicating the suspension reason, the default reason specified in the *Proposed suspension reason* field present in the form of [Production Resources](/docs/production/mes/production-resources) will be used.       

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).      

### Quality Control Tab

*Specific Buttons*:

> *Select items*: allows selecting which items to enter in the quality control table among those produced or discarded;       
> *Import all*: allows inserting all produced or discarded items into the quality control table;     
> *Delete control*: allows deleting the selected control;           
> *Duplicate test*: allows duplicating the selected test;       
> *Delete test*: allows deleting the selected test.   

This tab allows managing quality controls for produced and/or discarded items. 

Rows can be entered into the *Quality Controls* table using the two specific buttons.          
This table contains the following data:
> *Class*: indicates the class of the item;          
> *Item code*: indicates the item code;          
> *Variant*: indicates the variant of the item;    
> *Detail of the item to consider*: indicates the maximum detail of the item being considered for testing (None, Lot, S.N., U.D.C.). This is selected in the *Quality Controls* tab of the management of [Production Resources](/docs/production/mes/production-resources);             
> *Detail reference*: indicates the value of the *Detail of the item to consider*, for example, the lot number;          
> *M.U.*: indicates the unit of measure of the item;    
> *Quantity*: indicates the quantity of the item;    
> *Scrap*: if active, indicates that the indicated quantity is of scrap type; if not active, it indicates that the quantity produced is not scrap;             
> *Description of the item*: indicates the description of the item;          
> *Variant description*: indicates the description of the variant.      

If in the production order related to that phase, the phase is subject to quality control and we have already associated a control plan (which is inherited from the phase of the standard work cycle, but of course can be manually varied both in the planned order and in the production order), the tests related to the indicated control plan will automatically be displayed within the *Tests* table.      

The *Tests* table consists of the following fields:         
> *Sequence*: indicates the sequence of tests to be performed;          
> *Type of Test*: indicates the code of the test to be performed;         
> *Description of type of test*: indicates the description of the test to be performed;           
> *Category of instrument*: indicates the category of the instrument used;        
> *Value type*: indicates whether the value is of type *Text*, type *Yes/No*, or type *Numerical*;      
> *Limit type*: allows indicating a *Limit type*; it is enabled only if the *Value type* is *Numerical*;       
> *Value Unit of Measure*: indicates the unit of measure of the values;           
> *Nominal value*: indicates the numeric value that the test should have;      
> *Minimum Limit* / *Maximum Limit*: indicate the minimum and maximum error limits that can have the test, in percentage or absolute value based on the flag *%*; the *Minimum Limit* is subtracted from the *Nominal value*, while the *Maximum Limit* is added;       
> *L. min (toll-/+)* / *L. Max (toll-/+)*: indicates the tolerances on the minimum and maximum limits that are added to the previous tolerances; it may be present, for example, the uncertainty on the unit of measure; it is a percentage value;                
> *%*: indicates whether the values are expressed in percentage or absolute;               
> *Type of test control*: indicates the type of control of the test;        
> *Frequency*: indicates the frequency of the control;       
> *Measuring instrument*: indicates the instrument used, in case there are values to be detected; it consists of a Code/Category;      
> *Detected value*: indicates the detected value (used if I have a point value);      
> *Average of detected values*: indicates the average of the detected values (populated based on the values entered in the **Multiple Value Detection** table);      
> *Outcome*: indicates the outcome of the test and is determined automatically based on the parameters entered;       
> *Non-conforming quantity*: indicates the quantity that has been detected as non-conforming;        
> *Warehouse*: indicates the warehouse where non-conforming items are present; this value is automatically reported based on what is indicated in the *Type of item control*;                    
> *Warehouse template for non-conforming items*: indicates the reason with which non-conforming items will be removed; this value is automatically reported based on what is indicated in the *Type of item control*. This transaction is made at the time of registering the production declaration;                    
> *Notes*: allows inserting a free note.       

The **Multiple Value Detection** table is used if multiple values are detected, and these will contribute to determining the *Average of Detected Values*.
This consists of the following columns:
> *Sequence*: indicates the sequence of detected values;      
> *Position*: is a descriptive field that indicates in which position the measurement was taken;       
> *Measuring instrument*: indicates the instrument used for that detection;            
> *Detected value*: indicates the detected value;            
> *Notes*: allows inserting a free note.  

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources). 

Greater details on the area related to quality management are present in [Quality](/docs/quality/quality-intro).          

### Batches and S/N Tab

*Specific Buttons*:

> *Generate*: allows generating batches and serial numbers;        
> *Delete*: allows deleting the selected batch/serial number.       

In this tab, all articles produced are displayed along with the indications of the relevant produced and discarded quantities; furthermore, through the appropriate grids, it is possible to enter/modify information relating to *Batches* and *Serial numbers*.         

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).     

### Labels Tab

*Specific Buttons*:

> *New*: allows creating a row for entering a new label;          
> *Delete*: allows deleting the row of the selected label;       
> *New UDC*: allows regenerating the code of the selected UDC;      
> *Print selection*: allows printing only the selected labels;       
> *Print all*: allows printing all labels.          

In the **Labels** tab, labels related to produced items are automatically created.
The quantity of items for each label is determined by the information entered in the item registry as follows:
1. Tab *Packaging*: considers the UDC and the quantity entered in the row with the flag "Mandatory loading unit" active;       
2. Tab *Weight/Dimensions*: considers the UDC and the quantity entered in the *Type of loading unit* and *Number of items per loading unit* fields;    
3. Tab *Weight/Dimensions* > *Number of packages*: considers the quantity entered in *Items in a package*; in this case, the UDC will not be proposed.

Additionally, the operator can manually enter or via the *Barcode* field *Batches* and *Serial numbers* if necessary.      
The **Print Status** field can take the values of *Not printed*, *Printed*, or *Reprinted* based on the number of times the label has been printed.

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).     

### Materials Tab

In the **Materials** tab, the materials consumed are automatically reported based on the quantity of the parent item to be produced and its bill of materials; only if the flag **Mandatory material quantity declaration** present in the *General* tab of the management of [Production Resources](/docs/production/mes/production-resources) is active, the material will be proposed highlighted in yellow with a quantity of zero, and the operator will be forced to enter it manually.   
Moreover, it is possible to indicate the discarded quantities of each individual material, including warehouse and reason for scrap; through the appropriate grids, it is possible to enter/modify information relating to the *Batches* and *Serial numbers* related to the selected material.            

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).     

### Team Tab

*Specific Buttons*:

> *Join team*: allows adding one or more operators to the work team;        
> *Leave team*: allows removing one or more operators from the work team;      
> *Replace operator*: allows replacing an active operator with another while maintaining the entry and exit dates/times from the team;        
> *Remove from team*: allows removing the row related to the selected operator.        

The **Team** tab consists of two sections:
> Active operators list: allows inserting and viewing the operators active in the production declaration; the first operator inserted assumes the flag of *Team Leader* (which can be changed manually);            
> Inactive operators list: allows viewing operators who are no longer active (who have worked on this or these phases in previous declarations).

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).  

### Analysis Tab

The **Analysis** tab is dedicated to the visualization and consultation of data related to the performance of production activities; it consists of three sections:
- OEE Diagrams
- Bar charts: **Quantity Analysis** and **Time Analysis**
- Tables: **Quantity Values** and **Time Values** 

**OEE**, **Overall Equipment Effectiveness** (Overall efficiency of the production resource) is a performance index (KPI) to measure the productive capacity of a production company.

The **OEE** value is made up of the following three factors:
- **Operational Availability (Availability)**: percentage of worked time (B) compared to available time (A).
It uses the ratio between the available working time of the plant (A) relative to the actual time the plant has produced (B).
- **Processing Times (Performance) - Efficiency**: percentage of actually processed items (D) compared to theoretically processable items (C).
In planning, the items that can be processed at optimal conditions (C) are calculated; any reductions in such performance indicate a drop in productivity (D).
- **Product Quality (Quality)**: is the percentage ratio of conforming items (F) compared to items produced (E).
It highlights declines in productivity related to scraps or rework that impact overall inefficiency.
- **OEE**: comes from calculating the previous three analyses and is given by: 

OEE = Availability x Performance x Quality x 100 = B/A x D/C x F/E x 100

The **Overall Efficiency** index can be calculated with or without setup.

In the bar chart section, there are **Quantity Analysis** and **Time Analysis** charts in which the declarable planned quantities and times and those reported thus far can be visualized.

In the tables present in the last section, it is still possible to view the declarable planned quantities and times and those reported thus far, but in this case in the form of tabular data.

The data reported in all sections of the **Analysis** tab are related to the selected phases, if no phase is selected, the reported data will represent the total of all phases present in the grid *Ongoing Phases*.

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).  

### Documents and Operating Instructions Tab

This tab consists of the **Documents** and **Operating Instructions** sections.

The **Documents** section is further divided into:
> **Documents attached to the selected phase**: allows viewing all documents attached to the *Item Registry*, *Customer Order*, *Production Job*, *Production Order*, in accordance with what is indicated in the *Document Management* tab present in [Production Resources](/docs/production/mes/production-resources);       
> **Documents attached to the report of the selected phase**: allows consulting or directly attaching new documents to the declaration even through drag & drop;       
> **Operating Instructions**: allows viewing all documents attached to the phase of the production cycle.          

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).  

### Notes Tab

The tab consists of two sections:            
> **Notes List (select a phase)**: allows consulting and viewing notes related to the selected phase; the notes displayed in this table are taken directly from the phases of the work cycle and more precisely from the *Annotations* tab;                
> **Report notes list**: allows inserting and consulting notes related to the ongoing declaration.     

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).  

### Previous Reports Tab

This tab allows viewing all previous reports related to the selected phase.

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).  

### ExtraData Tab

This tab consists of two grids:
> *Extra Data List (select a phase)*: allows managing the extra data related to the selected phase;       
> *Extra Data Report List*: allows managing the extra data related to the declaration being performed.       

It is possible to modify the functionality and layout of the form through the management of [Production Resources](/docs/production/mes/production-resources).