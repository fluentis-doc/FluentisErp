---
title: Kategorije osnovnih sredstava za kontroling
sidebar_position: 2
---

Obrazac se nalazi na putanji: **Tablice > Kontroling > Analitičko knjigovodstvo > Kategorije osnovnih sredstava za kontroling**

:::tip Napomena
Ova je tablica namijenjena tvrtkama koje su aktivirale modul *Kontroling*, ali nije obvezna ako se u kontrolingu žele primjenjivati računovodstvene metode vrednovanja amortizacije.
:::

U ovoj se tablici definiraju različite vrste izračuna koje će se koristiti pri obračunu tehničke amortizacije za potrebe kontrolinga. Pravila kontrolinga za osnovna sredstva razlikuju se od računovodstvenih pravila kako bi se omogućila primjena metoda koje se, primjerice, temelje na količini proizvoda koju je proizveo određeni stroj, umjesto na vrijednosti ponovne nabave. Time se izbjegavaju odstupanja uzrokovana računovodstvenim kriterijima amortizacije na koje snažno utječu porezna pravila.

#### Specifična polja

- **ŠIFRA** kategorije
- **OPIS** kategorije
- **KONTO TROŠKA** i **KONTO ISPRAVKA VRIJEDNOSTI** koji će se koristiti. To mogu biti ista analitička konta koji su povezani s računovodstvenim kategorijama osnovnih sredstava, kako bi se na kraju godine uskladila dva načina izračuna, ili posebna konta kontrolinga koji se ne koriste u računovodstvu.

:::tip Napomena
Ako se u kontrolingu u određenim slučajevima žele koristiti posebna analitička konta odvojeni od konta glavne knjige, preporučuje se definirati posebnu *Vrstu konta* s aktiviranom oznakom *Kontroling*. Tako se ta konta neće moći slučajno koristiti ni u knjiženjima glavne knjige.
:::

- **OSNOVA IZRAČUNA**: moguće je odabrati jednu od sljedećih vrijednosti:
  - *Vrijednost imovine*: ista vrijednost koja se koristi u računovodstvu.
  - *Objektivna vrijednost*: izvanbilančni podatak.
  - *Vrijednost ponovne nabave*: polje specifično za kontroling.

- **VRSTA IZRAČUNA**: moguće je odabrati jednu od pet vrsta:
  - *Postotak*: prema postotku za kontroling definiranom na pojedinom osnovnom sredstvu.
  - *Trajni postotak*: kao prethodna opcija, ali bez provjere preostalog iznosa za amortizaciju.
  - *Količina*: za osnovna sredstva čiji je korisni vijek trajanja povezan s teoretskom količinom proizvedenih jedinica, primjerice kalup koji može izdržati određeni broj ciklusa.
  - *Trajna količina*: kao prethodna opcija, ali bez provjere je li dosegnuta ukupna teoretska količina.
  - *Ukupno u godini*: za potpunu amortizaciju osnovnog sredstva u godini nabave.

- **POSTOTAK**: moguće je definirati postotak za ovu kategoriju, koji će se prenijeti na pojedino osnovno sredstvo, ili ostaviti polje praznim kako bi se postotak unosio zasebno za svako osnovno sredstvo.

- **KORISTI POSTOTAK REVALORIZACIJE**: ova se oznaka nalazi i na odgovarajućoj kartici *Amortizacija za kontroling* u kartici osnovnog sredstva. Ako je aktivirana, vrijednost osnovnog sredstva povećavat će se iz godine u godinu prema vrijednosti definiranoj u polju *Faktor revalorizacije* u **[Parametrima računovodstva](/docs/configurations/parameters/finance/accounting-parameters)**.

- **PONOVNO KREIRAJ KONTROLNE VRIJEDNOSTI**: ova se opcija obično koristi kada nisu jasno definirani izvanbilančni kriteriji za izračun tehničke amortizacije. Budući da obračun amortizacije počinje od godine YYYY, **FluentisERP** najprije mora izračunati preostale vrijednosti na kraju godine YYYY-1. Ako se promijene postoci ili pravila izračuna, možda će biti potrebno resetirati te početne podatke kako bi se obračun pokrenuo iznova.

:::danger POZOR
Budite oprezni prilikom izmjene ovih kategorija. Primjerice, ako aktivirate neku oznaku i spremite redak, **FluentisERP** pitat će želite li ažurirati osnovna sredstva koja pripadaju toj kategoriji.

Ako potvrdite operaciju za kategoriju koja koristi izračun prema postotku, ali **postotak nije definiran**, sustav će resetirati i postotke na osnovnim sredstvima.
:::

:::tip Napomena
Kategorije unesene u ovu tablicu, zajedno s pripadajućim postavkama, naknadno se odabiru na karticama [**osnovnih sredstava**](/docs/finance-area/fixed-assets/fixed-assets-management), na kartici *Amortizacija za kontroling*, kako bi se pojedino osnovno sredstvo povezalo s odgovarajućom kategorijom.
:::