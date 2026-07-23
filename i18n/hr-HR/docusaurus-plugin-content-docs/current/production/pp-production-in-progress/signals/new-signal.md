---
title: Novi signal
description: Cjelovit vodič za ručno kreiranje i upravljanje proizvodnim prijavama (signalima) u Fluentis ERP-u.
keywords:
  - proizvodne prijave/deklaracije/signali
  - MES
  - proizvodni nalog
  - napredak proizvodnje
  - priprema
  - materijali
  - UDC
sidebar_position: 2
schema: TechArticle
tags:
  - Proizvodnja
  - Prijave
  - MES
  - ERP
last_update:
  author: Fluentis Documentation Team
---

# Nova proizvodna prijava/deklaracija/signal

*Proizvodne prijave* u pravilu se automatski generiraju putem [Fluentis MES-a](/docs/production/mes/mes-intro).  
Alternativno, korisnik ih može kreirati ručno putem ove namjenske forme.

## Unos radnog naloga proizvodnje

Prilikom otvaranja forme potrebno je:

1. Unijeti radni nalog proizvodnje (godinu, broj i lot), ručno ili putem pomoćnog odabira.
2. Odabrati fazu i podfazu, također ručno ili putem odgovarajućeg pomoćnog odabira.

Na taj se način u gornjem dijelu forme automatski učitavaju podaci odabrane faze, gdje je moguće pregledati informacije o vrsti proizvodnog naloga, radnom nalogu s godinom, brojem i vrstom, povezanom projektu, radnom centru i stroju na kojem se faza izvodi, planiranom datumu završetka rada te podatke o artiklu s eventualnom varijantom.
Prikazuju se i podaci o ukupnoj količini za proizvodnju, **proizvedenoj količini**, koja odgovara zbroju količina prijavljenih na posljednjoj proizvodnoj i skladišno pokretnoj fazi tehnološkog postupka, odnosno gotovom proizvodu, te **proizvedenoj količini faze**, koja predstavlja zbroj količina evidentiranih u prijavama/signalima za tu konkretnu fazu.

Polje **barcode** u zaglavlju koristi se za unos proizvodnog naloga ili faze koju je potrebno prijaviti.

**Barcode** mora biti sastavljen od fiksnog identifikatora za prepoznavanje proizvodnog naloga (**707**) ili faze proizvodnog naloga (**718**), znaka za razdvajanje **"-"** te identifikatora proizvodnog naloga ili faze koju je potrebno prijaviti.

*Primjer*: `707-1234` ili `718-98765`

#### Unos redaka

U središnjem dijelu upravljaju se retci prijave/signala.  
Prvi obvezni podatak je **Status signala**, pri čemu su dostupne sljedeće vrste:

- *Otvaranje*: omogućuje kreiranje početne proizvodne prijave;
- *Prekid*: omogućuje kreiranje prijave obustave proizvodnje;
- *Nastavljanje*: omogućuje kreiranje prijave nastavka proizvodnje; može se unijeti samo nakon *Obustave*;
- *Napredak*: omogućuje kreiranje prijave napretka proizvodnje;
- *Zatvaranje*: omogućuje kreiranje završne proizvodne prijave.

:::important Napomena
Svaka proizvodna prijava/signal mora kao prvi redak sadržavati prijavu **otvaranja**, koja određuje trenutak početka proizvodnje.

Nakon nje može slijediti prijava/signal napretka ili izravno prijava **zatvaranja**, ovisno o situaciji. Ključna razlika je u tome što prijava zatvaranja ne dopušta unos dodatnih redaka prijave, dok prijava napretka to omogućuje.
:::

Također su moguće sekvence tipa *Prekid → Nastavljanje* u slučajevima kada je potrebno privremeno zaustaviti proizvodnju.

#### Specifični gumbi

