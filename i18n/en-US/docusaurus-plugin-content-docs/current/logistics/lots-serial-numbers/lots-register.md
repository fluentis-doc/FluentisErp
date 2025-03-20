---
title: Batches Register and Traceability 
sidebar_position: 3
---

:::important Purpose
The Fluentis batches register represents an essential tool for the precise and detailed management of batches within a product traceability system. This feature allows users to search for and view specific details of each batch with a simple double-click, thus facilitating the monitoring and management of inventory.

Within the tab dedicated to each individual batch, users can modify various crucial information, such as the supplier, the batch code provided by the supplier, specific notes, and the status of the batch. The latter, which can be easily updated, plays a fundamental role in determining the possibility of using the batch in sales documents and inventory records. Furthermore, the system also provides for the management of various batch statuses, which directly affect the operational availability of the batch.

A distinctive aspect of the batches register is the section that allows for historical viewing of the loading and unloading documents that involved the batch, thus maintaining accurate traceability over time. Additionally, it is possible to view the current inventory divided by warehouse. Thanks to these features, the Fluentis batches register not only simplifies operational management but also helps ensure regulatory compliance in sectors where traceability is essential, such as food and pharmaceuticals.
:::

## Batches Register 

The form displays the batch details and is composed of 4 different sections:

### Batch Header 

In this section, the main data related to the batch is displayed, with the possibility to modify some of them, particularly:

**ITEM**: in the 3 related fields, the class, code, and description of the item to which the batch refers are displayed. This is certainly an item with the *Batches management* flag activated in the *Item registry* > *Batches/SN* tab; otherwise, it would not have been possible to perform the batch load for the item itself;

**Variant**: in the 2 related fields, the code and description of the item's variant to which the batch refers are displayed, if present;

**Batch**: in this field, the Batch Code appears. This is an editable field by the user, although during loading operations, it can be generated automatically based on some rules set in the *Batch code type* linked to the item. First, a code and description of the *Batch Code Type* are entered, the row is saved, and then the parameters to be used for the composition of the newly created *Batch Code Type* are decided. For each parameter used, one can decide the number of characters it should consist of, and optionally, the padding character to be used. For example, with the *Progressive number* parameter, setting the padding character to '0' and Length '5' will create batches with the first number as 00000, then 00001, then 00002, and so on. The *Batch Code Type* must then be linked to the item registry in the appropriate field located in the *Batches/Serial Number* tab so that in the procedures that automatically create the batch code for the item in question, the batch itself is generated according to the rules set in the *Batch Code Type* linked to the item. The field is alphanumeric and can reach a maximum length of 50 characters. This is not the batch identifier, as multiple loads can be done at different times for the same batch; in this case, multiple rows with the same *Batch code* would appear within the *Batch Search* grid;

**Supplier**: in this field, the account/detail account/description of the supplier will be indicated;

**Producer**: in this field, the nickname/legal name of the manufacturer will be indicated;

**Supplier code**: in this field, the *Vendor batch* appears, which is usually the name given by the supplier to the batch. This is an editable field by the user and is not generated automatically during loading operations. It can also reach a maximum length of 50 characters and can be identical for different batches of different items;

**Report type label**: in this field, the type of label to print for this batch is entered;

**Start date**: in this field, the date when the batch was loaded usually appears, editable by the user. If the batch was loaded through inventory registration, this date is proposed identical to the date when the registration was created; if the batch was loaded through the registration of a purchase DDT or return registration, this date is set equal to the date of the purchase DDT or return (unless the user manually modified it within the DDT); if the batch was loaded through the registration of a production report, this date is proposed as identical to the date of the production report;

**Expiry date**: in this field, the expiration date of the batch appears, editable by the user, which is calculated at the time of batch creation and thus of loading the corresponding inventory movement, starting from the start date and adding the validity days of the batch entered in the *Batches/Serial Number* tab of the item registry;

**Initial quantity**: in this field, the initial quantity loaded for the batch through the first document that loaded the batch itself appears;

**Package number**: indicates the number of packages of the loaded batch;

**Notes**: in this field, the notes entered in the inventory registration during the batch load appear. This field is editable by the user and is also viewable in the Batch Search, as specified above;

**Batch Status**: the combo displays the batch status. It is modifiable by the user and references data from the appropriate *Batch Status* table. The status of the batch determines whether or not the batch can be used in sales documents, production, and record of inventory unloading. However, this is a non-binding management; the user is not obligated to utilize the functionality of the *Batch Status* table;

**Batch evaluation**: the combo displays the data related to the valuation of the batch. It is modifiable by the user and references data from the appropriate *Batch evaluation* table. This data serves purely descriptive functions, thus having no particular influence on procedures, thus also being optional;

**Batch sold**: the flag, if active, highlights that the batch is available to be withdrawn within sales documents, production, or inventory records. This is practically a possibility that the user has to define the ability to withdraw or not a batch, as an alternative to the more complex management of batch statuses;

**Closed**: the flag, if activated, ensures that the quantity of that batch is not considered for the calculation of inventory and availability. This flag can only be activated manually.        

### Loading

In this section, the fundamental data of the documents that have contributed to loading the batch are displayed. Generally, the detail of the *Warehouse posting* that loaded the batch always appears; if this was generated through the loading of a document (bill, return, etc.), then a line will appear showing the details of this document as well.

