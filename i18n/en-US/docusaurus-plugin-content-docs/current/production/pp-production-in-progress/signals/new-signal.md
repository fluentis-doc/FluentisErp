---
title: New Declaration 
sidebar_position: 2
---

Normally, the *Production declarations* are generated automatically through Fluentis [MES](/docs/production/mes/mes-intro), but the user also has the option to generate them manually using this form.

Upon opening the form, it is necessary to enter the production order and the corresponding phase/sub-phase that you want to declare. In this way, the relevant data is automatically loaded at the top of the form.

In the central grid, the lines of the production declaration must be entered. The first data to enter is the *Declaration Status*, which can take the following values:

- *Opening*: allows you to create an opening production declaration;    
- *Interruption*: allows you to create a suspension production declaration;    
- *Resumption*: allows you to create a resumption production declaration; it should only be entered after a *Suspension*;          
- *Progress*: allows you to create a progress production declaration;    
- *Closing*: allows you to create a closure production declaration;    

Each production declaration must have as the first row an opening declaration that determines when the processing begins.              
This can be followed by a progress or directly by a closure depending on the cases. The substantial difference is that the closure does not allow for additional declaration lines, while the progress does.         
Additionally, it is also possible to enter suspension declarations followed by a resumption declaration in case it is necessary to stop production for some reason.

*Specific Buttons*:  

> **Save**: allows you to save the changes made;        
> **New production declaration**: allows you to insert a new line of the declaration;                 
> **Recompute Machine Time**: allows you to recompute the machine time for all declaration lines;          
> **Recompute Worker Time**: allows you to recompute the worker time for all declaration lines;          
> **Insert declarations**: allows you to insert a new declaration line after those already entered;         
> **New interruption/resumption**: allows you to simultaneously insert a suspension line and a resumption line by specifying the date and time for each in the pop-up; the button is activated only if the last status of the declaration is *Opening* or *Progress*;
> **Delete Declarations**: allows you to delete the selected declaration line;             
> **Open Loading Unit**: allows you to open the *Load Unit Management* filtered by the load unit related to the selected declaration line;          
> **Create Loading Unit**: allows you to create a load unit related to the selected declaration line. To create it, it is necessary first to manually enter *Load Unit Type* and *Employee*;
> **Registration of Declarations**: allows you to create the warehouse movement registration related to the selected declaration line;          
> **Restore Declarations**: allows you to cancel the warehouse movement registration related to the selected declaration line.                                     

*Specific Fields*: 

**Registered**: indicates that the declaration line has been registered and the related warehouse movement has been created;        
**Date**: indicates the start date related to the declaration line;         
**Hour**: indicates the start time related to the declaration line;         
**Number**: is a progressive number assigned to each declaration line (always starts from 1);        
**Declaration state**: allows you to define the status related to the declaration line. It can assume the following values: *Opening*, *Interruption*, *Resumption*, *Progress*, or *Closing*;        
**Suspension reason**: allows you to indicate the reason for suspension to be used for the related declaration line. It is enabled only if the *Declaration Status* is of type *Suspension*;     
**Batch**: allows you to manually enter the lot number related to the quantity produced;    
**Quantity produced**: indicates the produced quantity related to the declaration line;         
**Alternative Measurement Unit**: indicates the alternative unit of measure used;     
**Alternative quantity**: indicates the quantity produced in the alternative unit of measure used;       
**Deposit warehouse**: indicates the deposit warehouse for the produced quantity;         
**Deposit template**: indicates the deposit reason used for the produced quantity;         
**Depos. location**: indicates the deposit location for the produced quantity;         
**Scrapped quantity**: indicates the scrap quantity related to the declaration line;        
**Scrap Warehouse**: indicates the warehouse for the deposited scrap quantity;      
**Scrap Reason**: indicates the scrap reason used for the deposited scrap quantity;       
**Scrap location**: indicates the location for depositing the discarded quantity;        
**Defect**: allows you to enter the defect related to the discarded quantity. It is enabled only after a value greater than zero has been entered in the **Scrap Quantity** field;        

**Consumption warehouse**: indicates the warehouse for depositing the consumption quantity;      
**Consumption template**: indicates the reason for deposit used for the consumption quantity;       
**Consumption location**: indicates the location for depositing the consumption quantity;

