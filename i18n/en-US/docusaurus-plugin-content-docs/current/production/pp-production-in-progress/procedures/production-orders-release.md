---
title: Production Orders Release
sidebar_position: 2
---

:::important What it is for (A cosa serve)
The **Release of production orders (Rilascio degli ordini di produzione)** procedure in Fluentis allows for efficient management of the transition of orders from the *Launched* state to *Executive*. Through an intuitive interface, it is possible to filter and select the orders to be released, while simultaneously generating the related inventory movements for the automatic withdrawal of materials. Additionally, this procedure allows for the restoration of orders that have already been released, ensuring significant operational flexibility in the production process.
:::

This form allows for changing the status of production orders while simultaneously creating the related inventory movements for the withdrawal of all items that have the **Automatic** value as the *Pickup type* in the [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) of the item.

## Filter (Filtro)

In this tab, you can view the list of planned orders that still need to be released and filter them through a series of selection criteria. 

Once all desired filters are set, simply click on the **Search** button located in the *ribbon bar* to view the results within the results grid.

After identifying and selecting the orders you wish to release, you will need to use the **Release orders** button present in the *ribbon bar*. This will change the status of the orders from *Launched* to *Executive* and simultaneously create the inventory movements for the withdrawal of all materials that have the **Automatic** value as the *Pickup type* in the [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) of the item.

## Restoration (Ripristino)

In this tab, you can execute the restoration procedure, which allows you to cancel the release of a previously released production order, restoring the situation to the state before the release, changing the production order's status back to *Launched* and deleting the related inventory movement.

Once all desired filters are set, simply click on the **Search** button located in the *ribbon bar* to view the results within the results grid.  

Keeping one of the rows selected in the results grid, the related inventory movements created are displayed in the lower grid.

To initiate the restoration, select one or more orders and click the **Restore** button. 

Restoring the production order is only possible if the generated production order is in the *Executive* state and no corresponding production declarations have been started; if it has already been *Closed*, restoring the production order is no longer possible unless you proceed backwards, starting with the rollback of the production declaration registration.

By executing this procedure, the restored orders will once again be visible in the **Filter** tab where you can re-execute the release.

For details on the common functionality of forms, refer to the link [Common functionalities, buttons, and fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).