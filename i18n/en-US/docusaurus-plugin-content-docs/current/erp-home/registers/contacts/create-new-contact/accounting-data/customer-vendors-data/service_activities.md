---
title: Service Activities
sidebar_position: 13
---

In this tab, all customer-related parameters to be used in the interventions of the Project Management area are configured.

There are 2 additional tabs:

### Travel Expenses 

Here all expenses that will be proposed in the interventions as Billable Expenses can be entered.

**Type of travelling expenses**

**Charge type**: type of expense to propose. Only expenses with the "Travel" flag active in their configuration will be displayed in the list.

**Forfait type**: if the entered expense type is configured with "Travel expense type" = flat rate, the field will be enabled to choose the flat rate type to use.

**Amount**: expense amount. Enabled for all expense types that are neither distance nor travel hours.

**Travel hours**: travel hours to reach the customer's site/intervention site. Enabled only if the expense type is correctly configured as "Travel hours".

**Km Round trip**: travel KM to reach the customer's site/intervention site. Enabled only if the expense type is correctly configured as "Distance".

**Hourly cost**: hourly expense, it will be multiplied by the travel hours. Enabled only if the expense type is correctly configured as "Travel hours".

**Km cost**: expense per km, it will be multiplied by the indicated kms. Enabled only if the expense type is correctly configured as "Distance".

**Resource contract type and description**: used as a filter to select the expense corresponding to the contract configured in the resource registry.

**Working site**: used as a filter to select the expense corresponding to the workplace configured in the resource registry.

**Intervention type**: used as a filter to select the expense corresponding to the type of intervention used.

**Live charge**: if enabled, during expense calculation, it will also consider the data declared by the resource.
:::note[Example]
In the customer registry, we configure the expense Cost per km 0.50 without indicating the Round Trip KM and enable the flag. 
The resource enters the intervention declaring the same expense with 150 km.
When changing the intervention status from Entered to Pending Approval, the expenses will be recalculated, and with this active flag, it will consider the kms declared by the resource and will include them in the billable expenses along with the Cost per Km value indicated in the customer registry.
The same logic is applied for other types of expenses. 
:::

**Travel expenses type - flat rate details**

The flat rate consists of multiple expenses that will be entered on the invoice as one cumulative line, allowing for the display of the flat rate details and the indication of individual item amounts. The flat rate line in the intervention and on the invoice will be entered as the sum of all the values configured in this view.

**Charge type**: type of expense considered in the flat rate.

**Amount**: amount for the expense.

**Once**: irrespective of the number of resources and/or service days within the same intervention, the expense will be considered only once.

**By day**: based on the service days within the same intervention, the expense will be multiplied by each service day.

**By resource**: based on resources indicated in the services within the same intervention, the expense will be multiplied by each resource.

:::note[Example]
The flat rate consists of: 
Highway: 100
Lunch: 50

In the intervention lasting one day, there are 3 resources, so 3 service lines will be declared.
The billable flat rate expense will total 250 (100 for highway fixed, 50 for lunch for each resource). The calculation will be conducted upon changing the intervention status from "Entered" to "Pending Approval".
:::


### Invoice Plan Settings 

The rules to apply to the billing plan of the intervention can be established in the general parameters of Project Management, and therefore be valid for all clients, or specific to a client. 
The calculation procedure for the billing plan will first check for specific configurations for the client, and if not present, will consider those present in the general parameters.

**Working site** and **Intervention type**: used as filters; if empty, they are considered valid for all workplaces and all types of interventions. If configured, they will only be taken into account corresponding to the workplace configured in the resource registry that performs the intervention, and the type of intervention used.

**Time table type**: indicates the agreed working time slot with the client, and the daily hours allocation.

:::note[Observation] 
It can be established that for one client the daily hours are 7 hours, while for another, they are 8. The hours indicated in the time slot will be used in the conversion between different time units: 
- e.g. if we have completed 7 hours for the client and their slot corresponds to 7 hours, the quantity in Days will be 1.
- if we have completed 7 hours for the client and their slot corresponds to 8 hours, the quantity in Days will be 0.875. 

The slot will also be considered for calculating overtime to be billed at a different price, both for exceeding the total hours and the established hours. 
:::

**Night Time Table Type**: works similarly to the "Time Slot Type" field but will be used when services are performed both during the day and at night, to allow for different billing.

**Rounding type**: indicates the mathematical rule by which to round the working hours. The rounding will then be applied to the total hours of the intervention. E.g. total hours 7.45 h, if rounding to the half-hour is expected, the billed hours will be 8.

**Commercial category**: an additional filter for selecting the rule for the billing plan. If empty, it will be considered valid for all client commercial categories; if specifically indicated, the corresponding one inserted in the customer registry - Finance tab will be selected.

**Include travel hours in services**: allows considering the travel hours present in the intervention in the "Billable Expenses" tab, as if they were service hours. Consequently, all billing rules (time slot, rounding, etc.) will also be applied to travel hours, as if they were a performed service.

**Exclude rounding**: if enabled, no rounding will be applied in the billing plan.

**Exclude Overtime**: if enabled, the overtime will not be calculated in the billing plan. For the conversion between different time units (e.g. from hours to days), the hours allocation indicated in the "Work Shift" field in the general parameters of Project Management will be used.

**Consider all Time Table for Overtime**: if enabled, both daytime and nighttime time slots are considered in the overtime calculation. Only what is outside both slots or exceeds the daily hours will be considered overtime. If disabled, only one time slot will be considered (daytime or nighttime based on the start time of the service), and anything outside this considered time slot will be billed as overtime.

:::note[Example]
Daytime slot 7.00 - 18.00
Nighttime slot 20.00 - 5.00

Service time: 3.00 - 8.00
With the flag enabled, the billing plan will be: 
- service line 3.00 - 5.00 at nighttime rate
- service line 05.00 - 07.00 at overtime rate
- service line 07.00 - 08.00 at daytime rate
(both time slots are considered for the calculation; only what does not fall within either is considered overtime)

With the flag disabled, the billing plan will be:
- line with service 3.00 - 5.00 at nighttime rate
- line with service 05.00 - 08.00 at overtime rate 
(only the nighttime time slot is considered for calculation, which is the reference for the service that started in that slot)

:::