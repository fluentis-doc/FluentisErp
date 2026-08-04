---
title: New Visit Report
description: Step-by-step guide to creating a new Visit Report in Fluentis ERP, with all form fields explained.
keywords: [Fluentis ERP, Visit Report, CRM, guide, procedure]
sidebar_position: 2
schema_type: HowTo
---

# Creating a new Visit Report<!-- Creazione di un nuovo Visit Report -->

The procedure for creating a new **Visit Report** allows you to define the characteristics of the visit made by the contact.

## Form structure<!-- Struttura della form -->

The form is divided into two parts: upper and lower.

### Upper part<!-- Parte superiore -->

The main fields are:

1. **Visit Report Type<!-- Tipo Visit Report -->**: allows you to indicate the type of Visit Report you are entering; it refers to the table of the same name (*Code<!-- Codice -->* and *Description<!-- Descrizione -->*).  
2. **Number<!-- Numero -->**: number automatically assigned by Fluentis.  
3. **Date<!-- Data -->**: date of the visit, set to today's date.  
4. **Subject<!-- Oggetto -->**: reason for the visit to the customer.  
5. **Note<!-- Nota -->**: free field for additional notes.  
6. **Contact/Customer<!-- Contatto/Cliente -->**: indicates the CRM contact or the customer; the field changes label and object depending on the flag (*CRM Contact<!-- Contatto CRM -->* or *Fluentis Account<!-- Conto Fluentis -->*).  
7. **Participants<!-- Partecipanti -->**: indicate the people who participated in the meeting.  
8. **Agent<!-- Agente -->**: reference to the agent master data; indicate the agent present at the meeting, if available.  
9. **Visit report status<!-- Stato Visit report -->**: indicates the status of the visit report, for descriptive purposes.
The items in the list can be configured in the dedicated Visit report status<!-- Stati Visit report --> table.

### Lower part<!-- Parte inferiore -->

The lower part of the form has two tabs.

#### Document<!-- Documento -->

In this tab, the actual report created during the visit is generally filled out. This document can contain various information, depending on the type of visit carried out. For this reason, in the grid you can select a [Template](/docs/crm/budget-marketing-automation/template/template-search) to use as the basis of the report and fill it in with the customer's information. Therefore, it is necessary to create the various templates in advance to have them available during the visit and be able to use them. 
On the right side, the selected Template will be displayed and can be filled in. It is also possible to enter the necessary data for sending the document by email, in the Recipient information section.            
For template management, the following sections are available:     
- **Email**: this tab contains:     
> - *Print<!-- Stampa -->*: allows you to print the worksheet;
> - *Print preview<!-- Anteprima di stampa -->*: allows you to preview the worksheet on screen;
> - *Save<!-- Salva -->*: allows you to save a copy of the document;   
> - *Send<!-- Invia -->*: sends the email; 
> - *Undo*: deletes the last change to the template;
> - *Redo*: restores the last deleted change to the template.

- **Home**: this tab contains buttons for basic text editing functions of the Template, such as font size, lists, text alignment, etc.
It recalls the basic functions of the most common text editors, such as Microsoft Word.

- **Insert**: this tab contains buttons to insert certain elements into the Template:
> - *Insert table<!-- Inserisci tabella -->*: allows you to insert a table into the worksheet;
> - *Align Image<!-- Allinea Immagine -->*: allows you to insert an image into the body of the document;
> - *Image<!-- Immagine -->*: allows you to insert an image into the body of the document;
> - *Bookmark*: allows you to insert a bookmark within the template;
> - *Hyperlink*: allows you to insert a link to a web page or a bookmark in the template;
> - *Header*: allows you to insert the template header;
> - *Footer*: allows you to insert the template footer;
> - *Page Number*: used to indicate the page number in the header or footer of the Template;
> - *Page Count*: used to indicate the total number of pages in the template in the header or footer;
> - *Text Box*: allows you to insert a text box in the Template;
> - *Symbol*: used to insert a special symbol within the Template.

- **Merge data**: in this tab you will find the buttons needed to manage and insert merge data, i.e., dynamic fields taken from the datasource set in the template, possibly filtered by parameters.
> - *Insert Merge Field*: This button allows you to insert merge data by selecting them from a list based on the Data Source referenced by the Template;
> - *View Merged Data*: this button allows you to hide/show the merge data inserted in the template;
> - *Show All Field Codes*: this button is used to show the codes of the fields used as merge data;
> - *Show All Field Results*: this button is used to show the result of extracting the fields used as merge data;
> - *First Record*: allows you to move to the first record extracted from the merge data;
> - *Previous record*: allows you to move to the previous record compared to the current one extracted from the merge data;
> - *Next record*: allows you to move to the next record compared to the current one extracted from the merge data;
> - *Last Record*: allows you to move to the last record extracted from the merge data.

#### Extra Data

In this tab you can manage the Extra Data.

#### Attached documents<!-- Documenti allegati -->

In this tab you can view the attached documents. To attach documents, you can proceed in two ways:

- by using the Documents toolbar button, you can choose whether to attach a document already coded in Fluentis or to create a new Document to attach.
- by right-clicking directly in the grid and selecting Attach file, you create a new Document to attach.


In the ribbon bar there is the **Insert appointment in calendar<!-- Inserisci appuntamento in calendario -->** button.


By using this feature, an appointment linked to this visit report will be inserted into the Fluentis calendar of the currently logged-in user. 
A window will open allowing you to change the calendar resource, as well as specify date-time and additional data and notes. 
If an appointment already exists, confirmation will be requested to generate a new calendar appointment.