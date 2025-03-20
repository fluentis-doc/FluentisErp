---
title: Management of the Passive Cycle 
sidebar_position: 7
---

NOT MANAGED FOR THOSE WHO HAVE NOT SUBSCRIBED TO THE FE CONTRACT WITH FLUENTIS

In Fluentis, once the Fluentis Business Hub service is configured, it is possible to import passive invoices from suppliers that transit through the Interchange System. Currently, the acquisition method described below refers to invoices from suppliers who are identified/resident in the state for which the invoices transit through the Interchange System. For the communication to the SdI of purchase invoices from foreign suppliers, please refer to the section Sending to the SdI of purchase/sale invoices for foreign suppliers/customers (subjects NOT identified/resident in the territory of the state).

To receive the invoices, it is necessary to communicate your recipient code to the suppliers, a code provided by Fluentis after the activation of the Fluentis Business Hub service, in order to allow the vendor to correctly compile the XML files of the documents.

The configuration of Fluentis requires setting the same information needed for managing the active cycle, as detailed in the chapter Configuration of connection to Fluentis Business Hub. Once the communication with the Fluentis Business Hub service is established, the invoices of the passive cycle will be sent to the subscribed service, and through BizLink, the XML invoice files and related attachments will be acquired in Fluentis. The accounting registration or the recording of the purchase document in the passive flow is the responsibility of the user who, once the corresponding XML electronic file is identified, can match it with the registering or document generated.

The user, once the documents imported from the BizLink process have been searched and viewed, can select one document at a time and match it to the accounting registration/purchase document/compensation document present in Fluentis.

## Operational Flow of Purchase Documents

The electronic purchase document, once imported into Fluentis, assumes the status of UNASSIGNED and can only transition to the RECEIVED state, as a result of matching with the corresponding accounting element, or return to the UNASSIGNED state: For further information regarding the meaning of each single state, please refer to the sections related to the management of the various DOCUMENT STATES.

## Modify and Manage Document States

To modify and manage the purchase document, it is necessary to use the Incoming Purchase Documents function in the BizLink application – SdI Documents.

At the time of access to the function, the *Incoming Purchase Documents* screen opens, divided into a header section with filter fields for searching documents and a results grid. In the ribbon menu:
- The *Open document* button is enabled only if the selected document is in the RECEIVED state and opens the accounting registration/purchase document/invoice compensation to which the XML file is matched.
- The *View* button allows you to view the selected XML file by opening the SdI Documents Register.
- The *Download attachment* button executes the download of the selected file in the Attachments panel to a chosen filesystem folder.

In the upper section of the screen, there are filter fields that allow filtering the results grid displayed in the grid below with some detailed information:
- *Sdi Status*: the status of the document once acquired in Fluentis:
> - *Not assigned*: the invoice has not yet been matched to an accounting registration or to an invoice issued from the passive cycle or document issued to a recipient.
> - *Received*: the invoice has been matched.
- *Type*: the reference code of the sales document type.
- *Doc. def. date, Doc. def. number*: the date and number of the acquired document.
- *Supplier*: the issuer of the document.
- *Sdi file name*: the name of the XML file created when the document is advanced to the GENERATED state; in its original format or subsequently after the application of the digital signature, it represents the invoice file to send to the SdI (for details on the compilation of the file name, see the Paragraph File Name).
- *Last event date*: refers to the last action performed by the operator or the last notification received from the SdI during the document management process.

Imported documents can be matched to accounting elements present in Fluentis by operating from the functions:
1) Incoming Purchase Documents of the BizLink application – SdI Documents
2) From the accounting registration of the purchase document.
3) From the purchase document management form.
4) From the compensation management form.

Let’s analyze these four methods below.

1) **Match the XML document from the import function**

Using the *Incoming Purchase Documents* function of the BizLink application – SdI Documents, it is possible to match the XML document to an accounting registration/purchase document/compensation starting from the document imported into Fluentis. 
After searching and identifying the file to match, it is possible to select the file from the SdI Documents Register grid by double-clicking on the document row or with the VIEW button in the ribbon menu. The SdI Documents Register opens with the details of the acquired file, and from this screen, it is possible to:
- *Match the file to a purchase document* recorded in the Purchases section of Fluentis, using the *Link to purchases* function.
- *Match the document to an existing accounting registration*; by using the *Link to *registrations* function, it is possible to select the accounting registration corresponding to the document, choosing it from the list of accounting registrations.
- *Match the document to a professional compensation*; selecting the *Link to recipients* action from the ribbon menu allows you to select the document related to the compensation corresponding to the imported XML file, choosing it from the list of compensations present in Fluentis.

