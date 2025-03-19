---
title: Edit prototype components
sidebar_position: 4
---

This form allows for bulk modification of previously created prototypes, using three different procedures based on the type of modification you wish to make: replacement/modification, insertion, and cancellation.

### Replacement and Modification

By selecting **Substitute/Edit** from the **Manag. type** combo, you need to enter a component in the filter area by selecting it with the appropriate *Help items* next to the **Component** field.

Filter for only one item; it is not possible to use just the item class or just a part of the code or description as a search filter. After setting the search criteria, by clicking the **Search** button on the ribbon bar, the procedure displays in the grid all the bill of materials that include the component entered in the filter area, thus performing a *Component Implosion*.

In the results grid, class, code, description and variant of the assembly, version of the bill of materials, validity start and end of both the parent item and the component are displayed; moreover, the quantity of the component and its unit of measure used is also shown, always in connection with the assembly/component relationship.

Choose one of the displayed bills of materials, or select a list of bills of materials on which to perform the **Replacement/Modification** procedure by using the *CTRL+click* mouse combination.

Select, in the lower section of the window, the new component to replace the one selected in the filter section. To select this new component, you can use the *Help items*, entering the fields of *class, code, description* and possibly *variant* of the new component, for which the quantity must also be entered (and whether the quantity is *fixed* or *variable*), the *scrap quantity*, validity start and end, the *priority* flags, and the *notes* of the new component.

By using the *Alternative* flags, you can decide whether to also include the alternatives tied to the new component in the new link.

It is also possible to activate, if necessary, the *Movable* flag and the *Phantom* flag for a detailed explanation of the various fields to be filled in, refer to the article [Structure Management](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).

Through this procedure, it is possible to enter, in the lower section, the same component entered in the filter section: in this case, simply a modification of the already existing information for that component within the selected bills of materials in the grid will be made.

Once you have completed the information input, execute the **Replacement/Modification** procedure by using the *Run* button.

### Insertion

By selecting **Insertion** from the **Manag. type** combo, you need to enter the assembly in the filter area, selecting it with the appropriate *Help items* next to the **Assembly** field, into which you want to insert a component.

In this case, it is not necessary to filter for just one item, so you can also insert as a search filter just the item class or just a part of the code or description (the filter fields are the same as those in the *Modification/Replacement* procedure). Then by clicking the **Search** button on the ribbon bar, the procedure displays in the grid all the bills of materials corresponding to the set search filter. In the results grid, class, code, description, and variant of the assembly and all its components are displayed.

Choose one of the displayed bills of materials, or select a list of bills of materials on which to perform the Insertion procedure by using the *CTRL+click* mouse combination.

Select, in the lower section of the window, the new component to insert into the selected bills of materials in the filter section. To select this new component, you can use the *Help items*, entering the fields of *class, code, description* and possibly *variant* of the new component, for which the *quantity* (and whether the quantity is *fixed* or *variable*), validity start and end, the priority, and the notes of the new component must also be entered.

By using the *Alternative* flags, you can decide whether to also include the alternatives tied to the new component in the new link.

You can activate, if necessary, the *Movable* flag and the *Phantom* flag for a detailed explanation of the various fields to be filled in, refer to the article [Structure Management](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).

Once you have completed the information input, execute the **Insertion** procedure using the *Run* button.

### Cancellation

By selecting **Cancellation** from the **Manag. type** combo, you need to enter the component that you want to remove from the bills of materials in the filter area, by selecting it with the appropriate *Help items* next to the **Component** field, and optionally the **Assembly** (or its class or part of the code or description) from which you want to remove the component.

Then, by clicking on the **Search** button on the ribbon bar, the procedure displays in the grid all the bills of materials corresponding to the set search filter. In the results grid, class, code, description, and variant of the assembly, validity start and end of the connection between the selected component in the filter area and the assembly displayed in the grid, the quantity of the component, and its unit of measure used are displayed, always in relation to the assembly/component relationship.

Choose one of the displayed bills of materials, or select a list of bills of materials on which to perform the Cancellation procedure using the *CTRL+click* mouse combination.

The lower section of the window is deactivated in the case of **Cancellation**.

Once the component to be deleted is selected, you can execute the **Cancellation** procedure using the *Run* button.

*Specific button*: 

> **Run**: button that allows you to activate the selected procedure from the initial combo of the window (thus either the *Replacement/Modification* procedure, or the *Insertion* procedure or the *Cancellation* procedure).

For anything not detailed in this document regarding the common functionality of forms, please refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).