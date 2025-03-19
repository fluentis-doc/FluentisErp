---
title: Marketing Budget 
sidebar_position: 5
---

With this functionality, it is possible to create period budgets.        
The header data are as follows:       
**Budget period**: in this field, it is necessary to enter the [Period](/docs/configurations/tables/crm/sales-forecast/budget-period) to be used as the unit of division of the year; based on the selected period, the amounts entered subsequently will be automatically distributed across the various periods displayed in the table below *Periods*;      
**Description**: contains a free description;      
**Expiration Date**: contains an optional closing date for the budget;      
**Project**: it is possible to link a project.     

In the grid, it is possible to build the budget tree using the buttons on the toolbar. Each root node of the tree will contain the Sum of the quantities and amounts of the various underlying nodes. The final nodes of the tree are those in which expenses can be entered, through the following fields:      
**Charge type**: based on the selection of the [Expense Type](/docs/configurations/tables/crm/sales-forecast/expenses-type), it will be possible to enter a Description, an Account, or an Item;       
**Units of Measure**: contains the unit of measure to be used for the expense;      
**Total Quantity**: contains the total quantity to be distributed across the various budget Periods;       
**Unit price**: this field is automatically filled with the result of the division between *Total amount* and *Total Quantity*:        
**Total amount**: contains the Total Amount to be distributed across the various budget Periods.        
In the right grid, *Total Quantity* and *Total amount* are divided by the number of periods provided by the [Budget Period](/docs/configurations/tables/crm/sales-forecast/budget-period) entered in the header. This way, it will be possible to consult the Budget for each period. The *Period* grid is editable using the buttons on the ribbon bar, in case the calendar needs to deviate from the standard coding.