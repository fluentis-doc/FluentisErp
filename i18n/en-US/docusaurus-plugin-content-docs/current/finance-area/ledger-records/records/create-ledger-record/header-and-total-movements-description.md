---
title: Header and Total Movements Description
sidebar_position: 1
---

The various fields within the record header, in loading order, are:

**Record Date**: in a new record, this date is set as system current date but it can be shifted according to the chronological order of  the VAT reference, to the possible periods (definitely printed) and to the parameters. This date is very important because there is no need to go through a 'Accounting Period Change': the application, on the base of the record date, will search the year of the accounting parameters of reference (defining the date-range of the company). Starting from this year, the application will search the other control dates ranges (Accrual dates in line and period dates in line). This date is the one at the bottom of the report of the Journal and of the account statements. If the button 'New record' is selected,  it is possible to set user parameters from the current record. In this way, this field will be present even in the new record.

**Record Number**: is a daily record counter; the combination 'record-date' + 'record number' ensures that the record is univocal and unambiguous.  The daily counter gives the user the possibility to register on more dates. Record number is automatically managed by the procedure: in particular, during the saving step, the definitive correct number is assigned by the application that is able to discover missing numbers of the related record date. Deleting a record at X date causes a 'hole' in the numeration of the record date itself; only through the insert/edit of one of the records of date, the number will be recovered. In case of temporary record, this number will rely on a negative progression, starting from -1000, in order to make the user aware of the record status. Report and accounting searches are set in order to filter, by default, only definitive records.

**Accrual Date**: is the date of reference for the period balance sheet: usually it is always the same of the record date, except for adjustment records and the related account closings/openings,  that can even have June as record date but they have 12/32-01/01 as accrual date. Be careful: this date CANNOT be used to note down 'invoices to be received' at the end of the year. It is suggested to keep this date and the record date always the same: in accounting there are reports that work relying on record date, others on accrual date, others that give the user the possibility to filter for both, obviously results would be different depending on filters used. Within user management parameters, it is possible to set accrual date equal to record date.

**Detail Account**: this field is obligatory only for VAT records, as it is linked to customer / supplier register, holder of the recorded document. This field, normally, should not be filled in case of payment /collection records, since usually in the same record  the user makes payments / collections on different subjects and this is used as a filter of the open maturity values  in the 'Payments' form. If the button 'New Record' is selected, from the current one it is possible to  set user parameters so that this field will appear in the new one. The ledger template, then, can provide concordance control (in 'soft' notice and as a block) between the account type entered and what is provided by the ledger template: the substitution is permitted depending on the accounting parameters,  Customer/vendor accounts list.

**Template**: this field is mandatory; every record is based on a  reference template that regulates the features and the functioning. Once the record has been saved, this field is not editable (obviously other fields will be blocked in case that VAT book or journal have been definitely printed or the automatic closure of accounts has been completed): if the template is not correct, it is absolutely necessary to delete and re-enter the records with the correct code. If the button is selected to create a 'New Record' from the current one, it is possible to set user parameters so that this field will also appear in the new one.

**VAT book**: is reported by the selected accounting template: it can be edited manually by the user but this kind of operation is not recommended (it is much better going to encode a new specific template of the second VAT book).

**VAT reference**: is a numeric field that is automatically managed by the procedure for each register: at the opening of the mask the last reference +1 will be suggested for the set register, then, while saving  it will be confirmed or not depending on the case; other 'saves' may have been recorded for that register or VAT reference to be recovered (reference recover: the 'recovery' changes depending on the template, if the 'save block' with progressive numbering is active or not because with the save block a free reference will be recovered at the same record date, without the block a protocol even not valid for that date will be suggested together with warning messages to the user). 'Reference' field is disabled in case of temporary record.

**Document Type**: is suggested by the procedure depending on the value set in the general ledger template: it is editable, but normally this kind of edit is not necessary (typically it is used to specify the documents of VAT book, but this is already in the template, while all the other movements will always rely on a generic type of document ). The field of document date becomes mandatory depending on the settings of accounts template (flag document date in the second tab): this date cannot exceed the date of the record and must be within the range of validity dates related to the period in line with the accounting period of record. If the button 'New record' is selected from the current one, it is possible to set parameters so that this field will also appear in the new record.

**Document Number**: is an alphanumeric field made by 20 characters: depending on the settings of template the application blocks the same number as well as the same year (taken from document date) and the same type (document type field) for the same code entered in the detail account field that is in the upper part of the record ( this block is inserted by default on every accounting template but it can be disabled). In case of equal number/year/detail account but different type, a warning message is sent to the user. The same message is sent in case that the same reference is saved in a temporary record.

**Job Order**: this field is active only if the accounting template provides job order management: this job order is a reference point for the whole record but it is possible to re-assign values inside Job order form. Field filling uses Help Job Order to filter the active Job orders inside the selling job orders belonging to the selling area.

**Currency**: is suggested by the register of record or by the company: it can be changed every time. Once that the record is saved the field is no longer editable.

**Currency Date**: corresponds to the date of  the exchange rate taken as reference, entered in the currency exchange chart; the procedure reads the last date entered in the chart. In the management parameters, this date can be set as record date (default) or as document date. A 'warning user parameter' is active when an exchange is not set at the record date ( and so, a previous exchange rate is used).

**Exchange Value**: is based on the value entered in the currency exchange chart: it is the reverse value comparing to the one that it is normally found in the exchange currency ( this is because the procedure kept the logic 'certain for uncertain'- 1 euro corresponds to x units of the other currency). This value can be manually forced by the user (typical case: payment/collection template in currency, exchange rate value applied by the bank is never the official one)

**Total Currency/Total Document**: these are fields linked by the exchange, so, regarding euro-records, writing in one field or in the other one does not make any difference. Within the accounting template, these fields are automatically updated according to the data variations inside the VAT grid; normally they increase but they can even decrease if this is set in the template. Template- saving can be blocked if this amount does not correspond to the record VAT data.

**Total VAT**: this value is automatically updated by the procedure, it is not necessary to enter it manually.

At the Ledger Record bottom, within the record form, there is the description of the ledger record:  it is a note that can be set inside the accounting template thanks to the use of numeric codes  (1) (2) … (10)( (8) and (9) codes are used only in the description of detail accounts within the journal section). Double click on the field enables the user to start a research among the coded notes ( a procedure belonging to 'Tools'-'Utility'): the manual edit of this description  will be reset  after user's confirmation, once that one of the field automatically managed within the notes has been edited.

At the bottom of the mask it is possible to find other VAT data and record summary fields: record unbalance fields are particularly important. Normally the visualization of this kind of unbalance is not permitted but it can be activated within the template settings. The unbalance will appear as amount in the new accounting lines, manually entered in the record. 

Ledger Record Creation procedure includes:

RIBBON BAR: it represents the Form menu that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Save | Button to save the record. |
| New Record | Button to save a new record. |
| Insertion Parameters | It refers to the insertion parameters of the first note. |
| Open Register | Button to recall the Register Management of the selected detail account, or the search of another Register. |



| Function | Meaning |
| --- | --- |
| Document Manager | Button to connect to the document management. |






