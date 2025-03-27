---
title: New Customer Order 
sidebar_position: 2
---

The form **Create Customer Order** opens through the path **Sales > Customer Orders > New Order** or via the button located in the [Customer Orders Search form](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

## *How to Create a Customer Order*

## **1. Required Data**

To continue creating the customer order, the user must enter the **required fields**:

- **Order Type**: defaulted in Configuration > Tables > Sales > [Order Types](/docs/configurations/tables/sales/sales-order-types); refer to the documentation related to the table for studying the various possible configurations, but to enter an order, it is necessary for the Order type to have defined the numbering type, which is a required field. Based on the configuration present in the Order type, different scenarios can be opened for entering the customer order, such as automatic project creation, price management including VAT, matrix management, etc.   
- **Number**: each document is assigned a number according to the numbering specified by the user in the [Customer Order Numbering](/docs/configurations/tables/fluentis-numerations) table and the document type that contains the numbering. The numbering associated with the order type generally provides for an automatic progression based on date and number, with a retrieval function that covers any gaps in the sequence (for example, caused by document deletions). This behavior is governed by two specific flags in the numbering table. If the user wishes to manually enter the number, they can disable the date-number progression flag (which guarantees incrementing the numbering in future dates) and the number retrieval flag. Additionally, they must enable the external numbering flag, signaling to the system that the numbering will be managed manually. 
- **Client**: using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or typing [directly](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection). By entering the customer, the following fields will be automatically populated, if present in the registry: currency, country, language, area, shipping, price list, and any discounts, payments, expenses, agents, destination, carriers, extra data.               
- **Order date**: indicates the date of creation of the order. This date is crucial for calculating deadlines and any payment terms. The current date is proposed, which can be modified; if the numbering provides for a date and number progression, and I enter a date in the past, Fluentis will check the availability of numbers on that date to ensure progression, and if not present, will inform the user that there are no numbers available on that date.      
- **Withholding-tax type**: this field is visible only if the customer manages the withholding tax, and therefore if in the registry it shows the same flag and the type of retention, in the [tax information](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) tab. The withholding tax is a tax deduction applied on payments for work or professional services, advanced to the tax authorities by the client and later deducted from the beneficiary's income tax. For the correct management of this functionality, the withholding type must be correctly coded in the withholding types table. The document will automatically retrieve the subject to withholding for the lines on which it is possible to make the calculation, and it will automatically calculate the withholding amount. 

The form contains a series of tabs.

## **Header**

After selecting the required data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection).

:::note Remember 
If the document is *automatically created*, this data is retrieved from the *originating document* from which it was generated.
:::

### 2.1 Customer Data 

By entering the **Client**, all specific data from the **Header** tab will be *automatically proposed*, according to the data previously set in the [customer registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), in the fields corresponding to its address and in the *sections*:

- **Currency**: section containing data on [Currency](/docs/guide/common/glossary/glossary-intro#currency), [Exchange Rate](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency Date](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: section containing data on [Country](/docs/guide/common/glossary/glossary-intro#country), [Language (Lingua)](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone).
- **Delivery**: section containing data on [Shipping](/docs/guide/common/glossary/glossary-intro#shipment), [Carriage](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), [Price List](/docs/guide/common/glossary/glossary-intro#sales-price-list) and its [validity range](/docs/guide/common/glossary/glossary-intro#validity-date).
- other fields proposed with the customer choice, but modifiable: [Destination](/docs/guide/common/glossary/glossary-intro#destination), [Recipient](/docs/guide/common/glossary/glossary-intro#recipient).

### 2.2 Optional Header Data 

- **Delivery date**: in this field, you can enter the expected delivery date of the goods.
- **Ready goods date**: in this field, you can enter the date when the goods will be ready; this date must be less than or equal to the previous one.      
- **Confirmed**: this flag indicates that the order is confirmed and can therefore be fulfilled; next to it is the **Confirmation date**; this condition is mandatory if you want to proceed with the order for potential fulfillment in subsequent documents (such as picking, DN, and invoices), as well as for potential management of production planning.        
- **Printed**: it activates when the order print is launched, indicating that the document has been printed; this flag is also important for allowing the fulfillment of the order in other documents.      
- **Archived**: this flag must be applied if the document must be archived.   
- **Cancelled**: the active flag allows you to cancel the order; the header status of the order will change to forcibly fulfilled, as the order will no longer be transferable to other documents.    
- **Unique Project Code/Reference Code**: if in the [tax information](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) of the customer registry it has been enabled for the management of CIG and CUP, it will be possible to fill in these data in the document.    
- **Customer note**: this field is retrieved from the customer registry but can also be entered manually.
- **Our reference/your reference**: in these fields, one usually indicates an internal reference and a customer reference for the document; if the order is generated through an automatic creation procedure, these fields will be populated with the indications present in the originating document. This transfer is valid only in the case of a customer order created by pulling data from a single document.     
- **Initial note**: you can select the notes that have been entered previously in the corresponding table found in *Configuration > Utilities > Management of coded notes*; for this, the user must double-click on the field to open the Help and select the data; otherwise, they can enter them manually.       
- **User**: allows you to enter the user who creates the document. Employees have been previously entered in the table *Home > Employees*; the data becomes mandatory if the option is set in the [Parameters](/docs/configurations/parameters/sales/sales-orders-parameters) of the document itself.     
- **Execution status**: when the order is fulfilled through the DN or invoices, its fulfillment state automatically changes from *Not executed* to *Partially executed* or *Closed*; the user can force the fulfillment of an order not fully fulfilled, and when this happens, the fulfillment date is also saved.      

:::note
If the *Forced Fulfillment state* is activated, the message will be displayed: “The forced fulfillment of the line leads to the automatic deletion of any planned orders linked to jobs in scheduled status and the fulfillment of jobs in scheduled and unchecked status. As for documents generated for jobs in launched or executive status, the jobs and documents will not be modified.”
:::

- **Apply from** is the start date for calculating payment deadlines.

#### Specific Buttons  
> **Get from project**: calls the procedure to create an order from a project.        
> **Replace previous delivery date in lines**: after specifying the requested delivery date and/or the expected delivery date in the order header, it is possible to batch replace these dates in the already entered item lines.           
> **Replace agent in lines**: this button opens a pop-up where you can enter an agent registry, which will be distributed across all article lines, possibly adding to already present Agents.         
> **Replace CIG/CUP in lines**: after specifying CIG and/or CUP in the order header, it is possible to batch replace these data in the already entered item lines.           
> **Help recipients/destinations**: this button opens the Help to choose the recipient/destination for the document, among those available for the customer and thus coded in their registry. 

The header also contains some tabs that we will analyze below.    

### 2.3 Payments 

The **Payment Terms** are automatically reported from the *Customer Registry > Payments tab* and can be modified/deleted by the user.

If the **Payment type** is associated with a financial discount, the discount amount is considered only for accounting purposes, i.e., in the deadlines of the document and not in the total.

The specific button of this tab is **Delete Payments**, used to delete the selected payment lines.

### 2.4 Discounts 

Only the predefined discounts retrieved from the *Customer Registry > Discounts tab* are proposed and not those assigned to payment conditions or certain items. They can be modified/deleted by the user.
  
The discounts proposed in the header of the document are carried over to every new item line inserted in the document.

If after entering the item lines a new discount is entered in the header, this will not be replicated in the already entered item lines.

The specific button of this tab is **Delete discounts**, used to delete the selected discount lines.

### 2.5 Agents

Indicates the agent code and their commission for each item line. The code and percentage defined in the *Customer Registry > Agents tab* are proposed.

If the commission is not linked to the customer in their registry, the agent must still be entered but with a NULL commission, because if it were with a commission of 0, it would mean that the agent is linked to the agent but does not receive any commission.

In case of generating the DN from the order, this data will naturally be carried over as the same as that of the customer order.

The same section will be repeated for each item line in the respective Agents tab.

The specific button of this mask is **Delete agents**, which allows you to delete the selected agents.

### 2.6 Destination 

Here, the information entered in the *Customer Registry > Deliveries tab* is proposed, only if default data exists. The combo box offers all recipients, destinations, and carriers entered in the customer registry.

Shipping addresses (recipient/destination and carrier) can also be entered descriptively without being previously entered among the contacts. 

If this default data has not been entered in the registry, then the recipient and destination will be proposed as the address entered in the registry data. 

### 2.7 Carriers (Vettori)

In the Carriers section, the data entered in the [Delivery tab](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) of the customer registry is proposed. In particular, the party responsible for the transport is proposed, between sender, recipient, and carrier. Based on the selection, the section below will change; if the transport is covered by the Sender, it will be possible to enter Vehicle License Plate, Start Transport Date and Time, and the company's address will be proposed; if it is covered by the Recipient, it will be possible to enter Vehicle License Plate, Start Transport Date and Time, with the destination proposed; if it is covered by the Carrier, the available fields will be Carrier Accounting Registry, License Plate, Transport Date, and Time.

### 2.8 Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

### 2.9 Co-owners 

This tab is active only if the customer registry, [tax information tab](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information), has the co-ownership management flag inserted. The co-ownership management allows multiple people to be joint holders of the order. Co-owners must be entered in the alternative addresses of the registry, with an address that is of [type](/docs/configurations/tables/general-settings/address-types), indeed, co-owners. In this way, they will be proposed in this tab, where it is necessary to manually enter the percentages of expense sharing.

## **Grouped items**

This tab is active and visible only for [Order Types](/docs/configurations/tables/sales/sales-order-types) that have set the *Extra Data Matrix Management* flag and the related *Configuration*. This tab allows the generation of item variants for the various valid attribute combinations, which will be transferred to the subsequent *Items* tab.      
For all the fields not explained on this page, you can refer to the documentation of the *Items* tab.       
By entering a [matrix-managed item](/docs/erp-home/registers/items/create-new-item) in the item grid, indeed, in the *Matrices* tab, the matrix associated with the item registry will be displayed. In the cells of the matrix, it will be possible to input the ordered quantities for each combination; only the cells that have a valid combination in the registry can be filled.       
Once quantities are entered for each combination, it is necessary to click the *Confirm stub values* button on the toolbar to generate as many variants as there are possible combinations. Each variant will populate a row in the subsequent *Items* tab, with the corresponding quantity.

## **Items**

This tab includes all items with their corresponding data.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

To insert a **New Item** into the grid, simply position yourself on the row to fill in the various data or use the **New** button present in the ribbon bar.

Below we analyze the *required* fields present in the main grid:
- **Line**: this field contains the row number and will automatically fill and progress as data is entered in the row.

- **Line type**: offers the possibility to select, from the combo box, items with different characteristics:
>- *Codified Item*: these are items coded in the registry and can be accounted for in analytical accounting and registered in the warehouse.
>- *Uncoded Item*: these are descriptive items that can be accounted for in analytical accounting but cannot be moved in the warehouse.
>- *Charge Item*: these are coded or uncoded items that are summarized distinctly in the document summaries; if the expense item is coded and of fiscal interest, it will be moved in the warehouse; if it is uncoded or not of fiscal interest it will not be moved in the warehouse.
>- *Note Item*: these are descriptive notes reported in the document print; they do not affect accounting and the warehouse.
>- *GiveAway Item*: the free gift item is managed as a coded or uncoded item for tax and warehouse purposes, but as it is a free gift, it is counted separately in the document summaries and based on the VAT recovery flag, the VAT amount of the free gift is calculated to be borne by the subject or not.

:::note[NOTE]
If you start directly with the item entry, its class, code, and row type - Coded item will be entered automatically.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import ItemUM from './../../../import/fields/item-um.md'

<ItemUM />

import ItemQuantity from './../../../import/fields/item-quantity.md'

<ItemQuantity />

import ItemPrice from './../../../import/fields/item-price.md'

<ItemPrice />

:::note[NOTE]
In the absence of the price list, the proposed data is the **Sales price** taken from the *Item Registry > [Costs](/docs/erp-home/registers/items/create-new-item) tab* or will be retrieved based on the document parameter settings. In the absence of this data, the price 0 will be reported.
:::

- **Origin amount**: this field contains the Unit Price multiplied by the quantity, net of discounts.

- **Item discounts**: contains the valid discounts for the item, coming from the header, price list, or manual input.

- **Item final discounts**: contains the final item discounts allocated in the document summaries, which have the characteristic of being spread across all items.   

import ItemVat from './../../../import/fields/item-vat.md'

<ItemVat />

#### Non-Mandatory Fields 

- **Barcode/Customer Item and Customer Item Description**: this data will be retrieved from the information present in the *Items register*; to manage Barcodes it is necessary to activate their management in the [Customer Order Parameters](/docs/configurations/parameters/sales/sales-orders-parameters). This column allows the proposal of the item by searching for it by its barcode. Being unique, once the barcode entered in the item registry is typed, the item will be proposed.   

- **Sales Turnover**: the data entered in the *Item Registry > Generalities tab* is proposed; if it is not retrieved, it must be entered by choosing an item from the proposed combo; otherwise, the lack of this data could cause errors in the accounting of the invoice that will be generated from the order, if in *Customer Registry > Accounting Data > Administrative tab* no value has been set in the *Default Counterpart Revenue* field.

- **Forced Fulfillment**: if active, this flag indicates that the item line has been forcibly fulfilled: because the customer no longer wants that item, or the quantity produced and shipped is less than the ordered quantity, but the balance will not be produced, and thus the quantity will be forcibly fulfilled. 

:::note[NOTE]
If production is managed, when this flag is activated, a message is shown warning the user: “The forced fulfillment of the line leads to the automatic deletion of any planned orders linked to jobs in scheduled status and the fulfillment of jobs in scheduled and unchecked status." Regarding documents generated for jobs in launched or executive status, the jobs and documents will not be modified.     
:::

- **Goods Ready Date and Delivery Date**: these dates indicate when the material will be ready (when the production will be completed) and when the material is expected to be delivered; the Goods Ready Date must be less than or equal to the Delivery Date.

In the Items section, the following buttons are present in the toolbar: 

> **Bill of Materials**: allows you to open the bill of materials of the selected item to view the details; (for more information on this topic, please refer to the article on the Bill of Materials and structure management).  
> **Explode First Level Bill**: allows you to add materials (raw materials and semi-finished products) present in the bill of materials of the item to the customer order; thus the first level components of the finished product will be reported in the order. This option is particularly used for Kit products (composed of multiple parts).  
> **Update price lists**: allows you to update the price of the item in an existing price list (save the document to enable these buttons) or to create a new price list with the item and the selected price.       
> **Split Quantity into Multiple Deliveries**: allows you to split the quantity of an item line into multiple lines based on delivery dates. By selecting the row and clicking the button, the **Various deliveries** form will open, within which the *Ready goods date*, the *Delivery date*, and the *Quantity* of the line will be reported. In the next row, you should indicate the *Ready goods date* (which should be the same), the *Delivery Date* which will be different, and the *Quantity* to be shipped on that date and then you will need to modify the date in the first row, updating it to the remaining quantity so that the sum of the quantities of the two rows results in the initial quantity of the row before splitting. Confirm the operation with the *OK* button.  
> **Packaging**: allows you to create a UDC starting from the selected row. The row must be a coded item and saved in the document. The user must have the rights within the [Loading/Unloading Parameters](/docs/configurations/parameters/logistics/load-unload-parameters/load-unload-parameters-intro) for loading the pallet. Moreover, the item must be managed as UDC and based on the settings of the UDC Type specified in the item registry, tab [Packaging](/docs/erp-home/registers/items/create-new-item), the UDC will be created respecting the criteria.      

At this point, let’s analyze the tabs present under the items grid. 

### 3.b.1 Discounts/Price Lists

This tab has as its first field the eventual **Price list** valid for the customer and connected to the item; otherwise it is a field that can be manually filled to take the price of the item from a specific price list. Next to the assigned price list data, the **Bracket type** field is present: it reports the discount tier to be used, which is retrieved from the customer registry or from the price list itself.
The **Manual price** allows manually modifying the price and discounts and keeping them in the documents created from the document where the modification has been made.

In the grid, all discounts associated with the item are proposed, each with its own calculation basis and assignment. Discounts can be retrieved: from the customer registry, from the payment solution assigned to the document, from the price list from the list-price association. All proposed data are modifiable.

From this grid, you can use the **Delete Discounts** button in the toolbar. 

### 3.b.2 Item Data 

Within this tab, additional information related to the item is reported/entered.

import ItemVariant from './../../../import/fields/item-variant.md'

<ItemVariant />

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Warehouse/Description/Reason**: in these fields, the discharge warehouse for the material must be indicated with the corresponding reason necessary for the goods to be discharged at the time of the DN or invoice issuance; this data is set in the table of [Order Types](/docs/configurations/tables/sales/sales-order-types).

- **Project**: this is the project associated with the document; this can be assigned, in the case of the customer order, using the *Fulfillment from Job* procedure or can be assigned with the help of the field help.

- **VAT recourse**: if set, the VAT of the free gift is considered for the total document.

- **Offer**: refers to the customer offer if the order comes from an [Offer](/docs/sales/offers/search-offers).

- **Brand**: represents the brand of the item, retrieved from its registry or from the price list of the item;

- **Notes**: offers the possibility to enter notes for each item that you want to be reported in all documents.  

### 3.b.3 Agents 

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.b.4 Lots and Serial Numbers

In the two grids, lots and serial numbers that must be discharged from the warehouse and are linked to the item in the *Item Registry > [Lots and Serial Numbers tab](/docs/erp-home/registers/items/create-new-item) tab* can either be inserted manually.

This operation is conditioned by the presence of lots and serial numbers in the warehouse. 

If the item does not provide for the management of Lots/Serial Numbers, this tab will be disabled.  

#### Specific Buttons

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.b.5 Analytical 

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.b.6 Extra Data 

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.b.7 Attached Documents 

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.b.8 Matrices 

This tab is displayed exclusively for the [Order Types](/docs/configurations/tables/sales/sales-order-types) that have the Extra Data matrix management flag enabled. 

### 3.b.9 Value Section

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

The **State** field at the top of this section reports the situation of the item in the potential production cycle and updates automatically based on the state of the linked job.
The item can have the following statuses:
- *Inserted* when the item is entered;
- *Confirmed* when the order is confirmed, with the relevant flags and date in the header; 
- *On production* when the job is generated, through the procedure of [Production Job Generation](/docs/planning/ms-master-scheduling/general-schedule) or automatically if the order type provides for it; 
- *Product* if the linked job is in fulfilled status;
- *Cancelled* if the item is forcibly fulfilled. 

## **Summaries**

In the various sections of this tab, the main information of the entire document and some specific buttons are presented.

### 4.1 Final Discounts

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Agent Commission Summary 

In this grid, the total commissions accrued by the agent for this order are summarized, in case there is an agent linked. The agent and the accrued commission value will be indicated.

### 4.3 Final Expenses/Discounts/Markups 

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.4 VAT Summaries 

The VAT summary of the document is proposed, for each VAT code.

### 4.5 Due Date Summary 

In this grid, the deadlines calculated based on the solutions of the payment types entered are reported. 

### 4.6 Other Fields 

**Final notes**: is a descriptive field that can be filled in by the user, also with the help of the *Help for coded notes*. Additional notes can be entered for the customer regarding, for example, the delivery, which will then be reported in the printout of the Order Confirmation at the end of the printout.

### 4.7 Document Totals 

In the right section of this tab, the document summaries can be consulted:       

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **Linked documents**

In this tab, it is possible to consult the attached documents.
To attach documents, you can proceed in two ways:
- using the **Documents** button on the toolbar, you can choose to attach a document already coded in Fluentis or to create a new Document to attach.       
- by directly using the right mouse button in the grid and selecting *Attach a file*, you will create a new Document to attach.