> **Spremi**: omogućuje spremanje izvršenih izmjena;
> **Novi signal**: omogućuje unos novog retka prijave;
> **Preračunaj vrijeme stroja**: omogućuje ponovni izračun vremena stroja za sve retke prijave;
> **Preračunaj vrijeme rada**: omogućuje ponovni izračun vremena radne snage za sve retke prijave;
> **Umetni signal**: omogućuje unos novog retka prijave nakon već postojećih redaka;
> **Novi prekid/nastavljanje**: omogućuje istovremeni unos retka obustave i retka nastavka rada uz definiranje datuma i vremena za svaki od njih u skočnom prozoru; gumb je aktivan samo ako je posljednji status prijave *Otvaranje* ili *Napredak*;
> **Izbriši signale**: omogućuje brisanje odabranog retka prijave;
> **Otvori utovarnu jedinicu**: omogućuje otvaranje forme *Upravljanje jedinicama tereta* filtrirane prema jedinici tereta povezanoj s odabranim retkom prijave;
> **Stvori utovarnu jedinicu**: omogućuje kreiranje jedinice tereta povezane s odabranim retkom prijave. Za njezino kreiranje potrebno je prethodno ručno unijeti *Vrstu jedinice tereta* i *Zaposlenika*;
> **Zapis (knjiženje) prijava/signala**: omogućuje kreiranje knjiženja skladišnog dokumenta povezanog s odabranim retkom prijave;
> **Povrat signalizacije**: omogućuje poništavanje knjiženja skladišnog dokumenta povezanog s odabranim retkom prijave.

#### Specifična polja

**Registrirano**: označava da je redak prijave knjižen te da je kreirano pripadajuće skladišno kretanje;
**Datum**: označava datum početka povezan s retkom prijave;
**Vrijeme**: označava vrijeme početka povezano s retkom prijave;
**Broj**: progresivni broj koji se dodjeljuje pojedinom retku prijave (uvijek započinje s 1);
**Status prijave/signala**: omogućuje definiranje statusa retka prijave. Može imati sljedeće vrijednosti: *Otvaranje*, *Prekid*, *Nastavljanje*, *Napredak* ili *Zatvaranje*;
**Aktivnost opremanja**: u Proizvodnim prijavama/signalima i MES prijavama/signalima dodan je pokazatelj aktivnosti pripreme. Oznaka je dostupna (u Proizvodnim prijavama) i vidljiva (u MES prijavama) samo ako prijavljena faza ili prva faza u grupi faza koristi stroj. Aktiviranjem oznake vrijeme će se pribrajati u **Vrijeme pripreme**, dok će se u suprotnom pribrajati u **Vrijeme rada**;
**Predložak prekida**: omogućuje odabir razloga obustave za pripadajući redak prijave. Aktivira se samo ako je *Status prijave* postavljen na *Prekid*;
**Lot**: omogućuje ručni unos broja lota povezanog s proizvedenom količinom;
**Proizvedena količina**: označava proizvedenu količinu povezanu s retkom prijave;
**Alternativna mjerna jedinica**: označava korištenu alternativnu mjernu jedinicu;
**Alternativna količina**: označava proizvedenu količinu izraženu u korištenoj alternativnoj mjernoj jedinici;
**Skladište transfera**: označava skladište u koje se zaprima proizvedena količina;
**Predložak transfera**: označava predložak korišten za zaprimanje proizvedene količine;
**Lokacija prijenosa**: označava skladišnu lokaciju na koju se zaprima proizvedena količina;
**Otpisana količina**: označava otpisanu količinu povezanu s retkom prijave;
**Skladište otpada**: označava skladište u koje se evidentira otpisana količina;
**Predložak otpada**: označava predložak korišten za evidentiranje otpisane količine;
**Lokacija otpada**: označava skladišnu lokaciju na koju se evidentira otpisana količina;
**Defekt**: omogućuje unos defekta povezanog s otpisanom količinom. Aktivira se tek nakon unosa vrijednosti veće od nule u polje **Otpisana količina**;
**Skladište potrošnje**: omogućuje definiranje skladišta potrošnje artikla (u zaglavlju proizvodne prijave) korištenog u prethodnoj fazi;
**Predložak potrošnje**: omogućuje definiranje predloška potrošnje artikla (u zaglavlju proizvodne prijave) korištenog u prethodnoj fazi;
**Lokacija potrošnje**: omogućuje definiranje lokacije potrošnje artikla (u zaglavlju proizvodne prijave) korištenog u prethodnoj fazi;
**Strojevi**: prikazuje broj strojeva te opis predloška zaprimanja proizvedene količine;
**Broj strojeva**: označava broj strojeva korištenih u retku prijave;
**Grupe radne snage**: označava šifru grupe radne snage korištene u retku prijave;
**Broj radnika**: označava broj radnika korištenih u retku prijave;
**Proizvodno mjesto**: označava šifru proizvodnog pogona povezanog s retkom prijave;
**Vrijeme stroja**: označava vrijeme rada stroja povezano s retkom prijave. Izračunava se kao razlika između *datuma/vremena* trenutne prijave i prethodne prijave. (Naziv polja mijenja se ovisno o mjernoj jedinici vremena definiranoj za prijavljenu fazu);
**Vrijeme rada**: označava vrijeme rada radne snage povezano s retkom prijave. Izračunava se kao razlika između *datuma/vremena* trenutne prijave i prethodne prijave. (Naziv polja mijenja se ovisno o mjernoj jedinici vremena definiranoj za prijavljenu fazu);
**Vrijeme opremanja**: označava vrijeme pripreme povezano s retkom prijave. Unosi se ručno. (Naziv polja mijenja se ovisno o mjernoj jedinici vremena definiranoj za prijavljenu fazu);
**Zaposlenik**: označava šifru korisnika koji unosi prijavu;
**Prezime**: označava prezime korisnika koji unosi prijavu;
**Ime**: označava ime korisnika koji unosi prijavu;
**Utovarna jedinica**: označava broj jedinice tereta sastavljen od godine, broja proizvodnog naloga i progresivnog broja. Kako bi se jedinica tereta mogla koristiti u proizvodnim prijavama/signalima, **Grupa** definirana u [Vrsti grupe jedinice tereta](/docs/configurations/tables/logistics/loading-unit-group-type/) mora biti tipa *Proizvodni radni nalog* ili *Proizvodni nalog*;
**Tip utovarne jedinice**: označava vrstu jedinice tereta;
**Opis tipa UJ**: označava opis vrste jedinice tereta;
**Broj utovarne jedinice**: označava broj jedinice tereta;
**Utovarna jedinica za izdavanje**: **Rad u tijeku**
**Visina**: označava visinu jedinice tereta;
**Širina**: označava širinu jedinice tereta;
**Dubina**: označava dubinu jedinice tereta;
**Opis predloška obustave**: označava opis *predloška obustave* korištenog u retku prijave;
**Opis skladišta zaprimanja**: označava opis skladišta zaprimanja proizvedene količine;
**Opis predloška zaprimanja**: označava opis predloška zaprimanja proizvedene količine;
**Opis skladišta otpada**: označava opis skladišta otpisa otpisane količine;
**Opis predloška otpada**: označava opis predloška otpisa otpisane količine;
**Opis stroja**: označava opis korištenog stroja;
**Opis grupe radne snage**: označava opis korištene grupe radne snage;
**Opis proizvodnog mjesta**: označava opis korištenog proizvodnog pogona.

