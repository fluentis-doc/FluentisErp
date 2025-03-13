---
title: Sales Forecast Report Closing
sidebar_position: 3
---

In this form, it is possible to import the documentation and compare it with the [Sales Forecasts](/docs/crm/sales-forecast-crm/new-sales-forecast) previously created, to understand if the goals of the forecast have been achieved.      
In the header, the following fields are present:     
**User**: contains the operator performing the operation;     
**Period type**: this field automatically populates by entering the next field and suggests the [Period Type](/docs/configurations/tables/crm/sales-forecast/period-type) associated with the forecast;      
**Sales forecast**: it is required to enter the [Sales Forecast](/docs/crm/sales-forecast-crm/new-sales-forecast) that we want to analyze and compare with the documentation;     
**Year/Date/Number (Anno/Data/Numero)**: these fields are automatically populated based on the associated numbering and the current date;     
**Period type detail**: this data is fundamental to indicate which Period Detail (taken from the table [Period Type](/docs/configurations/tables/crm/sales-forecast/period-type)) to consider;             

In the **Data** tab below, it is possible to import the documentation using the buttons on the toolbar. The tab presents three grids, one for each type of document: Invoices, Orders, and Opportunities.      
There are conditions for importing Invoices and Orders:     
- The item lines of the documents must have a [Item Class](/docs/configurations/tables/logistics/item-class) associated with the item family entered in the Sales Forecast;
- The [Sales Turnover](/docs/configurations/tables/sales/sales-turnover) associated with the item lines of the documents must be linked to the item family entered in the Sales Forecast;      

There are also conditions for importing Opportunities:       
- The agent assigned to the Sales Forecast must be the same agent associated with the contact holder of the Opportunity;      
- In the Opportunity Detail, the product family predicted in the Sales Forecast must be entered.