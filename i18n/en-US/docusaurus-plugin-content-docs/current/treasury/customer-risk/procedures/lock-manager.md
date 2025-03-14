---
title: Lock Manager (Lock manager)
sidebar_position: 3
---

The form can be found in Treasury > Customer Risk > Procedures > Lock Manager.

Through this procedure, the authorization of documents that exceed credit limits is managed, as well as the direct blocking of the customer regardless of exceeding the limit.

We remind you that the blocking of documents presupposes the management of the [**customer registry**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/payments) (for customers subject to credit and according to the chosen mode) and the various tables related to [**types of sales documents**](/docs/configurations/tables/sales/sales-order-types) (e.g., Order Type, DDT Type, etc.) in order to set which types are subject to control and potentially to blocking.

## Authorization Panel (Scheda Autorizzazione)

The user with access rights has the ability to check the list of reported, blocked, authorized documents, etc.

In the grid, it will be possible to change the status from ***Blocked Doc. (Doc. bloccato)*** to **Authorization issued*** to allow the continuation of the document flow related to that document.

:::tip Info
With a double click in the grid, it will be possible to view the document itself in all its details.
:::

## Customer Blocking Panel (Scheda **Blocco clienti**)

Allows you to force an ***Orders Block (Blocco ordini)*** or ***DDT Block (Blocco ddt)*** (or both via the respective flags) for a specific list of customers, with a blocking date range.

### How to block a customer (Come bloccare un cliente)

For example, if the customer has sent a non-payable receipt, the administration could force the blocking of all operations with the customer.

1. Access this form.
2. Fill in the Description field by entering the registry of the customer to be blocked.
3. Activate the flags for Orders Block and/or DDT Block and fill in the start and end dates of the block.

:::note[MNota]
To reactivate the customer, it will be sufficient to set an **end validity date** (to keep a historical record of the block) or to delete the line from the system directly. 
**The user, block date, and unblock date are recorded.**
:::

The flags **Authorize Order (Autorizza Ordine)** and **Autorize Sales delivery notes** ensure that authorization is always required for the order or DDT, regardless of whether there is available credit or not.

**Notes**: Allows adding a free note to the blocking (or unblocking operation if the line is maintained).