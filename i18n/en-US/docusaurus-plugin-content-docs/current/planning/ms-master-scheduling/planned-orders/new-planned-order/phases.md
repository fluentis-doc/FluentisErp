---
title: Phases
sidebar_position: 3
---

This tab consists of a grid, on which the user can insert manually the working phases that it is necessary to perform for the item production of the planned order (if production one). It is completed in case that the planend order comes from a general scheduling or MRP elaboration, on the contrary when the order will be inserted manually, it will be necessary to click on the “Complete Order Data” button in toolbar in order to import data from item working route. The columns, that are in the grid, are the following:

**Phase Code/Phase/Subphase**: thanks to a double click it is possible to open the related working phases help from which user can select the related phase and subphase. The phase code is simply reported;

**CTRL Qty**: this flag indicates if the material has to be controlled before its usage;

**Prod. Phase**: if flag is selected it identifies that the phase in question is a productive phase and so it has to be marked;

**Work Center**: through this combo it is possible to set the Work Center. It is proposed automatically and viewed by the phases that has been previuosly selected and inserted into grid;

**Estimated Start/End Date**: it concerns the start/end dates of the related phase. Changing the estimated working start/end date it is possible to edit even the last ones. They are calculated according to times inserted into the working phases and in particular according to the higher time between the worker time and the total machine time for the selected phase;

**Machine Time**: it is the time used by machine in order to realize the phase and it refers to the pieces quantity per phase;

**Machines Number**: it indicates the machines number of this phase;

**Pieces Qty per Phase**: it indicates the number of pieces per phase;

**Worker Time**: it is the time used by worker in order to realize this phase and it refers to the pieces quantity per phase;

**Workers Number**: it is the number of workers for this phase;

**Subcontractor Account/Subcontractor Detail Account**: thanks to a double click on the box it is possible to open a help in order to select the subcontractor account and detail account. This box is active in case that the phase is defined as an External phase. It is important to notice that the subcontractor is shown by the working phase inserted into the item working route;

**Work Center Description**: in this field there is the Work Center Description;

**Subcontractor Description**: in this field appears the Subcontractor company name;

**Phase/Subphase Description**: in this field appears the selected phase description.

Just below the grid, there are other data related to the selected phase:

**Machine**: through this combo it is possible to select the code (and description) of the realted machine. It is proposed automatically and shown by the work center that has been previously inserted into the grid;

**Labour Group**: in this combo it is possible to select the code (and description) of the realted labour group. It is proposed automatically and shown by the work center that has been previously inserted into the grid;

**Type**: through this combo it is possible to set the working type (internal or external);

**Overlap**: through this combo it is possible to insert the type of an overlap among phases. It is possible to have a Total overlap (in this case the phase is overlapped totally to the subsequent phase), Pieces (in this case it is necessary to indicate the number of pieces produced by this phase since the subsequent one will start), Time (in this case it is necessary to indicate the number of minutes since the subsequent phase will start);

**Um Times**: in this combo box appears the Unit of Measure Times of the Phase. It is possible to manage phase times per seconds, minutes, hours and days. Usually it is possible to manage times of the internal phases per minutes and the external phases per seconds, but obviously it depends on company typologie on which the work has been set;

**Value**: it is possible to indicate the overlap value by using the criteria, above mentioned;

**Overlap Reported to Phase/Subphase**: the phase and subphase code are here shown and have an overlap with the phase in question. Usually it is necessary to indicate the subsequent phase;

**Usage**: if the flag is active, it means that the user wants that the wait time increases the usage time of the Work Center related to that phase;

**Wait/Queue Time**: it indicates the estimated wait/queue time related to this machine.






