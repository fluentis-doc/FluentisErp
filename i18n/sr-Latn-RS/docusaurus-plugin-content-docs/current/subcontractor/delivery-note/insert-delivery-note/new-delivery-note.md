---
title: Nova otpremnica za podizvođača (za isporuku)
sidebar_position: 1
---

Obrazac se otvara putem menija **Podizvođač > Otpremnica > Nova otpremnica** ili klikom na dugme **Novo** u obrascu [Pretraga otpremnica](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders).

## 1. Obavezni podaci

Prilikom kreiranja dokumenta potrebno je odabrati **Dobavljača** (kooperanta) koji će biti primalac otpremnice, koristeći pomoć za izbor dobavljača u zaglavlju dokumenta.
Nakon odabira dobavljača sistem automatski predlaže:

- **Godinu**
- **Broj**
- **Datum**
- **Vrstu otpremnice za isporuku**

Vrsta otpremnice predlaže se prema podešavanjima definisanim u **Parametrima kooperacije**, a sve predložene vrednosti korisnik može promeniti.

## 2. Zaglavlje

Nakon unosa obaveznih podataka korisnik može nastaviti unos ostalih podataka ručno, pomoću pomoći za izbor podataka ili automatski, na osnovu podataka definisanih na kartici kooperanta.

### 2.1 Podaci dobavljača

Nakon odabira **Dobavljača**, automatski se popunjavaju podaci u kartici **Zaglavlje**, prema podacima definisanim na kartici dobavljača.
Prikazuju se sledeće sekcije:

- **Valuta**: valuta, kurs i datum kursa.

- **Država**: država, jezik i zona.

- **Pošiljka**: način isporuke, paritet isporuke, pakovanje, cenovnik i period važenja cenovnika.

### 2.2 Neobavezni podaci zaglavlja

- **Status otpremnice**: pomoću dve oznake definiše se status dokumenta. Dokument može biti:
  - **Odštampano**, nakon štampanja izveštaja otpremnice za kooperanta
  - **Razduženo**, nakon izvršenog skladišnog razduženja

  Ako dokument nije odštampan, nije ga moguće skladišno razdužiti.

- **Naša referenca / Vaša referenca**: ako je dokument nastao procedurom izvršenja iz naloga, automatski se preuzima istoimeni podatak sa izvornog naloga.

- **Projekat**: pomoću pomoći za izbor moguće je povezati dokument sa projektom.

#### Posebne funkcije

> **Očekivane isporuke**: pokreće proceduru za kreiranje otpremnice iz naloga. Funkcija postaje dostupna nakon unosa dobavljača i vrste otpremnice. Nalog koji se izvršava mora imati uključenu oznaku **Odštampano** i popunjen **Datum potvrde naloga**.

> **Automatsko razduženje skladišta**: omogućava automatsko skladišno razduženje odabranih artikala. Funkcija je dostupna tek nakon što dokument dobije status **Odštampano**.

### 2.3 Plaćanja

**Uslovi plaćanja** automatski se preuzimaju sa kartice dobavljača (*Kartica dobavljača > Plaćanja*), ali ih korisnik može izmeniti ili obrisati.

Ako je uz **Vrstu plaćanja** definisan finansijski popust, iznos popusta koristi se samo za računovodstvene potrebe, odnosno za obračun dospeća, i ne utiče na ukupan iznos otpremnice.
Ako je dokument nastao iz naloga, vrste plaćanja mogu se preuzeti iz prvog izvornog dokumenta ili sa kartice dobavljača.

#### Posebna funkcija

> **Dodaj / Otkaži plaćanja**: koristi se za dodavanje ili brisanje odabranih redova plaćanja.

### 2.4 Popusti

Prikazuju se samo unapred definisani popusti preuzeti sa kartice dobavljača (*Kartica dobavljača > Popusti*), a korisnik ih može izmeniti ili obrisati.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Agenti

Ova sekcija prikazuje šifru agenta i pripadajuću proviziju za svaki red artikla.
Šifra agenta i procenat provizije automatski se preuzimaju sa kartice kooperanta (*Kartica kooperanta > Agenti*).
Ako provizija nije definisana na kartici kooperanta, agent se ipak mora uneti, ali sa vrednošću provizije **NULL**. Vrednost **0** značila bi da je agent povezan sa kooperantom, ali da nema pravo na proviziju.
Ista sekcija dostupna je i na nivou pojedinačnih stavki artikala, na kartici **Agenti** (Predstavnici).

#### Posebna funkcija

> **Otkaži agente**: briše odabrane agente.

## Procedure zaglavlja

### Izvršenje otpremnice

U zaglavlju otpremnice za kooperanta klikom na dugme **Očekivane isporuke** otvara se obrazac za izbor naloga povezanih sa dobavljačem dokumenta.
Ovom procedurom moguće je kreirati otpremnicu na osnovu izvršenja odgovarajućeg naloga. Artikli se mogu preneti u celosti ili delimično, za ceo nalog ili samo pojedine stavke.

