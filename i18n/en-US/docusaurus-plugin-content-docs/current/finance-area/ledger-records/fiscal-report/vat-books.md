---
title: VAT Books
sidebar_position: 9
---

The VAT books report must be made register by register: the total report of the registers belonging to a period is not permitted.

**VAT period**: at the opening of the mask this field can cover the previous month or quarter (it depends on the settlement settings in the accounting parameters). 

**Year of reference**: it corresponds to the second field;

**VAT book to be printed**: this field is not mandatory but the user has to request the summary register report.

**Division**: the VAT book must be printed by company, the user can set this filter only in case of temporary print.

**VAT Register**: It must be printed per company. It is possible to set this filter only in case in which there is a temporary report.  

The following fields display which is the last number of printed page as regards the register set: then this element is used by the VAT Register table.

The **View Header** flag is already set by default: in the past it was removed when the user had to authenticate the stamped modules of the registers. Nowadays it is not obligatory anymore.  This flag reports the name of the VAT register, of the company and the number/year of the pages.

The **View Document type** flag adds, in the document references, the document type: it can be useful if the selling invoices have many numerations that rely on the same VAT register.

The title of the register is retaken by the name of the VAT register and it is the one reported in the report with the option 'View header'.

By selecting the option 'Definitive' the procedure changes the period of reference in order to make it correspond to the one immediately after the last definitively printed: the division filter and the number of pages to be printed are disabled. The execution of the definitive print preview does not block the period and update counters: it is only the execution of the print process that blocks the period/register in accounting and updates the counter of the pages of the VAT registers Tab (it is not necessary that the print process reaches a good conclusion, it can be a print on a file). By launching the print or the preview the application can verify if there are missing parts in the protocols and if the chronological order has been followed by blocking the definitive print  unless that the control flag of the VAT register has not be disabled. The definitive print does not need to go through the print of the periodic VAT settlement.

The print of the summary register launches the CA_RegistroRiep.rpt report: this kind of report groups the amounts of VAT rate amounts, register by register, with a final summary of all purchase and sales.

RIBBON BAR: it represents the form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Preview | Button to launch the print preview of the VAT register. |
| Print | Button to launch the print of the VAT register. |






