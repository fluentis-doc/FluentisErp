---
title: ExtraData Datasource 
sidebar_position: 3
---

# ExtraData Based on Datasource - Introductory Aspects 

Through the ExtraData based on a datasource, it is possible to link a Fluentis object to an external table that is not present in the standard.  
*To better explain this application scenario, we will use a practical example where a custom table named 'typology' has been created, which represents 3 different finishes.*  
![](/img/en-US/extradata/20250314104655.png)

Using FluentisQueryStudio, we proceed to save an SQL query to select all values from the table.

```SQL
SELECT id as Id, code as Code, description as Description FROM DBO.TYPOLOGY
```
:::danger
The structure of the query must necessarily be based on the three columns: **Id**, **Code**, **Description**; otherwise, it will not be possible to create the corresponding datasource.  
:::

![](/img/en-US/extradata/20250314105628.png)

Using FluentisQueryStudio, we proceed to create the datasource that will be based on the query seen above.

![](/img/en-US/extradata/20250314110003.png)

We save the datasource.

## Header 
We now proceed to create the ExtraData by populating the data related to the header.

![](/img/en-US/extradata/20250314110446.png)

* Code and description.
* DataSource Type: select SQL Query DataSource.
* SQL Query: select the desired query.
* Area: dictionary value.

## Activations 
We proceed to link the **ExtraData** to the business object **FSItem** (Item).

![](/img/en-US/extradata/20250314110703.png)

It is exactly as illustrated in the introduction to ExtraData.

## Insert ExtraData into the detail form 

After opening the detail form of the relevant item, to include the ExtraData in the detail form of the item (FSItem), we can use the **form navigator** and **object navigator**.  
1. From the **Object Navigator**, expand the ExtraData node related to the business object and select the ExtraData of interest.
2. From the **Form Navigator**, expand the navigator up to the General tab where we want to insert the ExtraData.

![](/img/en-US/extradata/20250314113001.png)

To display the ExtraData in the detail form of the item, it is sufficient to drag and drop from the Object Navigator to the Form Navigator.  
In the example, the ExtraData 'Item' has been placed in the LayoutGroup that defines the header data of the item (FSItem).  
The ExtraData will have a combobox (dropdown) type widget and will display exactly the values of **code** and **description** saved in the corresponding table on the MSSQL side.

![](/img/en-US/extradata/20250314104655.png)