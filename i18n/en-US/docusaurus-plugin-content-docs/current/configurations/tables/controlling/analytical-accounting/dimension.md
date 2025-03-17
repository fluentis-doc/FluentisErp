---
title: Dimension
sidebar_position: 5
---

The form is found on the path: **Tables > Controlling > Analytical Accounting > Dimension**

:::tip Note
The table is of interest only in companies with the *Controlling* flag active.
:::

The concept of Dimension can be explained as a criterion for analysis and coherent subdivision of COSTS and REVENUES within the company.

It is possible to create and manage multiple analysis sizes simultaneously.

![Image](/img/it-it/configurations/tables/controlling/analytical-accounting/dimension.png)

**Example**: Typically, the analytical accounting is associated with the *INDUSTRIAL* size, where the company is divided into various entities or business functions, namely ADMINISTRATIVE BUSINESS CENTER, MANAGEMENT CENTER, COMMERCIAL CENTER, and then the PRODUCTION CENTERS.

For this size, all company costs and revenues are assigned to achieve a FULL COSTING analysis.

At the same time, we have the *Job Orders*, i.e., companies that work on PROJECT/PROJECTS; projects are parallel sizes, and thus all DIRECT revenues from the project will be linked, and the movements related to auxiliary and generic centers (management, administration, etc.) will be transferred from the industrial size.

We also have the option to define **specific** sizes where the company wants to identify certain values, separating them from normal logic, because it wants to keep track of certain types of costs.

**Example**: The company wants to track the various FAIRS it participates in, which represent a significant investment and defines a *FAIRS* size by assigning the FIERA MILANO center (for example) and attributing not only the fair's cost to the industrial size but also to the FAIR size since it wants to subdivide and analyze **in parallel** a piece of data for that specific entity. It does not set the mandatory matching flag in this case because it only wants an additional element of analysis.

Thus, the size can also be seen as a LABEL that we attach to the centers.

We can, through cost drivers, allocate the data (costs and profits) from one size to another.

#### Specific Fields 

- The flag **MANDATORY MATCHING** identifies that this must match with accounting. It is no longer the general accounting that must match with the cost/profit center or the project but must match the individual analytical size that requires matching. The matching test will be conducted only if the accounting movement reason also provides a block on saving non-matching movements at the valuation level of the centers;
- The flag **Job order** indicates that the line in the analysis is primarily associated with the project for which the cost or revenue is directly moved; from this project, a cost center will be derived for valuation, which may be a generic code common to all projects or perhaps a center linked to a specific feature of the selected project;
- The flag **Flag Mandatory Chart Of Account** indicates that you want to limit what the user can do when registering in accounting a center of this size: since in the chart of accounts we can link each cost and revenue subaccount to one or more business centers, with this option I indicate that what is entered in the chart of accounts cannot be modified by the user. Essentially, a production cost cannot become a cost assigned to the management center. The constraint can be related to the individual center, rather than the categories of centers;
- The flag **Enable job order**, on the other hand, serves to link a reference project also in the lines of the normal industrial/management dimension, to avoid managing two different sizes.
:::