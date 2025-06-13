---
title: Non-Compliance 
sidebar_position: 2
---

The management can be found along the path **Quality > Non-Compliance > New Non-Compliance** or it can be executed from the **Search Non-Compliance**.

:::important What it is for
Non-Compliance serve to identify and document deviations from established standards or requirements, whether production or service-related.  
This process helps ensure that products, services, or processes are corrected and improved to maintain quality and safety. Additionally, it facilitates the adoption of corrective actions to prevent future issues.  
*Non-Compliance* must:   
- determine the causes of the Non-Compliance;   
- determine whether there are or can be similar Non-Compliance;   
- assess the need for actions to eliminate the causes of the Non-Compliance.    

As a standard, the following reports are available:   
> **Non-Compliance**: *Non-Compliance* record;   
> **8D Non-Compliance**: fillable form for 8D management of *Non-Compliance*.   
:::

## Command Buttons 

### ![](/img/neutral/common/save.png) Save Non-Compliance 

Pressing this button saves all modified information of the displayed *Non-Compliance*.

### ![](/img/neutral/common/new.png) New Non-Compliance 

Pressing this button saves all modified information of the displayed *Non-Compliance* and opens a new form, creating a new one.

### ![](/img/neutral/common/execute.png) Non-Compliance Valorization

Button contextual to the display of the *Header* tab.  
It is possible to create a *Debit Note* against the *Supplier* or *Customer* to whom the *Non-Compliance* is assigned.  
The button is enabled only if the *Non-Compliance* has been saved, approved, is of *Customer Non-Compliance type* or *Supplier type*, and there exists a *Value to be charged*.  
A data request/confirmation is displayed for:
> **Customer** or **Supplier**: is the recipient of the new *Debit Note* (mandatory data), with the *Customer* or *Supplier* of the originating *Non-Compliance* proposed.   
> **Invoice Type**: is the *Document Type* of the new *Debit Note* (mandatory data); the *Invoice Type* entered in the *Non-Compliance Type* of the originating *Non-Compliance* is proposed.   
> **Description**: is the description that will be used for the *Expense Item* line of the new *Debit Note* (mandatory data); the description parameterized in the [Non-Compliance Valorization Parameters](/docs/quality/claims-and-non-compliance/non-compliances/procedures/non-compliance-valorisation), section *Non-Compliance References*, is proposed.   
> **VAT**: is the *VAT Type* that will be used for the *Expense Item* line of the new *Debit Note*.   
> The *VAT Type* is proposed with the following priorities:   
> 1. if a *Declaration of intent* exists, the *VAT Type* present in the document is considered;   
> 2. if no *Declaration of intent* exists, the *VAT Type* associated with the *Supplier* of the *Non-Compliance* is considered;   
> 3. if no *Declaration of intent* exists and no *VAT Type* associated with the *Supplier* of the *Non-Compliance* has been specified, the *VAT Type* associated with the *Non-Compliance Type* is considered.   
>
> Then press the **OK** button or the **Cancel** button if you want to continue or not with the creation activity.   
> At the end of the Working, the newly created *Debit Note* will be displayed.

### ![](/img/neutral/common/corrective.png) Create Corrective Action 

Button contextual to the display of the *Defect Management* tab.  
The button is enabled only if the *Non-Compliance* has been saved, approved, and a valid *Defect* line has been selected.

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />


## Data Management 

## Document Header Information 

The managed information includes:   
> **Non-Compliance type**: it is the *Type* of the document (required data).   
> Upon the creation of a new *Non-Compliance*, the *Non-Compliance type* indicated in the *Complaints and Non-Compliances Parameters* section *Non-Compliances* is proposed.   
>
> **Year/Number/Date**: these are the *Year*, *Number*, and *Date* of the *Non-Compliance* (required data).   
> Upon the creation of a new *Non-Compliance*:   
> - the *Date* is proposed as today’s date;   
> - the *Year* and the *Number* are proposed based on the *Date* and the *Numbering* associated with the *Non-Compliance type*.   
>
> **Customer** or **Supplier**: it is the reference of the *Customer* or *Supplier* recipient of the *Non-Compliance* (required data if the *Non-Compliance type* is *To supplier* or *To customer*).   
> *Customer* or *Supplier* are enabled based on the indicated *Non-Compliance type*.   
>
> **Function/Area/Department**: it is the reference of the *Function/Area/Department* (required data if the *Non-Compliance type* is *Internal*).   
> It is enabled based on the indicated *Non-Compliance type*.   

