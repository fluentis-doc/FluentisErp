---
title: Complaints 
sidebar_position: 2
---

The management can be found at the path **Quality > Complaints > New Complaint** or it can be executed from the **Complaint Search**.

:::important What it is for
Complaints serve to register dissatisfaction regarding a service or product, allowing the company to recognize and correct any issues. They are a tool to improve quality and maintain a good relationship with customers and must:      
- determine the causes of non-compliance;   
- determine if similar anomalies exist or may occur;   
- evaluate the need for actions to eliminate the causes that generated the detected anomalies.

Standard reports available include:   
> **Complaint**: complaint sheet;   
> **8D Complaint**: sheet, in 8D format, of the complaint;   
> **Return Authorization**: sheet of the complaint used for the authorization of the return of products by the customer;   
> **Withdrawal Notification**: sheet of the complaint used for notifying the withdrawal of the complaint to the customer;   
> **List of Complaints by Customer**: list of complaints selected from the complaint search grouped by customer;   
> **List of Complaints by Type**: list of complaints selected from the complaint search grouped by complaint type.   
:::

## Command Buttons 

### ![](/img/neutral/common/save.png) Save 

Pressing this button saves all modified information of the displayed complaint.

### ![](/img/neutral/common/execute.png) Complaint Valorization

Button contextual to the display of the *Header* tab.   
It is possible to create a *Credit Note* towards the sender of the complaint.   
The button is enabled only if the complaint has been saved, approved, and there is a *Value to be credited*.   
A data request/confirmation is displayed for:   
> **Invoice Type**: it is the document type of the new credit note (mandatory data); the invoice type entered in the complaint type of the source complaint is proposed.   
> **Description**: it is the description that will be used for the expense item line of the new credit note (mandatory data); the description parameterized in the [Complaint Valorization Parameters](/docs/quality/claims-and-non-compliance/non-compliances/procedure), section *Complaint References* is proposed.   
> **VAT**: it is the VAT type that will be used for the expense item line of the new credit note; the VAT type entered in the complaint type of the source non-compliance is proposed.   
>
> Then press the **OK** button or the **Cancel** button if you wish to continue with the creation activity or not.   
> At the end of the processing, the newly created credit note is displayed.

### ![](/img/neutral/common/corrective.png) Create Corrective Action 

Button contextual to the display of the tab:   
> *Defect Management* - If the model of the complaint type is *Classic*;   
> *Containment Actions*, *Permanent Actions*, and *Phases* - If the model of the complaint type is *8D Problem Solving*.   
>
The button is enabled only if the complaint has been saved, approved, and a valid line has been selected from the contextual list.   

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />

### Create non-compliance 

Button contextual to the display of the tab:   
> *Defect Management* - If the model of the complaint type is *Classic*;   
> *Causes* - If the model of the complaint type is *8D Problem Solving*.   
The button is enabled only if the complaint has been saved, approved, and a valid line has been selected from the contextual list.   
A data request/confirmation is displayed for:   
>
> ** session to be implemented **   
>
> Then press the **OK** button or the **Cancel** button if you wish to continue with the creation activity or not.   
> At the end of the processing, the newly created non-compliance is displayed to allow for the completion of missing information.

## Data Management 

## Document Header Data 

The managed information includes:   
> **Non-compliance Type**: it is the type of document (mandatory data).   
> When entering a new non-compliance, the complaint type indicated in the *Complaint and non-compliance Parameters*, section *Complaints* is proposed.   
> Based on the model specified in the complaint type, the management of the complaint will be enabled in *Defect Management* mode or *8D - problem solving* mode.   
>
> **Year/Number/Date**: these are the year, number, and date of the complaint (mandatory data).   
> When entering a new complaint:   
> - the date is proposed as today’s date;   
> - the year and number are proposed based on the date and the numbering associated with the complaint type.   
>
> **Customer**, **Contact Customer**, or **Dealer**: these are the references of the senders (at least one of the three is mandatory data).   
> The contact customer is a non-direct customer, coded in the contacts registry, whose good or service was sold by a third party.   
> The Dealer is positioned among the information in the *Header* tab.   

## Header 

