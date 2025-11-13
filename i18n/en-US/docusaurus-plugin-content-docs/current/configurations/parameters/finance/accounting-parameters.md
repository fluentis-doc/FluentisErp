---
title: Accounting Parameters
sidebar_position: 2
---

:::tip[Fast Start (FAst Start)]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure

If you intend to manually configure, refer to the checklist on the linked page.
:::

The Accounting Parameters mask allows you to define the various management parameters **for each accounting year** selected.

:::tip IMPORTANT
There must be a record containing the various detailed parameters **for each accounting year**. Therefore, **each new year** must be initialized by creating a new parameter record using the **New** button.

When creating the new parameter record, the program asks if you also want to create the [**new year counters**](/docs/configurations/utility/new-year-counter-generation).
:::

#### Specific Buttons

> **Save:** save the settings related to the year

> **Insert account:** to enter in the Customer/Supplier account list grid. The setting allows the automatic replacement of the generic account in the reason with the sub-account of the fiscal document holder, as well as blocking or signaling incompatible accounts.

> **Delete account:** to delete previously entered accounts.

> **Cancel final prints:** to proceed to cancel the final prints of the journal book. Once the final print is canceled, the user must reset the related counter corresponding to the field ***Last journal book print date***, in the ***Year Data*** section, which consists of three boxes containing the date, last line, and last page of the final print.

> **Cancel amortization book:** to proceed to cancel the final prints of the assets book. Once the final print is canceled, the user must reset the pages counter corresponding to the field ***Last page of the printed asset book*** in the ***Year Data*** section.

> **Move up:** to move the selected row up within the "Cost/profit center proposal" grid, giving it higher priority. 

> **Move down:** to move the selected row down within the "Cost/profit center proposal" grid, giving it lower priority.

## **General**

### 1.1 Year Data

- **(Start/End) Fiscal Year:** Defines the date range for recording the selected fiscal year. Each accounting entry, for the controls of the previous fields, is entered in the corresponding fiscal year relative to these dates, which must not overlap between different fiscal years.

- **(Start/End) Competence Line:** Optional recommended fields that define the date range of competence manageable within the recordings of the selected fiscal year.

- **(Start/End) Document Line Period:** Mandatory fields that define the date range of documents manageable within the recordings of the selected fiscal year.

- **Closure of the previous fiscal year:** Defines the closure date of the previous fiscal year.

- **Last journal book print date:** Stores the last printed date in definitive for the current fiscal year. When opening a new fiscal year, this date must correspond to the closure date of the previous fiscal year.

- **Debit/Credit balance:** Stores the last debit/credit balances of the journal book of the selected fiscal year printed in definitive. When creating a new fiscal year, these fields must be set to zero.

- **Date / Last line / Last printed page of the journal book:** Stores the date, last page, and last line of the journal book of the selected fiscal year printed in definitive. When creating a new fiscal year, this field must be set to zero.

- **Last printed page of the asset book:** Stores the last page of the asset book of the selected fiscal year printed in definitive. When creating a new fiscal year, this field must be set to zero.

- **Opening and closing reason for accounts:** The two fields, which are not mandatory, allow you to pre-set the reasons to be used in the account closure/opening procedures.

- **Pro-rata percentage:** The field allows you to set the percentage value of the pro-rata valid for the selected fiscal year. If it is not an option to use, leave the field empty or set to 100%.

:::tip[Info]
The management of the pro-rata can alternatively occur, in addition to this single field for all VAT registries, also specifically for each VAT registry, allowing the management of multiple activities for VAT purposes with different pro-rata percentages. See [**VAT Registries**](/docs/configurations/tables/finance/vat-books) and [**VAT Activity Type**](/docs/configurations/tables/finance/vat-activity-type).
:::

- **VAT Accrual Type:** The field allows you to define the default type of accounting for VAT rates on various sub-accounts of the chart of accounts.

- **Monthly closure:** If active, modifies the operation of the *Automatic account closure* procedure so that it can be executed monthly as required in some foreign locations (particularly in Eastern Europe). **Setting not recommended for Italy**.

