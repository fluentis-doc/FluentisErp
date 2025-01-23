---
title: Data Retrieve from Production 
sidebar_position: 1 
---

Data retrieve from production reads the data to assign physical movements (both the handling of materials and timing) to the job order and the costs of processing.

The interface is divided into 3 different procedures.

## DATA RETRIEVE FOR PROJECT HOURS/COSTS 
With this procedure, we go to retrieve the data on the hours of production personnel (in ***Declared Hours Management***), as well as from the Projects area, particularly from ***Activities by Project*** and ***Service Activities***, to input them into ***Physical Movement Posting*** and in the ***Project/Job Order Movements***. Let's see the various available options:
- We will indicate on which [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) to record the movements.
- On what ***Date***.
- On what ***Year*** of controlling.
- On the right, we will consistently set the range ***By date*** and ***To Date***.
- And what the ***Measurement Type*** is, that is whether it is the first or the second unit of measure set in the centers. 
On the left side, we will then choose the 
- ***Project Type***, which allows us to define which project we are interested in reporting in the physical project data:
    - ***All projects in hour declaration***, we will record each individual project referenced in the hour declarations.
    - ***Hours to connected projects***, we will always attribute the parent project of the specific declared ones.
    - The option ***Valorize intercompany hours***, allows the hours entered by employees in a different company in the database, which need to be considered in this one.
On the right side, we can also add an economic valorization to our previous quantitative considerations of times: 
- We can set the ***Enhance travel expenses of the activity / intervention*** to consider the travel charges related to the activities/interventions.
- The flag ***Project working time management***, instead, makes Fluentis consider only the hours linked to a project, even for the valuation of the first note of physical movements, where normally all indicated hours end up, regardless of the link to a project.
- We can set the ***Values resource costs out of account*** by applying the cost to the number of hours for the period, possibly applying a correction for ***Efficiency*** in the lower field.
- Closing this section is the option ***Value intercompany costs/revenues of resources***: this means valuing in the active company the costs or revenues for intercompany performances recorded by employees in hour declarations.

## RETRIEVE PHYSICAL MOVEMENT 
The ***Retrieve Physical Movement Retrieval*** reads the production reports and values machine times, as well as man hours, and equipment setup times for both man and machine: it will value them in both the ***Physical Movement Posting*** table and the ***Project/Job Order Physical Movements*** table. This data is verified concerning the cost center associated with the machine and the labor group, whether this center is measured for machine or man timing or rig, as set in the ***Units of Measure of Centers in Controlling*** table.
The data to be set are 
- the [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) of reference,
- the ***Date*** of the detection,
- the ***Year***, 
- the date range filter ***By Date*** and ***To Date*** on the right.
Three options are provided for the times used: 
- by default we will value the ***Final Times*** in the production report itself,
- in the second case, we will read the ***Production Cycle Times*** related to the reporting to value the theoretical cycle data (that is proportioning the quantity produced in the report compared to that of the cycle),
- while in the last case, ***Standard Phase Times*** we will read the standard phase of the report to use its value, always proportionate to the reported quantity.
If there are machines or equipment connected to an asset register, this same procedure will also value the ***Physical Movement Posting*** (and that for the project) of the quantities that the asset has produced in the period, in order to calculate its depreciation on quantities.

## RETRIEVE JOB ORDER COST
Finally, the ***Retrieve Job Order Cost*** procedure is dedicated to the detection of the costs of internal and external transformations.
Here we will also set 
- the [***Area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas),
- the ***Date*** of the detection,
- the ***Year***,
- the ***Template*** to be used in the area registration,
- the date range ***By Date*** and ***To Date*** to be used, 
- finally the ***External processing account*** to be used to value the external processing that we will read from the work account.
For the data retrieved from the work account, we will use the account set in the mask at the price recorded in the linked purchase invoice for the return, or that of the return itself if not yet invoiced by the third-party provider, valuing the cost center associated with the cost account itself.
For internal processing, however, we will be able to value the ***Standard Cost***, ***Latest Cost***, or ***Average Cost*** of the quantities that come in the production reports of the period, rather than the materials used in third-party interventions.

The result of the processing is inserted into the ***Production Values***, mask in the project management section: this procedure, in fact, filters the data that are linked to the projects and manages **only these** for the project accounting.

A final note is that of the second tab ***Projects***, which is directly linked to this last procedure: in this section, we can select the jobs we are interested in recording project costs on; if we filter nothing, we will value all the job order movements that we find in the period.