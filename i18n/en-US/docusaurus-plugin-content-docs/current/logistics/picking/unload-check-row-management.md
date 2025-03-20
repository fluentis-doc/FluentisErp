---
title: Unloading Selection 
sidebar_position: 5
---

:::important Purpose 
The Unloading Selection procedure of Fluentis is a specialized module that allows for the management of the unloading process only for the lines that have been actually selected during picking operations. This functionality ensures a wave of efficiency and accuracy, allowing for the selection and recording of only the items that have been confirmed as picked from the warehouse.

Users can search for the desired pickings through custom filters to quickly identify the relevant ones. Once selected, the interface allows for the creation of warehouse records for the selected lines, while a timely summary of the operations performed offers the possibility to view details and manage any rollbacks.

The unloading selection procedure not only reduces the risk of errors but also optimizes productivity, ensuring that unloading operations are carried out consistently and reliably.
:::

:::note Note
Unlike [Picking Unloading](/docs/logistics/picking/unload-picking), this procedure allows for the same functions but only for the selected lines.
:::

By selecting one or more pickings and pressing the **Unload** button, a window opens that allows for the movement of pickings for the selected lines.

**Filter**

In this tab, it is possible to search for the desired pickings based on the entered filters. It is also possible to specify the **Warehouse Registration Date**.

*Specific button*:  
> **Unload**: creates the warehouse records for the selected pickings.  

**Parameters**

In this tab, it is possible to specify the parameters necessary for creating the warehouse movements. In particular, for the picking lines lacking warehouse and reason, one can choose not to perform the unloading for the entire document, to skip the item without a warehouse and reason, to view the items that have not been unloaded, and to use the default warehouse and reason.

**Summary**

The summary tab allows for viewing the operations performed and, if necessary, executing a rollback of the operations.

It is possible to enter filters to display only the desired operations. By selecting a row in the results grid, it is possible to see the details (i.e., the reference pickings and relative records) on the tabs at the bottom of the window.

By selecting one or more rows in the search grid and pressing the *Delete Selected Unloads* button, the warehouse records created will be deleted.

*Specific buttons*:
> **Delete Selected Unloads**: deletes records derived from the selected rows in the results grid.  
> **Restore Picking**: deletes records limited to the selected picking rows.  

For anything not detailed in this document regarding the common operation of the forms, please refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).