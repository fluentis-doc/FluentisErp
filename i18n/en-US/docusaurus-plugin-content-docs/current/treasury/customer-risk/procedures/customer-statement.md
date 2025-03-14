---
title: Customer Statement
sidebar_position: 2
---

The form is located in Treasury > Customer Risk > Procedures > Customer Statement (Tesoreria > Rischio Cliente > Procedure > Esposizione clienti)

It provides an overall view of the entire risk situation concerning various customers, with the possibility of obtaining data by agent, country, and also grouping by corporate groups.

## How to Check Customer Statement (Come verificare l'esposizione clienti)

1. Expand, if necessary, the filter section to enter the reference date range within which to check and the desired grouping criterion (By country, by agent, or by customer).

2. Press the **Search** button: the customers displayed on the screen are those for whom the flag *Customer Statement* has been set in the registry.

:::note[Note]
The initial section of the *Customer Risk Parameters* reproduces the same default calculation parameters set for the module, in addition to the registration date range used for remittance control (for details, see the following document).
:::

:::note[Additional Available Filters (Ulteriori filtri disponibili)]
It is possible to filter by a specific manager (the employee associated with the customer registry, first *Finance* tab), filter customers as *Foreign* or *Italy*, view data grouped by *corporate group (gruppo societario)* (only one total will be shown for the sub-account entered in the *corporate group (gruppo societario)* field present in the *Finance* tab of the customer registry instead of the detailed individual customer sub-accounts), and finally group (and filter) data by agent or country.

There is an option to sort the data by account/sub-account code or by customer description (ragione sociale).
:::

### Data Displayed in the Grid (Dati visualizzati in griglia)

Rows with discrepancies will be displayed in red.

**Unpaid**: this shows the amount of unaccounted outstanding debts, or (if the flag in the header is set) even those already accounted for;

**Sales Last 12 Months (Fatt. ultimi 12 mesi)**: this is the revenue (from the sales area, sales invoices) for the 12 months prior to the reference date;

**Days Discrepancy (Scostamento giorni)**: indicates the number of days of discrepancy between the average due date and the average collection value date, according to the logic calculated in the 'Remittance Control (Controllo rimesse)' form, which is referred to for details; the peculiarity is that it is a weighted average based on the amount of the item. In fact, the data is expressed in creditor numbers (as in a bank statement).

**Average Days Due Discrepancy (Scostamento GG scad.)**: indicates the average days of discrepancy of the due date concerning the document date; it only considers overdue items = SUM (remaining item * days overdue from due date) / sum of remaining items. Thus, it calculates an average value of delays.

**Invoiced**: is the revenue (from the sales area, sales invoices) since the beginning of the year;

**Average Collection Days (Giorni medi incasso)**: equals the indicator known as DSO (Days of Sales Outstanding), the days of credit rotation. The calculation formula is 365 * (Receivables – Payables + Effects due + Outstanding + Invoices to be accounted for) / Sales Last 12 Months. If the sales of the last 12 months are 0, then the DSO will also be 0;

**Credit Limit (Fido) and Insured Limit (Fido assicurato)**: amount of the management limit and the insured limit;

**Sub-account Balance (Saldo partitario)**: reproduces the total debits/credits calculated from the items or from the accounting balance;

**Payments from Provisional Registrations (Pagam. da reg. provv.)**: amount of payments linked to provisional registrations;

**Effects Due (Effetti in scadenza)**: amount of effects in maturation (issued effects + presented);

**To be accounted**: these are the amounts of invoices (of Invoice Types linked to the credit limit) printed but not yet accounted for;

**To be Invoiced**: these are the amounts of delivery notes (of Delivery Note Types linked to the credit limit) printed but not yet invoiced;

**Total Exposure (Tot. Esposizione)**: sum of open orders + delivery notes to be invoiced + invoices to be accounted for + sub-account/account balance + effects due + unaccounted outstanding amounts;

**Expired**: amount of open and already overdue items;

**Overdue from Provisional Registrations (Scaduto da reg. provv.)**: like the previous one, but derived from provisional registrations;

**Orders**: these are the amounts of orders (of Order Types linked to the credit limit) printed, confirmed but not yet fulfilled.

From the customer exposure screen, it is possible to: print the displayed data or move to the ‘Remittance Control (Controllo rimesse)’ screen regarding the selected customer row, through the respective management button.



**Specific Buttons (Pulsanti specifici)**

**Calculate**: Button to calculate customer risk according to the indicated filters and settings.

**Remittances Control**: Calls the procedure to open the remittance control screen.