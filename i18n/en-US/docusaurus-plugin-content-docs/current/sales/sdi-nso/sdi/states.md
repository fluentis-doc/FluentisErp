---
title: Document Statuses in Fluentis 
sidebar_position: 5
---

The sending and receiving of electronic documents for both active and passive cycles requires the management, by the user, of a series of operational STATES that define the management flow of the invoice document, from its generation to the sending to the Fluentis Business Hub for actual transfer to the SdI. States can be managed individually, so within the management of a single document, or in bulk mode; each state can allow for a transition to a PREVIOUS management state or to a NEXT one. The actions and management of electronic documents may be subject to operational restrictions that can reserve the management of document states only to predefined roles and/or users, appropriately configuring the ribbon menu of related actions. 

The current regulations regarding communications to be sent to the Revenue Agency require that VAT liable entities report data related to the transfer of goods/services performed (Management of the active cycle) and RECEIVED even from NON-identified/non-resident parties in the territory of the State using the same format provided for Italian electronic invoices. If the same format provided for Italian electronic invoices can be used for ISSUED documents, a specific format is required for sending purchases from foreign suppliers to the SdI, and the signature for these files is mandatory. 

In Fluentis, the generation of the XML file of this type is possible following the accounting registration of the received document and the subsequent management, within the accounting registration, of the generation of the XML file and its sending to the SdI with the same state change actions provided for the active cycle, or through the management of files from the Electronic Invoicing function with non-resident parties.

The meaning of the various states in detail:

| Document State | Description | Possible Actions |
| :-- | :-- | :-- | 
| Not Examined  | The document has been generated and no actions have yet been taken regarding the management of the electronic document | *Next*: Checked, Canceled, Excluded. *Previous*: Manual deletion of the document from management | 
| Checked | The document has undergone preliminary checks by the operator | *Next*: Generated, Canceled, Excluded. *Previous*: Not examined (go back to the initial document state) | 
| Generated  | The XML file related to the electronic document has been created. From this point on, it is possible to proceed with the subsequent states to send the file to the Fluentis Business Hub or download the XML file for external management. The document in this state can be accounted for | *Next*: Signed, To be sent, Canceled, Excluded. *Previous*: Checked | 
| Signed | The document has been externally signed with a Cades/Xades signature certificate and reimported into Fluentis in the new format | *Next*: To be sent, Canceled, Excluded. *Previous*: Generated | 
| To be sent | This state, to be used if the Fluentis Business Hub channel is correctly configured, queues the document in the list that BizLink should process for sending to SdI. FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS, THIS STATE CHANGE BLOCKS THE INVOICE FROM ANY OTHER ACTION | *Next*: NO MANUAL ACTIONS. The state is updated by Fluentis Business Hub NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS | 
| Canceled | The document should not be sent to the final customer but remains valid for VAT purposes | *Next*: NO MANUAL ACTIONS. *Previous*: Not examined | 
| Excluded | The document has been created but does not fall among those to be sent to the SdI (e.g., internal credit note or customer not resident in Italy and not subject to electronic invoicing with sending to SdI) | *Next*: NO MANUAL ACTIONS. *Previous*: Not examined | 
| Not Matched (Passive cycle) | The document has been received by the Fluentis Business Hub service and has not been matched to any accounting element (NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS) | *Next*: Received | 
| Received (Passive cycle) | The document has been matched to the accounting registration/purchase document/compensation document (NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS) | *Previous*: Not matched | 

If the sending is done via Fluentis Business Hub, after marking the created document with the state "To be sent," the subsequent states acquired directly from Fluentis Business Hub can be:

THESE STATES ARE NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FBH CONTRACT WITH FLUENTIS

