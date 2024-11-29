---
title: Difference Between Ledger Balance and Open Maturity Values
sidebar_position: 5
---

The print that can be launched from this form corresponds to the content of the on-screen display obtainable with the form **[Difference Between Open Maturity Values and Ledger Balance](/docs/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance)**.

Mirroring the on-screen display, the meaning of this printout is to search for the differences (discrepancies) between the ledger balances and the balances of the accounts for each customer and vendor in order to correct them. These differences can originate from errors in managing the accounts or accounting entries (failure to align between accounting movement and open items or collection/payment and closing of the mat. value).

:::danger NOTE:
In the case of **Professional Men**, if the criterion of reporting open mat. value net of withholding tax (in the parameters of [withholding tax type](/docs/configurations/tables/finance/withholding-tax-types)) is adopted, the differences that will be highlighted must be ignored (and not considered as errors), keeping in mind that they will be absorbed at the time of payment of the fee and the closing of the related mat. value.
:::


**Account**: main filter to extract only a detail account of a customer or vendor. If not filtered, all detail accounts of customers and vendors that have discrepancies will be reported.

**From/To Posting Date**: filter on accounting posting dates.

**Exclude closed maturities value**: activating this flag will ignore mat. value in the Closed state.

**Details**: activating this flag will decompose the results (instead of grouping them), highlighting any discrepancies for each individual accounting movement compared to the related mat. value (or the related payment in the case of collection/payment accounting movement);

**View only detail accounts/recordings with difference different from zero**: the flag (recommended) active allows highlighting only the detail accounts that have differences to correct, while hiding those that are correct.

**Grouping by company currency**: the active flag determines the display of movements in currency according to the company's currency. For example, movements in USD will be displayed and converted to Euro.