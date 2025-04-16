---
title: Automatic Orders Generation
sidebar_position: 2
showLastUpdateTime: true
---

The procedure can be found in the path *Purchasing > Purchase Orders > Procedures* and allows for creating Purchase Orders starting from **Purchase Requests** or **Sales Orders**.

## 1. Filter From 

In this tab, the source documents from which to create the Purchase Order are chosen. The following steps must be followed:

- **Filter the Purchase Request or the Sales Order**: select the document from which the Purchase Order will be generated. The upper grid contains the request/order, while the lower grid contains the corresponding items.

- **Press the "Generate Order Prototypes" button** to proceed to the next tab.

## 2. Supplier Choice

After generating the *Order Prototype*, it can be confirmed based on the *Preferred Suppliers* of the items or *Supplier Price Lists*. In this section, the supplier from whom to order must be chosen.

- **Select the supplier for each item:** the supplier is proposed automatically based on the parameter selected in the upper section (for flag details, see the tab [Parameters](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests#parametri)).

Item lines without a supplier can be selected with the right mouse button and moved under the desired supplier that already has at least one matching item line. Alternatively, the *Choose Supplier* button in the ribbon bar can be used.

- **Confirm the selected order prototypes**: in the upper grid, select the prototypes or only part of their items, then click on the **Confirm Selected Order Prototypes** button to generate the supplier pre-orders. The secondary grids, *Items* and *Analytical*, will show the details of the selected line in the first grid.

#### Specific Buttons

> **Explode**: explodes all the rows in the grid with the documents.  
> **Delete selected order prototype**: deletes the order prototype for the items selected in the upper grid.  
> **Choose Supplier**: opens the contact help to choose the supplier; active if at least one prototype/item has been selected.  
> **Confirm selected order prototypes**: generates Purchase Orders based on the selected prototypes.

## 3. Order Prototypes

This section displays the pre-orders for creating Purchase Orders.

The upper grid shows the details of the Purchase Orders being created. These include the *Purchase Order Type* (proposed by the *Parameters* but modifiable), the order number, the creation date, and the supplier.

The lower grid shows the details of the items contained in each order. The editable data in this grid are: *Confirmed Quantity*, *VAT*, and *Purchase Turnover Type*.

> **Original Quantity**: quantity entered in the source document (RDA or Sales Order).  
> **Available Quantity**: availability of the item across all warehouses considered in the *Availability Calculation* as of today.  
> **Confirmed Quantity**: if the *Available Quantity* is less than the *Original Quantity*, the latter is automatically proposed. Alternatively, a null quantity will be proposed, and the field must be populated to proceed.

5. **Generating Purchase Orders**: the last step is generating the orders via the **Generate Purchase Orders** button. Alternatively, item lines can be added to existing orders using the **Orders** button.

## 4. Parameters

#### 4.1 Choose the supplier to order based on:

- **Supplier and price list from purchase request**: proposes the supplier and purchase list present in the RDA.  
- **Supplier and price list from default preferred supplier**: proposes the default preferred supplier of the item.  
- **Supplier and prices from last invoiced/received/ordered purchase**: searches for the supplier and prices of the item in the last received purchase invoice; if invoices are not managed, it searches in shipping documents or orders.  
- **Supplier with the best purchase price**: selects the supplier with the lowest purchase price.  
- **Supplier with the shortest procurement time**: selects the supplier with the shortest procurement time among those included in the item registry's *Preferred Suppliers*.  
- **Supplier with the best payment terms**: selects the supplier with the payment solution with the longest deadline.

#### 4.2 Creation Parameters

- **Purchase Order type from purchase requests**: indicates the type of Purchase Order to be created from the RDAs. It can be modified in the *Order Prototypes*.  
- **Purchase Order type from Sales Orders**: indicates the type of Purchase Order to be created from Sales Orders. It can be modified in the *Order Prototypes*.  
- **Group by item**: groups orders by item.

#### 4.3 Data to be used if not coded for each item

- **Purchase turnover type**: if the purchase turnover type is missing in the item line.  
- **VAT rate**: if the VAT code is missing in the item line.  
- **MU**: if orders are to be created also with the alternative unit of measure.  
- **Procurement time**: to determine delivery dates.

#### 4.4 Consider Availability

By activating this flag in the *Order Prototypes* tab, the *Available Quantity* column will be visible.

Depending on the flags selected in the section below, availabilities will be considered from the following areas: work accounts, purchases, sales, planning, production, warehouse.

## 5. Operations

This section provides the history of all creations performed, detailing the operator, the Purchase Orders created, and their details.

Purchase Orders can be viewed by double-clicking on the rows of the **Operations**/**Details** tabs.

##### Specific Button

> **Restore selected operations**: cancels the created Purchase Order and restores the purchase request.