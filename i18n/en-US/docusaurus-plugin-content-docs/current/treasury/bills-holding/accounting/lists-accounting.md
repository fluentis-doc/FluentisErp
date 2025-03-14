---
title: Lists Accounting
sidebar_position: 2
---

The form can be found in Treasury > Bills Portfolio > Accounting > Lists Accounting (Contabilizzazione distinte)

From this interface, the accounting of lists is performed: the procedure will close the account associated with the [**type**](/docs/configurations/tables/treasury/bills-portfolio-module-tables/bills-types) of the bills included in the list and will open the transitional account of the bank entered in the list.

::tip[Note]
Generally, this procedure can be carried out directly **within the list** using the appropriate button for its **Accounting**.

From this interface, it is possible to carry out a mass accounting of multiple lists.
:::

## How to account for a list

1. Use the upper part of the interface to filter the search for the lists to be accounted for. Accounting of lists can only be performed for printed lists.

2. Select from the central grid the lists you wish to account for.

3. Fill in the parameters for accounting such as the **Ledger Records Template**, the **Posting date**, and the maturity date (data competenza).

:::note[Note]
This section can be predefined within the [**parameters**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) of the Bills Portfolio module.  
:::

The **accounting on the maturity date (contabilizzazione in data maturazione)** flag: will split the recording of the list into the various maturity dates of the bills, adding the bank days set in the bank registry for the specified reason.

The **maturity date with value date equal to maturity date (data scadenza con data valuta uguale a data maturazione)** flag: will record the various bills on the different maturity dates but with the value date of the bank adjusted according to the bank days set in the bank registry.

4. Click on the button in the ribbon bar **Lists Accounting**.

**Specific buttons**

**Search**: Searches the list of lists to be accounted for.

**Accounting**: Executes the accounting for the selected rows.


### Previous Tab

From the previous tab, it is possible to cancel executed accountings.

Cancellation will only be possible if the period is still modifiable (journal book printing and account closure not executed).

A double click in the entry section will allow you to view the corresponding accounting entry.


**Specific buttons**

**Search**: Searches the list of executed accountings.

**Rollback accounting**: Restores the selected accountings.

**Rollback lists**: Restores the selected accounting entry.

There is a details tab for viewing errors detected during the accounting process.