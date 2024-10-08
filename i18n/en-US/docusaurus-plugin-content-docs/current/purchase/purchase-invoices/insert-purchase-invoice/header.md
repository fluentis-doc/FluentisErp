---
title: Header
sidebar_position: 3
---

After the insertion of data, above mentioned, it is possible to edit even the vendor field. The choice of vendor can occur through the field help. Thanks to the insertion of vendor it is possible to propose automatically all specific data of 'Header' tab, according to data set previously on vendor register. The data proposed, if specified on register, regard: 

**Delivery**: it is possible to propose the information inserted on vendor register on 'Deliveries' tab (reference table 'Carriage'); 

**Packing**: it is possible to propose the information inserted on vendor register on tab 'Deliveries' (reference table 'Packing'); 

**Country**: it is possible to propose the information inserted on tab 'Common Data' on vendor register (reference table 'Countries'); 

**Zone**: it is possible to propose the information inserted on vendor register on 'Deliveries' tab (reference table 'Zone'); 

**Price List**: it is possible to propose the information inserted on vendor register on Price Lists tab, but only if there is a default offer (reference table 'Vendors Price Lists'); 

**From Validity Date**: the selected price list is valid starting from this date; 

**To (Validity date)**: the selected price list is valid up to this date; 

**Language**: it is possible to propose the information inserted on tab 'Common Data' of vendor register. 

**Currency**: it is possible to propose the information inserted on vendor register on 'Finance' tab (reference table Currency); 

**Currency Exchange**: if currency of company is the same as the document one, value reported will correspond to 1, if not, value will be taken from Currency Exchange or from Fix Exchange for EURO; 

**Currency Date**: date on which it is possible to calculate the exchange value as relation between money of company and vendor one, according to settings on 'Currency Exchange' table; 

**Initial Notes**: it is possible to insert notes that have been inserted in 'Codified Notes' previously. For this reason the user has to perform a double click on 'Initial Notes' field in order to open 'Codified Notes Help' and to select data, or through the right button of mouse it is possible to open a window in order to specify a long note text, if field has a value it is necessary to change the background colour; 

**Job Order**: it enables the user to link document to a job order; 

**PI Ref. and Type**: after having create the reversal of an invoice, the user has to link the two invoices inserting on reversal number, date and invoice type; 

**Acc. Rec.**: it refers to the number, date and protocol of accounting record coming from invoice accounting; 

**Document Status**: is refers to the document status table, data have to be inserted by the user and can be used by replication procedure of Fluentis, installed for the management of a location with point of sale.

On header of invoice there are fields that can be managed in a different way compared to the one of other documents. These are:

**Our Reference**: when the 'Execution from Order' procedure is completed, it is possible to propose even the information that is on the related order field. This transfer is valid only in case of invoice created through data picking from an order. In case that the invoice has been issued through the 'Purchase Delivery Notes Valorization' procedure from an only one delivery note, in this field it is possible to propose the information that is located on the same delivery note field.

**Your Reference**: when the 'Execution from Order' procedure is completed, it is possible to propose even the information that is on the related order field. This transfer is valid only in case of invoice created through data picking from an order. In case that the invoice has been issued through the 'Purchase Delivery Notes Valorization' procedure from an only one delivery note, in this field it is possible to propose the information that is located on the same delivery note field.

**Invoice Status**: when the invoice is created, it has no active flag. In order to be accounted it has to have the 'Controlled' flag. The 'Accounted' flag is automatically selected when invoice supports the accounting procedure; the 'Loaded' flag becomes active when the invoice supports the load procedure and it is removed through the operation restore procedure. There is also the possibility to cancel the invoice through the 'Cancelled' flag.

The Execution from Purchase Orders procedure enables the user to insert automatically information contained in one or more orders.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save the purchase invoices. |
|  [Execute from Purchase Order](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/header-procedures/execution-from-purchase-order)  | It refers to the procedure to create an invoice from purchase order. |
| Open Register | It enables the user to view data of register. |
| Delete Payments | It enables the user to delete payments inserted on header; payments are taken by register. |



| Function | Meaning |
| --- | --- |
|  [Document Manager](/docs/guide/common/operations-with-data/document-manager)  | Management of document storage associated to the mask in use. |






