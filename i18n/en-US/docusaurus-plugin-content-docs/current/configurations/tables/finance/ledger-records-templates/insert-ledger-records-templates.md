---
title: General Ledger Cause Entries 
sidebar_position: 3
---

:::tip[Fast Start]
The table is affected by the **[Fast Start](/docs/guide/fast-start)** procedure.

If you intend to configure manually, refer to the checklist on the linked page.

The causes created by the Fast Start procedure allow you to perform:

- Purchase and sale entries **Italy**
- Purchase and sale in **Reverse charge** in Italy, purchase girocontos, and related self-invoicing
- Purchase and sale entries **EU**, purchase girocontos, and related self-invoicing
- Purchase and sale entries **Extra EU** and related self-invoicing with giroconto
- Credit notes to reverse the previous ones
- Purchase and sale **assets**
- Revenues
- **Collections and payments**
- Active portfolio (issuance and presentation of Ri.Ba and collection, defaults)
- Free journal entries
- Other journal entries such as payroll, etc.
- VAT girocontos
- Payments of taxes and contributions
- Adjusting entries such as accrued and deferred expenses 
- Depreciation
- Closing and reopening of accounts
:::

## **1. Header**

#### Specific Fields

**Cause**: represents the alphanumeric code of 5 characters that must be unique.

**Description of Cause**: represents the description of the cause.

**Movement Type**: represents the type of movement of the registration. This is an internal fixed table, not editable by the user, that categorizes non-VAT causes from various VAT movement types.

**Document Type**: the table is preloaded but can be modified/expanded by the user. In this table, particularly important are the rows that include the flags **‘Credit Note'** and **‘Variation Note'**: for the Credit Note, the procedure checks that the VAT section is populated with negative amounts (a consistency check of the signs is also performed on the accounting of the credit notes from the sales/purchase area: it means that there cannot be rows with positive amounts and simultaneously others for another sub-account with negative amounts); for the ‘Variation Note', the procedure will activate, again in the VAT section of the registration, a flag to identify the rows related to variation notes and a reference date of the document to be corrected for VAT purposes. Do not confuse this date with the **Tax Comp.** field: the credit note (or any variation note) will correct the VAT for the period indicated in this last field.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image02.png)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/header/image03.png)

**Numbering**: the combo boxes allow you to assign a particular numbering to each accounting cause, respectively for definitive and provisional registrations. This type of management is required in some foreign localizations. See [*Table of Accounting Record Numbering*](/docs/configurations/tables/fluentis-numerations). If a particular valid numbering for the cause is not defined, by default, it will look for a numbering eventually set in the **[*General Accounting Parameters*](/docs/configurations/parameters/finance/accounting-parameters/)** and in the absence of a setting, the general table *Accounting Record Numbering* will be read.

**Accounting Books**: combo box that links to a specific table where a code and description can be defined to be recalled in the cause to group and categorize the causes themselves. These categories could also be matched with the different numberings referenced in the previous field (useful for foreign localizations where journals are kept separate based on the type of accounting entry). Example: purchases could have the numerator a) linked to the accounting book "Purchases," while sales the numerator b) linked to the book "Sales," and bank entries (collections/payments) the numerator c) linked to the book "Bank Entries," etc.

**Expiration Date**: you can block the use of an accounting cause starting from this date. It will not be visible in the list of causes from this date onwards.

**Collection and Payment Register**: NOT ACTIVE (identifies the causes to be reported in the simplified professional collection/payment register).

**Professionals (Professionisti)**: NOT ACTIVE (identifies a cause for the accounting of professionals).

### 1.1 Attribute Details

#### Specific Fields

**Automatic template**: at the time of saving a registration based on the cause that is being modified, the program will automatically create a second registration based on the cause indicated in this field. For the second registration to be filled out correctly, the following relationship logics between the two registrations must be followed:

a) the first case is one where the first registration is with VAT acquisition IntraCEE and the second with VAT acquisition IntraCEE giroconto, in which the link is given by the recording of VAT Acquisitions also in the Sales register; (similarly, there is the case of reverse charge, using the types of VAT acquisitions in reverse charge and VAT acquisitions reverse charge giroconto);

b) the second case is where the first registration opens an account while the second closes it immediately;

c) the third case relates to the closing of an account that arose with the movement type ‘VAT sale to public bodies’ for which VAT is suspended, in which case a VAT giroconto in suspension is linked;

d) the fourth case is a purchase with VAT in suspension, the inverse of the previous one;

