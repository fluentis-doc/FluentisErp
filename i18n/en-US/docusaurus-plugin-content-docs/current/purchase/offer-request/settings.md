---
title: Introduction 
sidebar_position: 1
---

The module is located in the **Purchasing > Request for Quotation** area and represents one of the intermediate steps of the passive cycle.
Offer Requests (RDO) are used to manage the process of collecting and comparing estimates from suppliers, allowing for the selection of the best supply conditions.

## **Preliminary Module Configuration**

Before using the module, it is necessary to fill in the following tables and parameters:     
- [**Numerations**](/docs/configurations/tables/fluentis-numerations): entering the numeration to be used for the Offer Requests.       
- [**Offer Requests Type**](/docs/configurations/tables/purchase/purchase-offer-type): creating the types of RDO.

## **Links to Other Modules**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Purchase Requests</Link>
        <p>Offer Requests can be generated from the *Purchase Requests*, using the **RDO Generator** button located within the RDA.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Purchase Order</Link>
        <p>Once the most convenient offer is selected, it is possible to convert the RDO into a purchase order using the procedure for [Purchase Order Creation from Purchase Offer](/docs/purchase/offer-request/procedures/order-creation).</p>
    </div>
</div>