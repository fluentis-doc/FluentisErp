---
title: Ledger Records and General Ledger Features 
sidebar_position: 10
---

In each ledger record with an ledger template that has the cost center management flag active, we will have visibility of the 'Analytic' tab dedicated to the valuation of analytic accounting by cost center.

:::tip Note
The *Projects* management flag present in the ledger template will behave differently depending on whether the company has *Controlling* active or not: 
- if **not active**, the flag will make visible a specific management tab for direct project costs/revenues, disconnected from analytic accounting;
- if **active**, the flag will make visible the projects field within the cost center management tab of the analytics: the field will be editable only for dimensions related to the project dimension.
:::

Within the analytic tab, we will have full visibility and availability of all lines automatically valued by ***FluentisERP*** at the time of entering the record, or reported from the source document of the accounting: we can modify the amounts, add new lines, and delete others, according to the configuration logic of the individual valued cost center, the chart of accounts, and the template.

Once the record is completed, we will have visibility of this data in some general ledger procedures and reports:

## GENERAL LEDGER PROCEDURES
- ***Cost center movement visualization***: a search mask for the analytic movements present in the ledger records, with the possibility to enter and modify the record itself.

- ***Account Balance Visualization with cost centers***: allows viewing of the total for centers, but also by center and detail account, totaling them on the structure of the chart of accounts.

## GENERAL LEDGER REPORTS
Within the *Analytic Reports* group, we have available:
- ***Cost Center Analysis***: allows grouping of analytic movement data according to a predefined list of properties, dragging them into the grouping grid.

- ***Profit Center Analysis***: this report is present for backward compatibility; it is similar to the previous one but reads the movement data of the *Profit Centers*.

- ***Movement Analysis for Cost Centers***: displays the details of movements for individual detail accounts, detailing which centers have been moved.

- ***Unbalance Cost Centers/Revenue Centers/Projects Check***: in the case of companies with *Controlling* active, the report includes the verification of the balance of only the analytic accounting data for cost centers, filtering for each specific [*dimension+*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension). If we are in a company without the activation of *Controlling*, instead, we will have flags to set the search for unbalances of cost centers, revenue centers, or the project section of the ledger records.