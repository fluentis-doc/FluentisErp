---
title: Introduction (Introduzione)
sidebar_position: 1
---

The module is located in the **Purchasing > Purchase Requests (Acquisti > Richieste di acquisto)** area and allows for the creation, management, and monitoring of purchase requests, enabling the operator to internally process the request for materials to be purchased based on reports of inventory shortages, requests from various company departments, or demand forecasts.

### **Operational Flow (Flusso operativo)**

*Purchase Requests* can be manually entered by the operator when a need for materials or services is identified, or they can be automatically generated from: 

- **Safety Stock**: from the homonymous print located under the *Logistics > Management Prints >* [*Reorder Point*](/docs/logistics/warehouse/management-reports/safety-stock-execution), it is possible to generate RDA (Restocking Requests) for items that have availability lower than their reorder point.      
- **Production Planning (Pianificazione della produzione)**: General Planning and MRP can generate *planned purchase orders* based on the requests for materials needed for production. Such orders can be automatically or manually transformed into *Purchase Requests* through the [Release planned orders procedure](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders#richieste-dacquisto).     

Once *authorized*, the Purchase Request can generate a *Offer Request* using the **RDO Generator** button located within the RDA, or it can be transformed into a *Purchase order* using the [Automatic Order Creation procedure](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests).

### **Main Features (Funzionalità principali)**

- Request Automation: Automatically generate purchase requests based on signals such as reorder points or production planning, simplifying and speeding up the procurement process. 
- Monitoring and Tracking: Allows tracking the status of requests from submission to approval, until conversion into orders. 
- Reporting: Generates detailed reports with user-customizable layouts, providing useful information for managing and analyzing procurement activities.

### **Settings**

Before using the module, it is necessary to complete the following tables and parameters:     
> - [Numbering of purchase requests (Numerazione richieste di acquisto)](/docs/configurations/tables/fluentis-numerations)    
> - [Types of purchase requests (Tipi richieste di acquisto)](/docs/configurations/tables/purchase/purchase-request-type)
> - [Purchase request parameters (Parametri richieste di acquisto)](/docs/configurations/parameters/purchase/purchase-requests-parameters)