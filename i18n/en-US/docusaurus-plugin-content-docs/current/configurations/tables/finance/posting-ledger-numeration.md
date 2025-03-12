---
title: Numeration Ledger Records
sidebar_position: 19
---

Form Path: **Configuration > Administration > Numeration Ledger Records (Configurazione > Amministrazione > Numerazione registrazioni contabili)**

:::tip[FAst Start]
The table is affected by the [**Fast Start**](/docs/guide/fast-start) procedure.

If you intend to configure manually, refer to the checklist on the linked page.
:::
---

In this table, the policy for definitive and provisional accounting records is defined through a ** [*Standard Numbering of Fluentis* ](/docs/configurations/tables/fluentis-numerations) **.

**<u>It is recommended to follow the settings visible in the images</u>** for optimal management of the numbering.
You can choose a different frequency, such as annual, or not adopt the recovery of free numbers, or even tie the numbering to the criterion of consistency between date and number (for example, I cannot have number 2 today and number 1 tomorrow).

It is also possible, in special cases or specific needs, to start the numbering from a number other than 1.

**NOTE:** for provisional numbering, it is necessary that the numbering be negative.

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail-provisory.png)

:::danger ATTENTION
It is not recommended to set, in normal situations, more than one numerator for definitive and provisional records simultaneously. If this need arises, refer to ** [*the header of the accounting reason* field *Numbering*](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) **.
It is also not advisable to set an expiration date for the current numbering unless this is justified by an actual change in the details of the policy itself. The chosen frequency in the numbering itself means that the number restarts every year, or every day, etc. For further details regarding the renewal of numerators at the turn of the year, see [**here**](/docs/configurations/utility/new-year-counter-generation).
:::

:::important See Also
[**VIDEO TUTORIALS ON ADMINISTRATIVE TABLES**](/docs/video/finance/intro.md)
:::