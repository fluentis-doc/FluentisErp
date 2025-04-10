---
title: Introduction 
sidebar_position: 1
---

The module is located in the **Purchasing > Purchase DN** area.   

The DN is generated when a supplier ships the ordered goods and contains information such as the supplier and buyer details, a description of the shipped items along with their quantities, units of measure, and prices, in addition to transportation data. This module allows for the registration of incoming goods movements, facilitating the control and traceability of received goods and enabling precise management of available warehouse material.

### **Operational Flow**

The automatic generation of the DN can occur through:

- **Fulfillment from Supplier Orders**: either from within the DN using the Fulfillment from orders button or through the specific [procedure](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders). Both methods allow for the partial or total fulfillment of multiple orders addressed to the same supplier within a single DN.   
- **Creation from Goods Receipt**: using the corresponding [procedure](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt); it allows for the creation of the DN even when the order has already been fulfilled within a *Receipt List*.

Once generated and checked, the purchase DN can be [loaded into the warehouse](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) to register the arrival of goods and update material stock and [valuation](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization).

### **Main Features**

- Uncoded items and variants: It is possible to include uncoded items in the DN by specifying only the description, or to manage item variants with additional attributes, displaying combinations directly in the DN.
- Management of multiple types of DN: DDTs can be classified based on their commercial nature, allowing for quick and accurate document filtering.
- Expenses and notes: The DN can include additional expenses for the shipped goods, along with the possibility to add specific notes for each item.
- Batch and warehouse management: Lot codes and serial numbers can be coded automatically or manually. 
- Printing and customizations: It is possible to print the DN with customized layouts for the customer, along with labels for the shipped goods.
- Integration with images: The system allows for displaying images of items within the DN.

### **Settings**

Before using the module, it is necessary to correctly configure the following parameters and tables:    
> - [Numbering](/docs/configurations/tables/fluentis-numerations)
> - [Purchasing Turnover](/docs/configurations/tables/purchase/purchase-turnover/)
> - [DN Types](/docs/configurations/tables/purchase/purchase-delivery-notes-type)
> - [Purchase DN Parameters](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters).