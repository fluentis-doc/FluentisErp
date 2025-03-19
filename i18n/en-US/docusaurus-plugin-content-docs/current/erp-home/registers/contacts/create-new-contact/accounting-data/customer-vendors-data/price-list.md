---
title: Price list
sidebar_position: 6
---

In the tab, it offers the possibility to link the *Sales Price List* related to the contact to allow for the valuation of the documents.

**Price search by priority**: this flag enables the priority column in the articles grid. In the case of customers, with this option, multiple price lists (both general and customized) can be associated with the customer, which will be evaluated in cascade from priority 1 to priority N;

**Price list calculation for best price**: with this option, all applicable price lists for customers are evaluated to select the one that guarantees the best price to the customer.

**Management of prices from the preferred supplier's purchase price list**: this flag, visible only for customer registries, enables the management of prices from the purchase list of the preferred supplier for the item.

**Management of sales prices from the supplier's price list**: this flag, visible only for supplier registries, enables the management of prices based on the prices of the preferred supplier.

### Price list
The grid allows the entry of price lists applicable to the customer/supplier, according to the priorities and validity dates. 

For customers, the choice of general price lists is available, while for suppliers, only the list of customized supplier lists is present.

The *Validity date* will be used to identify the price lists that have, in turn, a start validity date higher than this: since there can be multiple price lists of the same type with different validity dates, the price of the item will be identified from the most recent price list (even without setting an end validity date for the list itself). Thus, every time a new updated price list is created for that customer, it will not be necessary to replace it in the registry, because thanks to the validity date, the most recent one will be considered directly.

:::note[Note]
To link a price list to the customer/supplier, you must first create the general or customized price list for the customer through the *Price List Creation* procedure, and once created, go to the *Contact Registry > Price list tab* and select the price list within the *Price list grid*.
:::

### Discount Structures for Price list

For each customer/supplier price list, it is possible to associate, on the right, an additional discount structure specific to the subject in use. For example, customer1 could have the general price list (which already includes a 10% discount on some items) plus an additional cash discount of 2% (which will be applied additionally, so there will be items with 10%+2% and others with only 2%) and customer2 with the general list + 3% (which will thus have 10%+3% and 3%).

### Sales Price list with Automatic Update from Supplier Orders 

Linked to the supplier price list, there is the possibility to associate a list of sales price lists that automatically update when the supplier list itself changes, according to a criterion of increase (percentage) and rounding.

*Specific buttons*:
> **Delete Price list**: to delete the selected price lists.    
> **Delete Discounts for Price list**: to delete the selected discounts for the price list.  

For everything not detailed in this document regarding the common functionality of forms, refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).