---
title: Purchase Invoice Grouping Parameters (Parametri raggruppamento Fatture di acquisto)
sidebar_position: 7
---

The grouping parameters allow you to define how to split documents during fulfillment procedures. To this end, specific flags can be used to group documents based on various properties, such as category, document type, or other relevant characteristics.            
These general grouping parameters should be configured only once and will be automatically applied to all procedures, making them valid for all customers and suppliers. However, if a customer or supplier requires a different behavior than what is set in the general parameters, it will be necessary to customize the grouping parameters within their specific registry.           
In this way, flexible and adaptable management of fulfillments is ensured, allowing for the specific needs of each customer or supplier to be met while maintaining a centralized and consistent configuration for most operations.

In this form, the grouping rules for the following procedures are decided:   
-  [**Valorization of Purchase DDT**](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization);  
-  [**Valorization of Return DDT**](/docs/purchase/purchase-invoices/procedures/return-delivery-notes-valorization).   

It is necessary to select the columns that include the groupings you want to establish for these fulfillments. 

:::note Note
If different grouping conditions have been entered in the supplier registry, in the *Grouping parameters for customer/supplier* tab, these will take priority over the general parameters.
:::

When the invoice is created from a single DDT, all the header data present in the original document is included. For invoices created from multiple DDTs, the supplier registry data is included instead.    

#### Specific Fields  

- **Summary**: if active, when valuing multiple DDTs, a single invoice will be created for the supplier. If not active, an invoice will always be created for each valued DDT. Grouping works only for *DDT Types* (Purchase or Sale, depending on the selected operation) that have encoded the same *Invoice Type* to be created. All subsequent flags must be used concurrently with this flag.    

- **Grouping by document type (Raggruppamento per tipo documento)**: if active, all documents with the same *DDT Type* will be grouped into a single invoice.     

- **Grouping by year (Raggruppamento per anno)**: by activating this flag, grouping will be done by the year of creation of the DDTs.   

- **Grouping by month (Raggruppamento per mese)**: to enable grouping by month of creation of the DDTs, the previous flag must also be activated.    

- **Grouping by currency (Raggruppamento per cambio)**: if active, documents with the same currency and exchange rate will be grouped into a single invoice.    

- **Grouping by order (Raggruppamento per ordine)**: this flag is used only for *Creation of DDTs and invoices from Picking* (see [DDT Grouping Parameters](/docs/configurations/parameters/sales/dn-grouping) and [Invoices](/docs/configurations/parameters/sales/invoice-grouping)).    

- **Grouping by project (Raggruppamento per progetto)**: by activating this flag, grouping will be done by project. Grouping also works for projects entered at the item line level; if some item lines do not have an associated project, a different invoice will be created for all items that do not contain one. When the project is entered in the header of the source documents, it will also be included in the header of the destination documents; otherwise, it will only be kept on the item lines.    

- **Grouping for payment type and terms**: by activating this flag, grouping will be done based on the type and payment solution entered in the DDT; this data will be reflected in the header of the created invoice.   

- **Grouping for destination**: by activating this flag, grouping will be done based on the destination entered within the DDTs in the *Transport* tab; this data will be reflected in the header of the created invoice, in the *Shipping* tab.