---
title: K.P.I. F.C.S. 
sidebar_position: 3
---

This form displays the values of the main key performance indicators.  
Through the two main grids, it is possible to compare the values related to two different simulations, useful for example if simulations are run with different scheduling parameter values and the same imported data.

Once the simulations are selected, the relevant data is displayed in the tabs below.

## Sales Orders 

**Maximum Delay**: this is the maximum delay observed among the scheduled sales order lines. The indicator has a scale of 100 days; if this value exceeds 100 days, the detailed value is shown at the bottom of the chart.

**Average Delay**: this is the average value of the delayed sales order lines.

**Scheduled sales orders items**: this is the number of sales order lines that have been scheduled.

**Delayed sales orders items**: this is the number of sales order lines that are delayed.

**Percentage of Delays**: this is the percentage ratio between the delayed sales order lines and the scheduled sales order lines.

## Materials Flow Costs 

Allows you to compare the following costs of the simulations:

- **Warehouse Flow Cost**: maintaining an item in stock has a cost. In literature, there are various examples of calculating this cost, normally given by the cost of immobilizing working capital (interest to be paid for the use of capital) and costs of storing goods in stock (rental or depreciation costs of storage space, climate control and lighting costs, storage structure costs, costs of material handling systems in stock, personnel costs, etc.).         
The calculation takes these costs into account through a percentage value to be applied to the standard cost of the item (see scheduling parameters). For example, if this percentage is 10, and the unit cost of the item is 80, we have a cost of 8 for an entire year for a single unit of the article. This value is divided by 365, obtaining the daily cost per unit, and this value is multiplied by the final stock holding of each day of the simulation, and the values for each day of the simulation are summed.              
The value of this KPI is the cost of maintaining stock for all items in the simulation during its period. The faster goods are used, the less time they will remain in stock waiting to be used, and the lower the value of this KPI will be. As the flow of goods increases, the value of this KPI decreases. Accelerating processing obviously leads to an increase in the value of this KPI.

- **W.I.P. Flow Cost**: this KPI is calculated similarly to that of stock, using the same percentage as a calculation base. Once the daily unit cost of storing a production item is calculated, it is multiplied by the scheduled order duration (scheduled end date minus scheduled start date).     
For example, suppose we have a production order of 60 pieces of an item that has a unit cost of 80, with a scheduled duration of 9 days, and the percentage assigned to the storage cost is 10; we have a daily unit cost of (80 * 10 / 100) / 365, equal to 0.0219178, to multiply by 60, obtaining a daily cost of 1.315, which must be multiplied by the scheduled duration in days of the order, 9, yielding a total W.I.P. cost of the order of 11.84.       
This calculation is performed for all scheduled production orders, and the total sum is the value of this KPI. The shorter the duration of production orders, the lower the value of this KPI. If the flow of goods in production improves, that is, they are produced in less time, this KPI decreases.

- **Total Flow Cost**: this is the sum of the two previous values. A production plan improves only if this KPI decreases, not if one of its elements decreases.     
The effect of different values of scheduling parameters and planner constraints can be evaluated as a whole based on the trend of this KPI's value.

## Work Centers 

Within this tab, you can select the type of indicator you want to display among:

- **% Load**: the load percentage is the percentage of available time in which processing occurred.

- **% Setup**: the setup percentage is the percentage of available time spent on setup activities.

- **% Idle Hours**: this KPI is given by the ratio of unproductive waiting hours to available hours. The unproductive waiting hours are those in which a task engaged the respective resources (machines, workers, general productive resources) without being able to create progress because materials or workers were insufficient. Materials may be insufficient for two reasons: 1. if partial withdrawal is possible for any of those needed, and at the time of starting production, not all the necessary quantity was available, so the available quantity was withdrawn, but once consumed, there was no more available in stock, thus production was halted waiting for material availability. 2. if the task relates to a work phase for which overlap with the previous phase has been set, and the preceding phase cannot produce at the pace required by this task’s phase, resulting in having processed only what came from the previous phase and having no more material to work on, leading to inactivity while waiting for the material to arrive. The other possible cause of inactivity is the lack of available workers. Indeed, the task is started if workers with the right qualifications are available, but after they are released (end of setup or end of work shift), if the task cannot find other workers it will have to wait until they become available.

- **Average Buffer**: this value is calculated considering the activities queued awaiting processing at a work center. This value represents the daily average, during the simulation period, of the total hours to work at the center in queue. For example, if at a center, phases totaling 18 hours of time-phase are worked in one day, but these phases did not have to wait to be processed, the buffer for that day is 0. In summary, high values of this KPI indicate that the center is a bottleneck. For example, we can compare two work centers, and if both have a high load percentage, it does not mean that both are bottlenecks; it is necessary to evaluate the value of this KPI to understand which is in more trouble. For instance, if both have a workload percentage of 95%, but one has a buffer of 2 hours and the other has a buffer of 16 hours, action must certainly be taken on the second, seeking to increase its production capacity or outsourcing part of the production.

## Machines

Within this tab, you can select the type of indicator you want to display among:

- **% Load**: the load percentage is the percentage of available time in which processing occurred.

- **% Setup**: the setup percentage is the percentage of available time spent on setup activities.

- **% Idle Hours**: this KPI is given by the ratio of unproductive waiting hours to available hours. The unproductive waiting hours are those in which a task engaged the respective resources (machines, workers, general productive resources) without being able to create progress because materials or workers were insufficient. Materials may be insufficient for two reasons: 1. if partial withdrawal is possible for any of those needed, and at the time of starting production, not all the necessary quantity was available, so the available quantity was withdrawn, but once consumed, there was no more available in stock, thus production was halted waiting for material availability. 2. if the task relates to a work phase for which overlap with the previous phase has been set, and the preceding phase cannot produce at the pace required by this task’s phase, resulting in having processed only what came from the previous phase and having no more material to work on, leading to inactivity while waiting for the material to arrive. The other possible cause of inactivity is the lack of available workers. Indeed, the task is started if workers with the right qualifications are available, but after they are released (end of setup or end of work shift), if the task cannot find other workers it will have to wait until they become available.

## Worker Skills

Within this tab, you can select the type of indicator you want to display among:

- **% Load**: the load percentage is the percentage of available time in which processing occurred.

- **% Setup**: the setup percentage is the percentage of available time spent on setup activities.

- **% Idle Hours**: this KPI is given by the ratio of unproductive waiting hours to available hours. The unproductive waiting hours are those in which a task engaged the respective resources (machines, workers, general productive resources) without being able to create progress because materials or workers were insufficient. Materials may be insufficient for two reasons: 1. if partial withdrawal is possible for any of those needed, and at the time of starting production, not all the necessary quantity was available, so the available quantity was withdrawn, but once consumed, there was no more available in stock, thus production was halted waiting for material availability. 2. if the task relates to a work phase for which overlap with the previous phase has been set, and the preceding phase cannot produce at the pace required by this task’s phase, resulting in having processed only what came from the previous phase and having no more material to work on, leading to inactivity while waiting for the material to arrive. The other possible cause of inactivity is the lack of available workers. Indeed, the task is started if workers with the right qualifications are available, but after they are released (end of setup or end of work shift), if the task cannot find other workers it will have to wait until they become available.

## Resource Types

Within this tab, you can select the type of indicator you want to display among:

- **% Load**: the load percentage is the percentage of available time in which processing occurred.

- **% Setup**: the setup percentage is the percentage of available time spent on setup activities.

For everything not detailed in this document regarding the common functioning of the forms, please refer to the following link [Common functions, buttons, and fields](/docs/guide/common).