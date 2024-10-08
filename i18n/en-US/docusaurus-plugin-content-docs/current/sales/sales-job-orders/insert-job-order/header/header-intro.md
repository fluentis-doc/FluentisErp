---
title: Header
sidebar_position: 1
---

The insertion of a sales job order needs a predefined job order type in [Home>Tables>Sales]. Through the insertion of customer it is possible to propose automatically all specific data of 'Header' tab, according to data set before on customer register. The data proposed, if specified in register, consist as follows:

**Delivery**: it is proposed the information inserted into customer register on 'Delivery' tab (reference table 'Delivery'); 

**Carriage**: it is proposed the information inserted into customer register on 'Delivery' tab (reference table 'Carriage'); 

**Packing**: it is proposed the information inserted into customer register on 'Delivery' tab (reference table 'Packing'); 

**Country**: it is proposed the information inserted into customer register on 'Common Data' tab (reference table 'Country'); 

**Zone**: it is proposed the information inserted into customer register on 'Delivery' tab (reference table 'Zone'); 

**Price List**: it is proposed the information inserted into customer register on 'Price List' tab, but only if it exists a default offer (reference table 'Sales List'); 

**From Validity Date**: the selected price list is valid starting from this date; 

**To (Validity Date)**: the selected price list is valid up to this date; Language: it is proposed the information inserted into 'Common Data' tab of customer register;

**Currency**: it is propose the information inserted into customer register on 'Finance' tab (reference table 'currency'); 

**Currency Exchange**: if currency of company is the same as the document one, the value reported will be 1, on the contrary the value will be reported from Currency Exchange or from Fix Exchange for EURO; 

**Currency Date**: date on which it is possible to calculate value of exchange as relation between money of company and the customer one, according to settings on Currency Exchange table; 

**Initial Notes**: it is possible to insert notes that have been inserted previously in 'Codified Notes'. For this reason the user has to double click on 'Initial Notes' field in order to be able to open 'Codified Notes Help' and to select data or through the right mouse button the user can open a window to specify a very long note text, if field has a value, as a consequence it is necessary to change the background colour of the field;

**Customer Note**: it is proposed the information inserted on customer register, 'Finance' tab;

**Job Order Status**: the job order, when it is created, has the 'Not Executed' status. But in order to transfer job order items on order, the job order has to have 'Printed' flag and job order confirmation date. After having transferred operations, the job order changes its status automatically.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save the sales job order. |
| Delete Payments | It enables the user to delete payments inserted on header; payments are taken by register. |



| Function | Meaning |
| --- | --- |
|  [Document Manager](/docs/guide/common/operations-with-data/document-manager)  | Management of document storage associated to the mask in use. |






