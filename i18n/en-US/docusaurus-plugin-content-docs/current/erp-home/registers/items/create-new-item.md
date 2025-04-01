---
title: New item
sidebar_position: 3
---

**Introduction**: [Identification of products and related parts](/docs/erp-home/registers/items/master-item-intro) 

:::important Purpose of the item registry
The item registry of Fluentis plays a crucial role in managing and organizing information related to a company's items. It serves as a central database where details of each product are recorded and updated, allowing for a clear and systematic view of stock, costs, and warehouse movements.

The information contained in the item registry includes identifying details such as the item code, description, unit of measure, and information related to suppliers. In addition, data regarding prices, procurement policies, and lot management can be included, facilitating daily operations of purchasing, selling, and logistics.

Thanks to this registry, companies can track the status of items, automate processes such as reorder management, and obtain detailed reports for more effective purchase planning. Furthermore, integration with other Fluentis modules allows for better coordination of warehouse activities, improving operational efficiency and contributing to more accurate and adjusted stock management over time.
:::

The procedure for creating a new item opens via the path:
- **Home > Item > Create New Item**,

or

- **Home > Items > Search Items** clicking on the **New** button present in the ribbon Bar of the relevant form.

The **Item Registry** form will open, consisting of a section where the *mandatory characteristics* of the item are defined and a lower section made up of various tabs that group its *specific characteristics*.

## 1. **Header**

