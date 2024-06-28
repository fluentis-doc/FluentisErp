---
title: Moratory Interests Calculation Parameters
sidebar_position: 3
---

In the first tabulator on the left there is a list of selection flags regarding maturity values types for which to calculate interest rates, while on 'other' field there is a filter field per account/detail account codes. Below this, it is necessary to set the default rate type to be applied and flags that guide the calculation logic:

**Calculate per maturity values closed in period**: the procedure will verify the maturity values that became closed within the dates range set and it will calculate the interests value. So as regards partial payments no interest will be calculated;

**Calculate for payments of period: **the procedure will identify payments recorded within the dates range and on these amounts it will be possible to calculate the related interests value: this setting is recommended;

In case that no calculation flag has been inserted, it will be necessary to valorize interests related to delay days that are on dates range set.

**Document Type** and **Payment Type** are additional identification filters of maturity values on which to perform the interests calculation.

The following radio button enables the user to set the rate type to be used during the interests calculation:

- calculate interests only on customers for which an agreement date has been inserted into register;

- calculate interests on customers with an agreement according to register settings and default rate inserted above for the others;

- calculate interests for all customers according to default interest rate inserted above.

A last flag, that has been already set on default, provides for the exclusion of paid maturity values from interests with bills of bills portfolio module: in particular, that specific setting is necessary for rate types on which the calculation to discount has been set, because the closing of customer maturity value is usually recorded directly during the bank receipt/bills of exchange issue.

The calculation procedure consists as follows:

RIBBON BAR: it represents the Form menu, that is the area in which it is possible to perform actions linked to the procedure in use. The list of features is the following:



| Function | Meaning |
| --- | --- |
| Calculate Interests | The button performs the calculation according to parameters set. |






