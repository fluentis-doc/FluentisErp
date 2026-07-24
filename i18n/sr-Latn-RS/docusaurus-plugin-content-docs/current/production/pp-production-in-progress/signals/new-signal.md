---
title: Nova proizvodna prijava/deklaracija/signal
description: Celovit vodič za ručno kreiranje i upravljanje proizvodnim prijavama (signalima) u Fluentis ERP-u.
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

*Proizvodne prijave* se po pravilu automatski generišu putem [Fluentis MES-a](/docs/production/mes/mes-intro).  
Alternativno, korisnik ih može kreirati ručno putem ove namenske forme.

## Unos radnog naloga proizvodnje

Prilikom otvaranja forme potrebno je:

1. Uneti radni nalog proizvodnje (godinu, broj i lot), ručno ili putem pomoćnog izbora.
2. Odabrati fazu i podfazu, takođe ručno ili putem odgovarajućeg pomoćnog izbora.

Na taj način se u gornjem delu forme automatski učitavaju podaci odabrane faze, gde je moguće pregledati informacije o vrsti proizvodnog naloga, radnom nalogu sa godinom, brojem i vrstom, povezanom projektu, radnom centru i mašini na kojoj se faza izvodi, planiranom datumu završetka rada, kao i podatke o artiklu sa eventualnom varijantom.

Prikazuju se i podaci o ukupnoj količini za proizvodnju, **proizvedenoj količini**, koja odgovara zbiru količina prijavljenih na poslednjoj proizvodnoj i skladišno aktivnoj fazi tehnološkog postupka, odnosno gotovom proizvodu, kao i **proizvedenoj količini faze**, koja predstavlja zbir količina evidentiranih u prijavama/signalima za tu konkretnu fazu.

Polje **barcode** u zaglavlju koristi se za unos proizvodnog naloga ili faze koju je potrebno prijaviti.

**Barcode** mora biti sastavljen od fiksnog identifikatora za prepoznavanje proizvodnog naloga (**707**) ili faze proizvodnog naloga (**718**), znaka za razdvajanje **"-"** i identifikatora proizvodnog naloga ili faze koju je potrebno prijaviti.

*Primer*: `707-1234` ili `718-98765`

#### Unos redova

U centralnom delu upravlja se redovima prijave/signala.  
Prvi obavezni podatak je **Status signala**, pri čemu su dostupne sledeće vrste:

- *Otvaranje*: omogućava kreiranje početne proizvodne prijave;
- *Prekid*: omogućava kreiranje prijave obustave proizvodnje;
- *Nastavljanje*: omogućava kreiranje prijave nastavka proizvodnje; može se uneti samo nakon *Obustave*;
- *Napredak*: omogućava kreiranje prijave napretka proizvodnje;
- *Zatvaranje*: omogućava kreiranje završne proizvodne prijave.

:::important Napomena
Svaka proizvodna prijava/signal mora kao prvi red sadržati prijavu **otvaranja**, koja određuje trenutak početka proizvodnje.

Nakon nje može slediti prijava/signal napretka ili direktno prijava **zatvaranja**, u zavisnosti od situacije. Ključna razlika je u tome što prijava zatvaranja ne dozvoljava unos dodatnih redova prijave, dok prijava napretka to omogućava.
:::

Takođe su moguće sekvence tipa *Prekid → Nastavljanje* u slučajevima kada je potrebno privremeno zaustaviti proizvodnju.

#### Specifična dugmad

> **Sačuvaj**: omogućava čuvanje izvršenih izmena;
> **Novi signal**: omogućava unos novog reda prijave;
> **Preračunaj vreme mašine**: omogućava ponovni obračun vremena mašine za sve redove prijave;
> **Preračunaj vreme rada**: omogućava ponovni obračun vremena radne snage za sve redove prijave;
> **Ubaci signal**: omogućava unos novog reda prijave nakon već postojećih redova;
> **Novi prekid/nastavljanje**: omogućava istovremeni unos reda obustave i reda nastavka rada uz definisanje datuma i vremena za svaki od njih u iskačućem prozoru; dugme je aktivno samo ako je poslednji status prijave *Otvaranje* ili *Napredak*;
> **Obriši signale**: omogućava brisanje odabranog reda prijave;
> **Otvori jedinicu tereta**: omogućava otvaranje forme *Upravljanje jedinicama tereta* filtrirane prema jedinici tereta povezanoj sa odabranim redom prijave;
> **Kreiraj jedinicu tereta**: omogućava kreiranje jedinice tereta povezane sa odabranim redom prijave. Za njeno kreiranje potrebno je prethodno ručno uneti *Vrstu jedinice tereta* i *Zaposlenog*;
> **Knjiženje prijava/signala**: omogućava kreiranje knjiženja skladišnog dokumenta povezanog sa odabranim redom prijave;
> **Povrat signalizacije**: omogućava poništavanje knjiženja skladišnog dokumenta povezanog sa odabranim redom prijave.

