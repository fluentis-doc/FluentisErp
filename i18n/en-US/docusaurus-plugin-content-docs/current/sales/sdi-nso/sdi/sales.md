---
title: Management of Active Cycle 
sidebar_position: 6
---

The management of an electronic invoicing document for the active cycle according to current regulations involves the following phases.      

*INVOICING TO PUBLIC ADMINISTRATION*            

- generation of the sales document
- sending to SdI (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- invoice validation by SdI (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
> - the invoice is correct; the delivery procedure begins; the Public Administration is correctly identified, and the SdI starts the delivery procedures:
> > - in the case of successful transmission, the SdI sends a delivery receipt of the electronic invoice to the transmitting party;
> > - if, due to technical causes not attributable to the SdI, transmission to the receiving party is not possible for 5 days, the SdI sends a notification of failed delivery to the transmitting party; it is the responsibility of the SdI to contact the recipient to ensure timely resolution of the issues preventing transmission, and once the issue is resolved, to proceed with sending; if, after 10 days from the date of notification of failed delivery, the SdI has not managed to deliver the electronic invoice to the receiving party, it forwards to the transmitting party a final confirmation of the transmission of the invoice with delivery impossibility
> > - the receiving party, within 15 days from the first communication sent to the transmitting party, more precisely from the date of the delivery receipt or from the date of transmission of the failed delivery notification, can send a notification of acceptance/refusal (notification of client outcome) of the invoice
> > - if within the 15-day period the SdI receives no communication, the SdI sends a notification of expiry of deadlines to both the transmitting and receiving parties. This notification serves solely to inform the two parties that the SdI considers the process related to that invoice closed. The notification of expiry of deadlines indicates that the Interchange System has successfully concluded the management (receipt and delivery) of the invoice subject to the notification. Therefore, after such notification, the SdI will discard the invoice, if resent, and any correspondence related to it. 
> - the invoice is incorrect, and therefore a notification of rejection is sent to the issuer, and the invoice must be reissued.

*INVOICING B2B/B2C*

- generation of the sales document
- sending to SdI (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- invoice validation by SdI (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
> - the invoice is correct: the delivery procedure begins, and two scenarios can arise:
> > - the delivery channel for the recipient is recognized, and the invoice is delivered
> > - the delivery channel for the recipient is not recognized, and therefore a copy of the invoice is saved in the recipient's reserved area, who will be notified by the issuer of the invoice issuance
> > - the recipient is a private party, so a copy of the invoice is saved in the recipient's reserved area, who will be notified by the issuer of the invoice issuance
> - the invoice is incorrect, and therefore a notification of rejection is sent to the issuer, and the invoice must be reissued
> > - the delivery channel for the recipient is not recognized, and therefore a copy of the invoice is saved in the recipient's reserved area, who will be notified by the issuer of the invoice issuance
> > - the recipient is a private party, so a copy of the invoice is saved in the recipient's reserved area, who will be notified by the issuer of the invoice issuance
> - the invoice is incorrect, and therefore a notification of rejection is sent to the issuer, and the invoice must be reissued.

In Fluentis, it is possible to generate documents for the active sales cycle and, for customers for whom electronic invoicing has been properly set up in the registration parameters, prepare the XML file to send to the SdI. Each phase provided by regulatory requirements CORRESPONDS to a DOCUMENT STATUS in Fluentis.         
If the communication with the Fluentis Business Hub is correctly configured in Fluentis (in the Electronic Invoicing Configuration section for the Company), it will also be possible to send the file directly to the SdI and receive the related notifications; otherwise, once the XML file related to the invoice is generated, it will be possible to download the file and proceed to its sending via other channels external to Fluentis.            
The types of documents for which it is possible to manage XML file generation and sending to SdI in Fluentis (also provided by current regulations) are:
- Sales invoice
- deposit/advance on invoice
- deposit/advance on bill
- credit note
- debit note
- Invoice         

The generated XML file will contain the encoding related to the document type and, regardless of the type, the operational methods of generating the XML file and any sending to SdI are the same for all file types. In the generated XML file:
- for parties identified/residing within the territory of the state, the recipient of the document is identified via recipient code or PEC or electronic address 
- for Public Administrations, the recipient code is represented by the IPA code identifying the office responsible for receiving the invoice.            

These settings are entered in the CLIENT registration of each subject recorded in Fluentis.

## Unique Document Numbering

For the correct and unique numbering of sales documents, necessary to avoid the rejection of documents identified by the SDI as already submitted, it is advisable to define a unique numbering for each Sales Invoice Document Type that allows for the correct identification of the document, for example, by setting a suffix “/B” after the numbering. It is reminded that to manage the document numbering for sales invoices, it is necessary to access the function Tables > Sales > Invoice Numbering.           
To set the invoice (or delivery note) number with the strikethrough (for example, 1/A, 2/A.... 1/B, 2/B), set in the Numbering table the formula 
**number.ToString()+"/B"**            

Then in the report, replace the standard field (e.g., Number) with a calculated field (e.g., CalcNumber) where the following expression is included:         
**Iif(IsNullOrEmpty([FormattedNumber]), [Number], [FormattedNumber])**          

WARNING: it works only in the report; in the forms, the normal number will continue to be displayed without the strikethrough, but in the XML file, the unique number will be reported correctly.            
In summary, to manage the issuance and transmission of electronic invoices in Fluentis, the steps to follow are:
- Setup of Contact Registrations
- Management Table Setup
- ISSUANCE AND TRANSMISSION OF SALES DOCUMENTS using the functions provided and described in the paragraph MODIFY AND MANAGE THE DOCUMENTS' STATES

## Issuance and Transmission of Sales Documents

The management of sales documents to be transmitted in electronic format to the Interchange System begins with the creation of the document from the active cycle of Fluentis in the UNEXAMINED state: menu Home > Sales > Invoices > New.
Once the document is created, the generation of the corresponding XML document and the transmission of the documents to the SdI (via Fluentis Business Hub) occur through the manual management of the document's state relating to Electronic Invoicing by the operator in the designated section: 
until reaching the “To be shipped” state, which places the document in a “shipment queue” and, through a scheduled BizLink process, sends them to Fluentis Business Hub for management. From this moment on, the status of documents will be automatically updated by silent automatic processes, and no manual intervention by the operator will be possible until the receipt of the rejection, delivery, or failed delivery notification. The statuses of documents and delivery notifications will always be visible in the SALES INVOICE SEARCH form and in the SdI DOCUMENTS REGISTER function.

## How to Modify and Manage Document States

After generating the sales document, the modification of document states can be managed individually for each document or en masse through the CHANGE STATE procedure, within 4 functionalities:
1) individually from the management form of the individual invoice (Invoice form) with the function provided in the Ribbon menu in the Electronic Invoicing section
2) en masse from the SALES INVOICE SEARCH form with the function provided in the Ribbon menu in the Electronic Invoicing section after selecting the documents to manage
3) individually from the SdI DOCUMENTS REGISTER function with the function provided in the Ribbon menu 
4) en masse from the state management function provided in the Ribbon menu of the BizLink Application – SdI Documents – OUTGOING SALES DOCUMENTS from Bizlink, after selecting the documents to manage        
The monitoring of various document states and their management is possible at any time by accessing the SEARCH view, accessible from the Sales menu > Invoices > Invoices;
or from the BizLink Application, by accessing the SdI Documents > OUTGOING SALES DOCUMENTS section.

