---
title: Yellow Zone Adjustment (Rettifica zona gialla)
sidebar_position: 9
---

The value of the yellow zone is automatically calculated by the zone update procedure based on the value of the item's DDMRP parameters.

Through this table, it is possible to force a different value on specified dates.

The planning system takes into account any adjustment values for the zones in the NFP calculation even if the zone update procedure has not been executed.

The yellow zone is given by the product of the average daily consumption (ADU) times the replenishment time of the item (DLT).

If there is a significant change in one of the two factors over a short period, an exception for the yellow zone can be used.

For example, when there is a significant change in demand over a very short period, such as during promotional campaigns, or when it is known in advance that there will be a supply interruption for a short period (temporary shutdown of a facility, holiday closure of a supplier, etc.).

Naturally, the exception to the zone must be dated with sufficient advance notice before the event to be managed.