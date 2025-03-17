---
title: Corporate centers category
sidebar_position: 3
---

The form can be found at the path: **Tables > Controlling > Analytical Accounting > Corporate centers category**

:::tip Note 
The table is only of interest in companies with the *Controlling* flag active.
:::

The second *mandatory* characteristic of cost centers is the ***Category of Business Centers***: this table represents a "label" associated with business centers to manage them in homogeneous logical groups.

![Image](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers-categories.png)

The choice of categories and the "style" in which this table can be populated **can depend on many factors** and various **theories** on management control.
Therefore, we can cite <u>only a few examples</u> for better understanding.

***1) PRODUCTIVE OR DIRECT CENTERS:*** these are centers that directly participate in the processing of the product and/or service, so they are the actual transformation centers. It is essential to correctly identify these centers, as if we make a mistake in aggregating the costs of these production centers, we risk obtaining parameterized rates of cost indices for the related centers through which we then "cost" our products or jobs and determine their related marginality, which can mislead the profitability analysis. For example, we cannot aggregate machines or plants with very different costs, as we will create weighted averages. Similarly, we cannot put together machines and plants operated by humans with machines and plants partially operated by labor, as this would also generate averages that would then lead us to obtain altered marginalities;

***2) INDIRECT AUXILIARY CENTERS:*** these are necessary for the operation of the main centers and therefore collect all those costs that cannot be objectively attributed to the production centers but are essential for their functioning. They will have the link to **Cost Driver*** for allocation to production/direct centers, identifying an appropriate management criterion;

***3) COMMON INDIRECT CENTERS:*** these are the structural centers also called functional centers (e.g., commercial, technical, quality, etc.);

***4) PROFIT OR INCOME CENTERS:*** these are the centers through which we can relate REVENUES and COSTS related to a type of income, which could be a family of products or a sales channel;

***5) VIRTUAL/COMFORT CENTERS:*** these are used to manage the entire model; they are support centers for cost driver allocation rather than centers where accounting data that are not used in the model can be offloaded.

:::tip Note
The categorization of centers, besides having theoretical significance on the structure of the analysis model, also has an operational aspect: when defining the links of the centers at the account plan level, it is possible to associate various centers to each sub-account that can be valued or more quickly indicate a category of centers, so that only those belonging to that category are visible to the user in the dropdown selection menu.
:::