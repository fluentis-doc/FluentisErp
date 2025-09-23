---
title: New contact 
sidebar_position: 1
---

The CRM Contact screen is composed of three parts:     
- the first part at the top presents any workflows associated with the CRM contact; workflows generally trace the customer journey that transforms the lead into a client, but anyone can create their own workflow based on the company's CRM needs; please refer to the related guide on Workflows for further details ([here](/docs/crm/home-crm/contacts/workflow-example) is an example).               
- the central part presents the Contact Header with general and demographic information, some mandatory and others not.      
- below are various tabs that report the different operations performed on the customer, which will be dealt with later in this guide. The displayed tabs will depend on those chosen for each [Contact Type](/docs/configurations/tables/crm/contacts/contact-type) in the related table.            

### Header Data

#### Mandatory Header Data 

**Contact Type**: refers to the table [Contact Type](/docs/configurations/tables/crm/contacts/contact-type); used to distinguish between various CRM contacts (Contact, Prospect, Lead, etc.); the **Contact Type** also contains the tabs to display in the registry.        

**Contact Name**: used to indicate the company name or, more generally, the name of the contact;    

#### Non-mandatory Header Data 

**VAT register number**: a field composed of the international ISO code of the country (defined in the **Nations** table itself) and the corresponding VAT number. The field is subject to a validity check for the control character for Italian VAT numbers; after entering this field, by using the toolbar button *Propose Data*, it is possible to automatically populate the demographic data.   

**VAT**: VAT code to be used in the case of issuing documents addressed to the contact. 

**Currency**: Currency to be used in the case of issuing documents addressed to the contact. 

**Office code**: IPA code of the public office recipient of the invoice or (if the Electronic Invoicing flag is active) the ES code of the recipient of the invoice. It will be recorded in the customer registry if the contact is converted. 

**Certified mail**: space reserved for the PEC address if the PEC recipient mode is active in the Type code field for issuing electronic invoices. It will be recorded in the customer registry if the contact is converted. 

**Address Details**: in this section, the various parts that make up the address are entered.    

**Main Agent** serves as an informational title, but also for access purposes to Fluentis by the agents: they will only be able to consult the contacts for which they have permission.      

**Latitude/Longitude**: it is possible to manage the position of contacts with latitude and longitude instead of the address; this data is considered for localization within the Map present in the [CRM Contact Search](/docs/crm/home-crm/contacts/search-contacts) if the address is not present.     

**Contact pipeline**: If the contact has an associated workflow, and the status of the workflow corresponds to one of the statuses present in the "Contact Pipeline" for the Contact Type, the "Contact Pipeline" field in the contact registry will be automatically updated. 
Therefore, with each status change of the workflow, if there is a correspondence, the "Contact Pipeline" field will be automatically updated. In this way, the workflow and the Contact Pipeline field in the contact registry will always be aligned. 

**Contact origin**: it is possible to indicate how the contact was obtained and thus its [Origin](/docs/configurations/tables/crm/contacts/contact-origin).    

**Contact quality** assigns stars to various contacts: the [quality](/docs/configurations/tables/crm/contacts/contact-quality) is expressed in a growing manner from one to five stars; this characteristic is used for various analyses and to define the quality of the contact based on a classification made by the user.     

**Phone/Email**: contains the main phone and email of the contact, specified in the subsequent fields: Phone, Mobile Phone, Fax, Email, Secondary Email, Web Site. 

**Language**: language used by the contact.

**Juridical Company Nature**: legal nature of the company, selectable from this list. 

**Statistical information**: the 3 spaces that compose it will be filled based on the values entered in the subsequent fields **Statistical Year**, **Turnover Statistics**, and **Statistical Emplpoyee Number**; modifying one of these fields will affect the related space and vice versa; usually, this combo box contains data on revenue and the number of employees for the last available year, which is very important for the preparation of the commercial offer.    

**Email Scopes** must indicate whether it is possible to send Offers and/or Newsletters for this registry; this flag is important because otherwise, it will not be possible to send any of these types of documents. 

**More informations**: contains Other Information and the Tax Code entered in the subsequent fields.     

**Person**: serves to establish whether the contact is a natural or legal person.     

**Legal status**: free entry field to define the legal status of the contact.     

**Social capital**: free entry field where the social capital of the company related to the contact can be indicated.

**Carriage**: field where the port (e.g., “Franco Fabbrica”) should be indicated, to be proposed in documents related to the contact.

