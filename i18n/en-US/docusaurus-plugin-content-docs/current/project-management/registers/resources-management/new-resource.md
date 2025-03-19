---
title: New Resource 
sidebar_position: 2
---

In this form, all the information related to a new **Asset** will be entered.

**Code/Description**: indicates the code of the resource along with its description;

**Resource type**: indicates the type of resource, generally Human or Material;

**Employee**: it is possible to associate the account of the employee;

**Unit Cost/Monthly Available Hours**: indicates the cost per unit of work for the employee and the respective monthly availability;

**User**: it is possible to link an operator;

**Account**: it is possible to connect the resource to an external professional;

**ITEM**: it is possible to link the resource to a material element;

**Fixed asset classification code**: it is possible to link the resource to an asset;

**Company**: it is possible to link the company;

**Closing date**: it is possible to specify a potential relationship closing date;

**Notes**: contains any freely entered notes.

There are specific tabs available:

**Calendar Tab**

Here it is possible to link a specific [Calendar](/docs/project-management/registers/calendars-management/calendars/) to the resource.

By clicking on the ribbon bar ![](/img/neutral/common/detail-propose.png) Propose Detail, it will be possible to manage the **Working Days**. In particular, in the outgoing window, it is possible to exclude certain working days and indicate a day off; the results will be displayed in the **Working Days** grid and will take into account the work shifts previously entered for the resource.

In Fluentis, it is possible to manage the cost of resources to be used in project cost calculations and in project SAL processing. 
The cost can be set directly in the resource registry, with a unique value valid for all circumstances, or differentiated for:
-	**Holidays**: used for the days configured in the Holiday Calendar.
-	**Overtime work**: used for working days in which the daily hours have been exceeded.
-	**Night**: used for working days whose shift is marked as “night”
-	**Night overtime work**: used for working days whose shift is marked as “night” and the working hours or daily hours have been exceeded.
-	**Alternative Time shift**: used if the resource works on 2 different shifts and a shift needs to be invoiced differently than the other.

To one of these items, the flag "default cost for non-working day" can be enabled. This flag is used for all cases where the day of the activity does not correspond with any day in either the holiday calendar or the resource's working days calendar.

Example:
a Saturday that does not fall under either the holiday calendar or the resource's calendar can be invoiced as both a holiday and an overtime. We will apply in the cost calculation the cost marked as “default”.