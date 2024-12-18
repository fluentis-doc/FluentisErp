---
title: Cash Management 
sidebar_position: 6
---

The purpose of this form is to provide a simple and quick overview of the banking situation to verify the availability for each bank account and, if necessary, to transfer/delay the commitment or change the bank.


### Operating Modes:

There are two possible modes: with or without linking to a cash flow.

By using the cash flow, it is possible to consider data retrieved from the active/passive cycle, thus extending the analysis period beyond just the accounting evidence of the parties.

If cash flow is not used, only accounting balances (for availability) and the parties will be read (for this reason, the same menu entry has been placed in both the parties menu and the cash flow module…).

:::danger Attention
What the user sees upon opening the mask is the last saved situation, as it was managed last time. Any changes made to the values or data, if confirmed with a new save, will historicize the starting situation and store the new data, which will be re-proposed when reopening the mask later. 
Previous processing will be stored in the database, but currently, the ability to consult previous versions is not yet provided.
:::


### Specific logic of the cash flow
If a calculated cash flow is already present and we open the Cash Management mask for the first time, the user can select the cash flow from which to draw the processed data.

Once a cash flow is selected, Fluentis will take the balances of the financial accounts to insert them into the upper availability grid.


**ATTENTION: you need to open the *Available Liquidity* expander to see the list of bank accounts, along with the values of the credit lines and uses in the portfolio.**

![](/img/it-it/finance-area/maturity-values/cash-management-1.png)

All other values will be retrieved from the *Cash flow* side panel, searching with the ***Search cash flow*** button, selecting the rows, and adding them with the ***Create from cash flow*** button.

![](/img/it-it/finance-area/maturity-values/cash-management-2.png)

![](/img/it-it/finance-area/maturity-values/cash-management-3.png)

The user can create a new cash flow using the ***Calculate cash flow*** button, which creates a new simulation with the saved default parameters (similarly to how it works to create data to be exported to other treasury software like DocFinance: the processing is equivalent to opening the *automatic cash flow creation* mask, adding a description, and starting the processing without adding other parameters):


In this case, once processing is complete, Fluentis will ask whether to update the data or not in the active *Cash Management*.

Alternatively, the user can also create a new simulation from the cash flow and then reopen the cash management mask: in this case, upon opening *Cash Management*, there will be a message asking whether to update the data with those from the new cash flow or not.

In both cases, if the data is not updated, nothing will happen, while if it is updated, Fluentis will verify the changes to the previous rows to update the values: the liquidity data will be updated with the new available data from the new forecast, while for parties and other flows, Fluentis checks if the row still exists to delete the record if the party no longer exists or will update the values (if the residual has changed or the due date has changed).

Manual settings made previously by the user (for example, in the 'amount to pay' field, or the expected date) are not overwritten by the new data to avoid losing such data.

Having done this, the user will be able to read the new forecast records from the cash flow panel and add them to the current management.

### Specific logic when there is no cash flow
In this case, nothing happens upon opening the mask. 
The user has the ***Update parties*** button available, which allows for alignment of the simulation records (the grid at the bottom) with the current situation of the parties. If the party is closed, it will be removed from management; otherwise, it will be updated with the new residual or new dates.

### General logics
#### Upper Grid
The user can retrieve the balances of the accounts they prefer from the *Records* panel to insert them among the availabilities. This panel shows the *account view*, with the detailed rows of the various movements: by selecting a row and pressing the ***Creation from records*** button, Fluentis will take the account and insert a row with the <u>balance as of today</u>, <u>**not with the amount of the specific selected movement**</u>.
It is also possible to manually enter availability records or overwrite the currency and/or euro amount.

:::note Other fields of the grid

**Global credit line**: is the global envelope of the bank master data

**Advance credit line**: is the advances envelope of the bank master data

**Collection credit line**: is the collection envelope of the bank master data

**Advance balance**: represents an 'Advance balance on invoice,' it is the total presented in the *advances and collections* module (with due date greater than 'today')

**Collection balance**: represents the 'Balance of presented bills,' the total of the bills presented in the portfolio (with due date greater than 'today')

**Free Value for Advance**: represents the 'Remaining envelope for advances,' the difference of the two previous values related to invoice advances

**Free Value for Collection**: represents the 'Remaining envelope for collection presentation,' the difference of the two previous values related to bills

**Available liquidity**: sum of the accounting balance amount + presented bills

**Progressive available liquidity**: is a progressive row of the previous value. The value of the last row is what is seen in the header of the expander.
:::

#### Lower Grid
In this grid, the user can also manually enter new rows, even without linking any account (for example, to record non-accounting incomes/expenses like salaries or VAT to be paid).

The fields that can be modified are the *Scheduled date*, *Sequential number*, *amount to pay*, the flags *Exclude* and *Hide*.

The rows turn red when the row's progressive residual goes negative.

![](/img/it-it/finance-area/maturity-values/cash-management-4.png)

The **scheduled date** is the *scheduled date* present within the party (or is set to today's date if it is earlier): changing the value in this grid of the present form will update the scheduled date within the connected maturity (upon saving).

If the row comes from the cash flow, it will take the scheduled date from the cash flow row (or today if before).

The **expiry date** is the official date of the maturity (or the cash flow).

The **Sequential number** is what orders the payment of the rows: it can be changed by manually entering the new value or indirectly via the **Change expected date** button. This button repositions selected mat. values after those that already exist on the set date, changing their number to a higher value.

**Account/Detail acc.** is editable in manual rows, not those that come from mat. values/flows.

**Note** is filled in with the trading name of the customer/supplier; otherwise, the description of the non-accounting flow being manually entered will be written manually. 
The amounts are not modifiable if they are linked to rows that come from financial mat.values/flows.

The **account** field furthest to the right is the support bank account (taken from the maturity or cash flow),

The **Exclude** flag excludes the row from the calculation while keeping it visible.

The **Hide** flag also automatically sets the *exclude* flag and serves to not count the row and make it invisible (via the filter flag in the header **Exclude** **hidden**; removing this flag makes them visible again).

The fields furthest to the right are linked to the [**Authorization Level**](/docs/configurations/tables/finance/authorization-levels/) (**authorization date, name, description, code, description and authorization note**).

### Other options:
- the filter for **bank account** (in the header), to have in the upper grid the availabilities of that bank and in the lower grid the related rows channeled to this institution;

- the **Change bank** button to massively change the reference bank of the selected rows;

- the **Authorize maturity values** button, to proceed with the authorizations available if the user can give authorization to the selected row, (according to their already achieved [**Authorization Level**](/docs/configurations/tables/finance/authorization-levels/));

- the **Create payments** button that allows creating the list from the *Vendors Payments* module if the selected rows are payable.