---
title: Bill of Materials (Distinta Base)
sidebar_position: 2
---

**Introduction (Introduzione)**: [Bill of materials (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/bom-intro) 

As mentioned before, from the [Assemblies (Assiemi)](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) form, by selecting the bill of materials (BOM) that you want to view and double-clicking, you enter the detail of the bill itself for modification and view its graphical tree representation.

The bill of materials is a multi-level, tree structure where there is a parent-child relationship. The [child (figlio)](/docs/guide/common/glossary/glossary-intro#a) can also be a parent, and so on for an indefinite number of levels until reaching the last level where the materials are located.

The screen is divided into two parts: on the left side, there is the tree representation of the bill of materials, while on the right side, you will see detailed information regarding the various components of the tree.

## Structure of the Bill of Materials (Struttura della distinata base)

To visualize the tree, simply click the mouse on the **+** next to the item code or click the **Expand** button to view everything. This way, the various levels of the bill of materials will cascade open, and each level will be represented by icons that will identify the category to which each item belongs or more specifically the type of procurement of the item:

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image02.png) : represents production items;

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image03.png) : represents purchasing items;

![](/img/it-it/erp-home/registers/production/bill-of-materials/assemblies/structure-management/image04.png) : represents subcontracting items.

The type of procurement of the item is indicated within the [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the item itself.

The BOM can be built and modified very simply using the specific buttons: **Insert**, **Delete This Component**, or **Copy**, **Cut**, and **Paste component**.        
For example, positioning on an element of the tree and pressing the **Insert component** button allows you to insert an item that will become a child of the initially selected item; while pressing the delete component button will remove it from the bill.            
The **copy**, **cut**, and **paste component** buttons allow you to copy, cut, or paste the selected item within the bill of materials tree.            
Additionally, you can move the item to the desired level and position within the tree using simple and quick *Drag and Drop* functionality.       

After expanding the cascading menu, for the selected item, you can use the following **specific buttons**:

> **Insert component**: allows you to insert a new sublevel of the bill;  
> **Delete components**: allows you to delete the selected component;    
> **Expand**: allows you to completely explode the bill of materials tree;     
> **Copy component**: allows you to copy the selected component;     
> **Cut component**: allows you to cut the selected component;     
> **Paste component**: allows you to paste the selected component;     
> **MRP Parameters**: allows you to open the [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) for the selected component;     
> **Work cycle**: allows you to open the  [Work Cycle (Ciclo di lavoro)](/docs/erp-home/registers/production/routes/new-route) for the selected component;       
> **Update structure**: allows you to update all the information of the bill of materials (for example, if the description of an item in the bill has been modified, using this function, the application shows the updated description of that item). 

Selecting one of the components of the bill visualizes on the right side of the window the list of information related to the upper level concerning the selected component (in the upper right part of the window called **Assembly**) and the component itself (in the lower right part of the window named **Component**).

**Assembly**: the version of the bill of materials, class, code, description, and variant of the upper level are displayed, the quantity of the upper level to which the quantity of the component refers, and its unit of measure; regarding the quantity, you can define if it is a fixed or variable quantity, meaning whether with that bill a specific quantity will always be produced or if it can vary from production to production; it can then be defined if this assembly is a **Phantom assembly** meaning an assembly that will not be considered in the scheduling or MRP processing; then, there is a **Notes** field where you can insert any notes regarding the parent, and there are fields related to the validity dates of the assembly, the date it was inserted, and the last modification date.

:::note Note
**Validity date**: the validity date of the assembly allows verifying the composition of the bill of materials on the entered date; this helps maintain a history of all changes made to that bill. For instance, by deleting the validity date, all components used for that bill since the moment it was created are displayed, highlighting in red the components that are no longer valid today. 
:::

**Component**: class, code, description, and variant of the selected component in the tree are displayed, information regarding whether or not the component is phantom (inherited from item registration), and the unit of measure of the component. 

There is also the *Phantom level* flag, which allows deciding if, limited to that bill of materials, the selected component should be considered phantom. 

In the case of *phantom item* or *phantom level*, the *General Schedule* and *MRP* procedures during the explosion of needs “skip” the component designated as phantom or as phantom level, reading the needs of its eventual components.

Tied to the component are also all the following tabs:

### General Data (Dati generali)  

**Quantity**: represents the expected quantity of the component needed to produce the reference quantity of its upper level;  
**Usage unit of measure (Unità di misura di utilizzo)**: may differ from the management UM of the component itself; 
**Fixed** indicates that the same quantity of the component will always be used to produce the upper level;      
**Variable** indicates that the quantity of the component to produce the child will change from time to time (for example, the quantity of the child used may vary with the change in the quantity of the parent);    
**Scrap Rate** pre-set for the component allows ensuring the explosion of needs increases the quantity to be used of that component by that percentage;      
**Positive and negative quantity deviation percentage (Percentuale di scostamento sulla quantità negativa e positiva)**: indicates the percentage by which the component can be used more or less than the quantity indicated to remain within the established tolerance;  
**Start valid.** and **End valid.**: allow you to decide that a component is valid from a certain date or until a certain date;      
**Priority**: indicates the order in which the component should be displayed in the bill of materials tree;        
**Movable**: allows you to decide whether the component should or should not be moved to the warehouse. This flag will affect all warehouse movements since only items with the flag active will be taken into consideration during the creation of movements, while others will not be moved;      
**Critical**: if the flag is active, it indicates the criticality of that component (for now it is only used for the [Finite Capacity Scheduling (Schedulazione a capacità finita)](/docs/planning/ms-master-scheduling/finite-capacityscheduling));          
**Phantom level**: allows deciding whether, limited to that bill of materials, the selected component should be considered phantom or not; moreover, it ensures that the *General planning* and *MRP* skip that component during the explosion of needs;  
**Schema reference**: allows you to enter a free note relative to the component (for example, the reference schema of the technical drawing);              
**Notes**: allows you to enter a free note regarding the component.           

### Alternatives

In this tab, alternatives to the component of the bill of materials can be set in order of priority in case the component is not available at the time of production of that bill.

These alternatives are considered in warehouse registrations if a reason with the **Alternatives** and/or **Mixed Alternatives** flags active is used.   
While the Planning and MRP procedures will take into account the alternatives depending on whether specific flags are activated: for scheduling, the flag to activate will be **Consider also the alternatives of the materials** which should be set in the [General Planning (Pianificazione generale)](/docs/planning/ms-master-scheduling/general-schedule) screen, in the *Parameters* tab; for the MRP procedure, the flag to be set will be **Consider also the alternatives of the materials** which should be set in the *Parameters* window of the [MRP](/docs/planning/ms-master-scheduling/mrp/) procedure. 

In all previously listed cases, the **Consider also the alternatives of the materials** flag present in the [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) window of the item must also be activated.

### Shipping Phases (Fasi di scarico)

In this tab, the phase during which the component should be discharged can be set.

There are three types of material discharge, namely **Automatic**, **With List**, and **Manual**, which are set in the [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters).

In the event that manual discharge is chosen, **Fluentis** automatically considers that the discharge of the material (not assigned to a phase) will be done, if there are multiple phases for that product, in correspondence with the last phase that has the *Movable* and *Productive* flags enabled. 

### Cycle (Ciclo)

In this tab, the list of [phases (fasi)](/docs/configurations/tables/production/standard-phases) that make up the [processing cycle (ciclo di lavorazione)](/docs/erp-home/registers/production/routes/new-route) of the selected item is displayed.

### Components (Componenti)

In this tab, any components of the selected item are displayed. It is also possible to insert new components and modify existing ones from this tab in addition to using the buttons available on the ribbon bar (Insert/Copy/Paste/Cut and Delete components).

### Notes (Note)

In this tab, you can enter any notes and upload files or images that should be considered during production.

### Extra data - Bill of Materials (Extra data - Distinta base)

In this tab, you can view and possibly modify the extra data related to the bill of materials of the selected component. This tab is active only if the component has a bill of materials.       

### Extra data - Components (Extra data - Componenti)

In this tab, you can view and possibly modify the extra data related to the selected component.

For everything not detailed in this document regarding the common functioning of forms, please refer to the following link [Common functionalities, buttons, and fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).