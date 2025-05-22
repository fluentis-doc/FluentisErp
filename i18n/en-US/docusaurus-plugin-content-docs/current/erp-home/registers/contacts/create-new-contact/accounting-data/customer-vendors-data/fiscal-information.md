---
title: Fiscal information
sidebar_position: 2
---

In this tab, data and parameters of a predominantly tax-related nature are entered.

### Fields

**Not in client/vendor**: an obsolete field present for backward compatibility (Referring to the spesometro prior to 2017, which was abrogated). The flag is still functional as the annual spesometro feature (art. 21 DL 78/2010) is still present.

**Exclude from black list declaration**: obsolete field present for backward compatibility. The tax compliance requirement is currently abrogated.

**Cig**: the flag activates the specific field within sales documents to indicate the tender identification code (e.g., for public contracts). The code must then be entered in the [**appropriate table**](/docs/configurations/tables/finance/cig-and-cup) to be recalled.

For the correct management of CIG and CUP codes in electronic invoice layouts, since the relevant tag is a child of the order data, see [**here**](/docs/finance-area/e-invoice/configuration_einvoice).

**CUP**: the flag activates the specific field within sales documents to indicate the unique project code (for invoicing to public entities). The code must then be entered in the [**appropriate table**](/docs/configurations/tables/finance/cig-and-cup) to be recalled.

For the correct management of CIG and CUP codes in electronic invoice layouts, since the relevant tag is a child of the order data, see [**here**](/docs/finance-area/e-invoice/configuration_einvoice).

**Withholding tax**: the flag, to be associated with the subsequent field Type of withholding, activates the management of withholding tax on income for supplier-type registries in use. With this type of management activated on the supplier side, the entry of documents and the accounting of the received invoice and the payment made will occur from the [**Receivers**](/docs/finance-area/professional-men/general-overview) module to manage withholding tax properly and automatically value CU.

**Withholding-tax type**: the field (dropdown) is linked to the [**Withholding Tax Types**](/docs/configurations/tables/finance/withholding-tax-types) table, within which types of withholding for advance payments (or tax purposes) to be used are defined. For each row corresponding to a type of withholding, the fields necessary for the automatic management of calculation and accounting by the [**Receivers module**](/docs/finance-area/professional-men/general-overview) must be filled out. 

***USE OF THE Withholding and Type of Withholding FIELDS IN ACTIVE INVOICES***
It is possible to activate the flag for withholding taxes and the related type also for the purpose of issuing an active invoice if the issuing company is subject to withholding tax (withholdings suffered). **See also** [**here**](/docs/finance-area/e-invoice/configuration_einvoice).


:::tip See also...
For managing withholding tax in the electronic invoice and particularly also the ENASARCO contribution, see [**here**](/docs/finance-area/e-invoice/configuration_einvoice).
:::

**Split Payment**: flag to mark subjects under the Split Payment regime, whether they are private entities (listed companies, etc., subject to the specific regime) or Public Administrations (in this case, the same flag described below will also be activated). The activation of this flag manages the deadlines in the invoice and sets the calculation of the amounts to only taxable.

### Public Administration / Electronic Invoicing

The flag **Public Administration** determines the adaptation of the detail fields of the underlying grid to refer to the case of electronic invoice P.A. or electronic invoicing with private parties.

**Office Code / Recipient Code**: *IPA* code of the public office recipient of the invoice or (if the *Electronic invoicing* flag is active) *SDI* code of the invoice recipient.

**Office Name / Recipient Description**: description of the office code / recipient code field to be filled in with the name of the public office or private entity.

**Company name**: in this field, it is possible to link a registry already coded in Fluentis referring, for example, to the public office dependent on the main registry that we are using (e.g., public works office of the municipality of ..., or health company ....... that depends on the main registry "Municipality of ...."). This linked registry **must** be set as **destination** for the main registry in the [**delivery**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery) tab so that the destination (e.g., public works office ....) will be included in the .xml file layout complete with office code and other data such as address, etc.

:::danger[WARNING: company name field, simple registry with a single code]
For the proper management of **multiple office codes / SDI codes** (and therefore multiple subjects) referring to the same main registry, it is **necessary** to fill out this field as well. 

**WARNING:** in the case of a **single office code / SDI code** directly linked to the registry in question (without the presence of connected destinations related to specific office codes / SDI codes), **the field MUST NOT be filled out**. 
Otherwise, an error message will be returned when generating the xml file. (Message: the invoice... cannot be generated because... the recipient code has not been populated, or the service start date....) to be interpreted as "has not been populated *correctly*".
:::

