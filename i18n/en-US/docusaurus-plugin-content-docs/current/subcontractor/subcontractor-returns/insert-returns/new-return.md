---
title: New Return 
sidebar_position: 1
---

Through this form, it is possible to manually create a new return for subcontracting or modify existing ones.

The form is opened via the path **Subcontractor > Returns > New Return** or through the **New** button found in the [Search Returns](/docs/subcontractor/subcontractor-returns/insert-returns/search-returns) form.

## **1. Mandatory data**

The application requires you to enter the **Supplier** holding the order, using the specific account help, the **Type**, the **Number**, and the **Return date** (which usually corresponds to the current date).

**Controled**: the flag is manually activated by the user;  
**Valorized and Loaded**: these are automatically activated when the valuation and registration of the document to the warehouse are carried out in the order.

> **Estimated returns**: the button is activated after saving the mandatory data and opens the *Fulfillment from Order* form, within which the user can see all the subcontracting orders that still have partially or completely unfulfilled lines and from which returns can therefore be generated;  
> **Returns Record**:

## **2. Header**

After selecting the mandatory data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), or, based on the data entered in the contractor registry, the application automatically fills in the fields *automatically*.

By entering the **Supplier**, all specific data from the **Header** tab will be *automatically proposed* according to the settings previously configured in the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in the fields corresponding to their address and in the *sections*:  

