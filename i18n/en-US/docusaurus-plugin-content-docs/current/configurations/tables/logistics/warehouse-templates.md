---
title: Warehouse Template
sidebar_position: 9
---

:::important What it is for
The Warehouse Templates table in Fluentis is an essential element for managing warehouse movements, allowing the definition and customization of the templates used in loading and unloading movements. Users can easily enter new templates in the grid, specifying mandatory information such as the reference warehouse, the template code, and the description.

One of the main features of this table is the ability to associate specific templates with each warehouse, offering significant flexibility in customizing operational procedures. Each template can be characterized as loading or unloading, allowing for precise management of how they affect warehouse inventory.

Furthermore, users can configure various optional parameters, including visibility flags in specific areas and define the proposed cost for movements. It is also possible to activate functions to automatically update the average cost, latest cost, and selling price based on the movements made. These features make the table a key component for efficient management of warehouse operations and cost monitoring.
:::

Through this window, all the warehouse Templates needed for the movement of items to and from the various warehouses entered in the appropriate *Warehouses* table are set.

The table allows for the entry of new records or the search for existing ones to view, modify, or delete them.

**Search Warehouse Templates**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results within the results grid.

**Insert Warehouse Templates**

To enter new codes, it is necessary to click on the first empty row in the grid or press the **New** button.

**Warehouse**: in this column, the user must set, using the appropriate combo box that retrieves data from the *Warehouses* table, the code of the warehouse for which they must enter the movement template;

**Template**: in this column, the user must enter the template code for the warehouse. It can have a maximum length of 3 alphanumeric characters. It is possible to create multiple warehouse templates with the same code, provided that the templates are generated for different warehouses; two templates with the same code in the same warehouse are therefore not allowed;

**Description**: in this column, the user must enter the description of the warehouse template, which can have a maximum length of 80 alphanumeric characters;

**Type**: in this column, the user must enter the *Type of movement* that characterizes the template. It can be *Load*, in which case the quantity of the warehouse movement created with that template is saved in the database as positive, or *Unload*, in which case the quantity of the warehouse movement created with that template is saved as negative;

**Visible in Purchase**: if active, makes the template visible in the purchasing area;

**Visible in Sales**: if active, makes the template visible in the sales area;

**Visible in Production**: if active, makes the template visible in the production area;

**Visible in Subcontract**: if active, makes the template visible in the subcontract area;

**Visible in Logistics**: if active, makes the template visible in the logistics area;

**Proposed Cost**: in this column, the user must choose which cost should be proposed automatically when entering a movement manually. The proposed cost can be the last cost, the average cost, the selling price, or the standard cost of the moved item. Note that the proposed values are taken directly from the item registry. Furthermore, it is very important to note that the proposed cost has priority over documents; therefore, the warehouse templates that will be used in the documents should have "Proposed Cost" set to "None", so that it retrieves the cost indicated within the document.

**Update Average Cost**: all movements performed using a template that has this flag activated contribute to the calculation of the weighted average cost of the item. Note that the flag cannot be activated or deactivated after the template has already been used for even a single warehouse movement. Typically, this flag is only activated for loading movements, but it can also be activated for unloading movements when one wants the weighted average cost of the item to be calculated considering the selling prices related to the unloads of the item itself. The average cost in the item registry is updated with the amount of the movement only if the flags *Update Item Cost* and *Fiscal Interest* are also active;


**Update Latest Cost**: all movements performed using a template that has this flag activated contribute to the calculation of the latest cost of the item. Note that the flag cannot be activated or deactivated after the template has already been used for even a single warehouse movement. This flag is activated only for loading movements. The latest cost in the item registry is updated with the amount of the movement only if the flags *Update Item Cost* and *Fiscal Interest* are also active;


**Update Sales Price**: Note that the flag cannot be activated or deactivated after the template has already been used for even a single warehouse movement. This flag is activated only for unloading movements. The sales price in the item registry is updated with the amount of the movement only if the flag *Agg. C.Art.* is also active;


**Update Item Cost**: when entering a warehouse movement using a template that has the flag **Update Item Cost** activated, the average cost, the latest cost, and/or the sales price in the item registry are updated with the amount of the movement based on which of the following flags are active: *Update Average Cost*, *Update Latest Cost*, and *Update Sales Price*.

**Fiscal Interest**: when entering a warehouse movement using a template that has the flag **Fiscal Interest** activated, the movement itself is considered in the warehouse journal and in the calculation of the latest cost, average cost, and the valuated quantity inventory, as long as the moved item also has the flag *Fiscal Interest* activated in the *Generality* tab;

**Reorder Level**: when entering a warehouse movement using a template that has the flag **Reorder Level** activated, the movement is considered by the procedure that calculates the reorder level;

**Batch Management**: when entering a warehouse movement using a template that has the flag **Batch Management** activated, the movement allows for the entry of the batch in the appropriate grid of the warehouse registration for a given item that is managed in batches. 
The same procedure applies to management by **Serial Numbers**;

**Integrate Initial Quantity**: used only with batch management; allows for increasing the quantity of a batch loaded with a previous movement while maintaining the same batch number;

