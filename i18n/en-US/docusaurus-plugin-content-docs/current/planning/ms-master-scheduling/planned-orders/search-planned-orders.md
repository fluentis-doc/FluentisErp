---
title: Planned Order Search 
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Specific buttons*:

> [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): through this button you can open the screen related to the MRP parameters of the item;             
> [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): allows you to open the screen related to the bill of materials of the item;  
> [Work Cycles](/docs/erp-home/registers/production/routes/new-route): allows you to view the work cycle and the related production phases of the item.
> **Activate mandatory**: allows you to activate the **Mandatory** flag within all selected planned orders;       
> **Deactivate mandatory**: allows you to deactivate the **Mandatory** flag within all selected planned orders.  

*Specific fields*:

**Start Date**: for planned purchase or job orders, it represents the date on which the purchase order that will be subsequently generated with the release of the order itself must be sent to the supplier. For planned production orders, this date represents the expected start date of the first processing phase of the article's cycle;  
**FOB Date** (free on Board): represents the date calculated by adding the *Expected Start Date* to the *Procurement Time* entered in the [Preferential Vendors](/docs/erp-home/registers/items/create-new-item) tab of the item in the planned order, and is managed only for items with procurement type *Purchase*;  
**ETA Date** (Estimated Time of Arrival): represents the date calculated by adding the *FOB Date* to the *Shipping Lead Time* also entered in the *Preferred Suppliers* tab of the item in the planned order, and is managed only for items with procurement type *Purchase*;      
**End Date**: for planned purchase or job orders, it represents the date by which the supply must be received and therefore will coincide with the expected receipt date of the line item of the supplier order that will be subsequently generated with the release of the order itself. For planned production orders, this date represents the expected end date of the last processing phase of the article's cycle;  
**From Minimum Availability**: the flag is active only if the planned order has been generated using the *General Scheduling procedure and if, in the [Scheduling Parameters](/docs/planning/ms-master-scheduling/general-schedule), the flag that allows *Considering minimum availability during the period* is active. This flag activates when the *Minimum Availability Date* in the scheduling period is later than the requirement date; otherwise, it will be disabled;            
**Confirmed Quantity**: is non-zero only if the order is generated from the MRP processing;  
**Committed Quantity**: is the quantity that is committed as of the current date for the item;  
**Compulsory**: if active, the flag indicates that the planned production order is not movable concerning the start date set within it.

Within the grid, orders will be displayed in different colors based on the *Type of Planned Order* (whether for purchase, production, or job orders). This setting is provided within the [Material Requirements Parameters](/docs/configurations/parameters/production/resource-requirements-parameters), in the corresponding grid where you can choose the background color of the row or the text of the different orders.

From this form, it is also possible to insert a new order by clicking on the button [Insert Order](/docs/planning/ms-master-scheduling/planned-orders/new-planned-order).