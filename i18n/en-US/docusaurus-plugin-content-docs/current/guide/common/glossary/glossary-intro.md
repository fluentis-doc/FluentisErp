---
title: Glossary 
sidebar_position: 5
---

In this section, the definitions of the most commonly used and recurring fields found in various forms of the management system will be collected.

To search for the detailed explanation of a field, simply position yourself on the article related to the initial letter of the field you want to look up.

### A

#### Year 
This field is a generic field that will be found in many forms, where it will show the year in which the document is created or in which a specific operation is performed; in most forms, it is a field that is filled in automatically;

#### Canceled  
The active flag allows the document to be canceled.

#### Item 
Generic field that will be found in many forms where the class, code, and description of the item (material) that you want to create, view, move, purchase, produce, or sell will appear.

#### Coded Item 
It is a line type that identifies coded items; coded items are all those items that are coded in the registry and can be accounted for in analytical accounting and recorded in the warehouse;

#### Non-Coded Item 
It is a line type that identifies non-coded items; non-coded items refer to all those items that are descriptive and can be accounted for in analytical accounting but cannot be moved in the warehouse;

#### Free Item 
It is a line type that identifies free items; a free item is an item that is managed as one coded and non-coded for tax and warehouse purposes but being a free item, it is counted separately in the summary of the DDT;

#### Item Note 
It is a line type that is a simple note, which does not affect accounting and warehouse; in this field, notes related to the items that you want to be included in sales/purchase documents can be written.

#### Expense Item 
It is a line type that identifies coded or non-coded items that are summarized distinctly in the summaries of the documents; if the expense item is coded and of tax interest, it will be moved in the warehouse, if not coded or if it has no tax interest, it will not be moved in the warehouse;

#### Audit Trail 
This section can be found in various forms and serves for the traceability of operations; usually, in this section, you can see the user who created a document and/or made the last modification along with the insertion/creation and modification dates.

### B




### C

#### Exchange Rate {#currency-exchange}
If the company's currency is the same as that of the document, the reported value will be 1; otherwise, the value will be taken from the *Currency Exchange* table or from the *Fixed Exchange Rates for EURO* table found in the path *Configuration > Tables > Administration*.

#### Loaded 
This flag, if active, indicates that the items on the delivery note and/or purchase invoice have been loaded into the warehouse through the procedure of [Loading Purchase Delivery Notes to Warehouse](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) and [Loading Purchase Invoices to Warehouse](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse). For loading procedures of the documents, please refer to the relevant articles.

#### Warehouse Template
This field refers to the pre-coded values in the related table found at Home > Tables > Logistics; in this field, the warehouse reason related to the warehouse operation you intend to perform will be found; in the documents, this field, along with the field **Warehouse Template Description**, is automatically reported if present in the MRP Parameters of the item registry, in the **Warehouses** tab.

#### CIG
Contract identification code; in order to track the actual traceability of payments by public administrations, electronic invoices issued to public administrations must contain the CIG code and the CUP code; this is a unique alphanumeric code that identifies a specific procurement or lot and can be found in sales invoices and sales orders. 

#### Item Class {#item-class}
This field includes mandatory information about the item; the class refers to the belonging class of the item within the database (examples of classes: Raw material, Semi-finished, Finished product, etc.); the classes used to group items can be chosen at the time of creation/duplication of an item and are pre-coded within the related table **Classes** found in the path **Tables > Logistics**. In all documents, the item will appear with its class and description.

#### Item Code {#item-code}
This field represents a specific alphanumeric code that encodes the item based on its specific characteristics; the code along with the class constitutes the item's *name*, which must be unique;

#### Combo Box
Also defined as a drop-down field, is a field that requires selecting an entry from a list. The selectable items can be fixed (the user cannot add new entries, typically because the related table is reserved for the basic logic of the system) or can be added and/or modified (the user can access the table that feeds the combo box, which usually has the same name; for convenience, instead of searching for the table, you can right-click and *Open form*).

#### Job Order
This field refers to the sales job; it is found in sales and purchase documents and allows linking the document to an existing sales job;

#### Production Job
This field refers to production jobs; it is found in the production area and in documents related to production, and in purchase invoices.

#### Accounted
Flag that is found in the header of a sales and purchase invoice and, if active, indicates that the invoice has been accounted for through the procedure of  [Accounting Sales Invoices](/docs/sales/sales-invoices/accounting/sales-invoices-accounting)  and 'Accounting Purchase Invoices'. For the explanation of this procedure, please refer to the relevant articles;

