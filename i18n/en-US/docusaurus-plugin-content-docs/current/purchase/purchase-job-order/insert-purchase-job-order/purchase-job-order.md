---
title: New Purchase Order 
sidebar_position: 1
---

The form is opened via the path **Purchases > Purchase Orders > New Purchase Order** or from the search filter for purchase orders, using the *New job order* button.

## *How to create a purchase invoice*

<details>
 
<summary>Click for the essential steps</summary>
 
1. **Enter the mandatory data**: *Type* and *Supplier*. *Year*, *Number*, and *Insert date* will be proposed automatically.  
 
2. **Enter or modify the optional header data**: such as delivery dates, any *Discounts*, the *Destination*, etc.  
 
3. **Enter the Items**: by double-clicking in the *Item code* field, the item help opens, allowing you to search for and select an existing item. All other line data, such as *Units of Measure*, *Quantity*, *Price*, will be proposed automatically, but can be modified. Alternatively, you can select *Not-Codified Item* as the *Line type* and manually enter the subsequent data.
 
4. **Enter any discounts or additional information** in the *Discounts/Price Lists* and *Item data* tabs.
 
5. **Check the Summaries section** and enter any final expenses or discounts.  
 
6. Once the order has been checked and confirmed, **enter a *Confirmation date* and activate the *Printed* flag in the header** to make the document available for fulfillment procedures.
 
</details>

## **1. Mandatory data**

To create a new purchase order, the user must enter the following data:

- **Supplier**: can be entered using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) or [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale).  
- **Job order type**: defaulted in the [Purchase Order Types table](/docs/configurations/tables/purchase/purchase-job-order-types). This field determines the range of numbering for the document being entered and automatically proposes the *Number* based on the entry date and the last number entered.   
- **Year/Entry date**: the current date is proposed automatically but can be modified manually.   
- **Number**: each document is assigned a number according to the numbering specified by the user in the [Numbering table](/docs/configurations/tables/fluentis-numerations). 
- **Internal number**: optional data; it is proposed to be the same as the previous field, but can be modified manually by entering a different alphanumeric code.

The form contains a series of tabs.

## **Header**

After selecting the mandatory data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo).

By entering the **Supplier**, all specific data from the **Header** tab is proposed automatically according to the data previously set in the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in the fields corresponding to its address and in the sections:

