---
title: Introduction (Introduzione)
sidebar_position: 1
---

As of May 15, 2019, the Purchase Order Sorting Node (NSO) is available for experimental use under Article 5 of Decree 7/12/2018, and as of July 16, 2019, the system is capable of processing, in addition to the documents provided for the simple ordering process, all documents provided for the complete ordering and pre-agreed ordering processes. According to the aforementioned regulation, the exchanged documents do not produce legal effects between the parties.  
Regarding the electronic documents certifying the purchase order, the Decree of the Minister of Economy and Finance of December 7, 2018 stipulates that they must be mandatory issued in electronic format and transmitted via NSO, effective from October 1, 2019.          
All public administration purchase orders must be made exclusively in electronic format and transmitted through the Purchase Order Sorting Node (NSO).         
NSO uses the already existing infrastructure of the Electronic Invoice Interchange System (SdI) and will communicate with the National Database of Public Contracts (BDNCP), managed by the National Anti-Corruption Authority (ANAC), to ensure that all purchase orders refer to contracts that have been regularly assigned the tender identification code (CIG).  
The information derived from the aforementioned systems is managed and made available by the Commercial Credit Platform (PCC).  
This solution will allow the use of all transmission channels already in use for electronic invoicing, with the addition of the possibility to use the transport infrastructure defined by the PEPPOL (Pan-European Public Procurement Online) specifications.  
The documents transmitted via NSO (orders, responses, confirmations, revocations) must be formatted according to the standards set by the Business Interoperability Specifications (BIS) of PEPPOL or their national extensions.         
Currently, NSO does not handle documents certifying the execution of purchases, with the exception of the Order Response, which straddles the ordering phase and the execution phase. For this reason, any other document certifying the execution of purchases is excluded from the obligation of issuance and transmission in electronic format.  
NSO acts as a sort of intelligent postman that manages the exchange of purchase orders (and any other necessary documents) between clients and suppliers. In addition to delivering them, NSO verifies that the transmitted documents have been correctly formatted and contain all the necessary information for their subsequent use in invoicing and payment phases.          
NSO receives Messages and checks that they are correctly formatted. If this verification is successful, it forwards them to the respective Recipients and, with appropriate system Notifications, informs the Senders about the outcome of the verification and delivery.  
If the Client or Supplier interacts with NSO through an Intermediary, the former assume the role of Sender or Recipient, while the Intermediary assumes the role of Transmitter and/or Receiver.

## NSO Messages (Messaggi NSO)

The NSO system will process "Messages," meaning files composed of:
- Transmission envelope, the part of the Message that contains the necessary data for correct addressing; 
- Document, the part of the Message containing the business data (e.g., Order, Response, Acknowledgment), which constitutes the Body of the message ; 
The Document can be:
- Order, the Document through which the Client communicates to the Supplier the goods and/or services they intend to purchase and the relative instructions. An Order can be original (initial order) or replace a previous Order (substituting Order), or cancel a previous Order (revocation Order), or be linked to another order; 
- Pre-agreed Order, the Document equivalent to the Order, but issued by the Supplier in agreement with the Client. A pre-agreed Order can be original (initial Order) or replace a previous pre-agreed Order (substituting Order) or cancel a previous pre-agreed Order (revocation Order); 
- Response, the Document through which the Supplier receives, accepts, declines, or makes changes (Response with changes) to the Order received from the Client; 
- Acknowledgment Order, the Document through which the Client confirms, declines, or replaces a Response or a pre-agreed Order from the Supplier;  
The expected flow types are:
- Simple Ordering, the ordering process initiated by the Client, in which the Order is issued and transmitted in electronic format, while any other documents must be produced and exchanged in traditional ways (phone, fax, email, etc.); 
- Complete Ordering, the ordering process initiated by the Client, in which the Order is issued and transmitted in electronic format and it is possible to produce and exchange the Response and the Acknowledgment Order electronically; 
- Pre-agreed Ordering, the ordering process initiated by the Supplier, in which the pre-agreed Order is issued and transmitted in electronic format and it is possible to produce and exchange the Acknowledgment Order electronically.