#### CUP
Unique project code; in order to ensure the actual traceability of payments by public administrations, electronic invoices issued to public administrations must contain the CUP code and the CIG code; this code is represented by a 15-character alphanumeric string generated by the CUP system; this string remains unchanged as it identifies and accompanies a public project from the moment of its inception. It is found along with the CIG code in sales invoices and sales orders.

**How to obtain the alternative quantity**: regarding the calculation of the quantity expressed in the alternative unit of measure, this can be done by dividing or multiplying the management quantity by the conversion factor depending on the chosen option. This parameter is defined and is valid for all items. The conversion factor is set at the item registry level for each alternative unit of measure set in the registry itself.


### D

#### From number....To number
These fields, common to many filtering areas of various forms, are used to filter documents based on their identifying number; with these fields, you will therefore define from which to which document number you want to display the results.

#### Arrival Date
This field indicates the arrival date of the purchased goods; we find this field in purchase documents such as invoices and delivery notes, or in return delivery notes and invoices.

#### Loading Date
This field indicates the date when the received goods are loaded into the warehouse; we find this field in purchase documents like invoices and delivery notes or in return delivery notes and invoices.

#### From Entry Date...To Entry Date
These fields, common to many filtering areas of various forms, are used to filter documents based on the period of entry into the system; with these fields, you will define the search period.

#### Document Date
Date of the document (e.g., purchase invoice); a field present in active and passive cycle documents and in accounting registrations. It may also be present (with a more generic meaning) in non-tax documents.

#### Goods Ready Date

#### Start Date/End Date of Validity ({#validity-date})
In these two fields, we will find the start date of validity of the price list (i.e., from when the prices of that price list will come into effect in various documents) and the end date of validity (that is, when the prices of that price list will cease to be valid and will be replaced by new prices in a new price list).

#### Expiration Date
Payment expiration date calculated from the payment terms or set manually. This field is generally present in active and passive cycle documents (orders, delivery notes, invoices, etc.). The calculation of the date checks the payment terms (inserted in the header) and in particular the payment solution (e.g., 30 days from the invoice date) and adds them to the value of the field **(Date) Due Date** (the latter also present in the document - by opening the 'Shipping' expander). See also **Due date**.

#### Currency Date {#currency-date}
Date on which the exchange rate value is calculated as a ratio between the company's currency and that of the supplier/customer, according to the settings of the *Currency Exchange* table located in the path *Configuration > Tables > Administration*.

#### Due Date
Field present in active and passive cycle documents (e.g., invoices). At the time of document creation, it is automatically set equal to the document date, but can then be changed manually. Based on this field, the due date(s) of payment is calculated based on the payment terms (type and solution) set for the document.

#### Recipient ({#recipient})
In customer/supplier orders, in delivery notes for purchases/sales, and in purchase/sale invoices, this field is automatically filled with the default recipient previously entered in *Contact Registry > Accounting Data tab > Delivery tab*.  
If the recipient is different from the default one, the information can be modified directly in the **Recipient** field of the documents.

#### Destination ({#destination})
In customer/supplier orders, in delivery notes for purchases/sales, and in purchase/sale invoices, this field is automatically filled with the default recipient previously entered in *Contact Registry > Accounting Data tab > Delivery tab*.  
If the destination is different from the default one, the information can be modified directly in the **Destination** field of the documents.  
The destination of the goods can *coincide* with the Recipient, but it can also be different if the recipient has, for example, multiple locations or warehouses.

#### Currency ({#currency})
Currencies are coded in the related table **Currencies** located in the path *Configuration > Tables > General Settings*. In documents, the information entered in *Contact Registry > Accounting Data tab > Administration tab* is proposed by default to indicate the default currency for the items related to the subject.

#### Attached Documents
In this section, present in various forms, the documents that have been attached and are related to the form you are in will be displayed;

### E

#### EDI
The EDI (Electronic Data Interchange) system allows the exchange of documents between the information systems of different companies through a dedicated channel and in a defined format so that no human intervention is required except in some exceptional cases; it allows sending such documents as customer orders, invoices, price lists, etc., which were previously sent via email, fax, or mail.

#### Expander ({#expander})
They are represented by two small arrows and allow you to view (open ![](/img/it-it/guide/glossary/e/image01.png)) or hide (closed ![](/img/it-it/guide/glossary/e/image02.png)) the data they contain.


### F

#### Purchases Turnover 
In this field, the data entered in the 'General Information' tab of the item registry is proposed. It therefore proposes the turnover type for purchases that links to the sub-accounts for accounting the purchase invoices. If this is not present, no data is proposed, but at the time of accounting the invoice, the value entered in the 'Default Counterpart Cost/Revenue' field of the supplier registry will be considered;

