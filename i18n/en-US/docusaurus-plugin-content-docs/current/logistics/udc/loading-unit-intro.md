---
title: Introduction (Introduzione)
sidebar_position: 1
---

The UDC module allows the operator to manage loading units, their creation, movement within the warehouse, and their sale. 
UDCs can be created manually or via WMS Mobile. Typically, UDCs are used by companies that manage the warehouse in pallets or by those that create a shipping UDC containing all the items to be shipped during the sales process.

## The documents managed

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">UDC</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">UDC Management (Gestione UDC)</Link></p>
        <p>Allows operators to manage the entire lifecycle of UDCs, from their creation to movement and sale. UDCs can be created manually or through WMS Mobile, making the system versatile and adaptable to various operational needs.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">UDC Picking List / Packing List (Lista di prelievo UDC / Packing list)</Link></p>
        <p>Offers an innovative method for managing the picking of loading units, as opposed to the traditional picking procedure based on individual items. This functionality is particularly useful when shipping goods to a customer, allowing for the grouping of items within predefined loading units.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">UDC Transfer List (Lista di trasferimento UDC)</Link></p>
        <p>Allows for the management of movements of Loading Units within warehouses, offering a systematic and intuitive method for the transfer of goods. Unlike the UDC Picking List, which is used for shipping to customers, the transfer list focuses on optimizing internal flows of UDCs between various warehouse locations.</p>
    </div>
</div>

## To get started with   

**Loading Unit Management**:
- create items in the [*Items register*](/docs/erp-home/registers/items/create-new-items/create-new-item) and define their parameters in the [Packing tab (Confezionamento)](/docs/erp-home/registers/items/create-new-items/item-registry/packaging)        
- define a [*Loading Unit group type*](/docs/configurations/tables/logistics/loading-unit-group-type/)        
- define a [*UDC Type (Tipo UDC)*](/docs/configurations/tables/logistics/loading-unit-types/)  
- correctly define the [*Warehouse template*](/docs/configurations/tables/logistics/warehouse-templates) to be used       
- define the [*Initial Warehouse Parameters (Parametri iniziali di magazzino)*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)                      
- create an employee in the [Employees table (tabella Dipendenti)](/docs/project-management/registers/employee/new-employee/)

Additionally, for **UDC Picking List / Packing List (Lista di prelievo UDC / Packing list)** and **UDC Transfer List (Lista di trasferimento UDC)**:
- define a [*Picking type*](/docs/configurations/tables/logistics/picking-type/)      

## Links to Other Modules
These are closely connected to the [*Items register*](/docs/erp-home/registers/items/create-new-items/create-new-item), to the [*Warehouse posting*](/docs/logistics/warehouse/stock-records/record), and to all documents that generate loading and unloading movements with loading units.