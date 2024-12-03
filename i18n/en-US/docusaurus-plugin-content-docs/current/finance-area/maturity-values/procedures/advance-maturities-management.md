---
title: Advanced Maturities Management 
sidebar_position: 7
---

:::note Path
**Revenue office>Mat. Values>Procedures>Advanced Maturities Management**

Note:
For everything not detailed in this document regarding the common operation of forms, refer to the following link [Functionality, buttons, and common fields](/docs/guide/common).

:::

---
This procedure allows you to create advanced maturities to be paid or collected upon the issuance of the order confirmation (or upon delivery) and then invoice and account for the collected advance. These are clearly extra-accounting maturities as they exist before the issuance of the invoice.


The commands for managing this functionality are located in this form as well as in the ***Summaries*** tab of the order.

:::note Note
The examples in the images refer to the sales area with a maturity on the order, but the management is mirrored for purchases and conceptually similar for maturities upon delivery.

No standard automation is provided to create the advance maturity in accounting at the time of order confirmation or any event related to it or to the Purchase Delivery Note. Any order deadline can be passed to accounting so that it has visibility of an advance maturity to be collected.

Similarly, there is nothing stopping the initiation of the production of the order until the advance payment is collected.

Both of these steps could be managed through customized workflows to be configured accordingly.

:::

### Creating an Advance Payment on the Order

import FileName from '/docs/import/sections/advance-maturities-creation-order.md'

<FileName />

---

### Management of Advance Payments within the Form 

In this form, in the first tab of the sales section, it is possible to create advance payments also for other customer orders and independently of the creation made from within the customer order, or payments on deliveries present in the second tab.

In the ***Advance Management tab***, it is possible to roll back the recently created advance payment.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-form.png)

In the originating sales order, if a user modifies any value that causes a recalculation of deadlines, a warning message will be returned asking whether to cancel the advance payment (if it has not been collected, otherwise this is not possible).

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message.png)

### Collection of Advance Payment
When the advance payment (deposit) is collected on the order (or upon delivery) and therefore an accounting record of the receipt of an advance payment (closing of the advance) is saved, a message will appear notifying the user of the need to invoice this advance.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message2.png)

By confirming the creation, the Advance Payment Management mask will open, where the user can go back to the advance management tab to invoice the operation; if, on the other hand, the operation is not confirmed, it will be the user's responsibility to remember to go to the procedure later to invoice the operation.

By selecting the line, the invoice creation button will be activated:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation.png)

Pressing it will display a new data request mask for the invoice:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation-popup.png)

The proposed data are for today’s date and the description that will be reported in the item line, while the invoice type, VAT rate, and sales accounting code will need to be managed by the user from time to time.

### Invoicing Collected Advance and Accounting 
Once the creation is confirmed, the invoice will open: the article line type is automatically set to type 6, i.e., advance invoice, so that it can then be available for reversal in the closing invoicing of the order.


:::tip **NOTE:** 
Once this invoice is accounted for, the peculiarity is that it will not create a new payment, but the extra-accounting advance payment will be retrieved (even if it is already in "Closed" status) and associated with the accounting record of this invoice:
:::