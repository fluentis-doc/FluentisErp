---
title: Machines 
sidebar_position: 9
---

In this table, all the machines used within the various work cycles are coded, each linked to a cost center.

The tables related to machines and labour groups are important for defining the cost of the various phases, as the hourly cost of the machine X machine time added to the hourly cost of the labour group X the hourly worker cost will yield the cost of the processing phase.

The table allows for the insertion of new records or the search for existing ones to view, modify, or delete them.

**Search Machines**

The form consists of a filter area and a results area. Once all desired filters are set, simply click on the **Search** button to view the results within the results grid.

**Insert Machines**

To insert new codes, it is necessary to click on the first empty row in the grid or press the **New** button.

For the new record in the *Machines* grid, at least the mandatory fields required by the program must be filled in: the **Code** and the **Description** of the machine. You can specify whether the machine is **Active** or not, the business center linked to the machine, etc.

*Specific fields*: 

**Machine**: machine code;  
**Description**: description of the machine;  
**Active**: indicates whether the machine is active or not, meaning if it is usable and schedulable;  
**Mobile Material Declaration**: if active, the center will be proposed in the time declaration of Fluentis Mobile; if the data is transmitted from the machine to Fluentis with other automations, this flag will be deactivated. Used only for customizations;  
**Print Label**: if active, allows printing a label;  
**Work Centers**: indicates which work center the machine is located in; It is possible to associate multiple machines to the same work center, and among these, it will be possible to choose which one to use in the ***Machine*** widget present in the [Production tab of the MES](/docs/production/mes/mes-main-form#tab-produzione); 
**Corporate Center**: indicates the cost center to which the machine refers;  
**Divisions**: indicates the code of the division in which the machine is placed;  
**Machine Class**: indicates the class of the machine (if the machine is coded as an item);  
**Machine Item Code**: indicates the item code (if the machine is coded as an item);  
**Production Site**: in the case of multiple plants, indicates the code of the production site where the machine is located;  
**Production Site Description**: indicates the description of the production site;  
**Location**:           
**Purchase Date**: indicates the purchase date of the machine;  
**Fixed Asset Classification Code**: indicates the classification code of the fixed asset;  
**Number**: indicates the number of the fixed asset;  
**Description**: indicates the description of the fixed asset;  
**Purchase Order**: indicates the number of the purchase document of the fixed asset;  
**Installation Date**: indicates the installation date of the machine;  
**Insert Date**: indicates the entry date of the machine;  
**Last Edit Date**: indicates the last edit date of the machine;  
**Cost Center Description**: indicates the description of the cost center to which the machine refers;  
**Division Description**: indicates the description of the division in which the machine is placed;  
**Item Machine Description**: indicates the item description (if the machine is coded as an item);  

<details>
<summary> The following fields are used only in the procedure for [F.C.S Scheduling (Schedulazione F.C.S)](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Working Shift**: choose the standard working shift of the machine (if you choose a shift that is larger than that of the corresponding work center, the latter will still prevail). With the exception of workers, for all other resources if there is a break in the shift it will be ignored. Only workers have a physical and legal need for a break. If the machine requires the presence of an operator, it will be forced to respect the operator's work break, so the hours that can actually be worked are limited by the operator. 
For example, if the operator's working shift is 08:00 - 12:00, 13:00 -17:00, the machine will not produce during the break, even if a shift without a break has been set for it, starting at 08:00 and ending at 17:00. The difference between setting a shift with or without a break for the machine is only in the capacity shown in the relative load histogram. In the example given, if you set a shift without a break, the histogram will show a capacity of 9 hours, but the machine will never work more than 8, because its theoretical capacity is 9 hours, but in practice it would never be able to work more than 8 hours. If you set a shift equal to that of the worker, the capacity shown on the histogram is 8 hours.       
**Working Shift Description**: indicates the description of the working shift;               
**% Efficiency**: the work time on the phase is increased or decreased based on the value of this field. For example, if it is 50%, the processing time on the machine will be double compared to what is indicated on the phase. It helps to account for the varying productivity of machines in the same center, but the same objective can be achieved using alternative machines on the phase, indicating the respective processing times;      
**% Setup Labor**: indicates the percentage of the worker's time absorbed during setup. If less than 100%, the worker can work on multiple machines simultaneously;         
**% Processing Labor**: indicates the percentage of the worker's time absorbed during production. If less than 100%, the worker can work on multiple machines simultaneously;          
**Setup Rule**: setup rule applicable to the machine (for phases with setup attributes). See the corresponding form to understand how to set the rule. This field should be used if the setup time for the machine is not negligible, and if it can vary greatly based on the change in configuration, between previous processing and subsequent processing. The scheduler can create an optimal work sequence only if it is given the ability to accurately calculate setup time, through the definition of setup attributes. Setup time is one of the elements that determine the optimal sequence, but it is generally not the only one. This time is multiplied by the hourly cost of the machine, leading to the calculation of the setup cost of a task. Through some scheduling parameters, a cost due to anticipating a job, and one due to delaying it, is calculated. An optimal sequence cannot be achieved if some tasks are either too anticipated or too delayed to reduce setup time. Thus, the optimal sequence is a compromise between the need to reduce setup time to increase machine productivity and the need not to increase work in process and not to create excessive delays in processing;         
**Grouping Rule**: grouping rule applicable (the phases must have a grouping code). See the corresponding form to understand how to set it. If a machine has a grouping rule, the relevant processes will be executed not individually but in groups having the same grouping code. The machine will be operated in sequential work sessions, in each of which only phases with the same grouping code will be treated together. In order to maximize the productivity of the machine, the scheduler will attempt to start a work session only if the phases of a grouping exceed the minimum filling limit of the machine, as established in the grouping rule, unless there is at least one phase in the group that has waited for a time exceeding the maximum allowed in the corresponding scheduling parameter. If the filling given by phases with the same grouping code surpasses the maximum limit set in the grouping rule, multiple work sessions will be created, each with its own task, seeking each time the combination of phases that maximizes the filling of the machine. This operating logic is partially modified if the machine also has a setup rule. In fact, the sequence of work sessions generated by the scheduler will attempt to optimize the machine's productivity, considering not only its filling but also the time lost in the associated setup. The productivity of a group of phases with the same grouping code is calculated by considering the total processing time (number of sessions times the duration of a session plus setup time) and the total volume of work done in that time. When there are multiple groups to choose from, the scheduler always selects the one with the highest productivity, unless there is a process in the group that has exceeded the maximum waiting time established in the corresponding scheduling parameter;          
**Scheduling setup hour cost**: scheduling setup hour cost (used to determine the sequence of operations on machines with a setup rule). This value is multiplied by the setup time calculated through the setup rule, in order to calculate the total cost of setup, which is one of the three costs considered to determine the optimal processing sequence.
**Background color**: indicates the background color used in the machine Gantt for this machine; (currently not yet implemented)       
**Text color**: indicates the text color used in the machine Gantt for this machine; (currently not yet implemented) 

</details>

In the second section, you can detail the **Sequences** of the alternative machines.

**Alternative machines**: if this tab is empty, the scheduler will only use the machine indicated in the phase, and if none is specified, it will use any available machine in the work center (among those that are free, of course). If the processing can only be executed on certain machines in the center and not on all, those indicated in this sheet will be considered along with the one in the phase.  
This tab can also be used by indicating all the machines in the center when the need is not to limit the list of machines but to provide different data for processing times.

<details>
<summary> The following tabs are used only in the procedure for [F.C.S Scheduling](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Setup Properties**: this tab allows you to define which setup properties should be considered for the machine, the coefficients to be applied for numerical attributes, setup and dismantling times if not numerical, or the eventual need to calculate transition values through the setup matrix.

**Initial Configuration**: this tab allows you to define the starting simulation values of the setup attributes (if at the time of importing the factory status the machine is not working, it is not possible to derive the values of the setup attributes from the phase in progress).

**Matrices**: this tab allows you to define the times to move from one value to another of a setup attribute when these depend on the combinations of previous and subsequent states (typical, for example, in the case of painting lines, or allergenic sequences in the food industry).

</details>

*Specific fields*:  

**Sequence**: indicates the sequence of alternative machines;  
**Machine**: indicates the machine code;  
**Machine Description**: indicates the description of the machine;  
**Active**: indicates whether the machine is active or not, meaning if it is usable and schedulable;  
**Corporate Center**: indicates the cost center to which the machine refers;  
**Cost Center Description**: indicates the description of the cost center to which the machine refers;   


For anything not detailed in this document regarding the common functionality of the forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).