## Sales Invoice Search

The “Sales Invoices” search view accessible from the Home menu > Sales > Invoices > Invoices, contains information related to the states and management of documents sent via Fluentis to the Fluentis Business Hub and the related status notifications.           
The columns from which it is possible to monitor the document status, both when it is still managed by the operator and when sent and thus managed by Fluentis Business Hub, are:
- *SdI Status*: contains the description of the document status, reporting both the internal management status of Fluentis and the status reported by Fluentis Business Hub and acquired directly from SdI (see the paragraph DOCUMENTS' STATES).
- *SdI File Name*: the name of the file that is created when the document advances to the GENERATED state; in the original format or subsequently after the application of the digital signature, it represents the invoice file to be sent to SdI (File name). 
- *SdI Id*: the unique identifier that the SdI assigns to the document upon receipt (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- *SdI Receipt Date*: the date on which the interchange system acquired the document sent to it. This information is obtained from the receipt notification that the SdI issues upon receiving the shipment and before proceeding with the formal checks of the file (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- *Closure Date*: the date of closure of the management flow (e.g., document Delivered) (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- *Last Event Date*: the date of the last state change that occurred on the file, either manually or as a result of the progression of processing on the SdI            

The fields related to the management of the electronic document can also be used as filters for document searches from the Electronic Invoice Status expander in the filter panel.
From the Sales Invoice search view, it is possible to select a single invoice or invoices with the same SdI Status and modify their processing status using the Status function in the Electronic Invoicing section of the ribbon menu.
In the case of selecting a single invoice document and right-clicking on the corresponding file name column of the XML file and selecting the Open Form action, or selecting the SdI Document Register action in the Electronic Invoicing section of the ribbon menu, the SdI Document Register is accessed, where it is possible to view the generated XML document and the management history of the sales document.

## SdI Document Register

The SdI Document Register function allows you to view the processing status of documents for sales invoices managed and to view 
- the generated XML file
- the attached PDF file (if requested as an attachment to the XML document)
- notifications sent by Fluentis Business Hub and acquired directly from the SdI (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)        

In management, it is also possible to monitor the latest events related to the management of the file and the history of actions performed. 
The SdI Document Register is accessible:
- from the Sales Invoice search view by selecting an invoice file
- from the management view of the individual Invoice document 
- from the SdI Documents > Outgoing Sales Documents function           

The SdI Document Register view consists of a summary header section and two panels:
- Attachments
- SdI Document Register             

In the header section, the invoice document data is summarized:
- Electronic invoice status: the status of the document concerning its submission to the SdI via Fluentis Business Hub (for details on the types of document states see the DOCUMENTS' STATES paragraph)
- Invoice type: the type of document sent – the Fluentis code 
- Date, Number, Customer: the date, the document number, and the customer to whom it is addressed
- SdI File Name: the name of the XML file that is created when the document advances to the GENERATED state; in the original format or subsequently after the application of the digital signature, it represents the invoice file to be sent to SdI (for details on the compilation of the file name see the File Name paragraph).
- SdI Id: the unique identifier assigned by the SdI to the invoice file upon receipt. This identifier will be used by the SdI for all subsequent notifications sent to the transmitter (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- SdI Receipt Date: the date the SdI receives the invoice file and sends the Receipt Notification to the transmitter (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- Customer Receipt Date: coincides with the delivery date of the document to the customer or the date of “making available” of the document in the reserved area of the customer. This latter case refers to the shipments for which the SdI cannot correctly identify the client/recipient (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- Last Event Date: refers to the last action taken by the operator or the last notification received from the SdI during the document management process.

## ATTACHMENTS Panel 

In the ATTACHMENTS panel, all documents related to the electronic management of the invoice are presented, starting from the XML file of the document to the last notification received from the SdI. By clicking on the corresponding document in the document grid, the document is displayed on the right side of the view with a style sheet that interprets the invoice or notification XML file and displays it in a simplified user format, for example for the XML file:
The document grid in the left section of the view presents the following information for each file:
- *Date*: the date of acquisition of the attachment
- *File content type*: a technical identifier related to the stylesheet adopted to display the XML file 
- *Name and Description*: the description of the displayed XML file        

If attachments were included in the generated XML file, at the bottom of the displayed XML file, a grid appears with a list of attachments to the document. By clicking on the name of the attached file, it is possible to download the file and save it for uses external to management. The files attached to the document states can be downloaded through the Download Attachment function present in the ribbon menu.

## SdI DOCUMENT REGISTER Panel 

The SdI Document Register panel represents the history of all phases of management of the electronic document, from the moment of its generation in XML format to the moment of delivery or potential rejection.
In the event grid, for each event, the “Transition” is represented, i.e., the state change that occurred on the document, and where manual intervention is foreseen, the name and date of the operator who executed the transition. The state of the document associated with the generation of the XML file and the states acquired from the SdI for which a notification is expected also link to the corresponding XML file.         
By clicking on the event related to an XML file, the file is displayed using a stylesheet that allows for the visual representation of the XML file in a simplified user format, such as for a receipt notification file. The Download content from the Register function allows for the download of the selected and displayed file. 

## Outgoing Sales Documents

In the BizLink application, it is possible to access the SdI Documents – Outgoing Sales Documents menu and view the overall status of all sales documents prepared from the active flow, manage their status, and view the history of state advancements. The *Outgoing Sales Documents* dialog is divided into two sections, one of the header containing filter fields usable to filter the documents, and a result grid of the conducted search.         

The values presented in the grid are:
- *SdI Status*: the status of the document regarding its submission to the SdI via Fluentis Business Hub (for details on the types of document states see the DOCUMENTS' STATES paragraph)
- *Type*: the reference code for the type of sales document
- *Date, Number, Customer*: the date, the document number, and the customer to whom it is addressed
- *Customer Receipt Date*: the delivery date of the document to the customer or the date of “making available” of the document in the reserved area of the customer. This latter case refers to shipments for which the SdI cannot properly identify the client/recipient (NOT HANDLED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS)
- *SdI File Name*: the name of the XML file created when the document advances to the GENERATED state; in the original format or subsequently after the digital signature is applied, it represents the invoice file to be sent to SdI (for details on the compilation of the file name see the File Name paragraph).
- *Last Event Date*: refers to the last action taken by the operator or the last notification received from the SdI during the document management process.           

By clicking on the expander of an invoice, the detail of transitions related to the document statuses opens, and the individual transitions that occurred during the document management are displayed along with their execution date and the name of any file generated by the state change.

The documents presented in the SdI Document Register grid are all those created from the active management flow of invoice documents, regardless of their status; double-clicking on a row of an invoice opens the SdI Document Register panel where it is possible to view the documents created during the management of the invoice file and the history of transitions.         

In the SdI Document Register grid, by selecting an invoice document or multiple invoice documents in the same state, it is possible to manage the document processing status using the Status combo in the ribbon menu and selecting the new document status.
By selecting an invoice from the grid, using the Open Document function from the ribbon menu opens the invoice document.