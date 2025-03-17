---
title: Formula
sidebar_position: 3
--- 

:::tip Note
This table is for the exclusive use of companies that have set up *Controlling*.
:::

In the Formula, we can define how to automatically create extra-accounting entries from source values. In general, the idea is to try to automate, perhaps by approximating, certain entries that in accounting would be recorded later, or that would be expensive to enter for each period as manual extra-accounting entries.

:::tip Example
For example, we could automatically value the costs of performance bonuses, which we might record at the end of the year by applying 3% on the turnover of Italy's spare parts, through a formula that detects this percentage on the balance of the relevant account valued on the sales revenue cost center, assigning this cost to the Commercial center.

Or we could apply formulas on the quantities recorded of a unit of measure, if perhaps we assume that certain costs are a fixed amount per piece.
:::

To enter a new *Formula*, from the search mask, press the *New* button to open the management mask, which includes the following fields:  
- the **Start date** and **End date** of the validity of the rule

- the [**Area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of application of the rule itself

- the **Destination account**, that is, the sub-account to be used for recording the automatic movement in the analytical section of the extra-accounting entry

- the [**Destination center**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), that is, the center to be used in the line itself

- the [**MU source center**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), optional, which serves as a center for filtering physical movements when the formula involves quantities managed by a unit of measure

- the **Account center origin** (/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), optional, which serves as a center for filtering the values of the sub-accounts entered in the formula

Below we will have two grids, on the left the list of accounts from the chart of accounts, on the right the [*Units of Measure*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) available.
At the bottom of the mask is the section with the formula, which can be managed by dragging with the mouse the entities (*accounts* and/or *UM*) that you wish to insert into the formula itself.

:::tip Example
A formula could be, for example, "40001-004-Sales Revenue spare parts ITA"*0.03
:::

:::tip Note
In the search mask, there is a button to duplicate the selected formula.
:::