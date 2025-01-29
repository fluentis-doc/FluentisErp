---
title: Parameters in the Purchase and Sales Area Modules 
sidebar_position: 35
---

The documents of the passive and active cycle provide their specific settings for valuing the *Corporate Centers*

## Purchase Area 
In the purchase area, configurations are available for Purchase Requests, Purchase Orders, Purchase Delivery Notes, and Purchase Invoices.

### Purchase Requests
In the module parameters, *Analytic* tab, we have the possibility to define the priority of valuing the centers among
- *Turnover Type*: regarding the chart of accounts associated with the item's purchase revenue
- *Items Register*: regarding the selected item
- *Register*: supplier associated with the request line
- *Warehouse*: the warehouse linked to the item line

### Purchase Orders 
In the module parameters, *Analytic* tab, we have the possibility to define the priority of valuing the centers among
- *Turnover Type*: regarding the chart of accounts associated with the item's purchase revenue
- *Items Register*: regarding the selected item
- *Register*: supplier of the order
- *Warehouse*: the warehouse linked to the item line
The following flags are also present:
- *Recompute*: when creating the order from a previous document (e.g., purchase request), this flag sets the recalculation of the analytics according to the parameters of the destination module
- *Cost/revenue centers compulsory*: requires the user to fully value the analytics of each item line
- *Evaluate priority by dimension*: this flag is only available for companies with *Controlling* active. If **not** present, ***FluentisERP*** will apply the search priority and stop its evaluation at the first entity that allows any valuation of the corporate centers. **If present**, ***FluentisERP*** will apply the priority to value all possible dimensions set in the various source entities (i.e., the account, from the item, from the warehouse, from the supplier)

### Purchase Delivery Notes 
In the module parameters, *Analytic* tab, we have the possibility to define the priority of valuing the centers among
- *Turnover Type*: regarding the chart of accounts associated with the item's purchase revenue
- *Items Register*: regarding the selected item
- *Register*: supplier of the order
- *Warehouse*: the warehouse linked to the item line
The following flags are also present:
- *Recompute*: when creating the order from a previous document (e.g., supplier order), this flag sets the recalculation of the analytics according to the parameters of the destination module
- *Evaluate priority by dimension*: this flag is only available for companies with *Controlling* active. If **not** present, ***FluentisERP*** will apply the search priority and stop its evaluation at the first entity that allows any valuation of the corporate centers. **If present**, ***FluentisERP*** will apply the priority to value all possible dimensions set in the various source entities (i.e., the account, from the item, from the warehouse, from the supplier)

In the procedure ***Create Delivery Note from Goods Receipt***, the parameter ***Cost/revenue centers recalculation*** is available, which sets the recalculation of the analytics according to the parameters of the destination module.

### Purchase Invoices 
In the module parameters, *Analytic* tab, we have the possibility to define the priority of valuing the centers among
- *Turnover Type*: regarding the chart of accounts associated with the item's purchase revenue
- *Items Register*: regarding the selected item
- *Register*: supplier of the order
- *Warehouse*: the warehouse linked to the item line
The following flags are also present:
- *Recompute*: when creating the order from a previous document (e.g., purchase delivery note), this flag sets the recalculation of the analytics according to the parameters of the destination module
- *Evaluate priority by dimension*: this flag is only available for companies with *Controlling* active. If **not** present, ***FluentisERP*** will apply the search priority and stop its evaluation at the first entity that allows any valuation of the corporate centers. **If present**, ***FluentisERP*** will apply the priority to value all possible dimensions set in the various source entities (i.e., the account, from the item, from the warehouse, from the supplier)

In the procedure ***Create Invoices from Goods Receipt***, the parameter ***Cost/revenue centers recalculation*** is available, which sets the recalculation of the analytics according to the parameters of the destination module.

In the procedure ***Valorization Purchase Delivery Notes***, the parameter ***Cost/revenue centers recalculation*** is available, which sets the recalculation of the analytics according to the parameters of the destination module.

In the procedure ***DDT and return valorization***, the parameter ***Cost/revenue centers recalculation*** is available, which sets the recalculation of the analytics according to the parameters of the destination module.

## Sales Area 
In the sales area, configurations are available for Sales Orders, Sales Delivery Notes, and Sales Invoices.

### Sales Offers 

### Sales Orders 
In the module parameters, *Analytic* tab, we have the possibility to define the priority of valuing the centers among
- *Turnover Type*: regarding the chart of accounts associated with the item's purchase revenue
- *Items Register*: regarding the selected item
- *Register*: supplier of the order
- *Warehouse*: the warehouse linked to the item line
The following flags are also present:
- *Evaluate priority by dimension*: this flag is only available for companies with *Controlling* active. If **not** present, ***FluentisERP*** will apply the search priority and stop its evaluation at the first entity that allows any valuation of the corporate centers. **If present**, ***FluentisERP*** will apply the priority to value all possible dimensions set in the various source entities (i.e., the account, from the item, from the warehouse, from the customer)

### Sales Delivery Notes 
In the module parameters, *Analytic* tab, we have the possibility to define the priority of valuing the centers among
- *Turnover Type*: regarding the chart of accounts associated with the item's purchase revenue
- *Items Register*: regarding the selected item
- *Register*: supplier of the order
- *Warehouse*: the warehouse linked to the item line
The following flags are also present:
- *Evaluate priority by dimension*: this flag is only available for companies with *Controlling* active. If **not** present, ***FluentisERP*** will apply the search priority and stop its evaluation at the first entity that allows any valuation of the corporate centers. **If present**, ***FluentisERP*** will apply the priority to value all possible dimensions set in the various source entities (i.e., the account, from the item, from the warehouse, from the customer)

### Sales Invoices
In the module parameters, *Analytic* tab, we have the possibility to define the priority of valuing the centers among
- *Turnover Type*: regarding the chart of accounts associated with the item's purchase revenue
- *Items Register*: regarding the selected item
- *Register*: supplier of the order
- *Warehouse*: the warehouse linked to the item line
The following flags are also present:
- *Evaluate priority by dimension*: this flag is only available for companies with *Controlling* active. If **not** present, ***FluentisERP*** will apply the search priority and stop its evaluation at the first entity that allows any valuation of the corporate centers. **If present**, ***FluentisERP*** will apply the priority to value all possible [*dimensions*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) set in the various source entities (i.e., the account, from the item, from the warehouse, from the customer)

In the procedure ***Creation from Delivery Notes***, the parameter ***Cost/revenue centers recalculation*** is available, which sets the recalculation of the analytics according to the parameters of the destination module.