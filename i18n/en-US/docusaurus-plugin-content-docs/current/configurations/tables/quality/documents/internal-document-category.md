---
title: Document Categories of Internal Origin
sidebar_position: 2
---

The table is located on the path **Tables > Quality > Documents > Document Categories of Internal Origin**.

:::important What it is for
The data present in this table are used to catalog the different types of Internal Origin Documents.   
The data entered in these grids will be replicated in the creation of Internal Origin Documents.   
An example of use can be found in the management of **Internal Origin Documents**.
:::

The table allows for the insertion of new records or the search for existing ones to view, modify, or delete them.

**Document Categories of Internal Origin Search**

The form consists of a filter area and a results area. Once all the desired filters are set, simply click the **Search** button to view the results in the results grid.

**Insert Document Categories of Internal Origin**

To insert new *Document Categories of Internal Origin*, it is necessary to click on the first empty row in the grid or press the **New** button.   
For the new record, at least the mandatory fields required by the program must be filled: **Code** and **Description**.

**Duplicate Document Categories of Internal Origin**

To duplicate an existing *Document Category* into a new *Document Category*, click on the *Document Category* you wish to duplicate in the grid and press the **Duplicate** button.   
You will be prompted for the **Code** and **Description** of the new *Document Category* (both fields are mandatory).   
Press the **OK** button to proceed with the duplication or the **Cancel** button if you wish to cancel the duplication activity.

## Document Categories of Internal Origin

This is the list where the main information of the *Document Category* is entered.   
The list consists of the following information:   
> **Category**: it is the code of the *Document Category*.   
> **Category Description**: it is the description of the *Document Category*.   
> **Sequence**: it is the visual sequence in the *Document Categories* lists.   
> **Obligation Document**: indicates whether it is mandatory to attach the document.   
> **Document automatic encoding**: indicates whether to enable automatic coding of the document; the coding will consist of: *Category Code* plus a progressive number of digits indicated in *Number of Progressive Digits* starting from the number indicated in *Initial Progressive*.   
> **Number of Progressive Digits**: enabled if *Document automatic encoding* is required, it is the number of digits in the progressive that will make up the document code.   
> **Initial Progressive**: enabled if *Document automatic encoding* is required, it is the number that will be proposed upon entering the first document.   
> **Verification/Approval Function**: it is the *Company Function* responsible for the verification/approval of the document.   
> **Editing/Issuing Function**: it is the *Company Function* responsible for the editing/issuing of the document.   
> **Document Type**: it is the code of the *Document Type* proposed for coding the attached document for coding in the *Document Management*.   
> **Document Type Description**: it is the description of the *Document Type* proposed for coding the attached document for coding in the *Document Management*.   
> **Archive**: in this field, the warehouse where the specific category can be found is assigned.   
> **Location**: indicates the usual physical location of the *Category*; only *Locations* belonging to the selected *Archive* can be chosen.   
> **Descriptive Location**: if the location is not coded, it can be manually entered in this free field.   
> **Retention Period**: contains a retention period to be manually entered.   
> **Responsible Function**: contains the *Company Function* responsible for the *Category*.   
> **Notes**: free annotations.

### Distribution List 

In this list, you can associate: *Company Functions*, *Employees*, *Customers/Suppliers*, and *Contacts* who usually receive a copy of the selected *Document Category* and indicate the usual methods of receiving the document.   
The list consists of the following information:   
> **Group**   
>> **Code**: it is the code of the recipient *A.R.M. Role*.   
>> **Description**: it is the description of the recipient *A.R.M. Role*.   
>
> **User**   
>> **Code**: it is the code of the recipient *A.R.M. User*.   
>> **Description**: it is the description of the recipient *A.R.M. User*.   
>
> **Company Function**   
>> **Code**: it is the code of the recipient *Company Function*.   
>> **Description**: it is the description of the recipient *Company Function*.   
>
> **Employee**   
>> **Code**: it is the code of the recipient *employee*.   
>> **Surname**: it is the surname of the recipient *employee*.   
>> **Name**: it is the name of the recipient *employee*.   
>
> **Customer/Supplier**   
>> **Description**: it is the company name of the recipient *Customer/Supplier*.   
>
> **Contact**   
>> **Code**: it is the code of the recipient *Contact*.   
>> **Description**: it is the description of the recipient *Contact*.   
>
> **Other Recipient**   
>> **Description**: it is the free description of an uncoded recipient.   
>
> **Data for delivery**   
>> **On paper**: indicates that at the time of distribution (internal procedure within the management of *Internal Origin Documents*), the entity wishes to receive a *On paper* copy of the document or as an attachment via *Email*.   
>> **Delivery Method**: indicates the usual delivery method of the *Document Category*.   
>> **Email**: indicates a destination email, if not coded in the recipient's registry.   
>> **Number of Copies**: indicates the number of paper copies the recipient wishes to receive.   
>> **Notes**: free annotations.   

*Specific Buttons*:      
**New Recipient**: inserts a new row in the list.   
**Delete Recipient**: deletes the selected row from the list.   

### Access Allowed to the Functions 
In this list, you can enter the *Company Functions* that will be granted access rights.   
If no rows are inserted in this table, access is allowed to everyone.   
The list consists of the following information:   
> **Function**: it is the code of the *Company Function*.   
> **Function Description**: it is the description of the *Company Function*.   
> **Notes**: free annotations.

*Specific Buttons*:      
**New Access Function**: inserts a new row in the list.   
**Delete Access Function**: deletes the selected row from the list.   

### Extra Data 
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each *Internal Origin Document*.   
These *Extra Data* are inherited in the *Internal Document* of that specific category.   

For anything not detailed in this document regarding the common functioning of the forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).