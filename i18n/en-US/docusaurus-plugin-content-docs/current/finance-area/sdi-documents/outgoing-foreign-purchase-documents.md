---
title:Outgoing foreign purchase documents
sidebar_position: 5
---
:::tip[Note]
**Compliance met** regarding purchases from the current submission to the ES of [**Selfbilling**](/docs/finance-area/e-invoice/auto-invoice/auto-invoice-generation).
As for sales, the direct sending of invoices is currently being carried out (see below).
:::


The regulations required sending to the Revenue Agency also the data related to the transactions of goods/services PERFORMED and RECEIVED by subjects NOT identified/non-resident in the territory of the State.

- For **ISSUED** documents, it is possible to use the same format provided for Italian electronic invoices; alternatively, they can be sent with the format provided for foreign purchase documents as outlined in the following point.

- For sending to the ES of purchase documents from foreign suppliers, a **[dedicated format](/docs/finance-area/declarations/declarations/electronic-invoice-for-foreign)** is provided.

The digital signature is mandatory for both types of files.

The sending of these files to the ES is managed in Fluentis through the status change operations of the documents.

The XML document is then transmitted to the ES, which checks and acquires it, returning notifications regarding any rejection due to non-compliance of the file or of successful acquisition.

**From this form, it is possible to manage individually for each document or massively for multiple documents simultaneously, the status change for sending to the ES following the same format as Italian invoices.**

In the Outgoing Foreign Purchase Documents form, all files produced by the ledger records related to this type of occurrence are displayed. The form is divided into an upper section where the selection filters managed files are presented, including:


- From date / To date of receipt:
- From date / To date of customer receipt:

In the results grid, the data regarding the managed or to-be-managed files are displayed:


- **ES Status**: includes the description of the document's status, reporting both the internal management status of Fluentis and the status reported by Fluentis Business Hub, directly acquired from the ES.
- **ES File Name**: the name of the file that is created when the document is advanced to the GENERATED status; in the original format or after the application of the digital signature, represents the invoice file to be sent to the ES.
- **ES Id**: the unique identifier that the ES assigns to the document upon receipt.
- **Date of last event**: the date of the last status change that occurred on the file, either manually or as a result of the processing advancement on the ES.

In the ribbon menu, the functions for managing the selected document(s) are presented:

the button ![](/img/neutral/common/view.png) **View** allows you to view the document where you can see the events related to the generated XML file, download it, or modify its status:

![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image02.png)

- the button ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image03.png) **Download attachment** downloads the selected file to a chosen filesystem folder.

- the button ![](/img/it-it/finance-area/sdi-documents/outgoing-foreign-purchase-documents/image04.png) **Open document** opens the ledger record related to the selected file.