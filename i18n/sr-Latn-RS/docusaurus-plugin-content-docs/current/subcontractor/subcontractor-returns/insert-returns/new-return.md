---
title: Novi povrat
sidebar_position: 1
---

Putem ovog obrasca moguće je ručno kreirati novi povrat podizvođača ili izmeniti već postojeći.

Obrazac se otvara putem putanje **Podizvođač > Povrati > Novi povrat** ili putem dugmeta **Novo** koje se nalazi u obrascu [Pretraga povrata](/docs/subcontractor/subcontractor-returns/insert-returns/search-returns).

## 1. Obavezni podaci

Aplikacija zahteva unos **Dobavljača** (podizvođača) na čije ime se vodi nalog, korišćenjem odgovarajuće pomoći za izbor partnera, kao i **Tip**, **Broj** i **Datum** stvarnog povrata (koji obično odgovara tekućem datumu).

- **Kontrolisano**: oznaku ručno aktivira korisnik.
- **Valorizovano** i **Utovareno**: oznake se automatski aktiviraju kada se redom izvrše vrednovanje i knjiženje dokumenta na skladište.

> **Predviđene isporuke na skladište**: dugme postaje dostupno nakon čuvanja obaveznih podataka i otvara obrazac *Preuzimanje iz naloga*, u kojem korisnik vidi sve naloge kooperacije koji još imaju delimično ili potpuno neizvršene stavke i iz kojih je moguće generisati povrate.

> **Knjiženje prijema robe na skladište**:

## 2. Zaglavlje

Nakon unosa obaveznih podataka u gornjem delu obrasca, korisnik može nastaviti sa unosom podataka ručno, korišćenjem pomoći za unos ili na osnovu podataka definisanih u šifarniku podizvođača, pri čemu aplikacija automatski popunjava polja.

Nakon izbora **Dobavljača**, automatski se predlažu svi specifični podaci na kartici **Zaglavlje**, prema podacima definisanim u [Šifarniku dobavljača](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro), uključujući sledeće sekcije:

