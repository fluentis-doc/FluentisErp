---
title: Settlement 
sidebar_position: 3
---

In this window, the general elements for calculating the commission are set:

**Withholding reason**: this field is **mandatory** to automatically value the portion of the withholding tax applied to the agent's compensation. Without this field, it will not be possible to automatically value the compensation from the agent's settlement; The field is linked to the table [Withholding Types](/docs/configurations/tables/finance/withholding-tax-types).

**Settlement period**: indicates the frequency of agent settlements;

:::note[Note]
This field is for informational purposes only; it is not actually used in the commission settlement calculation procedures. 

In particular, with the *payment received* method, the selection of commissions to be settled will always be "all" *up to the date*; it is not possible to select what has accrued in a specific date range, and there is no linkage with this periodicity field.
The filter ranges present in the [automatic settlement creation procedure](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement) refer to the dates of orders/invoices/documents, not at the **payment** date level.

This is necessary because, while for documents there is no way to add new ones / modify during already settled periods, the situation is different for payments: nothing prevents the creation of a payment with a registration date in a period already closed in an agent's settlement calculation (perhaps because banks have not been reconciled or an error was made in an old record), thus the data would be "lost" in subsequent calculations.
:::

**Document type considered for commissionable taxable amount**: basic criterion for the accrual of the commission. It is possible to specify whether the agent earns the commission on the *confirmed order*, on the *delivery of goods* (i.e., invoice issued), on the *invoice issuance*, on the *matured due date* (regardless of whether it has been collected), on *payment received* (i.e., based on the portion collected: if the customer pays half the invoice, the agent will earn half the commission on that document), on *total payment* (i.e., only when the entire invoice is paid does the agent earn the full commission).

:::danger[Warning]
This setting CANNOT be changed once you start creating settlements for the agent in the sales area: it will be necessary to create a new registry with the new setting (and use the ‘Agent Assignment’ procedure to update customer registries en masse in Home>Contacts).
:::


:::note Note
The **Total Payment** mode is only available using the [agent settlement calculation procedure managed by the Finance module](/docs/finance-area/professional-men/procedures/calculate-commissions) which is not available in the calculation of the Sales Agents module.
:::

:::note Note
The procedure for managing 'Commissions' in accounting allows for 'on-the-fly' modification of the agents' maturation logic: this is because the maturation logic is stored at the level of each individual invoice/document.
:::