Donji dio forme sastoji se od niza kartica povezanih s trenutno odabranim retkom prijave.

### Materijali

Na ovoj kartici automatski se prikazuju materijali korišteni u fazi za izradu artikla koji se proizvodi, no korisnik po potrebi može mijenjati postojeće podatke i/ili dodavati nove materijale.
Kako bi se materijali automatski prikazali, faza mora biti posljednja faza tipa *Proizvodna* i *Pokretna* u tehnološkom postupku. Ako nije posljednja, tada mora biti tipa *Proizvodna* i *Pokretna* te joj moraju biti izravno dodijeljeni materijali.

#### Specifična polja

**Registrirano**: označava da je materijal iz odabranog retka prijave knjižen te da je kreirano pripadajuće skladišno kretanje;
**UJ materijala**: omogućuje definiranje jedinice tereta iz koje se preuzima materijal;
**Klasa**: označava klasu artikla;
**Šifra artikla**: označava šifru artikla;
**Varijanta**: označava šifru varijante artikla;
**Mjerna jedinica**: označava osnovnu mjernu jedinicu materijala;
**Količina uzeta sa zaliha**: označava količinu preuzetu putem procedure [Lista preuzimanja materijala](/docs/production/pp-production-in-progress/picking-materials-list);
**Količina potvrđena**: označava utrošenu količinu materijala;
**Alternativna mjerna jedinica**: označava alternativnu mjernu jedinicu materijala;
**Alternativna količina**: označava utrošenu količinu materijala izraženu u alternativnoj mjernoj jedinici;
**Skladište potrošnje**: označava šifru skladišta iz kojeg se materijal troši;
**Predložak potrošnje**: označava šifru predloška potrošnje materijala;
**Lokacija potrošnje**: označava šifru lokacije skladišta iz kojeg se materijal troši. U korisničkom sučelju predlaže se prema sljedećoj logici:
Ako vrijednost nije prazna, uzima se iz mape lokacija po artiklu za trenutni artikl i skladište potrošnje.
U suprotnom se koristi predložena lokacija definirana u predlošku potrošnje;
**Količina otpada**: označava otpisanu količinu materijala;
**Skladište otpada**: označava šifru skladišta otpisa materijala;
**Lokacija otpada**: označava šifru lokacije skladišta otpisa materijala;
**Predložak otpada**: označava šifru predloška otpisa materijala;
**Opis artikla**: označava opis artikla;
**Opis varijante**: označava opis varijante artikla;
**Opis skladišta potrošnje**: označava opis skladišta potrošnje materijala;
**Opis predloška potrošnje**: označava opis predloška potrošnje materijala;
**Opis skladišta otpada**: označava opis skladišta otpisa materijala;
**Opis predloška otpada**: označava opis predloška otpisa materijala;
**Prioritet**: označava prioritet prema kojem se materijali prikazuju.

