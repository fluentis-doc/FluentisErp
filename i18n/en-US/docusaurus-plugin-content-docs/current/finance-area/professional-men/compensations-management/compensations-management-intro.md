---
title: Compensations Management
sidebar_position: 1
---

Through this mask it is possible to load/edit document received by professional man or by agent, both in case of temporary fee and definitive invoice: the difference between them will concern only the immediate or following insertion (by editing a temporary fee) of fields related to the definitive number and document date.

The first field of compensation regards the insertion of the compensation detail account: it is possible to insert on this field only detail accounts with agent account type or vendors that have withholding-tax flag set on register.

The following status flags are: accounted, managed automatically by the application at the moment of the compensations accounting. Once having set this flag the compensation will not be edited. The paid withholding-tax will be applied at the compensation manually or through the 'Withholding-Tax Paying-In' procedure that can be performed by 'search compensations' mask. The 'certified' flag is set automatically by the program during the definitive print procedure of withholding-tax certifications.

Linked to the agent or vendor detail account, it is possible to set the withholding-tax type to be proposed at the moment of compensation load.

The following notes field enables the user to note a reference text about compensation: it regards a note that will be reported into detail notes of all accounting movements linked to this compensation. Immediately afterwards there is a field called 'Movement Description' that will be used during the compensations accounting procedure for the same field of ledger record.

On the right there is the number and year of compensation: it regards an automatic internal numeration of program that must be univocal for company. The date field is proposed as the current date but it can be set as date of the temporary withholding-tax fee.

The fields about date and definitive document number regard reference to definitive invoice: they are obligatory fields to account compensations, even if the reference template has not to be a VAT template. These two fields will be the only ones that could be edited in case that payment has been already recorded in accounting.

The job order/year field is necessary in order to link compensation to a sales job order: as for example a survey on a construction site managed per job order. If the reference accounting template manages the job orders, it means that charges inserted into this compensation will be assigned to this.

Currency date and exchange are linked to the management of currency and of the related exchange data taken by exchanges table (currency is set by the agent/vendor register).

Within the compensation details there will be the possibility to load all compensation detail lines: starting from the 'service cost' line type the application will propose the amount origin and withholding tax percentage read by withholding tax type, cost detail account will be reported by the offset cost of agent/vendor (there could be the cost detail account of offset and analytical accounting data as defined on the linked cost template), cost in currency and in euro, Vat rate to be applied (proposed even this according to register), the social insurance fund to be calculated on line (proposed by withholding-tax type) and reference economic accrual dates. These are managed for the connected user according to the related management parameters (that can be set thanks to the specific button on this mask): the following lines will propose automatically the range set on the previous line.

The following line types are: insurance fund, for which the application will propose 0% application percentage of withholding-tax and value calculated automatically according to the percentage that is on service charges line, previously loaded.

The **enasarco** line type has not to be used.

The 'other' line type is managed as amount subject to withholding-tax (but the user can force that setting): it concerns usually the expenses refunded inserted into compensation list, that can be or not subject to withholding-tax and thay are not usually VAT taxable.

During the saving of compensation there will be the possibility to perform control messages in case in which maturity value does not correspond the total to be paid, as well as the non-balancing data per cost/profit centre.

Once having performed the compensations accounting it will not possible to edit compensation data: in case that the pyaments accounting or enasarco have not been performed, it will be edited the references to defintive document number/date, movement description and detail account inserted into the details grid.

In conclusion, it is possible to create a new compensation directly from the previous one that has just been saved through the specific management button: the new compensation will have some elements taken by the previous one, according to user settings loaded. In case that a compensation is saved and has definitive document date and number, it will be possible to go on to the accounting procedure through the related button: for this reason a mask will be opened on which proposed dates will be the last valid ones for the VAT register associated to the withholding-tax type template.

There is also a print button about the compensation in use.

RIBBON BAR: itr represents the Form menu, that is the area in which it is possible to perform actions linked to the fixed asset in management. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | It saves the compensation in management. |
| New Compensation | It creates a new compensation starting from the current one. |
| It creates a new compensation starting from the current one | It enables the user to define the user parameters for the compensation management. See application a. |
| Accounting and Close | It is active with the insertion of definitive date and document number, it enables the user to perform the compensation accounting. |
| New Detail | It activates the cursor at the insertion of a new compensation detail line. |
| Delete Detail | It deletes the detail lines selected on compensation. |



| Function | Meaning |
| --- | --- |
| Document Manager | Button to connect to the document management.  |

APPLICATIONS:


 1. Within user parameters it is possible to set if the new compensation has to consider the same detail account as the current one, the same withholding-tax type, as well as to manage the new document date and lastly to manage the range of economic accrual dates (accounting period end – that refers to the same end date as the start one, no date regarding the services account type. For this reason there will be necessary to insert both dates, in case that the inserted detail account is set as 'service').






