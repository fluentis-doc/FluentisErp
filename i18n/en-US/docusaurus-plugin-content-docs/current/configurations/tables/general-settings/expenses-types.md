---
title: Charges types
sidebar_position: 11
---

This table defines types of final expenses to be added to documents (particularly in the active cycle) for automatic charging.

They can then be added directly in the document, or in the customer registry for automating the entry of the expense.

### Item and VAT Hook Fields

**Type / Description:** Code and description of the expense for referencing it.

**Class / Code / Item Description:** field to associate the expense type with a reference item code.

**Account / Subaccount / Description:** necessary to associate a general ledger account on which to automatically charge the related expense.

**VAT / Description:** necessary to specify the VAT code (rate or exemption code) to which the expense charge will be invoiced.

**VAT Type:** VAT type for managing the charge (Unless specific cases or VAT regimes apply, indicate Generic).


### Hook Flags to Logic

**Miscellaneous:** identifies a miscellaneous expense with simple charging. The Miscellaneous expenses present in the documents are all reflected in the summary document that fulfills the documents themselves.

**Collection:** by applying this flag, the expense will be automatically calculated once for each installment of the bank receipt defined in the payment conditions (therefore it only works with this type of payment). Collection expenses are automatically subject to the main VAT of the document.

**Transport:** by applying this flag, the expense will be calculated on the invoice once for each DDT that contributed to generating the invoice; however, in the case of fulfilling multiple orders in one DDT, only one collection expense will be reported.      

**Packing:**

**Shipping:**

**Travel:** if enabled, the expense type will be proposed in the list of selectable expenses in the interventions of the Projects area.

**Travel expense type:** enabled only if the "Travel" flag is enabled, identifies the type of Travel expense: necessary to enable specific fields in the expenditures of the interventions (e.g., in the case of Distance, the km and km cost fields will be enabled, etc.)

**Stamp duty / Stamp value:** using this type with the respective value indicated in the adjacent field activates the stamp duty logic on the invoice in the case of VAT exemption and documents exceeding 77 euros (see current regulations for details), in addition to the valuation of the corresponding tag in the electronic invoice.

:::note[Info]
The logic, in detail, provides that if the customer has stamp duty expenses in their registry, the taxable value will be summed for the document lines having the VAT code included in the following categories: 

Non-Taxable
Exempt
Excluded

If the total (converted into the company's currency at the invoice header exchange rate) is greater than the **Roof minimum charges** of the **Stamp charges** section in the company table, it is added as a stamp duty expense.

The VAT codes of the types above must also have the *Base for stamp count* flag set.
:::

**Intra values:** with this logic, the final expense entered in the invoice will be distributed across the lines of the document for the purpose of creating Intrastat models via the automatic creation procedure (from invoices).

**Allocated:** the flag ensures that the warehouse registration has the expense distributed across the various lines of the invoice registration; this flag does not imply that the expense will be allocated in the registrations of the connected documents.     

**RAEE:**

**Mandatory VAT:**


### Other Fields

**Commodity Category:**

**Codes / Payroll Description:** code used to enter the expenses present in the interventions and activity declarations in the "Values" box of the Summary for employee payslips.

**Activity Type:** valid only for expenses of type "Travel" - Travel Hours. The activity type is used to automatically generate the activity declaration based on the travel hours declared in the expenses incurred for the intervention in the Projects area. 

**Activity Category:** valid only for expenses of type "Travel" - Travel Hours. The activity category is used in the automatically generated activity declaration based on the travel hours declared in the expenses incurred for the intervention in the Projects area. 

### Withholding Tax and Pension Fund

**Pension fund / Withholding Subject / PA Code:** fields to manage in the XML file of electronic sales invoices the *Pension fund* that can be applied in the invoice of a professional.

If the customer registry of the invoice has the [**withholding tax**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) flag active, in fact, a recipient using Fluentis could create a sales invoice and send it to the Sdi: if there is a charge for the Pension Fund expense (typically 4%), it codes this expense type in this table, then sets whether it is subject to withholding or not (with the second flag) and enters the code that the Sdi provides in the third field:


:::note Example of Coding

TC01	Nationwide pension and assistance fund for lawyers and legal representatives 

TC02	Pension fund for accountants

TC03	Pension fund and assistance for surveyors

TC04	Nationwide pension and assistance fund for engineers and architects in private practice

TC05	Nationwide notary fund

TC06	Nationwide pension and assistance fund for accountants and commercial experts

TC07	Nationwide assistance fund for agents and commercial representatives (ENASARCO)

TC08	Nationwide pension and assistance fund for labor consultants (ENPACL)

TC09	Nationwide pension and assistance fund for doctors (ENPAM)

TC10	Nationwide pension and assistance fund for pharmacists (ENPAF)

TC11	Nationwide pension and assistance fund for veterinarians (ENPAV)

TC12	Nationwide pension and assistance fund for agricultural employees (ENPIA)

TC13	Pension fund for employees of shipping companies and maritime agencies

TC14	National Institute of Pension for Italian Journalists (INPGI)

TC15	Nationwide assistance fund for the orphans of Italian health workers (ONAOSI)

TC16	Independent fund for integrated assistance for Italian journalists (CASAGIT)

TC17	Pension fund for industrial experts and graduated industrial experts (EPPI)

TC18	Pension fund and assistance for multiple categories (EPAP)

TC19	Nationwide pension and assistance fund for biologists (ENPAB)

TC20	Nationwide pension and assistance fund for nursing professionals (ENPAPI)

TC21	Nationwide pension and assistance fund for psychologists (ENPAP)

TC22	INPS

:::

---

**Languages**

For each type of payment selected in the upper grid, it is possible to define descriptions in various languages: usable for custom prints.