**Machines**: indicates the number of machines; indicates the description of the deposit reason for the produced quantity;             
**Machine number**: indicates the number of machines used related to the declaration line;        
**Labour Group**: indicates the code of the workforce group used related to the declaration line;         
**Workers number**: indicates the number of workers used related to the declaration line;        
**Production site**: indicates the code of the production site related to the declaration line;     
**Machine Minutes**: indicates the machine time in minutes related to the declaration line; it is calculated as the difference between the *date/time* of the current declaration and that of the previous declaration;           
**Manpower Minutes**: indicates the manpower time in minutes related to the declaration line; it is calculated as the difference between the *date/time* of the current declaration and that of the previous declaration;              
**Setup Minutes**: indicates the setup time in minutes related to the declaration line; it is entered manually;           
**Employee**: indicates the code of the user making the declaration;             
**Surname**: indicates the last name of the user making the declaration;            
**First Name**: indicates the first name of the user making the declaration;           
**Loading Units**: indicates the load unit number, composed of year, production order number, and a progressive number;                
**Load Unit Type**: indicates the type of load unit;     
**Load Unit Type Description**: indicates the description of the load unit type;         
**Loading unit number**: indicates the load unit number;    
**Unload Load Unit**: **Work in progress**       
**Height**: indicates the height of the load unit;    
**Width**: indicates the width of the load unit;    
**Depth**: indicates the depth of the load unit;    
**Suspension Reason Description**: indicates the description of the *Suspension Reason* used in the declaration line;                       
**Deposit Warehouse Description**: indicates the description of the deposit warehouse for the produced quantity;         
**Deposit Reason Description**: indicates the description of the deposit reason for the produced quantity;      
**Scrap Warehouse Description**: indicates the description of the warehouse for the deposited scrap quantity;      
**Scrap Reason Description**: indicates the description of the scrap reason for the deposited scrap quantity;      
**Machine description**: indicates the description of the machine used;            
**Labour group description**: indicates the description of the workforce group used;              
**Production Site Description**: indicates the description of the production site used.

The lower part of the form consists of a series of tabs related to the selected declaration line.

## Materials

In this tab, the materials used in the phase for the production of the article are reported automatically, but the user can modify the data and/or add further materials based on needs.      
Of course, for the materials to be reported automatically, the phase must be the last of type *Production* and *Movable* present in the cycle; if it is not the last, it must still be of type *Production* and *Movable* and must have materials assigned to it directly.  

*Specific Fields*: 

**Registered**: indicates that the material of the line of the selected declaration has been registered and the corresponding warehouse movement has been created;     
**Material Load Unit**: allows you to indicate the load unit from which the material is withdrawn;             
**Class**: indicates the class of the article;         
**Item code**: indicates the article code;         
**Variant**: indicates the variant code of the article;         
**Units of Measure**: indicates the main unit of measure of the material;        
**Picked quantity**: indicates the quantity retrieved through the procedure [Material Picking List](/docs/production/pp-production-in-progress/picking-materials-list);  
**Consumption quantity**: indicates the quantity of material used;         
**Alternative Measurement Unit**: indicates the alternative unit of measure of the material;        
**Alternative quantity**: indicates the quantity of material used in the alternative unit of measure;        
**Consumption Warehouse**: indicates the code of the consumption warehouse of the material;         
**Consumption Reason**: indicates the code of the consumption reason of the material;         
**Consumption location**: indicates the code of the warehouse location for the consumption of the material;
**Scrapped quantity**: indicates the scrap quantity of the material;     
**Scrap Warehouse**: indicates the code of the scrap warehouse of the material;     
**Scrap location**: indicates the code of the scrap warehouse location for the material;
**Scrap Reason**: indicates the code of the scrap reason of the material;     
**Item description**: indicates the description of the article;        
**Variant description**: indicates the description of the variant of the article;        
**Consumption Warehouse Description**: indicates the description of the consumption warehouse of the material;        
**Consumption Reason Description**: indicates the description of the consumption reason of the material;        
**Scrap Warehouse Description**: indicates the description of the scrap warehouse of the material;        
**Scrap Reason Description**: indicates the description of the scrap reason of the material;        
**Priority**: indicates the priority with which the materials are displayed.        

Additionally, in the lower part, it is possible to enter lots and also serial numbers in the respective grids.

The *Lots* grid consists of the following columns:

**Batch**: indicates the lot number of the selected material;        
**Vendor batch code**: indicates the supplier lot number of the selected material;         
**Quantity**: indicates the quantity of the selected material for that lot;         
**Location**: indicates the location of that lot of the selected material;     
**Start date**: indicates the start date of the lot of the selected material;         
**Expiry date**: indicates the expiration date of the lot of the selected material;         
**Account/Detail account/Account Description**: indicates respectively the account, detail account, and description of the customer/supplier of the selected material.   

The *Serial Numbers* grid consists of the following columns:

**Barcode**: the barcode code displays the serial number and other related information. For all information on how to encode the barcodes to be read in this field, consult the page related to the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer);          
**Serial Number Type**: indicates the type of serial number of the selected material;    
**Serial number**: indicates the serial number of the selected material;    
**Start date**: indicates the start date of the serial number of the selected material;    
**Cancelled**: indicates that the serial number is in the cancelled state;      
**Batch**: indicates the lot code of the serial number of the selected material.             