The managed information includes:   
> **Notification Method**: it is the method by which the complaint was received or notified.   
>
> **Notification Time**: it is the time (hours and minutes) of receipt of the complaint.   
>
> **Responsible Person**: it is the employee responsible for the non-compliance.   
> When entering a new non-compliance, the responsible person indicated in the *Complaint and non-compliance Parameters*, section *Non-compliance* is proposed.   
>
> **Responsible Function**: it is the business function responsible for the non-compliance.   
> When entering a new non-compliance, the responsible function indicated in the *Complaint and non-compliance Parameters*, section *Non-compliance* is proposed.   
>
> **Document References**: expander where references to documents of interest for managing the complaint can be inserted:   
>> **Invoice**: it is the reference to the sales invoice (Type, Year, and Number), with which the contested good or service is presumed to have been invoiced.   
>> **Delivery Note**: it is the reference to the sales delivery note (Type, Year, and Number), with which the contested good or service is presumed to have been sold.   
>> **Goods Receipt**: it is the reference to the goods receipt (Type, Year, and Number), with which the sender returns the contested good.   
>> **Project**: it is the reference to the project of the contested good or service.   
>> **Our Reference**: free notes on other references to internal documents.   
>> **Your Reference**: free notes on other references to documents from the sender of the complaint.   
>
> **Approved/In Date**: expander where approval information of the complaint can be entered:   
>> Only the **Responsible Person** or the **Responsible Function** can approve the complaint.  
>> **Approved**: indicates that the complaint is approved.   
>> At the time of approval, the following are automatically proposed: *In date*, proposed as today’s date with the possibility of being changed, *Name* and *Person* proposed as the connected *A.R.M. User* and the employee connected to the *A.R.M. User*.   
>> **In Date**: it is the date on which the complaint was approved.   
>> At the time of entering the date, the following are automatically proposed: *Name* and *Person* proposed as the connected *A.R.M. User*, *Employee* connected to the *A.R.M. User*, and the approved flag is set.   
>> **Name**: it is the *A.R.M. User* who approved the complaint. This information is read-only.   
>> **Person**: it is the employee who approved the complaint. This information is read-only.   
>> **Function**: it is the business function that approved the complaint.   
>> Enabled only if the complaint is approved.   
>  
> **Dealer**: information already described previously among the senders of the complaint.   
>
> **Customer Site Reference**: free notes on the subject.   
>
> **External Contact**: free notes on the contact person of the sender of the complaint.   
>
> **Audit Trail**: read-only expander where the following information is visible:   
>> **Creation Date/Name**: it is the date and the *A.R.M. User* who entered the complaint.   
>> **Last Modification Date/Name**: it is the date and the *A.R.M. User* who made the last modification to the complaint.   
>
> **Closed/In Date**: expander where closure information of the complaint can be entered:   
>> Only the **Responsible Person** or the **Responsible Function** can close the complaint.  
>> **Closed**: indicates that the complaint is closed.   
>> At the time of closure, the following are automatically proposed: *In date*, proposed as today’s date with the possibility of being changed, *Name* and *Person* proposed as the connected *A.R.M. User* and the employee connected to the *A.R.M. User*.   
>> **In Date**: it is the date on which the complaint was closed.   
>> At the time of entering the date, the following are automatically proposed: *Name* and *Person* proposed as the connected *A.R.M. User*, *Employee* connected to the *A.R.M. User*, and the closed flag is set.   
>> **Name**: it is the *A.R.M. User* who closed the complaint. This information is read-only.   
>> **Person**: it is the employee who closed the complaint. This information is read-only.   
>> **Function**: it is the business function that closed the complaint.   
>> Enabled only if the complaint is closed.   
>> **Closure Notification/In Date**: these are manual indications if the closure of the complaint has been notified and on which date to the sender of the complaint.   

### Notifications 

The tab contains indications of:   
> **Reason for Contestation**: free notes on the reason for entering the complaint (mandatory data).   
>
> **Production Site**: it is the reference of the production site where the complaint was detected or is presumed to be the origin of the complaint.   
>
> **The reason for the contestation and the defect found has been accepted**: indicates that the complaint has been accepted.   
>
> **Reason for Withdrawal**: free notes on the reason for the non-acceptability of the complaint; this information is enabled only if the complaint has not been accepted.   
>
>> **Notify/In Date**: these are the notification indications to the sender of the complaint whether it has been accepted or not and on which date.   

### Annotations 

The tab contains general annotations on the document and specific to the area. The information present includes:   
> **Commercial Notes**: free notes on the subject reserved for commercial area personnel.   
> **Technical Notes**: free notes on the subject reserved for technical area personnel.   
> **Administrative Notes**: free notes on the subject reserved for administrative area personnel.   

