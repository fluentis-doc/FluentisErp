---
title: Calculate Commissions 
sidebar_position: 2
---

This procedure (pertaining to the administrative area) was created for processing the data of agent commissions entered directly from the accounting records, following appropriate configuration of the involved accounting reasons.

In particular, the reason (or reasons) used for recording sales invoices must have the **Commissions** flag active.

**NOTE**: It is necessary to enable the Commission Management flags also within Configuration > Utilities > Administration > Accounting Parameters for the desired year.

Upon opening the form by executing the **Search** command, located in the ribbon bar, the list of active agents is loaded (through the appropriate flag, those with expired mandate end dates can also be loaded).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image01.png)

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image02.png)

On the right side of the form, there are both filter elements for the data from which to process the commissions, as well as elements to indicate in order to correctly process the compensation based on the liquidation being generated.

WARNING:

Unlike the similar processing present in the sales area, at the end of this procedure, Liquidations are not processed (which can be searched and consulted and then transformed into compensations), but the agent compensations will be directly generated, searchable and further processable from the Professional Men area.

**Currency Filter**: allows you to select and filter transactions to be considered for the commission calculation, expressed in a particular currency.

**Maturity value filter**: the filters in this group allow you to set the reference date for the accrual of the commission (default set to the current date upon opening the form) and to further filter by document type and date. There is also a flag that activates the conversion of transactions into currency using the exchange rate of the document date, overriding any different opening exchange rate of the transactions.

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image03.png)

**WARNING**: If the agent has the commission accrual method set to **Total Payment** and the sales invoice has the payment type set to **Bank Receipt**, the commission accrual will occur on the due date of the bank receipt, regardless of the closure of the transaction upon issuance of the C.Ord and presentation at subject to collection and/or crediting of the amounts.

Additionally, more days will be added as set in **Parameters > Treasury > Customer Risk Parameters** > **No. days beyond the deadline for effects presented at subject to collection / after collection.** 

**Data for creation of commission settlement**: The fields in this group must be managed before launching the execution of the calculation in order to enter the liquidation date (default proposed as the current date), the description of the liquidation, and the month/year of Insurance fund competence (if this last data is omitted, the compensation will be created with the respective fields empty, and it will be necessary to manually fill in each generated compensation).

![](/img/it-it/finance-area/professional-men/procedures/calculate-commissions/image04.png)

After setting the filters as described above, entering the data for the creation of the liquidation, select from the agent list the subjects to be liquidated and press the **Calculate** button located in the ribbon bar.

At this point, the form can be closed as the agent compensations have already been calculated and are automatically present in the Professional Men area.