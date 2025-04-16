---
title: Introduction
sidebar_position: 1
---

The module is located in the purchasing area **Purchases > Goods Receipt** and represents an intermediate step that allows you to register the arrival of goods sent by a supplier, thus updating warehouse stocks without having to first create the Transport Document or the Purchase Invoice. 

### Preliminary Module Configuration

Before using the module, it is necessary to fill in the following tables and parameters:     
- [**Numerations**](/docs/configurations/tables/fluentis-numerations): entry of the numeration to be used for goods receipts.     
- [**Goods receipt types**](/docs/configurations/tables/purchase/goods-receipt-types)
- [**Purchase order parameters**](/docs/configurations/parameters/purchase/purchase-orders-parameters): in the *Load* tab, the parameters to be used for the *Goods receipt load* must be specified. 

## **Links to other modules**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistics</Link>
        <p>The goods receipt can be loaded into the warehouse through the specific [procedure](/docs/purchase/goods-reception/procedures/good-receipt-load).</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">DN and Purchase Invoices</Link>
        <p>From a goods receipt, it is possible to create a [Purchase Delivery Note](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) or a [Purchase Invoice](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt).</p>
    </div>
</div>