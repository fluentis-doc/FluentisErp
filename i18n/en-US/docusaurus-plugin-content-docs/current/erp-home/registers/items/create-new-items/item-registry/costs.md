---
title: Costs 
sidebar_position: 9
---

:::important What it is for 
In the Costs tab of the item registry in Fluentis, users can record various types of associated costs, including the last cost and the weighted average cost, which are automatically updated based on inventory movements. The last cost represents the most recent recorded purchase price, while the average cost is the result of the inventory movements, useful for calculating the value of the stock.       
The tab also allows for the definition of a standard cost, used as a reference for the year and typically updated annually. Additionally, it is possible to enter the selling price, from which to start creating sales price lists.          
This information is crucial for the valuation of inventory and financial planning, contributing to more effective management of items in stock.
:::

In this Tab, various costs associated with the item are entered.

These are editable fields in which the following will be defined:

**Latest cost** and **Average cost**: the last cost refers to the most recent purchase price, while the weighted average cost refers to the average cost that results from inventory movements. For both costs, the reason used for the inventory movement must have the *Update Average Cost/Last Cost* flag activated, as well as the flag for *Update Item Cost* and *Fiscal interest*, so that the related movements will be taken into account for the cost calculations.  

**Standard cost/next standard cost**: the standard cost is a cost set manually or by the cost calculation procedure and indicates the reference cost for a given item to use throughout the year. It is usually a cost that is updated at the beginning or end of the year. For purchase items, it usually corresponds to the average cost, while for other items, it is calculated by the [Cost Calculation](/docs/controlling/cost-calculation/cost) procedure located in the *Controlling* area, as the sum of the material costs and the production phase costs.

All these costs can be used for the valuations of the bill of materials, inventory stock, or (for purchase items) for the valuation of production orders (and related loading movements) when the item from a production order is loaded into the warehouse.

**Sales price**: base price from which one can start to create a sales price list in case a national starting price list is considered. If there are no price lists for this item, this item will take this price in documents (except for return documents where the item takes the price indicated in the last cost, which should be verified well) (it is not widely used).

**Discount category/Price tier configuration/Update policies for discount formulas**: these are purely commercial data used for price updates.

It will be used in documents and will never report discounts coming from the price lists in which it is contained, and commissions on sales of this item will not be calculated.