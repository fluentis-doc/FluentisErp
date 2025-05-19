---
title: Batch Rules
sidebar_position: 3
---

The table is located at **Tables > Production > F.C.S. Tables > Batch Rules**.

The data present in this table is used only in the [F.C.S. Scheduling](/docs/planning/ms-master-scheduling/fcs-scheduling) procedure.

Each grouping rule is defined through a single record in this table.

**Specific Fields**

> **Item to consider**: the item must be selected based on which the machine's filling level is calculated (one of the linear dimensions of the items, or volume, or weight, or it can set the maximum number of operations regardless of the dimensions of the items, or the total sum of the number of pieces to be worked). In the case of dimensional value, the corresponding value derived from the item registry will be multiplied by the quantity of the production order, unless the "Independent quantity" flag has been selected.      
> **Minimum value**: minimum filling value for the machine to start.      
> **Maximum value**: maximum filling value for the machine. If the operations with the same grouping code exceed this limit, the scheduler will manage multiple work sessions of the machine, creating a task for each of them.     
> **Independent quantity**: if this flag is selected, the dimensional value of the item to which the rule refers will not be multiplied by the quantity of the production order.

**Search Batch Rules**

The form consists of a filter area and a result area. Once all desired filters are set, simply click on the **Search** button to display the results in the results grid.

**Insert Batch Rules**

To enter new codes, it is necessary to click on the first empty row in the grid or press the **New** button.

For the new record, at least the mandatory fields required by the program must be filled in: **Code** and **Item to consider**.

For everything not detailed in this document on the common functionality of forms, please refer to the following link [Common features, buttons, and fields](/docs/guide/common).