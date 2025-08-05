---
title: New Subcontractor Order 
sidebar_position: 1
---

Through this form, it is possible to manually create a new Subcontractor or modify existing ones.

The form opens via the path **Subcontractor > Subcontractor Order > New Subcontractor Order** or through the **New** button located in the [Subcontractor Order Search Form](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/search-subcontractor-orders).

## **1. Mandatory data**

The application requires the user to enter the **Supplier** who is the header of the order, using the appropriate accounts help. Automatically, the current **Year**, **Number**, **Date**, and **Document type** (suggested to be the same as that entered in the *Subcontractor Parameters*), which can be modified by the user.

## **2. Header**

After selecting the mandatory data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), or based on the data entered in the subcontractor registry, the application will fill in the fields *automatically*.

### 2.1 Supplier data

By entering the **Supplier**, all specific data of the **Header** tab will be *proposed (proposti)* automatically, according to the data previously set in the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in the fields corresponding to its address and in the *sections (sezioni)*:  

- **Currency**: [Currency](/docs/guide/common/glossary/glossary-intro#currency), [Exchange](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency date](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: [Country](/docs/guide/common/glossary/glossary-intro#country), [Language](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone)
- **Delivery**: [Delivery](/docs/guide/common/glossary/glossary-intro#shipment), [Carriage](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), [Price list](/docs/guide/common/glossary/glossary-intro#sales-price-list), and its [validity range](/docs/guide/common/glossary/glossary-intro#validity-date).

### 2.2 Payments 

The **Payment Terms** are automatically reported from the *Subcontractor registry > Payments tab* and can be modified/deleted by the user.

*Specific button*

> **Delete Payments**: used to delete the selected payment lines.

### 2.3 Discounts 

Only the predefined discounts taken from the *Subcontractor registry > Discounts tab* are proposed and can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## **3. Items**

The form consists of a grid, within which the user can manually enter the products requested from the subcontractor. It is possible to enter coded items and notes.

It is already filled in if the order comes from *General Schedule* or *MRP Processing*, still leaving the user the option to modify it and/or add additional materials to the list of components of the planned order. It is noteworthy that if the planned order is for purchasing, the Materials tab is inactive.

### 3.1 Item Data 

In this tab, the information related to the selected line in the items grid is displayed, including:

**Working flow**: in this field, the flag from the article’s MRP parameters called *Working flow* is taken;  
**Quantity to be prod.**: quantity of the initial order communicated to the subcontractor;  
**Qty. already returned**: total quantity received and processed;  
**Expected date back**: date of arrival of processed goods;  
**Working note**: managed by the user. It can be parameterized, and sensitive system data can be reported, for example, the description of the work phase that generated the processing requirement;  
**Phase**: double-clicking opens a help on processing phases from which the related phase and sub-phase can be selected, and then the selected material can be assigned to a specific processing phase of the item;  
**Warehouse**: destination warehouse for the processed product;  
**Weights**: total Net Weight and Gross Weight of the item lines are reported. The weights from the item registry are multiplied by the line quantity.

## **3. Materials**

The form consists of two grids that display the materials to be sent to the subcontractor for processing and the materials that will be used upon the return of the processed product. It is possible to insert coded items, non-coded items, and notes. 

The materials sent and used can be managed by the operator, and in this case, it is necessary to enter the quantity, the possible processing price, the expected return date, and the material usage date. These data are already populated if the order originates from *General Schedule* or *MRP Processing*.

### 3.1 Materials to be delivered

**Item code**: indicates the material to be delivered for processing;  

:::note Note
In cases where the work order is generated by the release of a *Subcontracted planned order* or a *Production planned order* with one or more external phases, the materials to deliver will not be displayed if: the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) for the item do not exist, or the *Consider on Subcontractor* flag is not enabled in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), or if the *Pickup type* in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) is *Automatic*, or if in the [MRP Parameters](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) the *Pickup type* is *With List* and the WIP flag is not enabled.
:::

### 3.2 Materials to be used

**Item code**: indicates the material to be used upon the return of the processed product;  
**Unit Usage**: quantity to be used for each unit of the processed product's return, in case of automatic scheduling of bills of materials; this data is populated by the system;  
**Total Usage**: total quantity to be used for complete processing in case of automatic scheduling of bills of materials; this data is populated by the system;  
**% scrap**: quantity to be used in excess that results in scrap;  
**Expected Commitment Date**: based on this date, the system plans the availability of the requirement.

## **4. Summaries**

In the Summaries, the main information of the entire document is presented.

## Final Item Discounts

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 3.2 Expenses 

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 3.3 Document Totals 

**Items gross amount**: represents the sum of the values of all items;  
**On-account**: represents the value of any deposit received for the document;  
**Amount giveaway**: represents the amount of gift items entered in the *Items* tab;  
**Total discounts applied**: represents the total value of discounts applied to the items, but excluding final discounts;  
**Items net amount**: *Items gross amount* – *Total discounts applied*;  
**Total final discounts**: represents the value of final discounts expressed as a percentage of the gross amount of items;  
**Net amount of final discounts**: *Items net amount* - *Total final discounts*;  
**Collection charges**: represents the sum of the collection fees entered in the *Charges* grid;  
**Stamp charges**: represents the sum of the stamp duties entered in the *Charges* grid;   
**Origin amount**: *Items net amount* – *Final discounts* + *Total undocumented expenses* + *Total documented expenses*;  
**VAT**: represents the sum of the values contained in the VAT summaries;  
**Total**: *Origin amount* + *VAT*.