At the end of the matching done by one of the functions described above, the document is marked with the Received status, with the date and time of the matching indicated alongside the Document received Transition. The document can also be modified back to the Not assigned status if it is necessary to revert to the previous state.

2) **Match the XML document from the purchase accounting registration**

To match an accounting registration to an XML file acquired in Fluentis, it is necessary to access the accounting registration from the Administration – Registrations – Registration menu and search for the accounting registration to manage. In the Accounting Registration Search form, some columns related to file information management have been added:
- *Sdi Status*: accommodates the description of the document's status, reporting both the internal management status of Fluentis and the status reported by Fluentis Business Hub and directly acquired from the SdI (see the paragraph DOCUMENT STATES).
- *Sdi file name*: the name of the file created when the document is advanced to the GENERATED state; in its original format or subsequently after the application of the digital signature, it represents the invoice file to send to the SdI (File Name).
- *Sdi Id*: the unique identifier that the SdI assigns to the document at the time of receipt.
- *Data reception Sdi*: the date on which the interchange system received the document sent to it. This information is obtained from the reception notification issued by the SdI following the receipt of the shipment and before proceeding with the formal checks of the file.
- *Closing date*: the date of closing the management flow (e.g., document Delivered).
- *Last event date*: the date of the last state change that occurred on the file, either manually or as a result of the advancement of processing on the SdI.

By selecting the accounting registration to match and changing the electronic invoice status to RECEIVED, the list of acquired files from the SDI to be matched opens, and it will suffice to select one of the proposed files to create the correct matching. From the same screen, accessing the “SdI Documents Register,” it is possible to view the actions performed on the document and, using the *Print* function, print the matched XML document. Using the "Download attachment" or “Download the content of the register” functions, download the selected XML file in the “Attachments” panel or in the “SdI Documents Register” panel.

3) **Match the XML file from the purchase document management Purchases – Purchase Invoices – Purchase Invoices**

To match the XML file to a purchase document, it is necessary to access the function Purchases – Purchase Invoices, search for the files to match in the management grid, possibly also using the new filters related to Electronic invoicing, and view the status of the document in the columns designated for file management in the SdI. By selecting a document in the UNASSIGNED state to match with the XML file and changing the status in the ribbon menu to RECEIVED, a dialog opens for the selection of the imported purchase files, from which it is necessary to select the file to match.
The status of the document is thus modified to RECEIVED, with the possibility of restoring the previous state by always acting from the ribbon menu. From the same screen, accessing the SdI Documents Register allows you to view the actions performed on the document, print the matched XML document with the Print function, and download the selected XML file using the Download attachment or Download the content of the register functions, respectively, in the "Attachments" panel or the "SdI Documents Register" panel. 
The matching of the received XML file to the purchase invoice is also possible by directly accessing the purchase document and selecting the XML file to be matched from those proposed by the Received status change function in the ribbon menu.

4) **Match the XML document from the compensation management function Administration – Compensations – Compensations**

The imported purchase XML file may refer to documents issued by professionals and registered in Fluentis in the compensation management. To match the file to the existing registration, it is necessary to access the menu Administration – Compensations – Compensations, search for the document to be matched in the management grid, possibly also using the new filters related to Electronic invoicing, and view the status of the document in the columns designated for file management in the SdI.

## Sending to the SdI of purchase/sale invoices for foreign suppliers/customers (subjects not identified/resident in the territory of the state)

The current regulations regarding communications to be sent to the Revenue Agency require that taxable persons for VAT also communicate data relating to the cession of goods/services performed and received by subjects NOT identified/not resident in the territory of the State. While for the ISSUED documents, it is possible to use the same layout provided for Italian electronic invoices, for the sending to the SdI of purchase documents from foreign suppliers, a specific layout is required. The signature for both types of files is mandatory.

The sending to the SdI of these files is managed in Fluentis through the state change operations of the registered documents; the XML file generated following the registration of the purchase or sale operation assumes the status of NOT EXAMINED and can subsequently undergo the same state transformations provided for the XML files transmitted to the SdI for sales documents (see the paragraph DOCUMENT STATES). The XML document is then transmitted to the SdI, which checks it and acquires it, returning notifications regarding any rejection due to file non-compliance or delivery confirmation.

