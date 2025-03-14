---
title: Consumption Forecasts (Previsioni di consumo)
sidebar_position: 7
---
This table contains the consumption forecasts of buffer items.

For each buffer item and for each logistics unit, it is possible to indicate what consumption value is expected with daily detail.

The data contained in this table is used by the [**daily average consumption update (ADU)**](/docs/ddmrp/procedures/ADU-update) procedure in the case of a calculation technique that considers future consumption forecast data and can be entered manually or may come from the calculation procedure that develops sales forecasts for finished products.

In the case of manual entry, it is not necessary to enter a value for each day; it is enough to enter one for each time period lasting equal to the parameter **Forward days** in the DDMRP parameters of the item.

For example, if **Forward days** is equal to 10 days, it will suffice to enter a value every 10 days equal to the total consumption in that period, since the daily average consumption update procedure, when using a mode regarding the future, will sum up the forecasts in that timeframe divided by **Forward days**.