| Document State | Description | Possible Actions | XML Notification from SDI |
| :-- | :-- | :-- | :-- |
| In Fluentis Business Hub | The document has been received in Fluentis Business Hub and is awaiting retrieval by the SdI | It is necessary to wait for feedback from the SdI that will verify and possibly retrieve the file | NO |
| In SDI | The document has been received by the SdI | *Next*: Non-compliant, Issued | NO |
| Non-compliant  | The document did NOT pass the formal checks required by the SdI and must be reissued. Subsequent state changes are MANUAL and the responsibility of the user | *Previous*: Not examined, Canceled, Excluded | YES |
| Delivered  | The document has been delivered to the recipient | The sending cycle is concluded | YES |
| Failed delivery (Mancata consegna) | The SdI was unable to deliver the document to the recipient and will make it available in its reserved area (e.g., due to unavailability of the electronic address or because such an address has not been indicated on the invoice) | *Next*: Customer notification | YES |
| Customer notification  | In response to the non-delivery by the SdI, a manual notification is made to the customer regarding the invoice. This state is MANUAL and the responsibility of the user | The sending cycle is concluded | NO |
| Document issued  (Only PA) | The document has been considered valid by the SdI, which proceeds with attempts to deliver to the public administration (PA) | *Next*: Delivered, Failed delivery | NO |
| Rejected  (Only PA) | The document addressed to the PA has been rejected by the Public Administration | *Previous*: To be examined | YES |
| Approved  | The document addressed to the PA has been accepted by the Public Administration | The sending cycle is concluded | YES |
| Accepted for expiration  | If within the 15-day deadline from receipt of the invoice the SdI receives no communication, the SdI sends a notification of EXPIRATION OF TERMS to both the transmitting and receiving parties | | YES |

The status of documents sent to the Fluentis Business Hub is updated in silent mode by some automatic procedures provided in BizLink. The following paragraphs describe the details of each managed state.

## Document State NOT EXAMINED 

At the moment of creating the new sales document or an accounting registration of purchases for non-resident entities, in the ribbon menu, in the Electronic Invoicing section, the proposed state is “Not Examined,” meaning it has not yet been evaluated by the operator for sending to SdI. Once the document is entered and saved with the related information, it is possible to proceed by changing the state of the document to one of those provided for the NOT EXAMINED state, namely:
- *Controlled*: verified and ready to be handled in electronic format
- *Cancelled*: the invoice should not be sent to SdI but must be maintained as valid for accounting and VAT records
- *Excluded*: the inserted document should not be sent to SdI 

## Document State CHECKED 

The document/registration in the CHECKED state has been validated by the operator and can be processed for the subsequent phases for processing and sending to SdI, or can be returned to the NOT EXAMINED state for any modifications or additions. The subsequent processing states of the document for sending to SdI or for exclusion from sending can be:
- *Generated*: the XML file related to the inserted document is created and prepared for shipment 
- *Cancelled*: the invoice should not be sent to SdI but must be maintained as valid for accounting and VAT records
- *Excluded*: the inserted document should not be sent to SdI 

## Document State GENERATED 

The transition of invoice documents or accounting registrations to the GENERATED state involves the simultaneous creation of the XML document according to the technical specifications provided by the Revenue Agency for the type of document under management. During this phase, various checks are performed regarding the presence of mandatory information for compilation, and if such information has not been accurately recorded in the registry section, an error message regarding the missing data will be issued. 

The invoice document/credit note... in the GENERATED state also acquires the internal management status PRINTED, and therefore it is possible to proceed with the accounting of the document from this moment forward. The accounting registration in the GENERATED state creates the corresponding XML file. 

The generated XML file is saved in the document management system of Fluentis and is thus always retrievable from the various functionalities that allow access and from the **ES document log** function provided in the ribbon menu of the various functionalities. 

The XML file in the Generated state can be downloaded and managed for sending with external tools to Fluentis or can be sent to the Fluentis Business Hub through the management of one of the operational states provided. If the management of electronic invoicing documents includes the handling of signatures, the following is also included in the management states: 

If the signature management is not provided, the management states are:
- *Controlled*: I change the state of the document to revert to the previous Checked state
- *Cancelled*: the inserted or registered document should not be sent to SdI but must be maintained as valid for accounting and VAT records
- *Excluded*: the inserted document should not be sent to SdI 
- *To deliver*: the document is added to the list of documents to be sent to the Fluentis Business Hub
- *Signed*: the flow for assigning this state searches, in a previously configured path, the signed file corresponding to the XML file generated by the procedure. This state is visible ONLY if the check “Signed Electronic Invoicing” is selected in the contact registry (Contact Registry Settings) or in the Electronic Invoicing Configurations of the company (Configuration connection to Fluentis Business Hub) and is, according to current regulations, an OPTIONAL state for sales documents issued to parties residing in Italy but is MANDATORY for documents issued to non-resident, non-established, non-identified entities in Italy. 

