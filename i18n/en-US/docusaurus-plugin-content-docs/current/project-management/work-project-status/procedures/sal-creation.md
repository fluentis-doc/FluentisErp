---
title: Create job progress
sidebar_position: 1
---

This procedure allows you to create a work progress status starting from a project. In the filter area, you can specify a series of filters to more accurately search for projects. Once the filters are entered, simply click **Search** in the ribbon bar to display the results in the grid below. To proceed with the procedure, select a row in the grid and click the **Create job progress** button in the ribbon bar. This action will open a window where you can enter:

**Type**: contains the type of progress status you want to create;

**From date**: indicates the date from which to start gathering data for this work progress status;

**A date**: indicates the date until which to gather data for the progress;

**Confirmation date**: indicates the confirmation date of the status;

**Comparable**: indicates whether the document can be compared in the future.

After clicking OK, I will be asked if I want to open the created [Work Progress Status (Stato avanzamento lavori)](/docs/project-management/work-project-status/new-work-project-status/).

:::note[Criteria for obtaining specific resource costs in project progress calculation (Criteri ottenimento costi specifici risorse in calcolo SAL di progetto)]
The search for the corresponding cost will be made with the following logic: 
1. Does the start date of the activity fall on one of the days marked in the Calendar of non-working days? 
>	If yes, the value set in “Cost type: Holiday (Tipo costo: Festività)” will be assigned.

2. If the start date does not fall on the days of the Calendar of non-working days, the check will continue in the grid of Expected working days for the resource.

3. If the start date does not fall on either holidays or working days for the resource, the cost marked as “Default non-working day (Default giorno non lavorativo)” will be used if present. If there is no such marked cost, the “Overtime (Straordinario)” cost will be taken instead.

4. If the start date falls on one of those ordinary working days, the expected hours in the shift will be checked.
>	The first e.g. 8 hours expected in the shift will be checked to see if they fall within the main shift.  
>>	If the main shift is marked as “night (notturno)”, the night cost will be considered; if it is not night, the resource header cost will be considered;
>>>	If there are hours beyond the 8 hours, the excess hours are calculated with the cost:
>>>- if the shift is night, night overtime will be considered
>>>- otherwise, daytime overtime will be considered
5. If the start date does not fall within the main shift, it will be checked whether it falls within the alternative shift. So e.g. the first 8 hours expected for the shift are considered.
>	If the alternative shift has a dedicated cost, this value will be considered.
>	If the alternative shift is marked as “night (notturno)”, the night cost will be considered; if it is not night, the resource header cost will be considered;

>	If there are hours beyond the 8 hours, the excess hours are calculated with the cost:
>- if the alternative shift is night, night overtime will be considered
>- otherwise, daytime overtime will be considered

:::

:::note[Note]
In the case of service hours that fall within the daily working hour limit of the resource but exceed the time frame, they will still be counted as "regular (ordinario)" and not "overtime (straordinario)".
:::