---
title: Control Plan 
sidebar_position: 2
---

The management can be found on the path **Quality > Item Controls > Control Plans > New Control Plan** or it can be executed from **Search Control Plans**.   


:::important What it’s for
In Control Plans, all planned tests, verifications, necessary measurements, and values to be obtained are cataloged to ensure that materials and associated products fall within the limits of the required properties.   
Through Control Plans, it is possible to predefine the checks to be carried out during the lifecycle of an item: from incoming materials checks, returns from subcontracted work, to checks during the production cycle of an item: before, during, and after the product creation.  
Control Plans, just like Data Sheets, can be customizable for Customer and/or Supplier. This document also manages revisions and traceability among desired Control Plans.   
For each planned test, it is possible to indicate: whether the test is performed internally or by third parties, the category and measurement tool to be used, the types of required values (Yes/No or Numeric), the typical value, the lower and upper limits which can be specified in percentage or absolute value, the number of measurements to be taken, and how frequently.   

Here are some examples of possible types of Control Plans: Incoming checks, Incoming checks for critical suppliers, Production checks, Final tests.   

A standard report is available for: **Control Plan**.   
:::


## Command Buttons


### ![](/img/neutral/common/save.png) Save

Pressing this button saves all modified information of the *Control Plan* displayed.   


### ![](/img/neutral/common/duplicate.png) Duplicate Control Plan

It is possible to duplicate the displayed *Control Plan* into a new *Control Plan*. Simply press the **Duplicate** button.   
A request is displayed for:
> **Control plan type**: it is the *Control plan type* of the new *Control Plan* (mandatory data).   
> The *Control plan type* of the origin *Control Plan* is proposed.   
> **Number**: it is the sequential *Number* of the new *Control Plan* (mandatory data).   
> It is proposed based on what is provided by the *Numeration* associated with the *Control plan type* and the current date.   
> **Duplicate with traceability**: indicates whether to maintain the relationship/traceability of the destination *Control Plan* in the origin *Control Plan*, particularly in the *Related Control Plans tab*.   

Then press the **OK** button or the **Cancel** button if you wish to proceed with the duplication activity or not.   
At the end of the process, the new *Control Plan* is displayed.   

### ![](/img/neutral/common/execute.png) Create new revision

To create a new *Revision* of an existing *Control Plan*, it is necessary to press the **Create new edition** button.   
A new *Control Plan* is created, with all the information from the origin *Control Plan*, but with an incremented *Revision* index and a *Start validity date* equal to the current date.   
The origin *Control Plan* ends its validity by automatically setting the *End validity date* equal to the current date.   
At the end of the process, the new *Revision* of the *Control Plan* is displayed.   



### Create new Data Sheet

From the *Control Plan*, it is possible to create a *Data Sheet*; to do so, it is necessary to press the **Create new Data Sheet** button.   
A new *Data Sheet* is created, with all the information from the origin *Control Plan* but with a *Revision* index equal to *zero* and with a *Start validity date* equal to the current date. A request will be displayed for:   
> **Sheet type**: it is the *Sheet type* of the new *Data Sheet* (mandatory data).   
> **Client**: it is the *Client* of the new *Data Sheet*, the *Client* account of the origin *Control Plan* is proposed (only if it is of *Client account type*).   
> **New code**: it is the *Code* of the new *Data Sheet* (mandatory data), proposed based on what is provided by the *Encoding Method* associated with the *Data Sheet type*.   
> **Rev.**: it is the *Revision index* of the new *Data Sheet* (mandatory data), proposed as *zero*.   
> **Create maintaining traceability**: indicates whether to maintain the relationship/traceability in the destination *Data Sheet* with the origin *Control Plan*, particularly in the *Related Sheets tab*.   

Then press the **OK** button or the **Cancel** button if you wish to proceed with the creation activity or not.   
At the end of the process, the new *Data Sheet* is displayed.   


### ![](/img/neutral/common/duplicate.png) Duplicate Test

In conjunction with the *Planned Tests* tab, the button is enabled only if, from the *Planned Tests* list, a single *Test* row has been selected.  
All the information from the origin *Planned Test* is duplicated in a new *Planned Test* appended in *Sequence* to the already existing *Planned Tests*.   


## Data Management


### Header Data