Before proceeding to change the status to SIGNED, it is necessary to sign the documents in the GENERATED state:
> - if the *Folder for creation of signature files* field in the *Electronic invoicing configuration of the company* has been correctly set, every time the XML file is generated, Fluentis saves a copy in the indicated path. If this field has not been configured correctly, the XML file can be downloaded from the *SDI Document Register* function using the Attach Download action in the ribbon menu and save the file in a convenient folder on the FileSystem.
> - proceed to sign the file using any signature software provided, which allows for the application of a digital signature in Cades or Xades format (as required by the technical specifications) and ensuring that the signed file is saved in the folder indicated in the Electronic Invoicing Configurations in the Signed Files field.
> - Change the status of the document to SIGNED: the procedure will automatically retrieve the signed file from the folder indicated in the previous step and incorporate it into the Fluentis procedural flow. If sent to the Fluentis Business Hub, this file will be the one transmitted to the SdI.

## Document State SIGNED 

The document in the SIGNED state can be downloaded and managed externally from Fluentis, or sent to the Fluentis Business Hub for sending to the SdI. 
To download the signed document, it is possible to access the “SDI Document Register” function and execute the download in the Attachments panel via the “Download Attachment” action in the ribbon menu or from the SDI document register panel via the “Download the content of the register” action. 
To proceed with the management of the document, it is possible to select one of the proposed states:
- *Generated*: cancels the signing operation of the file and returns to the GENERATED state of the XML file
- *To deliver*: the document is added to the list of documents to be sent to the Fluentis Business Hub
- *Cancelled*: the document or accounting registration does not refer to events to be sent to SdI but must remain valid for accounting and VAT records
- *Excluded*: the inserted document/accounting registration should not be sent to SdI 

## Document State CANCELED 

The document/accounting registration in the CANCELED state is manually set by the user when the document is relevant for VAT and accounting purposes but should not be included in the management cycle of the Interchange System: an example might be the invoice issued from the active Fluentis cycle which receives a notification of Rejection from the Interchange System, and therefore, when the document is already recorded in accounting, it is necessary to proceed with:
- the cancellation of the sent invoice, to prevent the document from being forwarded in any shipping cycle,
- the registration of a valid credit note for accounting purposes only, which should not be transmitted to the SdI and which will therefore have the status of EXCLUDED,
- the issuance of a new document with a numbering that refers to the initial one, to be sent again to the SdI.

If the document is in the Canceled state but it is necessary to manage the document again by returning to the initial state, it is possible to change its status to NOT EXAMINED and proceed with modifications to the original document.

## Document State EXCLUDED 

The State of the document "Excluded" is manually set by the user and pertains to documents that, by their nature, should not be included in the management flow of electronic invoicing for the Interchange System. Some examples of documents in this state:
- Internal credit notes related to invoices that have been rejected by the SdI and that need to be reissued.
- Documents issued to foreign/non-resident parties for which one does not intend to manage sending through the processing states provided for electronic invoicing to SdI.

If the document is in the Canceled state but it is necessary to manage the document again by returning to its initial invoice state, it is possible to change its status to NOT EXAMINED and proceed with modifications to the original document.

## Document State TO BE SENT and IN FLUENTIS BUSINESS HUB 

Documents generated from the active cycle of Fluentis and ready to be sent to the SdI must be marked with the state TO BE SENT: this state, to be used if the Fluentis Business Hub channel is correctly configured, queues the document in the list of documents that BizLink should process for sending to SdI. No state changes are provided in this condition because the document, inserted in a "sending queue" of BizLink, will be sent to the Fluentis Business Hub for transmission to the SdI through automatic processes that are executed at regular time intervals. 

