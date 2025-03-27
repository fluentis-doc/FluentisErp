---
title: Production Job Order Generation 
sidebar_position: 2
---

The **Production Job Order Generation** procedure allows you to generate production job orders from customer orders, forecasts, and/or safety stock.

### Customer Orders {#sales-orders}

In this tab, you can filter the customer order lines that you want the **Production Job Order Generation** procedure to analyze.

To be visible in this tab, the order lines must meet the following **requirements**:

- the item subject to the customer order line must have the flag *Production Job Order Generation* enabled in its [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters);  
- the line must not have been fulfilled through *Picking list*, *Delivery Note*, or *Sales Invoice*;  
- the line must not have been *Forcefully Executed* and therefore must be in *Not Executed* or *Partially Executed* status;  
- no *Production Job Orders* should have been generated from the line yet;  
- the line must have the *Goods Ready Date* entered in the *Sales Order* within the *Items* tab from which it originates;  
- the sales order from which the line originates must be *Printed* and *Confirmed*.

:::note Note
The absence of ANY ONE of these conditions prevents the customer order line from being displayed in the grid.
:::

In the filtering area, you can filter only the order lines you want to display based on the available filters. Once the necessary filters are set, clicking the **Search** button will display all the order lines corresponding to the specified filters in the results grid.

*Fields*

**Type**: represents the type of sales order;  
**Number**: represents the number of the sales order;  
**Year**: represents the year of the sales order;  
**Sales Order Date**: represents the date of the sales order;  
**Line Number**: represents the line number of the sales order;  
**Class** and **Item Code**: represent the class and the code of the item;  
**Variant**: represents the variant of the item;  
**SO Date**: represents the order insertion date;  
**Quantity**: represents the quantity still to be fulfilled for the order line;  
**Availability**: represents the available quantity of the item on the goods ready date of the order line;  
**MU**: represents the units of measure;  
**Delivery**: represents the goods ready date of the order line;  
**Job Order Type** and **Job Order Description**: represent the code and the description of the job order type;  
**Item Description**: represents the description of the item;  
**Account Description**: represents the company name of the customer.  

:::note Note
The **Availability** column shows zero for all rows if the flag *Consider item availability* present in the **Parameters** tab is disabled.
:::

*Specific Buttons*

> **Consider for Job Orders**: allows you to move the selected job order lines to the **Summary** tab, where they can be considered for the production job order generation procedure.  

> **Flow generation**: the button is enabled only if the flag *Automatic generation of production flow* has been enabled in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro). With this button, you can directly launch the execution of the complete production flow and therefore the *creation* of *Production Job Orders* that would be directly scheduled and, depending on the subsequent flags set in the [MPS Parameters](/docs/configurations/parameters/production/mps-parameters), scheduled *Planned Orders* and *Production Orders* may also be generated.

### Forecast {#forecast}

In this tab, you can filter the lines of *Sales Forecasts* or the *Master Production Schedule* that you want the **Production Job Order Generation** procedure to analyze, using the filters for item and variant.

The lines of the *Sales Forecasts* that can be displayed in this tab must meet the following **requirements**:

- the annual sales forecast must be in *Consolidated* status;  
- the annual sales forecast must have been generated with a valid *Version*;  
- no *Production Job Orders* should have been generated from the forecast line yet;  
- from the lines of the *Master Production Schedule* that can be displayed in this tab, no *Production Job Orders* should have been generated yet.

In the filtering area, you can filter only the order lines you want to display based on the inserted *filters*.  
**See variant**: the active flag allows you to view the variant;  
**End scheduling month**: serves to display only the sales forecasts that go up to the indicated date in the grid;  
**Job Order Type**: represents the type of production job order to be generated;  
**Order Types**: the grid allows you to set the *Sales Order Types* that must be taken into account in conjunction with the quantities present in the sales forecasts, so that the job order creation procedure generates the production job order with a quantity equal to the greater, less, or sum of the quantities present for the same item in the sales order line and/or in the production forecast or master plan.