:::danger[Attention]
This flag must be set to off for regular Italian accounting. If activated (for example, accidentally), in addition to noticing some differences in the form execution of account closures, it will be impossible to calculate and manage accruals and deferrals in the *Adjustment entries* form.
:::

- **Commission management:** Activates the functionality to calculate agent commissions from the Administration module.

- **Discounting factor:** Indicates the value of the annual increase of the assets for the purpose of depreciation calculated specifically within the Controlling module and managed in various other details within the *Depreciation for controlling* tab present in the asset record. The setting is also referenced in the [*Asset categories for controlling*](/docs/configurations/tables/controlling/analytical-accounting/controlling-asset-categories).  
**EXAMPLE:** By entering a value of 1.1, there will be a 10% increase in the depreciable value of the asset each year, so an asset with an initial value of 1000 will have a value of 1,100 in year x+1 and in year x+2, an additional increase will be added according to the same logic.

- **Tax regime:** General data to be filled in order to manage any automation and reference to this data related to taxation and electronic invoicing.

- **Business volume:** It is used to calculate some indicators related to the balance sheet information aimed at preventing business crises.

- **VAT liquidation:** Sets the periodicity of periodic VAT liquidations. The flags are alternatives, the two main ones refer to monthly or quarterly periodicity based on turnover (refer to VAT regulations), and the third refers to quarterly "by nature" subjects under the special regime of Article 74 of DPR 633/72.

- **Minimum debt for VAT payment:** Represents the value (subject to possible changes based on VAT regulations) below which any debt resulting from the periodic VAT liquidation is not due. This field impacts the prints of the periodic liquidation and on the processing of the quarterly communication (Li.Pe.).

- **VAT rounding type:** Sets VAT rounding always upwards with the selection 'Lire' or according to Euro logic.

- **VAT Registries:** Defines whether to print VAT registries by registration date or VAT competence date within the selected period. For those who do not use the possibility of deferred invoicing until the 15th of the following month, the result does not change.

- **Competence date ceiling equal to:** Defines whether the ceiling competence date to be assigned to VAT transactions with a rate linked to the ceiling should be set based on the registration date or the document date.