**Note carriage**: field where any notes related to the port can be indicated, to be proposed in documents related to the contact.

**Register**: in this field, Fluentis automatically indicates the nickname and the company name of the customer linked to the contact, when this is converted to a customer. Alternatively, manual association can be performed.     

**Finance Category**: serves to indicate the administrative category of the contact, which could be useful for statistical purposes.     

**Commercial category**: like the administrative category, could be useful for statistical purposes.     

**Sector Use**: is a field specific to the CRM and serves to indicate the [sector](/docs/configurations/tables/crm/contacts/sector-use) in which the contact operates.      

**Parent Contact**: it is possible to indicate a contact connected to the one in view, for example, if the contact is part of a holding whose parent company is already among our contacts. Or when the contact changes its company name, it is possible to keep track by linking it to the new contact.        

**Brand**: serves to indicate any brand marketed by the company.       

**Discount**: type of discount to apply to documents addressed to the contact.

**Percent Completed**: percentage of discount to apply regarding the selected discount type. 

**Closing date**: it is possible to specify a closure date for the contact, which will no longer appear among active contacts from the specified date.          

**Closing reason**: it is possible to specify the reasons that led to the closure of the contact;

**Closing reason description**: it is possible to further detail the reason for the closure, integrating what is already present in the field **Closing reason**.

In the last part of the screen, there are also **specific tabs**.     

In the toolbar, the following buttons are present:         
**Propose data**: using this functionality, starting from the VAT number, demographic data will be pre-filled.      
**Convert To Customer**: with this button, it is possible to convert a CRM contact into a [Customer](/docs/erp-home/registers/contacts/create-new-contact/general); the data entered in the contact will be copied into the new registry; the button is active for [Contact Types](/docs/configurations/tables/crm/contacts/contact-type) that do not have the *Customer* flag enabled.

Within the contact, there are also fields used for statistical purposes, not directly shown to the user and set automatically: 

- contact creation date
- lead start date and lead end date
- customer start date and customer end date

When a contact is created, the contact creation date is assigned. When the contact type is changed to a type with the "lead" flag enabled, the date of the change to lead type will be assigned. When switching to another contact type that has the "lead" flag disabled, the lead end date will be assigned. 
The same logic will be applied in the case of changing the contact type to a type with the "customer" flag enabled.

### 1. Workflow Log 

This is the first tab of the **CRM contacts** panel. This tab appears only if a workflow has been activated for CRM Contacts that requires displaying the log tab. For technical details, please refer to the documentation on workflows.     
Using a workflow for managing Contacts allows for managing the relationship with potential clients in stages. The various stages of the workflow can include different activities aimed at winning the client, which will depend on the type of relationship reached at that particular stage: for example, in the Qualification stage, it will be important to make an introductory call, while in the Opportunity stage it may not be necessary because the client already knows us and is evaluating the purchase.       

There are two tabs: Activities and Log.

#### Activity

The available fields in the activities detail are divided into 2 boxes, **Task** and **Pending activity**. The first serves to detail the activity already performed, while the second can already define some information regarding the activity that will need to be performed subsequent to the one already entered.

In the first box, the following fields are present:

**Activity type**: you can specify the type of activity performed for the contact; the types are defined in the Activities Types table in Arm; depending on the settings entered in the workflow, the activities may change based on the stage of the workflow you are in;          

**Date**: this field is automatically filled in by the procedure when the **Activity type** field is entered; 

**User**: contains the Fluentis user who has made the entry;    

**Task description**: you can specify the details of the activity in this field.     

In the second box, the following fields are present:

**Pending activity date**: this field is automatically filled in by the procedure when the **Activity type** field is entered;

**Activity type**: you can specify the type of suspended activity for the contact; 

**Task description**: in this field, you can detail the activity that needs to be performed;

**Closing date**: you can set a due date for the activity;

**User**: the Fluentis user who will perform the activity must be defined;

**Reminder Start/End Date**: in this field, you can indicate the range of dates during which a reminder for the next activity should be displayed;        

**Create activity**: checking this box will create a new entry in the **Task** section of Fluentis for the user indicated in the **User** field. This automation will trigger at the time of saving the contact.    

#### Log 

In this tab, changes in the workflow status are displayed, indicating: the starting and ending status, the user who made the operation, and the date.

### 2. Contact References 

This is the second tab of **CRM contacts**.

To insert a new Reference, you need to click on the *New reference* button that appears when you are within this tab. To insert an already existing Reference, you will need to use the *Search* button.

