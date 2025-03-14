---
title: New Goods Receipt (Nuovo Ricevimento merci)
sidebar_position: 3
---

The form opens through the path **Purchasing > Goods Receipt > Create Goods Receipt** or from the search filter of the Goods Receipt, by using the *New* button.

## *How to create a goods receipt*

<details>
 
<summary>Click for key steps</summary>
 
1. **Enter the mandatory data (Inserisci i dati obbligatori)**: *Type* and *Supplier*. *Year*, *Number*, and *Insert date* will be proposed automatically.  
 
2. **Enter or modify optional header data (Inserisci o modifica i dati facoltativi)**: such as delivery dates, any *Discounts*, the *Destination*, etc.  
 
3. **Enter the Articles (Inserisci gli Articoli)**: by double-clicking in the *Item code* field, the item help opens, allowing you to search and select an existing item. All other data in the line, such as *Units of Measure*, *Quantity*, *Price*, will be proposed automatically, but can be modified.
Alternatively, you can select *Not-Codified Item* as the *Line type* and manually enter the subsequent data.
 
4. **Enter any discounts or additional information (Inserisci eventuali sconti o altre informazioni aggiuntive)** in the *Discounts/Price Lists* and *Item data* tabs.
 
5. **Check the Summary section (Controlla la sezione dei Riepiloghi)** and enter any final expenses or discounts.  
 
6. Once the order has been checked and confirmed, **enter a *Confirmation date* and activate the *Printed* flag in the header** to make the document available for fulfillment procedures.
 
</details>

## **1. Mandatory Data (Dati obbligatori)**

To create the goods receipt, the user must enter the following data:

- **Supplier**: can be entered using the [field help (help di campo)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) or [manually (manualmente)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale).  
- **Document type**: pre-defined in the table [Goods Receipt Types (Tipi ricevimento merci)](/docs/configurations/tables/purchase/goods-receipt-types). This field determines the numbering range of the document being entered and automatically proposes the *Number* based on the entry date and the last entered number.   
- **Receipt number**: is proposed automatically based on the type, but can be modified manually while respecting the progression rule between date and number.  
- **Reception date**: the current date is proposed automatically, but it can be modified manually while respecting the progression rule between date and number.
- **Project**: located at the bottom of the article grid; represents the project to associate with the document and can be selected via the dedicated project help.

## **Items**

- **Line type** offers the possibility to select, from the combo box, items with different characteristics:
> - *Codified Item*: these are the items defined in the registry and can be accounted for in analytical accounting and recorded in inventory. <br />
> - *GiveAway Item*: is handled as either a defined or undefined item for tax and inventory purposes, but being a gift, it is counted separately in the document summaries, and based on the VAT Repayment flag, the VAT amount for the gift is calculated either charged to the entity or not.

:::note Note
If you start directly with entering the item, its class, code, and line type (*Codified Item* ) are automatically entered.
:::

- **Code**: refers to the barcode item code entered in the *Item Registry (Anagrafica articoli) > Barcode Code tab (tab Codice barcode)*.

- **Class/Code/Item Description (Classe/Codice/Descrizione articolo)**: can be entered manually or with the help of the field help which will show all relevant data entered in the Item Registry. After entering the item, its Description will be automatically retrieved from the registry. If the item has Variants, it will be possible to select the desired variant from the Item Data tab.

- **Supplier Item Code/Variant (Codice/Variente articolo fornitore)**: refers to the code that the supplier uses to identify the item and any variant; this data is proposed automatically if in the item registry, the *Preferred Suppliers tab (tab Fornitori preferenziali)* has been associated with a supplier item. 

- **Units of Measure**: the main unit of measure of the item is proposed, but if in the item registry alternative units of measure are defined, the user has the option to choose another.

- **Document quantity**: represents the quantity of the main U.M.; the quantity related to the fulfilled supplier order is entered, but it is not a required data.   

- **Received quantity**: represents the quantity actually received.  

- **Price**: represents the *price* in the supplier order if the receipt line has fulfilled a supplier order line, or the *last cost* from the item registry.

- **Order reference**: if the line has been created by fulfilling a supplier order line, the fulfilled order number is referenced.

- **Location**: if the reason has a default location, that location is proposed; otherwise, it can be entered [manually (manualmente)](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) if the warehouse is managed by locations.  

#### Specific Buttons 

> **Fulfillment from Order (Evasione da ordine)**: allows creating a goods receipt by fulfilling the lines of a supplier order using the [Fulfillment from Supplier Orders procedure (Evasione da ordini fornitori)](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/purchase-delivery-note).   
>
> **Packages management**: allows the opening of the management of returns for packing used in the purchase document. The button becomes active if the document is saved but not loaded.   
> By clicking this button, the corresponding form opens where you can enter the quantity, select the line, and execute the transfer of the selected packing to the article lines by clicking the *Execute* button. This form lists the items that have been entered with the nature *Packing* and that are present in the [Returnable Packings table (Imballi a rendere)](/docs/configurations/tables/logistics/package-to-be-returned).

### 2.1 Lots (Lotti)

In the two grids, lots and serial numbers that need to be loaded into the warehouse can be entered. 
If the item does not require management of [Lots and Serial Numbers (Lotti e Serial Number)](/docs/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number), this tab will be disabled.   

#### Specific Button 

> **Delete Batch**: allows deleting the selected lot line.

### 2.2 Item Data (Dati articolo)

This tab displays/contains additional information related to the item.

- **ITEM**: displays the selected item in the upper grid.   

- **Variant**: in this field, it is possible to select a variant of the item among those previously defined in the [Variants tab (Varianti)](/docs/erp-home/registers/items/create-new-items/item-registry/variants) of the item registry. If different prices and/or discounts have been entered for each variant in the price list, they will be updated when a different variant of the item is selected.   

- **Warehouse and Reason (Magazzino e causale)**: allows entering the warehouse and the corresponding reason to be used for loading the related items into the warehouse. If the article line has been taken from a purchase order, the warehouse and reason entered in the order will be proposed; otherwise, they can be entered manually for each article line. If the fields are not filled in, at the time of loading the goods receipt, those entered in the supplier order parameters will be used, tab [Loading (Carico)](/docs/configurations/parameters/purchase/purchase-orders-parameters#carico). 

- **Project**: represents the project to associate with the document. If a project has been entered in the header of the document, it will be reported on all article lines; alternatively, it can be selected via the dedicated project help.

- **Unit of Measure/Alternative Quantity (Unità di misura/Quantità alternativa)**: if an alternative unit of measure has been defined in the [item registry (anagrafica dell'articolo)](/docs/erp-home/registers/items/create-new-items/item-registry/alternative-um) with the *Default* flag and the flag *Automatic proposal of alternative U.M.* has been activated in Supplier Order Parameters, these values will be automatically proposed when entering the item.

### 2.3 Analytical (Analitica)

This can contain information on cost/profit centers on which the values of the items are distributed.   

This data can be entered manually or automatically (in case the cost/profit centers have been previously entered in the *Contact Registry (anagrafica contatto)*, *Item registry*, or in the *Chart of Accounts*).   

#### Specific Buttons

import DeleteCostCenter from './../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 2.4 Extra Data (Extra data)

import DocItemExtraData from './../../import/sections/doc-item-extradata.md'

<DocItemExtraData />