---
title: Production Job Orders (details) 
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

Based on the status of the job order (whether scheduled, executable, etc.), the job order line will have a different color. The colors that can be associated with the job order status are established within the [MPS Parameters](/docs/configurations/parameters/production/mps-parameters), in the *Job Colors* section.

From this form, it is also possible to *create new job orders*, both **Monoproduct** and **Multiproduct** by clicking the respective buttons in the *Ribbon Bar*: [Insert job order](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) and [Insert multiproduct job order](/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order).

Double-clicking on one of the job orders present in the results grid will take you to the details of the job order, whose data will be discussed in the articles New Monoproduct Job Order and New Multiproduct Job Order.

The *Valorized* column, if the flag is active, indicates that the job order already has at least one costing within it.

:::note **Note** 
The difference between the **Production Job Orders** form and the **Production Job Orders (details)** form is that in the latter, it is possible to also view the items present within the job order in the grid, while in the form without details, only the header data of the production job orders is displayed.     
:::

*Specific buttons*:

> **Duplicate job order**: allows you to duplicate the selected job order;  
> **Change priority**: allows you to change the priority assigned to the job order;  
> [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): with this button, you can open the screen related to the MRP parameters of the item;    
> [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): allows you to open the screen related to the bill of materials of the item;  
> [Work Cycles](/docs/erp-home/registers/production/routes/new-route): allows you to view the work cycle and the related production phases of the item.