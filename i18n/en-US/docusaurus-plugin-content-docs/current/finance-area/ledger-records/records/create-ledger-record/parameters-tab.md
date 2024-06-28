---
title: Parameters Tab
sidebar_position: 8
---

The 'Parameters' Tab is always available in a ledger record but normally it is not necessary to view/manage it because the only note of interest is the definitive or temporary status of the current ledger record; actually, the definitive ledger record keeps on being editable (except for the template and for the currency of reference) until the definitive mandatory Fiscal Journal will be printed or the record itself will be used for an automatic account closing. The 'temporary' status (that eliminates and disables VAT reference and numbers the record from -1000) can be used to find invoices to be paid in advance or other kinds of periodic operations within the accounting. Entering in the records and inserting the definitive status again, automatically these procedures will re-assign the number of record and the VAT reference valid for the set record date (except for the progressive trend of the VAT reference itself). In the accountings, a procedure of temporary records management enables the user to manage the assignment of definitive records to a set of temporary records.

**Update balances, VAT books grouping** and **Automatic update of CC/PC/Job order** come from the Ledger Template: the first must be always set as well as the second one (that simply groups in the Journal the VAT lines that refer to the same accounting detail account). The third one can be useful for some kinds of manual records in which the user normally goes through a CC/PC manual management: by letting the flag ticked, the application resets the mentioned tabs at every edit of the Journal original data. This can cause the loss of every manual insertions. This kind of automatism, even when the flag is not active, is available when the record is entered: it has a value for any edit operation of the record. Fields related to the black list enable the user to manage the particular case of the purchase outside the EEC (with a no-VAT template). They have to be summarized in the declaration of operations with countries whose tax system is particularly privileged by linking the current record to the VAT movement of the custom bill of entry that reports values that have to be declared.

The grid below shows the possible automatic record linked with the one on the process in a specific moment: according to the logic of the automatic templates, every time that the first record is modified, the procedure aligns the second one.

RIBBON BAR: it represents the form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save the record. |
| New Record | Button to create a new record. |
| Insertion Parameters | It refers to the Insertion Parameters of the first note. |



| Function | Meaning |
| --- | --- |
| Document Manager | Button to link to the document management. |