e) the fifth case is where the first registration is VAT, while the second is populated with the logic of automatic sub-accounts set in the chart of accounts;

f) when none of the above cases are present, the program will try to set the data of the second registration based on the VAT data of the first; alternatively, the second registration will be generated reporting the expected sub-accounts without any set value.

**Automatic selfbilling type**: see the specific section on [**automatic self-invoice configurations**](/docs/finance-area/e-invoice/auto-invoice/ledger-templates).

**Invert columns if the amount is less than zero**: It is possible to make the program invert the Debit/Credit columns based on the sign of the VAT movement, typically in the case of recording credit notes (it is recommended to select this field for all VAT registrations).

**Warning**: This field is active only if the previous one has been activated; it consists in returning to the user a warning message about the sign inversion. The flag is irrelevant for causes used in the automatic accounting procedures.

**Allow sub-accounts with zero values**: with this flag, the procedure:

a) will allow the manual entry of rows with amounts both debit and credit equal to zero;

b) at the time of saving the registration, it will NOT delete the rows reported by the cause that have not been filled in by the user in the registration;

c) the rows that populate the journal with the VAT debit/credit will lead to the cancellation of the zero amount, but only on the condition that the flag ‘Allow 0 VAT in LG’ is not also set in the [VAT Rate Modes](/docs/configurations/tables/finance/vat-rates) table.

#### EXAMPLES:

<details>

<summary>Click for Example</summary>

- selecting to set the flag deactivated, it is possible to utilize the functionality to include in the proposed registration model all potentially useful accounts which, if not moved, will not be maintained at the time of saving the registration. Consider, for example, employee records, payroll, etc., where the same accounts are not always used each month, although the possible accounts are various.

- by choosing to keep the flag active, sub-accounts with a zero movement can be entered, a situation that often occurs when recording telephone or electricity utilities, for example.

**Prototype of the Registration**: this is the fundamental (but not mandatory) section of the accounting cause, where the typical scheme of the type of accounting registration to be managed should be loaded. It is possible to also input generic account codes (e.g., the supplier account), which will be automatically updated by the program based on the list of customer/supplier accounts entered in the General Accounting Parameters. These sub-accounts, as well as the debit/credit sections, will guide the accounting values, which will still be modifiable during the manual loading of the registration.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image02.png)

</details>

#### [Amount Type]( #amount-type)

Specific codes of Amount Type merit explanation, fundamental for automatically valuing the journal based on the VAT data and subdivision involved in the registration. Specifically:

**Manual**: indicates that the row will be manually populated by the user at the time of registration;

**Taxable Subsidiary**: indicates that the row will be updated for every sub-account code entered in the VAT section with the amount obtained from the taxable amount of the row(s) itself; the use of this amount type is **typically recommended for all revenues entered in sales causes**;

**Total taxable**: indicates that the row will be updated with the total taxable amount of the registration: no consideration will be made on the account/sub-account code entered. EXAMPLES: Sale with split payment regime or intra-community sale;

**Total VAT**: indicates that the row will be updated with the total tax of the registration: no consideration will be made on the account/sub-account code entered;

**Deductible tax**: indicates that the row will be updated with the total amount of deductible tax of the registration: no consideration will be made on the account/sub-account code entered;

**Tot Doc / Registration**: indicates that the row will be updated with the code of the sub-account holder of the registration (if compliant with the combinations entered in the Accounting Parameters) for the total value of the document/registration;

**Taxable income Tax non-deductible**: indicates that the row will be updated with the sum of the total taxable amount and the total undeductible tax of the registration: no consideration will be made on the account/sub-account code entered; Type of movement with limited application - it is better to use **Taxable Sub.+Undeductible Tax Sub**. 

**50% Taxable**: indicates that the row will be updated with 50% of the total taxable amount of the registration: no consideration will be made on the account/sub-account code entered;

**50% Taxable Non-deductible VAT**: indicates that the row will be updated with 50% of the total taxable amount of the registration plus the total of the undeductible VAT of the same: no consideration will be made on the account/sub-account code entered;

**50% Taxable + 50% Undeductible VAT**: indicates that the row will be updated with 50% of the total taxable amount of the registration plus 50% of the undeductible VAT of the same: no consideration will be made on the account/sub-account code entered;

CREATED FOR TAX REASONS AND TO BE CONSIDERED OBSOLETE

**Taxable Sub.+Undeductible Tax Sub.**: indicates that the row will be updated for each sub-account code entered in the VAT section with the amount obtained from the sum of the taxable amount(s) of the row(s) and the corresponding undeductible tax; **the use of this amount type is typically recommended for all costs entered in purchase causes;**

