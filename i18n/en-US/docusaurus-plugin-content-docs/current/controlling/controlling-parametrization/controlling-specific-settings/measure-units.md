---
title: Units of Measure 
sidebar_position: 13
---

Within the ***Units of Measure*** table, we must first code all those units of measure that may be necessary for the management of *Controlling*: we will typically code man-hours and machine hours to capture data from production, as well as the units needed for the manual recording of ***First note of physical movements*** (kww, sqm, number of heads, number of telephone stations, etc.). For each of these MUs, we will particularly need to define the property ***Time evaluation type***, which includes two options:

- ***State***: when the recorded quantities are essentially fixed, i.e., they are replicated every period
- ***Flow***: when they are specific to the individual period

:::tip note
The setting is crucial for the management that ***FluentisERP*** will require in entering quantities in the ***First note of physical movements*** form: entering a MU of *State* ***will not require*** the mandatory indication of a ***Distribution Period***, as the specified quantity will be replicated for each period of the entered range, while conversely, a MU of *Flow* ***will require*** a ***Distribution Period*** to spread the quantity over each period of the entered range.
:::

For the retrieval of production times, it is also necessary to consider that *production declarations* always record times in *minutes*, and therefore we need to configure how ***FluentisERP*** should handle the conversion to the units of measure used to record the times of the centers.
We need to first define the conversion between production minutes and the MU of the times that we will use in *Controlling*: for example, if we have a MU 'man-hours', then within the ***Unit of Measure*** table, we will indicate in the ***Conversions with other MUs*** tab:
- *Alternative MU*: 'Min' (i.e., the MU that has the flags ***MU time*** and ***Minutes*** set)
- *Conv. Fact.*: 60
- *To multiply*: flag set

Secondly, we will need to link these Controlling MUs to our *Production corporate centers*, which is done in the ***Unit of Measure of corporate centers for controlling*** table. In this form, we will configure:

- the [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) for configuration
- the [***Corporate Center***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) that will have a valuation of production times
- the unit of measure to be used if for this Center we want to record ***Setup Time***
- the unit of measure to be used if for this Center we want to record ***Manpower Timing***
- the unit of measure to be used if for this Center we want to record ***Machine Time***
- the ***From date*** and ***To date*** range of validity for the configuration
- the flags indicating whether or not to consider the various times in the calculation of the productivity of the center