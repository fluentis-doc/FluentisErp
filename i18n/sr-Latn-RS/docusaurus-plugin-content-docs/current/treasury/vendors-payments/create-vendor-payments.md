---
title: Kreiranje plaćanja dobavljaču
sidebar_position: 2
---

Obrazac se nalazi u **Riznica > Plaćanja dobavljaču > Unos plaćanja dobavljačima** i omogućava kreiranje nove liste za plaćanje. Isti obrazac koristi se i za otvaranje već sačuvane liste radi pregleda ili izmene.

Iz obrasca za pretragu moguće je kreirati novi dokument pomoću dugmeta **Novo plaćanje** ili otvoriti postojeći dokument radi pregleda i/ili izmene.

## Kako kreirati listu za plaćanje

Osnovni koraci:

1. Izabrati **Vrstu (način) plaćanja** liste za plaćanje iz prvog padajućeg polja.
2. Sledeća polja se automatski popunjavaju:
   - **Datum izdavanja**: predlaže se tekući datum.
   - **Godina**: predlaže se tekuća poslovna godina.
   - **Broj**: automatski generisana numeracija liste za plaćanje.
3. Popuniti obavezna polja zaglavlja:
   - **Banka**: uneti šifru analitičkog konta iz registra banaka preko kojeg se vrši plaćanje.
   - **Bankovni račun**: automatski se popunjava na osnovu banke povezane sa izabranim analitičkim kontom.
   - **Početne napomene**: slobodno polje za dodatne informacije (nije deo standardnog procesa).
   - **Završne napomene**: koriste se prilikom knjiženja za popunjavanje opisa bankarske stavke.
4. Po potrebi podesiti dodatne opcije:
   - **Postavi korisnički datum valute**: definiše datum valute primaoca u platnom nalogu.
5. Proveriti statusne oznake liste:
   - **Odštampano**: ne ažurira se automatski.
   - **Datoteka je kreirana**: automatski se postavlja nakon generisanja datoteke.
6. Odabrati stavke za plaćanje:
   - Kliknuti na dugme **Kreiraj plaćanje iz dospeća plaćanja** radi izbora otvorenih stavki koje treba zatvoriti.
   - Ako je aktivirana opcija **Prikaži dospele vrednosti zaposlenih**, plaćanja se moraju obrađivati isključivo kroz modul obračuna trgovačkih predstavnika.
   - Opcija **Nametni banku za uplatu iz registra dobavljača** omogućava korišćenje unapred definisane banke iz matičnih podataka dobavljača.

7. Moguće je unositi delimična plaćanja ili ručno dodavati redove.
   - Pažnja: ručno dodavanje može izazvati razlike u kontnim saldima ukoliko se ne koristi pravilno.

8. Proveriti polje **Napomene** u tabeli:
   - Automatski se popunjava referencama plaćenih stavki i prenosi se u glavnu knjigu.

:::tip PAŽNJA
U zaglavlju liste za plaćanje nalazi se oznaka **Odobreno** koja omogućava generisanje XML datoteka i izvršenje plaćanja. Ova oznaka čuva podatke o korisniku i datumu autorizacije.

Može se automatski aktivirati kroz obrazac **Parametri plaćanja dobavljačima** uključivanjem opcije **Ovlašćeno prema podrazumevanim postavkama**.
:::

9. Kliknuti na dugme **Kreiraj SEPA datoteku** kako bi se automatski generisala XML datoteka sa listom plaćanja i arhivirala u sistem za upravljanje dokumentima.

10. Kliknuti na dugme **Dokumenti** u sekciji za upravljanje dokumentima radi pristupa generisanoj XML datoteci. Iz dokumentacionog sistema zatim koristiti opciju **Sačuvaj prilog** za preuzimanje kopije datoteke na lokalni računar.

### Specifična dugmad

> **Novo plaćanje**: Ručni unos novog reda plaćanja dobavljaču.

> **Sačuvaj**: Čuva zaglavlje liste plaćanja nakon unosa vrste plaćanja i analitičkog bankovnog konta.

> **Obriši označena plaćanja**: Briše plaćanja dobavljačima kreirana ručno ili putem funkcije kreiranja plaćanja iz dospeća.

> **Kreiraj plaćanje iz dospeća plaćanja**: Aktivira se nakon čuvanja zaglavlja i preuzima podatke iz evidencije otvorenih stavki.

> **Dokumenti**: Dugme za povezivanje sa sistemom za upravljanje dokumentima.

> **Kreiraj SEPA / međunarodni SEPA / Piteco / direktna zaduženja**: Funkcije za izvoz odgovarajućih bankarskih datoteka u propisanom formatu.

> **Knjiženje / Poništi knjiženje**: Funkcije za direktno knjiženje liste plaćanja ili poništavanje prethodno izvršenog knjiženja. Knjiženje se može izvršiti za jedan ili više označenih redova.

Prilikom pokretanja knjiženja otvara se dijalog za unos svih parametara potrebnih za generisanje knjiženja, kao što su datum knjiženja, šema knjiženja i knjigovodstveni nalog.

Dostupna je posebna opcija **Pokreni knjiženje za sve redove plaćanja**. Kada je aktivirana, sistem knjiži sve stavke liste plaćanja koje još nisu proknjižene. Ako nije aktivirana, knjiže se samo redovi prethodno označeni pre pokretanja funkcije.

Funkcija poništavanja knjiženja odnosi se isključivo na trenutno izabrani red.

Podaci o izvršenom knjiženju evidentiraju se i u postupku [**Knjiženje plaćanja dobavljačima**](/docs/treasury/vendors-payments/accounting/vendor-payments-accounting), što omogućava naknadno poništavanje knjiženja i iz tog modula.

:::note Informacija: SEPA kontrola primaoca plaćanja
SEPA standard u određenim slučajevima proverava podudaranje između vlasnika bankovnog računa i naziva primaoca plaćanja. Ako postoji razlika između naziva evidentiranog u matičnim podacima i naziva koji treba poslati banci, moguće je koristiti [**Alternativnu adresu**](/docs/configurations/tables/general-settings/address-types) sa aktiviranom opcijom **Koristi se za SEPA**.
:::

:::note Specifično polje – Nivo usluge
Omogućava izbor unapred definisanog tipa usluge za bankarske transfere, na primer:

- Instant plaćanje,
- PagoPA,
- Hitno plaćanje,
- Ostale dostupne vrste usluga.

Izabrana vrednost prenosi se u XML bankarsku datoteku.

Podrazumevana vrednost definiše se u [**Parametrima plaćanja dobavljačima**](/docs/configurations/parameters/treasury/vendor-payments-parameters).
:::

---

### **VIDEO TUTORIJALI**

<iframe width="560" height="315" src="https://www.youtube.com/embed/CDCVq0iC29s" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>