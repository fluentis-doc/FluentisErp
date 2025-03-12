---
title: Presentation bank
sidebar_position: 1
---

In this table, you can enter the supporting banks that can be referenced in the Customer and Supplier registries (and Bank Registry) to manage various automations, particularly insertion in prints (e.g., bank payment details in an active invoice) and channeling of financial flows related to open items, etc.

Within this table, it is possible to enter both the company’s banks and the counterpart's banks (customer or supplier).

:::tip
It is advisable to use, for example, an alphabetical coding for the company's banks and a numerical coding for customer and supplier banks in order to differentiate them appropriately.

Additionally, you can enter both complete rows with IBAN and/or SWIFT (recommended for the company's banks) and complete rows with only ABI and CAB (recommended for counterpart banks where IBAN and SWIFT can be indicated in the fields of the grid present in the registry).
:::

If the row present in the Presentation bank table is complete with IBAN and/or SWIFT, as well as ABI and CAB, when calling this row through the combobox, the data will be displayed in the grid in the registry; otherwise, only ABI and CAB will be displayed, but it will always be possible to add the missing data directly in the grid. 

This is advisable for counterpart banks to avoid coding too many rows in the Presentation bank table used only for a single customer or supplier. It is preferable to indicate only the details of the bank branch (ABI and CAB) at which different customers or suppliers might hold current accounts.

The insertion of a bank can also be done by double-clicking on the abi/cab fields **of a Customer or Supplier registry** to open the search help among national bank agencies (Help that relies on a table called *ABI CAB*), from which you can select the appropriate one. The selection will store the data in this table and in the registry, where you can immediately complete it with the current account details, cin, iban, and swift.