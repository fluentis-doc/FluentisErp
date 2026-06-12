---
title: Nova otpremnica za podizvođača (za isporuku)
sidebar_position: 1
---

Obrazac se otvara putem izbornika **Podizvođač > Otpremnica > Nova otpremnica** ili klikom na gumb **Novo** u obrascu [Pretraga otpremnica](/docs/subcontractor/subcontractor-orders/insert-subcontractor-orders/new-subcontractor-orders).

## 1. Obavezni podaci

Prilikom kreiranja dokumenta potrebno je odabrati **Dobavljača** (kooperanta) koji će biti primatelj otpremnice, koristeći pomoć za odabir dobavljača u zaglavlju dokumenta.
Nakon odabira dobavljača sustav automatski predlaže:

- **Godinu**
- **Broj**
- **Datum**
- **Vrstu otpremnice za isporuku**

Vrsta otpremnice predlaže se prema postavkama definiranima u **Parametrima kooperacije**, a sve predložene vrijednosti korisnik može promijeniti.

## 2. Zaglavlje

Nakon unosa obaveznih podataka korisnik može nastaviti unos ostalih podataka ručno, pomoću pomoći za odabir podataka ili automatski, na temelju podataka definiranih na kartici kooperanta.

### 2.1 Podaci dobavljača

Nakon odabira **Dobavljača**, automatski se popunjavaju podaci u kartici **Zaglavlje**, prema podacima definiranim na kartici dobavljača.
Prikazuju se sljedeće sekcije:

- **Valuta**: valuta, tečaj i datum tečaja.

- **Država**: država, jezik i zona.

- **Pošiljka**: način isporuke, paritet isporuke, pakiranje, cjenik i razdoblje važenja cjenika.

### 2.2 Neobavezni podaci zaglavlja

- **Status otpremnice**: pomoću dvije oznake definira se status dokumenta. Dokument može biti:
  - **Ispisano**, nakon ispisa izvještaja otpremnice za kooperanta
  - **Istovareno**, nakon izvršenog skladišnog razduženja

  Ako dokument nije ispisan, nije ga moguće skladišno razdužiti.
- **Naša referenca / Vaša referenca**: ako je dokument nastao postupkom izvršenja iz naloga, automatski se preuzima istoimeni podatak s izvornog naloga.

- **Projekt**: pomoću pomoći za odabir moguće je povezati dokument s projektom.

#### Posebne funkcije

> **Očekivane isporuke**: pokreće proceduru za kreiranje otpremnice iz narudžbe. Funkcija postaje dostupna nakon unosa dobavljača i vrste otpremnice. Nalog (narudžba) koji se izvršava mora imati uključenu oznaku **Ispisano** te popunjen **Datum potvrde naloga**.

> **Automatsko razduženje skladišta**: omogućuje automatsko skladišno razduženje odabranih artikala. Funkcija je dostupna tek nakon što dokument dobije status **Ispisano**.

### 2.3 Plaćanja

**Uvjeti plaćanja** automatski se preuzimaju s kartice dobavljača (*Kartica dobavljača > Plaćanja*), ali ih korisnik može izmijeniti ili obrisati.

Ako je uz **Vrstu plaćanja** definiran financijski popust, iznos popusta koristi se samo za računovodstvene potrebe, odnosno za obračun dospijeća, te ne utječe na ukupni iznos otpremnice.
Ako je dokument nastao iz naloga, vrste plaćanja mogu se preuzeti iz prvog izvornog dokumenta ili iz kartice dobavljača.

#### Posebna funkcija

> **Umetni / Otkaži plaćanja**: koristi se za dodavanje ili brisanje odabranih redaka plaćanja.

### 2.4 Popusti

Prikazuju se samo unaprijed definirani popusti preuzeti s kartice dobavljača (*Kartica dobavljača > Popusti*), a korisnik ih može izmijeniti ili obrisati.

import TabDiscount from './../../../import/sections/tab-discount.md'

<TabDiscount />

### 2.5 Agenti

Ova sekcija prikazuje šifru agenta i pripadajuću proviziju za svaki redak artikla.
Šifra agenta i postotak provizije automatski se preuzimaju s kartice kooperanta (*Kartica kooperanta > Agenti*).
Ako provizija nije definirana na kartici kooperanta, agent se svejedno mora unijeti, ali s vrijednošću provizije **NULL**. Vrijednost **0** značila bi da je agent povezan s kooperantom, ali da nema pravo na proviziju.
Ista sekcija dostupna je i na razini pojedinačnih stavki artikala, na kartici **Agenti**(Predstavnici).

#### Posebna funkcija

> **Otkaži agente**: briše odabrane agente.

## Procedure zaglavlja

### Izvršenje otpremnice

U zaglavlju otpremnice za kooperanta klikom na gumb **Očekivane isporuke** otvara se obrazac za odabir naloga povezanih s dobavljačem dokumenta.
Ovom procedurom moguće je kreirati otpremnicu na temelju izvršenja odgovarajućeg naloga. Artikli se mogu prenijeti u cijelosti ili djelomično, za cijeli nalog ili samo pojedine stavke.

