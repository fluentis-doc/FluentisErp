---
title: Formula
sidebar_position: 3
--- 

:::tip Note 
This table is for the exclusive use of companies that have set up *Controlling*.
:::

In Formula, we can define how to automatically create off-balance records from source values. In general, the idea is to try to automate, perhaps approximating, certain records that in accounting would be recorded later, or that would be cumbersome to enter for each period as manual off-balance Area records.

:::tip Example 
For example, we could automatically value the costs of performance bonuses, which we might record at the end of the year by applying 3% on the turnover of Italy's spare parts, through a formula that calculates this percentage on the balance of the interest account valued on the cost center of sales revenue, assigning this cost to the Commercial center.

Alternatively, we could apply formulas on the quantities recorded for a unit of measure, if it is assumed that certain costs are a certain amount per piece.
:::

To insert a new *Formula*, from the search screen, press the *New* button to open the management screen, which has the following fields:
- the ***START DATE*** and ***END DATE*** of the rule's validity

- the [***AREA***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of application of the rule itself

- the ***DESTINATION ACCOUNT***, i.e., the detail account to use to record the automatic movement in the analytic part of the off-balance area record

- the [***DESTINATION CENTER***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), i.e., the center to use in the line itself

- the [***MU SOURCE CENTER***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), optional, which serves as a center to filter physical movements when the formula involves quantities managed by a unit of measure

- the ***ACCOUNT CENTER ORIGIN*** (/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), optional, which serves as a center to filter the values of the detail accounts included in the formula

Below we will have two grids, on the left the list of accounts from the chart of accounts, on the right the [*Units of Measure*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) available.
At the bottom of the screen, there is a section with the formula, which can be managed by dragging the entities (*accounts* and/or *MU*) that you want to include in the formula itself with the mouse.

:::tip Example 
One formula could be, for example, "40001-004-Sales Revenue Spare Parts ITA"*0.03.
:::

:::tip Note
In the search screen, there is a button to duplicate the selected formula.
:::