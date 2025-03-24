---
title: METEL Import (Importazione METEL)
sidebar_position: 6
---

**BizLink** allows for the import of Metel price lists, providing two flows for this import. The only operation that the user needs to perform is to configure the connector to carry out the import.

:::danger[File Length (Lunghezza del file)]
Fluentis only supports 2 types of files, those with 178 and 233 characters!
:::

:::danger[File Format (Formato del file)]
Fluentis only supports the ANSI format of the file!
:::

:::tip[Process for Incorrectly Formatted Files (Processo file in formato non corretto)]
If the file does not meet the two characteristics mentioned above, BizLink will move the file to the processed files folder and will not write anything in the incoming documents as it "rejects" the file.
:::

### Prerequisites (Prerequisiti)
- BizLink service installed and working
- Valid Metel price list (file in txt format)

:::tip[Official Metel Site (Sito ufficiale Metel)]
For any doubts regarding the file, refer to the site: https://listinipubblici.metel.it/ where there is the "Verify Price List" feature.
:::

### Parser and Flow View (Visione Parser e Flussi)

:::note[Note (Nota bene)]
This section presents and explains the flows already present in Fluentis. The next section explains how to configure the connector and perform the import.
:::

#### Parser

Metel has a parser called FluentisEDIExtendedParser

![](/img/it-it/applications/bizlink/import-metel/1.png)

Inside it, there are two parser objects, one for the 178-character file and one for the 233-character file.

![](/img/it-it/applications/bizlink/import-metel/2.png)

Taking the parser object for the 233-character file as an example, we see how each field is imported and in what position it should be. This can be useful in case of import errors, as knowing the property that has the error allows us to understand its position in the file.

![](/img/it-it/applications/bizlink/import-metel/3.png)

#### Flow (Flusso)

Metel also has a flow called METEL

![](/img/it-it/applications/bizlink/import-metel/4.png)

This flow has a flow operation inside called FLOW_OP_MetlPriceList

![](/img/it-it/applications/bizlink/import-metel/5.png)

This flow operation has 2 flow documents differentiated by the number of characters in the file

![](/img/it-it/applications/bizlink/import-metel/6.png)

The flow document then defines which parser object to use to process the file

![](/img/it-it/applications/bizlink/import-metel/7.png)

### Creating the Connector (Creazione connettore)

Go to Bizlink - Connectors and press new

![](/img/it-it/applications/bizlink/import-metel/8.png)

Then set Code, Description, Connector Type = Folder Monitor, Partner, Flow, Flow Operation, Flow Document (based on the number of characters in the file you want to import), Managed by the authentication service. Finally, set the folder paths:
- Incoming: where the file will be placed for processing
- Processed: where the file will be moved by the service if imported correctly
- Failed: where the file will be moved by the service if it has errors

![](/img/it-it/applications/bizlink/import-metel/9.png)

:::tip[Managing Both Files (Gestione di entrambi i file)]
To manage both types of files, create two different connectors with the two different flow documents. Additionally, the Incoming folder must be different. Failed and Processed can also be the same folders.
:::

### Test Import (Test import)

:::danger[Attention (Attenzione)]
In case of errors or re-importing the same file, it is necessary to restart the BizLink service as it cannot process a document with the same name to avoid duplicates. Restarting unlocks this issue.
:::

To perform a test import, ensure that the service is active and copy the .txt file into the incoming folder and wait a few seconds. In the incoming documents of BizLink, a line with the import result will be present.

![](/img/it-it/applications/bizlink/import-metel/10.png)