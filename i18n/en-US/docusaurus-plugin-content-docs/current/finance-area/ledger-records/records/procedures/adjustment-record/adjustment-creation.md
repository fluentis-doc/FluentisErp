---
title: Adjustment Creation
sidebar_position: 2
---

With this procedure, you can calculate and account for the **accruals and deferrals** related to the ledger records present in the database:

These include, for example, adjustments/additions (respectively, deferrals and accruals) related to insurance, rent, lease payments, or assistance, which are characterized by being related to a period straddling the year. Therefore, according to the accounting principle of economic competence, they are subject to adjustments.

## Requirements for Using the Procedure

1) Economic account types (for example, 'to be adjusted') must be defined in the **[Account Types](/docs/configurations/tables/finance/account-types)** table, with the ‘**Service**' flag activated.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image01.png) 

The calculation is performed (as with interim financial statements) ONLY for the detail accounts for which these particular account types have been assigned in the chart of accounts.

2) Standard detail accounts for recording accrual/deferral movements must be defined in the **[Accounting Parameters](/docs/configurations/parameters/finance/accounting-parameters)**.

:::note
It is noted that at the chart of accounts level, specific accrual/deferral detail accounts can be specified for each cost/revenue detail account, which will be used primarily for the recording of adjustments or integrations.
:::

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image02.png)

3) Correct date ranges for economic competence must be used in the accounting movements.

:::note
It is recommended to set the **[Entry Parameters](/docs/finance-area/ledger-records/records/ledger-record)** user parameters with the option ‘No date for service account type’ in order to require the user to enter, each time, the valid economic date range for each movement.
:::

## Management

### Procedure 

- Indicate for which accounting year you want to proceed with the calculation and the calculation date (the current date is suggested by default);

- Indicate the registration/competence date to be assigned to the ledger records to be created;

- Indicate the ledger templates to be used for the adjustment and integration.

The single record option will either summarize all adjustments into a single record or keep all integrations separate.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image01.png) 

Once these settings are saved, the **Calculate** button will be activated.

This will populate the section below with the list of proposed adjustments: within these, the type of operation, references to the original record, the number of days of the adjustment will be indicated, and then the amount and the detail account for recording will be editable.

If the set reasons involve the management of CC/CP and the original movement has the corresponding data to be adjusted/integrated, the details of the related calculations will also be present in the section below.

The next phase will be to confirm, line by line, that the calculated amount is correct and complete by checking the **Checked** flag, which will also activate the editability and the related control flags in the corresponding section for the CC/CP.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image04.png)

All lines with a *checked* status will be subject to accounting that will be executed by pressing the **Book** button.

The user can create multiple postings as details are defined, as well as recalculate the list to verify that no additional operations have been added (typically integration of new exercise records with prior competency) or create new adjustments for these. The **[Recovery Tab](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)** of the previous situation is still present.

:::note
All lines with the **Checked** flag activated will be posted.
:::

In the event that changes have been made to the ledger records after the adjustment calculation has been launched, it may be useful to use the **Check Adjustment Calculation** button:  
this button will recalculate line by line, showing any differences compared to what has already been proposed in the grid (specifically in the **Adjustment Debit / Credit** and **New Adjustment Debit / Credit** fields), with a button to align the differences or not, which will also delete adjustment/integration lines related to accounting movements that no longer exist (It will not be possible to book if lines with references to non-existent movements are present, and in this case, it will be necessary to go through this interface and delete them).

:::danger Attention
If the adjustments have already been posted, there is no block on modifying the original movement that led to the adjustment, the only restriction is on deleting the record, which is not allowed. Therefore, utmost caution is recommended when modifying records that are involved in year-end adjustment operations.
:::

:::note Note regarding the **[Automatic Account Closing](/docs/finance-area/ledger-records/records/automatic-account-closing/new-account-closing)** procedure: there is an option for automatic transfer of adjustment operations following account reopening registrations. With this option, the application will record, on the reopening date, the reversal of adjustments while processing the transfer of integrations on the date of the original adjustment record.
:::

**SINGLE RECORD FLAG:** with this flag activated, the adjustment accounting occurs with a single accounting entry (single number) instead of multiple entries corresponding to the number of adjustments to be executed.  
In the account reopening phase, the transfer for reopening accruals and deferrals will also follow the same setting.

### MANAGEMENT OF INVOICES TO RECEIVE

In this section, we illustrate how to automate the specific situation of *Invoices to receive*, which concerns the accrual to be made at year-end when recording a cost or revenue that pertains only to the next exercise.

In summary, we can see in the following images how the recognition of this situation occurs automatically by the software, using the specific account provided in the general accounting parameters.

It is also possible to customize the account to be used in relation to each individual supplier or customer.

Similarly, it is possible to customize the account for other active and passive accruals and deferrals by setting the specific account corresponding to the cost or revenue account directly in the chart of accounts.

#### Standard Situation WITHOUT SPECIFIC SETTINGS ON THE SUPPLIER

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image08.png)

AND NOT ON THE COST ACCOUNT EITHER

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image09.png)

THE SETTINGS ARE ONLY AT THE ACCOUNTING PARAMETERS LEVEL

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image10.png)

**CASE 1 recording in year x and competence fully in x+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image11.png)

**CASE 2: recording in year y and competence entirely in year y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image12.png)

**CASE 3: recording year x and competence straddling x and x+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**CASE 4: recordings year y with competence straddling y and y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**RESULTS**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image15.png)

Line 1 is the adjustment for case 1, where the entire cost recorded in year X is applicable to the following exercise X+1: Fluentis uses the active deferral account defined in the general accounting parameters.

Line 2 is the integration for case 2, where the entire cost recorded in year Y is applicable to the previous exercise Y-1: Fluentis uses the 'Invoices to receive' account defined in the general accounting parameters.

Line 3 is the adjustment for case 3, where the cost recorded in year X is only partially applicable to the following exercise X+1: Fluentis uses the active deferral account defined in the general accounting parameters.

Line 4 is the integration for case 4, where the cost recorded in year Y is only partially applicable to the previous exercise Y-1: Fluentis uses the passive accrual account defined in the general accounting parameters.

**WITH SPECIFIC SETTINGS FOR SUPPLIER/ACCOUNTING ACCOUNT**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image16.png)

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image17.png)

**RESULT**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image18.png)

Instead of the default detail accounts, custom detail accounts taken from the cost line or supplier are used.

## Restoration

There is a final ‘**Restore**' tab to preview the entries made and to cancel them through the appropriate button.

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/restore-tab/image01.png)

You can use the filter fields for account / detail account and the adjacent flags to select only integration entries or only adjustment entries before proceeding with the restoration.