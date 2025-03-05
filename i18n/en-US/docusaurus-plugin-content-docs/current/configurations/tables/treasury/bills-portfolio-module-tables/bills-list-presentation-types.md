---
title: Bills List Presentation Types
sidebar_position: 4
---

:::tip[Fast Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist of the linked page.
:::

The table is linked to the *Type* field present in the header of the effect presentation list.

It is filled in by imposing a code and a description, to which a corresponding reference number must be assigned.

The additional options provided in the mask offer the possibility to define:

- **Giro to vendor:** whether the type of list should be managed as a transfer list of bills/titles to the supplier;

- **Consumption:** whether the type of list should be managed as a DD list currently replaced by the SDD type (Sepa Direct Debit - at the European level) in creating the telematic file in the C.Ord module. Activating the flag enables the export button for the corresponding trace in the ribbon bar of the relevant presentation list form.

- **LCR:** the French equivalent of the C.Ord. By setting this flag, the export LCR button will be active in the list and not the normal export.

- **Directly Credited:** when set, the accounting of lists records the bank account in the Debit and the transitory bank account in the Credit (for example, *Bank X C/ S.B.F.*), while 
the credit accounting will have in debit the transitory bank account and in credit the account of the type of effect (for example, the account *Active bills in portfolio*).

When the flag is deactivated, it reverts to the standard logic: in Debit the transitory account and in Credit the account taken from the type of effect (for example, the account *Active bills in portfolio*), while the credit accounting has, as it has always been, in debit the bank account and in credit the transitory bank account.

This setting is not compatible with two other logics activated from the Bills Portfolio Parameters form: the flag of *Close client in lists accounting* should not be set (because it skips the passage on the actual statement; with the active type list flag, it would effectively prevent client closure). Using the list accounting options on the maturity date also seems illogical with the active flag.

- **Extern Code:** field used in the SDD trace to define whether the list is of type *CORE* or *B2B*. Refer to the technical documentation of SDD traces.


- **The Accounts**

- Account / Detail account / Description **Bank**
- Account / Detail account / Description **Bank transitory account**

can be associated with the type of list to automate and define the accounting movement at the time of creating a new list: this refers to the detail account of the bank register on which the final effect credit will occur and the transient presentation for the accounting of lists (typically for example *Banca X C/ S.B.F.*).

<iframe width="560" height="315" src="https://www.youtube.com/embed/pnRACKqZqvM" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>