Once the necessary filters are set, clicking the **Search** button will display all the forecast lines corresponding to the specified filters in the results grid.

*Fields*

**Class**, **Code**, and **Item Description**;  
**Variant**: is displayed if the corresponding flag has been selected; if it has been decided in the filtering area to display it;  
**Year**: represents the year of the sales forecast;  
**Month/Week**: represents the number of the month or week of the sales forecast;  
**Job Order Generation Date**: represents the date of generation of the production job order;  
**Forecast Start/End Dates**: for example, if the forecast is set for the month of May, the start date will be 01/05 and the end date will be 31/05;  
**Quantity**: represents the quantity related to the individual forecast line;  
**Account/Detail Account/Account Description**: represents the order customer's account related to the sales forecast line (if present).  

*Specific Button*

> **Consider for job orders**: allows you to move the selected lines to the **Summary** tab, where they can be considered for the production job order generation procedure.

### Safety Stock {#safety-stock}

Through this tab, you can filter the lines of items managed under Safety Stock that you want the *Production Job Order Generation* procedure to analyze.  
The only **requirement** that allows the item to be visible in this grid is that it has, in its [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), the *Management Type* set to *Safety Stock*.

In the filtering area, you can filter only the order lines you want to display based on the inserted *filters*.  
**See variant**: the active flag allows you to view the variant;  
**Production Job Order Type**: allows you to decide the type of production job order to be generated;  
**Under ROL on date**: represents the date until which you do not want the items in the grid to go below safety stock.

Once the necessary filters are set, clicking the **Search** button will display all the item lines corresponding to the specified filters in the results grid.

