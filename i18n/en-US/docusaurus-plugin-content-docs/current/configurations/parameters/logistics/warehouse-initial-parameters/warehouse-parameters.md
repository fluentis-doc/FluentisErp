---
title: Warehouse Initials Parameters
sidebar_position: 2
---

:::important What it is for
The introduction to the initial warehouse parameters of Fluentis serves as a fundamental reference point for managing logistics operations within the system. These parameters, accessible through a dedicated form, allow for precise configuration of warehouse management methods and the definition of operational rules that influence the entire supply chain and distribution.

In the Fluentis system, initial parameters include flags and settings that regulate crucial aspects such as the modification of records, the management of bills of materials, and the calculation of average and last costs. For example, the flag "Modify warehouse records linked to other documents" allows for the modification of movements creating a direct interaction between different movement documents, while the flag "Allow negative inventory" offers additional flexibility in shipping operations.

It is important to note that these parameters need to be regenerated every year to ensure proper management and updating of warehouse operations. Additionally, it is possible to specify for each individual warehouse whether it should be managed by location, project, or customer/supplier, allowing for customization of operations based on specific business needs.

Furthermore, it is possible to set specific periods during which records can be entered, modified, or deleted, thus dynamically managing warehouse operations based on business needs. Configuring these parameters not only optimizes processes but plays a central role in ensuring operational efficiency and traceability of goods, which are key elements for success in modern logistics management.
:::

In the *Search Warehouse Initials Parameters* form, select the desired row and double-click on it or click the *New* button.

## 1. Data

**Year**: represents the year for which you want to set the parameters.

**Date of last closing of the fiscal year**: represents the date when the last warehouse closing with balance recovery was made (see [Warehouse Valuation](/docs/logistics/physical-inventory/warehouse-valorization)). In most cases, it corresponds to December 31 of the previous year. The following day, usually January 1, warehouse entries for initial inventory are entered, automatically created by the *Warehouse Valuation* procedure, using the loading reason *Oddments*; this reason must have the *Remaining Inventory* flag activated.

For each warehouse present in the company, there must be one and only one loading reason for the initial remaining inventory. The quantities loaded with that reason on the "opening" day of the warehouse represent the *initial balances* of that warehouse. All movements subsequent to this loading record will be identified as warehouse entries or exits depending on whether they are loads or discharges.

## 2. General

**Modify warehouse records linked to other documents**: allows for the modification of warehouse records linked to purchase DDTs, purchase invoices, sales DDTs, sales invoices, etc. The absence of this flag means that warehouse documents created based on purchase or sales documents cannot be modified. In this case, a message will appear indicating that modification is not possible.

Regarding the modification of warehouse records from documents, it should be noted that you can choose whether to modify the quantity, modify the price, modify both, or neither. This means that when a document already recorded in the warehouse, such as a purchase DDT, is modified, the application checks whether the Modify quantity flag and the Modify prices flag are active or not; if so, the modification made in the document is also transmitted to the warehouse record with which the document is linked, otherwise the modification of the document does not affect the related warehouse record. You can activate only one of the two flags. Moreover, it is also possible to activate the option to insert or delete movements directly from the document by entering or deleting individual lines.

**Allow incomplete BOM contribution**: if active, allows for the modification of the bill of materials of the counterpart movement; if deactivated, the counterpart movement will be automatically created for the entire bill of materials without the possibility of modification.

The counterpart movement is derived from a second movement reason linked to the main one, which operates on the components of the bill of materials; for example, it can be used to manage production deposits (the discharge of bill of materials components) or disassemblies; thus, in simpler realities, it allows the management of entries of finished products and discharges of components without using the production module.  

**Valorize for warehouse**: allows you to decide whether the warehouse closing should take into account the average costs (or last costs, or standard costs, depending on which type of cost you want to use for the warehouse closing) related to movements carried out during the year on the individual warehouse. This means that if an item has undergone movements in 3 warehouses, for example, in the case of an active flag, it will have 3 different lines in the Warehouse History for the year in which the closing is executed, with probably 3 different average costs and last costs.

**Allow modification of accounts of already used items**: allows for the modification of "Purchase turnover" and "Sales turnover" data of items that have already undergone warehouse movements. If the flag is deactivated, this modification is, of course, prevented. 