Za korištenje procedure moraju biti zadovoljeni sljedeći uvjeti:
- dobavljač na nalogu mora biti isti kao dobavljač na otpremnici
- nalog koji se izvršava mora imati uključenu oznaku **Ispisano**
- vrste dokumenata moraju biti međusobno kompatibilne

#### Postupak

Filteri za dobavljača i valutu automatski se popunjavaju prema dobavljaču odabranom na otpremnici.
Nakon definiranja željenih filtera potrebno je kliknuti **Traži**.
U rezultatima će biti prikazan jedan redak za svaki ispisani nalog koji još nije izvršen ili je djelomično izvršen.

:::note Upozorenje
Procedura preuzima sve podatke iz naloga. Kao posljedica toga, primijenit će se uvjeti definirani na nalogu čak i ako su se oni u međuvremenu promijenili.
:::

U tablici rezultata korisnik može:
1. odabrati cijeli nalog uključivanjem oznake na početku retka naloga
2. odabrati samo određene artikle uključivanjem oznake na početku retka artikla
3. odabrati određene artikle i izvršiti ih samo za dio količine izmjenom količine za izvršenje

Za dovršetak postupka potrebno je kliknuti gumb **Nabava**, nakon čega će se svi relevantni podaci iz naloga prenijeti u otpremnicu.

#### Posebne funkcije

> **Traži**: primjenjuje filtre pretraživanja na bazu unesenih naloga koji još nisu izvršeni ili su samo djelomično izvršeni.

> **Nabava**: prenosi artikle odabrane u donjem prozoru u tablicu kartice **Isporuke** na otpremnici kooperacije.

> **Označi sve**: odabire sve artikle s popisa.

## 3. Dostava

Na ovoj kartici unose se materijali koji se trebaju isporučiti kooperantu. Materijali se mogu unijeti automatski putem procedure **Izvršenje iz narudžbe** ili ručno od strane korisnika.

#### Posebne funkcije

> **Umetni materijal**: pokreće proceduru za unos novog materijala u tablicu artikala na kartici **Isporuke**.

> **Izbriši materijal**: pokreće proceduru za brisanje materijala iz tablice artikala na kartici **Isporuke**.

#### Specifična polja

- **Broj i godina narudžbe podizvođača**: prikazuje broj i godinu naloga (narudžbe) iz kojeg je stavka artikla preuzeta. Ako je stavka unesena ručno, ovo polje ostaje prazno.

- **Procijenjeni datum isporuke**: predstavlja planirani datum isporuke materijala, preuzet s kartice **Materijali za isporuku** naloga iz kojeg je nastala stavka otpremnice.

- **Očekivani povrat**: predstavlja planirani datum povrata gotovog proizvoda koji kooperant treba izraditi koristeći isporučeni materijal. Datum se preuzima s kartice **Artikli za proizvodnju** naloga kooperacije iz kojeg je nastala stavka otpremnice.

- **Red**: predstavlja redni broj retka dokumenta i korisnik ga može izmijeniti.

- **Jedinica mjere**: predstavlja osnovnu mjernu jedinicu artikla koji se isporučuje.

- **Faza / Podfaza**: prikazuje šifru faze i podfaze proizvodnog procesa ako je artikl povezan s proizvodnim nalogom. Ovo se prikazuje kada je nalog kooperacije, iz kojeg je kreirana stavka otpremnice, nastao iz vanjske faze proizvodnog naloga.

- **Količina**: predstavlja količinu koju je odlučeno isporučiti kooperantu i korisnik je može izmijeniti.

- **Skladište**: predstavlja šifru skladišta iz kojeg se preuzima roba za isporuku kooperantu. Predlaže se skladište definirano na stavci kartice **Materijali za isporuku** naloga kooperacije iz kojeg je nastala stavka otpremnice, ali ga korisnik može promijeniti. Ako je u **Parametrima kooperacije** uključena opcija **Uzimaj skladišta prema vrsti otpremnice za isporuku**, predlaže se skladište definirano u tablici **Vrste prodajnih otpremnica**, u stupcu **Skladište**.

- **Predložak**: predstavlja šifru skladišnog predloška koji će se koristiti za izlaz robe sa skladišta prilikom isporuke kooperantu. Predlaže se predložak definiran na stavci kartice **Materijali za isporuku** naloga kooperacije iz kojeg je nastala stavka otpremnice, ali je korisnik može promijeniti. Ako je u **Parametrima kooperacije** uključena opcija **Uzimaj skladišta prema vrsti otpremnice za isporuku**, predlaže se predložak definiran u tablici **Vrste prodajnih otpremnica**, u stupcu **Knjižna shema**.

