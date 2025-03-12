---
title: Area (Area)
sidebar_position: 2
---

:::tip Note (Nota)
The table is of interest only in companies with the *Controlling* flag active.
:::

The Controlling Data is always managed with a connected analysis area that identifies what types of data are contained within: We can imagine it as a physical box, where each box is filled with accounting values and quantitative values, and each box may have its own distinct calculation model. An area includes data from all the *dimensions* of the centers.

#### Specific fields (Campi specifici)
- **Code**
- **Description**
- [**Area type**](/docs/configurations/tables/controlling/managerial-accounting/area-type)
- **Balancing job (Commessa di quadratura)**, not managed


#### TYPES OF AREAS (TIPOLOGIE DI AREE)
Typically, we will have 3 areas:
- *BUDGET*: we will have the budget for the following year;

- *ACTUAL*: when we process interim closures;

- *SET OF RULES*: an area that has no values, except for some physical measure. It is the area that contains the *standard* cost driver rules: for example, if I am processing the actuals area and I am trying to allocate my cost for rents via a cost driver, if I find a specific Cost driver for actuals, Fluentis will use that driver; otherwise, it will seek the general rules valid by default linking them to the *set of rules* area.

:::tip Note (Nota)
We can freely define how many analysis areas we want. The typical goal is to simulate *what happens if* I change the company's cost driver rules, or perhaps with the aim of applying differentiated cost configurations.

Another use is to 'crystallize' the controlling processes: as we will explain when discussing cost drivers, the controlling processes delete and recreate the data of the year being processed. If we want to historicalize, for example, the first *quarter* so that it can later be compared with the first 3 months of what was calculated in the processing of the first *semester*, we can achieve this result by creating different actual areas.
:::