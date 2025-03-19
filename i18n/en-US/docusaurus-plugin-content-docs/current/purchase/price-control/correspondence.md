---
title: Discount Category Correspondence for Sales/Purchases 
sidebar_position: 3
---

In this window, it is possible to consult and enter new correspondences for discount categories. It is used for the procedure of [Importing from Supplier Prices](/docs/purchase/purchase-price-lists/procedures/import-price) and allows associating the *Discount category* with the *Sales Discount Category* and *Purchase Discount Categories* that are coded and used in Fluentis based on the discount conditions to be applied to their customers/suppliers.

The generic discount category (e.g., that of the parent company) is associated with a sales discount category and a purchase discount category. 
Retailers can indeed receive from the parent company the catalog (Imported with the procedure [Supplier Prices](/docs/purchase/purchase-price-lists/procedures/supplier-price)), to which a price with a discount category is applied; retailers will in turn sell the product applying a different discount category. Different suppliers may have the same *Discount category* but different *Sales and Purchase Discount Categories*, as they have the same parent company, but apply different discount conditions.

The information contained in the grid includes:

>- **Item class**: contains the item class to which a specific discount category is associated.  
>- **Account/Subaccount/Description**: contains the registry to which the discount category is associated.        
>- **Discount cat. sales**: contains the discount category with which the registry sells the item; allows choosing a value among those previously coded in the table [Price Management Discount Categories](/docs/configurations/tables/sales/category-discounts-price-management/).     
>- **Purchase Discount Category**: contains the discount category with which the registry purchases the item; allows choosing a value among those previously coded in the table [Purchase Discount Category](/docs/configurations/tables/purchase/category-discounts-price-management/).        
>- **Update Formulas**: allows associating a possible [price/discount policy update formula](/docs/purchase/price-control/formulas) to be used in the price update procedures.
>- **From validity date**: contains the date from which to consider the discount category for the item class; this way, it is possible to associate different categories during different periods of the year.         
>- **Discount category**: this is the field that links the purchasing module with the sales module and contains the discount category applied by the parent company. It must correspond to the same *Discount category* of the parent company that can also be found in the [Supplier Prices](/docs/purchase/purchase-price-lists/procedures/supplier-price) form.

To perform the [Import from Supplier Prices](/docs/purchase/purchase-price-lists/procedures/import-price), it is necessary to insert a new line in the table indicating:
- the *class* of the items for which you want to perform the import,
- the *registry* of the *contact* to which it is associated, 
- the *sales and purchase discount categories* chosen among those coded in the system,
- the *discount category* of the producer, identical to that present in the item grid, 
- optionally, a *validity date* and a *formula*.