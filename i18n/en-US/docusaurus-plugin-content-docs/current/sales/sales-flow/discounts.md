---
title: Price and Discount Retrieval (Ripresa prezzi e sconti)
sidebar_position: 1
---

The prices of products can be defined in sales price lists or directly in the item registry. In the price lists, prices can be "taxed" or "untaxed," a difference determined by the activation of the "Taxed Price (Prezzo Ivato)" flag in the header of the price list.

**Types of Price Lists (Tipologie di Listino)**      
Price lists are divided into two main categories: general and for customers. General price lists must be configured in the appropriate table, where it is also possible to specify whether the price list is "taxed" or "untaxed" through a flag. Customer price lists use the customer's account and sub-account as the code, making them unique and personalized.

Each price list is identified by three key elements:

- Type (general or for customers),
- Currency,
- Validity dates (from/to).     
Within each price list, the prices of items can be specified for the management unit of measure (mandatory and defined in the item registry) or for one of the alternative units of measure. Prices can also be associated with quantity ranges (tab "Price per Quantity") or specific goods destinations (tab "Destinations").

**Discount Management (Gestione degli Sconti)**      
Discounts can be configured in various ways:

- Customer Registry (Anagrafica Cliente): Discounts defined in the "Expenses/Discounts" tab are automatically applied to the sales document when a customer is selected. Multiple discounts can be associated.

- Payment Type (Tipo di Pagamento): Discounts related to the payment type are retrieved automatically when a payment type is selected or suggested in the document.

- Type of Price List (Tipologia di Listino): Discounts can be associated with each line of the price list grid in the customer registry.

- Item Price List (Listino Articoli): Discounts can be specified for each line item in the price list, even at the level of ranges (quantity or value discounts).

- Discount Policy Definition (Definizione Politiche di Sconto): Discounts can be configured for items, customers, item classes, commercial categories, discount categories, and discount category details.

**Price and Discount Retrieval Procedure (Procedura di Ripresa Prezzi e Sconti)**      
When an item is entered into a sales document, the price and discount retrieval procedure is activated. The system searches for a valid price list among those associated with the customer, starting with the type marked with the "default" flag or following the set search priority.

The search for a valid price list is based on the following criteria:

- The price list must include the item with the same currency as the customer.
- The validity date of the price list must fall between the start validity date of the line in the "Price Lists" tab and the document date.
If a valid price list is not found, and the "Search all default price lists (Ricerca in tutti i listini predefiniti)" flag is not active, the system uses the sales price from the item registry. If the flag is activated, the search continues among the other types of price lists present in the customer registry, according to the order of priority.

Searching for the item within the price list takes into account not only the item code but also the variant and the unit of measure. If the price is defined for an alternative unit of measure, the system inserts it into the document, activating the "Alternative Unit of Measure Price (Prezzo Unità di Misura Alternativa)" flag, and calculates totals based on the alternative quantity.

After identifying the price, discounts and tiered prices are also searched for. If the "Price Management (Gestione Prezzi)" flag is active in the customer registry's "Price Lists" tab, the system searches for any additional discounts in the "Discount Policy Definition" configuration. All discounts found are returned in the discount collection, indicating their origin.

**Final Considerations (Considerazioni Finali)**     
The same search logic applies to documents with both "taxed" and "untaxed" prices. However, if a document requires "untaxed" prices, the search is limited to price lists with this type of price, and vice versa for "taxed" prices.

Attention: If there is no valid price list and the item registry has a defined sales price, this will be proposed as the price for the document line, regardless of the type of price requested (taxed or untaxed).