**Rounding Active**: indicates that the row will be updated with the amount of active rounding; its use is to be linked to closing causes of accounts;

**Rounding Passive**: indicates that the row will be updated with the amount of passive rounding; its use is to be linked to closing causes of accounts;

**Detail Account**: indicates that the row will be updated with the amount of payment accounts entered in the registration, according to the sign of the payment itself;

**Net Change Diff**: indicates that the row will be updated with the sub-account of profit from the reference currency of the currency difference, for the amount obtained according to the valuation differential between historical exchange rate and closing exchange rate of the account; if the historical exchange flag has been set, the row will have no valuation;

**Loss Currency**: indicates that the row will be updated with the sub-account of loss from the reference currency of the currency difference, for the amount obtained according to the valuation differential between historical exchange rate and closing exchange rate of the account; if the historical exchange flag has been set, the row will have no valuation;

**Automatic**: amount type used in some automatic accounting procedures.

*EXAMPLE*: It is set in asset sale causes to manage the gain/loss, for the rest it is set by the system in automatic accounting procedures.

The grid completes with: 

- a field for coding counter-accounts (its use is not recommended: in accounting, a print - "Statement with counter-accounts" - already exists that displays the counter-accounts independently of this setting). Additionally, by activating the flag that allows viewing sub-accounts of counter-accounts (Registration Detail tab)

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image03.png)

these fields will be managed automatically; for this reason, it is not advisable to manage them manually by imposing them in the cause.

In correspondence with the VAT credit (or debit) accounts and cost (or revenue), for example, the supplier (or customer) indications are reported, while on the supplier (or customer) the counter-account of the cost or revenue is reported, in the case where there are multiple counter-accounts, the one with the highest amount is reported (the other eventual ones are ignored).

- a detailed notes field: in this field, all codes reported at the bottom of the mask can be used. 

**For closing cause of accounts**, enter in correspondence with the generic customer/supplier account the **codes (8) or (9)** in conjunction with the **‘Ref. doc. account in payment'** flag (located in the Registration Detail tab) to annotate in accounting the references of paid/received documents.

Be careful that the generic account present in the cause (e.g., "Italian Suppliers") is actually managed in the [Accounting Parameters](/docs/configurations/parameters/finance/accounting-parameters) in conjunction with the correct account type (e.g., FIT in the Fluentis standard db). Also, check that the amount type in correspondence with the row of the customer or supplier is correctly set to Sub-account Amount.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image04.png)

**Deductible Tax and VAT Sub-account**: amount type used to value the row relating to VAT with the deductible VAT amount and with the sub-account identified according to the ‘VAT Accounting Type’ associated primarily with the account holder of the registration or by default in the ‘General Accounting Parameters’.

Setting not used in Italy, useful for foreign localizations, example Croatia, to link the VAT account to the rate used (example, if VAT rate of 10% is used, it will associate the account "Purchases VAT at 10%", therefore specific for that rate instead of a general account, e.g., "credit VAT", which is generic like in Italy for all rates).

**Parametric Description of Accounting Registration**: within this, standard descriptions can be coded which are filled by the program through the various codes indicated in the legend immediately above the field, descriptions that will be reported in the accounting prints and particularly in the Account Statements and the Journal.

For each movement row of the *Detail accounts/sub-accounts - Registration Prototype* section, it is also possible, as illustrated above, to code preset notes as well as for the General Description. 

**ATTENTION**: in particular, codes (8) and (9) are managed only for the specific row description and are not considered in the general registration description as per the field under discussion.

![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/attributes-detail/image05.png)

### 1.2 Registration Details

**VAT books**: the field, mandatory only for causes with VAT movement type, allows you to assign the reference VAT register to the cause being managed.

**VAT accrual date**: the field allows you to define what the competence date to assign to the VAT movement is: the program proposes the registration date for movements on purchase registers and the document date for movements on sales registers. It is recommended to set the competence date as the registration date also for intra-CEE VAT giroconto causes and reverse charge causes. 

It is fundamental, in fact, to check that the two causes, for purchase and giroconto, involved in these types of "double registration," have the same setting to avoid the deducted VAT and the VAT collectible in counterpart from being attributed different competence periods. We want to highlight this particularly because the giroconto cause, being a VAT cause on the sales side, defaults to the document date criterion which should therefore be modified.

#### Document Type Options

**Type/N. Document**: setting this flag makes the document number field mandatory for saving the registration based on this cause.

