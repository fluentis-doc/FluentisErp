---
title: Difference Between Open Maturity Values and Ledger Balance 
sidebar_position: 4
---

The data that can be extracted from this form corresponds to the content of the report **Difference Between Ledger Balance and Mat. Values.**

The purpose of the search is to verify the differences (discrepancies) between the ledger balances and the balances of the accounts receivable/accounts payable for each customer and vendor in order to correct them. These differences may originate from errors in managing the accounts or accounting entries (mismatch between accounting movements and opening mat. values or collection/payment and closing maturity).

:::danger IMPORTANT NOTE:
In the case of **professional men**, if the criterion of displaying open mat. values net of withholding tax is adopted (in the parameters of the [withholding tax type](/docs/configurations/tables/finance/withholding-tax-types)), the differences highlighted must be ignored (and not considered as errors), keeping in mind that they will be absorbed at the time of payment of the compensation and the closure of the related maturity.
:::


### **FILTER AREA**:

**Account**: main filter to extract only a specific customer or vendor detail account. If not filtered, all detail accounts of customers and vendors with differences will be reported.

**From / To Posting Date**: filter on accounting posting dates.

**Exclude closed maturities value**: by activating this flag, mat. values in the Closed status will be ignored.

:::tip **USEFUL**
**Details**: by activating this flag, the results will be disaggregated (instead of grouped), highlighting the potential difference for each individual accounting entry compared to the related maturity (or the corresponding payment in the case of accounting movement of collection/payment); This option is useful in combination with the filter on the detail account of the specific customer or vendor to analyze how the discrepancy has formed (on which accounting movements) and proceed to correct it.
:::

:::tip **VERY USEFUL**
**View only detail accounts/recordings with difference different from zero**: the active flag (recommended) allows highlighting only the detail accounts that have differences to correct while hiding those that are correct.
:::

**Grouping by company currency**: the active flag determines the display of movements in currency according to the company's currency. For example, movements in USD will be displayed and converted to Euro.

### **RESULTS GRID**:

![](/img/it-it/finance-area/maturity-values/maturity-values/difference-between-maturity-value-and-ledger-balance/image1.png)

For each detail account related to the customer or vendor, the totals are displayed for DEBIT and CREDIT, both for the accounting movements and for the accounts receivable/accounts payable, and finally the ledger balance and account balance. Then a column with the difference.

In this way, it is also possible to evaluate the possible origin of the discrepancy.

For example: A positive accounting debit total (and therefore a positive accounting debit balance) and a zero accounts receivable total for a detail account of a customer can be caused by an opening of the accounts for which the opening of the mat. values was not also provided. 

---

### **VIDEO TUTORIALS**

:::important See Also
[**VIDEO TUTORIALS ON OPEN MAT. VALUES**](/docs/video/finance/intro)
:::