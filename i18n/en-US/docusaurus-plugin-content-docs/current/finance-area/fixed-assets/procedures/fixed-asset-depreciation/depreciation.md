---
title: Depreciation (Ammortamento)
sidebar_position: 2
---

First and foremost, it is crucial to manage the flag **Incremental operations**: since the depreciation procedure is handled with different logics, if the company uses the incremental option for its categories, this flag must be imported in order to identify the data.

Therefore, if there are both asset categories with the incremental option and categories without the option, the depreciation of the assets will need to be performed in two steps, following the search with and without the commented flag.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image01.png)

At the bottom of the form, instead, the reference year for the calculation must be set: it will normally need to be modified to enter the year prior to the current one. The calculation of depreciations for year X is not permitted when the depreciations for year X-1 have not been accounted for.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image02.png)

Once the data search is performed, we can see that it is possible, line by line, to force the number of days of application as well as the depreciation percentage: it is actually recommended to calculate these particular cases directly within each asset sheet or to modify the asset categories table directly in order to perform a quick calculation with a total selection of lines.

An alternative option to use, if you want to apply different percentages among various assets, can be the definition of the **[fixed asset module parameter](/docs/configurations/parameters/finance/fixed-assets-parameters)** called **Percentage of individual asset**, which allows defining a depreciation percentage to be used at the header of each asset.

![](/img/it-it/finance-area/fixed-assets/procedures/fixed-asset-depreciation/depreciation/image03.png)



| Function (Funzione) | Meaning (Significato) |
| --- | --- |
| Search (Ricerca) | Searches for the list of depreciations to be calculated. |
| Depreciation (Ammortamento) | Executes the calculation for the selected lines. |