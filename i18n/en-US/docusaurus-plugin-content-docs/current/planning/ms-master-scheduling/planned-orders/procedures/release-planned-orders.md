---
title: Release Planned Orders
sidebar_position: 1
---

:::important Purpose
The "Release Planned Orders" function in the Fluentis system is designed to facilitate the transition of planned orders to their respective operational statuses. Once planned orders have been generated, it is possible to proceed with their release using specific buttons on the ribbon bar. This process varies depending on the type of order: production, purchase, or subcontractor.

When releasing a production planned order, it becomes an operational production order. Purchase planned orders generate purchase requests (RDA), while planned subcontractor orders are converted into operational subcontractor orders.
:::

The form allows the creation of:

- *purchase requests*, possibly already authorized through an appropriate parameter, in the case of purchase planned orders;  
- *subcontractor orders* in the case of subcontractor planned orders, or if an external phase is present in the phases list of a planned production order;  
- *production orders*, *launched* or *executive* depending on the activation of a specific parameter, in the case of production planned orders.

The release of orders means that they are no longer visible among the [Planned Orders](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) and, consequently, a new [Scheduling](/docs/planning/ms-master-scheduling/general-schedule) of the production job from which the planned orders were possibly generated through general scheduling cannot be generated. Planned orders present in the grid generated manually or through MPR processing have no connection to production jobs.

## Filter

In this tab, it is possible to view the list of planned orders that still need to be released and filter them through a series of selection criteria.

Once all desired filters are set, simply click the **Search** button on the *ribbon bar* to view the results within the results grid.

*Specific buttons*: 

> **Release Production Planned Orders**: this button is activated only if a production order type is set in the filters in the field *Release orders planned to* and if at least one production order line is selected in the results grid; clicking this feature will release the orders generating launched or executive production orders, depending on how the parameters are set within the [Material Requirements Parameters](/docs/configurations/parameters/production/resource-requirements-parameters);  
> **Release Purchase Planned Orders**: this button is activated only if a purchase order type is set in the filters in the field *Release orders planned to* and if at least one purchase order line is selected in the results grid; clicking this feature will release the orders generating authorized or unauthorized Purchase Requests, depending on how the parameters are set in the [Material Requirements Parameters](/docs/configurations/parameters/production/resource-requirements-parameters);  
> **Release Subcontractor Planned Orders**: this button is activated only if a subcontractor order type is set in the filters in the field *Release orders planned to* and if at least one subcontractor order line is selected in the results grid; clicking this feature will release the orders generating Subcontractor Orders;   
> **Open Production Order Search**: through this button it will be possible to open the Production Orders Search filtered with the same criteria used in the filter section of this window. For example, if the planned orders are filtered in this screen by job number 3 of the year 2018, the production orders search window will open already filtered for job 3 of the year 2018.

*Specific fields*:

**Year**: indicates the year of the planned order;     
**Order**: indicates the number of the planned order;           
**Level**: indicates the level of the item subject of the order within the bill of materials;  
**Year/Number/Code/Description of production job order**: the fields will be empty if the planned order was generated manually or through MRP;  
**Estimated start date**: if it is a purchase or subcontractor planned order, this date represents the date when the purchase order to be generated with the release of the order itself must be sent to the supplier; if it is a production planned order, this date represents the estimated start date of the first working phase of the item's cycle;  
**Estimated end date**: if it is a purchase or subcontractor planned order, this date represents the date by which the supply must be received and therefore coincides with the receipt estimated date of the supplier order line that will be generated with the release of the order itself; if it is a planned production order, this date represents the estimated end date of the last working phase of the item's cycle;  
**Confirmed quantity**: will only be different from zero if processing has occurred via MRP; 
**Customer account, Detail account, and description**: indicates the customer linked in the case of production orders;  
**Supplier account, Detail account, and description**: indicates the supplier linked in the case of purchase and subcontractor orders;  
**Year/Number/Sales order type**: represents the customer order from which the job that the planned order in question was scheduled was generated.

After identifying the orders to be released, to proceed with the **Release**, one of the buttons on the *ribbon bar* must be used, depending on the type of order to be released: **Release Production Planned Orders**, **Release Purchase Planned Orders** or **Release Subcontractor Planned Orders**. These buttons will be enabled according to what is entered in the **Release orders planned to** field.

