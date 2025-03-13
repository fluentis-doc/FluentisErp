---
title: Contact Header (Testata Contatto)
sidebar_position: 1
---

The CRM Contact screen is composed of three parts:     
- the first part at the top presents any workflows associated with the CRM contact; workflows generally trace the customer journey that transforms the lead into a client, but anyone can create their own workflow based on the company's CRM needs; please refer to the related guide on Workflows for further details ([here](/docs/crm/home-crm/contacts/workflow-example) is an example).               
- the central part presents the Contact Header with general and demographic information, some mandatory and others not.      
- below are various tabs that report the different operations performed on the customer, which will be dealt with later in this guide. The displayed tabs will depend on those chosen for each [Contact Type](/docs/configurations/tables/crm/contacts/contact-type) in the related table.            

## Mandatory Header Data (Dati obbligatori di testata)

**Contact Type (Tipo Contatto)**: refers to the table [Contact Type](/docs/configurations/tables/crm/contacts/contact-type); used to distinguish between various CRM contacts (Contact, Prospect, Lead, etc.); the **Contact Type** also contains the tabs to display in the registry.        

**Contact Name (Nome Contatto)**: used to indicate the business name or, more generally, the name of the contact;    

## Non-mandatory Header Data (Dati non obbligatori di testata)

**VAT register number**: a field composed of the international ISO code of the country (defined in the **Nations** table itself) and the corresponding VAT number. The field is subject to a validity check for the control character for Italian VAT numbers; after entering this field, by using the toolbar button *Propose Data*, it is possible to automatically populate the demographic data.   

**VAT**: VAT code to be used in the case of issuing documents addressed to the contact. 

**Currency**: Currency to be used in the case of issuing documents addressed to the contact. 

**Office code**: IPA code of the public office recipient of the invoice or (if the Electronic Invoicing flag is active) the SDI code of the recipient of the invoice. It will be recorded in the customer registry if the contact is converted. 

**Certified mail**: space reserved for the PEC address if the PEC recipient mode is active in the Type code field for issuing electronic invoices. It will be recorded in the customer registry if the contact is converted. 

**Address Details**: in this section, the various parts that make up the address are entered.    

**Main Agent** serves as an informational title, but also for access purposes to Fluentis by the agents: they will only be able to consult the contacts for which they have permission.      

**Latitude/Longitude (Latitudine/Longitudine)**: it is possible to manage the position of contacts with latitude and longitude instead of the address; this data is considered for localization within the Map present in the [CRM Contact Search](/docs/crm/home-crm/contacts/search-contacts) if the address is not present.     

**Contact pipeline**: If the contact has an associated workflow, and the status of the workflow corresponds to one of the statuses present in the "Contact Pipeline" for the Contact Type, the "Contact Pipeline" field in the contact registry will be automatically updated. 
Therefore, with each status change of the workflow, if there is a correspondence, the "Contact Pipeline" field will be automatically updated. In this way, the workflow and the Contact Pipeline field in the contact registry will always be aligned. 

**Contact origin**: it is possible to indicate how the contact was obtained and thus its [Origin](/docs/configurations/tables/crm/contacts/contact-origin).    

**Contact quality** assigns stars to various contacts: the [quality](/docs/configurations/tables/crm/contacts/contact-quality) is expressed in a growing manner from one to five stars; this characteristic is used for various analyses and to define the quality of the contact based on a classification made by the user.     

**Phone/Email (Telefono/Email)**: contains the main phone and email of the contact, specified in the subsequent fields: Phone, Mobile Phone, Fax, Email, Secondary Email, Web Site. 

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

**Register**: in this field, Fluentis automatically indicates the nickname and the business name of the customer linked to the contact, when this is converted to a customer. Alternatively, manual association can be performed.     

**Finance Category**: serves to indicate the administrative category of the contact, which could be useful for statistical purposes.     

**Commercial category**: like the administrative category, could be useful for statistical purposes.     

**Usage Sector (Settore d’uso)**: is a field specific to the CRM and serves to indicate the [sector](/docs/configurations/tables/crm/contacts/sector-use) in which the contact operates.      

**Parent Contact**: it is possible to indicate a contact connected to the one in view, for example, if the contact is part of a holding whose parent company is already among our contacts. Or when the contact changes its business name, it is possible to keep track by linking it to the new contact.        

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