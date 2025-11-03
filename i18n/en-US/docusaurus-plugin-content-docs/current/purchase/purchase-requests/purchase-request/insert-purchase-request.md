---
title: New Purchase Request 
sidebar_position: 2
---

The form opens via the path **Purchasing > Purchase Requests > New Request** or from the search filter *Purchase Requests* using the *New* button.   

## *How to create a purchase request*

<details>

<summary>Click to see the fundamental steps</summary>

1. **Insert the *PD Type* to create**: *Date*, *Year*, and *Number* will be proposed automatically.  

2. **Insert the Items**: by double-clicking in the *Item Code* field, the item help opens, allowing you to search and select an existing item. All other line data, such as *unit of measure*, *quantity*, and *price*, will be proposed automatically but can be modified.
Alternatively, it is possible to select as *Line Type* an *Non-Codified Item* and manually enter the subsequent data.

3. **Insert any additional information** in the *Item Data* tabs.

4. **Authorize the Purchase Request**: after selecting the items in the grid, click the *PD Authorization* button in the toolbar to make the PD available for subsequent procedures.   


</details>

## **1. Upper Section** {#upper-section}

The mandatory fields for entering a purchase request are as follows:

- **Type**: defaulted in *Configuration > Tables >* [*Purchase Request Types*](/docs/configurations/tables/purchase/purchase-request-type). Depending on the chosen type, certain functionalities such as *availability control (controllo della disponibilità)* will be activated.   
- **Date/Year**: the current date is proposed by default, but it can be manually modified.   
- **Number**: automatically proposed based on the numeration associated with the *PD Type* chosen.

#### Other Data

- **Historicized**: by activating this flag, the PD will no longer be visible in the [Automatic Order Creation](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) procedure.   
- **Notes**: allows you to insert notes visible at the PD level.   
- **Request status**: this is a non-editable field; it displays the fulfillment status of the entire request considering the fulfillment status of each individual item line. An PD is considered *Executed* or *Partially executed* when a supplier order has been generated for all or some of the item lines contained within it.       

## **2. Items** {#items}

In the item grid, the following data are available: 

- **Line type** provides the option to select from a combo box, items with different characteristics:
    - *Codified Item*: these are items coded in the registry and can be recorded in analytical accounting and registered in the warehouse.   
    - *Uncoded Item*: these are descriptive items that can be recorded in analytical accounting but cannot be moved in the warehouse.    
    - *Note Item*: these are descriptive notes reported in the document printout; they do not affect accounting and the warehouse.

- **Class/Code/Item Description**: can be entered manually or with the assistance of field help, which will suggest all related data entered in the *Item registry*. After entering the *Code*, the *Description* and *Class* will be automatically pulled from the registry. If the item has *Variants*, the desired variant can be selected from the *Item data* tab.

- **Units of Measure**: the primary unit of measure of the item is proposed, but if alternative units of measure are coded in the item registry, the user has the option to choose another.

- **Quantity**: represents the quantity of the primary U.M.    

- **Price**: the price is proposed from the default supplier price list for the item; the reference price list for the item itself is displayed in the *Discounts/Price Lists* tab. The same document may contain items with prices taken from different price lists. By double-clicking in the **Price list** field (in the *Discounts/List Prices* tab), the user has the option to select a different price list from the default one, from which the price of the entered item will be taken.   
In the absence of a price list, the proposed data can be taken from the *Latest cost* of the item registry or may be proposed as zero, based on the parameters set in the **Purchase Requests Parameters**.   

- **Forced Fulfillment**: forced fulfillment can be set for the selected line. This way, no warehouse loading will be done.

- **State**: indicates the fulfillment status of each item line.   

- **Demand date**: in the case of RA released from planning, this will automatically fill with the *End date* of the planned purchase order; it can also be entered or modified manually.   

- **Shipment date**: if the RA was released from planning and the *FOB date* of the planned order is valued, it will be reported in this field; it can also be inserted or modified manually. 

- **Estimated arrival date**: if the RA was released from planning and the *ETA date* of the planned order is valued, it will be reported in this field; it can also be inserted or modified manually. 

:::tip Remember
In the Purchase Requests generated from the release of Planned Orders, the *Quantity of use* of the planned order is always reported, along with the corresponding unit of measure.   
If the unit of measure does not match the management unit of the item, at the time of creating the Supplier Order, it will be entered in the *Alternative unit of measure* field along with the quantity indicated in the order. In the item grid, however, the management unit of measure will be displayed, and the quantity will be recalculated based on the conversion factor defined in the item registry.
:::

In the section below the grid, the document totals are reported:   

- **Origin amount**: reports the total taxable amount of the purchase request.    
- **VAT**: reports the tax value calculated on the taxable total, based on the VAT rate indicated for each item in the *Item data* tab.    
- **Total**: given by the sum of *Origin amount* and *VAT*.

#### Specific Buttons

> **Authorize PD**: allows you to authorize all selected item lines; from this moment the document is considered confirmed.   

> **RDO Generator**: clicking this button will create the [Offer Request](/docs/purchase/offer-request/settings) for the lines present in the *RDO Generator* tab. For further details, see the section [RDO Generator](/docs/purchase/purchase-requests/purchase-request/insert-purchase-request).   

> **Rollback RDO**: allows you to cancel and delete the previously created offer request.   

