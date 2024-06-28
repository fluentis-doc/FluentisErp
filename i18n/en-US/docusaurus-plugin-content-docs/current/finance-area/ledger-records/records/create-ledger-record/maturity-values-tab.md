---
title: Maturity Values Tab
sidebar_position: 3
---

The Maturity Value tab is available only if the template has the  'opening mat. val' flag set.

The first section of the form 'Maturity Value' is dedicated to the management of the data calculation of the following maturity values: for a manual VAT record it is possible to find the grid filled with the default data as entered in the customer/vendor/agent register assigned as detail account of the record itself. For other kinds of records (for instance advance payment) it is possible to code a template that opens the maturity value, with the opposite sign, instead of closing it because the document has not be noted yet: in this case the management of this section becomes manual, so that the user can enter the basic data related to the payment type, payment solution and detail account of reference, with the 'percentage' field 100% filled.

For this section it is important to notice that:

- The maturity value can be created on the detail accounts that are not part of the register, that do not have the flag 'Opening mat. Val' in the chart of accounts (this flag is related just to the control that data of the Journal and of the maturity value correspond to the detail accounts that have this control option set)

- The bank supports are typically reported by the register or by the accounted document of purchase/sales/professional man areas, but they can be forced every time by using the help of  IBAN. The bank support linked in this section is the figure normally used during the payment to the vendors, that is to the bank which receives money unless the flag 'impose the support bank in the vendor register' is ticked.

- Normally the field 'percentage' is entered. The meaning of amount/tax is the following: in the amount field it is possible to enter a fixed amount that can be used for the combination like payment/payment term of the managing line; the field tax enables the user to define, of a certain amount, what can be attributed to VAT (this is useful in case that the payment solution includes Amount origin/tax different according to the various installments in order to get a correct amount). It is possible to enter a combination amount/percentage (already in the register): the procedures will assign a value to the maturity value with the type/solution of payment until the complete cover of the amount and, on the surplus,  it will calculate according to the percentage of the alternative line (for instance amount 1000 for 30 days BB, 100 percentage for 60/90 RB: if the amount is 1500,  a maturity value of 1000 for BB 30 days will be created, two maturity values of 250 as RB of 60 and 90 days).

- 'Grouping mat. Val' flag that is on the left side is taken by the register of customer/vendor: basically it has not a practical use, since  it is not usual that two maturity values has the same kind of payment and the same expiring date within one document.

- Some summary fields of the customer/vendor situation are: the amount of the credit released in the Customer Risk module, the value of the presentation obtained according to the situation of the open maturity values (without considering the current registration) and the Ledger balance (considering the current registration).

- Regarding the case of a record that comes from the Unpaid accounting, the upper grid does not have any relevance for the calculation of the maturity values below (typically register includes maturity values for RB but the unpaid are managed as BB and it is not automatically necessary to re-enter other Interim Account.)

The grid below displays the list of the maturity values calculated according to the settings explained above: the user can force the type of payment, the expiring date to let it correspond to the document data; the user can even force the import of the various installments (Respecting, manually, the amounts). More important is the possibility to block the payment of the maturity value: procedures will record the date and the user that has blocked the payment (with a possible explanation note attached), as well as the date and the user that unblocks them (for both the activities it is necessary to have specific user rights within ArtinfoUserManager). Other manual management elements are: mat. Value position, that is a free table (that can be set by the user) to classify the accounting maturity values starting from the moment in which they are entered; Maturity value notes that can be automatically attached in the Ledger template at the description of the detail account as it is inserted in the accounting. The maturity value grid DOES NOT allow the manual enter of a new installment. The last field includes the possibility to assign (or change) the agent of reference for the maturity value: this can automatically get a value relying on the agent entered in the sell invoice during the accounting (if more than one agent, it will be assigned the one with more commissions). If the template includes the Opening mat. Value and the Maturity Value Compensation and the 'Warning' flag is ticked, when saving the record, the user gets a message of maturity values that can be compensated.

RIBBON BAR: the ribbon bar represents the form menu, that is the area on which it is possible to perform actions. The list possible features list is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save record. |
| New Record | Button to create a new record. |
| Insertion Parameters | It refers to the enter parameters of the first note. |
| Open Register | Button to recall the register management of the selected detail account, or the search of another register. |
| Delete Maturity Values | Button to delete the maturity values automatically created according to the payment modality inserted. |
| Delete Payments | Button to delete the payment solution, automatically suggested by the register or manually inserted. |
| Recompute Maturity Values | Button to recalculate the maturity value that has been manually forced. |
| Group Maturity Values | Button to group maturity values with more than one maturity value with the same due date. |



| Function | Meaning |
| --- | --- |
| Document Manager | Button to connect to document management. |






