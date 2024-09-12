---
title: Grouping Patterns Management
sidebar_position: 6
---

First of all, it is necessary to explain that grouping patterns regard the common elements of companies belonging to the same database: the structure of the reclassified balance sheet will be visible to all companies while it will be possible to specify their structure assignment of chart of accounts (CC/PC etc.) to the various patterns. In this way it will be possible even to create a reclassified balance sheet group pattern.

The elements, which are necessary to create a new pattern, are three: reclassification type, pattern code (alphanumeric of 10 characters), pattern description. Once having attributed these three values, it will be possible to activate various buttons in order to set the reclassification structure: through 'Insert root node' it will be possible to create the first structure levels, while through the following 'Insert Node' it will be possible to add other levels to the one selected on structure. Each structure level will be defined with a code (alphanumeric of characters) and a description: the univocity of this particular case regards the combination of both code and description (because, for example, in a Cee reclassification model there are a lot of levels 'A' in the various model sections). Let us to see the following level types that can be assigned to these codes, taking into consideration the cancellation of various levels only in case that these are not valorized in a formula ('Children Sum' or 'Expression').

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the pattern in management. The list of features is the following:



| Function | Meaning |
| --- | --- |
| New Pattern | It performs the creation of a new grouping pattern. |
| Search Next Node | It performs the search of text set in the following node compared to the selected one. |
| Search Previous Node | It performs the search of text set in the previous node compared to the selected one. |
| Insert Root Node | Through this button it is possible to create a new source level, regardless of the selected level. |
| Insert Node | Through this button it is possible to create a new child level within the selected level. |
| Delete Node | The button deletes the selected node. The cancellation is allowed only if node is not used in a formel of the same pattern. |
| Increase Indent | The button increases the spacing of pattern tree. |
| Decrease Indent | The button decreases the spacing of pattern tree. |
| Expand Node | Through this button it will be possible to open all internal levels compared to the selected node. |
| Collapse Node | Through this button it will be possible to close all internal level compared to the selected node. |
| Delete Detail Account | It deletes detail account, cost/profit centre or job orders selected in the detail grid of the selected node. |
| Search Missing Detail Accounts | The button opens a search mask of detail accounts not inserted in a reclassification node. See application a. |
| Search Double Detail Accounts | The button opens a search mask of detail accounts inserted several times in a reclassification node. See application b. |
| Multiple Insertion of Detail Accounts | It opens an accounts help with active multiple selection of detail accounts. |

APPLICATIONS:


 1. The search mask of missing detail accounts enables the user to search and to print the detail accounts not inserted on reclassification model. In particular, if a generic account has been inserted, it will not possible to view its detail accounts even if these are not specifically inserted on the same model
 2. The search mask of double detail accounts enables the user to search and to print the list of detail accounts which have been inserted in many points of the model. In particular, if a generic account and one of its detail accounts have been inserted, it will possible to view it because considered total and detail

**A** – the detail account level pertains to the valorization of general ledger data, according to structure details of company chart of accounts.

First of all, the 'data Type' can correspond to 'Currency' or 'Number': first, the level will view a cash value with company currency symbol and decimals; secondly, the level will view a generic numeric value rounding off decimals set in the following field.

 'Sign Reversal of Selected Node' enables the user to reverse negative signs into positive and vice versa: on the reclassification patterns of the ERP, any data with debit balance will be viewed with a positive sign, the credit balance with negative sign. Through this flag it will be possible to view the total positive signs for levels that originally have credit balance (assets and liabilities). Attention that this setting influences a lot the sums and general expressions result. The opposite sign is applied on the level result, not on details (detail accounts, CC, PC, job orders) that valorize it: these will continue to have the balance sign (see later in this document for signs inversion of detail accounts).

'To Be Printed' indicates if level has to be printed or not.

The 'Grouping Nature' section enables the user to set the account types that could be assigned to this level: in substance, during the insertion of detail account it will be possible to apply a filter per account type; this has been already limited to everyone that shows flags linked to the same setting. For example, if nature is 'Active Patrimonial' it will be possible to insert account types that have this flag in table: typically customers and banks. In case of a modification of this setting with detail accounts presented in level during the saving of modification, it will be necessary to delete or not not consistent detail accounts.

The 'Accounts' grid enables the user to set the list of accounts and/or detail accounts that will valorize this pattern level. First of all, it is necessary to explain that it is not possible to insert the same account or detail account with the same balance type in the same level, while this can be inserted on other reclassification pattern fields without any restrictions. It is possible to insert the generic account (mastro): this generic account has register detail accounts, without detail of customers/vendors list on pattern that could cause the necessity of a continuous alignment of different patterns.

