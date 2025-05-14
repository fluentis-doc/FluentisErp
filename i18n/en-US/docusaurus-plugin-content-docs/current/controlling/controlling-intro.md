---
title: Controlling 
sidebar_position: 1
---

The area dedicated to the controlling of **Fluentis ERP** includes all the functionalities necessary for preparing mid-year balance sheet simulations, managing balance reclassifications on [*Models*](/docs/controlling/reclassifications/create-reclassification-model) that can be freely configured, as well as the entry and maintenance of all management records necessary for directional accounting by cost center.

There are also consolidation procedures dedicated to multi-company installations, as well as the ability to perform comparisons on processed historical data, sales forecasts, and product cost calculations, and budgets by corporate center.

The management of controlling is naturally integrated with all areas of **Fluentis ERP**: from the retrieve of documents in transit within the active and passive cycle, to the valuation of quantitative data (*times* and *quantities*) entered in production reports, as well as the valuation of material and external processing costs up to the recording of hours and costs of activities and interventions in the projects area.

The user can freely configure at any time, following the evolution of business needs, the structure of the [*Corporate Centers*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) to be valued in analytic accounting, being able to rely on their [*multidimensional*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) and multi-level structure, but also all the logic of [*cost drivers*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) for data reallocation among centers.

The flexibility of the module allows for data recovery from the various areas of **Fluentis ERP**, but also loading from external Excel sheets or manual entry.

## Area Modules

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/mid-year-closures/general-overview">Mid-Year Closures </Link>
        <p>Allows simulating a mid-year extra-accounting balance closure, which will be stored in the system, using a series of automatic procedures that speed up the steps:</p>
            <p><Link to="/docs/controlling/mid-year-closures/create-mid-year-closures-intro" className="bold-link">Create Mid-Year Closure</Link></p>
            <p>- creates the initial data set for the period</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/adjusting-entry" className="bold-link">Adjusting Entries</Link></p>
            <p>- manages the deferrals</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/integration-records" className="bold-link">Integration Entries</Link></p>
            <p>- manages the accruals</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/purchase-and-sales-area-valorization" className="bold-link">Purchase and Sales Area Valorization</Link></p>
            <p>- manages the invoices to be received/issued from documents in transit in the active/passive cycle</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/warehouse-oddments" className="bold-link">Warehouse Inventory Accounting</Link></p>
            <p>- records the initial/final inventory</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/fixed-assets-depreciation-retrieve" className="bold-link">Fixed Assets Depreciation Retrieve</Link></p>
            <p>- creates the depreciations</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/consolidation" className="bold-link">Consolidation</Link></p>
            <p>- to create a consolidated balance</p>
            <p><Link to="/docs/controlling/mid-year-closures/search-off-balance-sheet-records" className="bold-link">Off-balance Closing Records</Link></p>
            <p>- for manual management</p>
    </div>
<div className="card">
###     <Link to="/docs/controlling/controlling-recordings/controlling-recording-intro">Managerial Accounting</Link>
        <p>This module includes all the procedures of true Controlling</p>
