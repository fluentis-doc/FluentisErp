---
title: New Purchase Delivery Note 
sidebar_position: 2
---

The form *Create Purchase Delivery Note* opens via the path **New DN** or through the *New* button located in the [Search Purchase Delivery Note](/docs/purchase/purchase-delivery-note/insert-purchase-delivery-note/search-delivery-note) form.

## *How to Create a Purchase Delivery Note*

## **1. Mandatory Data**

- **Type of purchase delivery note**: preset in *Configuration > Tables > Purchases > Types of Purchase Delivery Notes*.  
This field determines the numbering range of the document being entered and automatically proposes the *Number* of the delivery note based on the entry date and the last entered number;   
- **Supplier**: can be entered using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-con-il-help-di-campo) or [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#inserimento-manuale);   
- **Internal number**: automatically proposed based on the type, but can be manually modified while respecting the progression rule between date and number;  
- **Insert date**: the current date is proposed automatically, but can be manually modified while always respecting the progression rule between date and number;  
- **Number**: in this field, it is possible to enter a document number that may differ from that proposed in the previous field.   

The form contains a series of tabs.

## **Header**

After selecting the mandatory data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection); alternatively, based on the procedures chosen, the application automatically fills in the fields.

:::note Remember
If the document is *created automatically*, for example via [**Get from Orders**](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders), this data is taken from the *source document* from which it was generated.
:::

### 2.1 Supplier Data

