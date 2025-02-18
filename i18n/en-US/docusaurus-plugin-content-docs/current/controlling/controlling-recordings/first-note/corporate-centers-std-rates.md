---
title: Standard Cost Centers Rates
sidebar_position: 3
---

In this form, it is possible to enter (via the **New** button) fixed standard rates that are not calculated through defined ratios between the result of a reclassification model and the result of a corporate center.

These rates will then be used by the cost drivers (in particular by the distribution criterion *Reversion to standard rate*) to value the movements and results of the centers typically moved at physical quantities and thus not economic.

To code a fixed rate, we need to enter:
- an [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of analysis (for example, *Final*, rather than *Budget*)
- the [***Corporate Center***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) of reference (typically a center valued at physical quantities)
- a ***Code*** for the rate
- a ***Description*** of the rate.

In the grid below we will then enter the details of the rate:
- The reference ***Year***
- the ***From Period*** and ***To Period*** range
- the ***Fixed value*** of the rate
- the ***Variable value*** of the rate

The fixed and variable quota refers to the distribution of controlling data into fixed and variable costs, which is set starting from the *Chart of Accounts* through the **Variability** field and the **Variability Cost Centers** table.


:::tip Insights 
Based on the definition of the variability percentage, each economic movement taken from an mid-year closing is divided into fixed and/or variable quota. It could thus be 100% fixed, or 100% variable, or for example 40% fixed and 60% variable. The rates will therefore separately value the fixed and variable components of the cost.
:::