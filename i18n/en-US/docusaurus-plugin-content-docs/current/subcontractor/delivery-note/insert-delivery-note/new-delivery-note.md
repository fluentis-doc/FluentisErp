---
title: New DN 
sidebar_position: 1
---

The form opens via the path **Subcontractor > Orders > New Subcontractor Order** or through the **New** button found in the [Search Subcontractor Orders form](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders).

## **1. Mandatory data**

The application requires the user to enter the **Supplier** (contractor) that the DN is issued to, using the appropriate account help available in the header of the DN. Automatically, the current **Year**, **Number**, **Date**, and **Delivery DN Type** (proposed to be the same as that entered in the *Subcontractor Parameters*), will be suggested, which can be modified by the user.

## **2. Header**

After selecting the mandatory data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), or, based on the data entered in the subcontractor's registry, the application automatically fills in the fields *automatically*.

### 2.1 Supplier data

Entering the **Supplier** will *automatically propose* all specific data from the **Header** tab, according to the previously set data in the [supplier registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) in the fields corresponding to its address and in the *sections*:  

- **Currency**: [Currency](/docs/guide/common/glossary/glossary-intro#currency), [Exchange](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Currency date](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Country**: [Country](/docs/guide/common/glossary/glossary-intro#country), [Language](/docs/guide/common/glossary/glossary-intro#language), [Zone](/docs/guide/common/glossary/glossary-intro#zone)
- **Delivery**: [Shipping](/docs/guide/common/glossary/glossary-intro#shipment), [Carriage](/docs/guide/common/glossary/glossary-intro#carriage), [Packing](/docs/guide/common/glossary/glossary-intro#packing), [Price list](/docs/guide/common/glossary/glossary-intro#sales-price-list) and its [validity range](/docs/guide/common/glossary/glossary-intro#validity-date)

### 2.2 Other fields 

**Delivery Note status**: these 2 flags identify the status of the Delivery Note, which can be printed (after the physical print of the Delivery Note report has been launched) and downloaded (after the Delivery Note has been downloaded from the warehouse). If the Delivery Note has not been printed, it cannot be downloaded;  

**Our/Your reference**: when the procedure [Fulfillment from order](/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders) is completed, the information present in the same field of the order is also proposed;  

**Project**: using the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), you can link the document to a project.  

#### Specific buttons

> [Expected deliveries](/docs/subcontractor/delivery-note/insert-delivery-note/new-delivery-note): calls up the procedure to create a Delivery Note from an order. It activates with the entry of the supplier and Delivery Note type. The order to be fulfilled must have the *Printed* flag set and the *Order confirmation date* must be filled in;  
> **Automatic unload**: used to automatically download the warehouse with the selected items. This field will be editable only once the *Printed* field is activated.

### 2.3 Payments

The **Payment Terms** are automatically reported from the *Supplier Registry > Payments tab* and can be modified/deleted by the user.

If a financial discount is associated with the **Payment type**, the discount amount is considered only for accounting purposes, i.e., in the document deadlines and not in the total Delivery Note.

If the document originates from an order, the payment types can be taken from the first document or from the supplier registry. 

#### Specific buttons

> **Insert/Delete payments**: used to insert/delete the selected payment lines.

### 2.4 Discounts

Only the predefined discounts retrieved from the *Supplier Registry > Discounts tab* are proposed and can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Agents

Indicates the agent code and its commission for each item line. The code and percentage defined in the *Subcontractor Registry > Agents tab* are proposed.

If the commission is not linked to the subcontractor in their registry, the agent must still be entered but with NULL commission because if it were with a commission of 0, it would mean that the agent is linked to the agent but does not receive commission.

The same section will be repeated for each item line in the respective *Agents tab*.

#### Specific button  

**Delete agents**: allows deleting the selected agents.

## **Header procedure:**

### *Fulfillment from Order*

In the header of the delivery note, by pressing the button **Expected deliveries**, the form will open where it is possible to filter the orders related to the customer of the document.

Through this procedure, it is possible to create a delivery note from the fulfillment of the corresponding order. It is then possible to enter the items into the delivery note, fulfilling either completely or partially an entire order or a line item.

To use this procedure, there are some initial conditions that must be met:

 - The supplier of the orders must be the same as the delivery note; 
 - The order you want to fulfill must have the flag *Printed* set; 
 - The document types must be compatible.

#### Procedure  

The filters for supplier and currency will automatically be carried over based on the supplier selected in the delivery note.

Once all desired *Filters* are set, clicking the *Search* button will display a row in the grid for each printed and unfulfilled order, or partially fulfilled.

:::note NOTICE
The procedure retrieves all data present in the order, and as a consequence, the conditions present in the order will also apply, even if these have currently changed.
:::

In the results grid, the user then has the option to:

 1. select the *entire order*. To do this, simply select the flag present at the beginning of the order row.
 2. select only *some* of the *Items* proposed. To do this, simply select the flag present at the beginning of the item row.
 3. select only *some items* but only for a *specific quantity*. In this case, the user will need to modify the quantity to fulfill.

To complete the procedure, click the **Transfer** button, which will retrieve all the data present in the order and will report it in the delivery note.

#### Specific buttons

> **Search** allows you to apply the search filters to the entire database of entered and not yet fulfilled or only partially fulfilled orders.  
> **Transfer** allows transferring the selected items in the underlying window to the grid of the Work Account delivery note's Delivery tab.  
> **Expand** allows expanding the entire tree of orders in the underlying grid to view the items contained in them.  
> **Collapse** allows compressing the view of item rows, displaying only the order rows.  
> **Select all** allows selecting all items from the list.

## **3. Delivery** 

In this tab, the materials that must be delivered to the subcontractor are entered. They can be entered automatically through the *Fulfillment from Order* procedure or manually by the user.

#### Specific buttons

> **Insert Material**: calls the procedure to insert a new material into the item grid of the 'Deliveries' tab.  
> **Delete materials**: calls the procedure to delete a material from the item grid of the 'Deliveries' tab. 

#### Specific fields

**Order C/L number and year**: the number and year of the work order from which the item line was taken are displayed. If the line was inserted manually, this column remains blank;

**Estimated delivery date**: represents the expected delivery date of the material, taken from the *Materials to Deliver* tab of the work order from which the item line of the Delivery Note was generated;

**Estimated return**: represents the expected return date of the finished product that will be made by the subcontractor using the material being delivered, taken from the *Items to Produce* tab of the work order from which the item line of the Delivery Note was generated;

**Line number**: represents a simple progressive number of the document line, editable by the user;

**MU**: represents the management unit of measure of the item being delivered;

**Phase/Subphase**: displays the phase code and the subphase code of the production phase of the production order to which the item may be linked; this occurs if the work order from which this Delivery Note line was created was generated from an external phase of a production order;

**Quantity**: represents the quantity that has been decided to be delivered to the subcontractor, editable by the user;

**Warehouse**: represents the code of the warehouse from which the goods to be delivered to the subcontractor are taken. The warehouse code is proposed to be the same as that set in the line of the 'Materials to Deliver' tab of the work order from which the Delivery Note line was generated, but it is editable by the user. If the flag is active, present in the Work Order Parameters, called 'Consider warehouses based on the Delivery Note type', the proposed warehouse will be the one set in the 'Sales Invoice Types' table, in the appropriate 'Warehouse' column;

**Template**: represents the code of the warehouse reason that will be used to withdraw the goods from the warehouse necessary to deliver to the subcontractor. The code of the warehouse reason is proposed to be the same as that set in the line of the 'Materials to Deliver' tab of the work order from which the Delivery Note line was generated, but is editable by the user. If the flag is active, present in the Work Order Parameters, called 'Consider warehouses based on the Delivery Note type', the proposed reason will be that set in the 'Sales Invoice Types' table, in the appropriate 'Reason' column;

**Price**: represents the unit price of the item. This is a column editable by the user and is not mandatory. It is usually used when the Delivery Note needs to pass through customs;

**VAT**: represents the VAT code, or it can be automatically proposed by the procedure that retrieves it from the subcontractor’s registration or from the item registration present in the line, depending on the cases. The combo box draws from the 'VAT Rates' table found in 'General Settings';

**Purchase turnover type**: represents the code of the Invoicing Type, or it can be automatically proposed by the procedure that retrieves it from the item registration present in the line. The combo box draws from the 'Purchasing Invoicing Type' table found in the 'Purchasing Area Tables';     

**Weights**: the total Net Weight and Gross Weight of the item lines are reported. The weights of the item registration are multiplied by the line quantity.

### 3.1 Batch Shipping

In this tab, the user is given the option to set the batches to be withdrawn from the warehouse with the quantity of the item taken for sending to the subcontractor, in case there are multiple different batches withdrawn with the same Delivery Note line.

The batch grid allows the user to select the batch by accessing the appropriate 'Batch Help', which filters among the available batches of the item selected in the upper grid. The information reported in the batch grid includes batch code type, batch code, supplier batch, batch type, start date, and expiration date, batch quantity, location, and supplier information of the batch (account, subaccount, and company name). Obviously, the sum of the quantities of the various batches must exactly match the quantity delivered of the item line.

### 3.2 Material Data

In this tab, the following information related to the selected line in the grid is displayed:

**Class, code, description, and variant of the item, quantity to be delivered, unit of measure, Warehouse, Reason, Order C/L**: this is a series of information simply taken from the selected Delivery Note line;

**Project**: represents the sales order associated with the Delivery Note line. Usually, the sales order entered in the line of the work order from which the Delivery Note line was generated is called;

**Notes**: in this field, the user can enter a note related to the selected line.

## **4. Summaries**

In the Summaries, the main information of the entire document is presented.

### 4.1 Final Discounts 

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

### 4.2 Expenses/Discounts/Final Increases

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

### 4.3 Other Fields 

**Volume**: the cumulative volume is proposed, resulting from the sum of the volumes of the items (the value is taken from *Item Registry > Weights/Dimensions tab*), when the unit of measure of the item volumes corresponds to that entered in the invoice parameters. Only items with this field filled will be taken into account;  
**Net weight**: the cumulative net weight is proposed, resulting from the sum of the weights of the items (the value is taken from *Item Registry > Weights/Dimensions tab*), when the unit of measure of the item weights corresponds to that entered in the invoice parameters. Only items with this field filled will be taken into account;  
**Gross Weight**: the cumulative gross weight is proposed, resulting from the sum of the weights of the items (the value is taken from *Item Registry > Weights/Dimensions tab*), when the unit of measure of the item weights corresponds to that entered in the invoice parameters. Only items with this field filled will be taken into account;  
**Packages**: the number of packages is proposed, based on the data entered in the *Item Registry > Weights/Dimensions tab*, in the fields *Items present in one package* or *Packages for item*. Only items with this field filled will be taken into account.  

### 4.4 Transportation

The *Transport made by* present in *Contact Registry > Delivery tab (/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)* (radio button: Sender/Recipient/Carrier) is proposed automatically, but the data can be modified.

### 4.5 Document Totals 

**Items gross amount**: represents the sum of the values of all items;  
**On-account**: represents the value of any deposit received for the document;  
**Amount giveaway**: represents the amount of gift-type items entered in the *Items tab*;  
**Total discounts applied**: represents the total value of discounts applied to the items, but excluding final discounts;  
**Items net amount**: *Items gross amount* – *Total discounts applied*;  
**Total final discounts**: represents the value of final discounts expressed as a percentage of the gross amount of items;  
**Net amount of final discounts**: *Items net amount* - *Total final discounts*;  
**Collection charges**: represents the sum of the collection fees entered in the *Expenses grid*;  
**Stamp charges**: represents the sum of the stamp duty fees entered in the *Expenses grid*;   
**Origin amount**: *Items net amount* – *Final discounts* + *Total undocumented expenses* + *Total documented expenses*;  
**VAT**: represents the sum of the values contained in the VAT summaries;  
**Total**: *Origin amount* + *VAT*.