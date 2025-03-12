---
title: Accounting data
sidebar_position: 1
---
In this tab, the **specific** information related to the current registry is defined.

Below is the procedure for matching a generic registry, defined as *Contact*, with a sub-account. This procedure activates all the details of the registry at that moment.

The detailed registries are divided into three categories: **Customers/Suppliers**, **Banks**, **Agents**.

Each category has different detail fields for different purposes; therefore, it is addressed in detail (link to specific sections).

### [Customer/Supplier Registry (Anagrafica clienti/fornitori)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/finance)

### [Bank Registry (Anagrafica banche)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/references)

### [Agent Registry (Anagrafica agenti)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/detail)


---

## Assigned Sub-Accounts (Sottoconti assegnati)

In the grid, the **Detail Accounts** assigned to the subject are displayed, which then determine the display of a series of *specific tabs* where information related to the different areas of the system will be entered.

### Sub-Account Matching (Abbinamento sottoconti)
:::tip[Procedure]
**To assign an accounting sub-account to the current registry** it is sufficient to position in the first column **Account type** and select a type *compatible* with the registry management (even if the dropdown menu displays all account types).
:::

:::note Note
The compatible types are: *Customers/Suppliers (Clienti/Fornitori)*, *Agents*, and *Banks*. The *Professional Men* are classified as suppliers, and within the detail data, specific settings for the management of withholding taxes are activated.
:::

Once the account type is selected, pressing the tab key to move to the subsequent fields, you will notice that **Fluentis** automatically assigns an account and a sub-account. Upon saving, the tabs with the detailed information will also be loaded.

The association between the account type (for example, customers, or, in case of a different account plan configuration, customers in Italy) and the accounting account of the account plan is defined by the [**Accounting Parameters**](/docs/configurations/parameters/finance/accounting-parameters). The association occurs when the year of the *Accounting Parameters (Parametri contabili)* matches the year of creation of the contact.

The sub-account is assigned automatically in a progressive manner.

:::note Note
Be aware that the progressive numerator does NOT account for any gaps in the progression (it is always possible to manually impose a specific sub-account as long as it is not already used).

It is recommended not to interfere manually with the numbering by leaving gaps, to avoid reaching the limit of numbering determined also by the configuration of the account plan (for example, sub-account code with two digits, three digits, etc.) without being able to add sub-accounts without changing the structure of the account plan or continuously intervening manually.

It is preferable to leave the assignment of the sub-account to **Fluentis**. Additionally, avoid intervening on the numbering of sub-accounts related to registries directly from the account plan.
:::

:::danger[Warning]
If, after selecting the *Account type* from the first column of the *Assigned accounts* grid, an account code and sub-account are not automatically filled in (and you are sure to have invoked an account type compatible with the registries), this indicates that the [**Accounting Parameters**](/docs/configurations/parameters/finance/accounting-parameters) section defining the correct matching of account types related to registries with the account plan has probably not been initialized (or has not been filled out correctly).
The incorrect configuration could also reside, further up, in the [**Account Type Table (Tabella Tipi Conto)**](/docs/configurations/tables/finance/account-types).
:::

:::tip
For each registry, it is possible to **simultaneously assign multiple sub-accounts**. The most frequent cases in practice are that of a supplier who is also a customer or a customer who is also an agent. In these cases, based on the selected row, the detail tabs also change.

This possible multiple matching optimizes and rationalizes the management of general data of the *Contact*.
:::


---

## VIDEO TUTORIALS ON REGISTRIES

:::important See Also
[**VIDEO TUTORIALS ON REGISTRIES (VIDEO TUTORIALS SULLE ANAGRAFICHE)**](/docs/video/finance/intro.md)
:::