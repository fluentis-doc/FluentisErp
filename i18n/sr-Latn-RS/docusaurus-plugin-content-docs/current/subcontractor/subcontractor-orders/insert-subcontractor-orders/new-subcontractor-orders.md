---
title: Novi nalog podizvođača
sidebar_position: 1
---

U ovom obrascu moguće je ručno kreirati novi nalog kooperacije ili uređivati postojeće naloge.

Obrazac se otvara putem putanje **Podizvođač > Nalozi podizvođača > Novi nalog** ili putem dugmeta **Novo** koje se nalazi u obrascu [Pretraga naloga podizvođača](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/search-subcontractor-orders).

## 1. Obavezni podaci

Aplikacija zahteva unos **Dobavljača** (izvršioca) koji je nosilac naloga. Automatski će biti predloženi: tekuća **Godina**, **Broj**, **Datum** i **Tip dokumenta** (predložen prema vrednosti definisanoj u *Parametrima podizvođača*), a korisnik ih može izmeniti.

## 2. Zaglavlje

Nakon što se odaberu obavezni podaci u gornjem delu obrasca, korisnik može nastaviti unos sledećih podataka [ručno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection), korišćenjem [pomoćnih polja](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili će aplikacija, na osnovu podataka unetih u evidenciju izvršioca, *automatski* popuniti polja.

### 2.1 Podaci o dobavljaču

Kada se unese **Dobavljač**, automatski se *predlažu* svi specifični podaci na kartici **Zaglavlje**, prema podacima prethodno definisanim u [šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), u odgovarajućim adresnim poljima i sledećim *sekcijama*:

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Kurs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum valute](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Isporuka**: [Isporuka](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakovanje](/docs/guide/common/glossary/glossary-intro#packing), [Cenovnik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [period važenja](/docs/guide/common/glossary/glossary-intro#validity-date).

### 2.2 Plaćanja

**Uslovi plaćanja** automatski se preuzimaju iz *Šifarnika izvršioca > kartica Plaćanja* i korisnik ih može menjati ili brisati.

#### Posebno dugme

> **Otkaži plaćanja**: koristi se za brisanje odabranih redova plaćanja.

### 2.3 Popusti

Prikazuju se samo unapred definisani popusti preuzeti iz *Šifarnika izvršioca > kartica Popusti* i korisnik ih može menjati ili brisati.
Popusti definisani u zaglavlju dokumenta primenjuju se na svaki novi red artikla koji se unese u dokument.
Ako se nakon unosa stavki doda novi popust u zaglavlje, on se neće automatski primeniti na već postojeće stavke.

#### Posebno dugme

> **Obriši podrazumevane rabate**: koristi se za brisanje odabranih redova popusta.

## 3. Artikli

Obrazac sadrži tabelu u koju korisnik može ručno unositi proizvode potrebne podizvođaču. Mogu se unositi šifrirani artikli i napomene.
Obrazac može već biti popunjen ako nalog dolazi iz *proizvodnje (MS)* ili *MRP obrade*, ali korisnik i dalje može izmeniti postojeće ili dodati dodatne materijale na listu planiranog naloga.

Važno je napomenuti da će kartica **Materijali** biti neaktivna ukoliko se radi o planiranom nalogu za nabavku.

### 3.1 Podaci o artiklu

Na ovoj kartici prikazuju se informacije koje se odnose na izabranu stavku u tabeli artikala, uključujući:
- **Tok obrade**: u ovom polju preuzima se oznaka **Tok obrade** definisana u MRP parametrima artikla.
- **Količina za proizvodnju**: količina iz izvornog naloga koja je prijavljena kooperantu za obradu.
- **Obrađena količina**: ukupna količina zaprimljena nakon obrade.
- **Planirani datum povrata**: datum očekivanog povrata obrađene robe.
- **Napomena obrade**: tekst koji korisnik može uneti ručno. Moguće je automatski preneti i određene sistemske informacije, na primer opis radne faze koja je generisala potrebu za kooperacijom.
- **Faza**: dvostrukim klikom otvara se pomoćni pregled faza obrade u kojem je moguće odabrati fazu i podfazu te dodeliti izabrani materijal određenoj fazi obrade artikla.
- **Skladište**: odredišno skladište za obrađeni proizvod.
- **Težine**: prikazuju se ukupna neto i bruto težina stavki. Vrednosti se preuzimaju sa kartice artikla i množe količinom stavke.

## 3.a Materijali

Obrazac se sastoji od dve tabele:

- **Materijali za isporuku** – sadrži materijale koji se šalju kooperantu na obradu.
- **Materijali koji će se koristiti** – sadrži materijale koji će biti korišćeni ili vraćeni zajedno sa obrađenim proizvodom.

Moguće je unositi:
- šifrirane artikle,
- nešifrirane artikle,
- napomene.

Materijali se mogu unositi ručno. U tom slučaju operater mora uneti:
- količinu,
- eventualnu cenu obrade,
- planirani datum povrata,
- datum korišćenja materijala.

Ako je nalog nastao iz procedure **proizvodnje (MS)** ili **MRP obrade**, navedeni podaci će biti automatski popunjeni.

### 3.a.1 Materijali za isporuku

**Šifra artikla**: označava materijal koji treba poslati na obradu.

:::note NAPOMENA
U slučaju da je nalog generisan iz izdavanja *Planiranog naloga* ili *Planiranog proizvodnog naloga* sa jednom ili više eksternih faza, materijali za isporuku neće biti prikazani ako:

- ne postoje [MRP parametri](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) za artikl,
- nije uključena opcija *Razmatra se u podizvođaču* u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro),
- je *Tip izuzimanja* u [MRP parametrima](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) postavljen na *automatsko*,
- ili je *Tip izuzimanja* postavljen na *lista*, a opcija WIP nije uključena.
:::

### 3.a.2 Materijali koji će se koristiti

**Šifra artikla**: označava materijal koji će biti korišćen nakon povratka obrađenog proizvoda;
**Koristi se po jedinici**: količina potrebna za svaku jedinicu obrađenog proizvoda u slučaju automatskog upravljanja sastavnicom; ovu informaciju sistem automatski popunjava;
**Količina za korišćenje**: ukupna količina potrebna za kompletnu obradu u slučaju automatskog upravljanja sastavnicom; ovu informaciju sistem automatski popunjava;
**% otpada**: dodatna količina koja se koristi kao otpad;
**Planirani datum korišćenja**: prema ovom datumu sistem planira dostupnost potrebnog materijala.

## 4. Sažeci

U sekciji Sažeci prikazuju se glavne informacije za ceo dokument.

### 4.1 Konačni rabati na artiklima

Moguće je unositi samo rabate izražene u procentima koji se primenjuju na ukupan iznos dokumenta.

Rabati uneseni u ovoj sekciji izračunavaju se i primenjuju na svaki artikl u dokumentu, na kartici *Artikli > Popusti/Cenovnici*.

**Vrsta/Opis rabata**: omogućava izbor vrste rabata (predefinisane u *Vrste rabata*), određuje prioritet primene i definiše da li se rabat obračunava na osnovicu ili kaskadno u odnosu na prethodno obračunate rabate;
**Prioritet**: određuje redosled primene rabata; sortiranje se vrši rastuće;
**Kaskadno/Na osnovicu**: definiše da li se za obračun rabata koristi osnovica *(cena × količina) – (već obračunati rabati)* ili puna vrednost *(cena × količina)*;
**Vrednost**: numerička vrednost konačnog rabata koji se primenjuje.

### 4.2 Troškovi

Prikazuju se troškovi uneseni na kartici kontakta, u sekciji *Troškovi/Popusti*.

Takođe postoji mogućnost unosa troškova koji se odnose isključivo na tekući dokument.

**Vrsta/Opis**: omogućava izbor vrste troška (predefinisane u tabeli *Vrste troškova*), pri čemu se vrsti dodeljuje procenat troška koji će biti primenjen;
**Iznos troška**: prikazuje vrednost troška izraženu u valuti dokumenta;
**PDV**: označava PDV stopu koja se primenjuje na unete troškove;
**Procenat/Iznos**: određuje da li će se troškovi obračunavati kao procenat ili kao unapred definisani novčani iznos. Ako se izabere opcija **Iznos**, vrednost troška mora se uneti u odgovarajuće polje;
**Procenat**: numerička vrednost procenta troška.

### 4.3 Ukupno – dokument

**Iznos stavki bez popusta**: predstavlja zbir vrednosti svih artikala;
**Zaduženje**: predstavlja iznos eventualnog avansa primljenog za dokument;
**Vrednost poklonjenih artikala**: predstavlja vrednost besplatnih artikala unetih na kartici *Artikli*;
**Ukupno primenjeni rabati**: predstavlja ukupnu vrednost rabata primenjenih na artikle, bez konačnih rabata;
**Neto iznos artikala**: *Iznos stavki bez popusta* – *Ukupno primenjeni rabati*;
**Konačni rabati na artiklima**: predstavlja vrednost konačnih rabata izraženih u procentima na bruto iznos artikala;
**Neto iznos nakon konačnih rabata**: *Neto iznos artikala* – *Konačni rabati na artiklima*;
**Troškovi naplate**: predstavlja zbir troškova naplate unetih u tabeli *Troškovi*;
**Trošak overe**: predstavlja zbir troškova overe unetih u tabeli *Troškovi*;
**Oporezivi iznos**: *Neto iznos artikala* – *Ukupno primenjeni rabati* + *Troškovi naplate* + *Trošak overe*;
**Porez**: predstavlja zbir vrednosti prikazanih u PDV rekapitulaciji;
**Ukupno**: *Osnovica* + *PDV*.