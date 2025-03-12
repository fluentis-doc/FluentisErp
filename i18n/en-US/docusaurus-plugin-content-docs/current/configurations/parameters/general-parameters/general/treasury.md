---
title: Business Areas - Treasury (Business Areas - Tesoreria)
sidebar_position: 2
---

**Creating file Sepa** (code FS-PR-SEPA-PaymentRequest): this parameter allows you to associate a specific Bizlink 'SEPA' flow for the export of Euro bank transfers. Each geographic location has its own generation default (currently the Italian format is 4.01), but in case of changes in the reference structure, it can be convenient to change the type of file to be created freely from a certain date.

**SDD (Sepa Direct Debit) (SDD ( Debito Diretto Sepa))** (code FS-PR-SEPA-SDD): like the previous one, but for SDD files that can be created from the Effects Portfolio Statements (currently for Italy, the version is 1.01).

**Creation of Sepa files Abroad** (code FS-PR-SEPA-ForeignPaymentRequest): like the first, but for the layout of transfers in foreign currency.

The currently available flows are:

- *EsteroSEPA_XML_Payment*
- *ExportSDDWorkflow*
- *ExportSDDWorkflow_1.01*
- *SEPA_XML_Payments_Export*
- *SEPA_XML_Payments_Export_4.01*
- *SEPA_XML_Payments_Export_FR*
- *SEPA_XML_Payments_Export_HR*
- *SEPA_XML_Payments_Export_RO*
- *SEPA_XML_Payments_Export_RS*
- *SEPA_XML_Payments_Export_SI*

**Movement details** (code FS-PR-DocFinanceNote): for companies that receive bank transactions from DocFinance, this parameter allows you to define how ***FluentisERP*** will populate the detailed descriptions of the imported transactions. The encoding logic of the string mirrors the logics already in use in the Accounting Reasons, with the addition of the code (DF) to indicate the description present directly in the file received from DocFinance.

:::tip Note
for example:
- setting the parameter as "(2) FT.N. (DF) del (4) – (6)" will create a text with
"Description of the reason" + FT.N. + "Description from DocFinance" of "the document date of the transaction" - "Description of the sub-account of the transaction"
- setting the parameter as "FT. (3) del (4)", which means without using the string passed by DocFinance, we will have:
    - for rows related to transactions, a note like FT. + "Transaction document number" + del + "document date of the transaction"
    - for rows not related to transactions, the string present in the DocFinance file will be used by default
:::