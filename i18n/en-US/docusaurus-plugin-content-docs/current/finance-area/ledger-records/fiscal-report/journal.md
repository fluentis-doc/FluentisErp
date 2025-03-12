---
title: Journal (Libro giornale)
sidebar_position: 3
---

Upon opening the window, the current accounting year is proposed, and the filter for the entries is set by default to cover the corresponding accounting year (the accounting competence date is not filled in by default, assuming the intention to operate by "formal" date); 

the initial data of page number, line, and debit and credit balance is reported: the program proposes the filter of entries also taking into account the date of the last definitive print.

![](/img/it-it/finance-area/ledger-records/fiscal-report/journal/image01.png)

 

POSSIBLE OPTIONS: 

**View header**: to manage any DDT forms already printed;

**Definitive**: activates the definitive printing mode, which, once executed, blocks subsequent modifications to the accounting entries of the period;

**Reprint**: this flag is designed to allow **reprinting the journal already printed definitively**; by activating it, the fields related to the last debit/credit balances, last page, and last line, which have been populated and stored from the definitive print, will become editable in order to manage a reprint of the journal, without having to cancel the previous definitive print, nor modify and save the values prior to the reprint within the *general accounting parameters* mask (to achieve the same final progressions after the reprint).

When the definitive print is executed, the program performs a check on the presence of unprinted prior entries and on the presence within the already reported date range in the print. Once the printing process is launched (therefore, the simple preview does not perform any operation, but the physical print must be executed, even to file, regardless of the successful completion of the process), the related entries will be blocked in the entire fiscal part while the stored counters in the **[Accounting Parameters:](/docs/configurations/parameters/finance/accounting-parameters)** table will be updated; this table contains the button for deleting definitive prints (which can be placed under specific user rights): once pressed, it will be necessary to indicate the date range to unlock, confirm the operation, and then manually update all related counters;

**Division**: allows managing the print by specifying one of the divisions present in the database;

**From entry number / To entry number (Da n. registrazione / A nr. registrazione)**: allows filtering the print by entry number (less significant in the case of definitive printing).


| Function (Funzione) | Meaning (Significato) |
| --- | --- |
| Preview (Anteprima) | Button to execute the print preview of the journal. |
| Print (Stampa) | Button to execute the physical print of the journal. |



:::important See Also (Vedi Anche)
[**VIDEO TUTORIALS ON FISCAL PRINTS**](/docs/video/finance/intro.md)
:::