## Team

This tab allows managing the team members who perform the work related to the selected declaration line by indicating the start and end date of work for each.

*Specific Fields*: 

**Code**: indicates the code of the operator working on the declaration;             
**Surname**: indicates the last name of the operator working on the declaration;     
**First Name**: indicates the first name of the operator working on the declaration;        
**Team Leader**: indicates that this operator is also the team leader;      
**Task**: indicates the activity the operator is performing;        
**Description**: indicates the description of the activity the operator is performing;      
**Rig**: indicates that the time worked by the operator will be calculated as setup time in subsequent analyses;       
**Start date**: indicates the start date of the operator's work;         
**Start hour**: indicates the start time of the operator's work;         
**End date**: indicates the end date of the operator's work;         
**End hour**: indicates the end time of the operator's work;         
**Creation date**: indicates the creation date of the record;         
**Last edit date**: indicates the last modified date of the record;         
**User**: indicates the user who created the record.

## Alternative Articles

This tab allows adding and managing all those articles (spin-offs) that are produced as a consequence of producing a main article.       
So, it is possible to enter them in the dedicated grid with the ability to also manage the related batches and serial numbers.  
Of course, the batches and serial numbers refer to the line of the selected alternative item.  
The loading movements of the alternative items will be carried out with the warehouse, reason, and location indicated on the line.

The *Lots* grid consists of the following columns:

**Batch**: indicates the lot number of the article;  
**Batch code type**: indicates the lot code type of the article;         
**Lot Type**: indicates the lot type of the article;         
**Vendor batch code**: indicates the supplier lot number of the article;       
**Notes**: allows you to enter a note related to the lot;                 
**Quantity**: indicates the quantity of the article for that lot;         
**Location**: indicates the location of that lot of the article;     
**Start date**: indicates the start date of the lot of the article;         
**Expiry date**: indicates the expiration date of the lot of the article;         
**Account/Detail account/Account Description**: indicates respectively the account, detail account, and description of the customer/supplier of the article.   

The *Serial Numbers* grid consists of the following columns:
    
**Serial Number Code**: indicates the serial number of the article;      
**Serial Number Type**: indicates the type of serial number of the article;  
**Serial number client**: indicates the customer's serial number for that article;      
**Serial number supplier**: indicates the supplier's serial number for that article;      
**Start date**: indicates the start date of the serial number of the article;    
**Cancelled**: indicates that the serial number is in the cancelled state;      
**Batch**: indicates the lot code of the serial number of the article.             

## Suspensions

This tab allows specifying multiple suspension reasons with their corresponding minutes and is enabled only in correspondence with a line whose declaration status is *Suspension*.

## Scrap

This tab allows specifying multiple warehouses and scrap reasons with their related quantities and is enabled only if a scrap quantity is declared.  

## Extra Data

Allows managing and visualizing the Extra Data related to the declaration.

For an in-depth description of the extra data, please refer to the article [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata).

## Lots and Serial Numbers

In the **Lots and Serial Numbers** tab, during the registration of the production declaration, the lots and serial numbers of the items produced are automatically reported based on the logic indicated in the [Lots and Serial Numbers](/docs/erp-home/registers/items/create-new-item#17-lotti-e-serial-number) tab of the item registry.      
If a lot is indicated in the lot field of the declaration line, the produced items will be registered with this lot number, which takes priority over the rules entered in the registry.

The *Lots* grid consists of the following columns:

**Batch**: indicates the lot number of the article;  
**Batch code type**: indicates the type of lot code of the article;         
**Lot Type**: indicates the type of lot of the article;         
**Vendor batch code**: indicates the supplier lot number of the article;       
**Notes**: allows you to enter a note related to the lot;                 
**Quantity**: indicates the quantity of the article for that lot;         
**Location**: indicates the location of that lot of the article;     
**Start date**: indicates the start date of the lot of the article;         
**Expiry date**: indicates the expiration date of the lot of the article;         
**Account/Detail account/Account Description**: indicates respectively the account, detail account, and description of the customer/supplier of the article.   

The *Serial Numbers* grid consists of the following columns:
    
**Serial Number Code**: indicates the serial number of the article;      
**Serial Number Type**: indicates the type of serial number of the article;  
**Serial number client**: indicates the customer's serial number for that article;      
**Serial number supplier**: indicates the supplier's serial number for that article;      
**Start date**: indicates the start date of the serial number of the article;    
**Cancelled**: indicates that the serial number is in the cancelled state;      
**Batch**: indicates the lot code of the serial number of the article.             

For details on the common functionality of the forms, please refer to the link [Custom features, buttons, and fields](/docs/guide/common).