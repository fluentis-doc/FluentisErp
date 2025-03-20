---
title: Returns and Credit Note Management
sidebar_position: 3
---

The mechanism for managing returns and credit notes allows for the administration of the flow of returned goods and the related financial adjustments. Here’s how it typically works:

**Return Registration**: When a customer returns a product, the process begins with the creation of a return document in the management system. This document can be created manually (by entering a delivery note with Nature *Return* or an invoice with Nature *Credit Note*), or automatically with the **Transfer** procedure available in the [Search](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) of the documents. In the case that a return delivery note is created, the credit note can be automatically created from it using the appropriate procedures.

**Stock Update**: Once the cancellation document has been processed in the warehouse, the system automatically updates the warehouse stock to reflect the return of the goods, marking the returned products as available.

**Credit Note Details**: The credit note includes details such as the credited amount and can be reviewed before being sent to the customer. Upon saving a credit note, all expense types are entered as negative, except for stamp duties.

**Accounting Update**: Once accounted for, the credit note updates the accounting records, reducing the amount owed by the customer; this may reflect in a decrease of the open balance or in a refund, depending on the agreements with the customer.

:::note Note
Starting from version 607, credit notes are managed with a negative sign. When saving the document, Fluentis will change the sign of the items and notify the user with a pop-up. All expenses are also converted to a negative sign, except for stamp duties. The management of the document accounting does not change compared to the past, as the negative document continues to be deducted from the VAT register (previously it was converted to negative at the time of accounting). The sending of the document to the SDI via the generation of the .xml file provides for a new sign change in accordance with the technical specifications for electronic invoicing. This change in comment has become necessary, especially for better management of sales statistics and related processing.
:::

### Management of Mixed Signs 

The ability to account for the document with mixed signs must be specifically enabled through an SQL script.

:::note Technical Note for Activation
Below is the script to execute:

WARNING: The parameter below that controls the sign management mode must now be set to +1, unlike in the past, due to the change in the sign management policy mentioned above.

    select * from [Fluentis].[SH_LocalizationParameters] where [SH_LocalizationParameters].[SHLP_Code] like 'VE-SalesInvoice_CreditNotesPostingSigns'

Identify the Id of the parameter in question.

In the search:

    select * from [Fluentis].[SH_CompanyParameters] where [SH_CompanyParameters].[SHCP_Parameter_SHLP_Id] = ..... identify the row for the company in use through the field SHCP_Company_SHC_Id

And execute an update to the SHCP_Value field.

PARAMETER VALUES:

0 = as is, does not allow mixed signs (credit notes are always forced to be negative)

-1 = credit notes are always inverted (the + becomes -, and the - becomes +)

+1 = currently required type for mixed signs, both invoices and credit notes are accounted for with existing signs, the + remains + and the - remains -.
:::