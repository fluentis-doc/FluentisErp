---
title: New Automatic Closing 
sidebar_position: 2
---

The Automatic Account Closing procedure manages the financial statement closure and subsequent reopening: it concerns only the accounting movement, without any influence from the perspective of the ledger accounts.

The form consists of a series of tabs and a common header area in which to enter the main data such as the closing date and description.

## Mandatory Data

Once the new closing is initiated, upon opening the form, the closing date (current date) and version number (progressive) are automatically proposed, fields that are still editable.

It is necessary to enter a description and **fill in the mandatory fields present in the Parameters Tab before proceeding to Save the closing**.

Saving is necessary to enable the commands present in the ribbon bar for processing the calculation, **Retrieve detail accounts values**, and accounting, **Create registration for account closing**.

### Parameters

In the ‘parameters’ tab, it is necessary to enter: 

- data to filter the accounting movements that will be subject to account closures; the **recording and competency dates** identify which entries to report in the accounting balance: in particular, the competency dates will be related to the financial period (1/1/….-31/12/….), while the ‘to recording date’ field may be shifted into the following fiscal year to include corrective entries: **it is recommended to simply not set the filter for recording dates**.

- the detail account codes, reason to be used, and recording and competency dates of the closing journal entries; this data (except for recording dates) is automatically populated if entered within the **[accounting parameters](/docs/configurations/parameters/finance/accounting-parameters)** (tab ‘Accounts’);

- (optional) the choice to also simultaneously manage the reopening of accounts rather than handling it separately with **[the appropriate command](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new)**. 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/parameters-tab/image01.png)

**Accounting year**: calls up the corresponding year from the **[accounting parameters](/docs/configurations/parameters/finance/accounting-parameters)**, used for managing the reopening of adjustment entries, to be activated at the base of the mask with the flag **Giro account-adjustment records**: this involves managing, following the reopening of accounts, the movements of reallocation of accrued expenses and deferred income (provided these have already been processed with the **[Adjustment Entries](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)** procedure) to the relevant costs/incomes (the accruals will be recorded on the same date as the account reopening, while the deferrals will be recorded on the date of the original document registration).

Flag **Manage Balance** (closing and reopening) **by currency of movement**: if activated, the program inserts a row for each currency of movement of the specific detail account, clearly maintaining the total in the company currency correct. This possibility is necessary to ensure the accuracy of the opening balances in the ‘Account statement in currency’ printout.

**CAUTION:** Before starting the calculation, it is advisable to verify the settings of the **[Account Types](/docs/configurations/tables/finance/account-types)** table:

in particular, the account types of customer-supplier-agent-bank registries must have a flag on the respective columns and must have a second one in one of the first two columns, related to asset and liability.

It is then possible to start the **Retrieve detail accounts values** with the respective button, allowing the program to calculate the balance of each detail account and present the related data in the Profit and Loss and Balance Sheet tabs. Once confident in the results, it is possible to proceed to the last phase of the procedure: returning to the parameters tab, we can click the button **Create Record for Accounts Closing**, which will create the relevant accounting entries and mark the **Accounted** flag.

:::note
If the flag **Giro account-adjustment records** has been activated, when the command **Retrieve detail accounts values** is launched, an additional tab **[Reopening Adjustment Entries](/docs/finance-area/ledger-records/records/automatic-account-closing/new-account-closing)** will become visible.
:::

#### Specific Buttons  
> **Save**: allows saving the header of the account closing, activatable after entering the description.  
> **Retrieve detail accounts values**: allows the program to calculate the balance of each detail account and present the related data in the ‘profit and loss’ and ‘balance sheet’ tabs.  
> **Create Record for Accounts Closing**: allows creating the closing account registration.  
> **Restore Accounting**: allows canceling and restoring the accounting of the account closing.  

### Profit and Loss

In the Profit and Loss tab, the negative and positive income components will be summarized with an emphasis on the operating result and the ability to filter the accounts present in the sections Positive Income Components and Negative Income Components using the Cost Detail Account, Revenue Detail Account fields, and the search buttons located in the ribbon bar (see the table below).

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/profit-and-loss-tab/image01.png)

#### Specific Buttons  
> **Search Positive Income Components Detail Accounts**: allows searching for the desired revenue accounts within the closing.  
> **Search Negative Income Components Detail Accounts**: allows searching for the desired cost accounts within the closing.  

### Balance Sheet

In the **Balance Sheet** tab, the asset and liability components will be summarized with an emphasis on the operating result and the possibility to filter (similarly to what is provided for the **[Profit and Loss](/docs/finance-area/ledger-records/records/automatic-account-closing/new-account-closing)** tab) the accounts present in the two underlying sections using the appropriate fields and the search buttons located in the ribbon bar.

#### Specific Buttons  
> **Search Active Patrimonial**: allows searching for the desired active accounts within the closing.  
> **Search Passive Patrimonial**: allows searching for the desired passive accounts within the closing.  

### Registration

The registrations (viewable with a double click) are as follows: 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image01.png)

#### In the First Grid  

- the first registration closes the revenues, 

- the second closes the costs, 

- the third records the profit or loss by closing the income statement, 

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image02.png)

#### In the Second Grid  

- the fourth closes the liabilities 

- the fifth closes the assets (including profit or loss accounts);  

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/record-tab/image03.png)

#### In the Third Grid  

the three opening registrations are reported: 

- the first opens the liabilities, 

- the second the assets, 

- the third transfers the profit/loss from the current year to the previous year's profit/loss.

:::note Note

Any errors that may be detected afterward can be resolved in the following ways: 

- it is possible to directly delete the performed account closing and, upon the program's request, also delete the linked registrations to restart from scratch in the procedure; 

- alternatively, there is a *rollback* button **Restore Accounting** in the Parameters tab. 
:::

There are specific user permissions for accounting and its cancellation. 

:::danger Attention  
The account closing will block the entries included in the set date range and, furthermore, it will no longer be possible to insert entries within that date range.

**Order accounts** are never subject to closing and reopening in this procedure.
::: 

### Reopening Adjustment Entries

In this mask, the result of the automatic reclassification option of adjustments following the reopening entries is visible. With this option, the application will proceed to detect, at the reopening date, the reversal of the adjustments **while it will operate the reclassification of supplements at the date of the original entry registration** of the adjustment itself.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image01.png)

Double-clicking on the rows allows viewing the details of the executed registrations.

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image02.png)

![](/img/it-it/finance-area/ledger-records/records/automatic-account-closing/new/re-opening-adjustment-records-tab/image03.png)

:::tip Info
Generating the reopening entry of the adjusting entries (active and passive accruals) on the date of the source entry of the adjustment is necessary, unlike, for example, simply reopening on 1/1, to properly manage the possible calculations of interim closings with Fluentis.

Consider, for example, having recorded on 04/15/2023 a cost that is due from 11/01/2022 to 03/31/2023, thus a passive accrual of 2 months will be recorded as of 12/31. Recording its reversing entry (the reversal) on 01/01 would depend greatly on how accruals/deferrals are filtered and managed for the interim closing, essentially risking to have only the reversal of costs (i.e., the reopening of the accrual) and not the invoice of the cost in the interim balance.

However, recording the reversal on the same day as the invoice, regardless of subsequent filtering for extracting the interim closing balances, ensures that the two registrations "will travel together," guaranteeing the expected effect (in this case a neutral impact on the balance since the cost has already been anticipated in the previous financial year).
:::