#### Specifična polja

**Registrovano**: označava da je red prijave knjižen i da je kreirano pripadajuće skladišno kretanje;  
**Datum**: označava datum početka povezan sa redom prijave;  
**Vreme**: označava vreme početka povezano sa redom prijave;  
**Broj**: progresivni broj koji se dodeljuje pojedinom redu prijave (uvek počinje sa 1);  
**Status prijave/signala**: omogućava definisanje statusa reda prijave. Može imati sledeće vrednosti: *Otvaranje*, *Prekid*, *Nastavljanje*, *Napredak* ili *Zatvaranje*;  
**Aktivnost pripreme**: u Proizvodnim prijavama/signalima i MES prijavama/signalima dodat je pokazatelj aktivnosti pripreme. Oznaka je dostupna (u Proizvodnim prijavama) i vidljiva (u MES prijavama) samo ako prijavljena faza ili prva faza u grupi faza koristi mašinu. Aktiviranjem oznake vreme će se pribrajati u **Vreme pripreme**, dok će se u suprotnom pribrajati u **Vreme rada**;  
**Predložak prekida**: omogućava odabir razloga obustave za pripadajući red prijave. Aktivira se samo ako je *Status prijave* postavljen na *Prekid*;  
**Lot**: omogućava ručni unos broja lota povezanog sa proizvedenom količinom;  
**Proizvedena količina**: označava proizvedenu količinu povezanu sa redom prijave;  
**Alternativna merna jedinica**: označava korišćenu alternativnu mernu jedinicu;  
**Alternativna količina**: označava proizvedenu količinu izraženu u korišćenoj alternativnoj mernoj jedinici;  
**Skladište transfera**: označava skladište u koje se zaprima proizvedena količina;  
**Predložak transfera**: označava predložak korišćen za prijem proizvedene količine;  
**Lokacija prenosa**: označava skladišnu lokaciju na koju se zaprima proizvedena količina;  
**Otpisana količina**: označava otpisanu količinu povezanu sa redom prijave;  
**Skladište otpada**: označava skladište u koje se evidentira otpisana količina;  
**Predložak otpada**: označava predložak korišćen za evidentiranje otpisane količine;  
**Lokacija otpada**: označava skladišnu lokaciju na koju se evidentira otpisana količina;  
**Defekt**: omogućava unos defekta povezanog sa otpisanom količinom. Aktivira se tek nakon unosa vrednosti veće od nule u polje **Otpisana količina**;  
**Skladište potrošnje**: omogućava definisanje skladišta potrošnje artikla (u zaglavlju proizvodne prijave) korišćenog u prethodnoj fazi;  
**Predložak potrošnje**: omogućava definisanje predloška potrošnje artikla (u zaglavlju proizvodne prijave) korišćenog u prethodnoj fazi;  
**Lokacija potrošnje**: omogućava definisanje lokacije potrošnje artikla (u zaglavlju proizvodne prijave) korišćenog u prethodnoj fazi;  
**Mašine**: prikazuje broj mašina i opis predloška prijema proizvedene količine;  
**Broj mašina**: označava broj mašina korišćenih u redu prijave;  
**Grupe radne snage**: označava šifru grupe radne snage korišćene u redu prijave;  
**Broj radnika**: označava broj radnika korišćenih u redu prijave;  
**Proizvodno mesto**: označava šifru proizvodnog pogona povezanog sa redom prijave;  
**Vreme mašine**: označava vreme rada mašine povezano sa redom prijave. Izračunava se kao razlika između *datuma/vremena* trenutne prijave i prethodne prijave. (Naziv polja menja se u zavisnosti od merne jedinice vremena definisane za prijavljenu fazu);  
**Vreme rada**: označava vreme rada radne snage povezano sa redom prijave. Izračunava se kao razlika između *datuma/vremena* trenutne prijave i prethodne prijave. (Naziv polja menja se u zavisnosti od merne jedinice vremena definisane za prijavljenu fazu);  
**Vreme pripreme**: označava vreme pripreme povezano sa redom prijave. Unosi se ručno. (Naziv polja menja se u zavisnosti od merne jedinice vremena definisane za prijavljenu fazu);
**Zaposleni**: označava šifru korisnika koji unosi prijavu;  
**Prezime**: označava prezime korisnika koji unosi prijavu;  
**Ime**: označava ime korisnika koji unosi prijavu;  
**Utovarna jedinica**: označava broj jedinice tereta sastavljen od godine, broja proizvodnog naloga i progresivnog broja. Da bi se jedinica tereta mogla koristiti u proizvodnim prijavama/signalima, **Grupa** definisana u [Vrsti grupe jedinice tereta](/docs/configurations/tables/logistics/loading-unit-group-type/) mora biti tipa *Proizvodni radni nalog* ili *Proizvodni nalog*;  
**Tip utovarne jedinice**: označava vrstu jedinice tereta;  
**Opis tipa UJ**: označava opis vrste jedinice tereta;  
**Broj utovarne jedinice**: označava broj jedinice tereta;  
**Utovarna jedinica za izdavanje**: **Rad u toku**  
**Visina**: označava visinu jedinice tereta;  
**Širina**: označava širinu jedinice tereta;  
**Dubina**: označava dubinu jedinice tereta;  
**Opis predloška obustave**: označava opis *predloška obustave* korišćenog u redu prijave;  
**Opis skladišta prijema**: označava opis skladišta prijema proizvedene količine;  
**Opis predloška prijema**: označava opis predloška prijema proizvedene količine;  
**Opis skladišta otpada**: označava opis skladišta otpisa otpisane količine;  
**Opis predloška otpada**: označava opis predloška otpisa otpisane količine;  
**Opis mašine**: označava opis korišćene mašine;  
**Opis grupe radne snage**: označava opis korišćene grupe radne snage;  
**Opis proizvodnog mesta**: označava opis korišćenog proizvodnog pogona.