#### Sales Turnover
In this field, the data entered in the 'General Information' tab of the item registry is proposed. It therefore proposes the turnover type for sales that links to the sub-accounts for accounting the sales invoices. If this is not present, no data is proposed, but at the time of accounting the invoice, the value entered in the 'Default Counterpart Cost/Revenue' field of the customer registry will be considered;

#### Form
Operational mask of the program;


### G

#### Perishable Goods Payment Days
It is linked to Article 62; for perishable goods, the invoice must be created and paid within a deadline of 30/60 days depending on the type of item. In this case, this control is applied both to the item and to the type of payment entered to ensure that invoices with a due date greater than that indicated cannot be issued.


### I

#### Packaging ({#packing})
Types of packaging are coded in the related table **Packaging** located in the path *Configuration > Tables > Logistics*. Additionally, this data can be entered in *Contact Registry > Accounting Data tab > Delivery tab* to indicate the default packaging for items related to the subject.  
If this data is *present* in the [Registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), it will be *offered* by default in all *documents* related to that subject.

#### Line Amount
Field found in sales and purchase documents, where the 'simple' amount of the item line (quantity x price) is reported, which does not take into account VAT and any discounts.

#### Taxable Amount

#### VAT
It is a mandatory data and can be found in all sales/purchase documents.


### L

#### Language ({#language})
Languages are coded in the related table **Languages** located in the path *Configuration > Tables > General Settings*.
This data can be entered in *Contact Registry > General tab* and corresponds to the language of the documents issued.  
If this data is *present* in the registry, it will be *offered* by default in all *documents* related to that subject.

#### Supplier Price List ({#purchase-price-list})
In purchase documents, the information entered in *Supplier Registry > Price Lists tab* is proposed, but only if there is a default price list (reference table 'Supplier Price Lists');

#### Customer Price List ({#sales-price-list})
In sales documents, the information entered in *Customer Registry > Price Lists tab* is proposed, but only if a default price list exists (reference table 'Sales Price Lists');

#### Lots 
In this field, the batch code of the item is reported, if the item is managed through Batch Management, which is set in the item registry in the 'Lots and S/N' tab.


### M

#### Warehouse
In this field, present in different forms, the warehouse code that you have chosen to set for that specific item along with the warehouse reason based on the type of movement that will be executed will be reported;

### N

#### Item Nature ({#item-nature})
Used in some procedures. In the combo, we find the list of various natures that can be attributed to the item:
 - *Equipment/tool/machine* > group of items for the production part;
 - *Item family* > defines the item for sales forecasts;
 - *Packaging* > serves for managing returnable packaging, for accounting (to understand how many packages I have at home and how many I have given to the customer or supplier, and therefore understand how many they must return to me);
 - *Services* > for managing post-sales interventions;
 - *Loan/use/plants/component plant* > serve for managing maintenance.

#### Country ({#country})
Countries are coded in the related table **Countries** located in the path *Configuration > Tables > General Settings*. This data can be entered in *Contact Registry > General tab* and indicates the country of origin of the subject.  
If this data is *present* in the registry, it will be *offered* by default in all *documents* related to that subject.

#### Nomenclature
In this field, the nomenclature (i.e., the customs item of the article) useful for the intrastat for the declaration of goods for import or export as well as static for trading items within the EU is selected through help.

#### Our/Your Reference 

#### Initial Notes ({#initial-note})
Allows selecting notes that were previously entered in the homonymous table found in the path *Configuration > Utilities > Management of Coded Notes*. For this, the user must double-click on the **Initial Note** field to open *Help coded notes* and select the data, or with the right mouse button, can open a window to specify a very long note text. If the field contains a value, the background color of the field will change.

**Line Number**: this field will automatically fill upon entering data in the line, progressively;

### O

#### Operator ({#user})

import User from './../../../import/fields/user.md'

<User />

### P

#### Payment 
This field shows the payment term associated with the subject in the customer/supplier/agents registry in the 'Accounting Data' tab in the Administration section.

#### Carriage ({#carriage})
The types of carriage are coded in the related table **Carriage** located in the path *Configuration > Tables > General Settings*. Additionally, this data can be entered in *Contact Registry > Accounting Data tab > Delivery tab* to indicate the default carriage for the items related to the subject.  
If this data is *present* in the [Registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), it will be *offered* by default in all *documents* related to that subject.

#### VAT Inclusive Price
This field displays the price including the VAT rate.


### Q


### R

#### VAT Summaries
Grid in which the VAT summary of the document is proposed, for each VAT code;

#### VAT Recovery
If set, the VAT of the free item is considered for the document total.


### S


