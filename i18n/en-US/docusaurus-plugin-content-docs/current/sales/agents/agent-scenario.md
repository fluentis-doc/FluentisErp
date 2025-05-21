---
title: Agent Management Scenario - Examples 
sidebar_position: 5
---

In this page, we illustrate some examples to compose a possible agent management scenario.

This type of pathway is useful to understand the connections between various functionalities and to provide some examples of calculation criteria.

We will follow this sequence:

- Definition of commission brackets
- Creation of agent registry and related configuration
- Matching with clients
- Creation of sales documents
- Collection of invoices
- Monitoring the accrual of commissions
- Agent settlement
- Management of agent compensations
- Enasarco payments and withholding tax (brief notes)
- Processing the certification of withholding tax (brief notes)

## Definition of Commission Brackets 

One of the most commonly used commission calculation criteria, and from a didactic perspective the most interesting compared to the classics like a fixed percentage or a percentage based on the customer, is represented by the *Discount intervals*.

The goal is to define decreasing commissions as the discount that the agent grants to the client increases.

The peculiarity in configuring this criterion, compared to simpler ones, lies in the necessity to predefine discount ranges associated with their respective commission percentages.

First, we need to manage the table **Commissions Range** (insert link).

:::important[Important]
**Pay attention to the header of the form**: it is advisable to keep it always visible using the pin button in the top right corner. The header contains a fundamental filter for managing the table: [**Discount Range**](/docs/configurations/tables/sales/discount-range).

The connected table simply allows the definition of enabled types, defining the code and description and referring to a predefined criterion among those available, but **in the header of the discussed form, it is necessary to select a discount range** to view or manage the details related to the chosen range.
:::

Regarding the chosen discount range, which can be of type *Single* (simple), or based on *article classes*, *article type*, or a specific *characteristic* (all fields present in the database and related to the article and thus able to be valued), or based on a merchandise category to which the article belongs, or a sales price list in which the article is included, we can define the details.

If we do not select any discount range, the search will produce read-only (non-modifiable, in gray) data.

Based on the discount range, an additional specific filter (dropdown) will appear, also in the header.

At this point, if for example, we had set a discount range based on the merchandise category and we obviously have our categories (e.g., fasteners, tools, etc...) in the system, for each of these categories displayed on the left grid of our form, we could define, on the right panel, the commission brackets.

We proceed by entering a code and description; for example, the range from zero discount to 10% could be coded as 010 and in the description, freely defined as "from 0 to 10%", at this point in the next two fields, we define the two percentage values of the range, in the first 0 and in the second 10.

:::important[Important]
Pay particular attention to how the brackets are defined, avoiding any gaps, keeping in mind, as seen from the labels, that the range goes from a value **greater than or equal to** ... to a value **less than** ...
:::

In the next field **Value**, we define the **commission** of the agent related to the set bracket/range, and in the last column, we will select the option **Percentage**, as we intend to set commission percentages, but we could also switch to the *Value* option and use the absolute dollar amount for the commission.

If we had chosen a Single discount criterion, we would not have any detail on the left and would go directly to define the ranges with valid percentage values.

![](/img/it-it/sales/agents/definizione-fasce-provvigionali.png)

In the image, the 35% discount corresponds to a commission of 3%.

## Creation of Agent Registry and Related Configuration   
In the creation of the agent registry, we will only revisit the most important fields for the example, referring to the [**related pages**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail) for the basic phases of registry creation, after having set the [**commission accrual criteria**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement), such as confirmed order, issued invoice, or upon payment (definitely the most used as it recognizes the commission in proportion to the collected amount) and other fields of fiscal and social security interest such as **agent category and withholding tax** (or exemption regime), we focus on the calculation of the commission (the commission value) and thus match it with the criterion we mentioned.

In the tab [**Direct Commissions**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions), in addition to the fields for a fixed salary and a general commission percentage for the specific agent, we have the right grid, where we will select the criterion of **Discount Brackets**.

**Pay attention to the Priority field** also because by default the registry is initialized with the Agent Registry criterion and priority 1. We must delete this criterion, or better yet, set it to a lower priority, for example 2, and set our *Discount Brackets* at priority 1. This way, if the specific criterion we are interested in does not apply in the specific case, we have a residual criterion that will assign the percentage written in the agent registry in the adjacent field we discussed.

:::danger[Warning]
With a "detailed" criterion like *Discount Brackets* and several others, **it is necessary to define the details by pressing the button on the ribbon bar *Details of Selected Percentages* **.
:::

