---
title: Purchase Requests Parameters
sidebar_position: 5
---

The parameters for purchase requests allow for basic settings to manage correctly and according to the specific requests of each individual company.

#### Buttons  

> **Save**: allows you to save the set parameters.  
> **Restore**: allows you to restore the parameters to their initial values.

### General

**Cost zero if price lists are missing**: the price is searched in the price lists; if not found and this flag is active, a price of 0 is set in the request line. If not active and the other parameter is also not active and the price is not found in the price list, it searches for the last cost in the item registry and if it's not found, it sets it to 0.

**Last cost if price lists are missing**: when active, if it does not find the price in the price list and does not find the last cost in the item registry, it takes the maximum price from the purchase requests for the same supplier and item.

**Expand BOM**: if active, when an item is entered it will be replaced by the first level of its bill of materials, if it exists. Thus, instead of the item “finished product,” the order will be populated with the bill of materials of the entered item.

### Analytical

In this tab, you specify the priority for retrieving the cost center (CdC) or profit center (CdP) in the document line.

It is possible to modify the priorities using the buttons:

> **Move Up** and **Move Down**

**Default values (Valori di default)**: the CDC or CDP is retrieved from the invoiced type if present. For further details, refer to the table [Invoiced Type Purchases (Tipo Fatturato Acquisti)](/docs/configurations/tables/purchase/purchase-invoices-type). If it is not present in the invoiced type, the system will look for it in the *Supplier Registry (Anagrafica fornitore)*. If not present, it will be searched in the *Item registry*.