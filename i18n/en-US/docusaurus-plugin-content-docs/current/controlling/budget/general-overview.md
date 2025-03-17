---
title: Introduction 
sidebar_position: 1
---

The Budget module allows the user to manage the budget for the cost center, which integrates with the management control of ***Fluentis Erp*** to enhance a specific area of budget analysis, which can be valued with specific cost drivers and is compared with the actual data within the Comparisons and Reclassifications.
The module is present in the controlling area and requires uploading detailed data through an import from Excel of the budget forecast data.

## To get started
the necessary tables for using the module are:
- in the table [**Area Types**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) a specific type is needed to associate with the Budget areas
- in the table [**Area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) at least one Budget area associated with the budget area type is required
- the configuration of the structure of the [**Cost Centers**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) of the company

## Managed Documents
import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/budget/budget-excel-import">Import Budget from Excel with Bizlink </Link>
        <p>- to enhance the controlling of external budget processing</p>
###     <Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Budget Entries</Link>
        <p>- to manually intervene on budget data</p>
###     <Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Historical records management</Link>
        <p>- to elaborate a Budget from the data of an existing report, applying [*Variation Percentages*](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages) to the data</p>
    </div>
</div>