Once the document is sent to the Fluentis Business Hub service, the state automatically changes to IN FLUENTIS BUSINESS HUB, and the columns relating to the information of the transfer completion are automatically filled:
- *ES status*: reflects the description of the document's status, indicating both Fluentis's internal management status and the status reported by Fluentis Business Hub and acquired directly from the SdI (see the paragraph on DOCUMENT STATUSES).
- *ES file name*: the name of the file that is created when the document is forwarded to the GENERATED state; in the original format or subsequent to the application of the digital signature, it represents the invoice file to be sent to SdI (File Name).
- *Sdi Id*: the unique identifier that the SdI assigns to the document at the time of receipt.
- *ES receive date*: the date on which the interchange system received the document sent to it. This information is retrieved from the receipt notification that the SdI provides following the receipt of the shipment and before proceeding with the formal checks of the file.
- *Closing date*: the date the management flow is closed (e.g., document Delivered).
- *Last event date*: the date of the last status change that occurred on the file, either manually or as a result of processing progression on the SdI.

## Document State IN SDI

THIS STATE IS NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS

The document is automatically marked by BizLink processes with the state “IN SDI” when the shipping to the SdI has occurred and the receipt notification has been sent to the Fluentis Business Hub, as shown in the following example: 
At the same time as the recording of the SdI notification, the columns in the Sales Invoices form are filled with:
- *Sdi Id*: the unique identifier that the SdI assigns to the document at the time of receipt.
- *ES receive date*: the date on which the interchange system received the document sent to it. This information is retrieved from the receipt notification that the SdI issues upon receipt of the shipment and before proceeding with the formal checks of the file.

Accessing the SDI document register corresponding to the document, in the “SDI Document Register (Registro dei documenti Sdi)” panel corresponding to the Interchange System Transition, it is possible to view the receipt notification. In this state, it is not possible to manually intervene with a modification of the file, but it will be necessary to wait for the outcome notification from the SdI, which may be Non-compliant in case formal checks have not been passed or Issued in case the prescribed checks have been passed and therefore the SdI begins delivery procedures.

## Document State NON-COMPLIANT 

THIS STATE IS NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS

Documents marked with the NON-COMPLIANT state have been rejected by the Interchange system following the formal checks performed at the time of receipt. In this case, the rejection notification will also state the reason for the refusal, and the document, if not yet accounted for, must be reissued with the same number and date with the appropriate correction of the information within 5 WORKING days from the rejection date. 

In the sales invoice form grid, corresponding to the non-compliant document, the Last Event Date column is updated with the date and time of the Rejection notification received from the SdI. 

Accessing the SDI document register of the selected document, in the SDI document register panel, the date and time of the event is displayed in the row corresponding to the Non-compliant Document Transition, and the rejection notification with the reason is shown. It is possible to manually change the status of the document depending on the actions one intends to take following the rejection:
- NOT EXAMINED: marking the document with this state indicates a return to the initial pre-processing state. Effectively, this state allows for the necessary modifications to the document in order to correct the notifications indicated by the SdI. In this case, the document must be reissued with the same number and date. *Note: if the document has already been accounted for, the PRINTED check on the document will not be automatically removed; it is necessary to delete the corresponding accounting registration before making any modifications to the header or body of the document. If the modification pertains to the customer registry (e.g., incorrect recipient code), it will not be necessary to delete the accounting registration, but it will suffice to intervene on the registry information and regenerate the XML file.*
- CANCELED/EXCLUDED (ANNULLATA/ESCLUSA): the document is canceled, and then an internal variation note will be issued to adjust the accounting situation and subsequently marked as EXCLUDED. 

## Document State DELIVERED

THIS STATE IS NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS

When the SdI successfully completes the delivery of the document to the purchaser/client, it issues a delivery receipt to the seller/emitter, which indicates the date and time of delivery to the final recipient. In the summary form of Sales Invoices, the Last Event Date field reflects the date and time of the delivery receipt acquired from the SdI. By accessing the SDI document register corresponding to the document, in the “SDI Document Register” panel corresponding to the Delivered Document Transition, it is possible to view the delivery notification. From this state, no intervention can be made on the document, and the management flow is considered complete. THE CLOSING DATE IS NOT FILLED IN.

## Document State FAILED DELIVERY 

THIS STATE IS NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS

In cases where the SdI fails to deliver the document, for instance, due to unavailability of the electronic address for receipt or because the address was not specified in the invoice (recipient code 0000000), the SdI:
- sends a notification of failed delivery to the seller/provider reporting the reason,
- makes the invoice available to the purchaser/client in their reserved area, or, in the case of a private individual, in a specific reserved area on the Revenue Agency website.

