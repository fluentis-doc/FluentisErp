---
title: New Purchase Invoice 
sidebar_position: 2
---

The form opens via the path **Purchases > Purchase Invoices > New Invoice** or through the **New** button located in the [Purchase Invoice Search](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) form.

## *How to create a purchase invoice*

## **1. Mandatory Data**

- **Purchase invoice type** in *Tables > Purchases > [Purchase Invoice Type](/docs/configurations/tables/purchase/purchase-invoices-type)*;   
This field determines the numbering range of the document being entered and automatically proposes the *Internal number* of the invoice based on the inclusion date and the last number entered;   
- **Supplier** can be entered using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or manually;
- **Date**: the current date is proposed automatically but can be modified manually respecting the progression rule between date and number;
- **Internal number**: automatically proposed based on the invoice type, but can be manually modified while always respecting the progression rule between date and number;
- **Document Number**: in this field, it is possible to enter a document number that may differ from that proposed in the previous field.

The form contains a series of tabs.

## **Header**

After selecting the mandatory data in the upper section, the user can continue entering the following data manually or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), or, based on the procedures chosen, the application fills in the fields *automatically*.

:::note Remember
If the document is *created automatically*, for example through **Fulfillment from Supplier Order** or **Fulfillment from DDT**, these data are taken from the *originating document* from which the invoice was generated.
:::

### 2.1 Supplier Data 

By entering the **Supplier**, all specific data from the **Header** tab will be *automatically proposed* according to the data previously set in the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in the fields corresponding to their address and in the *sections*:

