---
title: Customer Statement
sidebar_position: 2
---

The form is located in Treasury > Customer Risk > Procedures > Customer Statement 

It provides an overall view of the entire risk situation concerning various customers, with the possibility of obtaining data by agent, country, and also grouping by corporate groups.

## How to Check Customer Statement 

1. Expand, if necessary, the filter section to enter the reference date range within which to check and the desired grouping criterion (By country, by agent, or by customer).

2. Press the **Search** button: the customers displayed on the screen are those for whom the flag *Customer Statement* has been set in the registry.

:::note[Note]
The initial section of the *Customer Risk Parameters* reproduces the same default calculation parameters set for the module, in addition to the registration date range used for remittance control (for details, see the following document).
:::

:::note[Additional Available Filters]
It is possible to filter by a specific manager (the employee associated with the customer registry, first *Finance* tab), filter customers as *Foreign* or *Italy*, view data grouped by *corporate group* (only one total will be shown for the detail account entered in the *corporate group* field present in the *Finance* tab of the customer registry instead of the detailed individual customer detail accounts), and finally group (and filter) data by agent or country.

There is an option to sort the data by account/detail account code or by company name.
:::

### Data Displayed in the Grid 

Rows with discrepancies will be displayed in red.

**Unpaid**: this shows the amount of unaccounted outstanding debts, or (if the flag in the header is set) even those already accounted for;

**Sales Last 12 Months**: this is the revenue (from the sales area, sales invoices) for the 12 months prior to the reference date;

**Days Discrepancy**: indicates the number of days of discrepancy between the average due date and the average collection value date, according to the logic calculated in the 'Remittance Control' form, which is referred to for details; the peculiarity is that it is a weighted average based on the amount of the item. In fact, the data is expressed in creditor numbers (as in a bank statement).

**Average Days Due Discrepancy**: indicates the average days of discrepancy of the due date concerning the document date; it only considers overdue items = SUM (remaining item * days overdue from due date) / sum of remaining items. Thus, it calculates an average value of delays.

**Invoiced**: is the revenue (from the sales area, sales invoices) since the beginning of the year;

**Average Collection Days**: equals the indicator known as DSO (Days of Sales Outstanding), the days of credit rotation. The calculation formula is 365 * (Receivables – Payables + bills due + Outstanding + Invoices to be accounted for) / Sales Last 12 Months. If the sales of the last 12 months are 0, then the DSO will also be 0;

**Credit and Credit insured**: amount of the management limit and the insured limit;

**Ledger Balance**: reproduces the total debits/credits calculated from the items or from the ledger balance;

**Payments from Provisional Registrations**: amount of payments linked to provisional registrations;

**Expiring bills**: amount of bills in maturation (issued bills + presented);

**To be accounted**: these are the amounts of invoices (of Invoice Types linked to the credit limit) printed but not yet accounted for;

**To be Invoiced**: these are the amounts of delivery notes (of Delivery Note Types linked to the credit limit) printed but not yet invoiced;

**Total Exposure**: sum of open orders + delivery notes to be invoiced + invoices to be accounted for + detail account/account balance + bills due + unaccounted outstanding amounts;

**Expired**: amount of open and already overdue items;

**Overdue from Provisional Registrations**: like the previous one, but derived from provisional registrations;

**Orders**: these are the amounts of orders (of Order Types linked to the credit limit) printed, confirmed but not yet fulfilled.

From the customer exposure screen, it is possible to: print the displayed data or move to the ‘Remittance Control’ screen regarding the selected customer row, through the respective management button.



**Specific Buttons**

**Calculate**: Button to calculate customer risk according to the indicated filters and settings.

**Remittances Control**: Calls the procedure to open the remittance control screen.