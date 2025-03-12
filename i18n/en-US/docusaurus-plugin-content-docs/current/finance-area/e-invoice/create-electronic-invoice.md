---
title: Creation of Electronic Invoice (Creazione fattura elettronica)
sidebar_position: 2
---

This page explains:

 - **The creation of a B2B/PA electronic invoice**  
 - **Management of digital signature**  
 - **Procedure for creating the invoice for those who do not subscribe to the FBH service**  

To create a Business to Business electronic invoice and for the Public Administration, it is necessary first to create a sales invoice using the normal Fluentis procedures, after which you proceed to generate the corresponding XML file using the appropriate workflow.

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image01.png)

The generation of the XML file occurs through state transitions.

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image02.png)

A newly created invoice has the status "**Not examined**", the next status "**Control of the document**" not only identifies that the document has been created but also performs automatic checks to verify the presence of specific minimum data.

From this status, it is possible via the "**Generate File**" state to generate the XML track of the invoice.

Note the two specific states "**Cancel document**" and "**Exclude Document (Escludi documento)**", the first means that the document should not be sent to the final customer but will remain valid for VAT purposes, the second relates to documents that, by their nature, should not be included in the management flow of electronic invoicing.

After the "generated" state, it is possible to assign the status "**To deliver**", automatically this status will cause the Fluentis Business HUB to process the file and transmit it to the SDI.

Once the document is sent to the FBH service, the status will automatically change first to "**In Fluentis Business Hub**", and subsequently to the status "**In ES**", when the server has forwarded the file.

To monitor these states, simply press the button ![](/img/neutral/common/search.png) to refresh the form.

Note: upon moving to the "To be sent" status, it will no longer be possible to go back or modify the invoice, and one must wait for the outcome notification from the SDI.

**DIGITAL SIGNATURE MANAGEMENT (GESTIONE FIRMA DIGITALE)** If the file needs to be digitally signed, activating the "Digital signature" flag at the customer registry or in the company table will display an additional status after the file generation phase.

With the generated status, a copy of the file has indeed been created directly in the external folder set at the time of electronic invoicing configuration, and it will be sufficient to process it with the signing software.

Thus, the status "**Sign Document (Firma documento)**" is only responsible for reimporting the signed document in the new format (p7m).

**PROCEDURE FOR THOSE WHO DO NOT SUBSCRIBE TO THE FBH SERVICE (PROCEDURA PER COLORO CHE NON SOTTOSCRIVONO IL SERVIZIO FBH)** For those who rely on external tools to send invoices to the SDI, it will simply be necessary to download the e-invoice in XML format to then transmit it via the chosen channel.

Using the button ![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image04.png), it is possible to retrieve the XML file already in the "Generated" state, but it is recommended to change it to the "To be sent" state to prevent any modifications to the file.