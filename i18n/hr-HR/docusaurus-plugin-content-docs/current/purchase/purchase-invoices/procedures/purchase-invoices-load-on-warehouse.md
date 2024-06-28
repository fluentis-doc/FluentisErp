---
title: Zaduženje skladišta ulaznim računima
sidebar_position: 1
keywords:
- Fattura di acquisto
- Magazzino
---

Postupak se otvara putem putanje **Nabava > Ulazni računi > Postupci > Registracija ulaznih računa u skladište**. 

Ovaj postupak omogućuje izvođenje/ponovno izvođenje automatskog unosa u skladište članaka prisutnih na fakturi.

### Filter

Na ovom kartici, korisnik ima mogućnost postavljanja filtera kako bi pronašao fakture kupovine, odabrao ih, a zatim ih registrirao u skladištu.

**Datum zapisa zalihe**: omogućuje specificiranje datuma vezanog uz registraciju u skladištu, ako taj datum već nije postavljen u [Parametri ulaznih računa](/docs/configurations/parameters/purchase/purchase-invoices-parameters) > kartica *Učitaj* (točnije, aktivirana zastava na *Kreiraj registraciju s datumom dokumenta*).

*Posebni gumbi*

> **Pretraži**: omogućuje pretraživanje faktura za registraciju u skladištu.
> **Registracija**: omogućuje izvođenje registracije odabranih faktura u skladištu, na temelju algoritama unosa i parametara unesenih na sljedećoj kartici *Parametri*.

### Parametri

Ako stavke na fakturi nemaju skladište i razlog za unos, kroz ovaj prozor korisnik ima mogućnost specificiranja načina postupanja s iznimkama za stavke članka.

Dostupne opcije su:

- **Ne obavljaj registraciju cijele fakture**: ne dopušta djelomično učitavanje dokumenta;

- **Ignoriraj stavke bez skladišta i predloška**: dopušta djelomično učitavanje dokumenta; 

- **Prihvati kao skladište i predložak slijedeće podatke**: osigurava potpuno učitavanje dokumenta. Za sve članke koji nemaju skladište i razlog u odabranim fakturama, postavlja odmah unesene podatke u polja: *Skladište* i *Razlog*.

*Posebni Gumb*

> **Spremi parametre**: omogućuje spremanje postavljenih parametara za registraciju.

Nakon odabira faktura (iz kartice *Filter*) i postavljanja parametara, fakture se mogu učitati pomoću gumba *Registracija*.

### Sažetak

Na ovoj kartici korisnik ima mogućnost pretraživanja, pregleda i poništavanja izvršenih registracija koje zadovoljavaju određene uvjete poništavanja registracija u skladištu.

Podaci u donjim mrežama, **Računi** i **Registracija**, odnose se na odabranu registraciju unosa u skladište u gornjoj mreži (nakon filtriranja podataka). Osim toga, u ovim posljednjim dvjema mrežama moguće je pregledati fakturu i njezin unos u skladište (dvostruki klik na redak).

*Posebni gumbi*

> **Pretraži**: za pretraživanje učitanih faktura. Rezultat ovog postupka prikazuje se u rezultatnim mrežama.   
> **Izbriši zaduženje**: za poništavanje cjelokupne registracije odabrane unose u skladište, sa svim njezinim pojedinostima prikazanim u donje dvije mreže.
> **Povrati račun**: za poništavanje unosa dokumenta odabrane registracije. Ova operacija također će poništiti unos u skladište ako odgovara samo jednom dokumentu ili ažurirati njegove podatke ako odgovara više faktura.