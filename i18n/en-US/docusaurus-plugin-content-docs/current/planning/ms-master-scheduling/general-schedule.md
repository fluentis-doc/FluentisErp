---
title: General Planning (Pianificazione generale)
sidebar_position: 2
---

:::important What is it for
General planning in Fluentis is a process that operates under the assumption of infinite capacity, which means that planning does not take into account physical limitations in work centers or available resources. This methodology allows for scheduling production operations with a certain degree of flexibility.

Planning can be carried out using two distinct logics: **as soon as possible** and **as late as possible**. The ***as soon as possible*** logic aims to initiate operations as soon as possible, while the **as late as possible** logic schedules operations as late as possible without compromising deadlines. These approaches enable optimized analysis of production needs and management of processing times based on business priorities and operational necessities.
:::

The form consists of four tabs: *Projects (Commesse)*, *General Parameters (Parametri generali)*, *Monitor (Monitor)*, and *History (Storico)*.

## Projects (Commesse)

The projects tab consists of a filter area that allows filtering the projects that will then be displayed in the results grid below.       
In addition to filters for item, year, and project number, there is also a filter for Project Type: which allows viewing single-product, multi-product, or both projects.

There is also a filter for *Production Site (Sito produzione)* so that only the projects of a specific production site can be planned, and a series of flags: *Delayed (In ritardo)*, *Expired (Scadute)*, *Launched (Lanciate)*, and *Executive (Esecutive)*, which allow you to choose whether to view also the projects delayed with respect to the date, or expired, and only if in the **General Planning Parameters (Parametri generali della pianificazione)** the flag *planning of launched or executive projects* has been activated, will the flags *Launched (Lanciate)* and *Executive (Esecutive)* be activated as well; otherwise, these two fields will always be inactive.          
If the flag *planning of launched or executive projects* is not active, only projects in the state of *not examined (non esaminate)* or *scheduled (pianificate)* will be displayed in the grid.       
By selecting one or more projects, based on the planning parameters set in the relevant tab, the general planning button will create the planned orders of the three types provided: production, purchase, and job orders, starting from the information present in the projects and cross-referencing the data with the corresponding bill of materials and work cycles.

Once created, the planned orders can be viewed in the form [Search Planned Orders (Ricerca ordini pianificati)](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders), or this form can be opened via the **Open Search Planned Orders (Apri ricerca ordini pianificati)** button. 
In the event that a project is selected in the results grid and then the **Open Search Planned Orders (Apri ricerca ordini pianificati)** button is pressed, the planned orders form will open filtering the results for that project.

*Specific buttons*:

> **General Planning (Pianificazione generale)**: allows the system to schedule the selected projects;  
> **Open Search Planned Orders (Apri ricerca ordini pianificati)**: this button allows opening the screen of [Search Planned Orders (Ricerca ordini pianificati)](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders); if a row of a project is selected before pressing this button, the planned orders form will open already pre-filtered for that project;               
> **Change Expected End Date with Suggested Date (Cambia data fine prevista con data suggerita)**: this button allows you to update the *expected end date* with the *suggested date* calculated by planning if it was launched with the **Check Late Documents with ATP (Controlla documenti in ritardo con ATP)** flag active;     
> **Sequence Projects (Sequenza commesse)**: through this functionality, you can access the project sequence, within which you can view the projects based on the sequence assigned, also through a graph.

*Specific filters*:

**Project Type (Tipo commessa)**: through this combo, you can select the type of project you want to view, whether single-product projects, multi-product projects, or both;

**Production Site (Sito produzione)**: you can view the projects based on the production site in which they need to be produced by selecting it through the appropriate combo;

**Delayed/Expired/Launched/Executive (In ritardo/Scadute/Lanciate/Esecutive)**: these flags allow you to choose whether to see also the projects delayed with respect to the date or expired, and only if in the [General Planning Parameters (Parametri generali di pianificazione)](/docs/planning/ms-master-scheduling/general-schedule) the flag *planning of launched or executive projects* is set, otherwise the two fields are inactive; otherwise, as explained in the article on planning parameters, in the projects tab, only those in the state of not examined or scheduled will be visible; but these will assume the state of launched and/or executive if this flag is not set and the projects will not be viewable within this tab.

*Specific Fields in the Results Grid*

