---
title: Complaints - Defect Management 
sidebar_position: 4
---

## Defect Management 

This is the list of defects identified by the sender of the document and consists of the following information:   
> **Sequence**: it is the *Sequence* for displaying defects; a progressive number is proposed with the possibility of being changed.   
>  
> **Defect detected**
>> **Code**: it is the code of the *Defect detected*; only *Active Defects* that are anticipated by the type of *Complaint* of the document can be entered.   
>> **Description**: read-only information is the description of the *Defect detected*.   
>> **Notes**: free annotations on the *Defect detected*.   
>  
> **Alleged cause**
>> **Code**: it is the code of the *Alleged cause* that generated the defect; only *Active Causes* that are anticipated by the type of *Complaint* of the document can be entered; the *Alleged cause*, after an analysis of the *Defective Items*, can be confirmed or not in the *Effective Cause*.   
>> **Description**: read-only information is the description of the *Alleged cause*.   
>> **Notes**: free annotations on the *Alleged cause*.   
>  
> **Detecting step**
>> **Code**: it is the code of the *Detecting step* of the process where the defect was identified; only *Active Detecting steps* can be entered.   
>> **Description**: read-only information is the description of the *Detecting step*.   
>> **Notes**: free annotations on the *Detecting step*.   
>  
> **Quantity**
> Summary information to be used exclusively if you do not wish to detail the *Quantities* in the *Claimed Objects* session. These *Quantities* are not considered in any calculation.   
>> **Sold**: it is the quantity of *Items* sold to the sender of the *Complaint*.   
>> **Contested**: it is the quantity of *Items* contested by the sender of the *Complaint*.   
>> **Returned**: it is the quantity of *Items* returned by the sender of the *Complaint*.   
>   
> **Corrective action reference**   
>> **Type**, **Year**, and **Number**: these are the references, in read-only mode, to the *Corrective Action* associated with the line of the *Defect* and generated via the **Create Corrective Action** button.   
>   
> **On warrant**: manual indication if the *Defect detected* is covered by warranty. This information is not considered in any calculation.   
> **Closed**: indicates that the management of the *Defect* has been completed; it must be manually indicated by the operator.   
> Upon closure, the following are automatically proposed: *Closed date*, proposed to the current date and with the possibility of being changed, *Name* and *Person* proposed as the connected *A.R.M. User* and the *Employee* connected to the *A.R.M. User* (*Closed date*, *Name*, and *Person* are information present in the *Defective Data* tab).   
> The closure of all *Defects* does not automatically result in the closure of the *Complaint*.   
> **Notes**: free annotations.   

### Defective Data 

These are the additional information for the selected *Defect* line. The managed information includes:   
> **Severity**: it is the *Severity* attributed to the defect; only *Active Severities* can be entered.   
> **Effective Cause**: it is the Effective Cause that generated the defect; only *Effective Causes* that are active and anticipated by the type of *Complaint* of the document can be entered.   
> **Effective Cause Notes**: free annotations on the *Effective Cause*.   
> **Proposed Solution**: it is the suggestion for a technical/commercial/finance solution to adopt; only *Active Solutions* can be entered.   
> **Proposed Solution Notes**: free annotations on the *Proposed Solution*.   
> **Decision Taken**: it is the technical/commercial/finance decision made for the resolution of the defect; only *Active Decisions* can be entered.   
> **Decision Taken Notes**: free annotations on the *Decision Taken*.   
> **Commercial Resolution**: it is the commercial/finance decision made for the resolution of the defect; only *Active Decisions* can be entered.   
> **Commercial Resolution Notes**: free annotations on the *Commercial Resolution*.   
> **Closed date**: it is the date when the management of the specific *Defect* has been completed.   
> Upon entering the date, the *Closed* flag present in the line of the selected *Defect* is automatically set.   
> **Name**: it is the *A.R.M. User* who closed the *Defect*. This information is read-only.   
> **Person**: it is the *Employee* who closed the *Defect*. This information is read-only.   
> **Function**: it is the *Business Function* that closed the *Defect*.   

### Claimed Objects 

