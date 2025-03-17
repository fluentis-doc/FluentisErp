---
title: Introduction (Introduzione)
sidebar_position: 1
---

The Fluentis planning module is an integrated system designed to manage various crucial aspects of production planning, such as **General Planning (Pianificazione generale)**, **Finite Capacity Scheduling (Schedulazione a capacità finita)**, **Material Requirements Planning (MRP)**, and management of **Planned Orders (Ordini pianificati)**.       
**General planning (Pianificazione generale)** in Fluentis adopts an infinite capacity approach, offering flexibility in scheduling operations without considering physical constraints. It uses the *earliest (al più presto)* logic to start operations immediately and *latest (al più tardi)* to plan them as late as possible while respecting deadlines.       
**Finite capacity scheduling (Schedulazione a capacità finita)** is a tool designed to optimize the management of productive resources within a manufacturing company, taking into account the physical limitations of resources and creating realistic and achievable production plans.  
The **MRP system (MRP)** facilitates the analysis of material and resource availability, proposing effective strategies to optimize both the purchase and use of materials, with the aim of improving productivity and reducing waste. Planned orders, which can be generated automatically or manually, allow for the advanced management of business needs, offering flexibility in modifying details such as production dates.      
Overall, the Fluentis system addresses the challenges of production management by integrating advanced techniques to optimize efficiency and operational costs.

## Area Modules (Moduli dell'area)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     MS - Master Scheduling (MS - Matser Scheduling)
        <p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">General Planning (Pianificazione generale)</Link></p>
        <p>Operates at infinite capacity and allows scheduling operations both *earliest (al più presto)* and *latest (al più tardi)*. These flexible approaches enable optimized management of production needs and processing times.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P. (M.R.P.)</Link></p>
        <p>Enables the analysis of material and resource availability, optimizing inventory and production management through suggestions to expedite, integrate, or cancel orders. This system improves operational efficiency by reducing inventory levels.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Finite Capacity Scheduling (Schedulazione a capacità finita)</Link></p>
        <p>Optimizes the management of productive resources by considering the actual capacities of the company, allowing the creation of realistic production plans that limit downtime and improve operational efficiency.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Planned Orders (Ordini pianificati)</Link></p>
        <p>Allows efficient creation and management of production, purchase, and work order planned orders.</p>
        <p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Release Planned Orders (Rilascio ordini pianificati)</Link></p>
        <p>Allows for the transformation of planned production, purchase, and work orders into actual production orders, purchase requests, and work orders.</p>
    </div>
</div> 

## Getting Started (Per iniziare ad utilizzare)

- Create items in the [*Item Registry (Anagrafica articoli)*](/docs/erp-home/registers/items/create-new-items/create-new-item) 
- Create [*Bills of Materials (Distinte basi)*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) 
- Create [*Work Cycles (Cicli di lavoro)*](/docs/erp-home/registers/production/routes/new-route) 
- Create [*Work Centers (Centri di lavoro)*](/docs/erp-home/registers/production/routes/work-center) 
- Create a [*Factory Calendar (Calendario di fabbrica)*](/docs/configurations/tables/production/factory-calendar/) 
- Create [*Production Capacity Calendars (Calendari capacità produttive)*](/docs/configurations/tables/production/productive-capacity-calendar/) 
- Define [*Document Types (Tipi documento)*](/docs/configurations/tables/production/documents-types/)  
- Define [*MS Parameters (Parametri MS)*](/docs/configurations/parameters/production/mps-parameters/)   
- Define [*Production Order Parameters (Parametri ordini produzione)*](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro/)   

## Links to Other Modules (Collegamenti con altri moduli) 
These are closely linked to the [*Item Registry (Anagrafica articoli)*](/docs/erp-home/registers/items/create-new-items/create-new-item), [*Bills of Materials (Distinte basi)*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), [*Work Cycles (Cicli di lavoro)*](/docs/erp-home/registers/production/routes/new-route), [*Work Centers (Centri di lavoro)*](/docs/erp-home/registers/production/routes/work-center), [*Planned Orders (Ordini pianificati)*](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders), and [*Production Orders (Ordini produzione)*](/docs/production/pp-production-in-progress/production-orders/search-production-orders).