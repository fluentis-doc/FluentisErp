---
title: Vozači vozila
description: Upravljanje i definisanje vozača povezanih sa vozilima u modulu Logistika.
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

Ovaj odeljak opisuje kako upravljati i definisati **vozače povezane sa vozilima**, sa detaljima o pretraživanju, unosu i upravljanju periodima neaktivnosti.

Tabela se nalazi na putanji **Logistika > Motorna vozila > Vozači vozila**.

Vozači definisani u ovoj tabeli mogu se izabrati u [Otpremama](/docs/logistics/shipping/shippings).  
Moguće je uneti nove zapise ili pretražiti postojeće radi pregleda, izmene ili brisanja.

## Pretraživanje vozača vozila

Forma se sastoji od oblasti **filtera** i oblasti **rezultata**.  
Nakon postavljanja svih željenih filtera kliknite na dugme **Pretraži** kako bi se rezultati prikazali u tabeli.

## Unos vozača vozila

Za unos novog vozača kliknite na prvi prazan red u tabeli ili pritisnite dugme **Novo**.  

Obavezna polja koja je potrebno popuniti su:
- **Ime**  
- **Prezime**

### Neobavezna polja

- **Vozačke dozvole**: omogućava izbor vozačke dozvole vozača među onima definisanim u tabeli [Vozačke dozvole za vozila](/docs/configurations/tables/logistics/motorvehicle-driving-licences).  
- **Dodeljeni resurs**: omogućava izbor [Resursa projekta](/docs/configurations/tables/project-management/project-resources/) dodeljenog vozilu.  
- **Zaposleni**: omogućava povezivanje internog zaposlenog.  
- **Dodeljeni spoljni zaposleni**: omogućava ručni unos spoljnog zaposlenog povezanog sa resursom.

### Dostupno dugme

- **Otkaži**: omogućava brisanje izabranog zapisa.

## Period neaktivnosti vozača

U tabeli *Period neaktivnosti vozača* moguće je uneti periode neaktivnosti koji će se prikazati u [Planiranju](/docs/logistics/shipping/calendar).

### Dostupna polja

- **Opis**: opis perioda neaktivnosti vozača.  
- **Od datuma**: datum početka perioda neaktivnosti vozača.  
- **Do datuma**: datum završetka perioda neaktivnosti vozača.  
- **Razlog**: predstavlja razlog definisan u tabeli [Razlozi odsustva vozača](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Sažetak i dodatne informacije

Ovaj vodič objašnjava kako unositi, pretraživati i upravljati **vozačima vozila**, uključujući periode neaktivnosti i veze sa otpremama i povezanim resursima.  

Za više informacija:
- [Otpreme](/docs/logistics/shipping/shippings)
- [Vozačke dozvole za vozila](/docs/configurations/tables/logistics/motorvehicle-driving-licences)
- [Razlozi odsustva vozača](/docs/configurations/tables/logistics/driver-off-time-reasons/)