For sales documents intended for non-resident/non-established customers, the electronic sending flow to the SdI will never generate non-delivery due to incorrect recipient identification because the purpose of this sending is solely to communicate to the Revenue Agency the relationship with the foreign customer, and it is not the SdI's job to deliver to the recipient: the documents issued and intended for foreign customers must be sent in the usual manner. The sending of these documents to the SdI must be carried out by the last day of the month following the date of issuance of the document. For this reason, the flow of states regarding these files will be the same, whether they pertain to XML sales invoices or purchase invoices.

For details regarding individual states, please refer to the paragraph DOCUMENT STATES IN FLUENTIS. In Fluentis, it is possible to generate the file relating to sales invoices intended for EU or non-EU customers:
- From the management of the active cycle as described in the paragraph Management of the active cycle (subjects identified/resident in the territory of the state and Public Administration), delegating the creation of the XML file to the registration settings related to electronic invoicing and managing the creation and sending of the XML file as a sales invoice intended for an Italian customer. The sending flow, managed by the Electronic invoicing section, will automatically recognize the sales document intended for a foreign entity and will therefore require the mandatory application of the signature.
- From the function Electronic invoicing with non-residents described below, which retrieves active invoices from the accounting registrations entered and not relating to electronic invoices already sent to the SdI from the management of the active cycle.

For the correct management of sales documents, in both cases it will be necessary to configure the customer registry by setting the CODE TYPE field with the choice “SdI Channel” and in the RECIPIENT CODE field the sequence of 7 times the character “X” (“XXXXXXX”). For details of the specific registration, refer to the paragraph Setting Contact Registries.
The file related to purchase invoices from foreign subjects is possible in the Electronic invoicing function with non-residents described below.

## Electronic Invoicing with Non-Residents

The function Administration > Declarations > Electronic invoicing with non-residents generates XML files related to purchase and sale documents that can be sent to the Revenue Agency individually, in replacement of the spesometro compliance. Accessing the function displays a screen divided into an upper header section, in which a series of filters can be set to use for viewing and managing the XML files to be sent.
The function, through the TYPE filter and the ELECTRONIC INVOICE STATUS filter, searches for items related to purchases or sales for which it is possible to manage the advancement of states individually or massively for documents with the same SdI Status from the results grid.
The results grid displays a series of columns intended for monitoring and managing files regarding sending to the SdI, detailing:
- *Sdi Status*: accommodates the description of the document's status, reporting both the internal management status of Fluentis and the status reported by Fluentis Business Hub and directly acquired from the SdI (see the paragraph DOCUMENT STATES).
- *Sdi file name*: the name of the file created when the document is advanced to the GENERATED state; in its original format or subsequently after the application of the digital signature, it represents the invoice file to send to the SdI (File Name).
- *Sdi Id*: the unique identifier that the SdI assigns to the document at the time of receipt.
- *Data reception Sdi*: the date on which the interchange system received the document sent to it. This information is obtained from the reception notification issued by the SdI following the receipt of the shipment and before proceeding with the formal checks of the file.
- *Closing date*: the date of closing the management flow (e.g., document Delivered).
- *Last event date*: the date of the last state change that occurred on the file, either manually or as a result of the advancement of processing on the SdI.

In the ribbon menu, in the section dedicated to electronic invoicing, using the *SdI Documents Register* function allows you to view the actions performed on the selected document, using the *Print* function to print the matched XML document, and with the *Download attachment* or *Download the content of the register* functions to execute the download of the XML file.

By double-clicking on a row from the results grid, you access the details of the selected accounting registration. In the accounting registration, it is possible to view the processing status of the file regarding sending to the SdI.

Sales documents managed by the electronic invoicing function for non-residents can be searched by checking Sales in the Type panel:
and using the Ribbon Menu's Search button to start the search for all accounting registrations related to sales reasons linked to VAT movement types for intra-CEE sales or extra-CEE sales, or those that have populated the “Partner Account” field in the Parameters panel.

Purchase documents managed by the electronic invoicing function for non-residents can be searched by checking Purchases in the Type panel:
and using the Ribbon Menu's Search button to start the search for all accounting registrations related to purchase reasons.
The purchase document from a foreign supplier must be acquired and recorded in accounting using the accounting reasons that:
- Are linked to the VAT PURCHASE INTRA-CEE Movement Type, or 
- Are linked to the VAT Extra-CEE Purchases Movement Type, or
- Have populated the Partner Account field in the Parameters panel.

