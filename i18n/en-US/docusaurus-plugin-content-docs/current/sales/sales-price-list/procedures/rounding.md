---
title: Roundingss
sidebar_position: 5
---

The form can be opened through the path **Sales > Price Lists > Procedures > Roundings**.

The procedure allows for searching the roundings and defining multiple codes for increasing/decreasing prices, updating discounts, and rounding policies for the obtained prices.

These Roundings codes are used in the procedures for creating sales price lists.

In the *Search* form, it is possible to search for existing data, enter new rounding codes, or modify existing codes.

By defining a *New* code (clicking the **New** button in the Search form) or *Modifying* an existing code, it is possible to enter the description to be attributed to the rule.

![](/img/it-it/sales/sales-price-list/procedures/rounding/image02.png)

The price variation can occur in percentage or value, increasing or decreasing with the use of the signed value.

The rounding method is defined for price unit brackets.

**Superior limit**: indicates the maximum price to which the mask and percentage will be applied.

**Mask**: is a text field where the user defines the rounding rule.

**Percent Completed**: is the percentage beyond which, if the ratio between the calculated prices (obtained by applying the variation to the starting price) and the starting price exceeds this percentage, the resulting rounded price will be highlighted in red as it is beyond the allowed rounding limit. In the case highlighted above, the “rounded price” should not exceed the “non-rounded price” by more than 5%.

**VALID VALUES FOR THE MASK**

The MASK is a rule defined by the user by composing a text using the following language:

=  the value does not change

+  increase the value by one unit

-   decrease the value by one unit

[    start of single value rule

]    end of single value rule

(    start of the rule that defines to which fixed value the analyzed value should be brought

)    end of the rule that defines to which fixed value the analyzed value should be brought

,    decimal separator

The following are examples which can explain how to create a rule:

| Initial Price | Non-Rounded Price | Mask | Rounded Price |
| --- | --- | --- | --- |
| 16.16 | 16.968 | [=][=][=],[=][+] | 16.98 |
| 16.16 | 16.968 | [=][=][=],[=][=] | 16.97 |
| 16.16 | 16.968 | [=][=][=],[=][-] | 16.96 |
| 16.16 | 16.968 | [=][=][=],[=][=][+] | 16.969 |
| 16.16 | 16.968 | [=][=][=],[=][=][=] | 16.968 |
| 16.16 | 16.968 | [=][=][=],[=][=][-] | 16.967 |
| 16.16 | 16.968 | [=][=][=],[=][=][-(0)] | 16.96 |
| 16.16 | 16.968 | [=][=][=],[=][+(9)] | 16.99 |
| 16.16 | 16.968 | [=][=][=],[=][-(3)] | 16.93 |
| 16.16 | 16.968 | [=][=][=],[=] | 17 |
| 16.16 | 16.968 | [=][=][=],[+] | 17.1 |
| 16.16 | 16.968 | [=][=][=],[-] | 16.9 |
| 16.16 | 16.968 | [=][=][=] | 17 |
| 16.16 | 16.968 | [=][=][-] | 16 |
| 16.16 | 16.968 | [=][=][+] | 18 |

In the discounts section, it is possible to define discounts to insert in each price list line, choosing also to delete previously inserted discounts in the same line, or to go to modify the existing discounts in the price list lines.