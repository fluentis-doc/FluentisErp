---
title: Excel Import of Off-Balance Sheet Recordings
sidebar_position: 3
---

In the tools menu, within the **Bizlink** group, we find the ***On-Demand Imports*** and therefore the ***Excel Imports***: among these, we have the import with code **OffBalanceRecordsForArea**, which allows for easy import of Area Off-Balance records, including both management area records that will be used in integration with the periodic actuals area (for example, records of the compensation for the board of auditors that are loaded at the beginning of the year, or off-balance valuations of payroll for the individual month) and records to be used for processing the details of the periodic Budget.

The available fields are as follows:
- ***Posting Date***: mandatory, it is the posting date to be assigned.

- ***Competence Date***: mandatory, it is the competence date of the record, it will always be equal to the previous date.

- ***Recording Number***: mandatory, it is advisable to set a high recording number, in order to avoid overlapping with any existing records on that date, which may have been created automatically by accounting procedures (e.g., the processing of controlling amortizations, or the accounting of remaining balances for mid-year closures).

- ***Causal***: the causal for the movement, mandatory, which must manage the cost centers.

- ***Account and detail account***: mandatory, the account/detail account to be assigned to the movement.

- [***COST CENTER***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers): mandatory, the cost center to be assigned.

- ***Type-Internal Number-Year-WBS Number***: optionally, any link to a project.

- ***Amount Debit***: must be assigned (possibly to zero) and is mandatory.

- ***Amount Credit***: must be assigned (possibly to zero) and is mandatory.

- ***From Accrual Date***: the initial date of economic competence for the line, not mandatory but should always be assigned when dealing with economic movements.

- ***To Accrual Date***: the final date of economic competence for the line, not mandatory but should always be assigned when dealing with economic movements.

- ***Division***: not mandatory, if not indicated, the one from the import parameters will be used, by default the active one.

Once all the necessary fields have been entered, the range of the entered data can be validated to check for any missing or incorrect codes (***Valid Data Range*** button), or the import can be launched directly with the ***Import Excel Sheet*** button: it will ask for the **Area** to be used and the currency of reference for the operation.