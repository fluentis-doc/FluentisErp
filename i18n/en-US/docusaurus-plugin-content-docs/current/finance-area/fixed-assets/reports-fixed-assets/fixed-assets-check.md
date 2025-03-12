---
title: Fixed asset control
sidebar_position: 4
---

With this report, it is possible to perform a reconciliation, account by account, between the accounting records related to the selected asset and the results of the asset book.

The totals present in the asset module are compared to the totals present in the general accounting. The result of the report will be a list of accounting accounts (identified by the asset categories selected in the form and valued in the asset module) along with their respective total values recorded in the two Fluentis modules, in order to facilitate the verification of the reconciliation.

The parameterization form for printing is similar to that of the other prints available in the asset module, therefore we highlight 3 fields in particular:

**Reference date (Data riferimento):** it is set by default to today’s date and is the final date that Fluentis will use to search for data within the asset module: essentially, we will take all the asset values that are less than or equal to this date (therefore all assets and all funds up to this date) while we will read only the depreciations in the year, up to this date.


**From date - to date (Da data - a data):** mandatory to execute the report, it will instead be the period for searching for data within the general accounting: for each sub-account (asset, fund, depreciation) used in the assets of the selected categories, the accounting balance will be calculated within this date range. 
In the context of year-end reconciliation control, we will therefore set the reference date to 31/12/yyyy and the range as 01/01/yyyy – 31/12/yyyy.


**Operations Details Flag (Flag Dettagli operazioni):** by activating this flag, a detail for each moved date is created to understand if there is a corresponding movement in the asset sheet for each registration date.

The report displays the list of accounts used in the assets of the selected categories, the column with the value obtained from the asset module, that from the accounting, and then any difference between the two.