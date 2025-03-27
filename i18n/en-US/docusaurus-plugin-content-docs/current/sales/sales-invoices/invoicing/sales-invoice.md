---
title: New Sales Invoice 
sidebar_position: 2
---

The form opens:  
1. through the path **Sales > Invoices > Create Sales Invoice**  
or 
2. through the **New** button found in the [Search Sales Invoices](/docs/sales/sales-invoices/invoicing/search-sales-invoices) form.

## *How to create a sales invoice*

## **1. Mandatory Data**

To continue the creation of the document, the user must enter the *mandatory fields*:

- **Invoice type**: default set in *Configuration > Tables > Sales > [Sales Invoice Type](/docs/configurations/tables/sales/invoices-type)*.          
- **Number**: each document is assigned a number according to the numbering specified by the user in the [Numbering Table (Numerazione)](/docs/configurations/tables/fluentis-numerations) and the document type that contains the numbering. The numbering associated with the invoice type generally anticipates an automatic progression based on date and number, with a recovery function that covers any gaps in the sequence (for example, caused by the cancellation of documents). This behavior is regulated by two specific flags in the numbering table. If the user wishes to manually enter the number, they can disable the date-number progression flag (which ensures the increment of numbering on future dates) and the number recovery flag. Additionally, they need to enable the external numbering flag, signaling to the system that the numbering will be managed manually.            
- **Client**: using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or by typing [directly](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) the data. Entering the customer will automatically populate, if present in the registry, the following fields, which will be explained in the following sections: currency, country, language, zone, shipping, price list, and any discounts, payments, charges, agents, destination, carriers, extra data.               
- **Invoice date**: indicates the invoice creation date. This date is essential for calculating deadlines and any payment terms. The current date is proposed, which can be modified; if the numbering anticipates a date and number progression, and I enter a past date, Fluentis will check the availability of numbers on that date to ensure progression, and if not present, will notify the user that there are no numbers available on that date. 

Continue creating by entering at least the mandatory data in each of the tabs below.

## **Header**

After selecting the mandatory data in the upper section, the user can continue entering the following data:  
- [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection)  
- or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) 
- or, based on the procedures they choose, the application automatically fills in the fields **automatically**.

:::note Remember
If the document is *automatically created*, this data is retrieved from the *source document* from which it was generated.
:::