In these cases, the seller/provider must notify the client of the failed delivery and the availability of the invoice in their reserved area, starting from the date of "availability" identified by the SdI. In the summary form of Sales Invoices, the Last Event Date field reflects the date and time of the receipt.

By accessing the SDI document register corresponding to the document, in the “SDI Document Register” panel corresponding to the Failed Delivery Transition, it is possible to view the failed delivery notification and the date/time of the notification. When the document is in the FAILED DELIVERY state, it is possible to change its status to CUSTOMER NOTIFICATION, registering the moment when the operator notified the client recipient of the issuance of the document with the inability to automatically notify by the SdI.

## Document State CUSTOMER NOTIFICATION 

THIS STATE IS NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS

The sending of some documents to the SdI might not end correctly because the SdI itself cannot identify the recipient of the document, or because the document is intended for an end consumer. In such cases, the SdI notifies the failed delivery, and the seller/client must send the document to the final recipient using methods other than those of the SdI. When the documents from Fluentis are therefore in the “Failed Delivery” state, the operator can act and decide to send the document to the final recipient using other methods and then mark the document with the CUSTOMER NOTIFICATION state. Documents in this state can no longer be modified, and the Last Event Date column will show the date on which the notification action was performed. 

By accessing the SDI document register corresponding to the document, in the SDI document register pane, corresponding to the Manual Customer Notification Transition, it is possible to view the user who performed the operation and the date and time of the same. The management cycle of the document is concluded.

## Document State NOT MATCHED and RECEIVED 

THIS STATE IS NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS

The states of the document MATCHED and RECEIVED  are managed only for the passive cycle of purchase documents from entities that are residents/identified in the territory of the Italian State. The state identifies documents acquired from the Fluentis Business Hub service and not yet matched to an accounting registration or to a purchase document recorded in the Fluentis Purchases section or yet to a compensation. Or, XML purchases files matched to an accounting event or a document.

## Document State REJECTED (only for PA invoicing)

THIS STATE IS NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS

The state of the document REJECTED refers to the document intended for the Public Administration not accepted by it. The state is acquired directly from the Fluentis Business Hub if the receiving Administration decides to notify the rejection of the invoice through the SdI channel: it is up to the administrations to determine different transmission channels from that of the SdI. In these cases, the invoice in the REJECTED state may be CANCELED, EXCLUDED, or RETURNED TO BE EXAMINED.

In cases of invoice rejection, the Public Administration may,
- request the transmitting entity to reissue the same corrected invoice with the same number and date, and the rejected invoice is not accounted for, OR
- request a credit note and a new invoice if the previous invoice has already been accounted for.

It is specified that the transmission of the rejection by the PA through the Interchange System is at their discretion.

## Document State APPROVED (only for PA invoicing)

THIS STATE IS NOT MANAGED FOR THOSE WHO HAVE NOT SIGNED THE FE CONTRACT WITH FLUENTIS

The document state APPROVED refers to the document intended for the Public Administration accepted by it. The state is acquired directly from the Fluentis Business Hub if the receiving Administration accepts the submitted XML file. In these cases, the flow is considered concluded, and the closing date is filled in the document properties.

## Document State ACCEPTED FOR EXPIRATION (only for PA invoicing)

Electronic invoicing documents sent to the SdI and addressed to the Public Administration may acquire the ACCEPTED FOR EXPIRATION state from the SdI: this state refers to the condition in which the SdI delivered the invoice to the PA recipient, who within the deadline of 15 days from receipt does not send any communication to the SdI, neither regarding acceptance nor regarding rejection. 

In these cases, the SdI sends a notification of EXPIRATION OF TERMS to both the transmitting party and the receiving party. This notification serves solely to inform both parties that the SdI considers the process related to that invoice closed. The expiration terms notification indicates that the Interchange System has regularly concluded the management (receipt and delivery) of the invoice subject to the notification. Therefore, after this notification, the SdI will reject the invoice, if resent, and any communication related to it. The expiration terms notification has no implications for the verification of correctness and subsequent management of the invoice by the interested parties; that is, the Public Administration can still decide to reject the delivered invoice. The state is acquired directly from the Fluentis Business Hub, and in these cases, the document management cycle is considered concluded.