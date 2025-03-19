---
title: Payments 
sidebar_position: 3
---

In this form, you can specify the default commercial conditions regarding payments/collections.  

*Specific buttons*:
> Delete banks: to remove the selected supporting bank.  
> Delete payment type: to remove from the payment types grid.  

For everything not detailed in this document on the common operation of forms, please refer to the following link [Functionality, buttons, and common fields](/docs/guide/common).

### Payment Types 
:::tip[ ]
The key section of the **Payments** tab is used to set the logic for calculating deadlines. You select the **Payment Type** and the **Payment Term** (both found under *Configuration > Tables > General Settings*).
:::


**Amount**: allows for the calculation of a deadline by imposing the specified amount; the remaining balance must be managed with lines having the Percentage field filled in. If the total of the document is less than the value of the Amount field (even with lines having the Percentage field filled in), an error message will be sent during the creation of deadlines in the document, asking for correction of the setting as it is not consistent.

<u>Attention</u>: this field is rarely applied in practice; moreover, within documents, during deadline calculation, it is used and filled in by automatic procedures as follows: when multiple DDTs are valued, for example, in an invoice, a situation arises where there may be different payment conditions in the delivery notes. Then, in the invoice, as many payment lines are created as there are types of conditions, grouping the amounts (sum of DDTs with that condition) and entering that value in the *Amount* field, an additional "residual" line is created, where, utilizing the *Percent Completed* field, 100% of the “residual” value (if any) is managed with a payment condition determined by the registry. This “residual” value typically captures any additional amounts directly charged on the invoice (and thus not present in the delivery notes) such as *collection fees, transportation fees, stamp duty*, etc. This filling in of multiple lines (at least two, one for the DDT deadline and one "residual") will also occur if a single DDT is valued. This management is imposed by the DDT valuation parameter, in the section *Payment treatment in invoice* with the option *Keep those from delivery notes*. Conversely, choosing *Restore nomenclature data* will result in all deadlines being grouped with the only condition present in the registry. It is noted that in invoice printing all calculated deadlines will be reported as they appear on screen. If desired, it is possible to customize the print so that it only reports the line actually used (i.e., it does not report the “extra” line if it does not link to any deadlines).

**Percent Completed**: allows defining the share (in percentage) of the total value of the payment (or collection) to be managed with the payment condition (as a combination of payment type and payment solution) set in the line.

If the percentage is less than 100, then as many lines should be created with percentages that sum to 100.

*Example*: <br />
- 50% Cash upon invoice and 50% Bank transfer at 30 days.<br />
- 50% Cash upon invoice; 25% Bank transfer at 30 days; 25% Bank transfer at 60 days.<br />
![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image03.png)  ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image04.png)

<u>Attention</u>: if the payment solution provides for more than one deadline, it will be filled in this way: for example, 50% cash on delivery and 50% bank transfer at 30 - 60 days.

**![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image05.png)**

**Presentation bank**: represents the reference bank for the transactions.  
- For the customer registry:
> - if the payment type is bank receipt, the customer's bank must be indicated;  
> - if the payment type is bank transfer, the bank of the operating company must be indicated (so that payment references for the customer are included in document printing);  

- For the supplier registry:
> - if the payment type is bank transfer, the supplier's bank will be indicated;  
> - if the payment type is bank receipt, the bank of the company will be indicated.

