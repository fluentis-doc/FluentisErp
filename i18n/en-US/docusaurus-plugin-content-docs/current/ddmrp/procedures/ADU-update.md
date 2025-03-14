---
title: Update Daily Average Consumption (ADU) (Aggiornamento consumo medio giornaliero (ADU))
sidebar_position: 1
---
This procedure updates the **Daily Average Consumption (Consumo medio giornaliero)** field of the DDMRP parameters for each item managed with a buffer.

The update occurs according to the method indicated in the item's DDMRP parameters with the following modalities:


  - 0) no update
  - 1) arithmetic mean of the past (the actual consumption of the past is analyzed and all consumptions have the same weight)
  - 2) weighted mean of the past (recent consumptions weigh more than past ones)
  - 3) arithmetic mean of the future (the daily consumption forecast table is analyzed)
  - 4) arithmetic mean of the past and the future (combination of methods 1 and 3)
  - 5) weighted past and arithmetic future (combination of methods 2 and 3)

The analysis period taken into account is indicated for each item in the DDMRP parameters through the **Backward days** and **Forward days** fields.

Regarding the analysis of the past, it is recommended to use a sufficiently long time frame to be significant, that is, a value several times greater than the decoupled lead time (DLT) of the item; otherwise, the recalculation could be too sensitive to the latest variations.

If the arithmetic mean is chosen, the calculation will be less sensitive to random variations but will notice new consumption trends with some delay.

If the weighted mean is chosen, the calculation will notice new consumption trends more quickly but will be more sensitive to random variations.

As for future consumption forecasts, these must be entered with sufficient lead time, that is, with a lead time at least equal to the cumulative lead time of the item (the time required to produce it in case of total absence of stock of its bill of materials components).

For this reason, the value of the **Forward days** parameter must be at least equal to the cumulative lead time of the item.

Regarding the averages that check consumptions in the past, remember that in the warehouse reasons table, the DDMRP ADU flag must be set to indicate to the procedure which reasons should be considered among those for the warehouse discharges where the item is stored.

If the DDMRP flag does not appear in the warehouse reasons table, it means that the DDMRP option is not set in the general parameters.