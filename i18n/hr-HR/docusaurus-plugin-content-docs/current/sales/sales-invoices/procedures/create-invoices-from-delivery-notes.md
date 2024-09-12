---
title: Kreiraj račune iz otpremnice
sidebar_position: 1
---

Postupak se otvara putem **Prodaja > Prodajni račun > Procedure > Kreiranje iz otpremnice**. 

Ovaj postupak omogućuje izvršenje/ponovno izvršenje operacija kreiranja računa iz jedne ili više otpremnica.

### Valorizacija

Na ovoj kartici, korisnik ima mogućnost unosa filtera kako bi pronašao otpremnice, sa statusom *Ispisano*, za fakturiranje koristeći filtre (vrsta otpremnice, datum, broj, klijent).

**Datum kreiranja**: omogućuje specificiranje datuma fakture koja će biti kreirana.

*Posebni gumbi*: 
> **Kreiraj račune iz otpremnice**: omogućuje valorizaciju odabranih otpremnica u mreži, na temelju parametara unesenih u sljedeću karticu *Parametri*.
> **Otvori otpremnicu**: omogućuje pregled i izmjenu odabrane otpremnice.

### Parametri

*Umetanje na račun*

Pomoću ovih parametara možete grupirati otpremnice istog klijenta u jedan račun:

**Otpremnice s različitim godinama**: aktivirana oznaka omogućava stvaranje računa iz otpremnica različitih godina i razdoblja PDV-a.

**Otpremnice s različitim tipovima**: aktivirana oznaka omogućava stvaranje računa iz različitih vrsta otpremnica.

**Otpremnica s različitim tečajevima**: aktivirana oznaka omogućava stvaranje računa iz više otpremnica s različitim valutama.

**Grupiranje otpremnice po tipu i uvjetu plaćanja**: vrste plaćanja mogu se preuzeti iz kartoteke klijenta ili se mogu zadržati one iz otpremnica. Ako nema grupiranja po vrsti plaćanja, račun može sadržavati više različitih redova plaćanja.

*Obrada plaćanja u računu*

Ako postoje otpremnice s različitim načinima plaćanja i ako nije postavljena oznaka *Grupiraj otpremnice*:

**Povrati podatke nomenklature**: račun će preuzeti načine plaćanja iz kartoteke (ne uzima u obzir informacije unesene u otpremnice).

**Zadrži podatke otpremnice**: račun će preuzeti načine plaćanja unesene u otpremnice.

*Umetanje na račun*

**Grupiranje dospjelosti na računima**: aktivirana oznaka omogućuje grupiranje dospijeća s istim datumom iz različitih otpremnica u jedan red.

**Ponovno izračunaj centre troškova/centre prihoda /Profitne centre**: koristi se u analitičkom računovodstvu za ponovni izračun centara troškova ili dobiti.

*Reference otpremnice*

**Umetni referente otpremnice**: ako je postavljena ova oznaka, na kartici [Artikl](/docs/purchase/purchase-invoices/insert-purchase-invoice/items) računa bit će prikazan *Artikl s napomenama* koji će preuzeti reference otpremnice iz koje je račun stvoren. Sastav ovog članka treba biti unesen u polju 'Opis' prema parametrima opisanim na naljepnici.

*Posebni gumb*: 

> **Spremi parametre**: omogućuje spremanje postavljenih parametara za valorizaciju.

Nakon odabira otpremnica (iz kartice *Valorizacija*) i postavljanja parametara, račun se može kreirati pomoću gumba *Kreiranje računa iz otpremnice.*.

### Prethodni

Kao posljednja kartica, dostupna je kartica za povrat: može se koristiti za filtriranje, pregledavanje i poništavanje operacija.

Podaci u donjim prikazima, **Fakture** i **Otpremnice**, odgovaraju odabranom ocjenjivanju u gornjem prikazu (nakon filtriranja podataka). Osim toga, u ovim zadnjim dvjema mrežama postoji mogućnost pregledavanja računa i odgovarajuće otpremnice dvostrukim klikom na odabranu liniju.

*Posebni gumbi*:
> **Pretraga računa**: omogućuje pretraživanje ocijenjenih otpremnica.    
> **Povrati stvaranje**: omogućuje poništenje cijele operacije, tj. u slučaju kreiranja više računa istovremeno, briše sve račune i vraća otpremnice.   
> **Povrati račun**: omogućuje vraćanje odabranog računa u kartici *Računi*.