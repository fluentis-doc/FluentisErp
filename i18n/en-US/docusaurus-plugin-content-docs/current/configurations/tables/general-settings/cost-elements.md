---
title: Cost elements
sidebar_position: 44
---

The table allows for the insertion of new records or the search for existing ones to view, modify, or delete them.

### Cost Item Search (Ricerca Voci di costo)

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results in the results grid.

### Insertion of Cost elements (Inserimento Voci di costo)

To insert new codes, you must click on the first empty row in the grid or press the **New** button.

#### Specific Fields (Campi specifici)
    
**Code**: indicates the code of the cost item;      
**Description**: indicates the description of the cost item;      
**Cost Type (Tipo di costo)**: indicates the type of the cost item among *Direct costs*, *General costs*, and *Other Costs*;      
**Appl.on...**: indicates where this cost will be applied: 
> *Materials cost*: the cost is applied only to the cost of materials (applicable only to items with *Cost type* equal to *Direct costs*);    
> *Machine cost*: the cost is applied only to machine costs (applicable only to items with *Cost type* equal to *Direct costs*);     
> *Labour costs*: the cost is applied only to labor costs (applicable only to items with *Cost type* equal to *Direct costs*);    
> *Working cost*: the cost is applied only to processing costs (total of machine and labor costs) (applicable only to items with *Cost type* equal to *Direct costs*);     
> *Industrial cost*: the cost is applied only to the total cost of materials and processing costs (applicable only to items with *Cost type* equal to *Direct costs* or *General costs*);    
> *General cost*: the cost is applied to total general costs (applicable only to items with *Cost type* equal to *General costs*);     
> *Other Costs*: the cost is applied to total other costs (applicable only to items with *Cost type* equal to *Other Costs*);   

:::note Note
Cost items created with **Appl.on...** equal to *Materials cost*, *Machine cost*, *Labour costs*, *Working cost*, or *Industrial cost* will all be included in the section dedicated to **Direct costs**, while cost items created with **Appl.on...** equal to *General cost* or *Other Costs* will be included, respectively, in the section dedicated to **General costs** or **Other Costs** within the [Valuation (Valorizzazione)](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).
:::

**Percentage/Value**: indicates whether the cost item is of type: *percentage*, *fixed value*, or *variable value* (active only for cost items with **Appl.on...** = *Other Costs*). Specifically, the *percentage* is calculated based on the total cost indicated in the **Appl.on...** field; the *fixed value* is added to the total cost indicated in the **Appl.on...** field, while the *variable value* is multiplied by the quantity present in the management of *Other Costs* in costing.              
**Value**: indicates the default value of the cost item that will then be proposed automatically.     

For all details not described in this document regarding the common functioning of the forms, please refer to the following link [Common Functions, Buttons, and Fields (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).