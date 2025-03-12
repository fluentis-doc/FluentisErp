---
title: VAT Books
sidebar_position: 9
---

The printing of VAT registers must be done individually for each register: a total print of all registers for the period is not allowed.

**VAT period**: Upon opening the mask, this may be the month prior to the current one in the case of a monthly period, or the quarter if the liquidation periodicity set in the accounting parameters is quarterly;

**Reference year**: the current year is proposed by default;

**VAT Register to Print (Registro IVA da stampare)**: select the register to print;

**Division**: normally not to be used, especially if there are no various divisions present;

**Summary**: the flag allows printing, on the register selected via the appropriate field, a summary of the registers and their corresponding VAT codes moved in the selected month or quarter;

The subsequent fields display what the last page number printed for the set register is: this data is taken from the VAT Books table.

The flag **View header** is already set by default: it was removed when the DDT forms needed to be stamped on which to print the registers, an obligation that is no longer required. With this flag, the name of the VAT register, the company, and the page number/year will be displayed.

The flag **View document type** will add, in the document references, the type of document: this can be useful in the case where sales invoices have multiple numbering that refer to the same VAT register.

**Register Title**: when the Summary flag is not active, it is possible to impose a printing title different from the name of the VAT register that appears by default.

The title of the register is taken from the name of the VAT register and will be displayed in the print with the 'Show Header' option.

**Monthly / Quarterly (Mensile / Trimestrale)**: the two flags refer to the VAT periodicity setting defined in the accounting parameters for reference, but the setting cannot be modified from here;

By activating the **Definitive** flag, the procedure will print the registers definitively, locking the selected period for further modifications: the filter for division will also be disabled. Executing the preview of the final print will not block the period and update the counters: only the execution of the physical printing process will operate the block of the period/register in accounting and update the page counter of the VAT Books table (and it is irrelevant whether the printing process is successful or not; it could even be a print to file). When executing the print or preview, the application will check if there are gaps in the protocol and whether the chronological order has been respected, blocking the final print unless the control flag has been disabled for the VAT register in the table. The final print is NOT necessary to proceed with the printing of the periodic VAT liquidation.

| Function (Funzione) | Meaning (Significato) |
| --- | --- |
| Preview (Anteprima) | Button to execute the preview of the VAT register print. |
| Print (Stampa) | Button to execute the physical print of the VAT register. |


:::important See Also (Vedi Anche)
[**VIDEO TUTORIALS ON TAX PRINTS**](/docs/video/finance/intro.md)
:::