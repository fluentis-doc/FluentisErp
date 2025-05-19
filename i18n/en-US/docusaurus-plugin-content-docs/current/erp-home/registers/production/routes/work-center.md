---
title: Work Center
sidebar_position: 3
---

Through this form, various work centers can be coded, including information related to the machines and labor groups that compose them.

The table allows for the insertion of new records or to search for existing ones to view, modify, or delete them.

### Search Work Center 

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to view the results in the results grid.

### Insertion of Work Center 

To insert new codes, you must click on the first empty row in the grid or press the **Insert** button.

The mandatory information for creating a new work center includes: the code, description, and type.

The form consists of a main section where the following data related to the work center is entered:

**Work Center**: indicates the code of the work center;  
**Work center description**: indicates the description of the work center;  
**Fixed time**: indicates that the work center operates on a fixed time basis, meaning the processing time of the item does not depend on the number of pieces;  
**Infinite capacity**: indicates that the work center operates with infinite capacity; therefore, it has such great availability that it can be continuously loaded;  
**Work center type**: indicates whether the work center is internal or external;  
**Machine**: indicates the machine code associated with that work center;  
**Machine number**: indicates the number of equivalent machines;  
**Labour Group**: indicates the code of the labor group associated with the work center;  
**Workers number**: indicates the number of workers in the work center;  
**Priority for Calendar Availability Calculation**: indicates which criteria to use to calculate the availability over time of that work center;  
**Division**: indicates the code of the department in which the work center is located;  
**% Work Center Utilization**: indicates the percentage of efficiency of the work center;             
**% Minimum Occupancy Level**: indicates the minimum percentage that must be free in the work center to assign it another activity;  
**Work start hour**: indicates the start work time of the work center;  
**Start pause**: indicates the start break time of the work center;  
**Break end time**: indicates the end break time of the work center;  
**Work end hour**: indicates the end work time of the work center;  
**Daily Hours**: indicates the total daily hours worked;  
**Working Shift**: indicates the code of the work shift associated with the work center;  
**Shift description**: indicates the description of the work shift associated with the work center;  
**Insert date**: indicates the date the record was entered;  
**Last edit date**: indicates the date of the last modification of the record;  
**Machine description**: indicates the description of the machine;  
**Labour group description**: indicates the description of the labor group;  
**Division description**: indicates the description of the department;  
**Production site**: indicates the [Production site](/docs/configurations/parameters/production/production-orders-parameters/production-site) of the work center;       
**Production site description**: indicates the description of the [Production site](/docs/configurations/parameters/production/production-orders-parameters/production-site) of the work center.

In the second section, exceptions regarding the working hours of the selected work center can be entered.

<details>
<summary> The following fields are used only in the procedure for [F.C.S Scheduling](/docs/planning/ms-master-scheduling/fcs-scheduling) </summary>

**Capacity type**: Select **finite capacity** to take into account the production capacity of the center, and the resources associated with it (machines, workers, generic resources). For centers with machines, the capacity is calculated considering all the machines in the center and the related standard work shifts and related calendar exceptions (see load histograms). For centers without machines, the limit of tasks that can be worked at the same time is given by the workers available with the processing qualification required by the center (according to standard work shifts and calendar exceptions). In this case, the capacity shown in the histograms is the content of the **average hours worked** field of the work center, which could be lower on some days, than the simulated work load, even if the center is scheduled at finite capacity. This is because the capacity of the center shown in the histograms is not calculated considering all the workers who have the processing qualification required by the center, as people often have more qualifications and are not exclusively dedicated to the work center, so if the capacity were calculated in this way it would be unrealistic and overestimated. 
If you select **infinite capacity**, the center must not have any machinery or qualifications, and in this case the tasks are scheduled considering only the material constraints and the standard work shift and related calendar exceptions of the center. This choice makes sense when the center always has abundant resources compared to requests and it is never necessary to wait for the center's resources to become free. Use this value for the processing phases to be performed by subcontractors (phase work account), unless you want to schedule the subcontractor at finite capacity. In the case of an external phase scheduled at infinite capacity, the duration of the phase is given by the hours of the phase itself and the hours of the center's shift. For example, if the phase lasts 40 hours and the center has a standard shift of 8 hours, the phase will last 5 working days. In this case it may be necessary to use the **fixed time** flag of the center to ensure that the duration of the phase is independent of the quantity.           
**Center scheduling type**: Select **Standard** if the center uses machines that require full-time or part-time workers to operate them, **Automatic** if the center uses machines that can operate without workers, **Assembly** if it does not use machines and the number of workers to be assigned to the task is fixed, **flexible bench** if it does not use machines and the number of workers to be assigned to the task can vary between a minimum value, indicated by the number of workers field of the relevant phase, and a maximum value indicated by the "maximum number of workers" field indicated on the center.           
**Setup qualification**: indicates the qualification of workers required to perform the machine setup at the center;        
**Processing qualification**: indicates the qualification of workers required to perform processing at the center;       
**Number of setup workers**: indicates the number of workers needed to perform the setup of the machines at the center;          
**Maximum number of processing workers**: indicates the maximum number of workers (only for flexible bench-type centers). The scheduler will use a minimum number of workers equal to the number of operators and a maximum equal to this value;       
**Maximum number of tasks**: indicates the maximum number of simultaneously active tasks that can be scheduled. If not filled, the limit will be given by the number of machines, the number of workers needed, or the required production resources. For example, if the center has 10 machines but you want no more than 5 to be used simultaneously, set this field to 5;      
**Average hours worked**: indicates the average hours worked in a day. For work centers without machines, this value will be considered as capacity, while in the case of centers with machines, the sum of their capacities will be considered, day by day based on their respective work shifts and calendar exceptions;     
**Buffer time**: indicates the desired buffer hours. The scheduler will try to create a queue of activities waiting to be processed at this center, equal to the value of this field. It serves to apply a key principle of the "theory of constraints," namely to ensure that work centers that are bottlenecks are never inactive due to a lack of material to be processed, as a consequence of poor activity scheduling.

</details>

For everything not detailed in this document about the common functioning of forms, refer to the following link [Common Functionality, Buttons, and Fields](/docs/guide/common).