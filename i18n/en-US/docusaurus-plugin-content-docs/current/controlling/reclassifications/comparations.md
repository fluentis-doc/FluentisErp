---
title: Reclassification Comparisons 
sidebar_position: 5
---

Reclassification comparisons allow, starting from a certain [*Reclassification Model*](/docs/controlling/reclassifications/create-reclassification-model), to process comparisons among the various reclassifications stored in ***FluentisERP***.


## COMPARISONS ON DATA FROM MID-YEAR CLOSING RECLASSIFICATIONS
We will set the model, insert an identifying Description for the comparison, and on the right, we will not set the flag **Controlling Data** so that ***FluentisERP*** will read the reclassified data processed from the *Mid-year closing* or from the *Consolidation*.

In the underlying grid of ***Details***, we will have the following fields:
- *Progressive*: this will be the identifying element of the data in the next ***Variances*** tab.
- *Code/Closing* (with the related Description and Date).

Once these settings are saved, in the ***Variances*** tab, we will see the result of the comparison. In particular, we will have the following options:

- *View variances*: allows you to see the percentage variance between the entered reclassifications. On the left side, it will activate the ability to set which column (the adjacent or a fixed one) to calculate the variance on.

- *View Detail Data*: will show the details of the detail accounts or centers that value the individual node of the model.

- *Show centers*: not active on comparisons not from controlling.

- *Decimal digits*: decimals to be used for the variance column.


## COMPARISONS ON MANAGEMENT ACCOUNTING CONTROLLING DATA
We will set the model, insert an identifying Description for the comparison, and on the right, we will set the flag **Controlling Data** so that ***FluentisERP*** will read the *Managerial accounting* data of controlling.

In the underlying grid of ***Details***, we will have the following fields:
- *Progressive*: this will be the identifying element of the data in the next ***Variances*** tab.
- *Area*: mandatory, this will be the area from which to read the data.
- [*Dimension*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension): mandatory, meaning which dimension to read the data from.
- [*Business Center*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): optional, meaning which center you want to view data from.
- *Project*: not in use.
- *Start of Period* and *End of Period*: mandatory, this is the range of periods to consider.
- *Start Year* and *End Year*: mandatory, this is the range of years to consider.
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

In the case where you are in the cost assignment model comparison for the calculation of indices, if in the detail settings we have filtered for the various measured production centers, we will have the possibility to see, within the underlying expander, the totals of the processing cost index for each of these. The displayed fields are:

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

:::tip NOTE
When processing comparisons for controlling, ***FluentisERP*** will automatically create as many reclassifications on the model as there are combinations of center, year, month, and requested details, before making the processing result available. The more complex the list, the longer the processing time will be.
:::