**Work cycle status management through Workflow**: if active, the work cycle status can only be modified via Workflow.

**Item/Supplier relationship control through Workflow**: if active, the **Row Block** flag present in the **Preferred Suppliers** tab of the item registry can only be modified via Workflow.

**Start Period Date and End Period Date**: allow the user to define the period during which warehouse records can be entered, modified, or deleted. Usually, the start period date is set to a date just before the date of the last warehouse closure, and the end period date is set to the end of the current calendar year. 

### 2.1 Batch and Serial Number Management

**Batches and S.N. Management**: allows you to decide whether warehouse movements for batches and/or serial numbers should be allowed. If this flag is deactivated, all other flags present in the database managing options related to batches and serial numbers will be ineffective.

**Batches and serial numbers required**: if activated, it requires the user to enter the batch of the item in all purchase and sales documents, as long as the item is managed by batches or serial numbers.

**Enable uniqueness of batches**: if active, enables the uniqueness of the batch for the company and division during the creation phase of the batch itself, so if multiple items use the same *batch code type*, the progressive number with which the batch will be created will continue to increase; if inactive, then the uniqueness is for item and variant, so when new batches are created for different items that use the same *batch code type*, the first suggested batch will be the same for all those items. 

**Batch status management through Workflow**: if active, the **Batch Status**, the **Sellable Batch** flag, and the **Closed** flag present in the batch registry can only be modified via Workflow. The same applies to the **Canceled**, **Forced Closed**, and **Reserved** flags present in the serial number registry.

**Use barcode movements**: if active, the **Barcode** column will be displayed in the warehouse movement rows.        

## 3. Closing Parameters

In this tab, you can decide for which **Warehouses** closures should be executed **By Variant**, **By Location**, **By Lots and Serial Number**, **By Sales Orders**, and **By Customer/Supplier**. By activating one of these flags, you decide that the stock entry for initial inventory made by the automatic *Warehouse Valuation* procedure should be created according to the executed setting.

*For each warehouse, the following managements can be enabled*:	

**Variants**: if active, the closure and recovery of balances will take variants into account;	

**Locations**: if active, the closure and recovery of balances will take locations into account;	

**Batches and Serial Number**: if active, the closure and recovery of balances will take lots and S/N into account;	

**Job Orders**: if active, the closure and recovery of balances will take sales orders (projects) into account;	

**Customer/Supplier**: if active, the closure and recovery of balances will take customer/supplier into account. 	

*Example*
In the *Job Account* warehouse, the flag on the *Customer/Supplier* column is usually activated, as it is useful for the procedure to create a warehouse stock entry for initial inventory in the Job Account warehouse for each subcontractor; in warehouses where goods managed by batches are stored and moved, it is advisable to activate the *Lots and Serial Numbers* flag, as well as in warehouses where goods managed by variants are stored and moved, it is advisable to activate the corresponding flag.


## 4. Stock Parameters

In this tab, you can decide how the *Inventory* should be managed for each warehouse.

**Allow negative stock**: allows the inventory of an item to go below zero. If this flag is not activated, the system always prevents saving warehouse records or shipping operations that would result in any item's inventory going below zero. It should be noted that if the item is managed by batches or serial numbers, activating this flag does not mean that it can be allowed to go below zero, as an item managed by batches or serial numbers can never be discharged if the inventory of the batch or serial number to be discharged does not exist.

*For each warehouse, the following managements can be enabled*:	

**Negative stock**: allows for negative inventory in that warehouse (only if the *Allow negative inventory* flag is also active in the *General Parameters*); 

**Location Inventory**: means checking the inventory also for the specified location in the movement (if the inventory for that location is not sufficient, the movement is not created); 

**Project Inventory**: means checking the inventory also for the specified project in the movement (if the inventory for that project is not sufficient, the movement is not created); 

**Customer/Supplier Inventory**: means checking the inventory also for the customer/supplier specified in the record (if the inventory for that customer/supplier is not sufficient, the movement is not created. This can be used for third-party warehouses).

For everything not detailed in this document about the common functioning of forms, please refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).