---
title: Periods distribution
sidebar_position: 1
---

The form is located at the path: **Tables > Controlling > Management Accounting > Periods distribution**

:::tip Note
This table is for exclusive use by companies that have set up *Controlling*.
:::

In the period distribution, we can indicate, area by area and year by year, how to divide our months. The available fields are as follows:

- the **Code**
- the **Description**
- the **Default** flag

:::danger WARNING
It is mandatory to have entered a record in this table with this flag; otherwise, the period processing of controlling will require it.
:::

Below, we will have the list of records for each code entered, where we will have:
- the [**Area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of reference
- the **Year** 
- the **Period**
- The **Value**, which is the weight of the individual period within the year

:::tip Examples  
We could divide the year into twelfths, or into elevenths, appropriately weighing August/December and January, rather than assigning the actual production days expected in a particular month year by year.
:::

The *Periods distribution* is associated in two points:  
- In the [*Chart of Accounts*](/docs/erp-home/registers/accounting/analytic-chart-of-accounts): I can specify that sub-account X, for which a range of dates is valued, is to be allocated via a specific period distribution instead of the exact days of the set date range, which is the default logic when period distribution is not set.
- In the *Journal of Physical Movements*, mandatorily for *Units of Measure* that are defined as *Flow* and not as *State*


:::tip Note
In the interface, there is a button to duplicate the selected distribution, a convenient option at the beginning of the year to prepare the new list valid for each new fiscal year.
:::