---
title: Item Control Types 
sidebar_position: 9
---

The table can be found in the path **Tables > Quality > Item Controls > Item Control Types**. 

In this table, it is possible to code the *Item Control Types*.  
The *Item Control Type* is an integral part, along with the *Year* and *Number*, of the unique code for the *Item Control*. 
Some examples of the use of *Item Control Types* can be found in the managements:
> **Import items to check** - in the *header info*;  
> **Item controls** - in the list of *header info*;  
> **Certificates of Analysis** - in the *Controls and detected values* tab;  
> **Item Controls Parameters** - in the *General* tab;  
and in all the managements where the *Item Control* is used. 

The table allows the insertion of new records or the search for existing ones to view, modify, or delete them.

**Search Item Control Types**

The form consists of a filter area and a result area. Once all the desired filters are set, simply click the **Search** button to display the results in the result grid.

**Insert Item Control Types**

To insert new *Item Control Types*, it is necessary to click on the first empty row in the grid or press the **New** button.   
For the new record, at least the mandatory fields required by the program must be filled out: **Code** and **Description**.

## Item Control Types 

This is the list where the main information of the *Item Control Types* is entered.  
The list consists of the following information:   
> **Control type**: this is the code of the *Item Control Type*.   
> **Description Item Control Type**: this is the description of the *Item Control Type*.   
> **Warehouse**: this is the code of the *Warehouse* proposed in *Item Control > Tests > Warehouse*; it is the quality control *Warehouse* used to move the items, once checked, to the respective compliant and non-compliant *Warehouse* (if set as an offset in the respective *Causal*).   

> **Template for unload non-compliant items**: this is the code of the *Warehouse template* proposed in *Item Control > Tests > Template for unload non-compliant items*; 
it is the *Causal* for withdrawal used to move the non-compliant items, once checked, to the respective non-compliant *Warehouse*; 
the offset *Causal* is not mandatory if one does not wish to manage a scrap *Warehouse* or replenishment after subsequent reconditioning or processing of the checked item.   
> **Template for unload compliant items**: this is the code of the *Warehouse template* proposed in *Item Control > Tests > Template for unload compliant items*; 
it is the *Causal* for withdrawal used to move the compliant items, once checked, to the respective compliant *Warehouse*; 
it is advisable to set the related offset *Causal* to make the compliant item available again once checked.   
> **Template for unload destructive tests**: this is the code of the *Warehouse template* proposed in *Item Control > Tests > Template for unload destructive tests* if the *Test* is of type *Destructive*; 
it is the *Causal* for withdrawal used to move the non-compliant items, once checked; 
no offset *Causal* is provided since the *Test* is of type *Destructive* and it is impossible to carry out subsequent reconditioning or processing of the checked item.   
> **Proposed certificate type**: this is the code of the *Certificate of Analysis type* proposed when creating a new *Certificate of Analysis* from this *Item Control Type*.   
> **Warehouse description**: this is the description of the *Warehouse*;   
> **Template for unload non-compliant items description**: this is the description of the *Template for unload non-compliant items*;   
> **Template for unload compliant items description**: this is the description of the *Template for unload compliant items*;   
> **Template for unload destructive tests description**: this is the description of the *Template for unload destructive tests*;   
> **Proposed certificate type description**: this is the description of the *Proposed Certificate Type*;   
> **Notes**: free annotations.

### Extra Data 

It is possible to insert general [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for the *Item Control Types*.   
These *Extra Data* can be inherited in the *Item Controls* of that specific type.   

For everything not detailed in this document regarding the common functionality of the forms, please refer to the following link [Custom features, buttons and fields](/docs/guide/common).