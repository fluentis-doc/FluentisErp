---
title: Purchases
sidebar_position: 1
---

The **Purchases** management of Fluentis ERP is designed to support business operators in the rapid management of all documentation related to Supply Chain management.

Through the issuance of supply orders, which can occur in manual or automatic mode, it is possible to proceed with the procurement of goods aimed at production or warehouse management and the creation of all necessary documents for the supply process, including *Purchase delivery note*, *Invoices*, *Purchase Requests*, and *Offer Requests*.

The interconnection with the **Logistics** area ensures the update of stock levels and the generation of stock replenishment requests, while the integration with the **Administration** area facilitates the financial management of purchases, ensuring a smooth process and accurate recording of transactions.    
The *Purchasing* area is also integrated with **Planning** through the generation of Purchase Requests (RDA) based on material requests necessary for production and with the **Sales** area thanks to the ability to generate supplier orders from customer orders.

## Area Modules

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Purchase Requests</Link>
        <p>Processing the request for materials to be purchased based on requests from other departments or reports of shortages.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Offer Requests</Link>
        <p>Comparing supplier quotes to choose the best offer and turn it into a purchase order.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Supplier Orders</Link>
        <p>Management and organization of the procurement process for goods and services from suppliers.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Goods Reception</Link>
        <p>Recording the arrival of goods before creating the Purchase Delivery Note (DDT) or invoice.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">Purchase Delivery Notes</Link>
        <p>Tracking and documentation of the transfer of incoming goods and registration in the warehouse.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Purchase Invoices</Link>
        <p>Certification of the amount due by the company to a supplier for goods or services received, specifying costs, VAT, and payment conditions.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-price-lists/general-overview">Supplier Price Lists</Link>
        <p>Management and updating of prices agreed with suppliers, automating the application of prices, discounts, and any customized conditions.</p>
    </div>
    <div className="card">
###     Purchase Jobs 
        <p>Management of purchase jobs based on previously negotiated contracts with the supplier.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     Price Management 
        <p><Link to="/docs/purchase/price-control/definition" className="bold-link">Definition of discount policies</Link></p>
        <p>Application of discounts associated with the supplier, item class, and/or discount categories.</p>
        <p><Link to="/docs/purchase/price-control/formulas" className="bold-link">Update price/discount policy formulas</Link></p>
        <p>Definition of rules for updating prices in purchase/sale lists.</p>
        <p><Link to="/docs/purchase/price-control/correspondence" className="bold-link">Correspondence of discount categories purchase/sale</Link></p>
        <p>Matching the generic discount category to the discount conditions to be applied to your customers/suppliers.</p>
    </div>
</div>

## Fast Start

:::important WARNING
Before using the available features, it is necessary to configure the Tables and Parameters of the area.

Alternatively, the Fast Start procedure described below is available.
:::

The Fast Start is a procedure designed to simplify and speed up the initialization of the management software, allowing automatic population of the system with basic parameters and tables. This functionality greatly reduces the time and effort required for initial configuration, avoiding the manual entry of each individual setting.

We recommend consulting the related [article](/docs/guide/fast-start#tabelle-acquisti) before tackling the module.