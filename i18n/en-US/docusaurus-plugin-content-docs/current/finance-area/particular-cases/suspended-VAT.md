---
sidebar_position: 3
title: Cash Accounting VAT Regime
---

:::important **Fluentis Academy** 
The term 'suspended VAT' refers to VAT that becomes payable not upon delivery of the goods but at the payment of the invoice. The taxpayer who adopts this regime settles VAT on all operations, both active and passive, using the cash criterion. The VAT taxable event coincides with the date of payment or collection of the amounts. 
This way, a deviation from the principle that sees VAT on a document recorded in bookkeeping as payable is established.



In practice, the cash accounting VAT regime allows the payment of VAT payable on sales or services only at the time of the customer's invoice payment. 
At the same time, it allows the deduction of VAT on purchases only at the time when the entity pays the invoice to the supplier. 

In any case, the VAT settlement must occur within one year from the sale or service provided, except in cases of bankruptcy or the involvement of the licensee or the client in a competitive procedure.
:::

### SETTINGS AND CONFIGURATION OF ACCOUNTING TEMPLATES INVOLVED

The main settings for managing this regime are simply achieved through the correct configuration of accounting templates.

In particular, it is essential to correctly select, within the involved templates, the field **Movement Type** (referred to VAT), the exact type.

In detail:

- The template for registering the supplier invoice will have the type *Suspended Purchases VAT*
- The template for registering the customer invoice will have the type *Sale with Suspended VAT*
- The templates for collection or payment will not have a particular type, but as usual the type *rice without VAT* (they will be linked to the templates executed automatically for the accounting of the VAT that becomes payable through the *Automatic Template* field)
- The template for the accounting of the suspended purchase VAT will have the type *Suspended Purchases VAT Transfer*
- The template for the accounting of the sales VAT will have the type *Suspended Sales VAT Transfer*

The content (template) of the templates used for the sales and purchase invoices typically differs from ordinary templates as VAT is accounted for in a specific account for suspended VAT and is different from those ordinary accounts destined for credit and debit VAT, which are then transferred to the treasury account for VAT during periodic settlement. As for the VAT register, it can remain the usual one without the need to define a specific one. The specific type of VAT movement defined in the template ensures that the tax is not considered as credit or debt until the transfer occurs, even though it is displayed in the VAT movements of the period. 

The content of the collection and payment templates remains the usual.

The content of the templates (executed automatically) for the suspended VAT transfer clears the specific accounts of the suspended VAT and accounts for them in the ordinary VAT accounts as from that moment the VAT is payable or deductible respectively.

Below are some detailed images of the settings.

![](/img/it-it/finance-area/other/suspvat1.png)

![](/img/it-it/finance-area/other/suspvat2.png)

![](/img/it-it/finance-area/other/suspvat3.png)

![](/img/it-it/finance-area/other/suspvat4.png)

![](/img/it-it/finance-area/other/suspvat5.png)

### MANAGEMENT OF VAT AFTER ONE YEAR FROM THE OPERATION IF NOT PAID OR COLLECTED

The management allows identifying open items over a year old and automatically accounting for the VAT transfer in order to make it payable or deductible respectively.

To do this, it is possible to use (with specific settings) the form [**Transfer of Items**](/docs/finance-area/maturity-values/procedures/maturity-values-giro/filter-tab)

### SETTINGS IN THE PRESENCE OF BANK RECEIPTS AND UNPAID INVOICES

If, in the active cycle, the issuance of bank receipts and their presentation to the bank for collection or safe passage is expected, the configuration of the causes will be as follows:

1. Invoice issue: registered with the template configured as described above;

2. Effect issue: normal registration with the usual template, it closes the open item from the invoice but no VAT transfer is executed.

3. **List** accounting presentation of Cash Order Parameters: **the template used is linked to the automatic VAT transfer**, the transfer is accounted for on the due date of the effects.

4. Accounting for credits: normal as usual.

**In the case of accounting for unpaid invoices**: the accounting template used does not require special settings, the procedure intercepts the item closed by the Cash Order Parameters and linked to the cash VAT and cancels the transfer registration and concurrently, instead of reopening the item, makes a payment with a debit sign to cancel the payment of the item executed by the issuance of Cash Order Parameters, so as to have the original item (linked to the suspended VAT) reopened again.