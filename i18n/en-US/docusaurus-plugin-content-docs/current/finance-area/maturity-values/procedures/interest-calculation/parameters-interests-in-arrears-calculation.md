---
title: Moratory Interests Calculation Parameters
sidebar_position: 3
---

In the form, there is a list of selection flags for the types of mat. values for which to proceed with the calculation of interest rates, while above there is a filter field for account/detail account codes. Below this, you need to set the default interest rate type to apply and the flags that guide the calculation logic:

**Calculate for closed mat. values of period**: the procedure will check the mat. values that have become closed within the set date range, and it will only calculate the interest value for these, so no interest will be calculated for partial payments;

**Calculate on payments of period**: the procedure will identify the payments recorded within the date range and will calculate the corresponding interest value on these amounts: this setting is recommended.

If no flags have been set, the calculation will value the interest related to the days of delay present in the specified date range.

**Document type** and **payment type**: are additional filters for identifying the mat. values on which to execute the interest calculation.

The next radio button allows defining the type of rate to use in the interest calculation:

- calculate interest only on customers for whom an agreement date has been entered in the register;

- calculate interest on customers with an agreement according to the register settings, the default rate entered above for all others;

- calculate interest for all customers according to the default interest rate entered above.

A final flag, **Exclude emitted bills**, already set by default, provides for the exclusion from interest of the mat. values paid with effects from the effects portfolio module: this setting is particularly useful for rate types where the calculation has also been set for discounts, as the closure of the customer mat. value is usually detected directly at the issuance of the bank receipt/bill of exchange.

The calculation procedure is started with the **Interest Calculation** button in the ribbon bar.