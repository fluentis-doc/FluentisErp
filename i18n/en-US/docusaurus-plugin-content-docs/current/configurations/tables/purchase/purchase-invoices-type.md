---
title: Purchase Invoices Types
sidebar_position: 6
---

This table is essential for defining the various types of purchase invoices available, each with its own characteristics. It can be accessed from **Configuration > Tables > Purchases > Purchase Invoices Types**.    

The fields present are:

**Code/Description**: these are mandatory fields necessary to define the invoice type.

**Numeration/Description**: determines the [Numeration](/docs/configurations/tables/fluentis-numerations) associated with the invoice type.

**Invoice Nature**: this value must be selected from a list and indicates the nature of the invoice: invoice, tax receipt, summarized tax receipt, credit note from supplier, debit note from supplier.

**Template/Template Description**: [Ledger Template](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates) used to account for the invoice. This cause will be used if there is no purchase turnover or a default counterpart account entered in the supplier register.

**Tran Code**: used to indicate the grouping code of documents for the Intrastat declaration and must be completed in cases of invoices or EEC variation documents.

**Warehouse/Description** and **Warehouse Template/Description**: these are proposed when entering the lines of the accompanying invoice, where they can be modified later and determine the warehouse and template with which the goods will be loaded at the time of receipt.

**From Order**: if active, the invoice of this type can fulfill purchase orders.

**Direct Invoice**: if active, the invoice of this type is direct and the transport data must also be completed in the invoice.

**Intra-community**: if active, the system checks that the customer's country is an EEC country. This flag should only be set on Intra-community invoice types. If there is no link between the customer and the intra-community invoice type, the system will return a warning message.

**In Statistic**: if active, the invoice of this type is reported in statistics, thus it will be visible in the *Invoiced* prints.

**Vendor Control**: serves to activate a control whereby, during the selection of the invoice holder, the procedure will only allow the selection of accounts of supplier type and not of customer type.

**Maturity Value Grouping**: if set, during the accounting of the invoice the mat. values will be grouped and the grouping mode will be used.

**Unsumed Item Quantity Order**: if set, when fulfilling order lines/DN with partial quantities within the same invoice, this flag will allow the quantities fulfilled to be reported divided by item line without summing the quantities.

**Agricultural VAT Purchases**: if active, when creating the invoice, the system checks if there is an agricultural VAT code present for the item used. If not, the VAT code present in the item will be taken.

**Economic Accrual Template**: related to the management of invoices to be received and thus to the ability to automatically recognize any accruals for cost lines that have a date range outside the accounting year.

**Extra Data Matrix Management**: if active, it allows the display, in the case of handling items with a matrix, of an additional tab for entering the quantity values for each individual matrix cell. If not active, this tab and the consequent matrix will not be displayed.

**Invoices to be received** and **Reversal of invoices to be received**: are displayed only for backward compatibility with previous versions and are now obsolete and no longer used.

**Print Report**: allows indicating the print model that will be used when printing the invoice and, through the field **Number of Copies**, the number of copies of the document that will be proposed by default for printing. The printing of purchase invoices is not extensively used since the invoice is received from the supplier and thus does not need to be further printed by Fluentis.

**Recycle Management**: this flag enables Recycle Management for each type of invoice. For more details on the management of expenses related to [Recycle partner code](/docs/sales/sales-flow/conai), please refer to the appropriate page of the documentation.

**Quality Control**: if active, this flag makes the invoice types visible in the [Import Items To Check](/docs/quality/item-control/items-control/item-control-import/) form located in the *Quality* area.

**Fixed Assets Management**: this flag enables [Fixed Assets Management](/docs/finance-area/fixed-assets/general-overview) for that order type and allows selecting the **Operation Type**, which in the case of purchases will always be *Original Cost*.