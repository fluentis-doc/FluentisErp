---
title: New Sales Price List (Nuovo listino di vendita)
sidebar_position: 2
---

To create a New Sales Price List, you need to click *New* from the Price List Search form. The form is composed of three parts: Upper Section, Items, and Details.

## **1. Mandatory Data (Dati obbligatori)**

The mandatory header fields for entering a new price list are:
- **Price list**: a price list can be *General* (potentially valid for all customers) or *Customized (Personalizzato)* (valid for a specific customer); it is necessary to select the appropriate option to determine the price list to be created.     
- **P. list type**: this field is active only if the price list is generic and contains the [Price List Type](/docs/configurations/tables/sales/sales-price-lists).      
- **Client**: this field is active only if the price list is customized and contains the customer for whom the price list is created. In this mode, the Contact field is also activated, allowing for the selection of one of the reference persons entered in the customer registry; although this field does not affect documents, it is useful for visibility restrictions, limiting access to personal documents only.

:::important[Important]
To make a price list valid for a customer, it is necessary to enter it in the customer registry. Please refer to the [documentation](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) dedicated to this. 
:::

- **Currency**: contains the currency to be used; the currency of the company is proposed by default.      
- **Starting validity date**: contains the date from which the price list will be considered valid; the current date is proposed by default.    

#### Optional Fields (Campi non obbligatori)    
- **Price including VAT**: if active, this flag indicates that the price list will be created with the price including VAT, so its items will not have a Price column, but only the Price including VAT column, which will directly show the sum of Price and VAT; this flag is proposed if present in the [Price List Type](/docs/configurations/tables/sales/sales-price-lists) table but is modifiable. For more flexible management, in the [Sales Price List Parameters](/docs/configurations/parameters/sales/price-list-parameters), it is possible to force the display of both the price and the price including VAT through the show price and show price including VAT flags, regardless of the setting of the price list type.      
- **Expiration Date**: if the price list should no longer be valid after a certain date, the date should be entered in this field.       
- **Minimum price list**: this informational flag indicates that the price list is at minimum selling prices.       
- **Search configuration**: this setting has two possible functions: showing some Extra Data at the price list level, or controlling some information (for example, payment type) for different types of operations.      
Finally, there is an **Items filter** that allows for quick searching of items in the price list; it is used in case of very large price lists. 

## **Items**

In this section, the items and any discounts associated with this price list will be indicated. The columns present in the grid are:    
- **Class/Item/Description (Classe/Articolo/Descrizione)**: contains the code of the item to be included in the price list; to insert a new item in the grid, simply position yourself on the line to fill in the various data or use the *New Item* button present in the ribbon bar.            
- **Code/Variant Description (Codice/Descrizione variante)**: in the columns dedicated to the variant, we can associate the item's variants and the respective selling price for each, to be proposed in documents; only by managing price lists is it possible to manage the price proposal for a variant.      
- **Units of Measure**: can be the management one of the item or one of its alternative units of measure; when creating documents, based on the specified unit of measure, a valid price list for that unit of measure will be proposed.      
- **Brand**: if specified.      
- **Quantity**: proposed equal to 1; it is the reference quantity of the price; if different from 1, when calculating the price, it is divided by the quantity in the price list.
- **Price** related to the currency of the price list; this column is visible if the price list is not at Price including VAT.     
- **VAT**: this field is retrieved from the customer registry; if not set for the customer, it will be necessary to populate this field with the VAT code.  
- **Price including VAT**: the system calculates this price as the sum of the price and the rate of the entered VAT code.     
- **Price Range**: this setting is used to select customer price lists based on price ranges settable in the extra data related to the items; it is possible, for the same item, to have differentiators for which the price list is different: just think of clothing items where the selling price changes with the size.

### 2.1 Details (Dettagli)

In this section, for each item in the price list, it is possible to enter various types of discounts. 
In the **Bracket type**, it is possible to insert the default discount type to apply to the price list. The bracket type entered here takes precedence over any entered in the registry.        
In the sub-tabs below, it is possible to enter the various discounts for the price list; indeed, it is possible for the same price list item to have several associated discounts, but it will be possible to choose the bracket to use directly in the document.       

The types of discounts that can be entered are explained below.      

#### 2.1.1 Discounts (Sconti)

These discounts are fixed and are reported on documents regardless of the quantity or other variables specified in the order: a typical example is commercial discounts.       
The fields present in this grid are:
- **Priority**: this value is taken from the settings entered in the [Discount Types](/docs/configurations/tables/general-settings/discount-types) table and indicates the priority for retrieving the discount.       
- **Discount Type/Description (Tipo sconto/Descrizione)**: in this field, you need to select the type of discount among those coded.        
- **Value**: set the percentage discount to apply.       
- **Cascade/Amount**: this data is also taken from the settings entered in the [Discount Types](/docs/configurations/tables/general-settings/discount-types) table; if the discount is Cascading, it is calculated on the taxable amount reduced by already calculated discounts; if it is Taxable, it is calculated on the taxable amount.         

#### 2.1.2 Quantity Discounts (Sconti a quantità)

This type of discount allows for different percentage discounts depending on the quantity sold. The columns present are:      
- **Type**: in this field, you need to select the discount type among those coded.         
- **Quantity**: set the quantity for which the discount will be activated.          
- **Percent Completed**: enter the percentage discount upon reaching the specified quantity.      

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

In the example shown, if 2 units are sold, we will have a discount of 7%, 3 units a discount of 10%, and so on.

#### 2.1.3 Value Discounts (Sconti a Valore)

In this type, the discount activates when a certain amount is reached for the document line. The columns present are:     
- **Type**: in this field, you need to select the discount type among those coded.         
- **Value**: set a value above which the discount activates.
- **Percent Completed**: enter the percentage discount to apply upon reaching the value.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

In the example shown, if the value per line is less than 100 euros, there will be no discounts. With a value between 100 and 200, there will be a 2% discount. If the value is between 200 and 300, a 4% discount will be applied. If the value exceeds 300 euros, a discount of 6% will be applied.

#### 2.1.4 Price by Quantity (Prezzo per quantità)

In this case, upon reaching a certain quantity, the unit price changes. The columns present are:      
- **Quantity**: set a value above which the "customized" price activates.      
- **Unit price**: enter the unit price for the ordered quantity.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

In the example shown, if the quantity per line is less than 100 euros, the price will be that of the price list. With a quantity between 100 and 120, we will have a unit price of 10. With a quantity between 120 and 140, we will have a unit price of 9, and so on.

#### 2.1.5 Notes (Note)

At the informational level, it is possible to insert notes related to a particular type of discounting.

#### 2.1.6 Destinations (Destinazioni)

With this parameter, it is possible to decide if for a destination of the customer, the unit price should be different. Additionally, it is possible to manage this particular type of promotion for a specific date. The columns present are:    
- **Destination**: must be an address from the contact registry linked to the billing customer.   
- **From/To Date (Data DA/A)**: enter a date range for proposing a price different from the price list only for the specified destination.   
- **Price**: enter the price for the destination.

## **Extra data**

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## **Documents attached**

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />