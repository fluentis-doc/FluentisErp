---
title: New Sales
sidebar_position: 2
---

The form **Create Sales DN** opens via the path **Sales > DN > Create Sales DN** or by using the button **New** found in the [Sales DN Search](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) form.

## *How to create a Sales DN*

<details>
 
<summary>Click for key steps</summary>
 
1. **Enter the mandatory data**: *Order Type* and *Client*. *Year*, *Number*, and *Insert date* will be proposed automatically.  
 
2. **Enter or modify optional header data**: such as delivery dates, any *Discounts*, the *Destination*, etc.  
 
3. **Enter the Items**: by double-clicking in the *Item code* field, the item help will open, allowing you to search and select an existing item. All other line data, such as *Units of Measure*, *Quantity*, *Price*, will be proposed automatically, but can be modified. Alternatively, you can select as *Line type* an *Not-Codified Item* and manually enter the subsequent data.
 
4. **Enter any discounts or additional information** in the *Discounts/Price Lists* and *Item data* tabs.
 
5. **Check the Summary section** and enter any final fees or discounts.  
 
6. Once the order is checked and confirmed, **enter a *Confirmation date* and activate the *Printed* flag in the header** to make the order available for fulfillment procedures.
 
</details>

## **1. Mandatory Data**

To continue creating the Sales DN, the user must enter the required fields:
- **Delivery note type**: default set in *Configuration > Tables > Sales > [DN Types](/docs/configurations/tables/sales/delivery-notes-type)*.
- **Number**: each document is assigned a number according to the numbering specified by the user and the type of document that contains the numbering. The numbering associated with the DN type generally includes an automatic progression based on date and number, with a retrieval function that covers any gaps in the sequence (for example, caused by the deletion of documents). This behavior is regulated by two specific flags in the numbering table. If the user wishes to manually enter the number, they can disable the date-number progression flag (which ensures the increment of numbering on future dates) and the number retrieval flag. Furthermore, they will need to enable the external numbering flag, indicating to the system that the numbering will be managed manually.    
- **Client**: can be typed using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), typing it [directly](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), or using the automatic procedure if they choose to create documents via the [DN Fulfillment from Customer Order](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn). Upon entering the customer, the following fields, if present in the registry, will be automatically populated, which we will explain in the following sections: currency, country, language, region, shipping, price list, any discounts, payments, fees, agents, destination, carriers, extra data.               
- **Date**: indicates the creation date of the DN. This date is crucial for calculating deadlines and any payment conditions. The current date is proposed, which can be modified; if the numbering requires a progression of date and number, and a past date is entered, Fluentis will check the availability of numbers on that date to ensure progression, and if not present, will notify the user that there are no available numbers on that date. 

The form contains a series of tabs.

## **Header**

After selecting the mandatory data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection); alternatively, depending on the procedures chosen, the application automatically fills in the fields.

:::note Remember 
If the document is *created automatically*, these data will be retrieved from the *origin document* from which it was generated.
:::

Entering the **Customer**, all specific data of the **Header** tab are automatically *proposed* according to the data previously set in the [customer registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), in the fields corresponding to their address and in the *sections*:  
- **Currency**: section containing [Currency](/docs/guide/common/glossary/glossary-intro#currency), [Exchange rate](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Value date](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: section containing [Country](/docs/guide/common/glossary/glossary-intro#country), [Language](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone).
- **Delivery**: section containing [Shipping](/docs/guide/common/glossary/glossary-intro#shipment), [Carriage](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), [Price List](/docs/guide/common/glossary/glossary-intro#sales-price-list) (in the document header the price list entered in the customer registry with the Default flag will be inserted) with the discount type and its [validity date](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Other header fields 

- **Printed**: activated when the document is printed, indicating that the document has been printed; this flag is also important for allowing the fulfillment of the DN in other documents.      
- **Unloaded**: this flag is automatically activated when the document is moved to the warehouse, either with the *Automatic unload* button on the toolbar or with the available procedures.     
- **Valorized**: this flag is activated when the DN is valued in the invoice.   
- **Partial Valorized**: this flag indicates that the DN has been partially valued in the invoice. 
- **Forced Valorized**: this flag is activated if the DN has been forcefully closed with the forced fulfillment of the items; for example, when the remainder will not be delivered and the document is considered closed even if it would not be.
- **Cancelled**: the active flag allows the order to be canceled.      

:::note
Flags can be removed with the operation recovery procedures.
:::

- **Unique Project Code/Identifying Code for Bid**: if in the [fiscal information](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) of the customer registry it is enabled for management of CIG and CUP, it will be possible to fill in these details in the document.    
- **Customer note**: this field is retrieved from the order that created the DN, but can also be entered manually.
- **Our Reference/Your Reference**: in these fields usually an internal reference and a customer reference for the document is indicated; if the DN is generated through an automatic creation procedure, these fields will be populated with the indications present in the origin document (this transfer is valid only for DN created by retrieving data from a single origin document).   
- **Reference to Customer Order Number**: this field automatically inserts the order from which the DN originates.
- **Reference to Customer Order Date**: this field automatically inserts the date of the order from which the DN originates; together with the previous field, it creates the data necessary for tag 2.1.2 of the electronic invoice xml file when it is created; if not filled, the Your Reference field will be taken instead.     
- **D.N. initial note**: you can select the notes that have been previously entered in the homonymous table found in the path *Configuration > Utilities > Management of Coded Notes*; for this, the user must double-click the field to open the Help and select the data; otherwise, they can enter them manually.       
- **Project**: it is possible to associate a project with the document.    
- **User**: allows you to enter the user creating the document. Employees were previously entered in the *Home > Employees* table; this data becomes mandatory if the option is set in the [Document Parameters](/docs/configurations/parameters/sales/dn-parameters).     
- **Execution status**: when the order is fulfilled through DN or invoices, its fulfillment status changes automatically from *Not executed* to *Partially executed* or *Closed*; the user can force the fulfillment of an order not fully fulfilled, and when this happens, the fulfillment date is also saved.
- **Apply from** is the date for calculating payment deadlines.      
- **Audit Trail**: as in all documents, this section shows the document creation date with the operator, and the last modification date of the document with the operator.   

#### Specific buttons 

> [Fulfillment from Orders](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (see the relevant documentation).    
> [Automatic Shipment](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn) (see the relevant documentation)   
> **Help recipients/destinations**: this button opens Help to select the recipient/destination for the document, among those available for the customer and thus coded in their registry.      
> **Insert AgentAccount in the Items rows**: this button opens a pop-up in which to insert an agent registry, which will be spread across all item lines, optionally adding to already present Agents.           
> **Replace CIG/CUP in Lines**: after specifying CIG and/or CUP in the header, it is possible to replace these data in bulk in the already entered item lines.      
> **Cancel**: deletes the selected discounts in the *Discounts* tab of the Header.

In the header, there are also some tabs that we analyze below. 

### 2.1 Payments 

The **Payment Terms** are automatically reported from the origin document or from the *Customer Registry > Payments tab* and can be modified/deleted by the user.        
If the **Payment type** is associated with a financial discount, the amount of the discount is only considered for accounting purposes, that is, in the deadlines of the document and not in the total order.

#### Specific button*
> **Delete Payments**: used to delete the selected payment lines.

### 2.2 Discounts

Only the pre-defined discounts taken from the *Customer Registry > Discounts tab (Anagrafica cliente > tab Sconti)* are proposed and can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agents

Indicates the agent code and their commission for each item line. The code and percentage defined in the *Customer Registry > Agents tab (Anagrafica cliente > tab Agenti)* are proposed.
If the commission is not linked to the customer in their registry, the agent must still be entered but with a NULL commission because if it were with a 0 commission, it would mean that the agent is linked to the agent but receives no commission.
The same section will be proposed for each item line in the corresponding *Agents* tab.

#### Specific button*
> **Delete agents**: allows the deletion of selected agents.

### 2.4 Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## Header Procedures:

### *Fulfillment from Order*

In the header of the DN, pressing the **Fulfillment from Order** button will open the form where it is possible to filter the confirmed orders of the document's customer and transfer them into the DN. It is also possible to perform the DN creation operation from the [Order Search](/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders).

Through this procedure, a sales DN can be created from the fulfillment of the related customer order. It is thus possible to enter items within the DN, fulfilling either the entire order or specific lines, either fully or partially.

For this procedure to be usable, there are initial conditions that must be met:

 - The customer of the orders must be the same as the DN;
 - The order you wish to fulfill must have the *Printed* flag and the *Order confirmation date* set;
 - In the [DN Types](/docs/configurations/tables/sales/delivery-notes-type) table, the flag on *Order* (indicating that the DN can derive from an order) must be present.    
 - Only if the procedure is executed from the Order Search, the document types must be compatible: in the [Order Types](/docs/configurations/tables/sales/sales-order-types) table, the order type you wish to fulfill must have the corresponding DN type set.        

You must then set in the header of the new DN, the *Delivery note type* you wish to create (which must correspond to what is set in the order types table) and the *Client*. Once these data are entered, you need to click on the *Orders Processing* button to open the fulfillment form.

#### Procedure:

The filters for customer and currency will be automatically populated based on the customer selected in the DN.

Once all desired *Filters* are set, clicking the *Search* button will display a line in the grid for each printed, confirmed, and unfulfilled or partially fulfilled order.

:::note Note
The procedure retrieves all data present in the order, and consequently, the purchasing conditions present in the order will be applied, even if they have currently changed.
:::

:::note Note
Lines of type Note will always be visible, even if already fulfilled, until all lines of other types have been fulfilled.
:::

In the results grid, the user then has the option to:

 1. select the *entire order*. To do this, simply select the flag present at the beginning of the order line.
 2. select only *some* of the *Items* proposed. To do this, simply select the flag present at the beginning of the item line.
 3. select only *some items* for a *specific quantity*. In this case, they must modify the quantity to be fulfilled.

To complete the procedure, the user must then click the *Transfer* button, which will retrieve all data present in the order and bring it back into the DN.

#### Specific buttons

> **Search** allows searching supplier orders.  
> **Transfer** allows transferring the data of the selected order into the new DN.  
> **Forced Oreder Execution** allows for the forced fulfillment of the order; if some lines of the order are selected, only the selected lines will be forcefully fulfilled (with the addition of the flag *Forcefully Fulfilled* corresponding to the item line); if the entire order is fulfilled, its status will also change in the header.  
> **Orders Processing** allows the fulfillment of the order.  
> **Expand** allows expanding the entire tree of orders in the underlying grid, to view the items contained within them.  
> **Collapse** allows collapsing the display of item lines, showing only the order lines.  
> **Select all** allows selecting all items from the list.  
> **Deselect all** allows deselecting all items from the list.  

### *Automatic unload*

The other procedure present in the DN header is the automatic shipping from the warehouse. The button is enabled if the document is Printed.      
Remember that if in the [DN Parameters](/docs/configurations/parameters/sales/dn-parameters) the automatic shipping is enabled, this procedure will be started automatically once the document is printed.      
Once the procedure is initiated, Fluentis checks for the presence of warehouses and reasons in the DN lines and the eventual presence of lots and serial numbers if required; if the procedure does not go well, the user will be notified with an error.      
If the procedure is successful, a [Warehouse Registration](/docs/logistics/warehouse/stock-records/record) is created, which moves the items in the document, and the **Load** flag is inserted in the DN header.      

## **Items**

In this tab, all items with their respective data are entered.

For everything not detailed in this document on the common functioning of forms, refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

To insert a **New Item** in the grid, simply position yourself on the row to fill in the various data or use the **New** button present on the ribbon bar. The available columns are as follows:   

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Line type**: offers the option to select, from the combo box, items with different characteristics:
>- *Codified Item*: these are items coded in the registry and can be accounted for in analytical accounting and recorded in the warehouse.
>- *Uncoded Item*: these are descriptive items that can be accounted for in analytical accounting but cannot be moved in the warehouse.
>- *Charge Item*: these are coded or uncoded items and are summarized separately in the document summaries; if the expense item is coded and of fiscal interest, it will be moved in the warehouse; if it is uncoded or not of fiscal interest, it will not be moved in the warehouse.
>- *Note Item*: these are descriptive notes included in the document print; they do not affect accounting and warehouse.
>- *GiveAway Item*: the gift item is treated as a coded or uncoded item for fiscal and warehouse purposes, but being a gift, it is counted separately in the document summaries and based on the VAT reclaim flag, the VAT amount of the gift will be calculated to be charged to the entity or not.
:::note[NOTE]
If starting directly with the item insertion, its class, code, and line type - Coded Item will be automatically entered.
:::

- **Barcode**: if the management of Barcodes is enabled in the [DN Parameters](/docs/configurations/parameters/sales/dn-parameters), the Barcode column will appear where you can select the data for the item from the Barcodes entered in *Item Registry > Barcode*. 

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **Customer item**: if the management of Customer Items is enabled in the [DN Parameters](/docs/configurations/parameters/sales/dn-parameters), the Customer Item column will appear, with the valid item code for the customer to whom the document is issued and entered in *Item Registry > Customers*. 

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
In the absence of a price list, the proposed data is the **Sales price** retrieved from the *Item Registry > Cost tab > tab [Costi](/docs/erp-home/registers/items/create-new-items/item-registry/costs)* or it will be retrieved based on the document parameters settings. In the absence of this data, the price will be shown as 0.
:::

- **Origin amount**: this field shows the Unit Price, multiplied by the item quantity, net of discounts.        

- **Item discounts**: it reports the sum of the discounts provided for the item.     

- **Item final discounts**: it reports the sum of the final discounts entered for the item in the document summaries.     

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Sales Turnover**: the data entered in the *Item Registry > General tab* is proposed. If this is not present, no data will be proposed, but at the time of invoicing the invoice, the value entered in the *Default Counterparty Cost/Revenue* field of the *Customer Registry > Accounting Data > Administrative tab* will be considered, or an error message will be generated.   

- **On invoice**: this flag is inserted by default, but can be disabled if the item should not be transferred to the invoice and therefore should not appear in the DN fulfillment procedures.     

- **Net weight**: shows the net weight present in the item registry, multiplied by the item quantity of the line.     

- **Gross Weight**: shows the gross weight present in the item registry, multiplied by the item quantity of the line.     


#### Specific buttons

> **Recalculate Recycle**: if the [CONAI](/docs/sales/sales-flow/conai) is enabled for the document, it is possible to recalculate the values with this button after any updates.       

> **Update the Recycle values of the Item registry**: if the *CONAI Materials for the item* tab is modified with Units of Measure and/or Weight, these values can be transferred to the CONAI section of the item registry.      

> **Packages management**: allows opening the management of packaging to be returned used in the purchase document.
The button becomes active if the document is saved but not loaded.
Clicking this button opens the corresponding form where: enter the quantity, select the line and transfer the selected packaging into the item lines by clicking the Execute button. In this form, the items that have been entered with the nature Packaging and that are present in the table of Packaging to return will be reported.         

> **Update price lists**: by clicking on the dropdown next to the button, you have access to two procedures. The first procedure is **Refresh current price list**, which allows aligning the price of the item internally to the Listino, following a possible price variation directly in the item line. Instead, with the second procedure, **Create new price list with new validity**, it is possible to create a new customized price list for the customer to whom the document is issued; it will request, in a pop-up, the start and end dates of validity of the new price list.      

> **Show/Hide details**: clicking this button will make the internal tabs of the Items visible or not.   


### 3.1 Discounts/Price Lists 

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.2 Data 

This tab contains/entered additional information related to the item.

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Warehouse and Reason**: the warehouse and cause of reference will be automatically proposed that will appear when the items are discharged from the warehouse. The data is retrieved from the *DN Types* or entered manually.
- **Variant**: it is possible to choose a variant of the item, if coded within the *Item Registry > Variants*.    
- **Execution status**: in this section, it is possible to verify whether the item line has been Valuated, Partially Valuated, or Forcefully Valuated.       
- **Project**: it is the project associated with the document or can be assigned with the help of the field help.     
- **VAT recourse**: if set, the VAT of the gift is considered for the document total.   
- **Order reference**: refers to the order from which the DN was created.  
- **Our Reference/Your Reference**: in these fields, an internal reference and a customer reference for the document is usually indicated; if the DN is generated through an automatic creation procedure, these fields will be populated with the indications present in the origin document.      
- **Reference Number/Date**: refers to the Reference to the Number and the Date of the original Customer Order.     
- **Brand**: represents the brand of the item, taken from its registry or from the item's price list.    
- **On invoice**: this flag is inserted by default but can be disabled if the item should not be transferred to the invoice and therefore should not appear in the DN fulfillment procedures.     
- **Note**: allows entering notes for each item.     
- **Detail declarations**: the [Intent Declaration](/docs/finance-area/declarations/declarations/intent-declaration) used to propose the VAT of the item is reported; from the combo box, it is possible to change the reference intent declaration if more valid declarations are present.    

### 3.3 Agents

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Lots and Serial Numbers

In the two grids, lots and serial numbers that need to be discharged from the warehouse can be entered.     
This operation is conditioned by the presence of lots and serial numbers in the warehouse. 

If the item does not require the management of Lots/Serial Numbers, this tab will be disabled.  

#### Specific buttons

import DeleteLot from './../../../import/buttons/delete-lot.md'

> <DeleteLot />

import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteSN />

### 3.5 Analytical 

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.6 Extra Data 

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.7 Attached Documents 

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.8 Values Section 

import SalesValuesSection from './../../../import/sections/item-values-section.md'

<SalesValuesSection />

## **Summaries**

In the Summaries, the main information of the entire document is presented.

### 4.1 Final Item Discounts 

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Agent Commission Summary 

In this tab, the commissions expected for each agent are summarized.     

### 4.3 Fees/Discounts/Final Increases 

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

- **Detail declarations**: the possible valid intent declaration for the customer is inserted.    

### 4.4 VAT Summaries 

The VAT summary of the document is proposed for each VAT code.

### 4.5 Due Date Summary 

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

### 4.6 Document Totals 

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **Transport**

The data present are: 

- **Recipient**: the default recipient entered in the customer registry is proposed; if not present, the customer's address is taken.    
- **Destination**: the default destination of the recipient is proposed, if entered in the customer registry.        
- **Tracking Number**: free field. 
- **Volume**: the cumulative volume is proposed, resulting from the sum of the volumes of the items (the value is taken from the Item Registry > Weights/Dimensions tab), when the unit of measure of the volume of items corresponds to that entered in the [DN parameters](/docs/configurations/parameters/sales/dn-parameters). 
- **Net weight**: the cumulative net weight is proposed, resulting from the sum of the weights of the items (the value is taken from the Item Registry > Weights/Dimensions tab), when the unit of measure of the weight of the items corresponds to that entered in the DN parameters. 
- **Gross Weight**: the cumulative gross weight is proposed, resulting from the sum of the weights of the items (the value is taken from the Item Registry > Weights/Dimensions tab), when the unit of measure of the weight of the items corresponds to that entered in the DN parameters.     
- **Type of packaging**: combo box that refers to the homonymous table.     
- **Packages**: the number of packages is proposed, based on the data entered in the *Item Registry > Weights/Dimensions tab*, in the fields *Items present in one package* or *Packages for item*. Only items that have this field filled will be considered.     
- **Values manually modified**: with this flag, we enable the modification of the Volume, Net Weight, Gross Weight, and Packages fields, which otherwise show the data from the item registry without the possibility of modification.     
- **Customs Office Entry/Exit**: fields used for eTransport for the Romanian version, referring to the Customs Office table.     
- **Border Crossing Entry/Exit**: fields used for eTransport for the Romanian version, referring to the Border Crossing table.      
- **Transport**: it is necessary to select the person responsible for the transport, setting the flag in Sender, Recipient, or Carrier; based on the selection, the section below will change; if the transport is at the Sender's expense, it will be possible to enter Vehicle License Plate, Trailer, Date and Time of Transport Start; if at the Recipient's expense, it will be possible to enter Vehicle License Plate, Trailer, Date and Time of Transport Start; if at the Carrier's expense, the available fields will be Accounting Registry of the Carrier, License Plate, Trailer, Date and Time of Transport, possible Client, Loader, Owner, Loading Place. 

## **Linked documents**

In this tab, you can consult the attached documents.
To attach documents, you can proceed in two ways:
- using the button on the toolbar **Documents**, you can choose to attach a document already coded in Fluentis or create a new Document to attach.       
- directly using the right button in the grid and selecting *Attach a file*, you go about creating a new Document to attach.