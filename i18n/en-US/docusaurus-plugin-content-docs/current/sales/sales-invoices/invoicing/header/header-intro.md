---
title: Header
sidebar_position: 1
---

Through the insertion of the customer, all data specific of the 'Header' tab are automatically prosposed. Data are proposed then according to data, which have been previously inserted in the customer register. If data have been specified before in the register, they are the following:

**Delivery**: the information inserted into customer register is proposed, 'Deliveries' tab (reference table 'Deliveries'; 

**Carriage**: the information inserted into customer register is proposed in 'Deliveries' tab (reference table 'Carriage'); 

**Packing**: the information inserted into customer register is proposed in 'Deliveries' tab (reference table 'Packing'); 

**Nation**: the information inserted into 'Common Data' tab is proposed in customer register (reference table 'Nations'); 

**Zone**: the information inserted into customer register is proposed in 'Deliveries' tab (reference table 'Zones'); 

**Price Price List**: the information iserted into customer register is proposed in Price Lists tab, but only in case that there is an automatic offer (reference table 'Sales Price List'); 

**From (Validity Date)**: the selected price list is valid by starting from this date; 

**To (Validity Date)**: the selected price list is valid up to this date; Language: it is possible to propose the information inserted into 'Common Data' of customer register.

**Language**: the information, selected in 'Common Data' tab of the customer register, is proposed; 

**Currency**: it is possible to propose the information inserted on customer register in 'Administrative' tab (currency reference table); 

**Exchange**: if company currency is the same as document currency, value will be 1, on the contrary, value will be reported from Exchange or Fixt Exchanges for EURO; 

**Currency Date**: on which it is possible to calculate the exchange value as a relation between company currency and customer currency, according to some settings of Exchange table;

**Initial Note**: it is possible to insert some notes that have been previously inserted into 'Codified Notes'. For this reason the user has to perform a double click on 'Initial Note' field in order to open 'Codified Notes Help' and select data, or through the right win of mouse it is possible to open a window in order to specify a long note text, if field has a value it is necessary to change the field back colour;  

**Register Notes**: it is possible to propose the information inserted in customer register in 'Administrative' tab or through the right win of mouse it is possible to open a window in order to specify a long note text, if field has a value it is necessary to change the field back colour; 

**Delivery and Recipient**: the information inserted into customer register is proposed in 'Deliveries' tab;

**User**: enables to insert the user who creates document (reference table 'Search Employee' in Administration/Staff Area. This option has to be set within the same document Parameters;

**Job Order**: enables the user to link document to a sales job order; 

**Ref. Invoice and Type**: after having created the invoice reversal, the user has to link the two invoices inserting original invoice number, date and type into reversal; 

**Acc. Rec.**: contains the accounting record number, date and protocol of accounting record coming from invoice accounting; 

**Doc. Status**: document status table data, data have to be inserted by user and can be used by fluentis replication procedures, installed for the management of a branch with points of sale; 

**EDI**: is the document transmission date by EDI procedures; 

**Effective Date**: refers to the payment maturities calculation.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save the sales invoices. |
| Execution from Sales Order | Button to create an invoice from a sales order. |
| Create Invoice from Picking | Button to take items from a picking list. |
| Create Invoice from Sales Price List | Button to take items from sales price list. |
| Create Invoice from Packing list | Button to take items from packing list. |
| Allow to take items from packing list | Button to view and to insert recipients/destinations from the customer register.  |



| Function | Meaning |
| --- | --- |
|  [Document Manager](/docs/guide/operations-with-data/document-manager)  | Management of the document storage linked to the mask in use. |






