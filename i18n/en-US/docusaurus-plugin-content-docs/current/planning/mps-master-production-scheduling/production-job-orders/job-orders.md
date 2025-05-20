---
title: Production Job Order
sidebar_position: 2
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

Based on the status of the job order (thus scheduled, executive, etc.), the line of the job order will have a different color. The colors that can be matched to the status of the order are established within the [MPS Parameters](/docs/configurations/parameters/production/mps-parameters), in the *Job Orders colors* section.

From this form, it is also possible to *create new job orders*, both **monoproduct** and **multiproduct** by clicking on the respective buttons available in the *Ribbon Bar*: [Insert job order](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) and [Insert multiproduct job order](/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order).

By double-clicking on one of the job orders present in the results grid, you will enter the details of the job order, whose data will be further explored in the articles *Insert New Monoproduct Job Order* and *Insert New Multiproduct Job Order*.

The *Valorized* column, if the flag is active, indicates that the job order already has at least one costing within it.

*Specific buttons*:

> **Edit Job Order Date**: allows you to change the *ready goods date* and the *expected end date* of the selected job orders by simply indicating the date in the pop-up and confirming;
> **Duplicate Job Order**: allows you to duplicate the selected job order;         
> **Change priority**: allows you to change the priority assigned to the job order;               
> **Activate Mandatory**: allows you to activate the **Mandatory** flag within all selected job orders;      
> **Deactivate Mandatory**: allows you to deactivate the **Mandatory** flag within all selected job orders;      
> **Work Center Capacity**: this button accesses the window related to the capacities of the work centers; in this window, it is possible to view the commitments of that center by filtering by work center and desired time period through a graph and the list of production job orders expected to be produced.