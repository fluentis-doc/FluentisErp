---
title: Identification of Data Sources for Physical Quantities Used in the Calculation Model 
sidebar_position: 2.4
---

:::tip Note
This section is closely related to the application of extended controlling drivers
:::

Once we have identified the need to manage rollover drivers on physical quantities, the necessity will arise, as a fifth step, to identify the sources from which we can draw the values of these physical quantities: whether we are talking about machine hours, man hours, or tons, we must also identify where we will extract them, as well as the [*Units of Measure*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) that we want to use. Generally, the environment is that of production and, when we talk about machine hours and man hours, the source is the progress reports through which we can capture the man hours and machine hours used for our centers on a monthly basis. But it could also be data available in an external system, from which we can obtain an Excel file to easily import into ***FluentisERP*** via the appropriate procedure; or it could be obtained through the recording of office personnel hours by entering the hours in the Project Hours Declaration; or a generic manual entry at the beginning of the year, to be replicated or proportionally distributed according to the *period distribution* associated with the physical movement.

:::tip Note
The processing of [*Cost Drivers*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) based on quantities, like all cost drivers, by default blocks processing when the necessary quantity for the allocation of the source data is not present in one of the periods being processed. This setting is useful to ensure the source data is valued, especially when it is linked to a manual entry and not data retrieval from production. 
However, it is possible to disable the block to apply an average of the existing values (see *error management* in cost drivers) when facing cases where a quantity may actually be missing in a period (e.g., during company closure periods like August).
:::