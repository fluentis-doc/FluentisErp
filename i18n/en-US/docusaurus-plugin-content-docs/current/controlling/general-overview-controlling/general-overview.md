---
title: Introduction 
sidebar_position: 2.0
---

The Controlling area consists of a series of modules that can serve different objectives: 

- a primary objective could be to simulate, in a few automatic steps, a mid-year balance sheet through the *Mid-Year Closures* module. To do this, there is nothing special to configure in ***FluentisERP***: just enter the module and create a new Mid-Year Closure that calculates the off-balance sheet balances by retrieving them from accounting, then adding various automatic procedures for accruals, deferrals, depreciation, inventory, invoices to be received, and finally any further manual operations to complete the balance sheet. The only thing left to do is to print the obtained Balance Sheet, perhaps consolidating multiple companies into a single intercompany statement through the *Consolidation* procedure.


- but we can extend the use of this data by aggregating and reclassifying it through the *Reclassifications* module, within which the user can utilize some pre-installed templates via the [***Fast start***](/docs/guide/fast-start) or build their own [*models*](/docs/controlling/reclassifications/create-reclassification-model) freely. Here we will have both the prints of these reclassifications available, as well as a powerful comparison function where we can freely compare the N reclassifications stored, even from previous years, in order to evaluate their deviations. The user will just need to be careful to align the already pre-configured models with any account plan codes they may have customized compared to the initial [***Fast start***](/docs/guide/fast-start).
But we are still at an *accounting* level of controlling.

- we can then configure a real Management Control system, based on the multi-level and [*multidimensional*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) structure of the [***Corporate Centers***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers). Here, too, however, multiple paths open up:
    - We can limit ourselves to configuring a single analysis dimension with a list of centers to connect to the accounting usage records and thus essentially use again only the two modules already mentioned, *Mid-Year Closures* and *Reclassifications* (this time with a customized model based on the specific corporate centers defined in the company), thus limiting the impact of the configuration to only the tables *Dimension*, *Corporate Centers*, *Area Types*, and *Area*;
    - or we can push ourselves to integrate off-balance sheet or production quantitative data (*hours* and *quantities*), technical depreciation, perhaps defining more analysis dimensions (for line of business, or for project/job order) and obtaining both actual rates of production centers and a contribution margin income statement, or perhaps a full costing of the various sales projects/job orders.
Depending on the complexity of the company and the required results, the tables of [*Cost drivers*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers), the connections of the business centers in *machines* and *labor groups*, or in the various project WBS and personnel activity will come into play.

- to these results then 
    - we can attach the management of a *Budget* for cost center, in order to evaluate the deviations between the projected and the simulated actual of the period of interest
    - we can align the simulations of *Product Cost*, normally based on the cost standards linked to the bill of materials.

Completing the area is the *Sales Forecast* module.

In this general overview section, we will provide logical indications of the steps to follow for those who want to implement a ***complete*** management control system.

:::tip Note
It is therefore not easy to define a linear and univocal training path for the area, as perhaps in the same company two different users might use different modules and options among themselves.
We will therefore try, where necessary, to detail the various possible usage objectives of the various procedures.
:::