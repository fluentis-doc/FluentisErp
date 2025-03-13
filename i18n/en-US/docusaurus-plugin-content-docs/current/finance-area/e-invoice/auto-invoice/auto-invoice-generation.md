---
title: Automatic Selfbilling Generation 
sidebar_position: 4
---
:::note NOTE:
The following instructions refer to the automated procedure for generating selfbillings for sales created to communicate to the ES, via the electronic invoicing circuit, the data on purchases previously communicated through the repealed requirement known as "Esterometro."
:::

At the time of saving the accounting registration, Fluentis will create the automatic documents set in the reason: thus both the accounting journal entry to neutralize VAT and the selfbilling in sales. Closing the window will then return two messages, one for the opening of the automatic journal entry registration and the new message for viewing the selfbilling.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation1.png)

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation2.png)

In the automatically generated selfbilling: in the supplier field we have the foreign supplier, in the references the invoice number and date of the supplier.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation3.png)

The invoice is already printed and accounted for (since the automatic journal entry has already recorded it). 
In the lines, we have a non-coded item, with the description taken from the movement description of the original accounting registration, for the taxable amount of the registration and the rate of the line.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation4.png)

We are therefore ready within the document to execute the shipping status change to the ES of the selfbilling.
Any changes to the original registration will recalculate, if the sales invoice has not yet been the subject of ES file creation, both the journal entry and the selfbilling in sales. The automatic update operation is not performed even if the flag ‘Do not recalculate the automatic registration’ has been set in the ledger template.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation5.png)

The cancellation of the original registration (including the rollback of the accounting that created it) will delete the selfbilling in sales if it has not been the subject of ES file creation.

### **SPECIAL CASES**

A) In the case of a mixed purchase invoice, with part reverse charge internal and part not, the accounting registration will have one or more VAT lines with the flag ‘Exclude from automatic reasons’ and these will not be reported in the automatic journal entry nor in the selfbilling.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation6.png)

B) In the case of intra-community purchases with partial deductibility, it is possible to indicate in the field ‘VAT for automatic reasons’ which rate will be used in the automatic journal entry. This rate will also be used in the selfbilling in sales.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation7.png)

C) Purchase of foreign services
In this case, the purchase will be recorded with a non-VAT reason. It is possible to set this way: in the non-VAT reason that records these services, it is possible to indicate the selfbilling TD17 to be created in sales, without an automatic reason.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation8.png)

It will be necessary to indicate in the supplier the VAT rate to be used in the selfbilling for sales, then in the accounting registration it must have the supplier in the header and in the header total the value of the invoiced service:

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation9.png)

Since the supplier reason does not have an automatic reason but only the type of invoice to be created, the selfbilling created will not have the 'Accounted' flag to allow the user to account it from sales.

### OTHER ACCOUNTINGS
The procedures for accounting purchase invoices, accounting for fees, and registration from the ES purchase file all check this new setting of the ledger template to automatically execute the creation of sales documents as shown in the case of manual registrations.
In the case of accounting from the ES purchase file, the accounting registration will be linked to the ES file: in this case, the selfbilling will automatically value not only the references to the invoice number/date but also the original ES protocol.