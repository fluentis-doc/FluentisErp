---
title: Setting Contact Records 
sidebar_position: 3
---

In the customer contact records, it will be necessary to set up electronic invoicing management in order to correctly register in Fluentis the Recipient Code or the PEC address of the clients receiving the B2B invoice file or, in the case of registering a Public Administration, the related Office Code.

## B2B Invoicing 

To configure contacts, access *Contacts Register*, search for and pull up the contact record for which you wish to set up electronic invoicing management, and in the *Accounting Data > Tax Information* panel, check the **Electronic invoicing** box and the related fields:     
- **Company name**: this field should remain empty
- **Description**: this field should remain empty
- **Signed Electronic invoice**: this check refers to the ability to manage signed electronic invoices FOR THE SELECTED CONTACT. The value set at the issuer company level in the Electronic Invoicing Configuration section is shown and can be varied from the general setting entered, creating an exception for the contact in management. If the check is set, at the time of issuing the electronic invoice, it will be possible to export the XML file, sign it with appropriate external supports and import it formatted in Fluentis, then proceeding with the issuance phases. This option is discretionary for invoices issued to clients residing in Italian territory, while it is MANDATORY for documents issued to non-resident, non-established, non-identified subjects in Italy for whom it is intended to send documents through the SdI.
- **Attachment in Electronic invoice**: this check refers to the possibility of sending electronic invoices with the PDF of the invoice attached. The value set at the issuer company level in the Electronic Invoicing Configuration section is shown and can be varied from the general setting entered, creating an exception for the contact in management. If the check is set, an XML file will be generated at the time of issuing the electronic invoice to which the related PDF file will be attached.
- **ARM Transformation for PDF Invoice Creation**: in this field, the reference for the ARM transformation related to the creation of the invoice PDF file can be indicated, for example, the same process that might be invoked for emailing the invoice to the client. If not indicated and if the check "Electronic Invoicing with PDF Attached" is set, the transformation indicated in the Electronic Invoicing Configuration for Companies section is used for the creation of the PDF. 
- **Code Type**: this field identifies the channel to be used for sending electronic documents; filling this field also requires the correct definition of the RECIPIENT CODE and EMAIL fields, in order to create the invoice file with the correct addressing. Based on the choice of this field, the gray area of the ELECTRONIC INVOICING section must be filled out according to specific rules. The values it can assume are:
> - **Channel ES**: the choice of this value indicates the intention to use a known recipient code or an email address as the method of sending, or to delegate the SdI to determine the channel registered by the client. Specifically, assigning this value in the records requires filling in the RECIPIENT CODE and EMAIL fields according to the rules indicated below:

| Sending Method | Recipient Code | Email | Recipient Description | Start Date | End Date |
| :-- | :-- | :-- | :-- | :-- | :--|
| Customer recipient code issued by the AdE following their accreditation | Customer recipient code | Empty | Customer's company name | Start of relationship | End of validity of the channel used |
| PEC Mail | 0000000 (7 zeros) | Customer PEC email | Customer's company name | Start of relationship | End of validity of the channel used |
| Neither recipient code nor PEC mail is known OR Private customer OR Customer under advantageous or flat-rate regime | 0000000 (7 zeros) | Empty | Customer's company name | Start of relationship | End of validity of the channel used |
| Non-resident, non-established customer, not identified in Italy | XXXXXXX (7 "X") | Empty | Customer's company name | Start of relationship | End of validity of the channel used |
      

> - **Pec Recipient**: the choice of this value indicates the intention to use PEC email as the sending channel, this setting requires filling in the RECIPIENT CODE and EMAIL according to the rules indicated below:

| Sending Method | Recipient Code | Email | Recipient Description | Start Date | End Date |
| :-- | :-- | :-- | :-- | :-- | :--|
| PEC Mail | 0000000 (7 zeros) | Customer PEC email | Customer's company name | Start of relationship | End of validity of the channel used |
      

> - **Non-resident/Established/Identified Subject in Italy**: the choice of this value identifies the SdI as a possible channel to which the invoice documents must be sent, reporting the specific code "XXXXXXX" as the recipient code, and thus the RECIPIENT CODE and EMAIL fields must be filled in as follows:

| Sending Method | Recipient Code | Email | Recipient Description | Start Date | End Date |
| :-- | :-- | :-- | :-- | :-- | :--|
| Non-resident, non-established, not identified in Italy | XXXXXXX (7 "X") | Empty | Customer's company name | Start of relationship | End of validity of the channel used | 
        

## Public Administration Invoicing 

In the case of registering a Public Administration, it is necessary to access *Contacts Register*, search for and pull up the contact record for which you wish to set up electronic invoicing management, and in the *Accounting Data > Tax Information* panel, check the **Public administration** flag. Concurrently with selecting the check, filling in the **Public administration** grid is required.
The fields of the grid must be filled out as follows:         
- **Office code**: Code of the public office receiving the invoice
- **Office name**: Description of the office code field to be filled with the name of the public office
- **Company name**: in this field, it is possible to link a record already coded in Fluentis related, for example, to the public office that depends on the main record we are using (for example: public works office of the municipality of ..., or Health Agency ....... which depends on the main record "Municipality of ...."). This linked record must be set as the destination for the main record in the “Delivery” tab, in this way the destination (for example, public works office ....) will be included in the .xml file layout complete with office code and other data such as address, etc.
For the correct management of multiple office codes (and thus multiple subjects) related to the same main record, it is recommended to also manage and fill in this field (which is not mandatory and not necessary in the case of a single office code directly linked to the record in question).
- **Starting Date**: defines the date of entry of the line or the date from which the supply relationship with the public administration in question is active.
- **Ending Date**: defines the end date of the supply relationship with the public administration and makes this position no longer usable for generating the telematic file for the electronic invoice.