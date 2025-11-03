---
title: DDT Parameters 
sidebar_position: 4
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to manually configure it, refer to the checklist on the linked page.
:::

The parameters of sales DDT (Delivery Notes) allow for basic settings to manage correctly and according to the specific requests of each individual company. The window related to these parameters is composed of 4 different tabs: General, Fulfillment, Shipping, and Analytical.

### General

**Management of double measurement unit**: if active, the two columns Alternative UM and Alternative Quantity will be displayed in the DDT lines, so it will be possible to manage the double unit of measure, always considering that it is the main unit of measure on which checks for fulfillment are made.

**Automatic proposal of alternative UM:** this flag becomes editable only if the double unit of measure management flag has been activated and allows the alternative unit of measure set in the item registry to be displayed in the DDT item tab, in the dedicated column 'Alternative UM'; if not active, the unit of measure is not proposed.

**Availability Check:** this flag and others related to control, visualization, and obligoriness with the consideration for area are not managed in the current version.

**Default volume/weight measurement unit**: these measurement units are considered as default UMs to propose in the [Transport](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) tab of the DDT, as units of volume and weight; the data is modifiable in the documents.

**Search item price in all the defaults price list**: when searching for the price and discounts for an item within a DDT, the system follows rules based on the settings configured in the customer registry, under the *Price Lists* section. If the 'default' option is activated on a specific type of price list, the search for prices and discounts will focus only on that specific type of price list; if the "default" flag is not active, the system will extend the search to all types of price lists present, following an order of priority. In practice, with the 'default' flag active, the system will first look for a valid price list for the predefined type; if no results are found, it will check the other types of price lists in order of the established priority. However, if there is no type of price list set as 'default' in the customer registry and there are only priorities, this parameter will not influence the search, even if active.

**Propose the commission for the free items**: with this flag, agent commissions will also be proposed for gift item lines as they are for lines of the Coded Item type.

**Allow discounts for the giveaways items**: with this flag, discounts on the line amount will also be applied to gift item lines.

**Maximum number of lines**: it is the maximum number of items per invoice, active only in the Romanian version.

**Check items in exhaustion**: if set, this flag will cause a warning pop-up to appear if items that are set in the registry as Out of Stock and the date on which the item will run out are entered in the DDT; this check prevents selling items that will no longer be produced or restocked.

**[Enable simplified discount widget](/docs/sales/sales-flow/discount-widget)**: by activating this flag in the Items section, two new columns will be displayed: *Item discounts* and *Item final discounts*. The *Item Discounts* column is editable and shows the discounts applied automatically based on configurations related to the customer, the item, the price list, or the discount category. The user has the ability to enter, modify, or delete discounts directly in this column. To use this widget, it is necessary to not only activate the flag but also specify in the type of DDT which type of discount to use.

**Use customer item**: if set, this flag will insert, in the DDT item grid, the columns for the Code and Customer Description entered in the item registry, Customer tab.

**Use barcode**: if set, this flag will insert, in the DDT item grid, the column to display the item's barcode.

**Mandatory user code**: this flag makes it mandatory to fill in the *User* field in the header.

**Block the document insertion in public holidays from the factory calendar**: if active, the system will not allow the entry of the offer on public holidays (the Company's Factory Calendar is checked first, then the Production Capacity Calendar); if not active, the system does not perform any checks and allows the document to be entered.

**Recompute transport**: this flag ensures that in the [Transport](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) tab of the DDT, the totals of weight, volume, and packages of the document lines are shown; without this flag, the fields will not be filled.

**External order references**: this flag ensures that the *Our* and *Your reference* fields are transferred from the order lines to the DDT lines.

**Maintain price from SalesOrder for the brackets**: this flag ensures that during the partial fulfillment of an order in the DDT, the same price tier present in the original order is maintained, without any recalculation. For example, if the order specifies a quantity of 100 units that activates a specific price tier, but only 20 units are fulfilled in the DDT, with this flag activated, the DDT will keep the price associated with the original tier, without modifying it based on the quantity actually fulfilled.

### Fulfillment

In this tab, the following fields are present:       

**Payment**: specifies the value used for the payment of the customer DDT in the case of multiple fulfillment of Orders in the DDT: *First order*, *Register*, or *Manual selection*.

**Recipient**: specifies the value used for the recipient of the customer DDT in the case of multiple fulfillment of Orders in the DDT: *First order*, *Register*, or *Manual selection*.

**Control concordance between DN payments and order**: if active, the system will not allow fulfillment from orders with different payments.

**Recalculate CDC/CDP**: in the case where the DDT is generated starting from the customer order with the specific procedure, activating this flag will cause the system to recalculate the cost centers and profit centers if the DDT has been generated from the order, not considering those set in the sales order. If not active, the system will not recalculate these data but retain those entered in the customer order.

**Execution grid view:** if active, the flag enables grid mode in the sales order fulfillment form.

**Execution tree view:** if active, the flag enables tree mode in the sales order fulfillment form.

**Propose Batches**: this flag ensures that at the time of fulfillment, if a different quantity to be fulfilled is entered compared to that present in the source document, the quantity of batches will equal the line quantity in the created document; this avoids the situation where the created document has a line quantity different from that of the batches.

### Shipping

**Create recording with document date**: if active, the stock registration is made with the same date as the DDT, and it will not be necessary to specify the registration date in the shipping form. If not active, it will be necessary to specify the date in the DDT shipping form.

**Priority warehouse and shipping reason for item lines in DDT**: if active, the warehouse and shipping reason are read from the DDT lines, while if not activated, the warehouse and reason entered in the subsequent fields (**Warehouse** and **Warehouse Template**) will be used.

**Automatic load/unload**: if active, the unloading of the DDT will be done automatically upon activation of the Print flag. If not active, unloading must be done with the appropriate button.

**Warning phantom items**: if active, during the unloading of the DDT the system will check if there are any fictitious items and if there are, a message will appear allowing the user to choose whether to complete the process or not; if the answer is affirmative, the entire DDT will be unloaded (except for fictitious items), while if the answer is negative, the DDT will NOT be unloaded.

:::tip Remember 
If the document contains **Warning phantom items**, the procedure will take into account the *Supply Type* defined in the item's MRP Parameters:
- Items of type *Purchase* will not be included in the warehouse registration.   
- Items of type *Production* or *Subcontractor* will be registered in the warehouse with the first level of the bill of materials.
:::

### Analytical

This TAB specifies the priority for retrieving the Cost Center (CDC) or Profit Center (CDP) in the DDT line.      
It is possible to modify the priorities using the buttons **Move Up**![](/img/neutral/common/move-up.png) and **Move Down**![](/img/neutral/common/delete-cc.png).     
*Default values (Valori di default)*: the CDC or CDP is retrieved from the invoiced type if present.     
For further details, refer to the table [Invoiced Type](/docs/configurations/tables/sales/sales-turnover).      
If it is not present in the *Turnover type*, the system will look for it in the *Customer contact*. If not present, it will be searched in the item registry and subsequently at the warehouse level.       
The flag **Evaluate the priority of each dimension** ensures that in the documents the CDC/CDP are grouped by dimension in the Analytical tab.