- **Currency**: section containing [Currency](/docs/configurations/tables/general-settings/currencies), [Exchange Rate](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency Date](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Country**: section containing [*Country*](/docs/guide/common/glossary/glossary-intro#country), [Language](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone).   
- **Delivery**: section containing [*Shipments*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Freight](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), [Default Price List](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) and its [Validity range](/docs/guide/common/glossary/glossary-intro#validity-date).

All these fields can be deleted or manually modified by the user.

### 2.2 Optional Header Data 

- **Invoices status**: when the invoice is created, no flags are active. The section includes the fields:

    > **Controlled**: the active flag allows the invoicing of the invoice;  
    > **Accounted**: the flag is activated automatically when the invoice supports the [Accounting](/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting) procedure;  
    > **Loaded**: the flag becomes active when the invoice supports the [Warehouse Loading](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) procedure. In the case of an invoice created from a transport document already loaded, the general parameter VE-PurchaseInvoices_VerifyLoadStatusDDT will block the Loaded flag even in the invoice.
    > **Historicized**: activating this flag will make the document no longer visible for subsequent procedures.   
    > **Cancelled**: the active flag allows the invoice to be canceled.

:::note
The flags can be removed through restoration operation procedures.
:::

- **Arrival date**: in this field, one can enter the date of arrival of the goods.

- **Load date**: this field is automatically filled with the current date at the time of loading or with the date used for warehouse registration, depending on the procedure used.   

- **Supplier Annotations**: this field is retrieved from the supplier registry, while in the case of creation from a single order/DDT, the same data contained in the corresponding field of the originating document will be retrieved. It can also be entered manually.

- **Our/Your reference**: in these fields, an internal reference and a supplier reference for the document are usually indicated.    
If present, it is retrieved from the supplier registry; otherwise, it can be entered manually. If the order is completed using the [Fulfillment from Order](/docs/purchase/purchase-invoices/insert-purchase-invoice/purchase-invoice) procedure or through [Purchase DDT Valuation](/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization), the fields *Supplier Annotations* and *Our/Your reference* will propose the information present in the corresponding fields of the originating document (this transfer is valid only in the case of invoices created by retrieving data from a single originating document).

- **Initial note**: in the case of fulfillment, the information present in the order will be re-proposed. Alternatively, notes previously entered in the corresponding table located in the path *Configuration > Tools > Management of Coded Notes* can be selected; for this, the user must double-click on the field to open the Help and select the data; otherwise, they can be entered manually.

- **Project**: using the field help, the document can be linked to a project. This association only works at the item header level. The project is automatically entered if the DDT is created through the fulfillment of an order that contains it.

- **CUP/CIG**: if in the tax information of the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) it is enabled for the management of CIG and CUP, it will be possible to fill in this data in the document. The fields are located under the *Supplier Annotations* section.

- **Ref. FA**: positioned under the *Country* section. It is used after creating the [Cancellation](/docs/purchase/purchase-invoices/insert-purchase-invoice/search-purchase-invoices) of an invoice to manually connect the two invoices by entering the invoice's *number*, *type*, and *date* of the originating invoice.

- **Acc. rec.**: positioned under the *Country* section. Reports the number, date, and protocol of the accounting entry derived from the accounting of the invoice. 

### 2.3 Payments

The **Payment Terms** are automatically reported from the *Supplier Registry > Payments tab* and can be modified/removed by the user.

If a financial discount is associated with the **Payment type**, the amount of the discount is considered only for accounting purposes, i.e., in the due dates of the document and not in the invoice total.

#### Specific Button 

> **Delete Payments**: used to delete the selected payment lines.

### 2.4 Discounts 

Only predefined discounts retrieved from the *Supplier Registry > Discounts tab* are proposed and can be modified/removed by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Shipping

Here, the information entered in the supplier registry, the [Delivery tab](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), is proposed, only if there are default data.

The combo box proposes all *Recipients* and *Destinations* entered in the supplier registry.

Shipping addresses (recipient/destination and carrier) can also be entered descriptively without being previously inserted among the contacts. 

### 2.6 Carrier 

In this field, it is possible to enter the Carrier that will carry out the shipment. If this has been entered in the supplier registry, tab [Delivery](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), it will be possible to select it from the dropdown menu of the second column; alternatively, it is sufficient to double-click on the third column (*Carrier*) to select one of the company's contacts.

Optionally, details of the *Number plate* and *Transportation Date/Time* can be added.

### 2.7 Extra Data 
import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **Header Procedures:**

### *Automatic Warehouse Loading*

This procedure is launched using the **Automatic load on warehouse** button found in the document header and respects a series of parameters previously set in the invoice. For details, refer to the identical procedure: [Loading Purchase Invoices into Warehouse](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse).

The result can be viewed in Logistics > [Records](/docs/logistics/warehouse/stock-records/records) or in the [Loading Purchase Invoices into Warehouse](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse) procedure, *Summary* tab.

:::note Note
If in the *Purchase Invoice Parameters* the flag **Automatic load/unload** is active, at the moment the *Controlled* flag in the invoice header is activated, it will automatically propose to load the document into the warehouse. Therefore, this field will be editable only once the *Controlled* field is activated and the *Document Number* is entered.
:::

### *D.N. execution*

This procedure allows the creation of a purchase invoice by fulfilling one or more purchase DDTs.

In the document header, by pressing the **D.N. execution** button, the form will open where it is possible to filter the DDTs addressed to the supplier of the document. It is then possible to insert items into the invoice, fully or partially fulfilling the DDTs.

To use this procedure, certain initial conditions must be met:

- the supplier of the DDTs must be the same as that of the invoice;
- the DDT you want to fulfill must have the *Controled* flag active and must not already be *Valorized*.

#### Procedure

You must set in the header of the new invoice the [Invoice Type](/docs/configurations/tables/purchase/purchase-invoices-type) you want to create and the *Supplier*. Once these data are entered, you should click on the *D.N. execution* button to open the fulfillment form.

The filters for supplier and currency will be automatically carried over based on the supplier entered in the invoice.

In the filter area, you can choose whether to view the data in a *Grid*, a *Hierarchical structure* or both solutions.

> The **Hierarchical structure** allows for a clearer division of the DDTs available for fulfillment and the items contained in each. It also allows for mass selection of all items contained within a DDT simply by activating the flag on the DDT line.   
> The **Grid** allows for greater customization of the form by adding fields from the *Object navigator*. In this case, mass selection must be done using the keyboard keys and clicking the *Select/Deselect* button in the ribbon bar.

Once all desired filters are set, clicking the *Search* button will display all checked DDTs that have not yet been valued or are partially valued in the lower part.

In the result grid, the user then has the option to:

 - Select all or some of the proposed items: to do this, simply select the flag present at the start of the item line. The *Quantity to Fulfill* will automatically be set equal to the *Residual quantity*.
 - Select some items for a *partial quantity*. In this case, the *Quantity to Fulfill* must be modified accordingly.

To complete the procedure, you will then need to click the *Transfer* button, which will retrieve all the data present in the selected DDTs and bring it back to the invoice.

#### Specific Buttons

> **Search**: allows searching for available DDTs for transfer.  
> **Transfer**: allows transferring the selected items/orders.  
> **Select all**: allows selecting all items from the list.  
> **Deselect all**: allows deselecting all items from the list.  
> **Select**: allows activating flags for all rows selected with the mouse.   
> **Deselect**: allows deactivating flags for all rows selected with the mouse.

### *Order Fulfillment*

This procedure allows the creation of a purchase invoice by fulfilling one or more supplier orders.

In the document header, by pressing the **Get from Orders** button, the form will open where it is possible to filter the orders related to the supplier of the document. It is then possible to insert items into the invoice, fully or partially fulfilling an entire order or a row.

To use this procedure, certain initial conditions must be met:

- the supplier of the orders must be the same as that of the invoice;
- the order to be fulfilled must have the *Printed* flag active and must have already been *Confirmed*.

#### Procedure  

You must set in the header of the new invoice the [Invoice Type](/docs/configurations/tables/purchase/purchase-invoices-type) you want to create and the *Supplier*. Once these data are entered, click the *Get from Orders* button to open the fulfillment form.

The filters for supplier and currency will be automatically carried over based on the supplier entered in the invoice.

In the filter area, you can choose whether to view the data in a *Grid*, a *Hierarchical structure*, or both solutions.

> The **Hierarchical structure** allows for a clearer division of the various orders and the items contained in each. It also allows for mass selection of all items contained within an order by simply activating the flag on the order.   
> The **Grid** allows for greater customization of the form through the addition of fields from the *Object navigator*. In this case, mass selection must be performed by using the keyboard keys and clicking the *Activate/Deactivate Only Selected Rows* button in the ribbon bar.

Once all desired filters are set, clicking the *Search* button will display all printed orders that have been confirmed and not yet fulfilled or are partially fulfilled below.

:::note Note
The procedure retrieves all data present in the order, and as a consequence, the purchasing conditions present in the order will be applied, even if they have currently changed.   
In the event of fulfilling multiple orders with the same payment solution and/or same destination, the information contained in the order will be reported in the invoice; alternatively, those from the supplier registry will be retrieved. 
:::

In the result grid, the user then has the option to:

 - Select all or some of the proposed items: to do this, simply select the flag at the start of the item line. The *Quantity to Fulfill* will automatically be set equal to the *Residual quantity*.
 - Select some items for a *partial quantity*. In this case, the *Quantity to Fulfill* must be modified accordingly.

To complete the procedure, you must then click the *Execution* button, which will retrieve all the data present in the order and bring it back to the invoice.

#### Specific Buttons 

> **Search**: allows searching for supplier orders.  
> **Execution**: allows transferring the selected items/orders.  
> **Forced Order Execution**: allows forced fulfillment of the selected order or item rows.  
> **Select all**: allows selecting all items from the list.  
> **Deselect all**: allows deselecting all items from the list.  
> **Activate only selected rows**: allows activating flags for all rows selected with the mouse.   
> **Deactivate only selected rows**: allows deactivating flags for all rows selected with the mouse.

:::important Remember 
In the case of multiple partial fulfillments for a given item line within the same invoice, it is possible to choose whether to sum the quantities into a single line in the invoice or to maintain separate lines by disabling or enabling the **Unsumed Item Quantity Order** flag in the table of [Purchase Invoice Types](/docs/configurations/tables/purchase/purchase-invoices-type).
:::

### *Sdi - Document Closure*

With the **Sdi - Document Closure** button, the module is opened for manually linking any orders and purchase DDTs to the invoices generated from the received XMLs. This procedure is also automatically initiated when this linking is performed from the [Incoming Purchase Documents](/docs/finance-area/sdi-documents/incoming-purchase-documents) screen.          
The module is divided into two main sections: one on the left, dedicated to displaying DDTs and Orders, and one on the right, showing the items of the invoice.

The grid of orders and DDTs contains the following columns:        
- Invoice Linked Line Number 
- Document Type 
- Number 
- Date 
- Line Number 
- Item Class 
- Item Codes 
- Item Description 
- Quantity 
- Prices 
- Total Discount 
- Net Amount 
- Net Unit Price         

The lines already linked to the invoice items will be highlighted in green for easier identification.

The invoice grid contains the following columns:        
- Line number 
- Item Class 
- Item Codes 
- Item Description 
- Quantity 
- Prices 
- Total Discount 
- Net Amount 
- Net Unit Price      

The lines already linked to DDT or Orders items will be highlighted to facilitate verification.

In these grids, only the lines of DDTs or Orders that have not been executed or forced previously are displayed. 
To execute the linking, it is necessary to enter the invoice line number in the *Linked Invoice Line Number* column and click the **Associate** button. 

:::note
The same invoice number cannot be simultaneously linked to a DDT and an Order. 
:::

With the **Associate** button, the lines with the "Linked Invoice Line Number" will be executed in the corresponding DDTs or Orders.        
The **Rollback Link** button allows for the cancellation of the linking, restoring the correct execution status for the DDTs or Orders.

During the linking phase, the system performs several checks to ensure data consistency:       
- Prices: Differences between the prices reported in the orders/DDTs and those of the automatically generated invoice.
- Discounts: Discrepancies between the total discount values.
- Net Unit Price: Differences between the net unit price indicated in the invoice and that reported in DDTs/Orders.
- Total Amount: Differences between the total amount of the invoice and the sum of the total amounts of the lines executed in DDTs/Orders.

If one or more of these checks fail, the linking is not performed automatically, and the error is reported in the error grid, indicating the invoice line number and the description of the error.

## **Items**

In this tab, all the articles with their related data are entered.

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

To insert a new article into the grid, simply position yourself on the row to fill in the various data or use the *New Item* button present in the ribbon bar.

:::note Note 
If the invoice was created through the fulfillment of a supplier order or a purchase DDT, the following data will be retrieved from the originating document.
:::

### 3.1 Mandatory Data (Dati obbligatori)

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Line type** offers the option to select from the combo-box articles with different characteristics:
> - *Codified Item*: these are items coded in the registry and can be accounted for in analytical accounting and registered in the warehouse. <br />
> - *Non-coding Item*: these are descriptive articles that can be accounted for in analytical accounting but cannot be moved to the warehouse. <br />
> - *Charge Item*: these are coded or non-coded items and are summed separately in document summaries; if the expense item is coded and of tax interest, it will be moved to the warehouse; if it is non-coded or not of tax interest, it will not be moved to the warehouse. <br />
> - *Note Item*: these are descriptive notes reported in the document print; they do not affect accounting and storage.
> - *GiveAway Item*: the gift item is managed as a coded or non-coded item for tax and warehouse purposes, but as it is a gift, it is counted separately in document summaries, and depending on the VAT recovery flag, the VAT amount of the gift may or may not be borne by the subject.

:::note Note 
If you start directly with the insertion of the article, its class, code, and row type (*Codified Item*) will be automatically entered.
:::

- **Class/Code/Item Description**: these can be entered [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the aid of the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) which will propose all the related data entered in the *Item registry*.
After entering the article, its *Description* will be automatically retrieved from the registry. If the article has *Variants*, it will be possible to select the desired variant from the *Data* tab.

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Price**: the price is proposed from the price list entered in the contact registry; the reference price list for the article itself is displayed in the *Discounts/Price Lists* tab. The same document may contain articles with prices taken from different price lists, if multiple cascading price lists are associated in the subject registry (see [Contact Registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). By double-clicking in the **Price list** field (within the *Discounts/Price Lists* tab), the user has the option to select a different price list from the default one, from which the price of the entered article will be retrieved.    
If there is no price list, the proposed data can be retrieved from the *last cost* of the item registry, if the flag *Zero Cost in the Absence of Price Lists* in the [Purchase Invoice Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters/) is not active.

- **Amount**: this is calculated automatically net of discounts.

- **Total discounts**: indicates the total amount of discounts present in the *Discounts/Price Lists* tab for each item row.

- **VAT**: is primarily the data entered in the VAT field of the *Contact Registry*. If this is not present, the value in the *Item registry* will be proposed, but the user has the option to enter a different value.

### 3.2 Optional Article Data 

- **Supplier Article Code/Description**: in this section, you can add the code and description that the supplier uses to identify the item; this data is proposed automatically if in the item registry, tab [Preferred Suppliers](/docs/erp-home/registers/items/create-new-item) an item supplier has been associated. 

- **Purchase turnover type**: the data entered in the tab [Generalities](/docs/erp-home/registers/items/create-new-item) of the item registry is proposed. If this is not present, no data is proposed, and at the time of accounting for the invoice, the value entered in the *Default Counterpart Cost/Revenue (Costo/Ricavo di contropartita predefinito)* field of the contact registry will be considered.

#### Specific Buttons

> **Recalculate Recycle**: if [Conai Management](/docs/purchase/purchase-flow/conai) is enabled for the document, it is possible to recalculate the values with this button after any modifications.
>
> **Packages management**: allows opening the management of returnable packaging used in the purchase document.   
This button becomes active if the document is saved but not loaded. Clicking this button opens the corresponding form where you can enter the quantity, select the row, and execute the transfer of the selected packaging into the item rows by clicking the **Execute** button. In this form, the items that have been entered with the nature of Packaging and that are present in the table of [Returnable Packaging](/docs/configurations/tables/logistics/package-to-be-returned) are reported.      
>
> **Receptions reversal**: this button is active only for [Purchase Invoice Types](/docs/configurations/tables/purchase/purchase-invoices-type) that have the *Nature* of *Credit note*. In the form, all invoices addressed to that supplier will be displayed. After selecting the item rows and the respective quantities to be cancelled, simply press the *Receptions reversal* button to insert them into the invoice.    
>
> **Update price lists**: the **Update Current Price List** button allows updating prices in the current price list for each selected item row.    
The button **Create new price list with new validity**, on the other hand, will open a pop-up to enter the validity dates of the new price list, which will contain only the selected rows and will be addressed to the supplier entered in the invoice.   

:::important Remember 
When creating/updating a price list through this procedure, only discounts that have been manually entered into the invoice are reported in the price list. 
:::

### 3.3 Discounts/Price Lists 

- **Price list**: the price list from which the price of the item was retrieved is proposed, along with the validity start/end dates and any special conditions (e.g. **Discount Tier Type**) assigned to the item in the price list.

- **Manual price**: activates automatically when the price of the item has been entered or modified manually.

- **Discounts**: all discounts associated with the item are proposed, each with its own calculation base and assignment.        

### 3.4 Article Data

In this tab, further information related to the article is reported/entered.

- **ITEM**: shows the class, code, and description of the selected item in the grid.   
- **Variant**: in this field, it is possible to select a variant of the item among those previously coded in the tab [Variants](/docs/erp-home/registers/items/create-new-item) of the item registry. If different prices and/or discounts have been entered for each variant in the price list, they will be updated when a different variant of the article is selected.     
- **Notes**: these are the notes related to the item row, which can also be entered through the coded notes help. They will be reported in all documents generated from this.   
- **Warehouse and Reason**: the warehouse and the reference reason that will automatically appear at the time of loading the related items into the warehouse are proposed. The data are retrieved from the [Purchase Invoice Types](/docs/configurations/tables/purchase/purchase-invoices-type) or from the supplier order or the DDT, if the invoice derives from the fulfillment of an order or from DDT valuation. They can be modified manually for each item row.   
- **Location**: is proposed automatically if the reason used has been associated with a location in the table of [Warehouse Templates](/docs/configurations/tables/logistics/warehouse-templates) or if the item has been entered in the [Item Location Map](/docs/logistics/warehouse/location/item-location-map/). It can be entered or modified manually.  
- **Unit of Measure/Alternative Quantity**: if an alternative unit of measure has been coded in the [item registry](/docs/erp-home/registers/items/create-new-item) with the *Default* flag, and the *Automatic proposal of alternative U.M.* flag has been activated in the Supplier Order Parameters, these values will be automatically proposed upon entering the article; otherwise, it is possible to select one among the alternative units of measure coded for the article.   
- **Alternative Unit Price**: if activated, indicates that the price entered on the item row refers to the alternative unit of measure and not to the main one.    
This flag, along with the *Alternative Measurement Unit* and *Alternative quantity* fields, is visible only if the flag *Management of double UM* has been activated in the [Purchase Invoice Parameters](/docs/configurations/parameters/purchase/purchase-invoices-parameters).
- **Project**: represents the project to associate with the document. If a project has been entered in the header of the document, it will be reported on all item rows; alternatively, it can be selected through the appropriate project help.   
- **VAT recourse**: if set, the VAT of the gift is considered for the invoice total.
- **Brand**: represents the brand of the item, retrieved from its registry or the price list of the item.
- **Order reference**: in the case that the invoice is generated from an order, the reference to the order will automatically be reported in this field.
- **Detail declarations**: the [Intent Declaration](/docs/finance-area/declarations/declarations/intent-declaration) used to propose the VAT of the item is reported; from the combo box, it is possible to change the reference intent declaration if multiple valid declarations are present.

### 3.5 Lots and Serial Numbers

In these two grids, lots and serial numbers that must be loaded into the warehouse can be entered.   
If the article does not require the management of [Lots and Serial Numbers](/docs/erp-home/registers/items/create-new-item), this tab will be disabled.

:::tip Remember 
If in the [Purchase Invoice Parameters](/docs/configurations/parameters/purchase/purchase-invoices-parameters) the flag *Batches and S.N. compulsory* is disabled, it will be possible to save the document without entering lots/serial numbers. Furthermore, if the *Withdrawal Type* of the lot coded in the [item registry](/docs/erp-home/registers/items/create-new-item) is *FIFO* or *Expiry date* at the time of loading the invoice into the warehouse, the lots will be proposed automatically if they have not already been entered previously.
:::

### 3.6 Analytical 

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

### 3.7 Extra Data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.8 Attached Documents 

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.9 Conai Materials for the Item 

This tab is visible if Conai management has been activated for the active company.

This section will report the packaging materials that make up the item, with the related unit of measure, unit weight (reduced by any exemption percentage of the customer registry) and the total weight obtained by multiplying the number of items sold by the unit weight.    
Upon saving the document or pressing the **Recalculate Recycle** button, Fluentis will insert one or more expense lines retrieving the materials article, with quantity equal to the sum of the quantities and price equal to the Conai cost for that material.

For more information on [Conai Management](/docs/purchase/purchase-flow/conai) in Fluentis, see the attached page.

### 3.10 Costs to Receive 

The **Values receivable** and **Charges** tabs are not managed in the current version of Fluentis.

### 3.11 Value Section

The section at the bottom right presents a summary of the costs contributing to the formation of the final price of each selected item in the item grid. 

- **Unit price**: the value of the *Price* field; 
- **Quantity**: the value of the *Quantity* or *Alternative quantity* field, depending on the *Alternative Unit Price* flag;
- **Line amount**: Item Price * Item Quantity; 
- **Total discounts**: the sum of the discounts of the item, including final discounts;
- **Amount**: Row Amount - Total Discounts;
- **VAT**: Amount * VAT rate of the item; 
- **Total**: Amount + Tax.

## **Summaries**

In the various sections of this tab, the main information of the entire document and some specific buttons are presented.

### 4.1 Final Discounts

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Expenses 

The expenses entered in the contact registry, in the *Charges/Discounts* tab, are proposed. In this grid, any expenses should be entered positively, while any discounts negatively.      

These elements are applied to the totality of the document and are not distributed among the item rows. They may include additional costs, global discounts, or surcharges applied to the entire document. If set in the item registry, they are automatically proposed when creating the document.

- **Type/Description**: allows you to choose the types of expense (predefined in the [Expense Types table](/docs/configurations/tables/general-settings/expenses-types)), assigning to the type the percentage of expense to apply.  
- **Charge amount**: indicates the value of the expense expressed in the document’s currency.    
- **VAT**: indicates the VAT rate to be applied to the entered expenses.   
- **Percentage/Value**: indicates whether to calculate the expenses with a percentage or with a predefined monetary value. Selecting *value*, the expense amount must be entered under the corresponding heading.      
- **Percent Completed**: numerical value of the expense percentage.  

:::note Note (Nota)
If the *Charge type* entered has the [split flag](/docs/configurations/tables/general-settings/expenses-types) active, during the invoice loading into the warehouse, the expense will be divided among all items based on the total amounts of each item row. The result of the expense allocation is visible in the [warehouse registration](/docs/logistics/warehouse/stock-records/record).    
1. If the items have a price: the total expense will be proportionally divided among the net amounts of each item; the result will be added to the initial price of the item in the *Total amount* field of the registration. If for some rows the amount is 0, it will be considered as 1 to allow an expense allocation over all items.   
2. If all items have a price equal to 0: the expense will be evenly distributed among all item rows, and based on this distribution, the *movement amount/management amount* will be calculated in the registration, taking into account the quantities of each item.   
:::

### 4.3 VAT Summaries

The VAT summary of the document is proposed for each VAT code.

### 4.4 Due Date Summary

Represents the summary of the document's due dates for each *type* and *payment solution*.  
- **Number**: progressive value of the row.  
- **Payment**: represents the alphanumeric code of the *Payment type* retrieved from the *Document Header > Payments tab*.  
- **Amount**: Amount of the calculated due date. Can be manually forced, in which case the subsequent *Manually edit* flag is automatically activated. (Automatic checks and warnings are triggered regarding the balancing of values of the due dates and the total invoice)
- **Expiry date**: Date of the calculated due date. Can be manually forced, in which case the subsequent *Manually edit* flag is automatically activated.
- **Collection charges**: Field in which the calculated collection charges are reported.
- **VAT**: to be applied to collection charges (can also be set manually)
- **Accounting Reason**: it is possible to directly enter an accounting reason in the invoice that triggers an automatic accounting entry for collection/payment. NB pay attention to the template of the reason because it will use the accounts present even without a sub-account, which is why the following field is present.
- **Client/Supplier Sub-account**: account used to collect/pay (cash or bank, for example) the due date, overwriting the account present in the accounting reason of payment (or collection).
- **Sign**: only due dates that have this flag are then managed in payment with the reason and account set.
- **Payment Reference Models**: Model for creating the payment code. In some foreign locations, each due date in the invoice requires a code assigned by the issuer: this code is structured according to specific models (table MB_PaymentReferenceModels), allowing you to create the code with an algorithm.
- **Payment Reference Model Codes**: This is the code (structured as per the previous model) to be reported in the entry and therefore later in the payments sent to the bank, so that it communicates to the beneficiary which due date has been paid (and thus automate the import from bank transactions with batch closure). This is compiled inside the entry and in the Sepa file.
- **Early Payment Deadline**: This is a field provided in the Sdi invoice trace, the deadline for applying the financial discount.
- **Discount type**: Type of financial discount.
- **Mat. value**: Value of the financial discount on collection.

### 4.5 Other Fields 

**Final notes**: it's a free field that the user can fill in with the aid of *Coded Notes Help*.

### 4.6 Document Totals 

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />