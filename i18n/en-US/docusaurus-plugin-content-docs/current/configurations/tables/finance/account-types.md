---
title: Account types
sidebar_position: 30
---

:::tip[Fast Start (FAst Start)]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, please refer to the checklist on the linked page.
:::


Path: **Configuration > Tables > Administration > Account types**

### Table Management

The definition of the account type table is nothing more than a ‘qualification' that indicates to the procedure how to manage the sub-account code assigned to it:

- first of all, it identifies how to value the management detail of the 4 types of registries provided;

- secondly, it identifies the sections of the balance sheet (assets/liabilities/costs/revenues);

- it can finally serve as a filtering criterion, typically within the account help.

#### Specific Fields

**Code**: account type code.

**Description**: account type description.

**A. Active**: with flag on active.

**A. Passive**: with flag on passive.

**C. Costs**: with flag on costs.

**C. Revenues**: with flag on revenues.

**O. Order**: with flag on order accounts.

**Client**: with flag on customers + active.

**Supplier**: with flag on suppliers + passive.

**Bank**: with flag on active or passive + bank.

**Agent**: with flag on agent + passive.

**Service**: with flag on service. Accounts with this active flag are the sub-accounts for which the procedure automatically manages rectification and integration entries at the level of interim financial statements, as well as adjustments in general accounting.

**Controlling**: Accounts of this type can only be used in the controlling area and not in general accounting entries.

---

#### Subsequent Flags (from *All* to *Conai Settings*)**

With these flags, the visibility of the corresponding tabs within the customer/supplier accounting registries is enabled. Activating *All* will make all tabs visible.

### Video Tutorials

:::important See Also
[**VIDEO TUTORIALS ON ADMINISTRATIVE TABLES**](/docs/video/finance/intro)
:::