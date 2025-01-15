---
title: Internal Origin Document 
sidebar_position: 2
---

The management can be found on the path **Quality > Internal Origin Documents > New Internal Origin Document** or can be executed from **Search for Internal Origin Documents**.


:::important Purpose
The management of internal origin documents allows for: cataloging, management of editions/revisions, and their distribution (both in paper and electronic format) to corporate functions interested in viewing such documents.   

Here are some examples of external origin documents that can be cataloged:   
> *Quality Manual*   
> *Management Policy*   
> *Organization Chart*   
> *Process Scheme*   
> *Operational Instructions*   
> *Service Sheet* 

The information about where the originals are stored and the possibility to attach electronic copies allows for immediate traceability and consultation with a simple mouse click.

Standard reporting is available for:   
> **Guard Page**: a sheet that, for *Document*, lists the *Revisions* made and the *Distribution List*.   
> **Internal Document**: preview of the attached document in the *Attachment* tab created in the *Document Creation* tab.   
> **Documents attached to the document**: preview of documents attached to *Document Management*.   
:::


## Command Buttons


### ![](/img/neutral/common/save.png) Save

By pressing this button, all modified information of the *Internal Origin Document* displayed is saved.


### ![](/img/neutral/common/duplicate.png) Duplicate

This button is enabled only for components of the *business functions* of *verification/approval* and *editing/issuing*. You can duplicate the displayed *Document* into a new *Document*. Simply press the **Duplicate** button.   
A request for information will be displayed:

> **Category**: this is the *Code for the internal origin document category* of the new *Document* (mandatory data).   
> **Code**: this is the *Code* for the new *Document* (mandatory data).   
> **Title**: this is the *Title* of the new *Document* (mandatory data).   

*Category* and *Title* are proposed from the origin document; the *Code* is proposed if an *Automatic Encoding* is associated with the *Category*.   
Then press the **OK** button or the **Cancel** button if you wish to proceed with the duplication activity or not.   
The new *Internal Origin Document* created will have *Edition* and *Revision* equal to *Zero* and the status of *In Creation*.   
At the end of the process, the new *Internal Origin Document* is displayed.


### Create New Revision

The button is enabled only for components of the *business functions* of *verification/approval* and *editing/issuing* if the state of the origin document is *Issued*. A request for information will be displayed:   
> **Reason for revision**: a brief description of the reason that led to the revision (mandatory data).   
> **Edit on paragraphs**: a descriptive memo referencing the number of changed paragraphs.   
> **Edit on pages**: a descriptive memo referencing the number of changed pages.   

Then press the **OK** button or the **Cancel** button if you wish to proceed with the creation activity or not.   
A new *Internal Origin Document* is created, with all the information from the original *Document* but with the *Revision* index incremented and the status of *Under Review*. The original *Document* remains in force with the status of *Issued*.   
At the end of the process, the new *Internal Origin Document* is displayed.


### Create New Edition

The button is enabled only for components of the *business functions* of *verification/approval* and *drafting/issuance* if the state of the origin document is *Issued*. A request for information will be displayed:   
> **Reason for revision**: a brief description of the reason that led to the revision (mandatory data).   
> **Edit on paragraphs**: a descriptive memo referencing the number of changed paragraphs.   
> **Edit on pages**: a descriptive memo referencing the number of changed pages.   

Then press the **OK** button or the **Cancel** button if you wish to proceed with the creation activity or not.   
A new *Internal Origin Document* is created, with all the information from the original *Document* but with the *Edition* index incremented and the status of *Under Review*. The original *Document* remains in force with the status of *Issued*.   
At the end of the process, the new *Internal Origin Document* is displayed.


### Approve

The button is enabled only for components of the *business functions* of *verification/approval* if the state of the origin document is *In Creation* or *Under Review*.   
After the confirmation request and at the end of the process, the *Internal Origin Document* will change to a status of *Approved*.


### Issue

The button is enabled only for components of the *business functions* of *editing/issuing* if the state of the origin document is *Approved*.   
After the confirmation request and at the end of the process, the *Internal Origin Document* will change to a status of *Issued* and a print preview of the *Guard Page* will be automatically displayed.


### ![](/img/neutral/common/bill.png) Distribution

