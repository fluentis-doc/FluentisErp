---
title: Reclassification Comparisons 
sidebar_position: 5
---

Reclassification comparisons allow, starting from a certain [*Reclassification Model*](/docs/controlling/reclassifications/create-reclassification-model), to process comparisons among the various reclassifications stored in ***FluentisERP***.


:::tip[Important]
This form represents the concluding point of the data processing path that occurs in the controlling module.

From here, it is possible to generate the final reporting that allows for data analysis.

Typical analyses that can be performed include, for example:

- Control of deviations between budget and actual, or between two or more actuals (both on accounting data and on data from business centers)
- Period analysis (typically the various months, as per the settings and logic of the entire controlling module) to determine margins or trends in costs and revenues
- Analysis of profitability and margins of business lines, through comparison (summary or month-to-month) of specific "result" centers aggregated according to the selected reclassification model.

The form can be used in two different ways for specific purposes:

1) Reading and comparing the reclassifications of **interim closures**. In this case, **NO reading of the managerial accounting processes** occurs, such as cost drivers or direct management entries, but only the data from the interim closures (reclassified).

2) Reading the data from **managerial accounting** (as processed by the appropriate procedures) and thus with the results of data recovery from production, cost drivers, etc.
:::

## COMPARISONS ON DATA FROM MID-YEAR CLOSING RECLASSIFICATIONS
1. Select the desired reclassification model and enter an identifying description of the comparison,  
2. **DO NOT** activate the **Controlling data** flag so that ***FluentisERP*** uses the data from the *Mid-Year Closures* or from the *Consolidation* and presents them reclassified based on the selected model.

In the grid of ***Details***, we will have the following fields:
- *Progressive*: this will be the identifying element of the data in the next ***Variances*** tab.
- *Code/Closing* (with the related Description and Date).

Once these settings are saved, in the ***Variances*** tab, we will see the result of the comparison. In particular, we will have the following options:

- *View variances*: allows you to see the percentage variance between the entered reclassifications. On the right side, it will activate the ability to set which column (the adjacent or a fixed one) to calculate the variance on.

- *View Detail Data*: will show the details of the detail accounts or centers that value the individual node of the model.

- *Show centers*: not active on comparisons not from controlling.

- *Decimal digits*: decimals to be used for the variance column.


## COMPARISONS ON managerial accounting CONTROLLING DATA
1. Select the desired reclassification model and enter an identifying Description of the comparison,  
2. **Activate** the flag **Controlling Data** so that ***FluentisERP*** reads the data from the ***Managerial Accounting*** of the controlling (and thus the results of processes such as cost drivers, indices and rates, data recovery from production, etc. are visible...).

In the grid of ***Details***, we will have the following fields:
- *Progressive*: this will be the identifying element of the data in the next ***Variances*** tab.
- ***Area***, **mandatory**, will be the area from which to read the data (for example, actuals, or budget, etc...).
- [***Dimension***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension), **mandatory**, meaning from which dimension to read the data (for example, the main dimension of managerial accounting, or other analysis dimensions such as specific investments, projects, etc...).
- [*Business Center*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers), **optional**, meaning which center you want to view the data from, acting as a filter since it will only read the data from that center, and it may be necessary to specify, by entering line by line, all the centers that need to be involved (for example, "result" centers).
- *Project*: not in use.
- ***Start of Period*** and ***End of Period***, **mandatory**, this is the range of periods (months) to consider.
- ***Start Year*** and ***End Year***, **mandatory**, this is the range of years to consider.
- *View Period Details*: means that for the row, there is a request to explode N columns, one for each period in the defined range.
- *Center/Job Column*: means that the code of the *Center* set on the row will be reported in the name of the column.
- *Index Calculation*: this option will force an 'on-the-fly' calculation of the cost indices of the centers. This option is valid when performing a comparison on the model code used for measuring the centers in the *Cost Centers* table.


