---
title: Izdavanje proizvodnih naloga
description: Postupak izdavanja i vraćanja proizvodnih naloga u Fluentisu, uz upravljanje automatski generisanim skladišnim transakcijama.
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
Postupak **Izdavanja proizvodnih naloga** u Fluentisu omogućava prelazak naloga iz statusa *Lansiran* u status *Izvršni*.  
Putem intuitivnog interfejsa moguće je filtrirati i odabrati naloge za izdavanje, pri čemu se istovremeno generišu odgovarajuće skladišne transakcije za automatsko izdavanje materijala.  
Isti postupak omogućava i **vraćanje** već puštenih naloga, čime se obnavlja prethodno stanje naloga.
:::

Ova forma omogućava:

- promenu statusa proizvodnih naloga;
- generisanje skladišnih izlaza za sve artikle koji u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) imaju postavljen **Tip izdavanja** na vrednost **Automatski**;
- vraćanje već puštenih naloga uz brisanje generisanih transakcija.

## Filter

Kartica **Filter** omogućava prikaz svih proizvodnih naloga u statusu *Lansiran* koji još nisu pušteni u izvršenje.  
Dostupni su različiti kriterijumi odabira za sužavanje rezultata pretrage.

### Postupak pretrage i izdavanja

1. Na kartici **Filter** postavite željene kriterijume odabira.
2. Kliknite na **Traži** u *ribbon traci* kako biste prikazali naloge u tabeli rezultata.
3. Odaberite jedan ili više naloga koje želite pustiti u izvršenje.
4. Kliknite na **Pusti naloge** kako biste:
   - promenili status naloga iz *Pokrenut* u *Izvršni*;
   - automatski generisali skladišne izlaze za sve materijale koji u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) artikla imaju postavljen **Tip izdavanja** na vrednost **Automatski**.

## Povrat transakcije proizvodnih naloga

Kartica **Povrat transakcije proizvodnih naloga** omogućava poništavanje već izvršenog izdavanja naloga, vraćanje naloga u prethodno stanje i brisanje povezanih skladišnih transakcija.

### Funkcionisanje kartice Povrat transakcije proizvodnih naloga

- Nakon postavljanja filtera kliknite na **Traži**.
- Pušteni nalozi koje je moguće vratiti prikazuju se u tabeli rezultata.
- Odabirom reda u donjoj tabeli prikazuju se povezane skladišne transakcije generisane tokom izdavanja naloga.

### Postupak vraćanja

1. Postavite filtere i pokrenite pretragu.
2. Odaberite jedan ili više naloga u statusu *Izvršni*.
3. Kliknite na **Povrat na prethodno stanje** kako biste:
   - promenili status naloga iz *Izvršni* u *Pokrenut*;
   - obrisali skladišne transakcije generisane tokom izdavanja naloga.

### Uslovi za vraćanje

Vraćanje je moguće samo ako:

- se nalog nalazi u statusu **Izvršni**;
- **nisu** evidentirane proizvodne prijave.

Vraćanje **nije moguće** ako se nalog nalazi u statusu *Izvršen*, osim ako se postupak ne vrati unazad počevši od poništavanja knjiženja proizvodne prijave.

Vraćeni nalozi automatski će ponovo biti vidljivi na kartici **Filter**, odakle ih je moguće ponovo pustiti u izvršenje.

## Sažetak i dodatne informacije

Postupak **Izdavanja proizvodnih naloga** u Fluentisu omogućava:

- upravljanje prelaskom proizvodnih naloga iz statusa *Pokrenut* u status *Izvršni*;
- automatsko generisanje skladišnih transakcija za izdavanje materijala;
- vraćanje puštenih naloga kada za njih još nisu evidentirane proizvodne prijave.

Za dodatne informacije o povezanim funkcionalnostima pogledajte:

- [MRP parametri artikala](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro)
- [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common)