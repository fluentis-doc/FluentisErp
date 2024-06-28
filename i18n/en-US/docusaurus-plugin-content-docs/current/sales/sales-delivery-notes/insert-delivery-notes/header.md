---
title: Header
sidebar_position: 2
---

Through the insertion of customer it is possible to propose automatically all specific data of 'Header' tab according to data set previously on customer register. Data proposed, if specified on register, concern: 

**Delivery**: it is proposed the information inserted on customer register, 'deliveries' tab (reference table 'Deliveries'); 

**Carriage**: it is possible to propose the information inserted on customer register on 'Deliveries' tab (reference table 'carriage'); 

**Packing**: it is possible to propose the information inserted in customer register in 'Deliveries' tab (reference table 'Packing');

**Country**: it is possible to propose the information inserted on 'Common Data' tab in customer register (reference table 'Countries'); 

**Zone**: the information inserted on customer register is proposed on 'Deliveries' tab (reference table 'Zone');

**Price List**: the information, inserted in the customer register in Price Lists tab, is proposed. This occurs only in case in which there is an automatic offer (reference table Sales Price Lists);

**From Validity Date**: the selected price list is valid starting from this date; 

**To (Validity Date)**: the selected price list is valid up to this date; 

**Language**: the information inserted on 'Common Data' tab of customer register is proposed;

**Currency**: it is proposed the information inserted on customer register in 'Finance' tab (reference table of currency); 

**Currency Exchange**: if currency of company is the same as document one, the value reported will be 1, on the contrary, the value will be taken by Currency Exchanges or by Fix Exchanges for EURO; 

**Currency Date**: date on which it is possible to calculate the exchange value as relation between money of company and the customer one, according to settings on Value Exchange table;

** Initial Notes**: it is possible to insert notes that have been inserted previously in 'Codified Notes'. For this reason the user has to double click on 'Initial Note' field in order to open 'Codified Notes Help' and to select data, or through the right mouse button it is possible to open a window to specify a long note text, if the field has a value, then it is necessary to change the background colour of the filed; 

**Destination and Recipient**: the information inserted on customer register is proposed in 'Deliveries' tab, only if there are default recipients and destinations. The combo box proposes all recipients and destinations inserted on customer register;

**User**: it inserts the user that creates document (reference table 'Search Employee' on Finance Area/Employee. This option has to be set on Parameters of the same document;

**Job Order**: it enables the user to link document to a sales job order; 

**Doc. Status**: it refers to the document status table, data have to be inserted by the user and can be used by replication procedures of Fluentis, installed for the management of a branch with some point of sales; The delivery note status can be: printed, unloaded, valorized, cancelled;

**EDI**: is the transmission date of document from EDI procedures;

RIBBON BAR: it represents the Form menu, that is the area in which there is the possibility to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save delivery notes. |
|  [Execute from Order](/docs/sales/sales-delivery-notes/insert-delivery-notes/header-procedures/execution-from-order)  | It refers to the procedure to create a delivery note from sales order. |
|  [Create Delivery Note from Picking](/docs/sales/sales-delivery-notes/insert-delivery-notes/header-procedures/create-delivery-note-from-picking)  | It enables the user to take items from a picking list. |
| Transfer Items from Sales Price Lists | It enables the user to take items from sales price lists. |
|  [Create DN from Packing List](/docs/sales/sales-delivery-notes/insert-delivery-notes/header-procedures/create-delivery-note-from-packing-list)  | It enables the user to take items from packing list. |
| Help Recipient/Destination | It enables the user to view and to insert recipients/destinations from customer register. |
| Delete Delivery Note | It performs the procedure to delete a previously inserted delivery note. |



| Function | Meaning |
| --- | --- |
|  [Document Manager](/docs/guide/operations-with-data/document-manager)  | Management of document storage associated to the mask in use. |






