---
title: Introduction 
sidebar_position: 1
---

The module is located in the **Purchases > Purchase Requests** area and allows for the creation, management, and monitoring of purchase requests, enabling the operator to internally process the request for materials to be purchased based on reports of inventory shortages, requests from various company departments, or demand forecasts.

## **Preliminary Configuration of the Module**

Before using the module, it is necessary to fill in the following tables and parameters:     
- [**Purchase Request Numeration**](/docs/configurations/tables/fluentis-numerations): entry of the numbering to be used for Purchase Requests.       
- [**Purchase Requests Types**](/docs/configurations/tables/purchase/purchase-request-type): creation of types of Purchase Requests.
- [**Parameters for Purchase Requests**](/docs/configurations/parameters/purchase/purchase-requests-parameters): specific settings for managing Purchase Requests.

## **Links to Other Modules**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution">Logistics</Link>
        <p>From the *Safety Stock* report, located under the area *Logistics > Management Reports > Safety Stock*, it is possible to generate the restocking Purchase Requests for items that have availability lower than their reorder point.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders">Planning and Production</Link>
        <p>General planning and MRP can generate *planned purchase orders* based on the requests for materials needed for production. Such orders can be transformed into *Purchase Requests* automatically or manually through the *Release Planned Orders* procedure.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Offer Requests</Link>
        <p>The Purchase Request can generate an *Offer Request* using the **RDO Generator** button located within the Purchase Request. </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Purchase Orders</Link>
        <p>Once authorized, the Purchase Request can be transformed into a *Purchase Order* through the [Automatic Orders Generation](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) procedure.</p>
    </div>
</div>