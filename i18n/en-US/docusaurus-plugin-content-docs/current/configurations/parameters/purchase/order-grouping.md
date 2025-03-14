---
title: Purchase Order Grouping Parameters 
sidebar_position: 8
---

The grouping parameters allow you to define how to split documents during the fulfillment procedures. To this end, specific flags can be used to group documents based on various properties, such as category, document type, or other relevant characteristics.            
These general grouping parameters only need to be configured once and will be automatically applied to all procedures, remaining valid for all customers and suppliers. However, if a customer or supplier requires a different behavior from what is set in the general parameters, it will be necessary to customize the grouping parameters within their specific registry.           
This way, a flexible and adaptable management of fulfillments is ensured, allowing for the specific needs of each customer or supplier to be met, while maintaining a centralized and consistent configuration for most operations.

In this screen, the grouping rules for the procedure are decided:  
-  [**Creating Supplier Orders**](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders/) from the Customer Orders search filter   

For creating supplier orders from customer orders, it is recommended to use the [automatic order creation procedure](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) with the related *Parameters*. 

:::note Note
If different grouping conditions have been entered in the supplier registry, under the tab *Grouping Parameters for Customer/Supplier*, these will take priority over the general parameters.
:::

When the supplier order is created from a single customer order, all header data present in the starting document is reported. For purchase orders created from multiple sales orders, however, the supplier registry data is reported.    

#### Specific Fields  

- **Summary**: if active, when creating supplier orders from multiple customer orders, a single document will be created for each supplier. If not active, a document will always be created for each customer order. Grouping only works for [Customer Order Types](/docs/configurations/tables/sales/sales-order-types/) that have codified the same *Supplier Order Type* to be created. All subsequent flags must be used in conjunction with this flag.    

- **Grouping by Document Type**: if active, all documents with the same *Customer Order Type* will be grouped into a single order.     

- **Grouping by Year**: by activating this flag, a grouping by the year of entry of the customer order will be performed.   

- **Grouping by Month**: to perform a grouping by the month of order creation, the previous flag must also be activated.    

- **Grouping by Exchange Rate**: if active, documents with the same currency and exchange rate will be grouped into a single purchase order.    

- **Grouping by Order**: this flag is only used for *Creating DDT and sales invoices from Picking* (see [DDT Grouping Parameters](/docs/configurations/parameters/sales/dn-grouping) and [invoices](/docs/configurations/parameters/sales/invoice-grouping)), so in this procedure it holds no significance.    

- **Grouping by Project**: by activating this flag, grouping by project will be performed. The grouping also functions for projects entered at the item line level; if some item lines do not have an associated project, a different order will be created for all items that do not contain one. When the project has been entered in the headers of the source documents, it will also be reported in the headers of the destination documents; otherwise, it will only be maintained on the item lines.    

- **Grouping for payment type and terms**: by activating this flag, grouping will be performed based on the type and payment solution entered in the customer order; this data will be reported in the header of the created supplier order.   

- **Grouping for destination**: by activating this flag, grouping will be performed based on the destination entered within the customer order in the *Destination* tab; this data will be reported in the header of the created supplier order.