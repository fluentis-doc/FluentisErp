---
title: Accounting Parameters
sidebar_position: 2
---

The Accounting Parameters are located in [Home>Parameters>Finance]

The accounting parameters mask enables the definition of the several management parameters related to every accounting year, which has been selected in the grid on the left side.

It is worth mentioning  two mask management commands: 1. the command that deletes general ledger definitive printed reports 2. the command that deletes the definitive reports of the fixed assets journal whose use is possible thanks to a specific user right, directly managed by the ArtinfoResourceManager. This right can be activated for every single user. In both cases, when the definitive print is deleted, the user has to reset the related counters.  

Finally, do not forget that the accounting parameters represent the basic table, (the first step), to identify  the last management active year in order to start the procedure of creating a new accounting year, which is within the Utility. 

RIBBON BAR: The ribbon bar represents the form menu, that is the area on which it is possible to perform actions linked to the procedure in use.l the list of the possible features is the following:



| Function | Meaning |
| --- | --- |
| Save | Command to save the settings related to the accounting management year on which the user is working. |
| Insertion | Command to insert a new accounting year. |
| Delete | Command to delete the accounting management year on which the user is working. |
| Insert Account | Command to insert the register account types that are authorized for every inserted account. The setting authorizes the automatic substitution of the generic account in the template with the detail account holder of the tax document as well as blocks or warns of incompatible accounts. |
| Delete Account | Command to delete the accounts previously inserted. |
| Cancel Definitive Reports | Command to cancel definitive reports of the journal whose use is possible thanks to a user right that can be managed with the ArtinfoResourceManager, a tool that can be activated for everyone. Once the report is deleted the user has to reset the related counters. |
| Cancel Depreciations Journal | Command to cancel the definitive report of the assets journal whose use is linked to a user right that can be managed with the ArtinfoResourceManager that can be activated for everyone.  Once the report is deleted the user has to reset the related counters. |

#1.1 General Tab

| Function | Meaning |
| --- | --- |
| Current  Period Start/End | These fields are mandatory and define the document dates range, which can be managed within the recordings of the selected accounting period. |
| Current Accrual Period Start/End | Suggested optional fields, define the validity of the dates range, which can be managed within the recording of the selected accounting year. |
| Closing Previous Accounting Period | It defines the closing date of the previous accounting year. |
| Last Print Date of the Journal | It records the last definitively printed date related to the current accounting year. At the opening of a new accounting year this date has to correspond to the closing date of the previous accounting year.  |
| Accounting Period Start/End | It defines the recording dates range of the selected accounting year. According to this range of dates, every accounting recording, as a result of the controls in the previous field, is included in the corresponding accounting year. Dates have not to be superimposed among the several accounting years.  |
| Last Page Printed from Journal | It records the last definitely printed page of the journal related to the selected accounting period. During the creation of a new accounting period this field must be set on zero. |
| Last Line Printed from Journal | It records the last definitely printed line of the journal related to the selected accounting period. During the creation of a new accounting period this field must be set on zero. |
| Debit/Credit Balance | It records the last definitely printed debit/credit balances of the journal related to the selected accounting period. During the creation of a new accounting period this field must be set on zero. |
| Last Page Printed from Fix. Ass. Journal | It records the last definitely printed page of the fixed assets journal related to the selected accounting period. During the creation of a new accounting period this field must be set on zero. |
| Broken-Period Percentage | This field enables you to set up the percentage of the valid broken-period, valid for the selected accounting period. In case you are not going to use this option, let the field empty or set it on 100%.   |
| Opening and Closing Account Template | These two fields, both of them not mandatory,  enable you to preset those templates that you want to use in the opening/closing accounts procedures.  |
| Propose Cost/Profit Centers from | This section defines the accounting valorization logic order of cost/profit centers. |
| VAT Accounting Type | This field enables you to define the default accounting type of the VAT rates applied on the various detail accounts belonging to the chart of accounts. |
| VAT Settlement | It sets  periodic  VAT settlements periodicity.  |
| It sets  periodic  VAT settlements periodicity.  | It sets if VAT has to be always rounded up; it can follow 'Lire' selection or Euro logic.  |
| VAT Books | It establishes if VAT books have to be printed according to the recording date or instead to the VAT accrual date, within the selected year. In case that you do not want to use the deferred invoicing (by the 15th of the following month) option, the result does not change. |
| Plafond Accrual Date Is Equal to | It establishes if the plafond accrual date, which has to be assigned to VAT transactions with rate linked to the plafond, has to be set up according to  recording or document date.  |
| Customer/Vendor Accounts List | In this section it is possible to set the types of authorized registers, for every inserted account. The setting authorizes the automatic substitution of the general account in the template, with the detail account holder of the fiscal document, as well as it blocks or warns of incompatible accounts.  |

