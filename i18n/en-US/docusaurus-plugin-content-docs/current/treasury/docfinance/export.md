---
title: Exports 
sidebar_position: 2
---

From this screen, data exports for DocFinance are executed, with three different options.

**Export nomenclature**: activating this flag will compel the system to create the alignment file for the chart of accounts and registries. Once set, the subsequent related fields will be activated, where you can set the file name and the shared creation path (both pieces of data will be stored to be reused in future creations). The first field ‘Last export date' allows you to define the reference date for exporting only modified/added data in the chart of accounts: it is allowed to clear this date in order to create a complete file of all chart of accounts/registries settings (this clearly has a significant impact on the time needed for alignment between the two systems).

**Automatic creation of cash flow**: with this flag, the program will create a new cash flow in the corresponding module before proceeding with the potential data export of the next point. The creation will happen with the default parameters of the ‘Automatic cash flow creation' procedure: please refer to the specific documentation for further details.

**Export cash flow**: with this flag, the system will create the file of financial flows, both as accounting items and forecasts. When the flag is set, the subsequent flag ‘Deregulation from nomenclature/payment types' and the fields for the names and shared creation path of the file (both stored) will be activated. Specifically, depending on whether the ‘Deregulation from nomenclature/payment types' flag is set or not, the logic for assigning deregulation changes: if it is not set, deregulation for suppliers will be determined by the payment type and for customers from the registry; if it is set, deregulation will derive from the customer/supplier registry, and if not set here, it will be calculated with fixed codes (‘01' for bills, or ‘01' – ‘02' – ‘03' – ‘04' depending on whether the difference between expiration date and current date returns an overdue date, a difference of less than 30 days, from 30 to 90, or over 90).

At the bottom of the screen, the user who will execute the file creation needs to be defined. This user must have access to the shared folders set for file creation.



| Function | Meaning |
| --- | --- |
| Save | With this button, you can save the settings to be proposed by default in the screen. |
| Export | Executes the creation of the file(s) as set in the screen. |