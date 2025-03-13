---
title: Bills Accounting by Vendor
sidebar_position: 4
---

The form is located in Treasury > Effect Portfolio > Accounting > Accounting effects to supplier.

From this mask, the accounting of the effects forwarded to the supplier is executed: the procedure will close the account linked to the type of effects inserted in the list and will record the supplier payments entered in the list.

:::tip[Note (Nota)]
The accounting of the lists can only be performed for printed forwarding lists where the effects section is equal to the payments section.
:::

## How to account for an effect to the supplier

1. Use the top part of the form to filter the search for the lists to be accounted for.
2. Select from the central grid the lists you wish to account for.
3. Fill in the parameters for accounting such as the **Ledger Records Template**, **Posting date**, and **Competence date**.

:::note[Note (Nota)]
This section can be predefined within the [**parameters**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) of the Effect Portfolio module.
:::

4. Press the button on the ribbon bar **Lists Accounting**.

**Specific buttons**

**Search**: Searches for the list of effects to be accounted for.

**Lists Accounting**: Executes the accounting for the selected lines.

### Previous Tab

From the *Previous* tab, it is possible to proceed with the cancellation of the executed accountings.

Cancellation will only be possible if the period is still modifiable (journal book print and account closing not executed).

A double click in the section of registrations will allow viewing the related accounting record.

There is a detail tab to view errors detected during the accounting process.

**Specific buttons**

**Search**: Searches for the list of executed accountings.

**Rollback accounting**: Restores the selected accountings.

**Rollback lists**: Restores the accounting record related to the selected list.