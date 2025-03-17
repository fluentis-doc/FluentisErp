---
title: Planned Order Search (Ricerca Ordini Pianificati)
sidebar_position: 3
---

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Specific buttons (Pulsanti specifici)*:

> [MRP Parameters (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters): through this button you can open the screen related to the MRP parameters of the item;             
> [Bill of Materials (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies): allows you to open the screen related to the bill of materials of the item;  
> [Work Cycles (Cicli di lavoro)](/docs/erp-home/registers/production/routes/new-route): allows you to view the work cycle and the related production phases of the item.

*Specific fields (Campi specifici)*:

**Start Date (Data inizio)**: for planned purchase or job orders, it represents the date on which the purchase order that will be subsequently generated with the release of the order itself must be sent to the supplier. For planned production orders, this date represents the expected start date of the first processing phase of the article's cycle;  
**FOB Date (Data FOB)** (free on Board): represents the date calculated by adding the *Expected Start Date (Data di inizio previsto)* to the *Procurement Time (Tempo di Approvvigionamento)* entered in the [Preferred Suppliers (Fornitori Preferenziali)](/docs/erp-home/registers/items/create-new-items/item-registry/procurement) tab of the item in the planned order, and is managed only for items with procurement type *Purchase*;  
**ETA Date (Data ETA)** (Estimated Time of Arrival): represents the date calculated by adding the *FOB Date (Data FOB)* to the *Shipping Lead Time (Lead Time di Spedizione)* also entered in the *Preferred Suppliers (Fornitori Preferenziali)* tab of the item in the planned order, and is managed only for items with procurement type *Purchase*;      
**End Date (Data fine)**: for planned purchase or job orders, it represents the date by which the supply must be received and therefore will coincide with the expected receipt date of the line item of the supplier order that will be subsequently generated with the release of the order itself. For planned production orders, this date represents the expected end date of the last processing phase of the article's cycle;  
**From Minimum Availability (Da disponibilità minima)**: the flag is active only if the planned order has been generated using the *General Scheduling (Schedulazione generale)* procedure and if, in the [Scheduling Parameters (Parametri di Schedulazione)](/docs/planning/ms-master-scheduling/general-schedule), the flag that allows *Considering minimum availability during the period* is active. This flag activates when the *Minimum Availability Date (Data della disponibilità minima)* in the scheduling period is later than the requirement date; otherwise, it will be disabled;            
**Confirmed Quantity (Quantità confermata)**: is non-zero only if the order is generated from the MRP processing;  
**Committed Quantity (Quantità impegnata)**: is the quantity that is committed as of the current date for the item;  
**Critical (Tassativo)**: if active, the flag indicates that the planned production order is not movable concerning the start date set within it.

Within the grid, orders will be displayed in different colors based on the *Type of Planned Order (Tipo di ordine pianificato)* (whether for purchase, production, or job orders). This setting is provided within the [Material Requirements Parameters (Parametri fabbisogno dei materiali)](/docs/configurations/parameters/production/resource-requirements-parameters), in the corresponding grid where you can choose the background color of the row or the text of the different orders.

From this form, it is also possible to insert a new order by clicking on the button [Insert Order (Inserisci ordine)](/docs/planning/ms-master-scheduling/planned-orders/new-planned-order).