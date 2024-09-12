---
title: Record Tab
sidebar_position: 2
---

The first section inside the 'Record' form, available just for VAT records, is related to the VAT detail of the document that is recorded in that moment. If a new record is manually entered, the section can be filled in various ways:

- **Customer/vendor/agent Register**, entitled of the record, does not have any predefined Offset Detail Account and standard VAT rate: in this case the user choose the VAT operation type (check the following details) as well as the detailed account of the line and the related VAT rate. Once that this has been set, the procedure will break the total of the document/record entered in the upper part to assign the amount related to the line. The user can edit these and go through new entries that keep the same enter-logic  but the amount suggested  is calculated on the base of the missing difference that covers the total amount of the record.

- **Customer/vendor/agent Register** includes the predefined Offset Detail Account and the VAT rate: once entered the type of VAT movement , the procedure suggests the Offset detail account and/or the predefined VAT rate, the amounts are entered (like the previous case) by breaking the document/record total and the user can manually edit them: the next line, again, suggests from the register detail account/VAT rate and the amount obtained from the Remainder covering document/record total.

- **Customer/Vendor Register** (it is not provided for the agents) includes a list of offset detail accounts, no predefined offset detail account, VAT rate is also available: in this case the application suggests, directly in the VAT section, the list of the predefined  offset detail accounts, any one of them with the related VAT rate or the VAT rate predefined by the register and the user has to  manually enter the amounts, line by line. In this case, the manual enter of a new line does not suggest the related detail account but just the VAT rate, by breaking the missing amount covering the total.

The list of the types of VAT movements, a fixed chart inside the system, includes the following list:

**General**: it is the standard VAT movement, sufficient in almost every case. In some VAT procedures, this kind of line is considered as merchandise movement.

**For Resale**: for the purchases that are  the base of the calculation of the percentage that has to be applied in the  'Valuable Consideration Allotment' (for instance: supermarkets or pharmacies: these retailers do not apply the VAT 'article by article'. They can make a total amount of the end term sellings , then divide the amounts according to the amount of the article purchased within the term).

**Roundings**: they are the roundings outside the VAT field, for example phone bill. The utility of this indication is minimum, but the related detail account is entered according to the logic explained above.

**74 terVAT Sale**: it is a specific movement for travel agencies. For these agencies the VAT accrual date shifts of 30 days  after the date of the operation (I sell today, the VAT must be paid in the settlement of the next month). On these lines is applied the 74 ter VAT management with the  related period VAT settlement.

**Resale**: purchases on which the application will apply the calculation of Valuable Consideration Allotment.

**Not Agricultural Operation**: it is a kind of specific movement for the companies subjected to agricultural system . It takes a specific line out of this system.

**Service**: it a kind of specific movement to understand that the  line comes from a purchasing/selling  of services, an important element for certain VAT procedures.

For the next VAT grid fields it is necessary to mention:

**% non-deductibility**: is taken from the VAT rate entered in the line. The manual forcing is not suggested, the correct procedure is editing the VAT RATE

**VAT**: it can be forced manually comparing to the calculation made by the procedure: purchasing document can have an incorrectly managed rounding, the user has to register the document as it is received.

**Total currency/total:**they are fields calculated and not  stored in the database.

**From accrual date/ to accrual date**: they are the economic accrual dates, essential for automatic calculation of the adjustments and integrations, in terms of Mid-Year Balance Sheet and accounting balance. This range of dates in managed, user by user, in three different ways: 'Account. period end' (the initial date is suggested according to the document date and the final one as Account. period end date: not suggested option), 'Daily' (both dates are set according to the date on the document) and 'No date for types of services account' that is the suggested option. In this case, the application does not suggest a date for the economic detail accounts that include in the account type 'service' flag but it forces the user to manually insert the right range (while in the other cases it suggests the same document date on both dates). In this way we are sure that the user correctly manages the expertise range, for instance the detail accounts of insurances, rent and periodical fee.

**Period**: it is the VAT reference period for the record, obtained by settlement type and VAT accrual date. The field that is actually used in the settlement is VAT Accrual Date.

**VAT Accrual Date**: the field is suggested in respect of Ledger Template setting, typically as record date for the purchases and document dates for the selling (if it is selling 74Ter, then it is document date+30 days). This is the date at the bottom of Period VAT Settlement print.

