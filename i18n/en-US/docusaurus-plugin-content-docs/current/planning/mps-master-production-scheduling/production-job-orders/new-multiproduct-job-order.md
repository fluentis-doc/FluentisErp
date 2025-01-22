---
title: New Multiproduct Job Order
sidebar_position: 5
---

The form opens via the path **Planning > Production Job Orders** by clicking on the **Insert Multiproduct Job Order** button in the **Production Job Orders** form.

## Specific Buttons

> [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): this button allows you to open the screen related to the MRP parameters of the item;  
> [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): allows you to open the screen related to the bill of materials of the item;  
> [Work Cycles](/docs/erp-home/registers/production/routes/new-route): allows you to view the work cycle and the related production phases of the item.

## Multiproduct Job Order Management

This tab is the same as the one present in the [Monoproduct Job Orders Insertion](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order).

The *substantial difference* lies in the fact that there is no section where the item with its related data is entered, as occurs for the creation of a monoproduct job order; instead, this space is replaced by a grid that allows the entry of not one, but multiple items as it is indeed a multiproduct job order.

The fields present in the grid are the same as those of the [Monoproduct Job Order](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order); the only difference is the **Progressive** field which is editable by the user, where a progressive line number of the *MultiProduct Production Job Order* is proposed, and the estimated start/end dates, suggested date, and start and end forecast dates are specified for each item present in the multiproduct job order (the sections Estimated Date and Effective Date referring to the overall status of the multiproduct job order remain).

### Sales Order References

The tab contains a read-only grid, where the sales orders linked to the reference production job order appear when the job order has been generated from one or more lines of sales orders.  
**Type/Year/Number**: in these columns, the *Type/Year/Number* of the sales order containing the detailed line is displayed;  
**N./Quantity/*MU**: in this column, the quantity of the sales order line of which the detail is displayed is shown;  
**Goods Ready Date**: in this column, the date of the ready goods set in the sales order line of which the detail is displayed is shown;  
**Account**: in this column, the account and sub-account of the customer to whom the sales order containing the detailed line is addressed are displayed.

### Extra Data

This tab is also composed of a grid where all the extra data related to the item present in the production job order will be reported.

## Costing

All information related to **Costing** can be consulted on the [Costing page](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).

## Extra Data

This tab, which runs alongside the *Multiproduct Job Order Management* tab, contains the entire set of [extra data](/docs/configurations/utility/extra-data/extradata/search-extradata) linked to the production job order.

For details on the common functionality of the forms, please refer to the link [Custom Features, Buttons, and Fields](/docs/guide/common).