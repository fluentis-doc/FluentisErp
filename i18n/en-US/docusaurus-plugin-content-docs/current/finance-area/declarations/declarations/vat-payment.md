---
title: VAT Transfer
sidebar_position: 10
---

In this form, the results of the periodic VAT settlements calculated definitively are stored.

For each settlement processed definitively, a corresponding line will be added from the program.

From this position, it is possible to unlock the definitive settlement simply by deleting the corresponding line using the **Delete VAT Settlements** command.

It is important to remember that after deleting the line related to the desired periodic settlement, it is necessary to **also** unlock the **printing** in definitive of the VAT section in which it was printed, from the table [**VAT Registers**](/docs/configurations/tables/finance/vat-books).

:::tip[Info]
If a VAT section specific for settlements is used separately from the others, unlocking the definitive printing of that register becomes unnecessary. Therefore, it is advisable to adopt this solution, which makes it easier to manage the definitive settlement month by month, freeing it from the need to also print the sections, particularly the one where the settlement is queued, which would require reprinting every time the settlement needs to be unlocked.
::: 

The Amount field, the final result of the VAT debt/credit calculation, is editable, and therefore it is possible, if desired, to manually round the value to account for, for example, the rounding necessary in the annual VAT declaration.

![](/img/it-it/finance-area/declarations/declarations/vat-payment/image02.png)

**Vat settlement of Group:** indicates that the settlement has been executed through the mode and functionality of the VAT group.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>