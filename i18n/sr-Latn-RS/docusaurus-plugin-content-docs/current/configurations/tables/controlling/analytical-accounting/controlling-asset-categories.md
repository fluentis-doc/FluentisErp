---
title: Kategorije osnovnih sredstava za kontroling
sidebar_position: 2
---

Obrazac se nalazi na putanji: **Tabele > Kontroling > Analitičko knjigovodstvo > Kategorije osnovnih sredstava za kontroling**

:::tip Napomena
Ova tabela namenjena je preduzećima koja su aktivirala modul *Kontroling*, ali nije obavezna ako se u kontrolingu žele primenjivati računovodstvene metode obračuna amortizacije.
:::

U ovoj tabeli definišu se različite vrste obračuna koje će se koristiti pri obračunu tehničke amortizacije za potrebe kontrolinga. Pravila kontrolinga za osnovna sredstva razlikuju se od računovodstvenih pravila kako bi se omogućila primena metoda koje se, na primer, zasnivaju na količini proizvoda koju je proizvela određena mašina, umesto na vrednosti ponovne nabavke. Time se izbegavaju odstupanja uzrokovana računovodstvenim kriterijumima amortizacije, na koje snažno utiču poreska pravila.

#### Specifična polja

- **ŠIFRA** kategorije
- **OPIS** kategorije
- **KONTO TROŠKA** i **KONTO ISPRAVKE VREDNOSTI** koji će se koristiti. To mogu biti ista analitička konta koja su povezana sa računovodstvenim kategorijama osnovnih sredstava, kako bi se na kraju godine uskladila dva načina obračuna, ili posebna konta kontrolinga koja se ne koriste u računovodstvu.

:::tip Napomena
Ako se u kontrolingu u određenim slučajevima žele koristiti posebna analitička konta odvojena od konta glavne knjige, preporučuje se definisanje posebne *Vrste konta* sa aktiviranom oznakom *Kontroling*. Tako se ta konta neće moći slučajno koristiti ni u knjiženjima glavne knjige.
:::

- **OSNOVA OBRAČUNA**: moguće je odabrati jednu od sledećih vrednosti:
  - *Vrednost imovine*: ista vrednost koja se koristi u računovodstvu.
  - *Objektivna vrednost*: vanbilansni podatak.
  - *Vrednost ponovne nabavke*: polje specifično za kontroling.

- **VRSTA OBRAČUNA**: moguće je odabrati jednu od pet vrsta:
  - *Procenat*: prema procentu za kontroling definisanom na pojedinačnom osnovnom sredstvu.
  - *Trajni procenat*: kao prethodna opcija, ali bez provere preostalog iznosa za amortizaciju.
  - *Količina*: za osnovna sredstva čiji je korisni vek trajanja povezan sa teorijskom količinom proizvedenih jedinica, na primer, kalup koji može izdržati određeni broj ciklusa.
  - *Trajna količina*: kao prethodna opcija, ali bez provere da li je dostignuta ukupna teorijska količina.
  - *Ukupno u godini*: za potpunu amortizaciju osnovnog sredstva u godini nabavke.

- **PROCENAT**: moguće je definisati procenat za ovu kategoriju, koji će se preneti na pojedinačno osnovno sredstvo, ili ostaviti polje praznim kako bi se procenat unosio zasebno za svako osnovno sredstvo.

- **KORISTI PROCENAT REVALORIZACIJE**: ova oznaka nalazi se i na odgovarajućoj kartici *Amortizacija za kontroling* na kartici osnovnog sredstva. Ako je aktivirana, vrednost osnovnog sredstva povećaće se iz godine u godinu prema vrednosti definisanoj u polju *Faktor revalorizacije* u **[Parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**.

- **PONOVO KREIRAJ KONTROLNE VREDNOSTI**: ova opcija se obično koristi kada kriterijumi za vanbilansni obračun tehničke amortizacije nisu jasno definisani. Budući da obračun amortizacije počinje od godine YYYY, **FluentisERP** najpre mora da izračuna preostale vrednosti na kraju godine YYYY-1. Ako se promene procenti ili pravila obračuna, možda će biti potrebno resetovati te početne podatke kako bi se obračun pokrenuo iznova.

:::danger PAŽNJA
Budite oprezni prilikom izmene ovih kategorija. Na primer, ako aktivirate neku oznaku i sačuvate red, **FluentisERP** će pitati da li želite da ažurirate osnovna sredstva koja pripadaju toj kategoriji.

Ako potvrdite operaciju za kategoriju koja koristi obračun prema procentu, ali **procenat nije definisan**, sistem će resetovati i procente na osnovnim sredstvima.
:::

:::tip Napomena
Kategorije unete u ovu tabelu, zajedno sa pripadajućim podešavanjima, naknadno se biraju na karticama [**osnovnih sredstava**](/docs/finance-area/fixed-assets/fixed-assets-management), na kartici *Amortizacija za kontroling*, kako bi se pojedinačno osnovno sredstvo povezalo sa odgovarajućom kategorijom.
:::