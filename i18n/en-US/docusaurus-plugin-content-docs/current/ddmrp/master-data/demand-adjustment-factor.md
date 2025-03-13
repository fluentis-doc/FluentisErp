---
title: Average Daily Consumption Adjustment Factor (Fattore di rettifica del consumo giornaliero medio)
sidebar_position: 6
---
The average daily consumption of a buffer (ADU) is specified in the DDMRP parameters table for each item and for each logistical unit (distribution center hub or factory).

Through this table, it is possible to indicate a multiplicative coefficient of the average daily consumption to be applied on specific dates using values greater than or equal to zero.

The procedure **Update Buffer Item Zones Value (Aggiornamento valore zone articoli a buffer)** on these dates will consider an average daily consumption value equal to that present in the DDMRP parameters table multiplied by the coefficient in this table, and the green, yellow, and red zones will be calculated taking this product into account (the procedure will not modify the ADU value in the DDMRP parameters).

This is used to temporarily alter the normal value of average daily consumption if it is known in advance that there will be significant fluctuations in demand that do not represent a structural and permanent change, such as in the case of promotional campaigns, introduction of new products, or elimination of old products.