## Header

The managed information includes:   
> **Responsible person**: this is the *Employee* responsible for the *Non-Compliance*.   
> Upon the creation of a new *Non-Compliance*, the *Responsible person* indicated in the *Complaints and Non-Compliances Parameters* section *Non-Compliances* is proposed.   
>
> **Responsible function**: it is the *Business Function* responsible for the *Non-Compliance*.   
> Upon the creation of a new *Non-Compliance*, the *Responsible function* indicated in the *Complaints and Non-Compliances Parameters* section *Non-Compliances* is proposed.   
>
> **External reference**: free notes on the contact person of the *Customer*, *Supplier*, or *Function/Area/Department* recipient of the *Non-Compliance*.   
>
> **Production site**: this is the reference of the *Production site* where the *Non-Compliance* was identified.   
>
> **Reason**: free notes on the reason for the entry of the *Non-Compliance* (required data).   
>
> **Proposed solution**: free notes on the subject.   
> Usually used to indicate a proposed solution to the recipient of the *Non-Compliance*.   
>
> **Notified/On date**: These are manual indications of whether the *Non-Compliance* has been notified and on what date to the recipient.   
>
> **Supplier/Internal response**: free notes on the subject.   
> Usually used to record any response given by the recipient of the *Non-Compliance* to the notification thereof.   
>
> **Audit Trail**: read-only expander where the following information is visible:   
>> **Creation date/Name**: it is the date and the *A.R.M. User* who entered the *Non-Compliance*.   
>> **Last modification date/Name**: it is the date and the *A.R.M. User* who made the last modification to the *Non-Compliance*.   
>
> **Approved/On date**: expander where it is possible to enter the approval information for the *Non-Compliance*:   
>> Only the **Responsible person** or **Responsible function** can approve the *Non-Compliance*.  
>> **Approved**: indicates that the *Non-Compliance* is *Approved*.   
>> At the time of approval, the following are automatically proposed: *On date*, proposed as today’s date and with the possibility of being changed, *Name* and *Person* proposed as *A.R.M. User* linked and *Employee* linked to the *A.R.M. User*.   
>> **On date**: it is the date when the *Non-Compliance* was *Approved*.   
>> At the time of entering the date, the following are automatically proposed: *Name* and *Person* proposed as *A.R.M. User* linked, *Employee* linked to the *A.R.M. User* and the *Approved* flag is set.   
>> **Name**: this is the *A.R.M. User* who approved the *Non-Compliance*. The information is read-only.   
>> **Person**: this is the *Employee* who approved the *Non-Compliance*. The information is read-only.   
>> **Function**: this is the *Business Function* that approved the *Non-Compliance*.   
>> Enabled only if the *Non-Compliance* is *Approved*.   
>
> **Closed/On date**: expander where it is possible to enter the closing information for the *Non-Compliance*:   
>> Only the **Responsible person** or **Responsible function** can close the *Non-Compliance*.  
>> **Closed**: indicates that the *Non-Compliance* is *Closed*.   
>> At the time of closing, the following are automatically proposed: *On date*, proposed as today’s date and with the possibility of being changed, *Name* and *Person* proposed as *A.R.M. User* linked and *Employee* linked to the *A.R.M. User*.   
>> **On date**: it is the date when the *Non-Compliance* was *Closed*.   
>> At the time of entering the date, the following are automatically proposed: *Name* and *Person* proposed as *A.R.M. User* linked, *Employee* linked to the *A.R.M. User* and the *Closed* flag is set.   
>> **Name**: this is the *A.R.M. User* who closed the *Non-Compliance*. The information is read-only.   
>> **Person**: this is the *Employee* who closed the *Non-Compliance*. The information is read-only.   
>> **Function**: this is the *Business Function* that closed the *Non-Compliance*.   
>> Enabled only if the *Non-Compliance* is *Closed*.   
>> **Closure notification/On date**: These are manual indications of whether the closure of the *Non-Compliance* has been notified and on what date to the recipient. 


### Document Reference 

