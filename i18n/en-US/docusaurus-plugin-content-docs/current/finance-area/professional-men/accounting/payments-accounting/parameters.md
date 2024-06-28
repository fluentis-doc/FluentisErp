---
title: Parameters
sidebar_position: 3
---

In the second section it will be possible to manage the procedure parameters: accrual and record dates, payment template to be used, bank detail accounts to be debited and the survey detail account of debit of withholding-tax (not obligatory, if it is not available it will be necessary to use the detail account inserted into the withholding-tax type). The maturity values closure flag, proposed automatically, has never to be cut (in order to manage the maturity values closure).

The grouping options are:

**Bank Grouping** default without the following **Group Detail Accounts** flag: in this case it will be created an only one record with a bank movement (in order to help the reconciliation of movements with the bank statement) while the other detail account will be detailed compensation by compensation (for an higher control of movements on withholding-tax account). In case that the detail accounts grouping flag is set, it will be possible to group data of other detail accounts moved.

**Grouping per Detail Account**: in this case the grouping will be performed professional man by professional man

**No Grouping**: in this case every compensation will have a separate record

The following section, activated by the **Vendor Payment Generation** flag, enables the user to create a payment list on 'Vendors Payments' module, in order to print and send electronically the line of the bank transfer via remote banking. The fields to be set are: list payment type, current account field (it is proposed by the register linked to the bank detail account inserted above) and possible a final note to be accounted in the bank line.

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Payments Accounting | It performs the accounting of the selected payments. |






