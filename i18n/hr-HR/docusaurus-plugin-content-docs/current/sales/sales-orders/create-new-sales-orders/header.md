---
title: Zaglavlje
sidebar_position: 2
---

## Zaglavlje

Nakon odabira obaveznih podataka u gornjem dijelu, korisnik može nastaviti unos sljedećih podataka [ručno](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) ili pomoću [pomoći u polju](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection).

:::note NAPOMENA
Ako se dokument *stvara automatski*, ovi podaci preuzimaju se iz  *izvornog dokumenta* iz kojeg je generiran.
:::

Unoseći **Klijenta**, automatski se *nude* svi specifični podaci iz kartice **Zaglavlje**, prema prethodno postavljenim [Šifarnik kupca](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u poljima koja odgovaraju njegovoj adresi i u  *odjeljcima*:  

- **Valuta**: [Valuta](/docs/guide/glossary/glossary-intro#currency), [Tečaj](/docs/guide/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/glossary/glossary-intro#country), [Jezik](/docs/guide/glossary/glossary-intro#language), [Zona](/docs/guide/glossary/glossary-intro#zone)
- **Dostava**: [Dostava](/docs/guide/glossary/glossary-intro#shipment), [Luka](/docs/guide/glossary/glossary-intro#carriage), [Pakiranje](/docs/guide/glossary/glossary-intro#packing), [Cjenik](/docs/guide/glossary/glossary-intro#sales-price-list) i njegov [vremenski interval](/docs/guide/glossary/glossary-intro#validity-date)
- ostala polja koja se nude izborom klijenta, ali se mogu mijenjati:[Odredište](/docs/guide/glossary/glossary-intro#destination), [Primatelj](/docs/guide/glossary/glossary-intro#recipient).

*Ostala opcionalna polja*:

**Državna narudžbe**: Prilikom stvaranja otpremnice, nema aktivne oznake. Odjeljak uključuje polja:  
> **Ispisano**: se aktivira kada se pokrene ispis otpremnice i označava da je otpremnica isprintana.   
> **Preuzeto**: označava da je otpremnica preuzeta iz skladišta ručno ili putem postupka automatskog praćenja.   
> **Valorizirano**: automatski se odabire kada se otpremnica  [valorizira](/docs/sales/sales-invoices/procedures/create-invoices-from-delivery-notes) i postaje račun prodaje.   
> **Opozvano**: aktivna oznaka omogućuje poništavanje otpremnice.

:::note NAPOMENE
Oznake se mogu ukloniti postupkom ponovnog postavljanja operacije.
:::

**Bilješka kupca**: ovo polje preuzima se iz klijentovih osnovnih podataka, dok će u slučaju stvaranja iz narudžbe biti preuzeti isti podaci sadržani u polju bilješke narudžbe kupca. Može se unijeti i ručno. Desnim klikom miša možete otvoriti obrazac kako biste specificirali vrlo dug tekst bilješke; ako polje sadrži vrijednost, promijenit će se boja pozadine polja.

**Naša referenca/Vaša referenca**: U ovim poljima obično se navodi interna referenca i referenca klijenta za dokument. Ako je narudžba generirana putem postupka automatskog stvaranja, ova će polja biti popunjena informacijama prisutnima u izvornom dokumentu. Ovaj prijenos vrijedi samo u slučaju narudžbe kupca stvorene preuzimanjem podataka iz jednog dokumenta.

**Početna bilješka**: mogu se odabrati napomene koje su prethodno unesene u tablicu istog imena koja se nalazi u putanji *Konfiguracija > Alati > Upravljanje šifriranim bilješkama* Korisnik mora dvaput kliknuti na polje **Početna bilješka** kako bi otvorio pomoć *kodiranim napomenama* i odabrao podatke ili desnim klikom miša može otvoriti prozor kako bi specificirao vrlo dug tekst bilješke. Ako polje sadrži vrijednost, promijenit će se boja pozadine polja.

**Operater**: omogućuje unos korisnika koji stvara dokument. Zaposlenici su uneseni unaprijed u tablicu *Zaposlenici* koja se nalazi u putanji *Početna stranica > Zaposlenici*. Podatak postaje **obvezan** ako je opcija postavljena u parametrima samog dokumenta.

**Projekt**: koristeći [pomoć u polju](/docs/guide/operations-with-data/manual-entry-or-help-and-data-selection) dokument se može povezati s projektom. Ovo povezivanje funkcionira samo na razini zaglavlja artikla.

**Status izvršenja**: kada je narudžba izvršena putem otpremnice ili računa, njeno stanje izvršenja automatski se mijenja iz neizvršenog u djelomično izvršeno ili izvršeno. Korisnik može prisiliti izvršenje nepotpuno izvršene narudžbe, a kada se to dogodi, datum izvršenja također će biti spremljen.

**Broj praćenja**: u ovom polju navodi se broj za praćenje pošiljke;

**EDI**: označava datum prijenosa dokumenta iz EDI postupaka.

**Primjeni iz**: je datum početka za izračun datuma dospijeća plaćanja.

*Posebni gumbi*

> **Dobit iz naloga za posao**: poziva postupak za stvaranje narudžbe iz projekta. Aktivira se unosom dobavljača i vrste narudžbe dobavljača.   
> **Zamijeni procijenjeni datum dostave u linijama**: nakon što su određeni datumi tražene isporuke i/ili predviđene isporuke u zaglavlju narudžbe, moguće je masovno zamijeniti te datume u već unesenim redovima članaka.

## Plaćanja

**Uvijeti plaćanja** automatski se prenose iz *Šifarnik kupca > kartica Plaćanje* i mogu se mijenjati/brisati od strane korisnika.

Ako je uz **Vrstu plaćanja** povezan financijski popust, iznos popusta uzima se u obzir samo u računovodstvenom smislu, odnosno u rokovima plaćanja dokumenta, a ne u ukupnom iznosu otprmenice.

Ako dokument potječe iz narudžbe, vrste plaćanja mogu se preuzeti iz prvog dokumenta, iz registra klijenta ili se mogu prikazati u obliku obrasca za obradu dokumenata, a korisnik odabire željeni način plaćanja.

*Posebni gumb*

> **Otkaži plaćanja**: koristi se za brisanje odabranih redova plaćanja.


## Popusti 

Ponuđeni su samo predefinirani popusti iz *Šifarnik kupca > kartica Popusti* a ne oni dodijeljeni uvjetima plaćanja ili određenim artiklima. Mogu se mijenjati/brisati od strane korisnika.
  
Ponuđeni popusti u zaglavlju dokumenta prenose se u svaki novi redak artikla koji se unese u dokument.

Ako nakon unosa redaka artikla unesete novi popust u zaglavlju, to se neće replicirati u već unesenim redovima članaka.

*Posebni gumb*
> **Izbriši rabate**: koristi se za brisanje odabranih redova popusta.

## Trgovački predstavnici

Pokazuje kod agenta i njegovu proviziju za svaki redak članka. Kod i postotak definirani su u *Šifarnik kupca > kartica Predstavnici*.

Ako provizija nije povezana s klijentom u njegovoj anagrafici, Predstavnik ipak mora biti unesen, ali s provizijom NULL, jer da je s provizijom 0, to bi značilo da je Predstavnik povezan s Predstavnikom, ali ne prima proviziju.

U slučaju generiranja otpremnice iz narudžbe, ovi podaci naravno će se ponoviti isto kao u narudžbi klijenta.

Ovaj odjeljak bit će ponovljen za svaki redak članka u pripadajućem odjeljku Trgovački predstavnici.

**Posebni gumb**

> **Izbriši trgovačkog predstavnike**: omogućuje brisanje odabranih predstavnika.

## Odredište 

Ovdje se nudi informacija unesena u *Šifarnik kupca > kartica Dostave*, samo ako postoje zadani podaci. Padajući izbornik nudi sve primatelje, odredišta i prijevoznike unesene u šifarnik klijenta.

Adrese dostave (primatelj/odredište i prijevoznik) mogu se unijeti čak i samo opisno, bez prethodnog unosa među kontaktima.

## Drugi podaci

Ovdje se nudi informacija unesena u *Šifarniku subjekta > kartica Drugi podaci*, samo ako postoje zadani podaci.