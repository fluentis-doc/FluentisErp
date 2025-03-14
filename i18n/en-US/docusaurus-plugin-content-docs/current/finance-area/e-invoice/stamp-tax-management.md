---
title: Stamp Duty Management 
sidebar_position: 2
---

The management of the correct insertion of the virtual stamp duty in the XML layout of the electronic invoice by Fluentis occurs automatically, therefore it will be sufficient to code and correctly enter this expense in the invoice (as summarized below).

- In the table related to expenses, enter the expense of type "stamp duty (bollo)" with a value of 2 euros.

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image01.png)

- In the customer registry (anagrafica cliente), it is necessary to add an expense of type "stamp duty (bollo)" by selecting the code previously created in the Expenses Types table.

   Note: to not charge the stamp duty to the customer, in the stamp duty expense in the registry, the value must be set to "0".

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image02.png)

- In the company table, fill in the field "Stamp duty expenses (Spese bollo)"=2 and "Minimum expense threshold (Roof minimo spese)"=77.47.

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image03.png)

Once the following settings are configured, the proposed expense will automatically appear on the sales invoice, thus allowing the choice to charge or not the virtual stamp duty in each individual invoice (to not charge the stamp duty, enter the expense with an amount = 0).

At the time of creating the XML file, if there is a stamp duty type expense in the invoice summaries, the corresponding section is automatically added to the layout.