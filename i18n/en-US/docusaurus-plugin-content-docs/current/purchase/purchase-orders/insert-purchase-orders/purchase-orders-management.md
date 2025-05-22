---
title: New Purchase Order 
sidebar_position: 2
---

The form is located in the **Purchases > Purchase Orders** area and contains the details related to the products or services to be purchased, including quantities, prices, delivery terms, payment conditions, and other contractual specifications.

From the order search form, a new document can be created using the **New** button or an existing one can be opened to view and/or modify it.

## *How to create a Purchase Order*

<details>

<summary>Click to see the essential</summary>

1. **Insert the mandatory data**: *Order Type* and *Supplier*. *Year*, *Number*, and *Insert Date* will be proposed automatically.  

2. **Insert or modify optional header data**: such as delivery dates, any *discounts*, the *destination*, etc.  

3. **Insert the Items**: by double-clicking in the *Item Code* field, the item help will open, allowing you to search for and select an existing item. All other line data, such as *unit of measure*, *quantity*, and *price*, will be proposed automatically but can be modified. Alternatively, you can select as *Row Type* a *Non-codified item* and manually enter the subsequent data.

4. **Insert any discounts or additional information** in the *Discounts/Price lists* and *Item Data* tabs.

5. **Check the Summary section** and enter any final expenses or discounts.  

6. Once the order has been checked and confirmed, **enter a *Confirmation Date* and activate the *Printed* flag in the header** to make the order available for fulfillment procedures.

</details>
 
 

## **1. Mandatory Data**

To create the order, the user must enter the mandatory fields:

- **Order Type**: defaulted in *Configuration > Tables > Purchases > Purchase Order Types*. This field determines the numbering range of the document being entered and automatically proposes the Purchase Order number based on the entry date and the last inserted number. Also, if the *Order Type* has the flag [Automatic order confirmation](/docs/configurations/tables/purchase/purchase-orders-type) set, the order confirmation date is proposed equal to the order entry date;
- **Year**: the current year is entered automatically, but it can be manually modified while respecting the progression rule between date and number;
- **Number**: automatically proposed based on the type, but can be manually modified while respecting the progression rule between date and number;
- **Insert date**: the current date is automatically proposed, but can be manually modified while respecting the progression rule between date and number;
- **Supplier**: can be entered using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

## **2. Header** {#header}

Continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

:::note Remember 
If the document is *automatically created*, for example from the search filter of [**Sales Orders**](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders), from the [**Automatic Orders Generation**](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests), or from the [**Purchase Order Creation from Purchase Offer**](/docs/purchase/offer-request/procedures/order-creation) procedure, this data is retrieved from the *source document* from which it was generated.
:::

### 2.1 Supplier Data 

By entering the **Supplier**, all specific data from the **Header** tab are automatically proposed, according to the data previously set in the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in the fields corresponding to its address and in the sections:

