---
title: Safety Stock
sidebar_position: 3
---

The report can be found at the path **Logistics > Warehouse > Management Prints > Safety Stock** and allows the operator to perform checks in order to manage stocks correctly. In particular, it is possible, after appropriately filling out the item registry, to query the system to search for items that will go into understock in the future. It is also possible, once the procedure has been executed, to automatically issue purchase requests at the correct times for the items that are going into understock.

**Tables and parameters**

A series of settings of both pre-coded table nature and a correct parameterization of the base algorithms are recommended before proceeding with the execution of the understock:
- in *Items register*, it is necessary to fill in the *Procurement* tab, particularly the data for procurement.
- in the *MRP Parameters* of the items that you want to manage with understock, the *management policy must be stock-based*.
- the Minimum Stock must be less than or equal to the Reordering Point.

**Procedure**

The understock procedure uses an algorithm based on the average daily consumption calculated from the *Procurement* tab of the *Items register*.

Thus, it starts from the stock at the time of processing and checks whether, at the requested date, based on average consumption, it will go into understock or not.

(Minimum Stock - Reordering Point / Days for reorder 

The procedure allows you to choose: **ITEM** (class, item code, description), any **Variant** only for items managed by variant, the **Date** limit until which you want to calculate understock. It is also possible to enable **Automatic creation of purchase requests** for items in understock. If this function is activated, it is necessary to specify the **Type** of document request and, optionally, a **Note** to be included in the purchase request header.

After entering these filters, press the **Run** button to process the data.

The result grid of the execution represents the list of processes carried out specifying **Number** and **Elaboration date**.

It is important to note that in the understock procedure how when the Purchase Request Document (RDA) is generated and availability is below the Reordering Point, if no *Maximum stock* value has been set for the item, the requested quantity will be equal to **Reordering Point - Availability**; whereas, if a *maximum stock* value is also present, the requested quantity will be equal to **Maximum Stock - Availability**.

:::note Note
It should be noted that in the case where the item is of procurement type *Purchase*, the purchase request will be created but not the job order, while if the item is of procurement type *Production* or *Job Order*, the relevant job order will be created.
:::

For everything that is not detailed in this document regarding the common operation of print forms, please refer to the following link [Preview and Print](/docs/guide/common/operations-with-data/reports).