Donji deo forme sastoji se od niza kartica povezanih sa trenutno odabranim redom prijave.

### Materijali

Na ovoj kartici automatski se prikazuju materijali korišćeni u fazi za izradu artikla koji se proizvodi, ali korisnik po potrebi može menjati postojeće podatke i/ili dodavati nove materijale.  
Da bi se materijali automatski prikazali, faza mora biti poslednja faza tipa *Proizvodna* i *Pokretna* u tehnološkom postupku. Ako nije poslednja, tada mora biti tipa *Proizvodna* i *Pokretna* i moraju joj biti direktno dodeljeni materijali.

#### Specifična polja

**Registrovano**: označava da je materijal iz odabranog reda prijave knjižen i da je kreirano pripadajuće skladišno kretanje;  
**UJ materijala**: omogućava definisanje jedinice tereta iz koje se preuzima materijal;  
**Klasa**: označava klasu artikla;  
**Šifra artikla**: označava šifru artikla;  
**Varijanta**: označava šifru varijante artikla;  
**Jedinica mere**: označava osnovnu jedinicu mere materijala;  
**Količina preuzeta sa zaliha**: označava količinu preuzetu putem procedure [Lista preuzimanja materijala](/docs/production/pp-production-in-progress/picking-materials-list);  
**Potvrđena količina**: označava utrošenu količinu materijala;  
**Alternativna jedinica mere**: označava alternativnu jedinicu mere materijala;  
**Alternativna količina**: označava utrošenu količinu materijala izraženu u alternativnoj jedinici mere;  
**Skladište potrošnje**: označava šifru skladišta iz kojeg se materijal troši;  
**Predložak potrošnje**: označava šifru predloška potrošnje materijala;  
**Lokacija potrošnje**: označava šifru lokacije skladišta iz kojeg se materijal troši. U korisničkom interfejsu predlaže se prema sledećoj logici:  
Ako vrednost nije prazna, preuzima se iz mape lokacija po artiklu za trenutni artikl i skladište potrošnje.  
U suprotnom se koristi predložena lokacija definisana u predlošku potrošnje;  
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

U donjem delu kartice moguće je unositi lotove i serijske brojeve putem pripadajućih tabela podataka.

##### *Lotovi*

**Lot**: označava broj lota odabranog materijala;  
**Šifra lota dobavljača**: označava broj lota dobavljača odabranog materijala;  
**Količina**: označava količinu odabranog materijala za taj lot;  
**Lokacija**: označava lokaciju tog lota odabranog materijala;  
**Datum početka**: označava datum početka lota odabranog materijala;  
**Datum isteka**: označava datum isteka lota odabranog materijala;  
**Konto/Podkonto/Opis konta**: označavaju konto, podkonto i opis kupca/dobavljača odabranog materijala.

#### Serijski brojevi

**Barkod**: barkod sadrži broj serijskog broja i ostale povezane informacije. Sve informacije o načinu kodiranja barkodova za unos u ovo polje dostupne su na stranici [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer);  
**Vrsta serijskog broja**: označava vrstu serijskog broja odabranog materijala;  
**Serijski broj**: označava serijski broj odabranog materijala;  
**Datum početka**: označava datum početka serijskog broja odabranog materijala;  
**Opozvan**: označava da je serijski broj u statusu poništen;  
**Lot**: označava šifru lota serijskog broja odabranog materijala.