![](/img/it-it/sales/agents/provvigioni-dirette.png)

**In the form that opens, it is necessary to select again the discount range of reference to obtain the display of the commission brackets.**

The purpose of pressing the button and opening this form is that we will see the brackets we have already defined loaded. These brackets are to be considered as standard.

We can therefore accept the standard for this agent and thus make no changes, or, through the appropriate radio button ***Commissions***, switch the reading to **Customized**. Then the **Value** column becomes **modifiable** and we can define valid values only for that agent.

We also have the radio button ***Reference Price*** with which to determine whether the reference price for the calculation should be that of the item registry or the specific one defined in the sales document line.

:::danger[Warning]
Let us also remember to define the **Validity Date range**, at least the From date field.
:::

![](/img/it-it/sales/agents/definizione-provvigioni.png)

## Matching with Clients 

:::tip[Attention]
**In any case**, whatever calculation criterion we choose, **the agent must be linked to the clients** for whom they will earn a commission.

Multiple agents can be linked to each client.
:::

For the linking, instead of opening the various client registries and inserting the agent in the [**Agents**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/agents) tab, we can use the tool available in the **Agent Assignment** form (Home>Contacts>Agent Assignment).

Here, it is possible to start a search (equipped with various filters in the header) that displays all clients, and when hovering over a row, view any agents already associated with each client.

Thus, the procedure is also and especially useful for maintenance, for example in cases of an agent’s termination and another's takeover.

The **add** button in the ribbon bar allows us to insert our new agent for all desired clients. 

The other buttons intuitively allow for other operations such as replacement, deletion, updating validity dates, etc., in the aforementioned cases of takeovers and terminations, etc.

It is also possible to mass input the commission percentage related to the single client in this way, but this is not the case in our example where we reason based on discounts.

## Creation of Sales Documents 

The calculation of commissions in documents such as orders, bills, and invoices (is carried over in the creation of the subsequent document from the previous one) occurs automatically based on the settings defined above; the value of the discount that determines the value of the commission may occur in various ways without posing a problem for the commission calculation.

Refer to the procedures for the [**definition of discounts**](/docs/sales/price-control/definition/) in the Sales area.

Note: in the header of the sales documents, the agent or agents attached are highlighted, but to check the value of the calculated commission (starting from the document in question), you must go to the [**Items**](/docs/sales/sales-invoices/invoicing/sales-invoice) tab.

## Collection of Invoices 

In our example, we have set an accrual criterion of **upon payment**, therefore for the purpose of being able to proceed with the settlement of the commission, after verifying its accrual, **the accounting entry for closing the** (or the) **open invoice** that was generated with the [accounting](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) of the sales invoice is significant.

Note: it is noted that in the case of collection through bank receipt, the effective date of **accrual** is notable, a date that could be extended according to a parameter present in the [Customer Risk](/docs/configurations/parameters/treasury/customer-risk-parameters) module.
(Number of days beyond the due date for effects presented at good end - Number of days beyond the due date for effects presented after collection)

## Monitoring the Accrual of Commissions

To verify the accrual of commissions and therefore the possibility of liquidating them and the expected results, always considering the criterion chosen upon payment (which makes this verification important), we can use the relevant print, [**Accrued Commissions**](/docs/sales/agents/reports/accrued-commissions).

In fact, the print is capable of showing in advance how much has accrued and the liquidation value we will then generate and liquidate by converting it into a compensation for the agent (the agent is in itself a recipient against the withholding taxes).