The balance type of the single account or detail account line provides for the following possibilities: 'General' (it will be possible to insert the detail account balance independently from the sign; as regards a generic account it will be possible to insert the sum of detail accounts balances belonging to that account), 'Debit' (it will be inserted the detail account balance only if this has debit sign; as regards a generic account it will be possible to insert the sum of debit balances of detail accounts belonging to that account), 'Credit' (it will be possible to insert the detail account balance only if this has credit sign; as regards a generic account it will be possible to insert the sum of detail accounts balances belonging to that account), 'Increment' (as regards the detail account or account it will be possible to calculate the value as difference between reclassification mid-year closure and another reference closure: this typology is necessary in case of flux analysis).

The last flag that is on the grid is called 'Col. Rev.': this means that on the selected detail account the sign of balance will be reversed. For example, it can be necessary in order to reduce value of a detail account from its account balance.

The insertion on this grid can be performed in two ways: load directly on grid, by typing code or through accounts help that enables the user to select a record, or by clicking on 'Multiple Insertion of Detail Accounts' button in order to have an accounts help with active multiple section.

In order to conclude in patterns management based on detail accounts it is necessary to have two different mask management buttons: view missing detail accounts and view double detail accounts. These buttons will present to the user to particularly interesting lists for the pattern configuration: an list of accounts/detail accounts that have not been inserted in any reclassification pattern level, and a list of accounts/detail accounts that have been inserted several times on different levels, with the association of the related balance type.

**B** - The children amount level is predefined expression type that is valorized automatically by summing values of levels immediately below.

First of all, the 'data Type' can correspond to 'Currency' or 'Number': first, the level will view a cash value with company currency symbol and decimals; secondly, the level will view a generic numeric value rounding off decimals set in the following field.

 'Sign Reversal of Selected Node' enables the user to reverse negative signs into positive and viceversa: on the reclassification patterns of the ERP, any data with debit balance will be viewed with a positive sign, the credit balance with negative sign. Through this flag it will be possible to view the total positive signs for levels that originally have credit balance (assets and liabilities). Attention that this setting influences a lot the sums and general expressions result.

 'To Be Printed' indicates if level has to be printed or not.

It will not possible to delete a level when its higher level is 'Children Sum', because it has been valorized in its formula: it will be necessary to change the higher level type, to delete and then to set again 'Children Sum' typology.

**C** – the expression level enables the user to define the formula which will valorize the same level.

First of all, the 'data Type' can correspond to 'Currency' or 'Number': first, the level will view a cash value with company currency symbol and decimals; secondly, the level will view a generic numeric value rounding off decimals set in the following field.

 'Sign Reversal of Selected Node' enables the user to reverse negative signs into positive and vice versa: on the reclassification patterns of the ERP, any data with debit balance will be viewed with a positive sign, the credit balance with negative sign. Through this flag it will be possible to view the total positive signs for levels that originally have credit balance (assets and liabilities). Attention that this setting influences a lot the sums and general expressions result.

'To Be Printed' indicates if level has to be printed or not.

As opposed to the 'Children Sum' about the expression level the sum can be edited: it is possible to insert parentheses and four algebraic basic operations, as well as the fix values. In order to record a level on formula, it is necessary to click on CTRL button and drag this element within the formula field.

**D** - The cost centre level has the task to valorize the analytical accounting data, according to details of structure of company cost centres.

First of all, the 'data Type' can correspond to 'Currency' or 'Number': first, the level will view a cash value with company currency symbol and decimals; secondly, the level will view a generic numeric value rounding off decimals set in the following field.

 'Sign Reversal of Selected Node' enables the user to reverse negative signs into positive and vice versa: on the reclassification patterns of the ERP, any data with debit balance will be viewed with a positive sign, the credit balance with negative sign. Through this flag it will be possible to view the total positive signs for levels that originally have credit balance (assets and liabilities). Attention that this setting influences a lot the sums and general expressions result. The opposite sign is applied on the level result, not on details (detail accounts, CC, PC, job orders) that valorize it: these will continue to have balance sign (see later in this document for signs inversion of cost centres).

'To Be Printed' indicates if level has to be printed or not.

