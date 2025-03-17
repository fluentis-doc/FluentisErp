---
title: Sales Invoices Parameters
sidebar_position: 5
---

:::tip[FAst Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist on the linked page.
:::

The parameters for sales invoices allow for basic settings to manage correctly and according to the specific requests of each individual company. The window related to these parameters consists of 4 different tabs: General, Fulfillment, Shipping, and Analytical.

### General

**Management of double measurement unit**: if active, the invoice lines will display two columns: Alternative UM and Alternative Quantity, allowing for the management of the double unit of measure, always keeping in mind that it is the primary unit of measure on which fulfillment checks are made.      

**Automatic proposal of alternative UM:** this flag becomes editable only if the double unit of measure management flag has been activated and allows the alternative unit of measure set in the item registry to be displayed in the invoice item tab, in the designated 'Alternative UM' column; if not active, the unit of measure will not be proposed.      

**Check Availability:** this flag and the others related to control, visualization, and obligation considering area are not managed in the current version.     

**Default volume/weight unit of measure:** these units of measure are considered as default UMs to be proposed in the [Transport](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) tab of the DDT, as units of volume and weight; this data is modifiable in the documents.

**Search item price in all the defaults price list:** when searching for the price and discounts for an item within an invoice, the system follows rules based on the settings configured in the customer registry, under the *Price Lists* section. If the 'default' option is activated on a specific type of price list, the search for prices and discounts will focus only on that specific type of price list; if the "default" flag is not active, the system will extend the search to all types of price lists present, following a priority order. In practice, with the 'default' flag active, the system will first look for a valid price list for the predefined type; if it finds no results, it will check the other types of price lists in order of priority. However, if there is no price list set as 'default' in the customer registry and there are only priorities, this parameter will not influence the search, even if active.

**Propose the commission for the free items:** with this flag, agent commissions will also be proposed for the article lines of type gift just as they are for lines of type Coded Item.

**Entry of commissions in types 6 and 7 (Deposit/Refund)**: if active, it allows the entry and management of commissions also for row types 6 and 7 of invoices. For further information, refer to the article related to the [entry of the invoice](/docs/sales/sales-invoices/invoicing/sales-invoice).

**Allow discounts for the giveaways items:** with this flag, discounts will also be calculated for free items and will affect the totals.

**Negative prices in credit notes:** if active, the system will notify a warning if there are positive prices within credit notes. If not active, the system will make no checks and will return no warnings.

**Check items in exhaustion:** with this flag, the management of items running low is activated; if there is an Out of stock Date present in the item registry along with the relevant flag, Fluentis will notify the user with a pop-up if the item is inserted into the document.

**[Enable Simplified Discount Widget](/docs/sales/sales-flow/discount-widget):** by activating this flag in the Items section, two new columns will be displayed: *Item Discounts* and *Final Item Discounts*. The *Item Discounts* column is editable and shows discounts applied automatically based on customer, item, price list, or discount category settings. The user has the option to enter, modify, or delete discounts directly in this column. To use this widget, it is necessary to activate the flag and specify in the invoice type which type of discount to use.

**Use customer item:** if set, this flag will insert, in the article grid of the invoice, columns for the Code and the Customer Description entered in the item registry, Customer tab.

**Use barcode:** if set, this flag will insert, in the article grid of the invoice, the column to display the item barcode.

**Mandatory user code:** this flag makes it mandatory to fill in the *Operator* field in the header.

**Block the document insertion in public holidays from the factory calendar:** if active, the system does not allow the entry of the offer on holidays (first checking the Company's Factory Calendar, then the Production Capacity Calendar); if not active, the system does not perform any checks and allows the document to be entered.

**Recompute transport
:** this flag ensures that in the [Transport](/docs/sales/sales-invoices/invoicing/sales-invoice) tab of the invoice, the totals for weight, volume, and packages of the document lines are reported; without this flag, the fields will not be filled.

**Riferimenti esterni ordine:** this flag ensures that the *Our* and *Your reference* fields are transferred from the order/DDT lines to the invoice lines.

**Maintain price from purchase order for the brackets:** it is used in the fulfillment of orders in the invoice when the fulfilled quantity is different (usually partial) from the ordered quantity for which a price or a quantity range discount has been entered. If the price or discount does not depend on the delivered quantity but only on the quantity ordered, this flag should be activated; if the range price or discount should not be included in the delivery document in case the fulfillment does not occur for the total quantity of the order, the flag should not be activated.

### Fulfillment

**Payment:** specifies the value used for the payment of the customer invoice in the case of multiple fulfillment of the sales order: *First order*, *Register*, or *Manual selection*.

**Recipient:** specifies the value used for the recipient of the customer order in the case of multiple fulfillment of the sales order: *First order*, *Register*, or *Manual selection*.

**Recalculate CDC/CDP:** in the case that the invoice is generated from the customer order with the appropriate procedure, activating this flag will cause the system to recalculate the cost and profit centers in the invoice, not considering those set in the sales order. If not active, the system will not recalculate this data but will keep those entered in the customer order;

**Grid display of fulfillment:** if active, the flag enables grid mode in the sales DDT fulfillment form.      

**Tree view of fulfillment:** if active, the flag enables tree mode in the sales DDT fulfillment form.

### Shipping

**Create recording with document date:** if active, the warehouse registration is done with the same date as the invoice, and it will not be necessary to specify the registration date in the shipping form. If not active, it will be necessary to specify the date in the invoice shipping form;

**Priority of warehouse and shipping reason for item lines in DDT:** if active, the warehouse and shipping reason are read from the invoice lines; if not activated, the warehouse and reason inserted in the subsequent fields (Warehouse and Warehouse Reason) will be used.

**Automatic Load/Unload:** if active, the unloading of the DDT will be done automatically upon activation of the Print flag. If not active, unloading must be done with the appropriate button present in the ribbon bar of the invoice entry form (see [Invoice Entry](/docs/sales/sales-invoices/invoicing/sales-invoice)) or with the appropriate procedure.

**Warning phantom items:** if active, during the unloading of the invoice, the system will check for the presence of fictitious items and, if there are any, a message will appear allowing the user to choose whether to complete the procedure or not; if the answer is affirmative, the entire invoice will be unloaded (except for the fictitious items), while if the answer is negative, the invoice will NOT be unloaded.

### Analytical

This TAB specifies the priority for retrieving the Cost Center (CDC) or Profit Center (CDP) in the document line.      
It is possible to modify the priorities using the buttons **Move Up**![](/img/neutral/common/move-up.png) and **Move Down**![](/img/neutral/common/delete-cc.png).      
*Default values*: the CDC or CDP is retrieved from the invoiced type if present. For further details, refer to the table [Invoiced Type](/docs/configurations/tables/sales/sales-turnover);         
If it is not present in the invoiced type, the system will look for it in the Customer registry. If not present, it will be searched in the item registry and subsequently at the warehouse level.      
The flag **Evaluate the priority of each dimension** ensures that in the documents, the CDC/CDP are grouped by dimension in the Analytical tab.