---
title: Serial Number Code Type 
sidebar_position: 27
---

The table can be found at the path **Tables > Logistics > Serial Number Code Type**.

In this table, it is possible to encode the *Serial Number Code Types* to be managed later in the database.

**Search Serial Number Code Types**

The form consists of a filter area and a results area. Once the desired filters are set, simply click on the **Search** button to view the results in the results area.

**Insert Serial Number Code Types**

To insert new codes, it is necessary to click on the first empty row in the grid or press the **New** button. Enter the **Code** and **Description** of the serial number code type, save the row, and decide which parameters you want to use for the composition of the newly created serial number code type.

For each parameter used, you can decide how many characters it should consist of and optionally the filling character to be used. For example, with the "Progressive number" parameter, by setting the filling character to "0" and the Length to 5, batches will be created starting with the first number 00000, then 00001, then 00002, and so on.

The **Serial Number Code Type** must then be linked to the *Item Registry* in the corresponding field located in the [Batches and Serial Numbers](/docs/erp-home/registers/items/create-new-item) tab, so that in the procedures that automatically create the serial number for the item in question, the SN itself is generated according to the rules set here.

**Details of Serial Number Code Type**

> *Class*: indicates the class of the item;    
> *Code*: indicates the item code;     
> *Characteristic*: indicates the characteristic of the item registry;     
> *Product cat.*: indicates the merchandise category of the item registry;    
> *Item Type*: indicates the item type of the item registry;    
> *Variant*: indicates the variant of the item;     
> *Alphabetic Characters*: allows the insertion of alphabetic characters.        

For everything not detailed in this document about the common functioning of forms, please refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).