This is the list of *Claimed Objects* associated with the selected *Defect detected* and consists of the following information:   
> **Object**   
>> **Bar code**: can be used to add or replace the Item, batch, Serial Number, and Load Unit.   
>> For all information on how to encode barcodes, consult the page related to the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Class**: it is the *Claimed Object Class (Classe articolo)*.   
>> **Item Code**: it is the code of the *Claimed Object*.   
>> **Item Description**: it is the description of the *Claimed Object*.   
>> **Variant**: it is the variant code of the *Claimed Object*.   
>> **Batch**: it is the internal batch code of the *Claimed Object*.   
>> **Load Unit**: it is the original *Load Unit* that contained the *Claimed Object*.   
>> The entry of a *Load Unit* automatically includes all detail lines of *Items* present in it.   
>> If, in the *Complaints and Non-Compliance Parameters*, for the year of the document date, the *Complaints* session has requested *Data U.D.C. Grouping*, lines with identical *Items* will be reported in a single line with the quantities summed.   
>> **Serial Number**: it is the *Serial Number* of the *Claimed Object*.   
>  
> **Quantity**   
>> **Unit of Measure**: read-only information is the main *Unit of Measure* of the *Claimed Object*.   
>> **Sold**: it is the quantity of *Item* sold to the sender of the *Complaint*; the value must be entered manually.   
>> **Contested**: it is the quantity of *Item* contested by the sender of the *Complaint*; the value must be entered manually.   
>> **Returned**: it is the quantity of *Item* returned by the sender of the *Complaint*; the value must be entered manually.   
>> **Reworked**: it is the quantity of *Item* reworked by the sender of the *Complaint*; the value must be entered manually.   
>> **Accepted**: it is the quantity of *Item* accepted; the value must be entered manually.   
>
> **Value**   
>> **Claimed**: it is the value claimed by the sender of the *Complaint*; the value must be entered manually.   
>> **Accepted**: it is the accepted value; the value must be entered manually.   
>
> **Return Data**   
>> **Return Authorization**: indicates that the return of the *Item* is authorized for the *Accepted Quantity*.   
>> **Expected Return Date**: it is the expected return date of the *Returned Item*.   
>> **Batch**: it is the return *batch* of the *Returned Item*.   
>> **Serial Number**: it is the return *Serial Number* of the *Returned Item*.   
>> **Load Unit**: it is the return *Load Unit* of the *Returned Item*.   

#### Object Data 

These are the additional information for the selected *Claimed Object* line. The managed information includes:   
> **Project**: it is the reference to the *Project* of the specific *Defect*.   
> **Item Notes**: free annotations on the *Item* of the specific *Defect*.   
> **Batch Notes**: free annotations on the *batch* of the specific *Defect*.   
> **Load Unit Notes**: free annotations on the *Load Unit* line of the specific *Defect*.   
> **Notes**: free annotations on the line of the specific *Defect*.   

> **Customer DN**: it is the reference to the *Sales Invoice* (*Type*, *Year*, and *Number*), with which it is presumed that the contested good or service was sold.   
> **Sales Invoice**: it is the reference to the *Sales Invoice* (*Type*, *Year*, and *Number*), with which it is presumed that the contested good or service was invoiced.   
> **Goods Receipt**: it is the reference to the *Goods Receipt* (*Type*, *Year*, and *Number*), with which the sender returns the contested good.   
> **Purchase DN**: it is the reference to the *Sales Invoice* (*Type*, *Year*, and *Number*), with which it is presumed that the contested good or service was sold.   

#### Extra Data 

It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for the selected *Claimed Object*.   

### Attached Documents 

In this list, it is possible to insert and consult any documents attached to the selected *Claimed Object*.   

### Materials Used 

In this list, it is possible to indicate the materials that have been used to remedy the selected *Defect*.   
The list consists of the following information:   
>   
> **Item**   
>> **Class**: it is the *Item Class*.   
>> **Code**: it is the code of the *Item*.   
>> **Description**: it is the description of the *Item*.   
>> **Variant**: it is the variant code of the *Item*.   
>> **Batch**: it is the internal batch code used.   
>> **Serial Number**: it is the serial number used.   
>   
> **Quantity**   
>> **Unit of Measure**: read-only information is the *Unit of Measure* of the *Item*.   
>> **Consumption quantity**: it is the quantity of *Item* used to remedy the selected *Defect*.   
>   
> **Value**   
>> **Unit Cost**: it is the unit cost of the *Item*; the value must be entered manually.   
>> **Total Cost**: it is proposed as the ratio between *Consumption quantity* and *Unit Cost*; the cost can be changed.   
>
> **Notes**: free annotations.   

### Subjects involved 

In the tab, there are indications about the *Business Functions* and/or *Employees* who will participate in the management of the selected *Defect*.   
The list consists of the following information:   
> **Sequence**: it is the *Sequence* for displaying the "Subjects involved"; a progressive number is proposed with the possibility of being changed.   
>
> **Business Function**   
>> **Code**: it is the code of the *Business Function* involved.   
>> **Description**: it is the description of the *Business Function* involved.   
>   
> **Employee**   
>> **Code**: it is the code of the *Employee* involved.   
>> **Description**: it is the surname and name of the *Employee* involved.   
>   
> **Involvement Management**   
>> **Subject Description**: free annotation in case the involved subject is not a *Business Function* or *Employee*.   
>> **Reason for Involvement**: free annotations on the subject.   
>> **Expiry date**: it is the date by which the involved subject must complete the activities related to the reason for their involvement.   
>> **Response**: free annotations on the subject.   
>> **Closed**: indicates that the involvement of the subject has been completed.   
>> Only the *Responsible Function or Person* of the *Complaint* or the *Business Function* or the *Employee* involved can close the involvement.   
>> Upon closure, the *Closed date* is automatically proposed, set to the current date, and can be changed.   
>> **Closed date **: it is the date when the involvement of the subject has been completed.   
>> Only the *Responsible Function or Person* of the *Complaint* or the *Business Function* or the *Employee* involved can enter or change this date.   
>> Upon entering the date, the *Closed* flag is automatically set.   
>
> **Note**: free annotations.   

### Extra Data 

It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for the selected *Defect*.   

### Attached Documents 

In this list, it is possible to insert and consult any documents attached to the selected *Defect*.   

For everything not detailed in this document regarding the common functioning of the forms, please refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).