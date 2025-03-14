---
title: Items (Articoli)
sidebar_position: 3
---

In this tab, you can enter the items for the project. The button in the ribbon bar ![](/img/neutral/common/new.png) allows you to insert a new item row, while the button ![](/img/neutral/common/delete.png) allows you to delete it. To construct the project structure, specific buttons are available:
![](/img/neutral/common/new-child.png)  New child: allows you to insert a project row as a child of the selected row;    
![](/img/neutral/common/new-brother.png) New brother: allows you to insert a project row at the same level as the selected row;
![](/img/neutral/common/wbs.png)  Replace the WBS number: allows incorporating the Project Number into the WBS Number of the rows;
To visualize the project structure, the following buttons are available:
![](/img/neutral/common/implode.png)  Collapse: allows you to hide the structure rows;
![](/img/neutral/common/implode.png)  Expand: allows you to display the rows.

The characteristics of the item should be entered in the **Activities tab (tab Attività)** below:

**Row number/WBS number (Numero riga/Numero WBS)**: contains the row number and the WBS, and is set automatically, though it can be modified freely;       
**Projects Node Type**: indicates whether the row is a **Root Node (nodo principale)**, an **Activity Node (nodo relativo alle attività)**, or a **Work Package Node (nodo finale di progetto, l’unico che può contenere dei codici articolo specifici)**;       
**Line type**: indicates the type of item among Coded, Uncoded, Expenses, or Notes (the latter by default);      
**ITEM**: shows the Class, Code, and Description of the item if selected;        
**Description**: contains the default description of the item if selected, but it can be modified freely;           
**Work type**: identifies a project level that is not yet quoted within the organizational context (visible in offers, to separate it from activities part of the contract), thus indicating new work that has not yet been managed by the project manager but comes from various project operations;
**Sales offer item**:           
**Quantity/UM/Price (Quantità/UM/Prezzo)**: contains any data of the selected item;        
**Material Cost/Total Cost (Costo materiale/Costo totale)**: it is possible to indicate any costs;          
**Resources cost**: it is possible to indicate any cost for the resources;              
**VAT**: indicates the VAT to be applied;             
**Sales turnover type**: indicates the sales turnover of the item;            
**Level not visible**: with this flag, the level is considered complete, meaning that downstream the project branch cannot be used to associate additional activities;                       
**Activity category**: indicates any activity category set in **Tables > Project Management > Activity Category (Tabelle > Gestione Progetti > Categoria di Attività)**.

The data entered will be included in the project rows and will update as other tabs are filled out.
The information aggregates at a higher level, so the Root Node will contain the synthesis of its child branches.

In the Items tab, we also find the **Service Planning tab (tab Pianificazione servizio)**, where the data to be reported for the selected item row are:

**Start Date/End Date (Data inizio/Data fine)**: indicate the planned dates for the activity; 
> The dates will be updated automatically, provided that:
- active flag "Recalculate start-end date" in the project types table
- if the unit of measure used corresponds to the day unit in project parameters, when modifying the row quantity, the end date will be recalculated
- inserting new resources with a date earlier than the start date or later than the end date, the start-end dates will be automatically updated based on the minimum and maximum date present in the resources tab.   

**From Milestone Date/To Milestone Date (Da data Milestone/A Data Milestone)**:               
**Completed Work (percentage)/Estimate (Lavoro completato(perc.)/Stima)**: it is possible to indicate a percentage of work progress or a corresponding estimate;              
**Request Intervention Type**: a type of intervention request linked can be indicated, which will be used in the generation of new intervention requests related to the project row;              
**Planned intervention type**: a type of planned intervention linked can be indicated, which will be used in the generation of new planned interventions related to the project row;    
**Main Asset**: it is possible to link a plant, which will contain, for example, a series of information related to its maintenance project;            
**Manager**: a project resource can be indicated;          
**Forced closed**: a possible forced closure date of the project can be indicated;               
**Forced executed**:                         
**Invoicing criteria**: it is possible to choose the billing criterion of the project by choosing not to bill some activities, therefore performing a validation check; the choice is between All activities or Contractual activities; choosing the latter option, only the projected activity Quantity in the Activities tab will be considered billable, while any necessary additional activities will not be billed;               
**Invoiceable activity**: if the flag is present, it indicates that the activity is billable; the activation of this flag automatically depends on the Template entered or the registry of the Activity Category input in the Activities tab.                           

