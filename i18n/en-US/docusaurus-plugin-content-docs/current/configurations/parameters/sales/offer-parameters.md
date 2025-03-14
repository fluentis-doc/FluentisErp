---
title: Offer Parameters 
sidebar_position: 2
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, please refer to the checklist on the linked page.
:::

The offer parameters allow for basic settings to manage correctly and according to the specific requests of each individual company. The window consists of two tabs: General and Shipping.

### General 

The fields present in this tab are:      

**Management of double measurement unit**: if active, the offer lines will display two columns Alternative UM and Alternative Quantity, thus allowing the management of the double unit of measure, always considering that the primary unit of measure is used for fulfillment controls.     

**Automatic proposal of alternative UM:** this flag becomes editable only if the management of the double unit of measure flag is activated and allows the alternative unit of measure set in the item registry to be displayed in the article tab of the offer, in the appropriate 'Alternative UM' column; if not active, the unit of measure is not proposed.       

**Search item price in all the defaults price list**: when searching for the price and discounts for an item within an offer, the system follows rules based on the settings configured in the customer registry, under the *Price Lists* section. If the 'default' option is activated for a certain type of price list, the search for prices and discounts will focus only on that specific type of price list; if the "default" flag is not active, the system will extend the search to all types of available price lists, following a priority order. In practice, with the 'default' flag active, the system will first look for a valid price list for the default type; if it does not find results, it will check the other types of price lists in the order of priority set. However, if there is no price list set as 'default' in the customer registry and there are only priorities, this parameter will not affect the search, even if active.       

**Propose the commission for the free items**: with this flag, agent commissions will also be proposed for free item lines, just as for lines of Type Coded Item.                

**Allow discounts for the giveaways items**: with this flag, discounts on the line amount will be applied even for free item lines.    

**Check items in exhaustion**: if set, this flag will cause a warning pop-up to appear if items that have the out-of-stock flag set in their registry and the out-of-stock date are entered in the offer.          

**[Enable Simplified Discount Widget](/docs/sales/sales-flow/discount-widget)**: activating this flag in the Articles section of non-hierarchical offers will display two new columns: *Item discounts* and *Item final discounts*. The *Article Discounts* column is editable and shows discounts automatically applied based on customer, item, price list, or discount category settings. The user has the ability to input, modify, or delete discounts directly in this column. To use this widget, it is necessary to not only activate the flag but also specify in the offer type what type of discount to use.     

**Use customer item**: if set, this flag will insert, in the offer's article grid, the columns for Code and Customer Description entered in the item registry, Customer tab.       

**Use barcode**: if set, this flag will insert, in the offer's article grid, the column to report the item's barcode.     

**Mandatory user code**: this flag makes it mandatory to fill in the *Operator* field in the offer header.     

**Block the document insertion in public holidays from the factory calendar**: if active, the system does not allow the entry of the offer on holiday dates (the Production Calendar is checked first, then the Capacity Calendar); if not active, the system does not perform any checks and allows the document to be entered.     

**Offer reference**: if this flag is set, the Offer Reference will be inserted into the title of the project created from the offer; the composition of this note must be entered in the *Description* field according to the parameters described in the label.     

**Default cost material offer origin type**: in this field, it is possible to indicate the *Origin Cost Type* to be used as the starting amount for calculating the revenue of the *Materials* from a [hierarchical offer](/docs/sales/offers/insert-offer).       

**Item Order Resources from Offer**: in this field, it is possible to indicate which coded item to associate with the resources of an Offer, for creating the lines of the Order from a [hierarchical offer](/docs/sales/offers/insert-offer).      

**Prototype references**: in this section, it is possible to compose the note referring to the prototype associated with the offer; it will be reported in the *Prototype* field of the *Activities* tab of the hierarchical offer.     

**Block confirmation and offer conversion in order if there are non-coded prototypes**: this flag prevents confirmation and conversion of the offer into an order if non-coded prototypes are associated.

### Shipping

The shipping parameters are used only to propose the warehouse and the reason in the lines of non-hierarchical offers.

**Priority of parameters inserted for each order line**: if active, the warehouse and the shipping reason are read from the order lines, while if not activated, the warehouse and the reason entered in the subsequent fields (**Warehouse** and **Warehouse Template**) will be used.