---
title: VAT Rates
sidebar_position: 1
---

:::tip[Fast Start]
The table is involved in the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist on the linked page.
:::

This table is common to all companies in the database and presents the list of VAT rates applicable throughout the management system.

It is a preloaded table on which authorized users can operate to modify or add what is necessary for the company's activities.

### Main Grid

**Code/Description**: code and corresponding description to call the VAT rate being parameterized, identifying the numerical rate.

**Secondary description**: additional description that can be used for customized print reports, etc. (usually not necessary).

**Percent Completed**: defines the VAT percentage to apply. For exemption, exclusion, and non-taxable codes, you must set it to 0.

**VAT cat.**: recalls the fixed VAT types provided by the management system. The type is very important, for example, for the totalization of various movements in the quarterly communication of VAT liquidations and more generally for all VAT declarations. The options available for Italian localization are:
    - *Rate*
    - *Non-taxable*
    - *Exempt*
    - *excluded*
    - *74 ter EU*, for travel agencies
    - *74 ter NON-EU*, for travel agencies
    - *74 ter EU PART*, for travel agencies
    - *74 ter NON-EU PART*, for travel agencies

**Non-deductibility Percentage**: defines the percentage of non-deductibility to be applied to the tax. It will be reported within the accounting record in the VAT section for the actual calculation of the non-recoverable portion; it can be modified or forced directly in the record.

**Plafond**: this flag defines which rates are linked to the declarations of intent: only the rates that have this flag active will make visible, in the VAT grid of the accounting registration, the combo box for linking the declarations of intent.

WARNING: this flag is irrelevant for managing declarations of intent in the purchase/sale document cycle: here only what is set within the respective register of issued/received declarations of intent is relevant.

For the calculation of the general ceiling, this flag also identifies the rate that "**consumes**" our available general ceiling month by month as habitual exporters (within the ceiling management procedure), thus on the purchase side.

**Foreign sale for plafond**: with this flag, the VAT rates present in the sales records of the year yyyy are identified, which **increase** our available ceiling for the year yyyy+1 as habitual exporters.

**In VAT Declaration**: the flag sets which rates are to be managed in the declaration/quarterly communication of VAT liquidations and more generally in all VAT declarations. Example: typically the codes corresponding to the VAT category *Excluded* will have this flag <u>not</u> active, while the *rates*, the *exempt*, and the *non-taxable* will have the flag active as they must be included in VAT declarations. (See the ministerial instructions for the annual VAT declaration or the quarterly communication of liquidations).

**Not intra**: the flag sets the rates that, although used in documents (in the purchase/sale invoice forms) or in intra-CEE registrations, should not be considered as such. It is read in the automatic creation of Intrastat summaries.

**Rep. San Marino**: the flag determines which rates are used in operations with San Marino (Obsolete, communication revoked).

**% Deductible VAT**: the field sets the percentage of fixed non-deductibility of the rate in the case of movement under agricultural regime.

**Consent VAT 0 in journal**: the flag imposes the registration of VAT lines with amount 0 both debit and credit in the Journal. The [**accounting reason**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) used must still provide the same type of authorization for the lines to be 0.

**Gold Silver Import**: the flag allows setting which rates should be summarized in the fields provided in the annual VAT Communication. (Considered currently obsolete)

**Scrap Import**: the flag allows setting which rates should be summarized in the fields provided in the annual VAT Communication. (Considered currently obsolete)

**Not in client/vendor**: the flag allows excluding VAT movements connected to this rate from the *spesometro*. (Considered currently obsolete)

**PA Code**: In this field, the code for electronic invoicing between individuals and towards the public administration must be entered in cases where VAT is not present (exemption, exclusion, non-taxable). For details of the expected codes, refer to the technical specifications of electronic invoicing published on the Revenue Agency's website.

**Exclude from intent declaration**: flag currently not used in practice by any procedure. Developed to set, if necessary, that the corresponding VAT rate, with the active flag, cannot be overridden by the VAT code set in the declaration of intent register as the code to be used for operations with exemption in front of the declaration of intent.

**Exclude from automatic template**: by activating this flag, the corresponding VAT code is not included in accounting records automatically generated as it is connected to the main accounting reason through the *Automatic template* field.

