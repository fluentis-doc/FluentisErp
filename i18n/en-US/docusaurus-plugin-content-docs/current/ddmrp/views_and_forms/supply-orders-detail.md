---
title: Detail of Procurement Needs/Orders (Dettaglio ordini di approvvigionamento/fabbisogni)
sidebar_position: 5
---

The procurement orders detail form allows filtering and viewing the list of all unfulfilled procurement orders, of any nature, both planned and confirmed. The needs list allows filtering and displaying the list of unfulfilled documents that create demand, and a double click on a line opens the corresponding order.

In the needs form, the item displayed is the one committed; therefore, in the case of production and subcontracting orders, it is not the item from the order. 

The filter section allows selection based on the order type, order status, item, etc.

They are particularly important when wanting to analyze in detail the order situation of an item, especially from the NFP analysis.

Each line is colored according to the buffer status of the item (buffer status) related to the receiving warehouse of the order line (destination warehouse for internal Ddmrp orders) in the case of procurement orders and commitment warehouse for orders that create needs. 

The colors are dark red for negative stock, red for stock below 50% of the red zone, yellow if the stock is between 50% and 100% of the red zone, green if the stock is above the red zone (normal minimum stock threshold) and below the sum of the red and green zones (normal maximum stock threshold), blue if above that sum (excess stock).

If the item is not a buffer in the receiving warehouse of the order line, the buffer status column is empty, and the line is not colored.

If the warehouse of the order line is not specified, it will be considered as the Factory warehouse.