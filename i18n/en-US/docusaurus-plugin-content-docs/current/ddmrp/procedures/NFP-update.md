---
title: Update Net Flow Position (NFP) Value 
sidebar_position: 5
---

This procedure calculates the net flow position (NFP) of a buffered item in a given logistics unit.

For the same item, the NFP value changes with the logistics unit where it is stored, so if, for example, it is stored in 5 logistics units, we will have 5 NFP values for the same item, one for each logistics unit.

The calculation performed, as per theory, is as follows:

NFP = On-Hand + On Order - Demand - Demand Spikes

On-hand = is the inventory related to the warehouse of the line (empty warehouse value for the factory)

On order = is the total remaining quantity of confirmed orders (for distribution centers, it is given by purchase orders and internal supply orders; for the factory, it is given by purchase orders, production, and job orders)

Demand = is given by the sum of all unmet needs whose commitment date is not later than today.

For distribution centers and hubs, demand comes from either customer orders or confirmed internal supply orders (planned ones are not considered); for the factory, in addition to these, there are the needs from production orders and job orders, both confirmed and planned, as well as RDAs and unposted invoices.

Demand Spikes = total of any demand spikes in the period starting from tomorrow until tomorrow + the demand spike horizon (OSH) indicated in the DDMRP parameters.

The result of the calculation also includes an indication of the potential quantity to order; if the NFP is \<= red zone + yellow zone, then it is necessary to place an order for a quantity equal to red zone + yellow zone + green zone - NFP, taking into account any exceptions in the zones on today's date.

All elements of the calculation are stored for easy analysis and to allow for analysis of past data.

For each day, only one calculation is stored (if I run the procedure multiple times today, only the result of the last execution will be saved) and the details can be viewed in the **NFP analysis** form.