<p>**Journal entries**: an initial entry journal of physical data or records from the analysis area.</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/recording-physical-movements" className="bold-link">Recording physical movements</Link>: valued from production/project or manually</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/extra-accounting-records-of-area" className="bold-link">Off-balance records for area</Link>: automatically valued from depreciations or inventories, rather than manual</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/corporate-centers-std-rates" className="bold-link">Standard Rates of Centers</Link>: managed manually</p>
        <p>**History Management**: In this section, we have all the historical records of the various processed databases</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/physical-flux-history" className="bold-link">Physical Flux History</Link>: the historical database of physical movements</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/depreciation-history" className="bold-link">Historical amortization</Link>: the historical database of processed depreciations</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Historical records management</Link>: the aggregated and reprocessed monthly database from all drivers</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/index-history" className="bold-link">Index History</Link>: the historical database of cost indices processed across various centers</p>
        <p>**Procedures**: In this section, we find the various data recovery and processing procedures</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-production-data" className="bold-link">Data retrieve from production</Link>: to recover times and costs from projects, times from production, costs from internal/external processing</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-sales-invoice" className="bold-link">Data retrieve from sales invoices</Link>: to recover commissions and discounts applied</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/period-processing" className="bold-link">Process period</Link>: to process physical data, depreciations, and to aggregate the database applying drivers</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/alignment-production-indexes" className="bold-link">Updating Production Rates</Link>: to align the rates of production centers</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/master-consolidation" className="bold-link">Master Consolidation</Link>: to create a unified group controlling</p>
        <p>**Project History**: in this section, we have all the histories of the various processed databases for those working on projects/orders</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-physical-history" className="bold-link">Historical physical order movements</Link>: the historical database of times and quantities worked on in project/orders</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/recording-project-history" className="bold-link">Management Records</Link>: the historical database of direct project costs and revenues</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/production-values" className="bold-link">Production Values</Link>: materials and labor directly used on project/orders</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-consolidation" className="bold-link">Project Consolidation</Link>: the resulting database with direct, indirect costs and overhead cost drivers</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/reclassifications/reclassification-overview">Reporting </Link>
        <p>Module dedicated to the preparation and processing of models for representing area data, both as accounting data and analytical or managerial data.</p>
        <p><Link to="/docs/controlling/reclassifications/create-reclassification-model" className="bold-link">Reclassification Patterns</Link>: to freely define the structure of the desired reclassifications, applying specific accounts and centers from the business reality</p>
        <p><Link to="/docs/controlling/reclassifications/reclassifications-management" className="bold-link">Reclassifications</Link>: these are the results of applying data to various models, reclassified and stored for subsequent analysis</p>
        <p><Link to="/docs/controlling/reclassifications/comparations" className="bold-link">Comparisons</Link>: the procedure that allows you to freely compare multiple reclassifications or different areas, periods, and dimensions of analysis of managerial accounting</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/budget/general-overview">Budgeting</Link>
        <p>Management of periodic budget data, on cost centers and/or projects.</p>
        <p><Link to="/docs/controlling/budget/offbalance-records-search" className="bold-link">Off-Balance Sheet Records</Link></p>
        <p>- budget records for the year, possibly imported from Excel</p>
        <p><Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Budget Records</Link></p>
        <p>- records of budget processed and aggregated on individual periods</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/cost-calculation/product-cost-intro">Product Cost</Link>
        <p>In this module, we value the bill of materials data for products to verify their profitability.</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/sales-forecast/sales-forecast-intro">Sales Forecast</Link>
        <p>In this module, we can create sales forecasts for the year or period, perhaps based on historical data from documents present in the sales area to reprocess them later.</p>
    </div>
</div>

## Integrations with Other Areas
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/finance-area/finance-intro">General Ledger</Link>
        <p>From the general accounting, we retrieve the periodic balances, both from general accounting and analytical and project accounting. From the asset module, we value the data of the relevant depreciations.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/logistics-intro">Logistics Area</Link>
        <p>From the warehouse management, we import the periodic valuation of inventories.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-intro">Sales Area</Link>
        <p>To record invoices to be issued, the commissions for the period before their maturity. All documents from the sales area value the analytical and project accounting on each item line.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchases-intro">Purchases and Subcontractors Area</Link>
        <p>To record invoices to be received, both for incoming goods and for external processing not yet invoiced. All documents from the purchases area value the analytical and project accounting on each item line.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/project-management/project-management-intro">Project Management</Link>
        <p>From the projects area, we receive the hours of personnel and data from external interventions.</p>
    </div>
    <div className="card">
###     <Link to="/docs/production/production-intro">Production Area</Link>
        <p>The production area provides the controlling with the times (labor and machine) and the quantities used in the production stages.</p>
    </div>
</div>

## Basic Data  
:::danger[Warning]
Before using the available functionalities of management control, a series of settings must be managed in the [**Base Tables**](/docs/controlling/controlling-parametrization/general-overview), which depend on the objectives to be achieved. By its nature, controlling can only foresee a configuration **Fast Start** marginally.

## Typical Workflow of the Controlling Area  
For a manufacturing company that fully uses the controlling procedures, the typical periodic workflow will be as follows:
- Creation of the Mid-Year Closure for the period
- Recovery of data from production
- Period processing
- Balance reclassifications and comparison of controlling reclassifications
- Consolidation of project and/or product cost
- Evaluation of budget variances