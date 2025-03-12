---
title: Control Plan Types
sidebar_position: 8
---

The table is located at **Tables > Quality > Item Controls > Control Plan Types**.

In this table, it is possible to encode the *Control Plan Types*.   
The *Control Plan Type* is an integral part, along with the *Year*, *Number*, and *Revision*, of the unique code of the *Control Plan*.   
Some examples of the use of *Control Plan Types* can be found in the managements:
> **Control Plans** - in the *header info*;   
> **Item Controls Parameters** - in the *General* tab;   
and in all the managements where the *Control Plan* is used.

The table contains predefined values from the system and they cannot be modified or deleted. The predefined values are:
| Code | Description |   
|:--|:--|
| MInt | Internal |   
| MNNr | Non-normalized |   
| MNrm | Normalized |   
| MUff | Official |   

The table allows you to insert new records or search for existing ones to view, modify, or delete them (if *Eliminable*).

**Search Control Plan Types**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results within the results grid.

**Insert Control Plan Types**

To insert new *Control Plan Types*, you need to click in the grid on the first empty row or press the **New** button.   
For the new record, at least the mandatory fields required by the program must be entered: **Code** and **Description**.

## Control Plan Types 

This is the list where the main information of the *Control Plan Types* is entered.   
The list consists of the following information:   
> **Code**: this is the code of the *Control Plan Type*.   
> **Description**: this is the description of the *Control Plan Type*.   
> **Numeration**: this is the code of the *Numeration*.   
> **Eliminable**: indicates whether the *Control Plan Type* is deletable.   
> **Notes**: free annotations.

### Extra Data 

It is possible to input general [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for the *Control Plan Types*.   
These *Extra Data* are inherited in the *Control Plans* of that specific type.   

### Planned Tests

It is possible to input general [Test Types](/docs/configurations/tables/quality/item-control/test-type) for the *Control Plan Types*.   
These *Test Types* are inherited in the *Control Plans* of that specific type.   

#### Planned Tests Attribute

It is possible to input general [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for the *Planned Test*.   
These *Extra Data* are inherited in the *Tests* of the documents where the attributes are used.   

#### Planned Tests Configuration

Contains the [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) necessary for operators to prepare all the necessary tools to begin a specific test. They can be considered necessary configurations, operational information preparatory to the execution of the test.   
These *Extra Data* are inherited in the *Tests* of the documents where a configuration is required.   

For anything not detailed in this document about the common functioning of the forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).