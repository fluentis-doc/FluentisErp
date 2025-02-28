---
title: Controlling 
sidebar_position: 1
---

The area dedicated to the controlling of **Fluentis ERP** includes all the functionalities necessary for preparing mid-year balance sheet simulations, managing balance reclassifications on [*Models*](/docs/controlling/reclassifications/create-reclassification-model) that can be freely configured, as well as the entry and maintenance of all management records necessary for directional accounting by cost center.

There are also consolidation procedures dedicated to multi-company installations, as well as the ability to perform comparisons on processed historical data, sales forecasts, and product cost calculations, and budgets by corporate center.

The management of controlling is naturally integrated with all areas of **Fluentis ERP**: from the retrieve of documents in transit within the active and passive cycle, to the valuation of quantitative data (*times* and *quantities*) entered in production reports, as well as the valuation of material and external processing costs up to the recording of hours and costs of activities and interventions in the projects area.

The user can freely configure at any time, following the evolution of business needs, the structure of the [*Corporate Centers*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) to be valued in analytic accounting, being able to rely on their [*multidimensional*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) and multi-level structure, but also all the logic of [*cost drivers*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) for data reallocation among centers.

The flexibility of the module allows for data recovery from the various areas of **Fluentis ERP**, but also loading from external Excel sheets or manual entry.

## Modules of the Area
### [***Mid-Year Closures***](/docs/controlling/mid-year-closures/general-overview)
    Allows simulating an off-balance mid-year closure, which will be stored in the system, using a series of automated procedures that speed up the steps:
    - [**Create mid-year accounts closure**](/docs/controlling/mid-year-closures/create-mid-year-closures-intro): creates the initial dataset for the period
    - [**Adjustment records**](/docs/controlling/mid-year-closures/procedures/adjusting-entry): manages deferred charges
    - [**Integration records**](/docs/controlling/mid-year-closures/procedures/integration-records): manages accrued income
    - [**Purchases and sales area valorization**](/docs/controlling/mid-year-closures/procedures/purchase-and-sales-area-valorization): manages invoices to be received/issued from documents in transit in the active/passive cycle
    - [**Inventory accounting**](/docs/controlling/mid-year-closures/procedures/warehouse-oddments): records the initial/final inventory
    - [**Fixed assets depreciation retrieve**](/docs/controlling/mid-year-closures/procedures/fixed-assets-depreciation-retrieve): creates depreciations
    - [**Consolidation**](/docs/controlling/mid-year-closures/procedures/consolidation): to create a consolidated balance sheet
    - [**Off-balance closure records**](/docs/controlling/mid-year-closures/search-off-balance-sheet-records): for manual management

### [***Managerial Accounting***](/docs/controlling/controlling-recordings/controlling_recording_intro)
    In this module, we have all the procedures of true controlling, based on analytic records received from mid-year closures and the value and quantity records retrieved from the production area or projects:
    - **Journal entries**: an initial entry journal of physical data or records from the analysis area
        - [*Recording physical movements*](/docs/controlling/controlling-recordings/first-note/recording-physical-movements): valued by production/project or manually
        - [*Off-balance records for area*](/docs/controlling/controlling-recordings/first-note/extra-accounting-records-of-area): automatically valued from depreciations or inventories, rather than manual
        - [*Standard rates of centers*](/docs/controlling/controlling-recordings/first-note/corporate-centers-std-rates): manually managed

    - **History Management**
    In this section, we have all the historical records of the various processed databases
        - [*Physical flow history*](/docs/controlling/controlling-recordings/history/physical-flux-history): the historical database of physical movements
        - [*Historical amortization*](/docs/controlling/controlling-recordings/history/depreciation-history): the historical database of processed depreciations
        - [*Historical records management*](/docs/controlling/controlling-recordings/history/recording-history): the historical database monthly updated and reprocessed from all drivers
        - [*Index history*](/docs/controlling/controlling-recordings/history/index-history): the historical database of cost indices processed on the various centers

    - **Procedures**
    In this section, we find the various procedures for data retrieve and processing
        - [*Data retrieve from production*](/docs/controlling/controlling-recordings/procedure/recovery-of-production-data): to retrieve times and costs from projects, times from production, costs from internal/external processes
        - [*Data retrieve from sales invoices*](/docs/controlling/controlling-recordings/procedure/recovery-of-sales-invoice): to retrieve commissions and applied discounts
        - [*Process period*](/docs/controlling/controlling-recordings/procedure/period-processing): to process physical data, depreciations, and process the database applying drivers
        - [*Updating production rates*](/docs/controlling/controlling-recordings/procedure/alignment-production-indexes): to align the rates of production centers
        - [*Master consolidation*](/docs/controlling/controlling-recordings/procedure/master-consolidation): to create a unified group controlling

    - [**Project history**](/docs/controlling/controlling-recordings/project-history/project-history-intro)
    In this section, we have all the historical records of the various processed databases for project/job order
        - [*Historical physical order movements*](/docs/controlling/controlling-recordings/project-history/project-physical-history): the historical database of times and quantities worked on the project/job order
        - [*Management records*](/docs/controlling/controlling-recordings/project-history/recording-project-history): the historical database of direct project costs and revenues
        - [*Production values*](/docs/controlling/controlling-recordings/project-history/production-values): materials and processes directly utilized for the project/job order
        - [*Project consolidation*](/docs/controlling/controlling-recordings/project-history/project-consolidation): the resulting database with direct and indirect costs and general cost driver reallocations

### [***Budgeting***](/docs/controlling/budget/general-overview)
This is the module for managing budget data by cost center
    - [**Off-balance sheet recordings**](/docs/controlling/budget/offbalance-records-search): the starting records for the year, possibly imported from Excel

    - [**Budget records**](/docs/controlling/budget/budgeting-records-search): the records of the processed budget monthly updated for individual periods

### [***Reporting***](/docs/controlling/reclassifications/reclassification-overview)
This is the module dedicated to preparing and processing data representation models for the area, both as accounting and analytic or managerial data
    - [**Reclassification patterns**](/docs/controlling/reclassifications/create-reclassification-model): to freely define the structure of the desired reclassifications, applying specific accounts and centers of the business reality

    - [**Reclassifications**](/docs/controlling/reclassifications/reclassifications-management): these are the results of applying data to the various models, reclassified and stored for subsequent analysis

    - [**Comparisons**](/docs/controlling/reclassifications/comparations): the procedure that allows for comparing freely multiple reclassifications or various areas, periods, and dimensions of managerial accounting analysis

### [***Sales Forecasts***](/docs/controlling/sales-forecast/sales-forecast-intro)
In this module, we can create sales forecasts for the year or period, possibly starting from historical data of documents present in the sales area to reprocess them

### [***Product Cost***](/docs/controlling/cost-calculation/product-cost-intro)
In this module, we evaluate the data of the product bills of materials to verify their profitability