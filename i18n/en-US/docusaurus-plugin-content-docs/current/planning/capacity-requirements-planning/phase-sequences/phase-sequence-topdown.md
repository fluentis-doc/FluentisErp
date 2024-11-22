---
title: Phase Sequence - TopDown Grid 
sidebar_position: 2
---

:::important What it is for
The **Phase Sequence** procedure in Fluentis, through the "Phase Sequence - TopDown grid" functionality, allows for optimal management of production phases by assembling manual or rule-based sequences.      
After careful selection of filters, including work center, order period, and job, the phases that have not yet been ordered are listed in an upper grid. From there, phases are moved to the lower grid to assign a sequence.      
The form includes tools to modify data associated with the phases, calculate times, and update dates, ensuring precise control over production planning. Specific buttons facilitate the calculation of sequences, the management of stock levels, and the updating of order statuses, ensuring an efficient production flow.
:::

It allows for manual sequencing of phases or according to rules set by the operator.

The form consists of an initial filter area where you can select:
> **Work Center**       
> **Machine**        
> **From order start date**         
> **To order end date**      
> **Production job order**     

Expanding this area allows filtering, for example, also by *Item*, *Sequence*, *Production job order type*, *Labour groups*; moreover, there is also the option to choose the types of orders to display among planned orders, launched production orders, and/or executive.

The central part of the form is composed of two grids.           
The first presents all the work phases to which a sequence has not yet been assigned. Thus, selecting one or more phases from the first grid and pressing the *Move phases* button will move them to the second grid (below) where a sequence can then be assigned manually or automatically.          

:::note Note
It is not possible to modify the information of a phase that has already been declared as in production.
:::

At the bottom of the form, the following fields are present:
> **Commitment quantity**: displays the total commitment quantities of the lines selected by the user;         
> **Time measurement unit**: indicates the time unit in which the value present in **Total time** will be displayed;     
> **Total time**: shows the total time (Machine time + Labor time + Setup time) of the lines selected by the user.

Additionally, expanding this part displays read-only detailed data regarding:
> **Quantity**
> **Labor time**
> **Machine time**
> **Setup time**

*Specific buttons*:  

> **Search**: allows you to view phases based on the entered filters;           
> **Search** and **Consider stock**: performs the same function as the **Search** button but simultaneously allows you to view in red all phases where there is no available stock today;                    
> **Move phases**: allows you to move the selected phase(s) from the first grid to the second grid where a sequence will then be assigned;         
> **Change phases**: once a phase is selected, this command allows you to *Update* the phase itself by changing: phase, machine, work center, total machine time, labor time, and setup time. Additionally, by selecting *Insert*, it is possible to add a new phase, or through the *Delete* option, to permanently remove it;            
> **Change cycle/version**: allows you to change the cycle and/or version in that production order;            
> **Change dates**: allows you to change the start date of the selected phase;         
it allows you to change the *Start date* for all planned or production orders selected with the date specified in the pop-up; subsequently, based on the phases and the *Productive Capacity Calendar*, the *End date* of the order and the start and end dates of each phase will also be recalculated. Based on the new dates, the material usage dates will also be recalculated.
In addition to updating the dates in the order, those in the connected job are also updated;        
> **Calculate time**: allows you to recalculate times after assigning the new sequence or after modifying some data using the **Change phases** function;          
> **Calculate sequence**: after reordering the rows of the second grid based on necessity, this button allows you to assign a sequence to the phases selected based on the given sorting;       
> **Update ready goods date**: allows you to update the *Ready goods date of order* of connected customer orders with the *Order end date*;      
> **Recalculate availability**: allows you to recalculate availability, showing the availability of stock based on the sequence that has been assigned;         
> **Release orders planned to**: allows releasing planned production orders into production orders for the selected phases;                     
> **Release orders**: allows changing the status of production orders from launched to executive for the selected phase(s).         
> **Expand grid**: allows hiding the filter area of the form to work more easily on the grids;         
> **Double grid**: allows hiding the first grid to work more easily on the second.          

For details on the common operation of forms, refer to the link [Common functionalities, buttons, and fields](/docs/guide/common).