In the tab, there are indications about the documents that gave rise to the *Non-Compliance* being managed. The information present includes:   
> **Purchase Invoice**, **Purchase Delivery Note**, **Goods Receipt**, **Subcontractor Return**, **Claim**, **Year/Order/Lot**, and **Phase/Subphase/Declaration No.**:   
> these are all read-only references to the original document that created the *Non-Compliance*.   
> In the standard, the only document that can create a *Non-Compliance* and automatically sets the reference and the *Claim*.

### Annotations 

In the tab, there are general annotations for the document and specific ones for the area. The information present includes:   
> **Commercial Notes**: free annotations on the subject reserved for the commercial area staff.   
> **Technical Notes**: free annotations on the subject reserved for the technical area staff.   
> **Administrative Notes**: free annotations on the subject reserved for the administrative area staff.   

### Extra Data 

It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) related to the *Non-Compliance*.

### Other Costs 

In the tab, it is possible to enter additional costs beyond those resulting from the Cost of contested items and from Document Management.   
> **Direct Costs**   
> A list of costs directly attributable to the cost of contested items, the service provided, and the costs of the work needed to manage the *Non-Compliance*. This list includes the information of:   
>> **Cost Element** and **Cost Element Description**: only *Cost elements* of *Cost type = Direct cost* can be selected.   
>> **Cost Type**: read-only information that reports the *Cost type* associated with the selected *Cost element*.   
>> **Application on ...**: read-only information that indicates on what cost component the *Value* is applied (if expressed as a percentage); the possible attributions are to:   
>>> *Material Cost*: the sum of the single component of the article costs of *Defective Objects* and *Materials Used*;   
>>> *Machine Cost*, *Labor Cost*, and *Working Cost*: the sum of the single component of the Working costs of *Defective Objects*;   
>>> *Industrial Cost*: the sum of the *Total Reworked Material* and *Total Non-Reworked Material*.   
>>>   
>> **Percentage / Value**: read-only information that indicates the calculation methods to be applied to the *Value* (*Percentage* or *Fixed Value*).   
>> **Value**: it is the *Percentage* that will be applied, or the *Value* that will be added, to the specified cost component in *Application on ...*.   
>> **Note**: free annotations.   
>>   
> **General Costs**   
> A list of general costs not directly attributable to the *Non-Compliance* and that support the entire business process. This list includes the information of:   
>> **Cost Element** and **Cost Element Description**: only *Cost elements* of *Cost type = General cost* can be selected.   
>> **Cost Type**: read-only information that reports the *Cost type* associated with the selected *Cost element*.   
>> **Percentage / Value**: read-only information that indicates the calculation methods to be applied to the *Value* (*Percentage* or *Fixed Value*).   
>> **Value**: it is the *Percentage* that will be applied, or the *Value* that will be added, to the sum of the *Total Reworked Material* and *Total Non-Reworked Material*.   
>> **Note**: free annotations.   
>>   
> **Other Costs**   
> A list of other costs. This list includes the information of:   
>> **Cost Element** and **Cost Element Description**: only *Cost elements* of *Cost type = Other cost* can be selected.   
>> **Cost Type**: read-only information that reports the *Cost type* associated with the selected *Cost element*.   
>> **Unit of Measure**: it is the *Unit of Measure* with which the information of the *Quantity* is to be expressed.   
>> **Quantity**: it is the *Quantity* of the *Cost element*.   
>> **Cost per unit**: it is the *Cost per unit* of the *Cost element*.   
>> **Total Cost**: read-only information that reports the product of *Quantity* and *Cost per unit*.   
>> **Note**: free annotations.   

### Values 

In the tab, it is possible to enter information related to debit and credit documents of the *Non-Compliance*, the incurred costs, those to be charged, and the costs recognized by the *Supplier/Customer*. The information present includes:   
> **Currency**, **Direct**, and **Value Date**: it is the *Currency* of the *Supplier* or *Customer* with which all values of the document are specified, the corresponding exchange rate to the *Company Currency*, and the *Value Date*.   
> **Valorized** and **Debit Document Reference**: read-only information that indicates if the *Non-Compliance* has been valued and the reference to the generated *Debit Note*.   
> **Credit Document Reference**: it is the reference to the *Credit Note* received from the *Supplier* or *Customer*.   
> **Credit Document Notes**: free annotations on the subject.   
>   
> **Total Non-Reworked Material**: read-only information if, in the *Complaints and Non-Compliance Parameters*, for the year of the document date, in the *Non-Compliance* section, the *Automatic Total Recalculation* has been requested; it proposes the sum of the single component of the article costs of *Non-Reworked Defective Objects* and of the *Materials Used*.   
>   
> **Total Reworked Material**: read-only information if, in the *Complaints and Non-Compliance Parameters*, for the year of the document date, in the *Non-Compliance* section, the *Automatic Total Recalculation* has been requested; it proposes the sum of the single component of the Working costs of the *Reworked Defective Objects*.   
>   
> **Total Direct Costs**: read-only information, it is the sum of the application of the *Values* from the list of *Direct Costs* present in the *Other Costs* tab.   
>   
> **Total General Costs**: read-only information, it is the sum of the application of the *Values* from the list of *General Costs* present in the *Other Costs* tab.   
>   
> **Total Other Costs**: read-only information, it is the sum of the application of the *Values* from the list of *Other Costs* present in the *Other Costs* tab.   
>   
> **Management Cost**: it is the *Management Cost* taken from the *Management Cost* present in the *Complaints and Non-Compliance Parameters*, for the year of the document date, in the *Non-Compliance* section; the value can be changed.   
>   
> **Total Non-Compliance (Totale non conformità)**: read-only information if, in the *Complaints and Non-Compliance Parameters*, for the year of the document date, in the *Non-Compliance* section, the *Automatic Total Recalculation* has been requested; in this case, the total is recalculated as the sum of: *Total Non-Reworked Material*, *Total Reworked Material*, *Total Direct Costs*, *Total General Costs*, *Total Other Costs*, and *Management Cost*; if the *Automatic Total Recalculation* has not been requested, the value must be manually entered.   
>   
> **Value to be charged**: it is the *Value to be charged* to the *Customer* or *Supplier*; if in the *Complaints and Non-Compliance Parameters*, for the year of the document date, in the *Non-Compliance* section, the *Automatic Total Recalculation* has been requested, the value is suggested to be equal to the *Total Non-Compliance* and can then be modified.    
>   
> **Recognized Value**: it is the value recognized by the *Customer* or *Supplier*; the value can be entered manually.  


## Defect Management 

This is the list of defects to be notified to the recipient of the document and consists of the following information:   
> **Sequence**: it is the *Sequence* for displaying defects; a progressive number is proposed with the possibility of being changed.   
>  
> **Defect detected**
>> **Code**: it is the code of the *Defect detected*; only *Active Defects* that are anticipated by the *Non-Compliance* type of the document can be entered.   
>> **Description**: read-only information is the description of the *Defect detected*.   
>> **Notes**: free annotations about the *Defect detected*.   
>  
> **Alleged cause**
>> **Code**: it is the code of the *Alleged cause* that generated the defect; only *Active Alleged causes* that are active and anticipated by the *Non-Compliance* type of the document can be entered; the *Alleged cause* may later be confirmed or denied in the *Effective cause* after an analysis of the *Defective Objects*.   
>> **Description**: read-only information is the description of the *Alleged cause*.   
>> **Notes**: free annotations about the *Alleged cause*.   
>  
> **Detecting step**
>> **Code**: it is the code of the *Detecting step* of the process where the defect was found; only *Active Detecting steps* can be entered.   
>> **Description**: read-only information is the description of the *Detecting step*.   
>> **Notes**: free annotations about the *Detecting step*.   
>  
> **Severity**
>> **Code**: it is the code of the *Severity* attributed to the defect; only *Active severities* can be entered.   
>> **Description**: read-only information is the description of the *Severity*. 
>  
> **Defective closure**   
> Only the **Responsible person** or the **Responsible function** can close the management of the specific *Defect*.   
> Closing all *Defects* does not automatically close the *Non-Compliance*.   
>> **Closed**: indicates that the management of the specific *Defect* has been completed; it must be manually indicated by the operator.   
>> At the time of closure, the following are automatically proposed: *Closure date*, proposed as today's date and with the possibility of being changed, *Name* and *Person* proposed as *A.R.M. User* linked and *Employee* linked to the *A.R.M. User* (*Name and Person are information present in the expander *Defect closure data* in the *Defect data* tab).   
>> **Closure date**: it is the date when the management of the specific *Defect* was completed.   
>> At the time of entering the date, the *Closed* flag is automatically set.   
>  
> **Reference corrective action**   
>> **Type**, **Year**, and **Number**: are the read-only references to the *Corrective action* associated with the specific *Defect* line and generated through the **Create corrective action** button.    
>   
> **Notes**: free annotations about the specific *Defect* line.   

