---
title: Physical Movements Posting
sidebar_position: 1
---

The ***Physical Movements Posting*** mask is where we can enter or view the data of the physical quantities that we will use for *Controlling* processes, for the drivers based on physical quantities, rather than for calculating rates of centers based on quantities. For some units of measurement, such as the square meters occupied by various centers to allocate costs of a company property, the entry will be done manually at the beginning of the year, loading data into the form or perhaps duplicating the values from the previous year using the appropriate button; for other types of physical quantities, such as machine hours or man hours, the table could be populated through the ***Data Retrieve from Production*** procedure, which totals, period by period, the data from the Production Declarations or activity hours on Project; another possibility is loading from an Excel sheet through the model *PhysicalMovingControlling - Physical Moving Controlling* available among the on-demand imports of ***Bizlink***.


The fields available in the upper grid are as follows:

- the [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of reference for the data

- the [***Unit of measure***](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units)

- the ***Distribution periods*** to be used, which is a mandatory field for the *Flow* units of measurement. This indicates to ***FluentisERP*** how to divide the entered data over specific periods

- the ***Date*** of registration of the quantitative movement

- the ***Year*** of reference

- the range ***From period*** and ***To period*** of reference for the entered quantities

- the ***Status*** field, non-editable, indicating whether the row was loaded manually or what type of origin it has

In the lower grid, we will then enter the details of the quantities, particularly filling in:
- the [***Center of Origin***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) of the movement

- the ***Destination Project***, if these are quantities directly related to a project

- the [***Destination Center***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), which is the center for which the previous *Center of Origin* has worked for these quantities

:::tip Example
When a person from the technical office prepares the technical details of a quotation for commercial use, we will have the technical office's center as *Center of Origin* and the commercial center as *Destination Center*. 
The [***Cost drivers***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) with ***Distribution Type*** 10-Reversion to production at standard rate, 11-Direct reversion at standard rate, 12-Reversion to production at calculated rate refer to the quantities of the origin and/or destination centers.
:::

- the ***Quantity*** valid for the row

- an optional ***Note*** for the row

- the fields ***Classification Code***, ***Number***, and ***Description*** of the asset linked to the entered row (populated, for example, for assets used in production, if quantity-based depreciations are employed)

- the ***Division*** of reference for the row, which is relevant in companies with multiple active Divisions.