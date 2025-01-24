---
title: Definition of Corporate Center Plan 
sidebar_position: 2.1
---

The plan of [***Corporate Centers***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) is the first point to address and also fundamental for a correct setup of analytic/managerial accounting: to code the centers, we must first define the ***Dimensions*** of analysis and then the ***Categories of corporate centers***.

:::tip Note
In companies without the *Controlling* option active, it is allowed to create Cost Centers without a reference dimension and without a center category.
:::

The [***Dimension***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) is essentially a coherent criterion for dividing COSTS and REVENUES within the company. Analytic accounting typically will *always* have an INDUSTRIAL/MANAGERIAL dimension, which is typical of all companies, where we divide the company into various functional entities: in this dimension, we essentially have ADMINISTRATIVE CORPORATE CENTER, MANAGEMENT CENTER, TECHNICAL OFFICE CENTER, COMMERCIAL CENTER, and then the various PRODUCTION CENTERS or the centers that identify individual machines or groupings of machines rather than labor groups. 
A typical alternative dimension is PROJECTS, for companies working on PROJECT or assignment; projects are a dimension parallel to the managerial dimension, and this dimension of projects will encompass all DIRECT costs and revenues of the project, while receiving from the industrial/managerial dimension those that are auxiliary and generic centers such as those mentioned earlier (management, finance, etc.): we can, in fact, through cost drivers, shift data from one dimension to another. 
We can also define alternative dimensions where the company wants to assign values separating them from normal logics, as it wants to keep track of certain types of costs: e.g., a fair dimension rather than investments, or purchase budgets.

:::tip Note
These alternative dimensions, which do not impact the logics of the industrial/managerial model or project, are normally standalone elements that can also arise after the initial configuration.
:::


The second obligatory characteristic of cost centers is the ***Category of corporate centers***: at the level of *industrial/managerial dimension*, the types that we can classify for the setup of centers are essentially five:

***1) PRODUCTIVE OR DIRECT CENTERS:*** these are centers that are directly involved in the processing of the product and/or service, thus they are the actual transformation centers. It is fundamental to correctly identify these centers, as if we mistakenly aggregate the costs of these productive centers, we run the risk of obtaining parametric rates for the cost indices of the relevant centers through which we then “cost” our products or our assignments and determine their corresponding marginality, which can mislead in profitability analysis. For example, we cannot aggregate machines or plants with very different costs, as we would create weighted averages. Similarly, we cannot put in the same center machines and plants manned by humans together with machines and plants partially manned by labor, as this would also generate averages that would then lead us to obtain altered marginality.

***2) AUXILIARY INDIRECT CENTERS:*** these are necessary for the functioning of the main centers, thus collecting all those costs that cannot be objectively attributed to the productive centers but are indispensable for their operation. They will have an attachment to ***Cost drivers*** for shift to the productive/direct centers, identifying an adequate management criterion;

***3) COMMON INDIRECT CENTERS:*** these are structural centers also called functional centers (e.g., commercial, technical, quality, etc.);

***4) PROFIT OR INCOME CENTERS, OR CENTERS OF ECONOMIC RESULT:*** these are the centers through which we can relate REVENUES and COSTS related to a type of income, which could be a family of products, or a sales channel;

***5) VIRTUAL/COMFORT CENTERS:*** we use these to manage the entire model; they are support centers for the shift drivers rather than centers where to unload accounting data not to be used in the model.

:::tip Note
The categorization of centers, in addition to having theoretical value on the structure of the analysis model, also has an operational aspect: when defining the links of the centers at the level of the chart of accounts, it is possible to associate to each detail account the various centers that may be valued, or more quickly, one can indicate a category of centers, so as to make visible to the user in the drop-down selection menu only those belonging to the same category. 
:::

We then need to identify which of these centers require us or interest us to calculate a cost rate, by linking to each of them a [*Reclassification Model*](/docs/controlling/reclassifications/create-reclassification-model) for cumulative costs and a calculation logic based on quantity on two possible [*Units of Measure*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) or as a percentage.