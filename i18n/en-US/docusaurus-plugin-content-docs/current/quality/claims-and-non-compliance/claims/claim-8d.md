---
title: Complaints - 8D Problem Solving 
sidebar_position: 3
---

## Claimed Objects 

This is the list of *Claimed Objects* and it consists of the following information:   
> **Object**   
>> **Bar code**: can be used to add or replace the Item, Lot, Serial number, and Load unit.   
>> For all information on how to encode barcodes, refer to the page related to [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Class**: is the claimed *Item class*.   
>> **Item code**: is the code of the claimed *Item*.   
>> **Item description**: is the description of the claimed *Item*.    
>> **Variant**: is the variant code of the claimed *Item*.   
>> **Lot**: is the internal lot code of the claimed *Item*.   
>> **Serial number**: is the *Serial number* of the claimed *Item*.   
>> **Load unit**: is the *Load unit* of origin that contained the claimed *Item*.   
>> Entering a *Load unit* will automatically insert all the detail lines of the *Item* present in it.   
>> If, in the *Complaints and Non-compliance Parameters*, for the year of the document date, session *Complaints* has requested the *U.D.C. Data Grouping*, rows with the same *Items* will be reported in a single row with the quantities summed.   
>  
> **Quantity**   
>> **Unit of measure**: read-only information is the main *Unit of measure* of the claimed *Item*.   
>> **Sold**: is the quantity of *Item* sold to the sender of the *Complaint*; the value must be entered manually.
>> **Contested**: is the quantity of *Item* contested by the sender of the *Complaint*; the value must be entered manually.   
>> **Returned**: is the quantity of *Item* returned by the sender of the *Complaint*; the value must be entered manually.   
>> **Reworked**: is the quantity of *Item* reworked by the sender of the *Complaint*; the value must be entered manually.   
>> **Accepted**: is the quantity of *Item* accepted; the value must be entered manually.   
>
> **Value**   
>> **Claimed**: is the value claimed by the sender of the *Complaint*; the value must be entered manually.   
>> **Accepted**: is the accepted value; the value must be entered manually.   
>
> **Return data**   
>> **Return authorization**: indicates that the return of the *returned Item* for the *Accepted Quantity* is authorized.   
>> **Expected return date**: is the expected return date of the *returned Item*.   
>> **Batch**: is the return *batch* of the *returned Item*.   
>> **Serial number**: is the *Serial number* of the return of the *returned Item*.   
>> **Load unit**: is the *Load unit* for the return of the *returned Item*.

### Object Data 

These are the additional information to the row of the selected *Claimed Object*. The managed information includes:   
> **Project**: is the reference to the *Project* of the specific *Defect*.   
> **Item notes**: free annotations on the *Item* of the specific *Defect*.   
> **Batch notes**: free annotations on the *Batch* of the specific *Defect*.   
> **Load unit notes**: free annotations on the *Load unit* line of the specific *Defect*.   
> **Notes**: free annotations on the line of the specific *Defect*.   
> **Customer DN**: is the reference to the *Sales Invoice* (*Type*, *Year*, and *Number*), with which it is assumed the *Item* was sold.   
> **Sales invoice**: is the reference to the *Sales Invoice* (*Type*, *Year*, and *Number*), with which it is assumed the *Item* was invoiced.   
> **Goods receiption**: is the reference to the *Goods receiption* (*Type*, *Year*, and *Number*), with which the sender returns the *Item*.   
> **Purchase DN**: is the reference to the *Purchase Invoice* (*Type*, *Year*, and *Number*), with which the sender returns the *Item*.   

### Extra Data

It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for the selected *Claimed Object*.   

### Attached Documents

In this list, it is possible to insert and consult any documents attached to the selected *Claimed Object*.   

## 8D Management 

### Team

It is the group of resources that will participate in the management of the *Complaint* and consists of the following information:   
> **Business function**   
>> **Code**: is the code of the *Business Function* to involve/involved.   
>> **Description**: is the description of the *Business Function* to involve/involved.   
>   
> **Employee**   
>> **Code**: is the code of the *Employee* to involve/involved.   
>> **Surname**: is the last name of the *Employee* to involve/involved.   
>> **Name**: is the first name of the *Employee* to involve/involved.   
>   
> **Leader**: indicates that the subject to involve/involved is the *Team leader*.   
> **Subject description**: free annotation in case the subject to involve/involved is not a *Business Function* or *Employee*.   
> **Notes**: free annotations.   

### Containment Actions 

These are the immediate actions that will be taken until the implementation of the permanent corrective action.   
These will ensure that the reported problem does not recur and consists of the following information:   
> **Action Data**   
>> **Sequence**: is the *Sequence* for displaying the *Containment Action*; a progressive number is suggested with the possibility of being changed.   
>> **Containment action**: free annotation on the *Containment Action* to take.   
>> **DExpiry date**: is the date by which activities related to the *Containment Action* must be completed.   
>> **Implemented**: indicates that the *Containment Action* has been completed.   
>> **Implementation date**: is the date on which the *Containment Action* was completed.   
>
> **Business function**   
>> **Code**: is the code of the *Business Function* responsible for the action.    
>> **Description**: is the description of the *Business Function* responsible for the action.   
>   
> **Employee**   
>> **Code**: is the code of the *Employee* responsible for the action.   
>> **Surname**: is the last name of the *Employee* responsible for the action.   
>> **Name**: is the first name of the *Employee* responsible for the action.   
>   
> **Corrective action reference**   
>> **Type**, **Year**, and **Number**: are the references, read-only, to the *Corrective Action* associated with the line of the *Containment Action* and generated via the **Create corrective action** button.   
>   
> **Subject description**: free annotation in case the subject responsible for the action is not a *Business Function* or *Employee*.   
> **Notes**: free annotations.   

### Causes 

These are the potential *Causes* that could explain why the problem occurred with an assigned probability percentage.   
> **Sequence**: is the *Sequence* for displaying the *Causes*; a progressive number is suggested with the possibility of being changed.   
> **Cause** and **Cause description**: is the cause that probably generated the problem; only active *Causes* expected from the *Complaint* can be entered.   
> **Additional description**: free annotations on the *Cause*.   
> **Cause type**: is the type of cause; there are two types provided: the type that allowed the *Event* to occur and the one that allowed the *Leak* without the *Event* being detected.   
> **Weight (%)**: is the weight (expressed as a percentage) of each *Cause*. The sum of all Weights must equal 100%.   
> **Problem data**: free annotation on the subject.   
> **Notes**: free annotations.   

### Permanent Actions 

These are the permanent actions that will be taken with the understanding that they will not only solve the problem but also will not cause undesirable side effects.   
The list consists of the following information:   
> **Action Data**   
>> **Sequence**: is the *Sequence* for displaying the *Permanent Action*; a progressive number is suggested with the possibility of being changed.   
>> **Permanent action**: free annotation on the *Permanent Action* to take.   
>> **Origin cause** and **Origin cause description**: is the cause, among those specified previously in the *Causes* tab, on which the *Action* will be taken.   
>> **Expiry date**: is the date by which activities related to the *Permanent Action* must be completed.   
>> **Implemented**: indicates that the *Permanent Action* has been completed and the *Implementation date* is automatically suggested as the current date, with the possibility of being changed.   
>> **Implementation date**: is the date on which the *Permanent Action* was completed. When entering the date, the *Implemented* flag is set.   
>
> **Business function**   
>> **Code**: is the code of the *Business Function* responsible for the action.   
>> **Description**: is the description of the *Business Function* responsible for the action.   
>   
> **Employee**   
>> **Code**: is the code of the *Employee* responsible for the action.   
>> **Surname**: is the last name of the *Employee* responsible for the action.   
>> **Name**: is the first name of the *Employee* responsible for the action.   
>   
> **Corrective action reference**   
>> **Type**, **Year**, and **Number**: are the references, read-only, to the *Corrective Action* associated with the line of the *Permanent Action* and generated via the **Create corrective action** button.   
>   
> **Subject description**: free annotation in case the subject responsible for the action is not a *Business Function* or *Employee*.   
> **Notes**: free annotations.   

### Action Validation 

List, pre-filled with all the previously entered and *Implemented* *Permanent Actions*, used to check that the *Actions* are completed by the due dates and to evaluate their implementation and effectiveness. From this list, it is not possible to insert new *Actions* or delete existing ones. The list consists of the following information:   
> **Implemented Action Data**   
>> **Sequence**: is the *Sequence* for displaying the *Permanent Action*; it shows the progressive number of the *Permanent Action*. This information is read-only.   
>> **Permanent action**: *Permanent Action* performed. This information is read-only.   
>> **Origin cause** and **Origin cause description**: is the *Origin Cause* of the performed *Permanent Action*. This information is read-only.   
>
> **Validation data implemented**   
>> **Validated on**: is the date on which the *Permanent Action* was validated.   
Upon entering any other information, the current date is automatically proposed, with the possibility of being changed.   
>> **Tests carried out to validate the effectiveness of the action**: free annotation on the subject.   
>
> **Validated by Function**   
>> **Code**: is the code of the *Business Function* responsible for validation.   
>> **Description**: is the description of the *Business Function* responsible for validation.   
>   
> **Validated by Employee**   
>> **Code**: is the code of the *Employee* responsible for validation.   
>> **Surname**: is the last name of the *Employee* responsible for validation.   
>> **Name**: is the first name of the *Employee* responsible for validation.   
>   
> **Subject description**: free annotation in case the subject responsible for the *Action* is not a *Business Function* or *Employee*.   

### Phases 

These are other activities where to implement other actions. The list consists of the following information:   
> **Identified and/or implemented phases**   
>> **Sequence**: is the *Sequence* for displaying the *Phase*.   
>> **Activities to be undertaken**: free annotation of the *Activity* to be performed for the completion of the phase.   
>> **Expected implementation date**: is the expected date for the completion of the *Activity*.   
>> **Undertaken activity**: free annotation of the *Activity* performed for the completion of the phase.   
>> **Implementation date**: is the actual date of completion of the *Activity*.   
>
> **Validated by Function**   
>> **Code**: is the code of the *Business Function* responsible for validation.   
>> **Description**: is the description of the *Business Function* responsible for validation.   
>   
> **Validated by Employee**   
>> **Code**: is the code of the *Employee* responsible for validation.   
>> **Surname**: is the last name of the *Employee* responsible for validation.   
>> **Name**: is the first name of the *Employee* responsible for validation.   
>   
> **Corrective action reference**   
>> **Type**, **Year**, and **Number**: are the references, read-only, to the *Corrective Action* associated with the line of the *Activity* and generated via the **Create corrective action** button.   
>   
> **Subject description**: free annotation in case the subject responsible for the *Activity* is not a *Business Function* or *Employee*.   
> **Notes**: free annotations.