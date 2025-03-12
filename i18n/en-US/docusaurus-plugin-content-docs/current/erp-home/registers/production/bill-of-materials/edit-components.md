---
title: Modify Components (Modificare componenti)
sidebar_position: 6
---

This form allows for bulk modification of assemblies that were created previously, using three different procedures based on the type of modification you wish to make: replacement/modification, insertion, and cancellation.

### Replacement and Modification

By selecting the option **Substitute/Edit** from the **Manag. type** combo, you need to enter a component in the filter area, selecting it with the appropriate *Help items* next to the **Component** field.

Filter for a single item; it is not possible to use only the article class or only part of the code or description as a search filter. After setting the search criterion, by clicking the **Search** button on the ribbon bar, the procedure displays all the bill of materials in which the component entered in the filter area is present, thus performing a *Component Implosion (Implosione componente)*.

In the results grid, class, code, description, and variant of the assembly are displayed, along with the start and end validity of the link between the component selected in the filter area and the assembly displayed in the grid, the quantity of the component, and its unit of measure of use, always in conjunction with the assembly/component link.

Choose one of the displayed bills of materials, or select a list of bills of materials on which to perform the 'Replacement/Modification' procedure by using *CTRL+click* with the mouse.

In the lower section of the window, select the new component to replace the one selected in the filter section. To select this new component, you can use the *Help items*, entering the fields of *class, code, description* and optionally the *variant* of the new component, for which the quantity must also be entered (and whether the quantity is *fixed (fissa)* or *Variable*), and optionally the *unit of measure of use*, the *scrap quantity*, the *positive and negative % deviation*, the start and end validity, the *priority*, and the *notes* of the new component.

Using the *Alternatives* and *Phases* flags, it is possible to decide whether to include the alternatives and processing phases linked to the new component in the new link.

It is also possible to activate, if necessary, the *Movable* flag and the *Phantom* flag (for a detailed explanation of the various fields to be filled in, refer to the article [Structure Management (Gestione strutture)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Through this procedure, it is possible to insert, in the lower section, the same component entered in the filter section: in this case, the information already present for that component within the selected bills of materials in the grid will simply be modified.

Once the information entry is complete, execute the **Substitute/Edit** procedure using the processing button ![](/img/neutral/common/execute.png).

### Insertion

By selecting the option **Insertion** from the **Manag. type** combo, you need to enter the assembly in the filter area, selecting it with the appropriate *Help items* next to the **Assembly** field, within which you want to insert a component.

In this case, it is not necessary to filter for a single item, so it is possible to use the article class or only part of the code or description as a search filter (the filter fields are the same as for the (*Modification/Replacement*) procedure). Then by clicking the **Search** button on the ribbon bar, the procedure displays all the corresponding bills of materials based on the set search filter. In the results grid, class, code, description, and variant of the assembly are displayed.

Choose one of the displayed bills of materials or select a list of bills of materials on which to perform the Insertion procedure using *CTRL+click* with the mouse.

In the lower section of the window, select the new component to insert into the selected bills of materials in the filter section. To select this new component, you can use the *Help items*, entering the fields of *class, code, description* and optionally the *variant* of the new component, for which the *quantity* (and whether the quantity is *fixed (fissa)* or *Variable*) must also be entered, and optionally the unit of measure of usage, the scrap quantity, the positive and negative % deviation, the start and end validity, the priority, and notes of the new component.

Using the *Alternatives* and *Phases* flags, it is possible to decide whether to include the alternatives and processing phases related to the new component in the new link.

It is possible to activate, if necessary, the *Movable* flag and the *Phantom* flag (for a detailed explanation of the various fields to be filled in, refer to the article [Structure Management (Gestione strutture)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Once the information entry is complete, execute the **Insertion** procedure using the processing button ![](/img/neutral/common/execute.png).

### Cancellation

By selecting the option **Cancellation** from the **Manag. type** combo, you need to enter the component you want to remove from the bills of materials in the filter area, selecting it with the appropriate *Help items* next to the **Component** field, and optionally also the **Assembly** (or its class or part of the code or description) from which you want to remove the component.

Then by clicking the **Search** button on the ribbon bar, the procedure displays all the corresponding bills of materials based on the set search filter. In the results grid, class, code, description, and variant of the assembly, the start and end validity of the link between the component selected in the filter area and the assembly displayed in the grid, the quantity of the component, and its unit of measure of use are displayed, always in conjunction with the assembly/component link.

Choose one of the displayed bills of materials, or select a list of bills of materials on which to perform the Cancellation procedure using *CTRL+click* with the mouse.

The lower section of the window is disabled in the case of **Cancellation**.

Once you have selected the component to delete, it is possible to execute the **Cancellation** procedure using the processing button ![](/img/neutral/common/execute.png).

*Specific Button (Pulsante specifico)*:

> **Elaboration**: button that allows you to activate the procedure selected in the initial combo of the window (therefore either the Replacement/Modification procedure, the Insertion procedure, or the Cancellation procedure).

For everything not detailed in this document regarding the common functioning of forms, refer to the following link [Common Functions, Buttons, and Fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).