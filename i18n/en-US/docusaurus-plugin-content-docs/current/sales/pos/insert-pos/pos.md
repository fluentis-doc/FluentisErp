---
title: New POS (Nuovo POS)
sidebar_position: 2
---

The **Create POS** form opens via the path **Sales > POS > Create POS** or through the **New** button found in the *POS* search form.

## **1. Required Data (Dati obbligatori)**

In the data entry form, the **Date** and **Year** are automatically proposed as the current values but can be modified.

To continue creating the sales invoice, the user must enter the required fields:

- **Pos type** as specified in *Configuration > Tables > Sales > POS Types*.

- **Number**: each document is assigned a number according to the numbering specified by the user in the [POS Numbering](/docs/configurations/tables/fluentis-numerations) table and based on the document type that contains the numbering.

- **Account**: using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or typing [directly](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) the data.

:::danger[Attention (Attenzione)]
This field is not relevant for managing [**POS accounting**](/docs/sales/pos/pos-accounting). The accounting reason associated with POS accounting must define a **FIXED** customer account detailed with a **sub-account** code (for example, a "Customer revenues" account). The amount type on the reason line for the customer sub-account will be set as *Total Document / registration*.
:::

- **Register**: this is an alternative field to the previous *Account* that can be used to enter a *Contact* that is not matched to any sub-account.

### 1.1 Document Totals (Totali documento)

On the right side of the form, the document totals are present.

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

#### Specific Buttons (Pulsanti specifici)
> **Fiscal**: allows for the generation of the fiscal receipt by interfacing with a cash register (after configuring the connection using the specific fields).  
> **Unload POS**: allows for the POS download, if the warehouse and reason have been entered for each item.

## **Header**

After selecting the required data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

When entering the **Account**, all data specific to the **Header** tab is automatically *proposed*, according to the data previously set in the [contact registry (anagrafica contatto)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), in the fields corresponding to its address and in the *sections*:  

