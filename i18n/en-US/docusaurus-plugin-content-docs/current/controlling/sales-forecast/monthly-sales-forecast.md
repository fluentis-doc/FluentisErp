---
title: Monthly Sales Forecasts 
sidebar_position: 2
---

We can execute it from the menu area Controlling > Monthly Sales Forecasts.

:::note Note
Before proceeding, refer to what is stated regarding the [Sales Forecast Versions](/docs/configurations/tables/controlling/forecast/pv-versions).
:::

The form consists of 3 areas:

- the data filter area (the upper one): for searching for already entered forecasts;
- the intermediate area: for proposing information during a bulk insert/update;
- the lower area: is a list where you can view and modify the forecasts already entered with the possibility of adding new ones.

The filter area allows filtering the Sales Forecasts by: *Version, Item, Variant, Forecast Year, Active* (all, active, or inactive), and *Consolidated* (all, consolidated, and non-consolidated).

The intermediate area, called **Information to be proposed**, allows, during the insert or bulk update, to propose the predefined information: *Version* (considered only during insertion) and *Monthly Quantities to Propose*. The update is only possible for forecast rows that are not yet consolidated.

The lower area consists of a list containing information about:

- **Version, Year, Default, and Active**: are read-only information as they are entered at the time of inserting a new forecast by copying them from the proposed Version;
- **Consolidated**: indicates whether the row has been “validated” and is ready to be considered in the Generation of production orders; consolidation can be performed manually, row by row, or en masse for all forecasts of a given Version by pressing the **Consolidate Version** button; restoring a consolidated version can be done by pressing the **Restore Consolidation** button;
- **Class, Item Code, Item Description, Variant, and Variant Description**: are the information object of the forecast, not modifiable if the row has been consolidated;
- **Unit of Measure**: is the main unit of measure associated with the item and is not modifiable;
- **Alternative Unit of Measure**: can express Quantities in an alternative unit of measure (if indicated) different from the main one; this is not modifiable if the row has been consolidated;
- **Monthly Quantities, from January to December**: are the monthly forecast quantities expressed in the main unit of measure of the item or alternative unit of measure (if indicated); the quantities of a consolidated forecast from previous years to the current year or current year and previous months to the current one are no longer modifiable;
- **Total Quantity**: is non-editable information as it is the sum of the monthly Quantities.

**Example of inserting new forecasts**

*We double-click on the Item Code cell of the insertion row; the item help is displayed; we press the **Search** button applying a filter or not, select about ten items displayed in the list and press the **Select** button; the selected items will be massively inserted in the forecasts list for the Version and the Proposed Quantities.*

**Example of updating already existing and non-consolidated forecasts**

*We select some rows of forecasts already entered and press the **Propose Quantity** button; after a confirmation message (we will press the **Yes** button) and a notice of “Update completed,” we will find the previously selected rows all with the new quantities.*