---
title: Withholding Tax Types - New
sidebar_position: 2
---



| Function | Meaning |
| --- | --- |
| Withholding Tax-Code | It is an alphanumeric code of 5 identification characters of withholding tax: usually it is the ministerial tax-code |
| Withholding Tax-Description | Withholding tax-code description |
| Schedule in Mod. 770  | ‘Schedule in mod.770' is a required field: the 770 model is not managed in the procedure |
| Tax Code | The tax code refers to the tax codes table: this is precompiled at the moment of installation and has the complete list of the tax codes, that belong to F24 model |
| Ledger Template | The model field has the required setting in order to record the remuneration in accounting: usually it is a VAT model, as a normal Italy purchase. There is even the valorization of no VAT models in order to manage the withholding-taxes to freelancers, which haven't got VAT number |
| Code of Page in Mod. 770 | Code of payment in 770 modality is not a required and used field. |
| Maturity Values Types | The option is between net and gross maturity values. The distinction concerns the creation of net and gross due dates of all taxes of commission settlement: the standard setting has net maturity values in order to have a due register with the right amount to pay to the professional man. In that case the reference ledger template does not have the block of recording of imbalanced movements with maturity values.  |
| Maturity Values Groups | Flag for the activation of maturity values management  |
| Withholding Tax-Type | The withholding tax-type has the provisional tax or as a tax option: the distinction has at the moment no relevance on the module efficiency. |
| Debit Agent's Insurance Fund Paid by Agent | The field concerns the setting of debit detail account on which will be found the amount paid by agent. This detail account will be used in the payments accounting or in the Enasarco accounting according to the setting or not of the Enasarco management paid by agent.  |
| Agent Category | The agent category is the agent typology where it is possible to identify the contribution percentages at Enasarco institute. In the case where the category has been already set, it will be necessary the insertion of the previous debit detail account to Enasarco. The field is required in the case that the Enasarco management is paid by company |
| Enasarco Accounting Paid by Company | The ‘Enasarco accounting paid by company' actives the setting of the two following detail accounts and makes obligatory the presence of an agent and debito detail account category for the amount paid by company. The activation of this flag will active the accounting survey of Enasarco contributions thanks to the homonymous accounting procedure. The option is advised in order to make the procedure independent given that the Enasarco contribution is found according to the accrual and not the cash as the withholding tax.  |
| Cost Paid by Company | It is necessary to assign a detail account to the accounting survey of Enasarco cost paid by company |
| Debit Paid by Company | It is necessary to assign a detail account to the accounting survey of Enasarco debit paid by company |
| VAT Payable | The detail account VAT payable stores the debit detail account, that has to be used in order to find the withholding tax debit. The detail account is used during the payments accounting procedure (the debit of the withholding tax to pay is found through the payments accounting; that debit is a tax that follows the cash logic): when payment concerns the commission settlement compensations, is necessary to complement the recording with the withholding tax movements and to manage module tables in order to give the possibility to obtain a report about the withholding taxes certifications. |
| Cost Accounting Template | The flag of the cost accounting template actives the possibility to manage the cost accounting data in the commission settlement compensation.  |



| Function | Meaning |
| --- | --- |
| % Withholding Tax | Percentage of withholding tax application |
| % Amount Origin | Percentage of amount origin application |
| % Insurance Fund | Insurance fund percentage |
| % Rid. Forf. Remuneration | Not in use |

The social security section is no more necessary: it enabled the user to activate another tax section within the commission settlement remuneration in order to manage the social security taxes. Currently these remunerations pass through the payroll office and so the social security does not concern the commission settlement module more. 



| Function | Meaning |
| --- | --- |

RIBBON BAR: the ribbon bar represents the Form menu, that is the area in which it is possible to operate on previous recordings or generate new ones. The possible features list is the following:



| Function | Meaning |
| --- | --- |
| Save | Save	It is a command to save the insertion of the withholding tax type |
| New | It is a command to insert a new withholding tax type |
| Delete | It is a command that is necessary in order to delete the withholding tax type, where the user is located |