By entering the **Supplier**, all specific data for the **Header** tab are automatically proposed, according to the data previously set in the [Supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in the fields corresponding to its address and in the sections: 

- **Currency**: section containing [Currency](/docs/configurations/tables/general-settings/currencies), [Exchange rate](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency date](/docs/guide/common/glossary/glossary-intro#currency-date).   
- **Country**: section containing data for [Country](/docs/guide/common/glossary/glossary-intro#country), [Language](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone).   
- **Delivery**: section containing data for [Shipping](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), [Freight](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), and the default [Price list](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#listini) along with its [Validity range](/docs/guide/common/glossary/glossary-intro#validity-date).

All these fields can be deleted or manually modified by the user.

### 2.2 Optional Header Data 

- **Delivery Note status**: the following flags indicate the status of the delivery note. At the time of the creation of the delivery note, none of these flags are active:   

    > **Controlled**: the active flag allows for the accounting/valuation of the delivery note.     
    > **Valorized**: this flag is activated when the delivery note is valued in the invoice.   
    > **Partial Valorized**: this flag indicates that the delivery note has been only partially valued in the invoice.     
    > **Forced Valorized**: this flag is activated if the delivery note has been forced closed with the forced fulfillment of items; for example, when the remainder will not be delivered and the document is considered closed even if it would not be.   
    > **Loaded**: this flag is activated automatically when the document is moved to the warehouse via the *Automatic Load* button on the toolbar or through the [warehouse loading procedure](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse).  
    > **Accounted**: automatically selected when the delivery note is accounted;  
    > **Cancelled**: the active flag allows for the cancellation of the delivery note.

:::note Note
Flags can be removed with the operation restore procedure.
:::

- **Arrival date**: in this field, the date of arrival of the goods can be entered.

- **Load date**: this field is automatically filled with the current date at the time of loading or with the date used for the warehouse registration, depending on the procedure used.   

- **Supplier notes**: this field is taken from the supplier registry, while in the case of creation from a single order, the same data contained in the corresponding field of the supplier order will be carried over. It can also be entered manually. 

- **Our/Your reference**: in these fields, an internal reference and a supplier reference for the document are usually indicated.    
If present, it is taken from the supplier registry; if not, it can be entered manually.
In the case that the order is completed with the [Fulfillment from order](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) procedure, the information present in the corresponding fields of the purchase order will be proposed in the *Supplier notes* and *Our/Your reference* fields (this transfer is valid only in the case of a delivery note created by pulling data from a single order).

- **Initial note**: notes that were previously entered in the corresponding table found in the path *Configuration > Utilities > Management of coded notes* can be selected; for this, the user must double-click on the field to open the Help and select the data; otherwise, they can be entered manually.

- **Project**: using the field help, the document can be linked to a project. This association works only at the header level of the item. The project is automatically entered if the delivery note was created through the fulfillment of an order that contains it.

### 2.3 Payments

**Payment Terms** are automatically reported from the *Supplier Registry > Payments tab* and can be modified/deleted by the user.

If a financial discount is associated with the **Payment type**, the discount amount is considered only for accounting purposes, i.e., in the document's deadlines and not in the total delivery note.

:::note Note
If the document arises from the fulfillment of a single *Purchase order* or from multiple orders with the same payment terms, the type and payment solution present in the orders are taken.
:::

#### Specific Button:

> **Delete Payments**: used to delete selected payment rows.

### 2.4 Discounts

Only the predefined discounts taken from the *Supplier Registry > Discounts tab* are proposed and can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Extra Data 

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />

## **Header Procedures:**

### *Automatic load on warehouse*

This procedure is launched with the aid of the homonymous button found in the document header and respects a series of parameters previously set in the delivery note (for details, refer to the identical procedure: [Registration of Purchase Delivery Note in Warehouse](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse)).

The result can be viewed in Logistics > [Records](/docs/logistics/warehouse/stock-records/records) or in the [Registration of Purchase Delivery Note in Warehouse](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse), *Summary* tab.

:::note Note
If in the [Purchase Delivery Note Parameters](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters#carico) the **Automatic load/unload** flag is enabled, upon activating the *Controlled* flag in the delivery note header, it will be automatically proposed to perform the loading of the delivery note. This field will be editable only once the *Controled* field is activated and the *Number* is entered.
:::

### *Fulfillment from Order*

In the header of the delivery note, pressing the **Fulfillment from Order** button will open the form where it is possible to filter supplier orders related to the document's supplier.

Through this procedure, it is possible to create a purchase delivery note from the fulfillment of the corresponding supplier order. It is therefore possible to insert items into the delivery note, fully or partially fulfilling an entire order or a line.

To use this procedure, there are initial conditions that must be met:

 - The order's supplier must be the same as the delivery note's;
 - The order to be fulfilled must have the *Printed* flag active and must have already been *Confirmed*.

Then, the *Delivery note type* to be created and the *Supplier* must be set in the header of the new delivery note. Once this data is entered, click on the *Orders Processing* button to open the fulfillment form.

#### Procedure

Filters for supplier and currency will be automatically filled based on the customer selected in the delivery note.

In the filter area, you can choose to display data in a *Grid*, a *Hierarchical structure*, or both.

> The **Hierarchical structure** allows for a clearer breakdown of the various orders and the items contained in each. It also allows for mass selection of all items within an order by simply selecting the order.    
> The **Grid** allows for greater customization of the form by adding fields from the Object navigator. In this case, mass selection can be done using the keyboard buttons and clicking the *Activate/Deactivate only selected rows* button in the ribbon bar.

Once all the desired *Filters* are set, clicking the *Search* button will display all printed, confirmed, and unfulfilled or partially fulfilled orders in the lower section.

:::note Note
The procedure picks up all the data present in the order and, as a result, the purchasing conditions present in the order will be applied, even if they have currently changed.   
In the case of fulfilling multiple orders with the same payment solutions and/or destination, the information contained in the order will be reflected in the delivery note; otherwise, it will take from the supplier registry. 
:::

In the results grid, the user then has the option to:

 - Select all or some of the proposed items: to do so, simply select the checkbox at the beginning of the item line. The *Quantity to Fulfill* will automatically be set equal to the *Residual quantity*.
 - Select some items for a *partial quantity*. In this case, the *Quantity to Fulfill* will need to be modified.

To complete the procedure, click the *Execution* button, which will pull all the data present in the order and transpose them into the delivery note.

#### Specific Buttons

> **Search**: allows you to search for supplier orders.  
> **Execution**: allows you to transfer the data of the selected orders into the new delivery note.  
> **Forced Order Execution**: allows for the forced fulfillment of the selected order or item rows.  
> **Select all**: allows you to select all items from the list.  
> **Deselect all**: allows you to deselect all items from the list.  
> **Activate only selected rows**: allows you to activate checkboxes for all selected rows with the mouse.   
> **Deactivate only selected rows**: allows you to deactivate checkboxes for all selected rows with the mouse.

:::important Remember (Ricorda)
In the case of multiple partial fulfillments for a specific item line within the same delivery note, it is possible to choose whether to sum the quantities into a single line in the delivery note or to keep distinct lines by respectively disabling or activating the **Unsumed Item Quantity Order** flag in the table of [Types of Purchase Delivery Notes](/docs/configurations/tables/purchase/purchase-delivery-notes-type/).
:::

## **Items**

In this tab, all items with their respective data are entered.

Data can be entered manually, with the aid of the field help, or may be proposed by related procedures ([Creating Delivery Note from Goods Receipt](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) or [Fulfilling Purchase Delivery Note from Orders](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders)).

To enter a new item into the grid, simply position yourself on the line to fill in the various data or use the *New Item* button present in the ribbon bar.

:::note Note
If the delivery note was created through the fulfillment of a supplier order, all data will be taken from the order.
:::

### 3.1 Mandatory Item Data 

import RowNumber from './../../../import/fields/row-number.md'

<RowNumber />

- **Line type** offers the option to select, from the combo box, items with different characteristics:
> - *Codified Item*: these are items coded in the registry and can be accounted for in analytical accounting and registered in the warehouse. <br />
> - *Unencoded Item*: these are descriptive items that can be accounted for in analytical accounting but cannot be moved to the warehouse. <br />
> - *Charge Item*: these are either encoded or unencoded items and are summarized distinctly in document summaries; if the expense item is encoded and of fiscal interest, it will be moved to the warehouse; if it is unencoded or not of fiscal interest, it will not be moved to the warehouse. <br />
> - *Note Item*: these are descriptive notes reported in the document printout; they do not affect accounting and warehouse.
> - *GiveAway Item*: the gift item is managed as either an encoded or unencoded item for tax and warehouse purposes, but being a gift, it is counted separately in the document summaries, and based on the VAT reversal flag, the VAT amount of the gift is calculated at the expense of the subject or not.

:::note Note
If you start directly with the item entry, its class, code, and line type (*Codified Item*) will be automatically entered.
:::

import ItemClassDescription from './../../../import/sections/item-class-description.md'

<ItemClassDescription />

import UM from './../../../import/fields/item-um.md'

<UM />

import Quantity from './../../../import/fields/item-quantity.md'

<Quantity />

- **Price**: the price is proposed from the price list entered in the contact registry; the reference price list for the item itself is displayed in the *Discounts/Price Lists* tab. The same document may contain items with prices taken from different price lists if multiple cascading price lists are associated with the entity (see [Contact Registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list)). By double-clicking in the **Price list** field (in the *Discounts/Price Lists* tab), the user can select a different price list from the default one, from which the price of the entered item will be taken.    
In the absence of a price list, the proposed data may be taken from the *last cost* of the item registry, provided that in the [Purchase Delivery Note Parameters](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) the flag *Zero Cost in Absence of Price Lists* is not activated.

- **Amount**: automatically calculated net of discounts.

- **Total discounts**: indicates the total amount of discounts present in the *Discounts/Price Lists* tab for each item line.   

- **VAT**: the value entered in the VAT field of the *Contact Registry* is prioritized. If this is not present, the value in the *Item registry* is proposed, but the user has the option to enter a different value. This is a mandatory field.

### 3.2 Optional Item Data 

- **Supplier Item Code/Description**: in this section, you can add the code and the description used by the supplier to identify the item; this data is automatically proposed if a supplier item has been associated in the item registry, in the [Preferential Vendors](/docs/erp-home/registers/items/create-new-item/item-registry/preferential-vendors) tab. 

- **Purchase turnover type**: the data entered in the [Generalities](/docs/erp-home/registers/items/create-new-item) tab of the item registry is proposed. If this is not present, no data is proposed, and at the time of invoice accounting, the value entered in the *Default Counterpart Cost/Revenue* field of the contact registry will be considered.

#### Specific Buttons

> **Recalculate Recycle**: if the [Conai Management](/docs/sales/sales-flow/conai) is enabled for the document, it is possible to recalculate the values with this button after any modifications.
>
> **Packages management**: allows the opening of the management of returnable packaging used in the purchase document.   
The button becomes active if the document is saved but not loaded.   
By clicking this button, the corresponding form opens where you can enter the quantity, select the line, and transfer the selected packaging into the item rows by clicking the **Execute** button. In this form, the items that have been inserted with the nature of Packaging and that are present in the table of [Returnable Packaging](/docs/configurations/tables/logistics/package-to-be-returned) will be reported.    
>
> **Update Location**: used to update the location on multiple item rows. The button becomes active when at least two items are selected and opens the location help from which to choose the new location for all selected items.   
>
> **Receptions reversal**: the button is active only for [Types of Delivery Notes](/docs/configurations/tables/purchase/purchase-delivery-notes-type/) that have the *Nature of DN* type *Return*. In the form, all delivery notes addressed to that supplier that have already been loaded into the warehouse are displayed. After selecting the item rows and the respective quantities to be reversed, it will be sufficient to press the *Receptions reversal* button to insert them into the delivery note.    
>
> **Update price lists**: the button **Update Current Price List** allows you to update the prices in the current price list for each selected item row.    
The button **Create new price list with new validity** instead, will open a pop-up where you can enter the validity dates of the new price list, which will only contain the selected rows and will be addressed to the supplier entered in the delivery note.

:::important Remember   
When creating/updating a price list using this procedure, only those discounts that have been manually entered in the delivery note will be reflected in the price list. 
:::

### 3.3 Discounts/Prices   

- **Price list**: the price list from which the item's price was derived is proposed, with the start/end validity date and with the special conditions (e.g., **Bracket type**) assigned to the item in the price list.

- **Manual price**: is activated automatically when the item's price has been entered or modified manually.

- **Discounts**: all discounts associated with the item are proposed, each with its own calculation and assignment basis.        

#### Specific Button

> **Delete discounts**: allows you to delete the selected discount from the corresponding grid. 

### 3.4 Item Data

Within this tab, further information related to the item is recorded/entered.

- **ITEM**: shows the class, code, and description of the item selected in the grid.   
- **Variant**: in this field, it is possible to select a variant of the item among those previously coded in the [Variants](/docs/erp-home/registers/items/create-new-item) tab of the item registry. If prices and/or discounts have been entered in the price list for each variant, they will be updated when selecting a different variant of the item.     
- **Note**: these are the notes related to the item line, which can also be entered through the coded note help. They will be reported in all documents generated from this.   
- **Warehouse and Template**: the warehouse and the corresponding reason are automatically proposed and will appear automatically at the time of loading the related items into the warehouse. These data are taken from the [Types of Delivery Notes](/docs/configurations/tables/purchase/purchase-delivery-notes-type) or from the supplier order, if the delivery note originates from the fulfillment of an order. They can be manually modified for each item line.   
- **Location**: is automatically proposed if a location has been associated with the used reason in the [Warehouse Template](/docs/configurations/tables/logistics/warehouse-templates) table or if the item has been entered in the [Item Location Map](/docs/logistics/warehouse/location/item-location-map/). It can be entered or modified manually.   
- **Valorized**: indicates whether the item line has been valued, i.e., if it has been fulfilled in a purchase invoice.   
- **Partial Valorized**: indicates whether the item line has been valued for a partial quantity.   
- **Forced Valorized**: indicates whether the item line has been forcefully valued.   
- **Project**: represents the project to associate with the document. If a project has been entered in the document header, it will be reported on all item lines; alternatively, it can be selected through the appropriate project help.   
- **Alternative Unit of Measure/Alternative Quantity**: if an alternative unit of measure has been coded in the [item registry](/docs/erp-home/registers/items/create-new-item/item-registry/alternative-um) with the *Default* flag and in the purchase order parameters the *Automatic proposal of alternative U.M.* flag was activated, these values will be automatically proposed when entering the item; otherwise, one of the coded alternative units of measure can be selected for the item.   
- **Alternative Unit of Measure Price**: if active, indicates that the price entered for the item line refers to the alternative unit of measure and not to the main one.    
This flag along with the *Alternative Measurement Unit* and *Alternative quantity* fields are visible only if the flag *Management of double measurement unit* has been activated in the [Supplier Order Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters).
- **Brand**: represents the item brand, taken from its registry or from the item's price list.
- **Order reference**: in case the delivery note is generated from an order, the reference to the order will be reported in this field.
- **Detail declarations**: the [Intent Declaration](/docs/finance-area/declarations/declarations/intent-declaration) used to propose the VAT of the item is recorded; from the combo box, it is possible to change the reference intent declaration if there are multiple valid declarations.

### 3.5 Lots and Serial Numbers

In the two grids, lots and serial numbers that must be loaded into the warehouse can be entered.   
If the item does not provide for the management of [Lots and Serial Numbers](/docs/erp-home/registers/items/create-new-item), this tab will be disabled.

:::tip Remember (Ricorda)
If in the [Purchase Delivery Note Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters) the *Batches and S.N. compulsory* flag is disabled, it will be possible to save the document without entering lots/serial numbers. Furthermore, if the *Lot Retrieval Type* coded in the [item registry](/docs/erp-home/registers/items/create-new-item) is *FIFO* or with *Expiry date*, at the time of loading the delivery note into the warehouse, the lots will be automatically proposed if they have not already been entered previously.
:::

#### Specific Buttons

import DeleteLot from './../../../import/buttons/delete-lot.md'
import DeleteSN from './../../../import/buttons/delete-sn.md'

> <DeleteLot />
> <DeleteSN />

### 3.6 Analytical

import TabAnalytic from './../../../import/sections/tab-analytic.md'

<TabAnalytic />

#### Specific Buttons

import DeleteCostCenter from './../../../import/buttons/delete-cc.md'
import DeleteProfitCenter from './../../../import/buttons/delete-pc.md'

> <DeleteCostCenter />
> <DeleteProfitCenter />

### 3.7 Extra Data

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

### 3.8 Attached Documents

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />

### 3.9 Conai Material for the Item

This tab is visible if Conai management has been activated for the active company.

This section will report the packaging materials that make up the item, along with the unit of measure, unit weight (reduced by any exemption percentage of the customer registry), and the total weight obtained from multiplying the number of items sold by the unit weight.    
Upon saving the document, or when pressing the **Recalculate Recycle** button, Fluentis will insert one or more expense rows retrieving the article of materials, with a quantity equal to the sum of the quantities and a price equal to the Conai cost for that material.

For more information on [Conai Management](/docs/sales/sales-flow/conai) in Fluentis, see the attached page.

### 3.10 Values Section

The section at the bottom right presents a summary of the costs that contribute to the formation of the final price of each selected item in the item grid. The fields present are: 

- **Unit price**: the value of the *Price* field; 
- **Quantity**: the value of the *Quantity* or *Alternative quantity* field, depending on the *Alternative Unit Price* flag;
- **Line amount**: Item Price * Item Quantity; 
- **Total discounts**: the sum of the item's discounts, including final discounts;
- **Amount**: Line Amount - Total Discounts;
- **VAT**: Amount * item's VAT rate; 
- **Total**: Amount + Tax.

## **Summaries**

In the various sections of this tab, the main information of the entire document and some specific buttons are presented.

### 4.1 Final Discounts

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Expenses 

Expenses entered in the contact registry, in the *Charges/Discounts* tab are proposed. In this grid, any expenses must be entered positively, while any discounts negatively.      

These elements are applied to the entirety of the document and are not distributed among the item rows. They may include additional costs, global discounts, or surcharges applied to the entire document. If set in the item registry, they are automatically proposed at the time of creating the document.

- **Type/Description**: allows the selection of expense types (defaulted in the [Expense Types table (Tipi spese)](/docs/configurations/tables/general-settings/expenses-types)); assigning the expense type a percentage to apply.  
- **Charge amount**: indicates the value of the expense expressed in the document's currency.    
- **VAT**: indicates the VAT rate to apply to the entered expenses.   
- **Percentage/Value**: indicates whether to calculate expenses with a percentage or a predefined monetary value. If *value* is selected, the amount of the expense must be entered under the corresponding item.      
- **Percent Completed**: numerical value of the expense percentage.  

:::note Note
If the *Charge type* entered has the [distributed flag](/docs/configurations/tables/general-settings/expenses-types) active, during the loading of the delivery note into the warehouse, the expense will be distributed across all items based on the total amounts of each item line. The result of the expense distribution is visible in the [warehouse registration](/docs/logistics/warehouse/stock-records/record).    
1. If items have a price: the total expense will be proportionally distributed over the net amounts of each item; the result will be added to the initial price of the item in the *Total amount* field of the registration. If for some lines the amount is 0, it will be considered as 1 to allow for an expense distribution across all items.   
2. If all items have a price of 0: the expense will be evenly distributed among all item lines, and from this distribution, the *movement amount/management amount* will be calculated in the registration, taking into account the quantities of each item.   
:::

### 4.3 VAT Summaries

The VAT summary of the document is proposed for each VAT code.

### 4.4 Deadline Summaries 

Represents the summary of the document's deadlines, for each *type* and *payment solution*.  
- **Number**: progressive row value.  
- **Payment**: represents the alphanumeric code of the *Payment type* taken from the *Document Header > Payments tab*.  
- **Amount**: calculated amount of the deadline. Can be forced manually, in which case the subsequent *Manually edit* flag automatically activates. (Automatic controls and alerts regarding the balance between the values of the deadlines and the total invoice will trigger)
- **Expiry date**: Date of the calculated deadline. Can be forced manually, in which case the subsequent *Manually edit* flag automatically activates.
- **Collection charges**: Field where calculated collection costs are reported.
- **VAT**: to apply to the collection expenses (it can also be set manually).
- **Payment Reason**: it is possible to directly insert an accounting reason in the invoice that gives rise to an automatic journal entry for collection/payment. NB be careful with the reason template because it will use the accounts present even without sub-account, which is why the following field is present.
- **Customer/Supplier Sub-Account**: the account used to collect/pay for the deadline (cash or bank, for example).
- **Single**: activates the accounting of the closure of deadlines in the automated journal entry.
- **Payment Reference Models**: Creation model for the payment code. In some foreign locations, each invoice deadline requires a code assigned by the invoicer: this code is structured according to specific models (table MB_PaymentReferenceModels), in order to build the code with an algorithm.
- **Payment Model Codes**: This is the code (structured as per the previous model) to report in the transaction and then in the payments sent to the bank, so that the bank communicates to the beneficiary which deadline has been paid (thus automating the import from banking movements with transaction closure). This will then be filled into the transaction and in the Sepa file.
- **Deadline for Pre-Payment Discount**: This is a field included in the Sdi invoice track, the deadline to apply the financial discount.
- **Discount type**: Type of financial discount.
- **Mat. value**: Value of the financial discount on collection.

### 4.5 Other Fields (Altri campi)

- **Volume**: the cumulative volume is proposed, resulting from the sum of the volumes of the items (the value is taken from the *Item Registry > tab* [*Weights/Dimensions*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions)), when the volume unit of measure of the items corresponds to that entered in the delivery note parameters. Only items with this field filled in are taken into consideration.

- **Net/Gross Weight**: the cumulative net weight is proposed, resulting from the sum of the weights of the items (the value is taken from the *Item Registry > tab* [*Weights/Dimensions*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions)), when the weight unit of measure of the items corresponds to that entered in the delivery note parameters. Only items with this field filled in are taken into consideration.

- **Packages**: the number of packages is proposed, based on the data entered in the *Item Registry > tab* [*Weights/Dimensions*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions), in the fields *Items present in one package* or *Packages for item*. Only items with this field filled in are taken into consideration.

- **Values manually modified**: activating this flag will allow the manual modification of the values for *volume*, *net weight*, *gross weight*, and *packages*.

### 4.6 Document Totals (Totali documento)

import SummariesDocumentTotal from './../../../import/sections/summaries-document-total.md'

<SummariesDocumentTotal />

## **Transport**

The tab contains information regarding the transport of the items.

The combo boxes propose all *Recipients*, *Destinations*, and *Carriers* entered in the *Contact Registry > tab [Shipping](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* but can be manually entered. 

The present data are: 

- **Sender**: in this field, it is possible to enter the account/sub-account of the sender.
- **Recipient**: the default recipient entered in the customer registry is proposed; if not present, the customer's address is taken.    
- **Destination**: the default destination of the recipient is proposed, if entered in the customer registry.        
- **Volume**: the cumulative volume is proposed, resulting from the sum of the volumes of the items (the value is taken from the *Item Registry > tab* [*Weights/Dimensions*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions)), when the volume unit of measure of the items corresponds to that entered in the delivery note parameters. 
- **Net weight**: the cumulative net weight is proposed, resulting from the sum of the weights of the items (the value is taken from the *Item Registry > tab* [*Weights/Dimensions*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions)), when the weight unit of measure of the items corresponds to that entered in the delivery note parameters. 
- **Gross Weight**: the cumulative gross weight is proposed, resulting from the sum of the weights of the items (the value is taken from the *Item Registry > tab* [*Weights/Dimensions*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions)), when the weight unit of measure of the items corresponds to that entered in the delivery note parameters.     
- **External Appearance of Goods**: a combo box that refers to the corresponding table where the data can be coded.     
- **Packages**: the number of packages is proposed, based on the data entered in the *Item Registry > tab* [*Weights/Dimensions*](/docs/erp-home/registers/items/create-new-item/item-registry/weights-dimensions), in the fields *Items present in one package* or *Packages for item*. Only items with this field filled in are taken into consideration.     
- **Values manually modified**: with this flag, we enable the modification of the Volume, Net Weight, Gross Weight, and Packages fields, which otherwise report the data from the item registry without the possibility of modification.     
- **Customs Office Entry/Exit**: fields used for eTransport for the Romanian version, referring to the *Customs Office* table.     
- **Border Crossing Entry/Exit**: fields used for eTransport for the Romanian version, referring to the *Border Crossing* table.      
- **Transport**: it is necessary to select the person who will take care of the transport, marking the flag in *Sender*, *Recipient*, or *Carrier*; based on the selection, the section below will change; if the transport is at the expense of the *Sender*, it will be possible to enter Vehicle License Plate, Trailer, Start Date, and Time of Transport; if at the expense of the *Recipient*, it will be possible to enter Vehicle License Plate, Trailer, Start Date, and Time of Transport; if at the expense of the *Carrier*, the available fields will be the Carrier's accounting registry, License Plate, Trailer, Transport Date and Time, possible Consignor, Loader, Owner, Place of Loading.