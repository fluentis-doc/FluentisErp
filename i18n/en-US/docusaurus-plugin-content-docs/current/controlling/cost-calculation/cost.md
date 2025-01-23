---
title: Cost Calculation 
sidebar_position: 2
---

At the top of the screen, there is a filter through which you can perform a more targeted search for the items to consider in the procedure; in the grid with the search results, you can select the items to consider. The procedure is carried out with the ribbon bar button **Calculation of selected item costs**; the results of the calculation procedure will be displayed directly in the item grid. With the ribbon bar button **Assemblies Valorization**, the corresponding report will be opened, which will in turn contain the Assemblies Valorization prints.          
The items selected in the Cost Calculation procedure will be valued based on the option selected in the specific section **Valorization to**:

- **Latest Cost** and **Average Cost**: last cost refers to the last purchase cost (the most recent), while average cost refers to the average cost derived from warehouse movements. This value is present in the item register, Cost tab.

- **Standard Cost/Standard Cost Next Year**: standard cost is a cost manually set or set by the cost calculation procedure and indicates the reference cost for a given item to be used throughout the year. It is usually a cost that is updated at the beginning or end of the year. For purchased items, it usually corresponds to the average cost, while for other items it is calculated by the cost calculation procedure found in the Controlling area, as the sum of the material costs and production phase costs. All these costs can be used for the valuations of the bill of materials, inventory balances, or (for purchased items) for the valuation of production orders (and related load movements) when the item from a production order is loaded into stock. This value is present in the item register, Cost tab.

- **From Management Area**: if this option is selected, it is necessary to indicate next to it the Management Area from which to take the cost. The management area is a table composed of two grids: the first one allows you to input Code and Description; in the second one, you can input a series of data such as the Type of cost to be used for the area. The cost type table can itself contain various types of costs; it can also be based on sales or purchase price lists.

The flag **Update Items Costs** allows you to update the costs in the item register. Without this flag, the calculation will not modify the values. You can choose to consider economic lots and you can also enter a date from which to consider the new costs valid.
The left part **Parameters for B.O.M. and Production cycles** serves to indicate which **Item Version** to consider and which **Cycle** of the item to consider for the cost calculation procedure. Simply select the corresponding flag and the respective Version and/or Cycle. 

The results of the procedure are visible by clicking on the ribbon bar **Calculation of selected item costs**; based on the parameters entered, only certain columns will be recalculated.