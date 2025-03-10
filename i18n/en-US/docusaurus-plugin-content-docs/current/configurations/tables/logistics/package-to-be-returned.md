---
title: Package To Be Returned
sidebar_position: 15
---

The table is located on the path **Tables > Logistics > Package To Be Returned**.

In this table, it is possible to code the various *Package To Be Returned* to be used in *Packages Management* in purchase, sales, and job order documents.

It allows for the insertion of new records or the search for existing ones to view, modify, or delete them.

**Search Package To Be Returned**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results in the results grid.

**Insert Package To Be Returned**

To insert new codes, it is necessary to click on the first empty row in the grid or press the **Insert** button.

This table contains the items that are to be considered *Package To Be Returned* for the traceability of inventory. The item inserted in this table must have as Item Nature: *Packing* (the Item Nature is entered in the Item Registry, [Generality tab](/docs/erp-home/registers/items/create-new-items/item-registry/generality)).     
Through the flags in the grid, it is possible to choose in which areas the item will be manageable for movement.

*Mandatory data*: 

> **Code**: this is the code of the *Package To Be Returned*;     
> **Description**: this is the description of the *Package To Be Returned*;   
> **Item class**: indicates the [Class](/docs/configurations/tables/logistics/item-class) to which the item belongs;   
> **Item code**: indicates the code of the item.

*Specific fields*: 

> **Use in purchases**: by activating this flag, the packaging will be visible in the documents of the purchasing area;     
> **Use in subcontracting**: by activating this flag, the packaging will be visible in the documents of the job order area;   
> **Use in sales**: by activating this flag, the packaging will be visible in the documents of the sales area.    

Finally, it is possible to insert **Warehouse** and **Reason** to be used for the item for each area.

Once this table is parameterized, in the documents that require it, it will be possible to open the package to be returned form with the ribbon button **Packages Management**. The button will open the *Packages Management* procedure, already filled in with the packagings defined in the *Package To Be Returned* table, so that the user only needs to enter the quantities.

For anything not detailed in this document regarding the common functioning of the forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).