Through 'Consider C.C/P.C Child' flag it will be possible to insert on level the X profit centre and the ERP will record all its internal cost centres, that have a value, on the reclassified balance sheet. The flag enables the user to avoid to maintain the detail about cost centres but on the contrary to consider only the higher cost centre that group them.

On the cost centres grid it is possible to load cost centres that will valorize level: as well as the cost centre, it is possible to set even the account/detail account, in order to valorize level only with movement balances of the combination PC/account or PC/detail account. The last flag, that is located in the grid, is called 'Col. Rev.': it means that, on the selected grid, the balance sign will be reversed.

**E** - The profit centre has the task to valorize the analytical accounting data, according to structure details of company profit centres.

First of all, the 'data Type' can correspond to 'Currency' or 'Number': first, the level will view a cash value with company currency symbol and decimals; secondly, the level will view a generic numeric value rounding off decimals set in the following field.

 'Sign Reversal of Selected Node' enables the user to reverse negative signs into positive and vice versa: on the reclassification patterns of the ERP, any data with debit balance will be viewed with a positive sign, the credit balance with negative sign. Through this flag it will be possible to view the total positive signs for levels that originally have credit balance (assets and liabilities). Attention that this setting influences a lot the sums and general expressions result. The opposite sign is applied on the level result, not on details (detail accounts, CC, PC, job orders) that valorize it: these will continue to have balance sign (see later in this document for signs inversion of profit centres).

'To Be Printed' indicates if level has to be printed or not.

Through 'Consider C.C/P.C Child' flag it will be possible to insert on level the X profit centre and the ERP will record all its internal profit centres, that have a value, on the reclassified balance sheet. The flag enables the user to avoid to maintain the detail about profit centres but on the contrary to consider only the higher profit centre that group them.

On the profit centres grid it is possible to load profit centres that will valorize level: as well as the profit centre, it is possible to set even the account/detail account, in order to valorize level only with movement balances of the combination PC/account or PC/detail account. The last flag, that is located in the grid, is called 'Col. Rev.': it means that, on the selected grid, the balance sign will be reversed.

**F** – the job orders level has the task to valorize the accounting data for job orders, according to structure details of job order.

First of all, the 'data Type' can correspond to 'Currency' or 'Number': first, the level will view a cash value with company currency symbol and decimals; secondly, the level will view a generic numeric value rounding off decimals set in the following field.

 'Sign Reversal of Selected Node' enables the user to reverse negative signs into positive and vice versa: on the reclassification patterns of the ERP, any data with debit balance will be viewed with a positive sign, the credit balance with negative sign. Through this flag it will be possible to view the total positive signs for levels that originally have credit balance (assets and liabilities). Attention that this setting influences a lot the sums and general expressions result. The opposite sign is applied on the level result, not on details (detail accounts, CC, PC, job orders) that valorize it: these will continue to have balance sign (see later in this document for signs inversion of job orders detail).

'To Be Printed' indicates if level has to be printed or not.

The 'Grouping Nature' section enables the user to set the account types that could be assigned to this level: in substance, during the insertion of detail account it will be possible to apply a filter per account type; this has been already limited to everyone that shows flags linked to the same setting. For example, if nature is 'Active Patrimonial' it will be possible to insert account types that have this flag in table: typically customers and banks. It is important even to consider that the valorization by job orders is automatic only for economic and not patrimonial detail accounts.

The 'Accounts' grid enables the user to set the list of accounts and/or detail accounts (that have valorized the accounting per job order). First of all, it is necessary to explain that it is not possible to insert the same account or detail account with the same balance type in the same level, while this can be inserted on other reclassification pattern fields without any restrictions. It is possible to insert the generic account (mastro).

The balance type of the single account or detail account line provides for the following possibilities: 'General' (it will be possible to insert the detail account balance independently from the sign; as regards a generic account it will be possible to insert the sum of detail accounts balances belonging to that account), 'Debit' (it will be inserted the detail account balance only if this has debit sign; as regards a generic account it will be possible to insert the sum of debit balances of detail accounts belonging to that account), 'Credit' (it will be possible to insert the detail account balance only if this has credit sign; as regards a generic account it will be possible to insert the sum of detail accounts balances belonging to that account), 'Increment' (as regards the detail account or account it will be possible to calculate the value as difference between reclassification mid-year closure and another reference closure: this typology is necessary in case of flux analysis).

The last flag that is on the grid is called 'Col. Rev.': this means that on the selected detail account the sign of balance will be reversed. For example, it can be necessary in order to reduce value of a detail account from its account balance.






