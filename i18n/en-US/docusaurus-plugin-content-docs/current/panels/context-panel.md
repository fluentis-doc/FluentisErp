---
title: Context Panel
sidebar_position: 4
---

Context panels allow for an immediate visualization of summary information regarding a specific business object in Fluentis.

The construction of a context panel involves several parameterization steps, more specifically:
1. possible creation of the dashboard (in case the context panel is based on a dashboard).
2. creation of the **context panel** from the related form.
3. parameterization of the **context panel** and definition of the relevant links.

![](../../static/images/20250318122749.png)

The form of the context panels is presented as follows:

### Ribbon menu
The Ribbon menu contains controls for integrating with the form:
* Search: to search for context panels already defined in Fluentis.
* New: to create a new context panel.
* Edit: to modify an existing context panel.
* View: to view an existing context panel in read-only mode.
* Remove: to remove ExtraData already present in Fluentis.

### Central Body
The central body consists of a grid with the following fields:
* Business Object: mandatory - indicates the object on which the context panel is based.
* Localized Code: optional - indicates a localized description.
* Name: Name.
* Form: optional - indicates the form on which the context panel is based.
* Dashboard: optional - indicates the dashboard on which the context panel is based.
* Report: optional - indicates the report on which the context panel is based.

## Detail Form
![](../../static/images/20250318135028.png)

The detail form is composed of 3 parts:

### Ribbon menu
The Ribbon menu contains exclusively the **Save** button, used for saving the configuration.

### Header
The tab related to the header is composed of the following inputs/fields:
* Business Object:
* Localized Code:
* Name:
* Right:
* Type:
* Dashboard:
* Definition:
* Shot in Context Menu:
* Show in Contextual Panel:
* Image:
* Arm Form Context:
* Order:
* Default binding definition:

### Bindings Tab

***to be completed.***

# Application Example
We want to create a **context panel** that shows us the **depreciation percentage** of the asset we select.
The **depreciation percentage** is calculated as the percentage ratio between the depreciation fund and the historical cost of the asset.

To achieve this result, we need to:
1. Create, via **FluentisQueryStudio**, the SQL Query that will allow us to retrieve asset data from the Fluentis MSSQL database.
2. Create the datasource that will be based on the query mentioned in the previous point.
3. define a parameter in the datasource that will serve as a WHERE filter for the query based on the selected asset.
4. create the dashboard that will be based on the datasource created in point 2.
5. create the parameterization in Arm for the context panel.
6. open the asset form (Fixed Assets).

---
1. For the use of **FluentisQueryStudio**, please refer to the specific documentation.

```SQL
SELECT * FROM Fluentis.FI_FixedAssets WHERE FIFA_Id = @ID
```
where ```@ID``` is a parameter that we define later at the **DataSource** level.

2. We create the datasource based on the query mentioned in the previous point; for creating a DataSource, please refer to the specific documentation.

![](../../static/images/20250318143226.png)
Drag the properties of interest such as: **Id**, **Description**, **Code**, **TotalAmount**, **TotalDepreciation**, **NetAmount** into the ***Visible property*** tab.

3. We define a parameter in the newly created datasource through the **parameters** tab.

![](../../static/images/20250318144742.png)

4. From Fluentis, we proceed to create the dashboard; for all details related to dashboards, please refer to the specific documentation.

5. From Arm, we create the parameterization for the **context panel**.

![](../../static/images/20250318145023.png)

6. We proceed to select a record from the asset form; the depreciation percentage of the asset will then be shown on the context panel.

![](../../static/images/20250318153357.png)