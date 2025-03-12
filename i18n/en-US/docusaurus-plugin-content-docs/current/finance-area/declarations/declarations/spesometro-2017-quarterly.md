---
title: Quarterly Spesometro 2017 (Spesometro 2017 trimestrale)
sidebar_position: 8
---

From this form, it is possible to search for the quarterly Spesometro processing that has already been processed and is present in the database, or proceed to create a new Spesometro.

**PREMISE:**

The obligation of the Spesometro was introduced by Article 21 of DL May 31, 2010, no. 78, which provided for the telematic submission of all active and passive operations relevant for VAT purposes (sales and purchases of goods, services rendered and received).

Since 2017, the decree 193/2016 has introduced the obligation of quarterly communication.

**Documents that do not fall under the quarterly Spesometro:**

- Data from electronic invoices, issued and received, that have transited through the Exchange System (SdI) do not need to be communicated. If not all issued and received invoices transit through the SdI, the taxpayer may limit themselves to electronically sending the data of the other invoices, or, if it is more convenient, may still send data regarding all invoices, including electronic ones;

- Data contained in documents other than invoices (such as fuel card data) should not be communicated.

**PRELIMINARY ACTIVITIES:**

In order to proceed with the correct generation of the file (in xml format to be uploaded to the specific portal for exchanges with the Revenue Agency), it is necessary to prepare some basic archives within the Fluentis tables.

- **[Document Types (Tipi Documento)](/docs/configurations/tables/general-settings/document-types)**

- **[VAT Rates/Methods (Aliquote/Modalità Iva)](/docs/configurations/tables/finance/vat-rates)**

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image01.png)

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image02.png)

Within the above tables, it is particularly important to manage the fields **Public Administration Code (Codice P.A.)** (the same ones managed for electronic invoicing towards Public Administrations - as it is a similar exchange system).

The coding to be adopted has been published by the Revenue Agency in the technical documentation for creating the telematic file, and we report it below:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image03.png)

**OPERATIONAL GUIDELINES:**

**All operations that involve VAT movements are included in the declaration: if necessary (e.g., fuel cards), these can be manually deleted from the declaration.**

Intracommunity invoices will be automatically entered based on the VAT movement type of the reason used, with document code TD10 (intracommunity credit notes remain with code TD04): if services are involved, it will be necessary to intervene in the line of the declaration with a manual correction.

The VAT rates used in reverse charge purchases, from the year 2021, should no longer be sent with code N6 and therefore are no longer automatically filled with this exemption code (the automation remained active for previous years): however, the exemption code is available in the procedure for manual modifications.

The codes related to VAT collectability ([I] immediate VAT collectability, [D] deferred VAT collectability, [S] VAT with payment splitting (split payment)), are automatically assigned by the VAT movement type of the accounting reason.

The data on the deductibility of indicated VAT, always specified as non-mandatory in the track, are not managed.

**FILE CREATION PROCEDURE:**

**Header Data:**

Indicate the year and quarter for which to generate the file.

The other header fields should only be filled if the obligated subject for communicating invoice data does not coincide with the VAT taxpayer to whom the data refer.

They should NOT be filled if the transmitting subject:

- coincides with the VAT subject to whom the data refer;

- is linked by assignment to the VAT subject to whom the data refer;

- is an intermediary.

**File path:** allows specifying a local path for saving the file to be sent electronically. The file will still be saved in the Fluentis documentation and a copy can be downloaded to the local PC.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image04.png)

**Invoice Data:**

Press the **Calculate** button in the ribbon bar to retrieve the VAT data for the quarter, which will be divided in the section for issued invoices and in those received.

At this stage, the system will check if there are more documents than the Ministry has allowed to be included in each file (1000 clients and 1000 invoices for each for issued ones, 1000 suppliers and 1000 invoices for each for received ones).

If this limit is exceeded, Fluentis will notify the user that it will be necessary to create another declaration to include the remaining documents (N files can be sent).

Additionally, the file name will already be encoded according to the required nomenclature (File name and Progress Number fields).

The "File identifier" field is used to store the receipt that the ministry's telematic system will return: once this field is stored, the section will no longer be editable.

Since it is possible to indicate up to 1000 documents for each counterparty, the lines are numbered sequentially in order of the counterparty's VAT number, with the original VAT register protocolization being of no relevance.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image05.png)

**DTE / DTR SECTION (issued / received invoices)**

The data to be sent for the DTE section and customers are as follows (from 2018):

- Country code of the VAT number (editable in the grid)
- VAT number (or alternatively the tax code) (VAT number editable in the grid)
- The relevant sub-account (and the connected registry) can be modified in the grid

For each document, the following must be indicated:

- Document type code (taken from the Document Types table but editable in the grid)
- Date and number of the sales document (editable in the grid)

In the grid below, the VAT data of the registration must be specified:

- Taxable amount
- VAT amount
- VAT percentage
- Exemption code (mandatory in case there is no VAT)

In this section, the data is detailed, and in the file, they will be grouped by percentage/exemption code.

**CORRECTIONS/CANCELLATIONS**

If it is necessary to send a correction for a document that has already been sent, a new declaration will need to be created: it is not allowed to enter more than one correction or cancellation in a file (i.e., a correction of DTE in its file, a correction of DTR in its file, a cancellation in the ANN section), so N declarations will need to be created.

To create a correction of an already sent registration, it is sufficient to create a new declaration and use the 'Manual entry of a correction' button to search for the registrations already sent for the indicated quarter.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image06.png)

Once selected from this search, Fluentis will report the line in the declaration, also filling in the file identifier and the progress number within the declaration:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image07.png)

It is also possible to fill these data manually and/or modify them. The cancellation section requires only the file identifier and the number to be canceled as highlighted below:

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image08.png)

**FILE CREATION**

Once the quarterly declaration is completed, it will be possible to proceed with the file creation by clicking the **Create file** button.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image09.png)

Once the operation is completed, the files will be attached to the declaration itself and will be downloadable from the documentation as visualized in the image below.

![](/img/it-it/finance-area/declarations/declarations/spesometro-2017-quarterly/image10.png)

**ERRORS IN THE TRACKING**

Files displayed as attached with the name ‘...Errors' are populated for internal control purposes and indicate possible errors in the data present in the declaration (missing VAT numbers, etc.).

**WARNING:** files containing errors represent a general indication and DO NOT replace the official control procedure of the Revenue Agency; this procedure can be freely downloaded from the website of the Revenue Agency. See the attachment to this article for that purpose.