---
title: Purchase delivery note Grouping Parameters
sidebar_position: 10
---

The grouping parameters allow you to define how to split documents during fulfillment procedures. For this purpose, specific flags can be used to group documents based on various properties, such as category, document type, or other relevant characteristics.            
These general grouping parameters only need to be configured once and will automatically apply to all procedures, remaining valid for all customers and suppliers. However, if a customer or supplier requires different behavior than what is set in the general parameters, it will be necessary to customize the grouping parameters within their specific registry.           
This way, flexible and adaptable management of fulfillments is ensured, allowing for the specific needs of each customer or supplier to be met while maintaining a centralized and consistent configuration for most operations.

In this mask, the grouping rules for the [**Order Fulfillment**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) procedure are decided.  

It is necessary to select the columns that foresee the groupings you want to implement for these fulfillments. 

:::note Note
If different grouping conditions have been entered in the supplier registry, in the *Grouping parameters for customer/supplier* tab, these will take priority over the general parameters.
:::

When the DDT (Delivery Note Document) is created from a single order, all the header data present in the originating document is reported. For DDTs created from multiple orders, the supplier registry data is reported instead.    

#### Specific Fields

- **Summary**: if active, a single DDT will be created for each supplier at the time of order fulfillment. If not active, a DDT will always be created for each fulfilled order. Grouping only works for *Order Types* (Purchase or Sale, depending on the selected operation) that have coded the same *DDT Type* to be created. All subsequent flags must be used in conjunction with this flag.    

- **Grouping by document type**: if active, all documents with the same *Order Type* will be grouped into a single DDT.     

- **Grouping by year**: activating this flag will group by year of order creation.   

- **Grouping by month**: to enable grouping by order creation month, the previous flag must also be activated.    

- **Grouping by exchange rate**: if active, documents with the same currency and exchange rate will be grouped into a single DDT.    

- **Grouping by order**: this flag is only used for *Creating DDTs and sales invoices from Picking* (see [DDT Grouping Parameters](/docs/configurations/parameters/sales/dn-grouping) and [invoices](/docs/configurations/parameters/sales/invoice-grouping)).    

- **Grouping by project**: activating this flag will cause grouping by project. Grouping also works for projects entered at the item line level; if some item lines do not have an associated project, a separate DDT will be created for all articles that do not contain it. When the project has been entered in the headers of the source documents, it will also be reflected in the headers of the destination documents; alternatively, it will only be retained on item lines.    

- **Grouping for payment type and terms**: activating this flag will group based on the type and payment solution entered in the order; this data will be reported in the header of the created DDT.   

- **Grouping for destination**: activating this flag will result in grouping based on the destination specified within the orders; this data will be reported in the header of the created DDT, in the *Transport* tab.