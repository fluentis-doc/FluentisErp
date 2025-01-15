---
title: Certificate of Analysis 
sidebar_position: 2
---

The management is located along the path **Quality > Item Controls > Certificates of Analysis > New Certificate of Analysis** or it can be executed from the **Search Certificates of Analysis**.   


:::important What it is for
The **Certificate of Analysis** certifies that a certain item complies with the characteristics specified by the Data Sheet or in the Customer specifications, also certifying the checks performed on the product, the compliance with the limits indicated in the Control Plans, and accompanies the sale of the product.   
Certificates can be generic or customized. If customized, it will be necessary to enter the **Customer**.   

Standard reports are available for:   
> **Certificate of Analysis**: a sheet that lists the *Products* with details of the *Tests performed*, *Values detected*, and the *Result* obtained.   
> **Declaration of Conformity**: a sheet that certifies and guarantees the conformity of the *Product*.   
:::


## Command Buttons


### ![](/img/neutral/common/save.png) Save

Pressing this button saves all the modified information of the displayed *Certificate of Analysis*.   


### ![](/img/neutral/common/import.png) Import Controls

Pressing this button searches for *Approved Item Controls* to associate with the displayed *Certificate of Analysis*.   
A management interface appears for searching and selecting the *Item Controls* to import into the *Certificate of Analysis*.   
Only *Approved Item Controls* that meet the required data filter are listed.   
Pressing the *Select* button duplicates the selected *Item Controls* and includes them in the displayed *Certificate of Analysis*.   


### ![](/img/neutral/common/update.png) Update

Pressing this button updates all the information in the displayed *Certificate of Analysis*.   



## Data Management


### Header Data of the Document
The managed information includes:   
> **Certificate Type**: it is the type of the document (mandatory data).   
> When entering a new *Certificate of Analysis*, the *Certificate Type* indicated in the expander *Certificates of Analysis* of the *General* tab in the *Item Control Parameters* is proposed.   
>
> **Year/Number/Date**: these are the *Year*, *Number*, and *Date* of the *Certificate of Analysis* (mandatory data).   
> Upon entering a new *Certificate of Analysis*:   
> - the *Date* is proposed as today’s date;   
> - the *Year* and *Number* are proposed based on the *Date* and the *Numeration* associated with the *Certificate Type*.   
>
> **Customer**: this is the legal entity of the *Customer* to whom the document will be sent.   


### Header 
The managed information includes:   
> **Responsible**: this is the *Employee* responsible for the *Certificate of Analysis*.   
> When manually entering a new *Certificate of Analysis*, the *Responsible* indicated in the expander *Certificates of Analysis* of the *General* tab in the *Item Control Parameters* is proposed.  
>
> **External Reference**: this is the *Business Function* responsible for the *Corrective Action*.   
> **Customer Note**: free annotations.   
> **Our Reference**: free annotations referring to internal documents.   
> **Your Reference**: free annotations referring to external documents from the customer.   
> **Description**: free annotations.   
>
> **Completed/In Date**: expander where the following can be entered:   
>
>> **Completed**: indicates that the *Certificate of Analysis* has been *Completed*.   
>> Upon completion, the following are automatically proposed: *In Date* (completion date) proposed as today’s date and can be changed, *Completed By* linked to the *Employee* associated with the *A.R.M. User* who logged in.  
>> **Notified/In Date**: indicates that the *Certificate of Analysis* has been *Notified* to the customer on the specified date.   
>> Upon notification, the following is automatically proposed: *In Date* (notification date) proposed as today’s date and can be changed.  
>
> **Audit Trail**: read-only expander where the following information is visible:   


#### Annotations
The managed information includes:   
> **Internal Notes**: free annotations.   
> **Printable**: indicates whether the *Internal Notes* are printable in the reports: *Certificate of Analysis* and *Declaration of Conformity*.   
> **Control Plan Notes**: free annotations regarding references to used Control Plans.   
> **Printable**: indicates whether the *Control Plan Notes* are printable in the reports: *Certificate of Analysis* and *Declaration of Conformity*.   
> **Other Notes**: free annotations.   


#### Extra Data
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each *Certificate of Analysis*.   


