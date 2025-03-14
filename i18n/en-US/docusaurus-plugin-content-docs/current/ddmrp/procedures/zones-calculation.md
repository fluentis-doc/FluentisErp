---
title: Update Value of Item Zones to Buffer (Aggiornamento valore zone articoli a buffer)
sidebar_position: 3
---

This procedure calculates the green, yellow, and red zones of each buffer based on the DDMRP parameters of the items.

The green zone is determined by considering the greater of the following three elements:

1. minimum order quantity
2. quantity consumed during the reorder period (if defined) = ADU x DOC, that is, average daily consumption x reorder cycle in days
3. ADU x DLT x LTF, which is average daily consumption x decoupled lead time x lead time factor

The green zone determines the minimum order size (an order cannot be issued for a quantity smaller than the green zone) and the average frequency of order issuance (the larger it is, the less often orders are placed).

The yellow zone is determined as ADU x DLT, that is, average daily consumption x decoupled lead time.

The red zone is calculated as ADU x DLT x LTF (1 + VAF), which is average daily consumption x decoupled lead time x lead time factor, all multiplied by 1 plus the variability factor.

This is why, as variability increases, the red zone increases as well, meaning the safety stock of the item, which is the portion of stock needed to deal with unforeseen events.

This procedure takes into account any values of the **Average Daily Consumption Correction Factor (Fattore di rettifica del consumo giornaliero medio)** as well as any exceptions for the red, yellow, and green zones valid at the time of execution.

The result is used to modify the values of the zones in the DDMRP parameters table.