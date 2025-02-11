---
title: Area
sidebar_position: 2
---


:::tip Note 
The table is of interest only in companies with the *Controlling* flag active.
:::

The Controlling Data is always managed with a related analysis area that identifies what types of data are inside: We can think of it as a physical box, where each box is filled with accounting values and quantitative values, and each box can have its own different and independent calculation model. An area includes the data of all the *dimensions* of the centers.
The available fields are:
- ***Code***
- ***Description***
- [***Area Type***](/docs/configurations/tables/controlling/managerial-accounting/area-type)
- ***Reconciliation project (Commessa di quadratura)***, not managed



***TYPES OF AREAS***
We typically have 3 areas:
- *BUDGET*: we will have the budget for the following year;

- *FINAL*: when we process the mid-year closures; 

- *SET OF RULES*: an area that has no values, except for some physical measurement unit. It is the area that holds the *standard* rules of cost drivers: if I am processing, for example, the area of finals and I'm trying to allocate my rent cost through a cost driver, if I find a specific cost driver for finals, Fluentis will use that driver; otherwise, it will look for the general rules that are valid by default connecting them to the *set of rules* area.

:::tip Note 
We can freely define how many analysis areas we want. The typical goal is to simulate *what happens if* I change the rules of company cost drivers, or perhaps with the aim of applying differentiated cost configurations.

Another use is to 'crystallize' the controlling processes: as we will explain when discussing cost drivers, the controlling processes delete and recreate the data of the year being processed. If we want to historicize, for example, the first *quarter* to later compare it with the first 3 months of what was calculated in the processing of the first *semester*, we can achieve this result by creating different final areas.


