---
title: Average Daily Consumption Alerts (Allarmi consumo medio giornaliero)
sidebar_position: 7
---
This report allows you to verify whether the average daily consumption (ADU) of any item has varied excessively during a specific time period.

There is a procedure whose execution must be scheduled automatically, which analyzes all DDMRP buffers in all logistical units and stores only those in a specific table whose percentage change in ADU exceeds the imposed limit.

In the general DDMRP parameters, the maximum threshold of percentage variation that does not generate an alert is set, as well as the number of days in the past for which the analysis should be conducted (which always concludes the day before the calculation).

Through this form, analyses can be conducted with different percentage values and for time periods of the user's choice.

The report will highlight only those items whose average daily consumption has undergone a variation (either in deficiency or excess) percentage greater than the limit set for the analysis, within the time period indicated by the user.

The analysis is performed on the historical values of DDMRP parameters, both for the automated procedure and for this form.