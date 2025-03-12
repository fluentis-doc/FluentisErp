---
title: Periodic VAT Declaration (Dichiarazione iva periodoca)
sidebar_position: 6
---

From this form, it is possible to manually manage some values that will be reported in the printing of the periodic VAT settlement at the time of report generation.

Typically, two useful and frequently used fields are:

- the indication of the remaining VAT credit (because it has not been fully offset in the F24 form with other taxes) to be included in the settlement;

- the indication of the VAT credit that emerges in the settlement and that one wishes to exclude in order to offset it with other taxes in the F24 form.

Since at the time of processing the printout of the periodic settlement (in which the values are processed by the application for inclusion in the report), the manually entered values must already be present, a new line should be entered (button **New**) before generating the periodic settlement.

When opening the new form, the current year and the month or quarter following the last stored will be suggested.

It is reminded that, if the line corresponding to the month or quarter of reference is not created manually (in order to manage the above values) using the New button, it will still be created during the final printing phase of the periodic settlement.

**REMAINING CREDIT TO CARRY FORWARD (CREDITO RESIDUO DA RIPORTARE)**:

Fill in the VP16 field WITHOUT INDICATING THE SIGN

![](/img/it-it/finance-area/declarations/declarations/periodical-vat-declaration/image01.png)

Similarly, other amounts can be entered to increase the resulting credit in the settlement, such as the deduction of the VAT advance paid in December (field VP20).

**VAT CREDIT TO OFFSET IN F24 (CREDITO IVA DA COMPENSARE IN F24)**:

Fill in the VP32 field WITHOUT INDICATING THE SIGN

![](/img/it-it/finance-area/declarations/declarations/periodical-vat-declaration/image02.png)

At the time of processing the VAT settlement printout (both provisional and final), the values with a negative sign (VP16) will increase the VAT credit, while those with a positive value (VP32) will reduce it (or increase the debt); these values are reported in the summary after the debt and credit values resulting from the operations of the month or quarter.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>