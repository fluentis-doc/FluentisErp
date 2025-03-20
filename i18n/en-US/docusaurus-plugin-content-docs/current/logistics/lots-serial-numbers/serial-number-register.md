---
title: Serial Number Register
sidebar_position: 8
---

:::important What it is for
The Fluentis serial number register is an essential module for the detailed management of serial numbers, allowing companies to track individual items through a unique identifying code. This feature meets specific requirements for traceability and security, particularly important for critical or high-value items, where it is crucial to monitor each individual piece rather than just an overall quantity.

The user has the option to search for a specific serial number and view its details with a simple double-click. In this section, it is possible to modify key information such as the customer code, supplier code, and the status of the serial number, which can be canceled, forcibly closed, or reserved. Additionally, the register provides details about the associated inbound and outbound documents related to the serial number, allowing for a comprehensive analysis of its usage over time.

The systematic approach to managing serial numbers not only optimizes internal processes but also ensures compliance with current regulations, making this register an indispensable tool for modern companies aiming to maximize operational efficiency and service quality.
:::

This window displays the details of the batch and consists of 4 different sections: 

### Serial Number Header 

In this section, the main data related to the batch is displayed, with the possibility to modify some of them, particularly:

**ITEM**: the 3 related fields display the class, code, and description of the item to which the Serial Number refers. This must be an item with the *SN Management* flag activated in the *Item registry* > *Batches/SN* tab; otherwise, it would not have been possible to perform the batch loading for the item;

**Variant**: the 2 related fields display the code and description of the variant of the item to which the Serial Number refers, if present;

**Batch code**: this field displays the code of the Batch to which the Serial Number belongs. The item to which the Serial Number refers may also be managed in Batches; thus, in this case, a batch of 100 pieces, for example, could consist of 100 different Serial Numbers. The same Serial Number could also belong to different batches of the same item or to batches of different items;

**Batch Type**: indicates the type of batch used;

**Batch code type**: indicates the type of batch code with which the batch was generated;

**Serial Number Code**: this field displays the Code of the Serial Number. It is an editable field by the user, although during loading operations it can be generated automatically based on certain rules set in the *Serial Number type* linked to the item. First, a code and a description of the *serial number code type* are entered, then the row is saved, and the user decides which parameters to use for composing the newly created batch code type. For each parameter used, the user can decide how many characters it should consist of and potentially also the fill character to be used. For example, with the parameter 'Progressive number', setting the fill character as '0' and the Length as '5' will create Serial Numbers starting with 00000, then 00001, then 00002, and so on. The *serial number code type* must then be linked to the item registry in the appropriate field located in the *Batches/SerialNumber* tab so that in the processes that automatically create the *Serial Number* code for the item in question, the Serial Number itself is generated according to the rules set in the *serial number code type* linked to the item. The field is alphanumeric and can reach a maximum length of 50 characters;

**Serial Number type**: indicates the type of serial number code with which the Serial Number was generated;

**Start date**: this field usually displays the date on which the Serial Number was loaded, editable by the user. If the Serial Number was loaded through warehouse registration, this date is proposed as identical to the date when the registration was created; if the Serial Number was loaded through the loading of a purchase DDT or return registration of work, this date is set to the same as the date of the purchase DDT or work return (unless the user manually modified it within the DDT); if the Serial Number was loaded via production reporting registration, this date is presented as identical to the date of the production report;

**Expiry date**: this field displays the expiration date of the Serial Number, editable by the user, which is calculated during the creation of the batch and thus the loading of the corresponding warehouse movement, starting from the start date and adding the validity days of the Serial Number entered in the Batches/SN tab of the item registry;

**Customer code**: this field displays the code of the *Customer Batch*, usually the name the customer assigns to the batch. It is an editable field by the user and cannot be generated automatically during loading operations. It can also reach a maximum length of 50 characters and may be identical for different batches of different items;

**Supplier code**: this field displays the code of the *Vendor batch*, usually the name the supplier assigns to the batch. It is also an editable field by the user and cannot be generated automatically during loading operations. It can similarly reach a maximum length of 50 characters and may be identical for different batches of different items;

**Supplier**: this field is where the account/detail account/description of the supplier is indicated;

**Cancelled**: if active, indicates that the Serial Number has been canceled;

**Forced closed**: if active, indicates that the Serial Number is forcibly closed;

**Reserved**: if active, indicates that the Serial Number has been reserved.

### Loading

This section displays the fundamental data of the documents that contributed to loading the Serial Number. Generally, the details of the *Warehouse posting* that loaded the Serial Number are always shown.

*With a double click on the document row, it is possible, according to user rights, to open the related document.*

**Quantity**: this field displays the quantity of the batch that was engaged in the document;

**Units of Measure**: indicates the unit of measure that was used in the document;

**Package number**: indicates the number of packages;

**Insert date**: indicates the entry date;

**Forced closed**: if active, indicates that the Serial Number has been forcibly closed;

**Reference document**: this field displays the type of document that generated the loading of the Serial Number. It can be a warehouse registration, a purchase DDT, or a work return registration;

**Record**: in these fields, the number and date of the document are displayed;

**Warehouse**: in these fields, the code and description of the warehouse on which the Serial Number was loaded are displayed;

**Location**: in these fields, the code and description of the location are displayed;

**Template**: in these fields, the code and description of the reason used to create that loading movement are displayed;

**Customer/Supplier**: in these fields, account, detail account, and description related to the customer or supplier are displayed.

### Shipping 

This section displays the fundamental data of the first document, in chronological order, that engaged the Serial Number. This data is displayed in a grid with the following columns:

**Quantity**: this field displays the quantity of the batch that was engaged in the document;

**Units of Measure**: indicates the unit of measure that was used in the document;

**Insert date**: indicates the entry date;

**Reference document**: this field displays the type of document that first engaged the Serial Number. It can be a production order, a customer order, a sales DDT, a sales invoice, a picking list, a work delivery DDT, or a work return;

**Record**: in these fields, the number and date of the document are displayed;

**Warehouse**: in these fields, the code and description of the warehouse on which the Serial Number was loaded are displayed;

**Location**: in these fields, the code and description of the location are displayed;

**Template**: in these fields, the code and description of the reason used to create that loading movement are displayed;

**Customer/Supplier**: in these fields, account, detail account, and description related to the customer or supplier are displayed.

*With a double click on the document row, it is possible, according to user rights, to open the related document.*