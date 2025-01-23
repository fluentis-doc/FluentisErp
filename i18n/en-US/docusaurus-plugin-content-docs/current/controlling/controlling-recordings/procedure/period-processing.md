---
title: Process Periods
sidebar_position: 3
--- 

The ***Process Periods*** procedure is the main process in controlling operations. This screen is also divided into 4 different procedures: the processing of physical movements, the calculation of depreciation, the actual process period, and finally the processing of project results.

## PROCESS PHYSICAL MOVEMENTS 
The first procedure simply reads the ***Physical Movements Posting*** to create the data foundation of the ***Historical Physical Movements***, by reading the quantities of state measurement units (such as the square meters of offices) to replicate them in the various periods rather than taking those of flow to subdivide them according to the criteria of the linked distribution periods. We will only need to set:
- the [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- the ***Year***

## HISTORICAL DEPRECIATION 
From this section, the processing of depreciation for controlling is carried out. We will set:
- the [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) to which the values will be assigned
- the ***Year*** to be processed
- the ***Up to period*** field, which is the final period of the year to be processed, typically corresponding to the final period of our results generated in the mid-year closure
- finally, we have the ***Starting year for recalculation history***. This field is used in case any settings of controlling in already processed assets have been modified.

:::tip Example 
Let’s assume we have an asset purchased in 2015, to be depreciated in controlling at a rate of 15%, which means in just over 6 and a half years. If our first controlling calculation is for 2022, ***FluentisERP*** in the first processing will need to calculate the depreciation from 2015 onwards to understand if there is a remaining balance to process in 2022; probably not, since 2022 is 7 years later (I say probably because the controlling calculation is managed month by month; if the asset was purchased in December 2015, we would likely have the closure of the depreciation in the first months of 2022). If for some reason, after an initial processing, I wanted to change the depreciation to 10%, what should ***FluentisERP*** do when calculating for 2022? Should it keep the original value of 15% already processed and thus continue to calculate nothing, or must it reset the historical values to reprocess them with the current settings? If we set the starting year to reconsider, it means that for all assets that have the flag for updating historical values, ***FluentisERP*** will recalculate the historical data starting from the one set.
:::

Once the processing is complete, ***FluentisERP*** will have populated the data of two screens: the first is that of the ***Historical Depreciation***, where we will have visibility of the details by area, asset, year, and month of the data processed for each asset. As with the other historical screens, the data in this table are not modifiable by the user. The second screen that has been populated will be that of ***Off-balance records for area***, in which Fluentis will have deleted and recreated a record for each year that contains the monthly details of the applied depreciations, totaling the values by detail account and center.


## PROCESS ACCOUNTING DATA 
This is the processing that reads the results from the ***Mid-Year Closing*** we prepared to monthly the data and then apply the various drivers in the order of cycle. The parameters to insert are the usual:
- the [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of reference
- the ***Mid-Year Closing*** to use
- any ***Balancing Timing*** if one wants to create adjustments on the accounts not to be used in controlling
- the ***Date***
- the ***Year*** of the data to be processed
- the ***Template*** to use

The choice of the ***Mid-Year Closing***, in reality, is not mandatory: let’s imagine we have imported from a spreadsheet that we prepared externally the data of the budget area, where we have the estimates of the balances for detail accounts and center for the next year. We can still calculate on these off-balance budget records our drivers, which may be specific for the budget area, so as to appropriately monthly them and then make a comparison with the results coming from accounting: in this case, we would not set the mid-year closure because the budget records will be the data origin to consider.

If, however, we are processing our results from a closure, the possibility will be activated for ***FluentisERP*** to generate automatic adjustment records, setting whether to manage those of ***Mid-Year*** accounts or both ***Mid-Year*** and ***Yearly***.

This involves reconciling, with appropriate records, the data of the sub-accounts marked as not to be used in controlling, visible in the grid below, against those recorded earlier with extraordinary area records. 

:::tip Note 
As already mentioned elsewhere in the documentation, the adjustment logic could be solely at the level of values while maintaining the proportions of the centers already recorded, or specifically involving the elimination of the controlling data with reversing records to reflect the accounting valuation of both value and center. From the grid below, it will be possible, if necessary, to force the timeframe and type of balancing to be executed, overriding the logic stored at the time of creating the mid-year closure.
:::

During these processing steps, ***FluentisERP*** will also prepare a monthly table with only project/job order data, which will be the starting point for the processing of the results. If the processing of accounting data processes all the distribution type drivers from 01 to 12, in fact, the processing of project results will apply the specific project/job order drivers.

## PROCESS FINAL PROJECT
This procedure will read the history of the records processed in the previous procedure that are linked to projects, read data from production (i.e., internal and external operations), essentially all direct project costs and revenues, to then process the drivers of distribution types from 13 to 18. See the explanations available in the ***Cost driver***. The fields to be set are:

- the [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) to be processed
- the ***By date*** and ***To date*** range
- a ***Code*** and a ***Description*** for this processing
- a ***Date*** to be assigned to the created records
- the ***Year*** of reference for the calculation
- the ***Template*** to use for the record