### Defect Data 

These are additional information for the selected *Defect* line. The managed information includes:   
> **Effective cause**: it is the effective cause that generated the defect; only *Effective causes* that are active and anticipated by the document's *Non-Compliance* type can be entered.   
> **Effective cause notes**: free annotations about the *Effective cause*.   
> **Proposed solution**: it is the suggested technical/commercial/administrative solution to adopt; only *Active solutions* can be entered.   
> **Proposed solution notes**: free annotations about the *Proposed solution*.   
> **Decision taken**: it is the technical/commercial/administrative decision taken to resolve the defect; only *Active decisions* can be entered.   
> **Decision taken notes**: free annotations about the *Decision taken*.   
> **Supplier/Internal response**: free annotations on the subject. Usually used to record any response given by the recipient of the *Non-Compliance* related to the *Defect*.   
> **Defect closure data**: expander where you can enter the closure information of the *Defect*:   
> **Name**: it is the *A.R.M. User* who closed the *Defect*. This information is read-only.   
> **Person**: it is the *Employee* who closed the *Defect*. This information is read-only.   
> **Function**: it is the *Business function* that closed the *Defect*.  


### Claimed Objects 

This is the list of *Claimed Objects* associable with the selected *Defect defected* and consists of the following information:
> **Object**   
>> **Bar code**: can be used to add or replace the Item, Batch, Serial number, and Load unit.   
>> For all information on how to encode barcodes, refer to the page on the [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Class**: is the *Claimed Item Class*.   
>> **Item code**: is the code of the *Claimed Item*.   
>> **Item description**: is the description of the *Claimed Item*.   
>> **Variant**: is the variant code of the *Claimed Item*.   
>> **Batch**: is the code of the internal *Batch* of the *Claimed Item*.   
>> **Load unit**: is the *Load unit* of origin that contained the *Claimed Item*.   
>> The entry of a *Load unit* automatically includes all the detail lines of the *Item* contained within it.   
>> If, in the *Complaints and Non-Compliance Parameters*, for the year of the document date, the *Non-Compliance* session has requested *Data grouping U.D.C.*, lines with identical *Items* will be reported in a single line with quantities summed.   
>> **Serial number**: is the *Serial number* of the *Claimed Item*.   
>> **Load unit to return**: is the *Load unit* that contains the *Claimed Item* to be returned.   
>  
> **Quantity**   
>> **Unit of measure**: read-only information is the *Unit of measure* of the *Claimed Item*.   
>> **Received**: is the quantity of the *Item* received.   
>> **Contested**: is the quantity of the *Item* that is being contested.   
>> **Not reworked**: is the quantity of the contested *Item* that has not been reworked.   
>> **Reworked**: is the quantity of the contested *Item* that has been reworked.   
>> **Returned**: is the quantity of the *Item* returned.   
>  
> **Alternative Quantity**   
>> The columns in this group are displayed only if, in the *Complaints and Non-Compliance Parameters*, for the year of the document date, the *Non-Compliance* session has requested the *Alternative U.M. proposal*.   
>> **Unit of measure**: is the *Alternative unit of measure* of the *Claimed Item*.   
>> **Price unit of measure**: indicates whether the *Unit material cost* refers to the *Alternative unit of measure*.   
>> **Received**: is the quantity of the *Item* received expressed in the *Alternative unit of measure*.   
>> **Contested**: is the quantity of the *Item* being contested expressed in the *Alternative unit of measure*.   
>> **Not reworked**: is the quantity of the contested *Item* that has not been reworked expressed in the *Alternative unit of measure*.   
>> **Reworked**: is the quantity of the contested *Item* that has been reworked expressed in the *Alternative unit of measure*.   
>> **Returned**: is the quantity of the *Item* returned expressed in the *Alternative unit of measure*.   
>
> **Cost per unit**   
>> **Material**: is the *Cost per unit* of the *Item*; the value must be entered manually.   
>> **Working**: is the *Cost per unit* of the *Working*; it is proposed equal to the rate associated with the *Cost Centers* linked to *Machine* and *Labor group* of the *Work center*; the value can be modified.   
>  
> **Hours**   
>> **Worked**: are the hours and minutes worked for the repair of the non-conforming *Object*; the value must be entered manually.  

#### Object Data 

These are additional information for the line of the *Claimed Object* selected. The information managed includes:   
> **Project**: it is the reference to the *Project* of the specific *Defect*.   
> **Item notes**: free annotations about the *Item* of the specific *Defect*.   
> **Batch notes**: free annotations about the *Batch* of the specific *Defect*.   
> **Load unit notes**: free annotations about the *Load unit* line of the specific *Defect*.   
> **Notes**: free annotations about the line of the specific *Defect*.   
> **Work center**: it is the *Work center* with which the repair work of the non-compliant *Object* is performed.   
> The choice of *Work center* will propose, in the *Cost per unit of processing*, the rate to apply to the time dedicated to the processing.   
> The proposed rate is the sum of the rates of the *Cost Centers* associated with *Machine* and *Labor group* of the *Work center*.   
> **Total non-reworked material**: read-only information, it proposes the value of the product between the *Non-reworked quantity* and the *Cost per unit of material* of the selected *Defective Object*.   
> **Total reworked material**: read-only information, it proposes the value of the product between the *Reworked quantity* and the *Cost per unit of processing* plus the product between the *Worked hours* and the sum of the rates associated with the *Cost Centers* related to *Machine* and *Labor group* of the *Work center*.   
> **Total defect**: read-only information, it is the sum of *Total non-reworked material* and *Total reworked material*.   

#### Extra Data 

It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for the selected *Claimed Object*.   

#### Attached Documents 

In this list, it is possible to enter and consult any documents attached to the selected *Claimed Object*.   

### Materials Used 

In this list, it is possible to indicate the materials that were used to remedy the selected *Defect*.   
The list consists of the following information:   
>   
> **Item**   
>> **Class**: it is the *Item class*.   
>> **Code**: it is the code of the *Item*.   
>> **Description**: it is the description of the *Item*.   
>> **Variant**: it is the variant code of the *Item*.   
>> **Batch**: it is the code of the internal batch used.   
>> **Serial number**: it is the serial number used.   
>   
> **Quantity**   
>> **Unit of measure**: read-only information, it is the *Unit of measure* of the *Item*.   
>> **Consumption quantity**: it is the quantity of *Item* used to remedy the selected *Defect*.   
>   
> **Value**   
>> **Cost per unit**: it is the Cost per unit of the *Item*; the value must be entered manually.   
>> **Total cost**: it is proposed as the ratio between *Consumption quantity* and *Cost per unit*; the cost can be changed.   
>
> **Notes**: free annotations.   

### Subjects involved 

The tab contains information about the *Business Functions* and/or *Employees* who will take part in managing the selected *Defect*.   
The list consists of the following information:   
> **Sequence**: it is the *Sequence* for displaying the "Subjects involved"; a progressive number is proposed with the possibility of being changed.   
>
> **Business function**   
>> **Code**: it is the code of the involved *Business Function*.   
>> **Description**: it is the description of the involved *Business Function*.   
>   
> **Employee**   
>> **Code**: it is the code of the involved *Employee*.   
>> **Description**: it is the last name and first name of the involved *Employee*.   
>   
> **Involvement Management**   
>> **Subject description**: free annotation in case the involved subject is neither a *Business Function* nor an *Employee*.   
>> **Reason for involvement**: free annotations on the subject.   
>> **Expiry date**: it is the date by which the involved subject must complete the activities related to the reason for their involvement.   
>> **Response**: free annotations on the subject.   
>> **Closed**: indicates that the involvement of the subject has been completed.   
>> Only the *Responsible Function or Person* of the *Non-compliance* or the involved *Business Function* or *Employee* can close the involvement.   
>> Upon closure, the *Closure date* is automatically proposed, set to the current date and can be changed.   
>> **Closure date**: it is the date on which the involvement of the subject has been completed.   
>> Only the *Responsible Function or Person* of the *Non-compliance* or the involved *Business Function* or *Employee* can enter or change this date.   
>> Upon entering the date, the *Closed* flag is automatically set.   
>
> **Note**: free annotations.   

### Extra Data

It is possible to enter [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for the selected *Defect*.   

### Attached Documents

In this list, it is possible to enter and consult any documents attached to the selected *Defect*.   

For everything not detailed in this document regarding the common functioning of the forms, please refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).