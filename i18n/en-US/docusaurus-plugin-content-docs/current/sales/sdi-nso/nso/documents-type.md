---
title: Document Types 
sidebar_position: 2
---

## Order 

The Order is the Document representing the purchase order of goods and services issued by the 
Customer (Sender) and addressed to the Supplier (Recipient). An Order consists of one or more 
order lines, indicating the goods or services to be purchased, the quantity, and the 
price.        
**The Order is prepared in the format described by the PEPPOL Order transaction 3.0 specification.**
An Order can: 
- determine, independently of any previously issued Orders, the goods and/or services 
that the Customer intends to purchase and the related instructions for delivering the service (Initial Order). An initial Order does not contain references to other Orders; 
- determine, independently of any previously issued Orders, the goods and/or services 
that the Customer intends to purchase and the related instructions for providing the service, and, however, be generically related to another Document (Linked Initial Order). A linked initial Order contains a reference to the Document to which it is linked and indicates that it is merely a “link”;
- revoke a previously issued Order (Revocation Order). The Revocation Order is an 
Order that indicates that it is a “Revocation” and the reference to the Order 
that is intended to be revoked; 
- replace a previously issued Order (Replacement Order). The Order modification 
is a new Order complete with all order lines, which contains the indication that it 
is a “Modification” and the reference to the Order that is intended to be modified. 
Replacements and Revocations, respectively, replace and cancel both the indicated 
Order and all other replacements and revocations already transmitted, referring to the related initial Order. 
The linked initial Order can only be used to document that the new process that is 
to be initiated is related to a previous process and should never be used instead of 
other tools (Revocation Order, Replacement Order, and Acknowledgment Order) specifically 
designed to revoke, replace (or supplement), confirm, or reject another Document.

## Response

The Response is the Document through which the Supplier (Sender) accepts, declines, or proposes changes to an Order received from the Customer (Recipient). 
**The Response is prepared in the format described by the PEPPOL Order Response transaction 3.0 specification.**     
With the Response, the Supplier can communicate to the Customer that: 
- they have received the Order (Receipt Response), but have not yet processed it. This is, 
evidently, an interim communication that does not contain any indication regarding “if and how” the Supplier intends to proceed with the Order. The Receipt Response is a Response without order lines, which indicates that it is a 
“receipt” (“AB”) and the reference to the Order that they communicate having received 
- they intend to proceed with the received Order (Acceptance Response). The Acceptance Response is a Response without order lines, indicating that it is a “Acceptance” and the reference to the Order that they intend to accept; 
- they decline the received Order (Denial Response). The Denial Response is a Response 
without order lines, indicating that it is a “Refusal” and the reference to the Order that they intend to refuse; 
- they intend to proceed with the received Order making some changes (Response with modifications). The Response with modifications, which contains the indication that it is a “Modification” and the reference to the Order that they intend to modify, must contain all order lines, both those they intend to keep and those they intend to change, as it supplements the previously transmitted Order to which it refers. 
Responses with modifications and Denial Responses, respectively, supplement and cancel both 
the indicated Order and all other Modifications and Revocations already transmitted, referring to the same 
initial Order.       

The Response to a revoked Order has no effect.

## Acknowledgment Order

The Acknowledgment Order is the Document through which the Customer (Sender) confirms, declines, or replaces (Replacement Acknowledgment Order) a pre-agreed Order or a Response sent by 
the Supplier (Recipient). 
**The Acknowledgment Order, therefore, is simply an Order that references a Document sent by the Supplier. Consequently, it is prepared in the same format, which is described by the PEPPOL Order transaction 3.0 specification.**
With the Acknowledgment Order, the Customer can communicate to the Supplier: 
- that they confirm a pre-agreed Order or a Response sent by the Supplier (Acknowledgment Order for Confirmation). The Acknowledgment Order for Confirmation is an Order that contains the indication that it is a “Confirmation” and the reference to the pre-agreed Order or the Response that they intend to confirm; 
- that they decline a pre-agreed Order or a Response sent by the Supplier (Acknowledgment Order for Denial). The Acknowledgment Order for Denial is an Order that contains the indication that it is a “Refusal” and the reference to the Order or the Response that they intend to refuse; 
- that they intend to replace a pre-agreed Order or a Response sent by the Supplier (Replacement Acknowledgment Order). The Replacement Acknowledgment Order is a new Order, 
complete with all order lines, that contains the indication that it is a “Replacement” and the reference to the Order or the Response that they intend to replace.        

Replacement Acknowledgment Orders and Acknowledgment Orders for Denial, respectively, replace and cancel both the indicated pre-agreed Order or Response and all other Replacements and Revocations already transmitted, referring to the related initial Order.      
The Acknowledgment Order related to a revoked pre-agreed Order has no effect.

## PRE-Agreed Order 

The Pre-agreed Order is the Document representing the purchase order of goods and services, 
issued by the Supplier (Sender) instead of the Customer (Recipient), in agreement with the latter. 
A Pre-agreed Order consists of one or more order lines, which indicate the goods or the 
service object of the purchase, the quantity, and the price. 
**The Pre-agreed Order is prepared in the format described by the PEPPOL Order Agreement transaction 3.0 specification.**
A Pre-agreed Order can: 
- determine, independently of any previously issued pre-agreed Orders, the 
goods and/or services that the Customer intends to purchase and the related instructions for providing the service (Initial Pre-agreed Order). An initial Pre-agreed Order does not 
contain references to other pre-agreed Orders
- determine, independently of any previously issued pre-agreed Orders, the 
goods and/or services that the Customer intends to purchase and the related instructions for providing the service, and, however, be generically related to another Document (Linked Initial Pre-agreed Order). A linked initial Pre-agreed Order contains the 
reference to the Document to which it is linked and the indication that it is merely a 
“link”. 
- revoke a previously issued pre-agreed Order (Revocation Pre-agreed Order). The Revocation Pre-agreed Order is a pre-agreed Order that contains the indication that it is a “revocation” (“Cancelled”) and the reference to the pre-agreed Order that is intended to be revoked, and it has a single order line with no content.
- replace a previously issued pre-agreed Order (Replacement Pre-agreed Order). The Modification of the pre-agreed order is a new pre-agreed Order, 
complete with all order lines, that contains the indication that it is a “replacement” (“Revised”) and the reference to the pre-agreed Order that is intended to be modified.        

Replacements and Revocations, respectively, replace and cancel both the indicated pre-agreed Order and all other Replacements and Revocations already transmitted, referring to the related initial pre-agreed Order.        
The linked initial pre-agreed Order can only be used to document that the new process that is 
to be initiated is related to a previous process and should never be used instead of 
other tools (Revocation Pre-agreed Order, Replacement Pre-agreed Order, and Response) specifically 
designed to revoke, replace (or supplement), accept, or refuse another Document.

## RELATIONSHIP WITH THE PEPPOL STANDARD

With reference to the purchase ordering of goods and services, the PEPPOL BIS version 
3.0 standard defines three types of documents:        
− Order transaction 3.0;       
− Order Response transaction 3.0;     
− Order Agreement transaction 3.0;       
and three processes (referred to as profiles):      
− BIS Order only 3.0;     
− BIS Ordering 3.0;      
− BIS Order Agreement 3.0.