U donjem dijelu kartice moguće je unositi lotove i serijske brojeve putem pripadajućih tablica podataka.

##### *Lotovi*

**Lot**: označava broj lota odabranog materijala;
**Šifra lota dobavljača**: označava broj lota dobavljača odabranog materijala;
**Količina**: označava količinu odabranog materijala za taj lot;
**Lokacija**: označava lokaciju tog lota odabranog materijala;
**Datum početka**: označava datum početka lota odabranog materijala;
**Datum dospijeća**: označava datum isteka lota odabranog materijala;
**Konto/Podkonto/Opis konta**: označavaju konto, podkonto i opis kupca/dobavljača odabranog materijala.

#### Serijski brojevi

**Barkod**: barkod sadrži broj serijskog broja i ostale povezane informacije. Sve informacije o načinu kodiranja barkodova za unos u ovo polje dostupne su na stranici [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer);
**Vrsta serijskog broja**: označava vrstu serijskog broja odabranog materijala;
**Serijski broj**: označava serijski broj odabranog materijala;
**Datum početka**: označava datum početka serijskog broja odabranog materijala;
**Opozvano**: označava da je serijski broj u statusu poništen;
**Lot**: označava šifru lota serijskog broja odabranog materijala.

### Tim

Ova kartica omogućuje upravljanje članovima tima koji sudjeluju u obradi povezanoj s odabranim retkom prijave, uz mogućnost evidentiranja datuma i vremena početka i završetka rada za svakog člana.

#### Specifična polja

**Šifra**: označava šifru operatera koji radi na prijavi;
**Prezime**: označava prezime operatera koji radi na prijavi;
**Ime**: označava ime operatera koji radi na prijavi;
**Voditelj tima**: označava da je taj operater ujedno i voditelj tima;
**Zadatak**: označava aktivnost koju operater obavlja;
**Opis**: označava opis aktivnosti koju operater obavlja;
**Vrijeme pripreme**: označava da će se vrijeme rada operatera u naknadnim analizama obračunavati kao vrijeme pripreme;
**Datum početka**: označava datum početka rada operatera;
**Vrijeme početka**: označava vrijeme početka rada operatera;
**Datum završetka**: označava datum završetka rada operatera;
**Vrijeme završetka**: označava vrijeme završetka rada operatera;
**Datum izrade**: označava datum kreiranja zapisa;
**Datum zadnje promjene**: označava datum posljednje izmjene zapisa;
**Operater**: označava korisnika koji je kreirao zapis.

### Alternativni artikli

Omogućuje upravljanje spin-off artiklima koji nastaju kao rezultat proizvodnje glavnog artikla.
Takve je artikle moguće unositi u namjensku tablicu podataka te upravljati njihovim lotovima i serijskim brojevima.
Lotovi i serijski brojevi odnose se na trenutno odabrani redak alternativnog artikla.
Skladišna knjiženja ulaza alternativnih artikala izvršavaju se koristeći skladište, predložak i lokaciju definirane na pojedinom retku.

