---
title: Unos cjenika dobavljača 
sidebar_position: 3
---

Obrazac se otvara putem putanje **Nabava > Cjenici Dobavljača > Novi cjenik** ili putem gumba **Novo** koji se nalazi u obrascu [Pretraživanje Cjenika dobavljača.

## **1. Obavezni podaci**

U obrascu za unos automatski se predlažu vrijednosti polja **Od datuma valjanosti** (predložen je trenutni datum početka valjanosti) i [**Valutu**](/docs/guide/common/glossary/glossary-intro#currency) (predložena je valuta tvrtke), ali ih je moguće promijeniti.

Za nastavak stvaranja cjenika, korisnik mora unijeti:

**Dobavljača**, koristeći [pomoćno polje](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [izravno](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unoseći podatke.

**Do datuma valjanosti**: ovo je opcionalno polje koje se koristi ako se želi definirati promotivnu kampanju ili postaviti datum isteka cjenika.

:::warning Važno
Kako bi cjenik bio valjan za određenog dobavljača, potrebno ga je povezati na kartici dobavljača u kartici **Cjenici**. Više informacija dostupno je u dokumentaciji dobavljača.
:::

## Dodatni podaci

- **Datum završetka važenja** – koristi se kada je potrebno definirati vremenski ograničen cjenik, primjerice za promotivne akcije ili posebne uvjete nabave. Datum je moguće masovno postaviti na više cjenika iz pregleda cjenika korištenjem funkcije **Zatvori**.

- **Struktura dodatnih popusta** – ako je na kartici dobavljača definirana dodatna struktura popusta, prikazat će se u ovom polju samo za pregled.

- **Napomene** – slobodan unos dodatnih informacija vezanih uz cjenik.

Nakon unosa obaveznih podataka potrebno je spremiti dokument kako bi bilo moguće unositi stavke cjenika.

## **2. Artikli**

Nakon što se unese i spremi dobavljač, da bi se unio novi artikl, jednostavno se pozicionira na redak i unašaju se različiti podaci ili se koristi gumb *Novi artikl* koji se nalazi u *ribbon* traci.

Dostupni stupci uključuju:

- **Artikl / Opis artikla** – šifra i naziv artikla koji se dodaje u cjenik. Novi artikl moguće je unijeti izravno u tablicu ili korištenjem funkcije **Novi artikl**.

- **Šifra / Opis varijante artikla** – koristi se kada se cijena odnosi na određenu varijantu artikla.

- **Šifra / Opis artikla dobavljača** – koristi se ako dobavljač koristi vlastitu šifru artikla koja se razlikuje od interne šifre u sustavu.

- **Šifra / Opis varijante artikla dobavljača** – koristi se ako dobavljač za pojedinu varijantu artikla koristi vlastitu oznaku.

- **Jedinica mjere** – osnovna ili alternativna jedinica mjere za koju vrijedi definirana cijena.

- **Marka proizvoda (artikl)** – oznaka robne marke artikla, ako je definirana.

- **Količina** – referentna količina za koju vrijedi navedena cijena. Standardno je postavljena na 1. Ako je definirana druga vrijednost, sustav prilikom izračuna koristi odnos između cijene i količine.

- **Nabavna cijena** – cijena artikla izražena u valuti cjenika. Ovo polje dostupno je samo kada je uključena opcija prikaza nabavnih cijena.

- **Dodatna vrijednost** i **Dodatni postotak** – koriste se pri kreiranju prodajnih cjenika na temelju nabavnih cjenika. Na nabavnu cijenu automatski se dodaje definirana vrijednost ili postotak.

## 2.1 Detalji

Za svaki artikl na cjeniku moguće je definirati različite vrste popusta.

U polju **Vrsta obračuna popusta** određuje se zadana metoda obračuna popusta za odabrani artikl. Vrijednost definirana na cjeniku ima prednost nad postavkama definiranim na kartici artikla.

U desnom dijelu obrasca moguće je definirati jedan ili više popusta koji će se primjenjivati na artikl. Ako je za artikl definirano više različitih vrsta popusta, tijekom unosa dokumenta moguće je odabrati odgovarajuću metodu obračuna.

U nastavku su opisane dostupne vrste popusta.

## 2.2 Fiksni popusti (bez grupiranja)

Fiksni popusti primjenjuju se neovisno o količini ili drugim uvjetima navedenima na dokumentu. Najčešći primjer su standardni komercijalni popusti.

Dostupna polja su:

- **Vrsta popusta** – odabir vrste popusta iz unaprijed definiranog šifarnika.

- **Prioritet** – određuje redoslijed primjene popusta kada je definirano više popusta za isti artikl.

- **Način obračuna** – određuje osnovicu za izračun popusta:
  - **Kaskadno (višefazno)** – popust se obračunava na iznos umanjen za prethodno obračunate popuste.
  - **Na osnovicu** – popust se uvijek obračunava na početni iznos stavke.

- **Postotak** – postotak popusta koji će se primijeniti.

## 2.3 Količinski popusti (rabat po količini)

Količinski popusti omogućuju primjenu različitih postotaka popusta ovisno o naručenoj količini artikla.

Dostupna polja su:

- **Vrsta popusta** – odabir vrste popusta iz šifarnika.

- **Količina** – prag količine od kojeg se aktivira definirani popust.

- **Postotak** – postotak popusta koji će se primijeniti kada se dostigne ili premaši definirana količina.

Primjer:

| Količina | Popust (%) |
|-----------|------------|
| 2 | 7 |
| 3 | 10 |
| 4 | 12 |
| 5 | 15 |
| 6 | 18 |

U prikazanom primjeru:

- Za kupnju 2 komada odobrava se popust od 7%.
- Za kupnju 3 komada odobrava se popust od 10%.
- Za kupnju 4 komada odobrava se popust od 12%.
- Za kupnju 5 komada odobrava se popust od 15%.
- Za kupnju 6 ili više komada odobrava se popust od 18%.

U prikazanom primjeru, pri kupnji 2 komada ostvaruje se popust od 7%, pri kupnji 3 komada popust od 10%, i tako dalje.

## 2.4 Popusti prema vrijednosti (rabat po vrijednosti)

Kod ove vrste popusta popust se aktivira kada vrijednost pojedine stavke dokumenta dosegne ili premaši definirani iznos.

Dostupna polja su:

- **Vrsta popusta** – odabir vrste popusta iz unaprijed definiranog šifarnika.
- **Vrijednost** – prag iznosa nakon kojeg se primjenjuje popust.
- **Postotak** – postotak popusta koji će se primijeniti nakon dostizanja definirane vrijednosti.

Primjer:

| Vrijednost | Popust (%) |
|------------|------------|
| 100,00 | 2 |
| 200,00 | 4 |
| 300,00 | 6 |

U prikazanom primjeru:

- Ako je vrijednost stavke manja od 100 EUR, popust se ne primjenjuje.
- Za vrijednost od 100 do 199,99 EUR primjenjuje se popust od 2%.
- Za vrijednost od 200 do 299,99 EUR primjenjuje se popust od 4%.
- Za vrijednost od 300 EUR ili više primjenjuje se popust od 6%.

## 2.5 Cijena po količini

Ova funkcionalnost omogućuje definiranje različitih jediničnih cijena ovisno o naručenoj količini artikla.

Dostupna polja su:

- **Količina** – prag količine nakon kojeg se primjenjuje definirana cijena.
- **Jedinična cijena** – cijena koja vrijedi za naručenu količinu.

Primjer:

| Količina | Jedinična cijena |
|-----------|------------------|
| 100 | 10,00 |
| 120 | 9,00 |
| 140 | 8,00 |
| 160 | 7,00 |

U prikazanom primjeru:

- Za količine manje od 100 koristi se osnovna cijena iz cjenika.
- Za količine od 100 do 119 primjenjuje se cijena od 10,00.
- Za količine od 120 do 139 primjenjuje se cijena od 9,00.
- Za količine od 140 do 159 primjenjuje se cijena od 8,00.
- Za količine od 160 ili više primjenjuje se cijena od 7,00.

## 2.6 Napomene

Za pojedini artikl moguće je definirati napomene te odrediti razdoblje njihove valjanosti.

Napomene se mogu koristiti za dodatne informacije o uvjetima nabave, posebnim zahtjevima ili drugim podacima vezanim uz artikl.

## 2.7 Dodatni podaci artikla

Prikazuje se popis dodatnih podataka povezanih s artiklom.

Po potrebi je moguće dodati nove dodatne podatke koji će vrijediti samo za dokument na kojem se trenutno radi.

Opcija **Ispisati** određuje koji će se dodatni podaci uključiti u ispis dokumenta.

## 2.8 Priloženi dokumenti

U ovom dijelu prikazuju se podaci o dokumentima povezanim sa stavkom cjenika, uključujući:

- Naziv dokumenta
- Vrstu dokumenta
- Napomene
- Internu i eksternu referencu

Za informacije o dodavanju priloga pogledajte dokumentaciju za funkcionalnost **Priloženi dokumenti**.