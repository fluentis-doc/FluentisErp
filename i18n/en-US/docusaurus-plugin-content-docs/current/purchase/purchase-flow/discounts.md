---
title: Price and Discount Recovery 
sidebar_position: 1
---

The recovery of **prices and discounts** is an automated process that ensures the alignment of purchase documents with the updated supplier price lists. When an item is entered into a document, the system checks the available price lists, considering suppliers, currencies, and validity dates, and applies the appropriate prices and discounts.

## Supplier Price Lists

Each **Purchase price list** is identified by three key elements:

- **Supplier**
- **Currency**
- **Validity Dates (from/to)**

Within each price list, item prices can be specified for the management unit of measure (mandatory and defined in the item registry) or for one of the alternative units of measure. Prices can also be associated with quantity ranges (tab "Price by Quantity") or specific goods destinations (tab "Destinations").

## Discount Management 

**Discounts** can be configured in various ways:

- **Supplier Registry*: Discounts defined in the "Expenses/Discounts" tab are automatically applied to the purchase document when a supplier is selected. Multiple discounts can be associated.
- **Payment Type**: Discounts related to the payment type are automatically retrieved when a payment type is selected or proposed in the document.
- **Price list**: Discounts can be associated with each line of the price list grid in the supplier registry.
- **Item Price List**: Discounts can be specified for each item line in the price list, even at the level of range (quantity or value discounts).
- **Definition of Discount Policies**: Discounts can be configured for suppliers, item classes, discount categories, and discount category details.

:::important Remember   
To manage **Discount on AmountOrigin**, it is necessary to activate the general parameter GEN-GlobalSettings_CalculateDiscountOnAmount from the database for the company of interest.  
If this parameter is not active, discounts on taxable amounts will be transformed into cascading discounts.  
:::

## Price and Discount Recovery Procedure 

When an item is entered into a purchase document, the **price and discount recovery** procedure is activated. The system looks for a valid price list among those associated with the supplier, starting from the type with the "default" flag or following the established search priority.

The search for a valid price list is based on the following criteria:

- The price list must include the item with the same currency as the supplier.
- The validity date of the price list must be between the start validity date of the line in the "Price Lists" tab and the document date.

If a valid price list is not found, and the flag [Search in all predefined price lists](/docs/configurations/parameters/purchase/purchase-orders-parameters/) is activated, the search continues among the other price lists available in the supplier registry, according to the order of priority. If the previous flag is not active, but the "Zero cost in absence of price lists" flag is activated, the item will be entered with a zero price. Alternatively, the system uses the *last cost* from the item registry.

The search for the item within the price list takes into account not only the item code but also the variant and unit of measure. If the price is defined for an alternative unit of measure, the system inserts it into the document, activating the "Alternative Unit of Measure Price" flag, and calculates the totals based on the alternative quantity.

After identifying the price, discounts and tiered prices are also sought. If the "Price Management" flag is active in the "Price Lists" tab of the supplier registry, the system searches for any additional discounts in the "Definition of Discount Policies" configuration. All found discounts are reported in the discount collection, indicating their origin.