Za korišćenje procedure moraju biti ispunjeni sledeći uslovi:
- dobavljač na nalogu mora biti isti kao dobavljač na otpremnici
- nalog koji se izvršava mora imati uključenu oznaku **Odštampano**
- vrste dokumenata moraju biti međusobno kompatibilne

#### Postupak

Filteri za dobavljača i valutu automatski se popunjavaju prema dobavljaču odabranom na otpremnici.
Nakon definisanja željenih filtera potrebno je kliknuti **Traži**.
U rezultatima će biti prikazan jedan red za svaki odštampani nalog koji još nije izvršen ili je delimično izvršen.

:::note Upozorenje
Procedura preuzima sve podatke iz naloga. Kao posledica toga, primeniće se uslovi definisani na nalogu čak i ako su se oni u međuvremenu promenili.
:::

U tabeli rezultata korisnik može:
1. odabrati ceo nalog uključivanjem oznake na početku reda naloga
2. odabrati samo određene artikle uključivanjem oznake na početku reda artikla
3. odabrati određene artikle i izvršiti ih samo za deo količine izmenom količine za izvršenje

Za završetak postupka potrebno je kliknuti dugme **Nabavka**, nakon čega će svi relevantni podaci iz naloga biti preneti u otpremnicu.

#### Posebne funkcije

> **Traži**: primenjuje filtere pretrage na bazu unetih naloga koji još nisu izvršeni ili su samo delimično izvršeni.

> **Nabavka**: prenosi artikle odabrane u donjem prozoru u tabelu kartice **Isporuke** na otpremnici kooperacije.

> **Označi sve**: označava sve artikle sa spiska.

## 3. Isporuka

Na ovoj kartici unose se materijali koji treba da budu isporučeni kooperantu. Materijali se mogu uneti automatski putem procedure **Izvršenje iz naloga** ili ručno od strane korisnika.

#### Posebne funkcije

> **Dodaj materijal**: pokreće proceduru za unos novog materijala u tabelu artikala na kartici **Isporuke**.

> **Obriši materijal**: pokreće proceduru za brisanje materijala iz tabele artikala na kartici **Isporuke**.

#### Specifična polja

- **Broj i godina naloga podizvođača**: prikazuje broj i godinu naloga iz kojeg je stavka artikla preuzeta. Ako je stavka uneta ručno, ovo polje ostaje prazno.

- **Procenjeni datum isporuke**: predstavlja planirani datum isporuke materijala, preuzet sa kartice **Materijali za isporuku** naloga iz kojeg je nastala stavka otpremnice.

- **Očekivani povrat**: predstavlja planirani datum povrata gotovog proizvoda koji kooperant treba da izradi koristeći isporučeni materijal. Datum se preuzima sa kartice **Artikli za proizvodnju** naloga kooperacije iz kojeg je nastala stavka otpremnice.

- **Red**: predstavlja redni broj reda dokumenta i korisnik ga može izmeniti.

- **Jedinica mere**: predstavlja osnovnu jedinicu mere artikla koji se isporučuje.

- **Faza / Podfaza**: prikazuje šifru faze i podfaze proizvodnog procesa ako je artikl povezan sa proizvodnim nalogom. Ovo se prikazuje kada je nalog kooperacije, iz kojeg je kreirana stavka otpremnice, nastao iz spoljne faze proizvodnog naloga.

- **Količina**: predstavlja količinu koju je odlučeno isporučiti kooperantu i korisnik je može izmeniti.

- **Skladište**: predstavlja šifru skladišta iz kojeg se preuzima roba za isporuku kooperantu. Predlaže se skladište definisano na stavci kartice **Materijali za isporuku** naloga kooperacije iz kojeg je nastala stavka otpremnice, ali ga korisnik može promeniti. Ako je u **Parametrima kooperacije** uključena opcija **Preuzimaj skladišta prema vrsti otpremnice za isporuku**, predlaže se skladište definisano u tabeli **Vrste prodajnih otpremnica**, u koloni **Skladište**.

- **Predložak**: predstavlja šifru skladišnog predloška koji će se koristiti za izlaz robe iz skladišta prilikom isporuke kooperantu. Predlaže se predložak definisan na stavci kartice **Materijali za isporuku** naloga kooperacije iz kojeg je nastala stavka otpremnice, ali ga korisnik može promeniti. Ako je u **Parametrima kooperacije** uključena opcija **Preuzimaj skladišta prema vrsti otpremnice za isporuku**, predlaže se predložak definisan u tabeli **Vrste prodajnih otpremnica**, u koloni **Knjigovodstvena šema**.

- **Cena**: predstavlja jediničnu cenu artikla. Polje je moguće uređivati i nije obavezno. Obično se koristi kada otpremnica za isporuku mora proći carinsku obradu.

