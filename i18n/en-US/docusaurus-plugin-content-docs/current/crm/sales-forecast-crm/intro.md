---
title: Introduction 
sidebar_position: 1
---

The Sales Forecast module of Fluentis ERP provides tools to manage and analyze sales forecasts in a structured way. Below is a technical description of its main features:     

**Sales forecast management**      
This function allows creating and managing sales forecasts directly from Sales Forecast > Sales Forecast Management. You can create new forecasts or view existing ones, specifying the type of forecast, which determines the time division (annual, monthly, or other). Forecasts are entered in a tree structure, with the first level defined as "Group" and subsequent levels as "Detail". Data related to quantities and amounts are entered at the Detail level and automatically divided based on the defined period. The data grid supports automatic calculation of totals and averages.         

**Sales Forecast Report Closing**       
This functionality allows comparing sales forecasts with actual data by importing documents such as invoices, orders, and opportunities. The imported data must meet specific conditions (e.g., the correspondence between item classes and product families) to be correctly associated with the forecast. Users can select the sales forecast to analyze, the reference period, and the documents to compare, allowing for accurate verification of goal achievement.       

**Periodic Closing Report**      
Allows the creation of closure reports that compare forecasts with actual data from business documents (invoices, orders, opportunities). Users can filter forecasts and specify documents to import into the report. The system checks if there are any incomplete previous closure reports for the same period, and if not, generates new ones. Documents are automatically associated with the selected forecast, providing a detailed comparison between forecasts and results.        

**Marketing Budget**          
Allows planning marketing budgets for a specific period. The module enables the creation of a tree structure to organize expenses and automatically distribute them across the defined periods. Expenses can be divided by type, with the possibility to enter total quantities and amounts, which are then allocated to the selected periods. The system provides an interface to modify calendar details and adapt budget periods to specific needs.        

In summary, this module allows for advanced management of sales forecasts, comparing them with actual data through document imports, and supporting detailed planning through integration with marketing budgets.