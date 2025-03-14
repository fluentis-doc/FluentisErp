---
title: Document Types, Numeration, and Invoice Types 
sidebar_position: 2
---
:::note NOTE:
The following instructions concern the automated generation procedure of sales selbillings created in order to communicate to the ES, through the electronic invoicing circuit, the data on purchases previously communicated through the abolished requirement known as "Esterometro".
:::

It is necessary to verify that, in the accounting document types, the types of selbillings needed have been coded:

![](/img/it-it/finance-area/e-invoice/auto-invoice/doc-types.png)

The creation of the selfbilling in sales will create a new sales document, with its own number: in order to avoid influences on the issuance of normal sales documents, it is advisable to create specific invoice types for each type of selfbilling to be issued and numeration consistent with the VAT sales registers where the accounting automatic transfers of these intra/reverse purchases are recorded.

For example, if there is a single register to record the automatic transfers of both intra purchases and internal reverse charge purchases, then it will be necessary to create a single invoice number and two invoice types that use it; on the contrary, if a separate register has been provided for each case, it is necessary to foresee a number for each of these. If the procedure is to be used during the year, the initial number must correspond to the next VAT protocol to be assigned in each of these registers.

![](/img/it-it/finance-area/e-invoice/auto-invoice/numeration.png)

:::danger WARNING
The ES is unable to recognize the difference between TD01 and TD18 (for example); the only difference it recognizes is between TD01 and TD04 (credit notes). Therefore, it is advisable to define a formula in the numeration that generates a suffix in the numeration in order to differentiate the various types of document, avoiding rejection due to duplicate numeration.

Refer to the Fluentis numeration page, keeping in mind **by way of example** that a formula (field *Formula number* in the header of the numeration) could be Number.ToString() + "/RC" for the selbillings generated from a reverse charge purchase.
:::

The invoice types for these selbillings will have their corresponding numeration associated, as well as the ledger template (the same as the automatic transfer in sales) and the accounting document type:

![](/img/it-it/finance-area/e-invoice/auto-invoice/invoice-type.png)