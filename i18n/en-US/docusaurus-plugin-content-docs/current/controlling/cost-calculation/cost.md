---
title: Cost Calculation 
sidebar_position: 2
---

At the top of the screen, there is a filter through which you can perform a more targeted search for the items to consider in the procedure; in the grid with the search results, you can select the items to consider. The procedure is carried out with the ribbon bar button **Calculation of selected item costs** that is enabled only after selecting at least one item.        
The results of the calculation procedure will be directly displayed in the item grid. With the ribbon bar button **Bill of Materials Valorization**, the corresponding print is opened, which in turn will contain the prints of *Bill of Materials Valorization* that allow for a detailed view of the various components that contribute to the total cost of the item.

The items selected in the **Cost Calculation** procedure will be valued based on the option selected in the appropriate section **Valorization at**: 
- Last cost    
- Average cost 
- Standard cost     
- Standard cost next year 

Depending on the selected value, the materials are calculated by taking the respective cost present in the tab [Cost in Item Registry](/docs/erp-home/registers/items/create-new-item#10-costi); whereas semi-finished products and finished goods are calculated as the sum of the costs of the materials present in [Bill of Materials](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management) and the costs of the processing of the [Route](/docs/erp-home/registers/production/routes/new-route).
- **From Management Area**: if this option is selected, it is necessary to indicate next to it the Management Area from which to take the cost. The management area is a table composed of two grids: the first one allows you to input Code and Description; in the second one, you can input a series of data such as the Type of cost to be used for the area. The cost type table can itself contain various types of costs; it can also be based on sales or purchase price lists.

The flag **Update Items Costs** allows you to update the costs in the item register. Without this flag, the calculation will not modify the values. You can choose to consider economic lots and you can also enter a date from which to consider the new costs valid.
The left part **Parameters for B.O.M. and Production cycles** serves to indicate which **Item Version** to consider and which **Cycle** of the item to consider for the cost calculation procedure. Simply select the corresponding flag and the respective *Version* and/or *Cycle*. 

The results of the procedure are visible by clicking on the ribbon bar **Calculation of selected item costs**; based on the parameters entered, only certain columns will be recalculated.