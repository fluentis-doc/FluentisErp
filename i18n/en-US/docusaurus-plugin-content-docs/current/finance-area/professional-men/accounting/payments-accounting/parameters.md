---
title: Parameters 
sidebar_position: 3
---

In this tab, the main accounting parameters of the procedure are managed:

the **registration and competence dates**, the **template** for payment to be used, the **bank detail accounts to be charged**, and the **recognition of the withholding debit detail account** (not mandatory; if not present, the detail account entered in the type of withholding will be used).

The default proposed party closure flag should never be removed (in order to manage party closure).



The grouping options available are:

The default **Single recording** (without the **Grouping accounts** flag): in this case, a single recording will be created with a single bank movement (to facilitate the reconciliation of movements with the bank statement) while the other detail accounts will be detailed compensation by compensation (for greater control of movements on the withholding account). If the grouping accounts flag is also set, the data of other equal detail accounts processed will also be grouped;

**No groupings**: in this case, each compensation will have a separate registration.

**Group by detail account**: in this case, the grouping will be done by recipient for recipient;



![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image01.png)



The next section, activated by the **Automatic Vendor Payments Generation** flag, allows for the creation of a payment list in the **[Vendors Payments](/docs/treasury/vendors-payments/create-vendor-payments)** module, in order to print it and electronically send the bank transfer file via home banking. The fields to be set are: the type of payment of the list, the bank account field (proposed from the register connected to the bank detail account entered above), the payment issuance date, and a possible beneficiary value date (upon activation of the corresponding flag) and an optional final note to be recorded in accounting corresponding to the bank line.

![](/img/it-it/finance-area/professional-men/accounting/payments-accounting/parameters/image02.png)





| Function | Extended Description |
| --- | --- |
| Payments accounting | Executes the accounting of the selected payments. |