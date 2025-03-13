---
title: UDC Search and UDC Transfer Visualization (Ricerca UDC e Visualizzazione trasferimenti UDC)
sidebar_position: 2
---

:::important Purpose (A cosa serve)
The management of Load Units (UDC) in Fluentis allows operators to manage the entire life cycle of UDCs, from their creation to movement, and up to sales. UDCs can be created manually or through WMS Mobile, making the system versatile and adaptable to different operational needs.

The management procedure offers a detailed filter to view all created UDCs, allowing for control over the loading and unloading status of the units. Each UDC is identified by a unique key consisting of the year, group, and number, and the information related to dimensions and weight can be modified based on specific needs.

Moreover, the module allows for the management of item details within each UDC, facilitating the association with customer orders and the recording of warehouse movements. Operations such as loading, unloading, and transferring UDCs between locations are managed flexibly, ensuring that data is always up-to-date and accurate. Thanks to these features, Fluentis UDC management contributes to improving operational efficiency and inventory traceability.
:::

### UDC Search (Ricerca UDC)

The form opens via the path **Logistics > UDC Management (Logistica > Gestione UDC)**.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

:::note Note
When opening the form, the flags *Load* and *Unload*, present in the filter, are not checked, so only UDCs that have not yet been loaded will be displayed.
When activating the *Loading* flag, only loaded UDCs will be shown, and enabling the *Unloading* flag will show only UDCs that have also been unloaded.
:::

In case a *Load Unit* has been entered in a *delivery or transfer list*, the number and date of the list are displayed in the results grid.

Additionally, it is noteworthy that UDCs can also be searched for by the customer order to which they are linked.

From this form, it is possible to load the selected UDCs by pressing the **Load pallet** button and also unload them (only if already loaded and present in a list) through the **Unload pallet** button.

:::note ATTENTION
If you want to transfer items from the warehouse directly into the load unit, using a loading reason to insert the items into the unit and a unloading counterpart to remove them from the warehouse, it is important to remember to first move the items to the location indicated in the counterpart reason.
:::

*Specific buttons (Pulsanti specifici)*:

> **New**: the button allows you to [Create a new UDC](/docs/logistics/udc/loading-unit-management/insert-new-pallet);  
> **Sales returns**: allows you to create a new *Load Unit*, using as *UDC Type (Tipo UDC)* the one with the *For Return* enabled, and all other properties are copied from the original *Load Unit*; this button is enabled only for lines that are loaded and delivered;  
> **Insert orders in pallets**: allows you to insert the items of a customer order into a *Load Unit*; this procedure creates a link between the UDC and the Customer Order;  
> **Load pallet**: executes the procedure for creating a record/movement of loading the *Load Unit*;          
> **Unload pallet**: executes the procedure for creating a record/movement of unloading the *Load Unit*; this is enabled only if the *Load Unit* is present in a UDC picking list;            
> **View Load Record (Visualizza registrazione di carico)**: opens the warehouse record of the UDC load;  
> **View Unload Record (Visualizza registrazione di scarico)**: opens the warehouse record of the UDC unload;  
> **Rollback Loading Unit Load**: if the UDC is loaded, it rolls back the warehouse loading record;  
> **Rollback  Loading Unit Unload**: if the UDC is loaded and unloaded, it rolls back the warehouse unloading record;  
> **Add/Remove items**: allows the user to add or remove an item from the selected *Load Unit*; furthermore, the user has the option to remove an item from another *Load Unit* and add it to the selected one. This button is enabled for loaded lines that are not delivered, not linked to *Picking* or *Transfer Lists* and not linked to production declarations;    
> **Move pallet**: allows moving the UDC from one location to another;  
> **Rollback report**: allows setting the print flag to "False"; this button is enabled only for unloaded lines and those not linked to production declarations.      

### UDC Transfer Visualization (Visualizzazione trasferimenti UDC)

The procedure has been designed to allow the user to easily query the UDC warehouse in order to keep track of inventory and to have all the information related to UDCs present in stock and that have been transferred or not between warehouses within a minimal query time.