This button starts the *Distribution* procedure for the *Document*.   
A filter request will be displayed to select who, among the recipients listed in the *Distribution List*, will receive a copy of the *Document*:   
> **Type:**   
>> **Paper**: distribution to those requesting a paper copy;   
>> **Electronic**: distribution to those requesting an email;   
>
> **Status:**   
>> **Already delivered**: distribution to those who have already received the document;   
>> **Still to be delivered**: distribution to those who have not yet received the document;   
>
> **Recipient:**
>> **Internal**: distribution to internal personnel only (*Business functions* and/or *Employees*);   
>> **Customers/Suppliers**: distribution to *Customers/Suppliers*.

Then press the **OK** button or the **Cancel** button if you wish to proceed with the distribution activity or not.


### Cancel Document

The button is enabled only for components of the *business functions* of *editing/issuing* if the state of the origin document is *Issued*.   
After the confirmation request and at the end of the process, the *Internal Origin Document* will change to a status of *Canceled*.


### Restore Cancellation

The button is enabled only for components of the *business functions* of *editing/issuing* if the state of the origin document is *Canceled*.   
After the confirmation request and at the end of the process, the *Internal Origin Document* will change to a status of *Issued*.


## Data Management


### Header Data

The manageable information includes:   
> **Document category**: this is the *Internal Origin Document Category* of the *Document* (mandatory data).   
> By entering the category, the *Distribution List* and the data for *Access allowed to the functions* are inherited in the *Document*.   
>
> **Code**: this is the Code of the *Document* (mandatory data).   
>
> **Edition/Revision**: these are the Edition and the Revision of the *Document*. This information is read-only.   
The information can be modified if the document is in the state of *In Creation*; otherwise, it is read-only; it can be variably changed by the system using the *Create New Revision* and *Create New Edition* buttons that increment the previous value of *Revision* and *Edition* by one unit.   
>
> **Title**: this is the *Title* of the *Document* (mandatory data).   
>
> **Document status**: this is the *Status* of the *Document* and reports the current status of the *Document*. This information is read-only.   
> The document statuses are default values set by the system identifying the various handling states of the *Internal Origin Document*.   
> The default values are:   
> - **In Creation**: set upon the creation of a new document;   
> - **Approved**: set at the time of *verification/approval* of a document in the state of *In Creation* or *Under Review*;   
> - **Issued**: set at the time of *drafting/issuance* of a document in the state of *Approved* or during the *restore cancellation* of a document in the state of *Canceled*;   
> - **Under Review**: set at the time of *creating a new edition/revision* of a document in the state of *Issued*;   
> - **Obsolete**: set, for a document in the state of *Issued*, originating from a request for *creating a new edition/revision*, at its *issuance*;   
> - **Canceled**: set at the time of *cancellation* of a document in the state of *Issued*.   
>
> **From date**: this is the date the *Document* assumed its current *Status*. This information is read-only.   
> **From user**: this is the *A.R.M. User* who modified the *Status* of the *Document*. This information is read-only.   
>
> **Revision information**: expander where you can view/insert:   
>
>> **Creation date/Created by**: these are the *Creation Date* and the *A.R.M. User* who created the document. This information is read-only.   
>> **Approval date/Approved by**: these are the *Approval Date* and the *A.R.M. User* who *Approved* the document. This information is read-only.   
>> **Issuance date/Issued by**: these are the *Issuance Date* and the *A.R.M. User* who *Issued* the document. This information is read-only.   
>>
>> **Reason for revision**: a brief description of the reason that led to the revision.   
>> This information can be modified if the *Status* is *In Creation* or *Under Review*.   
>>
>> **Edit on paragraphs**: a descriptive memo referencing the number of changed paragraphs compared to the previous *revision/edition*.   
>> This information can be modified if the *Status* is *In Creation* or *Under Review*.   
>>
>> **Edit on pages**: a descriptive memo referencing the number of changed pages compared to the previous *revision/edition*.   
>> This information can be modified if the *Status* is *In Creation* or *Under Review*.   
>>
>> **Cancellation date/Canceled by**: these are the *Cancellation Date* and the *A.R.M. User* who *Canceled* the document. This information is read-only.   
>
> **Location information**: expander where you can view/insert:   
>
>> **Archive**: this is the *Physical Warehouse* where the *Document* is usually archived (e.g., Technical Office, Management, ...).   
>> The data is inherited from the *External Origin Document Category* and is modifiable.   
>>
>> **Location**: this is the *Physical Location* where the *Document* is usually archived (e.g., Cabinet, Shelf, Drawer, ...).   
>> The data is inherited from the *External Origin Document Category* and is modifiable.   
>>
>> **Descriptive location**: this is the *Physical Location* in case of no coding for *Archive* and/or *Location*.   
>> The data is inherited from the *External Origin Document Category* and is modifiable.   
>
> **Verification/Approval Function**: this is the *Business Function* responsible for verifying/approving the document.   
>> The data is inherited from the *External Origin Document Category* and is modifiable.   
>
> **Editing/Issuing Function**: this is the *Business Function* responsible for editing/issuing the document.   
>> The data is inherited from the *External Origin Document Category* and is modifiable.   
>
> **Notes**: free annotations.