**Document date**: setting this flag makes the document date field mandatory for saving the registration based on this cause.

**Doc. No. = VAT Protocol**: setting this flag implies that the program will suggest the document number based on the progressive VAT protocol number. The field, therefore, should not be set for purchase registrations for which the document number and protocol have no reciprocal link; regarding sales, however, its use is recommended only for causes of registrations made manually directly in general accounting: setting this flag is discouraged for causes set in sales invoice types and used in invoice accounting.

**VAT Protocol = Doc. No.**: setting this flag implies that the program will try to assign the VAT protocol based on the document number. The field should not be set for purchase registrations for which the document number and protocol have no reciprocal link; regarding sales, however, **the use is suggested for all causes set in sales invoice types and thus used in automatic invoice accounting**: the ability to use this setting depends on the certainty that the numbering of the invoice types is the same for all documents to be registered in the same VAT Register; otherwise, "gaps" (or "duplicates" leading to a save rejection) would be created in the protocol.

The utility of this function in the automatic accounting of invoices lies in the ability to account without paying attention to the protocol numbering order: for example, I can account for invoice no. 2 and then invoice no. 1 obtaining a correct protocol that associates invoice no. 1 to protocol 1, etc...

At the end of the VAT period (month or quarter), it will therefore be sufficient to ascertain that all issued invoices have been accounted for.

#### Registration Type Options

**Opening mat. val.**: the presence of this flag will cause the accounts creation tab to appear in the accounting registration that will use this cause; setting this flag is recommended for all VAT-type registrations and in general for managing the client/supplier aging report. The flag can also be set for causes that record a prepayment: in this case, an opposite-sign entry will be opened to be compensated later with the entries that will be created at the time of the accounting recording of the subsequent tax document.

**Detail Movement in Accounts**: with this flag, the program will insert into the **notes of the accounts** the texts entered in the 'Movement Detail' field of the original accounting row of the account.![](/img/it-it/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates/recording-detail/image02.png)

The flag is only active when the previous *Opening Accounts* flag has been set.

**Opening for Each Movement Row**: with this flag, the program will insert an account for each movement row where there is a sub-account with the open accounts management flag set. The flag is only active when the previous *Opening Accounts* flag has been set.

The flag can only be activated for non-VAT causes (e.g., opening accounts) for each movement row supplier or customer opens an account and reports the payment details taken from the registry (needed in case multiple rows are opened for a single customer or supplier).

**Closing mat. val.**: the presence of this flag will cause the accounts closing tab to appear in the accounting registration that will use this cause. It typically includes all non-VAT payment/collection registrations, but it can also be set in combination with opening accounts and account compensation for the causes of credit notes and generally for all registrations that involve an account opening with a simultaneous offset of a previous situation.

**Use historical change**: with this flag, available only if the closing accounts has been set, the application will proceed to close the accounts with the historical opening exchange rate, without any automatic recording of exchange differences (allowing therefore to manage them possibly manually).

**Group payments in journal**: with this flag, available only if the closing accounts have been set, the application will group in a single accounting movement all the closing account amounts linked to the same sub-account (in particular, it will group movements of the same sign and same currency).

**Exclude from accrued commissions**: with this flag, available only if the closing accounts have been set, the closures made with this accounting cause will not be considered valid for the calculation of accrued commissions for agents with 'Payment made' calculation type.

**Document Reference for Account in Payment**: with this flag, available only if the closing accounts have been set, the application will proceed to manage codes (8) and (9) for recording the references of account closures in the detail descriptions of the movements.

**Account Compensation**: with this flag, available only if both opening and closing accounts flags have been set, the procedure will activate the possibility of proceeding with an account compensation within the registration based on this cause: this combination of flags is recommended for all causes linked to credit note-type documents.

**Compensation Warning**: with this flag, when saving the accounting registration, a control will be activated that warns the user about the presence of accounts to be compensated.

**Group mat. val.**: the flag activates the management of account groupings instead of the standard opening/closing account management, through a specific registration tab for recording in accounting.

**Create group**: the flag, if active and in combination with the previous flag, automatically creates an account group in the account groupings, into which the entries of the registration flow (to be activated in the purchase/sale invoice causes).

**Account Grouping – Payment Type**: it is the type of payment to be assigned to the movements of the account groupings recorded with this cause.

**Projects**: (ex Commitments): activating this flag will display the *Project* field in the header of the registration in addition to the detail fields in the body of the registration for linking projects (commitments) with the detailed accounting movements.

