---
title: Returns Record
sidebar_position: 1
---

The form opens via the path **Subcontractor > Returns > Procedures > Returns Record** and allows for the warehouse registration of returns from Subcontractors that have already been checked and not yet registered.

## Filter 

In this tab, the user has the opportunity to search for and transfer returns to the warehouse according to the available filtering criteria.

*Specific buttons*:

> **Search**: allows you to apply search filters to the entire database of Returns from Subcontractors that have been entered, checked, and not yet registered;    
> **Unload**: allows you to perform the unloading of the selected returns from the warehouse, based on unloading algorithms.

*Specific fields*:

**Document number**: in this column, the number of the return from the Subcontractor is displayed;  
**Def. doc. date**: in this column, the date of the return from the Subcontractor is displayed;  
**Warehouse posting date**: located in the lower area of the form and is set by default to the current date but can be modified.

Once the returns from the Subcontractor are selected, use the *Unload* button to execute the warehouse movements: concurrently with this operation, the application completes the loading in the returns warehouse of the items produced by the subcontractor, the unloading from the subcontractor's warehouse of the materials used, and the potential loading of returns in the designated returns warehouse.

## Summaries 

In this tab, it is possible to perform a 'rollback' of the return registration operation, thus restoring the situation prior to the operation itself.

The data in the lower grids, **Returns** and **Records**, corresponds to the selected unloading registration in the upper grid (after filtering the data).

*Specific buttons*:
> **Search**: to search for the unloaded returns. The result of this procedure is displayed in the results grid, *Returns Unload*;    
> **Restore**: Calls the procedure that performs the rollback of the entire return registration operation selected in the *Returns Unload* grid; thus, if multiple returns were registered with the same registration operation, all these returns will be reverted to the state of 'not loaded';  
> **Restore returns**: calls the procedure that performs the rollback of the registration of only the returns selected in the lower grid, in the *Returns* tab.