- **Valuta**: [Valuta](/docs/guide/common/glossary/glossary-intro#currency), [Kurs](/docs/guide/common/glossary/glossary-intro#currency-exchange), [Datum kursa](/docs/guide/common/glossary/glossary-intro#currency-date).
- **Država**: [Država](/docs/guide/common/glossary/glossary-intro#country), [Jezik](/docs/guide/common/glossary/glossary-intro#language), [Zona](/docs/guide/common/glossary/glossary-intro#zone).
- **Isporuka**: [Način isporuke](/docs/guide/common/glossary/glossary-intro#shipment), [Paritet](/docs/guide/common/glossary/glossary-intro#carriage), [Pakovanje](/docs/guide/common/glossary/glossary-intro#packing), [Cenovnik](/docs/guide/common/glossary/glossary-intro#sales-price-list) i njegov [period važenja](/docs/guide/common/glossary/glossary-intro#validity-date).

### 2.1 Plaćanja

**Uslovi plaćanja** automatski se preuzimaju iz *Šifarnik podizvođača > kartica Plaćanja* i korisnik ih može izmeniti ili obrisati.

#### Posebna funkcija

> **Otkaži plaćanja**: koristi se za brisanje odabranih redova plaćanja.

### 2.2 Popusti

Prikazuju se samo unapred definisani popusti preuzeti iz *Šifarnika podizvođača > kartica Popusti*, a korisnik ih može menjati ili brisati.
Popusti definisani u zaglavlju dokumenta automatski se primenjuju na svaki novi red artikla unet u dokument.
Ako se novi popust doda u zaglavlje nakon što su stavke već unete, taj popust se neće automatski preneti na postojeće stavke.

#### Posebna funkcija

> **Izbriši rabate**: koristi se za brisanje odabranih redova popusta.

## Procedure zaglavlja

### Izvršenje iz naloga

Ovaj prozor se otvara klikom na dugme **Predviđene isporuke** na alatnoj traci i omogućava pretragu naloga kooperacije.
U donjoj tabeli prikazuje se po jedan red za svaki nalog kooperacije koji još nije potpuno ili delimično izvršen.
Korisnik može dvostrukim klikom na red naloga proširiti prikaz stavki koje još treba vratiti od podizvođača, odabrati željene stavke ili uneti količine po stavkama, a zatim kliknuti dugme **Preuzimanje** kako bi prebacio količine odabranih artikala u tabelu kartice **Artikli** dokumenta povrata.

### Posebne funkcije

> **Pretraži naloge**: omogućava primenu filtera za pretragu kompletne baze unetih naloga podizvođača koji još nisu izvršeni ili su samo delimično izvršeni.
> **Preuzimanje**: pokreće proceduru koja prenosi odabrane artikle iz donje tabele u tabelu kartice **Artikli** dokumenta povrata.
> **Prisilno izvršenje naloga**: pokreće proceduru koja označava kao izvršenu stavku naloga kooperacije koju je korisnik odabrao za prenos.
> **Označi sve**: omogućava označavanje svih redova u desnom delu prozora u kojem su prikazani artikli za prenos.

### Knjiženje prijema robe na skladište

Pogledajte detalje u dokumentaciji [Knjiženje povrata](/docs/subcontractor/subcontractor-returns/procedure/returns-record).

## 3. Artikli

Ovaj deo obrasca sadrži tabelu u koju korisnik može ručno uneti artikle koji su vraćeni od podizvođača.

### 3.1 Podaci

Na ovoj kartici prikazuju se informacije povezane sa odabranom stavkom, uključujući:

- **Proizvodni nalog**: proizvodni nalog čija je spoljna faza generisala red radnog naloga koji je izvršen kroz odabranu stavku povrata.
- **Projekat**: prikazuje projekat povezan sa stavkom povrata. Uobičajeno se radi o projektu definisanom na stavci radnog naloga iz koje je generisana stavka povrata.
- **Težina**: prikazuje ukupnu neto i bruto težinu stavke. Vrednosti se preuzimaju sa kartice artikla i množe količinom na stavci.

### 3.2 Lotovi / Serijski brojevi

Na ovoj kartici moguće je definisati lotove ili serijske brojeve koji će biti evidentirani prilikom prijema na skladište za odabranu stavku, u slučaju da se ista stavka vraća kroz više različitih lotova ili serijskih brojeva.

U zavisnosti od toga da li se za artikl vodi evidencija po lotovima ili serijskim brojevima, aktivira se odgovarajuća tabela na ovoj kartici.

:::note Napomena
Zbir količina svih unetih lotova ili serijskih brojeva mora tačno odgovarati količini vraćenog artikla na stavci.
:::

## 4. Materijali

Na ovoj kartici prikazani su materijali koje je podizvođač trebalo da koristi za proizvodnju artikala evidentiranih u tabeli **Artikli**.

Predlog materijala definiše se u **Parametrima podizvođača**, kroz polje **Podaci za predložene materijale**.

Sekcija **Artikal** sadrži informativne podatke o trenutno odabranoj stavci iz tabele **Artikli**.

### 4.1 Materijali

Za svaki artikal prikazan u gornjoj tabeli moguće je uneti pripadajuće materijale i njihove detalje ili prihvatiti automatski predložene podatke.

### 4.2 Detalji materijala

Na ovoj kartici evidentiraju se materijali koje podizvođač nije iskoristio, bilo zbog viška materijala ili zbog otpisa.

#### Specifična polja

- **Skladište**: u ovoj koloni prikazuje se šifra skladišta za povrat materijala, preuzeta iz parametara radnog naloga. Polje se automatski popunjava samo ako je za stavku materijala uneta vraćena količina, a korisnik ga može menjati.

- **Predložak**: u ovoj koloni prikazuje se šifra skladišnog predloška za knjiženje povrata, preuzeta iz parametara radnog naloga. Polje se automatski popunjava samo ako je za stavku materijala uneta vraćena količina, a korisnik ga može menjati.

  Ako su materijali koje podizvođač nije iskoristio otpisani, korišćeni predložak ne sme imati definisanu **protustavku**. Međutim, ako se materijali vraćaju na skladište, predložak mora sadržavati odgovarajuću protustavku zaduženja kako bi se definisalo odredišno skladište za vraćeni materijal.

- **Učitaj lot**: u tabeli korisnik može navesti lotove materijala koje je podizvođač koristio. Prikazuju se iste kolone i primenjuju ista pravila kao na kartici **Lotovi / Serijski brojevi** u sekciji **Artikli**.

## 5. Sažeci

U ovom odeljku prikazane su glavne informacije za ceo dokument.

### 5.1 Konačni popusti artikala

Moguće je unositi samo popuste izražene u procentima koji se primenjuju na ukupan iznos dokumenta.
Popusti definisani u ovoj sekciji automatski se obračunavaju i prikazuju na svakoj stavci dokumenta, na kartici **Artikli > Popusti / Cenovnici**.
Dostupna polja:
- **Vrsta / Opis popusta**: omogućava izbor vrste popusta definisane u šifarniku **Vrste popusta**, pri čemu se određuje prioritet primene i način obračuna (na osnovicu ili kaskadno).
- **Prioritet**: određuje redosled primene popusta. Popusti se obrađuju uzlaznim redosledom prioriteta.
- **Kaskadno / Na osnovicu**: definiše da li se popust obračunava na osnovicu umanjenu za prethodno obračunate popuste ili na punu osnovicu (*cena × količina*).
- **Vrednost**: procentualna vrednost završnog popusta.

### 5.2 Troškovi

Prikazuju se troškovi definisani na kartici kontakta, u sekciji **Naknade / Rabati**.
Takođe je moguće evidentirati troškove koji se odnose isključivo na trenutni dokument.

Dostupna polja:
- **Vrsta / Opis**: omogućava izbor vrste troška definisane u šifarniku **Vrste troškova**, zajedno sa pripadajućim pravilima obračuna.
- **Iznos troška**: vrednost troška izražena u valuti dokumenta.
- **PDV**: stopa PDV-a koja se primenjuje na uneseni trošak.
- **Procenat / Iznos**: određuje da li se trošak obračunava procentualno ili kao fiksan novčani iznos. Ako je odabran **Iznos**, potrebno je uneti konkretnu vrednost troška.
- **Procenat**: procentualna vrednost troška.

### 5.3 Ukupno – dokument

- **Iznos stavki bez popusta**: zbir vrednosti svih artikala.
- **Zaduženje**: vrednost eventualnog avansa povezanog sa dokumentom.
- **Poklonjeni iznos**: ukupna vrednost artikala tipa poklon.
- **Ukupni primenjeni rabati**: zbir svih popusta primenjenih na stavke artikala, bez završnih popusta.
- **Neto iznos artikala**: *Iznos stavki bez popusta – Ukupni primenjeni rabati*.
- **Ukupno konačnih popusta**: vrednost završnih popusta obračunatih na bruto vrednost artikala.
- **Neto iznos nakon konačnih popusta**: *Neto iznos artikala – Ukupno konačnih popusta*.
- **Troškovi naplate**: zbir troškova naplate evidentiranih u tabeli **Troškovi**.
- **Trošak overe**: zbir troškova overe evidentiranih u tabeli **Troškovi**.
- **Porezna osnovica**: *Neto iznos artikala – Konačni popusti + Ukupni nedeljivi troškovi + Ukupni deljivi troškovi*.
- **Porez**: zbir svih vrednosti iz PDV rekapitulacije.
- **Ukupno**:  
  *Porezna osnovica + PDV*