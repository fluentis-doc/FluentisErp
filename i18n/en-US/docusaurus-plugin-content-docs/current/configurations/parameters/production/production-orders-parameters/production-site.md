---
title: Production Site
sidebar_position: 3
---

The table allows for the management of the coding of different types of *Production Site*.

It enables the insertion of new records or the search for already existing ones to view, modify or delete them.

## Search Production Site 

The form consists of a filter area and a result area. Once all desired filters are set, simply click on the **Search** button to view the results in the result grid.

## Insert New Production Sites

To insert a new production site, use the **New** button in the search form.

In the input form, the production site is defined in the upper section using the fields **Code** and **Description**.  

## Modify Production Sites 

To modify production sites, select the site in the search form and double-click the row or use the **Modify** button.

Entering edit mode allows you to view and modify the parameters of the related warehouses for that *Production Site*.      
These are the same as those present in the [Production Order Parameters](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro), but they take precedence over the general ones, because if the production site is inserted, they are used by the procedures instead of the general ones.
Per maggiore dettagli sulle logiche e le priorità dei magazzini e delle causali impiegate, si consiglia di visualizzare la documentazione relativa ai [Parametri Ordini di Produzione](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

The **Contact** field in the **Production Site** is used in [Shipments](/docs/logistics/shipping/shippings) to suggest the Address of the loading location when selecting the corresponding production site.  

## Configuration and Operation of a Production Site 

The following are the necessary steps for a correct configuration and use of **Production Sites**:

1. Creation of the production site by entering the code and description.
2. Associate the created production site with the individual warehouses that will be part of it, by entering it in the *Production Site* field of the [Warehouses](/docs/configurations/parameters/production/production-orders-parameters/production-site) table. The production site can also be associated with the machine used by entering it in the *Production Site* field of the [Machines](/docs/configurations/tables/production/machines/) table.
3. Complete the creation of the production site by also entering the warehouses (choosing only those associated with that specific site) and the respective loading and unloading reasons, as detailed in the article dedicated to [Production Order Parameters](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).
4. In the [Production Job Order](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders), it is necessary to specify the production site in the appropriate header field.
5. The planning procedures for the production of that item will take into account its availability and that of all its components by analyzing only the warehouses associated with that production site and ignoring the availability present in all others.

For anything not detailed in this document regarding the common operation of the forms, please refer to the following link [Common Functions, Buttons, and Fields](/docs/guide/common).