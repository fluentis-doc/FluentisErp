---
title: Introduction
sidebar_position: 1
---

The module is located in the **Purchases > Supplier Orders** area and represents one of the intermediate steps of the passive cycle. Purchase orders are formal documents issued by the *Purchasing* department, used to request goods or services from a supplier, according to predefined conditions. They contain details related to the products or services to be purchased, including quantities, prices, delivery terms, payment conditions, and other contractual specifications.   

### **Operational Flow**

Purchase orders can be entered manually or automatically created from existing documents. The methods of automatic generation include:    

- **Purchase Requests**: through the procedure of [Automatic Order Creation](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests), it is possible to fulfill authorized RDA within a purchase order.    
- **Offer Requests**: after selecting the best offer among those received from suppliers, it is possible to generate the purchase order through the procedure of [Creating Supplier Order from Supplier Offer](/docs/purchase/offer-request/procedures/order-creation).   
- **Sales Orders**: the *Automatic Orders Generation* procedure also allows the creation of a *Purchase order* from a *Sales Order*. Alternatively, a purchase order can be generated from the filter of [Customer Order Search](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders) using the *Create Purchase Orders* button.    
- **Purchase Commitments**: the purchase order can also be generated through the *total or partial fulfillment* of a purchase commitment, based on predefined and already negotiated contracts with the supplier.

Once confirmed, the purchase order can be fulfilled through a DDT or an invoice. This allows for the recording of goods in stock and the subsequent accounting of the invoice within the system, maintaining accurate control of inventory and financial flows.

The module also offers the ability to create the [goods receipt](/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure), allowing the operator to fulfill the supplier order, record the arrival of goods, place them in the warehouse or predefined locations, and subsequently proceed to the official loading of the goods into stock.

### **Main Features**

- Complete management of registries: Orders are integrated with supplier registries and price lists, allowing for the automatic configuration of discounts, payment terms, and other specific conditions for each supplier. 
- Traceability of order status: Orders can be tracked through various statuses (entered, printed, etc.), with real-time updates available for all stages of the process.
- Automated workflows: The phases of approval, notification sending, and order updates can be automated through configurable workflows, improving operational speed and reducing the risk of errors.
- Reporting and order analysis: It is possible to access detailed reports analyzing order volumes, fulfillment times, incomplete orders, and other KPIs useful for improving procurement management and business performance.

### **Settings**

Before using the module, it is necessary to properly configure the following parameters and tables: 
> - [Numbering](/docs/configurations/tables/fluentis-numerations)    
> - [Supplier Order Types](/docs/configurations/tables/purchase/purchase-orders-type) 
> - [Supplier Order Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters)