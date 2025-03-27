---
title: Introduction 
sidebar_position: 0
---

In the logistics management of Fluentis, items can be tracked and managed through both **Batches** and **Serial number**. Lots represent homogeneous groups of items, both incoming and outgoing, allowing for effective inventory management and ensuring traceability throughout the production and distribution process. Each lot is identified by a unique code, which enables access to detailed information related to the lot specifications, including essential data for regulatory compliance.

On the other hand, serial numbers are used to uniquely identify each piece, which is particularly useful for high-value or critical items. This approach allows for precise management, facilitating the monitoring and recording of each individual item in inventory. The integration of these systems within the Fluentis platform optimizes traceability and improves operational efficiency in inventory management.

## Managed Documents 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-register">Batches Register</Link>
        <p>The batches register of Fluentis is a fundamental tool for the management and traceability of lots.</p> 
        <p>Users can easily search for and view the details of each lot with a simple double click, facilitating the monitoring of stock levels.</p> 
        <p>The system manages various lot statuses, influencing operational availability.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/serial-number-register">Serial Numbers Register</Link>
        <p>The serial number register of Fluentis is an essential module for managing serial numbers, which allows companies to track individual items through a unique identification code.</p> 
        <p>This functionality is crucial for traceability and safety requirements, especially for critical or high-value items. The register also includes information on associated loading and unloading documents, providing a comprehensive analysis of usage over time.</p> 
        <p>This systematic approach optimizes internal processes and ensures compliance with regulations, making the register an indispensable tool for modern companies focused on operational efficiency and service quality.</p>
    </div>
</div>

## Getting Started

the **Batches register**:
- define a [*Batch code type*](/docs/configurations/tables/logistics/lot-codes-types)      
- define the parameters for the individual item in the [*Batches and Serial Number*](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) of the item registry        
- correctly define the [*Warehouse template*](/docs/configurations/tables/logistics/warehouse-templates) to be used
- create a document or a [*Warehouse posting*](/docs/logistics/warehouse/stock-records/record) of loading or unloading with an item managed in lots in order to view the result in the **Batch Register**

the **Serial Number Register**:
- define a [*Serial Number code type*](/docs/configurations/tables/logistics/serial-numbers-code-type)      
- define the parameters for the individual item in the [*Batches and Serial Number*](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) of the item registry        
- correctly define the [*Warehouse template*](/docs/configurations/tables/logistics/warehouse-templates) to be used
- create a document or a [*Warehouse posting*](/docs/logistics/warehouse/stock-records/record) of loading or unloading with an item managed by serial number in order to view the result in the **Serial Number Register**

## Connections with Other Modules 
These are closely linked to the [*Items register*](/docs/erp-home/registers/items/create-new-items), the [*Warehouse posting*](/docs/logistics/warehouse/stock-records/record), and all documents that generate loading and unloading movements.