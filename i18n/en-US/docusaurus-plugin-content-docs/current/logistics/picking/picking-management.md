---
title: Create Picking
sidebar_position: 3
---

:::important Purpose
The picking management of Fluentis is designed to optimize the process of retrieving items from the warehouse. This functionality allows users to efficiently generate picking lists based on the various types of picking configurable in the system. By creating a picking list, operators can select the items to fulfill, defining crucial details such as quantity and pickup location.

The picking management procedure consists of various interfaces that allow for the viewing and filtering of customer orders, facilitating the total or partial fulfillment of orders through automated management of information related to the items. Moreover, the system automates the identification number of the picking, based on preconfigured parameters, thus ensuring traceability and order in operations.

Thanks to functionalities such as tracking the fulfillment status of lines, recording batches and serial numbers, and integration with transport documents like DDT and invoices, the picking management of Fluentis offers a comprehensive and flexible operational experience. This enables companies to improve logistical efficiency, reduce errors during picking, and ensure better customer satisfaction.
:::

The form can be accessed via:  
 -  the path **Logistics > Picking > Create Picking**  

or via 

 - the **New** button found in the [Picking Search](/docs/logistics/picking/search-picking).

## 1. Mandatory Data (Dati obbligatori)

**Picking type**: defaulted in  *Configuration > Tables > Logistics > Picking Types*. This field determines the numbering range of the document being entered and automatically proposes the picking number based on the entry date and the last number entered;  

**Account**: represents the reference customer/supplier (not mandatory);  

**Number**: is automatically proposed based on the type but can be manually modified while respecting the progression rule between date and number;  

**Date/Time**: the current date and time are automatically proposed but can be manually modified while respecting the progression rule between date and number.

**State**: represents the status of the document (which can be *Finished*, *To be verified*, or *Stopped*).

**Execution status**: can take the following values: *Not executed*, *Closed*, *Partially executed*, or *Forced executed*; this status refers to the fulfillment status of individual lines, so for example, if a single line is fulfilled through the checkbox management, the **Fulfillment status** will change from *Not fulfilled* to *Partially fulfilled*.    

:::note Note 
It should be noted that the *Document* column present in the [Picking Search](/docs/logistics/picking/search-picking) refers to the status of the picking and not that of the lines, thus it will only change to fulfilled when the DDT or invoice has been created.
:::

#### Specific Button 

> **Fulfillment from order**: allows inserting items into the picking by fulfilling a customer order. Pressing the button will open a mask where it is possible to filter the customer orders related to the specified customer. It is then possible to fully or partially fulfill an entire order or a line.

## 2. Header 

#### Necessary data for warehouse movement 

**Pickup date:**: represents the date on which the warehouse registration should be made;  
**User**: represents the user code for the current picking reference. For transfer pickings, it is necessary to specify the **Departure and Destination Warehouse**: information useful for transfer picking;  
**Location**: represents the location where the items should be loaded;  
**Customer/Supplier**: represents the account for which the warehouse movement is made.

## 3. Items 

In the input grid, items are entered by specifying **Class**, **Item code**, and **Picking Quantity**. It is also possible to enter an **Alternative Measurement Unit** with the respective quantity. In the **Warehouse** field, the warehouse for movement is defined, and in the **Template** field, the corresponding reason. The **Location** from which to pick the entered item can also be specified.

### Batches 

The tab, active only if the selected item in the grid is managed by batches, allows the entry of the batch number and the corresponding quantity.

The Serial Numbers section, active only if the selected item in the grid is managed by serial numbers, allows the entry of the serial number to be assigned to the specified item.

### Extra Item Data

Allows for the insertion and viewing of *Extra data* related to individual lines.           
For a detailed description of the extra data, refer to the article [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata).

### Linked Production Orders 

If the item is linked to a production order, this tab allows viewing all the information related to the order itself.

### Attached Documents

Allows attaching and viewing documents related to individual items.  

### Checkbox

This tab allows for viewing the checked lines through the [Checkbox Management](/docs/logistics/wms/sales/check-row-management) of the WMS.    
If the **WMS** is not used, it is still possible to manually enter new lines of checked items.
The **Checkbox Management** serves to confirm the lines of the picking actually retrieved by the operator in the warehouse; thus, if at least one checked line is present in this table, the procedures for creating DDT and Invoice will only consider these lines.         
If there are no lines in the **Checkbox Management** table, then the procedures for creating DDT and Invoice will consider all lines present in the picking.

For details on the common functionality of the forms, refer to the link [Common functionalities, buttons, and fields](/docs/guide/common).