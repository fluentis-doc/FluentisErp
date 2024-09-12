---
title: Analytic Chart of Accounts
sidebar_position: 1
---

The encoding of analytic chart of accounts needs the insertions of groups list into the upper section of mask: through the grouping/groups insertion buttons it will be possible to insert new first levels or lower levels to the selected one, assigning to them alphanumeric code, description and reference account type. The reference account type is the same of general ledger accounts type.

Once having selected the group with lower level it will be possible to activate, in the grid above, the analytic accounts list inserted on it. In the cost accounting there is no insertion of accounts level (account code without detail accounts), but it is necessary to create the account+detail account detail: each of these fields can be an alphanumeric code of 7 characters, even if it is recommended to use a progressive numeric criterium with the same characters (e.g. all accounts with 4 characters, all accounts with 3 characters). The account type of every line that is inserted will be proposed as the account type of the group: it is a proposed code that the user can edit.

By reading the different columns details in list, it is possible to notice:

The associated general ledger **account/detail account**. The field is optional and enables the user to define which is the general detail account associated to the analytic detail account in use, in order to valorize automatically the analytic general insertion;

**Insertion date**: it refers to the creation of the account/detail account;



**Date of the Last Variation**: it is the last variation of account/detail account code, updated automatically by the system;

**Validity End Date**: it is necessary in order to block the user of detail account in new analytic records (starting from the inserted date), mantaining the visibility of movements, that have been previously inserted;

**Business Process**: the field enables the user to associate the analytic detail account to a business process. At the moment the field is not in use;

**Prod. Category**: the field enables the user to associate the analytic detail account to a product category for statistical purposes.

In sections below it is possible to associate every single analytic detail account to cost/profit centres (and to activities not in use). This percentage valorization structure with Cost/Profit Centre will be automatically proposed (only for economic detail accounts), by giving to the user the possibility to edit values manually, if necessary.

The connection is performed simply through the selection of the reference detail account and by inserting the CC/PC list into two grids (indicating obligatorily even an associated Business Process). It is possible then to link the valorization on different business department, but usually department is not compiled. It is not possible to control if the inserted percentages amount corresponds to 100%.

Remember that:

1) The cost accounting valorization depends on the presence of flags related to CC/PC in analytic or general template, associated to the movement;

2) It is possible to foresee a double valorization: for example, if a cost detail account has both linked CC and PC , template can forsee again both and with option “Seperate Management CC/PC” it will be possible to valorize both, otherwise only CC for costs will be valorize (and as regards pay-off detail accounts it will be possible to valorize the PC).

In addition there are additional ways of Cost/Profit Centres encoding: customers/vendors/agents registers, items registers, warehouses, fixed assets. Typically the valorization priority is defined in management parameters of the single module.

 

RIBBON BAR: it represents the Form Menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following: 

 



| Function | Meaning |
| --- | --- |
| Search | Through this button it is possible to perform the search of detail accounts according to search filters set within the selected group. |
| New Account | Button to set the cursor during the insertion of a new analytic detail account within the selected group. |
| Search Account up | Button to search the filter detail account of previous groups. |
| Search Account down | Button to search the filter detail account in the following groups. |
| Delete Account | Button to delete the selected analytic detail account. It is not possible to delete a detail account if this has been already used in system. |
| New Class | Button to insert a new 'Root' group into the analytic chart of accounts structure. |
| New Account | Button to insert a new subgroup into the group selected in the analytic chart of accounts structure. |
| Delete Account | Button to delete the selected group. |
| Increase | Button to increase indent of tree structure. |
| Decrease  | Button to decrease indent of tree structure. |
| Expand  | Button to expand tree below the selected group. |
| Collapse  | Button to collapse tree below the selected group. |
| New Activity | Button to set the cursor during the insertion of a new activity for the selected detail account. |
| Delete Activity | Button to delete the selected activity. |
| New CC | Button to set the cursor during the insertion of a new cost centre for the selected detail account. |
| Delete CC | Button to delete the selected cost centre. |
| New PC | Button to set the cursor during the insertion of a new profit centre for the selected detail account. |
| Delete PC | Button to delete the selected profit centre. |
| Preview | Button to perform the print preview of analytic detail accounts for the selected group. |
| Print | Button to print the analytic detail accounts for the selected group. |






