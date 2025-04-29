---
title: Loading Unit Group Types
sidebar_position: 30
---

:::important What it is for 
The Loading Unit Group Type table in Fluentis represents another key element for the categorization and organization of Loading Units within logistics. This table allows users to manage different groups of loading units, facilitating their classification and assignment to specific usage categories.

The management form offers a dedicated search area with customizable filters, helping quickly identify the Loading Unit Groups of interest. The main fields include an alphanumeric code for the group type, a description, and the identification of the group itself, which can refer to numeration, production job orders, or purchase orders. 
:::

The table is located at **Tables** > **Logistics** > **Loading Unit Group Types**.

The insertion table for *Loading Unit Group Types* is a base table for the use of *Loading Units* and is used within the [Loading Unit Types](/docs/configurations/tables/logistics/loading-unit-types).

It allows for the insertion of new records or the search for existing ones to view, modify, or delete them.

**Search Loading Unit Group Types**

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to view results within the results grid.

**Insert Loading Unit Group Types**

To insert new codes, you need to click on the first empty row in the grid or press the **New** button.

*Specific fields*:  
> **Type**: alphanumeric code indicating the *Loading Unit Group Types*;   
> **Description**: description of the *Loading Unit Group Types*;   
> **Group**: indicates the group identifying the Loading Units. It can be a *Progressive Number*, a *Production Job Order*, a *Purchase Order*, or a *Production Order*;   
> **Group Description**: description of the *Group* identifying the Loading Units.     

:::note Note
In order for it to be possible to use the loading unit in production declarations, it is necessary that the **Group** indicated is of type *Production Job Order* or *Production Order*.  
:::

For everything not detailed in this document about the common functionality of forms, please refer to the following link [Custom features, buttons, and common fields](/docs/guide/common).