### Tim

Ova kartica omogućava upravljanje članovima tima koji učestvuju u obradi povezanoj sa odabranim redom prijave, uz mogućnost evidentiranja datuma i vremena početka i završetka rada za svakog člana.

#### Specifična polja

**Šifra**: označava šifru operatera koji radi na prijavi;  
**Prezime**: označava prezime operatera koji radi na prijavi;  
**Ime**: označava ime operatera koji radi na prijavi;  
**Vođa tima**: označava da je taj operater ujedno i vođa tima;  
**Zadatak**: označava aktivnost koju operater obavlja;  
**Opis**: označava opis aktivnosti koju operater obavlja;  
**Vrijeme pripreme**: označava da će se vrijeme rada operatera u naknadnim analizama obračunavati kao vrijeme pripreme;  
**Datum početka**: označava datum početka rada operatera;  
**Vrijeme početka**: označava vrijeme početka rada operatera;  
**Datum završetka**: označava datum završetka rada operatera;  
**Vrijeme završetka**: označava vrijeme završetka rada operatera;  
**Datum kreiranja**: označava datum kreiranja zapisa;  
**Datum posljednje izmjene**: označava datum posljednje izmjene zapisa;  
**Operater**: označava korisnika koji je kreirao zapis.

### Alternativni artikli

Omogućava upravljanje spin-off artiklima koji nastaju kao rezultat proizvodnje glavnog artikla.  
Takve artikle moguće je unositi u namjensku tabelu podataka te upravljati njihovim lotovima i serijskim brojevima.  
Lotovi i serijski brojevi odnose se na trenutno odabrani red alternativnog artikla.  
Skladišna knjiženja ulaza alternativnih artikala izvršavaju se koristeći skladište, predložak i lokaciju definisane na pojedinačnom redu.

#### Lotovi

**Lot**: označava broj lota artikla;  
**Vrsta šifre lota**: označava vrstu šifre lota artikla;  
**Vrsta lota**: označava vrstu lota artikla;  
**Šifra lota dobavljača**: označava broj lota dobavljača artikla;  
**Napomene**: omogućava unos napomene vezane za lot;  
**Količina**: označava količinu artikla za taj lot;  
**Lokacija**: označava lokaciju tog lota artikla;  
**Datum početka**: označava datum početka lota artikla;  
**Datum isteka**: označava datum isteka lota artikla;  
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

Ova kartica omogućava definisanje više razloga obustave sa pripadajućim brojem minuta i dostupna je samo kada je odabran red prijave sa statusom **Prekid**.

### Otpad

Ova kartica omogućava definisanje više skladišta i predložaka za škart sa pripadajućim količinama i dostupna je samo ako je prijavljena količina škarta.

### Dodatni podaci

Omogućava upravljanje i pregled dodatnih podataka povezanih sa prijavom.  
Za detaljan opis dodatnih podataka pogledajte članak [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata).

### Lotovi i serijski brojevi

Na ovoj kartici, prilikom knjiženja proizvodne prijave, automatski se prenose lotovi i serijski brojevi proizvedenih artikala prema pravilima definisanim na kartici [Lotovi i serijski brojevi](/docs/erp-home/registers/items/create-new-item) u šifarniku artikla.  
Ako je broj lota upisan u polje **Lot** na redu prijave, proizvedeni artikli biće knjiženi sa tim brojem lota, koji ima prioritet nad pravilima definisanim u šifarniku artikla.

#### Lotovi

**Lot**: označava broj lota artikla;  
**Vrsta šifre lota**: označava vrstu šifre lota artikla;  
**Vrsta lota**: označava vrstu lota artikla;  
**Šifra lota dobavljača**: označava broj lota dobavljača artikla;  
**Napomene**: omogućava unos napomene vezane za lot;  
**Količina**: označava količinu artikla za taj lot;  
**Lokacija**: označava lokaciju tog lota artikla;  
**Datum početka**: označava datum početka lota artikla;  
**Datum isteka**: označava datum isteka lota artikla;  
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
- kreiranje redova prijave;
- dostupne statuse i njihovu logiku;
- materijale, tim, škart i obustave;
- upravljanje UJ-ovima i skladišnim knjiženjima.

Za dodatne informacije pogledajte:

- [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common)
- [MES – Uvod](/docs/production/mes/mes-intro)
- [Lista za preuzimanje materijala](/docs/production/pp-production-in-progress/picking-materials-list)