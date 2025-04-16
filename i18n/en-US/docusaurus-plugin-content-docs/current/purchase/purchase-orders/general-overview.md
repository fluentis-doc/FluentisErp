---
title: Introduction
sidebar_position: 1
---

The module is located in the **Purchases > Supplier Orders** area and represents one of the intermediate steps of the passive cycle. Purchase orders are formal documents issued by the *Purchasing* department, used to request goods or services from a supplier, according to predefined conditions. They contain details related to the products or services to be purchased, including quantities, prices, delivery terms, payment conditions, and other contractual specifications.   


## **Preliminary Module Configuration**

Before using the module, it is necessary to fill in the following tables and parameters:     
- [**Numerations**](/docs/configurations/tables/fluentis-numerations): entry of the numeration to be used for orders.       
- [**Purchase Order Types**](/docs/configurations/tables/purchase/purchase-orders-type): creation and definition of the types of orders to be used.
- [**Purchase Order Parameters**](/docs/configurations/parameters/purchase/purchase-orders-parameters): specific settings for managing supplier orders.

## **Links to Other Modules**

Purchase orders can be entered manually or created automatically from existing documents. The modes of automatic generation include:

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Purchase Requests</Link>
        <p>The procedure for [Automatic Orders Generation](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) allows for the creation of Purchase Orders from authorized Purchase Requests.     </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Offer Requests</Link>
        <p>Purchase Orders can be generated from Offer Requests through the procedure for [Purchase Order Creation from Purchase Offer](/docs/purchase/offer-request/procedures/order-creation). </p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Sales Orders</Link>
        <p>The procedure for *Automatic Orders Generation* also allows for the creation of a *Purchase Order* from a *Sales Order*. Alternatively, an order can be generated from the filter of [Sales Order Search](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders) using the *Create Purchase Orders* button.         </p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-job-order/general-overview">Purchase Job Orders</Link>
        <p>Purchase Orders can also be generated through the total or partial *execution* of a purchase job order, based on predefined and already negotiated contracts with the supplier.  </p>
    </div>
</div>


Once confirmed, the purchase order can be fulfilled via a Delivery Note or an invoice. This allows for the registration of goods in the warehouse and the subsequent accounting of the invoice within the system, maintaining accurate control of stock and financial flows.

The module also offers the possibility to create the [goods receipt](/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure), allowing the operator to fulfill the purchase order, register the arrival of goods, place them in the warehouse or predefined locations, and subsequently proceed to the official loading of goods into the warehouse.