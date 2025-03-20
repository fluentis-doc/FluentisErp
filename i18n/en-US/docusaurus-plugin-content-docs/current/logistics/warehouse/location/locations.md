---
title: Locations 
sidebar_position: 1
---


:::important Purpose
The management of locations in Fluentis is a crucial element for optimizing warehouse operations. This module allows users to structure storage locations within warehouses according to a hierarchical scheme, which can be easily modified to adapt to business needs. Each location can be defined based on various parameters, including the type of location (e.g., area, shelf, rack, section) and its physical characteristics such as width, height, and load capacity.

Thanks to the creation of a location tree, operators can insert new branches and view the contents of each location, with details about the items and quantities in stock. The location attributes section further allows for customization, enabling the definition of specific requirements for individual locations.

This efficient management of locations not only improves stock control but also supports operational logistics, contributing to a more agile and effective management of inventory within the company.
:::

The form allows the operator to create and manage the warehouse location tree.

Through filters, targeted searches can be conducted based on parameters, and the query results can be viewed in the results grids. These results can be grouped by various parameters to facilitate data reading. The only mandatory filter parameter is that of the warehouse.

The search results are divided into two sections: a first section that contains information related to the warehouse locations, while the second provides details on items and attributes related to the selected location.

*The information related to the first section of the window includes:*

**Location**: Indicates the warehouse location;

**Code**: Indicates the code of the warehouse location;

**Description**: Indicates the description of the warehouse location;

**Location type**: Indicates the code of the location type in the warehouse;

**Location type description**: Indicates the description of the location type in the warehouse;

**Location status**: Indicates the code of the status of the warehouse location;

**Location status description**: Indicates the description of the status of the warehouse location;

**Location group**: Indicates that it is a group location.

In the second part of the window under the *Location Attributes* tab, a series of data related to the location can be entered.

**Width**: Indicates the width of the location; 

**Height**: Indicates the height of the location; 

**Depth**: Indicates the depth of the location; 

**Capacity**: Indicates the load capacity of the location; 

**Priority**: Indicates the priority of the location; 

**Layers number**: Indicates the maximum number of layers that can be loaded in the location; 

**Type of Load Unit**: Indicates the type of load unit that can be loaded in the location;

**Loading unit number**: Indicates the number of load units that can be loaded in the location;

**Minimum stock**: Indicates the minimum stock for that location;

**Maximum stock**: Indicates the maximum stock for that location.
  
Additionally, in the *Parameters* expander, the following flags related to the individual location can also be activated:

**Mono item**: If active, indicates that the location is single item; therefore, it will not be possible to move an item different from the one already present in that location;

**Mono batch**: If active, indicates that the location is single lot; therefore, it will not be possible to move the same item with a different lot from the one already present in that location;

**Active**: If active, indicates that the location is active;

**Blocked**: If active, indicates that the location is locked (making it an unavailable stock);

**Reserved**: If active, indicates that the location is reserved;

**Of stock**: If active, indicates that the location is of stock type (used in customizations);

**Of pick**: If active, indicates that the location is of picking type (used in customizations);

**Obsolete**: If active, indicates that the location is obsolete.

In the **Items** tab, it is possible to see which items are loaded in that location.

*Specific buttons:*

> **Search**: Allows data searching;   
> **Delete Location**: Allows deleting a row of locations;   
> **Insert Child Location**: This button appears in the Ribbon bar after a search has been made; allows inserting a new child location relative to the selected row;   
> **Insert Parent Location**: This button appears in the Ribbon bar after a search has been made; allows inserting a new parent location relative to the selected row;   
> **Replicate attributes**: This button appears in the Ribbon bar after a search has been made; allows replicating the attributes.   

For anything not detailed in this document regarding the common operation of forms, please refer to the following link [Common Features, Buttons, and Fields](/docs/guide/common).