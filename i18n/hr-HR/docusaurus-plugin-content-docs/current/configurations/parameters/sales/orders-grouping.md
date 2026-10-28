---
title: Parametri grupiranja narudžbi
sidebar_position: 7
---

:::tip[Fast Start]
Na ovu tablicu utječe postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre namjeravate konfigurirati ručno, pogledajte kontrolni popis na povezanoj stranici.
:::

Parametri grupiranja omogućuju definiranje načina podjele dokumenata tijekom postupaka razduživanja. U tu je svrhu moguće koristiti posebne oznake za grupiranje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opće parametre grupiranja potrebno je konfigurirati samo jednom, a automatski će se primjenjivati na sve postupke te će vrijediti za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahtijeva drukčije ponašanje od onoga definiranog općim parametrima, potrebno je prilagoditi parametre grupiranja u njegovu pojedinačnom šifarniku.

Na taj se način osigurava fleksibilno upravljanje razduživanjem koje se može prilagoditi specifičnim potrebama svakog kupca ili dobavljača, uz zadržavanje centralizirane i dosljedne konfiguracije za većinu postupaka.

U ovom se prozoru definiraju pravila grupiranja za postupak:

**Kreiranje prodajne narudžbe iz ponuda**: prilikom razduživanja više ponuda u narudžbe moguće je grupirati ponude prema sljedećim svojstvima:

- **Vrsta dokumenta**: ponude s istom [vrstom](/docs/configurations/tables/sales/sales-offer-type) kreirat će jednu narudžbu.
- **Godina**: ponude iz iste godine kreirat će jednu narudžbu.
- **Mjesec**: ponude iz istog mjeseca kreirat će jednu narudžbu.
- **Tečaj**: ponude s istim tečajem kreirat će jednu narudžbu.
- **Projekt**: ponude s istim projektom u [zaglavlju](/docs/sales/offers/insert-offer) kreirat će jednu narudžbu.
- **Vrsta i način plaćanja**: ponude s istim uvjetima plaćanja kreirat će jednu narudžbu.
- **Odredište**: ponude s istim odredištem i prijevoznikom kreirat će jednu narudžbu.

Potrebno je označiti stupce koji odgovaraju pravilima grupiranja koja se žele primijeniti tijekom ovog postupka.

Oznaka **Zbirna** ključna je za kreiranje jednog dokumenta na temelju više izvornih dokumenata. Ostale se oznake odnose na posebna pravila grupiranja.

Stupac **Prioritet** trenutačno se ne koristi.