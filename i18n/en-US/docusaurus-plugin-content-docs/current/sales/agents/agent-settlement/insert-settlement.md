---
title: New Agent Settlement (Nuova Liquidazione agenti)
sidebar_position: 3
---
The form opens via the path *Sales > Agents > Agent Settlements > Search Agent Settlements* by clicking the **New** button.

## **Settlements**

Entering a settlement requires: 
- the agent who is the owner of the settlement (who must have the default payment type and solution in their registry), 
- the number and year are automatically filled in,
- the settlement date (the current date is proposed), 
- the description of the settlement (e.g., settlement for the first quarter of 2012), 
- the month/year of reference for ENASARCO calculation.

### 1.1 Summary (Riepilogativa)

This tab presents all the calculation elements of the commission.  

**Summary of commissions**: in this grid, the totals of the settled commissions are displayed, divided by currency. Below this, there are fields with the *Currency* of the settlement (proposed from the currency entered in the agent's registry), the *Exchange*, and the *Currency date* for the exchange; further down, the *VAT* to be applied to the taxable commission (also this proposed by default from the agent's registry) and the *Total document*.

**Withholding calculation summary**: the grid allows for the viewing of the amounts receivable considered as advances on the settlement in use, the *Type of Withholding (Tipo di ritenuta)* to apply (also this taken primarily from the agent's registry or agent category), the corresponding percentages, and the amounts for the withholding.

In case *Manual calculation* is set, it will be possible to force the data related to the withholding management section.

### 1.2 Payments (Pagamenti)

In this tab, the management system reports in **Payments list** the default payment settings inserted in the agent's registry, which are still modifiable.

In the **Maturities list** grid, the related deadlines are calculated: it should be noted that the amount of the deadlines must be manually aligned to the changes made to the settlement, corresponding these to the payment amount data.

#### Specific buttons 

> **Insert Payments**: sets the cursor to insert a new line within the payment types.  
> **Delete Payments**: executes the deletion of the selected payment settings.  
> **Insert Maturities**: sets the cursor to insert a new line within the settlement deadlines.  
> **Delete Maturities**: executes the deletion of the selected deadlines.

## **2. Invoices/Delivery Notes/Orders (Fatture/DDT/Ordini)**

Based on the *Document Type considered for the taxable commission* entered in the *Agent Registry (Anagrafica dell'agente)*, the second tab with the documents is displayed: Invoices, Delivery Notes, or Orders.

Within the upper grid, once the search is performed, the documents accounted for the calculation of the agent settlement in use are displayed.

Through the two management buttons: **Document Connection with Settlement** and **Delete Links to Settlement (Cancella collegamenti con la liquidazione)**, it is possible to manually add new documents to the settlement or remove them for insertion in a subsequent one.

#### Specific buttons 

> **Search**: performs the search for documents entered in the settlement in use.  
> **Document Connection with Settlement**: opens a search and manual insertion mask for documents in the settlement in use.  
> **Delete Links to Settlement (Cancella collegamenti con la liquidazione)**: removes the selected document from the settlement in use.