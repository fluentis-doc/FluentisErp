---
title: Exports 
sidebar_position: 2
---

From this screen, data exports for DocFinance are executed, with three different options.

**Export nomenclature**: activating this flag will compel the system to create the alignment file for the chart of accounts and registries. Once set, the subsequent related fields will be activated: 
- **Last export date** allows you to define the reference date for exporting only modified/added data in the chart of accounts: it is allowed to clear this date in order to create a complete file of all chart of accounts/registries settings (this clearly has a significant impact on the time needed for alignment between the two systems)
- Operation Date, it is the reference date of the export that is launched.

**Automatic creation of cash flow**: with this flag, the program will create a new cash flow in the corresponding module before proceeding with the potential data export of the next point. The creation will happen with the default parameters of the *Automatic cash flow creation* procedure: please refer to the specific documentation for further details.

**Export cash flow**: with this flag, the system will create the file of financial flows, both as accounting items and forecasts. When the flag is set, the subsequent flag *Deregulation from nomenclature/payment types*.

Depending on whether the *Deregulation from nomenclature/payment types* flag is set or not, the logic for assigning deregulation changes: if it is not set, deregulation for suppliers will be determined by the payment type and for customers from the registry; if it is set, deregulation will derive from the customer/supplier registry, and if not set here, it will be calculated with fixed codes (‘01' for bills, or ‘01' – ‘02' – ‘03' – ‘04' depending on whether the difference between expiration date and current date returns an overdue date, a difference of less than 30 days, from 30 to 90, or over 90).

:::note[Note]
For Cash flow settings, only two types of financial flows are needed, such as

| Code | Description | DocFinance Code |
| :-- | :-: | --: |
| 1 | Items | CO |
| 2 | Accounting | CO |

But it is possible to create additional types of forecast flows (OC/OF for example) to be passed as for the analyses of DocFinance.

:::



| Function | Meaning |
| --- | --- |
| Save | With this button, you can save the settings to be proposed by default in the screen. |
| Export | Executes the creation of the file(s) as set in the screen. |


:::important[Preliminary Configurations]
Data exchange occurs via positional .txt files according to the technical specifications of DocFinance, files that are deposited in external folders (local or network). 

The export creation and import reading occurs through Bizlink.

Check for the presence of, and create if necessary, the specific Bizlink connectors.

![](/img/it-it/treasury/docfinance/docconn1.png)

Check and set in the details of the connectors the local folder (existing on the server or PC) or the network path, e.g., \NomePc\NomeCartella.

This folder must be accessible for reading and writing also by DocFinance. We recommend creating a folder dedicated exclusively to this data exchange.

The files exported from Fluentis all have the same file name, therefore each export (launched manually by the user) will overwrite the previous file. 

In import, however, it is BizLink that monitors the set folder and as soon as it detects a new file, it will take it to import: it must be a different folder from the one where we export.

Refer to the Bizlink documentation for specific service configurations (“Identifier” and management flag with authentication)

![](/img/it-it/treasury/docfinance/docconn2.png)

![](/img/it-it/treasury/docfinance/docconn3.png)

![](/img/it-it/treasury/docfinance/docconn4.png)

**WARNING:**

In the import connector visible in the previous image, the tag ***filemask*** has been set as it is usually set by default in DocFinance: “ritcoge.txt”. 

Thus, only files with this name will be searched for and imported from the folder.

The field can be set specifically according to the configurations made on DocFinance for export.

Since the file mask is the filtering rule for identifying the file name to import, if the folder is used exclusively for DocFinance files, wildcard characters can also be used in defining the rule, creating a generic rule "*asterisk dot asterisk*" that will capture any file name of any extension.

Another example: if in export from DocFinance the configurations require adding letters or numbers to better identify the exported file (month, period, or initials of the company), the file mask can be set, for example, like this: "RitCoge*.txt".


**The Fluentis import folder, monitored by the Bizlink service, must be configured in terms of read and write rights so that it can be accessible by the Bizlink user (configured on ARM). Otherwise, the import cannot take place.**

For example, it could be configured with "everyone" rights.
:::