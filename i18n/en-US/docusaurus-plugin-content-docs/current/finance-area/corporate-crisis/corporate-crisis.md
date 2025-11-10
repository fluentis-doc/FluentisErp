---
title: Business Crisis Verification Functionality
sidebar_position: 1
---

:::important[Introduction]
The legislation on business crises, introduced by Legislative Decree 14/2019 (Code of Business Crisis and Insolvency), aims to prevent insolvency situations through the adoption of early monitoring tools for financial difficulties.

Companies are required to have adequate organizational, administrative, and accounting arrangements capable of promptly detecting signs of economic, asset, or financial imbalance.

Among the tools provided by the legislation are **specific indicators**, such as the DSCR (Debt Service Coverage Ratio), the verification of business continuity, and the analysis of debt sustainability. Non-compliance with obligations can lead to liability for the administrative body.

Within the Fluentis ERP, there are functionalities dedicated to monitoring crisis indicators, which support the company in complying with current regulations.

The following paragraphs describe in detail the available functionalities to meet these obligations.
:::

## 1 Access to Functionality 
The management of business crises is possible through the use of the Fluentis ***Corporate Performance Monitor (CPM)*** solution.

![](/img/it-it/finance-area/corporate-crisis/1.png)

The CPM, more generally, is designed to monitor business performance and, in particular, to create indices and KPIs. It is also used to manage crisis indices more flexibly.

## 2 CPM Functionality 
The CPM module includes a section dedicated to the verification of business crises, divided into four tabs.

![](/img/it-it/finance-area/corporate-crisis/2.png)

Each tab presents the calculation of the various checks required by the legislation:

In the first tab, ***Third Party Checks***, tests are conducted on entities such as **the Revenue Agency and INPS**, which monitor:

- Delays in VAT payments
- Delays in the payment of social security and tax contributions for employees

In particular, the thresholds that trigger notifications are:

- VAT: minimum debt of €100,000 → possible insolvency
- Other tax debts: over €1,000,000 and delay > 90 days → notification
- Social security contributions: over €50,000 and delay > 180 days → notification

These thresholds are configurable in internal tables of the system.

In the second tab, ***Equity test and DSCR***, the following is checked:

- Total net equity: if negative, the state of crisis is presumed
- DSCR (Debt Service Coverage Ratio): if less than 1, the state of crisis is presumed

In the third tab, ***Sector Indices***, 5 sector indices are verified, where the expected values depend on the relevant merchandise sector: if all the expected thresholds are exceeded, again, the state of crisis is presumed.

The last tab is dedicated to the calculation of any ***personalized indices***, on which each company will make its specific evaluations.

## 3 Data Sources 
The data used for the checks comes from:

- **Specific configuration tables**
- Automatic calculations via **SQL** queries
- Configurations related to **accounting accounts**
- **Due dates**

First of all, within the **Company table**, it is necessary to indicate the **merchandise sector** of belonging: **Administrative Settings Tab > Commodity Sector For Business Crisis**.

Then, within the **chart of accounts**, we must **assign account types for the business crisis** (fixed table), through the ***Business Crisis*** field present in the *Accounts* grid (the detail of the chart of accounts).

The possible types are:

- ADE-VAT should typically be associated with the account that records the VAT balance for the month, on which it will be necessary to foresee the management of open items in order to identify the open debt.
- ADE-OTHER should similarly be associated with accounts that return other tax debts, which will always need to be managed as open items;
- INPS should be associated with social security debts, also to be managed as open items;
- LIQ will be associated with **ledgers** (i.e., generic accounts) that contain the details of customer/supplier codes, from which we will identify the available liquidity data through a cash flow;
- FIN will be associated with accounts (or ledgers) that will return, again from a cash flow, the amount of financial debts, rather than from future loan and leasing installments;
- RIS will be associated with the detail accounts of coverage reserves;
- MON will be associated with detail accounts (or accounts) for NON-monetary costs/revenues.

The calculations that are executed by default, therefore, retrieve the amounts:
- directly from the accounting items
- from the data processed in the latest cash flow
- from the accounting balances of the accounts associated with specific nodes of the ***standard reclassification model*** ***IV directive***.

In this case, the model serves only to identify which accounts to search for each variable to be used: the amounts are read directly from the general accounting, without going through an interim closure or a reclassified statement.

## 4 Crisis Management 
Currently, the system only performs an **index validation**, but does not manage the entire operational process of the crisis. It is possible to foresee the activation of automatic notifications in case of exceeding the thresholds, through Supervisor scheduling.

## 5 Targets and Sectors 
Each merchandise sector has its own predefined **target values**.

These values are stored either in non-viewable fixed tables (on third-party checks) or in the ***Targeting*** form, where the standard index data for the sector cannot be modified by the user as they are managed as *standard*: only the targets of custom indices can have modifiable custom targets.

## 6 Descriptors and Formulas 
Apart from the third-party checks, which involve a calculation performed by source code, every other index is associated with a *descriptor* (see the homonymous form in the main menu of the CPM) that defines its calculation formula, for example:

- Financial burden sustainability index: the index is calculated as “Financial burdens” / “Revenue”, which is stored in the descriptor ‘03.01’ with the formula “[RIC-OneriFin]/[RIC-Fatturato]”
- Capital adequacy index: the calculation is “Net equity” / “Total debt”, which becomes descriptor 03.02 with the formula “[RIC-PatNetto]/[RIC-DebTot]”

![](/img/it-it/finance-area/corporate-crisis/5.png)

Essentially, the formulas are based on *variables* reported in the formula via their code in square brackets.

Each **variable** (see the homonymous form in the main menu of the CPM) calls its specific SQL query.

![](/img/it-it/finance-area/corporate-crisis/6.png)

The queries underlying the standard variables are themselves standard queries that the user cannot intervene on: starting from those proposed, however, it will be possible to define a custom version that adapts to the characteristics of the accounting system of each installation.

## 7 Repository
The system saves the results of the calculations performed in the Repository form, thus creating a useful history for analysis and dashboards. Each processing is associated with a date: each index will have a unique result for each day.

![](/img/it-it/finance-area/corporate-crisis/7.png)