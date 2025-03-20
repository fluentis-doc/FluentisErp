---
title: Sales
sidebar_position: 1
---

The **Sales** area of **Fluentis ERP** is designed to ensure comprehensive and optimized management of business activities, offering a modular and interconnected structure that supports the entire sales process, from creating offers to analyzing margins. 

## Preliminary Configuration of the Area 

Before using the available functionalities, a series of basic data must be managed: these are divided into two macro groups, [**Tables**](/docs/configurations/tables/sales/agent-category) and [**Parameters**](/docs/configurations/parameters/sales/general-overview).

Alternatively, the [**Fast Start**](/docs/guide/fast-start) procedure is available, for which it will only be necessary to manage a minimum set of data such as the [**Registers**](/docs/erp-home/registers/registers-intro).


## Sales Modules (Moduli Vendite)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/offers/settings">Offers</Link>
        <p>Creation, monitoring, and updating of commercial proposals, directly integrating them with business processes.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Orders</Link>
        <p>Management and organization of the purchasing process of goods and services by customers.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-delivery-notes/general-overview">Delivery Notes</Link>
        <p>Tracking and documentation of the movement of goods for outgoing shipments.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/sales-invoices/general-overview">Invoices</Link>
        <p>Certification of the sales transaction, specifying the goods or services provided, costs, VAT, and payment conditions.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/pos/general-overview">POS</Link>
        <p>Management of sales directly at the cash register, with tools for creating and managing invoices, issuing receipts, and automatically updating inventory levels.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/agents/general-overview">Agent Settlements</Link>
        <p>Management of sales directly at the cash register, with advanced tools for creating and managing invoices, issuing receipts, and automatically updating inventory levels.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-price-list/general-overview">Sales Price Lists</Link>
        <p>List of prices for the products or services offered to facilitate the sales process and include any applicable discounts.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/price-control/definition">Price Management</Link>
        <p>Management of additional discounts based on the customer's commercial category or other discount definition policies.</p>
    </div>
</div>

## Integrations with Other Areas 

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/pos/general-overview">Logistics</Link>
        <p>Automatic update of **STOCKS** in real time during the registration of sales documents.</p>
        <p>Possibility to generate **Picking** and **Load Plans** directly from customer orders, further transforming them into **DDT** and **Invoices** for optimized shipment management.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/agents/general-overview">Planning and Production</Link>
        <p>Support for **Demand Planning** through integration with sales processes, particularly useful for production models such as: **Make to Order (MTO)**, **Engineering to Order (ETO)**, **Assembly to Order (ATO)**.</p> 
        <p>This connection ensures alignment between sales orders and production activities, improving resource planning and operational efficiency.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-price-list/general-overview">Accounting</Link>
        <p>The integration ensures smooth and accurate management of administrative transactions resulting from sales documents, reducing errors and automating accounting registration.</p>
    </div>
    <div className="card">
###     <Link to="/docs/sales/price-control/definition">Management Control</Link>
        <p>Provides advanced analysis tools to monitor **profit margins** related to each sales process.</p>
        <p>Enables detailed analysis of commercial performance, favoring the optimization of sales strategies and improving business profitability.</p>
    </div>
</div>

## Typical Operational Flow of the Area 

1. **Opportunity Acquisition**: offers are managed through the CRM module, collecting information on existing and potential customers.  
2. **Conversion of Offers into Orders**: accepted offers are transformed into orders, centralizing information to proceed with the process.  
3. **Automatic Document Creation**: delivery notes (DDT) and sales invoices are automatically generated from the orders.  
4. **Retail Sales (POS)**: operations at the cash register are managed through the POS module, which records sales and updates accounting in real time.  
5. **Price Management**: updating and historical documentation of prices and discounts associated with coded items.  
6. **Commission Settlement**: commissions for agents are calculated and settled automatically, streamlining commission management.