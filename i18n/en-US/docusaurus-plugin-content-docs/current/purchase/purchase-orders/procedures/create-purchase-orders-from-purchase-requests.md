---
title: Automatic Orders Generation
sidebar_position: 2
showLastUpdateTime: true
---

The procedure can be found in the path *Purchasing > Supplier Orders > Procedures* and allows for creating supplier orders starting from **Purchase Requests** or **Customer Orders**.

## Filter From

In this tab, the source documents from which to create the supplier order are selected. The following steps must be followed:

1. **Filter the Purchase Request or the Customer Order**: select the document from which the Supplier Order will be generated. The upper grid contains the request/order, while the lower grid contains the corresponding items.
   
2. **Press the "Generate Order Prototypes" button** to move to the next tab.

## Supplier Selection

After generating the *Order Prototype*, it can be confirmed based on the *Preferred Suppliers* of the items or *Supplier Price Lists*. In this section, the supplier from whom to order must be chosen.

3. **Select the supplier for each item**: the supplier is automatically proposed based on the parameter selected in the upper section (for flag details, see the [Parameters](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests#parametri) tab).

Item lines without a supplier can be selected with the right mouse button and moved under the desired supplier that already has at least one matching item line. Alternatively, the *Choose Supplier* button in the ribbon bar can be used.

4. **Confirm the selected order prototypes**: in the upper grid, select the prototypes or only part of their items, then click on the **Confirm Selected Order Prototypes** button to generate the supplier pre-orders. The secondary grids, *Items* and *Analytical*, will show the details of the selected line in the first grid.

#### Specific Buttons

> **Explode**: explodes all the rows in the grid with the documents.  
> **Delete selected order prototype**: deletes the order prototype for the items selected in the upper grid.  
> **Choose Supplier**: opens the contact help to choose the supplier; active if at least one prototype/item has been selected.  
> **Confirm selected order prototypes**: generates supplier orders based on the selected prototypes.

## Order Prototypes

This section displays the pre-orders for creating supplier orders.

The upper grid shows the details of the supplier orders being created. These include the *Supplier Order Type* (proposed by the *Parameters* but modifiable), the order number, the creation date, and the supplier.

The lower grid shows the details of the items contained in each order. The editable data in this grid are: *Confirmed Quantity*, *VAT*, and *Purchase Turnover Type*.

> **Original Quantity**: quantity entered in the source document (RDA or customer order).  
> **Available Quantity**: availability of the item across all warehouses considered in the *Availability Calculation* as of today.  
> **Confirmed Quantity**: if the *Available Quantity* is less than the *Original Quantity*, the latter is automatically proposed. Alternatively, a null quantity will be proposed, and the field must be populated to proceed.

5. **Generating supplier orders**: the last step is generating the orders via the **Generate Supplier Orders** button. Alternatively, item lines can be added to existing orders using the **Orders** button.

## Parameters

#### Choose the supplier to order based on:

- **Supplier and price list from purchase request**: proposes the supplier and purchase list present in the RDA.  
- **Supplier and price list from default preferred supplier**: proposes the default preferred supplier of the item.  
- **Supplier and prices from last invoiced/received/ordered purchase**: searches for the supplier and prices of the item in the last received purchase invoice; if invoices are not managed, it searches in shipping documents or orders.  
- **Supplier with the best purchase price**: selects the supplier with the lowest purchase price.  
- **Supplier with the shortest procurement time**: selects the supplier with the shortest procurement time among those included in the item registry's *Preferred Suppliers*.  
- **Supplier with the best payment terms**: selects the supplier with the payment solution with the longest deadline.

#### Creation Parameters

- **Supplier order type from purchase requests**: indicates the type of supplier order to be created from the RDAs. It can be modified in the *Order Prototypes*.  
- **Supplier order type from customer orders**: indicates the type of supplier order to be created from customer orders. It can be modified in the *Order Prototypes*.  
- **Group by item**: groups orders by item.

#### Data to be used if not coded for each item

- **Purchase turnover type**: if the purchase turnover type is missing in the item line.  
- **VAT rate**: if the VAT code is missing in the item line.  
- **MU**: if orders are to be created also with the alternative unit of measure.  
- **Procurement time**: to determine delivery dates.

#### Consider Availability

By activating this flag in the *Order Prototypes* tab, the *Available Quantity* column will be visible.

Depending on the flags selected in the section below, availabilities will be considered from the following areas: work accounts, purchases, sales, planning, production, warehouse.

## Operations

This section provides the history of all creations performed, detailing the operator, the supplier orders created, and their details.

Supplier orders can be viewed by double-clicking on the rows of the **Operations**/**Details** tabs.

##### Specific Button

> **Restore selected operations**: cancels the created supplier order and restores the purchase request.