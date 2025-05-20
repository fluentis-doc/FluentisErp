---
title: Work Center Capacity
sidebar_position: 2
---

:::important What it is for
The **Work Center Capacity** function in Fluentis offers a clear and immediate overview of the workloads in production centers, highlighting peaks of overload or inefficiencies. Through a form organized into four sections, operators can filter and view orders by department, date, or status (planned, launched, executive) and intervene easily using drag & drop to move, postpone, or modify operations.     
The graphical display illustrates the maximum capacity and daily commitment of the centers, allowing for a visual and interactive management of the production phases. Specific buttons make it possible to modify phases, change dates, and navigate through the detailed timeline of the workload, thereby optimizing the operational efficiency of the entire production process.
:::

The operator can obtain an immediate view of the loads of each active work center within the individual departments for a specific time period, allowing them to quickly identify any peaks of overload or production inefficiency. 
With a simple *drag & drop*, the operator can bring forward, postpone, or change the work center of an operation, and with a double click within the single capacity bar, it is possible to know in detail the information related to which work orders are occupying the center on the selected date.

This form consists of 4 sections:

- the first section allows filtering by *Division* and/or *Work Center* and displaying the results in the grid below;  

- in the second section, it is possible to filter the orders by *Start Date* and *End Date* and also decide whether to view the orders: 

> *Planned*: shows the planned production orders;               
> *Launched*: shows the production orders in the launched state;                
> *Executive*: shows the production orders in the executive state.          

Additionally, all data related to the work centers selected in the first section can be viewed.

- in the third section, it is possible to view a line for each phase of the planned and/or production orders filtered that correspond to the work centers selected in the first section, with all the relevant details.

- in the fourth section called **Details Selected Phase**, it is possible to graphically display the workloads related to the work centers selected in the first section.

**Details Selected Phase**

Within the graphical part, the orange line represents the maximum daily production capacity of the work center, while the blue represents the commitment of the work center on a certain day. The red highlights the overallocation of the center itself.
Selecting a phase in the third section will display it in yellow within the graphical section.

Moreover, through drag & drop, it is possible to select a phase from the grid and drag it into the graphical section and drop it to change the start date and consequently the end date. By selecting multiple alternative work centers, it is possible to move phases from one center to another to optimize production.

By double-clicking on the row of the phases grid, the user directly enters the document (planned order or production order) that contains the phase represented in the row from which they started, with the possibility, subject to the presence of user rights, to modify the document and see, after refreshing the view, the updated situation from a graphical perspective as well.
On the other hand, double-clicking on an element of the graph opens a pop-up containing the list of work phases that contribute to determining its commitment.

*Specific buttons*:  

> **Change phases**: once a phase is selected, this command allows to *Update* the phase by changing: phase, machine, work center, total machine time, worker time, and setup time. Additionally, by selecting the *Insert* option, it is possible to add a new phase or, through the *Delete* option, to remove it permanently;            
> **Change dates**: allows changing the start date of the selected phase;         
> **Activate mandatory**: allows you to activate the **Mandatory** flag within all selected orders;       
> **Deactivate mandatory**: allows you to deactivate the **Mandatory** flag within all selected orders;
> **Zoom in**: allows decreasing the temporal detail in the graph;          
> **Zoom to window**: allows viewing the temporal detail in the graph based on the *Start/End Dates* indicated in the filters;                    
> **Zoom out**: allows increasing the temporal detail in the graph;              
> **Zoom week**: allows viewing a time span of a week in the graph starting from the *Start Date*;              
> **Zoom 2 weeks**: allows viewing a time span of two weeks in the graph starting from the *Start Date*;     
> **Zoom month**: allows viewing a time span of one month in the graph starting from the *Start Date*;     
> **Zoom date**: allows viewing a time span by indicating *Start Date* and *End Date*.

For details on the common functioning of forms, refer to the link [Custom features, buttons, and fields](/docs/guide/common).