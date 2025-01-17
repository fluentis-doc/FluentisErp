---
title: Commissions
sidebar_position: 7
---

This form allows you to view the commissions (agent commissions) earned and paid.

It refers to the management of agent commissions carried out by the finance module.

In the header section, there are filters for Agent and some accounted elements, since the lines corresponding to the commissions are entered at the time when the sales invoice that determines them is recorded.

:::note Note
**Please remember that within the ledger template with which the invoice is recorded, the commission management flag must be active, which will ensure that the data is populated in the appropriate tab dedicated to commissions present within the ledger record.**
:::


Additional filtering elements are the four flags that allow searching for commissions to be settled, settled commissions, or both, and commissions not earned or earned.

**N.B.** more precisely, the condition *OPEN* and *CLOSED* refers to whether there is still a residual amount to be collected or if everything has been collected (thus the *closed* commission will not have any further movements).

In the detail grid, the rows correspond to the commissions calculated in the invoice entered at the time of the invoice's accounting.

Depending on the maturation criterion defined in the agent register (for example, upon payment), "reversal" rows will be created (for instance, in the case of a partial payment or one of the various open mat. values, a row corresponding to the payment amount will be created). To see them, you need to expand the details of the main row with the appropriate + button on the left of the row.

In the details (then reported on the main row), there is also a flag that gets activated when the commission is paid to the agent.

![](/img/it-it/finance-area/maturity-values/commissions.png)

:::tip LINK
For the specific procedure for settling commissions from the finance module, see [**here**](/docs/finance-area/professional-men/procedures/calculate-commissions).
:::