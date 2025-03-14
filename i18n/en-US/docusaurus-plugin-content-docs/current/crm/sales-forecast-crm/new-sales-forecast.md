---
title: Sales forecast management
sidebar_position: 2
---

This function can be accessed from **Sales forecast management**. From here, it is possible to view all the already coded sales forecasts and create new ones. Let’s analyze the characteristics of a New Sales Forecast.

The header consists of the following fields:       
**Sales forecasts type**: this data is extracted from the table [Sales Forecast Type (Tipo previsione di vendita)](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) and plays a crucial role in indicating to Fluentis in which periods the sales forecast should be divided. Through the association with the [Period Type (Tipo periodo)](/docs/configurations/tables/crm/sales-forecast/period-type) present in this table, Fluentis is able to determine whether the forecast should be divided on an annual, monthly, or otherwise specified basis;         
**Description**: this field contains a free description;      
**Year/Date/Number (Anno/Data/Numero)**: these fields are automatically filled based on the associated Numbering and the current Date.

In the first grid, it is possible to enter the lines related to the sales forecast. Using the buttons available in the toolbar, it is possible to construct a tree structure, for example, for geographical breakdown. Initially, you start from the first group and then detail the structure according to the desired levels of subdivision. The amounts in the second grid can only be filled at the Detail level, that is, after entering the last level of the tree. Once this last level is entered, the second grid will be automatically populated, breaking down the dates based on the [Period Type (Tipo periodo)](/docs/configurations/tables/crm/sales-forecast/period-type) set. Then, it will be possible to populate the Quantities and Amounts of the various periods in the second grid, allowing Fluentis to calculate the totals and report them in the first grid.

In the first grid, some fields are active when a Group is entered, while others are active when a Detail is entered, using the appropriate buttons in the toolbar.     
Let’s analyze the fields that can be filled if the row is a Group/Node:       
**Group Progressive**: each Group is assigned a progressive number;      
**Group description**: a free description can be entered for each Group;       
**Zone**: each Group can be associated with a different Zone;       
**Assigned user**: it is necessary to indicate the Operator responsible for the Sales Forecast in this Zone;       
**Agent**: it is possible to indicate an Agent responsible for sales in this Zone;      
**Note**: this is a free notes field.        

Let’s analyze the fields that can be entered if the row is a Detail:         
**Family Product**: this field contains the Item Family for which the forecast is being created, along with the related **Description**; only the [Item Classes (Classi articolo)](/docs/configurations/tables/logistics/item-class) associated with this Product Family will be considered for statistics;          
**Units of Measure**: the UM of the Family is proposed;      
**Detail Note**: this is a free notes field.         

There are also calculated fields:     
**Total Quantity**: this reflects the sum of the Period Quantities in the second grid;     
**Total amount**: this reflects the sum of the Period Amounts in the second grid;    
**Medium Unit Price**: this is calculated as the result of the operation *Total Quantity*/*Total amount*.     

In the second grid, the *Detail* of the [Period Type (Tipo Periodo)](/docs/configurations/tables/crm/sales-forecast/period-type) associated with the selected [Sales Forecast Type (Tipo previsione di vendita)](/docs/configurations/tables/crm/sales-forecast/sales-forecast-type) is displayed. Moreover, it will be possible to indicate a **Quantity** and an **Amount** for each row. These data, when summed, will form the **Total amount** and the **Total Quantity** of the first grid.