- **Currency**: section containing the [Currency](/docs/configurations/tables/general-settings/currencies), [Exchange rate](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency date](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Country**: section containing the [Country](/docs/guide/common/glossary/glossary-intro#country), [Language](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone).   
- **Delivery**: section containing the [Shipping](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Carriage](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), default [Price List (Listino)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) and its [Validity range](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Payments**: section containing the [Payments](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Discounts*, *Destination*, and *Carrier*.    

All these fields can be deleted or modified manually by the user.

#### Optional fields

> **Delivery**, *Carriage*, and *Packing* are taken from the supplier registry if present; otherwise, they can be entered manually.   
> **Price list**: if there is a price list in the supplier registry with the *Default* flag, it will be proposed in this field along with its validity dates.   

> **Estimated delivery date**: indicates the expected date for the delivery of the goods.      
> **Start/End date**: allows you to enter a start and end date for the order.   

> **Supplier notes**: this field is taken from the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) but can also be entered manually.   
> **Our/Your reference**: in these fields, an internal reference and a supplier reference for the document are usually indicated. If present, it is taken from the supplier registry; otherwise, it can be entered manually. This data will then be reported in the supplier order created through [Fulfillment from Project].   
> **Initial note**: you can select notes that were previously entered in the table located in the path *Configuration > Utilities > Management of Coded Notes*. To do this, the user must double-click the *Initial note* field to open Help for coded notes and select the data.   
> **Project**: using the field help, you can link the document to a [project](/docs/project-management/projects/search-projects-intro). This association only works at the header level of the item.   

> **Execution status**: when the order is fulfilled through a purchase order, its *Fulfillment status* automatically changes from *Not executed* to *Partially executed* or *Closed*. The user can force the fulfillment of an order that is not fully fulfilled, and when this happens, the **Execution date** is also saved in the respective field.   
> **Confirmation date**: allows you to enter the date on which the order was confirmed.     
> **Printed**: this flag is automatically activated when the Definitive Print is launched via the button located in the ribbon bar. Alternatively, it can be activated manually to allow for fulfillment.    
    
:::important Note
To fulfill a purchase order within a Supplier Order, it is necessary that the order has a *Confirmation date* entered and that the *Printed* flag is active.
:::

### 2.1 Payments 

The [Payment Solutions](/docs/configurations/tables/general-settings/payment-terms) are automatically retrieved from the *Supplier Registry > Payments tab (Anagrafica fornitore > tab Pagamenti)* and can be modified/deleted by the user.

If a [Payment Type](/docs/configurations/tables/general-settings/payment-types) is associated with a financial discount, the discount amount is considered only for accounting purposes in the document deadlines and not in the total DDT.

#### Specific button  

> **Delete payment**: used to delete the selected payment lines.


### 2.2 Discounts 
Only the predefined discounts taken from the *Supplier Registry > Discounts tab* are proposed. They can be modified or deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Destination

Here, the information entered in the *Supplier Registry > Deliveries tab* is proposed, only if there are default data available. The combo box offers all recipients, destinations, and carriers entered in the supplier registry.

Shipping addresses (recipient/destination and carrier) can also be entered descriptively without being previously entered among the contacts. 

### 2.4 Carrier 

In this field, the *Carrier* that will carry out the shipping of the order can be entered. If this has been entered in the *Supplier Registry > Deliveries tab*, it will be selectable from the dropdown menu of the second column; alternatively, a double-click on the third column (*Carrier*) will allow you to select one of the company’s contacts. 

Optionally, you can add the *Number plate* of the carrier and the *Transport Date/Time*.

### 2.5 Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **Items**

To insert a new item in the grid, simply position yourself on the line to fill in the various data or use the *New Item* button available in the ribbon bar.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

### 3.1 Mandatory data 

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Line type** allows you to select items with different characteristics from the combo box:
> - *Codified Item*: these are items coded in the registry and can be accounted for in analytical accounting and registered in the warehouse. <br />
> - *Non-coded item*: these are descriptive items that can be accounted for in analytical accounting but cannot be moved in the warehouse. <br />
> - *Charge Item*: these are coded or non-coded items and are summarized distinctly in document summaries; if the expense item is coded and of tax interest, it will be moved in the warehouse; if it is non-coded or not of tax interest, it will not be moved in the warehouse. <br />
> - *Note Item*: these are descriptive notes reported in the document print; they do not affect accounting and warehouse.

:::note Note
If you start directly by entering the item code, its class, description, and line type (*Codified Item*) are automatically entered.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

### 3.2 Non-mandatory data

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Price**:  the price is proposed from the price list entered in the contact registry; the reference price list for the item itself is displayed in the Data tab; the same document may contain items with prices taken from different price lists if multiple price lists are cascaded in the subject registry (see [Contact Registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). By double-clicking in the *Price list* field (located under *Projects*), the user has the opportunity to select a different price list from the default one, from which the price of the entered item will be taken. In the absence of the price list, the proposed data can be taken from the *Latest cost* of the item registry.   

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Purchase turnover type**: the data entered in the [Generalities tab](/docs/erp-home/registers/items/create-new-items/item-registry/generality) of the item registry is proposed. If this is not present, no data is proposed, and at the time of invoicing, the value entered in the *Default counter entry cost/revenue* field of the contact registry will be considered.

- **Forced executed**: by activating this flag, the item line will be marked as *Forced fulfilled* and will no longer be available for further fulfillments.   


### 3.3 Totals

- **Discounts**: all discounts associated with the item are proposed, each with its own calculation base and assignment.        

*Specific button*

> **Delete discounts**: allows you to delete the selected discount from the corresponding grid. 

### 3.4 Data

This tab contains additional information related to the item.

- **ITEM**: displays the item selected in the upper grid.

- **Variant**: in this field, you can select a variant of the item among those previously coded in the [Variants tab](/docs/erp-home/registers/items/create-new-items/item-registry/variants) of the item registry. If different prices and/or discounts have been entered for each variant in the price list, they will be updated when a different variant of the item is selected.   

- **Note**: these are notes related to the item line; they can also be entered through coded note help. They will be reported in all documents generated from this.

- **Warehouse and reason**: the reference warehouse and reason will be proposed, which will also be reported in the supplier order generated through *Project Fulfillment*. 

- **Project**: represents the project to be associated with the document. If a project has been entered in the document header, it will be reported on all item lines; alternatively, it can be selected via the appropriate project help.

- **Price list**: the price list from which the price of the item was taken is proposed, along with the validity start/end date and any particular conditions (e.g. **Discount tier type**) assigned to the item in the price list.

- **Manual price**: this activates automatically when the price of the item has been entered or modified manually.

- **Estimated delivery date**: allows indicating the date on which the delivery of the item is expected.   

- **Brand**: represents the brand of the item, taken from its registry or the price list of the item.

### 3.5 Values section

The section at the bottom right presents a summary of the costs contributing to the final price of each item selected in the item grid. The fields present are:

-    **Price**: the value of the Price field;
-    **Quantity**: the value of the Quantity field or Alternative Quantity, depending on the Alternative unit price flag;
-    **Line amount**: Item Price * Item Quantity;
-    **Total discounts**: the sum of the discounts of the item, including final discounts;
-    **Amount**: Gross Amount - Discounts;
-    **VAT**: Taxable * VAT rate of the item;
-    **Total**: Taxable + Tax.

## **Summaries**

In the different sections of this tab, the main information of the entire document and some specific buttons are presented.

### 4.1 Final Discounts 

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Expenses 

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Document Totals 

- **Final note-job order**: this is a descriptive field that can be filled in by the user with the help of *Help for coded notes*.  
- **Items gross amount**: represents the sum of the values of all items.  
- **On-account**: represents the value of any deposit received for the document.  
- **Amount giveaway**: represents the amount of gift-type items entered in the *Items* tab.  
- **Total discounts applied**: represents the total value of discounts applied to items, excluding final discounts.  
- **Items net amount**: *Items gross amount* – *Total discounts applied*.  
- **Final item discounts**: represents the value of final discounts expressed as a percentage of the gross amount of the items.  
- **Net Amount of Final Discounts**: *Items net amount* - *Total final discounts*.  
- **Total charges items**: represents the value of expenses entered in the previous tab as items of *Charge type*.  
- **Collection charges**: represents the sum of collection expenses entered in the *Charges* grid.  
- **Stamp charges**: represents the sum of stamp duty expenses entered in the *Charges* grid.  
- **Total Expenses/Discounts/Markup**: represents the total value of expenses entered in the *Charges* grid.  
- **Origin amount**: *Items net amount* – *Final discount* + *Total charges items* + *Total charges/discounts/incr.*.  
- **VAT**: represents the sum of the values contained in the VAT summaries.  
- **Total**: *Taxable* + *IVA*.  