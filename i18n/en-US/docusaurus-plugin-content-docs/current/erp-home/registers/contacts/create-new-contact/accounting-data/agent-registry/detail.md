---
title: Detail
sidebar_position: 2
---

The **Agent** type registry is necessary to manage various settings and **automations** related to this type of entity and allows for the **calculation of commissions**, as well as the management of **fiscal aspects** such as ENASARCO contributions and withholding tax.

After entering the general personal data of the subject, you will proceed to choose the [account type](/docs/configurations/tables/finance/account-types) **Agents** in the *Assigned Detail Account* grid of the [*Accounting Data*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) tab.

:::important[Important]
It is recommended to fully fill in all the fields necessary for managing the agent, organized in this and the subsequent tabs.
:::

This window contains general elements of the agent itself:

**Use open maturity**: activates the management of open items for the current registry (it is advisable to always enable it to obtain open items in the schedule concerning the agent, for example for payment of due commissions);

**Agent category**: this is the fundamental element for the calculation of **Enasarco** and **FIRR**, as defined in the [Agent Categories](/docs/configurations/tables/sales/agent-category) table; the selection is made through the combo box linked to the table.

**Agent Feature**: a free statistical element useful, for example, to create groupings. The combo box is linked to the [Agent Characteristics](/docs/configurations/tables/sales/agent-characteristics) table.

**VAT**: Default VAT rate to propose when creating the agent's compensation, both manually and from the commission liquidation calculation procedure.

**Currency**: currency in which the accounting account and the documents addressed to the agent are denominated.

**Start/end relation date**: based on this date, the calculation of the client supplementary allowance begins (print available for the Agents/Recipients module);

**Offset/cost**: the general accounting detail account to propose when entering the compensation in the Recipients module (or to be used in its automatic creation from the agents' liquidation) to account for the cost of commissions;

**Fixed Offset Account**: it is possible to assign a fixed amount to a specific accounting account through this field;

**Invoicing account**: this detail account is used, in the automatic creation of the recipient compensation from the agents' liquidation, to attribute the compensation to a different accounting code (of supplier type, in order to unify accounting data for subjects who are both agents and suppliers);

**Notes**: free notes of the agent registry;

**User**: linkage to the user of **Fluentis**, used for data visibility restrictions when the agent has been granted access to ***Fluentis***.

**Document visibility**: connected to the previous field, it allows to define whether the agent sees *All documents* or *Their own documents*.

**Enasarco**: registration number with the entity;

**Chamber of Commerce number (CCIAA)**: registration number with the chamber of commerce;

**Area manager**: allows linking the registry of an agent who is an area manager to the one in use; there are no automatic processes related to the calculation of commissions.

**Tax system**: the tax regime of the subject.

**Intra and Service Code**: for intra-community agents to be reported in the quater and quinquies sections of the Intrastat declaration;

**Stock company**: obsolete, present for backward compatibility.

**Obligation commissions on line order**: with this flag, the user is required to set a commission for the agent in the customer order.

The fields related to electronic invoicing are not currently in use.