- **Numbering:** Allows assigning to each selected year a numbering system for definitive accounting records and for those in "provisional" status. Useful in the case of periodic changes to numbering policies instead of the fixed definition of the numerator in the [Accounting Registration Numbering](https://docs/configurations/tables/fluentis-numerations) table. If numbering is not set in this form, it will still be sought by default in the *Accounting Registration Numbering* table. The numerator setting for definitive and provisional records is also present within each single accounting reason (to differentiate numbering for each type of entry, as requested by some foreign locations, typically the French one) **[*in the header of the reason*](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates)** and if not set in the reason it will read by default what is set in this general parameters form. If a numerator is not defined here, it will read, as mentioned above, the one present in the general table.

- **Self-invoice:** The section contains parameters for the creation of the self-invoice from accounting records for the communication of purchase data to the SDI. [**See Specific Parameters**](/docs/finance-area/e-invoice/auto-invoice/parameters).

- **Intrastat:** The section contains some fields related to the processing and exporting of intrastat models.

- Display details of transaction nature: with a recent regulatory update, details regarding the nature of the transaction field has been introduced, which can be made visible by activating the flag. (It is noted that the detail field is filled by those who exceed the threshold of 20 million euros in sales under intra model 1 bis or purchases under intra model 2 bis during the year.) For details on the coding of the new column B related to the transaction nature detail, refer to the ministerial instructions.

- Enabled user identification code (Codice Identificativo utente abilitato): in this field, you can specify a code for the name of the exported file containing the lists (also reported in the header track record) for the transmission of the traces using the Entratel channel.

- Intrastat Purchase/Sales Periodicity: The combo boxes allow setting the monthly or quarterly periodicity, respectively for purchases and sales, based on which more or less detail in data compilation will be required, according to regulations. Note: currently for purchases, quarterly periodicity has been abolished.


- **Margin VAT (Iva del Margine):** In this section, you insert specific parameters for managing functionalities related to the margin VAT regime. For details see [**here**](/docs/finance-area/particular-cases/VAT_regime-del-maine).

### 1.2 Customer/Supplier Accounts List (Lista Conti Clienti / Fornitori)

- **The matching** of customer, supplier, bank, and agent account types with their respective accounts (masters without the sub-account code) to be performed in this grid, although not mandatory, **is** <u>**strongly recommended**</u> to allow for various automations within the management system.  
In particular, we highlight two cases:  
1. After creating the contact record, when assigning the account type and subsequently obtaining the details of the record, the parameter allows creating the new accounting sub-account intended for the respective customer, supplier, agent, or bank, placing it under the correct master account. Without this matching, this assignment would need to be entered manually.  
2. Within accounting reasons, particularly those for invoice registration, the registration scheme that reports a particular master account allows, through the matching in question, to verify that the correct account is used in the registration (for example, a supplier account in purchase registration instead of a homonymous account but of customer type, possibly blocking the entry depending on the security parameter setting in the reason).  
**WARNING:** The setting allows the automatic replacement of the generic account in the reason with the sub-account holder of the fiscal document; therefore, the lack of setting will not allow automations to work correctly, preventing the automatic accounting of invoices.

### 1.3 Cost/Profit Center Proposal from: {#center-proposal}

The section defines the logical order for the accounting valuation of cost/profit centers.

The possible criteria contained in the section can be moved using the *Move up*/ *Move down* buttons, present in the ribbon bar, in order to manage the reading priority which always goes from top to bottom, so the first in the list will be the first read; if the CDC is not found, it moves to the second, etc.

**<u>NOTE:</u>** Currently the *Industrial cost* criterion is considered obsolete, and thus the reading will primarily occur from the chart of accounts or customer record.

## **Accounts**

In this tab you set in detail the accounts of the chart of accounts that will be used in the various automatic accounting procedures executed by the management system.

- **Purchase VAT sub-account:** Allows you to set the sub-account to be proposed in the automatic recording of the VAT turnover at the time of the final print of the periodic VAT liquidation.  
- **Sales VAT sub-account:** Allows you to set the sub-account to be proposed in the automatic recording of the VAT turnover at the time of the final print of the periodic VAT liquidation.  
- **Initial balance sheet:** Allows you to set the sub-account to be proposed for the automatic account opening operations.  
- **Current operating profit:** Allows you to set the sub-account to be proposed for the automatic account closure/opening operations.  
- **Current operating loss:** Allows you to set the sub-account to be proposed for the automatic account closure/opening operations.  
- **Previous operating profit:** Allows you to set the sub-account to be proposed for the automatic account closure/opening operations.  
- **Previous operating loss:** Allows you to set the sub-account to be proposed for the automatic account closure/opening operations.  
- **Income statement:** Allows you to set the sub-account to be proposed for the automatic account closure operations.  
- **Capital losses:** Allows you to set the sub-account to be used in the recording of negative economic differences from asset sales.  
- **Capital gain:** Allows you to set the sub-account to be used in the recording of positive economic differences from asset sales.  
- **Casual profits:** Allows you to set the sub-account to be used in the recording of active provisions (also used in the management of discounts and allowances).  
- **Casual loss:** Allows you to set the sub-account to be used in the recording of passive provisions (also used in the management of discounts and allowances).  
- **Contingent assets:** Allows you to set the sub-account to be used in the recording of active insufficiencies.  
- **Contingent liabilities:** Allows you to set the sub-account to be used in the recording of passive insufficiencies.  
- **VAT payable:** Allows you to set the sub-account to be proposed in the automatic recording of the VAT turnover at the time of the final print of the periodic VAT liquidation.  
- **VAT receivable:** Allows you to set the sub-account of credit towards the Treasury to be proposed in the automatic recording of the VAT turnover at the time of the final print of the periodic VAT liquidation.  
- **Considerations account:** Allows you to set the sub-account of the fictitious customer for the asset recording of the revenues.  
- **Offset consideration account:** Active if the previous receivables account is activated, allows you to set the economic counterpart sub-account of the revenues to be ventilated.  
- **Corrispettivi VAT rate:** Active if the previous receivables account is activated, allows you to set the VAT rate for the recording of the revenues to be ventilated.  
**Invoices to be received:** Allows you to set the generic sub-account to be used in the 'Accounting of invoices to receive' procedure present in the 'Purchase Invoices' module, or in the accounting of purchase invoices of a [type](/docs/configurations/tables/purchase/purchase-invoices-type) that requires the management of competence.  
**Invoices to be issued:** Allows you to set the generic sub-account to be used in the accounting of sales invoices of a [type](/docs/configurations/tables/sales/invoices-type) that requires the management of competence.
**Credit notes to receive:** Allows you to set the generic sub-account to be used in the 'Accounting of invoices to receive' procedure present in the 'Purchase Invoices' module, or in the accounting of credit notes received from the supplier of a [type](/docs/configurations/tables/purchase/purchase-invoices-type) that requires the management of competence.  
**Credit notes to issue:** Allows you to set the generic sub-account to be used in the accounting of credit notes to customers of a [type](/docs/configurations/tables/sales/invoices-type) that requires the management of competence.
**Deferred charges:** Allows you to set the generic sub-account to be used in the automatic adjustments procedure of the 'Interim closings' module.  
**Accrued income:** Allows you to set the generic sub-account to be used in the automatic adjustments procedure of the 'Interim closings' module.  
**Deferred income:** Allows you to set the generic sub-account to be used in the automatic adjustments procedure of the 'Interim closings' module.  
**Accrued cost:** Allows you to set the generic sub-account to be used in the automatic adjustments procedure of the 'Interim closings' module.  
**F24 Model account:** Allows you to set the generic sub-account to be used in the accounting of the F24 model.  
**INPS / Social Security Account:** Allows you to set the generic sub-account to be used in the accounting of the F24 model.  
**Other tax account:** Allows you to set the generic sub-account to be used in the accounting of the F24 model.  
**Selfbilling account:** Allows you to set the sub-account for creating the self-invoice from accounting records for the communication of purchase data to the SDI. [**See Specific Parameters**](/docs/finance-area/e-invoice/auto-invoice/parameters).
**Counterparty of quarterly interest liquidation VAT:** Allows you to automate the accounting of interest expenses arising from quarterly VAT liquidation by inserting the desired counterpart account (cost).

## **3. **Accrual Period Block**

In this tab, it is possible to manage the blocking (and eventual unblocking) of accounting periods (even partially) to prevent unwanted changes to the data.

:::tip[**Accrual Period Closure Button**]
With the *Accrual Period Closure* button, a popup opens with two filter fields to block a certain range of dates. The filter operates on the competence date located **in the header** of the record.

There is an option to also block the economic competences of the line.
:::

Confirming the selection will display the blocked range in the grid.

It is possible to proceed with the *rollback* (button **Restore Closed Period**) to reopen the period, or create a new block (which can start the day after the previous block).

:::note[Info]
What happens when a period is blocked: an *update* is executed on all records, storing that it has been blocked and by which user. 
It will not be possible to intervene on the records (neither modification nor deletion or rollback) nor to insert new records with a competence date in the blocked range.

The **economic accrual block** flag, optional, does something extra: it blocks the saving of any subsequent records that have, in the journal lines, an **economic** competence date that falls within this closed range. This is to ensure that no integrations or adjustments of any kind can appear with an adjusting entry.
:::

**In the image**: In green, the **accounting** competence in the header of the record on which the block acts based on the filter dates; in red, the **economic** competence that can be optionally blocked.

![](/img/it-it/configurations/parameters/finance/accounting-parameters/comp_cont_eco.png)

## 4. Video Tutorials on Parameters

:::important See Also
[**VIDEO TUTORIALS ON PARAMETERS**](/docs/video/finance/intro)
:::