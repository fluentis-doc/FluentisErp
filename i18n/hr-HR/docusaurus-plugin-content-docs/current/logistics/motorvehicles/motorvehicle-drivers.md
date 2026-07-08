---
title: Vozači vozila
description: Upravljanje i definiranje vozača povezanih s vozilima u modulu Logistika.
keywords:
  - vozila
  - logistika
  - otpreme
  - Fluentis ERP
sidebar_position: 3
schema: HowTo
sidebar_label: Vozači vozila
tags:
  - logistika
  - vozila
  - otpreme
last_update:
  author: Fluentis Documentation Team
  date: 10-11-2025
---

# Vozači vozila

Ovaj odjeljak opisuje kako upravljati i definirati **vozače povezane s vozilima**, s detaljima o pretraživanju, unosu i upravljanju razdobljima neaktivnosti.

Tablica se nalazi na putanji **Logistika > Motorna ozila > Vozači vozila**.

Vozači definirani u ovoj tablici mogu se odabrati u [Otpremama](/docs/logistics/shipping/shippings).  
Moguće je unijeti nove zapise ili pretražiti postojeće radi pregleda, izmjene ili brisanja.

## Pretraživanje vozača vozila

Forma se sastoji od područja **filtra** i područja **rezultata**.  
Nakon postavljanja svih željenih filtara kliknite na gumb **Pretraži** kako bi se rezultati prikazali u tablici.

## Unos vozača vozila

Za unos novog vozača kliknite na prvi prazan redak u tablici ili pritisnite gumb **Novo**.  

Obvezna polja koja je potrebno popuniti su:
- **Ime**  
- **Prezime**

### Neobvezna polja

- **Vozačke dozvole**: omogućuje odabir vozačke dozvole vozača među onima definiranima u tablici [Vozačke dozvole za vozila](/docs/configurations/tables/logistics/motorvehicle-driving-licences).  
- **Dodijeljeni resurs**: omogućuje odabir [Resursa projekta](/docs/configurations/tables/project-management/project-resources/) dodijeljenog vozilu.  
- **Zaposlenik**: omogućuje povezivanje internog zaposlenika.  
- **Dodijeljeni vanjski zaposlenik**: omogućuje ručni unos vanjskog zaposlenika povezanog s resursom.

### Dostupni gumb

- **Otkaži**: omogućuje brisanje odabranog zapisa.

## Razdoblje neaktivnosti vozača

U tablici *Razdoblje neaktivnosti vozača* moguće je unijeti razdoblja neaktivnosti koja će se prikazati u [Planiranju](/docs/logistics/shipping/calendar).

### Dostupna polja

- **Opis**: opis razdoblja neaktivnosti vozača.  
- **Od datuma**: datum početka razdoblja neaktivnosti vozača.  
- **Do datuma**: datum završetka razdoblja neaktivnosti vozača.  
- **Razlog**: predstavlja razlog definiran u tablici [Razlozi odsutnosti vozača](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Sažetak i dodatne informacije

Ovaj vodič objašnjava kako unositi, pretraživati i upravljati **vozačima vozila**, uključujući razdoblja neaktivnosti i poveznice s otpremama i povezanim resursima.  

Za više informacija:
- [Otpreme](/docs/logistics/shipping/shippings)
- [Vozačke dozvole za vozila](/docs/configurations/tables/logistics/motorvehicle-driving-licences)
- [Razlozi odsutnosti vozača](/docs/configurations/tables/logistics/driver-off-time-reasons/)