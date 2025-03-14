---
title: Account Statement
sidebar_position: 3
---

This is the basic report to obtain the details of the accounting movements of each detail account, regardless of the type (asset, liability, expense, revenue, registry): with the standard report for each detail account, there will be a new print sheet.

This print corresponds to what is defined in accounting terminology as a "ledger."

**MAIN FILTERS**:

- Data related to the ledger record

   - **Account**: Reference detail account (for example, to view the movements and the resulting balance of a specific supplier for a certain date range, or to view the revenues related to a specific detail account of the chart of accounts);

   - Posting date

   - **Accounting due date**

   - Recording number 

   - Type / Date / document number in entry header (if present - date and document number may not be present for journal entries)

   - Account type

- VAT data 

   - Register 

   - Protocol (open the expander)

- Type of records (provisional and/or definitive)

**OTHER CHARACTERISTICS OF THE REPORT**:

- **Agent** and **Bank** filters: it is possible to request the account statement of all customers in whose registry this agent has been included, or of all suppliers paid through a certain bank account.

- **Projects** filter (formerly Jobs): it is possible to filter the detail accounts linked to a specific project (job).

- **View amounts in currency**: with the flag active, amounts in currency will also be shown (next to the amounts in euros, without any grouping); without this flag, only the debit/credit data in the company's currency will be displayed.

- **View offset**: the active flag displays the counterparty movements related to the movements of the selected detail account (A4 landscape format).

- **No. of lines**: in this field, activated if the above flag is activated, it specifies how many lines of counterparty entered in the **[ledger record](/docs/finance-area/ledger-records/records/ledger-record)** journal will be shown in the account statement. For example, if there are different revenue accounts related to the registration of an issued invoice, the value may be increased if not all counterparty accounts are shown as entered in the registration.

- **Notes**: this field allows for the entry of alphanumeric data that will be included in the printout. It may be useful to insert a quick note that applies only to the printout processed at that moment, as the field resets upon closing the form.

Possibility to view movements expressed in a specific currency via:

- **View E/C in currency**: a flag that also activates the combo box for currency selection and disables the "Display amounts in currency" and "View counterparties" flags, allowing to group movements by each currency and total them.

- **Currency**: allows selection of the reference currency to filter the value display. Thus, only the values denominated in the selected currency for the chosen detail account will be shown.

It is possible to sort the entries by entry date or due date. This option is particularly interesting in cases where account closure/reopening is performed with different entry and due dates, in order to obtain a significant cumulative balance.

**Account opening last date**: Unlike **[View Accounts](/docs/finance-area/ledger-records/records/view-accounts)**, in which all movements of each detail account are always visible, the print report is a process where it is important to limit the number of records displayed to not impair machine performance.

In this sense, the application will propose printing the movements considering the initial balance starting from the last account opening date, which is proposed as the highest date before the initial report filters.

Example: if the user filters movements from 09/01/2017 to 12/31/2017 (both as entry date and due date), the procedure proposes the last account opening date as 01/01/2017; the result will be: initial balance calculated from 01/01/2017 to 08/31/2017, details of the movements linked to entries dated within the range 09/01-12/31/2017 (thus, only detail accounts with at least one movement between the last account opening date and the final filter date will be included in the report). If the user deletes the last account opening date, the result will be identical to that in the accounts view.

**Synthetic view**: this is a summary report that presents the list of all detail accounts without any page breaks. It is recommended to use this report to print ledgers to be attached to the year-end closing prints.

| Function | Extended Description |
| --- | --- |
| Preview | Button to execute the print preview of the account statement. |
| Report | Button to execute the physical print of the account statement document. |

:::important See Also 
[**VIDEO TUTORIALS ON ACCOUNTING REPORTS**](/docs/video/finance/intro)
:::