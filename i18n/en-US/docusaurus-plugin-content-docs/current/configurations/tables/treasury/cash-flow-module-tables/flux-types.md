---
title: Flow Types
sidebar_position: 2
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

In case you intend to configure manually, refer to the checklist on the linked page.
:::

The table, which is a prerequisite for using the module, provides for the coding of the types of cash flow that the company intends to enable for simulations.

It is recommended to encode all the types provided: the *cash flow automatic generation* procedure allows you to define, from time to time, which of these to consider and which not.

The coding of the flow type is free in code and description, as desired, and must then be related through the corresponding flags to the data that can be managed.



The following data sources are provided:

**Code**: code of the flow types;

**Description**: description of the flow types;

**Mat. values**: the data source is the open maturity values from general ledger;

**Ledger balance**: from this flow type, the initial financial availabilities are obtained, with respect to the *financial account types* coded;

**Sales orders/purchase orders**: sales orders, of the types with the *cash flow* flag, printed and confirmed, not yet fulfilled;

**Purchase/Sale invoices**: invoices printed/checked but not yet accounted (not pro-forma type);

**Off-balance**: manual off-balance deadlines defined in the cash flow module itself through the *Off-balance Due Dates* form;

**Professional Men**: professional fees not yet accounted (if accounted, they fall under open mat. values);

**Purchase/Sale delivery note**: delivery note of the types with the *cash flow* flag, printed and confirmed, not valued (if valued, they fall under invoices);

**Subcontractor orders and returns**: subcontractor orders to be fulfilled and subcontractor returns not yet invoiced;

**PD**: purchase requests;

**Planned order**: production orders with planned external phases or production orders that foresee a purchase request.

**Bills portfolio**: Bills issued (and presented, depending on the setting of the *Use on time in the headframe* flag present in the *cash flow automatic generation* mask)

**Advances**: Invoice advance statements created. The processing of the cash flow, if this type has the 'Use on time in the headframe' flag set (in the *Cash Flow Automatic Generation* mask), will record the amounts of the statements accounted for the amount advanced on the bank account, and in the flows on the due dates. When invoices are collected (by processing a new cash flow), the due flows are deleted, and the bank account amount is updated with the remaining amount not yet advanced minus any commissions and interest.