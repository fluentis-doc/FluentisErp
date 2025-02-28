---
title: Periods Distribution
sidebar_position: 1
---

:::note Path 
**Tables > Controlling > Managerial Accounting > Periods Distribution**

Note: 
For everything not detailed in this document about the common functioning of the forms, refer to the following link [Custom features, buttons and fields](/docs/guide/common).

:::

---

:::tip Note 
This table is for the exclusive use of companies that have set up *Controlling*.
:::

In the periods distribution, we can indicate, area by area and year by year, how to divide our months. The available fields are as follows:

- the ***CODE*** 
- the ***DESCRIPTION*** 
- the ***DEFAULT*** flag 

:::danger ATTENTION
It is mandatory to have entered a record in this table with this flag; otherwise, the period processing of controlling will require it.
:::

Below, we will have the list of records for each entered code, where we will have:
- the [***AREA***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of reference
- the ***YEAR*** 
- the ***DATE RANGE*** 
- the ***VALUE***, i.e., the weight of the individual period within the year

:::tip Examples 
We could divide the year into twelfths, or into elevenths, appropriately weighting August/December and January, rather than assigning the actual production days expected in each single month from year to year.
:::

The *Periods Distribution* is associated in two points:
- In the [*Chart of Accounts*](/docs/erp-home/registers/accounting/analytic-chart-of-accounts), I can state that the detail account X, for which a range of effective dates is valued, is distributed through a certain distribution of periods instead of the exact days of the set date range, which is the default logic when the distribution periods are not set.
- In the *Journal Entry of Physical Movements*, mandatorily for the *Units of Measure* that are defined as *Flow* and not as *State*.


:::tip Note 
In the form, there is a button to duplicate the selected distribution, a convenient option at the beginning of the year to prepare the new list valid for each new fiscal year.
:::