In the new reference entry form, the following fields are present:

**Surname**: this is the last name of the reference.

**Name**: this is the first name of the reference.

**User**: any associated operator is reported in the reference registry.

**Role**: this field reports the role of the reference within the contact's company.

**Phone**: this is the main landline phone of the reference.

**Fax**: this is the fax number of the reference.

**Email**: this is the corporate email of the reference.

### 3. Contact Addresses 

This is the third tab of **CRM contacts**.

In this tab, it is possible to enter and view any alternative addresses in addition to the main one indicated on the contact. Each address consists of the following fields:

**Description**: free-text field.

**Phone**: the phone number related to the specified address.

**Fax**: the fax number related to the specified address.

**Email**: the email address associated with the specified address.

**Website**: the website associated with the specified address.

**Address Type**: this is the type of address being referenced, as per the [table](/docs/configurations/tables/general-settings/address-types).

**Address**: the actual address.

**P.code**: the postal code related to the address.

**City**: the city related to the address.

**Province**: the province related to the address.

**Country**: the country related to the address.

**Region**: the region related to the address.

### 4. Contact Notes 

This is the fourth tab of **CRM contacts**.

In this tab, it is possible to view the notes related to the contact. Within the tab, there are filter fields, through which you can search for notes. To enter a new note, simply press the button ![](/img/neutral/common/new.png) on the ribbon bar.

In the entry form, the following fields are present:

**Title**: this is the title of the note, which will make it easier to search for the note;

**Date**: refers to the date of entry of the note;

**Notes**: in this varchar field, it is possible to write the details of the note;

**Contact note type**: you can specify the [contact note type](/docs/configurations/tables/crm/contacts/contact-note-type) that you are entering.

### 5. Document Management 

In this tab, it is possible to view the attached documents. To attach documents, there are two ways to proceed:

- using the Document toolbar button, you can choose whether to attach a document already coded in Fluentis or to create a new Document to attach.
- directly using the right mouse button in the grid and selecting Attach file, you will create a new Document to attach.

### 6. Commercial Category

This is the sixth tab of **CRM contacts**.

In this tab, you can insert and view the commercial categories of the company. It is sufficient to select the [Commercial Category](/docs/configurations/tables/crm/contacts/commercial-category) as per the table.

### 7. Contact Zone

This is the seventh tab of **CRM contacts**.

In this tab, it is possible to enter and view the area of belonging of the company. It is sufficient to select the area.

### 8. Contact Agents 

This is the eighth tab of **CRM contacts**.

In this tab, it is possible to define the **Agents** associated with this contact.

The fillable fields are as follows:

**Account – Detail Account – Account Description**: through these fields, it is possible to select the agent, referring to the respective registry;

**Zone**: the area of competence of the agent can be defined, as specified in the table;

**Percent Completed**: this is the percentage of commission due to the agent in relation to the contact;

**Use percentage**: by checking this option, it indicates to the procedure that during the entry of sales offers, the value indicated in the **Percent Completed** field should be taken into account for calculating the commissions due to the agent.

### 9. Visit Report Contacts 

This is the ninth tab of the **CRM contacts**.

In this tab, the list of **Visit Reports** entered for the contact is displayed.

At the top of the tab, there are **Filter** fields that allow for a more precise search for the desired Visit Reports.

By double-clicking on the row of the Visit Reports, it will be opened for viewing/editing. To enter a new Visit Report for the relevant contact, simply press the button **!**, located on the ribbon bar.

### 10. Contact Offers 

This is the tenth tab of **CRM contacts**.

In this tab, the list of offers entered for the contact is displayed. At the top of the tab, there are filter fields that allow for a more precise search of the desired offers. By double-clicking on the offer's row, it will be opened for viewing/editing. It is also possible to create new offers.

### 11. Contact Extra Data 

This is the eleventh tab of the **CRM contacts**.

In this tab, it is possible to view and enter the [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) for the contact, which will then be included in the documents associated with it.

### 12. Contact Competitors

This is the twelfth tab of **CRM contacts**.

In this tab, it is possible to indicate any **Competitors** that our company has in negotiations with the contact. You can select the contact using the appropriate dropdown menu, selecting the values present in the related [table](/docs/configurations/tables/crm/contacts/competitors). In the **Note** field, additional useful information regarding the competitor can be provided.

### 13. Contact Sales Price Lists 

This is one of the tabs of **CRM contacts**.

