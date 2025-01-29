---
title: General Ledger Templates
sidebar_position: 2
---

In the general ledger templates, under the *Record Detail* tab, it is important to activate the flag ***Cost Centers*** and ***Projects*** if the customer intends to use a dimension related to projects/job orders. These flags should be activated in all templates that can insert economic data of interest for management control; they are not relevant for templates related to the opening/closing of accounts, such as those for VAT transfers of reverse charge or similar, which by their nature always and only move asset accounts.

Another important flag is the one for reconciling the movements of the centers, present in the last *Parameters* tab as ***Block recording if the value of cost centers/revenue centers is not equal to accounting transaction***.

Finally, still in the *Parameters* tab, we have the parameter *Automatic recalculating of cost centers, revenue centers, and projects*. This flag defines how ***FluentisERP*** should behave when a user modifies an already saved ledger record:
- if set, ***FluentisERP*** will recalculate the analytical section each time a change is made to the general movements section, reapplying the predefined calculation logic and thus resetting any manual changes made by the user
- if not set, ***FluentisERP*** will no longer modify the analytical section, which will be left for the user to align manually. Upon saving, even if no reconciliation blocks are foreseen, the user will still receive a warning message about any discrepancies, not only concerning amounts but also regarding inconsistencies between the ranges of economic competence dates.

:::tip Note
*In a company with the Controlling flag active*, the test parameter for reconciliation goes hand in hand with the mandatory reconciliation flag that can be set at the level of a single [*Dimension*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) of the company’s centers; the flag for *Block recording if the command value is not equal to accounting transaction* becomes irrelevant, as projects/job orders will also be valued in the analytic accounting in a specific [*Dimension*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) dedicated to the valuation of direct project costs/revenues.
Conversely, *if the company does not have the Controlling flag active*, we will not have dimension management nor the integration of projects in the analytical section, so activating the reconciliation flag for the centers will require the assignment of economic movements 100% to the cost centers, while reconciliation in the separate section for projects/job orders will be managed with the appropriate flag of the cause.
:::