At the end of the search, the results grid is populated, from which it is possible, using the state change function in the electronic invoicing section, to manually advance the states up to the expected status “To be sent,” which requires inserting the file into the queue for sending to the Fluentis Business Hub service.

If the Fluentis Business Hub service is not configured in the setup, it will be possible to access the *SdI Documents Register* function and download the generated XML file to use externally to Fluentis.

The XML file created during the state management by the operator must be signed; therefore, if the Fluentis Business Hub service is active, a copy of the file will be created in the folder indicated in the settings related to the Configuration of connection to Fluentis Business Hub, where it is necessary to indicate a support folder for storing the XML files to be signed and subsequently retrieving the signed files.

At the end of the sending to the SdI, the file may assume two states:
- *Non-compliant*: the file contains reports for which it cannot be accepted by the SdI. In these cases, it is necessary to access the SdI Documents Register and view the reason for non-compliance in the SdI Documents Register panel, correct any anomalies, and resubmit the re-generated file.
- *Delivered*: the file has been correctly sent and acquired by the SdI. In this case, it will be possible to view the delivery outcome by accessing the SdI Documents Register panel for the selected file.

Outgoing documents can also be managed from Outgoing Foreign Documents accessible from Applications > BizLink > SdI Documents. In this function, it is possible to monitor and modify the status related to accounting registrations for purchases/sales for foreign subjects.

In the Outgoing Foreign Purchase Documents Form, all files produced from the Accounting Registrations related to this type of event are displayed. The form is divided into an upper section where the selection filters for the managed files are exposed, including:
- From date/ To date of receipt
- From date/ To date of customer receipt

In the results grid, the data regarding the managed or to be managed files is displayed:
- *Sdi Status*: accommodates the description of the document's status, reporting both the internal management status of Fluentis and the status reported by Fluentis Business Hub and directly acquired from the SdI (see the paragraph DOCUMENT STATES).
- *Sdi file name*: the name of the file created at the moment the document is advanced to the state GENERATED; in its original format or subsequently after the application of the digital signature, it represents the invoice file to send to the SdI (File Name).
- *Sdi Id*: the unique identifier that the SdI assigns to the document at the time of receipt.
- *Last event date*: the date of the last state change that occurred on the file, either manually or as a result of the advancement of processing on the SdI.

In the ribbon menu, functions for managing the selected document or documents are presented:
- The View button allows you to view the SdI Documents Register where you can see the events related to the generated XML file, download it, or modify its status.
- The Download attachment button executes the download of the selected file to a chosen filesystem folder.
- The Open document button opens the accounting registration related to the selected file.

## Accounting Registrations

Accessing the menu point Administration > Registrations > Registration, the Accounting Registrations Search form displays, in the filter section, an expander related to the possible information linked to the electronic invoice status, referring to documents that have an interaction with the Interchange System.

In the ribbon menu, in the section dedicated to electronic invoicing, using the *SdI Documents Register* function allows you to view the actions performed on the selected document, using the *Print* function to print the matched XML document and with the *Download attachment* or *Download the content of the register* functions to execute the download of the XML file.
The results summary grid displays some columns in which the status and outcome of the documents regarding their transmission to the SdI are reported:
- *Sdi Status*: accommodates the description of the document's status, reporting both the internal management status of Fluentis and the status reported by Fluentis Business Hub and directly acquired from the SdI (see the paragraph DOCUMENT STATES).
- *Sdi file name*: the name of the file created when the document is advanced to the GENERATED state; in its original format or subsequently after the application of the digital signature, it represents the invoice file to send to the SdI (File Name).
- *Sdi Id*: the unique identifier that the SdI assigns to the document at the time of receipt (NOT MANAGED FOR THOSE WHO HAVE NOT SUBSCRIBED TO THE FE CONTRACT WITH FLUENTIS).
- *Data reception Sdi*: the date on which the interchange system received the document sent to it. This information is obtained from the reception notification issued by the SdI following the receipt of the shipment and before proceeding with the formal checks of the file (NOT MANAGED FOR THOSE WHO HAVE NOT SUBSCRIBED TO THE FE CONTRACT WITH FLUENTIS).
- *Closing date*: the date of closing the management flow (e.g., document Delivered) (NOT MANAGED FOR THOSE WHO HAVE NOT SUBSCRIBED TO THE FE CONTRACT WITH FLUENTIS).
- *Last event date*: the date of the last state change that occurred on the file, either manually or as a result of the advancement of processing on the SdI.