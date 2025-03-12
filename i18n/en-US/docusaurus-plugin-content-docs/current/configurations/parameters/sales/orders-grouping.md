---
title: Order Grouping Parameters (Parametri raggruppamento ordini)
sidebar_position: 7
---

:::tip[Fast Start (FAst Start)]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, please refer to the checklist on the linked page.
:::

The grouping parameters allow you to define how to divide documents during fulfillment procedures. For this purpose, specific flags can be used to group documents based on different properties, such as category, document type, or other relevant characteristics.            
These general grouping parameters must be configured only once and will be automatically applied to all procedures, being valid for all customers and suppliers. However, if a customer or supplier requires a different behavior from what is set in the general parameters, it will be necessary to customize the grouping parameters within their specific registry.           
In this way, a flexible and adaptable management of fulfillments is ensured, allowing to meet the specific needs of each customer or supplier while maintaining a centralized and consistent configuration for most operations.

In this interface, the grouping rules for the procedure are decided:  
**Creating a sales order from quotes (Creazione ordine di vendita da offerte)**: in the case of fulfilling multiple quotes into an order, it is possible to group the quotes based on the following properties:
- **Document type**: quotes with the same [Type (Tipo)](/docs/configurations/tables/sales/sales-offer-type) will create a single order
- **Year**: quotes from the same year will create a single order
- **Month**: quotes from the same month will create a single order
- **Exchange**: quotes with the same exchange rate will create a single order
- **Project**: quotes with the same project in [Header (Testata)](/docs/sales/offers/insert-offer) will create a single order
- **payment type and solution (tipo e soluzione di pagamento)**: quotes with the same payment terms will create a single order
- **Destination**: quotes with the same destination and carrier will create a single order
 
It is necessary to flag the columns that allow for the desired groupings for this fulfillment. 
The flag **Summary** is essential to create a single document from various starting documents. The other flags relate to specific groupings.           
The **Priority** column is not currently utilized.