---
title: Item Control
sidebar_position: 3
---

Management can be performed from the **Item Control Search**.


:::important Purpose
Item Controls allow for the recording of measurements taken, the values obtained, and the subsequent indication of the compliance or non-compliance of the material, semi-finished product, or controlled product.   
We list the documents from which it is possible to carry out controls on items: Goods receipts, Delivery Notes, and Purchase Invoices, Production Declarations, Production Order Phases, Returns from Subcontractors, and Load Movements.   
Controls can be specific for: Item Lot, Serial Number, or Load Unit.   
Through the M.E.S. solution, integrated into Fluentis, it is possible to enter the aforementioned required information directly and simplified.

Standard reports available:   
> **Item Control List by Item**: list of *Item Controls* grouped by: *Item*.   
> **Item Control List by Customer / Supplier**: list of *Item Controls* grouped by: *Customer/Supplier*.   
> **Item Control List by Document Type**: list of *Item Controls* grouped by: *Document Type*.   
> **Label item C and NC**: label showing the references *Item* and detail *Batch* or *Serial Number* controlled.   
:::


## Command Buttons


### ![](/img/neutral/common/save.png) Save

Pressing this button saves all modified information of the displayed *Item Controls*.

### ![](/img/neutral/common/tick.png) Search Control Plan

Pressing this button searches for the *Control Plan* to associate with the selected *Item Controls*. If, for the examined *Item Control*:
- there are *Tests* with values already recorded for those *Controls*, no search will be performed;   
- all *Tests* have not yet been recorded, the *Tests* will be replaced with those associated with the *Control Plan* found in the search.

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />


### ![](/img/neutral/common/update.png) Update

Pressing this button updates all information present in the displayed *Item Controls*.


### ![](/img/neutral/common/delete.png) Delete

Pressing this button deletes all selected rows from the main list of *Item Controls*.


### Warehouse Record

The button is enabled only if at least one *Test* has been selected from the *Tests* list that has not yet been *Registered*, with recorded values and at least *Confirmed Quantity* or *Non-Compliant Quantity* declared.   
Pressing this button performs warehouse registrations, on the current date, for the *Item* associated with the *Control* for the declared *Confirmed Quantity* and/or *Non-Compliant Quantity*, for the specified *Warehouse* and *Reasons*.


### Restore Record

The button is enabled only if at least one *Test* that has already been *Registered* has been selected from the *Tests* list.   
Pressing this button restores the warehouse registrations associated with the *Test* row.


### ![](/img/neutral/common/duplicate.png) Duplicate Test

The button is enabled only if one *Test* row has been selected from the *Tests* list.   
All the information from the source *Test* is duplicated into a new *Test* appended in *Sequence* to the already existing *Tests*.


## Data Management


### Header Data
The header data is divided into two different areas:   
- on the left, the list of *Item Controls* requested from the *Item Control Search*;   
- on the right, the references of the source document of the controls.

The list of *Item Controls*, read-only unless specified otherwise, consists of the following information:   
> **Class**: is the class of the *Item* of the controlled document row.   
> **Item code**: is the code of the *Item* of the controlled document row.   
> **Item detail**: is the type of detail to be checked for the *Item* and can take the following values: *None*, *Batch*, *Serial Number*, or *Load Unit*.   
> **Item Detail reference**: is the required item detail: *None*, *Batch code*, *Serial Number Code*, or *Load Unit Code*.   
> **Control Type**: is the code of the *Item Control Type*.   
> **Number**: is the number of the *Item Control*.   
> **Insertion date**: is the date when the *Item Control* was entered.   
> **Control plan used**: is the reference of the associated *Control Plan*.   
> This data can be changed if the search found multiple *Control Plans* to associate.   
> **Control plan description**: is the description of the *Control Plan*.   
> **Analysis date**: is the date when the analysis is performed. This data can be changed.   
> **Result**: is the overall result of the tests. It is manually assigned by the operator. This data can be changed.   
> **Result date**: is the date when the overall *Result* of the *Tests* was assigned. This data can be changed.   
> **Approved**: indicates the *Approval* of the controls performed.   
> At the time of approval, the *Approval date* is automatically proposed to be today's date and can be modified; all information of the *Tests* can no longer be changed.   
> **Approved date**: is the date when the overall *Approval* of the *Tests* was performed.   
> At the time of entering the date, the *Approved* flag is automatically set.   
> **Unit of measure**: is the *Unit of measure* of the *Document Quantity* of the controlled document row.   
> **Document quantity**: is the *Document Quantity* of the controlled document row.   
> **Item description**: is the description of the *Item* of the controlled document row.   
> **Control type description**: is the description of the *Item Control Type*.   
> **Notes**: free annotations. This data can be changed.   