- **Currency**: [Currency](/docs/guide/common/glossary/glossary-intro#currency), [Exchange](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency date](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: [Country](/docs/guide/common/glossary/glossary-intro#country), [Language](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone)
- **Delivery**: [Shipping](/docs/guide/common/glossary/glossary-intro#shipment), [Carriage](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), [Price List](/docs/guide/common/glossary/glossary-intro#sales-price-list) and its [validity range](/docs/guide/common/glossary/glossary-intro#validity-date).

### 2.1 Payments 

The **Payment Terms** are automatically retrieved from the *Contractor Registry > Payments tab* and can be modified/deleted by the user.

#### Specific button

> **Delete Payments**: used to delete the selected payment lines.

### 2.2 Discounts 

Only the predefined discounts retrieved from the *Contractor Registry > Discounts tab* are proposed and can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

## Header procedure:

### *Execute from Order*

In this window, which opens using the *Estimated returns* button located on the ribbon bar, it is possible to filter subcontractors.

In the grid below, a row appears for each subcontractor that has not yet been fulfilled or has been partially fulfilled.  
The user, by double-clicking on the order row, has the ability to expand the lines that still need to be returned by the subcontractor, can select them or enter the quantity for each of them and press the *Transfer* button to transfer the quantities of the selected items to the grid in the *Items* tab of the work return.

#### Specific buttons 
> **Search orders**: allows applying search filters to the entire database of entered subcontractors that have not yet been fulfilled or have only been partially fulfilled;  
> **Transfer**: calls the procedure that transfers the selected items in the window below to the grid of the Returned Items tab of the work return;  
> **Forced Order Execution**: calls the procedure that allows the row of the subcontractor that the user is transferring to be forcefully marked as fulfilled;  
> **Select all**: allows selecting all rows present in the right section of the window where the items to be transferred appear.

### *Returns Record*

See details on the topic in the [Returns Record](/docs/subcontractor/subcontractor-returns/procedure/returns-record).

## **3. Items**

The form consists of a grid, within which the user can manually enter the returned items.

### 3.1 Data 

In this tab, information related to the selected row in the item grid is displayed, including:

**Prod. order**: this refers to the production order whose external phase generated the work order line that was fulfilled with the selected return line;

**Project**: this field displays the project linked to the return row. Usually, the project entered in the work order line from which the return row was generated is recalled;

**Weights**: the total Net Weight and Gross Weight of the item rows are reported. The weights from the item registry are multiplied by the row quantity.

### 3.2 Lots/SN 

In this tab, there is the option to set, for the selected row in the grid, the lots or serial numbers to be loaded into the warehouse with the returned item quantity in case multiple different lots are returned with the same return row. Depending on whether the item is managed by lots or by serial numbers, the corresponding grid of this tab will be activated.

:::note Note
The sum of the quantities of the various lots/serial numbers must exactly match the returned quantity of the item row.
:::

## **4. Materials**

In this tab, the materials that the subcontractor should have used to produce what has been entered in the *Items* tab are displayed. The proposed materials are defined in the Job Order Parameters, in the field **Data of suggested materials**.

The *Item* section contains the information of the selected row in the *Items* tab.

### 4.1 Materials

For each item displayed above, you can enter the materials and their details, or this data will be proposed.

#### Material Detail 

In this tab, the materials that have not been used by the subcontractor, either because they are in excess or discarded, are entered.

#### Specific Fields

**Warehouse**: in this column, the code of the Returns warehouse is displayed, taken from the job order parameters, automatically shown only if the returned quantity is entered on the material line, editable by the user;

**Template**: in this column, the code of the reason for the Returns loading is displayed, taken from the job order parameters, automatically shown only if the returned quantity is entered on the material line, editable by the user. If the materials not used by the user have been discarded, then the reason should not have a counterpart. If, however, the materials have been returned, then the reason must have a loading counterpart to indicate where to place the returned materials.

**Batch Load**: In the grid, the user can indicate which batches of materials have been used by the subcontractor. The displayed columns and the rules for using the grid are the same as those in the batch grid of the *Lots/SN* tab found in the *Items* tab.

## **5. Summaries**

The summaries present the main information of the entire document.

### 5.1 Final Discounts on Items 

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 5.2 Expenses 

The expenses entered in the contact registry are proposed in the tab *Charges/Discounts*. In this grid, any expenses should be entered as positive, and any discounts as negative.      

These elements are applied to the entirety of the document and are not distributed among the item lines. They can include additional costs, global discounts, or surcharges applied to the entire document. If set in the item registry, they will be automatically proposed when the document is created.

- **Type/Description**: allows you to choose the types of expenses (predefined in the table [Expense Types](/docs/configurations/tables/general-settings/expenses-types)), assigning to the type the percentage of expense to apply.  
- **Charge amount**: indicates the value of the expense expressed in the currency of the document.    
- **VAT**: indicates the VAT rate to be applied to the entered expenses.   
- **Percentage/Value**: indicates whether to calculate the expenses with a percentage or with a predefined monetary value. By selecting *Value*, the expense amount should be entered under the homonymous entry.      
- **Percent Completed**: numerical value of the expense percentage.  

:::note Note
If the *Charge type* entered has the [split](/docs/configurations/tables/general-settings/expenses-types) flag active, during the restocking process, the expense will be distributed across all items based on the total amounts of each item line. The result of the expense allocation is visible in the [warehouse record](/docs/logistics/warehouse/stock-records/record).    
1. If the items have a price: the total expense will be allocated proportionally to the net amounts of each item; the result will be added to the initial price of the item in the *Total amount* field of the record. If for some lines the amount is 0, it will be considered as 1 to allow an allocation of the expense across all items.   
2. If all items have a price of 0: the expense will be distributed equally among all item lines, and from this distribution, the *movement amount/operational amount* will be calculated in the record, taking into account the quantities of each item.   
:::

### 5.3 Document Totals 

**Items gross amount**: represents the sum of the values of all items;  
**On-account**: represents the value of any deposit received for the document;  
**Amount giveaway**: represents the amount of gift-type items entered in the *Items* tab;  
**Total discounts applied**: represents the total value of discounts applied to the items, excluding the final discounts;  
**Items net amount**: *Gross Amount of Items* – *Total Discounts Applied*;  
**Total final discounts**: represents the value of final discounts expressed as a percentage of the gross amount of items;  
**Net Amount of Final Discounts**: *Net Amount of Items* - *Total Final Discounts*;  
**Collection charges**: represents the sum of collection expenses entered in the *Charges* grid;  
**Stamp charges**: represents the sum of stamp duty expenses entered in the *Charges* grid;   
**Origin amount**: *Net Amount of Items* – *Final Discounts* + *Total Undocumented Expenses* + *Total Documented Expenses*;  
**VAT**: represents the sum of the values contained in the VAT summaries;  
**Total**: *Taxable Amount* + *VAT*.