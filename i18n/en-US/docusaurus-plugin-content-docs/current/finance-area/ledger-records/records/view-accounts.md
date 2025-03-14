---
title: Accounts Visualization
sidebar_position: 2
---

The form allows you to view the accounting movements of any account or detail account, of any type (asset, liability, costs, revenues, or registry): all movements from all accounting periods are always online, but clearly they may be modified or not depending on the closure of the period following mandatory tax prints executed definitively or for account closing operations.

## Header:

At the top, it is mandatory to enter an account code or directly a detailed detail account: the subsequent filter fields are optional.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image01.png)

 

## The data grid:

It is ordered by default in descending registration date**, (the sorting criterion can be changed) and displays the list of movements according to the set filters: 

With this setting, the data should thus be interpreted with the awareness that:

-  assuming filtering with 'from registration date' 01/01/yyyy, we will have in the fields (at the top) **Previous balance** the total debits and credits of the records prior to 01/01/yyyy,

- in the movements grid, the data will be presented from the most recent to the oldest (temporally) reading from top to bottom. 

- the **Progressive** field will display in the last row the amount from the **Previous balance** field updated with the value of that row and will then be updated row by row from bottom to top.


:::note[Note]
The **Progressive** field is visible only if the default sorting set for the form is maintained; in other cases, the field disappears, and to make it reappear, it will be necessary to close and reopen the form and then re-execute the search. 
:::


 

## Totals at the bottom of the form:

**Sel. balance**: sum of debits/credits of the rows selected in the grid with the mouse; selecting everything in the grid (with ctrl+a) this field will display the same result as the *Current balance*

**Current balance**: sum of debits/credits of the rows displayed in the grid (always all regardless of the selection made with the mouse);  

**Total**: sum of the previous balance and the current balance;  

**Balance**: final balance, either in debits or credits (which will always correspond to the progressive displayed in the first row).


:::tip[How to read and interpret the totals]
**Previous Debits/Credits** (to the filtered range and from the last account opening) **+ Current Balance = Total** (both debit/credit columns are always valued in these 3 blocks).

**Previous Balance + Current Balance** (as the difference between debits and credits) **= Balance** (current)

The *Current Balance* is represented in both sections to highlight analytically the formation of the *Total* (as it is calculated by summing the current balance with the two distinct sections *Previous Debits / Credits*).

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image04.png)

:::


In the grid, two series of displayed detail accounts are visible, the header detail account (which is taken from the detail account holder of the record from which the movement itself is taken) and the detailed detail account which is indeed the detail account for which the movements are being searched. For example, if viewing the movements of a generic cost account, we will have in the header detail account the codes of the suppliers who have sent us invoices recorded to that cost account and in the detailed detail account the specific individual cost detail accounts recorded.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image02.png)

 

Additionally, it is possible to "expand" the row using the + command on the left to view the entire accounting entry.

![](/img/it-it/finance-area/ledger-records/records/view-accounts/image03.png)

 

Additional operations that can be performed regarding the results grid:

- Double-clicking on the single displayed row: in this case, if the user has the relevant rights, the corresponding record of the movement will open for editing;

- Pressing the **Modify** button located in the ribbon bar will have the same effect as the double-click just described;

- Pressing the **Source doc.** button, when active, will open in Viewing (if the user has the right) the purchase or sales invoice that created the selected accounting movement;

FILTER AREA: the filter area is dedicated to hosting the list of possible data types that allow for selection. The filters are typically always in 'AND' condition, and multiple filtering criteria can be specified simultaneously.

RESULT GRID: the result grid represents the list of records that correspond to the above-specified filter data. After specifying the values through which you want to search for records, if you press the [Search] button present in the relevant Ribbon, you will get the desired list of records in the result grid.

:::important See Also
[**VIDEO TUTORIALS ON ACCOUNTING ENTRIES**](/docs/video/finance/intro)
:::