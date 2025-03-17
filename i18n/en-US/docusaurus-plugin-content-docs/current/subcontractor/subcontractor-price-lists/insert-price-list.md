---
title: Insert Subcontractor Price Lists 
sidebar_position: 1
---

From this application, it will be possible to enter subcontractor price lists.

## Upper Section

In the upper section, it is necessary to enter the **Supplier**.
In the input form, the values for the **From validity date** field (the current date is proposed for the start of validity) and the [Currency](/docs/guide/common/glossary/glossary-intro#currency) (the company's currency is proposed, but it can be modified) are automatically suggested.
Any **Discount price list from registry** is displayed, and it is possible to enter **Notes**.

In the upper section, there is also the filter to search for Items within the price list.

## Items

In this form, the Items and any discounts associated with this price list will be indicated.

**Class/Item/Description**: indicate the item code to be included in the price list. The description will be retrieved automatically based on the item code. To insert a new item into the grid, simply position on the line to fill in the various data or use the *New Item* button present in the ribbon bar.

**Code/Variant Description**: needed if, in addition to the item code, the variant distinguishes one item from another.

**Phase code**: it is possible to associate an eventual [External Phase](/docs/configurations/tables/production/standard-phases) that will be performed by the contractor to the item. This way, it is possible to define a price for each phase of the same item; the **Phase** and **Subphase** fields will be filled in automatically;

**Units of Measure**: can be the management unit of the item or one of its alternative units of measure.

**Quantity**: proposed equal to 1, it is the reference quantity for the price; if different from 1, when calculating the price, it is divided by the price list quantity.

**Price** refers to the currency of the price list.

**VAT**: this field is retrieved. If not set on the customer, it will be necessary to populate this field with the VAT code.

**Price including VAT**: the system calculates this price based on the price and the VAT rate of the inserted VAT code.

**Height/Width/Depth**: informational data relating to the price list. The system does not use these fields for any calculations.

For each item in the price list, it is possible to enter some types of discount as explained below.

The **Bracket type** is indicated in the corresponding field, while the subsequent fields will display the data related to the items included in the price list.

These tiers are indicated in the *Discount Types* table.

On the right side of the form, there is a grid that lists all possible discounts for this item. These are filled only by selecting an item present in the price list.

### Discounts

These discounts are fixed discounts reported in the documents.

Below is the correct compilation of this grid:

**N**: populated by the system, indicates the order in which discounts are considered.

**Discount Type/Description**: select the discount type from those present. Standardly, 3 different types are expected: *Commercial Discount*, *Discount per quantity*, and *Discount per value*.

**Value**: set the percentage of discount to apply.

**Priority**: this priority is brought from the settings made in the [Discount Types](/docs/configurations/tables/general-settings/discount-types) table.

**Casc./Amount**: populated from the value entered in the Discount Types table.

### Quantity Discounts

This type of discount can have different percentages based on the quantity.

**Type**: set the discount type to be *Discount per quantity*. This indication will then be printed.

**Quantity**: set the quantity for which the discount will be activated.

**Percent Completed**: enter the percentage discount upon reaching the indicated quantity.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

### Value Discounts

In this type, the discount occurs when a certain amount per line is reached.

**Type**: set the discount type to be *Discount per value*.

**Value**: set a value above which the discount occurs.

**Percent Completed**: enter the percentage discount upon reaching the value.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

### Price by Quantity

In this case, upon reaching a certain quantity, the unit price changes.

**Quantity**: set a value above which the "customized" price will be activated.

**Unit price**: enter the unit price for the ordered quantity.

These discounts will accumulate with any other potential discounts present.

### Notes

For informational purposes, it is possible to enter notes related to a particular type of discounting.

### Attached Documents

import DocAttachDocument from './../../import/sections/doc-attach-document.md'

<DocAttachDocument />