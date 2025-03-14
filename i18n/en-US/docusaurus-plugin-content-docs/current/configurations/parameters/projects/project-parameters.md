---
title: Project parameters
sidebar_position: 1
---

## General

These parameters are used by default if no predefined configurations have been made for the client or document type.

**Default unit of measure for service**: default UM to consider for services in interventions.

**Measurement unit for hours**: UM that identifies Hours in the project area. In case of conversion between UMs, it will be evident if the quantity refers to work hours.

**Days measurement unit**: UM that identifies Days in the project area. In case of conversion between UMs, it will be evident if the quantity refers to work days.

**Daily Hours**: indicates the standard duration of the company workday. Configurable in the [Working Hours](https://docs/configurations/tables/employee/working-hours) table.

**ITEM**: article to be used by default in documents in the absence of other settings.

**Working Shift**: specify the main working shift for the company. The values can be configured in the [Working Shift](https://docs/configurations/tables/employee/working-hours) table for each day of the week. The total hours of the day will be considered for converting between Hours - Days. For example, if the company expects 7 working hours per day, 1 Day = 7 hours, and based on this, conversions will be made for services in an intervention.

**Activity type**: default type of activity used, for example, in the automatic creation of activities from interventions.

**Activity type for Vacation / Leave Request**: type of activity used during the confirmation of the leave period, to generate the related activity declarations of the resource.

**Default Sprint Type**: type of sprint to use by default if not specified for the document type.

**Default Project Material cost type**: a value can be chosen among None, Last Cost, Average Cost, Standard Cost. The configured amount will be used as the basic rule to retrieve the item cost entered in the Project Materials tab.

**Default planned intervention type**: type of planned intervention to use by default, for example, in the creation of new plans directly from WBS Resource Assignment.

**Default Intervention Request Type**: type of intervention request to use by default, for example, in the creation of new intervention requests from WBS Resource Assignment.

**Working Shift**: indicates the specific working shift, coded in the **Working Shift** table.

## Interventions

**Internal intervention type**: type of intervention identified as an internal intervention.

**External intervention type**: type of intervention identified as an external intervention.

**Default intervention type**: type of intervention to use by default, for example, in the automatic generation of interventions from activities marked as billable.

**Default employee**: employee to use by default if no other value is present.

**Item in Overtime rows in the Invoice Plan**: article to use by default to enter lines that result out of hours in the billing plan calculations for an intervention.

**Reversal item of Project Advance Invoice**: article to use by default to enter cancellation lines for advance invoices in an invoice generated from the valuation of interventions.

**WIP description**: description to use by default to enter cancellation lines for advance invoices in an invoice generated from the valuation of interventions.

**Propose in services the Project Advance Invoice Reference**: if enabled, on each intervention save, it checks if there is an advance invoice associated with the project indicated in the document. If the remaining value of the advance invoice is sufficient to cover the service, it will be automatically linked to the intervention service line in the appropriate field.

**Propose in materials the Project Advance Invoice Reference**: if enabled, on each intervention save, it checks if there is an advance invoice associated with the project indicated in the document. If the remaining value of the advance invoice is sufficient to cover the value of the material, it will be automatically linked to the intervention material line in the appropriate field.

**Propose in travel expenses the Project Advance Invoice Reference**: if enabled, on each intervention save, it checks if there is an advance invoice associated with the project indicated in the document. If the remaining value of the advance invoice is sufficient to cover the travel expense, it will be automatically linked to the intervention travel expense line in the appropriate field.

### Intervention Valuation Settings 

**Use Intervention References**: if enabled, a descriptive line will be inserted in the invoice generated from the valuation of interventions before the intervention line, containing the description configured by the user.

**Add intervention date to the service line**: if enabled, inserts the service date in the description field of the service line.

**Propose item code descriptions**: if enabled, inserts the description of the article code in the description field of the service.

**Grouping by project**: if enabled, groups by project header in the invoice generated from the valuation of interventions.

**Group by WBS**: if enabled, groups by project WBS in the invoice generated from the valuation of interventions.

**Group Services and Charges**: if enabled, groups services and expenses in the invoice generated from the valuation of interventions.

**Consider non working days as extratime**: if enabled, in the billing plan, it will be checked if the service day falls on one of the dates configured as holidays. Non-working days can be configured from *Configuration > Tables > Project Management* > [Holidays Calendar](/docs/configurations/tables/project-management/not-working-days-calendar).

**Priority for entering information**: indicate the order in which to enter data in the invoices generated from the valuation of interventions.

### BILLING PLAN 

The rules to apply to the billing plan of the intervention can be established in the general parameters of Project Management and can be valid for all clients or specific to a client.  
The billing plan calculation procedure will first check for specific configurations for the client, and if none are present, it will consider those in the general parameters.

**Working site** and **Intervention type**: used as a filter; if empty, they are considered valid for all work locations and all types of interventions. If configured, they will only be considered for the work location configured in the resource's registry performing the intervention and the type of intervention used.

**Time table type**: indicates the agreed working time slot with the client and the daily hours.
:::note[Observation]
It may be set that for one client the daily hours are 7 hours, while for another 8. The hours indicated in the time slot will be used in the conversion between different time units: 
- e.g., if we have worked 7 hours for the client and their time slot corresponds to 7 hours, in the conversion to Days we will have a quantity of 1. 
- if we have worked 7 hours for the client and their time slot corresponds to 8 hours, in the conversion to Days we will have a quantity of 0.875.

The time slot will also be considered for calculating out of hours to bill at a different price, both for exceeding the total hours and the established hours.
:::

**Night Time Table Type**: functions similarly to the "Time Slot Type" field but will be used in case of providing both daytime and nighttime services, to allow for different billing.

**Rounding type**: indicates the mathematical rule by which to round work hours. The rounding will then be applied to the total hours of the intervention. E.g., total hours 7.45 h, if rounding to the half hour is provided, the billed hours will be 8.

**Commercial category**: further filter for selecting the rule for the billing plan. If empty, it will be considered valid for all customer commercial categories. In the case of a specific indication, the corresponding one entered in the customer registry - Administration tab will be selected.

**Include Travel Hours in Services**: allows for including travel hours present in the intervention in the "Expenses to be Billed" tab, as if they were service hours. Consequently, all billing rules (time slot, rounding, etc.) will also be applied to travel hours as if they were a service performed.

**Exclude rounding**: if enabled, no rounding will be applied in the billing plan.

**Exclude Overtime**: if enabled, out of hours will not be calculated in the billing plan. For conversion between different time units (e.g., from hours to days), the daily hours indicated in the "Working Shift" field in the general parameters of Project Management will be used.

**Consider all Time Table for Overtime**: if enabled, both daytime and nighttime time slots are taken into account in the out of hours calculation. Only what is outside both slots or exceeds the daily hours will be considered out of hours. If disabled, only one time slot (night or day based on the service start time) will be considered, and everything outside this considered time slot will be billed as out of hours.

:::note[Example]
Daytime slot 7.00 - 18.00
Nighttime slot 20.00 - 5.00

Service time: 3.00 - 8.00 
with flag enabled, the billing plan will be: 
- service line 3.00 - 5.00 with nighttime rate
- service line 05.00 - 07.00 with out of hours rate
- service line 07.00 - 08.00 with daytime rate
(both time slots are considered for the calculation, only what does not fit into either is out of hours)

with flag disabled, the billing plan will be:
- line with service 3.00 - 5.00 with nighttime rate
- line with service 05.00 - 08.00 with out of hours rate 
(only the nighttime time slot, which is the reference for the service started in that slot, is considered for the calculation)

:::

## Activities   
**Check missing activities in the past: number of months**: indicate the number of months during which, in the activity declaration phase, any missing activity declarations (hours/days) will be checked, and these will be automatically proposed during declaration.

Default value = 0, in the activity declaration the current date will always be proposed without checking for missing declarations in past months.

Value "1": the period from the current date to the previous month will be checked. E.g., 05/06 - 05/07
for example, if the declaration of 20/06 is missing, when entering the new activity declaration, the proposed date will be 20/06.

By increasing the number of months, the range of past months to check extends.