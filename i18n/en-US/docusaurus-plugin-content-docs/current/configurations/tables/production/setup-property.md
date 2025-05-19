---
title: Setup Properties
sidebar_position: 1
---

The table can be found at the path **Tables > Production > F.C.S Tables > Setup Properties**.

The data present in this table is used only in the procedure of [F.C.S Scheduling](/docs/planning/ms-master-scheduling/fcs-scheduling).

This table records all possible setup properties.         
The **Numeric** flag must be selected for numeric attributes (for example, temperature). For non-numeric attributes, all possible values should be saved, which will be selected where required, avoiding the possibility of input errors.       
Setup attributes are the elements that define the status of a machine for the purpose of calculating setup time when transitioning from one operation to the next.        
These are associated with the machines for which setup times need to be accurately calculated, and with the processing phases to be worked on such machines.      
Setup time is determined by an appropriate setup rule.

The table allows for the insertion of new records or the search for existing ones to view, modify, or delete them.

**Search Setup Properties**

The form consists of a filter area and a results area. Once all desired filters are set, it is sufficient to click the **Search** button to display the results within the results grid.

**Insert Setup Properties**

To insert new codes, it is necessary to click on the first empty row in the grid, or press the **New** button.

For a new record, at least the mandatory fields required by the program must be filled in: the **Code** and the **Description**.

For everything not detailed in this document about the common functionality of the forms, please refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).