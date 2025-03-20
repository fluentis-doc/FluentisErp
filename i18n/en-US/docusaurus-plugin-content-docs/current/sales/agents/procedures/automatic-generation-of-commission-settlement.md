---
title: Automatic Commission Settlement Creation 
sidebar_position: 1
---

The form opens via the path *Sales > Agents > Procedures > Automatic Commission Settlement Creation*.

The automatic commission settlement creation process performs the final calculation of agent settlements according to the set parameters.

## Settlement Calculation 

Once the search is executed, the **Agents list** section will display all the agents defined in the system: in this section, it is necessary to select (using the *Ctrl* or *Shift* keyboard commands to select multiple rows) the list of subjects for whom to perform the calculation.

The **commission accumulation type** of the agent is visible, so that you can **set the filters on the right appropriately to the agent's settings**.

On the right, the following filters appear:

- a filter for the document currency, to create an agent settlement differentiated by currency;

- three sections of filters depending on the reference document (order/invoice/shipment, for agents with confirmed orders, deliveries completed, invoices issued);

- a section for filtering **items**, for agents with due dates matured or **payment completed**: based on the set date, the items with a due date prior will thus be matured in the first case; in the second case, the portion will be based on the **amounts collected** in accounting **with a date prior**.

In the case of **effects**, these will not be considered matured until the **maturity date** (i.e., the due date **plus the customer risk days** set in the parameters of the homonymous module).

:::note[Note]
With the *payment completed* method, the selection of the commissions to be settled will always be "all" *up to the date*, it is not possible to select what has matured within a specific date range, and there is no connection with the periodicity field of the settlement present in the [agent registry](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/settlement).

This is necessary because, while there is no way to add or modify documents in already settled periods, the situation is different for payments: nothing prevents creating a payment with a registration date in a period already closed in an agent settlement calculation (perhaps because banks were not reconciled or an error occurred in an old registration), thus the data would be "lost" in subsequent calculations.
:::

The **Conversion of commissions using the exchange on document date** flag stipulates that the commission amounts are calculated according to the exchange rate of the document date; otherwise, the exchange rate of the agent settlement date as set in the fields at the bottom of the form will be used by default.

:::note **In more detail:**
- if the flag is not set, Fluentis will total the commissions accrued by document currency and then convert these totals into the agent's currency at the settlement date exchange rate (in a complex case, for example, an invoice in GBP and an agent in USD, it will look for an explicit gbp-usd or usd-gbp exchange rate in the exchange table and apply it; if it doesn't find one, it will use the exchanges against the euro with all the decimals it finds).
- if the flag is set, however, Fluentis will apply the rate stored in each document to obtain the commissions in the company currency (rounding them to the company currency decimals for each document), takes this total in the company currency and converts it into the agent's currency.

For example, if there were only 2 documents to consider and the exchange rates were the same because everything is on the same date, then there could be differences in cents on the total obtained, due to the intermediate rounding in the company currency that is done when setting the flag.
The situation is clearly improbable and "theoretical" to better understand the exact calculation logic depending on the flag.

:::

In the **lower section**, *Data for creation of commission settlement*, the settlement date, a description, and the reference month/year for the calculation of Enasarco must be specified.

:::important[Important]
The month/year fields for Enasarco must be filled in carefully because they determine the calculation of the minimum and maximum for Enasarco. Thus, the calculation to be executed is attributed a "competence" for the calculation of any minimum; if the minimum is not reached for the quarter in question, or the maximum, adjusting the contributions borne by the agent and/or principal company.

The brackets for Enasarco contributions are defined in the table [Agent Categories](/docs/configurations/tables/sales/agent-category).
:::

:::tip COMMISSIONS ON RECEIVED PAYMENTS AND PROVISIONAL ACCOUNTING ENTRIES
For the calculation of accrued commissions, ONLY the entries in the **final** state are considered; therefore, any collected amounts (even in advance) recorded in provisional mode will be ignored.
:::

:::tip COMMISSIONS ON RECEIVED PAYMENTS AND BANK RECEIPTS
The maturation of commissions takes into account the due date of the effect in any case, even if the customer item is closed due to the accounting of the issuance of Ri.Ba. and the effect is submitted for good or credited.
:::

:::danger WARNING
Pay particular attention in the case of Bank Receipts to the management of **CUSTOMER RISK PARAMETERS**

where there are two fields **N. days past due for effects submitted for good** / **N. days past due for effects submitted after collection**, which, if set, add a delay even in the maturation of commissions.

Also, pay attention during the initialization of a new environment that it has been saved at least once within the Customer Risk Parameter form so that the default parameters (particularly related to the fields mentioned above) are present; otherwise, the due date of the effect will not be read and the commission will always mature upon closure of the item for the issuance of Ri.Ba.
:::


*Buttons*:
> **Search**: executes the search for agents present in the active company.  
> **Settlements calculation**: performs the calculation of settlements for the selected agents according to the set filtering settings.  

## Restore 

The restore tab allows you to identify in which agent settlement the commissions of the filtered documents were entered, or to identify one or more settlements according to the filters present in the mask. Through the appropriate restore button, it is possible to cancel the creation of the agent settlement. Restoring already processed settlements in the recipient module is not allowed.

*Buttons*:
> **Search**: executes the search for automatically calculated settlements.  
> **Restore**: cancels the creation of the selected settlements.