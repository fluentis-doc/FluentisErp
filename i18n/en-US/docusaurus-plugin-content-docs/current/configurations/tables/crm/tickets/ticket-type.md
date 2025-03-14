---
title: Ticket Type (Tipo Ticket)
sidebar_position: 1
---

The table allows for the definition of the types of tickets that can be used when entering a new ticket, defining in advance some characteristics of the tickets that will be registered with that type. It consists of a filter section where you can search by code or description of the type and a grid where all the entered types will be listed.

Also within this form, it is possible to add new types to the grid by clicking the **New** button: this will add a new row to the grid where the following parameters will be defined:

**Code**: is the code of the ticket type;

**Description**: is the description of the ticket type;

**Numeration**: is the numbering of the ticket type and refers to the *Type numeration* table;

**Offer type**: contains the [Offer Type (Tipo offerta)](/docs/configurations/tables/sales/sales-offer-type) to be created with the *Ticket Offer Creation (Creazione offerta da ticket)* procedure;

**Class and Item Code (Classe e Codice Articolo)**: 

**Ticket template (Template ticket)**: contains the [Template (Template)](/docs/configurations/tables/crm/tickets/template-ticket) to be proposed for this Ticket Type;   


Flags to make fields mandatory

**Client**: if enabled, indicates the requirement to fill in the Customer field in the ticket;

**Subject**: 

**Reference Subject (Soggetto di Riferimento)**: if enabled, indicates the requirement to fill in the reference subject field in the ticket;

**Reference Subject Email (Email soggetto di Riferimento)**: if enabled, indicates the requirement to fill in the reference subject email field in the ticket;

**Project**: if enabled, indicates the requirement to fill in the Project field in the ticket;
 
**Service Level Agreement**: if enabled, indicates the requirement to fill in the Service Level field in the ticket;

**Severity**: if enabled, indicates the requirement to fill in the Severity field in the ticket;

**First assigned user**: proposed default user.

For each type, it is possible to specify one or more **Ticket state** in the grid below. These statuses can vary for each Ticket type and will be proposed as possible statuses when creating a New ticket with this type.   

For each ticket status, the following parameters can be defined:

**Code**: is the code of the ticket status;

**Description**: is the description of the ticket status;

**End date**: is the end date of the ticket status;

**Note**: in this field, it is possible to add additional notes to the ticket.


For each type, it is possible to specify one or more **Users** in the grid below. This configuration is mandatory if you want to enable all the manageable tabs in the ticket. It can be configured for individual users or by role. 

**Role**: indicates the role for which the configured settings are valid.

**User**: indicates the user for whom the configured settings are valid, as an alternative to the role.

**Ticket details**: enable to make the Ticket Detail section/tab visible in the ticket.

**Users**: enable to make the Users section/tab visible in the ticket.

**Estimation/Effort**: enable to make the Estimate/Effort section/tab visible in the ticket.

**Commercial Estimation**: enable to make the Commercial Estimate section/tab visible in the ticket.

**Closing info**: enable to make the Closure Information section/tab visible in the ticket.

**Linked tickets**: enable to make the Linked Tickets section/tab visible in the ticket.

**Note**: enable to make the Note section/tab visible in the ticket.

**Product**: enable to make the Product section/tab visible in the ticket.

**Extra data**: enable to make the Extra Data section/tab visible in the ticket.
 
**Document Management**: enable to make the Document Management section/tab visible in the ticket.

**Offers**: enable to make the Offers section/tab visible in the ticket.