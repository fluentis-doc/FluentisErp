---
title: Introduction 
sidebar_position: 1
---

The Loading Unit module allows the operator to manage loading units, their creation, movement within the warehouse, and their sale. 
Loading Units can be created manually or via WMS Mobile. Typically, Loading Units are used by companies that manage the warehouse in pallets or by those that create a shipping Loading Unit containing all the items to be shipped during the sales process.

## The documents managed

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">Loading Unit</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Loading Unit Management</Link></p>
        <p>Allows operators to manage the entire lifecycle of Loading Units, from their creation to movement and sale. Loading Units can be created manually or through WMS Mobile, making the system versatile and adaptable to various operational needs.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Loading Unit Picking List / Packing List</Link></p>
        <p>Offers an innovative method for managing the picking of loading units, as opposed to the traditional picking procedure based on individual items. This functionality is particularly useful when shipping goods to a customer, allowing for the grouping of items within predefined loading units.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Loading Unit Transfer List</Link></p>
        <p>Allows for the management of movements of Loading Units within warehouses, offering a systematic and intuitive method for the transfer of goods. Unlike the Loading Unit Picking List, which is used for shipping to customers, the transfer list focuses on optimizing internal flows of Loading Units between various warehouse locations.</p>
    </div>
</div>

## To get started with   

**Loading Unit Management**:
- create items in the [*Items register*](/docs/erp-home/registers/items/create-new-item) and define their parameters in the [Packing tab](/docs/erp-home/registers/items/create-new-item/item-registry/packaging)        
- define a [*Loading Unit group type*](/docs/configurations/tables/logistics/loading-unit-group-type/)        
- define a [*Loading Unit Type*](/docs/configurations/tables/logistics/loading-unit-types/)  
- correctly define the [*Warehouse template*](/docs/configurations/tables/logistics/warehouse-templates) to be used       
- define the [*Initial Warehouse Parameters*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)                      
- create an employee in the [Employees table](/docs/project-management/registers/employee/new-employee/)

Additionally, for **Loading Unit Picking List / Packing List** and **Loading Unit Transfer List**:
- define a [*Picking type*](/docs/configurations/tables/logistics/picking-type/)      

## Links to Other Modules
These are closely connected to the [*Items register*](/docs/erp-home/registers/items/create-new-item), to the [*Warehouse posting*](/docs/logistics/warehouse/stock-records/record), and to all documents that generate loading and unloading movements with loading units.