---
title: Izrada iz otpremnice
sidebar_position: 1
---

Postupak se otvara putem **Prodaja > Izlazni račun > Procedure > Izrada iz otpremnice**.

Ovaj postupak omogućava izvršavanje/ponovno izvršavanje operacija kreiranja računa iz jedne ili više otpremnica.

### Valorizacija

Na ovoj kartici korisnik ima mogućnost unosa filtera kako bi pronašao otpremnice sa statusom *Odštampano*, za fakturisanje korišćenjem filtera (tip otpremnice, datum, broj, kupac).

**Datum kreiranja**: omogućava definisanje datuma računa koji će biti kreiran.

*Posebna dugmad*:

> **Kreiraj račune iz otpremnice**: omogućava valorizaciju odabranih otpremnica u mreži, na osnovu parametara unetih na sledećoj kartici *Parametri*.  
> **Otvori otpremnicu**: omogućava pregled i izmenu odabrane otpremnice.

### Parametri

*Umetanje na račun*

Pomoću ovih parametara mogu se grupisati otpremnice istog kupca u jedan račun:

**Otpremnice sa različitim godinama**: aktivirana oznaka omogućava kreiranje računa iz otpremnica različitih godina i PDV perioda.

**Otpremnice sa različitim tipovima**: aktivirana oznaka omogućava kreiranje računa iz različitih tipova otpremnica.

**Otpremnice sa različitim kursevima**: aktivirana oznaka omogućava kreiranje računa iz više otpremnica sa različitim valutama.

**Grupisanje otpremnica po tipu i uslovu plaćanja**: načini plaćanja mogu se preuzeti iz kartice kupca ili se mogu zadržati oni iz otpremnica. Ako nema grupisanja po načinu plaćanja, račun može sadržati više različitih redova plaćanja.

*Obrada plaćanja na računu*

Ako postoje otpremnice sa različitim načinima plaćanja i ako nije postavljena oznaka *Grupiši otpremnice*:

**Preuzmi podatke iz šifarnika**: račun će preuzeti načine plaćanja iz kartice kupca (ne uzimaju se u obzir informacije unete u otpremnice).

**Zadrži podatke iz otpremnice**: račun će preuzeti načine plaćanja unete u otpremnicama.

*Umetanje na račun*

**Grupisanje dospeća na računima**: aktivirana oznaka omogućava grupisanje dospeća sa istim datumom iz različitih otpremnica u jedan red.

**Ponovo izračunaj centre troškova/centre prihoda/profitne centre**: koristi se u analitičkom računovodstvu za ponovno izračunavanje centara troškova ili profita.

*Reference otpremnice*

**Umetni reference otpremnice**: ako je uključena ova oznaka, na kartici [Artikli] računa biće prikazan *Artikal sa napomenom* koji će preuzeti reference otpremnice iz koje je račun kreiran. Sadržaj ovog artikla mora biti definisan u polju „Opis“ prema parametrima navedenim na oznaci.

*Posebno dugme*:

> **Sačuvaj parametre**: omogućava čuvanje podešenih parametara za valorizaciju.

Nakon odabira otpremnica (sa kartice *Valorizacija*) i podešavanja parametara, račun se može kreirati pomoću dugmeta *Kreiranje računa iz otpremnice*.

### Istorija

Kao poslednja kartica dostupna je kartica za povrat, koja se može koristiti za filtriranje, pregled i poništavanje izvršenih operacija.

Podaci u donjim prikazima, **Računi** i **Otpremnice**, odgovaraju odabranoj valorizaciji u gornjem prikazu (nakon filtriranja podataka). Pored toga, u ove dve mreže moguće je pregledati račun i pripadajuću otpremnicu dvostrukim klikom na odabrani red.

*Posebna dugmad*:

> **Pretraga računa**: omogućava pretragu valorizovanih otpremnica.  
> **Poništi kreiranje**: omogućava poništavanje kompletne operacije, odnosno u slučaju kreiranja više računa istovremeno briše sve račune i vraća otpremnice.  
> **Poništi račun**: omogućava vraćanje odabranog računa sa kartice *Računi*.