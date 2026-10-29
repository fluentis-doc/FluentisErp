---
title: Numerisanje računovodstvenih knjiženja
sidebar_position: 19
---

Putanja u obrascu: **Konfiguracija > Administracija > Numerisanje računovodstvenih knjiženja**

:::tip[Fast Start]
Tabela je uključena u postupak [**Fast Start**](/docs/guide/fast-start).

Ako se planira ručna konfiguracija, potrebno je pogledati kontrolnu listu na povezanoj stranici.
:::

---

U ovoj tabeli se, pomoću **[standardnog Fluentis brojača](/docs/configurations/tables/fluentis-numerations)**, definiše politika numerisanja konačnih i privremenih knjiženja.

**<u>Preporučuje se da se prate postavke prikazane na slikama</u>** radi optimalnog upravljanja numerisanjem.

Moguće je odabrati drugačiju periodičnost, na primer godišnju, ne koristiti automatsko dodeljivanje slobodnih brojeva ili ograničiti numerisanje kriterijumom usklađenosti datuma i broja (npr. broj 2 ne može biti dodeljen danas, a broj 1 sutra).

Takođe je moguće, u posebnim slučajevima ili po potrebi, započeti numerisanje brojem različitim od 1.

**NAPOMENA:** za privremeno numerisanje potrebno je koristiti negativne brojeve.

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail.png)

![](/img/it-it/configurations/tables/finance/posting-ledger-numerations/posting-ledger-numerations-detail-provisory.png)

:::danger PAŽNJA
U uobičajenim okolnostima ne preporučuje se istovremeno podešavanje više od jednog brojača za konačna i privremena knjiženja. Ako postoji stvarna potreba za tim, pogledajte polje *Numerisanje* u zaglavlju knjiženja u [**šablonima za knjiženje**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates).

Takođe se ne preporučuje podešavanje datuma isteka važenja trenutnog numerisanja ako za to ne postoji stvarna potreba usled promene politike numerisanja. Izabrana periodičnost obezbeđuje da se broj resetuje svake godine, svakog dana itd. Za dodatne detalje o obnavljanju brojača na početku godine pogledajte [**ovde**](/docs/configurations/utility/new-year-counter-generation).
:::

:::important Pogledajte i
[**VIDEO-TUTORIJALI O ADMINISTRATIVNIM TABELAMA**](/docs/video/finance/intro)
:::