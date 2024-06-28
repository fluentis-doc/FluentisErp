---
title: Create
sidebar_position: 6
---

Through this mask it is possible to create a new payment list: the mask is the same even for the opening of a list already saved in order to be edited/viewed.

In the first combo it is possible to select the reference payment type of list. In the following fields the procedure shows the current system and the list progressive numeration: the current date is proposed as an issue date.

**Bank**: within this field it is necessary to insert, usually, the detail account code of bank register on which to issue list. The obligatory connection to a bank register is linked to the necessity to have cin/abi/cab/current account in order to send Italy bank transfers tracing electronically. According to payments accounting, on the contrary, there is no particular necessity: this detail account could be any detail account of chart of accounts.

**Current Account**: this field is compiled automatically according to the bank register linked to the inserted detail account: in case, it is possible to insert and/or edit it manually.

**Initial Note**: this field is a free payment notes field, not used on standard version.

**Final Notes**: this field is used for payments accounting in order to valorize the detail description of a bank detail account accounting movement.

The **Set this beneficiary currency date** flag enables the user to set, into the telematic tracing, the currency date to be attributed to payment beneficiary: in case that date is not specified, current date will be used. If flag is not set, the currency date will be the same as due date.

On the right there are two status flag of list: the 'printed' flag is not managed automatically by the program, on the contrary the 'issued file' one is updated according to the telematic file creation. It is possible to recreate the electronic file without resetting this flag in list.

The payments details management can be performed usually through payments button from maturity values: it is necessary to select the accounting maturity values list to be closed with payment in list. In this mask it is necessary to signal among different filters and available flags: it is not recommended the use of View professional men maturity values flag because payment management has to be performed from the professional men module in order to obtain the deduction certification. The 'Insert the bank present on vendor register' flag is necessary in order to use the automatic bank inserted into vendor register of payments section as a beneficiary payment bank, this is free of bank linked to maturity value on its creation accounting record. This second flag can be automatic for module parameters.

It is possible to edit the payment values inserted into grid, in order to get partial payments, as well as manual payment lines: in this second case it is possible to create a difference between account balance of the inserted detail account and ledger balance, because payments accounting procedure does not manage a maturity value opening with a different balance of sections if 'opening maturity values' flag is not set on template. Allowance field enables the user to obtain only active allowances.

At the end it is important to remember a detail about the management of **Notes**: this field can be automatically compiled according to the paid maturity values following the document references that is going to be closed. These notes will be recorded within the payment lines, inserted into the general ledger and in correspondence to the related detail account.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| New Payment | Button to insert manually a vendor payment line. |
| Save | Button to save the header of a new vendor payment, that can be activated only after having inserted payment type and bank detail account. |
| Delete Selected Payments | Button to delete vendor payments created manually or through payment creation from maturity values. |
| Create a Payment from Maturity Value | Button, that can be activated after having saved the header, in order to create a payment by obtaining data from maturity value file. |
| Numeration From |  |
| Documents | Button for documents management connection. |






