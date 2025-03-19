---
title: Policies Discount Definition
sidebar_position: 1
---

In this form, discount policies are defined based on the settings entered in the other forms of the **Price Management** group.

In the first grid, the following columns are present:  

>- **Account description**: contains the recipient registry of the discount policy.        
>- **Class**: refers to the item class recipient of the discount policy; it is an optional field.        
>- **Discount cat. purchase**: allows choosing the purchase discount category to associate with the registry among those coded in the table [Purchase Discount Category](/docs/configurations/tables/purchase/category-discounts-price-management/).    
>- **Detail discount category**: if the user wants to manage also the *Discount Subcategory*, they must enter in this field the same code used by the supplier.  
>- **Validity date**: contains the validity of the discount policy; this allows applying different policies at different times of the year.

In the second grid, the **Discounts** to be proposed for the combinations from the first grid are defined. The discounts will be proposed in the documents addressed to the registry for that specific item class. 

### Management of Discount Categories in Documents

It is possible to assign discounts for item categories that can then be reused within purchase documents. To do this, several steps are required.

1. In the *Item registry* > *Purchase discount category* tab, the discount category must be entered with the *Starting validity date*;  
2. In the *Supplier Registry* > *Price list* tab, the *Price list* must be entered, with the **Price Management** flag active;  
3. In the *Policies Discount Definition*, the *Supplier* must be entered, the same **Discount cat. purchase** entered in the item registry, the *Validity Date*, the *Discount*, and optionally the *Item Class* to which the discount should be associated; 
4. There must also be a **Purchase price list** valid at the validity date of the discount policy that contains items that have the discount category in the registry, for the retrieval of the base price. 

At this point, when entering a purchase document, discounts for the discount category will also be proposed.