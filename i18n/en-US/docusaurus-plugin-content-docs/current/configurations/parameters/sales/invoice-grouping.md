---
title: Invoice Grouping Parameters 
sidebar_position: 9
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist on the linked page.
:::

Grouping parameters allow you to define how to divide documents during fulfillment procedures. For this purpose, you can use specific flags to group documents based on various properties, such as category, document type, or other relevant characteristics.            
These general grouping parameters must be configured only once and will be automatically applied to all procedures, being valid for all customers and suppliers. However, if a customer or supplier requests a behavior different from that set in the general parameters, it will be necessary to customize the grouping parameters within their specific registry.           
This way, flexible and adaptable management of fulfillments is ensured, allowing for the specific needs of each customer or supplier to be met, while maintaining a centralized and consistent configuration for most operations.

In this mask, the grouping rules for the procedures are decided:  
- **Valorization SalesDeliveryNote**;  
- **WorkReport valorization**;  
- **Create SalesInvoice from Picking**;  
- **Create SalesInvoice from PickingList**;  
- **Create SalesInvoice from Pos**.       

In the case of fulfilling multiple documents, they can be grouped based on the following properties, by inserting the corresponding flags:  
- **Document type**: source documents with the same type will create a single invoice;   
- **Year**: source documents from the same year will create a single invoice;  
- **Month**: source documents from the same month will create a single invoice;  
- **Exchange**: source documents with the same exchange rate will create a single invoice;  
- **Project**: source documents with the same project in the header will create a single invoice;  
- **Payment type and solution**: source documents with the same payment conditions will create a single invoice;  
- **Destination**: source documents with the same destination and carrier will create a single invoice;    
- **Joint holders**: source documents with the same operation type for the management of assets will create a single invoice.  

It is necessary to check the columns that include the groupings you want to implement for these fulfillments. 
The flag **Summary** is essential to create a single document from different starting documents. The other flags relate to specific groupings.      
The **Priority** column is not currently used.