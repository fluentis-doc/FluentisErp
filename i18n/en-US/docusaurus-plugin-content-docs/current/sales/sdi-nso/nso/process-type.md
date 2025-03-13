---
title: Process Types (Tipi processi)
sidebar_position: 3
---

## Simple Ordering (Ordinazione semplice)

The Simple Ordering process provides that any communication of acceptance, denial, or modification of the Order by the Supplier can only reach the Customer in traditional forms (phone, fax, email, etc.), implicitly informing the Supplier that they are not available to receive any Response electronically. The Customer can still revoke or modify a previously issued Order by issuing a new Order, which must include the indication of the Order they intend to revoke or modify.  
As a result, an Order can take the following forms:
- Initial Order (Ordine iniziale)
- Linked Initial Order (Ordine iniziale collegato)
- Revocation Order (Ordine di revoca)
- Replacement Order (Ordine sostitutivo)

In this regard, if the Order specifies the date of execution of the supply, the time limit within which it is possible to replace or revoke the Order is determined by that date minus the time necessary to prepare and execute the supply at the designated location. The Supplier must consider as effective only the Revocations and Replacements of orders received before they start executing the revoked or replaced Order (i.e., before the order is fulfilled). The Order may indicate the date by which the Supplier is required to respond.

## Complete Ordering (Ordinazione Completa)

This process involves the use of three Documents:
- The Order, issued by the Customer;
- The Response, possibly issued by the Supplier;
- The Acknowledgment Order, possibly issued by the Customer.

The process begins with the sending of the Order by the Customer and can terminate alternatively:
- with the Supplier's receipt of the Order sent by the Customer;
- with the Customer's receipt of the Response sent by the Supplier;
- with the Supplier's receipt of the Acknowledgment Order sent by the Customer.

## Order Issuance (Emissione dell’ordine)

The Order can take the following four forms:
- Initial Order (Ordine iniziale),
- Linked Initial Order (Ordine iniziale collegato),
- Revocation Order (Ordine di revoca),
- Replacement Order (Ordine sostitutivo).

The Revocation Order must contain a single line of order without content, as it constitutes the mere cancellation of the previously transmitted Order to which it refers; the Supplier must consider as effective only the Revocations and Replacements of orders received before they start executing the revoked or replaced Order. If the Order specifies the date of execution of the supply (Delivery/RequestedDeliveryPeriod/StartDate = EndDate), it represents the time limit within which it is possible to replace or revoke the Order minus the time necessary to prepare the supply and execute it at the designated location. Replacements and Revocations, respectively, replace and cancel both the indicated Order and all other Replacements and Revocations already transmitted related to the same Initial Order. The Replacement Order formally initiates a new Ordering process, which can be simple or complete based on what is indicated in the Replacement Order itself. The Order may indicate the date by which the Supplier is required to respond (ValidityPeriod/enddate).

## Response to the Order (Risposta all’ordine)

Upon receipt of the Order, the Supplier can:
- conclude the process without transmitting any Response;
- transmit a Response (red flow in the figure), which must include the indication of the previously sent Order to which it responds, informing the Customer that they intend to:
> - communicate that they have received the Order (Reception Response);
> - accept the received Order (Acceptance Response);
> - decline the received Order (Denial Response);
> - make changes to the received Order (Response with changes).

The Response with changes must contain all order lines, both those that are intended to be maintained and those that are intended to be modified, as it integrates the previously transmitted Order to which it refers. The Response to a revoked Order has no effects for the Customer.

## Acknowledgment of the Response (Riscontro alla risposta)

Upon receiving the Response, the Customer can:
- terminate the process without transmitting an Acknowledgment Order (blue flow in the figure);
- transmit an Acknowledgment Order (red flow in the figure), which must include the indication of the Response to which it refers, informing the Supplier that they intend:
> - to accept the received Response (Acknowledgment Order for confirmation);
> - to decline the received Response (Acknowledgment Order for denial);
> - to replace the changes to the Order contained in the received Response (Substitute Acknowledgment Order).

If the Customer indicates that they intend to replace the changes to the Order contained in the Supplier's Response, the Acknowledgment Order cancels all previous Documents of the current process and initiates a new Ordering process. The Supplier must consider as effective only the Acknowledgment Orders received before they start executing the Order. 

If the Customer sends a substitute acknowledgment order in the Supplier's Response, the Acknowledgment Order cancels all previous Documents (Order and Response) of the current process and initiates a new complete Ordering process. The absence of an Acknowledgment Order equates to confirmation of the Response. Only Acknowledgment Orders received before the fulfillment of the order are effective.

## Pre-Agreed Ordering (Ordinazione PRE-Concordata)

The pre-authorization to issue the order by the Supplier, instead of the Customer, may arise from the contract or from another document (e.g., an order sent via fax or email due to the unavailability of the IT system that issues Electronic Orders, or an order finalized through a telematic communication platform) with which the Customer grants such authority to the Supplier, predetermining the scope and limitations within which it can be exercised.  
This process involves the use of two Documents:
- The pre-agreed Order, issued by the Supplier;
- The Acknowledgment Order, possibly issued by the Customer.

The process begins with the sending of the pre-agreed Order by the Supplier, which it issues as pre-authorized by the Customer, and can end alternatively:
- with the Customer's receipt of the pre-agreed Order sent by the Supplier;
- with the Supplier's receipt of the Acknowledgment Order sent by the Customer.

Any communication of confirmation, denial, or replacement of the pre-agreed Order by the Customer should normally be sent to the Supplier through NSO. The Supplier can still revoke or modify a previously issued pre-agreed Order by issuing a new pre-agreed Order, which must include the indication of the pre-agreed Order that is intended to be revoked or modified.

As a result, a pre-agreed Order can take the following forms:
- Initial Order (Ordine iniziale)
- Linked Initial Order (Ordine Iniziale collegato)
- Revocation Order (Ordine di revoca), which must include the indication of the previously sent Order that is intended to be revoked, and must contain a single line of order, as it constitutes the mere cancellation of the previously transmitted Order to which it refers;
- Replacement Order (Ordine sostitutivo), which must include the indication of the previously sent Order that is intended to be modified, constitutes a new Order that cancels all previous Documents (Orders and Acknowledgment Orders) of the current process and initiates a new pre-agreed Ordering process, thus it must contain all order lines (like an Initial Order).  
Upon receiving the pre-agreed Order, the Customer can:
- terminate the process without transmitting an Acknowledgment Order;
- transmit an Acknowledgment Order, which must include the indication of the pre-agreed Order to which it refers, informing the Supplier that they intend:
> - to confirm the received pre-agreed Order (Acknowledgment Order for confirmation);
> - to decline the received pre-agreed Order (Acknowledgment Order for denial);
> - to replace the received pre-agreed Order (Substitute Acknowledgment Order).

If the Customer communicates that they intend to replace the Supplier's pre-agreed Order, the Acknowledgment Order cancels all previous Documents of the current process and initiates a new process that, based on what is indicated in the Acknowledgment Order, can be either Simple Ordering or Complete Ordering. Only Acknowledgment Orders received before the pre-agreed Order has been fulfilled with delivery documents are effective.