#1.2 Accounts TabThe list of accounts within the second tabulator is not mandatory, but it enables the user to predefine the detail accounts to be suggested in different procedures, or to take the best from some procedure automatisms. 



| Function | Meaning |
| --- | --- |
| Detail Account – Input VAT | It sets the detail account to be suggested in the automatic detection of VAT giro during  the periodic VAT settlements definitive print. |
| Detail Account – Output VAT | It sets the detail account to be suggested in the automatic survey of VAT giro during the periodic VAT settlements definitive print. |
| Initial Financial Standing | It sets the detail account to be suggested for the accounts  automatic  opening procedures.  |
| Current Operating Income | It sets the detail account to be suggested for the accounts automatic opening/closing procedures. |
| Loss of Current Accounting Period | It sets  the detail account to be suggested for the accounts automatic opening/closing procedures. |
| Previous Operating Income | It sets the detail account to be suggested for the accounts automatic opening/closing procedures. |
| Loss of Previous Accounting Period | It sets the detail account to be suggested for the accounts automatic opening/closing procedures. |
| Income Statement | It sets the detail account to be suggested for the accounts automatic opening/closing procedures. |
| Capital Loss | It sets the detailed account to be used while detecting negative economic differences related to the assets loss. |
| Capital Gain | It sets the detail account to be used while detecting positive economic differences related to the assets loss. |
| Casual Profits | It sets the detail account to be used while detecting casual profits. |
| Casual Loss | It sets the detail account to be used while detecting casual losses. |
| Reduction in Assets | It sets the detailed account to be used while detecting reduction in assets. |
| Reduction in Liabilities | It sets the detailed account to be used in finding reduction in liabilities. |
| VAT Payable | During the periodic VAT settlements definitive print, it sets the detail account to be suggested during the automatic detection of the VAT giro.  |
| VAT Receivable | It sets the credit detail account towards tax revenues. The detail account is suggested during the automatic detection of VAT giro at the moment of the period VAT settlements definitive print. |
| Considerations Account | It sets the detail account of the fictitious customer of considerations' patrimonial detection.  |
| Offset Consideration Account | It is active if the previous considerations account is already active; it sets the economic offset detail account of the considerations to be allotted. |
| Considerations VAT rate | It is active if the previous considerations account is already active; it sets the detection VAT rate of considerations to be allotted. |
| Invoices to be Received | The field sets the generic detail account to be used in the “Accounting invoices to be received” procedure (within the “Purchase invoices” module) or in the accounting of purchase invoices of the type that includes  validity period management. |
| Invoices to be Issued | The field sets the generic detail account to be used in the accounting of the sales invoices of the type that includes validity period management. |
| Deferred Charges | The field sets the generic detail account to be used in the procedure of the automatic adjustments of the Mid-Year Closures module. |
| Accrued Income | The field sets the generic detail account to be used in the automatic adjustments procedure of the Mid-Year Closures module. |
| Deferred Income | The field sets the generic detail account to be used in the  automatic adjustments procedure of the Mid-Year Closures module. |
| Accrued Costs | The field sets the generic detail account to be used in the automatic adjustments procedure of the Mid-Year Closures module. |
| Suspended Costs | Standard Detail Account to detect suspended costs, for the simplified/professional men    accounting. |
| Revenues Suspended | Standard detail Account to detect suspended revenues, for the simplified/professional men accounting. |






