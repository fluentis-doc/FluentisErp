---
title: Introduction (Introduzione)
sidebar_position: 1
---

Warehouse records represent a crucial element in the operational management of goods, allowing for accurate monitoring of movements and inventories.    
This process is fundamental to ensure that the quantities of items coming in and out are always updated and correspond to the physical reality of the warehouse.    
At the same time, location management offers an additional level of precision, allowing items to be classified into different areas, such as shelves and sections, within a warehouse. By using a modifiable tree structure, operators can assign specific types of locations and define key parameters such as width, height, and capacity, thereby improving efficiency in handling and picking items.       
The correct integration of warehouse records with location information allows for the optimization of the flow of goods and facilitates smooth and responsive logistics management.

## Managed Documents (I documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/record">Warehouse (Magazzino)</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Records (Registrazioni)</Link></p>
        <p>Ensures efficient management of logistics operations, allowing for accurate recording of movements within the system. Records can be created automatically through various procedures, such as document loading (e.g., DDT and purchase invoices) or unloading (via DDT and sales invoice). This process not only simplifies the entry of movements but also ensures synchronization of information between various operational documents.</p>
        </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Locations (Ubicazioni)</Link></p>
        <p>Allows users to structure storage locations within warehouses according to a hierarchical schema, easily modifiable to adapt to business needs. Each location can be defined based on various parameters, including the type of location (e.g., area, shelf, rack, section) and its physical characteristics such as width, height, and load capacity.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Management Reports (Stampe gestionali)</Link></p>
        <p>These reports enable operators to perform accurate checks and make informed decisions regarding procurement, inventory management, and analysis of item movements. Thanks to customizable reports and various filters, users can obtain detailed information on:</p>
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Non-Moving Items (Articoli non movimentati)</Link> - <Link to="/docs/logistics/warehouse/management-reports/print-labels" className="bold-link">Label Prints (Stampe etichette)</Link></p>
        <p><Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution" className="bold-link">Safety Stock (Sottoscorta)</Link> - <Link to="/docs/logistics/warehouse/management-reports/rotation-index" className="bold-link">Rotation Index (Indice di rotazione)</Link></p>
    </div>
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Accounting Prints (Stampe contabili)</Link></p>
        <p>These prints provide detailed reports on incoming and outgoing movements, allowing for accurate recording of transactions. Each print template can be customized to obtain specific information, ensuring compliance and transparency in the management of goods. Users can easily track movements and manage accounting records through tools such as:</p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Movement Selection (Selezione movimenti)</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-inventory-journal" className="bold-link">Inventory Journal (Giornale di magazzino)</Link></p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-warehouse-day-book" className="bold-link">Warehouse Ledger (Brogliaccio di magazzino)</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-cards" className="bold-link">Movement Cards (Schede di movimentazione)</Link></p>
    </div>
</div>

## Getting Started with (Per iniziare ad utilizzare)

**Stock records**:
- create items in the [*Items register*](/docs/erp-home/registers/items/create-new-items/create-new-item)        
- define [*Warehouses*](/docs/configurations/tables/logistics/warehouses)    
- correctly define the [*Warehouse template*](/docs/configurations/tables/logistics/warehouse-templates) to use       
- define the [*Initial Warehouse Parameters (Parametri iniziali di magazzino)*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)          

**Locations**:
- define [*Locations types*](/docs/configurations/tables/logistics/locations-types)  
- define [*Location Status (Stato ubicazioni)*](/docs/configurations/tables/logistics/location-status)                
- define the tree of [*Locations*](/docs/logistics/warehouse/location/locations)

## Links to Other Modules (Collegamenti con altri moduli)
The [*Warehouse posting*](/docs/logistics/warehouse/stock-records/record) is linked to all documents that generate loading and/or unloading movements.