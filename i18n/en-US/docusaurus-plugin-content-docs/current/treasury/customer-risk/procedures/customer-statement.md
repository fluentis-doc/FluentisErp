---
title: Customer Statement
sidebar_position: 2
---

The 'Customer Statement' mask enables the user to control all the risk situation towards various customers, with the possibility to obtain data per agent, nation, and by grouping per company groups. Let's see the settings and values in details, considering that customer in mask are those for whom it has been necessary to insert 'Customer Statement' flag in register.

The first section if customer risk parameters proposes again the same automatic calculation parameters set for module, together with a record date range used in order to control remittances (for further details refer to the following document).

In the following section of header it is possible to filter per a specific person in charge (employee who has been associated to customer register, first 'administration' tab), to filter 'Foreign' or 'Italy' customers, to view data grouped per 'company group' located in administration tab of customer register instead of single detail customer detail account) and lastly to group (and filter) data per agent or nation. On the right there is the possibility to order data per account/detail account code or per customer description (company name).

Let us now to detail data that can be viewed in the grid (on which it will be possible to view lines with variance through the use of red colour):

**Unpaids**: it is possible to view the unpaids amount not recorded, or (if flag is inserted in header) even those already recorded;

**Last 12 Months Invoice**: it corresponds to the turnover (of sales area, sales invoices) about the previous 12 months respect to the reference date;

**Variance Days**: it indicates the number of variance days between medium due date and medium collection currency date, according to the calculation made with the logic of 'Remittances Control' mask, as mentioned before;

**Maturity Variance Days**: it indicates medium variance days of due date compared to document date;

**Turnover**: it is the turnover (of sales area, sales invoices) from the beginning of the year;

**DSO**: Days of Sales Outstanding. The calculation formel is 365 * (Credit – Debit Maturity Value + Expiring Bills + Unpaids + Invoices to be Accounted) / Last 12 Months Invoices. If the turnover of last 12 months is 0, also DSO will correspond to 0;

**Credit and Credit Insured**: management credit amount and credit insured;

**Ledger Balance**: it proposes again the total debit/credit calculated from maturity values or ledger balance;

**Paym. from Temp. Rec.**: payment amount of maturity values linked to temporary records;

**Expiring Bills**: bills amount in maturity (issued + presented bills);

**To Be Accounted**: correspond to the invoices amounts (of invoice type linked to credit) that have been printed but not yet accounted;

**To Be Invoiced**: correspond to the delivery note amounts (of DN type linked to credit) that have been printed but not yet invoiced;

**Total Statement**: opened orders amount + DN from invoice + invoice to be recorded + maturity value/ledger balance + bills that fall due + not accounted unpaids;

**Expired**: amount of opened but already expired maturity values

**Overdue from Temp. Rec.**: as the previous one, but that come from temporary records;

**Orders**: correspond to the orders amounts (of order types linked to credit) that have been printed, confirmed but not yet executed.

Through the customer statement mask it is possible: to print the viewed data, or to pass to the 'Control Remittances' mask related to the selected customer line, through the related management button.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions about a pre-existing document rather than to create a new one. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Calculate | Button to calculate the customer risk according to the indicated filters and settings. |
| Preview | It refers to the print preview procedure for the performed calculation. |
| Print | It refers to the print procedure for the performed calculation. |
| Remittances Control | It refers to the procedure in order to open the remittances control mask. |

FILTER AREA: The filter area contains the list of the possible data types thanks to which it is possible to perform a selection, a research on the total of data inserted in system. Typically Filters have 'AND' condition and it is possible to specify more filter criteria at the same time.

RESULT GRID: the result grid represents the import list that belongs to the filter data above mentioned. After having specified values through which to obtain a search of inventory items the user, by clicking on the [Calculate] button in the related Ribbon, will obtain the list of statements in the result grid.