### Attachment

It is possible to attach the *Document* being cataloged by using drag & drop; a preview is displayed.   
This attachment is not included in the Fluentis Document Management.   
In the *Attachment Name* and *Attachment Type* information, the system recognizes the name of the physical file and its extension.   
If not recognized, these can be manually entered.


### Document Creation

This is a simple *word editor* used to create the *Document* directly in this management interface.   
You can set: font type, size, styles, text and background colors, and other simple text formatting options.


### Distribution List

In this list, you can associate: *Business Functions*, *Employees*, *Customers/Suppliers*, and *Contacts* who regularly receive a copy of the *Document* and indicate the usual methods of receiving the document.   
Upon creation of the *Document*, the *Distribution List* is inherited from the *Internal Origin Document Category* and the information can be modified.   
The list includes the following information:   
> **Group**   
>> **Code**: this is the code of the *A.R.M. Role* recipient.   
>> **Description**: this is the description of the *A.R.M. Role* recipient.   
>
> **User**   
>> **Code**: this is the code of the *A.R.M. User* recipient.   
>> **Description**: this is the description of the *A.R.M. User* recipient.   
>
> **Business Function**   
>> **Code**: this is the code of the *Business Function* recipient.   
>> **Description**: this is the description of the *Business Function* recipient.   
>
> **Employee**   
>> **Code**: this is the code of the *employee* recipient.   
>> **Last Name**: this is the last name of the *employee* recipient.   
>> **First Name**: this is the first name of the *employee* recipient.   
>
> **Customer/Supplier**   
>> **Description**: this is the company name of the *Customer/Supplier* recipient.   
>
> **Contact**   
>> **Code**: this is the code of the *Contact* recipient.   
>> **Description**: this is the description of the *Contact* recipient.   
>
> **Other Recipient**   
>> **Description**: this is a free description of an uncoded recipient.   
>
> **Delivery Data**   
>> **Paper**: indicates that at the time of distribution the subject wishes to receive a *Paper* copy of the document or attached via *Email*.   
>> **Delivery Method**: indicates the usual delivery method for the *Document*.   
>> **Email**: indicates a destination email if not coded in the recipient's register.   
>> **Number of copies**: indicates the number of paper copies the recipient wishes to receive.   
>> **Notes**: free annotations.   


### Access allowed to the Functions

In this list, you can enter the *Business Functions* that are granted access rights to the *Document*.   
If no rows are entered in this table, access is allowed to everybody.   
Upon creation of the *Document*, the list of *Business Functions* is inherited from the *Internal Origin Document Category* and the information can be modified.   
The list includes the following information:   
> **Function**: this is the code of the *Business Function*.   
> **Function Description**: this is the description of the *Business Function*.   
> **Notes**: free annotations.   


### Extra Data
It is possible to insert [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata-simple) for each *Internal Origin Document*.


### Previous Editions/Revisions
In this list, you can view the history of the *Previous Editions/Revisions* of the *Document* in management.   
By double-clicking on the desired line, you can view the management of the *Revision* of the selected *Document*.   
The list contains the following information:   
> **Category**: this is the *Internal Origin Document Category*.   
> **Code**: this is the Code of the *Document*.   
> **Edition**: this is the Edition of the *Document*.   
> **Revision**: this is the Revision of the *Document*.   
> **Title**: this is the *Title* of the *Document*.   
> **Status**: this is the *Status* of the *Document*.   
> **From date**: this is the date on which the *Document* assumed its current *Status*.   
> **Paragraphs Reference**: this is the reference to the number of paragraphs changed compared to the previous *revision/edition*.   
> **Pages Reference**: this is the reference to the number of pages changed compared to the previous *revision/edition*.   
> **Verification/Approval Function**: this is the *Business Function* responsible for verification/approval.   
> **Editing/Issuing Function**: this is the *Business Function* responsible for drafting/issuing.   


:::tip Document State Workflow   
![example](/img/it-it/quality/internal-origin-document/internal-origin-document-status-work-flow.png)
:::

For anything not detailed in this document regarding the common functionality of forms, please refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).