### Extra Data 

It is possible to enter general [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) for the complaint.

### Other Costs 

In the tab, it is possible to enter additional costs beyond those derived from the cost of the contested items and document management.   
> **Direct Costs**   
> A list of costs directly attributable to the cost of the contested items, the service provided, and the costs of processing incurred for managing the complaint. This list includes the information of:   
>> **Cost element** and **Cost Element Description**: only cost elements of *Cost Type = Direct Cost* can be selected.   
>> **Cost Type**: read-only information that reports the cost type associated with the selected Cost Element.   
>> **Application on ...**: read-only information that reports on which cost component the value is applied (if expressed as a percentage); in the case of complaint management, there is no distinction between: *Material Cost*, *Machine Cost*, *Labor Cost*, *Working Cost*, and *Industrial Cost*, all items are applied to the *Total Complaint*.      
>> **Percentage / Value**: read-only information that reports the calculation methods to be applied to the value (*Percentage* or *Fixed Value*).   
>> **Value**: it is the percentage that will be applied, or the value that will be added, to the specified cost component in *Application on ...*.   
>> **Note**: free notes.   
>>   
> **General Costs**   
> A list of general costs, not directly attributable to the complaint and that support the entire business process. This list includes the information of:   
>> **Cost Element** and **Cost Element Description**: only Cost Elements of *Cost Type = General Cost* can be selected.   
>> **Cost Type**: read-only information that reports the cost type associated with the selected Cost Element.   
>> **Percentage / Value**: read-only information that reports the calculation methods to be applied to the value (*Percentage* or *Fixed Value*).   
>> **Value**: it is the percentage that will be applied, or the value that will be added, to the total complaint.   
>> **Note**: free notes.   
>>   
> **Other Costs**   
> A list of other costs. This list includes the information of:   
>> **Cost Element** and **Cost Element Description**: only Cost Elements of *Cost Type = Other Cost* can be selected.   
>> **Cost Type**: read-only information that reports the cost type associated with the selected Cost Element.   
>> **Unit of Measure**: it is the unit of measure with which you want to express the quantity information.   
>> **Quantity**: it is the quantity of the Cost Element.   
>> **Unit Cost**: it is the unit cost of the Cost Element.   
>> **Total Cost**: read-only information that reports the product of quantity and unit cost.   
>> **Note**: free notes.   

### Values 

In the tab, it is possible to enter information related to debit and credit documents for the complaint, the costs incurred, and those to be credited to the sender of the complaint. The information present includes:   
> **Currency**, **Direct**, and **Value Date**: it is the currency of the sender of the complaint with which all values of the document are specified, the corresponding exchange rate to the company currency, and the value date.   
> **Debit Document Reference**: it is the reference to the debit note received from the customer.   
> **Debit Document Notes**: free notes on the subject.   
>   
> **Total Complaint**: read-only information if, in the *Complaint and non-compliance Parameters*, for the year of the document date, section *Complaints*, the *Automatic Total Recalculation* has been requested; it proposes the sum of the processing costs of the reworked defective items.   
>   
> **Total Direct Costs**: read-only information, it is the sum of the application of the values from the list of direct costs present in the *Other Costs* tab.   
>   
> **Total General Costs**: read-only information, it is the sum of the application of the values from the list of general costs present in the *Other Costs* tab.   
>   
> **Total Other Costs**: read-only information, it is the sum of the application of the values from the list of other costs present in the *Other Costs* tab.   
>   
> **Management Cost**: it is the management cost taken from the management cost present in the *Complaint and non-compliance Parameters*, for the year of the document date, section *Complaints*; the value can be changed.   
>   
> **Value to be Credited**: it is the value to be credited to the sender of the complaint; if in the *Complaint and non-compliance Parameters*, for the year of the document date, section *Non-compliance*, the *Automatic Total Recalculation* has been requested, the value is proposed equal to the sum of the accepted value of the defective items and can subsequently be modified.    
>
> **Valorized** and **Credit Document Reference**: read-only information that indicates whether the complaint has been valued and the reference to the generated credit note.   

The subsequent sections of the management vary based on the model specified in the complaint type: *Defect Management* or *8D - problem solving*:
> ### [Defect Management](/docs/quality/claims-and-non-compliance/claims/claim-dm.md)   
>   
> ### [8D Problem Solving](/docs/quality/claims-and-non-compliance/claims/claim-8d.md)