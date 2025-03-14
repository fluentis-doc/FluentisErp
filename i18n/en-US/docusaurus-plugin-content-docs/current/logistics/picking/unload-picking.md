---
title: Unload picking
sidebar_position: 4
---

:::important What it is for
The Unload picking procedure in Fluentis is designed to facilitate the handling of items picked from the warehouse during the picking process. This functionality allows users to select one or more already created pickings and, through an intuitive interface, make the necessary warehouse entries for the correct unloading of items.

Within the procedure, users can apply filters to select the desired pickings and specify the warehouse registration date. 
Once selected, it is possible to start the unloading process, ensuring that the movements are recorded correctly in the system. 

Additionally, the module offers features to manage anomalies, such as items without a warehouse and reason, or to view items that have not been unloaded, thereby improving operational efficiency and the traceability of inventories.
:::

By selecting one or more pickings and pressing the **Unload** button, a window opens that allows for the movement of the pickings.

**Filter**

In this tab, it is possible to search for the desired pickings based on the applied filters. It is also possible to specify the **Warehouse registration date (Data di registrazione di magazzino)**.

*Specific button*:  
> **Unload**: creates the warehouse entries for the selected pickings.  

**Parameters**

In this tab, it is possible to specify the parameters necessary for creating warehouse movements. In particular, for picking lines without a warehouse and reason, it is possible to choose not to unload the entire document, to skip the item without a warehouse and reason, to view the items that have not been unloaded, or to use the default warehouse and reason settings.

**Summary**

The summary tab allows you to view the operations performed and, if necessary, to roll back those operations.

It is possible to enter filters to view only the desired operations. By selecting a row in the results grid, you can see the details (i.e., the reference pickings and their entries) in the tabs at the bottom of the window.

By selecting one or more rows in the search grid and pressing the *Delete Selected Unloads* button, the recorded warehouse entries will be deleted.

*Specific buttons*:
> **Delete Selected Unloads**: deletes the entries derived from the selected rows in the results grid.  
> **Restore Picking**: deletes entries limited to the selected picking lines.  

For everything not detailed in this document regarding the common functioning of forms, please refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).