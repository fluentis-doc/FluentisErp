---
title: Accounting of Unpaid on Disposal
sidebar_position: 6
---

The form is located in Treasury > Bills Holding > Accounting > Accounting of unpaid on disposal.

From this screen, you proceed to account for the bad debts assigned for payment to the supplier: the procedure, according to the settings of the accounting reason set, will reopen the customer accounts associated with the bad debt titles as well as the closed supplier accounts with the title assignment.

## How to Account for a Bad Debt on Assignment

1. Use the top part of the screen to filter the search for bad debts to be accounted for.
2. Select from the central grid the bad debts you wish to account for.
3. Fill in the parameters tab for accounting, entering data such as **Ledger Records Template**, **Posting date**, and **Competence date**.

:::note[Note]
This section can be predefined within the [**Parameters**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) of the Portfolio Effects module.
:::

The flag **Charges recourse** will manage the charge of expenses to the customer account, recording the related revenue according to the detail account entered in the screen itself (**Account / detail account for charging customer expenses**).

The detail accounts for **Protest expenses** and the **Transitory** account are taken from the module parameters, but they can be modified or entered each time.

4. Press the button in the ribbon bar **Unpaid accounting**.

**Specific Buttons**

**Search**: Searches for the list of bad debts to be accounted for.

**Accounting**: Executes the accounting for the selected rows.

### Previous Tab

From the *previous* tab, it is possible to cancel the accounting executed.

Cancellation will only be possible if the period is still editable (journal book printing and account closure not executed).

A double click in the recording section will allow viewing the related accounting record.

There is a detail tab for viewing errors detected during the accounting process.

**Specific Buttons**

**Search**: Searches for the list of executed accountings.

**Restore Accounting**: Restores the selected accountings.

**Restore Unpaid**: Restores the selected accounting record related to the individual bad debt.