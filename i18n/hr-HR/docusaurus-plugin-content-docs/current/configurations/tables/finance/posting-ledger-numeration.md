---
title: Numeriranje računovodstvenih zapisa
sidebar_position: 19
---


Putanja u formi: **Konfiguracija > Administracija > Numeriranje računovodstvenih zapisa**

:::tip[FAst Start]
Tablica je uključena u proceduru [**Fast Start**](/docs/guide/fast-start)

Ako se planira ručna konfiguracija, potrebno je konzultirati kontrolni popis na poveznici.
:::
---

U ovoj tablici se, preko ** [*Standardnog brojača Fluentis* ](/docs/configurations/tables/fluentis-numerations) ** , definira politika za konačna i privremena knjiženja.

**<u>Preporučuje se slijediti postavke vidljive na slikama</u>** radi optimalnog upravljanja numeracijom.
Moguće je odabrati drugačiju periodičnost, npr. godišnju, ili ne koristiti automatsko dodjeljivanje slobodnih brojeva, ili ograničiti numeraciju kriterijem konzistentnosti između datuma i broja (npr. ne može broj 2 biti danas, a broj 1 sutra).

Također je moguće, u posebnim slučajevima ili po potrebi, započeti numeraciju od broja različitog od 1.

**NAPOMENA:** za privremenu numeraciju potrebno je da numeracija bude negativna.

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail-provisory.png)

:::danger PAŽNJA
U normalnim situacijama se ne preporučuje postavljanje više od jednog brojača istovremeno, za konačna i privremena knjiženja. Ako postoji stvarna potreba, pogledajte ** [*zaglavlje knjiženja polje *Numeracija*](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) **.
Također se ne preporučuje postavljanje datuma završetka valjanosti trenutne numeracije ako to nije motivirano stvarnom promjenom u politici numeracije. Odabrana periodičnost numeracije osigurava da se broj resetira svake godine, ili svakog dana itd. Za dodatne detalje o obnovi brojača na početku godine pogledajte [**ovdje**](/docs/configurations/utility/new-year-counter-generation).
:::

:::important Vidi također
[**VIDEO TUTORIALI O ADMINISTRATIVNIM TABLICAMA**](/docs/video/finance/intro)
:::