#### Expiration
Expiration date calculated from payment terms or set manually. This field is present within the items. See also Expiration Date.

#### Loaded
This flag is present in sales/purchase documents such as invoices and delivery notes and represents one of the types of document status. If active, this flag indicates that the material present in the document has been unloaded into the warehouse.

#### Serial Number (S/N)
Field in which the specific serial code of that item is reported, in case the item registry has opted for management by serial number in the Lots and S/N tab.

#### Shipment ({#shipment})
The types of shipping are coded in the related table **Shipments** located in the path *Configuration > Tables > General Settings*. Additionally, this data can be entered in *Contact Registry > Accounting Data tab > Delivery tab* to indicate the default shipment for items related to the subject.  
If this data is *present* in the [Registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), it will be *offered* by default in all *documents* related to that subject.

#### Document Status
The data refers to the document status table and is present in sales and purchase documents. The document status is defined by a series of flags that are set within the document by the user or automatically when certain procedures are launched (e.g. accounting, fulfillment from order, etc.); the types of status can vary depending on the document you are in (some examples are Printed, authorized, archived, accounted for, confirmed, etc.). This field can be used by the business replication procedures installed for managing a location with retail points.

#### Fulfillment Status
This field present in purchase/sale orders and work account shows the fulfillment status of the document. The order will be marked fulfilled when delivery notes or invoices are created, and its fulfillment status automatically changes from unfulfilled to partially fulfilled (if not all order lines have been fulfilled) or fulfilled. The user also has the option to force the fulfillment of a not fully fulfilled order by manually changing the order status to 'Forcefully fulfilled'. 

#### Printed
The flag is activated when the document print is initiated.


### T

#### Header
This term refers, alternatively, to:
 1. In search forms, the upper part of the form (immediately below the **Ribbon bar**) where the search filter area is located (graphically delimited) with the corresponding fields available to refine the search. The more information is entered, the more targeted the search will be since the fields interact with each other.
 2. In entry forms (e.g., of documents or accounting registrations, etc.), the upper part of the document (at the top of the form immediately below the **Ribbon bar**) that holds general and common data of the document (or registration) such as document number, date, customer or supplier sub-account to which the document is addressed, etc. This area is well defined (also graphically) compared to the central area of the document (and thus the form) that holds detailed data such as the items entered in the document or the detail lines of a registration, etc. For some types of documents, the header area can occupy the entire space of the form and therefore is identified, compared to the detail, by a specific **Tab**.


#### Tracking Number
This field can be found in the sales invoice, in the shipping tab and serves to indicate the tracking number related to the shipment to facilitate the traceability of the goods during shipping.

#### Line Type
The line type identifies the type of item. They can vary in type:

1-*Coded Item*: items coded in the registry that load/unload the warehouse and can be accounted for in analytical accounting;  
2-*Non-Coded Item*: descriptive items that can be accounted for in analytical accounting, but do NOT move the warehouse;  
3-*Item Note*: descriptive notes reported in the document print; does not affect accounting and warehouse;  
4-*Free Item*: the free item is managed as a coded or non-coded item for tax and warehouse purposes but being a free item, it is counted separately in the document summaries.


### U


#### Unit of Measure ({#unit-of-measurement})
Through this combo, the management unit of measure related to the item is selected.

#### Default User
Located in the application connection form.

#### User
See [Operator](#user)


### V


#### V.I.E.S. (V.I.E.S.)
The VIES (VAT Information Exchange System) is a system for exchanging information between EU countries for correct taxation. Specifically, it is a computerized system that allows companies to quickly verify the VAT number of their customers. Obviously, only the VAT numbers of customers who have registered in this system can be verified (it is likely that small artisans and merchants who do not have intra-community trade do not have their company registered in this system). From the item registry, entering the VAT number and clicking the propose data button will query this system, which will verify the validity and correctness of the subject's VAT number. Any searches without results may sometimes depend on a temporary downtime of the system being queried.


### Z

#### Zone ({#zone})
Zones are coded in the related table **Zones** located in the path *Configuration > Tables > General Settings*. Additionally, this data can be entered in *Contact Registry > Accounting Data tab > Delivery tab* to indicate the subject's area of origin.  
If this data is *present* in the Registry, it will be *proposed* by default in all *documents* related to that subject.

#### Delivery Zones ({#delivery-zone})
Delivery zones are coded in the related table **Delivery Zones** located in the path *Configuration > Tables > General Settings*. Additionally, this data can be entered in *Contact Registry > Accounting Data tab > Delivery tab* to indicate the delivery zone of the goods.  
If this data is *present* in the Registry, it will be *proposed* by default in all *documents* related to that subject.