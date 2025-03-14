---
title: Preferential vendors
sidebar_position: 12
---

:::important What it is for
The Preferential vendors tab within the item registry of Fluentis is a key feature for managing supplies. This allows for precisely defining the preferred suppliers for each item, thus facilitating the procurement process and ensuring that the most suitable suppliers are chosen.  
In its interface, the section is divided into two main parts. The first part concerns general information about suppliers, such as the selection of a predefined supplier, which becomes the main procurement channel for the item in question. Here, users can also set important parameters like maximum order quantity, tolerances on quantities and prices, and details related to supply orders. The second part offers a detailed grid where specific information about each supplier can be added, such as lead time, and any notes.
:::

In this tab, it is possible to define, for each individual item, which are the preferred suppliers from whom that item is usually procured, specifying a default one so that the system will always order from the same supplier.

The window consists of two sections:

1. In the first section, the information related to all preferred suppliers is indicated, in case this information is generic, such as:

**Mandatory report Supplier**: if active, this flag indicates that this item is purchasable only from the default supplier specified in the grid in the second part of the screen;

**Maximum number of lines of evidence**: this is the maximum number of supplier order lines that can be created for a given item/supplier until the flag **Block order rows** is activated;

**Purchase unit of measure (U.M di acquisto)**: this field specifies the unit of measure for purchasing that material;

**maximum affordable value**: this field specifies the maximum quantity that can be ordered from that supplier for that item;

**Block order rows**: if active, this flag indicates that the ability to insert new supplier order lines should be blocked;

**Block date**: indicates the date on which the block of supplier order lines is activated;

**% tolerance for received quantities in excess and in defect (% tolleranza quantità ricevuta in eccesso e in difetto)**: in these two fields, the % tolerance on the delivered quantity exceeding and below the specified amount by the supplier for that material will be indicated;

**% price tolerance in excess and in defect (% tolleranza prezzo in eccesso e in difetto)**: in these two fields, the % tolerance on the supplier price exceeding and falling short of the established price will be indicated;

**Allow zero price**: if active, this flag allows issuing supplier orders with a zero price for that item.

2. In the second part of the screen, there is a grid where the default supplier and any other suppliers used for purchasing the item and their related data for each supplier are indicated:

**Supplier**: the account/sub-account/description of the supplier will be indicated here;

**Default**: this flag, if active, indicates the default supplier in the case of multiple suppliers;

**Economic lot**: in this section, the minimum economic lot and its multiples for each supplier will be indicated;

**Vendor item**: in this section, the code and description used by the supplier to identify the item can be added;

**Procurement time**: it will indicate for each supplier the management, which is the time required for the supplier to reproduce/purchase that item, the shipping time, which is the time needed for shipping the material from the supplier, total time which is the sum of the two previous data indicating the necessary time to restock the material;

**Purchase order**: in this section, information related to purchase orders already detailed above (U.M, line block, block date, maximum number of lines, maximum value, % tolerance for received quantities in excess/defect) will be indicated for each individual supplier;

**Producer**: in this section, the account and description of the material's producer will be indicated;

**Origin**: indicates the origin of the goods, such as the country of origin or the origin of animal or vegetable products;     

**Acceptance checks (Controlli di accettazione)**: within this field, any checks that need to be performed upon the acceptance of the material before it can be used will be indicated;

**Variant**: in this field, any variant of the supplier for that item will be entered;

**Notes**: in this section, any notes related to the supplier in question can be entered.