The area containing the references of the source document of the controls varies depending on the *Document Type*.   
The references for each *Document Type* are:   
> **Goods Receipt**: *Supplier*, *Reception Type*, *Receipt Number*, *Reception Date*, and *Row*.   
> **Purchase Delivery Note**: *Supplier*, *Delivery Note Type*, *Document Number*, *Internal Number*, *Date*, and *Row*.   
> **Purchase Invoices**: *Supplier*, *Purchase Invoice Type*, *Document Number*, *Internal Number*, *Date*, and *Row*.   
> **Production Declarations**: *Client*, *Order Type*, *Year/Order/Batch*, *Phase/Subphase*, *Number*, and *Reporting Date*.   
> **Production Order Phases**: *Client*, *Order Type*, *Year/Order/Batch*, *Phase/Subphase*, and *Work Center*.   
> **Subcontractor Returns**: *Supplier*, *Return Type*, *Document Number*, *Date*, and *Row*.   
> **Load Movements**: *Customer/Supplier*, *Warehouse*, *Reason*, *Number*, *Date*, and *Movement Number*.   


### Tests
Contains the list of *Tests* for the *Item*.   
The list consists of the following information:   
> **Sequence**: is the sequence of the *Tests* implementation.   
> **Posted**: indicates that registrations have been made for the *Test* in the warehouse, on the current date, for the *Item* associated with the *Control* for the declared *Confirmed Quantity* and/or *Non-Compliant Quantity*, for the specified *Warehouse* and *Reasons*. This information is read-only.   
> **Test type**: is the code of the *Test*.   
> **Test type description**: is the description of the *Test*. This information is read-only.   
> **Destructive Test**: indicates whether the test is destructive. This information is read-only.   
> **Internal Test**: indicates whether the *Test* is detected internally or at an external laboratory.   
> **External Laboratory**: is the legal name of the *Supplier* that will conduct the test. This information is read-only if *Internal Test* is indicated.   
> **Sending Date**: is the date the material necessary to conduct the *Test* was sent to the *External Laboratory*. This information is read-only if *Internal Test* is indicated.   
> **Unit of measure of quantity**: is the *Unit of measure* of the *Document Quantity* of the controlled document row. This information is read-only.   
> **Document quantity**: is the *Document Quantity* of the controlled document row. This information is read-only.   
> **Measurement Tools Category**: is the *Category of the measurement tool* to be used to detect the *Values* expressed in the *Test*.   
> **Unit of measure of recorded values**: is the *Unit of measure* with which the *Typical Value*, *Minimum and Maximum Limits* are expressed if in value and not in percentage, and the *Recorded Values*.   
> **Value Type**: is the *Value Type* with which to express the *Typical Value*; the possible *Value Types* are: *Numeric*, *Yes/No*, or *Text*.   
> **Limit Type**: enabled if the *Value Type* is *Numeric*, this is the *Limit Type* that will control the enabling of *Limits* and the values of *Tolerances*.   
> **Typical Value**: is the theoretical expected value of the *Test*.   
> **Minimum Limit**: is the minimum limit allowed compared to the *Typical Value*.   
> **L.min.(toll-)**: is the negative tolerance limit on the minimum limit.   
> **L.min.(toll+)**: is the positive tolerance limit on the minimum limit.   
> **Maximum Limit**: is the maximum limit allowed compared to the *Typical Value*.   
> **L.max.(toll-)**: is the negative tolerance limit on the maximum limit.   
> **L.max.(toll+)**: is the positive tolerance limit on the maximum limit.   
> **%**: indicates whether the *Minimum Limit* and *Maximum Limit* are expressed as a percentage.   
> **Test Control Type**: is the *Control Type* to be carried out on the *Test*.   
> **Frequency**: free annotations related to sampling frequency.   
> **Number of recordings**: is the number of minimum suggested value recordings to be made.   
>
> **Start Date**: is the start date of the *Test*.  
> **End Date**: is the end date of the *Test*.  
> **Detected Value**: is the detected point value of the *Test* that will determine the *Result*.   
> Upon entering the *Detected Value*:   
> - in *Detected by*, the *Employee* associated with the *A.R.M. User* who logged in will be proposed;   
> - in *Detected by user*, the *A.R.M. User* who logged in will be proposed;   
> - in *Result*, the result of the *Test* will be proposed and can be modified later.   
> - in *Test result date*, the current date will be proposed and can be modified later.   
>
> **Average values detected**: is the average of the detected values in the *Measurement Values* of the *Test*.   
> **Measurement Tool**: is the *Measurement Tool* used to detect the point value of the *Test*.   
> **Detected by**: is the *Employee* who entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information will be proposed to be equal to the *Employee* associated with the *A.R.M. User* who logged in.   
> **Detected by user**: is the *A.R.M. User* who entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information will be proposed to be equal to the *A.R.M. User* who logged in.   
> **Detected Value Manually**: indicates whether the *Detected Value* was entered manually. This information is read-only.   
> **Result**: is the positive or negative result of the *Test*.   
> Upon entering the *Result*, the *Test Result Date* will propose today’s date and can be modified later.   
> Upon entering the *Detected Value* or *Average of detected values*, this information will be proposed based on the *Value Type*, *Limit Type*, *Typical Value*, *Limits*, and *Tolerances* entered.   
> **Test Result Date**: is the date when the *Result* is assigned.   
> Upon entering the *Result*, this information will be proposed to be equal to today’s date and can be modified later.   
> **Description of the result**: free annotations on the subject.   
> **Manual outcome attrib.**: indicates whether the *Result* was entered manually. This information is read-only.   
>
> **Confirmed Quantity**:    
> **Non-Compliant Quantity**: .   
> **Warehouse**: is the *Warehouse* from which the *Controlled Items* are taken.   
> **Template for unload compliant items**: is the *Unload Template* used to move the *Controlled Items* that are found to be *Compliant*.   
> **Template for unload non-compliant items**: is the *Unload Template* used to move the *Controlled items* that are found to be *Non-Compliant*.   
> **Location**: is the *Location* from which the *Controlled Items* are taken.   
>
> **Printable**: indicates that the *Test* is printable.   
> **Approved**: indicates that the values and the *Result* assigned to the *Test* have been *Approved*.   
> At the time of the approval, the *Result Approval Date* is automatically proposed to be today’s date and can be modified; all information of the *Test* can no longer be changed.   
> **Result Approval Date**: is the date when the *Approval* of the *Test* was carried out.   
> At the time of entering the date, the *Approved* flag is automatically set.   
> **User**: is the *A.R.M. User* who *Approved* the *Test*. This information is read-only.   
> **Approval Description**: free annotations on the subject.   
> **Notes**: free annotations.   
>
> **Measurement Tool Category Description**: is the description of the *Measurement Tool Category* to be used. This information is read-only.   
> **Measurement Tool Description**: is the description of the *Measurement Tool* used. This information is read-only.   
> **Warehouse Description**: is the description of the *Warehouse* from which the *Controlled Items* are taken. This information is read-only.   
> **Template description for unload compliant items**: is the description of the *Unload Template* used to move the *Controlled Items* that are found to be *Compliant*. This information is read-only.   
> **Template description for unload non-compliant items**: is the description of the *Unload Template* used to move the *Controlled Items* that are found to be *Non-Compliant*. This information is read-only.   

