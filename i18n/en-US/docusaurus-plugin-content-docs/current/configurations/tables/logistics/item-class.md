---
title: Item Class
sidebar_position: 12
---

:::important What it is for 
The Item Class in Fluentis is a crucial element for the efficient management of items. It allows for the grouping of homogeneous items, facilitating traceability and enabling detailed analysis.        
Each item is uniquely identified by the combination of the Class, a pre-coded data point, and an alphanumeric Code. In some cases, the item class can be configured to automatically generate both the code and the description of the items belonging to that class, thereby streamlining the coding processes.           
Additionally, it is possible to manage the item classes, customizing them based on operational needs. This approach guarantees greater efficiency in the classification and management of products.     
:::

The table is located along the path **Tables > Logistics > Item Class**.  

The table allows for the management of the coding of different article classes in order to group the items.

It enables the insertion of new records or searching for existing ones to view, modify, or delete them.

**Search Item Class**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results within the results grid.

**Insert Item Class**

To insert new codes, it is necessary to click on the first empty row in the grid or press the **New** button.

*Specific fields*

> **Code**: indicates the code of the item class;  
> **Description**: indicates the description of the item class;  
> **Change Item Class**: if active, allows for changing the item class of an item even if already moved;  
> **Family Product**: indicates the code of the product family that includes the item class;  
> **Family Product Description**: indicates the description of the product family that includes the item class.  

*On the right side of the form, there are three additional tabs:*

- **Item Encoder**: guides the operator in coding a new item for that item class; it will be possible to define coding rules using the following fields:   
> **Ordering**: indicates the ordering of the single component of the coding;   
> **Type**: indicates the type of data to be used in the coding;   
> **ExtraData**: indicates the code of extra data used in the coding;   
> **Use in code**: if active, this element will be used in the item code;  
> **Use in description**: if active, this element will be used in the item description;  
> **Code property**: indicates the property of the business object;   
> **Property description**: indicates the description of the business object property;  
> **Length**: indicates the length of the code component;   
> **Separator**: indicates the character to be used as a separator;   
> **Progressive Fill Char**: indicates the character to be used as a filling of the progressive;   
> **Progressive Start Value**: indicates the start value of the progressive in the coding;   
> **Fixed Value**: indicates the fixed value to be inserted in the coding;   
> **Propagation**: indicates that the propagation of the data is active;   
> **Mandatory**: indicates that the data is mandatory.   

- **Extra Data**: manages the extra data linked to that item class;
*For custom features present in ExtraData, please refer to the article on ExtraData.*

- **Description in language**: allows the insertion of the translation of the item class description into a new language.

For everything not detailed in this document regarding the common functionality of forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).