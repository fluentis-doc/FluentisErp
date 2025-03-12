---
title: Payroll import parameters
sidebar_position: 3
---

## Table Data (Dati tabella)

The parameters listed are necessary for managing the import functionality of accounting entries related to employee payroll through .csv files (Zucchetti format) acquired via the bizlink service.

Here, the **Day**, the **Template**, and the **User** to be used for creating the entries are set for each company.

**Allow table lookup**: (always set) makes Fluentis search for the mapping (transcoding) of accounts in the specific transcoding table below;
 
**Group by cost center / Group by Employee (Raggruppa per centro di costo / Raggruppa per Dipendente)**: indicates to Fluentis what type of file to expect (from Zucchetti, a file grouped by cost center or by employee can be created (they differ by the number and position of the columns to be read)).

Note: The last two fields are not related to this payroll import, but to the import for controlling, which is currently executed via import from Excel sheet and so they are not actually used.

## Payroll Import General Information (Generalità Importazione paghe Bizlink)

The functionality provides for the creation of a folder monitored by the Bizlink service where to deposit the files to be imported, achieving automatic processing and importation. 

Although it is possible to create the folder monitored by the bizlink connector for import directly on the server, for security reasons it is preferable to avoid granting users access to the server and set the import folder on a client PC.

## Configuration of the local Bizlink service and other necessary parameters

1. Create a bizLink user in Arm (Bizlink Users form) that will be used on the interested PC for import.
Example: Name: PC-Paghe Password: xxxxx Connection Grid: Check "It is active" on the actually used production connection.

2. Manually install bizLink on the PC.
   Run the command executed from cmd as an administrator.

`net_dir>\InstallUtil "<fluentis_dir>\Tools\Service\Fluentis.BizLink.Tools.Service.exe"`

Where net_dir is the installation folder of the .net framework located in %WINDIR%\Microsoft.NET\Framework64\framework version, while fluentis_dir is the installation folder of Fluentis.

![](/img/it-it/configurations/parameters/finance/payroll1.png)

3. Copy the files from the bizLink bin folder from the server to the client (every version update will need to be done) except for the log file (highlighted in the image below)

![](/img/it-it/configurations/parameters/finance/payroll2.png)

The standard path is: C:\Program Files (x86)\Fluentis\Fluentis\Bin\Tools\Service

4. Modify the connector named: Zucchetti_PaymentData as follows (specifically adding the bizlink user - PC-Paghe - just created in the Identifier field)

![](/img/it-it/configurations/parameters/finance/payroll5.png)

The file paths (for example C:\Temp\Bizlink\Incoming ; C:\Temp\Bizlink\Processed ; C:\Temp\Bizlink\Failed) must be present on the user’s PC, and the Fluentis pool must be able to read from that folder. If it doesn't work, try giving everyone full control permissions.
Also set an identifier to be referenced later in the bizLink config file.

5. Adjust the bizLink config file with user, pwd, server, and identifier. The file is named Fluentis.BizLink.Tools.Service.exe.config. 
Modify it as shown in the image below.

![](/img/it-it/configurations/parameters/finance/payroll4.png)
 
In this way, the bizLink service installed on the PC will only work with that connector.

6. Start bizLink.

## Management of the file to be imported (Gestione del file da importare)

![](/img/it-it/configurations/parameters/finance/payroll7.png)

Pay attention to the fact that currently in Fluentis it is required to format month/year while usually the file is exported from Zucchetti as a full date; it needs to be changed in Excel until it is revised.

![](/img/it-it/configurations/parameters/finance/payroll8.png)

It is then necessary to manage the transcodings of the company and the chart of accounts.

![](/img/it-it/configurations/parameters/finance/payroll9.png)

And eventually the cost centers.

Finally, the PAYROLL IMPORT PARAMETERS need to be managed as specified above.