It is also possible to enter the **Planned Order Detail View (Visualizzazione dei dettagli dell'ordine pianificato)** present in the grid by simply double-clicking on the planned order line that you wish to view before proceeding with the release.

## Parameters

In this tab, it is possible to set and save the parameters needed for the release of planned orders.

### Production Orders

In this section, it is possible, by activating the **Generation of subcontractor orders for external operations** flag, to decide that if an external phase is present in the phases list of the production planned order being released, a subcontractor order for the external phase will be generated accordingly. This flag is usually left active.

### Purchase Requests

In this section, it is possible to:

- set, through the appropriate combo box, the **Type of purchase request (Tipo di richiesta di acquisto)** that must be generated from the release of purchase planned orders. This combo box automatically proposes the type of purchase request already set in the [Material Requirements Parameters](/docs/configurations/parameters/production/resource-requirements-parameters) in the section Parameters for the release of planned orders;      
- by activating the **Property procurement from MRP article parameters (Proprietà approvvigionamento da Parametri MRP articolo)** flag, the procedure will create *purchase requests* entering the priority indicated in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) of the individual item; while if not active, the *purchase requests* will be created with the priority indicated in the job to which they are linked;      
- ensure, by activating the **Round purchase request (Arrotonda richiesta di acquisto)** flag, that the purchase planned order release procedure rounds to the next whole number the quantity entered in the purchase request line generated by the release of purchase planned orders if decimal quantities are present;  
- decide the grouping method: activating the **Grouping earliest** flag, the release procedure performs a grouping of  purchase planned orders generated for the same item; in the box **Period days** the number of days for the range of grouping is set, considering the expected receipt dates of the items, thus the expected end dates of the purchase planned orders;  
- decide, if the supplier is not present in the purchase planned order, whether to **Accept the orders without vendor**, **Leave the orders without vendor**, or **Accept like vendor this account:** specified in the appropriate boxes.

### Subcontractor Orders

In this section, it is possible to:

- set, through the combo box of **Order Type** and the **Year** field, whether the subcontractor order to be generated should be of type *Closed* or *Open* and which year it should be for;  
- decide the grouping method: by activating the **Group the orders of the same subcontractor** flag, the release procedure groups subcontractor planned orders, inserting in the same subcontractor order the items that must be worked by the same subcontractor;   
- decide, if the subcontractor is not present in the subcontractor planned order, whether to **Accept the orders without vendor**, **Leave the orders without subcontractor**, or **Accept like subcontractor this account:** specified in the appropriate boxes.

*Specific button*:  
> **Save changes**: allows saving the parameters as they have been set.

### Restoration

In this tab, it is possible to execute the restore planned order procedure that allows reversing the previously made release, restoring the situation prior to the release.

The planned orders of the same type specified in the field **Release orders planned to** of the **Filter** tab are displayed.

Once all desired filters are set, simply click the **Search** button on the *ribbon bar* to view the results within the results grid.  

By selecting one of the rows present in the results grid, the document generated from the release of the selected planned order will be displayed in one of the three bottom tabs, **Production Orders**, **Purchase Requests**, or **Subcontractor Orders**.

To launch the restoration, select one or more orders and click the **Restore orders** button. 

*Conditions for the restoration procedure*:

For the **production planned order**: only if the generated production order is in the *Launched* state; if the production order is *Executive*, it is necessary to restore the release of the production order, while if it is already *Executed*, it is no longer possible to restore the planned order, unless proceeding backwards starting from the rollback of the production report registration;  
For the **purchase planned order**: only if the generated purchase request line is in the *Not Executed* state; if the purchase request line has already been executed with the creation of a supplier order, it will be necessary to proceed backwards from the purchase document to which it has already arrived;  
For the **subcontracted planned order**: only if the subcontractor order line generated has not yet been executed, or if a delivery note (DDT) for the material related to that subcontractor order line has not been generated.

By executing this procedure, the restored orders will be visible again in the **Filter** tab where the release can be retried.

For details on the common functioning of forms, please refer to the link [Common functions, buttons, and fields](/docs/guide/common).