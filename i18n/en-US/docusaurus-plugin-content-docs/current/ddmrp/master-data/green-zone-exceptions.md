---
title: Adjustment of Green Zone (Rettifica zona verde)
sidebar_position: 8
---

The value of the green zone is automatically calculated by the zone update procedure based on the DDMRP parameters of the item.

Through this table, it is possible to force a different value on specified dates.

The planning system takes into account any adjustment values of the zones in the NFP calculation even if the zone update procedure has not been executed.

Typically, you can impose a value different from the normal calculation for a limited period of time to alter the size of the issued orders.

If the green zone value is increased, larger orders will be issued, and orders will be placed less frequently; if it is decreased, the opposite occurs.

A typical example involves production resources with non-negligible setup times.

If the production cycle of a stock item involves processing on a resource with significant setup times, and if that resource is a bottleneck—meaning it has a workload very close to its production capacity—efforts are made to reduce the resource's downtime due to setup by increasing the size of production batches. This is achieved by specifying a minimum order quantity in the DDMRP parameters of the item, which consequently determines the size of its green zone.

If this necessity arises only during a certain time period, instead of setting a minimum order quantity, a green zone exception is entered for that period.

This occurs, for example, for products with strong seasonality, where in the period leading up to the peak of seasonal demand, adequate stock is created through a temporary increase in the green zone, consequently boosting the productivity of the saturated resource. Afterward, the resource will be less loaded, thus unsaturated, meaning it will have excess production capacity; therefore, smaller order productions will be prioritized, favoring the flexibility of the production system.

The increased overall setup times during this period are not a problem because the resource is not fully loaded, thus there is unused resource time available.