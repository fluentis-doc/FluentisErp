---
title: Integration Records
sidebar_position: 5
---

We are within the Mid-Year Closures module and select the procedure ‘Integration Records’. The mask allows for the separate management of integration operations that can be executed simultaneously with the creation of a new mid-year closing.

To manage the procedure, it is sufficient to set the reference closure, the start date for the relevant competency, the type of calendar to use (it is advisable to leave the solar calendar), and the reason to use (which must have the cdc/cdp flag to manage the integration of the cost/profit centers).

With this procedure, the system will check, starting from the 'Start date for the integration records', the cost/revenue lines present in the accounting that have not been included in the closure (i.e., registrations outside of the registration/competency date ranges set at the time of the recovery from accounting), to create accrued expenses for the days within the economic competency date range. The detail accounts to be used will be those entered in the chart of accounts corresponding to each individual cost/revenue detail account or the generic detail account entered in the accounting parameters of the year of the mid-year closing itself. There is a restore/cancel button for movements already recorded by this procedure.

Particular attention should be paid to the start date to be set, as this date will normally be set equal to the date of the last account opening recorded in accounting. To illustrate: if we are creating the closure for the first quarter of the fiscal year, the date range for the economic section will typically be 01/01/year – 03/31/year and if there is an account reopening from the previous year, then within this range there will directly be the transfer to cost/revenue of the accrued items recorded in the 'year-1' balance sheet, and thus the start date for the integrations should be set as 01/01/year so that the management system checks if after 03/31 there are lines with competency in the previous quarter. If the reopening is not present, instead, it will be necessary to set the start date as 01/01/year-1 so that **FluentisERP** verifies if there are also costs/revenues throughout the previous fiscal year that fall into the initial quarter of this year.

:::tip Note
Be careful with the manual management in accounting of accruals/reversals in the closing records and then reopening of the accounts, as the assignment of the line competency dates is fundamental for the correctness of the recovery in the controlling of the Integration Records or in the period processing of controlling.
The automated management performed through the **Adjustment Records** helps to avoid errors on this delicate topic, errors that could lead to duplicate or incorrect entries in the Controlling area.
:::