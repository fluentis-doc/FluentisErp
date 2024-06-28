---
title: Chart of Accounts
sidebar_position: 2
---

The codification of the Chart of Accounts starts from the insertion of  the Chart of Accounts groups' list in the upper part of the mask: by the means of the “Insert”  and “Grouping/Groups” commands user can insert new first levels or levels that are inferior compared to the one selected, assigning each one of them a univocal alpha-numeric code, a description (plus a second alternative) and an account type of reference.

Once that the lowest level group is selected, the accounts and detail accounts list included in the group itself is active in the grid below. The insertion of a new code must include the account level (“ledger” in the accounting  jargon) that is identified by the  lack of the detail account code; each one of them can be an alpha-numeric code made of 8 characters but it is suggested to follow a sequential numbering criterion which adopts character uniformity (for instance all accounts 4 characters, all detail accounts 3).  The account type of every inserted line is presented as the account type of the corresponding group:  however, it is a suggested code that the user can change (for instance to directly  insert depreciation funds in the active patrimonial section).

Moreover, Register detail accounts, can be inserted and edited just by the contacts registers management, within the “Tools”-“Register” menu.  

Then, the detail accounts belonging to the “Interim Account” type, can be inserted only in accounts of the “Interim Account” type.

In the various columns of the list user can view: 

1) Insertion date: it is the date of account/detail account creation; 

2) Last modified date: it is the date referring to the last edit of the account/detail account, automatically updated by the ERP; 

3) End validity date: has the task to block the use of the detail account in new accounting entries (starting from the date inserted), while maintaining the visibility of the transactions previously inserted; 

4) Opening maturity values;  the flag interacts with  the control of the  accounting transactions balance which includes maturity values data; for every detail account user can manually create an accounting maturity value, but this is possible just in case user has set the related flag. Then the ERP verifies if this operation is completed or not by blocking (if it is necessary) recording saving procedures according to the settings of the related template; 

5) Further description: second description; normally it is not used; 

6) Notes: notes of the detail account; normally it is not used; 

7) Accrued income/cost account, deferred income/charges:  these detail accounts can link on the single detail account accrued and referred codes to be used, as a priority, at the moment of the interim closing or during adjustments/integration records balance. In case it is not present, here default accounts inserted in the general accounting parameters are used; 

8) Expense Entry: expense entry field. It is currently used to export the chart of accounts/due register on DocFinance, for statistical purpose; the second use is as a search filter for the “Record Diff. Budget” within the Mid-year Closures module. It can have a statistical value in the OLAP cube (data cube) of the Business Intelligence included in  the Administration Area;

9) Budget periodicity type; its task is to link a year-distribution criterion, specific of the year-budget data. 

It is not possible to delete a group that includes a subgroup as well as the subgroup includes accounts/detail accounts: in the same way, it is not possible to delete an account that includes detail accounts neither delete codes used in any table of the  software.

 **“Codify” suggestions **

a) First of all user has to identify  two maximum detail levels: these identify detail accounts and accounts to be inserted;  starting from these and going backwards, user can group them at an upper level;

b) Pay attention to the customers'/vendors' registers codes: in several softwares, customers ledger is a detail account and the Register specifies a related further level NOT visible on the chart of accounts. On the other hand, the ERP includes register details levels within the chart of accounts. This point is fundamental in order to identify the maximum level mentioned at a) point; 

c) Avoid alpha-numeric codes: basically for ordering reasons;

d) Use the same number of character for all the accounts and one for all the detail accounts (except for register detail accounts; regarding  them, detail accounts codes apply an higher  numbering); this is again for ordering reasons (for instance the alphabetical order of the numbers 1, 2 10 is 1, 10, 2, consequently the correct set should be 01, 02, 10).

e) Use the number of character that user need; it does not make any sense having a detail account made of 8 characters if the account includes just a few dozens of detail accounts (for active/passive/costs/profit 3 or 4 characters are more than enough). For an accounting is easier to type 4+4 characters rather than 8+8 on each line of accounting! In a second moment, these codes need to be reported in every  printed report  and the papers are limited… 

