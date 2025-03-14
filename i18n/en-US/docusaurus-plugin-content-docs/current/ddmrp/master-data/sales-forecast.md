---
title: Sales Forecast
sidebar_position: 11
---

This table contains the sales forecasts of finished products manufactured in the factory and has a maximum weekly detail (weekly sales forecast).

For distributed products, this table is not used, but rather the daily consumption forecasts table.

The need for a sales forecast in DDMRP is much rarer compared to an MRP because the Master Production Schedule is not used as it is not necessary to anticipate demand as in a conventional MRP.

The use of the sales forecast is only necessary when it is known that in the future the demand for a finished product will change significantly and in a short period (a time frame comparable to the cumulative production time of the finished product).

In such a situation, the inventory present for the buffer items in the bill of materials for the finished product would not be sufficient, making it impossible to produce the finished products in the times and quantities established in the sales forecasts.

If there were a strong demand variation, but progressive and over a time period longer than the cumulative production time, sales forecasts would not be necessary as the [**average daily consumption update procedure (ADU)**](/docs/ddmrp/procedures/ADU-update), working on past consumption values, automatically adjusts the average daily consumption (ADU) to the variation in demand, resulting in an increase in zones and the average inventory level.

Typical situations that require the use of sales forecasts include:

-   Sales promotions
-   Seasonality
-   Entry into a new market
-   Exit from a market
-   Introduction of new products
-   Elimination of old products