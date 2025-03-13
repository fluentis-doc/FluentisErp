---
title: Material Requirements Parameters
sidebar_position: 7
tags: [Material Requirements]
---

Through this window, the parameters related to some of the basic settings in the Production area are set.

**First day of the week for calcul. productive capacity**: it is possible to decide which day should be considered as the first of the week in the [Production Capacity Calendar](/docs/configurations/tables/production/factory-calendar), that is in the calendar of work centers. Typically, Monday is set.

**The last planned order inserted for this year**: represents the last progressive number used in the current year for planned orders.

**Document type colors**: allows you to set the background and text color for different types of orders: Purchase, Production, or Contract Work, whether delayed and/or expired.

## Parameters for releasing planned orders

In this section, the user can set the type of purchase request and the type of contract work order (either closed and thus not further modifiable or open and therefore modifiable) that should be automatically generated during the release of planned purchase and contract work orders.

**Mandatory check for contractor in the external phases**: if active, in case a subcontractor is not indicated in an external phase, this will be flagged with the **Text color for order row** indicated below.

**Simplified management of the production**: it is obsolete and used only in old versions.

**Maintain link between orders of a job order**: if active, allows, also utilizing the immediately following flags, to decide that if the date of a planned order is manually modified, the procedure will make the corresponding change to the immediately adjacent planned orders that have undergone the initial modification.

**Number of days for availability calculation**: indicates how far ahead to look for the evaluation of availability calculation, not considering orders and requirements that exceed that date.

**Materials commitment date to the phase of unload materials**: if active, the material commitment date indicated in the planned orders will be equal to the start date for the latest phase, meaning that it will be equal to the start date of the last phase. Whereas, if the flag is not active, the material commitment date indicated in the planned orders will be equal to the start date of the order, i.e., the start date of the first phase.

**Advance days for materials commitment**: the indicated value allows you to anticipate that number of days the material availability compared to the start of processing (both in planned production orders and production orders), in order to allow logistics to bring the material to production on time. This is taken into account by the following procedures: all scheduling "as early as possible", "as late as possible", "finite capacity", "MRP", "Complete order data" in both planned orders and production orders, "Recalculate start date" in both planned orders and production orders, all CRP procedures ("Gantt", "Work Center Capacities", and "Phase Sequence") that operate on the start or end date change of the order phase.

**M.R.P. history days to be left**: allows you to indicate which period in days will be kept for the results of MRP processing within the historical records. When a processing exceeds the number of days entered in this field, it will be removed from historical records in the next MRP processing. Leaving the field empty means that no processing will be deleted from the historical records.

## Order scheduling warehouses 

The grid is a simple visualization of the list of warehouses from which the availability must be checked. This list is set in the form called *Availability Calculation* which can be found among the Utilities of the management system.

## Gantt Parameters 

Allows you to enter default parameters for managing the Gantt form (*Gantt Simulation Type* and *Snapshot Simulation Type*).

## Feasibility Calculation Parameters

Allows you to enter indications for the activation and visualization of **Feasibility** of the processing phases.

For the current product version, the only possible activation is in the management of *Phase Sequence*. In future versions, other procedures will also be introduced.

It is possible to activate the feasibility check:

- **Consider Materials**: activates the button *Material Feasibility Detail* and the field *Material Feasibility* in the grid of active procedures in the box **Feasibility calculation to be applied in**;    
- **Consider Previous Phases**: activates the button *Feasibility detail Phases* and the field *Phase Feasibility* in the grid of active procedures in the box **Feasibility calculation to be applied in**.      

## Feasibility calculation to be applied in

Allows you to enable feasibility in individual procedures:
- Phase sequence 
- Work center capacities
- Release of planned orders
- Material withdrawal list
- Production order filter 

## Feasibility calculation colors 

You can set colors that highlight different information on the availability of materials to be used:   
- *Material not available*: indicates that there is no material available even in partial quantity;   
- *Material partially available*: indicates that we have at least a partial quantity of one of the materials, but not the complete availability of all;   
- *Material available*: indicates that I have the availability of all materials for the total quantities;   
- *Material not needed*: indicates that no material is necessary;   

And on the status of previous work phases before the analyzed phase:   
- *Previous phase not started*: indicates that the phase prior to the one considered has not been started;   
- *Previous phase started*: indicates that the phase prior to the one considered has been started, but not completed;   
- *Previous phase completed*: indicates that the phase prior to the one considered has been completed;   
- *Phase started*: indicates that the phase considered has started.   

For everything not detailed in this document regarding the common functioning of the forms, please refer to the following link [Common features, buttons and fields](/docs/guide/common).