**Suggested Date (Data suggerita)**: as explained in the article related to the general planning parameters, by activating a particular flag called [Check Late Documents with ATP (Controlla documenti in ritardo con ATP)](/docs/planning/ms-master-scheduling/general-schedule), the planning procedure will execute reasoning such that if even one of the orders being scheduled and generated is delayed compared to the expected date, the system will delete all created orders and will restart calculating them from the **Start MS Date (Data inizio MS)** (which is always defined in parameters and activated only by setting the **Check Late Documents with ATP (Controlla documenti in ritardo con ATP)** flag) using the *as soon as possible* logic and will propose the new date for the projects right in the *Suggested Date (Data suggerita)* field present in the results grid.

### General Planning Procedure

Once the projects that you want to schedule are selected, the **General Planning (Pianificazione generale)** button present in the ribbon bar of the form will be activated, and by clicking on that button, the system will proceed with the planning of the selected projects.

To view all completed scheduling and the related production orders created for each project, simply move to the **History (Storico)** tab.

:::danger Note    
Manually created projects are always produced regardless of the availability of the item to produce.    
:::   

## General Planning Parameters (Parametri di Pianificazione generale)

:::note Note
Before proceeding with planning, it is important to set the parameters within this tab to be followed for executing the planning.
::: 

**Plan Until (Pianificare fino al)**: indicate the date by which the system will need to consider the documents entered. This date is calculated by the system as today's date plus the value in months entered in the field **Maximum Number of Months for Planning (Numero massimo di mesi per la pianificazione)** present in the [MS Parameters (Parametri MS)](/docs/configurations/parameters/production/mps-parameters);       

**Materials / Resources (Materiali / Risorse)**: activating the **Materials (Materiali)** flag will report the materials to be consumed within the created planned orders. Meanwhile, activating the **Resources (Risorse)** flag will also report the processing phases within the created planned orders. If one or both flags are not active, planned orders will still be created but without the respective materials or processing phases;

**Planned Orders for (Ordini pianificati di)**: through the 3 flags, it indicates whether you want the system to generate all three types of planned orders expected, thus production, purchase, and job orders; in this way, these types of orders will have a direct link with the project; (for example, if the Purchase flag is not checked, but the Execution MRP flag is maintained, the system will still create purchase orders but these will be disconnected from the project);

**Generate Only Planned Orders for Levels (Genera solo ordini pianificati per livelli)**: in this case, you specify the levels (1-2...) for which you want planned orders to be generated;

