---
title: Interventions from Declared Activities
sidebar_position: 4
---

The first tab, **Interventions from Declared Activities**, is the filtering area, where it is possible to set a series of filters to more specifically search for activities present in the database.

Once the filters are entered, by clicking **Search** in the ribbon bar, the results will be presented in a grid.

The specific buttons in this tab are:

![](/img/neutral/common/select-all.png) Set all as Invoiceable Activity: activates the **Invoiceable activity** flag in all selected activity rows in the grid;

![](/img/neutral/common/select-all.png) Set all as Force Invoiced Activity: activates the **Force Invoiced Activity** flag in all selected rows;

![](/img/neutral/common/select-all.png) Set all as Verified: sets the **Activity status** field to **Verified** in all selected rows;

![](/img/neutral/common/select-all.png) Set all as Entered: sets the **Activity status** field to **Inserted** in all selected rows.

In the second tab, **Parameters**, you can enter the parameters to be used in the procedure:

**Intervention type**: contains the type of intervention to create;

**Intervention date**: contains the date of the intervention to create;

**Time to pay**: 

In the combo box **Time arrangement** you can choose how to round the Time to pay between:

**Round up to 0 minutes, when time is more than 0 minutes**:

**Round down to 0 minutes, when time is less than 0 minutes**:

**Do not round** (if this option is selected, the Time to pay field cannot be filled);

The combo box **Grouping** allows you to group certain properties as you prefer: these groupings will be visible in the created intervention. In particular, you can choose to group by Item, Project Item, Account, Date, Employee, and/or Project. 
You can add properties to group through drag and drop.
In the ribbon bar, there are some buttons that allow you to modify the Group grid:

![](/img/neutral/common/clear.png) Clear: clears all groupings;

![](/img/neutral/common/delete.png) Delete: deletes the selected grouping;

![](/img/neutral/common/move-down.png) Move down: moves the selected grouping down one position;

![](/img/neutral/common/move-up.png) Move up: moves the selected grouping up one position.

Other specific buttons in the ribbon bar are:

![](/img/neutral/common/recalculated.png) Recalculate time to pay: recalculates the Time to pay based on the set parameters;

![](/img/neutral/common/create.png) Create intervention: creates the intervention starting from the selected activity in the filter tab; this button is also present in the first tab.

In the third tab, **Currency adjustment rollback**, you can restore the operations performed. By pressing **Search**, the operations and the users who performed them will be displayed; by selecting a row, the **Working time configuration** and **Linked intervention** grids below will show the details.
To restore an operation, simply select the chosen row and press **Rollback** in the ribbon bar.