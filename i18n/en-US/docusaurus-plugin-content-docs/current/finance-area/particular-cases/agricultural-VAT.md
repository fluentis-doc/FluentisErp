---
sidebar_position: 1
title: Special Agricultural VAT Regime 
---

The Agricultural VAT provides for the non-deductibility of VAT for purchases subject to this regime and the application of a compensation percentage for sales under the same regime: instead of deducting VAT on purchases as in the normal regime, VAT on purchases is always non-deductible while VAT applied to sales must be paid only in part with a fixed calculation, with no relation to current period purchases, applying variable compensation percentages depending on the type of goods sold.

### Preliminary Management of Tables

To manage the compensation percentage, we will first define the necessary VAT rates for sales, where we will use the 'deductibility percentage' to perform the calculation:

![](/img/it-it/finance-area/other/agr1.png)

Essentially, if VAT X has compensation percentage Y, Y will be indicated in the column ‘% VAT agr. nondeduc.’ (as informational data reported in the VAT settlement printout) while the percentage to indicate in the column ‘% Non-Deductible’ will be valued with the result of Y*100/X.

We will define a specific account on which to value the compensated VAT portion through the application of the Non-Deductible percentage, for example:

![](/img/it-it/finance-area/other/agr2.png)

We will define specific causes to divide the two VATs in the sales records under the agricultural regime, where in particular we will have:
- a movement type ‘agricultural sales’
- the specific VAT account for recording the compensated VAT portion
It is not necessary to define a specific VAT register for the recording of these operations.

![](/img/it-it/finance-area/other/agr3.png)

Purchases made under the agricultural regime must also be managed with a specific accounting cause, which has the sole particularity of being linked to the agricultural VAT regime.

![](/img/it-it/finance-area/other/agr4.png)

Since the VAT on purchases recorded with this cause must always have a Non-Deductible percentage of 100% (or VAT percentage 0, if the operation is non-taxable/exempt/excluded), it is advisable to fill in the ‘VAT Rates Check’ section to avoid incorrect valuations.

![](/img/it-it/finance-area/other/agr5.png)

If intracommunity purchases subject to the agricultural regime are also made, instead of the usual causes with movement type intracommunity purchase and the relative VAT accounting adjustment, two specific movement types are provided: agricultural intracommunity purchase VAT with the related agricultural VAT accounting adjustment. The purchase will again have VAT non-deductible at 100%, while on sales, the VAT to be paid will be applied: this change in rate will be manageable through the configuration of the automatic VAT rate in the VAT grid, as in cases of mixed reverse charge.



### Results for Periodical VAT Settlement

The VAT settlement will show a summary of the movements in the agricultural regime in this way:

![](/img/it-it/finance-area/other/agr6.png)

![](/img/it-it/finance-area/other/agr7.png)

:::danger Attention
The closing of the account ‘Agricultural Sales VAT’, used to record the compensated portion of VAT on sales, must be managed **manually** by the user with a specific accounting entry.
:::