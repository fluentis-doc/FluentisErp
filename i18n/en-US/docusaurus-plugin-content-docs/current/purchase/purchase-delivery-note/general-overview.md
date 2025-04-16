---
title: Introduction 
sidebar_position: 1
---

The module is located in the **Purchases > Purchase Delivery Note** area. The DN is generated when a supplier ships the ordered goods. This module allows for the registration of incoming goods movements, facilitating the control and traceability of received goods and enabling precise management of the material available in stock.

## **Preliminary Configuration of the Module**

Before using the module, it is necessary to fill in the following tables and parameters:     
- [**Numerations**](/docs/configurations/tables/fluentis-numerations): entering the numeration to be used for the Purchase DN.     
- [**Purchase Turnover**](/docs/configurations/tables/purchase/purchase-turnover/): definition of the types of purchasing turnover to be included in the documents.
- [**DN Types**](/docs/configurations/tables/purchase/purchase-orders-type): creation and definition of the types of DN to be used.
- [**Purchase DN Parameters**](/docs/configurations/parameters/purchase/purchase-orders-parameters): specific settings for the management of DN.

## **Links to Other Modules**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Purchase Orders</Link>
        <p>The DN can be created by fulfilling one or more Purchase Orders, both from within the DN using the Fulfillment from orders button, and through the specific [procedure](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders).  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Goods Receipt</Link>
        <p>The [Delivery Note from Goods Receipt](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) procedure allows for the creation even when the order has already been fulfilled within a *Goods Receipt*.  </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistics</Link>
        <p>Once generated and checked, the purchase DN can be [loaded into stock](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) to register the arrival of goods and update material stocks.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Purchase Invoices</Link>
        <p>The [Valorization Purchase Delivery Note](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization) procedure allows for the creation of Invoices from the purchase delivery notes.  </p>
    </div>
</div>