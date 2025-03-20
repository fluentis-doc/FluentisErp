---
title: Stocks Visualization
sidebar_position: 2
---

:::important What it is for 
The introduction to Fluentis inventory display constitutes a fundamental element for efficient warehouse management. This functionality allows operators to easily and practically extract stock levels, enabling them to monitor and compare physical inventory with logical inventory.

The inventory display provides the opportunity to group data by item, offering details by warehouse as well. This means that multiple lines of the same item can be displayed if it is present in different warehouses. Furthermore, the operator has the option to filter data by location, project, customer/supplier, or batch, thus providing a comprehensive and detailed overview of inventory in relation to various contexts of use.

In the detailed tab, additional information on warehouse movements is accessible, and from this same tab, it is possible to generate warehouse records for one or more items when they belong to the same warehouse. This flexibility allows for effective operations, making Fluentis a powerful tool for managing logistical resources.
:::

The form allows the operator to easily extract warehouse stock levels to check the inventory and the alignment between physical and logical inventory.

Through filters, it is possible to conduct targeted searches according to parameters and display the query results in the result grids. These results can be grouped by various parameters to facilitate data reading. From the window, it is also possible to quickly enter some warehouse records.

The search results are divided into different tabs:

## Item 

The results are grouped by item and specify the values of class, item code, description, second description, variant (if any), variant description (if any), quantity, and unit of measure.

## Warehouse 

The results are grouped by warehouse and specify, in addition to the values of the item tab, also the warehouse values and warehouse description.

## Location 

The results are grouped by location and specify, in addition to the values of the item tab, also the values of location, location description, and location status.


## Projects 

The results are grouped by project and specify, in addition to the values of the item tab, also the values of number, year, and project item description.

## Customer/Supplier 

The results are grouped by customer/supplier (present in warehouse records) and specify, in addition to the values of the item tab, also the values of the customer/supplier.

## Batch 

If there are items managed in batches, the results are grouped by batch and specify, in addition to the values of the item tab, also the values of warehouse, batch, and available quantity.

## Production Job Order 

The results are grouped by production order and specify, in addition to the values of the item tab, also the values of warehouse, warehouse description, location, production order number, and year of production job order.

## Detail

This is the maximum detail of the results grouped by all the previous tabs. It specifies the values of class, item code, item description, second item description, variant, variant description, option, option description, warehouse, location, order number, order year, customer/supplier description, batch, available quantity, inventory quantity, unit of measure, and location status.

### Generate Records 

In the **Detail** tab of the item stock, you can use the **Generate Records** button to enter warehouse records.

*Procedure*:

- select an *ITEM* in the result grid, 
- choose a *Warehouse* from the filters 
- set the stock display with the flag for displaying **Positive Stock** or **Negative Stock** depending on whether you want to create a *Unload* or *Load* record,
- press the *Generate Records* button, which will open the *MOVEMENT* form where you need to enter the values for *Template*, *Quantity*, *Posting date*, and optionally *Location*. The warehouse reasons present in the combo are of type *Load* if the negative stock display flag is active, and *Unload* if the positive stock display flag is active.
- once you finish entering the fields in the *MOVEMENT* form, pressing the *OK* button will open the recently created *Record* for any modifications, and the *Stocks Visualization* screen will already be updated based on the entered record.   

When entering a reason with a counterpart in the *MOVEMENT* form, this will be proposed in the **Offset template** field along with its **Location** if codified in the reason table.    
If the *Location* is deleted, the codified location in the [Item Location Map](/docs/logistics/warehouse/location/item-location-map) will be inserted into the record, if present; otherwise, the field will remain empty.

### Zeroing Stock 

In the **Detail** tab, it is possible to massively zero out warehouse stocks. This function is usually used in cases where there are inconsistent negative stock data in the system that need to be zeroed out.

*Procedure*:
- choose a *Warehouse* from the filters
- set the stock display with the flag for displaying **Positive Stock** or **Negative Stock**. 
- in the *Detail* stock item tab, select all the items to be zeroed out
- press the *Generate Records* button, which will open the *MOVEMENTS* form from which to choose the reason, and without specifying the quantity, press the OK button.  
In this way, the stock of the desired items will be noted as zeroed out.