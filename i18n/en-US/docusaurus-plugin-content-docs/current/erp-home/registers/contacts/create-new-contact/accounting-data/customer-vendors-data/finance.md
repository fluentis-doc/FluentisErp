---
title: Finance
sidebar_position: 1
---

In this form, we find the following fields:

**Currency**: the field, required, is proposed by default based on the company's currency, but can be modified to have this proposal when creating documents and accounting records;

**VAT position**: it is the VAT rate to propose in the active/passive document cycle and in accounting records. 

:::note Attention
The priority for filling in the [VAT field](/docs/sales/sales-invoices/invoicing/sales-invoice) in documents is as follows:  
1. check for [Declarations of Intent](/docs/finance-area/declarations/declarations/intent-declaration), if present, and replacement of the VAT code contained therein;  
2. customer/supplier registry;  
3. item registry.
:::

It is advisable to assess, based on the logic of priority for filling in, whether or not to complete this field in the customer/supplier registry.

*Example*: if I fill in the field in a customer registry intra-EU inserting a VAT rate of non-taxability, this rate will prevail in documents over any ordinary rate entered in the item registry that goes into the invoice. This prevalence may not be appropriate in other situations and should therefore be considered.

**VAT acc. type**: the field allows defining, in combination with the settings for general accounting causalities, which VAT sub-account to use for the records registered to the subject in use. There is a default VAT accounting type within the accounting parameters (primarily used for non-Italian fiscal matters).

**Item Accounting Type**: for the invoice accounting of **Fluentis**, it allows defining the logic of valuation of the detail sub-account of purchases/sales, differentiating the counterpart (cost/income) from the customer/supplier named on the purchase or sales invoice.

*Example*: 

In the chart of accounts, I have account 500 Sales of Products with the following sub-accounts:

500-001 Revenues from Finished Products

500-002 Intercompany Revenues from Finished Products

500-003 Foreign Revenues from Finished Products

Item XYZ has sales revenue 'A – Revenues from Finished Products' in its registry, linked to accounting account 500-001 Revenues from Finished Products.

If my customer code 001 is Italian, the setting is satisfactory, sales line for item *XYZ* with sales revenue 'A' thus records the income in the correct account.

But if the sale is to a customer code 002 intercompany or to a customer code 003 foreign, to avoid the user having to remember each time to change the sales revenue (to B or C) on all document (invoice) lines to account for the document line in the appropriate account, it is possible to define the correct valuation for the specific registry, overriding the general setting.

 ![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image03.png)

The completion of the field is done via a combo box linked to the table [Item Accounting Type:](/docs/configurations/tables/finance/articles-accounting-types) where we will create, for example, an accounting type code 1 ‘Intercompany' and an accounting type code 2 ‘Foreign', and we will check the ‘Customer’ checkbox on both so that these two records are visible in customer registries. Then, in registry 002, we will set accounting type code 1 'Intercompany' and in 003 code 2 ‘Foreign'.

Then, it will be necessary to enter in the table [Sales Revenue](/docs/configurations/tables/sales/sales-turnover) corresponding to row 'A - Revenues from Finished Products' (in the grid below):

- a line accounting type 'intercompany' and account 400-001 Intercompany Revenues from Finished Products;

- a line accounting type 'foreign' and account 400-002 Foreign Revenues from Finished Products.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image04.png)

This way, the user will then only need to set the registry, and the settings will fill in the appropriate sub-account; the accounting will check for each sales revenue entered in the invoice if there is a detail with a specific account for the type entered in the customer.

Similarly, the setting operates on the supplier side, by checking the *Suppliers* box in the table [Item Accounting Type](/docs/configurations/tables/finance/articles-accounting-types) and updating the **Purchases Revenue** table.


**Sub-account for invoices to receive / issue**: indicate in this field the asset sub-account (prioritized over the default entered in the accounting parameters) to be used in the procedure of the purchasing area **Accounting of invoices to receive**, but also in the procedures for calculating balance adjustments or semi-annual balance simulations in case all the cost is to be included in the period balance. The fields are alternative and visible depending on whether the account type is *Supplier* (invoices to *receive*) or *Customer* (invoices to *issue*)


**Sub-account for credit notes to receive / issue**: indicate in this field the asset sub-account (prioritized over the default entered in the accounting parameters) to be used in the procedure of the purchasing area **Accounting of invoices to receive**, but also in the procedures for calculating balance adjustments or semi-annual balance simulations in case all the cost is to be included in the period balance. The fields are alternative and visible depending on whether the account type is *Supplier* (credit notes to *receive*) or *Customer* (credit notes to *issue*)


**Detail acc. for invoicing**: the field, managed exclusively for customer registries, allows defining which sub-account to use for attributing the invoice during invoice creation from delivery notes (DDT);

*Example*: consider large distribution.

Customer X store branch located in Sacile, which has in its registry the invoicing sub-account = customer Y (the parent company) located in Milan.

