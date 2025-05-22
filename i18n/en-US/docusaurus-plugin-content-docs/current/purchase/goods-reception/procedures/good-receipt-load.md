---
title: Goods Receipt Load
sidebar_position: 4
---

The procedure opens through the path **Purchases > Goods Receipt > Goods Receipt Load** and allows for the execution/restoration of warehouse registration operations for the items present in the *Goods Receipt*.

The form consists of three tabs: *Filter*, *Parameters*, and *Rollback*.     

### 1. Filter

In this tab, the user has the ability to enter filters to search for the goods receipt to be loaded into the warehouse.   
You can filter by: *Supplier*, *Receipt Number*, *From/To Receipt Date*.

- **Posting date**: allows you to specify the date related to the warehouse registration.

:::important Remember
If in the [Supplier Order Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters) > Load tab the flag **Create recording with document date** is active, the warehouse registration will always be executed with the *Reception date* entered in the document header, ignoring the *Warehouse posting date* entered in this form.    
If the *Load date* is not filled in, the warehouse registration will be created with the *Warehouse posting date* entered in this form or with the current date if the *Posting date* field is not populated.
:::

#### Specific buttons  
> **Search**: allows you to search for the receipts to be registered in the warehouse.  
> **Load**: allows you to execute the loading of the selected receipts based on the parameters entered in the next tab.


### 2. Parameters

In the *Parameters* tab, you can choose, with the related flags, how to handle any items that are unencoded or without warehouse and reason present in the document. The available options are:  

- **Ignore the receipt containing not codified items**: does not allow partial loading of the document if it contains at least one unencoded item.       
- **Ignore not codified items of the receipt**: allows partial loading of the document while skipping unencoded items.  

- **Ignore the receipt containing items without ware./temp.**: does not allow partial loading of the document if it contains at least one item without warehouse and reason.      
- **Ignore the receipt items without warehouse/template**: allows partial loading of the document while skipping items that do not have a warehouse and reason.     
- **Use this values for the items without warehouse/template.**: ensures complete loading of the document. For all items found without warehouse and reason in the selected receipts, it sets the data entered in the following fields: *Warehouse* and *Template*.

:::important Remember
If in the [Supplier Order Parameters](/docs/configurations/parameters/purchase/purchase-orders-parameters) > Load tab the flag **Priority warehouse and load template** is active, the *Warehouse* and the *Template* entered in the parameters will always be used, ignoring those present in the goods receipt for each item line; otherwise, the ones entered in the document will have priority.  
:::

### 3. Rollback

In this tab, the user has the ability to search, view, and cancel the registration operations performed.

The data in the lower grids, **Receipt List** and **Record**, correspond to the selected load registration in the upper grid (after filtering the data). Furthermore, in these last two grids, there is the possibility to view the goods receipt and its warehouse registration by double-clicking on the row.

#### Specific buttons  
> **Search**: allows you to search for the loaded invoices. The result of this procedure is displayed in the result grids.  
> **Currency adjustment rollback**: allows you to delete the entire selected load registration.