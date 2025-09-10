---
title: Agent Category
sidebar_position: 2
---

The table opens via the path **Tables > Sales > Agent Category**.

The table is unique for all companies present in the database and is the basis for the enasarco/firr calculations of the agents.

### Agent Category

It is the main grid of the form and contains the agent categories. For each row of this grid, the detailed data is defined in the two subsequent grids for the specification of Enasarco and FIRR.

:::tip[Link]
The entries in the main grid (which link to the calculation details) can be associated in the [**agent registry**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) or (by default) within the details of the table [**Withholding Types**](/docs/configurations/tables/finance/withholding-tax-types). The withholding type can in turn be linked to the agent registry (and in this case, if it has the default agent category, it allows not having to match the latter each time with the agent).
:::

**Code/Description**: code and description that indicates the type of agent. The code must be unique;

**One-firm:** Flag that identifies one-firm categories (exclusive mandate with a single principal company);

**Multifirm:** Flag that identifies multifirm categories (e.g., agent collaborating with multiple principal companies);

**Generic:** Flag that identifies generic categories (e.g., agencies established in the form of a company);

### Enasarco

**Start Date of Validity**: the start date of validity of the detail, which will continue to operate until a new detail with a later start date of validity is read.

**Min Enasarco:** ***quarterly base value***. It is the minimum amount of the Enasarco contribution (e.g., 250.50 for single mandate).

**MaxEnasarco:** ***value on an annual basis***. It is the maximum amount of the Enasarco (maximal), and once reached, no further social security payments can be made on behalf of the agent;

**Withholding Tax Type**: this is the type of withholding to apply to the agent. For further details, refer to the administrative section [Withholding Tax Types](/docs/configurations/tables/finance/withholding-tax-types). It is advisable to set this code in the agent contact.

**Perc Enasarco**: percentage of the Enasarco borne by the agent;

**Percentage Insurance fund company:** percentage of the Enasarco borne by the company;

**Base amount insurance fund**: the percentage (100%) of the application of the Enasarco percentages on the total commission;


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

