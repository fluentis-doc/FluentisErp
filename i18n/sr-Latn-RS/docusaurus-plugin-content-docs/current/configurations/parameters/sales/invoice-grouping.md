---
title: Parametri grupisanja faktura
sidebar_position: 9
---

:::tip[Fast Start]
Na ovu tabelu utiče postupak [**Fast Start**](/docs/guide/fast-start).

Ako parametre nameravate da konfigurišete ručno, pogledajte kontrolnu listu na povezanoj stranici.
:::

Parametri grupisanja omogućavaju definisanje načina podele dokumenata tokom postupaka razduženja. U tu svrhu koriste se posebne oznake kojima se dokumenti grupišu prema različitim svojstvima, kao što su kategorija, vrsta dokumenta ili druge relevantne karakteristike.

Ove opšte parametre grupisanja potrebno je konfigurisati samo jednom, nakon čega se automatski primenjuju na sve postupke i važe za sve kupce i dobavljače. Međutim, ako kupac ili dobavljač zahteva drugačije ponašanje od onog definisanog opštim parametrima, potrebno je prilagoditi parametre grupisanja u njegovom šifarniku.

Na taj način obezbeđuje se fleksibilno upravljanje razduženjima koje se može prilagoditi posebnim zahtevima svakog kupca ili dobavljača, uz zadržavanje centralizovane i dosledne konfiguracije za većinu postupaka.

U ovom obrascu definišu se pravila grupisanja za sledeće postupke:

- **Vrednovanje prodajnih otpremnica**
- **Vrednovanje servisnih intervencija**
- **Kreiranje prodajne fakture iz Pickinga**
- **Kreiranje prodajne fakture iz lista za preuzimanje UDC-a**
- **Kreiranje prodajne fakture iz POS-a**

Prilikom razduženja više dokumenata moguće ih je grupisati prema sledećim svojstvima označavanjem odgovarajućih opcija:

- **Vrsta dokumenta**: izvorni dokumenti iste vrste kreiraće jednu fakturu.
- **Godina**: izvorni dokumenti iz iste godine kreiraće jednu fakturu.
- **Mesec**: izvorni dokumenti iz istog meseca kreiraće jednu fakturu.
- **Kurs**: izvorni dokumenti sa istim kursom kreiraće jednu fakturu.
- **Projekat**: izvorni dokumenti sa istim projektom u zaglavlju kreiraće jednu fakturu.
- **Vrsta i način plaćanja**: izvorni dokumenti sa istim uslovima plaćanja kreiraće jednu fakturu.
- **Odredište**: izvorni dokumenti sa istim odredištem i prevoznikom kreiraće jednu fakturu.
- **Suvlasnici**: izvorni dokumenti sa istom vrstom operacije za upravljanje osnovnim sredstvima kreiraće jednu fakturu.

Potrebno je označiti kolone koje određuju željena pravila grupisanja za navedena razduženja.

Opcija **Zbirno** ključna je za kreiranje jednog dokumenta na osnovu više izvornih dokumenata. Ostale opcije odnose se na posebna pravila grupisanja.

Kolona **Prioritet** trenutno se ne koristi.