For further details see **[here](/docs/finance-area/ledger-records/records/ledger-record)**.

**Cost centres**: the presence of this flag will display the cost center valuation management tab in the accounting registrations.

**Profit Centres**: the presence of this flag will display the profit center valuation management tab in the accounting registrations.

**Machine management**: NOT ACTIVATED the flag will display in accounting, in the analytical tab, a grid for valuing costs/revenues to company vehicles.

**Fixed Assets**: the presence of this flag will display the asset card management tab in the accounting registration.

**Operation type**: it is the type of operation to be proposed by default for new movements recorded within the asset card in accounting.

**Update balances**: flag set by default.

**Description movement in journal and payments**: with this flag, the procedure will copy the general description of the registration into all detail descriptions of movements and also into payment notes.

**Commissions**: the flag activates a specific tab within the accounting registrations for managing commission calculation data from the administration module (this recently introduced module operates as an alternative to commission management from the sales module but does not replace it, as the latter remains active).

**Intra**: the flag activates a specific tab within the accounting registrations for managing data, from the invoice of purchase or sale automatically accounted for through the appropriate procedure, or inserted at the time of entering the journal entry, related to the creation of Intrastat models. The data managed in this way will be acquired in the procedure for the creation of Intrastat models through the *Acquisition of accounting records* procedure. It is important to remember that there is also the *acquisition from invoices* procedure which does not interact with accounting movements, reading only the purchase/sale documents directly.

#### Additional Columns Viewable in the Accounting Registrations Grid

**Currency**: the presence of this flag will display the Currency field in the journal section.

**Exchange/Currency date**: the presence of this flag will display the exchange rate and valuation date fields in the journal section.

**Currency amount**: the presence of this flag will display the Currency Amount field in the journal section.

**Offset detail account**: the presence of this flag will display the counter-account sub-account fields in the journal section. The management of counter-account fields is not recommended.

**Trans. detail**: the presence of this flag will display the Movement Detail field in the journal section: it is advisable to set this flag for all accounting causes in order to always allow the entry of detail notes for each accounting movement.

**Division**: the presence of this flag will display the Division field already starting from the VAT section as well as in the journal section. With this setting, it will be possible to split the loading of the same document across multiple divisions of the company.

**Bank days**: the presence of this flag will display the bank currency date field in the journal section: the field is therefore recommended for all accounting causes that record financial movements. The management of this field can be automated based on the currency days (positive/negative) set in the bank registry for each specific cause.

**Progressive number**: the presence of this flag will display the Row Number field in the journal section: it is advisable to include this flag for particularly long causes, in order to allow the user to sort the records in a fixed manner as per the cause (e.g., payroll recording).

**Manual Account Reference**: the presence of this flag will display the Manual Account Reference field in the journal section. The field is indicated for manually linking accounting movements without going through account management. In practice, it is a free notes field.

**Extraordinary Operations**: the presence of this flag will display the eponymous field (of type bit or flag) to highlight certain accounting movements (particularly, for example, a cost) as *extraordinary* and then allow easy searching or extraction within a print of the same.
This capability proves useful following the changes to the budget schemes introduced with Directive 2013/34 (Legislative Decree 139/2015). These changes had eliminated the "extraordinary" area of the Income Statement. As a result, all "exceptional" components cannot be represented by accounts such as extraordinary income but must be recorded directly in the account to which they refer, e.g., the expense (by nature). However, the need arises to highlight such cost/revenue components for necessary detail in notes and for other potential fiscal reasons, such as fiscal reductions of costs in income tax declarations, etc.

**Fiscal operation type**: makes visible a combo box with which to mark the accounting row to support a subsequent (external) processing of the annual VAT declaration, where it is required to indicate whether the operation corresponds to:
- Purchase of amortizable goods
- Purchase of non-amortizable instrumental goods
- Purchase of goods/services intended for resale
- Other purchases
 
**Document reference**: Makes visible, in correspondence with the rows of the accounting movement two additional fields to annotate the reference to the date and document number (e.g., invoice on the counter-account row).

### 1.3 Parameters

#### Tab Order in Accounting Registrations

It is dedicated to setting the order in which to present the expected tabs, through the specific buttons: **Move Up** and **Move Down**. 

#### Registration Parameters

**Control Account Type**: the presence of this flag will require the procedure to check the correspondence of the registered sub-account holder's account with the accounting parameter settings (e.g., using a customer account in a supplier purchase cause): in case of negative outcome, a simple warning message will be executed.

