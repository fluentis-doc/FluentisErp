---
title: Logistics
sidebar_position: 1
---

The Logistics area of **Fluentis ERP** encompasses all the functionalities of a true logistics department, capable of monitoring and tracking the movement of goods in the warehouse and all items within and outside the organizational structure. This area includes documents related to both passive and active cycles, as well as internal movements related to production transformation processes.

## Modules of the Area 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/items/items-intro">Items</Link>
        <p><Link to="/docs/logistics/items/items-intro" className="bold-link">Items</Link></p>
        <p>Ensures detailed management of items, ensuring traceability and effective management of stocks within the warehouse.</p>
        <p><Link to="/docs/logistics/items/stocks-visualization" className="bold-link">Stock Visualization</Link></p>
        <p>Allows for easy monitoring of warehouse stocks by comparing physical quantities with logical ones.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/warehouse/warehouse-intro">Warehouse</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Records</Link></p>
        <p>Allows for the management of loading and unloading movements, ensuring traceability of stocks.</p>
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Locations</Link></p>
        <p>Allows for associating items with specific locations in the warehouse, improving logistical efficiency.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Management Prints</Link></p>
        <p>Provides detailed reports on stocks and inventories, facilitating management and monitoring of items.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Accounting Prints</Link></p>
        <p>Provides a summary of warehouse movements, supporting the recording and control of transactions.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-serial-number-intro">Lots and Serial Numbers</Link>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Lot Registry</Link></p>
        <p>Allows for searching and viewing the details of lots showing the respective loading and unloading movements.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Lot Traceability</Link></p>
        <p>Generates reports on the status and usage of lots, both forward and backward in the production chain.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Create Lot from Lot</Link></p>
        <p>Creates a new lot from an existing one, managing the necessary details for loading and unloading.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Create Lot from Lot with Item Change</Link></p>
        <p>Creates a new lot while simultaneously changing the reference item, managing the corresponding lots.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/serial-number-register" className="bold-link">Serial Number Registry</Link></p>
        <p>Allows for the management and tracking of each individual piece through a unique code, particularly useful for high-value or critical items.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-intro">Picking</Link>
        <p><Link to="/docs/logistics/picking/picking-management" className="bold-link">Picking</Link></p>
        <p>Facilitates the creation of picking lists, aiding in the selection of items to be shipped to customers or moved internally.</p>
        <p><Link to="/docs/logistics/picking/unload-picking" className="bold-link">Unload Picking</Link></p>
        <p>Creates warehouse movements, generating accurate records for the selected pickings.</p>
        <p><Link to="/docs/logistics/picking/unload-check-row-management" className="bold-link">Unload by Check (Scarico da spunta)</Link></p>
        <p>Executes the unloading of selected picking rows, facilitating the movement of goods based on the checked rows.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">Loading Unit</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Loading Unit Management</Link></p>
        <p>Allows for creating, loading, and unloading loading units, ensuring effective control of warehouse movements.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Loading Unit Picking List / Packing List</Link></p>
        <p>Enables the management of the picking of loading units for shipment, facilitating the organization of items to be sent to customers.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Loading Unit Transfer List</Link></p>
        <p>Allows for the movement of loading units within the warehouse, simplifying inventory management.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Physical Inventories</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Physical Inventories</Link></p>
        <p>Creates inventory lists and compares physical stocks with logical ones, ensuring alignment between the data.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Inventory Differences (Differenze inventariali)</Link></p>
        <p>Allows for calculating discrepancies between logical and physical quantities, generating adjustment records to align stocks.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Closing History</Link></p>
        <p>Collects data related to warehouse closures, allowing for consultation of historicized information on valuations and stocks.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Warehouse History</Link></p>
        <p>Records valued inventories, allowing for detailed consultation of stocks over time.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Warehouse Valuation</Link></p>
        <p>Allows for closing the warehouse on a specific date, creating opening movements with the remainings.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Valued Inventory with Quantity</Link></p>
        <p>Generates detailed reports on inventory, including the quantities and values of items based on average or last costs.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/load-plans/search-plan">Loading Plans</Link>
        <p><Link to="/docs/logistics/load-plans/search-plan" className="bold-link">Loading Plans</Link></p>
        <p>Optimizes the arrangement and placement of goods within a means of transport, ensuring stability, safety, and efficiency during transport.</p>
     </div>
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">Shipping</Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Shipping</Link></p>
        <p>Through groupage management, it is possible to group shipments from different customers or suppliers into a single transport unit.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Calendar</Link></p>
        <p>Allows for efficient planning and management of operational and logistical activities, optimizing resources and improving coordination of shipments.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/motorvehicles/motorvehicle-management">Motorvehicles</Link>
        <p><Link to="/docs/logistics/motorvehicles/motorvehicle" className="bold-link">Motorvehicle Management</Link></p>
        <p>Essential for optimizing the use, maintenance, and safety of company vehicles.</p>
        <p><Link to="/docs/logistics/motorvehicles/material-consumption/material-consumption-filter" className="bold-link">Material Consumption</Link></p>
        <p>Manages the movements made for the consumption of materials related to vehicles.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">WMS</Link>
        <p><Link to="/docs/logistics/wms/purchase/receiving-goods" className="bold-link">Purchases</Link></p>
        <p>Allows for precise identification and loading of incoming goods, generating the Transport Document (DDT) and, if necessary, managing loading units as well.</p>
        <p><Link to="/docs/logistics/wms/logistics/load-item" className="bold-link">Logistics</Link></p>
        <p>Enables the management of all warehouse movements and stock and inventory checks.</p>
        <p><Link to="/docs/logistics/wms/udc/load-move-pallet" className="bold-link">Loading Unit</Link></p>
        <p>Allows for the management of all warehouse movements involving loading units.</p>
        <p><Link to="/docs/logistics/wms/sales/check-row-management" className="bold-link">Sales</Link></p>
        <p>Allows for the management of goods shipments to customers.</p>
    </div>
</div>