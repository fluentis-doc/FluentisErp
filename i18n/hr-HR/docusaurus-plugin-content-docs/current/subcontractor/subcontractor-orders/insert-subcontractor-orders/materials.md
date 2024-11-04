---
title: Materijali
sidebar_position: 4
---

Obrazac se sastoji od dvije mreže koje prikazuju materijale koji se šalju izvršitelju na obradu i materijale koji će se koristiti po povratku obrađenog proizvoda. Mogu se unijeti kodirani artikli, nekodirani artikli i napomene.

Operater može upravljati materijalima koji se šalju i koriste, u tom slučaju potrebno je unijeti količinu, eventualnu cijenu obrade, predviđeni datum povratka i datum upotrebe materijala. Ovi podaci već su popunjeni ako narudžba dolazi iz *Općeg rasporeda* ili *MRP obrade*.

## Materijali za dostavu

**Šifra artikla**: označava materijal koji treba dostaviti na obradu;

:::note NAPOMENA
U slučaju da je narudžba rad na temelju ugovora generirana iz izdavanja *Planirane narudžbe* rad na temelju ugovora ili *Planirane proizvodne narudžbe* s jednim ili više vanjskih faza, materijali za dostavu neće biti prikazani ako: ne postoje [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) za artikl, ili zastavica *Razmatra se u podizvođaču* nije omogućena u  [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro), ili je *Tip izuzimanja* u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) *automatska*, ili je *Tip izuzimanja* u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) s *popisom* i zastavica WIP nije omogućena.
:::


## Materijali za upotrebu

**Šifra artikla**: označava materijal koji će se koristiti nakon povratka obrađenog proizvoda;    
**Jedinična upotreba**: količina potrebna za svaku jedinicu obrađenog proizvoda, u slučaju automatskog upravljanja rasporedom sklopova; ova informacija je automatski popunjena od strane sistema;    
**Ukupna upotreba**: ukupna količina potrebna za potpunu obradu, u slučaju automatskog upravljanja rasporedom sklopova; ova informacija je automatski popunjena od strane sistema;    
**% otpad**: dodatna količina koja se koristi kao otpad;    
**Planirani datum upotrebe**: prema ovom datumu, sistem planira dostupnost potrebnog materijala.  