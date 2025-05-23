---
title: Phase Sequence - TopDown Grid 
sidebar_position: 2
---

:::important What it is for
The **Phase Sequence** procedure in Fluentis, through the "Phase Sequence - TopDown grid" functionality, allows for optimizing the management of production phases by assembling manual sequences or those based on custom rules.      
After a careful selection of filters, including work center, order period, and job order, the phases not yet ordered are listed in an upper grid. From there, the phases are moved to the lower grid to assign a sequence.      
The form includes tools to modify data associated with the phases, calculate times, and update dates, ensuring precise control over production scheduling. Specific buttons facilitate the calculation of sequences, inventory management, and order status updates, ensuring an efficient production flow.
:::

It allows for manually sequencing the phases or according to rules decided by the operator.

The form consists of an initial filter area where it is possible to select:
> **Work Center**       
> **Machine**        
> **From order start date**         
> **To order end date**      
> **Production Job Order**     

By expanding this area, it is also possible to filter, for example, by *Item*, *Sequence*, *Production job order type*, *Labor groups*; furthermore, there is also the option to choose the types of orders to display among planned orders, production orders in launched and/or executive state.

The central part of the form consists of two grids.           
The first shows all the processing phases that have not yet been assigned a sequence. Therefore, by selecting one or more phases from the first grid and pressing the *Move Phases* button, these are moved to the second grid (below) where it will then be possible to assign a sequence manually or automatically.          

:::note Note
It is not possible to modify the information of a phase that has already been declared in production.
:::

At the bottom of the form, the following fields are present:
> **Commitment Quantity**: shows the total commitment quantities of the selected lines by the author;         
> **Time Measurement Units**: indicates the time unit by which the value present in **Total Time** is to be displayed;     
> **Total Time**: shows the total time (Machine Time + Labor Time + Setup Time) of the lines selected by the author.

Moreover, by expanding this section, read-only detail data related to:
> **Quantity**
> **Labor Time**
> **Machine Time**
> **Setup Time**

*Specific buttons*:  

> **Search**: allows viewing of the phases based on the entered filters;           
> **Search and consider stocks**: performs the same function as the **Search** button, but at the same time, allows visualization in red of all phases where there is no stocks available today;                   
> **Move Phases**: allows moving the selected phase(s) from the first grid to the second grid where a sequence can then be assigned;         
> **Change Phases**: once a phase is selected, this command allows to *Update* the phase itself by changing: phase, machine, work center, total machine time, labor time, and setup time. Additionally, by selecting the *Insert* option, it is possible to add a new phase or, using the *Delete* option, to permanently remove it;            
> **Change Production Cycle/Version**: allows changing the cycle and/or version in that production order;            
> **Change Dates**: allows changing the start date of the selected phase;         
allows changing the *Start Date* for all planned or selected production orders with the date indicated in the pop-up; subsequently, based on the phases and the *Productive Capacity Calendar*, the *End Date* of the order and the start and end dates of each phase are also recalculated. Based on the new dates, the material usage dates are also recalculated.
In addition to updating the dates in the order, those in the connected job order are updated;        
> **Calculate Time**: allows recalculating times after assigning a new sequence or after changing some data through the **Change Phases** function;          
> **Calculate Sequence**: after reordering the lines of the second grid based on necessity, this button allows assigning a sequence to the phases we have selected based on the given ordering;       
> **Update Ready Goods Date**: allows updating the *Ready Goods Date* of the connected customer orders with the *Order End Date*;      
> **Recalculate Availability**: allows recalculating availability, showing the stock availability based on the sequence that has been assigned;         
> **Release Planned Order**: allows releasing planned production orders into production orders for the selected phases;                     
> **Release Orders**: allows changing the status of production orders from launched to executive for the selected phase(s).         
> **Expand Grid**: allows hiding the filter area of the form for easier work on the grids;         
> **Double Grid**: allows hiding the first grid for easier work on the second.          

For details on the common functionality of the forms, please refer to the link [Custom features, buttons, and fields](/docs/guide/common).
=======
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

For details on the common operation of forms, refer to the link [Custom features, buttons, and fields](/docs/guide/common).

