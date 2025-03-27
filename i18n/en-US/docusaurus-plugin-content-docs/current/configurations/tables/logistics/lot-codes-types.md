---
title: Batch Code Type 
sidebar_position: 26
---

:::important What it is for
The Batch Code Types table in Fluentis represents a fundamental tool for the customization and management of batch codes used in logistics and product traceability. This table allows for defining various batch code types based on specific business needs, with the goal of optimizing material management operations and ensuring proper identification of batches.

Within this table, it is possible to enter new batch codes, specifying both an identifying code and an associated description. Additionally, parameters such as the initial value of the progressive number and the management of alphabetical characters can be configured, allowing for greater flexibility in the composition of batch codes. It is important to note that each code type must be associated with the item registry to ensure proper integration during the automated batch code creation processes.

Configuring these batch codes not only facilitates control and traceability but is also essential in multi-warehouse management contexts, where inventory traceability becomes crucial. Users can navigate through different sections of the table to detail the characteristics, associations, and progressives of the batches, contributing to more efficient and accurate material management within the company.
:::

The table is located on the path **Tables > Logistics > Batch Code Type**.

In this table, it is possible to code *Batch Code Types* customizing them according to needs.

**Search Batch Codes**

The form consists of a filter area and a results area. Once the desired filters are set, simply click the **Search** button to display the results in the results area.

**Insert Batch Codes**

To enter new codes, you must click on the first empty row in the grid or press the **New** button. 

You need to enter the **Code** and **Description** of the batch code type, enable or disable the **Fill progressive value** flag to fill in missing values in the numeration, and enter the initial value of the numeric progressive in the **Start progressive value** field and the alphabetical value in the **Start character value** field. Obviously, the first will be the initial value of the **Progressive Number**, while the second will be the initial value used for **Alphabetical Characters**.

The **Batch Code Type** must then be linked to the *Item Registry* in the appropriate and homonymous field located in the [Batches and Serial Number](/docs/erp-home/registers/items/create-new-item) tab, so that in the procedures that automatically create the batch code for the item in question, the batch itself is generated according to the rules set here.

Below the main table, there are three tabs:   
- **Batch Code Type Details**
- **Batch Code Type Progressive Definition Details**  
- **Batch Code Type Progressive Key Values Details**    

**Batch Code Type Details**
In the *Batch Code Default* table, all the values that can be used for the composition of the batch being created are present, specifically:

> *Class*: indicates the class of the item;    
> *Code*: indicates the item code;     
> *Characteristic*: indicates the characteristic of the item registry;     
> *Product cat.*: indicates the merchandise category of the item registry;    
> *Item Type*: indicates the item type of the item registry;    
> *Variant*: indicates the variant of the item;    
> *Progressive Number*: is a numerical progressive;          
> *Alphabetical Characters*: is an alphabetical progressive, unlike the *Progressive Number* which is numeric;        
> *Day of Insert Date*: indicates the day of the insert date;    
> *Month of Insert Date*: indicates the month of the insert date;    
> *Year of Insert Date*: indicates the year of the insert date;    
> *Day of Expiry Date*: indicates the day of the expiry date;    
> *Month of Expiry Date*: indicates the month of the expiry date;    
> *Year of Expiry Date*: indicates the year of the expiry date;     
> *Batch Type*: indicates the batch type of the item;     
> *Year-Letter Association*: indicates the value associated with the year in the [Year-Letter Association](/docs/configurations/tables/general-settings/year-letter-association) table;    
> *Month-Letter Association*: indicates the value associated with the month in the [Month-Letter Association](/docs/configurations/tables/general-settings/month-letter-association) table;    
> *Supplier Code Name*: indicates the code name present in the supplier registry;          
> *Purchase Invoice Number*: indicates the purchase invoice number;  
> *Delivery Note Number*: indicates the purchase receipt number;     
> *Vendor Batch*: indicates the vendor batch number.    

Each of these, depending on the needs, must then be moved to the *Batch Code Type Details* table using the appropriate buttons present in the ribbon bar.
For each item added, it is possible to define the *Length* and the *Fill Character*.

*Specific Buttons*:
> **Move: Default -> Detail**: allows adding one of the items present in the *Default Code* table to the *Batch Code Type Detail* table. This button is enabled only after selecting a row in the *Default Code* table of the *Batch Code Type Detail* tab;          
> **Move: Detail -> Default**: allows removing one of the items present in the *Batch Code Type Detail* table, returning it to the *Default Code* table. This button is enabled only after selecting a row in the *Batch Code Type Detail* table of the *Batch Code Type Detail* tab;               

**Batch Code Type Progressive Definition Details** 

In this tab, it is possible to define which items present in the *Default Code* table should make up the root of the batch code, meaning that part of the code that will remain fixed while the progressive will vary. In this case, it is not possible to select the items *Progressive Number* and *Alphabetical Characters* because being progressives they vary continuously, while all other items can be selected.

*Specific Buttons*:
> **Move: Default -> Progressive Definition**: allows adding one of the items present in the *Default Code* table to the *Progressive Definition* table. This button is enabled only after selecting a row in the *Default Code* table of the *Batch Code Type Progressive Definition Details* tab;          
> **Move: Progressive Definition -> Default**: allows removing one of the items present in the *Progressive Definition* table, returning it to the *Default Code* table. This button is enabled only after selecting a row in the *Progressive Definition* table of the *Batch Code Type Progressive Definition Details* tab;  

**Batch Code Type Progressive Key Values Details**  

In this tab, all the values of the latest progressives related to each individual root of the code are displayed.

For anything not detailed in this document regarding the common functionality of forms, refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).