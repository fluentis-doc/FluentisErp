---
title: Standard Phases 
sidebar_position: 7
---

This table corresponds to the registry of phases that are used in work cycles; in this table, all phases are encoded with their respective data so that they can be proposed and selected within the work cycle.



The table allows the insertion of new records or searching for existing ones to view, modify, or delete them.

**Search Standard Phases**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to view the results within the results grid.

**Insert Standard Phases**

To insert new codes, it is necessary to click on the first empty row in the grid or press the **New** button.

For the new record, at least the required mandatory fields must be filled in: **Code** and **Phase/Subphase Description**. One of the most important data to enter in this table is the **Phase/Subphase Type**: *Internal* or *External*.


*Specific fields*:

**Code**: indicates the code of the standard phase;  
**Phase**: indicates the progressive number of the phase;  
**Subphase**: indicates the number of subphase for the same phase number;  
**Phase/Subphase Description**: indicates the description of the phase/subphase;  
**Phase/Subphase Type**: indicates whether the phase/subphase is internal or external;  
**Production Phase**: indicates whether it is a production type phase;  
**Movable**: indicates that the phase will generate warehouse movements (outflows and inflows);  
**Quality Control**: if activated, this flag indicates that this phase is subject to a series of analyses related to quality control;  
**Work Center**: indicates the code of the work center;  
**Fixed Time**: indicates that the work center operates on fixed time, the processing time of the item does not depend on the number of pieces;  
**Times MU**: indicates the unit of measure for the times of the phase;  
**Wait/Queue Time**: indicates the time required to wait at the end of the phase before it can be executed again;       
**Setup Time**: indicates the setup time;  
**Retooling Time**: indicates the reset setup time, meaning the time required to reset the machine between the production of one or more pieces;  
**Machine**: indicates the code of the machine;  
**Machine Time**: indicates the usage time of the machine in this phase;                       

**Machines Number**: indicates the number of machines involved simultaneously in the processing;  
**Pieces Number**: indicates the number of pieces produced at each execution of that phase;              
**Labour Groups**: indicates the code of the labour group;  
**Assigned Time**: indicates the time spent by the labour in that phase;            
**Workers Number**: indicates the number of workers performing the phase;           
**Maintenance**: indicates whether the phase is maintenance-type;        
**Cost**: indicates the cost of the phase for producing the pieces indicated in the Number of Pieces field;    
**Subcontractor Account**: indicates the code of the subcontractor account;  
**Subcontractor Detail Account**: indicates the code of the subcontractor detail account;  
**Subcontractor Description Account**: indicates the description of the subcontractor;  
**Control Plan Type**: indicates the type of plan for quality control;  
**Control Plan Year**: indicates the year of the quality control plan;  
**Control Plan Code**: indicates the code of the quality control plan;  
**Control Plan Description**: indicates the description of the quality control plan;  
**Creation Date**: indicates the date of record creation;  
**Date Modified**: indicates the date of the last modification of the record;  
**Notes**: Free field for entering notes;  
**Work Center Descriptio**: indicates the description of the work center;  
**Machine Description**: indicates the description of the machine;  
**Labour Group Description**: indicates the description of the labour group;  
**Location**: indicates the warehouse location associated with that phase; this means that all items used in that phase will be present in that location.           

:::note Note
All external phases must always have the **Production Phase** and **Movable Phase** flags active.
:::

For everything that is not detailed in this document about the common operation of forms, please refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).