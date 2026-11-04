---
title: Pregled
sidebar_label: Pregled
sidebar_position: 0
---

# Izvori podataka / SQL upiti / Fluentis Query Studio

## Pregled

Na ovoj ćemo stranici predstaviti opći pregled alata koje Fluentis nudi za rad s bazom podataka.

Čvor **Database** omogućuje korisniku Fluentisa izvršavanje određenih operacija nad Fluentisovom bazom podataka.

Čvor se sastoji od sljedećih stavki:

- Database Schemas
- Fluentis Query Studio
  - Novi SQL upit
  - Primjeri
  - Izvoz u Excel
  - Izvoz u tablicu
- Data Sources

### Database Schemas

Odabirom stavke **Database Schemas** otvara se obrazac u kojem je moguće dodavati sheme baze podataka uz one koje su već standardno dostupne.

Obrazac se sastoji od:

- Trake s alatima (Ribbon menu) s uobičajenim radnjama (Traži, Izradi, Izbriši).
- Standardnog filtra koji omogućuje filtriranje zapisa prema nazivu i/ili vrsti.
- Tablice s rezultatima koja prikazuje postojeće sheme baze podataka.

Za izradu novih tablica u bazi podataka, uključujući i one putem automatiziranih čarobnjaka (pogledajte čarobnjak za proširenja), **potrebno** je izraditi prilagođenu shemu baze podataka.

### Fluentis Query Studio

Alat Fluentis Query Studio omogućuje rad s Fluentisovom bazom podataka, uz prethodnu dodjelu odgovarajućih prava korisniku putem alata Arm.

![](/img/it-it/applications/database/20250520090348.png)

Kao što je prikazano na slici, obrazac se sastoji od:

- Trake s alatima (Ribbon) s tipkama **Spremi** i **Izvrši**.
- Desno se nalazi **Object Explorer**, koji omogućuje proširivanje različitih elemenata baze podataka (tablice, pogledi, pohranjene procedure, funkcije, parametri i dinamički parametri).
- U gornjem lijevom dijelu nalazi se uređivač za pisanje SQL upita.
- U donjem lijevom dijelu nalazi se tablica s rezultatima upita.

### Data Sources

![](/img/it-it/applications/database/20250520085246.png)

Izvori podataka (Data Sources) predstavljaju izvore koji omogućuju strukturirano i organizirano prikazivanje podataka. Mogu se ponovno koristiti za popunjavanje nadzornih ploča i/ili dodatnih podataka (ExtraData).

Obrazac za upravljanje izvorima podataka sastoji se od:

- Trake s alatima (Ribbon menu) s uobičajenim radnjama koje korisniku omogućuju izradu, uređivanje i brisanje zapisa.
- Standardnog filtra koji omogućuje pretraživanje zapisa.
- Tablice s rezultatima koja prikazuje zapise (izvore podataka).