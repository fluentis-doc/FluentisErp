---
title: Purchase Invoices Parameters
sidebar_position: 4
tags: [purchase invoices (fatture di acquisto)]
keywords: [purchase invoices (fatture di acquisto)]
---

The parameters of purchase invoices allow for basic settings to manage correctly and according to the specific requests of each individual company.

The window consists of buttons and three different tabs: *General*, *Load*, and *Analytic*.

### General

**Management of double measurement unit**: activating this flag allows the management of alternative units of measurement in purchase invoices. These must be entered for each item line in the *Data* tab.

**Automatic Proposal of Alternative UM (Proposta automatica UM alternativa)**: this checkbox is enabled only if *Management of double measurement unit* is active. When an item is entered that has a default Alternative UM in its registry tab, this UM is automatically proposed as the item's Alt UM, and the alternative quantity is calculated using the conversion factor of the same.

**Cost zero if price lists are missing**: if active, in the absence of a valid price list, it populates the price with the value zero. If this item is not checked, the field would be populated with the last cost of the item if present.

**Invoice type**, **VAT rate**, **Turnover type**: here, the default values to be used when creating invoices from orders are set.

**Mandatory Lots and S/N (Serial Number) (Lotti e S.N. (Serial Number) obbligatori)**: if active, it requires the user to enter the lot and serial number at the item line level for all items for which this management is required. If not active, the lot and serial number are not mandatory data, and it will be possible to save the document even without entering them. It is recommended to set this flag if using item management with lots.

**Search item price in all the defaults price list**: this parameter is used for searching the price in supplier price lists; the search occurs in price lists of the type predefined in the supplier registry, even if the price lists are not valid (valid price lists are those with a start validity date \<= today's date and have an end validity date that is either null or >= today's date).

**Allow discounts for free items (Consentire sconti per articoli omaggio)**: if active, allows the entry of discounts on gift-type item lines;

**Use vendor item**: if active, the item grid in the document also proposes the field to enter the supplier item code. If not active, this field will not be visible;

**Check items in exhaustion**: if activated, the system checks the availability of the items entered in the invoice and alerts if the item is running low, meaning if in the [item registry](/docs/erp-home/registers/items/create-new-items/item-registry/generality) the *Out of Stock* flag is active.

**Packings accounting**: allows the accounting, in general accounting, of lines with packaging items that are usually managed to verify the stocks of [Returnable Packaging (Imballi a rendere)](/docs/configurations/tables/logistics/package-to-be-returned).

**Maintain price from purchase order for the brackets**: used in the fulfillment of orders in the invoice when the fulfilled quantity is different (typically partial) from the ordered quantity for which a price or tier discount has been entered. If the price or discount does not depend on the delivered quantity but only on the quantity ordered, this flag should be activated; if not, the tier price or discount should not be entered in the delivery document if the fulfillment does not occur for the total quantity of the order, the flag should not be activated.

**Activate Quality Control (Attiva il Controllo Qualità)**: work in progress.

### Incoming

**Create recording with document date**: if this flag is active, the stock registration is made with the same date as the invoice. If not active, it is carried out with the *Load date* indicated in the header of the invoice, if present, otherwise with the *Warehouse posting date* indicated in the procedure of [Loading Purchase Invoices into Stock (Carico fatture di acquisto in magazzino)](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/). If the registration is made from within the invoice using the *Automatic load on warehouse* button and the *Load date* is not entered, the current date will be used.

**Priority warehouse and load template**: if active, at the time of registering the invoice in stock, the values set in the following fields are used: **Warehouse** and **Warehouse template**. If the flag is not active, the warehouse and shipping reason are read from the lines of the invoice. If they are not indicated, it will not be possible to carry out the automatic loading from within the purchase invoice, but you can use the procedure of [Loading Purchase Invoices into Stock (Carico fatture di acquisto in magazzino)](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse/) by selecting the flag "*Accept the following data as warehouse and reason:*" in the *Parameters* tab and indicating the *Warehouse* and *Reason* to be used.

**Automatic load/unload**: if active, at the time the *Controlled* flag is activated in the document header, a message will be displayed reminding that the automatic loading/unloading parameter is active and asking if you wish to proceed. Pressing "*yes*" will load the invoice into stock; otherwise, it will be possible to load it later by pressing the *Automatic load on warehouse* button located in the ribbon bar.

**Warning phantom items**: checks whether there are any dummy items in the lines of the invoice during stock loading. If present, it will ask whether to proceed with the loading, obviously without such items, or to not perform the stock movement at all. A dummy item can be without a first-level bill of materials if declared in the MRP parameters with a procurement type of purchase; otherwise, the loading registration will give an error message if there are dummy items in the document to load.

### Analytical

In this tab, the priority for retrieving the cost center (CdC) or profit center (CdP) in the document line is specified.

It is possible to modify the priorities using the following buttons in the ribbon bar:
> **Move Up**        
> **Move Down**.

*Default values (Valori di default)*: the CDC or CDP is retrieved from the invoiced type if present. For further details, refer to the table [Invoiced Type Purchases (Tipo Fatturato Acquisti)](/docs/configurations/tables/purchase/purchase-invoices-type). If not present in the invoiced type, the system will search in the *Supplier Registry (Anagrafica fornitore)*. If not present, it will be searched in the *Item registry* and then at the *Warehouse* level.

**Recompute**: if active, this flag recalculates the cost/profit centers according to the chosen priority.

**Evaluate priority by dimension**: if active, this flag allows for evaluating each priority entered at the top to see if there are additional dimensions not yet valued. For example, suppose we have in the Item Registry the cost center of the *Business Unit* dimension and in the purchase invoiced type the *Management* dimension. If the flag is not active, the system only evaluates the CdC present in the Item Registry; if the flag is active, after loading the CdC present in the Item Registry, the system also evaluates the dimension present in the purchase invoiced type (in our example, the *Management* dimension) and if it differs from those already managed (*Business Unit*), it loads the center and continues to check the other priorities.