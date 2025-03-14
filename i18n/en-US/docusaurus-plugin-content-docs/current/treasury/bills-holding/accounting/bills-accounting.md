---
title: Bills Accounting
sidebar_position: 1
---

The form is located in Treasury > Portfolio Effects > Accounting > Accounting of effects.

From this screen, you proceed with the accounting of effects: the procedure, according to the settings of the accounting reason set, will close the customer entries associated with the selected effects.

:::tip[Note]
Generally, this procedure can be executed directly by performing ***automatic acquisition of effects from the entries*** where, by enabling the appropriate flag, this procedure is simultaneously executed.

**It is necessary to specifically access this form for the restoration of the accounting of effects**. 
:::

## How to Account for an Effect

1. Use the upper part of the screen to filter the search for the effects to be accounted for.

2. Select from the central grid the effects that you wish to account for.

3. Fill in the parameters for the accounting such as the **Ledger Records Template**, the **Posting date**, and the due date (data competenza).

:::note[Note]
This section can be predefined within the [**parameters**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) of the Effects Portfolio module. 

The **grouping by effect account (raggruppamento per conto effetto)** flag means executing a single entry where there will be as many lines as there are effects to be accounted for, and in counterpart, the account associated with the type of effect (in the **Types of Effects table (tabella Tipi Effetti)**).

The **temporary management (gestione provvisoria)** flag will generate temporary accounting entries.

If the accounting reason requires the open items flag and the effect has been created manually without associating an item (or its amount is greater than the amount of the linked items), then a customer entry will be created in credit to be offset later.

Please note that it will not be possible to account for effects created from printed invoices when these have not yet been accounted for.
:::

4. Press the button in the ribbon bar **Bills Accounting**.

**Specific buttons**

**Search**: Searches the list of effects to be accounted for.

**Bills Accounting**: Executes the accounting for the selected lines.

### Previous Tab

From the *previous* tab, it is possible to proceed with the cancellation of the executed accountings. 

Cancellation will only be possible if the period is still editable (journal book printing and account closing not executed). 

Double-clicking in the recording section will allow viewing the related accounting entry.

There is a detail tab for viewing errors detected during the accounting process.

:::tip[Note]
The restoration of the accounting of the effect must **necessarily** be performed from this form.

At the time of creating the effect, it is indeed possible to launch its accounting simultaneously, but NOT the other way around. 

Therefore, it is necessary to first cancel its accounting from here, and then the creation procedure can be canceled, returning to a previous state (open customer entry and customer balance not yet offset).
:::

**Specific buttons**

**Search**: Searches the list of executed accountings.

**Rollback accounting**: Restores the selected accountings for all documents contained in them.

**Rollback bills**: Restores the selected accounting entry related to the individual effect. WARNING: this mode is only possible if during accounting the option to group by effect type was not activated (which generates unique entries for each type of effect).