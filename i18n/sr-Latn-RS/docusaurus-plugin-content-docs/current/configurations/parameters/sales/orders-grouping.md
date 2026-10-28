---
title: Parametri grupisanja narudžbina
sidebar_position: 7
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre nameravate da konfigurišete ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Parametri grupisanja omogućavaju definisanje načina podele dokumenata tokom postupaka razduživanja. U tu svrhu moguće je koristiti posebne oznake za grupisanje dokumenata prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opšte parametre grupisanja potrebno je konfigurisati samo jednom, nakon čega će se automatski primenjivati na sve postupke i važiti za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahteva drugačije ponašanje od onog definisanog opštim parametrima, potrebno je prilagoditi parametre grupisanja u njegovom pojedinačnom šifarniku.

Na taj način obezbeđuje se fleksibilno upravljanje razduživanjem koje se može prilagoditi specifičnim potrebama svakog kupca ili dobavljača, uz zadržavanje centralizovane i dosledne konfiguracije za većinu postupaka.

U ovom prozoru definišu se pravila grupisanja za postupak:

**Kreiranje prodajne narudžbine iz ponuda**: prilikom razduživanja više ponuda u narudžbine, ponude je moguće grupisati prema sledećim svojstvima:

- **Vrsta dokumenta**: ponude sa istom [vrstom](/docs/configurations/tables/sales/sales-offer-type) kreiraće jednu narudžbinu.
- **Godina**: ponude iz iste godine kreiraće jednu narudžbinu.
- **Mesec**: ponude iz istog meseca kreiraće jednu narudžbinu.
- **Kurs**: ponude sa istim kursom kreiraće jednu narudžbinu.
- **Projekat**: ponude sa istim projektom u [zaglavlju](/docs/sales/offers/insert-offer) kreiraće jednu narudžbinu.
- **Vrsta i način plaćanja**: ponude sa istim uslovima plaćanja kreiraće jednu narudžbinu.
- **Odredište**: ponude sa istim odredištem i prevoznikom kreiraće jednu narudžbinu.

Potrebno je označiti kolone koje odgovaraju pravilima grupisanja koja želite da primenite tokom ovog postupka.

Oznaka **Zbirno** ključna je za kreiranje jednog dokumenta na osnovu više izvornih dokumenata. Ostale oznake odnose se na posebna pravila grupisanja.

Kolona **Prioritet** trenutno se ne koristi.