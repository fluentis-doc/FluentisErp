---
title: Vendor Payment Data
sidebar_position: 2
---

On **Parameters** second tab it is possible to set various elements of procedure management: first of all, it is necessary to insert the reference bank, that will correspond to the list bank. Usually it is a code linked to bank register, in order to take from this one current account field and have all data to be inserted during the electronic sending procedure of Italy bank transfers.

The **Use the payment bank of the vendor maturity value, if the nomenclature is missing** flag will impose to the procedure to create as list as payment banks assigned to the various maturity values selected in the management procedure of payment, or inserted into vendor register. Without them payment will be inserted into the list for bank code set in the initial field.

The **Use the bank present in vendor register** flag forces the assignment of beneficiary bank code viewing them by the automatic bank line inserted into the bank section of vendor register payments tab. This flag can be predetermined within module parameters.

The payment type enables the user to determine the payment typology to be assigned to the list: the field becomes obligatory only in case that maturity values to be paid provide for not uniform payment typologies.

The issue year and date are determined automatically according to system date.

The **beneficiary currency date imposition** flag enables the user to assign, within the electronic tracing, a currency date for payment beneficiary: in case that this date is not set, it is necessary to assign the current date. If flag is not set, the currency date will be the same of due date.

The **Initial Notes** field is free from payment notes, not used on standard version.

The **Final Notes** field is used in payments accounting in order to valorize the detail description of accounting movement of bank detail account.

The **accounting of the operation** flag enables the user to get the maturity values closing and the related double entry movements of payments in creation: if it is not used, as a result it will be possible to use the distinct accounting procedure.

The accounting template has to be used for record of record and payment dates, detail account for survey of active allowances inserted into list (this detail account is proposed according to the 'Casual Profits' detail account inserted into accounting parameters), optional document date and number to be inserted as record header reference (it could be the list number/date).

On the right there are an automatic survey flag of **maturity values closing** (proposed automatically, it has not to be cut) and the grouping management criteria in accounting: the automatic option, bank grouping, enables the user to obtain a record for each outgoing bank detail account , that is the best management in order to simplify the bank movements reconciliation from report of account statement. As an alternative it is available even a grouping per vendor detail account and a record option detailed payment by payment.

If the accounting template provides for bank currency date management and within the bank register it has been possible to set a number of days for its calculation in relation to the accounting template used, the field will be managed automatically in the result record.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions on procedure in use. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Start Creation of Payments from Maturity Values | Button to create payment/list and if possible the same payment accounting. The button is active after the selection of at least a maturity value on the first Tab and after having specified the payment bank of this Tab. |






