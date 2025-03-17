---
title: Credits Accounting
sidebar_position: 3
---

The form is located in Treasury > Bills Holding > Accounting > Credits Accounting 

From this screen, the final phase of the bills portfolio is proceeded with: the procedure will close the transit account of the presenting bank to credit the actual current account of the bank registry in the summary.

:::tip[Note]
**It is necessary to specifically access this form for this accounting, as no button is provided within the effect or the summary**. 
:::

## How to account for a credit

1. Use the upper part of the form to filter the search for effects to be credited: the accounting of credits can only be done for effects that have been accounted for. The selection is made on the details of the effects to identify the credited amounts for each due date.

2. Select from the central grid the effects you wish to manage.

3. Fill in the parameters for accounting such as the **Ledger Records Template**, the **Posting date**, and the due date.

:::note[Note]
This section can be predefined within the [**parameters**](/docs/configurations/parameters/treasury/bills-portfolio-parameters) of the Bills Portfolio module.
:::

4. Also fill in the other fields for accounting management:

**Commission charges**: the sub-account where commission expenses will be accounted for, to be indicated in the next field.

**Commissions**: the value of commissions on the credit of the effects that is accounted for; it can be proposed, for each effect, based on the *commissions* set in the [***bank registry***](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry/detail).  

**Passive expenses**: account where interest calculated for discount summaries will be accounted.

:::note[Note]
In this section, there are also three fields for displaying the totals of the selected effects in the central grid:

**Total selected passive comm.**: sum of the value of Passive Charges for all selected effects;

**Total selected commissions**: sum of the value of Commissions for all selected effects;

**Total selected bills**: sum of the value of the selected effects;
:::

4. Press the button in the ribbon bar **Credits Accounting**.

**Specific buttons**

**Search**: Searches the list of effects to account for the credit.

**Accounting**: Executes the accounting for the selected rows.

### Previous Tab

From the *Previous* tab, it is possible to proceed with the cancellation of executed accountings. 

Cancellation will only be possible if the period is still modifiable (journal book print and account closure not executed). 

Double-clicking in the registration section will allow you to view the related ledger record. 

There is a detail tab to view errors detected during accounting.

**Specific buttons**

**Search**: Searches the list of executed accountings.

**Rollback accounting**: Restores the selected accountings for all documents contained therein.

**Rollback Records**: Restores the single selected ledger record.