The information of: *Test Type*, *Internal Test*, *External Laboratory*, *Measurement Tool Category*, *Unit of Measure for Detected Values*, *Value Type*, *Limit Type*, *Typical Value*, *Limits ...*, *Tolerances ...*, *%*, *Test Control Type*, *Frequency*, and *Number of Detections* is read-only if the *Test* comes from the *Control Plan*; otherwise, they can be modifiable to allow adding additional *Tests* not foreseen in the *Control Plan*.


#### Measurement Values 
Contains the list of detections made for a single *Test*.   
The list consists of the following information:   
> **Sequence**: is the sequence of the detection implementation.   
> **Position**: free annotations related to the position of the detection.   
> **Detected Value**: is the value detected by the user.   
> If the *Detected Value* is of *Numeric* type, the average of the *Detected Values* entered in this list for the selected *Test* will be inserted in the *Average of Detected Values* column of the selected *Test*, which will determine the *Result*.   
> Upon entering the *Detected Value*:   
> - in *Detected by*, the *Employee* associated with the *A.R.M. User* who logged in will be proposed;   
> - in *Detected by user*, the *A.R.M. User* who logged in will be proposed;   
> - in *Detected on*, the current date will be proposed.   
>
> **Measurement Tool Used**: is the reference to the *Measurement Tool* used by the user to acquire the *Detected Value*.   
> **Detected by**: is the *Employee* who entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information will be proposed to be equal to the *Employee* associated with the *A.R.M. User* who logged in.   
> **Detected by user**: is the *A.R.M. User* who entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information will be proposed to be equal to the *A.R.M. User* who logged in.   
> **Detected on**: is the date when the operator entered the *Detected Value*.   
> Upon entering the *Detected Value*, this information will be proposed to be equal to the current date.   
> **Notes**: free annotations.   
> **Measurement Tool Description**: is the description of the *Measurement Tool* used.   


#### Test Attribute
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for the single *Test*.


#### Test Configuration
Contains the [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) necessary for users to prepare all the necessary tools to start a specific test. These can be considered necessary configurations, operational information prerequisite to the execution of the test.   
They are inherited from the *Planned Test Configurations* present in the *Planned Tests* of the *Control Plan* or from the *Testing and Measurement Tool Configuration Parameters* present in the *Test Types*.


#### Attached Documents
In this list, it is possible to insert and consult any attachments; it is possible to view the preview.


### Attributes Controls
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for each *Control*.   
They are inherited from the *Extra Data* associated with the *Items Control Type*.


### Item Attributes
It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for the *Controlled Item*.   
They are inherited from the *Extra Data* associated with the *Item*.


### Linked Documents
In this list, it is possible to insert and consult any attachments; it is possible to view the preview.