---
title: Supplier Prices 
sidebar_position: 1
---

The form opens via the path **Purchases > Supplier Price Lists > Procedures > Supplier Prices**.

In this form, it is possible to consult the results of the [Import Supplier Prices and Items](/docs/applications/bizlink/price-item-supplier). All items imported via bizlink along with their respective prices are entered in this screen, from which they can be consulted and selected for processing.

This procedure is widely used for importing catalogs: through the *import of supplier prices and items*, all items present in the supplier's catalog are entered in this screen. Subsequently, the user can search for and select the items they wish to manage. The screen allows the user to understand the purchase price of an item without it having been previously coded and entered in a price list, and to code only the items they will actually manage.

The main data in the grid are:  
- **Item class**: this data will be present only if the item is pre-existing; if only imported, it will not have an assigned item class.            
- **Item code**: this data follows the same rules as above; it is possible to distinguish imported items from those not imported also by the fact that the former have a different color.             
- **Supplier**: this data indicates the supplier from whom the catalog has been imported and will populate the *Preferential vendor* in the item registry once created.    
- **Import date**: contains the date when the import occurred in Excel.       
- **Starting validity date**: contains the validity start date entered in the Excel sheet.          
- **Supplier Item Code/Description**: indicates the supplier item code which will also be reflected in the item registry, tab [Preferred Suppliers](/docs/erp-home/registers/items/create-new-items/item-registry/preferential-vendors).    
- **Units of Measure**: indicates the unit of measure used in the supplier's catalog.   
- **Quantity**: indicates the quantity to which the **Price** of the item refers.  
- **Discount category**: indicates the discount category to which the item belongs and must be matched with the discount category for purchases coded in Fluentis. The *Discount category* column is also present in the [Discount Policy Definition](/docs/purchase/price-control/definition), where discounts applied by the supplier can be consulted.     
- **Subcategory discount**: code that specifies the subcategories of belonging; it is primarily used for very large price lists. Users who wish to also manage the discount subcategory must enter the same code present in this column in the *Detail discount category* of the [Discount Policy Definition](/docs/purchase/price-control/definition).



:::important Remember 
Before proceeding with the **Import prices from Supplier** procedure, it is necessary to indicate a correspondence between the *Discount category* used by the supplier and those coded in the table [Purchase Discount Category](/docs/configurations/tables/purchase/category-discounts-price-management/); this matching must be done in the [Purchase/Sale Discount Category Correspondence](/docs/purchase/price-control/correspondence) procedure. 
:::

Once the items to be imported have been identified, clicking the **Import** button in the ribbon bar will open the [Import from Supplier Prices](/docs/purchase/purchase-price-lists/procedures/import-price) procedure.