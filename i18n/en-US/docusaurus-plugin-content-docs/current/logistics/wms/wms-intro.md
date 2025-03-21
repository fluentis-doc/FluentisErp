---
title: Introduction
sidebar_position: 1
---

The adoption of a **WMS (Warehouse Management System)** is essential for companies looking to optimize their logistics operations. A **WMS**, like **Fluentis**, offers a range of tools and features designed to improve efficiency, accuracy, and traceability within the warehouse. With **Fluentis WMS**, companies can automate key processes such as receiving goods, storage, picking, packing, and shipping, reducing human errors and increasing productivity.

Implementing a **WMS** allows for more effective inventory management, minimizing the risk of excess or shortages. Furthermore, thanks to real-time visibility of operations, the **WMS** enables companies to make informed decisions and respond quickly to changes in demand. The ability to track goods throughout their lifecycle in the warehouse also helps ensure regulatory compliance and improve customer satisfaction.

Overall, using a **WMS** helps companies streamline logistics operations, reduce costs, and enhance service quality, creating a competitive advantage in an increasingly dynamic and complex market.


## Modules of the area

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Purchasing</Link>
        <p><Link to="/docs/logistics/wms/purchase/receiving-goods" className="bold-link">Receiving goods</Link></p>
        <p>The goods receiving function is crucial for logistics management, allowing for the accurate identification and loading of incoming goods. Through the system, operators can filter and select unfulfilled supplier orders, generate the Transport Document (DDT), and manage load units if necessary. This process ensures that each item is recorded with lot information and quantity, improving warehouse efficiency and ensuring accurate movement control.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Logistics</Link>
        <p><Link to="/docs/logistics/wms/logistics/load-item" className="bold-link">Load item</Link></p>
        <p>The goods loading function allows for the precise registration of the arrival of items in the warehouses.</p>
        <p><Link to="/docs/logistics/wms/logistics/unload-item" className="bold-link">Unload item</Link></p>
        <p>The goods unloading function is designed to facilitate the picking of items from a warehouse.</p>
        <p><Link to="/docs/logistics/wms/logistics/move-item" className="bold-link">Move item</Link></p>
        <p>The move item function allows for the creation of a movement to shift an item from one specific location to another.</p>
        <p><Link to="/docs/logistics/wms/logistics/item-adjustment" className="bold-link">Item adjustment</Link></p>
        <p>This procedure is used to create positive or negative adjustments of an item.</p>
        <p><Link to="/docs/logistics/wms/logistics/item-stocks" className="bold-link">Item stock</Link></p>
        <p>The item stock function allows operators to quickly view the warehouse stock for each registered item.</p>
        <p><Link to="/docs/logistics/wms/logistics/inventory" className="bold-link">Inventory</Link></p>
        <p>This procedure allows for the registration and management of the physical stocks of items, facilitating and speeding up the counting process.</p>
        <p><Link to="/docs/logistics/wms/logistics/confirm-picking" className="bold-link">Confirm picking</Link></p>
        <p>This tool allows for the effective management of transferring checked items between different warehouses or locations, automatically creating the necessary warehouse movements for the transfer.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Loading Unit</Link>
        <p><Link to="/docs/logistics/wms/udc/load-move-pallet" className="bold-link">Load/Move Loading Unit</Link></p>
        <p>This function allows for the loading or moving of load units via barcode scanning, simplifying and speeding up logistical operations.</p>
        <p><Link to="/docs/logistics/wms/udc/load-move-udc-multiple" className="bold-link">Load/Move multiple Loading Unit</Link></p>
        <p>Allows for the simultaneous management of multiple load units, improving warehouse operations efficiency by loading or moving multiple Loading Units at once.</p>
        <p><Link to="/docs/logistics/wms/udc/loading-unit-picking-list" className="bold-link">Picking List / Packing List</Link></p>
        <p>Allows for the creation of a picking list for load units, facilitating the preparation of shipments directly linked to customer orders.</p>
        <p><Link to="/docs/logistics/wms/udc/loading-unit-transfer-list" className="bold-link">Loading Unit transfer lists</Link></p>
        <p>Allows for managing the movements of load units within warehouses, facilitating the organization and traceability of Loading Units during transfers between different locations.</p>
        <p><Link to="/docs/logistics/wms/udc/confirm-packing-list" className="bold-link">Confirm Loading Unit picking list</Link></p>
        <p>This function is used to confirm picking lists and create outgoing warehouse movements.</p>
        <p><Link to="/docs/logistics/wms/udc/confirm-transfer" className="bold-link">Confirm Loading Unit transfer</Link></p>
        <p>This procedure is intended to confirm existing transfer lists and manage related warehouse movements.</p>
        <p><Link to="/docs/logistics/wms/udc/move-loading-unit-item" className="bold-link">Move items between two load units</Link></p>
        <p>This function allows for the easy transfer of items from a source load unit to a destination load unit.</p>
        <p><Link to="/docs/logistics/wms/udc/loading-unit-adjustment" className="bold-link">Loading unit adjustment</Link></p>
        <p>Allows for making adjustments to items contained in a load unit, enabling both positive and negative corrections.</p> 
        <p><Link to="/docs/logistics/wms/udc/loading-unit-inventory" className="bold-link">Loading unit inventory</Link></p>
        <p>This procedure allows for an accurate inventory of load units present in the warehouse.</p>      
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Sales (Vendite)</Link>
        <p><Link to="/docs/logistics/wms/sales/check-row-menagement" className="bold-link">Tick Management</Link></p>
        <p>The tick management of the Fluentis WMS allows operators to confirm picking lines and group items into load units, thus optimizing handling operations in the warehouse. With this functionality, it is possible to effectively create and manage Loading Units during picking, ensuring accurate control and greater operational efficiency.</p>
    </div>
</div>

## To get started with   

**Loading Unit Management**:
- create items in the [*Items register*](/docs/erp-home/registers/items/create-new-items/create-new-item)
- correctly define the [*Warehouse template*](/docs/configurations/tables/logistics/warehouse-templates) to use       
- define the [*Initial Warehouse Parameters*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)                      
- create an employee in the [Employees](/docs/project-management/registers/employee/new-employee/) table
- [configure](https://docs.fluentis.com/FluentisErp/docs/logistics/wms/configuration) the **Fluentis WMS** app
- define the [*Load/Unload Parameters per User*](/docs/configurations/parameters/general-parameters/deliverynotes-grouping)        
- define the [*Barcode tokenizer*](/docs/configurations/tables/general-settings/barcode-tokenizer)