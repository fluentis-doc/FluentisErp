---
title: Upoređivanje reklasifikacija
sidebar_position: 5
---

Upoređivanje reklasifikacija omogućava, polazeći od određenog [*modela reklasifikacije*](/docs/controlling/reclassifications/create-reclassification-model), izradu poređenja između različitih reklasifikacija sačuvanih u ***FluentisERP-u***.

## UPOREĐIVANJE NA OSNOVU PODATAKA REKLASIFIKOVANIH PRIVREMENIH ZATVARANJA

Potrebno je postaviti model, uneti opis poređenja, a sa desne strane ne označiti opciju **Podaci iz kontrolinga**, kako bi ***FluentisERP*** učitao podatke reklasifikovanih modela kreiranih iz podataka privremenog zatvaranja ili *konsolidacije*.

U donjem obrascu ***Detalji*** nalaze se sledeća polja:

- *Redni broj* – identifikacioni element podatka za karticu ***Odstupanja***
- *Šifra/Zatvaranje* (sa pripadajućim opisom i datumom)

Nakon čuvanja ovih podešavanja, na kartici ***Odstupanja*** biće prikazan rezultat poređenja. Dostupne su sledeće opcije:

- *Prikaz odstupanja*: omogućava prikaz procentualnog odstupanja između unetih reklasifikacija. Sa desne strane može se odrediti u kojoj koloni (susednoj ili fiksnoj) će se izračunavati odstupanje.

- *Prikaži detalje podataka*: prikazuje detalje podkonta ili centara koji vrednuju pojedinačni čvor modela.

- *Prikaz centara*: nije aktivan za poređenja koja nisu iz kontrolinga.

- *Decimalna mesta*: broj decimalnih mesta za kolonu odstupanja.

## UPOREĐIVANJE NA OSNOVU PODATAKA IZ UPRAVLJAČKOG RAČUNOVODSTVA KONTROLINGA

Potrebno je postaviti model, uneti opis poređenja, a sa desne strane označiti opciju **Podaci iz kontrolinga**, kako bi ***FluentisERP*** učitao podatke iz upravljačkog računovodstva kontrolinga.

U donjem obrascu ***Detalji*** nalaze se sledeća polja:

- *Redni broj* – identifikacioni element podatka na kartici ***Odstupanja***
- *Područje* (obavezno) – područje iz kojeg se učitavaju podaci
- [*Dimenzija*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) (obavezno) – dimenzija iz koje se učitavaju podaci
- [*Centar troška*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) (opciono) – centar za koji se žele prikazati podaci
- *Projekat* – trenutno nije u upotrebi
- *Početni i završni period* (obavezno) – vremenski raspon perioda koji se uzima u obzir
- *Početna i završna godina* (obavezno) – vremenski raspon godina koji se uzima u obzir
- *Prikaz detalja perioda*: omogućava prikaz podataka za svaki period unutar definisanog raspona kao zasebne kolone
- *Centar/Nalog po koloni*: omogućava prikaz šifre *centra* unutar naziva kolone
- *Izračunavanje indeksa*: opcija koja forsira trenutni obračun indeksa troškova centara. Ova opcija važi prilikom poređenja modela koji se koristi za merenje centara u tabeli *Centri troškova*.

Nakon čuvanja ovih podešavanja, na kartici ***Odstupanja*** biće prikazan rezultat poređenja. Dostupne su sledeće opcije:

- *Prikaz odstupanja*: omogućava prikaz procentualnog odstupanja između unetih reklasifikacija. Sa desne strane može se odrediti u kojoj koloni (susednoj ili fiksnoj) će se izračunavati odstupanje.

- *Prikaži detaljne podatke*: prikazuje detalje podkonta ili centara koji vrednuju pojedinačni čvor modela.

- *Prikaz centara*: prikazuje i detalje centara povezanih sa podkontima čvora.

- *Prikaz ukupnih iznosa*: dodaje završnu kolonu sa zbirnim iznosom svih prikazanih kolona u donjem prikazu.

- *Decimalna mesta*: broj decimalnih mesta za kolonu odstupanja.

U slučaju prikaza odstupanja, dostupne su sledeće kolone odstupanja:

- *%* – vertikalni procenat između čvora označenog kao Referentni procenat (koji će imati vrednost 100%) i svih ostalih
- *Odstupanje* – apsolutna vrednost odstupanja
- *% Odstupanja* – odstupanje izraženo u procentima
- *% Odstupanja u odnosu na %* – poredi procente između dve kolone

Ako se poredi model za raspodelu troškova centrima radi obračuna indeksa, a u detaljima podešavanja filtrirani su različiti proizvodni centri, u donjem proširenom prikazu biće dostupni ukupni rezultati obračuna indeksa troškova za svaki centar. Prikazani podaci uključuju:

- *JM1-F BROJILAC*: brojilac za obračun fiksnog indeksa za JM1 centra
- *JM1-F IMENILAC*: imenilac za obračun fiksnog indeksa za JM1 centra
- *JM1-F VREDNOST INDEKSA*: vrednost fiksnog indeksa za JM1 centra
- *JM1-V BROJILAC*: brojilac za obračun varijabilnog indeksa za JM1 centra
- *JM1-V IMENILAC*: imenilac za obračun varijabilnog indeksa za JM1 centra
- *JM1-V VREDNOST INDEKSA*: vrednost varijabilnog indeksa za JM1 centra
- *JM1 UKUPNO*: ukupan indeks JM1 centra

- *JM2-F BROJILAC*: brojilac za obračun fiksnog indeksa za JM2 centra
- *JM2-F IMENILAC*: imenilac za obračun fiksnog indeksa za JM2 centra
- *JM2-F VREDNOST INDEKSA*: vrednost fiksnog indeksa za JM2 centra
- *JM2-V BROJILAC*: brojilac za obračun varijabilnog indeksa za JM2 centra
- *JM2-V IMENILAC*: imenilac za obračun varijabilnog indeksa za JM2 centra
- *JM2-V VREDNOST INDEKSA*: vrednost varijabilnog indeksa za JM2 centra
- *JM2 UKUPNO*: ukupan indeks JM2 centra

- *% BROJILAC*: brojilac za obračun procentualnog indeksa
- *% IMENILAC*: imenilac za obračun procentualnog indeksa
- *% PROCENAT*: vrednost procentualnog indeksa

:::tip NAPOMENA
Prilikom obrade poređenja u kontrolingu, ***FluentisERP*** će automatski kreirati onoliko reklasifikacija na modelu koliko postoji kombinacija centra, godine, meseca i detalja koje je potrebno obraditi pre prikaza rezultata. Što je lista složenija, to će obrada trajati duže.
:::