**Starting Date**: defines the date of entry of the line or the date from which the supply relationship with the public administration in question is active.


<a id="codice_articolo_fornitore_cliente" style={{ textDecoration: 'none' , color: 'inherit' }}></a>


**Ending Date**: defines the date of the end of the supply relationship with the public administration and makes this position no longer usable for generating the telematic file for the electronic invoice.


**Email:** reserved space for the PEC address in case the recipient *Code type* mode is active.

**Tax system**: field necessary for managing electronic invoices (especially self-invoices for EU purchases or reverse charge): the data is entered in the *.xml* telematic layouts generated by Fluentis. The combo box is linked to a fixed table containing the possible tax regimes to select from.

**Supplier / Customer article code type:** in these two fields, respectively, it is possible to enter an accompanying code to the article code to be used in passive or active invoicing for the xml layout. This feature is useful in various cases such as the automatic creation of purchase invoices from the received xml file, allowing recognition of the article code used by the supplier in relation to the settings of the article registry in the preferred suppliers section.  

**Net Price WIth No Discounts**: with this setting, the electronic invoice will be created for the net line value, without highlighting the detail of gross - discounts.

**Signed Electronic invoice**: management of the digital signature for the creation of Sdi files to the subject. The flag can be set, not set, or 'not definitive'; in the latter case, the default logic defined in *Electronic document configurations* will apply.

**Attachment in Electronic invoice**: management of the courtesy attachment in the Sdi file. The flag can be set, not set, or 'not definitive'; in the latter case, the default logic defined in *Electronic document configurations* will apply. In the **Arm Transformation for pdf invoice file creation** field, the process of creating the pdf to be used will be indicated.

**VAT Group / Registry:** a field necessary for managing the VAT group to which the customer or supplier we are coding belongs. In this field, the registry (to be created previously) of the group leader will be recalled to insert its VAT number into the xml layout instead of that of the subject adhering to the group, as provided by the regulations. 

:::tip Info: VAT group
With the introduction of this regulation, the possibility has been provided for companies connected by financial, economic, and organizational interests to create a single group, considered as a single taxpayer (for VAT purposes) towards the tax authorities. It will, therefore, have a single VAT number. Companies that are part of the group will invoice operations towards third parties with a common VAT number, the group VAT number. In contrast, transfers of goods and services exchanged between the companies within the group will not be relevant for VAT taxable purposes. Consequently, all operations carried out by any of the subjects of the group are considered to be conducted by the entire group. The invoice and other documents are issued by the representative of the Group or by participants indicating, in addition to the group's VAT number, the tax code of the participating subject that has carried out the operation.
:::

### Limit for Expiration of Perishable Goods

**Art. 62**: flag that manages the activation of the maximum payment deadlines in the food sector for perishable and non-perishable goods according to art. 62 D.Lgs. n. 192/2012; in particular, when entering items in the invoice, it checks the payment deadline against the mandatory deadlines for this type of products. It is managed with the following two flags:

> **Solution in less than 30 days**: imposes a payment solution at 30 days bypassing other settings (including those related to art. 62, for example, the solution at 60 days).  
> **Solution under 60 days**: NOT MANAGED / DEACTIVATED

There are other settings regarding the **management of perishable goods**:  
> **GG Pag. merce deperibile** within the [Item Registry > General tab](/docs/erp-home/registers/items/create-new-item) where the expiration to be applied is defined;  
> **GG ricev. fattura** in *Customer/Supplier Registry > General tab > Alternative Addresses tab*, useful for complying with the certain date of receipt of the invoice (for the field to be enabled, the type of address linked to the alternative address defined in the [Address Types table](/docs/configurations/tables/general-settings/address-types) must have the *Email Invoice* flag set);
> **Days transport** in the *Zones* table, a field that can be entered in the *Customer/Supplier Registry > [Delivery tab*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery). 

### Logic for Calculating Payment Expiration

