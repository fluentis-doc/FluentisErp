---
title: Periodic Closing Report
sidebar_position: 4
---

In this window, it is possible to update the existing [Sales Forecast Closures (Stampe Chiusura previsioni di vendita)](/docs/crm/sales-forecast-crm/report-forecast) or generate new ones. We remind you that these reports are used to compare the created Sales Forecasts with the documentation.         
In the first grid, the following fields can be entered:       
**Description**: contains the description of the report;      
**User**: contains the user who will create the report;       
**Opportunity Type**: it is necessary to indicate which [Opportunity Type (Tipo opportunità)](/docs/configurations/tables/crm/opportunities/opportunity-type) to consider and print in this report;       
**Sales Invoice Type (Tipo fattura di vendita)**: it is necessary to indicate which [Invoice Type (Tipo fattura)](/docs/configurations/tables/sales/invoices-type) to consider and print;       
**Sales order type**: it is necessary to indicate which [Order Type (Tipo ordine)](/docs/configurations/tables/sales/sales-order-types) to consider and print.      

To proceed with the creation of the report, it is necessary to select the chosen row and click the button on the toolbar *Create Sales Forecast Reports Closing*. A pop-up will then open where you can indicate to Fluentis how to execute the procedure by entering the following filters:      
**Sales Forecast**: indicate which [Sales Forecast (Previsione di vendita)](/docs/crm/sales-forecast-crm/new-sales-forecast) to include in the report;     
**Period Type Details (Dettagli tipo periodo)**: indicate which *Detail* of the [Period Type (Tipo Periodo)](/docs/configurations/tables/crm/sales-forecast/period-type) to use; the report will consider only the time period indicated in this field;      
**Company**: in this field, indicate in which company to carry out the operation.      
With the relevant flags below, it is necessary to indicate to Fluentis which documents to import into this report.          
Once the entered filters are confirmed, Fluentis will look for an existing [Closure Report (Stampa chiusura)](/docs/crm/sales-forecast-crm/report-forecast) (and without a Closure Date) for the same User and the same Period Detail and will insert the rows into it, if not already present. If a valid pre-existing Report is not found, a new one will be created. Inside, you will find the documents you have decided to import, ready to be compared with the Sales Forecast.   
  
There are conditions for importing Invoices and Orders into the report (the same as in the case of document import directly from within the [Closure Report (Stampa chiusura)](/docs/crm/sales-forecast-crm/report-forecast)):     
- The item lines of the documents must have an [Item Class (Classe articolo)](/docs/configurations/tables/logistics/item-class) associated with the Item Family included in the Sales Forecast;
- The [Sales Turnover (Fatturato vendite)](/docs/configurations/tables/sales/sales-turnover) associated with the item lines of the documents must be associated with the Item Family included in the Sales Forecast.        

There are also conditions for importing Opportunities:       
- the Agent assigned to the Sales Forecast must be the same Agent associated with the Contact heading the Opportunity;      
- In the Opportunity Detail, the Product Family expected in the Sales Forecast must be included.