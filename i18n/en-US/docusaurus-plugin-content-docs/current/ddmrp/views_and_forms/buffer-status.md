---
title: Buffer Status (Stato dei buffer)
sidebar_position: 1
---
This report shows the status of the stock level of a buffer.

Given a buffer (inventory in a given warehouse), the current and future stock levels are analyzed over a comparable period to the DLT of the item.

Rows are displayed for various dates starting from today, and for each row, the actual stock value (valore effettivo) and the stock percentage value considered against the red zone of the item are indicated.

A color system is used to draw attention to the criticality level of the stock.

If the stock is less than 0, dark red is used (highly critical situation with stock out and demand that cannot be fulfilled), if it is between 0 and 50% of the red zone, red is used (critical situation with risk of stock out), if it is between 50% and 100% of the red zone, yellow is used (situation not critical but to be monitored), if it is above 100%, green is used (situation without criticality).

Note that a negative stock indicates a lack of inventory in the presence of demand that cannot be fulfilled (resulting in delays and interruption of material flow), a zero stock indicates a lack of inventory but without demand to fulfill, thus a condition that does not currently generate delays and disruption of material flow but can potentially become such if demand occurs before there is time to restock the buffer.

This report not only highlights any immediate criticalities, but also performs an analysis on the future time period necessary to restock the buffer; indeed, the rows with future dates relate to forecasts of stock value considering the already known demand at the time, in order to highlight in advance possible critical situations (those with red or dark red color), enabling proactive action before the situation becomes critical.