- **Currency**: section containing the data on [Currency](/docs/configurations/tables/general-settings/currencies), [Exchange](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency date](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: section containing the data on [*Country*](/docs/guide/common/glossary/glossary-intro#country), [Language (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone).
- **Delivery**: section containing the data on [*Shipments*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Freight](/docs/guide/common/glossary/glossary-intro#carriage), [Packing (Imballo)](/docs/guide/common/glossary/glossary-intro#packing), default [price list](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) and its [validity range](/docs/guide/common/glossary/glossary-intro#validity-date).
- **Payments**: section containing the data on [*Payments*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Discounts*, *Destination*, and *Carrier*.

All these fields can be deleted or manually modified by the user.

### 2.2 Optional Header Data

- **Requested delivery date** and **Delivery date**: if set before entering the items in the order, they will also be reported on the individual article lines. Alternatively, it is sufficient to press the *Replace expected delivery date in lines* button in the ribbon bar to update the dates on the article lines.
- **Order confirmation date**: for *Order types* that have the flag [Automatic order confirmation](/docs/configurations/tables/purchase/purchase-orders-type). The current date is automatically entered at the time the order is created. To fulfill a Purchase Order, a *Confirmation date* must be entered.
- **Apply from**: it is the date of validity for the calculation of payment deadlines.
- **Supplier notes**: this field is retrieved from the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) but can also be entered manually.
- **Our/Your reference**: in these fields, an internal reference and a supplier reference for the document are usually indicated. If present, it is retrieved from the supplier registry; otherwise, it can be entered manually.    
In the event that the order is completed using the *Get from project* procedure, the information present in the corresponding fields of the purchasing job will be proposed in the *Supplier notes* and *Our/Your reference* fields. This transfer is valid only in the case of a Purchase Order created by retrieving data from a single source document.
- **Order initial note**: notes that have been previously entered can be selected in the table found under *Configuration > Utilities > Management of coded notes*. For this, the user must double-click the *Initial note* field to open the help for coded notes and select the data.
- **Project**: using the field help, the document can be linked to a [project](/docs/project-management/projects/search-projects-intro). This association only works at the article header level. The project is automatically entered if the Purchase Order arises from a document that contains it (e.g., from planned purchase orders).
- **Production job order**: using the field help, the document can be linked to a [production job](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders). If the order is created from the release of planned purchase orders, the job is automatically proposed.
- **Country**, *Language*, *Zone* are retrieved from the supplier's registry if present; otherwise, they can be entered manually.
- **User**: allows the user who creates the document to be entered. If the *Purchase Order Parameters* have the flag [Mandatory operator code](/docs/configurations/parameters/purchase/purchase-orders-parameters) active, it will be mandatory to enter the employee in this field to be able to save the order. [Employees](/docs/project-management/registers/employee/new-employee) must be entered in advance in the *Employees* table.
- **Shipments**, *Carriage*, and *Packing* are retrieved from the supplier's registry if present; otherwise, they can be manually entered.
- **Price list**: if the supplier's registry has a price list with the *Default* flag, it will be proposed in this field along with its validity dates.
- **Price lists to update**: if this flag is active, the related purchase price list is automatically updated during saving with the information of the article. This flag can also be modified at the article line level.
- **Point of Sale**: located under the *Shipments* menu and is managed only by the vertical concerning distribution chains. In the case of a Purchase Order created from the transfer of goods between stores of the same chain, this field displays the point of sale from which the goods originated.
- **Execution status**: When the order is fulfilled through a DDT or an invoice, its *Execution status* automatically changes from *Not executed* to *Partially executed* or *Closed*. The user can force the fulfillment of a not fully fulfilled order, and when this occurs, the fulfillment date is also saved in the *on date* field.

The following flags indicate the *status of the order*:
- **Printed**: this flag is automatically activated when the definitive *Print Report* is launched using the button located in the ribbon bar. Alternatively, it can be manually activated to fulfill the order in a DDT or an invoice;
- **Cancelled**: when the user wants to cancel a document instead of deleting it, the order is automatically forced as fulfilled in all its article lines;
- **Historicized**: when the user archives it.

#### Specific Buttons

> **Get from project**: calls the procedure to create a Purchase Order from a purchase job. It is activated by entering the supplier and the Purchase Order type. To fulfill the purchase job, it must be printed and confirmed.
> **Replace expected delivery date in lines**: allows, after specifying the *Requested delivery date* and/or the *Delivery date* in the header order, to replace these dates in bulk in the already entered article lines.

### 2.3 Payments 

The [Payment solutions](/docs/configurations/tables/general-settings/payment-terms) are automatically retrieved from the *Supplier Registry - Payments tab* and can be modified/deleted by the user.

If a [Payment Type](/docs/configurations/tables/general-settings/payment-types) is associated with a financial discount, the discount amount is considered only for accounting purposes, that is, in the deadlines of the document and not in the total DDT.

If the document originates from a job or a supplier's offer, the payment type is retrieved from the source document.

#### Specific Button 

**Delete Payments**: used to delete selected payment lines.

### 2.4 Discounts 

Only the predefined discounts retrieved from the *Supplier Registry > Discounts tab* are proposed. They can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Destination

The information entered in the *Supplier Registry > Deliveries tab* is proposed only if there are default data. The combo box proposes all recipients, destinations, and carriers entered in the supplier registry.

Shipping addresses (recipient/destination and carrier) can also be entered descriptively without being previously entered among the contacts.

### 2.6 Carrier 

In this field, the *Carrier* that will carry out the order shipping can be entered. If this has been entered in the *Supplier Registry > Deliveries tab*, it will be possible to select it from the dropdown menu in the second column. Alternatively, double-clicking in the third column (*Carrier*) allows selecting one of the company's contacts.

Optionally, the *Number plate* of the carrier and the *Transport Date/Time* can be added.

### 2.7 Extra Data 

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

### 2.8 Header Procedures - Project Fulfillment 

The procedure for retrieving articles from the project allows partially fulfilling the purchase job as well. All unfulfilled, forcibly fulfilled, and partially fulfilled jobs are proposed. To fulfill a purchase job, it must be *Printed* and have a *Confirmation date*.

Before proceeding with the fulfillment, the *Order Type* to be created and the *Supplier* must be entered in the document header. After that, pressing the **Get from project** button will open the form where it is possible to filter the jobs related to the document's supplier.

In the filter area, it is possible to choose whether to display the data in a Grid, a Hierarchical Structure, or both.

> - The **Hierarchical structure** allows for a clearer division of the various orders and the items contained in each, also facilitating the mass selection of items within a job.
> - The **Grid** allows for greater customization of the form by adding fields from *Object navigator*. In this case, mass selection must be performed using the keyboard keys and clicking the *Activate/Deactivate only selected lines* button in the ribbon bar.

Once all desired *Filters* are set, clicking the *Search* button will display below all printed, confirmed, and unfulfilled or partially fulfilled jobs.

:::important NOTE 
The procedure retrieves all data present in the job, and as a consequence, the purchase conditions present in the job will apply, even if they have currently changed.
:::

In the results grid, the user has the option to:

- Select all or some of the proposed items: to do this, simply select the flag present at the beginning of the article line. The Quantity to be fulfilled will be automatically set equal to the Remaining Quantity.
- Select some items for a partial quantity. In this case, the Quantity to be fulfilled must be modified.

To complete the procedure, click the Fulfillment button, which will retrieve all data present in the job and transfer it to the order.

#### Specific Buttons 

> **Search**: allows searching for purchasing jobs;
> **Execution**: allows transferring the selected items;
> **Select/Deselect all**: allows selecting/deselecting all items from the list;
> **Activate/Deactivate only selected lines**: useful especially for fulfillment via grid; allows activating/deactivating the flags of all selected lines.

## **3. Items** {#items}

In this tab, all items with their respective data are entered.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

To insert a new item into the grid, simply position oneself on the line to fill in the various data or use the *New Item* button present in the ribbon bar.

### 3.1 Mandatory Data 

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Line type**: offers the option to select, from the combo box, items with different characteristics:
> - *Codified Item*: are articles coded in the registry and can be recorded in analytical accounting and stocked in inventory. <br />
> - *Uncoded article*: are descriptive items that can be recorded in analytical accounting but cannot be moved in inventory. <br />
> - *Charge Item*: are coded or uncoded articles and are summarized distinctly in the document summaries; if the expense article is coded and of tax interest, it will be moved in inventory, if it is uncoded or not of tax interest, it will not move in inventory. <br />
> - *Note Item*: are descriptive notes reported in the document print; they do not affect accounting and inventory.

:::note Note 
If one directly starts entering the article, its class, code, and line type (*Codified Item*) are automatically inserted.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

In the absence of a price list, the proposed data can be retrieved from the *Latest cost* of the item registry, if the flag *Zero cost in absence of price lists* in [Purchase Order Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters) is not active.

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Amount**: is automatically calculated net of discounts.
- **Total discounts**: indicates the total amount of discounts present in the *Discounts/Price Lists* tab for each item line.

### 3.2 Optional Item Data 

- **Supplier article code/description**: in this section, you can add the code and description that the supplier uses to identify the article; this data is automatically proposed if a supplier article has been associated in the item's registry (tab [Preferred suppliers](/docs/erp-home/registers/items/create-new-item)).

- **Purchase turnover type**: the data entered in the tab [Generalities](/docs/erp-home/registers/items/create-new-item) of the item registry is proposed. If this is not present, no data is proposed, and at the time of invoice recording, the value entered in the *Default counterparty cost/revenue value* field of the contact registry will be considered.

- **Requested delivery date** and **Delivery date**: indicate the requested and expected delivery dates. They can propose the dates entered in the header tab or can be modified manually.

#### Specific Buttons 

> **Split Quantity in More Delivery Dates**: used to split the order line into multiple lines depending on the requested delivery. This procedure will open a new form in which the new *Requested delivery date* and the expected quantities for each date must be entered.
> **Packaging**: activates after the order is saved and allows creating a UDC starting from the selected line. The line must be a coded article and saved in the document. The user must have rights within [Loading/Unloading Parameters](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro/) for loading the pallet. Additionally, the article must be managed in UDC, and based on the settings of the UDC Type entered in the item registry, tab [Packaging](/docs/erp-home/registers/items/create-new-item) the UDC will be created according to the criteria.
> **Update price lists**: the *Update current price list* button allows updating the prices in the current price list for each selected item line;    
the *Create new price list with new validity* button, on the other hand, will open a pop-up to enter the validity dates of the new price list, which will only contain the selected lines and will be addressed to the supplier entered in the order.

:::note Remember 
When creating/updating a price list using this procedure, only the discounts manually entered in the order are included in the list.
:::

### 3.3 Discounts/Price Lists 

- **Price list**: the price list from which the article price was retrieved is proposed, with the validity start/end date and the special conditions (e.g., **Discount tier type**) assigned to the article in the price list.

- **Manual price**: automatically activates when the price of the article has been entered or manually modified.

- **Price lists to update**: if this flag is active, the price of the article is automatically updated in the corresponding purchase price list during saving.

- **Discounts**: all discounts associated with the article are proposed, each with its own calculation and assignment base.

#### Specific Button 

**Delete discounts**: allows deleting the selected discount from the corresponding grid.

### 3.4 Item Data {#items-data} 

Additional information related to the item is reported/inserted within this tab.

- **Variant**: in this field, it is possible to select a variant of the article from those previously coded in the tab [Variants](/docs/erp-home/registers/items/create-new-item) of the item registry. If different prices and/or discounts have been entered for each variant in the price list, they will be updated when a different variant of the article is selected.

- **Project**: represents the project to associate with the document. If a project has been entered in the document header, it will be reported on all article lines; alternatively, it can be selected via the appropriate project help.

- **Notes**: are the notes related to the article line and can also be entered through the help for coded notes. They will be reported in all generated documents.

- **Brand**: represents the article's brand, pulled from its registry or from the article's price list.

- **Production job order items**: if the Purchase Order is linked to a production job (via the release of a planned purchase order and creation of a Purchase Order from purchase request), the parent article contained in the job is reported in this field.

- **Offer Request**: if the order was created from a request for offer, via the procedure [Purchase Order Creation from Supplier Offer](/docs/purchase/offer-request/procedures/order-creation), the reference request is reported in this field.

- **Warehouse and reason**: the warehouse and the reference reason are automatically proposed which will appear at the time of loading the relevant items into inventory. The data are retrieved from the [Order Types](/docs/configurations/tables/purchase/purchase-orders-type), but can be manually modified for each article line.

- **Production Job Order**: if the Purchase Order was created from production planning, the reference production job is reported (see *Automatic Orders Generation*).

- **Alternative unit price**: if active, indicates that the price entered on the article line refers to the alternative unit of measure and not to the main one. This flag, along with the *Alternative Measurement Unit* and *Alternative quantity* fields, is visible only if the flag *Management of double UM* in [Purchase Order Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters/) is active.

- **Unit of measure/Alternative quantity**: if an alternative unit of measure has been coded in the [item registry](/docs/erp-home/registers/items/create-new-item) with the *Default* flag and the flag *Automatic proposal of alternative U.M.* in Purchase Order Parameters is active, these values will automatically be proposed when entering the article.

### 3.5 Analytical 

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Extra Data 

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Attached Documents 

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Value Section 

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

## **4. Summaries** {#summaries}

In the different sections of this tab, the main information of the entire document and some specific buttons are presented.

### 4.1 Final Discounts 

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Expenses 

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 VAT Summaries 

The VAT summary of the document is proposed for each VAT code.

### 4.4 Deadline Summaries 

This grid contains deadlines calculated based on the payment solutions types inserted.

### 4.5 Other Fields 

**Final notes**: is a descriptive field that can be filled in by the user, even with the help of the *Help for coded notes*.

### 4.6 Document Totals 

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />