---
title: Configuration of the Connection to FBH (Configurazione della connessione a FBH)
sidebar_position: 2
---

At the time of subscribing to the electronic invoicing service, a login and password identifying the personal connection to Fluentis BHUB will be provided. It is therefore necessary to configure the management system to independently and silently manage communication with the SdI both during sending and receiving status notifications. In the **Electronic invoice configuration** table, it is necessary to enter the login and password for accessing the Fluentis Business HUB system in the *User* and *Password* fields, respectively. This information is UNIQUE for the installation, so it does not depend on any companies that may be present.

FOR THOSE WHO HAVE NOT SUBSCRIBED TO THE FE CONTRACT WITH FLUENTIS, THEY MUST ENTER THE CODE XXXXXXXX AS OPERATOR AND THE PASSWORD XXXXXXXX.

Since the SDI also provides a test environment to send test documents without passing through official channels, if the credentials entered correspond to a test account (not to be confused with the official one that will have a different username and password), it will be necessary to activate the flag "It is test (E’ test)" (NOT MANAGED FOR THOSE WHO HAVE NOT SUBSCRIBED TO THE FE CONTRACT WITH FLUENTIS).

After entering the access credentials, it is also possible to verify if the connection responds correctly using the command **Check connection** located in the ribbon bar. Pressing the **New company configuration** button enables the entry in the underlying grid that must be filled out to configure the sending of invoice documents in electronic format for each company, defining the following values for each:
- **Company and Company Description (Società e Descrizione società)**: select the company to enable from the automatically proposed list by positioning directly on the grid field.
- **Signed Electronic invoice**: the checkbox must be set if one intends to manage the digital signature on the sales invoice documents transmitted to the SdI.
- **Attachment in Electronic invoice**: the checkbox enables the function to generate the PDF file related to the entered invoice and includes it in the XML file sent to the SdI. If set, it also requires the mandatory setting of the subsequent value Transformation and Description: the field must indicate the Fluentis Transformation intended for generating the PDF file to be attached to the XML file.
- **Trasformation Arm for pdf file creation**: this field requires specifying the ARM transformation to be used when sending the invoice in electronic format with an attached PDF file.
- **File creation folder (Cartella di creazione file)**: this field is optional and can be filled in if one wishes to keep a copy of the generated XML files in an external file system folder to Fluentis. The invoice XML file will still always be available for viewing and consultation in the various functions of managing invoice documents and in the document archive. The file is copied to the indicated folder at the same time as its creation in the sales document management procedures. It is possible to enable the folder search dialog by double-clicking the left mouse button in the corresponding field.
- **Signed file folder**: if the choice to externally sign the invoice files is adopted, this field must indicate the folder from which Fluentis can acquire the digitally signed invoice files through the upload procedure. It is possible to enable the folder search dialog by double-clicking the left mouse button in the corresponding field.

In the same dialog, by positioning on an existing row and using the **Delete the Company Configuration (Elimina la configurazione della Società)** button, the selected row will be removed.