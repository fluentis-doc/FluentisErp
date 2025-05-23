---
title: Bills from Maturity Value Issue
sidebar_position: 2
---

The form can be found in Treasury > Bills Holding > Procedures > Bills from Maturity Value Issue.

From this form, it is possible to perform a *wizard* that simultaneously executes:

- The search for customers' open transactions suitable for the creation of bills (for example, a bank receipt)
- The creation of the bill (for example, a bank receipt) by reading the transaction data
- The accounting of the bill which, in turn, closes the open transaction and creates the ledger record for the customer credit reversal and the credit to the account associated with the type of bill used.

## How to Automatically Create a New bill from Open Transactions

1. Use the top part of the form to filter the search for open transactions to transform into bills (for example, Bank Receipts or promissory notes).

:::note[Note]
There are some search flags present at the bottom of the filter area:

- according to the setting of the [**due date grouping**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) for customer registries; by default, both groups are enabled and therefore visible, with and without due date grouping in the bills
- To also view active transactions of suppliers (disabled by default) in addition to those of customers (enabled by default)
:::

:::tip[Attention]
Only the accounting transactions connected to payment types of a bank receipt or promissory note are **VISIBLE** in this section.

This is a preliminary filter, active for security reasons, which can be managed from the [**Payment Types**](/docs/configurations/tables/general-settings/payment-types) table by matching each payment type with the corresponding bill type.
:::

2. Select with the mouse from the central grid the transactions you wish to acquire into the bills. Depending on the setting of the flag *Group due dates / Group credit notes into bills*, found in the [**customer registries**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments), and the flag *Group credit notes by due date*, present in the [**bills portfolio parameters**](/docs/configurations/parameters/treasury/bills-portfolio-parameters), the transactions will be grouped (**with the same supporting bank and due date**) or will create separate bills in any case.

3. In the lower part of the form, set the **issue date** of the bills and the **bill type**.

The **accounting** section can be set by default within the parameters of the bills Portfolio module. However, it can still be enabled and disabled from here before proceeding to initiate the acquisition.

The accounting procedure, if not activated simultaneously with the creation in this form, can be launched later [**from the specific form**](/docs/treasury/bills-holding/accounting/bills-accounting). The ledger record generated will reverse the credit towards the customer, closing the related open transaction and crediting the account related to the selected [**bill type**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types).

The flag **group by bill account** executes a single entry, with as many lines as there are bills to be accounted.

The **provisional management** flag will generate provisional accounting entries.

:::danger[Attention]
The **management of the acquisition of bills from transactions** is an alternative to the acquisition from invoices.
:::

4. Press the button in the ribbon bar **Acquisition** to start the procedure.

#### Specific Buttons

> **Search**: Searches the list of transactions for which to create the bills.

> **Transfer**: Executes the creation of bills for the selected transactions.

### Previous

Once the creation is executed, the rows will disappear from the *filter* grid and the result will be visible in the **Previous** tab, where it is possible to cancel the operation.

It is not possible to cancel the creation of bills if they are accounted for or presented in the summary.

#### Specific Buttons

> **Search**: Searches the list of executed creations.

> **Rollback acquisition**: This button will delete all the acquisitions made, along with all associated bills.

> **Rollback Bill**: This button will delete the creation of the selected single bill.