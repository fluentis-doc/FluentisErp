---
title: Availability Analysis 
sidebar_position: 6
---

:::important Purpose
The availability analysis of Fluentis is a powerful and versatile tool that allows users to monitor and manage in real-time the availability of items within the warehouse. Through an intuitive interface, the analysis can quickly process data related to a specific item by simply entering the item code. Additionally, the analysis extends to the components of the bill of materials, providing a complete view of availability.

In the main panel of the analysis, detailed information about the availability of the parent item and its components is presented, including data on stocks, any unavailable stocks, and quantities that are delayed. It is also possible to view details of documents that commit or make quantities available within the system, allowing for an in-depth analysis of ongoing operations.

Thanks to this functionality, users can make informed decisions regarding procurement and inventory management, reducing the risk of shortages and optimizing operational efficiency. The availability analysis plays a crucial role in ensuring that companies can respond effectively to market demands and maintain optimal service levels.
:::

The print window for availability analysis opens through the path **Home > Items > Availability Analysis**, and is composed of three sections: the filter area, the warehouse results grid, and the details grid.

### Filter Area

Through the filters for **ITEM**, one can define which item or series of items needs to check warehouse product availability.

**Cumulative quantity**

This flag is used to decide whether to view the cumulative available quantity for that item or if you want to see the availability for each individual document; in this section, you can also decide whether to take into account the stock that is not yet available in the period being examined or to view stock that will be available starting from the date when the search is being conducted if this is not delayed.

**Consider availabilities from**

In this section, you can decide to consider availability from all or some of the proposed categories such as: contract work, planned production, purchases, released production, sales, and warehouse.

**Checking period**

In this section, you can indicate the period for which you want to verify availability, which can be: **Monthly** (in this case, you indicate the number of months to be examined), **Weekly**, **Daily** or you can provide a specific date to carry out the verification.

**View Lines Without Availability**

- *View lines without availability*: if active, this flag indicates that you want to see the lines with no value in any of the availability fields at that moment; if the item has loads and unloads with a total of zero, this will also be displayed even without the flag; 

- *Only in delay*: thus, the lines whose quantity by the date being considered should already be produced, but due to production delays, they are not yet;

- *Only with Negative Stock*: thus quantities that need to be produced, which are already planned but for which the stock is insufficient to cover production (probably there will be a supplier order in the system to cover the missing quantity);

- *Summary*: the summary of the two options mentioned above;

- *Detailed Bill Of Materials*: by deciding to consider the bill detail, you decide to see the availability of all individual components of the bill of materials of the item subject to the search (components with availability equal to zero are also displayed); in this case, in the availability analysis display, the columns *Level*, *Priority* (referring to the priority indicated in the bill of materials for that component), *code and variant of the parent item* related to the parent item will be added. Additionally, the list of items will be sorted by *level + parent code + parent variant + Priority + item code + item variant*. 

**Point of Sale**

In the case of retail, you can decide to visualize availability filtered by sales point.

**For the documents without required data**

In this case, you can choose whether not to consider items without a delivery date or without a goods-ready date, or to consider them anyway, assigning them a date determined at the time of the search, which you will indicate in the appropriate field;

**Warehouse Availability**

In this section, you can choose which warehouses to consider for checking stock.

After setting the various filters and flags, you will click the **Search** button located in the ribbon Bar.

### Product Availability

In the warehouse results grids, you will see the various lines of availability based on the documents or the cumulative line based on the warehouses. You can then see the overall availabilities based on commitments from all warehouses (Total) or the availabilities for each individual warehouse (all the various tabs with the names of warehouses coded in the database).

### Details

In the details grid, by clicking on the line of interest in the warehouse grid, you will see all the documents linked to that single line. Thus, the customer order it refers to, the production order, and the reference job, as well as any sales documents if present (such as DN, invoices).

*In delay*: represents the algebraic sum of all delayed documents (with delivery dates prior to today) present in the availability, thus given by the sum of the values in the demand column minus the sum of the values in the supply column, but only for the delayed documents.

By double-clicking the left mouse button on the selected line, you can open the corresponding document.     

:::note Note
The availability of the item to be produced is given only by the last phase with the **Productive** and **Movable** flags active present in the [Work Cycle](/docs/erp-home/registers/production/routes/new-route).
:::

Regarding the description of common functionalities in all forms present in the ribbon bar, please refer to the article related to [Common Buttons](/docs/guide/common/common-buttons), particularly for printing functionalities, please also refer to the article [Preview and Print](/docs/guide/common/operations-with-data/reports).

*Specific button:*
> **Expand/Collapse Items Grid**: a button that allows you to expand or collapse the result grids. 

:::note Creating profiles   
In this form, profiles can only be created on the filter and on the total tab.  
In the warehouse tabs, profiles cannot be created as they are built and destroyed dynamically.  
:::

For everything not detailed in this document regarding the common functioning of forms, please refer to the following link [Common functionalities, buttons, and fields](/docs/guide/common).