---
sidebar_position: 4
title: Margin VAT Regime 
---

### CONFIGURATIONS 

It is necessary to code (at least) two **VAT Books** on which to record purchases related to the margin regime and sales of the same regime, associating them in the **register type** field:

- Margin regime purchases 
- Margin regime sales 

Secondly, we will need to create [**VAT rates**](/docs/configurations/tables/finance/vat-rates) that will be used on these specific VAT registers, identifying them with the **flag** ***VAT margin scheme***:

![](/img/it-it/finance-area/other/VATMargine.png)

The rates to be used in purchases will indicate the reference margin VAT rate, so as to know which rate to proportionally assign to the value of the margin itself.

We will then need to code the accounting reasons that foresee the detection on these specific registers: the reason for sales, in particular, will be linked to a specific sales invoice type, which will allow issuing the sales document and sending it to the Sdi. It may be useful, in order to avoid incorrect uses of rates not provided for margin management, to enable in these reasons the section of constraints to the enabled VAT rates (*VAT Rates Check*).


The sales reason will record the debt for margin VAT, with movement type *normal regime sales* and ordinary sales register.

![](/img/it-it/finance-area/other/VATMargine2.png)

This registration presumes the VAT debt account and the reversal account of the sales revenue for margin, which is set in the general accounting parameters in this section:

![](/img/it-it/finance-area/other/VATMargine3.png)

We will indicate the sales revenue and the default reason. The last processing date and the negative margin value are, however, two values automatically updated by Fluentis with the final print of the period margin processing.

### ELABORATION

Within the *Disclaimers* menu of the *Finance* module, select **VAT Margin Scheme Elaboration**:

Generating a new calculation will result in:

![](/img/it-it/finance-area/other/VATMargine4.png)

The year of the accounting parameters, the register to be used to detect any positive margin debt, the recording reason, the customer to be assigned to the debt registration, and on the right, the date range subject to processing. Once these data are set, we will be able to execute the calculation through the ribbon bar button, which will populate the data of the two subtabs:


In the first, we will have the totals of the rates moved in the margin purchase and sales registers, where for the purchase we will have the exposure of the relative percentage allocations:

![](/img/it-it/finance-area/other/VATMargine5.png)

In the second tab, instead, we will have the processing of the margin calculation by applying the percentages to the VAT rates linked to the purchase rates:

![](/img/it-it/finance-area/other/VATMargine6.png)

This second tab will be populated only if the margin for the period, considering any previous negative margins, results in a positive margin balance.
We will then have some other management buttons to use: the print of the executed processing, which if performed directly will require whether to set the ‘definitive’ flag, making the calculation no longer modifiable:

![](/img/it-it/finance-area/other/VATMargine7.png)

This operation will update, in the accounting parameters, the last processing date and the amount stored in the negative margin balance.

Once the ‘definitive’ flag is set, the possibility to account for the VAT debt will be enabled:

![](/img/it-it/finance-area/other/VATMargine8.png)

![](/img/it-it/finance-area/other/VATMargine9.png)

:::tip Particularity
In the VAT section, we will only have the amount of the VAT due, **without an origin amount**.
:::

The procedure is completed with buttons to perform a rollback of the accounting and to cancel the definitive print:

![](/img/it-it/finance-area/other/VATMargine10.png)