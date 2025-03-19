---
title: New Cycle 
sidebar_position: 2
---

After creating the bills of materials for the items, one must proceed with defining the work cycles, which are the set of various production phases of a product.

The procedure for creating a **New Cycle** opens via the path:

**Production > Work Cycles > Work Cycles**, by clicking the **New** button

or

**New Production cycle**.

In both procedures, the **Work Cycle Management** form will open, consisting of a section where the mandatory characteristics of the cycle will be defined and a section made up of several tabs that group specific characteristics.

### Upper Section

Here you enter the basic information regarding the cycle:

**Cycle**: you will enter the code and description of the work cycle;

**Item and variant**: using the help, you will enter the item related to the cycle and the variant if a variant of the selected item exists;

**Version**: the version of the bill for which you want to insert a new work cycle will be selected using the appropriate combo;

**Cycle**: you will define whether it is an *Operational* or *Non-operational* cycle, and hence in this case not usable;

**Production cycle type**: which can be *Standard* for the main cycle, which will be proposed as default for that item and will have cycle number 1, or if there are multiple cycles for the same item, the flag will be set to *Alternative*, and the option to change the cycle number will also be enabled. For each item, only one *standard* cycle is possible;

**Insertion Date / Modification Date**: the dates *Insertion Date / Modification Date* will be automatically filled with the insertion date of the cycle and if any modification is made, also with the date of the last modification of the cycle;

### Phases

In the grid, the working phases of the cycle are entered; for each cycle, we can have multiple working phases. The phases are coded in the table [Standard Phases](/docs/configurations/tables/production/standard-phases) found among the tables in the *Production* section.

Important information regarding the phase that will be relevant at the production level includes:

**Code**: indicates the code of the standard phase; once the phase is selected, the grid will complete with the data set within the table;

**Phase**: indicates the progressive phase number; it is automatically proposed based on the value of the parameter *Proposed phase sequence*, present in the configuration; *Parameters > Production > Production Order Parameters*. This parameter allows you to choose, during the creation of a work cycle, the sequence number of the phase that is proposed, which can be taken from the sequence number of the standard phase or as the progressive order of insertion, also indicating the progressive insertion value in the step field. 

**Subphase**: indicates the sub-phase number to differentiate them at the same phase number;

**Phase/Sub-phase Description**: indicates the description of the phase/sub-phase;

**Type**: allows you to define whether it is an internal phase, thus implying only the creation of internal production orders, or if it is an external phase, which will also generate a work order;

**Work center**: indicates the work center, or the machine in which that specific phase will take place;

**Fixed time**: if enabled, indicates that the time for that phase is fixed and thus not variable based on quantity; this is inherited from the entered work center;

**Quality control**: if activated, this flag indicates that this phase is subject to quality control, and in the specific tab, you can indicate the *Control Plan* that will be used to verify the item after the production declaration is made;

**Production Phase**: if active, indicates that the phase is productive and one can proceed with entering production reports (thus activating it wants the production for this phase to be recorded); if not active, it will not be possible to declare the phase itself;      

**Movable Phase**: if active, it indicates that when detecting the production phase, stock movements are also created; this means that proceeding with the production report will also lead to the charging of the finished product to the warehouse and the unloading of the raw material used for production in that phase;

:::note Note
All external phases must always have the **Production Phase** and **Movable Phase** flags active.
:::

**Machine/Workforce Group**: in these fields, you will select via the combo box, the code of the *machine* where the phase occurs and the *workforce group* code being used; these two codes are taken from their respective previously coded tables: [Labour Groups](/docs/configurations/tables/production/labour-group) and [Machines](/docs/configurations/tables/production/machines), which are also found among the tables of the *Production* section;  

**Time Measurement Unit**: allows specifying the unit of measure for the phase times, which can be expressed in days, hours, minutes, and seconds;    

**Start/End Validity**: allows you to indicate the start and end date of a phase if it is decided that that specific phase will only be valid for a certain period of time;

**Overlap type**: in this field, the value *None* is set by default. If there is a phase that overlaps with another, one can indicate the type of overlap among those proposed in the combo: *Total*, *By Piece*, and *By time*. Entering the *Total* value means that the selected phase and sub-phase can start simultaneously as the phase indicated in the *Phase and Sub-phase Overlap* fields. While choosing the *by quantity* or *by time* option, the selected phase may only start being worked on once the respective production quantity value or time of the phase indicated in the *Phase and Sub-phase Overlap* fields has elapsed, indicated in the *value* field.

**Value:** allows you to indicate the value related to the type of overlap and is unrelated to economic value (for example, if the overlap is *By Pieces*, then in the *Value* field it is necessary to indicate after how many pieces it is possible to start the phase, while if the overlap is *By time*, in the *Value* field, it is necessary to enter the time that must pass to be able to start the phase);

**Overlap Phase / Sub-phase**: in these two fields, in the case of overlap, one will indicate the phase that one intends to overlap with the main phase;

**Cost per unit**: in this field, you will enter the cost of the phase when you decide not to assign a cost to the machine and the workforce group;

**Location**: allows you to associate a warehouse location with the phase; this means that all items used in that phase will be present in that location.