- **Currency**: [Currency](/docs/guide/common/glossary/glossary-intro#currency), [Exchange Rate (Cambio)](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Value Date (Data valuta)](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: [Country](/docs/guide/common/glossary/glossary-intro#country), [Language (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zone (Zona)](/docs/guide/common/glossary/glossary-intro#zone)
- **Delivery**: [Shipping](/docs/guide/common/glossary/glossary-intro#shipment), [Carriage (Porto)](/docs/guide/common/glossary/glossary-intro#carriage), [Packing (Imballo)](/docs/guide/common/glossary/glossary-intro#packing), [Price List (Listino)](/docs/guide/common/glossary/glossary-intro#sales-price-list) and its [validity range (intervallo di validità)](/docs/guide/common/glossary/glossary-intro#validity-date)

#### Other Fields (Altri campi)

- **Pos status**: during creation, the POS does not have any active flags. The section includes the fields:
> - **Printed** is activated when the printing of the receipt is launched.  
> - **Load** indicates that the POS has been manually downloaded from the warehouse or through the automatic download procedure.  
> - **Accounted**: is automatically selected when the POS is accounted for.  
> - **Cancelled**: the active flag allows the POS to be canceled.

:::note
The flags can be removed with the restore operation procedure.
:::

- **Our reference/Your reference (Nostro riferimento/vostro riferimento)**: in these fields, an internal reference and a customer reference are usually indicated for the POS in question.  

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

- **User**: allows for the entry of the user who creates the document. Employees have been previously entered in the *Employees* table located in the path *Home > Employees*. 

- **Project**: using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) you can link the document to a project.  
This association only works at the article header level.

### 2.1 Payments (Pagamenti)

The **Payment Terms** are automatically reported from the *Customer Registry > Payments tab* and can be modified/deleted by the user.

#### Specific Button (Pulsante specifico)

> **Delete Payments**: used to delete the selected payment lines.

### 2.2 Discounts (Sconti)

Only the predefined discounts fetched from the *Customer Registry > Discounts tab* are proposed and can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agents (Agenti)

Indicates the agent code and their commission for each article line. The code and percentage defined in the *Customer Registry > Agents tab* are proposed.

If the commission is not linked to the customer in their registry, the agent must still be inserted but with a NULL commission because if it were with a commission of 0, it would mean that the agent is associated but does not receive a commission.

The same section will be reapplied for each article line in the relevant *Agents* tab.

#### Specific Button (Pulsante specifico)

> **Delete agents**: allows for the deletion of selected agents.

## **Items**

In this tab, all items with their corresponding data are entered.

For everything not detailed in this document regarding the common functionality of the forms, please refer to the following link [Common Functions, Buttons, and Fields](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

To insert a **New Item** into the grid, simply position the cursor on the row to fill in the various data or use the **New** button in the ribbon bar.


### 3.1 Required Data (Dati obbligatori)

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Line type** offers the possibility to select items with different characteristics:

> - **Codified Item**: these are items coded in the registry and can be accounted in analytical accounting and registered in the warehouse; 
> - **Note Item**: this is a simple note, does not affect accounting and warehouse.
> - **GiveAway Item**: this type of line indicates that the item entered in that row will be a gift item, and therefore will have no cost to the customer;

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Variant from './../../../import/fields/item-variant.md'

<Variant />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Price including VAT**: represents the price with VAT and must be entered previously in *Item Registry > Costs tab* and can vary by warehouse;

- **VAT** and **Origin amount** are calculated automatically, taking values from the VAT inclusive price.

#### Specific Buttons (Pulsanti specifici)

import PackagesManagement from './../../../import/procedure/packages-management.md'
import UpdatePriceLists from './../../../import/buttons/update-price-lists.md'

> <PackagesManagement />
> <UpdatePriceLists />

### 3.2 Discounts/Price Lists (Sconti/Listini)

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.3 Item Details (Dettaglio articolo)

This tab contains additional information related to the item.

- **ITEM**: retrieves the information of the selected item in the item grid.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Project**: is the project associated with the document or can be assigned with the aid of the field help.

- **Brand**: represents the brand of the item, retrieved from its registry or from the item price list;

- **Sales Turnover**: the data entered in the *Item Registry > Generalities tab* is proposed.

If this is not present, no data is proposed, but at the time of accounting, the value entered in the *Default Counterparty Cost/Revenue* field of the *Customer Registry > Accounting Data > Administrative tab* will be considered.

- **Warehouse and Reason (Magazzino e causale)**: the warehouse and reason of reference are automatically proposed at the time of downloading the relevant items from the warehouse. The data is retrieved from the *POS Types* table.

- **Notes**: offers the ability to enter notes for each item.

### 3.4 Agents (Agenti)

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.5 Analytical (Analitica)

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

## **Summaries**

### 4.1 Final Item Discounts (Sconti finali articoli)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Final Expenses/Discounts/Increases (Spese/Sconti/Maggiorazioni finali)

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 VAT Summaries (Riepiloghi IVA)

The VAT summary of the document is proposed for each VAT code.

### 4.4 Summary of Deadlines (Riepilogo scadenze)

Represents the summary of deadlines of the document, for each *type* and *Payment Term*. 
 
- **Number**: progressive value of the line.  
- **Payment**: represents the alphanumeric code of the *Payment type* retrieved from the *Document Header > Payments tab*.  
- **Amount**: calculated amount of the deadline. It can be manually forced, in which case the subsequent flag *Manually edit* is automatically activated. (Automatic checks and warnings regarding the alignment between the deadline values and the total invoice will trigger).
- **Expiry date**: calculated due date. It can be manually forced, in which case the subsequent flag *Manually edit* is automatically activated.
- **Collection charges**: Field in which the calculated collection expenses are reported.
- **VAT**: to be applied to collection expenses (can also be set manually).
- **Payment Reason (Causale pagamento)**: it is possible to directly enter a accounting reason in the invoice that gives rise to an automatic entry of collection/payment. NB pay attention to the reason template because it will use the accounts present even without sub-accounts, which is why the following field is present.
- **Customer Account/Sub-account (Conto/sottoconto cliente)**: account used to collect/pay (cash or bank, for example) the deadline, overwriting the account present in the accounting payment (or collection) reason.