---
title: MRP (MRP)
sidebar_position: 3
--- 

:::important What is it for (A cosa serve)
The **MRP** (**Manufacturing Resource Planning**) function of Fluentis allows users to analyze the availability of materials and production resources based on production planning. Through this procedure, the operator receives suggestions on how to optimize material management, including guidance for anticipating supplies, integrating necessary quantities, or canceling unnecessary orders. Fluentis MRP takes into account production constraints, raw materials, and available or ordered semi-finished products, thus allowing efficient control of each active job. This system aims to optimize company inventories, reducing stock levels and improving operational efficiency.
::: 

This procedure allows the user to have an analysis of the correct availability of materials and production resources based on production planning. Through this processing, the operator can receive a series of suggestions related to anticipating some material supplies, integrating necessary quantities, or canceling orders for unnecessary items in order to make the control and management of operations as smooth as possible. The MRP performs production planning while considering different production constraints, as well as available and ordered raw materials and semi-finished products. Thanks to this procedure, the operator is able to analyze the production coverage of each active job, managing and coordinating all processes related to acquisition, production, and delivery of the finished product. The basic principle of the material requirements planning system is the optimization of stocks based on business needs, which results in reduced stock levels and a consequent increase in efficiency. Essentially, through the algorithms of this function, Fluentis MRP is able to understand the commitment of each material present in inventory and the availability on the specified date. 

### M.R.P.

In this tab, it is possible to consult the results by selecting the processing from those present in the history.    
It is noted that processes are maintained in history for the number of days indicated in the field **MRP History Days to Keep** (Giorni storico MRP da mantenere), present in the [Material Requirements Parameters](/docs/configurations/parameters/production/resource-requirements-parameters).      
This form consists of a filter area where it is possible to filter by item, type of supply, or even by the type of suggestion provided by the procedure.  
On the right side, there is a list of all the items that the procedure has processed, for each of which the proposed actions are also indicated.    
Once one of these rows is selected, all the information related to the actions to be taken is displayed in the central table, where availability, requirement, and any confirmed requirement are reported if the procedure has been launched with the **Confirmed Production Demand Difference (Differenza domanda di produzione confermata)** flag active; while in the lower table, we find all the information related to all documents related to the item, indicating demand, offer, and availability on the specified date.    
By selecting a scheduled order created by the MRP procedure, it is possible to release it by pressing the **Release Scheduled Orders (Rilascio ordini pianificati)** button.

### Job (Commessa)

In this tab, it is possible to filter and select the production jobs that you want to process, so as to operate partially on some selected jobs or globally on all jobs present in production.

### Parameters (Parametri)

Through this tab, all the general parameters concerning the MRP procedure are set. Some settings present in this tab are taken from the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) window and are related to the specific item. 

**Planning (Pianificazione)**: 
> **Plan until (Pianificare fino al)**: indicates the date by which the system should consider the entered documents. This is proposed as the last day of the year if the current date is until June 30 of the current year; otherwise, after July 1, the last day of the following year is proposed.     
> **Materials Flag (Flag Materiali)**: if enabled, the materials to be consumed are listed in the created scheduled orders. If the flag is not active, scheduled orders will still be created but without the materials inside;       
> **Resources Flag (Flag Risorse)**: if enabled, the processing phases are also listed in the created scheduled orders. If the flag is not active, scheduled orders will still be created but without the processing phases inside;            
> **Planned Purchase Orders Flag (Flag Ordini pianificati di acquisto)**: if enabled, planned purchase orders are considered in planning;    
> **Planned Production Orders Flag (Flag Ordini pianificati di produzione)**: if enabled, planned production orders are considered in planning;    
> **Planned Job Orders Flag (Flag Ordini pianificati di conto lavoro)**: if enabled, planned job orders are considered in planning;   

**For documents without necessary dates:**    
> **Supplier Orders and Purchase Requests (Ordini fornitori e richieste di acquisto)**: it is possible to decide not to consider items without a scheduled delivery date, or to consider the manually indicated delivery date in this section;    
> **Customer Orders (Ordini clienti)**: it is possible to decide not to consider items without a scheduled delivery date, or to consider the manually indicated delivery date in this section;    

