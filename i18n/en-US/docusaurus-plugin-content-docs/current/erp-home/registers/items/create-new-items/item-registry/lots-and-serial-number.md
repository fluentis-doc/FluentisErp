---
title: Batches and Serial Number
sidebar_position: 17
---

:::important Purpose (A cosa serve)
The "Batches and Serial Number" tab in the Fluentis item registry allows for detailed management of materials through two variants: batch management and serial number management. Batch management enables the organization of items into homogeneous groups that can be either purchased or produced. Each batch is identified by a unique code that allows tracking its movements and stock levels, even in multi-warehouse scenarios. Within batch management, users can define the type of picking (FIFO, expiration date, or manual), select the type of batch code to define its coding. This management is crucial for sensitive items such as food and pharmaceuticals.

Alternatively, serial number management offers the possibility to track each individual piece through a unique serial number. This is particularly useful for high-value or critical items, where each unit requires precise monitoring. Available options include the method of generating the serial number (manual or automatic) and the time validity of the number itself.

This tab is therefore a crucial element for ensuring traceability, regulatory compliance, and efficient inventory management in the warehouse, thus helping to optimize corporate logistics.
:::

Items can be managed via Batches or Serial Numbers, and for each item code, subgroups can be created that can also be managed as batches or serial numbers.

Batches are groups of homogeneous quantities of items that enter the company (purchase batches) or that are produced within the company (production batches).

Each batch must be identifiable by a unique code, from which some information characterizing the batch itself can be retrieved. This code can be defined by the company in the **Batch code type** window, or in the case of purchase batches, the same batch code as that of the supplier can be maintained.

Each batch must therefore be traceable, and in the case of multiple warehouses, the batch code must allow tracking of stock data for each individual warehouse.

Inside this tab, parameters will be defined based on the type of management chosen for that specific item and which will be applied through the appropriate flags found at the beginning of this tab: **Managed with batches** and **Managed with serial number**.

### Batch Management (Gestione a lotti)

**Type of batch picking (Tipologia di prelievo del lotto)**: indicates whether the picking type is F.I.F.O., by expiration date, or manual (chosen by the operator);      
**Batch code type**: in this case, the batch code type (and the related characteristics set to create it) defined in the *Batch code type* window is selected, which is given by the concatenation of multiple fields;       
**Initial batch status (Stato iniziale lotto)**: usually, a single batch is also characterized by a status that defines its validity. For certain types of materials, particularly food and pharmaceuticals, the status is mandatory (for example, in pharmaceuticals, a batch requiring analysis before use will have an initial status of *in quarantine* until the analyses are complete); for these types of products, the status will be accompanied by an expiration date to prevent the sale and use of expired goods. Based on the status of the batch, it will be possible to choose to manage it with Rfid or unique Rfid;       
**Managed Rfid**: if activated, the item will be managed via RFID (radio frequency) technology through the application;       
**Unique Rfid**: if activated, the RFID code associated with the item is unique to the item;      
**Batch expiration types (Tipi di scadenza lotto)**: to select the type of expiration to attribute to the batch (if by expiration date, on the last day of the expiration month, on the first day of the expiration month);      
**Modify batch expiration date (Modifica data di scadenza del lotto)**: if activated, allows manual modification of the batch expiration date;      
**Advance batch blocking expressed in days (Anticipo blocco lotto espresso in giorni)**: the two fields **Block Notice (Avviso blocco)** and **Lock** allow expressing, in days, when to notify that this batch is about to be blocked and to establish the blocking date of the batch;      
**Single supplier batch (Lotto mono fornitore)**: if activated, indicates that only items from the same supplier will belong to that batch;     

Alternatively, you can choose to manage the item through **Serial Number Management (Gestione con Serial Number)**. In this case, a serial number is created for each piece that uniquely identifies that piece within the structure, allowing for tracking. This type of management is particularly suitable for items considered *critical* or of *high value* for which it is necessary to keep track of every moved piece and not just an entire quantity.

### Serial Number Management (Gestione con serial number)

**Serial Number code type**: to select the default type in the **Serial Number code type** table;      
**Validity days for the serial number (Giorni validità del serial number)**: to indicate how many days this code will be valid;      
**Generation of the serial number (Generazione del serial number)**: to establish the method of creating the serial number, whether manual or automatic; when set to automatic, it means that for all movements with a *load* reason and with the *Create serial number* flag active (on the reason itself), serial numbers will be created automatically at the batch entry.