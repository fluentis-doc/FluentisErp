---
title: Physical movements flow
sidebar_position: 4
---

:::tip Note (Nota)
This table is for the exclusive use of companies that have set up *Controlling*.
:::

The flow of physical movements allows interaction with the movements loaded in the first note of physical movements, enabling them to be replicated or converted by applying a multiplier or a percentage.

#### Specific Fields (Campi specifici)

- the **Code** of the flow

- the **Description** of the flow

- the [**Area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of reference

- the [**Cost center**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) to search for the quantitative data to be managed

- the [**Size destination centers**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) to define the size of the centers to be valued

- the **Start date** and **End date** of the validity of the rule

- the **Distribution type** to apply, which can only be *Percent Completed*

- the [**SOURCE UNIT OF MEASURE (UNITA' DI MISURA DI ORIGINE)**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) and the [**DESTINATION UNIT OF MEASURE (UNITA' DI MISURA DI DESTINAZIONE)**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), for any conversions between UMs

- the **Multiplier** to apply to the source quantities

In the grid below, we will enter the list of destination centers to be valued, filling in the following fields:
- the [**Cost center**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) of destination

- the **Percent Completed** to apply

- the **Value** to use

- the flat **Percentage / Value**: if checked, it means that the percentage will be typed directly; otherwise, a line quantity (the previous field) can be entered, which **FluentisERP** will use to derive a relative percentage

- any **Project** to value

:::tip Examples (Esempi)
One initial need might be to assign physical quantities to a center for which time is not being recorded, in order to calculate its cost rate derived from the total hours replicated from other centers: a production auxiliary, for example, might receive the total hours from other centers used in production to derive a quantity to be utilized for its rate calculation.
 
Another need might be to replicate physical movements from the directional dimension into other dimensions to use them to apply specific drivers of these.
 
A third need might be to convert the hours received from production into minutes, to calculate a rate in a second unit of measure without having to calculate it manually externally.
 
If from a single source data we had to duplicate the quantity to two other centers, a rule could be applied that duplicates the starting value with a multiplier and then assigns half to one and half to the other, for example.
:::

:::tip Note (Nota)
The mask contains a button to duplicate the selected flow.
:::