**Supplier Orders or Purchase Requests and Customer Orders (Ordini fornitori o Richieste d'acquisto e ordini cliente)**: in this case, if there are documents present in the system without commitment date and availability, you can tell the system to consider the date that you can indicate in the appropriate field, or tell the system not to consider them at all;

**Grouping of Planned Orders by (Raggruppamento ordini pianificati per)**: in the case of working by project, in this field, you set the option *No grouping (Nessun raggruppamento)*; otherwise, you can select through the appropriate combo the type of grouping you want to apply, but in this case, the link between planned orders and project would be lost;

**Grouping As Late or As Soon (Raggruppamento al più tardi o al più presto)**: in this case, you can choose to group orders as late as possible (thus based on the last) or as soon as possible (which is recommended) and in the next field called **For a Period in Days (Per un periodo in giorni)**, you will specify the number of days within which to perform the grouping;

**Consider Quantities Based on Economic Lot/Consider Multiples of Economic Lot (Considera le quantità in base al lotto economico/Considera i multipli del lotto economico)**: by setting the first parameter, you indicate that during planning you want to take into account the economic lot of the item, and consequently, the flag that allows deciding whether to consider the multiples of the economic lot will be activated. 
For the examined item, the economic lot values and its multiples will be considered, if and only if the respective flags are active within the [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of the item. In the case of an item with production supply type, the economic lot and multiples values will be taken from the production tab of the [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) of that item, while if it's a purchase supply type item, they will be taken from the default supplier present in the [Preferential Vendors (Fornitori preferenziali)](/docs/erp-home/registers/items/create-new-items/item-registry/preferential-vendors) tab of its registry.

**Compact/Separate Orders (Compatta/separa ordini)**: in this case, you choose whether to keep or not a day of leeway between the end of production of the 1st level order and that of the next level;

**Execute MRP After Planning and Stock Articles (Esecuzione del MRP dopo pianificazione e Articoli a scorta)**: it indicates that after an initial planning, the system should analyze all article codes of the Bill of Materials of the article with a management policy different from that of the project, in order to verify coverage and possibly generate planned orders but without a link to the project. Activating Stock Articles will make the MRP procedure also consider all articles with stock management policy in the [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters); 

**Planning by Delivery Zone (pianificazione per zona consegna)**: by setting this flag, the system will check when the order should be delivered based on its delivery zone and will schedule the order ahead of the delivery day;

**Check Late Documents with ATP (Controlla documenti in ritardo con ATP)**: if you enable this flag, the next field called **Start MS Date (Data inizio MS)** will be enabled simultaneously; at this point, the planning procedure will execute reasoning such that if even one of the orders being planned and generated is delayed compared to the expected date, the system will delete all created orders and will restart calculating them from the **Start MS Date (Data inizio MS)** using the *as soon as possible* logic and will propose the new date for the projects right in the *Suggested Date (Data suggerita)* field present in the results grid. At this point, using the dedicated button **Change Expected End Date with Suggested Date (Cambia data fine prevista con data suggerita)** (present in the projects tab of the *General Planning (Pianificazione generale)*), it is possible to replace the expected end date with the newly calculated suggested date and then relaunch the planning to have all planned orders correctly;

**Automatic Release of Planned Orders (Rilascio automatico ordini pianificati)**: if you decide to enable this parameter, the planning, in addition to generating the orders as planned, will also release them automatically, thus the planned production orders will become production orders, the planned purchase orders will become RDA (purchase requests), and the planned job orders will become job orders;

**Planning as Soon or as Late (pianificazione al più presto o al più tardi)**: the user can decide which logic should be used for general planning between: as soon as possible and as late as possible. The as soon as possible logic aims to start operations as early as possible, starting from today's date; while the as late as possible logic schedules operations as late as possible without compromising deadlines, thus starting from the delivery date and going back in time. 

**Planning of Launched or Executive Projects (pianificazione commesse lanciate o esecutive)**: allows enabling the flags: launched and executive present in the *projects* tab; at this point, activating them will make it possible to view and select also the projects in launched or executive status for re-planning. It is important to note that for projects in launched or executive status, only those planned orders that have not yet been released will be re-planned;

**Version (Versione)**: the procedure will plan the projects in the version set in this field, if no version is entered in the production project. The version entered in the production project will have a higher priority than the version entered in the parameters of the *General Planning (Pianificazione generale)*. This is a field that must be filled out, otherwise planning will not be possible;

**Consider Availability (Considera la disponibilità)**: if this flag is active, it indicates to the procedure that in the planning process it will need to take into account the availability coming from the warehouses indicated in the grid below, which are those defined within the form [Availability Calculation (Calcolo Disponibilità)](/docs/erp-home/registers/items/calculate-availability/); 

**Consider Availability at the Required Date or the Minimum in the Period (Considera disponibilità al data fabbisogno o la minima nel periodo)**: these flags are activated only if the flag **Consider Availability (Considera la disponibilità)** is active; The **required date (data fabbisogno)** means that the procedure needs to consider availability at the moment of producing the order, while, in the case of the **minimum in the period (minima nel periodo)** date, the procedure will take into account the minimum availability in the period until the date set in the parameter *Plan Until (Pianificazione fino al)*.

**Consider Lots in Unavailable State (Considera lotti in stato non disponibile)**: this flag also activates only if the flag **Consider Availability (Considera la disponibilità)** is active; if enabled, the procedure will take into account lots in an unavailable state;      

**Consider Availability Also for the First Level (Considera disponibilità anche per il primo livello)**: this flag also activates only if the flag **Consider Availability (Considera la disponibilità)** is active; if enabled, the procedure needs to consider availability also for the first level (thus for the item present in the production project);

**Consider Negative Availability (Considera anche disponibilità negativa)**: if active, the procedure must also consider negative availabilities at the time of planning for the first-level item; in fact, this flag can only be enabled if the flag **Consider Availability Also for the First Level (Considera disponibilità anche per il primo livello)** is active;     

**Consider Availability Coming From (Considera disponibilità provenienti da)**: these flags can only be activated if the flag **Consider Availability (Considera la disponibilità)** is activated and allow indicating whether you want the procedure to consider availabilities coming from purchases, sales, warehouse, job orders, and production;

**Replenishment of Minimum Stock of the Item and Replenishment of the Reorder Point of the Item (Reintegro scorta minima dell'articolo e reintegro punto di riordino dell'articolo)**: the first flag activates only if the second is set. These two flags indicate that the procedure will need to foresee the replenishment of the reorder point established for that item and if you also want the replenishment of the minimum stock of the item; both of these data are entered in the [Procurement (Approvvigionamento)](/docs/erp-home/registers/items/create-new-items/item-registry/procurement) tab of the registry;

**Consider Coverage Index (Considera l'indice di copertura)**: if the flag is active, the procedure must account for the coverage index established in the *Procurement (Approvvigionamento)* tab of the item;

**Consider Alternatives for Materials (Considera anche le alternative dei materiali)**: if active, at the time of project planning, the procedure will also need to consider alternatives of materials present in the *Alternatives (alternative)* tab of the [Bill of Materials (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management), in case there is insufficient availability for the main material indicated in the bill;            

**Consider Only Alternative Materials (Considera solo materiali alternativi)**: activates only when the flag **Consider Alternatives for Materials (Considera anche le alternative dei materiali)** is active; if this flag is enabled, it first checks the availability of alternative components based on their priority, if insufficient, it then checks that of the main component; it is enabled only if the flag **Consider Availability (Considera la disponibilità)** is active;    

:::note Note
Alternative materials are entered in the **Alternatives (Alternative)** tab related to the main material present in the [Bill of Materials (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**Consider Alternative Phases (Considera le fasi alternative)**: if active, this flag indicates that at the time of planning, alternative work phases will also need to be considered; activating this flag will activate the subsequent editable field called **Tolerance for C.d.L. % Occupancy (Tolleranza per l'occupazione del C.d.L. %)**, in which you can specify the tolerance of center occupancy in %, beyond which the procedure will need to consider alternative phases to the default phase.

## Monitor

In this tab, by activating or not the flags present, the user can choose how to display the results of the planning in the **History (Storico)** tab.

You can decide whether to display the **Calendars (Calendari)** considered (the *Factory (Fabbrica)* Calendar and the *Production Capacity (Capacità produttive)* calendar); you can decide to be notified if there were **Items without** *MRP Parameters (Parametri MRP)*, without *Bill of Materials (Distinta base)* or *Work Cycles (Ciclo di lavoro)*, without *Preferred Supplier (Fornitore preferenziale)* (in the case of purchase orders), without *Preferred Outsourcer (Terzista preferenziale)* (for job orders), and without the indication of minimum stock for all those items managed as stock. For each **Production Project (Commessa di produzione)**, you can choose to view in the history the *Number of Scheduled Rows (Numero di righe schedulate)* and the detail of these rows, the delayed projects, and the expired projects.

Regarding the **Planned Orders (Ordini pianificati)**, you can choose whether to display in the history the *Number of Generated Orders (Numero di ordini generati)* and their *Detail (Dettaglio)*, the orders *Delayed (In ritardo)* and *Expired (Scaduti)*, the *Material Alternatives (Alternative materiali)*; you can also choose to be alerted if there are any **Planned Orders without** *Material*, *Work Phases (Fasi di lavorazione)*, *Supplier (Fornitore)* (for purchase) and *Outsourcer (Terzista)* (for job orders).

**Legend**: active flags allow you to receive alerts and details regarding selected items.

## History (Storico)

In the grid of this tab, all summary information related to project planning is displayed.

**Sched. Prog. (Progr. sched.)**: displays a simple progressive number of the planning operation initiated by the user;

**Operator (Operatore)**: displays the user who initiated the planning;

**No. Errors (No. errori)**: displays the number of errors recorded during the planning procedure;

**Start Date (Data inizio)**: displays the date and time of the start of the planning process;

**End Date (Data fine)**: displays the date and time of the end of the planning process;

**Scheduled Data Coming From (Dati schedulati provenienti da)**: displays the exact origin of the scheduled data;

**Forecast (Previsionale)**: displays whether the data comes from Sales Forecasts or the Master Production Plan;

**Period (Periodo)**: displays the type of forecast, weekly or monthly;

**Day (Giorno)**: displays the designated weekday as the day when the end date of the scheduled production project should fall directly from MPS Definition.

All other columns of the grid display the settings used in the **Parameters (Parametri)** tab of the *General Planning (Pianificazione generale)* related to the selected row.

**Planning Result (Risultato pianificazione)**

Based on the selected row in the grid, this section will display the details requested by the user in the **Monitor (Monitor)** tab.

In the planning results, you can see the number of the just-planned project, the number of planned orders generated from that project, and the detail of the generated planned orders.

For details on the common functionality of forms, refer to the link [Common Features, Buttons, and Fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).