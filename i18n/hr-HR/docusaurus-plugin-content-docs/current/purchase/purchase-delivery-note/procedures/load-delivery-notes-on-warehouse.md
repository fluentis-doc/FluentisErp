---
title: Zaduženje skladišta primkom
sidebar_position: 1
keywords:
- Primka
- Skladište
---

Omogućuje izvođenje/ponovno izvođenje automatskog knjiženja artikala prisutnih na primci u skladište.

Postupak se pokreće putem puta **Nabava > Primke > Procedure > Zaduženje skladišta Primkom**. 

### Filteri

Omogućuje unos filtara za pretraživanje primki, njihovo odabiranje i zatim knjiženje u skladištu.

**Datum zapisa zalihe**: omogućuje specificiranje datuma koji se odnosi na knjiženje u skladištu, ako taj datum već nije postavljen u Parametri *[Parametri otpremnice](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) > kartica Utovar* (točnije, zastavica aktivna na *Stvori knjiženje s datumom dokumenta*).

*Posebni gumbi*:

> **Traži**: omogućuje pretraživanje otpremnice za registraciju u skladištu.   
> **Zapis**: omogućuje izvođenje knjiženja odabranih primki u skladištu, na temelju algoritama utovara i parametara unesenih u sljedećoj kartici *Parametri*.


### Parametri

Ako retci primka nemaju skladište i predložak za utovar, putem ovog prozora korisnik može specificirati način postupanja s iznimkama za redove artikala.

Dostupne opcije su:

- **Nemoj knjižiti primku u cijelosti**: ne dopušta djelomično utovarivanje dokumenta; 

- **Ignoriraj stavke bez skladišta i predloška**: dopušta djelomično utovarivanje dokumenta; 

- **Prihvati kao skladište i predložak slijedeće podatke**: osigurava potpuno utovarivanje dokumenta. Za sve artikle pronađene bez skladišta i uzroka u odabranim primljenicama, postavlja odmah nakon toga unesene podatke u polja *Skladište* i *Uzrok*.

*Poseban gumb*

> **Spremi parametre**: omogućuje spremanje postavljenih parametara za registraciju.

### Sažetak 

Na ovoj kartici korisnik ima mogućnost pretraživanja, prikazivanja i poništavanja izvedenih knjiženja koje zadovoljavaju određene uvjete brisanja skladišnih registracija.


Podaci u donjim pregledima, **Primki** i **Knjiženja**, odnose se na odabrano knjiženje utovara u gornjem pregledu (nakon filtriranja podataka). Osim toga, u tim posljednjim dvjema pregledima moguće je prikazati primljenu robu i njezino knjiženje u skladištu (dvostruki klik na redak).

*Posebni gumbi*:
> **Pretraga**: za pretraživanje utovarenih primki. Rezultat ovog postupka prikazuje se u pregledima (tablicama niže).    
> **Izbriši zapise**: za brisanje cijelog odabranog knjiženja utovara s svim njezinim pojedinostima prikazanim u dvjema donjim pregledima.    
> **Izbriši otpremnicu**: za poništavanje utovara odabranog dokumenta u knjiženju. Ova će operacija također poništiti skladišno knjiženje ako odgovara samo jednoj primki ili ažurirati njene podatke ako odgovara više primki.
