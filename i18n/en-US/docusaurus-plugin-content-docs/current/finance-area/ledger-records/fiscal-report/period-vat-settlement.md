---
title: Periodical VAT Settlement
sidebar_position: 5
---

With this printing procedure, the calculation of the VAT credit/debit for the reference period is carried out: for this report, it is not mandatory that the VAT registers for the period have already been printed, but in order to report any credit from the previous period, there must have been a definitive print of the VAT settlement for the previous period (or a manual entry in the **[VAT Payments](/docs/finance-area/declarations/declarations/vat-payment)** table, which achieves the same result of blocking the VAT period in accounting). Otherwise, the printing can still be executed but without reporting the credit from the previous month or quarter.

Set the period and year of reference (where the period will be monthly or quarterly depending on the periodicity of the periodic VAT settlement set in the **[accounting parameters](/docs/configurations/parameters/finance/accounting-parameters)**); 

select from the combo box the VAT register on which to print the settlement: 

the print can be made either at the end of the sales register or on a dedicated summary register (recommended option). 

In the event that the last period of the year has been selected, the option for printing/**calculating the VAT advance** will be enabled, based on which the report will include the records up to the date of 20/12/yyyy.

**Paying-in Date / Modality**: these fields (a date that is then reported in the text string) allow the inclusion of a statement regarding the date and method of tax payment in the print (or, by modifying them, a free note).

 

**View header**: default proposed flag: should only be removed if the company still proceeds to print on DDT forms. 

**Definitive printed**: the active flag will make the print definitive, blocking the relevant VAT period and updating the page counters of the register on which the printing occurs. It also enables the following section for automatic re-entries. Additionally, it will modify the reference period to correspond to the one following the last definitively printed and will disable the number of copies to be printed. 

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image01.png)

 

Executing the print preview in definitive mode is not enough to block the period and update the counters: only the execution of the physical printing process will operate the block of the period in accounting and update the page counter of the VAT Registers table (and it is not relevant whether the printing process is successful or not; it could even be a print to file).

The definitive print will enable the option for **settlement accounting** (of the period balance): by setting this option, the application will activate the list of accounts to use (retrieving them from the accounting parameters), and the user will simply need to confirm the reason and reference dates: once the printing process is executed, two re-entry registrations of purchase and sales VAT will be added to the sub-accounts of debit/credit VAT on the treasury account C/VAT.

![](/img/it-it/finance-area/ledger-records/fiscal-report/period-vat-settlement/image02.png)



| Function | Extended Description |
| --- | --- |
| Preview | Button to execute the print preview of the settlement. |
| Report | Button to execute the physical printing of the settlement. |


:::important See Also 
[**VIDEO TUTORIALS ON FISCAL REPORTS**](/docs/video/finance/intro)
:::