The field is filled in through a combo box (**Bank**) linked to the table [*Presentation bank*](/docs/configurations/tables/general-settings/reference-bank). Within this table, both the banks of the company and those of the counterpart (customer or supplier) can be entered. Additionally, it is possible to input rows complete with IBAN and/or SWIFT (recommended for the company's banks) as well as rows complete with only ABI and CAB (recommended for counterpart banks for which IBAN and SWIFT can be provided in the grid fields present in the registry).

If the row present in the Supporting Bank table is complete with IBAN and/or SWIFT, as well as with ABI and CAB, invoking that row via the combo box will populate the data in the registry grid; otherwise, only ABI and CAB will be populated, but it will always be possible to add the missing data directly in the grid. This is advisable for counterpart banks to avoid coding too many rows in the Supporting Bank table used only for a single customer or supplier. It is preferable to indicate only the street bank data (ABI and CAB) where different customers or suppliers may have current accounts.

Entering a bank can also be performed through a double-click in the abi/cab fields to open the search help among national bank branches, from which to select the appropriate one and create the code in the registry to complete with current account data, cin, iban, swift. Upon saving an Iban, **Fluentis** will perform syntactic checks on its structure, indicating any errors in the number of characters or the control character.

**Bank description**: field related to the previous field.

**Bank code**: field NOT used in Italy. For foreign localizations, it can hold an alternative bank code compared to the ABI CAB system.

**Search configuration**: with this field, you can link the line to a logic of attribution at the Customer Order level, through extra data related to the Order type.

:::tip note
With this setting, essentially, we can set that for orders of type X the customer will pay us with Riba at 60 days, while for orders of type Y they will pay us with Bank transfer at 30 days.
:::

### Presentation bank

In the grid, you can insert the Presentation banks of the counterpart.

Among these, the one set as **Default** (with the same flag) can be used as the beneficiary bank for supplier bank transfers in the *Supplier Payments* module.

In this case, the bank entered in this grid will be set in the transfer file, replacing the one present in the accounting registration (the latter defined, in the accounting registration, manually or through the data entered in the registry in the upper Types of Payment grid) and linked to the open transaction.

*Attention*: to activate the replacement of the supporting bank mentioned above, it is necessary to activate the flag *Enforce the Presentation bank* present in *Supplier Registry > [Supplier Payment Parameters](/docs/configurations/parameters/treasury/vendor-payments-parameters)*.

If the flag is active in the *Supplier Payment Parameters* form but no banks with the active default flag are inserted in the grid, the bank indicated in the accounting registration will be maintained through the data entered in the registry in the upper grid *Types of Payment* (or modified manually in the registration).

This way, it is possible to insert alternative supporting banks (still of the counterpart). Another example can be from a customer who pays by bank transfer (and so the bank of our company is entered in the Payment Type grid) but whose supporting bank is desired to be entered in case of payment of credit notes.

Entering a bank can be performed through a double click in the abi/cab fields to open the search help among national bank branches, from which to select the appropriate one and create the code in the registry to complete with current account data, cin, iban, swift.

**Beneficiary**: the flag activates the reading of the beneficiary company's business name field.

**Beneficiary company name**: enter the registry data in case payments are to be made out to a third party (e.g., a group financial company).

### Month of Deadline Exclusion 

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments/image07.png)

In this grid, it is possible to set an automation that defers all deadlines related to one or more months (by entering multiple rows) and postpones them to a predetermined day.

**Month except**: Month for which you want to postpone deadlines.

**Day**: Day to which postponed deadlines should be moved.

**Month**: Month to which postponed deadlines should be moved.

*Example*: filling in as shown in the image, all deadlines for the month of August will be postponed to September 5.

If you also input a row December - 7 - January, deadlines for the month of December would be postponed to the 7th of January.

### Lower Section

The type of calculation of the transaction allows defining whether the calculation base of transactions is only the taxable amount of the document (for example for intra-community suppliers or those accounted for in a reverse charge regime, where the VAT integrated into the document does not need to be managed at the deadline level) or taxable + VAT (which is the default logic even if nothing is indicated in this field).

**Use open maturity**: the flag is proposed by default and is mandatory to manage open transactions automatically.

In the accounting causal parameters configuration, it is possible to define a check to ensure that there is a correspondence between the accounting balance and the transaction balance;

**Calculation type**: combo box that allows choosing between the two alternative methods: taxable + vat or only taxable. The only taxable method is recommended, for example, for intra-community suppliers and in "reverse charge" regime or for customers subject to VAT "split payment" cases.

**Groupe Mat. Val.**: currently not managed; allows grouping transactions that have the same due date in the same registration (for example for months of exclusion);

**Group Deadlines in Effects**: allows grouping multiple transactions/deadlines in a single effect in the effects portfolio module (they will be grouped in case of the same due date and same supporting bank);

