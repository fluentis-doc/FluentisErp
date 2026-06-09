---
title: Razduženje robe po otpremnici  
sidebar_position: 1
---

Postupak se otvara putem **Prodaja > Otpremnica > Procedure > Razduženje robe po otpremnici**. 

Ovaj postupak omogućuje izvođenje/ponovno postavljanje operacija automatskog isporuke iz skladišta artikala koji se nalaze u otpremnici.

:::info Zapamti
Ako dokument sadrži **fiktivne artikle**, postupak će uzeti u obzir **vrstu nabave** definiranu u **MRP parametrima artikla**:
- Artikli vrste **Nabava** neće biti uključeni u skladišnu evidenciju.
- Artikli vrste **Proizvodnja** ili **Radni nalog** bit će evidentirani u skladištu zajedno s prvom razinom sastavnice (BOM-a).
:::

### Filter 

Na ovoj kartici omogućeno je korisniku pretraživanje i prijenos otpremnica označenih interno s oznakom *Kontrolirano*.

*Posebni gumbi*:

> **Traži**: omogućuje pretraživanje otpremnica za isporuku.  
> **Istovar**: omogućuje izvođenje isporuke odabranih otpremnica iz skladišta, na temelju algoritama isporuke i parametara unesenih u sljedećoj kartici *Parametri*.

:::info Zapamti

Ako u **Parametri otpremnice > Izuzimanje** opcija **Kreiraj skladišni zapis s datumom dokumenta** nije uključena, skladišno knjiženje uvijek će biti kreirano s trenutnim datumom.
Ako je opcija uključena, knjižene će koristit **datum prijevoza** definiran na kartici **Transport** otpremnice, ako je popunjen.
U suprotnom će se koristiti datum same otpremnice.
:::

### Parametri

Na ovoj kartici korisnik može odrediti način obrade stavaka.  
U ovom slučaju, ako redovi otpremnice nemaju određeno skladište i predložak za isporuku, dostupne opcije su:

- **Ne istovaruj/utovaruj cjelokupnu otpremnicu**: ne dopušta djelomičnu isporuku otpremnice;

- **Ignoriraj stavke bez skladišta i predloška**: dopušta djelomičnu isporuku dokumenta; 

- **Prihvati kao skladište i predložak slijedeće podatke**: za sve artikle pronađene bez skladišta i uzroka u odabranim otpremnicama u filtru, postavlja odmah nakon toga unesene podatke u polja: *Skladište* i *Predložak* (osigurava potpunu isporuku dokumenta).

*Posebni gumb*

> **Spremi parametre**: omogućuje spremanje postavljenih parametara za evidentiranje.

Nakon odabira otpremnice (iz kartice *Filter*) i postavljanja parametara, otpremnice se mogu isporučiti pritiskom na gumb *Razduženje*.

### Sažetak 

Na ovoj kartici korisnik može pretraživati, prikazivati i poništavati izvedene operacije isporuke koje zadovoljavaju određene uvjete za brisanje evidencija skladišta.
Podaci u donjim prikazima, **Otpremnica** i **Zapis**, odgovaraju odabranoj evidenciji isporuke u gornjem prikazu (nakon filtriranja podataka). Također, postoji mogućnost pregleda otpremnica i njihove evidencije skladišta (dvostruki klik na redak).

*Posebni gumbi*:
> **Traži**: za pretraživanje isporučenih otpremnica. Rezultat ovog postupka prikazuje se u mreži rezultata.    
> **Otkaži**: za potpuno brisanje odabranih operacija isporuke u prikazu rezultata, ako zadovoljavaju određene uvjete za brisanje evidencija skladišta.  
> **Povrati otpremnicu/primku**: za brisanje odabranih operacija isporuke u prikazu rezultata, za otpremnicu u upotrebi u prikazu detalja.  