- **PDV**: predstavlja šifru PDV-a. Vrednost se može uneti ručno ili se automatski predlaže sa kartice kooperanta ili sa kartice artikla, u zavisnosti od slučaja. Padajući meni koristi podatke iz tabele **Stope PDV-a** u **Opštim podešavanjima**.

- **Vrsta prometa nabavke**: predstavlja šifru vrste prometa nabavke. Vrednost se može uneti ručno ili se automatski predlaže sa kartice artikla na redu. Padajući meni koristi podatke iz tabele **Vrste prometa nabavke** u **Tabelama oblasti Nabavka**.

- **Težine**: prikazuje ukupnu neto i bruto težinu redova artikala. Težine se preuzimaju sa kartice artikla i množe količinom reda.

### 3.1 Lotovi/Serijski brojevi

Na ovoj kartici moguće je za odabrani red u tabeli definisati lotove koji će biti razduženi iz skladišta zajedno sa količinom artikla koja se šalje kooperantu, u slučaju da se ista stavka isporučuje iz više različitih lotova.
Tabela lotova omogućava izbor lota putem **Pomoći za lotove**, koja prikazuje samo raspoložive lotove za artikl odabran u gornjoj tabeli. Za svaki lot prikazuju se: vrsta lota, šifra lota, dobavljačev lot, tip lota, datum početka, datum isteka, količina lota, lokacija skladištenja i podaci o dobavljaču lota (konto, podkonto i naziv).
Zbir količina svih odabranih lotova mora odgovarati količini isporučenoj na redu artikla.

### 3.2 Materijali

Na ovoj kartici prikazuju se dodatne informacije za red odabran u tabeli:

- **Klasa, šifra, opis i varijanta artikla, količina za isporuku, jedinica mere, skladište, predložak i nalog kooperacije**: informativni podaci preuzeti sa odabranog reda otpremnice.
- **Projekat**: predstavlja prodajni projekat povezan sa redom otpremnice. Po pravilu se predlaže projekat naveden na redu naloga kooperacije iz kojeg je stavka generisana.
- **Napomena**: omogućava unos napomene vezane za odabrani red.

## 4. Rekapitulacije

U ovom odeljku prikazane su glavne informacije o celom dokumentu.

### 4.1 Završni popusti


import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />


### 4.2 Troškovi / Popusti / Doplate


import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />


### 4.3 Ostala polja

- **Zapremina**: prikazuje ukupnu zapreminu izračunatu kao zbir zapremina svih artikala. Vrednost se preuzima iz *Kartice artikla > Težine/Dimenzije* ako se jedinica zapremine podudara sa onom definisanom u parametrima dokumenta. U obračun ulaze samo artikli sa popunjenim podatkom o zapremini.
- **Neto težina**: prikazuje ukupnu neto težinu svih artikala. Vrednost se preuzima iz *Kartice artikla > Težine/Dimenzije* i uzimaju se u obzir samo artikli sa definisanim podacima o težini.
- **Bruto težina**: prikazuje ukupnu bruto težinu svih artikala. Vrednost se preuzima iz *Kartice artikla > Težine/Dimenzije*.
- **Paketi**: prikazuje broj paketa na osnovu podataka definisanih u *Kartici artikla > Težine/Dimenzije*, u poljima **Artikli po paketu** ili **Paketi za formiranje artikla**.

### 4.4 Prevoz

Automatski se predlaže vrednost polja **Prevoz organizuje** iz *Kartice kontakta > Isporuka* (Pošiljalac / Primalac / Prevoznik), ali korisnik može promeniti predložene podatke.

### 4.5 Ukupni iznosi dokumenta

- **Iznos stavki bez popusta**: zbir vrednosti svih artikala.
- **Avans**: vrednost eventualnog avansa povezanog sa dokumentom.
- **Poklonjeni iznos**: ukupna vrednost artikala tipa poklon.
- **Ukupni primenjeni rabati**: zbir svih popusta primenjenih na artikle, bez završnih popusta.
- **Neto iznos artikala**: *Iznos stavki bez popusta – Ukupni primenjeni rabati*.
- **Ukupno završnih rabata**: vrednost završnih popusta izražena kao procenat bruto iznosa artikala.
- **Iznos umanjen za ukupan popust**: *Neto iznos artikala – Ukupno završnih rabata*.
- **Troškovi naplate**: zbir troškova naplate unetih u tabelu **Troškovi**.
- **Trošak overe**: zbir troškova taksi unetih u tabelu **Troškovi**.
- **Poreska osnovica**: *Neto iznos artikala – Ukupno završnih rabata + Ukupno troškovi*.
- **Porez**: zbir vrednosti iz PDV rekapitulacije.
- **Ukupno**: *Poreska osnovica + PDV*.