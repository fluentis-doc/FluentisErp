---
title: New
sidebar_position: 2
---

The Automatic Account Opening procedure can be used as an alternative to a journal entry to be entered via the command **[Create Accounting Entry](/docs/finance-area/ledger-records/records/ledger-record)**, **to record the opening balances.**

**Starting from the first closing of accounts, subsequent account openings can be managed directly from the closing procedure.**

 

NOTE:

With this procedure, only the opening accounting balances are recorded, not the opening of the related accounting items.

 





**Open Date**: is the **processing date**, it has no connection with the date of recording the operation to be indicated in the specific field at the bottom of the window;

**Opening Number**: is a sequential number managed automatically;

**Description**: allows the user to identify the operation, as well as the notes;

**Account** and **Account type**: are search filters within the chart of accounts list;

**Posting date** and **Competence date**: mandatory fields to be assigned to the opening entry;

**Number**: will be assigned once the accounting is performed;

**Opening account template** and **Movement due date**: to be assigned for the journal.

Once these mandatory data are set, it will be possible to save the settings and activate the entire list of accounting detail acounts: the next phase will thus be to perform the memorization of each detail acount's opening debit or credit balance, with the potential opening amount in currency.

![](/img/it-it/finance-area/ledger-records/records/automatic-accounts-opening/new/image01.png)

 

Example (non-realistic)

 

Only once the total debits and total credits match will it be possible to proceed with the recording of the balance recovery (otherwise, pressing the accounting command will display an error message).

 

OPERATIONAL ADVICE:

the user can reopen the same account opening process multiple times to complete all data (the operation might also be lengthy and take place over several days) before proceeding, or different account openings could be created, perhaps differentiating one for assets, another for liabilities, or for customers/suppliers, etc.

The form does not provide a rollback procedure: you can simply delete the opening, and the application will ask for confirmation of the deletion of the related accounting entry.

In the event that modifications are made to the details of the account opening AFTER its accounting, you can press the Create Opening Entry command again (in the ribbon bar) to update the previous accounting entry. A warning and confirmation message of the entry update will appear.



| Function | Extended Description |
| --- | --- |
| Save | Button to save the header of the account opening, activatable after entering the description and the accounting reason. |
| Search | Button to search for the list of accounts intended to be included in the opening, using the detail acount and account type fields. |
| Create Opening Entry | Button to create the opening accounts entry. |
| Opens the Registration for Account Opening | Button that opens the account opening registration. |
| Delete Detail | Deletes the contents of the fields related to the selected line. WARNING: lines regarding the contents of the fields related to the account cannot be deleted, if left blank they will not be included in the opening accounting entry. |