**Block record if the account type is incompatible**: the presence of this flag will force the procedure to cancel the entry of a registered sub-account holder's account that is invalid in relation to the accounting parameter settings (e.g., using a customer account in a supplier purchase cause).

**Allow ledger recording with imbalance**: the presence of this flag will allow the user to save unbalanced accounting entries (not recommended). It can be useful, for example (with the necessary caution) to force an automatic accounting that returns an error message in order to better understand the outcome of the registration and correct the settings.

**Lock deleting of records with paid maturity values**: with this flag, it will not be possible to delete registrations that have at least one account with a linked payment.

**Block registration if the value of the accounts is not equal to the accounting movement**: the presence of this flag will require the procedure to block the saving of registrations for which the value of the accounting movements does not match the movement values of the accounts (when opening and closing accounts): if not set, the procedure will still issue a warning message about the presence of a difference. The check is performed on all sub-accounts that have set the *Opening accounts* flag in the chart of accounts.

**Block record if the document total is different from the total of VAT data**: the presence of this flag will require the procedure to block the saving of registrations for which the total value of the VAT movements does not match the totals set in the header of the registration: if not set, the procedure will still issue a warning message.

**Update automatically total of document to varying of the data in the grid of the VAT**: the presence of this flag will require the procedure to update, but only incrementally, the totals in the header of the registration as the sum total entered in the VAT section of the registration varies.

**Update also totals in decrease**: this flag, active only when the previous one is set, will force the procedure to update the registration totals also decrementally.

**Block recording if the VAT reference no. order is not respected**: the presence of this flag will require the procedure to block the saving of registrations for which the chronological order of protocol is not respected: in particular, with this flag, the procedure will retrieve protocol numbers only if a valid registration date has been set for the number itself. If the flag is not set, the procedure will still issue a warning message about the lack of protocol order: it is also important to remember that the default VAT register print does not allow printing definite VAT registers that have gaps in numbering or do not follow the correct protocol order.

**Separate Management of Cdc/Cdp**: this flag, active only if the cause manages both cost centers and profit centers, will allow economic accounting movements to be assigned to both cost centers and profit centers. If not set, instead, the movement can only be assigned to one of the two sections.

**Automatic recalculation of CdC, CdP, and projects**: the flag will also be reflected in the accounting registrations based on this cause: the meaning is to either perform or not perform automatic recalculation of the analytical sections of cost centers, profit centers, and the projects once editing a previously saved accounting registration. At the time of entering a new registration, until its first saving, updating of these sections will always be automatic in accordance with the default settings defined.

**Block registration if the value of the Cdc/Cdp is not equal to the accounting movement**: the presence of this flag will require the procedure to block the saving of registrations for which the total value of the analytical movements of cost and profit centers does not match the economic amounts recorded in the general accounting section: if the flag is not set, a warning message will still be executed indicating the mismatch of values.

**Group VAT in the journal**: the presence of this flag will require the procedure to group in the journal the VAT rows assigned to the same accounting sub-account (and to the same division).

**Block saving with duplicate document number**: the presence of this flag, set by default, will require the procedure to block the saving of accounting registrations with the same document number, same year, same document type, and account holder in the header of the registration.

**Background Colour**: set in this field the background color to display in video searches based on this cause. The use of colors can be useful to identify the type of movement without having to read descriptions or cause codes.

**Foreground Colour**: set in this field the color of the text to display in video searches based on this cause. The use of colors can be useful to identify the type of movement without having to read descriptions or cause codes.

**Sample text**: the field displays the result of the color combination set.

**Italic Font**: set in this field the displaying of characters in italics for this cause in video searches: it can be helpful to identify the type of movement without having to read descriptions or cause codes.

**Bold**: set in this field the displaying of characters in bold for this cause in video searches: it can be helpful to identify the type of movement without having to read descriptions or cause codes.

:::important See Also
[**VIDEO TUTORIALS ON ACCOUNTING CAUSES**](/docs/video/finance/intro)
:::

### 1.4 VAT Rate Control

In this tab, it is possible to input some VAT rates (previously coded in the **[VAT Rates / Modes](/docs/configurations/tables/finance/vat-rates/)** table) that will bind the user to the exclusive use of the same.

It thus represents a form of control and constraint to use only VAT codes deemed correct and appropriate for the accounting entries managed by the cause in question.

The ability to enter in the grid and thus activate the control is enabled by the **Tax rates enabled** flag.

Next to the fields that display the code/description of the inserted rate, there is a field to set an end validity date for the previously made choice and thus change or conclude the management policy.