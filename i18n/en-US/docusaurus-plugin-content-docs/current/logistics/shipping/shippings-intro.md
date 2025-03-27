---
title: Introduction 
sidebar_position: 1
---

This new tool has been developed to optimize and simplify the shipping process, allowing for more effective and integrated control of all logistics activities. The **shipping management** by Fluentis includes the **groupage** function, which allows consolidating different shipments of goods from various senders but directed to the same geographic area into a single load or container.       
This enables more efficient use of the available space on transport vehicles, such as trucks, maritime containers, or planes, and offers a more cost-effective service compared to shipping individual goods.         
Additionally, an **advanced planning tool** has been implemented that allows viewing shipments by vehicle, driver, carrier, and customer. Thanks to a simple drag & drop functionality, operators can easily organize shipments, move them forward or backward, and change the assigned vehicle or driver, ensuring more flexible and responsive management.

## Area Modules

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">Shipments</Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Shipments</Link></p>
        <p>Through groupage management, it is possible to group shipments from different customers or suppliers into a single transport unit.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Calendar</Link></p>
        <p>Allows efficient planning and management of operational and logistical activities, optimizing resources and improving the coordination of shipments.</p>
    </div>
</div>

## To get started using

**Shipments**:
- create items in the [*Items register*](/docs/erp-home/registers/items/create-new-item) 
- define a [*Shipping Types*](/docs/configurations/tables/logistics/shipping-type)        
- define [*Shipping States*](/docs/configurations/tables/logistics/shipping-states)     
- define [*Motorvehicles*](/docs/logistics/motorvehicles/motorvehicle)   
- define [*Vehicle Drivers*](/docs/logistics/motorvehicles/motorvehicle-drivers)      
- define [*Vehicle Stop Reasons*](/docs/configurations/tables/logistics/motorvehicle-off-time-reasons)     
- define [*Driver Absence Reasons*](/docs/configurations/tables/logistics/driver-off-time-reasons) 
- define [*Vehicle Driving Licenses*](/docs/configurations/tables/logistics/motorvehicle-driving-licences)     
- define the type of [*Vehicle Ownership*](/docs/configurations/tables/logistics/motorvehicle-ownership)   
- define [*Vehicle Brands*](/docs/configurations/tables/logistics/motorvehicle-brands)   
- define [*Vehicle Fuel Types*](/docs/configurations/tables/logistics/motorvehicle-gas-type)  
- define [*Vehicle Types*](/docs/configurations/tables/logistics/motorvehicle-Type)  

## Links to Other Modules 
These are closely related to the [*Items register*](/docs/erp-home/registers/items/create-new-item) and [*Sales Orders*](/docs/sales/sales-orders/settings) since it is possible to add items directly from an order.           
Additionally, from a shipment, it is possible to directly create [*DDT (Delivery Notes) (DDT)*](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn), [*Invoices*](/docs/sales/sales-invoices/general-overview), and also [*Picking*](/docs/logistics/picking/picking-intro).