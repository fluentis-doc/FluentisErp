---
title: Procurement (Approvvigionamento)
sidebar_position: 3
---

:::important What it is for (A cosa serve)
The Procurement tab of the item registry in Fluentis allows you to define all the parameters necessary to optimally manage the stock of the item. In the first section, general data such as minimum and maximum stock are set, indicating the limits within which to maintain inventory quantities. Other parameters include coverage weeks, days for stock, and the reorder point, which determines when to proceed with a new order. 
Additionally, settings are available for label printers and label report types, useful for managing batches in different statuses (Unique, Compliant, Non-compliant, Quarantine). In the second section, these parameters can be specified for each warehouse where the item is present, offering precise and customized stock management. 
:::

In this tab, all the necessary data for the procurement of the specific item is defined.

The window consists of two parts:

1. In the first part, data for the general procurement of the item is set, not for each individual warehouse:

**Minimum stock and maximum stock (Scorta minima e scorta massima)**: represents the minimum quantities that must always be present in stock for that item and the maximum quantities that can be kept in stock;

**Stockpile days**: represents the number of days necessary to replace at least the minimum stock that has been indicated for that item;

**Cover weeks**: indicates the time interval (calculated in weeks) during which the stock will cover the need for that item;

**Cover index**: is an editable field in which a percentage is entered that may or may not be considered by the scheduler or MRP for stock replenishment.

If the flag *Consider coverage index (Considera indice copertura)* is set in the MRP parameters, at the time of scheduling, the procedure will take into account the percentage indicated in this field to restore the availability of the item in a quantity sufficient to cover the need for the specified number of weeks in the **Cover weeks** field;

**Reorder Level**: here you indicate the quantity at which it is necessary to proceed with reordering that item;

**Days for reorder**: necessary days for replenishing the material in stock;

**Interval for reorder level review**: indicates how often the reorder point should be reviewed and updated;

**Last calculation date of reorder level**: indicates the date of the last time the analysis was performed and the reorder point was established as indicated above;

There are then two sections called:

- **Print labels**: allows you to choose the default printers for printing batch labels for the different *Batch statuses (Stati lotto)*; it will thus be possible to choose between the printer for the batch status of *Unique*, *Compliant*, *Non compliant*, and *Quarantine*.

- **Report label types**: allows specifying the default reports to print for batches in different *Batch statuses (Stati lotto)*; thus, it will be possible to choose different reports based on the batch status of *Unique*, *Compliant*, *Non compliant*, and *Quarantine*.

2. In the second part of the window, the various warehouses where the item can be found are indicated, and optionally, it is possible to define some of the above-mentioned data (minimum/maximum stock and days for stock, reorder point and days for reorder, unique/compliant/non-compliant/quarantine label printing) for each individual warehouse (e.g., the minimum stock or maximum stock that can be held for that item in that specific warehouse, and similarly for the rest of the information).