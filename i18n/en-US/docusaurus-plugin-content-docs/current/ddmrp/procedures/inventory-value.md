---
title: Calculation of Invested Capital Value in Buffers (Calcolo valore capitale investito nei buffer)
sidebar_position: 4
---

This procedure calculates the average invested capital in an item managed as stock according to the Ddmrp logic (buffer).

This calculation is performed by multiplying the average stock value of the buffer (red zone + green zone / 2) by the unit cost of the buffer item.

It is very important to keep in mind that the calculation of the unit cost only takes into account the cost of materials for purchase or external processing (direct and variable costs), not other indirect costs (labor cost, depreciation of machinery, etc.).

The main purpose of this procedure is to verify whether the decision to introduce or eliminate a buffer leads to a decrease in the total value of invested capital.

If, following a decision, the total value of invested capital decreases, it is to be considered a valid choice; otherwise, it should probably be avoided.

If a buffer item has a bill of materials, there is a branch that reaches up to the purchased products, representing the chain of critical components, which is the chain that determines the value of the decoupled lead time (DLT) of the parent buffer.

Normally, making a buffer one of such items decreases the DLT value of the parent buffer and consequently decreases its average stock, while introducing a new stock for the new buffer.

Since the higher you go up the bill of materials, the higher the unit cost becomes, this action typically leads to a reduction in the sum of the total invested capital value of the parent buffer and child buffer.

To confirm or refute what has just been stated, this procedure must be executed.

For this calculation, only direct costs are used because the traditional calculation of the full unit cost with the allocation of indirect costs through cost drivers is considered unsuitable and misleading for decision-making.

This full unit cost is only relevant for stock valuations for the previous fiscal year to fulfill accounting legislative obligations (according to GAAP, or Generally Accepted Accounting Principles, valid worldwide); indeed, only in retrospect can the exact volumes produced be known, thus allowing for a sufficiently reliable calculation of the unit cost.

For purchased goods, the values present in the item registry fields (last cost, average, standard based on the user's choice at the time of launching the procedure) will be considered.

In the case of processing items, the processing cost (last cost, average, standard based on the user's choice at the time of launching the procedure) is deducted by subtracting from the item's cost the sum of the costs of its bill of materials components.

Note that the calculated values are based on the dimensions of the red and green zones of each buffer read from the Ddmrp parameter table.

If there are any exceptions in the Demand Adjustment Factor or in the zones at the time of launching the procedure, and the zone update procedure has been executed, the values for working capital valuations will take this into account, therefore, for the same item, different values will be obtained at different calculation times.