---
title: Sales Orders Parameters
sidebar_position: 3
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, please refer to the checklist on the linked page.
:::

The parameters of customer orders allow for basic settings to manage correctly and according to the specific requests of each individual company. The window related to these parameters consists of 4 different tabs: General, Fulfillment, Shipping, and Analytical.

### General

**Management of double measurement unit**: if active, in the order lines, the two columns Alternative UM and Alternative Quantity will be displayed, allowing the management of the double unit of measure, always considering that the checks for fulfillment are based on the main unit of measure.      

**Automatic proposal of alternative UM:** this flag becomes editable only if the double unit of measure management flag is activated and allows the alternative unit of measure set in the item registry to be displayed in the articles tab of the order, in the specific column 'Alternative UM'; if not active, the unit of measure will not be proposed.      

**Check Availability:** this flag and others related to control, visibility, and mandatory checks by area are not managed in the current version.     

**Order Reference:** if this flag is set, the Reference to the order will be inserted in the title of the project created from the order; the composition note must be specified in the *Description* field according to the parameters described in the label.     

**Search item price in all the defaults price list:** when searching for the price and discounts for an item within an order, the system follows rules based on the settings configured in the customer registry under the *Price Lists* section. If the 'default' option is activated on a specific type of price list, the search for prices and discounts will focus only on that specific type of price list; if the "default" flag is not active, the system will extend the search to all types of existing price lists, following a priority order. In practice, with the 'default' flag active, the system will first look for a valid price list for the predetermined type; if no results are found, it will check the other types of price lists in the order of priority entered. However, if there is no type of price list set as 'default' in the customer registry and there are only priorities, this parameter will not affect the search, even if active.       

**Propose the commission for the free items:** with this flag, agent commissions will also be proposed for promotional item lines as for Codified Article lines.     

**Allow discounts for the giveaways items:** with this flag, discounts will be applied to the line amount even for promotional item lines.     
 
**Compulsory ratio between boxes and qty:** if set, the flag forces the user to enter a quantity corresponding to or a multiple of the number of packs defined in the *Weights/Dimensions* tab of the item registry; if the quantity is not the pack count or a multiple, the message will appear: “Item not sellable in quantity less than or not a multiple of."      

**Propose economic lot:** if the flag is active and an economic lot has been defined for the customer of the document in the item registry, during the order line entry, the quantity will be automatically proposed equal to the economic lot.  
If the flag is not active, the verification is performed at the time of confirming the line: if the entered quantity is less than the economic lot, the message “The quantity cannot be less than …” will be returned.        

**Check items in exhaustion:** if set, this flag will show a warning pop-up if items that have the flag in Registry set to Running Out and the date when the item is running out are entered in the order; this check prevents selling items that will no longer be produced or restocked.      

**[Enable simplified discount widget](/docs/sales/sales-flow/discount-widget):** by activating this flag in the Articles section, two new columns will be displayed: *Item discounts* and *Item final discounts*. The *Item Discounts* column is editable and shows discounts automatically applied based on the customer, item, price list, or discount category settings. The user has the ability to insert, modify, or delete discounts directly in this column. To use this widget, it is necessary to not only activate the flag but also specify which type of discount to use in the order type.     

**Use customer item:** if set, this flag will insert, in the articles grid of the order, the columns for the Code and Customer Description entered in the item registry, Client tab.       

**Use barcode:** if set, this flag will insert, in the articles grid of the order, the column to show the item's barcode.     

**Allow modification of the production job order from the linked customer order**: if active, it allows modification of the production job order linked to an order.

**Mandatory user code:** this flag makes it mandatory to fill in the *Operator* field in the header.     

**Block the document insertion in public holidays from the factory calendar:** if active, the system does not allow the insertion of the offer on holidays (the Factory Calendar of the company is checked first, then the Production Capacity Calendar); if not active, the system does not perform any checks and allows for document entry.     

**Use Matrix Configurator**: this parameter activates the management of matrices.

**Expand BOM:** if active, when an item is entered, it will be replaced by the first level of its bill of materials, if it exists; thus instead of the “Finished product” item, the order will be populated with the bill of materials of this item.         

**Propose commercial data for manually exploded bill of materials:** if active, this flag indicates that for the first-level components entered through the flag “Explode bill of materials,” list prices, discounts, and commissions will be proposed as for coded items.         

**BOM Version Management:** if active, the flag enables the Version column of the bill of materials in the articles tab to allow the selection of a version different from the default one automatically used.        

**Do not group during the insert from BOM:** if active, the flag allows inserting the first-level components of the bill of materials in different lines even if they have the same material code.        

### Fulfillment

In this tab, the following fields are present:       

**Payment:** specifies the value used for the payment of the customer order in the case of multiple fulfillment of projects in Order: *First order*, *Register*, or *Manual selection*.

**Recipient:** specifies the value used for the recipient of the customer order in the case of multiple fulfillment of projects in Order: *First order*, *Register*, or *Manual selection*.

**Grouping by type and payment solution:** specifies that customer orders will be grouped by type and payment solution when fulfilling from the Orders search form with the buttons Evasion DDT or Evasion invoices.       

**Grouping for destination:** specifies that customer orders will be grouped by recipient and destination when fulfilling from the Orders search form with the buttons Evasion DDT or Evasion invoices.       

**Execution grid view:** if active, the flag enables grid mode in the sales order fulfillment form.      

**Execution tree view:** if active, the flag enables tree mode in the sales order fulfillment form.

### Shipping

**Priority of parameters inserted for each order line:** if active, the warehouse and the shipping reason are read from the order lines, while if not activated, the warehouse and the reason entered in the subsequent fields (*Warehouse* and *Warehouse Template*).

### Analytical

This TAB specifies the priority for retrieving the Cost Center (CDC) or Profit Center (CDP) in the order line.      
It is possible to modify the priorities using the buttons **Move Up**![](/img/neutral/common/move-up.png) and **Move Down**![](/img/neutral/common/delete-cc.png).     
*Default values*: the CDC or CDP is retrieved from the invoiced type if present.     
For further details, refer to the table [Invoiced Type](/docs/configurations/tables/sales/sales-turnover).      
If it is not present in the *Turnover type*, the system will look for it in the *Customer contact*. If not present, it will be searched in the item registry and subsequently at the warehouse level.       
The flag **Evaluate the priority of each dimension** ensures that in documents, the CDC/CDP are grouped by dimension in the Analytical tab.