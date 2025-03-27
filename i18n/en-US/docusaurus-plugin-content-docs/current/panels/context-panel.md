---
title: Context Panel (Pannelli contestuali)
sidebar_position: 4
---

The contextual panels also known as **Context Panel** allow for immediate visualization of summary information regarding a specific business object of Fluentis.

The construction of a contextual panel (context panel) involves several steps for parameterization, specifically:
1. potential creation of the dashboard (in case the context panel is based on a dashboard).
2. creation of the **context panel** from the relevant form.
3. parameterization of the **context panel** and definition of the related links.

To open the form related to **Context Panels**, go to **Arm** > **Platform** > **Context Panel**.

The form of the contextual panels is structured as follows:

### Ribbon menu
The Ribbon menu contains controls for interacting with the form:
* Search: to search for already defined context panels in Fluentis.
* New: to create a new context panel.
* Edit: to modify an existing context panel.
* View: to view an existing context panel in read-only mode.
* Remove: to remove ExtraData already present in Fluentis.

### Central Body
The central body consists of a grid with the following fields:
* Business Object: mandatory - indicates the object on which the contextual panel is based.
* Localized Code: optional - indicates a localized description.
* Name: Name.
* Form: optional - indicates the form on which the contextual panel is based.
* Dashboard: optional - indicates the dashboard on which the contextual panel is based.
* Report: optional - indicates the report on which the contextual panel is based.

## Detail Form

The detail form consists of 3 parts:

### Ribbon menu
The Ribbon menu contains only the **Save** button, used for saving the configuration.

### Header
The tab related to the header consists of the following inputs/fields:
* Business Object: mandatory - this is the business object on which the contextual panel is based.
* Localized Code: optional - localized description.
* Name: mandatory - description.
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
We want to create a **contextual panel** that shows us the **depreciation percentage** of the asset we select.  
The **depreciation percentage** is calculated as a percentage ratio between the depreciation fund and the historical cost of the asset.

To achieve this result, we must:
1. Create, using **FluentisQueryStudio**, the SQL Query that will allow us to retrieve asset data from the Fluentis MSSQL database.
2. Create the datasource based on the query mentioned in the previous point.
3. Define a parameter in the datasource that will serve as a WHERE filter for the query based on the selected asset.
4. Create the dashboard based on the datasource created in point 2.
5. Create the parameterization in Arm for the contextual panel.
6. Open the asset form (Fixed Assets).

---
1. For the use of **FluentisQueryStudio**, please refer to the dedicated documentation.

```SQL
SELECT * FROM Fluentis.FI_FixedAssets WHERE FIFA_Id = @ID
```
where, ```@ID``` is a parameter defined later at the **DataSource** level.

2. Create the datasource based on the query from the previous point; for creating DataSource, please refer to the dedicated documentation.

Drag into the ***Visible property*** tab the properties of interest such as: **Id**, **Description**, **Code**, **TotalAmount**, **TotalDepreciation**, **NetAmount**.

1. Define, through the **parameters** tab, a parameter in the datasource just created.

)

1. From Fluentis, proceed to create the dashboard; for all details related to dashboards, please refer to the dedicated documentation.

2. From Arm, create the parameterization for the **context panel**.

3. Proceed to select a record from the asset form; the depreciation percentage of the asset will then be shown on the contextual panel.