In the **Resources tab (tab Risorse)**, resources for the selected item row can be allocated:

**Insert date**: filled with the resource entry date into the project;           
**Asset**: contains the resource, previously coded;              
**Cost center**: the business unit linked to the resource is assigned, but it can be modified;               
**Units of Measure**: contains the unit of measure for quantifying the daily time of the resource;                
**Quantity**: indicates daily hours;             
**Cost per unit**: indicates the cost of the resource per single unit of measure;    
:::note[Note]
Assigning the resource in the project row, the hourly cost of the resource is proposed in the appropriate field. 
The cost will also depend on the unit of measure: 
- if the UM is hour, the value remains unchanged.
- If the UM corresponds to days (setting in Project Parameters), the conversion will be made based on the Working Hours set in resource registry. 
- If the UM is different from the two previous cases, the conversion factor will be sought, which if not present will give an error message to the user “Unable to convert the hourly unit cost of the resource with the unit of measure of the resource in the project. Resource cost in the project not calculated.”
:::

:::note[Criteria for obtaining specific costs in project row]
If the resource has a differentiated cost for overtime/public holidays, etc., the search for the corresponding cost will follow this logic: 
1. Does the start date entered in the project row fall on one of the days marked in the Calendar of non-working days? 
> If yes, the value set in “Cost type: Holiday” will be assigned - A confirmation notification will still be requested from the user.
2. If the start date does not fall within the Calendar of non-working days, the check will proceed in the grid of Expected working days for the resource
> If the start date does not fall within either the holidays or the working days for the resource, the user will be asked to update with the cost marked as “Default non-working day” if present. If there is no such marked cost, the “Overtime” cost will be considered instead. 
3. If the start date falls within one of the regular working days, it will be verified whether: 
> it falls within the main shift. 
>> If the main shift is marked as “night”, the user will be asked to update with the night cost; if it is not night, the resource head cost will be considered;
4. If it does not fall within the main shift, it will be verified whether it falls within the alternative shift.
> if the alternative shift has a dedicated cost, this value will be considered.
>> if the alternative shift is marked as “night”, the user will be asked to update with the night cost; if it is not night, the resource head cost will be considered;
:::

**Start date**: contains the date when the resource will be allocated, with the start working time;                 
**Start pause**: contains the possible date and time of break start;             
**Break end time**: contains the possible date and time of break end;                 
**End date**: contains the date when the resource will be allocated, with the end working time;                               
**Effective Time (Tempo effettiva)**: is a calculated field based on the hours of the previous columns, which also modifies the Quantity field of the same value;       
**Notes**: it is possible to insert any notes;             
**Request Intervention Type**: it is possible to enter a linked [intervention request] with its characteristics, such as Description and Number.         

Each row in this grid will contain a working day of the resource: the number of working days has been indicated in the Activities tab of the items. 

The specific button in the ribbon bar ![](/img/it-it/project-management/projects/resources-navigator.png) 
 Resource Navigator allows you to check the availability of various resources and book the days. A window will open; any dates that are booked are reported in the Resources tab and affect the project costs. 

With the button ![](/img/neutral/common/new-visit-report.png) Create Intervention Request, you can, by selecting a Resource, create the intervention request linked to the project or rollback it with the button Rollback Intervention Request.

In the **Materials tab (tab Materiali)**, the materials needed for the progress of the project are indicated, along with the characteristics of the coded items. The cost of these materials will impact the item row Cost of materials. The cost is proposed based on the setting specified in the "Cost type" field, whose default value can be set in the project parameters. In the case of "last cost" or "average cost," the reference date is the project date. 
From this screen, it is possible to create a Purchase Request directly for the Materials, via the button in the ribbon bar **Purch. demand creation**.