### Controls and Detected Values 
The managed information includes:   
> **Item**   
>> **Number**: this is the line number of the document.   
>> **Type Line**: this is the line type of the document. In the version, only the *Type Line: 1 - Coded Item* is managed.   
>> **Class**: this is the class of the *Item* of the controlled document line.   
>> **Item Code**: this is the code of the *Item* of the controlled document line.   
>> **Item Description**: this is the description of the *Item* of the controlled document line.   
>> **Loading Unit**: .   
>> **Batch**: .   
>> **Serial Number**: .   
>> **Unit of Measure**: this is the *Unit of Measure* of the *Document Quantity* of the controlled document line.   
>> **Quantity**: this is the *Document Quantity* of the controlled document line.   
>> **Alternative Unit of Measure**: this is the *Alternative Unit of Measure* of the *Document Quantity* of the controlled document line.   
>> **Alternative Quantity**: this is the *Alternative Document Quantity* of the controlled document line.   
>
> **Item Controls**   
>> **Type**: this is the code of the *Item Control Type*.   
>> **Type Description**: this is the description of the *Item Control Type*. This information is read-only.   
>> **Number**: this is the number of the *Item Control*. This information is read-only.   
>> **Date**: this is the date the *Item Control* was entered. This information is read-only.   


#### Detected Values
It contains the list of *Tests* for the *Item*.   
The information is inherited from the *Tests of the *Imported Item Controls* and can be modified using the same logic used in the management of [*Item Controls*](/docs/quality/item-control/items-control/item-control-management).
The list includes the following information:   
> **Sequence**: this is the sequence of implementation of the *Tests*.   
> **Test Type**: this is the code of the *Test*.   
> **Test Type Description**: this is the description of the *Test*. This information is read-only.   
> **Unit of Measure Detected Values**: this is the *Unit of Measure* used to express the *Typical Value*, the *Minimum and Maximum Limits* if expressed in value and not in percentage, and the *Detected Values*.   
> **Value Type**: this is the *Value Type* used to express the *Typical Value*; the possible *Value Types* are: *Numeric*, *Yes/No* or *Text*.   
> **Limit Type**: enabled if the *Value Type* is *Numeric*, this is the *Limit Type* that will drive the enabling of the *Limits* and *Tolerance* values.   
> **Typical Value**: this is the expected theoretical value of the *Test*.   
> **Minimum Limit**: minimum limit allowed compared to the *Typical Value*.   
> **L.min.(toll-)**: this is the negative tolerance limit on the minimum limit.   
> **L.min.(toll+)**: this is the positive tolerance limit on the minimum limit.   
> **Maximum Limit**: maximum limit allowed compared to the *Typical Value*.   
> **L.max.(toll-)**: this is the negative tolerance limit on the maximum limit.   
> **L.max.(toll+)**: this is the positive tolerance limit on the maximum limit.   
> **%**: indicates whether the *Minimum Limit* and the *Maximum Limit* are expressed as a percentage.   
> **Detected Value**: this is the detected value of the *Test* that will determine the *Result*.   
> Upon entering the *Detected Value*:   
> - in *Detected By* is proposed the *Employee* associated with the *A.R.M. User* who logged in;   
> - in *Detected By User* is proposed the *A.R.M. User* who logged in;   
> - in *Result* is proposed the result of the *Test* and can be modified later.   
> - in *Test Result Date* is proposed today’s date and can be modified later.   
>
> **Average Values Detected**: this is the average of the detected values in the *Multiple Value Detection* of the *Test*.   
> **Detected By**: this is the *Employee* who entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information is proposed as equal to the *Employee* associated with the *A.R.M. User* who logged in.   
> **Detected By User**: this is the *A.R.M. User* who entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information is proposed as equal to the *A.R.M. User* who logged in.   
> **Result**: this is the positive or negative result of the *Test*.   
> Upon entering the *Result*, today’s date is proposed in *Test Result Date* and can be modified later.   
> Upon entering the *Detected Value* or the *Average Values Detected*, this information is proposed based on the *Value Type*, *Limit Type*, *Typical Value*, *Limits*, and *Tolerances* entered.   
> **Printable**: indicates that the *Test* is printable.   
> **Approved**: indicates that the values and the *Result* attributed to the *Test* have been *Approved*.   
> Upon approval, the *Approval Date for Result* is automatically proposed as today’s date and can be modified; all information of the *Test* cannot be modified anymore.   


***Multiple Detected Values***   

