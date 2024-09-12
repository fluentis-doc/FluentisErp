---
title: Ledger Template - Recording Detail
sidebar_position: 3
---



| Function | Meaning |
| --- | --- |
| VAT Register | The field, that is obligatory only for templates with VAT movement type, enables the user to assign the right VAT register to the management register |
| VAT Accrual Date | The field enables the user to define the right accrual date in order to assign it to VAT movement: the program proposes the recording date for movements on purchases registers and the document date for movements on sales registers. It is important to set the accrual date as a recording date even for the intra cee VAT giro templates.  |
| Document Type/No. | The setting of this flag makes the document number field obligatory, in order to save the recording, that is based on the present template |
| Doc. No.= VAT Prot. No. | The setting of this flag means that the program will propose the document number according to the progressive VAT reference number. For this reason the field may not be set for purchase recordings, for which the document number and protocol aren't connected. As regards to sales, only recordings template, manually performed in general accounting,  can be used: the setting of this flag is not advised for those templates, that are set in sales invoice type and used in invoices accounting. |
| Document Date | The setting of this flag makes the document date field obligatory in order to save the recording, that is based on the present template |
| VAT Prot. = Doc. No. | The setting of this flag means that the program will try to propose the VAT reference number according to the document number. For this reason the field may not be set for purchase recordings, for which the document number and protocol aren't connected. As regards to sales, only templates in sales invoices types can be used for invoices accounting. The possibility to use this setting, depends on the fact that the numbering of the invoices types may be the same of documents one and may be record in the same VAT register. |
| Opening Maturity Value | The presence of this flag will show the tabulator for the sales ledger in the accounting recording, that will use this template: for that reason the setting of the present flag is advised for all VAT type recordings and in general order to manage the customers/vendors bill book. The flag can be set even for templates, that have an advance payment: in this case a maturity value with a reverse sign will be opened in order to balance the following maturity values, which will be created during the accounting survey of the following fiscal documents. |
| Trans. Dett. in Maturity Values | Thanks to this flag the program will enter the texts, that were in 'Movement detail' field of the maturity value original accounting line, in the maturity values notes.  |
| Opening for Every Document Line | Thanks to this flag the program will enter a maturity value for every movement line, where there is a detail account with the management flag of maturity values |
| Closing Maturity Value | The presence of this flag will show the tabulator for the sales ledger in the accounting recording, that will use this template. This is typically for all payment/collection recordings not VAT, but it can be set even in association with the maturity values opening and maturity values compensation for the templates of credit notes and in general for all recordings that provide for a maturity values opening with a compensation of a pre-existing situation.  |
| Use Historical Change | Thanks to this flag, which is available only in the case of a maturity value closing, the application will continue with the closing of ledgers with the initial historical change, and without automatic survey of the change differences. |
| Group Payment in Journal | Thanks to this flag, which is available only in the case of a maturity value closing, the application will continue to group all the amounts of maturity values closing regarding to the same detail account in an only one accounting movement (in particular, it will group the movements with the same sign and same currency). |
| Exclude from Accrued Comm. | Thanks to this flag, which is available only in the case of a maturity value closing, the maturity values closings, that were made through the present accounting template, will not be valid in order to calculate the accrued commissions for agents and with the ‘payment executed' calculation. |
| Ref. Doc. Maturity in Payment | Thanks to this flag, which is available only in the case of a maturity value closing, the application will continue to manage the survey codes (8) and (9) of the maturity values closings references in the movements detail descriptions. |
| Maturity Value Offsetting | Thanks to this flag, which is available only in the case of a maturity value closing, the procedure will active the possibility to have a maturity values compensation within the recording, based on this template: this flag combination is advised for all templates, which are connected to documents as credit notes.  |
| Warning Comp. | Thanks to this flag and in the save of the accounting recording can be activated a control, which warns the user to the presence of maturity values to balance |
| Group Maturity Values | The flag activates the management of the maturity values grouping instead of the standard management during the maturity values opening/closing and through a specific tab for the survey in the accounting recording. |
| Group Mat. Values – Payment Type | It is the payment typology to assign to movements of the maturity values groupings, that are recorded with this template |
| Job Orders | The presence of this flag will show the management tab of the job orders valorization in the accounting recordings  |
| Cost Centres | The presence of this flag will show the management tab of the cost centers valorization in the accounting recordings |
| Profit Centres | The presence of this flag will show the management tab of the profit centers valorization in the accounting recordings |
| Machine Management | The flag will visualize in the accounting area, in the analytical tab, a valorization grill of costs/revenues concerning  the company motor vehicles |
| Withholding Tax | Field not used: the survey of the withholding taxi is done automatically from the payments accounting procedure of the commission settlement, independently of the flag in question |
| Fixed Assets | The presence of this flag will show the management tab of the fixed assets cards in the accounting recordings |
| Operation Type | It is the default operation type to indicate for the new movements within the accounting fixed assets card |
| Update Balances | Default flag |
| Mov. Description in Journal and Payments | Thanks to this flag the procedure will copy the general recording description with all detailed descriptions of movements and also in the payments notes |
| Contract | The flag identifies those recordings, that are created by contract. The contract is used for tax summeries |
| Currency | The presence of this flag will show the Currency field in journal section |
| Exchange/Currency Date | The presence of this flag will show the exchange and currency date fields in journal section |
| Currency Amount | The presence of this flag will show the currency amount field in journal section |
| Compensation Detail Account | The presence of this flag will show the compensation detail amounts fields in journal section. The management of compensation fields is not advised. |
| Movement Detail | The presence of this flag will show the movement detail field in journal section: it is recommended to set this flag for all accounting templates, in order to allow the insertion of detail notes of the single accounting movement. |
| Division | The presence of this flag will show the division field already from VAT section, as soon as in the journal section. With this setting it will be the loading of the same document on more company divisions |
| Bank Days | The presence of this flag will show the bank currency datum field in journal section: the field, so, is advised for all accounting templates, that record financial movements. The management of this field can be computerized according to the currency days (positive/negative) contained in banks register and for every single template.  |
| Progressive Number | The presence of this flag will show the line number field in journal section: it is recommended to use this flag for long templates, in order to allow user to order the records in a fix way as in template (e.g. wages survey)  |
| Maturity Values Manual Reference | The presence of this flag will show the maturity values manual reference in journal section. The field is indicated in order to connect accounting movements manually without going through maturity values management |