Our company delivers with DDT to store X in Sacile, then, when issuing the invoice, it should be addressed to the parent company customer Y in Milan.

An alternative (recommended) method is to always manage the registry of customer Y parent company in Milan and in its registry code the **[merchandise destination](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)** = customer X store in Sacile. This way, DDT and invoices are addressed to the same subject for greater clarity.

**Detail acc.-head group**: in customer risk analysis, it allows for grouping customers who belong to the same corporate group; 

**Payment sub-account**: this sub-account is associated with the accounting entries created, in order to be able to verify the flow of payments/collections in the prints of the receivable and payable schedules and in cash flow simulations;


**Default counterpart cost/income:** is the general accounting sub-account proposed by default in VAT accounting records; in case of documenting purchases/sales, this sub-account is the default value to use if no purchase/sales revenue has been entered in the item lines;


*Priority for filling* of account, sub-account fields, description in the **VAT Details** section of the **Accounting Record** document:  
1. Valuation of the [Sales Revenue](/docs/configurations/tables/sales/sales-turnover)/ **Purchases Revenue** present in the invoice being recorded and the account code, sub-account and description linked to each type in the Purchases Revenue / Sales Revenue tables.  
2. Customer/Supplier Registry  

**Alternative counterpart cost/income**: this grid allows predefining the list of sub-accounts and the corresponding VAT rate to propose in the VAT records addressed to the subject; to use this option, it is necessary that a default ‘VAT Position’ is set and no default counterpart cost/income is entered;


**Advance Account:** it is possible to define an advance sub-account associated with the customer registry itself (for example, a sub-account linked to the specific account type '*CA*' for Customer Advances with the related master account) and link it to the main account of the customer (the classic one with account type '*CIT*' linked for example to the Italian Customers master) through this field.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image05.png)

This sub-account will be used to value lines type 6 ‘deposit invoice’ and 7 ‘reversal of deposits’ present in sales invoices.

The deposit invoice will always be addressed to the actual customer and will have line type 6 ‘Deposit Invoice’ and sales revenue will record the generic debt, for example account Customers c/advances (as customary when the field in question is not used).

The result in accounting for the deposit invoice will be as follows:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image06.png)


It will be addressed to the actual customer and will have a line that reverses its value to reallocate it to the dedicated advance account.

In the final sales invoice, there will be a reversal line for the value already invoiced as customary.

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image07.png)


The result of the accounting for the final invoice will be as follows:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance/image08.png)

There will thus be the closure of the generic debt of the customers c/advances account as customary, and there will be the two reversal lines of the previous invoice's accounting.
From the balance (debit) of each advance customer account, therefore, one can understand the amount of outstanding advances for each customer.

ATTENTION: management of open accounts: in both accountings there are discrepancies between accounting movements and movements of the accounts, therefore the causalities **must not** expect the mandatory balancing of accounts.

---


**No accompanying invoices**: flag to prevent the creation of accompanying type sales invoices for the subject in use.

**Do not group by destination**: indicates that for the subject in use documents should never be grouped by destination during the document creation; this flag is considered in procedures present in the toolbar of Customer Order Searches, Supplier Order Searches, Work Order Searches.     

**Group by sales orders**: for the subject, the transport DDTs must be grouped by job to create sales invoices;

**Create invoices from DN to OC**: for the subject, transport DDTs must be grouped by **customer order** to create sales invoices;

**Gest. EDI**: enables the management of EDI files (functionality currently disabled);

**Intrastat/Service Code**: flag that enables the management of the intrastat declaration for documents/registrations addressed to the subject in use, if the document type is also of an intracommunity type; in case of a subject with the ‘Intrastat’ flag, it is possible to indicate the default service code for sections four and five of the intrastat declaration;

**Percentage intra expenses/Sign**: indicates the average percentage of expenses to add/subtract from the commodity value for calculating the statistical value in the intrastat declaration; the sign defines whether the expenses should be added or subtracted to obtain the statistical value of the goods in the intrastat declarations;

**Finance Category**: statistical data of the administrative category associated with the subject;

**Commercial category**: statistical data but also configuration of discounts according to the association criteria defined in the sales area price lists;

**Invoicing category**: filter criterion for the procedure of creating sales invoices from DDT;

**Customer commission category**: data that can serve for the attribution of commission percentages to agents linked to this customer, according to priorities defined in their registry;

**Responsible**: for customer risk analysis, internal subject responsible for the commercial aspect of the subject.

**Referene Company branch**: in this field, it is possible to associate the customer/supplier with a branch and, through this, with a different *division* of the company. In the accounting of sales invoices, there is a parameter with which to assign the accounting recording to this division while keeping all documents in the main operational one.


*Specific button*:
> **Calculation Discount**: to assign to the customer registry in use a discount configuration (defined in the *Sales > Sales Price Lists* module). The button is **active only within a customer registry**.