---
title: Picking Types 
sidebar_position: 34
---

:::important What it is for 
The Picking Type table in Fluentis allows for the coding and definition of the different types of picking that can be used during the creation of picking lists. Users can insert new records, modify existing ones, or delete them based on operational needs.

Each type of picking can be associated with specific parameters, including a unique alphanumeric code, document numeration, and movement templates. It is also possible to establish the type of invoice or DN to be used and manage configurations such as the initial state of picking and the priority of warehouse locations. This flexibility allows companies to adapt the system to their needs, thereby improving efficiency in warehouse operations and contributing to optimal material flow management.
:::

The table is located at **Tables > Logistics > Picking Types**.

In this table, it is possible to code the different types of picking to be used when creating a [New Picking](/docs/logistics/picking/picking-management).

It allows for the insertion of new records or the search for existing ones to view, modify, or delete them.

**Search Picking Type**

The form consists of a filter area and a result area. Once all desired filters are set, simply click the **Search** button to display the results within the result grid.

**Insert Picking Type**

To insert new codes, you need to click on the first empty row in the grid or press the **New** button.

**Type/Description**: unique alphanumeric code and description of the *Picking Type*;   

**Numeration**: this field should contain the appropriate numeration code. For further details, refer to the article on [Fluentis Numerations](/docs/configurations/tables/fluentis-numerations);

**Picking List Numeration**: indicates the numbering to be used for the Loading Unit lists created with this picking type;   

**Execution of invoice type**: this field defines the type of invoice that should be proposed for creating the invoice from picking through the appropriate procedure;

**Execution of delivery note type**: this field defines the type of DN that should be proposed for creating the bill from picking through the appropriate procedure;

**Initial Status**: indicates the default *Status* with which the picking is created;

**Warehouse/Warehouse Description**: in these fields, the warehouse for the movement of goods should be automatically proposed on the item lines inserted in the picking;   

**Movement Template/Description**: in these fields, the movement template for the goods contained in the pickings belonging to this type is indicated;  

**Without Execution**: at the time of the order's fulfillment in the picking, the order's fulfillment status is not changed;

**Unsumed Item Quantity Order**: if this flag is active, when creating a picking from another document, the quantities of the fulfilled item lines will not be summed; 

**Transfer**: if active, indicates that it is a transfer picking between internal warehouses; 

**Picking Materials List**: *Picking Types* with this flag active will be visible in the *Picking Materials List*;

:::note Note
For *Picking Types* that will be used in the *Picking Materials Lists*, therefore for those that will have the *Picking Materials List* flag active, it is necessary to enter a warehouse reason that also has a counterpart.
:::

**Execute orders with production job order**: no longer used;

**Mandatory load unit**: picking types that have this flag deactivated cannot be used for the picking of UDCs and will be visible in the [Picking Confirmation](/docs/logistics/wms/sales/check-row-menagement#conferma-picking) form of the WMS. Conversely, picking types that have this flag active will be displayed in the [Check Row Management](/docs/logistics/wms/sales/check-row-menagement#gestione-spunta) of the WMS. 

**Is over executed**: if active, allows over-fulfilling the quantity indicated in the picking; it can be used both in the [Check Row Management](/docs/logistics/wms/sales/check-row-menagement) and in the [Picking Confirmation](/docs/logistics/wms/sales/check-row-menagement) of the WMS. If it is not active and an attempt is made to move a quantity greater than that indicated, a warning message is displayed that prevents proceeding.

**Print report**: indicates the name of the associated printout and the **Number of copies** to be executed by default. 

For everything not detailed in this document regarding the common functioning of the forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).