---
title: Account Statement
sidebar_position: 3
---

It is the basic report to get the details of the accounting movements of every detail account of any kind (active, passive, cost, profit, register): with the standard report for every detail account there is a new print sheet.

Report distinctive elements are:

- Through an agent filter it is possible to request the Account Statement of the customers that have this agent in the register;

- through 'View Amounts in Currency' it is possible to request data (A4 format, horizontal). Without this flag it is possible to see only debit/credit data in the currency of the company (A4 format, vertical) or to set the 'View Offset' with the number of movements of the offset to be showed (A4 format, horizontal). Finally it is possible to view the movement expressed with a specific currency (A4 format, horizontal). These settings are recorded at single user level in order to view them at the next mask opening;

- it is possible to sort records by record date or by accrual date. This setting is recorded at single user level and re-occurs at the next mask opening. The option is interesting if the account closing/opening is made with different record/accrual dates in order to get a meaningful progressive balance;

- It is extremely important explain the management of the filters by dates in respect of the 'Account Opening Last Date'. In the 'Account View', movements of every detail account are always visible; on the contrary, the report is a print process that takes in great consideration the amount of records to be viewed in order to optimize performances of the machine. In this sense, the application, suggest movements while printing, considering the original balance starting from the date of the last account opening. To simplify, if the user filters movements from the 09/01/2007 to 12/31/2007 (both as record date and accrual date) the procedure suggest the last account opening with date 01/01/2007, the result is: original balance calculated from 01/01/2007 to 08/31/2007, detail of movements linked to records with date within the range 09/01 21/31/2007 (so the report includes just the detail accounts that have at least a movement between the last  date of account opening and the final date of the filter). If the user deletes the last date of opening account the result will be the same as the one in the account view.

The last detail worth mentioning is the standard file called  Synthetic  Account Statement that can be linked to the report; it is a synthetic report that enlists all the detail accounts, without any page interruption. We suggest to use this report to print t-account to be attached to the accounting year closing reports.

The standard report  Account Statement (offset) and Account Statement (no currency) are not used but, thanks to some parameters in the same standard report Account Statement, they are integrated.

RIBBON BAR: it represents the form menu, that is the area in which it is possible to perform actions. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Preview | Button to perform the print preview of the account statement.  |
| Print | Button to print the account statement document.  |






