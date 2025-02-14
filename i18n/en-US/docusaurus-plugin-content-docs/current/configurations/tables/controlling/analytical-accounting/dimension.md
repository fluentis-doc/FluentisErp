---
title: Dimension .
sidebar_position: 5
---

:::note Path 
**Tables > Controlling > Analytic Accounting > Dimension**

Note:
For anything not detailed in this document regarding the common functioning of forms, refer to the following link [Custom features, buttons, and fields](/docs/guide/common).

:::

---

:::tip Note 
The table is of interest only in companies with the *Controlling* flag active.
:::


The concept of Dimension can be explained as a criterion for analysis and coherent subdivision of COSTS and REVENUES within the company.

It is possible to create and manage multiple analysis dimensions simultaneously.

![Image](/img/it-it/configurations/tables/controlling/analytical-accounting/dimension.png)

**EXAMPLE:** Typically, the analytic accounting is associated with the dimension *COST*, where the company is divided into various entities or business functions, namely the FINANCE CORPORATE CENTER, the MANAGEMENT CENTER, the COMMERCIAL CENTER, and then the PRODUCTION CENTERS.

For this dimension, all company costs and revenues are assigned to achieve a FULL COSTING analysis.

In parallel, we have the *JOB ORDERS*, meaning companies that work on JOB ORDER/ASSIGNMENT; the job orders are parallel dimensions, and therefore all DIRECT revenues from the job order will be linked, and movements related to auxiliary and generic centers (management, finance, etc.) will be transferred from the cost dimension.

We also have the possibility to define **details** dimensions where the company wants to identify certain values, separating them from normal logic, because it wants to keep track of certain types of costs.

**EXAMPLE:** The company wants to keep track of the various FAIRS it participates in, which represent a significant investment. It defines a dimension *FAIRS* assigning the MILAN FAIR center (for example) and attributing not only the cost of the fair to the cost dimension but also to the FAIR dimension as it wants to divide and analyze **in parallel** a piece of data from that specific entity. It does not set the mandatory balancing flag because it only wants an additional element of analysis.

The dimension can therefore also be seen as a LABEL that we attach to the centers.

We can, through cost drivers, allocate data (costs and profits) from one dimension to another.


---

:::note TABLE FIELDS 

- The **FLAG BALANCED** flag identifies that this must have a balance with accounting. It is no longer the general ledger that needs to balance with the cost/profit center or job order but must balance with the individual analysis dimension that requires a balance. The balance test will be performed only if the accounting movement template also includes the block for saving unbalanced movements at the level of center valuation;
- The **JOB ORDER** flag indicates that the line of the analysis is primarily associated with the project for which the cost or revenue is moved directly, and from this project, a cost center will be derived for valuation, a center that can be a generic code common to all projects or perhaps a center linked to a specific characteristic of the selected project;
- The **FLAG MANDATORY CHART OF ACCOUNTS** flag indicates that the user’s actions are limited when registering a center of this dimension in accounting: since in the chart of accounts we can link to each cost and revenue detail account one or more corporate centers, with this option, I indicate that what is entered in the chart of accounts cannot be modified by the user. Essentially, a production cost cannot become an expense assigned to the management center. The bond can be related to the individual center, rather than to the categories of centers;
- The **ENABLE JOB ORDER** flag, on the other hand, is used to link a reference job order even in the lines of the standard cost/directional dimension, to avoid managing two different dimensions.
:::