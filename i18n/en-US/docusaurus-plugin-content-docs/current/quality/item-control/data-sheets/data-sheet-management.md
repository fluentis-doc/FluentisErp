---
title: Data Sheet 
sidebar_position: 2
---

The management is found along the path **Quality > Item Controls > Data Sheets > New Data Sheet** or it can be executed from **Search Data Sheets**.


:::important Purpose
Data sheets catalog all the information that describes the characteristics of associated products as suitable for a contract, a functional specification, or a specific use.   
Data sheets can be customized for the Client.   
Revisions and traceability between desired data sheets are managed.

Standard reports are available for:   
> **Data Sheet**: sheet with the list of *Properties* and *Norms and Laws* associated (for internal use).   
> **Product Details**: sheet containing data of the *Product* and *Properties* (for commercial use).   
:::


## Command Buttons


### ![](/img/neutral/common/save.png) Save

Pressing this button saves all modified information of the displayed *Data Sheet*.


### ![](/img/neutral/common/duplicate.png) Duplicate Sheet

It is possible to duplicate the displayed *Data Sheet* into a new *Data Sheet*. Just press the **Duplicate** button.   
A request will be displayed for:
> **Sheet type**: is the *Sheet type* of the new *Data Sheet* (mandatory data), the *Sheet type* of the origin *Data Sheet* is proposed.   
> **Of the customer**: is the *Customer* of the new *Data Sheet*, the *Customer account* of the origin *Data Sheet* is proposed.   
> **Extra data**: list of the extra data provided by the indicated *Sheet type*.   
> **New code**: is the *Code* of the new *Data Sheet* (mandatory data), it is proposed based on the provisions of the *Coding Method* associated with the *Data Sheet type*.   
> **Duplicate with traceability**: indicates whether to maintain the relationship/traceability in the origin *Data Sheet* (tab *Related Sheets* of the origin *Data Sheet*) and in the destination *Data Sheet* (in the *Data Sheet Origin* expander present in the *header data*).

*Sheet type* and *Of the customer* are proposed from the origin document; the *Code* is proposed if a *Coding method* is associated with the *Sheet type*.   
Then press the **OK** button or the **Cancel** button if you wish to continue or not with the duplication activity.   
The newly created *Data Sheet* will have a *Revision* equal to *Zero*.   
At the end of the processing, the new *Data Sheet* will be displayed.


### ![](/img/neutral/common/execute.png) Create new revision

To create a new *Revision* of the displayed *Data Sheet*, you must press the **Create new revision** button.   
A new *Data Sheet* is created, with all the information of the origin *Data Sheet* but with an incremented *Revision* index and the *Start validity date* equal to today's date.   
The origin *Data Sheet* ends its validity, and the *End validity date* is set to today's date.   
At the end of the processing, the new *Revision* of the *Data Sheet* will be displayed.


### ![](/img/neutral/common/item-web.png) Create Control Plan

From the *Data Sheet*, you can create a *Control Plan*; to do this, you need to press the **Create Control Plan** button.   
A new *Control Plan* is created, only copying the *Properties* of the origin with the *Tests to detect* indicator, and all other information of the *Technical Sheet* but with a *Revision* index equal to *zero* and with *Start validity date* equal to today's date. A request will be displayed for:   
> **Control plan type**: is the *Control plan type* of the new *Control Plan* (mandatory data).   
> **Number**: is the progressive *Number* of the new *Control Plan* (mandatory data), proposed based on the provisions of the *Numeration* associated with the *Control Plan type* and today's date.   
> **Create maintaining traceability**: indicates if you want to maintain the relationship/traceability of the origin *Data Sheet* in the destination *Control Plan* (in the *Control Plan Origin* expander present in the *header data*).

Then press the **OK** button or the **Cancel** button if you wish to continue or not with the creation activity.   
At the end of the processing, the new *Control Plan* will be displayed.


### ![](/img/neutral/common/duplicate.png) Duplicate Test

Next to the *Properties* tab, the button is enabled only if a single row of *Properties* has been selected from the *Properties* list.  
All information from the origin *Property* is duplicated in a new *Property* appended in *Sequence* to the already existing *Properties*.


## Data Management


### Header Data

