---
title: Document Categories of External Origin
sidebar_position: 1
---

The table is located at **Tables > Quality > Documents > Document Categories of External Origin**.

:::important What it is for
The data present in this table is used to categorize the different types of External Origin Documents.   
The data entered in these grids will be reported in the creation of External Origin Documents.   
An example of use can be found in the management of **External Origin Documents**.
:::

The table allows for the insertion of new records or the search of existing ones to view, modify, or delete them.

**Document Categories of External Origin Search**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results in the results grid.

**Insert Document Categories of External Origin**

To insert new *Document Categories of External Origin*, you need to click on the first empty row in the grid or press the **New** button.   
For the new record, it is necessary to enter at least the mandatory fields required by the program: the **Code** and the **Description**.

**Duplicate Document Categories of External Origin**

To duplicate an existing *Document Category* into a new *Document Category*, you must click on the *Document Category* in the grid that you want to duplicate and press the **Duplicate** button.   
A request for the **Code** and **Description** of the new *Document Category* will be displayed (both data are mandatory).   
Then press the **OK** button or the **Cancel** button if you wish to proceed with the duplication or not.

## Document Categories of External Origin

It is the list where the main information of the *Document Category* is entered.   
The list consists of the following information:   
> **Category**: is the code of the *Document Category*.   
> **Category Description**: is the description of the *Document Category*.   
> **Archive**: in this field, the warehouse where the specific category can be found is assigned.   
> **Location**: indicates the usual physical location of the *Category*; it is possible to choose only the *Locations* that are part of the selected *Archive*.   
> **Descriptive location**: if the location is not coded, it can be manually entered in this free field.   
> **Retention period**: contains a retention period to be entered manually.   
> **Responsible function**: contains the *Company Function* responsible for the *Category*.   
> **Notes**: free annotations.

### Distribution List

In this list, it is possible to associate: *Company Functions*, *Employees*, *Customers/Suppliers*, and *Contacts* who regularly receive a copy of the selected *Document Category* and specify the usual methods of receiving the document.   
The list consists of the following information:   
> **Company Function**   
>> **Code**: is the code of the receiving *Company Function*.   
>> **Description**: is the description of the receiving *Company Function*.   
>
> **Employee**   
>> **Code**: is the code of the receiving *Employee*.   
>> **Surname**: is the surname of the receiving *Employee*.   
>> **Name**: is the name of the receiving *Employee*.   
>
> **Customer/Supplier**   
>> **Description**: is the business name of the receiving *Customer/Supplier*.   
>
> **Contact**   
>> **Code**: is the code of the receiving *Contact*.   
>> **Description**: is the description of the receiving *Contact*.   
>
> **Other recipient**   
>> **Description**: is the free description of an uncoded recipient.   
>
> **Data for delivery**   
>> **On paper**: indicates that at the time of distribution (internal procedure within the management of *External Origin Documents*), the subject wishes to receive a paper copy of the document or as an attachment via *Email*.   
>> **Delivery method**: indicates the usual delivery method of the *Document Category*.   
>> **Email**: indicates a destination email if not coded in the recipient's registry.   
>> **Number of copies**: indicates the number of paper copies that the recipient wishes to receive.   
>> **Notes**: free annotations.   

*Specific buttons*:      
**New recipient**: inserts a new row in the list.   
**Delete recipient**: deletes the selected row from the list.   

### Access Allowed to the Functions 
In this list, it is possible to enter the *Compnay Functions* to grant access rights.   
If no rows are entered in this table, then access is allowed to everyone.   
The list consists of the following information:   
> **Function**: is the code of the *Company Function*.   
> **Function description**: is the description of the *Company Function*.   
> **Notes**: free annotations.

*Specific buttons*:      
**New access function**: inserts a new row in the list.   
**Delete access function**: deletes the selected row from the list.   

### Extra Data 
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each *External Origin Document*.   
These *Extra Data* are inherited in the *External Document* of that particular category.   

For everything not detailed in this document regarding the common functioning of forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).