---
title: Valorizacija primke
sidebar_position: 3
---

Postupak se otvara putem **Nabava > Ulazni računi > Postupci > Valorizacija primke**. 

Ova procedura omogućuje izvođenje/ponovno pokretanje stvaranja računa za kupnju iz jednog ili više ulaznih dostavnih naloga.


### Valorizacija

Na ovom je zaslonu korisniku omogućeno korištenje filtara za pretraživanje ulaznih otpremnice koji će biti fakturirani pomoću filtara (vrsta otpremnice, datum, broj, dobavljač).

**Datum kreiranja**: omogućuje specificiranje datuma računa koji će biti stvoren.

*Poseban gumb*: 

> **Valorizacija primke**: omogućuje ocjenjivanje odabranih dostavnih naloga u mreži, na temelju parametara unesenih u sljedećem zaslonu *Parametri*.

### Parametri

*Unos u račun*

Pomoću ovih parametara moguće je grupirati dostavnice istog dobavljača u jedan račun:

**Otpremnice s različitim tipovima**: aktiviranje ovog okvira omogućuje stvaranje računa iz različitih vrsta otpremnica.

**Otpremnica s različitim tečajevima**: aktiviranje ovog okvira omogućuje stvaranje računa iz više otpremnica s različitim tečajevima.

**Ponovno izračunaj CdC/CdP**: koristi se u analitičkom računovodstvu kako bi se ponovno izračunali centri troškova ili profita.

**Grupiraj otpremnice s različitim godinama/mjesecima**: aktiviranje ovog okvira omogućuje stvaranje računa iz otpremnica različitih godina i mjeseci.

*Obrada plaćanja u računu*

Ako postoje dostavnice s različitim rješenjima plaćanja i ako nije postavljena zastava *Grupiraj otpremnice*:

**Povrati podatke nomenklature**: račun će preuzeti rješenja plaćanja iz evidencije (i neće uzeti u obzir informacije unesene u otpremnicama).

**Očuvaj one iz otpremnice** račun će preuzeti rješenja plaćanja unesena u otpremnicama.

*Umetanje na račun*

**Grupiranje dospjelosti na računima**: aktiviranje ovog okvira omogućuje grupiranje rokova plaćanja s istim datumom iz više otpremnica.

*Reference otpremnice*

**Umetni referente otpremnice**: ako je ova zastava postavljena, na kartici [Artikli](/docs/purchase/purchase-invoices/insert-purchase-invoice/items) računa bit će prikazan *napomena Artikla* koja će sadržavati reference dostavnica iz kojih je račun stvoren. Sadržaj ove napomene mora se unijeti u polje *Opis*, prema parametrima opisanim u oznaci.

*Primjer*: ![](/img/it-it/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization/image06.png). Ako otpremnica ima broj 5 i datum 11.09.2018., Artikl napomena na računu bit će: 'Otpremnica broj 5 od 11.09.2018.'.

*Poseban gumb*: 

> **Spremi parametre vrednovanja**: omogućuje spremanje postavljenih parametara za valorizaciju.

Nakon odabira otpremnica (iz kartice *Valorizacije*) i postavljanja parametara, račun se može stvoriti pomoću gumba *Valorizacija primke*.

### Prethodne

Zadnja kartica je kartica poništavanja: korisna je za filtriranje, pregled i poništavanje operacija.

Podaci u mrežama na dnu, **Računi** i **Otpremnice**, odnose se na odabranu ocjenjivanje u gornjoj mreži (nakon filtriranja podataka). Osim toga, u tim posljednjim mrežama postoji mogućnost pregleda računa i odgovarajuće dostavnice dvostrukim klikom na željeni redak.

*Posebni gumbi*:
> **Pretraga valorizacije otpremnica/primki**: za pretraživanje stvorenih računa i ocijenjenih otpremnica. Rezultat ovog postupka prikazuje se u mreži rezultata. 
> **Povrati račun**: za brisanje odabranog računa. 
> **Povrati valorizaciju**: za brisanje cijele odabrane operacije, s prikazom svih njezinih pojedinosti u donjim mrežama.