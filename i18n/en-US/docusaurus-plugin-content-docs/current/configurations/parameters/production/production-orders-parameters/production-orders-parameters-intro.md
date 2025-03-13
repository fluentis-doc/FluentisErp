---
title: Production Order Parameters 
sidebar_position: 1
---

The form can be accessed via the path **Parameters > Production > Production Order Parameters**. Through this window, all parameters concerning the movement of items via procedures related to the production area are set, as well as some parameters that allow for the management of certain aspects of the production area.

## 1. General

**Automatic management of the batches and serial numbers**: if active, it automatically proposes the batches and/or serial numbers of the materials used during production, directly within the appropriate grids related to the used materials grid of the production report. Otherwise, the user must manually set both the batches and the serial numbers of the items used that have this type of management; remember that batch or SN management is set within the *Item registry* in the tab [Batches and SN](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number) by selecting the desired management type.

**Management of double UM**: if active, it allows the user to manage the double unit of measure within the production reports, both for the produced items and for the materials used;

**Same batch for items/materials scrap**: if active, it allows the user to decide that the batch loaded in the scrap warehouse is identical to the batch that was produced (in the case of finished product scrap, thus in the case of the first of the two flags) or to the batch that was used (in the case of material scrap, thus in the case of the second of the two flags);

**Split order if the material batch are not sufficient**: if active, it allows the user to ensure that the *Release Production Orders* procedure checks if the quantities of material to be automatically deducted (only in the case of automatic or manual consumption management with WIP) are sufficient in the warehouse from which they must be taken; if they are not, the procedure splits the production order into 2 different orders that will have the same number/year but a different batch (the first will have batch 0, the second will have batch 1; the first will be the one where the materials present in stock are sufficient);

**Change job order date when modify production order date**: if active, it allows the user to ensure that when the end date of the production order changes, the end date of the contract is automatically changed as well, provided that the item of the production order is the same as that of the production contract; therefore, the production order must be at level 0;

**Compute production cost for progress**: if active, it allows the user to ensure that as production advancements are recorded, the cost of the stock registration is incremented based on the actual time declared in the report multiplied by the hourly cost of the machine and/or labor group, thus by the hourly cost of the work center used;

**Print Worksheets for Launched Orders**: it is a default that is set on the related print launch form, and when the orders are launched, the printing of the orders is done automatically;

**Automatic determination of times in reports**: if active, it automatically calculates the machine time and worker time based on the report times. Otherwise, the user must manually set the said times on the line of the production report; 

**Automatic proposal of alternative U.M.**: if active, it automatically proposes the alternative unit of measure set for the item within the production report. Typically, if the **Management of double UM** flag is activated, this flag is also activated for convenience, which becomes editable only if the **Management of double UM** flag is activated;

**Use same batch for materials wastes**: if enabled, the scrapped materials retain the same batch as the consumed materials;

**Automatic registration of reports**: if active, this flag indicates that as soon as I enter the report, it is also automatically registered;

**Associate batch for picking list**: if active, this flag indicates that when creating a picking list through the related procedure, for the materials managed in batches the system will select the batches to be picked for that/those production orders I have selected; if not activated, it means that the user will have to manually declare in the picking which batches have been picked;

**Update materials used in the production order**: if active, when the declared quantity in a production declaration changes, a message will be shown asking whether to recalculate the quantities of materials used; if not active, the recalculation of materials occurs automatically;

**Enable control in the MES**: if active, it enables attendance control within Fluentis MES. The control is based on the *Fluentis.HR_BadgeRecords* table. 
In this table, the mandatory fields for control are: *HRBR_Resource_HRR_Id*, *HRBR_RecordDateTime*, *HRBR_BadgeRecordType_HRBRTY_Id*, which can assume the values E = Entry or U = Exit.
For each row, there can only be the entry time or the exit time, so there will be 4 rows per user in a day, for example:     
- 2024-01-02 08:30:00.000 - type E 
- 2024-01-02 12:30:00.000 - type U 
- 2024-01-02 14:00:00.000 - type E 
- 2024-01-02 18:00:00.000 - type U      
The data must be imported into this table starting from the data of the badge used.

**Show component version inside bill of materials**: if active, it enables the version field in the component tab of the bill of materials.

Finally, there are four other sections: **Job sheets managed for**, **Analysis Period**, **Material valorization to cost**, **Phase sequence proposal**.

**Job sheets managed for**: this section allows, by activating one of the radio buttons, to choose the type of grouping to be used during the printing of the work sheet (which contains the parameters indicating how that material should be produced). It is still a proposal, which can then be modified within the work sheet print mask;

**Period of analysis**: this section allows, by activating one of the radio buttons, to choose the filtering period of the production orders that will be displayed in the work sheet print window (weekly, daily, or every X days);

**Material valorization to cost**: this section allows, by activating one of the radio buttons, to choose the type of cost for material valuation (last/average cost at the date of payment or of my production report or the standard cost). Additionally, by selecting the *Batches* and/or *Production job order* flags, it is possible to propose the last/average/standard cost of the material for the respective batch and/or production order based on the activated flags.    