**Subcontractor description**: if the phase is external, one will be able to indicate in this field the subcontractor who will take care of the external phase;

**Work center description**, **Machine description**, **Labour group description**: in these fields, you will find the descriptions of the codes related to the various sections listed.

There is then a third section where more precise data regarding the machine, workers, and times will be indicated:

**Machine number**: indicates the number of machines necessary for carrying out the phase;

**Machine Times**: allows you to indicate machine times expressed in the unit of measure previously selected in the phase grid, expressed in the unit of measure indicated in the **Time Measurement Unit** field;

**Phase quantity**: indicates the amount of product that is estimated to be produced during the selected phase (at each execution of that phase);

**Workers number**: indicates the number of workers needed for the execution of the phase;

**Workers Time**: the time required for the execution of the phase, expressed in the unit of measure indicated in the **Time Measurement Unit** field;

**Wait Time Queue**: indicates the wait/queue time that will be added to the duration of the phase; it is the wait time at the end of each execution of that phase; 

**Waiting Queue Creates Commitment**: if active, indicates that the wait/queue time creates a commitment, thus making it impossible to start a new phase because the work center will be occupied until the wait/queue time expires.

### The Tabs

**line**: in this tab, the setup times for the machine to start the phase and the re-setup times in case it is necessary to re-set the work center between each execution of the phase itself will be indicated, respectively in the *Line time* and *Retooling time* fields. You can indicate the number of machines and workers needed for the setup phase in the *Machine number* and *Workers number* fields. Furthermore, if the setup occurs with a different *Work Center / Machine / Workforce Group* than that of the phase, it will be possible to specify the new data via the respective combos;

**Materials**: in this tab, you will indicate the materials that you want to be unloaded not at the end of the production phases of that finished product, but at the end of the specific phase. When associating a material with a specific phase, it will no longer be shown in the help among the materials that remain to be associated with the individual phases. It is noted that all materials not associated with a specific phase will be unloaded in conjunction with the last *productive* and *movable* phase of the cycle;          

**Equipments**: in this tab, the equipment that will be used within the phase will be entered; you will enter the equipment by selecting it from the related combo among the equipment coded within the [Equipment](/docs/configurations/tables/production/equipments) table present in the tables section dedicated to *Production*. If active, the *Scheduled* flag will indicate that the equipment will be engaged during production; with this flag, the scheduling will consider not the item entered via the equipment combo, but the item entered in the class and code fields, which must have *Item nature* as *Equipment* or *Tool*;

**Tools**: in this tab, any tools will be entered by selecting them via combo among those coded within the [Tools](/docs/configurations/tables/production/tools) table present in the section of tables dedicated to *Production*;

**Quality control**: if the **Quality Control** flag related to the selected phase has been activated, in this tab, you will select the *Control Plan*. The *Planned Tests* to be conducted for the control of the item will be automatically proposed. For an understanding of the columns of this grid, refer to the documentation regarding Control Plans;     

**Designs**: in this tab, any technical drawings of the item related to the specific operations of the phase will be entered;
 
**Notes**: in these fields, any technical or other annotations related to the phase can be entered;

**Operational instructions**: allows uploading various documents related to the phase, which will then also be visible within Fluentis MES;

**Alternatives**: in this tab, alternative phases can be entered, which will be considered based on the priority assigned by the procedures of the [General Planning](/docs/planning/ms-master-scheduling/general-schedule) or by the [M.R.P.](/docs/planning/ms-master-scheduling/mrp/), if the corresponding **Consider Alternative Phases** flags present in the parameters of the procedures are active during their execution;      

**Extra Phase Data / Extra Data:** in these two tabs, respectively, the extra data for each phase and the extra data related to the cycle itself will be entered, selecting them via combo among those pre-coded in the related *Extradata* table (Utility > Extradata). To enter extra data, you will need to right-click and select the option to add new extra data with the possibility of choosing whether to insert it at the first level or, if there are already extra data entered, choose whether to insert a child extra data to the already existing extra data; in this way, a new row will appear where you can proceed with the entry.

*Specific Buttons*: 

> **Insert phases**: allows inserting new phases in the grid related to phases;  
> **Delete phase**: allows deleting one or more selected phases; 
> **Update from Phase / Delete Setup Data**: appear in the Ribbon bar when positioned in the *Setup* tab: using the *Update from Phase* button, setup data will be updated by taking them from the phase; using the *Delete Setup Data* button, the data related to the setup will be deleted;  
> **Update Materials from BOM**: this button appears in the Ribbon bar when positioned in the *Materials* tab: using this button, materials will be added to the tab taken from the bill of materials of the item;  
> **Insert / Delete Equipment**: these buttons appear in the Ribbon when positioned in the *Equipment* tab: using these buttons, you can insert or delete the selected equipment;  
> **Insert / Delete Tools**: these buttons appear in the Ribbon when positioned in the *Tools* tab: using these buttons, you can insert or delete the selected tools.  

For everything not detailed in this document regarding the common functionality of forms, refer to the following link [Common Functions, Buttons, and Fields](/docs/guide/common).