---
title: POS accounting
sidebar_position: 4
---

The procedure is accessed via the path **POS accounting**.

A POS must satisfy a series of conditions to be accounted for: its header must have the *Printed* flag set, and the type of POS must contain the general reason for accounting.

:::danger[Attention]
The **Account** field defined in the POS header is not relevant for managing **Accounting**. The associated accounting reason must contain the definition of a **Fixed** Customer account detailed with a **Detail account** code (for example, an account "Customer collections"). The amount type on the line reason for the customer subaccount will be set as *Total Document / registration*.
:::

## Accounting

The form presents search filters at the top to identify and view in the grid the list of POS to be accounted for present in the system.

At the base of the form are some management parameters for accounting:

**Recording date equal to document date**: this flag enforces the accounting of each individual invoice to their issuance date.

If the flag is disabled, the next field, **Posting date**, becomes active, within which you can set a fixed registration date;

#### Specific Buttons   
> **Search**: to search for POS; all printed and unaccounted POS are proposed.  
> **Accounting**: executes the accounting of the selected POS, according to the defined settings.  

## Previous

The form displays the list of accounting operations performed in order to view and possibly cancel them through the appropriate buttons.

Cancellation will only be possible if the period is still editable.

**POS accounting**: grid with the details of the operations performed. It is populated after the search procedure, and operations can be selected to apply the ribbon functions.

The data in the lower grids, **POS** and **Ledger record** correspond to the operation selected in the upper grid. A double click in the sales point/accounting registration section will allow viewing the related sales point/accounting registration.

#### Specific Buttons
> **Search**: searches the list of accounting operations performed.  
> **Restore Accounting**: this button will delete all accounting performed, along with all associated POS.