The payment expiration is proposed starting from the invoice effective date. 

 The effective date is automatically calculated as follows:

 - initially equal to the greater of the entry date and the invoice date, 

 - then if the billing email address type has days of invoice receipt set, the invoice date is added to the days of invoice receipt, the effective date becomes the greater of the effective date and invoice date + days of invoice receipt.

 - if the billing email address type does not have days of invoice receipt set, it will check if there are transport days in the zone code associated with the customer and the invoice date will be added to the transport days, the effective date becomes the greater of the effective date and invoice date + transport days.

 - if there are no transport days set for the customer's zone, the effective date corresponds to the greater of the invoice entry date and the invoice date.

The user can, in any case, change the effective date and set the desired date; there will be a trace in the invoice that the effective date has been manually changed.

**To correctly propose the expiration date, 2 new payment solutions with the flag “DL Art.62” set must be coded, both with the end of the month flag set and the commercial flag set, one with 30 days and the other with 60 days.**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image04.png)

If the payment solution of the customer registry is better than that calculated for agricultural or agri-food items, such a solution will be maintained.

When manually entering invoices (even fulfilling the lines of the customer order), for the customer that has the Art62 flag set, it is only possible to enter items with the same payment type, so all items at 30 days or 60 days or without payment days. A message will prevent the entry of mixed items and warn that the payment solution will be automatically modified to the solution calculated based on the payment days of the items.

When creating the invoice from other documents (e.g., from DDT), the documents will be divided by the payment days present in the item, and multiple invoices will be created if there are items with different payment days in the same document.

### Fields Related to Managing SDD (Sepa Direct Debit – Direct Debits SEPA)

The Sepa Direct Debit, which replaces the previous national RID, is a pre-authorized collection tool following a direct debit mandate given by the Debtor in favor of their Creditor.

It is based on a prior agreement (mandate) between the Debtor and Creditor that allows the latter to request the activation of an interbank procedure to automatically debit the Debtor's account.

**Mandate purpose code**: in this field, the 'Purpose code' (usually the code “GDSV” [Purchase Sale Of Goods And Services]) must be reported.

**Client/mandate code**: in this field, the identification code assigned to the mandate signed by the debtor must be entered. It corresponds in the Rulebook (official technical document) to AT-01 Unique Mandate Reference.

 The field is not case-sensitive. For example, the identifiers 123AAa45678, 123aaA45678, 123aaa45678, and 123AAA45678 must be considered identical.

 It cannot be populated with spaces only and must contain only characters belonging to the basic Latin set.

*Example*: IT05394480900

**Changed mandate**: Flag currently not managed and should be left unselected.

**Mandate signature date**: in this field, the date of signing the mandate must be entered.

**First execution date / Last execution date**: since the SDD (like the "old" RID system) is a periodic execution by nature, this date range checks the beginning and end of the execution's validity.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image05.png)

For managing SDD, the following fields must also be filled out:

- **Customer unique code**

- **Creditor identifier**: example IT95ZZZ0000007333890900

In the **Companies table**

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image06.png)

:::tip[How to create an SDD list]
After filling in the necessary fields in the registry of the customer whose name is on the SDD and in the table with the data of our company, it is necessary to.

- Define a specific type of Effect "*SDD*" [**here**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) and associate it with the respective [**Payment Type**](/docs/configurations/tables/general-settings/payment-types#tipi-effetti)
- Define a specific type of list in the effects portfolio, see the Utilities field [**here**](/FluentisErp/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-list-presentation-types)
- Use the procedures [**Creation of bills from maturity values**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) or [**Creation of bills from due dates**](/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values) to generate an effect of type "*SDD*"
- Create a [**new presentation list**](/docs/treasury/bills-holding/lists-ceation-and-management) of type "*SDD*" and insert the "*SDD*" effect within it
- Use the **SDD Export** button in the ribbon bar (enabled by the specific type of list set with the Utilities flag) to generate the specific banking layout valid for SDD.
:::


### OTHER

**Joint holders management**: the flag activates the management of co-owned sales invoices.

This case is common, for example, in the sale to private individuals of goods that can be the subject of tax deductions from income tax; if the expense is borne by multiple people, the invoice must be issued to both to enable the deduction.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image07.png)

With the flag active, an additional tab will be displayed within invoices addressed to the mentioned registry to enter the co-owners.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image08.png)

To recall the co-owners, it is necessary to code them in advance in the **Alternative Addresses** section of the General Data section.

To this end, it is necessary to define an address type with the **Co-owners** flag active within the **Address Types** table, to which the combo box of the **Address Type** field is linked.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image09.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image10.png)

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image11.png)

Then they will be included in the invoice indicating the percentage of expense sharing. 

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information/image12.png)