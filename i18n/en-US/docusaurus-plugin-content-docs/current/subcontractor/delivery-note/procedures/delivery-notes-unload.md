---
title: Delivery DDT Unloading 
sidebar_position: 1
---

The procedure opens through the path **Subcontractor > Delivery DDT > Procedures > Unloading DDT** and allows unloading printed delivery DDTs from the warehouse that have not yet been unloaded.

## Filter

In this tab, it is possible to filter the delivery DDTs based on the subcontractor to whom they are addressed, by DDT date (From…to…), by DDT number, etc.

*Specific buttons*:
> **Search**: button to apply search filters to the entire database of inserted, checked, and not yet registered Delivery DDTs;  
> **Unload**: calls the procedure that performs the registration of the Delivery Note and thus the related warehouse movements.  

*Specific fields*: 

In the lower area of the form, a date field appears, called **Warehouse posting date**, which is set by default to the current date. The user, by changing this date, can decide that the warehouse registration is to be made on a date different from the current date.

Once the delivery DDTs to be registered have been selected, the **Unload** button on the ribbon bar can be used to perform the warehouse movements: simultaneously with this operation, the application unloads the materials to be delivered to the subcontractor from the picking warehouse and loads the same materials into the subcontractor's warehouse.


## Summary

In this tab, it is possible to perform a rollback of the delivery DDT registration operation, thus restoring the situation prior to the operation itself. In the header of this tab, there are some search filters that allow the user to select operations by filtering by unloading number (From…to…), DDT unloading date (From…to…), DDT number (From…to…).

The results are visible within the grid at the top of the window, called **Delivery Notes Unload**.  
By keeping a row selected in this grid, in the grid at the bottom of the form, it is possible to view the unloaded delivery DDTs (in the appropriate *DDT* tab), as well as the corresponding warehouse registrations that have been automatically generated from the unloading of the selected DDT in the *DDT* tab (in the appropriate *Registration* tab).

*Specific buttons*:  
> **Search**: button to apply search filters to the entire database of inserted, printed, and already unloaded Delivery DDTs.  
> **Cancel**: calls the procedure that performs the rollback of the entire unloading operation of the selected DDT in the *Delivery Notes Unload* grid; thus, if multiple DDTs have been unloaded with the same registration operation, all these DDTs will be reverted to the *not unloaded* status.  
> **Restore DN**: calls the procedure that performs the rollback of the registration of the selected DDTs in the lower grid, in the *DDT* tab.  
> **Restore**: calls the procedure that performs the simple deletion of the selected warehouse registrations in the *Registration* tab without reverting the related DDT to the *not unloaded* status. It is recommended not to use this button unless in cases of particular necessity.