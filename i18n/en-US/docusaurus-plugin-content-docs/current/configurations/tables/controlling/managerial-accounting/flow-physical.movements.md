---
title: Physical Movements Flow
sidebar_position: 4
---

:::tip Note 
This table is for the exclusive use of companies that have set up *Controlling*.
:::

The physical movements flow allows interaction with the movements entered in the physical movements journal, enabling them to be replicated or converted by applying a multiplier or a percentage.

The available fields are as follows:

- the ***CODE*** of the flow

- the ***DESCRIPTION*** of the flow

- the [***AREA***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of reference

- the [***COST CENTER***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) for which to search for the quantitative data to manage

- the [***SIZE DESTINATION CENTERS***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) to define the dimension of the centers to be valued

- the ***START DATE*** and ***END DATE*** of the rule's validity

- the ***DISTRIBUTION TYPE*** to be applied, which can only be *01 Percentage*

- the [***ORIGIN UNIT OF MEASURE***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) and the [***DESTINATION UNIT OF MEASURE***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), for possible conversions between MUs

- the ***MULTIPLIER*** to be applied to the origin quantities

In the grid below, we will enter the list of destination centers to be valued, filling in the following fields:
- the [***COST CENTER***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) of destination

- the ***PERCENTAGE*** to be applied

- the ***VALUE*** to be used

- the flat ***PERCENTAGE / VALUE***: if checked, it means that the percentage will be typed directly; otherwise, a line quantity (the previous field) can be entered, which ***FluentisERP*** will use to derive a relative percentage

- any ***PROJECT*** to be valued

:::tip Examples 
 One primary need could be to assign physical quantities to a center for which time is not recorded, in order to calculate a cost rate derived from the total hours replicated from other centers: a production auxiliary, for example, could receive the totals of the hours from other centers used in production, to derive a quantity to be used for its rate calculation.
 
 Another need could be to replicate physical movements from the directional dimension to other dimensions, in order to use them to apply specific drivers for these.

A third need could be to convert hours received from production into minutes, to calculate a rate in a second unit of measure without having to calculate it externally by hand.
 
If a single origin data point needs to duplicate the quantity across two other centers, a rule could be applied that duplicates the starting value with a multiplier and then attributes half to one and half to the other, for example.
:::

:::tip Note 
In the form, there is a button to duplicate the selected flow.
:::