---
title: Introduction
sidebar_position: 1
---

Starting from version 2025 of Fluentis ERP, two different modes of Budgeting management are available.

1. Budget by cost center<!-- centro di costo -->, which integrates with management control<!-- controllo di gestione --> in order to value a specific analysis area of the Budget, and which can be valued with specific cost drivers. It is then compared with actual data within the Reclassification Comparisons<!-- Comparazione Riclassificazioni -->.
The module provides for the loading of detailed data through an Excel import of budget forecast data.

2. Budget management<!-- gestione del budget --> even without the full use of the management control<!-- controllo di gestione --> module: processing is possible for accounting detail accounts, cost centers<!-- centri di costo -->, profit centers<!-- centri di profitto -->, and on a reclassification model<!-- modello di riclassificazione -->.

## Initial module configuration<!-- Configurazione iniziale del modulo -->
The tables required for using the module are:
- In the [**Area types**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) table, a specific type is needed to associate with Budget areas<!-- aree di Budget -->.
- In the [**Area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) table, at least one Budget area<!-- area Budget --> associated with the budget area type<!-- tipo area di budget --> is needed.
- The configuration of the structure of the company's [**Cost centers**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers)<!-- Centri di costo -->.
- For those who do not use the full controlling module (Budgeting not through off-balance records), the **Budget Types<!-- Tipi Budget -->** table can be configured (a simple table to code categories and assign numbering) and the [**Period Types**](/docs/configurations/tables/controlling/forecast/period-types)<!-- Tipi Periodo --> table.

## Managed documents<!-- Documenti gestiti -->
import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/budget/budget-excel-import">Budget Import from Excel with Bizlink<!-- Importazione Budget da Excel con Bizlink --></Link>
        <p>- to value in controlling the external processing of a budget</p>
###     <Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Budget entries<!-- Scritture di budget --></Link>
        <p>- to manually intervene on budget data</p>
###     <Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Management entries history<!-- Storico registrazioni gestionali --></Link>
        <p>- to process a Budget from the data of an existing actual, applying [*Variation percentages*](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages)<!-- *Percentuali di variazione* --> to the data</p>
    </div>
</div>