**Consider availabilities coming from (Considera le disponibilità provenienti da)**:    
> **Purchases (Acquisti)**: if activated, the flag ensures that documents from the management area *Purchases* must be taken into account during the processing of the MRP procedure;   
> **Sales (Vendite)**: if activated, the flag ensures that documents from the management area *Sales* must be taken into account during the processing of the MRP procedure;    
> **Inventory (Magazzino)**: if activated, the flag ensures that documents from the management area *Inventory* must be taken into account during the processing of the MRP procedure;   
> **Job Order (Conto Lavoro)**: if activated, the flag ensures that documents from the management area *Job Order* must be taken into account during the processing of the MRP procedure;   
> **Planning (Pianificazione)**: if activated, the flag ensures that documents from the management area *Planning* (thus Production Jobs, Planned Purchase Orders, Job Orders, and/or Production) must be taken into account during the processing of the MRP procedure;   
> **Production (Produzione)**: if activated, the flag ensures that documents from the management area *Released Production* (thus Production Orders) must be taken into account during the processing of the MRP procedure;    

**Also consider alternative materials (Considera anche le alternative dei materiali)**: *IN DEVELOPMENT*    
**Also consider alternative phases (Considera anche le fasi alternative)**: *IN DEVELOPMENT*

**Reading BOM/Cycles (Lettura distinte/cicli)**:   
> **Version (Versione)**: indicates the default version to consider for BOM/cycles;   

**Consider quantities based on the economic lot (Considera le quantità in base al lotto economico)**: if activated, the flag ensures that the economic lot (i.e., the minimum quantity) of production or purchase is taken into account for the item;   
**Consider multiples of the economic lot (Considera i multipli del lotto economico)**: if activated, the flag ensures that the multiple of the economic lot of production or purchase is taken into account for the item;   
**Replenish minimum stock of the item (Reintegro scorta minima dell’articolo)**: if activated, the flag ensures that the minimum stock set in its registry, tab *Supply (Approvvigionamento)*, is replenished for the item;   
**Consider coverage index (Considera indice di copertura)**: if activated, the flag ensures that the coverage index set in its registry, tab *Supply (Approvvigionamento)*, is taken into account for the item; the coverage index is expressed in weeks and when indicated, it means that the system is instructed to cover the needs for the indicated weeks in this field;   
**Without suggestions (Senza suggerimenti)**: if active, the MRP does not make proposals for increasing, decreasing, cancelling, anticipating, and postponing the scheduled orders already created;   
**Consider past (Considera passato)**: if activated, for those documents with a scheduled delivery date past relative to the current date (today), availability is also considered in the past; if not active, all past documents (relative to today) will be considered with a scheduled delivery date of today;       
**Differentiate confirmed production demand (Differenzia domanda di produzione confermata)**: if active, the MRP is executed twice; the first execution only considers requirements coming from executive documents (areas: SCM - Purchases, SCS - Job Order, and MES - Production), generating scheduled orders if necessary, also valuing the "confirmed quantity" field (present in the scheduled order just created); this first execution generates the strictly necessary documents to satisfy the demand for more urgent documents, namely those executive ones. 
The second execution takes into account requirements coming from all documents including Production Jobs; this second execution generates missing documents without optimizing them with those generated in the first execution in order to allow them to be confirmed/released separately;       
**Consider items without a job (Considera articoli privi di commessa)**: if activated, during the processing of the MRP procedure, all items with a policy of predictive management and requirement (excluding those archived and/or fictitious) and with a policy of job management (only if the flag *Consider the item in MRP calculation (Considera l'articolo nel calcolo MRP)* is active in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) of the item), will be taken into account even if without a job;     
**Control requirements with generation of scheduled orders (Controllo fabbisogni con generazione ordini pianificati)**: allows you to choose whether to generate scheduled orders or not. If not active, only suggestions for creating scheduled orders are proposed; note that scheduled orders created by MRP do not have references to jobs;    
**Stock items (Articoli a scorta)**: takes all items that have a stock management policy in the MRP parameters of the item; moreover, in the MRP parameters, at least one of the minimum stock parameters and reorder point must be set;    
**Tolerance for loading C.d.L. (Tolleranza per l’occupazione dei C.d.L.)**: used in generating loading for the phases of planned production orders to define when the MRP should use an alternative work phase.      

### History (Storico)

In this tab, it is possible to filter and view the list of launched MRP procedures, with the indication of the user and the time they were executed.