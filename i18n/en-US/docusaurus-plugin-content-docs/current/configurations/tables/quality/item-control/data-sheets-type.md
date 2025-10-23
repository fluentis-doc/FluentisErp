---
title: Data Sheet Types
sidebar_position: 4
---

The table is located on the path **Tables > Quality > Item Controls > Data Sheet Types**.

In this table, it is possible to encode the *Data Sheet Types*.   
The *Data Sheet Types* is an integral part, along with the *Year*, *Number*, and *Revision*, of the unique code of the *Data Sheet*. 
Some examples of the use of *Data Sheet Types* can be found in the management sections:
> **Data Sheets** - in the *header info*;   
> **Item Controls Parameters** - in the *General* tab;   
and in all management sections where the *Data Sheet* is used.

The table allows for inserting new records or searching for existing ones to view, modify, or delete them.

**Search Data Sheet Types**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results within the results grid.

**Insert Data Sheet Types**

To insert new *Data Sheet Types*, you must click on the first empty row in the grid or press the **New** button.   
For the new record, at least the mandatory fields required by the program must be filled in: **Code** and **Description**.

## Data Sheet Types

This is the list where the main information for *Data Sheet Types* is entered.   
The list consists of the following information:   
> **Code**: is the code of the *Data Sheet Type*.   
> **Description**: is the description of the *Data Sheet Type*.   
> **Notes**: free annotations.

### Data Sheet Type Attributes

It is possible to enter general [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for the *Data Sheet Type*.   
These *Extra Data* can be inherited in the *Data Sheets* of that specific type.   

### Encoding Method 

This is the list where information for coding the *Code* and the *Description* of the *Data Sheet* is entered.   
The list consists of the following information:   
> **Ordering**: is the sequence of implementation in the creation of the *Code* and the *Description* of the *Data Sheet*.   
> **Type**: is a list of predefined values from the system that identify the object with which to create the coding of the *Data Sheet*; The predefined values are:   
>> *ExtraData* - used only for creating the code and description, it is an Extra Data identifiable from the column *Extradata*;   
>> *Year* - used only for creating the code, it is the *Year* of creation of the *Data Sheet*, which can be set to 2, 3, or 4 digits in the *Length* field;   
>> *Month* - used only for creating the code, it is the *Month* of creation of the *Data Sheet*, a fixed value of 2 digits;   
>> *Day* - used only for creating the code, it is the *Day* of creation of the *Data Sheet*, a fixed value of 2 digits;   
>> *Progressive* - used only for creating the code, it is the *Progressive* of creation of the *Data Sheet*, an initial value, fill character, and dimensions that can be set in the *Length* field;   
>> *Type Code* - used only for creating the code, it is the *Code* of the *Data Sheet Type*;   
>> *Type Description* - used only for creating the description, it is the *Description* of the *Data Sheet Type*;   
>> *Code Fixed Value* - used only for creating the code, these are fixed characters that can be set in the *Fixed Value* column;   
>> *Fixed Value Description* - used only for creating the description, these are fixed characters that can be set in the *Fixed Value* column.   
>
> **Extradata**: enabled if in *Type* the value *ExtraData* has been selected, it is the *ExtraData* to use for composing the *Code* and/or *Description* of the *Data Sheet*.   
> **Code Property**: enabled if in *Type* the value *ExtraData* has been selected, it is the *Code* property of the *ExtraData* to use for composing the *Code* of the *Data Sheet*.   
> **Description Property**: enabled if in *Type* the value *ExtraData* has been selected, it is the *Description* property of the *ExtraData* to use for composing the *Description* of the *Data Sheet*.   
> **Length**: enabled if in *Type* it is: *Year* or *Progressive*, it is the length that will be given to the *Type*.   
> **Space**: indicates whether a space will be inserted in the *Code* between this component of the *Code* and the next.   
> **Separator**: is the character used as a separator between this component of the *Code* and the next.   
> **Fill Character**: is the character used to complete the length of the *Progressive*.   
> **Progressive Start Value**: is the initial value of the *Progressive* when inserting the first *Data Sheet*.   
> **Fixed Value**: enabled if in *Type* it is: *Code Fixed Value* or *Description Fixed Value*.   

For everything not detailed in this document regarding the common functioning of the forms, please refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).