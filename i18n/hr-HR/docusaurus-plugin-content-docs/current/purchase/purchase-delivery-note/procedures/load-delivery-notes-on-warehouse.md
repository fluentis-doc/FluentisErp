---
title: Zaduženje skladišta primkom
sidebar_position: 1
keywords:
- DDT
- Magazzino
---

Omogućuje izvođenje/ponovno izvođenje automatske registracije artikala prisutnih na otpremnice u skladištu.

Postupak se pokreće putem puta **Nabava > Otpremnice dobavljača > Postupci > Zaduženje skladišta Primkom**. 

### Filteri

Omogućuje unos filtara za pretraživanje otpremnice , njihovo odabiranje i zatim registriranje u skladištu.

**Datum zapisa zalihe**: omogućuje specificiranje datuma koji se odnosi na registraciju u skladištu, ako taj datum već nije postavljen u Parametri *[Parametri otpremnice](/docs/configurations/parameters/purchase/purchase-delivery-note-parameters) > kartica Utovar* (točnije, zastava aktivna na *Stvori registraciju s datumom dokumenta*).

*Posebni gumbi*:

> **Pretraga**: omogućuje pretraživanje otpremnice za registraciju u skladištu.   
> **Registracija**: omogućuje izvođenje registracije odabranih otpremnica u skladištu, na temelju algoritama utovara i parametara unesenih u sljedećoj kartici *Parametri*.


### Parametri

Ako retci primljenica nemaju skladište i uzrok za utovar, putem ovog prozora korisnik može specificirati način postupanja s iznimkama za redove artikala.

Dostupne opcije su:

- **Ne izvoditi registraciju cijele otpremnice**: ne dopušta djelomično utovarivanje dokumenta; 

- **Ignoriraj stavke bez skladišta i predloška**: dopušta djelomično utovarivanje dokumenta; 

- **Prihvati kao skladište i predložak slijedeće podatke**: osigurava potpuno utovarivanje dokumenta. Za sve artikle pronađene bez skladišta i uzroka u odabranim primljenicama, postavlja odmah nakon toga unesene podatke u polja *Skladište* i *Uzrok*.

*Poseban gumb*

> **Spremi parametre**: omogućuje spremanje postavljenih parametara za registraciju.

### Sažetak 

Na ovoj kartici korisnik ima mogućnost pretraživanja, prikazivanja i poništavanja izvedenih registracijskih operacija koje zadovoljavaju određene uvjete brisanja skladišnih registracija.


Podaci u donjim mrežama, **Otpremnice** i **Registracija**, odnose se na odabranu registraciju utovara u gornjoj mreži (nakon filtriranja podataka). Osim toga, u tim posljednjim dvjema mrežama moguće je prikazati primljenu robu i njezinu registraciju u skladištu (dvostruki klik na redak).

*Posebni gumbi*:
> **Pretraga**: za pretraživanje utovarenih otpremnica. Rezultat ovog postupka prikazuje se u rezultatnim mrežama.    
> **Izbriši zapise**: za brisanje cijele odabrane registracije utovara s svim njezinim pojedinostima prikazanim u dvjema donjim mrežama.    
> **Izbriši otpremnicu**: za poništavanje utovara odabranog dokumenta u registraciji utovara. Ova će operacija također poništiti skladišnu registraciju ako odgovara samo jednoj otpremnici ili ažurirati njene podatke ako odgovara više otpremnica.
