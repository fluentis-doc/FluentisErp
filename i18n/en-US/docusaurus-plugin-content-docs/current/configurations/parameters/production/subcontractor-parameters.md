---
title: Work Order Parameters 
sidebar_position: 2
tags: [Work Order]
---

Through this window, all parameters regarding the management of work orders are set, and more specifically, how inventory movements triggered by the procedures of the module itself should be executed.

## General

#### Data proposed in orders

> **Material regeneration in article update**: if the flag is activated, every time a change is made to the item line present in the *Items To Be Produced* tab of the work order, the procedure regenerates the information related to the materials to be delivered and used to be entered in the last tab of the order itself.  
>   
> **Data of suggested materials**: displays the 4 different possibilities that the user has to have the procedure automatically propose materials in the Materials to Deliver tab of the work order.  
> The possibilities are as follows:  
> 1. *From the last delivery made to the same subcontractor*: checks the last work order generated for the same subcontractor containing the same item to be produced.    
> 2. *Explosion level from bill of materials*: checks the bill of materials of the item entered in the Items to Produce tab.    
> 3. *Delivery of the same item to be produced*: inserts the same item in the Materials to Deliver tab that was entered in the Items to Produce tab.    
> 4. *No materials*: no materials are proposed in the Materials to Deliver tab.
> 5. *From the production order*: used for work orders generated through the release of a planned work order or from a production order with an external phase.   
>
> **Version**: allows selecting the version of the bill of materials.

#### Consider the availability from

> This section allows deciding whether or not to consider the availability coming from **Subcontractor** / **Production** / **Purchases** / **Warehouse** / **Sales**; each of these flags indicates the user's desire to ensure that the work order creation procedure considers the material availability based on information from the individual ERP application areas. For example, if the user chooses to activate the flag only on Purchases and not on Sales, it means that the availability from supplier orders, delivery notes, and purchase invoices will be considered, but not those from customer orders, delivery notes, and sales invoices.   

#### Finished Products

> **Proposal of the last price of working made**: if activated, allows the procedure to propose the price of the last work order issued for that item to the same subcontractor in the unit processing price box of the *Items To Be Produced* tab.
>   
> **Consider quantities based on economic lot** and **Consider multiples of the economic lot**: allows deciding, when entering an item in the *Items To Be Produced* tab of the work order, whether to consider the quantities of the items based on the economic lot, and/or also consider the multiples of the lot.  

**Delivery note type**: in this section, the [Sales Delivery Note Type](/docs/configurations/tables/sales/delivery-notes-type) to be proposed by default when using the work order D.N. creation procedure is set. This D.N. type will automatically use the warehouse and reason set in the specific combo boxes of the "Material Deliveries to Subcontractors" item found in the work order parameters window.

**Default volume measurement unit**: allows indicating the unit of measure to be used by default for volumes.   

**Default weights measurement unit**: allows indicating the unit of measure to be used by default for weights.   

**Material processing valuation based on cost**: allows defining whether the valuation of material processing should occur based on the last cost or average cost. Thus, this is a method to decide whether materials used by subcontractors should be attributed to the processing using the last cost or the average cost among those entered in the item's master data. Additionally, it is possible to propose the last/average cost for the respective lot and/or production order based on the activated flags by selecting the **Batches** and/or **Production job order** flags.    

#### Fulfillment

> **Display fulfillment grid**: if active, the fulfillment grid will be visible in order fulfillment processes in delivery DDT or returns.   
> 
> **Display fulfillment tree**: if active, the hierarchical structure will be visible in order fulfillment processes in delivery DDT or returns. These two flags can be activated simultaneously.    

**Mandatory user code**: if active, it allows deciding whether it is necessary to enter the operator code when entering the work order delivery DDT.

**Automatic proposal of serial number for returned item if present as consumed material**: in work order returns, this active flag allows automatically proposing the serial number for the item.

**Control availability**: if active, it allows deciding whether to have the procedure check the availability coming from the flags set in the *Consider availabilities from* section.

**Compulsory availability**: if active, it prevents the entry of materials in work orders in case of lack of availability on the date of potential delivery to the subcontractor.

**No materials in delivery**: if active, ensures that no article is entered in the *Materials to be delivered* tab for any item to be produced.

**Automatic load/unload**: if active, allows the user to ensure that outgoing inventory movements occur automatically as soon as the delivery DDT is printed. This allows skipping the unloading step for work order delivery DDTs.