**Create Batch from Batch**: if active, allows this template to be displayed as part of the “Create Batch from Batch” procedure to change one batch for another; thus, the program will automatically unload one batch and load another of the same item; in addition, there is also the “Create Batch from Batch with Item Change” procedure that allows unloading one item with a certain batch and loading another item with another batch; to activate this flag, the created Template must be for **Unload** and the following flags must also be active: **Batch Management**, **Integrate Initial Quantity**, and also, the **Bill of Materials** flag must not be active and there must be a Template in **Offset Load Template**;

**Not available Batches**: when entering a warehouse movement using a Template that has the flag *Not available Batches* activated, it will also be possible to unload batches that are in a state that is not available;

**Create S/N**: if active, allows for the management and automatic creation of serial numbers;

**Mandatory Document**: when entering a warehouse movement using a Template that has the flag **Mandatory Document** activated, it is mandatory to specify something in the *Reference Document* field of the warehouse registration, otherwise it is not possible to proceed;

**Mandatory Account**: when entering a warehouse movement using a template that has the flag **Mandatory Account** activated, it is mandatory to specify something in the *Customer/Supplier* field of the warehouse registration. It is usually used for records related to consumption and the delivery of materials for work order, otherwise it is not possible to proceed;

**Bill of Materials**: when entering a warehouse movement using a template that has the flag **Bill of Materials** activated, then when saving the movement line, instead of inserting the selected item (which must have a bill of materials), the first-level items of the bill of materials are inserted. This is often used in unloading offset templates to unload the components of an item loaded by the main template;

**Physical Inventory**: the **Physical Inventory** flag allows you to decide which warehouse templates should be selectable in the [Stock Difference Parameters](/docs/configurations/parameters/logistics/stock-difference) as templates to use in calculating inventory differences. The warehouse records that will be automatically created by the *Stock Differences* procedure will display this type of templates in the header;

**Offset Warehouse**: in this column, the user can specify the code of the **Offset Warehouse**, drawing from the appropriate combo box to the *Warehouses* table. This is simply the warehouse that should appear in the *Offset* tab of the warehouse registration;

**Offset Template**: in this column, the user can specify the code of the **Offset Template**. This allows for automatically inserting an opposite-sign movement when a warehouse movement is created using the main template. For example, offset templates are set up for making transfers between different warehouses or for making transfers between different locations within the same warehouse;

**Oddments**: with this flag, the user can designate for only one template for each warehouse which template should be used by the *Warehouse Valorization* procedure that executes the warehouse closure to create the load records for the initial inventory. To ensure that the movements created with this template are taken into account by the [Valorized Inventory with Quantity](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity), it is necessary that the **Fiscal Interest** flags are also active, and depending on the need, also those for **Update Latest Cost** and **Update Average Cost**; furthermore, to ensure that the created ending balance movement has a cost, a value must also be entered in the **Proposed Cost** field;

**Type of operational document**: used in foreign localizations such as Romania/Croatia where warehouse movements must also be recorded in accounting;

**Ledger Template**: used in foreign localizations such as Romania/Croatia where warehouse movements must also be recorded in accounting. This is used to select predefined models of the main ledger that allow warehouse movements to be recorded in the main ledger for each warehouse and their corresponding warehouse movement model dependent on the type and previously defined settings;

**Type of Ledger Template**: used in foreign localizations such as Romania/Croatia where warehouse movements must also be recorded in accounting;

**Location**: in this column, the user can enter, drawing from the appropriate *Location Help*, which opens with a double click on the box itself, the default location that will be proposed in the loading or unloading movement if it has not gone through the procedure that creates the movement. The default location setting is usually applied to loading templates, as unloading must be done from the location where the item is located at the moment the unloading is performed; therefore, the location in the document will have priority over the location present in the warehouse template;

**Rotation Index**: if this flag is active, the records created with this template are considered in the calculation procedure of the **Rotation Index** of the warehouse (Print Report);

**Alternatives**: activating this flag occurs simultaneously with the *Bill of Materials* flag; if active, when a movement is created with an unloading template that has both flags activated and one of the components does not have a sufficient quantity to be unloaded, the procedure checks if an alternative item (specified in the bill of materials) has sufficient quantity to be unloaded instead of the main component;

**Mixed Alternatives**: activating this flag occurs simultaneously with the *Bill of Materials* flag; if active, the procedure simultaneously unloads multiple alternative items until the necessary quantity is completed. It is closely related to the *Alternatives* flag;

**Consider Zero Movements**: with the activation of this flag, the user can decide which warehouse movements with zero quantity should contribute to the calculation of the weighted average cost of the items; this is the only template that allows inserting a movement with a zero quantity. Obviously, the flag is usually activated on templates that have the *Update Average Cost* flag activated;

**Traceability**: if active, indicates that movements generated with this template will be used for the [Batch Traceability](/docs/logistics/lots-serial-numbers/lots-register); this procedure guarantees the ability to trace which materials were used within a certain finished product or conversely, to understand in which finished products a certain material was used.

**Waste**: if active, makes the template visible for the definition of scrapped items in the *Additional production pickups* form and in the *Waste* tab of the [Production Declarations](/docs/production/pp-production-in-progress/signals/sisgnals/);

**Loading Unit Adjustment**: if active, makes the template visible for the adjustments of loading units;

**D.D.M.R.P. ADU**: if active, indicates that the Template is used to recognize all warehouse movements related to the ADU (*Average Daily Use*) calculation of the item (this flag is visible only if the DDMRP menu has been set).

For everything not detailed in this document regarding the common functioning of the forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).