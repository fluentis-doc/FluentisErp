---
title: Fulfillment from Order
sidebar_position: 1
---

In the header of the delivery note, by pressing the button **Expected deliveries**, the form will open where it is possible to filter the orders related to the customer of the document.

Through this procedure, it is possible to create a delivery note from the fulfillment of the corresponding order. It is then possible to enter the items into the delivery note, fulfilling either completely or partially an entire order or a line item.

To use this procedure, there are some initial conditions that must be met:

 - The supplier of the orders must be the same as the delivery note; 
 - The order you want to fulfill must have the flag *Printed* set; 
 - The document types must be compatible.

*Procedure*: 

The filters for supplier and currency will automatically be carried over based on the supplier selected in the delivery note.

Once all desired *Filters* are set, clicking the *Search* button will display a row in the grid for each printed and unfulfilled order, or partially fulfilled.

:::note NOTICE
The procedure retrieves all data present in the order, and as a consequence, the conditions present in the order will also apply, even if these have currently changed.
:::

In the results grid, the user then has the option to:

 1. select the *entire order*. To do this, simply select the flag present at the beginning of the order row.
 2. select only *some* of the *Items* proposed. To do this, simply select the flag present at the beginning of the item row.
 3. select only *some items* but only for a *specific quantity*. In this case, the user will need to modify the quantity to fulfill.

To complete the procedure, click the **Transfer** button, which will retrieve all the data present in the order and will report it in the delivery note.

*Specific buttons*:

> **Search** allows you to apply the search filters to the entire database of entered and not yet fulfilled or only partially fulfilled orders.  
> **Transfer** allows transferring the selected items in the underlying window to the grid of the Work Account delivery note's Delivery tab.  
> **Expand** allows expanding the entire tree of orders in the underlying grid to view the items contained in them.  
> **Collapse** allows compressing the view of item rows, displaying only the order rows.  
> **Select all** allows selecting all items from the list.