---
title: NSO Messages (Messaggi NSO)
sidebar_position: 4
---

In response to each incoming Message, NSO issues a Transaction Identifier (IdT) and validates it. It is important to remember that, due to Article 3 of the decree of December 7, 2018, public administrations cannot proceed with the liquidation and subsequent payment in response to Documents contained in Messages that have not been validated by NSO. Each Document is uniquely identified by the Identification Triplet composed of three elements, which must necessarily be present: 
- the identifier of the entity that issued it (EndpointID), which usually coincides with the Sender; 
- the identifier of the Document assigned by the issuer (ID); 
- the date of the Document (IssueDate).        

Therefore, a single entity can issue one and only one Document with the same identifier and same date (uniqueness of the Document). The Identification Triplet is used whenever there is a need to refer to a specific Document in Revocations and Replacements of Orders and Pre-agreed Orders, in Responses, and in Confirmation Orders. The IdT assigned to each Message by NSO is associated with the Identification Triplet of the Document contained therein.

All valid Messages (and, therefore, all Documents) can be searched on the Commercial Credit Platform (PCC) both via the Identification Triplet and via the IdT.

## NSO Validation States (Stati validazione NSO)

Based on the outcome of the requested operation, NSO can send the Transmitter one or more of the following system Notifications, which report the Transaction Identifier (IdT) to which they refer. In both categories of scenarios (transmission and validation), if the Message does not pass validation, NSO sends the Transmitter the following system Notification: 
- Rejection Notification: indicates to the Transmitter that the Message has not passed the validation checks.
- Delivery Receipt, which informs the Transmitter that NSO has delivered the Message to the Recipient; 
- Non-delivery, which indicates to the Transmitter the temporary inability to deliver the Message to the Recipient; 
- Certification of message transmission with non-delivery, which informs the Transmitter of the impossibility of delivering the Message to the Recipient due to reasons not attributable to NSO.           

If, after three “automatic” resend attempts within two hours, the delivery to the Recipient is unsuccessful, NSO sends the Transmitter a Non-delivery Notification. This Notification indicates the temporary impossibility of delivering the Message to the Recipient: it is, therefore, a communication that has temporary value. Consequently, the correct behavior of the Transmitter will be to wait for the final outcome of the delivery process. If this process is successful, the Transmitter will receive the Delivery Receipt; otherwise, they will receive the Certification of message transmission with non-delivery; 
After sending the Non-delivery Notification, NSO makes further attempts to deliver the Message. 
If the delivery process of the Message still fails, NSO sends the Transmitter the Certification of message transmission with non-delivery. In this case, the Transmitter is authorized to independently deliver the Message to the Recipient. Essentially, a sort of direct validation scenario occurs due to the technical impossibility of delivering the Message through NSO.        

Clients and Suppliers accredited on NSO (also through Intermediaries), that is, those whose address on the transmission Envelope starts with “NSO0:” (see Paragraph 2.5.3), benefit from not having to verify the successful validation of Messages, as all Messages transmitted by NSO have necessarily been validated before being forwarded to the Recipient.