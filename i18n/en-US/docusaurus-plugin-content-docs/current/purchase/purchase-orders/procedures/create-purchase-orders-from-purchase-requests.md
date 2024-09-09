---
title: Automatic Order Creation
sidebar_position: 2
showLastUpdateTime: true
---

The procedure is located under *Purchasing > Supplier Orders > Procedures* and allows the creation of supplier orders starting from **Purchase Requests** or **Customer Orders**.

## Filter From

In this tab, you select the source documents from which to create the supplier order. Proceed as follows:     

**1**. Filter the *Purchase Request* or the *Customer Order* from which the *Supplier Order* will be generated and select the data from the grids: the upper grid contains the request/order, and the lower grid contains the corresponding items.   

**2**. Press the **Generate Order Prototypes** button to move to the next tab.
 

## Select Supplier

After generating the *Order Prototype*, you can confirm it based on the items' *Preferred Suppliers* or *Supplier Price Lists*. In this tab, you need to choose the supplier from whom to order.

**3**. Select the supplier for each item. The system automatically proposes the supplier based on the parameter selected in the upper section (see the [Parameters](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests#parametri) tab for the function of each flag).

Item rows without a supplier can be selected with the right mouse button to be moved, also with the mouse, under the desired supplier who already has at least one associated item row. Alternatively, you can use the *Choose Supplier* button in the ribbon bar.   

**4**. Select the prototypes or only some of their items in the upper grid and confirm the selected prototypes with the **Confirm Selected Order Prototypes** button to generate the supplier pre-orders. The secondary grids, *Items* and *Analytics*, will display the details of the row selected in the first grid.

*Specific buttons*:

> **Expand**: expands all the rows in the grid with documents.   
> **Delete Selected Order Prototype**: deletes the order prototype for the items selected in the upper grid.   
> **Choose Supplier**: opens the contact help to choose the supplier; it becomes active if at least one prototype/item is selected.   
> **Confirm Selected Order Prototypes**: generates the supplier orders based on the selected prototypes.   


## Order Prototypes

Pre-orders for creating supplier orders are displayed.

The upper grid contains the details of the supplier orders being created; it includes the *Supplier Order Type* (proposed by *Parameters* but modifiable), the order number, the creation date, and the supplier.

The lower grid shows the details of the items contained in each order. Modifiable data in this grid include: *Confirmed Quantity*, *VAT*, and *Purchase Revenue Type*.
    
> **Original Quantity**: indicates the quantity entered in the source document (thus in the Purchase Request or the customer order).    
> **Available Quantity**: indicates the availability of the item in all warehouses considered in the *Availability Calculation* as of today, considering the availabilities from the areas selected in *Parameters*.   
> **Confirmed Quantity**: if the *Available Quantity* is less than the *Original Quantity*, the latter is proposed automatically. Otherwise, a null quantity is proposed, and to proceed, this field must be filled.    


**5**. The final step is generating the orders using the **Generate Supplier Orders** button. Alternatively, you can add the rows to existing orders using the **Orders** button.        


## Parameters

#### Choose the supplier to order from based on

- **Supplier and price list from purchase request**: this flag proposes the supplier and the purchase price list present in the Purchase Request;      
- **Supplier and price list from default preferred supplier**: this flag proposes the [default preferred supplier](/docs/erp-home/registers/items/create-new-items/item-registry/preferential-vendors) of the item;      
- **Supplier and prices from last invoiced/received/ordered purchase**: this flag searches for the supplier and item prices in the last received purchase invoice; if purchase invoices are not managed, it will search in transport documents, otherwise in orders;     
- **Supplier with best purchase price**: this active flag allows selecting the supplier with the lowest purchase price;    
- **Supplier with the shortest lead time**: this active flag allows selecting the supplier with the shortest lead time among those entered in the *Preferred Suppliers* tab of the item master;   
- **Supplier with best payment condition**: this active flag allows selecting the supplier with the payment solution having the maximum deadline.

#### Creation parameters

- **Supplier order type from purchase requests**: indicates the *Supplier Order Type* to be created from Purchase Requests; it can be modified in *Order Prototypes*.    
- **Supplier order type from customer orders**: indicates the *Supplier Order Type* to be created from customer orders; it can be modified in *Order Prototypes*.    
- **Group by item**

#### Data to use if not coded for each item

- **Purchase revenue type**: if the item row lacks the purchase revenue type;    
- **VAT rate**: if the item row lacks the VAT code;    
- **UM**: if you want to create orders with the alternative unit of measure;    
- **Lead time**: to determine delivery dates.   

#### Consider availability

Activating this flag in the *Order Prototypes* tab will display the *Available Quantity* column. 

Depending on the flags selected in the section below, the availability from the following areas will be considered: job order, purchases, sales, planning, production, and warehouse.

## Operations

Based on the type of source document (*Purchase Request* or *Customer Order*), this section reports the history of all creations executed, with details of the operator, created supplier orders, and their details.

Supplier orders can be viewed with a double-click on the rows of the **Operations**/**Details** tabs.

*Specific button*:

> **Restore selected operations**: cancels the created supplier order and restores the purchase request.