The manageable information is:   
> **Type**: it is the *Control Plan type* (mandatory data).   
> When manually inserting a new *Control Plan*, the *Control Plan type* indicated in the *Control Plans* expander of the *General* tab present in the *Item Control Parameters* is proposed.   
>
> **Year/Number**: it is the *Year* and *Number* of the *Control Plan* (mandatory data).   
> Upon entering a new *Control Plan*, the *Year* and the *Number* are proposed based on the current date and the *Numeration* associated with the *Control Plan type*.   
>
> **Rev.**: it is the Revision of the *Control Plan* (mandatory data).   
The information is editable if you are creating a new *Control Plan*, otherwise it is read-only; it can be varied in a controlled manner by the system using the *Create new revision* button, which increments the previous *Revision* value by one.   
>
> **Description**: it is the description of the *Control Plan*.   
> **For customer/supplier**: it is the corporate name of the *Customer* or *Supplier*. The *Planned Tests* are customized for the *Customer* or *Supplier* and *Associated Items*.    
> **Customer/Supplier notes**: free annotations for the customer/supplier.   
>
> **Customer specification**: expander where it is possible to enter:   
>
>> **Specific date**: it is the date of the specification received from the customer.    
>> **Reference**: free annotations about the reference to the specification received from the customer requiring specific checks to be performed for the *Associated Items*.   
>> **Expiry date**: it is the expiry date of the specification received from the customer.    
>> **Notes**: free annotations related to the specification received from the customer.   
>
> **Demand date/Required by**: only references on which date and who requested the creation of the *Control Plan*.    
>
> **Validity: Start/End**: these are the start and end validity dates of the *Control Plan*.    
> The dates are managed automatically upon creating a new *Revision* of the *Control Plan*.
>
> **Responsible**: it is the *Employee* responsible for the *Control Plan*.   
> When manually inserting a new *Control Plan*, the *Responsible* indicated in the *Control Plans* expander of the *General* tab present in the *Item Control Parameters* is proposed.   
>
> **Notes**: free annotations.   
>
> **Origin control plan**: expander where it is possible to enter:   
>
>> **Sheet origin**: contains the references of the *Data Sheet origin* (*Sheet Type*, *Code* and *Revision*).   
>> **Control plan**: contains the references of the *Origin Control Plan* (*Control plan type*, *Year*, *Number* and *Revision*).   
>> **Reason for revision**: a brief description of the reason that led to the revision.   
>> The information can be varied if the *Control Plan* is still valid.   


