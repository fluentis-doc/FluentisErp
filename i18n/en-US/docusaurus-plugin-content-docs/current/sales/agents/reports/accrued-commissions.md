---
title: Accrued Commissions
sidebar_position: 2
---

The form opens through the path *Sales > Agents > Agent Settlements > Print*.

The printout is a simulation of the calculation of the commission earned by the agent, according to the settings of their registry and the filters applied to the report.

**In particular, in the case of commissions on collected amounts, this report will display the earned data, excluding the values of the automatic settlements created in the management system, which therefore become mandatory in order to obtain an aligned report;** in the case of commissions on turnover/delivered/ordered amounts, however, the correct use of the date filter range already allows for an accurate result regardless of the use of the automatic commission settlement procedure.

**Print commissions accrued at** indicates the reference date for calculating commissions on *Collected*.

The flag **Print debit vs/agent on date** activates the relevant date: with this option, it is possible to simulate the printing of earned commissions as of that date, including those settled on a later date (which are normally excluded).

The flag **Consider zero commissions in commissionable taxable income** allows for commissions with a zero commission value to be included among the commissionable taxable amounts.

:::tip COMMISSIONS ON COLLECTED AMOUNTS AND OFFSETTING OF ITEMS
In cases where commissions are calculated on collected amounts and an offsetting of items occurs (for example, for previous advances received), it is important to note that the offsetting assigns the closing item lines for the purpose of calculating earned commissions based on the **most recent registration date** among the two that created the items being offset against each other.

In a situation of frequent advances and cancellations, where equal amounts may be present, it is essential to be particularly careful to compensate advances and cancellations related to the same period; otherwise, the commission will be earned on the wrong date.
:::

:::tip COMMISSIONS ON COLLECTED AMOUNTS AND PROVISIONAL ACCOUNTING ENTRIES
For the calculation of earned commissions, ONLY registrations in the **final** state are considered, so any collections (even advanced) registered in provisional mode will be ignored.
:::

:::tip COMMISSIONS ON COLLECTED AMOUNTS AND BANK RECEIPTS
The accrual of commissions takes into account the expiration date of the effect in any case, even if the customer item is closed due to the accounting of the issuance of Ri.Ba. and the effect is presented as good until failure or credited.
:::

:::danger WARNING
Pay particular attention in the case of Bank Receipts to the management of **CUSTOMER RISK PARAMETERS**

where there are two fields **N. days past due for effects presented as good until failure** / **N. days past due for effects presented after collection** which, if set, add a delay to the accrual of commissions.

Additionally, make sure that during the initialization of a new environment, it has been saved at least once within the Customer Risk Parameter form so that the default parameters (particularly concerning the fields mentioned above) are present; otherwise, the expiration date of the effect will not be read, and the commission will always be accrued upon closing the item due to the issuance of Ri.Ba.
:::