#### Lotovi

**Lot**: označava broj lota artikla;
**Vrsta šifre lota**: označava vrstu šifre lota artikla;
**Vrsta lota**: označava vrstu lota artikla;
**Šifra lota dobavljača**: označava broj lota dobavljača artikla;
**Napomene**: omogućuje unos napomene vezane uz lot;
**Količina**: označava količinu artikla za taj lot;
**Lokacija**: označava lokaciju tog lota artikla;
**Datum početka**: označava datum početka lota artikla;
**Datum dospijeća**: označava datum isteka lota artikla;
**Konto/Podkonto/Opis konta**: označavaju konto, podkonto i opis kupca/dobavljača artikla.

#### Serijski brojevi

**Šifra serijskog broja**: označava serijski broj artikla;
**Vrsta serijskog broja**: označava vrstu serijskog broja artikla;
**Serijski broj kupca**: označava serijski broj kupca za taj artikl;
**Serijski broj dobavljača**: označava serijski broj dobavljača za taj artikl;
**Datum početka**: označava datum početka serijskog broja artikla;
**Poništeno**: označava da je serijski broj u statusu poništen;
**Lot**: označava šifru lota serijskog broja artikla.

### Suspenzija

Ova kartica omogućuje definiranje više razloga obustave s pripadajućim brojem minuta te je dostupna samo kada je odabran redak prijave sa statusom **Prekid**.

### Otpad

Ova kartica omogućuje definiranje više skladišta i predložaka za škart s pripadajućim količinama te je dostupna samo ako je prijavljena količina škarta.

### Dodatni podaci

Omogućuje upravljanje i pregled dodatnih podataka povezanih s prijavom.
Za detaljan opis dodatnih podataka pogledajte članak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).

### Lotovi i serijski brojevi

U ovoj kartici, prilikom knjiženja proizvodne prijave, automatski se prenose lotovi i serijski brojevi proizvedenih artikala prema pravilima definiranim na kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla.
Ako je broj lota upisan u polje **Lot** na retku prijave, proizvedeni artikli bit će knjiženi s tim brojem lota, koji ima prioritet nad pravilima definiranima u šifarniku artikla.

#### Lotovi

**Lot**: označava broj lota artikla;
**Vrsta šifre lota**: označava vrstu šifre lota artikla;
**Vrsta lota**: označava vrstu lota artikla;
**Šifra lota dobavljača**: označava broj lota dobavljača artikla;
**Napomene**: omogućuje unos napomene vezane uz lot;
**Količina**: označava količinu artikla za taj lot;
**Lokacija**: označava lokaciju tog lota artikla;
**Datum početka**: označava datum početka lota artikla;
**Datum dospijeća**: označava datum isteka lota artikla;
**Konto/Podkonto/Opis konta**: označavaju konto, podkonto i opis kupca/dobavljača artikla.

#### Serijski brojevi

**Šifra serijskog broja**: označava serijski broj artikla;
**Vrsta serijskog broja**: označava vrstu serijskog broja artikla;
**Serijski broj kupca**: označava serijski broj kupca za taj artikl;
**Serijski broj dobavljača**: označava serijski broj dobavljača za taj artikl;
**Datum početka**: označava datum početka serijskog broja artikla;
**Opozvano**: označava da je serijski broj u statusu poništen;
**Lot**: označava šifru lota serijskog broja artikla.

## Sažetak i dodatne informacije

Ovaj vodič detaljno opisuje ručno upravljanje *Signalima/prijavama/deklaracijama proizvodnje* u Fluentis ERP-u, uključujući:

- unos proizvodnog naloga i faze;
- kreiranje redaka prijave;
- dostupne statuse i njihovu logiku;
- materijale, tim, škart i obustave;
- upravljanje UDC-ovima i skladišnim knjiženjima.

Za dodatne informacije pogledajte:

- [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common)
- [MES – Uvod](/docs/production/mes/mes-intro)
- [Lista za preuzimanje materijala](/docs/production/pp-production-in-progress/picking-materials-list)