**Register with document date**: 
for **Delivery DDTs**, if this flag is active, the *Trasportation Date* (present in the *Summaries* tab > *Recipient*), if filled, will be used; otherwise, the creation date of the document present in the header is considered. If the flag is not active, unloading from within the document will always be performed with the current date.    
For the registration of **Work Order Returns**: if the flag is active, the *Return date* present in the header is always used; if not active, the registration from within the document is performed with the *Document Reality Date* present in the header.

**Block the document insertion in public holidays**: if active, it prevents the entry of an order, a DDT, and a work order return on holidays.

**Check reference subcontractor for items**: if active, allows the user to ensure that the work order creation procedure checks if the item being entered in the *Items To Be Produced* tab has the subcontractor entered in the header of the order as the preferred supplier.

**Lot and serial numbers mandatory**: if activated, requires the user to enter the lot of the item included in the document itself in all documents, as long as the item is managed by lots or serial numbers.

**Recompute transport**: this flag ensures that in the Transport tab of the DDT, the totals of weight, volume, and packages of the document lines are reported; without this flag, the fields will not be filled.

**Check items in exhaustion**: if activated, the system checks the availability of items in the order line and warns if the item is running out, meaning if the **In exhaustion** flag has been activated in the [item registry](/docs/erp-home/registers/items/create-new-items/item-registry/generality).

**Activate quality control**: work in progress.

**Management of double measurement unit**: only if activated, the system can manage the alternative unit of measure in work order documents.

**Automatic proposal of alternative unit of measure**: if activated, ensures that the quantity related to the alternative unit of measure is proposed, provided that a default one has been set in the item master data. This flag can only be activated if the previous flag has been activated.

**Consider warehouses according to return delivery note type**: allows choosing whether to consider warehouses based on the type of return DDT or the type of delivery DDT, instead of using the settings entered in the specific combo boxes of the *Material Deliveries to Subcontractors* and *Product Returns* items.

## Warehouses

#### Material Deliveries to Subcontractors W.I.P.  
In this section, the warehouse and the corresponding reason to be considered for unloading materials intended for subcontractors are set if the W.I.P. warehouse management is used, which can be activated in the [Production Order Parameters](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro). In this case, all work orders created from the *Release of Planned Orders* or directly from the production order will use this warehouse and reason for unloading the materials entered in the [Materials to Deliver](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/materials) tab of the work order.    

#### Material Deliveries to Subcontractors  
In this section, the warehouse and the corresponding reason to be considered for unloading materials intended for subcontractors are set. Thus, the set warehouse is the warehouse from which the materials entered in the [Materials to Deliver](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/materials) tab of the work order will be unloaded. These will only be used in work orders created manually if the W.I.P. warehouse management is active; if the W.I.P. warehouse management is not active, they will be considered in all cases.     

#### Material Consumption Used   
In this section, the warehouse and the corresponding reason to be considered for unloading the materials that subcontractors have used are set. Thus, the set warehouse is the warehouse from which the materials entered in the Materials tab of the Work Order Return will be unloaded. A link will be made when the item is created.   

#### Material Loads to Subcontractors   
In this section, the warehouse and the corresponding reason to be considered for the loading of materials intended for subcontractors are set. Thus, the set warehouse is the warehouse where the materials entered in the Materials to Deliver tab of the work order will be loaded. This data is taken from the counterparty reason entered in the reasons table corresponding to the reason that performs the unloading of materials intended for subcontractors (i.e., the reason set in the specific combo box of the *Material Deliveries to Subcontractors* section).

#### Material Transfers Between Subcontractors   
In this section, the warehouse and the corresponding reason to be considered for transferring materials from one subcontractor to another are set.     

#### W.I.P. Article Return  
In this section, the warehouse and the corresponding reason to be considered for the loading of semi-finished products that subcontractors have made are set; this will be used in all external phases that are not the last phase of the work cycle. Thus, the set warehouse is the warehouse where the items entered in the Items tab of the Work Order Return will be loaded.

#### Finished Article Return  
In this section, the warehouse and the corresponding reason to be considered for the loading of finished products/semi-finished products that subcontractors have made are set; this will be used when the external phase is the last phase of the work cycle. Thus, the set warehouse is the warehouse where the items entered in the Items tab of the Work Order Return will be loaded.

#### Returned Material  
In this section, the warehouse and the corresponding reason to be considered for the loading of returns are set. Thus, the set warehouse is the warehouse where the items entered in the Materials Used tab of the Work Order Return will be loaded, and to which a returned quantity has been associated.

For anything not detailed in this document about the common functionality of forms, please refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).