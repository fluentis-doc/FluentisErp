---
title: Workstation (Workstation)
sidebar_position: 3
---

:::important Purpose (A cosa serve)
The introduction to the MES workstations of Fluentis is essential for understanding how to effectively manage resources and production operations within the work environment. The MES system offers a dedicated table for coding workstations, useful for inserting, modifying, or deleting records. Through an intuitive interface, users can search for workstations using a filter area, and when entering new codes, they need to provide the code and description of the workstation.

Each workstation can be associated with different resources, depending on operational needs. For example, if multiple resource associations are planned, it will be the user's responsibility to manually select the desired resource when starting the MES. Conversely, if there is an association with only one resource, the system will automatically load all the operational phases already started for that resource, simplifying the workflow and improving efficiency.
:::

The table allows for the management of coding for the different types of *Workstation*.

It allows new records to be entered or for existing ones to be searched to view, modify, or delete them.

**Search Workstation (Ricerca Workstation)**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to view the results within the results grid.

**Insert Workstation (Inserimento Workstation)**

To insert new codes, you need to click on the first empty row in the main grid or press the **New** button and enter the following data:      
- **Code**: indicates the name of the PC that will serve as the workstation;        
:::note Note
You can obtain the PC name by running the *hostname* command from the command prompt. 
:::         
- **Description**: indicates the description of the name of the PC that will serve as the workstation.     

In the secondary grid (below the main one), it is possible to associate the *Resources* that will be able to work on each workstation.
- If only one resource (e.g., of the work center type) is associated with a workstation, the MES will automatically load that resource and all the already started phases associated with it during startup.      
Example of a workstation dedicated to a work center.        
- If multiple resources (e.g., of the work center type) are associated with a workstation, during MES startup, none will be loaded, and the user can select only one of the associated resources.      
Example of a workstation dedicated to a department where declarations from all work centers in that particular department will occur.     
- Conversely, if no resources are associated with a workstation, during MES startup, none will be loaded, and the user can select any of the resources listed in the [Production Resources (Risorse di produzione)](/docs/production/mes/production-resources) table.       
Example of a workstation dedicated to a setup operator who will declare their activities for all work centers.      

For anything not detailed in this document regarding the common functioning of the forms, please refer to the following link [Common functionalities, buttons, and fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).