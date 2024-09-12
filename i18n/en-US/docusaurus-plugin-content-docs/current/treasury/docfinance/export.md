---
title: Export
sidebar_position: 2
---

Through this mask it is possible to perform data exports for DocFinance, with three different options.

**Export Register**: the activation of this flag will oblige system to create the allignment file of chart of account and registers. Once having set this, it will be possible to activate following fields, where to set the file name and share creation path (both data will be recorded in order to be proposed again at the following creation). The first field 'Last Export Date' enables the user to determine the reference export date of edited/added data on chart of accounts: it is possible to delete this date in order to create a complete file of all settings of chart of accounts/registers (this is very important, above all as regards the necessary allignment times between two systems).

**Automatic Cash Flow Creation**: before going on to export data of the following point, through this flag the program will create a new cash flow in the same module. The creation will happen through the automatic parameters of 'Automatic cash flow creation' procedure: for further details refer to the specific documentation.

**Export Cash Flow**: through this flag system will create financial flow file, both for accounting maturity value and previsional. When flag is set, it is possible to activate the following flag called 'Derogability from registers/payment types' and fields with share names and path for file creation (both recorded). In details, according to the setting of this flag, the derogability assignment logic changes: if it is not set, the derogability for vendors will come from the payment type and for customers from register; if it is set, the derogability will come from the customer/vendor register and if here it is not set, i twill be calculated with fix code (‘01' for cash orders, or ‘01' – ‘02' – ‘03' – ‘04' if difference between due date and current date gives an expired date, a difference less than 30 days, from 30 to 90, over 90).

At the base of the mask it is necessary to set the user who will create files. It is necessary that this user has the possibility to access to share folders that have been set for files creation.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions about procedure. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | Through this button it is possible to save settings to be proposed automatically in mask. |
| Export | It creates file/s as set in mask. |






