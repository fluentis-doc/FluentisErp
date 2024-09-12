---
title: Parameters Tab
sidebar_position: 2
---

In the 'Accounting-Account Closure' window, in the first tab called 'Parameters' it is necessary to insert filters to get the record data, detail account codes and templates that have to be used in the Journal.

The first three fields (Closure Date, Version, Description) report the date of the operation (it does not influence the record dates), the progressive number of the closing, and how the user defines the operation itself (typically  Year Accounts Closing). The accounting year of the accounting parameters to be indicated, it is useful for the adjusting entries management that can be activated at the bottom of the mask with the flag 'Giro Account-adjustment Records': it manages, at the end of the accounts re-opening, movements of deferred re-attribution and of the accrued to the related costs/profits (the deferred are recorded in the same day of the accounts opening, the accrued according to the original document record date).

In the record date and accrual date  fields it is necessary to enter parameters for the detection of records that have to be reported in the accounting balance: in particular, the accrual dates will refer to the balance term (1/1/…-12/31/…) while the 'To record date' field could be moved to the next term in order to include all the adjustments: we suggest not to set the record date filter.

It is possible to make the flag to manage the closure balance and re-opening by movement currency: it means that the program adds a line for every specific detail account movement currency, keeping the company total in the currency correct. This opportunity is necessary to guarantee the correctness of the initial balance of the 'Account Statement in Currency' print.

In addition to these data, it is necessary to give the program all the references to the accounting templates, to the record dates and to the account to be used in the closing and re-opening operations. These data (except for record dates) are automatically reported if they are entered in the table 'Accounting Parameters'. 'Account' tab. The 'Giro Account-Adjustment Record' flag automatically creates the re-opening of the costs/profits, adjusted through the 'Adjustment Record' procedure. 

At this point it is possible to save the setting through the appropriate button. In this way it is possible to activate the other buttons. Before proceeding with the operations the user should check the 'account type' tab settings: in addition to a flag on the respective column, the account types of the customer-vendor-agent-banks register must have a second flag within one of the first two columns related to the Patrimonial Active/Passive.

It is possible to re-enter the procedure and, through the related button, to start the Detail Account Retrieve. In this way the program can calculate the balance of every detail account and report the related data in the 'Profit and Loss' and 'Patrimonial' tabs.

RIBBON BAR: the ribbon bar represents the form menu, that is the area on which it is possible to perform actions. The possible features list is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save the header of the account closure, it can be activated once that the description has been entered. |
| Retrieve Detail Accounts Values | Button to calculate the balance of every detail account and to display the related data in the “Profit and Loss” and “Patrimonial” tabs. |
| Create Accounts Closing Records  | Button to create the Account Closing Records. |
| Button to create the Account Closing Records | Button to restore the accounting closing accounting. |