The fundamental and mandatory characteristics that every item must have, found in the first part of the form, are: the [**Class**](/docs/guide/common/glossary/glossary-intro#item-class) (maximum 3 characters), the [**Code**](/docs/guide/common/glossary/glossary-intro#item-code) (maximum 50 characters), a brief **Description**, and the [**Unit of Measure**](/docs/guide/common/glossary/glossary-intro#unit-of-measurement).

:::note
The combination of class and code must be unique for that specific item.
:::

#### Non-Mandatory Fields  
- **Second Description**: a second description that can be assigned to the item;
- **Configuration/Version**: combo through which the version of the item is selected;

Once all the mandatory characteristics of the item have been defined, the more specific ones can be entered through the various tabs in the second part of the window, which are treated in the following documents.

#### Specific Buttons  

> **Update LF LV with Formula**: button that allows updating sales prices through specific formulas based on the list prices;      
> [**MRP Parameters**](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): button that allows access to the *MRP Parameters* of that item, where the parameters needed to manage that item in production are defined; this button is also found within other forms related to the production area.  

## 2. **General Information**

:::important Purpose of the general tab
The General tab contains the main and logistical information of the items, such as the code, description, unit of measure, and other optional classifications, including the goods category and nature of the item.     
This tab allows for defining additional details useful for the management and traceability of items within business processes, facilitating organization and reporting.
:::

#### Specific Fields  

**Entry Date**: field that is automatically filled in when the item is created, indicating the creation date of the item;  
**VAT Rate**: combo through which the VAT rate related to that item is selected and entered; this field takes priority over the VAT rate assigned to the customer/supplier in the contact registry;  
**Agricultural Purchase VAT / Agricultural Sale VAT**: which have a different management method;  
**Characteristic and Model**: two non-mandatory fields that further define the item based on a series of groupings established within the company's product management;  
**Purchase Turnover**: combo connected to a type of *Purchase Turnover* that has been defined in the chart of accounts for the accounting of purchase invoices;  
**Item Type**: a non-mandatory table where an additional description of the item can be entered based on other internal groupings;  
**Nomenclature**: in these fields, the nomenclature (i.e., the customs code of the item) is selected through help, useful for intrastat purposes for the declaration of goods for import or export, as well as for statistical purposes regarding the trade of items within the EU;  
**Perishable Goods Payment Days**: connected to Article 62; for perishable goods, the invoice must be created and paid within a deadline of 30/60 days depending on the type of item. In this case, this check is done both on the item and on the type of payment entered so that invoices cannot be issued with a maturity date greater than that indicated;  
**Last edit date**: indicates the date of the last modification of the item;  
**Tax Category**: through this combo, the tax category to which the item belongs can be selected, which is useful for warehouse tax prints, to group inventories by tax category;  
**Product category**: a statistical data similar to the characteristic, used in certain specific reports;  
**Sales Turnover**: as with purchase turnover, this combo serves for the management of revenue detail accounts for the sale of the item;  
**Nature of Item**: a field used to attribute specific characteristics to the item to be used in certain particular procedures. In the combo, there is a list of the various natures that can be attributed to the item (click for the [glossary](/docs/guide/common/glossary/glossary-intro#item-nature));  

> **Equipment/Tool**: this nature associates the item with the registry of measuring instruments and equipment found in the processing cycles.
> **Machine/Plant**: this nature is associated with the registry of machines;
> **Items Family**: defines the item as a family of articles/products in sales forecasting;
> **Packaging**: serves for the management of returnable packaging, for accounting (to understand how many packaging items I have in stock and how many I have given to the customer or supplier and thus how many they need to return to me);
> **Services**: for the management of post-sale interventions;
> **Loan Use/Plant Component**: used for maintenance management;

#### Available Options 
**Quality Control**: if this flag is active, it triggers the quality control process, meaning that the item will enter the quality flow;  
**Phantom**: if active, this flag serves to declare that the item should not be moved;  
**Tax Interest**: if active, this flag serves to report the item in the tax prints of the warehouse;  
**ABC:** for ABC, in inventory management for logistics purposes, it refers to a categorization method of inventory that divides items into three classes, namely A, B, and C, where A contains the most important items and C the least important items. It is a useful method to focus attention on few essential products rather than many products of little importance. If this method is used by the company, in this field will be the letter that defines the category to which the item belongs;  
**In exhaustion**: if active, this flag indicates that the item is in exhaustion.         
The conditions to receive the warning that the item is about to run out, in documents such as Customer Orders, are:  
- in the [customer order parameters](/docs/configurations/parameters/sales/sales-orders-parameters) the flag "Check items in stock" must be set;             
- in the item registry, the "Out of Stock" flag must be set, and additionally, the "Out of Stock Date" must be less than or equal to the order date.         

**Date in exhaustion**: indicates since when the item has been put out of stock;  
**Item without availability calculation**: if the flag is active, the system will not consider availability for using the item;  
**Archived**: if active, the item will no longer appear in the list of items that can be used, as it has become obsolete;  
**Copyright**: if active, indicates that the item is subject to copyright/royalties and will be considered in the [Royalties Management](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/). 

## 3. **Administration**

Within this tab, the business centers (cost centers) and any profit center of the item are entered, so that recalling the item in documents, the selected center or centers will be reported for use during accounting. 
   
**Grid of Business Centers**: allows linking the item registry to one or more business centers;

#### Fields of the Corporate Centers Grid 
> **Number**: indicates the line number;        
> **Cost Center**: allows you to recall the cost center code;         
> **Description**: indicates the description;         
> **Percentage**: indicates the percentage of distribution among the various cost centers entered in the grid (if the center is unique, it will be 100%);            
> **Division**: allows pairing the association of the cost center to the item in relation to the selected *Business Division*;          
> **Validity Start Date / Validity End Date**: allow assigning validity to the relationship;      
> **Dimension**: allows specifying the size of the corporate center (for further details refer to the table of [Corporate Centers](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers));             
> **Category**: allows specifying the category of the corporate center (for further details refer to the table of [Corporate Centers](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers)).                       

:::note Note
If the *Controlling Management* parameter, present in the *Other Settings* tab of the **Company** table, is deactivated, this field is used to input the cost center. 
:::

**Profit Center**: only if the *Controlling Management* parameter, present in the *Other Settings* tab of the **Company** table, is deactivated, will it be manageable and used to enter the profit center.

## 4. **Procurement**

:::important What it is for
The Procurement tab in the item registry of Fluentis allows you to define all the necessary parameters to optimally manage the stock of the item. In the first section, general data is set such as minimum and maximum stock levels, indicating the limits within which to maintain inventory quantities. Other parameters include coverage weeks, lead time for stock, and the reorder point, which establishes when a new order should be placed.
Additionally, settings for label printers and label report types are available, useful for managing lots in different states (Unique, Compliant, Non-compliant, Quarantine). In the second section, these parameters can be specified for each warehouse where the item is present, offering accurate and customized inventory management.
:::

In this tab, all the necessary data for the procurement of the item in question is defined.  
The window consists of two parts:  
a. In the first part, data for the general procurement of the item is set and not for individual warehouses:  

**Minimum and maximum stock**: represents the minimum quantities that must always be present in stock for that item and the maximum quantities that can be held in stock;  
**Lead time for stock**: represents the number of days needed to replace at least the minimum stock indicated for that item;  
**Coverage weeks**: indicates the time frame (calculated in weeks) during which the stock will cover the need for that item;  
**Coverage Index**: is an editable field where a percentage is entered that may or may not be considered by the scheduler or MRP for stock replenishment.  
If the flag *Consider Coverage Index* is set in the MRP parameters, during scheduling the procedure will take into account the percentage indicated in this field to replenish the availability of the item for a quantity sufficient to cover the demand for the weeks specified in the **Coverage Weeks** field;  
**Reorder Point**: here it is indicated at what quantity it is necessary to proceed with reordering that item;  
**Days for Reordering**: necessary days for stock replenishment;  
**Reorder Point Review Interval**: indicates how often the reorder point should be reviewed and updated;  
**Last Reorder Point Calculation Date**: indicates the date of the last analysis made and when the reorder point mentioned above was established.  

Then, there are two sections named:  
- **Label Printers**: allows you to choose the printers to propose by default for printing lot labels for different *Lot States (Stati lotto)*; it will be possible to choose among the printer for the lot state *Unique, Compliant, Non-compliant, and Quarantine*.

- **Label Report Types**: allows you to specify the default reports to print for the lots in different *Lot States (Stati lotto)*; thus allowing different reports based on the status of the lot *Unique, Compliant, Non-compliant, and Quarantine*.

b. In the second part of the window, the various warehouses where the item can be found are indicated, and it is possible to define some of the above-mentioned data (minimum/maximum stock and lead time, reorder point and days for reordering, print unique/compliant/non-compliant/quarantine label) for each single warehouse. (for example, the minimum stock or the maximum stock that can be held for that item in that specific warehouse, and so on for the rest of the information).

## 5. **Purchase Discount Categories**  

In this tab, the **Discount Categories** with which the item is purchased are entered. These categories are used by the **Price Management** in the purchasing module.  

## 6. **Sales Discount Categories**  

In this tab, the **Discount Categorie** with which the item is sold are entered. These categories are used by the **Price Management** in the sales module. 

## 7. **Customers**

In this tab, you can associate to the item the list of customers who have purchased it.

**Sampling Type**: combo to define the default method of sample extraction from a production order for that item (for example, one sample every 100 pieces, or one sample every 3 orders, etc.). The sampling types are previously coded in the table under **Tables > Logistics**.

Upper Grid:  
**Customer**: the account/detail account and description of the customer should be indicated;  
**Economic Lot**: indicates the economic lot (the minimum quantity purchasable by the customer) with its corresponding unit of measure;  
**Customer Item**: in this section, you can indicate the code and description that the customer assigns to the item in their database; by indicating their reference here, it will be displayed on all documents related to that customer for that item;  
**Usage Sector**: here the customer's usage sector is indicated;  
**Sampling Type**: in this case, you can select the sampling type of the item based on the associated customer, which may be different from the one selected in the initial combo of the window;   
**Data sheet**: if there is already a technical sheet prepared for this item, this section will provide the details of the document; 
**Final Testing**: this field is used to enter any information related to the type, year, code, and description of the final testing;  
**Variant**: in this field, the possible variant of that item is entered, selecting it via the combo containing the variants previously coded in the **Item Variants** table;  
**Notes**: section in which any notes can be entered.

The lower grid can contain information about [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

#### Specific Buttons  
> **Insert Customers**: allows you to insert a new customer;    
> **Delete Customers**: allows you to delete the record of a previously entered customer.

## 8. **Barcode Codes**

Within this tab, alternative codes also known as barcode codes representing the item can be entered.  
Barcode codes are barcodes that contain some of the main information related to the coding of the item to which they are associated and are useful for warehouse operations. These codes are read through specific equipment called Mobile using laser beams or LED bars.  
Barcode codes can come in different types.  
The two types managed by the database are:
- EAN13 (this means that the barcode can have a maximum length of 13 characters)     
- EAN128 (this means that the barcode must have an even length).

In **Fluentis ERP**, there are no predefined parameters indicating how to set the barcode in compliance with EAN13 and 128 regulations, but customized algorithms that adhere to the standard can be applied to verify that the entered barcode complies with the aforementioned regulations.  
The form consists of a grid where a **New** barcode can be entered using the **Insert** button present in the ribbon bar, or by going directly to a new line.  
In the **Barcode Type** field, the type of barcode to be encoded is selected via the respective combo, and in the **Barcode** field, the barcode itself is entered.

#### Specific Buttons  
> **Validation**: by pressing this button, the system will verify that the code complies with the regulations mentioned earlier regarding the length that the code must have based on the type of code being entered;  
> **Delete Barcode Codes**: allows you to delete a previously entered barcode.

## 9. **Packaging**

:::important What it is for
The packaging tab in the item registry of Fluentis is essential for defining how an item is packaged, specifying the types of Load Units  that compose it. This configuration can have a tree structure, whereby a pallet, for instance, can contain different boxes, each of which can contain a certain number of items.

Accurately defining the packaging is crucial because it allows for the automatic generation of the necessary UDC for shipping when preparing an order. 

Moreover, specific units of measurement for volume can be associated, and descriptions for customers or suppliers can be defined, thus allowing customized management according to the specific needs of each customer. Therefore, this tab serves as a key tool for optimizing logistics and inventory management.
:::

Through this tab, the method of packaging the item is defined by specifying the types of load units that compose it.

It can be a tree structure since, for example, we can establish the pallet as the packaging method, which can contain a specified number of boxes, each of which can contain a specified number of items.

Defining the packaging allows the system to create the necessary load units for shipping when preparing an order for shipment;

The window consists of a grid within which the following information is entered:

**Load unit type / Content load unit type**: in these fields, the type of load unit, i.e., the type of packaging, and the type of content are entered by selecting the relevant option from the corresponding dropdown; the data present in these fields' dropdowns has been previously coded in the corresponding table [Loading unit types](/docs/configurations/tables/logistics/loading-unit-types);  
**Quantity**: in this field, the quantity that the load unit can contain is specified;  
**Priority**: in this field, the priority of the packaging is indicated (for example, if we have a pallet containing boxes, priority needs to be given so that when the system creates the load units it knows the packaging priority);  
**Account / Subaccount / Customer/Supplier Description**: in this field, the customer/supplier requesting this type of load unit is entered. Thus, different load units can be defined at the individual customer level;  
**Unit of measure size**: in this field, the unit of measure for the dimensions of the load unit is selected; upon entering the **Load unit type**, this value is retrieved from the table [Loading unit types](/docs/configurations/tables/logistics/loading-unit-types);   
**Height / Width / Depth**: in these fields, the dimensions of the complete load unit are specified; upon entering the **Load unit type**, these values are retrieved from the table [Loading unit types](/docs/configurations/tables/logistics/loading-unit-types) only if the **Variable volume** flag (present in Loading unit types) is deactivated; otherwise, the data will not be proposed and must be entered manually by the operator due to the impossibility of predicting how the items will be placed on the selected load unit. In any case, they can be modified manually, and any changes will also recalculate the **Volume**;  
**Volume unit of measure**: in this field, the unit of measure for the volume of the load unit is specified; upon entering the **Load unit type**, this value is retrieved from the table [Loading unit types](/docs/configurations/tables/logistics/loading-unit-types);   
**Volume**: in this field, the volume of the complete load unit is specified. If the **Variable volume** flag is active, when entering the **Load unit type**, this value is calculated by summing the empty load unit volume from the table [Loading unit types](/docs/configurations/tables/logistics/loading-unit-types) and the article volume (taken from the *Volume* field present in the Weights / Dimensions tab of the item registry multiplied by the corresponding quantity) with the volume of contained load units. However, if the **Variable volume** flag is inactive, upon entering the **Load unit type**, the value of the empty load unit volume from the table [Loading unit types](/docs/configurations/tables/logistics/loading-unit-types) will be reported directly since it is not variable. If the dimensions of **Height / Width / Depth** are modified, the **Volume** value will be recalculated accordingly. The **volume** will also be recalculated if there are changes in the volume of the **Content load unit type**. This value can always be modified manually;  
**Variable volume**: indicates that this is a load unit with variable volume, meaning the total volume will vary depending on what and how it will be loaded; this field is read-only and filled in the table [Loading unit types](/docs/configurations/tables/logistics/loading-unit-types);  
**Weight unit of measure**: in this field, the unit of measure for the weight of the load unit is specified; upon entering the **Load unit type**, this value is retrieved from the table [Loading unit types](/docs/configurations/tables/logistics/loading-unit-types);      
**Weight**: in this field, the weight of the complete load unit is specified; upon entering the **Load unit type** and the **Quantity**, this value is calculated by summing the empty load unit weight from the table [Loading unit types](/docs/configurations/tables/logistics/loading-unit-types) and the weights of the articles (taken from the *Gross weight (Peso lordo)* field in the Weights / Dimensions tab of the item registry multiplied by the corresponding quantity) or from the weight of contained load units. This value can always be modified manually;  
**Dimension tolerance/Quantity tolerance**: are used in customizations and would be useful when creating a UDC picking list from a loading plan with available load units in the warehouse. The procedure should insert in the UDC list load units whose dimensions or quantities differ from those specified in the packaging by the specified percentages. Currently, they are not used as standard;                
**Mandatory dimensions**: if active, this flag indicates that the specified dimensions are mandatory;  
**Mandatory load unit**: if active, this flag indicates that this item must be managed through load units in production declarations and in goods receipt of the WMS;  
**Load unit description / Content load unit type description**: in these fields, once the load unit type and the content load unit type are entered, the descriptions of the selected types will be automatically displayed.

## 10. **Costs**

:::important What it is for
In the Costs tab of the item registry in Fluentis, users can record various types of associated costs, including last cost and weighted average cost, which are automatically updated based on warehouse movements. The last cost represents the last recorded purchase price, while the average cost is the result of warehouse movements, useful for calculating the value of stock.       
The tab also allows defining a standard cost, used as a reference for the year and usually updated annually. Additionally, the selling price can be entered, from which sales price lists can be created.          
This information is fundamental for the valuation of stock and for financial planning, contributing to more effective management of stock items.
:::

Within this tab, different costs associated with the item are entered.

#### Specific fields  
**Last cost** and **Average cost**: for last cost, the most recent purchase cost is meant, while for weighted average cost, it refers to the average cost which results from warehouse movements. For both costs, the reason used for the warehouse movement must have the flag for updating *Average cost/Last cost* activated, as well as the flag for *Update item cost* and *Fiscal interest*; in this way, the relevant movements will be taken into account for cost calculation.   
**Standard cost/Subsequent standard cost**: standard cost is a manually set or calculated cost that indicates the reference cost for a given item to be used during the year. It is usually a cost that gets updated at the beginning or end of the year. For purchased items, it usually corresponds to the average cost, while for other items, it is calculated using the [Cost calculation procedure](/docs/controlling/cost-calculation/cost) found in the *Controlling* area, as the sum of material costs and production phase costs.  
All these costs can be used for bill of materials valuation, stock valuations, or (for purchased items) for production order (and related loading movements) item valuation when loading the item of a production order.  
**Selling price**: base price from which to start creating a sales price list if a national starting price list is considered. If there are no price lists for this item, this price will be taken for the documents. (unless for return documents wherein the article will take the price indicated in the last cost by default to be verified) (it is not widely used).  
**Discount category/Price range configuration**: these are strictly commercial data used for price updates.  
It will be used in documents; it will never report discounts from the price lists in which it is included, and commissions on the sales of this item will not be calculated.

## 11. **Item Descriptions in Language**

This tab allows entering the **Description in language** and **Description 2** of the item in various working languages used.

#### Specific fields  
**Language**: through this dropdown, the language that is to be added is selected; the languages from which the selection can be made have been previously coded in the relative table;  
**Description in language**: in this field, the description of the item in the chosen language is manually entered;  
**Description 2**: in this field, the secondary description of the item in the chosen language is manually entered.

## 12. **Extra Data**

Refer to the documentation regarding [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata).

## 13. **Preferred Suppliers**

:::important What it is for
The Preferred Suppliers tab within the item registry in Fluentis is a key functionality for managing procurement. This allows for precise definition of the preferred suppliers for each item, thus facilitating the procurement process and ensuring that the most suitable suppliers are chosen.
In its interface, the section is divided into two main parts. The first part concerns general information about the suppliers, such as the selection of a default supplier, which becomes the main procurement channel for the item in question. Here, users can also set important parameters such as maximum order quantity, tolerances on quantities and prices, and details regarding supply orders. The second part offers a detailed grid where specific information about each supplier can be added, such as procurement time, and any notes.
:::

In this tab, the preferred suppliers from whom that item is usually sourced can be defined for each item, indicating a default one so that the system always orders from the same supplier.

The window consists of two sections:  
1. In the first section, information regarding all preferred suppliers is entered if this information is generic, such as:

**Mandatory supplier relationship**: if active, this flag indicates that this item can only be purchased from the default supplier indicated in the grid in the second part of the screen;  
**Maximum number of trial lines**: this refers to the maximum number of supplier order lines that can be made for a given item/supplier until the **Order line block** flag is activated;  
**Purchase U.M**: in this field, the unit of measure for purchasing that material is indicated;  
**Maximum purchasable value**: in this field, the maximum quantity that can be ordered from that supplier for that item is indicated;  
**Order line block**: if active, this flag indicates that the possibility of entering new supplier order lines should be blocked;  
**Block date**: indicates the date when the block on supplier order lines is activated;  
**% tolerance on received quantities in excess and in deficit**: in these two fields, the % of tolerance on quantity delivered more or less by the supplier for that material is indicated;  
**% tolerance on price in excess and in deficit**: in these two fields, the % of tolerance on supplier price in excess and in deficit compared to the established price is indicated;  
**Allow zero price**: if active, this flag allows issuing supplier orders with a zero price for that item.

2. In the second part of the screen, there is a grid where the default supplier and any other suppliers used for purchasing the item and their relevant data for each supplier are indicated:  
**Supplier**: the account/subaccount/description of the supplier is indicated;  
**Default**: this flag, if active, indicates the default supplier in the case of multiple suppliers;  
**Economic lot**: in this section, the minimum economic lot and its multiples for each supplier are indicated;  
**Supplier item**: in this section, the code and description that the supplier uses to identify the item can be added;  
**Procurement time**: for each supplier, the management time, i.e., the time needed for the supplier to reproduce/purchase that item, the shipping time, i.e., the time needed to ship the material from the supplier, total time, which is the sum of the previous two data, indicating the time required to replenish the material stock is indicated;  
**Purchase order**: in this section, the information related to purchase orders for each supplier as detailed above (U.M, order block, block date, maximum number of lines, maximum value, % of tolerance on received quantities in excess/deficit) is indicated;  
**Producer**: in this section, the account and description of the material producer are indicated;  
**Origin**: indicates the origin of the goods, such as the country of origin or the provenance of animal or vegetable origin;     
**Acceptance controls**: within this field, any controls that need to be performed upon receipt of the material before it can be used are indicated;  
**Variant**: in this field, the possible variant of the supplier of that item is entered;  
**Notes**: this section allows for any notes related to the specified supplier to be entered.

## 14. **Images**

This tab allows attaching images to the item.

Through the **Add image** button, it is possible to insert an image within the tab.

This procedure is not widely used since the [**Attach documents**](/docs/guide/common/common-buttons#document-manager) function present in every form allows attaching various types of documents, including images.

## 15. **Supplier Price Lists**

In this tab, all supplier price lists in which the item is present are reported. The grid is read-only.

## 16. **Sales Price Lists**

In this tab, all customer price lists in which the item is present are reported. The grid is read-only.

## 17. **Lots and Serial Numbers**

:::important What it is for
The "Batches and Serial Number" tab in the Fluentis article registry allows for detailed management of materials through two variants: batch management and management through serial numbers. The batch management allows articles to be organized into homogeneous groups, which can be either for purchase or production. Each batch is identified by a unique code that allows tracking its movements and stock levels, even in multi-warehouse scenarios. Within batch management, users can define the type of withdrawal (FIFO, expiration date, or manual), select the type of batch code to define its coding. This management is essential for sensitive articles such as food and pharmaceuticals.

Alternatively, management with serial numbers offers the ability to track each individual piece through a unique serial number. This is particularly useful for high-value or critical items, where each unit requires precise monitoring. Available options include the method of generating the serial number (manual or automatic) and the time validity of the number itself.

This tab is therefore a crucial element to ensure traceability, regulatory compliance, and efficient stock management in the warehouse, thus helping to optimize the company's logistics.
:::

Articles can be managed in batches or by serial number, and subgroups of each article code can also be created, which in turn can be managed in batches or by serial number.

Batches are groups of homogeneous quantities of articles that enter the company (purchase batches) or are produced within the company itself (production batches).

Each batch must be identifiable by a unique code, from which some information characterizing the batch itself can be retrieved. This code can be defined by the company in the **Batch Code Type** window, or, in the case of purchase batches, it can be decided to maintain the same batch code as the supplier.

Every batch must be traceable, and in the case of multiple warehouses, it must be possible to track stock data for each warehouse thanks to the batch code.

Within this tab, parameters will be defined based on the type of management that will be chosen for that specific article and will be applied through the appropriate flags found at the beginning of this tab: **Managed in batches** and **Managed with serial number**.

### Batch Management

**Type of batch withdrawal**: indicates whether the withdrawal type is F.I.F.O., by expiration date, or manual (therefore chosen by the operator);      
**Batch code type**: in this case, the type of batch code (and the relative characteristics set to create it) defined in the *Batch Code Type* window is selected and is given by the concatenation of multiple fields;       
**Initial batch status**: usually, each batch is characterized by a status that defines its validity. For some types of materials in particular, such as food and pharmaceutical products, the status is mandatory (e.g., in the pharmaceutical field, a batch that requires analysis before it can be used will have the initial status *in quarantine* until the analyses are complete); for these types of products, the status will be accompanied by an expiration date to avoid the sale and use of expired goods. Based on the batch status, it will be possible to choose to manage it via RFID or single RFID;       
**Managed RFID**: if activated, the article will be managed via RFID (radio frequency) technology through the application;       
**Unique RFID**: if activated, the RFID code associated with the article is unique for the article;      
**Batch expiration types**: to select the type of expiration to be attributed to the batch (whether by expiration date, on the last day of the expiration month, or on the first day of the expiration month);      
**Modify batch expiration date**: if activated, allows manual modification of the batch expiration date;      
**Advance batch blocking expressed in days**: the two fields **Block Warning** and **Block** allow expressing, in days, when to notify that the batch will be blocked and establish the blocking day of the batch;      
**Single supplier batch**: if activated, indicates that only articles from the same supplier will belong to that batch;      

Alternatively, one can choose to manage the article through **Management with Serial Number**. In this case, a serial number is created for each piece that uniquely identifies that piece within the structure to keep track of it. This type of management is particularly suitable for items considered *critical* or of *high value*, for which it is necessary to keep track of each piece moved and not just a whole quantity.

### Management with Serial Number

**Serial number code type**: to select the predefined type in the **Serial Number Code Type** table;      
**Validity days of the serial number**: to indicate how many days this code will be valid;      
**Serial number generation**: to establish the method of creating the serial number, whether manual or automatic; when set to automatic, it means that for all movements with the *incoming* cause and with the *Create Serial Number (Crea serial number)* flag active (on the cause itself), when entering the batch, the serial numbers will be created automatically.

## 18. **Notes**

This tab allows associating free notes to the article.

## 19. **Matrices**

This tab is activated only if a [Configuration](/docs/configurations/tables/CPQ/principal-configurations) has been set in the header of the Article.           
It is managed when there is a need to handle matrices for the combination of an article's attributes and allows for defining possible combinations for the article.        
First, it is necessary to assign a **Unique identifying code** and a **[Matrix Definition](/docs/configurations/tables/CPQ/matrices-definition)** (which contains the set of attributes that will make up the matrix); based on the selected definition, it will be possible to select only the valid [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for this matrix in the underlying tabs.

Moving to the *Allowed dimension values* section, the next step is to select each Extra Data from the **Attribute** combo box. Once an attribute is selected, the *Available Results* grid will display the values of the Extra Data (for example, if we select the attribute Size, in this grid, the values of the Extra Data will be displayed: XS, S, M, L, XL, etc.). After selecting the valid attribute values for this matrix, it is necessary to drag them into the *Allowed Values* grid to indicate that those values will be valid for the matrix combinations.        
Once valid values are chosen for each attribute, new tabs will automatically appear, one for each supporting matrix and one tab for the complete matrix, which will combine the various supporting matrices to have a single one with all possible combinations.        
Moving to the tabs generated by the supporting matrices, it is necessary to flag the valid value combinations. For each combination, the flag must be inserted only if valid.        
In the *Complete Matrix* tab, however, a unique matrix with all valid combinations set in the previous tab is generated.      
The matrix can now be used in the objects for which it has been configured.

## 20. **Weights/Dimensions**

:::important What it is for
The Weights and Dimensions tab of the Fluentis article registry is essential for the logistical management of articles. In this section, users can specify details regarding the dimensions and weight of the articles, facilitating warehouse operations and procurement.         
This allows for the entry of dimensions (length, width, height) using the chosen unit of measure, and automatically calculates the volume.           
Furthermore, it is possible to define the gross, net, and specific weight, important information for planning shipments and managing costs.
:::

#### Article Dimensions

In the combo, users have the option to choose the unit of measurement for dimensions from the proposed options and in the underlying area can indicate the first, second, and third dimensions and their respective values, to indicate height, width, and depth.

#### Volume  
In the combo, the unit of measurement for volume will be chosen, and in the field below, the reference volume value will be indicated.

#### Material Type  
In the combo, the material type is selected from the pre-coded material types in the relevant table **Tables > Logistics > Material Types**. Additionally, it is possible to define the material profile type with the relative dimensions.

#### Weight  
In the combo, the unit of measure for weight will be selected, followed by indicating in the subsequent fields the gross weight, net weight, and specific weight. The gross weight and net weight are the weights reported in the various documents related to the article.

#### Load Unit Type  
In the combo, the packaging of the article is defined (whether pallet, euro pallet, etc.), and in the field below, the number of articles per load unit can be indicated. Based on the load unit type and the articles per load unit, when creating loading plans, it will automatically calculate the quantities and packaging for vehicle preparation. It is important to note that these values are considered if there are no generic values in the [Packaging](/docs/erp-home/registers/items/create-new-item) tab.

#### Number of Packages  
This section is used to manage the number of packages in documents; it can be managed based on either the number of articles per package or the number of packages to form the article by setting the flag on the parameter that one wants to use for this calculation; doing so, the calculation of the number of packages will then be reported automatically in the documents.

## 21. **Quality**
In this tab, a series of useful information for quality control processes (if any) for that article will be defined.

#### Locations

In this section, we will define the location within the warehouse where the item should be placed; in particular, you can define:

**Location type**: that is where we want to place the item;  
**Single-item location**: if active, this flag indicates that only that type of item may be stored in that location; therefore, there cannot be two different items in the same location at the same time;  
**Single-batch location**: if active, this flag indicates that in that location not only can only one type of item be stored, but only one batch of that item can be stored in that place and not multiple batches of the same item at the same time.

#### Warehouse Registrations

In this section, we will define useful information for the warehouse registration of this item, such as:  
**Manual loading allowed**: if active, this flag indicates that this item can be loaded manually into the warehouse;  
**Movement block**: used in customizations to block the saving of a manual registration if the related value (standard or actual of the item or batch) exceeds the specified **Maximum loading value/maximum unloading value**. It is not used as standard;          
**Maximum loading value/maximum unloading value**: used in customizations (together with the flag **Movement block**) as reference values to block the saving of a manual registration if the related value (standard or actual of the item or batch) exceeds the specified one. They are not used as standard;  
**Cost to use**: in this subsection, you will indicate how you intend to value the item, whether considering the actual cost or the standard cost;

#### Purchases

In this section, you will indicate whether checks should be carried out upon receipt of the purchased material or if these are not required, indicating:  
**Acceptance controls**: through the combo, you will select the type of check that must be performed (internal/non-standard/standard/official) and in the adjacent fields through help, you will indicate the Type of control plan by choosing from the control plans coded within the respective form accessible via the path **Quality > Control plans**.  
**Acceptance checks not required**: if active, this flag indicates that acceptance checks are not required.

#### Production

In this section, you will specify information related to the production of the material, always connected to quality control, such as:

**% tolerance on produced quantity**: here you will indicate the percentage of tolerance on the quantity produced either more or less,

**Technical sheet**: in these fields, you will select, where available, the technical sheet and the type of technical sheet related to this item;

**Technical sheet not required**: if the material does not require a technical sheet, this flag will be activated;

#### Quality

In this section, you will indicate the lead time for analysis needed to carry out preliminary checks on the item:  
**Analysis lead time**: if active, this flag indicates that quality checks are necessary for that material, thus requiring a period of time (in days) indicated in the adjacent field; this serves to establish how many days after receiving the material it can be used in production or, in the case of a finished product, how many days after its production it can be shipped.

#### Post-Sale

In this final section, you will indicate the warranty granted on the material and the related warranty days by activating the **With Warranty** flag and adding the number of warranty days in the editable field; if the material does not have a warranty, the flag will be deactivated.

## 22. **Expenses**

Within this tab, it is possible to add/manage expenses related to the item which can include various expenses, disposal expenses, etc.

These expenses are coded in the corresponding **Expenses** table.

The screen consists of a grid in which to enter the expenses you want to manage for that item from those present in the previously coded expense types.  
**Type**: through this combo we select the type of expense we want to add from the list of expenses through the relative combo;  
**Description**: a field that automatically populates once the type of expense is selected, showing the description of the selected expense;  
**Amount**: in this field, you manually enter the amount of the expense in the reference currency;  
**Date**: through this combo, you enter the start validity date of the expense for this item;  
**End date**: in this field, you can enter the end validity date of the expense for that item, if applicable.

If you need to enter multiple types of expenses, simply move to the underlying row and repeat the expense addition procedure just described.

:::note Note
The expenses entered in this tab are reported in the *Summaries* tab of customer orders in the **Expenses** section.
:::

## 23. **Alternative U.M**

:::important Purpose
The Alternative Unit of Measure tab in the Fluentis item registry offers an important functionality for managing different units of measure associated with each item. In this tab, it is possible to define an alternative unit of measure, useful for managing items that can be handled in more than one unit. This approach simplifies procurement and warehouse operations, allowing various operators to use a unit of measure with which they feel more comfortable or which best suits their operational needs.     
The tab contains a section to specify the conversion factor between the main unit of measure and the alternative one, allowing for automatic calculation of the required quantity.     
The available options include settings to define whether a unit of measure is predefined or mandatory, as well as to establish which units of measure are prioritized during stock management operations.      
Through these functionalities, companies can manage warehouse stocks and orders more efficiently, adapting unit of measure information to specific operational needs and improving interoperability between different management systems, such as the Warehouse Management System (WMS).
:::

In this tab, the alternative unit of measure of the item is indicated where necessary. 

The item can be managed in both units of measure, creating relationships between the two.

**Unit of Measure** and **Description**: you will indicate the alternative unit of measure with its description;  
**Conversion factor**: here you define the conversion factor between the main unit of measure and the alternative unit of measure; the *alternative quantity* in documents is calculated based on the setting made in the [Initial Warehouse Parameters](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)  
**Default**: if active, this flag indicates which unit of measure is the reference among N possible alternatives for the item;  
**Mandatory**: if active, this flag determines the invariability of the conversion factor. When entering the management unit of measure through the conversion factor, the system automatically calculates the alternative unit of measure, and vice versa. If the Mandatory flag is not active, that alternative unit of measure can be set as the primary unit of measure, regardless of the **Priority** flag;     
**Priority**: if active, updating the *management quantity* does not change the *alternative quantity* because the latter takes priority; whereas if the *alternative quantity* is modified, the *management quantity* is recalculated based on the alternative quantity according to the conversion factor;        
**Default WMS**: if active, indicates that this unit of measure will be the default used within the WMS.

## 24. **Variants**

:::important Purpose
The Variants tab in the Fluentis item registry provides functionality for entering and managing variants of a given item. This option is particularly useful when creating a new item that differs only marginally from an existing one. In these cases, creating a variant is preferable to creating a new item, especially when the main characteristics of the original item remain substantially unchanged.       
A practical example of this functionality can be observed in the fashion industry: you might have an item called "shirt," from which variants are created for different sizes and colors, keeping the fundamental characteristics of the original shirt intact.

The tab is structured in two grids: the first contains the details of the variants, such as code, description, minimum and maximum stock, reorder point, stock days, average cost, and selling price. This information differentiates each variant from the main item. In the second grid, if available, you can also enter a specific barcode for the variant.

In summary, the Variants tab represents a powerful tool for managing minor differences between similar items, facilitating the registration and administration of stocks.
:::

In this tab, you can enter and/or view the variants of a given item. Sometimes, if a new item you need to create is very similar to an existing one and differs only by a minimal characteristic that does not have a significant impact on the information present in the various tabs of the existing item, in this case, you do not create a new item but simply create variants of that item.

An *example* can be in the fashion sector: you enter the shirt item and then create variants for size and color, but the main characteristics of the shirt item remain the same.

The tab consists of two grids. In the first grid, the variant is entered with information regarding code and description, minimum and maximum stock, reorder point, relative days, stock days, last cost, average, standard cost, and finally the selling price.

The information found in the grid contains the unique information that differentiates the variant from the main item; for all the information not present in the grid, you can rely on that contained in the various tabs of that item.

In the underlying grid, you can enter, if present, the specific barcode for that variant.