**Phase sequence proposal**: this section allows you to choose, during the creation of a work cycle, the proposed sequence number of the phase, which can be taken from the sequence number of the standard phase or as a progressive number of the insertion order, indicating the step value as well.

## 2. Warehouses

The form is dedicated to the entry of warehouses and the related reasons that regulate the movements of items through production-related procedures; the same screen is proposed in the *MRP Parameters* of the item in the tab [Warehouses](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters), with the difference that the warehouses set in the *Production Parameters* are considered general data valid by default for the items; if different warehouses are set for a specific item in the *MRP Parameters* of the item, the system will give <u>priority to the parameters</u> found set in this latter window for the loads and unloads of materials related to the production of this item.        
Furthermore, it is possible to set the same parameters for a specific production site.

Therefore, the priority for **load** will be taken in the following order:
- Warehouse and reason if indicated in the header of the production order
- [Production Site Parameters](/docs/configurations/parameters/production/production-orders-parameters/production-site) indicated in the contract linked to the production order
- [MRP Parameters of the item](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- From the production site linked to the machine entered in the production declaration; if the machine was not indicated in the declaration, the parameters are taken from the production site linked to the machine indicated in the phase of the production order
- [Production Order Parameters](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro)

The priority for **unload** will be given in the order of:

- [Production Site Parameters](/docs/configurations/parameters/production/production-orders-parameters/production-site) indicated in the contract linked to the production order
- [MRP Parameters of the item](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- From the production site linked to the machine that is entered in the production declaration; if the machine was not indicated in the declaration, the parameters are taken from the production site linked to the machine indicated in the phase of the production order
- [Production Order Parameters](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro)

In this tab, you can set the warehouses related to *Raw material*, *Unfinished products*, *Finished products*, and any *Scrap* with the related load and unload reasons.

To set one of these warehouses, it is sufficient to select the warehouse and reasons (pre-coded in the respective tables [Warehouses](/docs/configurations/tables/logistics/warehouses) and [Reasons](/docs/configurations/tables/logistics/warehouse-templates)) that you want to set through the respective combo boxes.

In addition to these main warehouses, there are W.I.P. warehouses that can be activated by selecting the W.I.P. option and proceeding to select within the combo box the warehouses and reasons as done for other warehouses.

W.I.P. (Work in Progress) warehouses are transitional warehouses, where goods pass through when the production order of the finished product or semi-finished product is released. When these warehouses are set, the type of withdrawal of the material must be *Manual*; otherwise, if it were an *Automatic* withdrawal type, the unloading of materials would occur automatically upon the release of the production order. In the case of W.I.P. warehouses, the material is thus moved to these warehouses upon release (via the [Materials Picking List](/docs/production/pp-production-in-progress/picking-materials-list)) and is unloaded during the production report of the last processing phase (productive and movable) of the article of the production order or during the processing phase to which the material is associated.

Conversely, if the material withdrawal type is *With List*, then while the movement of the material to the W.I.P. warehouse occurs in the same way as for the manual withdrawal type, the unloading from the W.I.P. occurs via the procedure of the [Materials Picking List](/docs/production/pp-production-in-progress/picking-materials-list).     

### Operation of Warehouses and Reasons

Regarding the **load** of finished and semi-finished products:

- If considering the **last producible and movable phase** of the cycle, the warehouses and reasons of the **Finished products** section are used if the production order is of **level 1** (thus related to the finished product); otherwise, those of the **Unfinished products** section are used if the production order is **not of level 1** (thus it is a semi-finished product). If the **Unfinished products** section is not valued, those of the **Finished products** section are used.
- In the event that it is **not the last producible and movable phase** of the cycle and the **WIP management** **has not been activated**, warehouses and reasons from the **Unfinished WIP** section are used. Instead, if **WIP management is active**, those from the **WIP section** are used and those from the **Unfinished WIP** section are no longer considered.

For the **unloading** of materials:

- If **WIP management has not been activated**, the warehouses and reasons present in the **Raw material** section are used if the item has **purchase procurement type** in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), whereas if it has a **production or subcontracting procurement type**, warehouses and reasons present in the **Unfinished products** section are used.       
- Instead, if **WIP management is active**, the warehouses and reasons present in the **WIP section** are used (if these are not valued, those of the Raw Materials section are utilized). Therefore, if the item has **purchase procurement type**, the reason **Material Consumption** is used. Conversely, if it has a **production or subcontracting procurement type**, the reason **Unfinished products consumption** is used.

:::note Note
When the *W.I.P.* flag is activated in the *Production Order Parameters*, automatically during the creation of subcontracting orders (from the *Release of planned orders* or directly from the production order), the warehouse and reason present in the [Subcontracting Parameters](/docs/configurations/parameters/production/subcontractor-parameters) in the section *Material deliveries to subcontractors W.I.P.* are considered for the materials to be sent to the subcontractor; thus in this case, the materials to be sent to the subcontractors will be withdrawn directly from the *W.I.P.* warehouse.    
:::    

For everything not detailed in this document regarding the common functioning of the forms, refer to the following link [Common Functionality, Buttons, and Fields](/docs/guide/common).