**Group Credit Notes in Effects**: allows reversing, in effect creation, also credit notes that have the payment type to be managed in effects. If the flag is not active, open transactions related to credit notes will not be displayed in the transaction search form for the procedure [effect creation from due transactions](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values).

The aforementioned parameter must be combined with the flag **Group credit notes by due date** present in the [Effects Portfolio Parameters (Parametri portafoglio effetti)](/docs/configurations/parameters/treasury/bills-portfolio-parameters) 

If the flag for grouping by due date is activated, the transaction (or transactions) related to the credit note with a payment type consistent with the issuance of effects will be grouped (reversing the active transactions) only if it has the same due date as the transactions selected for issuing the effect. Conversely, if the flag is deactivated, the credit note will be grouped by reversing the overdue transaction to the first due date (provided, of course, that the flag *Group Credit Notes in Effects* in the registry is active).

**Exposure control**: this flag will make this subject visible in the summary masks of the [customer exposure (esposizione clienti)](/docs/treasury/customer-risk/procedures/customer-statement).

**Days Late** is a statistical data calculated in the **customer risk** module (procedure [**remittance check**](/docs/treasury/customer-risk/procedures/remittances-check) and used in cash flow projections; it represents an **average of late payment days on the part of customers**, not only on current overdue transactions but also historically. The calculation involves a weighted average over the transaction amount. In fact, the calculation is based on processing the "credit numbers" (as in a bank statement). Within the **remittance check** form (in the ribbon bar at the top), there is the command **Update Late Days (Aggiorna gg ritardo)** that inserts the calculated result into the Late Days field in the customer registry.

**Granted Credit Limit**: is the amount of credit granted to the customer. For the correct management of this functionality, the flag **Credit** present in the tables relating to sales cycle document types (Invoice Types; Delivery Note Types; Customer Order Types) must also manage whether or not to include the document type in the limit check against the credit limit.

**Credit Limit Control Type**: allows defining whether the customer is subject to a single ‘**Reliance monitor**' (i.e., only one notification message will be returned for exceeding the credit limit) or a **document block and credit limit monitor** whereby the document that exceeds the credit limit will be blocked and must be authorized within the customer risk module (procedure [Lock manager](/docs/treasury/customer-risk/procedures/lock-manager)), or in a multi-company database the possibility of setting a **group monitor** or **group block** thus evaluating the overall situation of the subject concerning all the companies managed in the database and summing the total documents (it is recommended to set the credit limit amount equal and active across all companies). **Customer Group Block/Monitor** checks for group companies and thus verifies the head group's subgroup account (reads the head group's credit limit). It always totals the values of all group companies against the head group's credit limit. It ignores the value of the credit limit entered on the registries of branches.

In the customer risk module, there is a [credit limit management procedure](/docs/treasury/customer-risk/credit-management) that allows viewing the list of credit limit settings applied to all customer codes, without having to enter the individual registry.

**Insured Credit Limit**: is a simple indicative field for the amount covered by insurance, not influencing risk calculations.

**Note credit**: commercial notes on the granted credit limit.

**Credit revision date**: indicative field for the date of review of the commercial agreement with the customer regarding the granted credit limit.

**Dunning letter type**: type of payment reminder against the customer to be generated in the automatic reminder creation procedure.

The combo box is linked to the Types of Reminders table (Home>Tables>Administrative); the customer registry in use will be associated with one of the possible reminder types.

*Example*: you can create a standard reminder type and a special reminder type, for example, for historic or particularly important customers, with different text (perhaps softer).

**Agreement date**: is the date of the agreement on the calculation of late interest for payment delays.

**Interest Rate Type**: is the type of late interest rate to be applied to the subject based on the agreed agreement;

The combo box is linked to the [Rate Types table](/docs/configurations/tables/finance/rate-types) in Configuration > Tables > Administrative).

**Spread**: increase in the rate compared to the standard of its type.

**Authorization Level:** refers to the [**linked table**](/docs/configurations/tables/finance/authorization-levels/) of the combo box.