Other prints of the module are useful for verifying more in detail the amounts abstractly owed but not necessarily accrued, such as [**Agent Payslips**](//docs/sales/agents/reports/agents-payslip).

## Agent Settlement   
The procedure of [**Automatic Creation of Commission Settlement**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) allows us to process the calculation and to consider the commissions liquidated that will be included.

From that moment these commissions will no longer be visible by executing the print [**Accrued Commissions**](/docs/sales/agents/reports/accrued-commissions) which will continue to show any residues in the case, for example, of partial payments of open invoices or any partial payments of affected invoices.
These residues will clearly be liquidable and will contribute to a subsequent settlement when their respective invoices are closed through a collection accounting entry. Note that our example foresees the criterion of payment (pro-rata concerning the collections), and that different criteria are possible, such as the simple issuance of the invoice, which would make the commissions immediately accrued, or even more restrictive criteria such as **total payment** (available only if the commissions are managed with the [**administrative module**](/docs/finance-area/maturity-values/maturity-values/commissions)).

:::note[Note]
With the *payment upon receipt* method, the selection of commissions to be liquidated will always be "all" *up to the date*, it is not possible to select what has accrued in a specific date range, and no connection is planned with the liquidation periodicity field present in the agent registry.

The filter ranges present in the procedure are indeed referred to the dates of orders/bills/invoices, not at the level of **payment** dates. 

This is necessary because while there is no way to add or modify documents in already liquidated periods, the situation is different for payments: nothing prevents creating a payment with the registration date in a period already closed in an agents' liquidation calculation (perhaps because banks have not been reconciled or due to an error in an old registration), thus the data would be "lost" in subsequent calculations.
:::

Since the selection grid of agents on the left shows the accrual criterion (for reference), in case you need to work settling commissions in relation to a specific period of issued documents, with criteria different from payment received (see note above), you can use the date filters on the documents present in the right area of the form.

After selecting the agents, also in groups concerning possible different accrual criteria and thus requirements for filtering documents, it is requested, in the bottom right, to set a description of the settlement, the date is proposed as today’s date and does not influence the data filtering, it uniquely distinguishes the date of processing the settlement; finally, it is necessary to fill in the month and year of competence of the settlement for the calculation of the minimum and maximum for the Enasarco contribution.

It is important to pay attention to filling in the period because, for example (in case of incorrect input), if in a certain quarter no liquidated commissions are found for the agent (for example, because they were incorrectly attributed to the following period), the software will nonetheless allocate a settlement of only contributions chargeable to the company that must be paid.

Executing the calculation, the software returns a confirmation message or a warning related to the agents for whom no liquidated commissions were found.

At the end, if you wish to perform some checks, it is possible to [**open the settlement**](/docs/sales/agents/agent-settlement/insert-settlement) by double-clicking after having [**searched for it**](/docs/sales/agents/agent-settlement/search-agent-settlement).

Inside, it is possible to obtain the list of invoices considered for the settlement; to do this, move to the **Invoices** tab and press the button in the ribbon bar **Search**.

The result is represented in the two lower grids, the first showing the invoices considered (at the header data level) and the second the details of the invoice lines with their respective commissions.

:::danger[Warning]
This refers to the value of the commissions **abstractly calculated** on the individual invoice lines, not necessarily accrued in the settlement, the total value of which may differ as it might be partially collected.

In the case of partial payments of an invoice, where the remainder, for instance, is settled in a subsequent period, the first settlement that includes the first quota of payment will be displayed in detail with the value of the entire commission, while the settlement that includes the remaining quota will always show the invoice reference in the upper grid, but will be empty in the lower grid.

It is planned to release an additional field indicating what has effectively contributed to the settlement.
:::

## Management of Agent Compensations 

Within the settlement, data regarding the withholding tax and the amounts chargeable to the agent (to be withheld and paid on their behalf) and the principal company charge for the Enasarco contribution are already inserted.

At this point, using the appropriate procedure, from the settlement [**let's create the compensation**](/docs/sales/agents/procedures/create-professional-man-commission).

The compensation created automatically will be searchable in the administrative module of [**Receivable Compensations**](/docs/finance-area/professional-men/search-compensations/search-compensations-intro).

## Enasarco Payments and Withholding Tax 

The automatic input in the receivers module through the compensation also allows for the [**management of payment**](/docs/finance-area/professional-men/accounting/payments-accounting/payments-accounting-intro), whether the agent has issued an invoice or if it is a pro forma, and automatically manages the debt towards the tax authorities for the [**payment of withholding tax**](/docs/finance-area/professional-men/procedures/model-f24/f24-management).

The specific procedure for the [**accounting of the Enasarco contribution**](/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro) to be paid (both chargeable to the company or retained from the agent) executes the accounting entry that records the cost and the debt; the physical payment and the related accounting entry must be executed manually.

## Processing the Certification of Withholding Tax 

The pathway concludes with [**the processing of the certification for withholding tax**](/docs/finance-area/declarations/declarations/withholding-tax-certification) operated concerning the agent.

We are now in the administrative module and it involves handling a fiscal compliance obligation, so we will refer to the details. This note is useful to understand how the sales and administrative areas are connected in this case given the features of the agent, who, in addition to the needs for calculating commissions, undergoes withholding tax and thus is integrated into the management of receiving professionals.