**Plafond Accrual**: this date is suggested as document date for all the VAT rates that include VAT plafond management

**Ch. note for prev. Years**: the field is active only for the records with document type that includes 'Variation Note' flag. It indicates that the line of the credit note refers to previous years comparing to the year of the document, for the calculation of the related field of the Customers/Vendors list

**Ref. date of var. note**: the field is active only for the records with document type that includes the flag 'Variation Note'. It indicates the reference date of the variation note.

**Division**: the field in visible just if the template includes divisions management. In this case it is possible to divide the same VAT  record among various company departments.

 

Further notes:

- It is not possible to save VAT lines with the Amount origin 0, unless the ledger template permits it.

- VAT roundings are managed line by line, while the rules state that the calculation must be done according to an Amount Origin that gathers all the lines under the same VAT rate: it is possible that a difference, that comes from roundings management in respect of record document,  occurs ( this is true for the manual entry of a ledger records; the automatic accountings from purchasing and sellings already made the correct calculation). Once the difference has been noticed the solutions are : 1) Manually force a VAT line 2) Press the Recompute VAT value button that is in the upper part then let the application automatically align the last line of every VAT rate.

The second grid of the 'Record' form is related to the Journal section: in order to be saved, every general ledger record must have lines in this section.  In case of VAT records, this part is calculated according to the logic of amount types and the data uploaded in the line of the previous VAT part; in case of payment/collection records, the amounts rely on the payments amounts uploaded in the 'payment' form; in the other cases, the lines and the amounts are manually managed by the user that must take in account that:

- The template can suggest a list of preset detail accounts (ex. Template of the employees pay): in this case the user must enter every line, one by one, and enter the amount in the proper section (be careful: the signs set in the template DO NOT  force the user to enter in the same section). At the moment of 'save' if the template does not authorize, the detail accounts without a value are automatically deleted.

- In case of a simple record of 'debit/credit' it is possible to code a specific template that already includes the detail accounts that have to be used together with the amount type 'Tot. Doc/ Record' . In this way the user just need to write the amount in the amount fields in the upper part and the procedure puts them in credit/debit according to the template.

Every new manual entry in the lines covers the unbalance inside the record: the unbalanced records cannot be saved unless the template is enabled.

 

Other fields are available:

**Template**: it can include currency details (exchange date, exchange value and  currency amount): the amount of the currency has to be loaded always in absolute value (the sign credit/debit in the currency of the company defines the sign);  the fields with currency and company currency can be separated without the recalculation of the amounts at the confirmation messages, executed to edit the amounts. 

**From Accrual Date/To Accrual Date**: this date range, as already mentioned for VAT section, it is fundamental to manage the adjusting entries for Mid-Year Balance Sheet and accounting balance.

**Division**: can be available, if it is set in the template: it divides the record on more divisions.

**Detail Description**: can be available, if it is set in the template (we suggest to use it by default on every template):  this can be partially managed in the template with the note (1)-(2)… etc as for the general description. The management of the codes (8)-(9) regarding the accounting maturity value closing of customers/vendors lines.

**Curr.dt.bank**: it can be useful to manage the print of the bank statement from the module 'current account'. The field can be automatized in respect to the number of days set, on every bank register, for every related accounting template.

**Line Numb.**: it is useful for the long records (ex. Payment); it maintains the entries order of the detail account

**M.V. manual ref.**: can be available, if it is set in the template:  it is useful to manually link accounting lines withou t passing for the Open maturity values management.

**Offset detail account**: can be available, if it is set in the template: we do not suggest to use it. The automatic management of the VAT records assigns cost/profit detail account (of greater amount)   to the customers/vendors lines. For the cost/revenue/VAT lines, the offset is the customer/vendor detail account.

Notes for the section: The user, even in VAT record, can manually force the line of the Journal: normally we suggest to align the data, starting from the VAT. Possible forcing operations can be reset by pressing the button of Journal recalculating.

In the accounting template, in particular for all the VAT templates, for the line 'Tot. Doc./ Record' insert the general account of customers/vendors that will be replaced every time with the detailed account of the record: this replacement is done just in case that in the accounting parameters in the section accounts customers/vendors list, the typology of detailed account is authorized.






