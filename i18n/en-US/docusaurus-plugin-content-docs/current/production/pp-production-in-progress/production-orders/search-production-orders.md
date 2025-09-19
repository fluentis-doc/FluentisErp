---
title: Production Order Search 
sidebar_position: 2
---

:::important What it is for
The module for managing **Production Orders** in Fluentis is a dynamic and versatile solution designed to effectively support the control and planning of production activities. Directly from the main form, users can manage orders in various states, including "Launched" and "Executive", allowing for a clear distinction between orders ready to start and those already in execution.

One of the main features is the ability to create various batches from a single production order, thus allowing greater flexibility and more precise management of the quantities to be produced. Each batch can be associated with specific details, ensuring optimal traceability. The intuitive management of orders not only simplifies the monitoring of production phases but also facilitates adjustments to changes in operational needs, making Fluentis a strategic ally for production efficiency.
:::

The **Production Orders** module allows you to manage production orders.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Specific buttons*:

> **Generate batches**: this button, which is enabled only after selecting an order, allows for the creation of production batches starting from the quantity of the production order itself; therefore, it provides the possibility to create new production orders with the same main number, but with a different batch number, and for each of them, it allows specifying the quantities to be produced. In the case where the production order is in *Closed* status, the flag **Maintain the reference to the production order** is also enabled, which allows deciding whether the new batch of the order should be created with reference to the original job or not; in this case, it is important to remember that the job will remain in *Closed* status, so if necessary, the user will have to reopen it manually.
:::note Note
The quantity of the originating batch cannot be changed if *Pick Lists*, *Production declarations* have already been created, or if some materials have already been consumed. In these cases, it is still possible to create new production batches, but without being able to change the quantity of the originating batch.     
:::
> **Select project**: this button allows you to associate a project with the selected production orders;     
> **Modify order status**: this button, which only becomes enabled after selecting one or more orders, allows you to change the status of the selected orders (Launched, Executive, Fulfilled, Historical);     
> **Complete Orders Data**: this button, which only becomes enabled after selecting one or more orders, allows you to regenerate the production order data, replacing it with those present in the bill of materials and in the workflow present in the registry;    
> **Costs Recalculation of Production Order**: this button allows you to recalculate the production costs of the selected production orders;
> **Activate mandatory**: allows activating the **Mandatory** flag within all selected production orders;       
> **Deactivate mandatory**: allows deactivating the **Mandatory** flag within all selected production orders.