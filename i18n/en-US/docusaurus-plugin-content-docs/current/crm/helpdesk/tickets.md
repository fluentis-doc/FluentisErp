---
title: Ticket Management (Gestione ticket)
sidebar_position: 1
---

From the Ticket search screen, it is possible to view the tickets that have already been entered. Generally, Ticket Management is used by the corporate helpdesk service. From this screen, it is possible to open tickets for editing or viewing and to create new ones.     
Additionally, the button on the ribbon bar **Create Offers from Ticket (Creazione offerte da Ticket)** allows for the creation of [Offers](/docs/sales/offers/insert-offer) directly from the selected tickets. The item/service entered in the ticket will become an item line in the offer, and other data entered in the ticket will also be included in the Offer: Project, Client, Line amounts (be careful in this case if there are valid price lists for the client: the offer will modify the amounts based on the price list associated with the client). This procedure is also available within individual tickets.        

By clicking *New*, it is possible to insert a new Ticket. Ticket Management consists of two parts: the Header and the underlying tabs, which we will now list.     

## Header  

The header contains the following fields.     
**Type/Year/Number (Tipo/Anno/Numero)**: these data are automatically filled in if the Operator has been assigned a default Ticket type in the [Parameters for CRM Operator (Parametri per operatore del CRM)](/docs/configurations/parameters/crm/ticket-parameters); the number is incremental.     
**Creation Date/Deadline (Data creazione/Scadenza)**: the creation date is automatically inserted with today’s date; the deadline date is a field to be manually entered.     
**Closure Date/Closed (Data chiusura/Chiuso)**: by checking the Closed flag, the Closure Date is automatically recorded.     
**Client**: this field is automatically filled if the Operator has been assigned a default Client in the [Parameters for CRM Operator (Parametri per operatore del CRM)](/docs/configurations/parameters/crm/ticket-parameters); otherwise, it can be manually entered.     
**Contact**: it is possible to alternatively enter a [Contact](/docs/crm/home-crm/contacts/new-contact/header).        
**Project**: it is possible to indicate a project to refer to;      
**Ticket Operations (Operazioni ticket)**: in this field, the possible [Operations](/docs/configurations/tables/crm/tickets/operations) for this Ticket type are displayed;      
**Referent**: in this field, the *Contact Person* of the entered client is displayed, taken from the registry; the field is modifiable;      
**Ticket Severity**: this is a field containing the [Severity](/docs/configurations/tables/crm/tickets/severity);   
**Object**: this is a manually fillable field;     
**State**: a status can be assigned to the ticket; the statuses displayed are those entered in the corresponding [Ticket Type (Tipo ticket)](/docs/configurations/tables/crm/tickets/ticket-type);              
**Billed/Chargeable (Fatturato/Fatturabile)**: these flags indicate whether the ticket has already been billed or if it needs to be;      
**Invoicing criteria**: indicate whether the billing criteria are the ones provided in the offer or those actually performed;      
**Invoicing Period**: indicate whether billing should be based on actuals or delivery.      

Let’s analyze the underlying tabs.     

## Ticket Detail (Dettaglio ticket)

This tab consists of two fields: **Language** (automatically filled) and **Description** (mandatory).    

## Users (Utenti)

In this tab, the operators who carry out activities on the ticket are listed; upon the creation of a new ticket, the **User** and **First assigned date time** fields are automatically filled.     

## Estimation/Effort (Stima/Sforzo)

This tab is activated after clicking the *Technical Estimation* button on the ribbon bar. Based on the Ticket Type being created, the associated [Template](/docs/configurations/tables/crm/tickets/template-ticket) will be proposed, with the relevant data already filled in the corresponding table. The user can modify all fields. The fields that are not taken from the Ticket Type or Template tables, and thus must be manually filled, are as follows:        
**Actual Start Date (Effettiva data inizio)**: in this field, a Date of actual work commencement can be entered, which may be different from the **Expected Start Date (Data previsto inizio)**, next to it and automatically filled with the ticket creation date;     
**Sales/Technical (Commerciale/Tecnico)**: in these fields, the respective operators are entered, who will also be proposed in the next *Commercial Estimation* tab.       
In the grid below, it is important to indicate the expected **Previewed quantity** in the column for the time expected to perform the activities and the corresponding **Units of Measure**. Filling in this column will automatically fill the **Minutes estimated effort** and **Work hours** fields and will be used for the subsequent creation of the commercial estimation.      
**Job order resources** allows you to associate a resource from the projects area, indicating which resource will perform this phase of Technical Estimation. 
When the resource declares the activity in the projects area, selecting the corresponding ticket will automatically propose the referenced project entered in the corresponding technical estimation of the ticket.


**Project** allows you to indicate a project line from the Projects area, which will be proposed automatically when the resource declares the activity in the projects area, selecting the corresponding ticket.

**Start date** and **End date**: indicates precisely the start and end date of each step of the technical estimation. 

Once the Technical Estimation is complete, click the *Technical Estimation End* button on the ribbon bar: this will again lock the editing of the Estimation/Effort tab. To modify it again, click the *Cancel technical estimation* button.       

## Closure Information (Informazioni chiusura)

This tab is composed of the fields **Closing date** and **Notes**; both fields are free text and not mandatory.     

## Linked Tickets (Ticket collegati)

In this tab, it is possible to enter any related tickets. To do this, you can use the field Help by double-clicking on the **Number** column.     

## Note

In this tab, it is possible to insert/delete notes. To do this, use the ribbon bar buttons *New note* and *Delete note*. The **User** and **Insert date** columns are automatically filled. The **Confidential Info.** indicates that the Note must be available only to the Operator who inserted it.        

## Commercial Estimation (Stima commerciale)

This tab is activated after clicking the *Commercial Estimation* button on the ribbon bar. Based on the [Ticket Type (Tipo ticket)](/docs/configurations/tables/crm/tickets/ticket-type) being created and the associated [Template (Template)](/docs/configurations/tables/crm/tickets/template-ticket), a series of fields will be proposed, for example, the Descriptions. The user can modify all fields.       
The **Technical/Sales (Tecnico/Commerciale)** field is taken from the *Technical Estimation* tab.     
In the grid, it is important to check/modify the **Commercial quantity** column. This column displays the Quantity expected from the technical estimation, but can be increased/decreased by the sales staff, who will create the final estimation. This column will also populate the field below the grid: **Total quantity commercial**.       
Once the commercial estimation is completed, click the *End Commercial Estimation (Fine stima commerciale)* button on the ribbon bar: this will block the editing of the Estimation/Effort tab again. To modify it again, click the *Cancel commercial estimation* button.       
Once the commercial estimation is also completed, the offer can be created through the *Create Offers from ticket* procedure.    

## Offers (Offerte)

In this tab, any Offers linked to the ticket and created through the *Create Offers from ticket* procedure are reported.