:::note  Note
The use of the flag becomes **essential** in a particular case: think of receiving a **"mixed" purchase invoice**, where the supplier has invoiced part **in reverse charge** and part in ordinary regime. Therefore, on the ordinary part, there will be the deduction of VAT on the purchase, while the portion in reverse charge will be neutral as it is recorded both in the purchases register and in the sales register. By appropriately differentiating the VAT codes used, for example by creating a "Mixed reverse charge deductible portion" code and activating this flag on this code, if in the main purchase registration the amounts corresponding to the two codes (e.g., 22 for the reverse charge portion and "Mixed reverse charge....") are allocated, in the automatically created journal entry only the code 22 will be reported, automatically generating the deduction only on the portion excluded from the reverse charge mechanism.
:::

**VAT for Automatic Reasons**: this field is used to force a particular VAT code in the accounting record automatically generated (e.g., a journal entry for reverse charge), compared to the one used in the main registration (e.g., that on the purchase side in reverse charge).

:::note Note
The use of the field becomes **essential** in a particular case: consider receiving a **reverse charge purchase invoice with partially or totally non-deductible VAT**. By default, the software would set the same VAT code also in the sales side journal entry, and the non-deductibility percentage effectively results in a "non-taxability" for the equivalent portion. Thus, the effect would always be neutral. To claim limited deduction instead, it is necessary that all VAT on the sales side is taxable, thus leaving the non-deductible portion as a cost on the purchase side. To avoid manually entering the automatically generated journal entry to correct the VAT code (for example, code 2250 that has a deduction limited to 50%) by replacing it with code 22, it is possible to set this field which will automatically provide for correction.
:::

**Expiration Date**: the code will no longer be usable after the set date, useful for blocking the use of codes that are no longer in force.

**Base for stamp count**: since the stamp duty in the invoice is automatically entered only when there are exempt, excluded, or non-taxable VAT codes (the *VAT Category* of the code itself is detected) and the invoice exceeds a certain amount (set in the company registration’s table), the meaning of this flag is to manage certain cases that, although exempt or non-taxable or excluded, make exceptions and do not foresee the application of the stamp duty. In these cases, the flag must be deactivated.

NOTE: in case of incorrect activation of the flag on codes of type Rate, the reading of the VAT category prevails and therefore the stamp duty is NOT entered.

**Reverse charge**: see [**here**](/docs/finance-area/particular-cases/mixed-reverse-charge).

**Margin VAT / Reference Margin VAT**: see [**here**](/docs/finance-area/particular-cases/VAT_regime-del-maine).

### VAT Accounting Type

In this section, you can define for each VAT rate one or more sub-accounts for VAT purchases/sales (a necessity typically associated with non-Italian localizations, such as those in Eastern European countries, where there is an obligation to account separately on sub-accounts for the application of reduced VAT, rather than normal or increased VAT). It is also possible to associate these accounts to a *VAT accounting type* to be coded in the appropriate [**table**](/docs/configurations/tables/finance/vat-accounting-types), assigned to the customer/supplier within the registry, or provided by default in the [**general accounting parameters**](/docs/configurations/parameters/finance/accounting-parameters).

**Type / VAT Accounting Description**: code / description of the type of VAT accounting (not a mandatory field).

**Purchase account**: the purchase account to propose for this type of VAT accounting.

**Purchase detail acc.**: the purchases sub-account to propose for this type of VAT accounting.

**Description**: description of the purchases sub-account to propose for this type of VAT accounting.

**Sales account**: the sales account to propose for this type of VAT accounting.

**Sales detail account**: the sales sub-account to propose for this type of VAT accounting.

**Description**: description of the sales sub-account to propose for this type of VAT accounting.

### Notes 

**Code**: numeric code for identifying the rate.

**Notes**: any notes to be added.

### Specifications for Declaration 

In this section, you can parameterize the various VAT codes used in accounting records in such a way as to obtain a print report (to be created as needed using the integrated report designer in Fluentis) that represents a facsimile of the annual VAT declaration. The report will aggregate the various VAT codes used throughout the year to display the various totals to be reported in the lines of the tax declaration. Therefore, it is necessary to match each VAT code with the correct line of the declaration where it must be entered, referring to the ministerial instructions and the specific logic of the declaration in question.

**Operations**: Call the type of operation via the combo box: Active, passive, or Reverse charge to distinguish the portion of VAT operations entered with the corresponding code to be included in the lines of the declaration regarding purchases, sales, or reverse charge.

**Tax Declaration Line / Description**: Call the line (code and description) of the VAT declaration to be associated via the combo box (the list is preloaded and not modifiable by the user).

### VIDEO TUTORIALS

:::important See Also
[**VAT RATES VIDEO TUTORIALS**](/docs/video/finance/intro)
:::