f) It could be a wise suggestion make a distinction between account and detail account by using a capital character; this immediately indicates that the user is selecting an account or a detail account and this is particularly useful in case of homonymy (same code).

g) Do not add complex statistical data to the chart of accounts: cost centers, profit centers, analytical accounting and the business intelligence are in charge of  these tasks.

**Cost Centers and Profit Centers set.**

Within the chart of accounts it is possible to assign each detail account with a percentage valorization  structure, for Cost/Profit Centers,  : the ERP automatically applies this value (just for the economic detail accounts), letting the user the chance to manually edit  the values, where it is necessary. 

The connection is made by selecting the detail account of reference and by inserting the list of C.C/P.C within the two grids; it is possible to connect the valorization on different corporate departments, but normally the division is not filled out. There is not a control feature to verify that the total amount of the inserted percentages reaches 100%.

Moreover, it is worth mentioning  that: 

1) The valorization in the accounting depends on the presence, in the used ledger template, of the flags related to the C.C/P.C

2) It is possible to include a double valorization: for example, if a cost detail account has both C.C and P.C connected, the  template can include both of them again, and, by the means of the “Separate Management C.C/P.C”,  they are assigned with a value; otherwise only  the C.Cs are assigned with a value for the costs (the P.Cs  in case of profit detail accounts).

There are further Cost Centers/Profit Centers coding points: customers/vendors/agents registers, articles registers, warehouses, assets. The priority of valorization is normally defined within the management parameters of the single module.

**Automatic Detail Accounts Setting**

For every detail account it is possible to assign a list of detail accounts that, in case of automatic templates, are automatically assigned with a value. In particular, the functioning establishes that:

h) the detail account is used in the VAT section of the registration;

i) the recording is based  on a template which includes an automatic template;

j) in these conditions, during the automatic recording, the ERP adds the automatic detail accounts that are linked to the detail accounts; 

k) the valorization of these detail accounts uses the amount  type of the “Automatic Detail Account” section,  applying it to the original VAT line.

An example of using is the recording of detail accounts for which the valorization of the interim accounts has to be made in debit/credit.

RIBBON BAR: the ribbon bar represents the Form menu, that is the area on which it is possible to perform actions linked to the procedure in use. The possible features list is the following:



| Function | Meaning |
| --- | --- |
| Search Accounts | It is in charge of the accounts/detail accounts search within the selected group |
| New Account | It sets the pointer  when a new account/detail account is entered within the selected group. |
| Move accounts | It opens a mask to move an account to another group |
| Open Register | It opens the register related to the selected customer/vendor/bank/agent detail account |
| Delete Account | It deletes the selected account/detail account. It is not possible to delete an used account/detail account; user has to set a “End Validity Date” in order to make it invisible to the same user |
| Search Down | It searches the group below the selected group |
| Search Up | It searches the group over the selected group |
| New Grouping | It is in charge of the insertion of a new root group in the chart of accounts structure, regardless the selected group |
| New Group | It is in charge of the insertion of a group within the one selected. It is not possible to insert groups within a group that has already associated accounts/detail accounts |
| Delete Group | It deletes the selected group |
| Increment | It increments tree tabulation |
| Decrease | Drecreases  the tree tabulation |
| Expand Tree | It opens the level below the selected group |
| Collapse Tree | It closes the levels below the selected group |
| New Cost Center | It sets the pointer when a new cost center, for the selected account/detail account, is inserted |
| Delete Cost Center | It deletes the selected cost center |
| New Profit Center | It sets the pointer when a new profit center is inserted for the selected account/detail account |
| Delete Profit Center | It deletes the selected profit center |
| Preview | It is in charge of the preview of the selected group. In the ribbon there is an alternative field to print the whole chart of accounts |
| Print | It prints the selected group. In the ribbon there is an alternative field in order to print the whole chart of accounts |