The data you can view in the grid include:  
**Class**, **Code**, and **Item Description**;  
**Variant**: is displayed if the corresponding flag has been selected; if it has been decided in the filtering area to display it;  
**Reorder Level**, **Minimum Stock**, and **Reorder Days**: are retrieved from the *Item Registry* > *Procurement* tab;  
**Average Daily Usage**: is calculated by subtracting the minimum stock from the reorder point and dividing the result obtained by the reordering days;  
**Quantity of multiples of the economic production batch** and its **Multiples**: are retrieved from the [MRP parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the item;  
**On hand**: shows the stock of the item as of the current date;  
**Initial Availability**: represents the availability of the item on the day the processing is launched;  
**Final Availability**: represents the availability of the item on the day indicated in the **Under ROL on date** box present in the filtering area;  
**Minimum Availability**: represents the minimum availability that the item presents in the period between the initial availability date and the final availability date.

:::note Note
For documents lacking a Delivery Date, the parameter *If are not specified the delivery date* present in the Parameters tab is considered.
:::

The *lower grid* displays the details of the availability of the selected item in the main grid.

:::note Note
In the first row of the grid, the availability is given by the sum of the stock and all expired documents (with a date prior to today).
:::

*Specific Button*

> **Consider for job orders**: allows you to move the selected lines to the **Summary** tab, where they can be considered for the production job order generation procedure.

Only the lines for which the procedure considers it able to create a production job order will be transferred to the *Summary* tab. The procedure proposes a production job order for each item and tries to ensure that on the day when the item risks falling below the minimum stock level, it is replenished through a production job order with the same date as the stockout date. The quantity of this job order should allow survival until the indicated **Under ROL on date** date in the filtering area: obviously, if the item presents economic production lots or purchases and multiples, they are respected.

### Summary

This tab presents the lines that have been moved from the previous tabs and need to be transformed into production job orders.

The tab contains:  
- the section **Proposed Production Job Order** where the user can set the **Type**, **Year**, and **Number** of the production job order to which the selected lines in the same **Summary** tab should be added.  
- the results grid where the item lines that have been moved from the other tabs will be displayed.

*Grid Fields*:

**Data from**: represents the source tab of the line;  
**Class**, **Item Code**, and **Description**: represent the class, code, and description of the item;  
**Variant**: represents the variant of the item;  
**Quantity **: represents the quantity of the order proposed by the procedure;  
**Availability**: represents the available quantity of the item at the *Delivery Date*;  
**Delivery Date**: represents the end date of the proposed production job order (which can be manually modified by the user);  
**Forecast Start Date**: represents the forecast start date;  
**Type Code**: represents the code of the sales order;  
**Sales Order Number**: represents the number of the sales order;  
**Account/Detail Account/Account Description**: represent the sales account related to the sales forecast line (if present);  
**Job Order Type** and **Job Order Description**: represent the code and description of the job order type.

After selecting the desired lines, the user has the opportunity to create the production orders based on the criteria set in the **Parameters** tab, using the **Automatic creation of job order** button. At the end of the processing, the procedure presents a window specifying the numbers of the generated job orders, on which the user only needs to click OK and close.

*Specific Button*  
> **Automatic creation of job order**: calls the procedure that generates the production job orders from the selected lines.

### Parameters

Through this tab, all parameters regarding the management of the creation of production job orders and how to manage the phases following the generation of the job orders themselves are set. Some settings present in this tab are retrieved from the [MPS Parameters](/docs/configurations/parameters/production/mps-parameters).

**Method of job order generation**:  
- **Job Order Type** (Monoproduct / Multiproduct): the data that was set in the [MPS Parameters](/docs/configurations/parameters/production/mps-parameters) tab is proposed again. At the time of generating the order from the *Production Job Order generation*, this setting can still be modified within this window, as can the subsequent combo;  
- **Grouping products for**: combo through which it is possible to indicate how items should be grouped within the same *Monoproduct* or *Multiproduct* job order.

> If the job order type is *Monoproduct*, the only allowed grouping is by *Item*; this type of management allows the user to have the system automatically generate a series of *Monoproduct* job orders by selecting a list of lines from *Sales Orders*, lines from *Sales Forecasts*, or from the *Master Production Schedule*, or from *Safety Stock*, ensuring that each generated job order has the sum of the requested quantities for the same item. The end date of a grouped job order is always equal to that of the nearest requirement date when launching the processing.  
> If the job order type is *Multiproduct*, groupings can be made by customer or project, allowing the user to include multiple items in the same *Multiproduct* job order from customer order lines linked to the same customer, the same sales job order, or the same sales job order from the same customer.

**Procurement Priority**: the combo displays the procurement priority that was set in the [MPS Parameters](/docs/configurations/parameters/production/mps-parameters) by selecting a priority from those coded in the *Procurement Priority* table found among the tables in the *General Settings* section.

**Update Existing Job Orders**: the selected job orders in the summary tab are added to an already existing job order (indicated in the *Proposed Production Job Order* box of the **Summary** tab), if and only if the **Update Existing Job Orders** flag in the parameters tab is enabled. An already saved job order where the lines can be added will automatically be proposed if one exists with that type and date.

Below, through appropriate flags, you can indicate whether the order should be generated from **Sales Orders** or from a **Forecast** (and in the case of the forecast whether from **Sales Forecasts** or from the **Master Production Schedule**), or, lastly, from **Safety Stock**. In the latter case, a specific algorithm is used as explained in the section dedicated to the [Safety Stock](#safety-stock) tab.

**Forecast**: if the flag is active, you can then decide with which temporal mode the production job orders should be generated, from the following options:  
> **Monthly**: in this case, the production job order will be generated in the month in which the end date of the Sales Forecast falls or in the month in which the quantity was entered in the Master Production Schedule. The user can also set the day of the month on which the automated job order creation procedure should set the expected end date of the job order itself;  
> **Weekly**: in this case, a production job order will be generated for every week of the month in which the end date of the Sales Forecast falls or the month in which the quantity was entered in the Master Production Schedule. The user can also set the day of the week on which the automated job order creation procedure should set the expected end date of the job order itself;  
> **Real**: in this case, a production job order will be generated for every week of the month in which the end date of the *Sales Forecast* falls or the month in which the quantity was entered in the *Master Production Schedule*, but considering the exact end date of the individual line of the *Sales Forecast*;  
> **Weekly, considering production days of delivery zone**: in this case, a production job order will be generated taking into account the production days of the delivery zone associated with the customer for whom the *Sales Forecast* was created;  
> **Grouping forecasts by customers**: the flag serves to ensure that production job orders are generated by grouping the forecast lines of the same customers.

**If are not specified the delivery date** the section concerns exclusively the *Sales Orders* tab and the *Safety Stock* tab of the *Production Job Order Generation*. Here the user can decide whether, in cases where the *Goods Ready Date* is missing in the sales order line to be analyzed by the procedure, the line lacking a date should be ignored, or if a certain date as the estimated end of the generated job order should be accepted, or if a certain date as the estimated start of the generated job order should be accepted (in these last two cases, the dates must be selected in the two dedicated combos).

**Consider item availability**: the flag allows, if activated, for the item availability to be displayed in all tabs of the *Production Job Order Generation* regarding the availability of the item at the *Estimated End Date* of the production job order that will need to be created. The same happens in the *Summary* tab. Availability is taken into account based on the flags activated in the *MPS Parameters* (Work Account, Purchases, Sales, Production, Warehouse). In this case, when the job order is created, the procedure will take into account the availability by creating the job order for the difference between the demand and the availability of that item.

**Warehouses for job order scheduling**: the grid displays the warehouses that have been entered in the [Calculate Availability](/docs/erp-home/registers/items/calculate-availability) window. From this *Parameters* tab, they can only be viewed and not modified.

**Production Site**: this information, if indicated, is used to make the procedure consider for the job order generation from sales order only the confirmed sales order lines, where the expected picking warehouse is associated with that production site.

**Compute quantity according to item EOQ**: if activated, this flag ensures that the procedure generates the production job order considering the economic purchase lot entered in the [Preferential Vendors](/docs/erp-home/registers/items/create-new-item) tab on the vendor designated as default, if the item analyzed in the *Production Job Order Generation* has *Procurement Type* as *Purchase* or *Subcontractor*, and the economic production lot entered in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) if the item subject to the job order has *Procurement Type* as *Production*. 

**Compute quantity according to items multiples**: if activated, this flag ensures that the procedure generates the production job order also considering the multiples of the economic purchase lot entered in the preferential vendors tab on the vendor designated as default for the items if the item subject to the job order is of *Procurement Type* *Purchase* or *Subcontractor*, and the multiples of the economic production lot entered in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) if the item analyzed in the *Production Job Order Generation* has *Procurement Type* as *Production*. Obviously, this flag can only be activated if the flag mentioned in the previous paragraph is active.

**Replenish item minimum stock**: if activated, this flag allows the user to ensure that for the item analyzed in the *Production Job Order Generation*, the minimum stock indicated in the *Item Registry > Procurement tab* is replenished.

**Replenish item ROL**: if activated, this flag allows the user to ensure that for the item analyzed in the *Production Job Order Generation*, the reorder point indicated in the *Item Registry > Procurement tab* is replenished.

**Exclude delayed orders**: if activated, this flag allows the user to ensure that the production job order generation procedure excludes from the availability calculation of the analyzed item the quantities coming from sales order lines whose *Goods Ready Date* is earlier than the current date.

Once the parameters are set, you can proceed with creating the job orders in the respective tabs of [Sales Orders](#sales-orders), [Forecast](#forecast), and [Safety Stock](#safety-stock).

*Specific Button*  
> **Automatic creation of job order**: calls the procedure that generates the production job orders from the selected lines.  

For details on the common functionality of the forms, refer to the link [Custom Features, Buttons, and Fields](/docs/guide/common).