Contains the list of measurements taken for a single *Test*.   
These are also inherited from the *Tests of the *Imported Item Controls* and can be modified using the same logic used in the management of [*Item Controls*](/docs/quality/item-control/items-control/item-control-management).
The list includes the following information:   
> **Sequence**: this is the sequence of execution of the measurement.   
> **Position**: free annotations related to the position of the measurement.   
> **Detected Value**: this is the value detected by the operator.   
> If the *Detected Value* is of type *Numeric*, the average of the *Detected Values* entered in this list for the selected *Test* will be inserted in the *Average Values Detected* column of the selected *Test*, determining its *Result*.   
> Upon entering the *Detected Value*:   
> - in *Detected By* is proposed the *Employee* associated with the *A.R.M. User* who logged in;   
> - in *Detected By User* is proposed the *A.R.M. User* who logged in;   
> - in *Detected On* the current date is proposed.   
>
> **Measuring Tool Used**: this is the reference to the *Measuring Tool* used by the operator to obtain the *Detected Value*.   
> **Detected By**: this is the *Employee* who entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information is proposed as equal to the *Employee* associated with the *A.R.M. User* who logged in.   
> **Detected By User**: this is the *A.R.M. User* who entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information is proposed as equal to the *A.R.M. User* who logged in.   
> **Detected On**: this is the date when the operator entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information is proposed as today’s date.   
> **Notes**: free annotations.   
> **Description of Measuring Tool**: this is the description of the *Measuring Tool* used.   


***Detected Values Details***   

Contains additional information associated with the selected *Test*.   
The information is inherited from the *Tests of the *Imported Item Controls* and can be modified using the same logic used in the management of [*Item Controls*](/docs/quality/item-control/items-control/item-control-management).   
The managed information includes:   
> **Internal Test**: indicates whether the *Test* is conducted internally or at an external laboratory.   
> **Sending Date**: this is the date when the necessary materials to conduct the *Test* were sent to the *External Laboratory*. This information is read-only if an *Internal Test* is indicated.   
> **External Laboratory**: this is the legal entity of the *Supplier* that will conduct the test. This information is read-only if an *Internal Test* is indicated.   
> **Test Type**: this is the code and description of the *Test*.   
> **Frequency Category**: free annotations related to the sampling frequency.   
> **Number of Detections**: this is the number of minimum values suggested for measurements.   
> **Measuring Tool Used**: this is the *Measuring Tool* used to detect the point value of the *Test*.   
> **Start Date/End Date**: these are the start and end dates of the *Test*.  
> **Test Result Date**: this is the date the *Result* is assigned.   
> Upon entering the *Result*, this information is proposed as today’s date and can be modified later.   
> **Description on Result**: free annotations on the subject.   
> **Approval Date**: this is the date when the *Approval* of the *Test* was made.   
> Upon entering the date, the *Approved* flag is automatically set.   
> **Approval Description**: free annotations on the subject.   
> **Test Notes**: free annotations on the subject.   
> **Other Notes**: free annotations.   


***Other Test Data***   

It is possible to view [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each row of *Detected Values* of the *Item/Item Controls* row.   
These are inherited from the *Attributes of Conducted Tests* associated with the *Tests* of the *Item Controls*.   


***Item Attributes***   

It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each row of *Detected Values* of the *Item/Item Controls* row.   


***Attached Documents***   

In this list, it is possible to enter and consult any attachments associated with the row of *Detected Values* of the *Item/Item Controls* row.   


#### Detail Data of Controls
The managed information includes:   
> **Control Plan Reference**: this is the reference to the *Control Plan* used for the tests and the detected values. This information is read-only.   
> **Control Description**: this is the description of the linked *Item Control*. This information is read-only.   
> **Control Notes**: free annotations on the subject.   
> **Item-Customer Notes**: free annotations on the subject.   
> **Data Sheet Reference**: this is the reference to the *Data Sheet* linked to the used *Control Plan*. This information is read-only.   
> **Source Document**: this is the reference of the *Source Document Type* on which the *Item Controls* were performed. This information is read-only.   
> **Source Document Reference**: this is the reference of the *Source Document* on which the *Item Controls* were performed. This information is read-only.   
> **Notes**: free annotations.   


#### Other Control Data
It is possible to view [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each row of *Item/Item Controls*.   
These are inherited from the *Attributes of Controls* associated with the *Item Controls*.   


#### Item Attributes
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each row of *Item/Item Controls*.   


#### Attached Documents
In this list, it is possible to enter and consult any attachments associated with the row of *Item/Item Controls*.   


For everything not detailed in this document regarding the common functionality of the forms, please refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).