---
title: Unpaid Accounting
sidebar_position: 4
---
The form is located in Treasury > Bills Holding > Accounting > Unpaid accounting

From this mask, you proceed with the accounting of defaults: the procedure reopens the customer accounts associated with the unpaid effects and, if necessary, generates an invoice for expense charges.

**Specific Buttons**

**Search**: Searches for the list of unpaid items to be accounted for.

**Accounting**: Executes the accounting for the selected rows.

## How to account for a default

1. Use the top part of the mask to filter the search for the unpaid items to be accounted for. WARNING: You must first proceed to their creation.

2. Select from the central grid the effects you wish to account for.

3. Fill in the accounting parameters such as the **Ledger Records Template** and the **Posting date**.

:::note[Note]
This section can be pre-defined within the [**parameters**](/docs/configurations/parameters/treasury/unpaids-parameters) of the Defaults module. 

In particular:

- the ledger template is proposed based on the parameters of the module, 
- the registration dates are suggested as today’s date; 
- the sub-accounts for **Protest expenses** and the **Temporary account** are taken from the module parameters but can be modified or inserted as needed.

The flag **Summary accounting** captures all the defaults presented to the same credit institution (bank) in a single entry: normally this option is not used, especially if the requirement for the date and invoice number has been inserted in the ledger template to be used.

The flag **Charges recourse** requires the detection of the expense charges to the customer: with this option, the section for managing the invoice for these expenses will be activated (below) instead of registering them directly in accounting. In this section, all fields must be set in order to create the sales invoice.

Finally, you need to enter: 
- the **payment type** and 
- the **Expiry date** to be assigned for reopening the account. Alternatively, the flag **Due date equals the effect due date** (gone unpaid) can be used.

Here too, the reading of the module parameters occurs to propose these two data points.
 
4. Press the button in the ribbon bar **Accounting**.

### Previous Tab

From the previous tab, you can proceed to cancel the completed accountings. 

The cancellation will only be possible if the period is still modifiable (journal print and account closing not executed).

A double click in the recording section will allow you to view the related ledger record. 

There is a report for viewing errors detected during the accounting process.

**Specific Buttons**

**Search**: Searches for the list of completed accountings.

**Rollback accounting**: Restores the selected accountings.

**Rollback unpaid**: Restores the selected ledger record.

There is a tab to view the errors recorded during the accounting process.