*With a double click on the line of the document, it is possible, depending on the user's rights, to open the related document in view-only mode.*

**Quantity**: in this field, the quantity of the batch that has been committed in the document is displayed;

**Units of Measure**: indicates the unit of measure that was used in the document;

**Package number**: indicates the number of packages;

**Insert date**: indicates the date of insertion;

**Batch Status**: indicates the status of the batch;

**Forced closed**: if active, indicates that the batch has been closed forcibly;

**Reference document**: in this field, the type of document that generated the loading of the batch is displayed;

**Number**: in this field, the document number is displayed;

**Insert date**: in this field, the document date is displayed;

**Warehouse**: in these fields, the code and description of the warehouse where the batch was loaded appear;

**Location**: in these fields, the code and description of the location appear;

**Template**: in these fields, the code and description of the reason used for the creation of that loading movement appear;

**Customer/Supplier**: in these fields, account, detail account, and description relative to the customer or supplier appear;

**Project**: in this field, the sales order, editable by the user, related to the batch appears. This is usually the sales order linked to the item line that has been loaded and that loaded the batch itself;

### Other Loading Documents 

In this section, the fundamental data of any other documents in which the batch has been committed, in relation to the document selected in the upper grid, are displayed.

### Unloading

In this section, the fundamental data of all documents, in chronological order, that commit the batch are displayed. 

**Quantity**: in this field, the quantity of the batch that has been committed in the document is displayed;

**Units of Measure**: indicates the unit of measure that was used in the document;

**Insert date**: indicates the date of insertion;

**Batch Status**: indicates the status of the batch;

**Document**: in this field, the type of document that first committed the batch is displayed. It can be a production order, a customer order, a sales DDT, a sales invoice, a picking list, a delivery DDT for processing, a return for processing;

**Number**: in this field, the document number is displayed;

**Date**: in this field, the document date is displayed;

*With a double click on the line of the document, it is possible, depending on the user's rights, to open the related document in view-only mode.*

**Warehouse**: in these fields, the code and description of the warehouse where the batch was loaded appear;

**Location**: in these fields, the code and description of the location appear;

**Template**: in these fields, the code and description of the reason used for the creation of that loading movement appear;

**Customer/Supplier**: in these fields, account, detail account, and description relative to the customer or supplier appear;

**Project**: in this field, the sales order, editable by the user, related to the batch appears. This is usually the sales order linked to the item line that has been loaded and that loaded the batch itself;

### Other Unloading Documents 

In this section, the fundamental data of any other documents in which the batch has been committed, in relation to the document selected in the upper grid, are displayed.

**Document type**: in this field, the type of document within which the batch is present, in relation to the document selected in the upper grid, is displayed. It can be a sales DDT, a sales invoice, a picking list, a delivery DDT for processing, a return for processing;

**Number**: in this field, the document number is displayed;

**Date**: in this field, the document date is displayed.

*With a double click on the line of the document, it is possible, depending on the user's rights, to open the related document in view-only mode.*

### Stocks Visualization

In this tab, it is possible to view the stocks of the batch divided by warehouse.

The grid consists of the following fields:

**Code**: indicates the warehouse code;

**Description**: indicates the warehouse description;

**Units of Measure**: indicates the unit of measure;

**Total Quantity Loaded**: indicates the total quantity loaded of that item for that batch;

**Stock Quantity**: indicates the stock quantity of that item for that batch;

**Available Stock**: indicates the available stock of that item for that batch.


## Batch Traceability 

:::important Purpose
The Fluentis batch traceability is a module designed to ensure efficient and precise management of product batches within the production and logistics cycle. This functionality allows users to monitor and record the path of each batch, from the moment of production or purchase until its final use, contributing to a transparent and secure management of materials.

Using the section dedicated to traceability, users can generate detailed reports for the selected batches, not only to view the information related to the batch itself but also to analyze which items it has been used in and which raw materials contributed to its production. This process is facilitated by a series of customizable filters that allow adapting the search to specific business needs.

Two of the main traceability tools include:

Usage Traceability: which allows viewing all items in which the specific batch has been used, thereby ensuring detailed upward traceability.
Composition Traceability: which allows verifying which batch-managed items were used for the production of the selected batch, providing a clear view of downward traceability.

Through this batch traceability functionality, Fluentis offers a robust solution for companies, especially in sectors such as food and pharmaceuticals, where traceability is essential for safety and compliance with current regulations.
:::

This form allows for printing a report containing the details of the traceability of the selected batch.

Once all desired filters are set, simply click the **Search** button present in the *Ribbon bar* to display the results within the results grid.

Note that within the filter section, the following flags are present:

- **Traceability use**: if active, allows viewing which items have used the batch of the item we are considering; thus, it verifies upward traceability;      
- **Traceability composition**: if active, allows viewing which items (managed by batches) have been used for the production of the batch of the item we are considering; thus, it verifies downward traceability.      

These two flags are always active by default, but the user can activate or deactivate them according to needs.

After selecting the batch of interest, simply click on print or print preview to view the report with the searched results.

For details on the common functionality of forms, refer to the link [Custom Features, Buttons, and Fields](/docs/guide/common).