The manageable information is:   
> **Sheet type**: is the *Data Sheet type* (mandatory data).   
> When manually entering a new *Data Sheet*, the indicated *Data Sheet type* is proposed in the *Data Sheets* expander of the *General* tab present in the *Item Control Parameters*.   
>
> **Code**: is the *Code* of the *Data Sheet* (mandatory data).   
> It is proposed based on the provisions of the *Encoding Method* associated with the *Data Sheet type*.   
>
> **Revision**: is the Revision of the *Data Sheet* (mandatory data).   
This information is modifiable if creating a new *Data Sheet*; otherwise, it is read-only; it can be varied in a controlled manner by the system using the *Create new revision* button that increments the previous *Revision* value by one.   
>
> **Description**: is the description of the *Data Sheet*.   
> **Trade name**: is the commercial description of the *Data Sheet*.   
> **Of the customer**: is the company name of the *Customer*. The *Properties* are customized for the *Customer*/*Associated items*.    
> **Demand date/Required by**: only references on which date and who is the person that requested the creation of the *Data Sheet*.    
>
> **Validity: Start/End**: are the start and end validity dates of the *Data Sheet*.    
> The dates are managed automatically when creating a new *Revision* of the *Data Sheet*.
>
> **Responsible**: is the *Employee* responsible for the *Data Sheet*.   
> When manually entering a new *Data Sheet*, the *Responsible* indicated in the *Data Sheets* expander of the *General* tab present in the *Item Control Parameters* is proposed.   
>
> **Data sheet origin**: expander where it is possible to enter:   
>
>> **Type/Sheet Origin/Rev.**: contains the references of the *Data Sheet Origin* (*Sheet type*, *Code*, and *Revision*).   
>> **Reason for revision**: a brief description of the reason that led to the revision.   
>> This information can be varied if the *Data Sheet* is still valid.   
>
> **Notes**: free notes.


### Sheet Attributes
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for each *Data Sheet*.   
They are inherited from the *Data Sheet Attributes* associated with the *Data Sheet type*.


### Properties
Contains the *Properties* of the *Items* or *Item Attributes* of the *Data Sheet*.  
The list consists of the following information:   
> **Sequence**: is the display/importance sequence of the *Property*.   
> **Test type**: is the code of the *Property*.   
> **Test type description**: is the description of the *Property*. This information is read-only.   
> **Description**: is the fillable description of the *Property*.   
> **Standard control plan reference**: is a descriptive field containing references to globally recognized test codifications.   
> **Measurement tool**: is the *Category of the measurement tool* to be used to detect the *Values* expressed in the *Property*.   
> **Test to detected**: indicates if the *Property* is a *Test to detect*.   
When creating a *Control Plan* from the *Data Sheet*, the *Property* will be copied into the *Tests to detect*.   
> **Unit of measure**: is the *Unit of measure* with which the *Typical value* and the *Minimum and maximum limits* are expressed if expressed in value and not percentage.   
> **Value type**: is the *Value type* with which to express the *Typical value*; the possible *Value types* are: *Numeric*, *Yes/No*, or *Text*.   
> **Limit type**: enabled if the *Value type* is *Numeric*, is the *Limit type* that will control the enabling of *Limits* and *Tolerance* values.   
> **Typical value**: is the expected theoretical value of the *Property*.   
> **Minimum limit**: minimum allowed limit compared to the *Typical value*.   
> **L.min.(toll-)**: is the negative tolerance limit on the minimum limit.   
> **L.min.(toll+)**: is the positive tolerance limit on the minimum limit.   
> **Maximum limit**: maximum allowed limit compared to the *Typical value*.   
> **L.max.(toll-)**: is the negative tolerance limit on the maximum limit.   
> **L.max.(toll+)**: is the positive tolerance limit on the maximum limit.   
> **%**: indicates if the *Minimum limit* and the *Maximum limit* are expressed in percentage.   
> **Start validity date**: is the start validity date of the *Property*.   
> **End validity date**: is the end validity date of the *Property*.   
> **Printable**: indicates if the information is printable or not in the reports: *Data Sheet* and *Product Details*.   
> **Notes**: free notes.   

The positive and negative tolerance limits on minimum and maximum limits are information usually given by the error of the *Measurement tool* used to detect the values. In this version, they can only be entered manually by the operator.


### Norms and Laws
Contains references to *Regulations* and/or *legislations* applicable to the *Properties* of the *Data Sheet*.  
The list consists of the following information:   
> **Type**: is the *Norm and law type* associated with the indicated *Norm and Law*. This information is read-only.   
> **Code**: is the *Norm and Law*.   
> **Description**: is the description of the indicated *Norm and Law*. This information is read-only.   
> **Notes**: free notes.


### Customers
Contains *Customers* and *End Customers* (Contacts) interested in *Items* with similar *Properties* listed in the two respective lists. 
The list consists of the following information:   
> **Customer**: it is the company name of the *Customer*.  
> **End customer**: it is the code and description of the *End customer*. 
> **Notes**: free notes.


### Associated Items
Contains the *Items* with similar characteristics listed in the properties list.  
The list consists of the following information:   
> **Class**: is the class of the *Item*.   
> **Item code**: is the code of the *Item*.   
> **Item description**: is the description of the *Item*.   
> **Variant**: is the code of the *Item variant*.   
> **Variant description**: is the description of the *Item variant*. This information is read-only.   
> **Declaration type**: is the *Type of declaration* (of non-responsibility) that will be proposed in the *Product Details* report.   
> **Notes**: free notes.


### Item Attributes
Alternatively to the list of *Associated Items*, it is possible to enter characteristics (in [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata)) for which the *Properties* of the *Data Sheet* are valid.


### Related Sheets
In this list, you can view the *Data Sheets* duplicated with traceability from the displayed *Sheet*.   
By double-clicking the desired row, you can manage the selected *Data Sheet*.


### Revisions
In this list, you can view the history of *Revisions* prior to the displayed *Data Sheets*.   
By double-clicking the desired row, you can manage the selected *Data Sheet*.


### Linked Documents
In this list, you can enter and consult any attachments; a preview is available.


For everything not detailed in this document regarding the common functionality of forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).