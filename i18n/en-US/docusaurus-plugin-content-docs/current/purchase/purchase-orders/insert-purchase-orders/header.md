---
title: Header
sidebar_position: 2
---

After selecting the mandatory data in the upper section, the user can continue entering the following data [manually](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#manual-entry) or with the [field help](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection#entry-with-field-help).

:::note Remember
If the document is *created automatically*, for example from the search filter of [**Customer Orders**](/docs/sales/sales-orders/search-sales-orders), from the [**Automatic Order Creation**](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) procedure, or from the [**Supplier Order Creation from Supplier Offer** procedure, this data is retrieved from the *source document* from which it was generated.
:::

By entering the **Supplier**, all the specific data previously set in the [supplier record](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) is automatically proposed. Among these, we recall: [*Currency*](/docs/configurations/tables/general-settings/currencies), *Exchange Rate*, *Currency Date*, [*Country*](/docs/guide/common/glossary/glossary-intro#country), *Language*, *Zone*, [*Shipping*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), *Port*, *Packaging*, [Price List](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list#price-lists) default and its validity period, [*Payments*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), *Discounts*, *Destination*, and *Carrier*. All these fields can be deleted or manually modified by the user.

### Optional Fields

> **Requested Delivery Date** and **Delivery Date**: if set before inserting the items into the order, they will be reported on the individual item lines. Alternatively, just press the *Replace Expected Delivery Date in Lines* button in the ribbon bar to update the dates on the item lines.  
> **Order Confirmation Date**: for *Order Types* that have the [Automatic Order Confirmation](/docs/configurations/tables/purchase/purchase-orders-type) flag, the current date is automatically entered at the time of order creation. To be able to fulfill a supplier order, a *Confirmation Date* must be entered.  
> **Start Date**: is the effective date for calculating payment deadlines.  

The following flags indicate the status of the order:
- **Printed**: this flag is automatically activated at the time of the final *Print* launch using the button in the ribbon bar. Alternatively, it can be manually activated to allow the order to be fulfilled in a DDT or invoice;  
- **Cancelled**: when the user wants to cancel a document instead of deleting it, the order is automatically marked as forcibly fulfilled in all its item lines;  
- **Archived**: when the user archives it.

> **Supplier Notes**: this field is retrieved from the [supplier record](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), but can also be entered manually.  
> **Our/Your Reference**: in these fields, an internal reference and a supplier reference for the document are usually indicated. If present, it is retrieved from the supplier record; otherwise, it can be entered manually.  
If the order is completed using the *Project Execution* procedure, the *Supplier Notes* and *Our/Your Reference* fields will display the information present in the corresponding fields of the purchase order. This transfer is valid only if the supplier order is created by retrieving data from a single source document.  
> **Initial Order Notes**: you can select notes that have been previously entered in the table located at *Configuration > Utilities > Manage Coded Notes*. For this, the user must double-click on the *Initial Notes* field to open the Coded Notes Help and select the data.  
> **Project**: using the field help, you can link the document to a [project](/docs/project-management/projects/search-projects-intro). This association works only at the header level of the item. The project is entered automatically if the supplier order arises from a document containing it (for example, from planned purchase orders).  
> **Production Job Order**: using the field help, you can link the document to a [production job order](/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders). If the order is created from the release of planned purchase orders, the job order is proposed automatically.

> **Country**, *Language*, *Zone* are retrieved from the supplier record if present; otherwise, they can be entered manually.  
> **Operator**: allows you to enter the user who creates the document. If in the Supplier Order Parameters the flag [Mandatory Operator Code](/docs/configurations/parameters/purchase/purchase-orders-parameters) is active, it will be mandatory to enter the employee in this field to save the order. [Employees](/docs/project-management/registers/employee/new-employee) must be previously entered in the *Employees* table.  

> **Fulfillment Status**: when the order is fulfilled via a DDT or an invoice, its *Fulfillment Status* automatically changes from *Unfulfilled* to *Partially Fulfilled* or *Fulfilled*. The user can force the fulfillment of an order that is not completely fulfilled, and when this happens, the fulfillment date is also saved in the *On Date* field.

> **Shipping**, *Port*, and *Packaging* are retrieved from the supplier record if present; otherwise, they can be entered manually.  
> **Price List**: if there is a price list with the *Default* flag in the supplier record, it will be proposed in this field along with its validity dates.  
> **Update Price Lists**: if this flag is active, the related purchase price list is automatically updated during saving with the item information. This flag can also be modified at the item line level.  
> **Points of Sale**: it is found under the *Shipping* menu item and is managed only by the verticalization concerning distribution chains. In the case of a supplier order created by transferring goods between points of sale in the same chain, this field displays the originating point of sale.

*Specific Buttons*

> **Project Execution**: calls the [procedure](/docs/purchase/purchase-orders/insert-purchase-orders/header-procedures) to create a supplier order from a purchase order. It is activated by entering the supplier and the type of supplier order.  
> **Replace Expected Delivery Date in Lines**: after specifying the *Requested Delivery Date* and/or *Delivery Date* in the order header, it is possible to mass replace these dates in the already entered item lines.

### Payments

The [Payment Terms](/docs/configurations/tables/general-settings/payment-terms) are automatically retrieved from the *Supplier Record > Payments tab* and can be modified/deleted by the user.

If a [Payment Type](/docs/configurations/tables/general-settings/payment-types) is associated with a financial discount, the discount amount is considered only for accounting purposes, i.e., in the document's deadlines and not in the total DDT.

If the document originates from an order or a supplier offer, the payment type is retrieved from the source document.

*Specific Button*

> **Delete Payments**: used to delete the selected payment lines.

### Discounts

Only the predefined discounts retrieved from the *Supplier Record > Discounts tab* are proposed and not those attributed to payment conditions or specific items. They can be modified/deleted by the user.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### Destination

Here, the information entered in the *Supplier Record > Deliveries tab* is proposed, only if default data exists. The combo box proposes all recipients, destinations, and carriers entered in the supplier record.

Shipping addresses (recipient/destination and carrier) can also be entered descriptively without being previously added among contacts.

### Carrier

In this field, it is possible to enter the *Carrier* who will ship the order. If this was entered in the *Supplier Record > Deliveries tab*, it can be selected from the drop-down menu of the second column. Alternatively, just double-click on the third column (*Carrier*) to select one of the company's contacts.

Optionally, you can add the *Carrier Plate* details and the *Transport Date/Time*.

### Extra Data

import TabExtraData from './../../../import/sections/tab-extra-data.md'

<TabExtraData />