---
title: Management Table Settings 
sidebar_position: 4
---

For the management of electronic invoicing, it is necessary to verify and complete some management tables in order to create XML files with the correct encoding as required by the technical specifications issued by the Revenue Agency. The required setup involves encoding the values normally used in management with those provided for file encoding. 

For example: the types of documents provided for the electronic invoicing flow must be recorded in Fluentis by matching each document type with the corresponding value indicated by the technical specifications of the Revenue Agency.

## Document Type Table 

For the invoice document, in this Fluentis table, in correspondence with the **PA Code** column, it is necessary to indicate the document type in alphanumeric format, with a length of 4 characters. The allowed values are:       
TD01 Invoice  
TD02 Deposit/Advance on invoice      
TD03 Deposit/Advance on fee       
TD04 Credit Note     
TD05 Debit Note   
TD06 Fee      
TD20 Self-invoicing        
         
The values on which a connection or verification of the actual compilation is necessary are:

| Table | Mandatory Values | 
| :-- | :-- |
| Company (Tables > General Settings > Company) | Description, VAT number, Tax code → mandatory if the VAT number is not set, Country code, Tax regime, Phone/FAX, Tax domicile and ZIP, city, province, Partners/Liquidation State, REA Office, REA Registration number, Share capital (including decimals separated by “.”) | 
| VAT Rates (Tables > Administration > VAT Rates/Methods) | PA Code: the code that uniquely identifies the VAT rate in the XML files; the specific code for each rate can be found in the Technical Specifications released by the Revenue Agency for electronic invoicing | 
| Document Type Table (Tables > Administration > Document Types) | PA Code: the code that uniquely identifies the document Type to which the XML file refers (invoice, credit note...); the specific code for each rate can be found in the Technical Specifications released by the Revenue Agency for electronic invoicing | 
| Payment Type Table (Tables > General Settings > Payment Types) | PA Code: the code that uniquely identifies the Payment type in the XML file; the specific code for each rate can be found in the Technical Specifications released by the Revenue Agency for electronic invoicing | 
| Sales Invoice Types (Tables > Sales > Invoice Types) | Excluded from Electronic Invoicing: the check must be set ONLY for the documents intended to be excluded from the electronic invoicing flow. As a result of this setting, these documents cannot be processed for the electronic invoicing flow | 
| Withholding Types (Tables > Administration > Withholding Types) | Types of electronic invoicing withholding: the code that uniquely identifies the Withholding type in the XML file; the specific code for each rate can be found in the Technical Specifications released by the Revenue Agency for electronic invoicing | 
| Currency Table (Tables > General Settings > Currencies) | CodIso: in correspondence with the currency set for Euro, enter the iso code EUR | 
| Document Types Table (Tables > General Settings > Document Types) | Document type FattPubb: identifies the document type related to electronic invoicing. It must be entered with the CODE value: *FattPubb* and DESCRIPTION value: *Electronic invoicing*, leaving the other proposed values unchanged | 

## Item Registry 

For the correct management of the cases of items that require the indication on the invoice of specific regulatory or ministerial codes, such as the AIC code (ministerial product code) for some medications or codes DM0-DM1, it is necessary to register in the **Barcode types** table a specific barcode identified with the **Export Public Administration** flag and mentioned in the item registry in the **BarCode Codes** panel, field **Barcode type**.

## Split Payment 

For the correct management of Split Payment cases on documents addressed to the Public Administration, the technical specifications regarding the compilation of the XML file require the identification of a specific type of VAT collectibility, in alphanumeric format with a length of 1 character. The allowed values are as follows:          
*I* Immediate VAT collectibility       
*D* Deferred VAT collectibility      
*S* split payments       

In Fluentis, therefore, it is necessary to set the accounting reasons associated with the sales document type addressed to the PA to movement type 29 – VAT sales with split payment.