- **Cijena**: predstavlja jediničnu cijenu artikla. Polje je moguće uređivati i nije obavezno. Obično se koristi kada otpremnica za isporuku mora proći carinsku obradu.

- **PDV**: predstavlja šifru PDV-a. Vrijednost se može unijeti ručno ili se automatski predlaže iz kartice kooperanta ili iz kartice artikla, ovisno o slučaju. Padajući izbornik koristi podatke iz tablice **Stope PDV-a** u **Općim postavkama**.

- **Vrsta prometa nabave**: predstavlja šifru vrste prometa nabave. Vrijednost se može unijeti ručno ili se automatski predlaže iz kartice artikla na retku. Padajući izbornik koristi podatke iz tablice **Vrste prometa nabave** u **Tablicama područja Nabava**.

- **Težine**: prikazuje ukupnu neto i bruto težinu redaka artikala. Težine se preuzimaju s kartice artikla i množe s količinom retka.

### 3.1 Lotovi/Serijski brojevi

Na ovoj kartici moguće je za odabrani redak u tablici definirati lotove koji će se razdužiti iz skladišta zajedno s količinom artikla koja se šalje kooperantu, u slučaju da se ista stavka isporučuje iz više različitih lotova.
Tablica lotova omogućuje odabir lota putem **Pomoći za lotove**, koja prikazuje samo raspoložive lotove za artikl odabran u gornjoj tablici. Za svaki lot prikazuju se: vrsta lota, šifra lota, dobavljačev lot, tip lota, datum početka, datum isteka, količina lota, lokacija skladištenja te podaci o dobavljaču lota (konto, podkonto i naziv).
Zbroj količina svih odabranih lotova mora odgovarati količini isporučenoj na retku artikla.

### 3.2 Materijali

Na ovoj kartici prikazuju se dodatne informacije za redak odabran u tablici:

- **Klasa, šifra, opis i varijanta artikla, količina za isporuku, mjerna jedinica, skladište, predložak i nalog kooperacije**: informativni podaci preuzeti s odabranog retka otpremnice.
- **Projekt**: predstavlja prodajni projekt povezan s retkom otpremnice. U pravilu se predlaže projekt naveden na retku naloga kooperacije iz kojeg je stavka generirana.
- **Bilješka**: omogućuje unos napomene vezane uz odabrani redak.

## 4. Sažeci

U ovom odjeljku prikazane su glavne informacije o cijelom dokumentu.

### 4.1 Konačni popusti


import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />


### 4.2 Troškovi / Popusti / Doplate


import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />


### 4.3 Ostala polja

- **Volumen**: prikazuje ukupni volumen izračunat kao zbroj volumena svih artikala. Vrijednost se preuzima iz *Kartice artikla > Težine/Dimenzije* ako se jedinica volumena podudara s onom definiranom u parametrima dokumenta. U izračun ulaze samo artikli s popunjenim podatkom o volumenu.
- **Neto težina**: prikazuje ukupnu neto težinu svih artikala. Vrijednost se preuzima iz *Kartice artikla > Težine/Dimenzije* i uzimaju se u obzir samo artikli s definiranim podacima o težini.
- **Bruto težina**: prikazuje ukupnu bruto težinu svih artikala. Vrijednost se preuzima iz *Kartice artikla > Težine/Dimenzije*.
- **Paketi**: prikazuje broj paketa na temelju podataka definiranih u *Kartici artikla > Težine/Dimenzije*, u poljima **Artikli po paketu** ili **Paketi za formiranje artikla**.

### 4.4 Prijevoz

Automatski se predlaže vrijednost polja **Prijevoz organizira** iz *Kartice kontakta > Isporuka* (Pošiljatelj / Primatelj / Prijevoznik), ali korisnik može promijeniti predložene podatke.

### 4.5 Ukupni iznosi dokumenta

- **Iznos stavki bez popusta**: zbroj vrijednosti svih artikala.
- **Zaduženje**: vrijednost eventualnog predujma povezanog s dokumentom.
- **Poklonjeni iznos**: ukupna vrijednost artikala vrste poklon.
- **Ukupni primijenjeni rabati**: zbroj svih popusta primijenjenih na artikle, bez završnih popusta.
- **Neto iznos artikala**: *Iznos stavki bez popusta – Ukupni primijenjeni rabati*.
- **Ukupno konačnih rabata**: vrijednost završnih popusta izražena kao postotak bruto iznosa artikala.
- **Iznos umanjen za ukupni popust**: *Neto iznos artikala – Ukupno konačnih rabata*.
- **Troškovi naplate**: zbroj troškova naplate unesenih u tablicu **Troškovi**.
- **Trošak ovjere**: zbroj troškova biljega unesenih u tablicu **Troškovi**.
- **Porezna osnovica**: *Neto iznos artikala – Ukupno konačnih rabata + Ukupno troškovi*.
- **Porez**: zbroj vrijednosti iz PDV rekapitulacije.
- **Ukupno**: *Porezna osnovica + PDV*.