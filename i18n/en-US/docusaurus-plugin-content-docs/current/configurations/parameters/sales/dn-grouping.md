---
title: DDT Grouping Parameters 
sidebar_position: 8
---

:::tip[Fast Start (FAst Start)]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist on the linked page.
:::

The grouping parameters allow you to define how to divide the documents during fulfillment procedures. For this purpose, specific flags can be used to group documents based on various properties, such as category, document type, or other relevant characteristics.            
These general grouping parameters need to be configured only once and will be automatically applied to all procedures, remaining valid for all customers and suppliers. However, if a customer or supplier requests behavior different from that set in the general parameters, it will be necessary to customize the grouping parameters within their specific registry.            
This ensures a flexible and adaptable management of fulfillments, allowing to meet the specific needs of each customer or supplier while maintaining a centralized and consistent configuration for most operations.

In this mask, the grouping rules for the procedures are decided:  
- **Create SalesDeliveryNote from Picking**;  
- **Create SalesDeliveryNote from PickingList**;   
- **Create SalesDeliveryNote from TransferPickingList**;   
- **Create SalesDeliveryNote from Pos**;  
- **Creation of sales DDT from customer order**.      

In the case of fulfilling multiple documents, it is possible to group them based on the following properties by inserting the relevant flags:  
- **Document type**: source documents with the same [Type](/docs/configurations/tables/sales/sales-order-types) will create a single DDT  
- **Year**: source documents from the same year will create a single DDT  
- **Month**: source documents from the same month will create a single DDT  
- **Exchange**: source documents with the same exchange rate will create a single DDT  
- **Project**: source documents with the same project in [Header](/docs/sales/sales-orders/create-new-sales-orders/sales-order) will create a single DDT  
- **Payment type and solution**: source documents with the same payment conditions will create a single DDT  
- **Destination**: source documents with the same destination and carrier will create a single DDT   
- **Joint holders**: source documents with the same operation type for the management of fixed assets will create a single DDT  

It is necessary to check the columns that foresee the groupings that you want for these fulfillments.      
The flag **Summary** is essential to create a single document from multiple starting documents. The other flags, on the other hand, concern specific groupings.     
The **Priority** column is not currently in use.