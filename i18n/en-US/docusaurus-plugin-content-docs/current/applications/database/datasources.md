---
title: Datasources 
sidebar_label: Datasources 
sidebar_position: 0
---

### Form
As mentioned in the general overview in section [LINK](docs/applications/database/database-intro.md), datasources allow exposing data in a structured and organized manner.  
The datasource form can be accessed through the following path: **Applications Resource Manager** > **Database** > **Data Sources**.  

The datasource form is composed as follows:
* a **ribbon** menu that allows for the usual CRUD operations and the **preview** button that enables viewing the result of the datasource execution.
* a standard filter that allows filtering existing records (the datasources) by Code, Description, Object, Area, and Date.  
* a results grid where you can view the list of datasources present in the database.  

### Creating a New Datasource

Creating a new datasource is done using the 'New' button and requires the following fields to be filled in:
* the header data, such as code and description.
* the type of datasource, distinguishing between
  * datasources based on a standard or custom Fluentis object.
  * datasources based on a SQL query.
  * **GROUP BY** type datasources based on a standard or custom Fluentis object.

Depending on the selected type of datasource, the input fields to be populated will differ.   

* For simple datasources, i.e., based on an **object**, we need to populate:
  * code.
  * type of datasource, choosing one of a simple type.
  * description.
  * code of the Fluentis object on which we want to base the datasource.
  * validity end date, which specifies a date after which the datasource is no longer available to the Fluentis user.
  * Take Rows / Skip Rows, allows defining a range of rows to take or skip.
  * Area, a description taken from the dictionary.
* For datasources based on a **SQL query**, we need to populate:
  * the header fields, such as
    * code.
    * description.
  * type of datasource, selecting SQL Query DataSource.
  * validity end date, which specifies a date after which the datasource is no longer available to the Fluentis user.
  * SQL Query, specifying a query previously created and saved via **FluentisQueryStudio**.   
  * context (optional).
  * parameters (optional).
  * area, a description taken from the dictionary.
  * Business module.

Regarding the use of **FluentisQueryStudio** as a tool for creating/saving queries in the database, please refer to the following [LINK](docs/applications/database/database-intro.md).   
It is essential that the query created via **FluentisQueryStudio** adheres to precise formatting rules:
* the query must return at least the fields **Id**, **Code**, **Description** to be reused within a datasource, otherwise it will not be visible in the corresponding combobox.   

* Finally, there are datasources based on the **GROUP BY** clause.
* For this type of datasource, it is necessary to populate:
  * code and description,
  * datasource type, choosing 'GROUP BY Data Source',
  * validity end date (optional),
  * object on which to base the datasource,
  * take rows / skip rows,
  * area, a description taken from the dictionary.

* Through the Properties tab, it is possible to define the aggregation criteria that will utilize the GROUP BY clause.
Similar to the SQL language, the GROUP BY clause allows for grouping records according to specific aggregation criteria.
In particular, in the right tab 'Visible Properties', there is a table with the following fields:
* code
* alias
* role
* aggregation criterion
* property path
* formula
* order by position
* sorting
* incremental sum

To manage the aggregation criterion, it is necessary to act on the 'Aggregation Criterion' column, which allows choosing a value between:
* Dimension, or
* Metric.

**Dimensions** are a qualitative attribute, meaning a category or descriptor. They are used to segment or group data.  
**Metrics** are a quantitative attribute, meaning a numerical value that can be measured, aggregated, or calculated.  
We could thus aggregate sales invoices (object FSSalesInvoice) by invoice type (FSSalesInvoiceType.Code), as shown in the screenshot below.  
![](/img/it-it/applications/database/20250529162809.png)