---
title: Fast Compensation
sidebar_position: 3
---

:::note Path 
**Finance > Mat. Values > Procedures > Fast Compensation**

Note:
For everything not detailed in this document regarding the common functioning of forms, please refer to the following link [Custom Features, Buttons, and Fields](/docs/guide/common).

:::

---

This form allows for a slightly simplified management of compensation between open mat. values of opposite sign (Debit / Credit) that are assigned to the same detail account (e.g., a customer or a vendor), compared to the equivalent *Mat. Values Compensation*.

It is therefore used as an alternative to the compensation operation to be performed directly during the ledger record phase (for example, in the case of recording an issued or received invoice where a collection or advance payment has previously occurred) and, thus, also at a later stage.

**Active mat. values are represented in the upper grid, while passive itmat. values are in the lower grid.**
The buttons to initiate the search for mat. values are placed, as usual, in the ribbon bar and both must be pressed to obtain both types of mat. values.

To manage the search using the usual filter fields (for example, to search only for active and passive mat. values assigned to a single vendor), it is necessary to display the filter fields (which are collapsible) from the **appropriate tabs on the right** (they become visible when hovering the mouse over them and can be optionally locked to stay visible).

Mat. values that need to be compensated must be selected both in the upper grid and in the lower grid.


![](/img/it-it/finance-area/maturity-values/fast-compensation.png)

Pressing the ***Maturity offsetting*** button in the ribbon bar will compensate the selected mat. values against each other.

In the case of non-matching amounts, the maturity with the lower amount will be closed, while the greater amount remains open for the remaining value.

It is also possible to specify a partial amount according to which the compensation should be executed. In this case, expand the Accounting section and use the **Value** field (see the last image below).


![](/img/it-it/finance-area/maturity-values/fast-compensation2.png)

---

Compensation can also automatically result in an accounting entry (for example, when compensating mat. values of the same subject that have distinct detail accounts because they are both a customer and a vendor, and thus the accounting balances must also be compensated).

To enable accounting, check the box in the accounting field at the top corresponding to the tabs of the form, and expand the section to set the necessary parameters (especially the ledger record template).

![](/img/it-it/finance-area/maturity-values/fast-compensation3.png)