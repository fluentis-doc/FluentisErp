---
title: New Supplier Price List (Nuovo Listino fornitore)
sidebar_position: 3
---

The form is opened via the path **Purchases > Supplier Price Lists > New Price List (Acquisti > Listini Fornitore > Nuovo Listino)**.  

The form consists of three parts: *Upper section*, *Items*, and *Details*.

## **1. Mandatory Data (Dati obbligatori)**

The mandatory header fields for entering a new price list are:

- **Supplier** for which the price list is created.  
- **From validity date**: the current date is automatically proposed but can be modified.  
- **Currency**: the company's currency is automatically proposed but can be modified.  

:::important Important (Importante)
To make a price list valid for a supplier, it must be entered in the contact registry, tab *Price list*. Consult the [documentation](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) dedicated.
:::

### Optional Fields (Campi opzionali)

- **To validity date**: used if you want to define a promotional campaign or give an expiration date to the price list. It can be entered in bulk for multiple price lists via the [Price Lists Search (Ricerca listini)](filter) using the *Closed* button.   
- **Discount price list from registry**: if an additional discount structure has been associated in the [supplier registry (anagrafica fornitore)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list), it will be displayed in this read-only field.  
- **Notes**: to enter any notes associated with the price list.   

After entering the mandatory header data, it is necessary to press the *Save* button to proceed with the entry of items into the grid.


## **Items**

In this section, the items and any discounts associated with this price list will be indicated. The columns present in the grid are:

- **Class/Item/Description (Classe/Articolo/Descrizione)**: contains the code of the item to be included in the price list; to insert a new item in the grid, simply position yourself on the row to fill in the various data or use the *New Item* button present in the ribbon bar.  
- **Supplier Item Code/Description (Codice/Descrizione Articolo fornitore)**: if the supplier's item code is different from the company's item code.
- **Supplier Variant Item Code/Description (Codice/Descrizione Variante articolo fornitore)**: if the supplier's variant also distinguishes one item from another.
- **Units of Measure**: may be the management unit of the item or one of its alternative units of measure.
- **Item brand (Marca dell'articolo)** if specified.
- **Quantity**: is the reference quantity for the price and is proposed as 1; if different from 1, when calculating the price it will be divided by the quantity of the price list.
- **Price** referred to the currency of the price list; this column is visible if the price list is not *Price including VAT*; otherwise, only the tax-included price is visible.
- **Additional value** and **Additional percentage**: are used when creating sales price lists from supplier price lists; this value is added to the supplier's price.

### 2.1 Details (Dettagli)

In this section, for each item in the price list, it is possible to enter different types of discounts. In the **Bracket type**, you can enter the default discount type to be applied to the price list. The tier type entered here takes precedence over the one entered in the registry.
In the tabs on the right, various discounts for the price list can be entered; indeed, it is possible that the same item in the price list has different associated discounts, but it will be possible to choose the tier to use directly in the document.

The types of discounts that can be entered are explained below.

### 2.2 Discounts (Sconti)

These discounts are fixed and are reported on the documents regardless of the quantity or other variables stated in the order: a typical example is commercial discounts.       
The fields present in this grid are:
- **Discount Type/Description (Tipo sconto/Descrizione)**: in this field, you need to select the discount type from the coded ones.        
- **Priority**: this value is taken from the settings entered in the [Discount Types table (Tipi sconto)](/docs/configurations/tables/general-settings/discount-types) and indicates the priority for retrieving the discount.       
- **Cascade/Amount**: this data is also taken from the settings in the [Discount Types table (Tipi sconto)](/docs/configurations/tables/general-settings/discount-types); if the discount is *Cascading*, it is calculated on the taxable amount reduced by already calculated discounts; if it is *Taxable*, it is calculated on the taxable amount.          
- **Percent Completed**: set the percentage of discount to apply.       

### 2.3 Quantity Discounts (Sconti a quantità)

This type of discount allows for different percentages of discount depending on the quantity purchased. The columns present are:      
- **Discount**: in this field, you need to select the [Discount Type (Tipo sconto)](/docs/configurations/tables/general-settings/discount-types) from the coded ones.         
- **Quantity**: set the quantity for which the discount will be activated.          
- **Percent Completed**: enter the percentage discount to be applied upon reaching the indicated quantity.      

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

In the reported example, if 2 units are purchased, we will have a 7% discount, with 3 units a 10% discount, and so on.

### 2.4 Value Discounts (Sconti a Valore)

In this type, the discount triggers when a certain amount is reached for the document line. The columns present are:     
- **Discount**: in this field, you need to select the [Discount Type (Tipo sconto)](/docs/configurations/tables/general-settings/discount-types) from the coded ones.            
- **Value**: set a value above which the discount triggers.
- **Percent Completed**: enter the percentage of discount to apply upon reaching the value.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

In the reported example, if for the item line the value is less than 100 euros, there will be no discounts. With a value between 100 and 200, we will have a 2% discount. If the value is between 200 and 300, a 4% discount will be applied. If the value exceeds 300 euros, a 6% discount will be applied.

### 2.5 Price by Quantity (Prezzo per quantità)

In this case, upon reaching a certain quantity, the unit price changes. The columns present are:      
- **Quantity**: set a value above which the "custom" price triggers.      
- **Unit price**: enter the unit price for the ordered quantity.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

In the reported example, if for the line the quantity is less than 100 euros, the price will be that of the price list. With a quantity between 100 and 120, we will have a unit price of 10. With a quantity between 120 and 140, we will have a unit price of 9, and so on.

### 2.6 Notes (Note)

The user can define notes with their validity date.

### 2.7 Extra Data (Extra data)

The list of **Extra data** linked to the item is displayed, with the possibility of adding new extra data useful only for the document in question. The *To print* flag allows you to choose which extra data to print.

### 2.8 Attached Documents (Documenti allegati)

The details of any **Attached Document (Documento allegato)** (name, document type, any notes, our/your reference) are displayed. For instructions on how to attach a document, please refer to the article [Attach Documents (Allega documenti)](/docs/guide/common/operations-with-data/attach-documents).