> **Open Offer Request**: allows you to open the generated RDO.

### 2.1 Item Data {#items-data}

These are all informational fields that are taken by default from the item/supplier. It is still possible to overwrite this information at the line level.   

- **Price list**: the price list from which the item price was retrieved is proposed.    

- **Supplier**: the default *Preferential vendor* of the [item registry](/docs/erp-home/registers/items/create-new-item) is displayed.    
- **VAT**: shows the VAT rate associated with the item.   
- **Brand**: represents the brand of the item, pulled from its registry or from the item's price list.
- **Currency**: by default, the [currency](/docs/configurations/tables/general-settings/currencies) present in the [registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance) of the *Preferential vendor* is proposed. 
- **Exchange**: shows the date and the exchange rate to be used for currency conversion.   

- **Variant**: in this field, it is possible to select a variant of the item among those previously coded in the [Variants](/docs/erp-home/registers/items/create-new-item) tab of the item registry. If different prices and/or discounts for each variant have been entered in the price list, they will be updated when a different variant of the item is selected.   
- **Production Job Order**: if the purchase request was generated from the [planning](/docs/planning/ms-master-scheduling/general-schedule/) of a production order (with automatic order release or through the [procedure](/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders) for releasing a planned purchase order), this field will report the reference to the order. For more information, see the [introductory section](/docs/purchase/purchase-requests/general-overview).   
- **User**: it is possible to enter the operator who entered the purchase request in this field.   

- **Project**: in this field, it is possible to associate a project with each item. If the PD was generated from the planning of a production order containing a project, it will be automatically reported on the individual item lines.   
- **Purchase turnover type**: the data entered in the [General](/docs/erp-home/registers/items/create-new-item) tab of the item registry is proposed.    
- **Demand priority**: the *Procurement Priority* present within the [production order](/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order) is reported.   
- **Notes**: in this field, it is possible to insert notes related to the item line; they will be reported in all documents generated from this.   
- **Execution date**: at the time of [creating the supplier order](/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests) from the purchase request, the lines included in the order are fulfilled and the date of fulfillment will be reported in this field.   

- **Authorised**: can be activated manually for each line or through the ribbon bar button *Authorize PD (Autorizzazione PD)*.    
- **on date**: shows the date when the item line of the PD was authorized.   
- **By user**: shows the name of the user who authorized the purchase request.   

### 2.2 Analytic {#cost-profit-centers-tab}

Contains fields related to analytical accounting. It shows the cost/profit centers on which the values of purchased products are distributed.    

These data can be entered: manually or automatically if the cost/profit centers have been previously entered in the contact registry, item registry, or in the chart of accounts.

### 2.3 Attached Documents {#attached-documents}

The details of any attached document (name, document type, any notes, our/your reference) are displayed.    

For instructions on how to attach a document, refer to the article [Attach Documents](/docs/guide/common/operations-with-data/attach-documents).

### 2.4 RDO Generator {#generate-RDO}

In this tab, the *Preferential vendors* present in the registry of the selected item in the grid are reported along with their respective data, price lists, and prices. From this tab, you can choose the best price. Alternatively, you can manually enter the supplier to be considered for the item.    

You can choose between: 
1. **Supplier**: to specify an existing supplier registry; selecting this option enables the insertion of data in the *Account description* field.  
2. **Nomenclature**: to specify the *Code name* and *Company name* of the contact to be used; selecting this option enables the insertion of data in the *Nomenclature* and *Nomenclature Description* fields.  
3. **Contact**: to select a [CRM Contact](/docs/crm/home-crm/contacts/search-contacts) to request the offer from; selecting this option enables the insertion of data in the *Contact* field.  
4. **New supplier**: to select a supplier for whom the registry has not yet been coded; selecting this option enables the insertion of data in the *Vendor description* field.  

The other fields present in the grid are: 
- **Code/Description/Supplier Item Barcode**: report the code and the description with which the supplier identifies the requested item; these are optional fields.     
- **Units of Measure**: the unit of measure associated with the supplier in the [item registry](/docs/erp-home/registers/items/create-new-item) is proposed, or the primary unit of measure if this field is not valued.   
- **Quantity**: is proposed based on the supplier’s economic lot if specified in the [preferred suppliers](/docs/erp-home/registers/items/create-new-item) tab of the item; alternatively, the quantity present in the item line of the PD is proposed.
- **Price**: is proposed based on the price list associated with the preferred supplier. 
- **Estimated Delivery Date**: allows you to enter the expected delivery date. 
- **VAT**: the VAT rate present in the *Item data* tab is proposed but can be manually modified.  
- **Unit of Measure / Alternative Quantity**: allows you to select a unit of measure and an alternative quantity that will be reported in the documents generated from the RDO. 
- **Alternative Unit Price*: if active, the price is multiplied by the alternative quantity. 
- **Purchase price list**: shows the price list from which the price was retrieved. 
- **Suspended**: this flag is automatically activated when the RDO has been generated.

Having at least one line in this tab activates the ribbon bar button **Generate RDO**. Clicking this button will create the [Offer Request](/docs/purchase/offer-request/settings) for the selected lines. The created document will be consultable in the RDO search, or it can be opened directly with the ribbon bar button **Open Offer Request**.   

To cancel a creation, you can use the ribbon bar button **Rollback RDO**, which will delete the *Offer Request* created.