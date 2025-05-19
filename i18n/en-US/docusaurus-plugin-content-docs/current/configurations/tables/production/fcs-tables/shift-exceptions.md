---
title: Shift Exceptions
sidebar_position: 7
---

The table is located at **Tables > Production > F.C.S. Tables > Shift Exceptions**.

The data present in this table is used only in the procedure of [F.C.S Scheduling](/docs/planning/ms-master-scheduling/fcs-scheduling).

This form allows you to define shift exceptions for any resource simulated by the scheduler (Work Centers, Machines, Workers, Production Resources).       
There is a hierarchical relationship between centers and machines, so if a center is inactive at a certain time, the related machines will automatically be inactive.         
Each resource has its own standard work shift, but on certain days, a different work shift can be indicated. For example, holidays should be managed as shift exceptions with an empty work shift.          
Other typical uses of the empty shift are for machine maintenance, worker absences (vacation or illness), and maintenance of production resources. Exceptions can also be used for limited periods when more or fewer hours are worked than usual (overtime, layoffs, etc.).           
The entry of exceptions is done by selecting the work shift, the time period during which the exception will be valid, and the items to which the exception will apply (multiple items can be selected together for each type, for example, multiple centers and multiple machines).

**Search Shift Exceptions**

The form consists of a filter area and a results area. Once all desired filters have been set, simply click the **Search** button to view the results within the results grid.

**Insert Shift Exceptions**

To enter new codes, click on the first empty line in the grid or press the **New** button. 

For the new record, at least the mandatory fields required by the program must be filled in: **Date**, **Category**, and **Work Shift**.

For anything not detailed in this document regarding the common functionality of forms, refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).