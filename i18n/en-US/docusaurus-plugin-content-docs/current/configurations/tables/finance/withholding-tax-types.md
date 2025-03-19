---
title: Withholding tax types
sidebar_position: 34
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If manual configuration is intended, please refer to the checklist on the linked page.
:::

In this table, the types of withholding tax to be associated with the recipients' compensation (sales agents are also recipients) for the proper management of accounting and other related tax obligations are researched and entered.

#### Specific Fields

**Withholding Code**: alphanumeric identification code of 5 characters for the withholding; typically, it refers to the ministerial tax code.

**Withholding Description**: description of the withholding code.

**[Tax Code (Codice tributo)](/docs/configurations/tables/finance/tax-code)**: refers to the table of tax codes: this is pre-filled at the time of installation and contains the complete list of tax codes provided for Form F24.

**General Ledger Template**: this field requires mandatory settings for recording the compensation in accounting: it is usually a VAT reason, like a standard purchase in Italy. However, it also allows for non-VAT reasons to manage cases of withholding for occasional collaborators not holding a VAT number.

**Electronic invoicing withholding tax types**: in this field, it is possible to insert the specific withholding type code valid for active electronic invoicing (i.e., when the company in use is subject to withholding tax imposed by its customer/purchaser). For the current coding, refer to the updated technical specifications on electronic invoicing available from the Revenue Agency's website.

**Section in Mod. 770**: this is a mandatory field; however, Model 770 is not managed in the procedure.

**Payment Code in Mod. 770**: the payment code in 770 is a non-mandatory and unused field.

**Mat. val. types**: the choice is between net payments and gross payments. The distinction relates to the creation of deadlines net or gross of all taxes on the recipient: the standard setting provides for net payments, in order to have a list with the actual amount to be paid to the professional, in which case the corresponding accounting reason should not block the registration of unbalanced movements with the payments.

**Withholding-tax type**: provides the option for down payment or tax withholding: this distinction currently has no relevance to the operation of the module, but is relevant at the CU (Unique Certification) level to value the two fields *Withholding tax* or *Withholding tax*.

**Payment Code**: this is the code for the payment of the withholding. This data is referenced in the CU (unique certification) processing procedure, and for its management, it is advisable to refer to the related ministerial instructions available from the Revenue Agency's website. 

**Code other sums not subject to withholding**: this field allows for specific marking, for each type of withholding, of the code (generally numerical as per the ministerial instructions of the Revenue Agency) related to the amounts not subject to withholding tax. If this field is not filled, during the processing of the CU in the [**related module**](/docs/finance-area/declarations/declarations/withholding-tax-certification), the *code 21* will be filled by default for the lines of recipients' compensation entered in documents with **line type 4** (*Other*), to be used, for example, for expenses advanced by the recipient on behalf of the client and recharged.

**VAT payable**: this sub-account stores the sub-account of debt to be used to record the debt related to the withholding tax. This sub-account is used in the payment accounting procedure (with payment accounting, the debt of the withholding to be paid is recorded, which is a tax that follows the cash logic): when the payment concerns recipients' compensation, it is necessary to integrate the registration with movements related to withholding and manage the module tables to ensure the possibility of obtaining the certified withholding prints.

**Agent category**: this is the type of agent from which to determine the contribution percentages to the Enasarco institute. If the category has been set, it will be necessary to also enter the previous debt sub-account to Enasarco. The field is mandatory if the management of Enasarco is charged to the company.

**Enasarco Contributions Charged to Company**: this flag activates the setting of the following two sub-accounts and makes it mandatory to assign an agent category and a debt sub-account for the agent's share. Activating this flag will trigger the accounting record of Enasarco contributions with the corresponding accounting procedure. This option is recommended to make this recording autonomous, as the Enasarco contribution must be recorded on an accrual basis and not on a cash basis like the withholding tax. Within this flag, there are also:

**Enasarco Debt Charged to Agent**: the field is dedicated to setting the debt sub-account on which the amount charged to the agent will be recorded. This sub-account will be used in payment accounting or in Enasarco accounting depending on whether the management of Enasarco is charged to the company or not. The field is mandatory if the following agent category field is set.

**Cost paid by company**: sub-account to be attributed to the accounting recording of Enasarco costs charged to the company.

**Debit paid by company**: sub-account to be attributed to the accounting recording of Enasarco debt charged to the company.


### Percentages

The section includes the following fields (click on the arrow to the right of this section):

% **Withholding**: percentage of withholding application.

% **Origin amount**: base percentage for withholding application.

% **Social insurance fund**: percentage for welfare fund.

% **Flat Rate Deduction**: unused field.

The INPS section allows for activating an additional tax section within the recipient's compensation to manage INPS contributions due, for example, from project collaborators and similar.