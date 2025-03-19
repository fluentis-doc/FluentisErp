---
title: Royalty Management 
sidebar_position: 9
---

The management of royalties is similar to that of agent commissions, sharing some of the same settings.

### Item Registry Configuration 

The registries of items that are subject to copyright/royalties must have the relevant flag (*Copyright rights*) in the **General** tab.

When entering the marked item in sales documents, only for items with this flag, Fluentis will proceed to identify the relevant designer (agent) who holds the copyright on it.

### Agent Registry Configuration 

The configuration of the entity holding the copyright on various items is done by defining an agent type registry.

Typically, these entities are not subject to withholding tax or Enasarco contributions; therefore, it will be necessary to create a [**Agents Category**](/docs/configurations/tables/sales/agent-category/) and a specific [**Withholding-tax type**](/docs/configurations/tables/finance/withholding-tax-types/) that do not include contributions or withholding percentages.

In the **Settlement** tab, we will indicate the withholding type (which can be created or selected, as mentioned above, a type with a zero percentage) and then the criteria for the maturation of the commission, as is the case for agents.


:::tip ATTENTION 
The specificity of the setting is found within the **Direct commiss.** tab, where we will encode the commission type **23 – Royalties**.
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/tipo23.png)

Then, by entering the details of this type (through the **Selected Percentage Detail** button), it will be possible to follow two different paths:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/dettaglio.png)

- Enter the detailed list of items subject to copyright (Fluentis will not allow the entry of items that do not have this flag checked)

- Or the product line that contains the items subject to royalties, in the case that the product line identifies the design (or the element) subject to rights: **only items with the royalty flag will be subject to the respective percentage**, it is not sufficient that they are linked to the line set in the agent registry.

:::danger ATTENTION 
It will not be allowed to enter item X in agent Y if the same item is managed in another agent registry (either as an item or as a belonging line): it is not permitted, in fact, for the same item to have royalties for multiple designers.
:::

### Usage Logic

Once the settings in the item registry and in the agent are completed, the logic of operation is as follows: when an item is entered in sales documents, Fluentis will check if it is subject to royalties or not; in the first case, it will search for the agent who has the commission settings (specific or for the respective item line) in the details of type ’23 - Royalties’ and will add the corresponding commission line in the document.

The logic downstream of this valuation will be the same as for any agent, with summary agent prints and calculations for settlement maturation.

:::tip Note
The fundamental difference between an agent and a copyright holder is that for the latter, it is not necessary to enter him in every customer registry for Fluentis to identify the percentage to apply to the sale, which is instead mandatory for ordinary agents.
:::