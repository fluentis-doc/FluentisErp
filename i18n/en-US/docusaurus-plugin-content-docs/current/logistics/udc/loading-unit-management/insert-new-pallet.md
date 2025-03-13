---
title: Entering a New UDC (Inserimento nuova UDC)
sidebar_position: 3
---

To create a new UDC, it is sufficient to insert a new row in the main grid specifying the year, group, number, and type. These fields define the unique key for each UDC.      
The fields related to dimensions and weights will be automatically completed (derived from the **Loading Unit types** table), although they can be changed.        

Additionally, it is necessary to indicate the warehouse and the location; after that, you can move to the UDC Detail tab, where you can enter the item or items that comprise it.

The entry can be done via the dedicated button *New Loading Unit Item*, or by directly entering it in the first free row. In both cases, it requires mandatory specification of the class, code, possibly the variant if the item is managed by variant, and quantity. You can also associate the item with the customer order line by choosing the Type and the number of the Customer Order in the appropriate column. The information related to the warehouse will be automatically updated after the loading of the UDC.

*Flags*: 

- **Printed**: automatically set once the loading unit has been printed;      
- **Loaded**: automatically set once the loading unit has been loaded;          
- **Unloaded**: automatically set once the loading unit has been unloaded; 
- **From loading unit**: automatically set when the loading unit has a parent loading unit. 

*Specific buttons*: 

> **New Loading Unit Item**: allows adding a new item to the loading unit;         
> **Delete Loading Unit Item**: allows removing a new item from the loading unit.