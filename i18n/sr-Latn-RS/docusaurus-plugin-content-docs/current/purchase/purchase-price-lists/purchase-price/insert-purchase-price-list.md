---
title: Unos cenovnika dobavljača
sidebar_position: 3
---

Forma se otvara putem putanje **Nabavka > Cenovnici dobavljača > Novi cenovnik** ili putem dugmeta **Novo** koje se nalazi u formi [Pretraga cenovnika dobavljača].

## **1. Obavezni podaci**

U formi za unos automatski se predlažu vrednosti polja **Od datuma važenja** (predlaže se trenutni datum početka važenja) i [**Valuta**](/docs/guide/common/glossary/glossary-intro#currency) (predlaže se valuta kompanije), ali ih je moguće promeniti.

Za nastavak kreiranja cenovnika korisnik mora uneti:

**Dobavljača**, koristeći [pomoć za unos](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) ili [direktnim](/docs/guide/common/operations-with-data/manual-entry-or-help-and-data-selection) unosom podataka.

**Do datuma važenja**: ovo je opciono polje koje se koristi ako se želi definisati promotivna kampanja ili postaviti datum isteka cenovnika.

:::warning Važno
Da bi cenovnik bio važeći za određenog dobavljača, potrebno ga je povezati na kartici dobavljača, na kartici **Cenovnici**. Više informacija dostupno je u dokumentaciji dobavljača.
:::

## Dodatni podaci

- **Datum završetka važenja** – koristi se kada je potrebno definisati vremenski ograničen cenovnik, na primer za promotivne akcije ili posebne uslove nabavke. Datum je moguće masovno postaviti na više cenovnika iz pregleda cenovnika korišćenjem funkcije **Zatvori**.

- **Struktura dodatnih popusta** – ako je na kartici dobavljača definisana dodatna struktura popusta, prikazaće se u ovom polju samo za pregled.

- **Beleške** – slobodan unos dodatnih informacija vezanih za cenovnik.

Nakon unosa obaveznih podataka potrebno je sačuvati dokument kako bi bilo moguće unositi stavke cenovnika.

## **2. Artikli**

Nakon što se unese i sačuva dobavljač, za unos novog artikla dovoljno je pozicionirati se na red i uneti potrebne podatke ili koristiti dugme *Novi artikal* koje se nalazi na alatnoj traci.

Dostupne kolone uključuju:

- **Artikal / Opis artikla** – šifra i naziv artikla koji se dodaje u cenovnik. Novi artikal moguće je uneti direktno u tabelu ili korišćenjem funkcije **Novi artikal**.

- **Šifra / Opis varijante artikla** – koristi se kada se cena odnosi na određenu varijantu artikla.

- **Šifra / Opis artikla dobavljača** – koristi se ako dobavljač koristi sopstvenu šifru artikla koja se razlikuje od interne šifre u sistemu.

- **Šifra / Opis varijante artikla dobavljača** – koristi se ako dobavljač za pojedinu varijantu artikla koristi sopstvenu oznaku.

- **Jedinica mere** – osnovna ili alternativna jedinica mere za koju važi definisana cena.

- **Marka proizvoda (artikal)** – oznaka robne marke artikla, ako je definisana.

- **Količina** – referentna količina za koju važi navedena cena. Podrazumevano je postavljena na 1. Ako je definisana druga vrednost, sistem prilikom obračuna koristi odnos između cene i količine.

- **Nabavna cena** – cena artikla izražena u valuti cenovnika. Ovo polje dostupno je samo kada je uključena opcija prikaza nabavnih cena.

- **Dodatna vrednost** i **Dodatni procenat** – koriste se prilikom kreiranja prodajnih cenovnika na osnovu nabavnih cenovnika. Na nabavnu cenu automatski se dodaje definisana vrednost ili procenat.

## 2.1 Detalji

Za svaki artikal u cenovniku moguće je definisati različite tipove popusta.

U polju **Tip obračuna popusta** određuje se podrazumevani metod obračuna popusta za izabrani artikal. Vrednost definisana u cenovniku ima prioritet u odnosu na podešavanja definisana na kartici artikla.

U desnom delu forme moguće je definisati jedan ili više popusta koji će se primenjivati na artikal. Ako je za artikal definisano više različitih tipova popusta, tokom unosa dokumenta moguće je izabrati odgovarajući metod obračuna.

U nastavku su opisani dostupni tipovi popusta.

## 2.2 Fiksni popusti (bez grupisanja)

Fiksni popusti primenjuju se nezavisno od količine ili drugih uslova navedenih na dokumentu. Najčešći primer su standardni komercijalni popusti.

Dostupna polja su:

- **Tip popusta** – izbor tipa popusta iz unapred definisanog šifarnika.

- **Prioritet** – određuje redosled primene popusta kada je definisano više popusta za isti artikal.

- **Način obračuna** – određuje osnovicu za obračun popusta:
  - **Kaskadno (višefazno)** – popust se obračunava na iznos umanjen za prethodno obračunate popuste.
  - **Na osnovicu** – popust se uvek obračunava na početni iznos stavke.

- **Procenat** – procenat popusta koji će biti primenjen.

## 2.3 Količinski popusti (rabat po količini)

Količinski popusti omogućavaju primenu različitih procenata popusta u zavisnosti od naručene količine artikla.

Dostupna polja su:

- **Tip popusta** – izbor tipa popusta iz šifarnika.

- **Količina** – prag količine od kojeg se aktivira definisani popust.

- **Procenat** – procenat popusta koji će biti primenjen kada se dostigne ili premaši definisana količina.

Primer:

| Količina | Popust (%) |
|-----------|------------|
| 2 | 7 |
| 3 | 10 |
| 4 | 12 |
| 5 | 15 |
| 6 | 18 |

U prikazanom primeru:

- Za kupovinu 2 komada odobrava se popust od 7%.
- Za kupovinu 3 komada odobrava se popust od 10%.
- Za kupovinu 4 komada odobrava se popust od 12%.
- Za kupovinu 5 komada odobrava se popust od 15%.
- Za kupovinu 6 ili više komada odobrava se popust od 18%.

U prikazanom primeru, pri kupovini 2 komada ostvaruje se popust od 7%, pri kupovini 3 komada popust od 10%, i tako dalje.

## 2.4 Popusti prema vrednosti (rabat po vrednosti)

Kod ovog tipa popusta popust se aktivira kada vrednost pojedinačne stavke dokumenta dostigne ili premaši definisani iznos.

Dostupna polja su:

- **Tip popusta** – izbor tipa popusta iz unapred definisanog šifarnika.
- **Vrednost** – prag iznosa nakon kojeg se primenjuje popust.
- **Procenat** – procenat popusta koji će biti primenjen nakon dostizanja definisane vrednosti.

Primer:

| Vrednost | Popust (%) |
|------------|------------|
| 100,00 | 2 |
| 200,00 | 4 |
| 300,00 | 6 |

U prikazanom primeru:

- Ako je vrednost stavke manja od 100 EUR, popust se ne primenjuje.
- Za vrednost od 100 do 199,99 EUR primenjuje se popust od 2%.
- Za vrednost od 200 do 299,99 EUR primenjuje se popust od 4%.
- Za vrednost od 300 EUR ili više primenjuje se popust od 6%.

## 2.5 Cena po količini

Ova funkcionalnost omogućava definisanje različitih jediničnih cena u zavisnosti od naručene količine artikla.

Dostupna polja su:

- **Količina** – prag količine nakon kojeg se primenjuje definisana cena.
- **Jedinična cena** – cena koja važi za naručenu količinu.

Primer:

| Količina | Jedinična cena |
|-----------|------------------|
| 100 | 10,00 |
| 120 | 9,00 |
| 140 | 8,00 |
| 160 | 7,00 |

U prikazanom primeru:

- Za količine manje od 100 koristi se osnovna cena iz cenovnika.
- Za količine od 100 do 119 primenjuje se cena od 10,00.
- Za količine od 120 do 139 primenjuje se cena od 9,00.
- Za količine od 140 do 159 primenjuje se cena od 8,00.
- Za količine od 160 ili više primenjuje se cena od 7,00.

## 2.6 Beleške

Za pojedinačni artikal moguće je definisati beleške i odrediti period njihovog važenja.

Beleške se mogu koristiti za dodatne informacije o uslovima nabavke, posebnim zahtevima ili drugim podacima vezanim za artikal.

## 2.7 Dodatni podaci artikla

Prikazuje se lista dodatnih podataka povezanih sa artiklom.

Po potrebi je moguće dodati nove dodatne podatke koji će važiti samo za dokument na kojem se trenutno radi.

Opcija **Štampati** određuje koji će dodatni podaci biti uključeni u štampanje dokumenta.

## 2.8 Priloženi dokumenti

U ovom delu prikazuju se podaci o dokumentima povezanim sa stavkom cenovnika, uključujući:

- Naziv dokumenta
- Tip dokumenta
- Beleške
- Internu i eksternu referencu

Za informacije o dodavanju priloga pogledajte dokumentaciju za funkcionalnost **Priloženi dokumenti**.