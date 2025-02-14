---
title: Corporate Center Categories 
sidebar_position: 3
---

:::note Path 
**Tables > Controlling > Analytic Accounting > Corporate Center Categories**

Note:
For anything not detailed in this document about the common functioning of forms, please refer to the following link [Custom Features, Buttons, and Common Fields](/docs/guide/common).

:::

---

:::tip Note 
The table is of interest only in companies with the *Controlling* flag active.
:::


The second *mandatory* feature of cost centers is the ***Category of corporate centers***: this table represents a "label" associated with corporate centers to manage them in homogeneous logical groups.

![Picture](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers-categories.png)

The choice of categories and the "style" in which this table can be populated **can depend on many factors** and various **theories** regarding management control.
Therefore, we can mention <u>only a few examples</u> for better understanding.

***1) PRODUCTION OR DIRECT CENTERS:*** these are centers that are directly involved in the processing of the product and/or service, thus they are the actual transformation centers. A correct identification of these centers is fundamental because if we make a mistake in aggregating the costs of these productive centers, we risk obtaining parameterized rates of the cost indices of the respective centers through which we then “cost” our products or job orders and determine their relative margins, which can mislead profitability analysis. For example, we cannot aggregate machines or plants with very different costs, as this would create weighted averages. Similarly, we cannot place in the same center machines and plants operated by humans along with machines and plants partially operated by labor, as this would also generate averages that would lead us to obtain distorted margins;

***2) INDIRECT AUXILIARY CENTERS:*** these are necessary for the operation of the main centers, thus they collect all those costs that cannot be objectively attributed to productive centers but are essential for their operation. They will have a connection to ***Cost drivers*** for chargeback to the productive/direct centers, identifying an appropriate management criterion;

***3) INDIRECT COMMON CENTERS:*** these are structural centers also known as functional centers (e.g. commercial, technical, quality, etc.);

***4) PROFIT OR INCOME CENTERS, OR ECONOMIC RESULT CENTERS:*** these are the centers through which we can relate REVENUE and COSTS related to a type of income, which could be a product family or a sales channel;

***5) VIRTUAL/OFFSET CENTERS:*** we use them to manage the entire model, they are support centers for chargeback drivers rather than centers for unloading accounting data that are not used in the model.

:::tip Note
The categorization of centers, in addition to having theoretical significance on the structure of the analysis model, also has an operational aspect: when defining the links of the centers at the chart of accounts level, it is possible to associate various centers that can be valued with each detail account, or more quickly indicate a category of centers, so as to make visible to the user in the dropdown selection menu only those belonging to that category.
:::