---
title: Razduženje robe po otpremnici  
sidebar_position: 1
---

Postupak se otvara putem **Prodaja > Otpremnica > Postupci > Razduženje robe po otpremnici**. 

Ovaj postupak omogućuje izvođenje/ponovno postavljanje operacija automatskog isporuke iz skladišta artikala koji se nalaze u otpremnici.

### Filter 

Na ovoj kartici omogućeno je korisniku pretraživanje i prijenos otpremnica označenih interno s oznakom *Kontrolirano*.

**Datum zapisa zalihe**: omogućuje određivanje datuma za isporuku iz skladišta, osim postavljanja *Stvaranje evidentiranja sa datumom dokumenta* u *Parametre otpremnica > kartica Razduženje*.

*Posebni gumbi*:

> **Traži**: omogućuje pretraživanje otpremnica za isporuku.  
> **Razduženje**: omogućuje izvođenje isporuke odabranih otpremnica iz skladišta, na temelju algoritama isporuke i parametara unesenih u sljedećoj kartici *Parametri*.

### Parametri

Na ovoj kartici korisnik može odrediti način obrade iznimki za retke artikla.  

U ovom slučaju, ako redovi otpremnice nemaju određeno skladište i uzrok za isporuku, dostupne opcije su:

- **Ne izvršavati potpunu isporuku otpremnice**: ne dopušta djelomičnu isporuku otpremnice;

- **Ignoriraj stavke bez skladišta i predloška**: dopušta djelomičnu isporuku dokumenta; 

- **Prihvati kao skladište i predložak slijedeće podatke**: za sve artikle pronađene bez skladišta i uzroka u odabranim otpremnicama u filtru, postavlja odmah nakon toga unesene podatke u polja: *Skladište* i *Predložak* (osigurava potpunu isporuku dokumenta).

*Posebni gumb*

> **Spremi parametre**: omogućuje spremanje postavljenih parametara za evidentiranje.

Nakon odabira otpremnice (iz kartice *Filter*) i postavljanja parametara, otpremnice se mogu isporučiti pritiskom na gumb *Razduženje*.

### Sažetak 

Na ovoj kartici korisnik može pretraživati, prikazivati i poništavati izvedene operacije isporuke koje zadovoljavaju određene uvjete za brisanje evidencija skladišta.

Podaci u donjim prikazima, **Otpremnica** i **Zapis**, odgovaraju odabranoj evidenciji isporuke u gornjoj mreži (nakon filtriranja podataka). Također, u ovim zadnjim dvjema mrežama, postoji mogućnost pregleda otpremnica i njihove evidencije skladišta (dvostruki klik na retku).

*Posebni gumbi*:
> **Traži**: za pretraživanje isporučenih otpremnica. Rezultat ovog postupka prikazuje se u mreži rezultata.    
> **Otkaži**: za potpuno brisanje odabranih operacija isporuke u prikazu rezultata, ako zadovoljavaju određene uvjete za brisanje evidencija skladišta.  
> **Povrati otpremnicu/primku**: za brisanje odabranih operacija isporuke u prikazu rezultata, za otpremnicu u upotrebi u prikazu detalja.  