---
title: Overview 
sidebar_label: Overview 
sidebar_position: 0
---

# Datasources / SQL Query / Fluentis Query Studio

## Overview
In this page, we provide a general overview of the tools provided by Fluentis to interact with the database.  
The **database** node allows Fluentis users to perform specific operations on the Fluentis database.   
The node comprises the following entries:
* Database Schemas
* Fluentis Query Studio
  * New SQL query
  * Examples
  * Export to Excel
  * Export to a grid
* Data Sources


### Database Schemas
The entry **database schemas** opens a read-write form that allows the addition of database schemas beyond those already present by default.  


The form consists of:
* a ribbon menu with standard actions (search, create, delete).
* a standard filter that allows filtering records by Name and/or by Nature.
* A results grid that displays the existing database schemas on the screen.

To create new tables in the database, even through automated wizards (see wizard for the extension), it is **necessary** to create a custom database schema.

### Fluentis Query Studio
The Fluentis Query Studio tool allows interaction with the Fluentis database, provided that specific rights are assigned to the user by Arm.  

![](/img/it-it/applications/database/20250520090348.png)

The form, as shown in the figure, is made up of:
* a ribbon (Save, Execute).
* on the right, an object explorer that allows the expansion of various elements of the database (Tables, Views, Stored Procedures, Functions, Parameters, Dynamic Parameters).
* on the left at the top, an editor that allows writing SQL queries.
* on the left at the bottom, the results grid of the query.

### Data Sources

![](/img/it-it/applications/database/20250520085246.png)

Data sources are data sources that allow the exposure of data in a structured and organized manner and can be reused to populate dashboards and/or extradata.  
The data sources form is structured as follows:  
* a Ribbon menu: with the usual actions allowed to the user regarding the creation, modification, deletion of new records.  
* a standard filter that allows the search for records.  
* a results grid that allows the visualization of the records (datasources).