In this tab, the valid sales price lists for the contact are displayed, which will be applied in the documents addressed to the contact. During the conversion of the contact to a customer, this data will be carried over.

### 14. Contact Sales Orders 

This is one of the tabs in the **CRM contacts**.

In this tab, the list of orders entered for the contact is displayed. The filter fields are available at the top of the tab, allowing for a more precise search of the orders. By double-clicking on the order line, it will open in view/edit mode. It is also possible to create new orders.

### 15. Contact Newsletter 

This is one of the tabs of **CRM contacts**.

In this tab, the list of newsletters entered for the contact is displayed. The filter fields at the top of the tab allow for a more precise search of the desired newsletters. By double-clicking on the row of the newsletter, it will be opened for viewing/editing.

### 16. Contact Payments 

This is one of the tabs of **CRM contacts**.

In this tab, payments to be proposed in the documents related to the contact can be configured.

#### Payment Types 

The essential section of the **Payments** tab serves to set the calculation logic for due dates. You select the **Payment Type** and the **Payment Term** (both can be found in *Configuration > Tables > General Settings*).

**Percent Completed**: allows defining the portion (in percentage) of the total payment (or collection) value to be managed with the payment condition (as a combination of payment type and payment solution) set in the line.

In the case of a percentage less than 100, multiple lines must therefore be created with percentages that total 100.

*Example*:<br />
- 50% Cash on invoice and 50% Bank transfer at 30 days.<br />
- 50% Cash on invoice; 25% Bank transfer at 30 days; 25% Bank transfer at 60 days.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Attention (Attenzione)</u>: if the payment solution includes more than one due date, it will be compiled in this way: for example, 50% cash on sight and 50% bank transfer at 30 - 60 days.

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Presentation bank**: represents the reference bank for the payments.  
- For the customer registry:
> - if the payment type is bank receipt, the customer's bank must be indicated;
> - if the payment type is bank transfer, the company's bank in use must be indicated (to have payment references printed for the customer);  

The field is filled via a combo box (**Bank**) linked to the *Supporting Bank* table. Within this table, both the banks of the company and the banks of the counterpart (customer or supplier) can be entered. Additionally, complete rows with IBAN and/or SWIFT code (recommended for the company's banks) as well as rows with only ABI and CAB codes (recommended for the counterpart's banks for which IBAN and SWIFT can be indicated in the fields of the registry grid) can be entered. 

If the row present in the Supporting Bank table is complete with IBAN and/or SWIFT, as well as ABI and CAB, recalling that row via the combo box will populate the data in the registry grid. Otherwise, only ABI and CAB will be displayed, but it will still be possible to add the missing data directly in the grid. This is advisable for counterpart banks to avoid coding too many rows in the Supporting Bank table used solely for a single customer. It is preferable to indicate only the data of the bank branch (ABI and CAB) where different customers might have their bank accounts.

Entry of a bank can also be performed by double-clicking in the abi/cab fields to open the search help among national banking agencies, from which to select the appropriate one and create the code in the registry to be completed with account details, cin, iban, swift.

**Bank description**: field connected to the previous field.

**Bank code**: field NOT used in Italy. For foreign localizations, it can accommodate an alternate banking code versus the ABI CAB system.

#### Supporting Bank 

In the grid, the supporting banks of the counterpart can be entered.

This way, it is possible to enter alternative supporting banks (still of the counterpart). Another example could be a customer who pays by bank transfer (and thus the bank of our company is entered in the Payment Type grid) but whose supporting bank is to be entered in case of payment of credit notes.

Entry of a bank can be performed by double-clicking in the abi/cab fields to open the search help among national banking agencies, from which to select the appropriate one and create the code in the registry to be completed with account details, cin, iban, swift.

### 17. Contact Opportunity 

This is one of the tabs of **CRM contacts**.

In this tab, the list of opportunities entered for the contact is displayed. At the top of the tab, there are filter fields that allow for a more precise search of the available opportunities. By double-clicking on the opportunity row, it will be opened for viewing/editing.

### 18. Contact Opening Hours 

This is one of the tabs in **CRM contacts**.

In this tab, the days and opening hours of the contact are displayed.

### 19. Contact Calls 

This is one of the tabs in **CRM contacts**.

In this tab, the list of calls made to the contact is displayed.

### 20. Contact Marketing Campaigns 

This is one of the tabs of **CRM contacts**.

In this tab, the list of marketing campaigns where the contact is present is displayed.