### Control Plan Attributes
It is possible to insert [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each *Control Plan*.   
They are inherited from the *Extra Data* associated with the *Control Plan type*.   


### Planned Tests
Contains the *Planned Tests* of the *Items* or *Item Attributes* of the *Control Plan*.  
The list consists of the following information:   
> **Sequence**: it is the implementation sequence of the *Planned Tests*.   
> **Test type**: it is the code of the *Planned Test*.   
> **Test type description**: it is the description of the *Planned Test*. The information is read-only.   
> **Description**: it is the description of the *Planned Test* that can be filled in.   
> **Standard control plan reference**: it is a descriptive field that contains references to globally recognized test codifications.   
> **Internal test**: indicates whether the *Test* is performed internally or at an external laboratory.   
> **External laboratory**: it is the corporate name of the *Supplier* that will carry out the test. The information is read-only if the *Internal Test* is indicated.   
> **Measurement tool category**: it is the *Category of the measurement tool* to be used to record the *Values* expressed in the *Test*.   
> **Measurement tool**: it is the *Measurement tool* to be used to record the *Values* expressed in the *Test*.   
> **Unit of measure**: it is the *Unit of measure* with which the *Typical value* and the *Minimum and Maximum limits* are expressed if given in value and not in percentage.   
> **Value type**: it is the *Value type* with which to express the *Typical value*; the possible *Value types* are: *Numeric*, *Yes/No*, or *Text*.   
> **Limit type**: enabled if the *Value type* is *Numeric*, it is the *Limit type* that will control the enabling of *Limits* and *Tolerance* values.   
> **Typical value**: it is the expected theoretical value of the *Planned Test*.   
> **Minimum limit**: minimum limit allowed compared to the *Typical value*.   
> **L.min.(toll-)**: it is the negative tolerance limit on the minimum limit.   
> **L.min.(toll+)**: it is the positive tolerance limit on the minimum limit.   
> **Maximum limit**: maximum limit allowed compared to the *Nominal value*.   
> **L.max.(toll-)**: it is the negative tolerance limit on the maximum limit.   
> **L.max.(toll+)**: it is the positive tolerance limit on the maximum limit.   
> **%**: indicates whether the *Minimum limit* and the *Maximum limit* are expressed in percentage.   
> **Test control type**: it is the *Control type* to be performed on the *Planned Test*.   
> **Frequency**: free annotations related to the sampling frequency.   
> **Number of detections**: it is the number of minimum suggested value measurements to perform.   
> **Start validity date**: it is the start validity date of the *Planned Test*.   
> **End validity date**: it is the end validity date of the *Planned Test*.   
> **Printed**: indicates whether the information is printed or not in the report: *Control Plan*.   
> **Notes**: free annotations.   
> **Measurement tool category description**: it is the *Description of the Measurement Tool category* to be used. The information is read-only.   
> **Measurement tool description**: it is the *Measurement Tool description* to be used. The information is read-only.   


#### Planned Test Attributes
It is possible to insert general [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for the *Planned Test*.   
They are inherited from the *Test type attributes* present in the *Test types*.   


#### Test Configuration
Contains the necessary [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for operators to prepare all necessary tools to start a given test. They can be considered necessary configurations, operational information prerequisite to the execution of the test.   
They are inherited from the *Test and Measurement Tool Configuration Parameters* present in the *Test types*.   


#### Detection and Approval Functions
It is an attribution of rights that lists who can detect and/or approve the test values.   
They are inherited from the *Detection and Approval Functions* present in the *Test types*.   
The list consists of the following information:   
> **Function**: it is the code of the *Business Function*.   
> **Function description**: it is the description of the *Business Function*.   
> **Activity type**: it is the right given to the *Business Function* during the detection and/or approval activities of a test. Possible values are:   
> - *Can detect* - the *Business Function* has only permission to detect values;   
> - *Can approve* - the *Business Function* has only permission to approve the test;   
> - *Can detect and approve* - the *Business Function* has permission to detect values and approve the test.   
>
> Other *Business Functions* not listed do not have any rights to detect values and approve the test.   
> If no *Business Functions* are specified, all operators will be able to detect values and approve the test.
>
> **Notes**: free annotations.  


#### Documents Attached
In this list, it is possible to insert and consult any attachments; a preview can be displayed.   


### Customers/Suppliers
Contains the *Customers*/*Suppliers* for whom to carry out the *Planned Tests* on the *Associated Items*.   
The list consists of the following information:   
> **Customers/Supplier**: it is the corporate name of the *Customer* or "Supplier". The *Properties* are customized for *Customers*/*Suppliers*/*Associated Items*.   
> **Specific date**: it is the date of the specification received from the customer.    
> **Specification references**: free annotations about the reference to the specification received from the customer requiring specific checks to be performed for the *Associated Items*.   
> **Specific note**: free annotations related to the specification received from the customer.   
> **Notes**: free annotations.   


### Associated Items
Contains the *Items* with similar characteristics listed in the *Planned Tests* list.  
The list consists of the following information:   
> **Class**: it is the class of the *Item*.   
> **Item code**: it is the code of the *Item*.   
> **Item description**: it is the description of the *Item*.   
> **Variant**: it is the code of the *Item variant*.   
> **Variant description**: it is the description of the *Item variant*. The information is read-only.   
> **Supplier**: it is the corporate name of the *Supplier* delivering the *Item* for which the *Planned Tests* will be activated.   
> **Notes**: free annotations.   


### Item Attributes
Alternatively to the list of *Associated Items*, it is possible to insert characteristics (in [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) format) for which the *Planned Tests* of the *Control Plan* are valid.   


### Related Sheets
In this list, it is possible to view the *Data Sheets* created with traceability from the displayed *Control Plan*.   
By double-clicking on the desired row, you can manage the selected *Data Sheet*.   


### Related Control Plans
In this list, it is possible to view the duplicated *Control Plans* with traceability from the displayed *Control Plan*.   
By double-clicking on the desired row, you can manage the selected *Control Plan*.   


### Revisions
In this list, you can view the history of *Revisions* prior to the displayed *Control Plan*.   
By double-clicking on the desired row, you can manage the selected *Control Plan*.   


### Related Documents
In this list, it is possible to insert and consult any attachments; a preview can be displayed.   


For everything not detailed in this document on the common functioning of forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).