Entering the **Client** will automatically propose all specific data in the **Header** tab, according to the data previously set in the [customer registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), in the fields corresponding to their address and in the *sections*:  
- **Currency**: section containing data for [Currency](/docs/guide/common/glossary/glossary-intro#currency), [Exchange](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency Date](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: section containing data for [Country (Nazione)](/docs/guide/common/glossary/glossary-intro#country), [Language](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone).
- **Delivery**: section containing data for [Shipping](/docs/guide/common/glossary/glossary-intro#shipment), [Carriage](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), [Price List](/docs/guide/common/glossary/glossary-intro#sales-price-list) (in the document header, the price list set in the customer registry with the Default flag will be inserted) with the type of discount scale and its [validity range](/docs/guide/common/glossary/glossary-intro#validity-date).

#### Other Fields

- **Printed**: activated when the document is printed, indicating that the document has been printed.      
- **Unloaded**: this flag is activated automatically when the document is moved to the warehouse, with the *Automatic unload* button on the toolbar or with the available procedures.  

:::note Note
In the case of an invoice created from a transport document that has already been posted, the general parameter VE-PurchaseInvoices_VerifyLoadStatusDDT will block the *Unloaded* flag in the invoice as well. 
:::  

- **Cancelled**: the active flag allows the document to be canceled; the *Unloaded* and *Valorized* flags will be automatically set to prevent the document from being visible in the procedures.      
- **Accounted**: the flag indicates that the invoice has been accounted for.    

:::note
Flags can be removed with restoration operation procedures.
:::

- **Customer note**: the information entered in the customer registry will be proposed, while in the case of automatic creation from an order/DDT, the same data contained in the corresponding field of the source document will be retrieved; it can also be entered manually. With the right mouse button, a form can be opened to specify very long note text; if the field contains a value, the background color of the field will change.      
- **Our Reference/Your Reference**: these fields usually indicate an internal reference and a customer reference for the specific invoice.   
- **Reference to Customer Order Number**: in this field, the order from which the invoice derives is automatically entered.     
- **Reference to Customer Order Date**: in this field, the date of the order from which the invoice derives is automatically entered; together with the previous field, this creates the necessary data for tag 2.1.2 of the XML file of the electronic invoice when it is created; if not filled, the Your Reference field will be used instead. If the invoice is generated through the procedure of:  
> *Creation from customer order*, these last four fields will be populated with the indications present in the customer order. This transfer is valid only in the case of the invoice created by retrieving data from only one order;  
> *Fulfillment DDT*, these fields will be populated with the indications present in the DDT. This transfer is valid only in the case of the invoice created by retrieving data from only one DDT.          

import InitialNote from './../../../import/fields/initial-note.md'

<InitialNote />

import User from './../../../import/fields/user.md'

<User />

- **Project**: using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), the document can be linked to a project.  
This association works only at the article header level.
- **Audit Trail**: as in all documents, this section records the creation date of the document with the operator, and the date of the last modification of the document with the operator.      
- **Reference type**: if the invoice comes from another invoice due to a document reversal, the invoice type of the source document is reported here.     
- **Reference SI**: if the invoice was created from another invoice, the number and date of the source document are reported here.       
- **Electronic invoice id reference**: in this field, the references of the invoice are reported if sent to the SDI.      
- **Ledger record**: contains the identification of the accounting record if the invoice has been accounted for.      
- **Delivery**: in this section, any Carriage, Packing, and Vehicle data entered in the customer registry are reported; these fields are modifiable.       
- **Price list**: the price list with the default flag set in *Customer Registry > Price Lists* will be proposed to be used for the document; it is a modifiable data.     
- **Bracket type**: reports the type of discount scale entered in *Customer Registry > Price Lists* intended for the default price list type.       
- **Apply from**: represents the start date for calculating payment deadlines.

#### Specific Buttons

> **[Fulfillment from customer order](/docs/sales/sales-invoices/invoicing/sales-invoice)**: calls the procedure to create an invoice from a customer order. It is activated by entering the customer and the invoice type.      
> **Fulfillment from DDT**: calls the procedure to create an invoice from a transport document. It is activated by entering the customer and the invoice type;      
> **[Automatic Posting](/docs/sales/sales-invoices/invoicing/sales-invoice)**: this procedure allows for the warehouse posting of the document, if *Printed*.      
> **Recipient/Destination Help**: allows you to view and enter recipients/destinations from the customer registry.     
> **Insert AgentAccount in the Items rows**: distributes the agent entered in the header to the article lines in the *Agents* tab.     
> **Insert CIG/CUP in line items**: distributes the codes entered in the header to the article lines, in the respective combo boxes.     
> **Delete Payments**: deletes the header payments.    
> **ES document log**: opens the SDI document related to the invoice, once *Controlled*.       

### 2.1 Payments

The **Payment Terms** are automatically reported from *Customer Registry > Payments tab* and can be modified/deleted by the user.

If a financial discount is associated with the **Payment type**, the amount of the discount is considered only for accounting purposes, that is, in the deadlines of the document and not in the total invoice.  

If the document originates from a:

- *Sales Order* the payment types can be retrieved from the first document, from the customer registry, or all the payments of the documents to be fulfilled are displayed in a form, and the user selects the concerned payment type.

- *DDT*, the payment entries from the customer registry can be maintained or the individual payments present in each DDT can be retained; in this case, the payment type with the taxable amount and VAT equal to that of the DDT is reported in the invoice, and a new line is added for any article lines added to the invoice not coming from the DDT.

### 2.2 Discounts 

Only the predefined discounts retrieved from *Customer Registry > Discounts tab* are proposed and can be modified/deleted by the user.
  
import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.3 Agents 

Indicates the agent code and their commission for each article line. The code and percentage defined in *Customer Registry > Agents tab* is proposed.

If the commission is not linked to the customer in their registry, the agent must still be entered, but with a NULL commission because if it were with a commission of 0, it would mean that the agent is linked to the agent but does not receive a commission.

In the case of invoice generation from an order, this data will obviously be reported as equal to that of the customer order.

This section will be repeated for each article line in the corresponding Agents tab.

### 2.4 Extra Data 

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## Header Procedures:  

### *Electronic invoicing*

From this section present in the invoice toolbar, it is possible to manage the creation and sending of the electronic invoice to the SDI. This procedure is performed with the document state change; the states are as follows:
- *Not examined*: this is the starting state in which documents are found before communicating with the SDI; the document has been generated and no actions related to the management of the electronic document have yet been made; subsequent states can be Controlled, Cancelled, or Excluded;             
- *Controled*: by setting this state, checks by Fluentis are carried out on the document; if there is missing data for communication with the SDI, the user will be notified; from this state on, the *ES document log* button will be active where historical data and the XML stylesheet can be consulted; subsequent states can be Generated, Cancelled, Excluded;              
- *Generated*: the XML file related to the electronic document has been created. From this moment, it is possible to proceed with subsequent states to send the file to the Fluentis Business Hub or download the XML file for external management; subsequent states can be Signed, To be sent, Cancelled, Excluded;       
- *Signed*: the document has been externally signed with a Cadeso Xades signature certificate and re-imported into Fluentis in the new format; subsequent states can be To be sent, Cancelled, Excluded;      
- *To deliver*: this state, to be used if the Fluentis Business Hub channel is correctly configured, queues the document in the list of documents that BizLink will have to process for sending to the SDI; no other manual actions are required as it will be necessary to wait for the outcome of the SDI;           
- *Cancelled*: the document should not be sent to the final customer but remains valid for VAT purposes;       
- *Excluded*: the document has been created but is not among those to be sent to the SDI (e.g., internal credit note or customers not residing in Italy and not subject to electronic invoicing with SDI delivery).

### *Fulfillment from DDT*

In the header of the invoice, by pressing the **Fulfillment from DDT** button, a form will open where it is possible to filter the DDTs related to the document's customer.

Through this procedure, it is possible to create a sales invoice from the fulfillment of the corresponding DDT. It is therefore possible to insert items into the invoice, fully or partially fulfilling an entire order or a line.

To use this procedure, some initial conditions must be met:
 -  the customer must be the same as the invoice;
 -  the DDT that you want to fulfill must have the *Printed* flag set;

#### Procedure 

The filters for customer and currency will be automatically set based on the customer selected in the invoice.

Once all desired *Filters* are set, clicking on the *Search* button will display one row in the grid for each printed, confirmed, and not fulfilled or partially fulfilled DDT.

:::note Note
The procedure takes all the data present in the DDT and consequently the purchasing conditions will be applied, even if these have currently changed (e.g., price list updates).
:::

:::note Note
Lines of type Note will always be visible, even if already fulfilled, until all lines of other types are fulfilled.
:::

In the results grid, the user then has the option to:

 1. select the *DDT in full*. To do this, simply check the flag at the beginning of the line.
 2. select only *some* of the *proposed items*. To do this, simply check the flag at the beginning of the item line.
 3. select only *some items* but only for a *specific quantity*. In this case, they must modify the quantity to be fulfilled.

To complete the procedure, click the *Transfer* button, which will retrieve all the data present in the DDT and bring it back to the invoice.

#### Specific Buttons 

> **Search**: allows searching for documents.  
> **Transfer**: allows transferring the data of the selected document into the new invoice.  
> **Forced Oreder Execution**: allows forced fulfillment of the DDT.  
> **Orders Processing**: allows fulfillment of the DDT.  
> **Expand**: allows expanding the entire DDT tree in the grid below, to view the contained items.  
> **Collapse**: allows compressing the view of the item lines and only displaying the DDT lines.  
> **Select all**: allows selecting all items from the list.  
> **Deselect all**: allows deselecting all items from the list. 

### *Get from sales orders*

In the invoice header, by pressing the **Get from sales orders** button, a form will open where it is possible to filter the orders related to the document's customer.

Through this procedure, it is possible to create a sales invoice from the fulfillment of the corresponding customer order. It is therefore possible to insert items into the invoice, fully or partially fulfilling an entire order or a line.

To use this procedure, some initial conditions must be met:
 -  the customer for the orders must be the same as the invoice;
 -  the order that you want to fulfill must have the *Printed* flag set and the *Order confirmation date*;
 -  the document types must be compatible: in the *Order Types* table, the order type to be fulfilled must have the corresponding invoice type set, while the *Invoices types* table must have the flag set on *Order* (which indicates that the invoice derives from an order);

Then you will need to set the *Delivery note type* that you want to create (which must correspond to what is set in the *Order Types* table) and the *Client* in the header of the new DDT. Once these data are entered, you must click the *Orders Processing* button to open the fulfillment form.

#### Procedure 

The filters for customer and currency will be automatically set based on the customer selected in the invoice.

Once all desired *Filters* are set, clicking on the *Search* button will display one row in the grid for each printed, confirmed, and not fulfilled or partially fulfilled order.

:::note Note
The procedure takes all the data present in the order, and consequently, the purchasing conditions present will be applied, even if these have currently changed (e.g., price list updates).
:::

:::note Note
Lines of type Note will always be visible, even if already fulfilled, until all lines of other types are fulfilled.
:::

In the results grid, the user then has the option to:

 1. select the *order in full*. To do this, simply check the flag at the beginning of the order line.
 2. select only *some* of the *proposed items*. To do this, simply check the flag at the beginning of the item line.
 3. select only *some items* but only for a *specific quantity*. In this case, they must modify the quantity to be fulfilled.

To complete the procedure, click the *Transfer* button, which will retrieve all the data present in the order and bring it back to the invoice.

#### Specific Buttons 

> **Search**: allows searching for orders.  
> **Transfer**: allows transferring the data of the selected order into the new invoice.  
> **Forced Oreder Execution**: allows for forced fulfillment of the order.  
> **Orders Processing**: allows for order fulfillment.  
> **Expand**: allows expanding the entire tree of orders in the grid below, to view the contained items.  
> **Collapse**: allows compressing the view of the item lines and only displaying the order lines.  
> **Select all**: allows selecting all items from the list.  
> **Deselect all**: allows deselecting all items from the list. 

### *Automatic unload*

Another procedure present in the header is the automatic posting from the warehouse. The button is enabled if the document is Printed and if the invoice is not linked to a DDT that has already been posted.      
We remind you that if the [Invoice Parameters](/docs/configurations/parameters/sales/sales-invoices-parameters) have automatic posting enabled, this procedure will be initiated automatically once the document is Printed.      
Once the procedure is started, Fluentis checks for the presence of warehouses and causes in the invoice lines and any presence of lots and serial numbers if required; if the procedure does not go well, the user will be notified with an error.      
If the procedure is successful, a [Warehouse Registration](/docs/logistics/warehouse/stock-records/record) is created that moves the items of the document, and the **Load** flag is set in the header.      

## **Items**

In this tab, all items with their related data are entered.

For everything that is not detailed in this document about the common functionality of forms, please refer to the following link [Common Functionality, Buttons, and Fields](/docs/guide/common).

import InsertMode from './../../../import/sections/insert-mode.md'

<InsertMode />

To insert a **New Item** in the grid, simply position yourself on the line to fill in the various data or use the **New** button present in the ribbon bar. The available columns are as follows:   

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Line type**: offers the possibility to select, from the combo-box, items with different characteristics:
>- *Codified Item*: items coded in the registry and can be recorded in analytical accounting and stored in the warehouse.
>- *Uncoded Item*: descriptive items that can be accounted for in analytical accounting but cannot be moved to the warehouse.
>- *Charge Item*: can be coded or uncoded items and are summarized distinctly in the summaries of documents; if the expense item is coded and of tax interest, it will be moved to the warehouse, if it is uncoded or not of tax interest, it will not be moved to the warehouse.
>- *Note Item*: descriptive notes reported in the document's print; they do not affect accounting and warehouse.
>- *GiveAway Item*: the gift item is managed as a coded or uncoded item for tax and warehouse purposes, but since it is a gift, it is counted separately in the document's summaries, and based on the VAT recovery flag, the VAT amount of the gift will be calculated either at the entity's expense or not.
>- *OnAccount Invoice*: the down payment article line is used to create down payment invoices.  
>- *OnAccount Invoice Reversal*: the down payment reversal article line closes the down payment article line, and down payments can be selected through a down payment help. This data can be entered automatically when entering the class or serial number directly because the line type 'coded item' is automatically selected.

:::note[NOTE]
If you start directly with item entry, its class, code, and line type - Coded item will be automatically entered.
:::

- **Barcode**: if the management of Barcodes has been enabled in the [Invoice Parameters](/docs/configurations/parameters/sales/sales-invoices-parameters), the Barcode column will appear to select the data for the item from the Barcodes entered in *Item Registry > Barcode*. 

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

- **Customer item**: if the management of Customer Item has been enabled in the [Invoice Parameters](/docs/configurations/parameters/sales/sales-invoices-parameters), the Customer Item column will appear, with the valid item code for the customer named in the document and entered in *Item Registry > Customers*. 

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

import Price from './../../../import/fields/item-price.md'

<Price />

:::note
In the absence of a price list, the proposed data is the **selling price** retrieved from *Item Registry > [Costs](/docs/erp-home/registers/items/create-new-items)* tab or will be recovered based on the parameters document settings. In the absence of this data as well, the price will be reported as 0.
:::

- **Origin amount**: this field shows the Unit Price multiplied by the item quantity, net of discounts.        

- **Item discounts**: the sum of the discounts applicable to the item is displayed.     

- **Item final discounts**: the sum of the final discounts entered for the article in the document Summaries is displayed.     

import Vat from './../../../import/fields/item-vat.md'

<Vat />

- **Sales Turnover**: the data is proposed based on what was entered in the *Item Registry > [Generalities](https://docs.ergonomicsoft.com/erp-home/registers/items/create-new-items/item-registry/generalities)* tab. If this is not present, no data is proposed, but when the invoice is accounted for, the value entered in the *Default Counterpart Expense/Revenue* field of the *Customer Registry > Accounting Data > Administrative tab* will be considered, or an error message will be generated.
If this is not present, no data is proposed, but when the invoice is accounted for, the value entered in the *Default Counterpart Expense/Revenue* field of the *Customer Registry > Accounting Data > Administrative tab* will be considered, or an error message will be generated.

#### Specific Buttons

> **Recalculate Recycle**: if the [Conai](/docs/sales/sales-flow/conai) is enabled for the document, it is possible to recalculate the values with this button after any changes.     

> **Update the Recycle values of the Item registry**: if in the *Conai Materials for the item* tab, Unit of Measure and/or Weight are modified, it is possible to transfer these values into the Conai section of the item registry.      

> **Packages management**: allows opening the management of returns packaging used in the purchase document.
The button becomes active if the document is saved but not loaded.
Clicking this button opens the corresponding form where: the quantity can be entered, the line selected, and the transfer of the selected packaging into the item lines can be executed by clicking the Execute button. In this form, the items that have been entered with the nature Packaging and that are present in the Returns Packaging table are reported.         
  
> **Update price lists**: clicking the drop-down next to the button accesses two procedures. The first procedure is **Refresh current price list**, which aligns the article's price internally with the Price List, following any price change directly in the item line. Instead, with the second procedure, **Create new price list with new validity**, it is possible to create a new personalized price list for the customer named in the document; the start and end dates for the new price list will be requested in a pop-up.      

> **Show/Hide details**: clicking this button makes the internal tabs in Items either visible or hidden.   

> **On-account management**: Fluentis allows handling down payment invoices and their reversal, procedures that can be opened by clicking this button.
> - **Create down payment invoice**
Down payment invoices can have a dedicated [Document Type](/docs/configurations/tables/sales/invoices-type) or not, as down payment management does not take place at the table level but at the article level.
Therefore, managing down payments requires creating a regular sales invoice, for which **Type**, **Customer**, etc. are required.
After filling in the Header data, it is possible to move to the Articles tab.
In the articles grid, enter a *Line Type 6 Down Payment Invoice*, a Free Description, the Price, VAT, and a Revenue (which should have as its account Customer Advances), and any other data. It is this type of line that determines the amount of the down payment.
Once the invoice is completed, it can be printed. 
At this point, the down payment invoice is confirmed.
When creating other documents for this customer, Fluentis will notify me of the existence of a down payment invoice.
> - **Reversal of down payment invoice**
To reverse a down payment invoice, it is necessary to create a new sales invoice addressed to the same customer.
In the Articles tab, if the customer has at least one down payment invoice, the **On-account management** button will be active in the ribbon bar. Clicking it will open the homonymous procedure.    
In the **On-account reversal** tab, it is possible to select the down payments to be reversed; after selection, clicking the **Create reversal invoice item** button will create the reversal, which will be reported in the grid below. 
Upon closing the form, it will be asked whether to insert the new reversal value in the invoice. If confirmed, it will be possible to consult the reversal line in the invoice's Articles tab, which will show the details of the previously created down payment invoice.

Several tabs are then present, which we will analyze below. 

### 3.1 Discounts/Price Lists

import SalesTabDiscount from './../../../import/sections/sales-tab-discount.md'

<SalesTabDiscount />

### 3.2 Item Data

- **Variant**: contains any variant of the item;    

import AlternativeUMQuantity from './../../../import/fields/alternative-um-quantity.md'

<AlternativeUMQuantity />

- **Warehouse, Reason, and Location**: proposes the warehouse and reason that will automatically appear when posting the related items from the warehouse. The data is taken from the *Invoices types* table;     

- **ITEM**: displays the selected item;     

- **Project**: is the project associated with the document or can be assigned with the help of field help; 

- **VAT recourse**: if set, the VAT of the gift is considered for the total invoice;     

- **Detail declarations**: contains any [intent declaration](/docs/finance-area/declarations/declarations/intent-declaration) of the customer;

- **Order reference**: refers to the order from which the invoice was created;

- **Brand**: represents the brand of the item, taken from its registry or the price list of the item;

- **Notes**: provides the ability to enter notes for each item;

### 3.3 Agents 

import SalesTabAgent from './../../../import/sections/sales-tab-agent.md'

<SalesTabAgent />

### 3.4 Lots and Serial Numbers 

In the two grids, the lots and serial numbers that must be posted from the warehouse and are linked to the item in the *Item Registry > [Lots and Serial Numbers](https://docs.ergonomicsoft.com/erp-home/registers/items/create-new-items/item-registry/lots-and-serial-number)* can be entered, or they can be entered manually.

This operation is conditional on the presence of lots and serial numbers in the warehouse. 

If the item does not provide for the management of Lots/Serial Numbers, this tab will be disabled.

#### Specific Buttons

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />  
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

In the various sections of this tab, the main information of the entire document and some specific buttons are presented.

### 4.1 VAT/Due Dates 

#### VAT Summaries 

The VAT summary of the document is proposed for each VAT code.

#### Due Dates Summary 

import SummariesDueDate from './../../../import/sections/summaries-due-date.md'

<SummariesDueDate />

Generally, due dates are recalculated if the payment is modified in the document header. The cases in which due dates are not updated if the payment is modified in the header are as follows:      
-	When the invoice has the SDI link and has a state different from Not Examined, Controlled, Cancelled, Excluded 
-	When there is at least one due date with the 'Manual Modification' flag active 
-	When the invoice has a connection with one or more Effects or is linked with a row FSAdvanceInvoiceMaturity
-	When there is a discount in the due date that does not come from the payment
-	When the sum of the Amount in the Payments grid is greater than the Taxable Amount of the invoice
-	Or if the invoices have been modified outside of Fluentis

In these cases, it is necessary to click the button on the toolbar 'Recalculate and group due dates (Ricalcola e raggruppa scadenze)'.    

### 4.2 Agents/Discounts/Expenses

#### Final Discounts on Items

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

#### Expenses/Discounts 

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

#### Other Fields 

**Final notes**: this is a free field that can be filled in by the user with the help of the 'Help for coded notes (Help note codificate)'.

### 4.3 Document Totals 

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

- **Percentage Total discount**: an additional final discount in percentage can be entered; entering this field automatically fills the next one.     

- **Value Total discount**: it is possible to enter a final discount in value.      

- **Rounding**: there is an additional field to round the document upwards.     

- **Total to pay**: finally, the definitive total obtained is reported.     

## **Transport**

If the invoice is accompanying, it is necessary to fill in the Transport tab.       
The present data are: 

- **Recipient**: the default recipient entered in the customer registry is proposed; if not present, the customer's address is taken.    
- **Destination**: the default destination of the recipient is proposed, if entered in the customer registry.        
- **Tracking Number**: free field. 
- **Volume**: the cumulative volume is proposed, resulting from the sum of the volumes of the items (the value is taken from the Item Registry > [Weights/Dimensions](https://docs.ergonomicsoft.com/erp-home/registers/items/create-new-items/item-registry/weights-dimensions)), when the unit of measure of the item's volume corresponds to that set in the invoice parameters. 
- **Net weight**: the cumulative net weight is proposed, resulting from the sum of the weights of the items (the value is taken from the Item Registry > [Weights/Dimensions](https://docs.ergonomicsoft.com/erp-home/registers/items/create-new-items/item-registry/weights-dimensions)), when the unit of measure of the item's weight corresponds to that set in the invoice parameters. 
- **Gross Weight**: the cumulative gross weight is proposed, resulting from the sum of the weights of the items (the value is taken from the Item Registry > [Weights/Dimensions](https://docs.ergonomicsoft.com/erp-home/registers/items/create-new-items/item-registry/weights-dimensions)), when the unit of measure of the item's weight corresponds to that set in the invoice parameters.     
- **Type of packaging**: combo box that refers to the corresponding table.     
- **Packages**: the number of packages is proposed, based on the data entered in the *Item Registry > [Weights/Dimensions](https://docs.ergonomicsoft.com/erp-home/registers/items/create-new-items/item-registry/weights-dimensions)*, in the *Items present in one package* or *Packages for item* fields. Only items with this field filled in are taken into account.     
- **Values manually modified**: with this flag, we allow modification of the Volume, Net Weight, Gross Weight, and Packages fields, which otherwise report data from the item registry without modification possibility.     
- **Transport**: it is necessary to select the figure who will take care of the transport, putting the flag on Sender, Recipient, or Carrier; based on the selection, the section below will change; if the transport is at the Sender's expense, it will be possible to enter Vehicle License Plate, Trailer, Start Date and Time of transport; if at the Recipient's expense, it will be possible to enter Vehicle License Plate, Trailer, Start Date and Time of transport; if at the Carrier's expense, the available fields will be Accounting Registry of the Carrier, License Plate, Trailer, Transport Date and Time, any Client, Loader, Owner, Loading Place. 

## **Linked documents**

In this tab, it is possible to consult the attached documents.
To attach documents, you can proceed in two ways:
- using the toolbar button **Documents** you can choose whether to attach a document already coded in Fluentis or to create a new Document to attach.       
- directly in the grid, using the right mouse button and selecting *Attach a file*, you will create a new Document to attach.