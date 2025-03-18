---
title: Rate types
sidebar_position: 28
---

The definition of this table allows for the coding and setting of various types of interest rates to be managed within the active company.

### Upper Grid

**Code**: identification code of the interest rate.

**Description**: description of the interest rate.

**From document date**: document date from which interest calculation is to be managed (reference is to LEGISLATIVE DECREE October 9, 2002, n. 231). The purpose of this field is to prevent interest from being calculated on documents with a date prior to the issuance of the law.

**From due date**: expiration date from which interest calculation is to be managed (reference is to LEGISLATIVE DECREE October 9, 2002, n. 231). The purpose of this field is to prevent interest from being calculated on documents with an expiration date prior to the issuance of the law.

**Min. interest**: minimum amount of interest below which no amount should be valued.

**Franchise days**: number of grace days that will be deducted from the count of late days.

**Calculate also the discount**: management flag for discounts in the case of early payment.

:::tip note
EXAMPLE: in the case of early payment by the customer and subsequent payment delay, if the amount of interest calculated on the delay is greater than the value set in the Min. interest field, the value of the calculated interest will have the (negative) value calculated based on the days between the payment date and the expiration date deducted from it. In any case, the result of the calculation can never be negative interest.
:::

### Lower Grid  

**Code**: identification code of the rate.

**From date**: date from which the rate indicated in the line is to be managed.

**A date**: date until which the rate indicated in the line will be managed.

**Percent Completed**: applicable interest rate percentage.

The fields related to the validity dates for the percentage allow for defining the trend of the interest rate policy, which, as is known, is subject to periodic revisions regarding the legal rate.

![](/img/it-it/configurations/tables/finance/rate-types/image01.png)