Once these settings are saved, in the ***Variances*** tab, we will see the result of the comparison. In particular, we will have the following options:

- *View Variances*: allows you to see the percentage variance between the entered reclassifications. On the left side, it will activate the ability to set which column (the adjacent or a fixed one) to calculate the variance on.

- *View Detail Data*: will show the details of the detail accounts or centers that value the individual node of the model.

- *View Centers*: will also show the details of the centers associated with the detail accounts of the node.

- *Show Totals*: will add a final totalization column of all displayed columns in the underlying grid.

- *Decimal Digits*: decimals to be used for the variance column.

In case of variance display, we will have the following variance columns:
- *%*: this is the *vertical percentage* between the node that has the 'Reference Percentage' flag (which will thus have 100%) and all the others.
- *Variance*: this is the absolute value variance.
- *Variance %*: this is the variance in percentage.
- *Variance % on %*: compares the *vertical percentages* of the two columns.


:::note[Indici]
In the case where you are in the cost assignment model comparison for the calculation of indices, **if in the detail settings we have filtered for the various measured production centers**, we will have the possibility to see, within the underlying ***expander***, the totals of the processing cost index for each of these. 

The displayed fields are:

- *UM1-F NUMERATOR*: numerator for the fixed index calculation on UM1 of the center.
- *UM1-F DENOMINATOR*: denominator for the fixed index calculation on UM1 of the center.
- *UM1-F INDEX VALUE*: value of the fixed index on UM1 of the center.
- *UM1-V NUMERATOR*: numerator for the variable index calculation on UM1 of the center.
- *UM1-V DENOMINATOR*: denominator for the variable index calculation on UM1 of the center.
- *UM1-V INDEX VALUE*: value of the variable index on UM1 of the center.
- *UM1 TOTAL*: total index of UM1 of the center.

- *UM2-F NUMERATOR*: numerator for the fixed index calculation on UM2 of the center.
- *UM2-F DENOMINATOR*: denominator for the fixed index calculation on UM2 of the center.
- *UM2-F INDEX VALUE*: value of the fixed index on UM2 of the center.
- *UM2-V NUMERATOR*: numerator for the variable index calculation on UM2 of the center.
- *UM2-V DENOMINATOR*: denominator for the variable index calculation on UM2 of the center.
- *UM2-V INDEX VALUE*: value of the variable index on UM2 of the center.
- *UM2 TOTAL*: total index of UM2 of the center.

- *% NUMERATOR*: numerator for the percentage index calculation.
- *% DENOMINATOR*: denominator for the percentage index calculation.
- *% PERCENTAGE*: value of the percentage index.
:::


:::tip NOTE
When processing comparisons for controlling, ***FluentisERP*** will automatically create as many reclassifications on the model as there are combinations of center, year, month, and requested details, before making the processing result available. The more complex the list, the longer the processing time will be.
:::

:::important[In-depth Analysis]
In the presentation of the final results (including the processing of managerial accounting such as cost drivers, etc.) through the reporting allowed by this form, in order to represent a complete and correct situation in relation to the purposes of one's controlling system, it is necessary to evaluate the interaction between the following elements:

- the structure of the reclassification model that is selected and the related links, which can be to only accounting accounts (thus reading all the business centers connected to each account) or to the account filtered by center (obtaining only the movements related to that center, coming from that account), or to only the business center (obtaining all movements that have flowed into that center from any account)

- the type of data that is read in the link between the reclassification model and the business centers (source data, which still reports the effect of cost drivers by default, or value transfers between centers, allowing discrimination between values given or received)

- The setting that is performed in the *details* grid of the comparison with the flag ***Data from controlling*** activated: that is, whether in this grid an entire area and dimension of analysis is called, with all the centers related to it, or only some business centers are filtered. In the latter case, it is necessary to weigh which centers to call; for example, centers that have received result values from other centers, the latter NOT "emptied" by the cost drivers (to avoid duplicating values).
:::