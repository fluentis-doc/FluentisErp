---
title: Izdavanje proizvodnih naloga
description: Postupak izdavanja i vraćanja proizvodnih naloga u Fluentisu, uz upravljanje automatski generiranim skladišnim transakcijama.
keywords:
  - proizvodni nalozi
  - izdavanje naloga
  - vraćanje naloga
  - Fluentis ERP
  - proizvodnja
sidebar_position: 2
schema: HowTo
tags:
  - proizvodnja
  - proizvodni nalozi
  - skladište
  - procedure
last_update:
  author: Fluentis Documentation Team
---

# Izdavanje proizvodnih naloga

:::important
Postupak **Izdavanja proizvodnih naloga** u Fluentisu omogućuje prijelaz naloga iz statusa *Lansiran* u status *Izvršni*.  
Putem intuitivnog sučelja moguće je filtrirati i odabrati naloge za izdavanje, pri čemu se istovremeno generiraju odgovarajuće skladišne transakcije za automatsko izdavanje materijala.  
Isti postupak omogućuje i **povrata** već puštenih naloga, čime se obnavlja prethodno stanje naloga.
:::

Ova forma omogućuje:

- promjenu statusa proizvodnih naloga;
- generiranje skladišnih izlaza za sve artikle koji u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) imaju postavljen **Tip izdavanja** na vrijednost **Automatski**;
- vraćanje već puštenih naloga uz brisanje generiranih transakcija.

## Filtar

Kartica **Filtar** omogućuje prikaz svih proizvodnih naloga u statusu *Lansiran* koji još nisu pušteni u izvršenje.  
Dostupni su različiti kriteriji odabira za sužavanje rezultata pretrage.

### Postupak pretraživanja i izdavanja

1. Na kartici **Filtar** postavite željene kriterije odabira.
2. Kliknite na **Traži** u *ribbon traci* kako biste prikazali naloge u tablici rezultata.
3. Odaberite jedan ili više naloga koje želite pustiti u izvršenje.
4. Kliknite na **Pusti naloge** kako biste:
   - promijenili status naloga iz *Pokrenut* u *Izvršni*;
   - automatski generirali skladišne izlaze za sve materijale koji u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) artikla imaju postavljen **Tip izdavanja** na vrijednost **Automatski**.

## Povrat transakcije proizvodnih naloga

Kartica **Povrat transakcije proizvodnih naloga** omogućuje poništavanje već izvršenog izdavanja naloga, vraćanje naloga u prethodno stanje te brisanje povezanih skladišnih transakcija.

### Funkcioniranje kartice Povrat transakcije proizvodnih naloga

- Nakon postavljanja filtara kliknite na **Traži**.
- Pušteni nalozi koje je moguće vratiti prikazuju se u tablici rezultata.
- Odabirom retka u donjoj tablici prikazuju se povezane skladišne transakcije generirane tijekom izdavanja naloga.

### Postupak vraćanja

1. Postavite filtre i pokrenite pretraživanje.
2. Odaberite jedan ili više naloga u statusu *Izvršni*.
3. Kliknite na **Povrat na prethodno stanje** kako biste:
   - promijenili status naloga iz *Izvršni* u *Pokrenuto*;
   - obrisali skladišne transakcije generirane tijekom izdavanja naloga.

### Uvjeti za vraćanje

Vraćanje je moguće samo ako:
- se nalog nalazi u statusu **Izvršni**;
- **nisu** evidentirane proizvodne prijave.

Vraćanje **nije moguće** ako se nalog nalazi u statusu *Izvršen*, osim ako se postupak ne vrati unatrag počevši od poništavanja knjiženja proizvodne prijave.
Vraćeni nalozi automatski će ponovno biti vidljivi na kartici **Filtar**, odakle ih je moguće ponovno pustiti u izvršenje.

## Sažetak i dodatne informacije

Postupak **Izdavanja proizvodnih naloga** u Fluentisu omogućuje:
- upravljanje prijelazom proizvodnih naloga iz statusa *Pokrenuto* u status *Izvršni*;
- automatsko generiranje skladišnih transakcija za izdavanje materijala;
- vraćanje puštenih naloga kada za njih još nisu evidentirane proizvodne prijave.

Za dodatne informacije o povezanim funkcionalnostima pogledajte:
- [MRP parametri artikala](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common)