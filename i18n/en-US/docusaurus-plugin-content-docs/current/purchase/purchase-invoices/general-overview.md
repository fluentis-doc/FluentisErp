---
title: Introduction 
sidebar_position: 1
---

The module can be found in the **Purchase > Purchase Invoices** area. Purchase invoices are fiscal documents issued by suppliers in exchange for the supply of goods or services to the company and represent the basis for accounting registration and payment of suppliers.

## **Preliminary Configuration of the Module**

Before using the module, it is necessary to fill in the following tables and parameters:     
- [**Numerations**](/docs/configurations/tables/fluentis-numerations): entry of the numeration to be used for Purchase Invoices.     
- [**Purchase Turnover**](/docs/configurations/tables/purchase/purchase-turnover/): definition of the types of purchase turnover to be included in the documents.
- [**Purchase Invoices Type**](/docs/configurations/tables/purchase/purchase-invoices-type): creation and definition of the types of invoices to be used.
- [**Purchase Invoice Parameters**](/docs/configurations/parameters/purchase/purchase-invoices-parameters): specific settings for managing invoices. 
- [**Grouping Parameters for Purchase Invoices**](/docs/configurations/parameters/purchase/invoice-grouping/): defining the grouping conditions of Delivery Note in the invoice.

## **Links to Other Modules**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Purchase Orders</Link>
        <p>The invoice can be created by fulfilling one or more supplier orders from within the invoice using the Fulfillment from Orders button.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">Purchase Delivery Note</Link>
        <p>The invoice can be created by fulfilling one or more Delivery Notes, either from within the invoice using the Fulfillment Delivery Note button or through the [Valorization Purchase Delivery Note](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization).  </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/subcontractor/subcontractor-returns/insert-returns/search-returns">Subcontractor Return from Order</Link>
        <p>The *Valorization Subcontractor Return Procedure* allows generating a purchase invoice by fulfilling one or more subcontractor returns.   </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Goods Receipt</Link>
        <p>The [Creating Invoices from Receipt List](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt) allows the creation of the invoice from a goods receipt that has already been registered.  </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistics</Link>
        <p>Immediate purchase invoices can be loaded into the warehouse to register the arrival of goods and update material stocks.  </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting">Accounting</Link>
        <p> The automatic accounting of invoices allows updating financial and accounting records, ensuring consistency with the company balance sheet. </p>
    </div>
</div>