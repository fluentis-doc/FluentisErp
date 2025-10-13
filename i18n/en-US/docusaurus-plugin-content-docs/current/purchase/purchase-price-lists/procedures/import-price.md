---
title: Import from Supplier Prices 
sidebar_position: 2
---

The form opens via the path **Purchases Supplier Price Lists Procedures Import Supplier Prices** and allows you to select items for import that were previously entered via the [Import Supplier Prices and Items](/docs/applications/bizlink/template-example/price-item-supplier). 

Through this procedure, it is possible to create or update the registries of the selected items and create a new supplier price list with the updated prices.

:::important Remember
Before proceeding with the import of items, it is necessary to indicate a correspondence between the *Discount category* used by the supplier and those encoded in the table [Purchase Discount Category](/docs/configurations/tables/purchase/category-discounts-price-management/); this pairing must be done in the [Purchase/Sale Discount Category Correspondence](/docs/purchase/price-control/correspondence) procedure.
:::

### Filter

In the main grid, the same results of the [Supplier Prices](/docs/purchase/purchase-price-lists/procedures/supplier-price) form are displayed, filtered based on the data entered in the upper section. Items can be selected for definitive import by checking the box next to the *Item class*. Items that have already been encoded will have a different row color.   
In the second grid, all items selected with the flag in the first grid are displayed. 

*Specific buttons*:      
> **Import**: to execute the import of the selected items, based on the *Parameters* entered in the next tab.   
> **Check selection**: allows you to activate the flags of the selected rows in the grid.   
> **Unmark**: allows you to deactivate the flags of the selected rows in the grid.   

### Parameters

In this tab, it is possible to choose which information to include in the item registry and the parameters according to which to create the supplier price list.   

- **Create Article**: if active, allows the creation of the registry of the selected items if they do not exist.   

- **Update Item Fields**: allows you to select which data to overwrite in the registry being updated. In the case of creating a new item, the data related to the active flags will be included in the new registry. The data that can be updated includes: *Description*, *Commercial code*, *Barcode*, *Packaging*, *Weight*, *Nomenclature*, *Discount cat. purchase*, *Sales Discount Category*, *Subcategory*, *Formula*, *Package to be returned*.   

- **Create Purchase Price List**: if active, allows the creation of the supplier price list for the selected items. The mandatory data for creating the price list are **Starting validity date** and **Currency**. Optionally, **Expiration Date** can also be entered.    

- **Account/Detail acc.**: indicates the supplier for whom to create the price list; it will also be recorded in the item registry as the preferred supplier.   

In the third column of parameters, there are some data used only for creating new registries:
    - **Class**: if the one indicated for the item in the results grid is not encoded in the system, the class indicated in this field will be used.       
    - **VAT**: indicates the VAT rate to be attributed to the item.  
    - **Item Measurement Unit**: indicates the main UoM to use for the item. 
    - **Purchase/Sale Turnover**   
    - **Price Measurement Unit**: indicates the UoM to which the price of the supplier price list refers.
    - **Weight MU**: indicates the unit of measure to use for weights.     
    - **Formula**: indicates the [price update formula](/docs/purchase/price-control/formulas) to match with the item.   
    - **Discount type**   
    - **Barcode**   


### Errors

In the **Errors** tab, you can consult any errors that have occurred.   

In the upper grid, the items for which the import was not successful will be listed, while in the lower grid, the *Error code* will also be indicated.


### Results

In the **Results** tab, the items successfully imported are listed.