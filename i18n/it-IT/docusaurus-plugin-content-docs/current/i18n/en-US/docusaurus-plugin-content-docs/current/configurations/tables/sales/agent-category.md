---
title: Agent Category
sidebar_position: 2
---

The table opens via the path **Tables > Sales > Agent Category**.

It allows the insertion of new records or the search for existing ones to view, modify, or delete them.

The form consists of a filter area and a results area. Once all desired filters are set, simply click the **Search** button to display the results within the results grid.

To insert new records, you must click on the first empty row in the grid or press the **New** button.

The **Agent Category** table, unique for companies present in the database, is the base table for the Enasarco/FIRR calculations of the agents.

### Agent Category

The grid contains the categories for the specification of Enasarco, such as:

**Code/Description**: code and description that indicates the agent reference code. The code must be unique;

**MinEnasarco**: value on a quarterly basis. It is the minimum amount of the Enasarco;

**MaxEnasarco:** value on an annual basis. It is the maximum amount of the Enasarco (maximal), and once reached, no further social security payments can be made on behalf of the agent;

**Withholding Tax Type**: this is the type of withholding to apply to the agent. For further details, refer to the administrative section [Withholding Tax Types](/docs/configurations/tables/finance/withholding-tax-types). It is advisable to set this code in the agent contact.

**Perc Enasarco**: percentage of the Enasarco borne by the agent;

**Percentage Insurance fund company:** percentage of the Enasarco borne by the company;

**Base amount insurance fund**: the percentage (100%) of the application of the Enasarco percentages on the total commission;

**One-firm:** Flag that identifies the one-firm categories;

**Multifirm:** Flag that identifies the multifirm categories;

**Generic:** Flag that identifies the generic categories;

### FIRR

The grid is used for the calculation of the FIRR (Termination Indemnity Fund for Trade Agents – Italy):

![](/img/it-it/configurations/tables/sales/agent-category/image03.png)

**Row**: identifies the row number. It must be unique across all agent categories;

**Percentage**: percentage of the tax;

**From commissions/To commissions**: lower limit and upper limit of this tax;

This grid must be populated following the instructions provided for this treatment.

Rates for one-firm agents

![](/img/it-it/configurations/tables/sales/agent-category/image04.png) 

Rates for multifirm agents

![](/img/it-it/configurations/tables/sales/agent-category/image05.png)

For all that is not detailed in this document regarding the common functioning of the forms, please refer to the following link [Custom features, buttons, and fields](/docs/guide/common).