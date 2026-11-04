---
title: Pregled
sidebar_label: Pregled
sidebar_position: 0
---

**# Izvori podataka / SQL upiti / Fluentis Query Studio**

**## Pregled**

Na ovoj stranici predstavićemo opšti pregled alata koje Fluentis nudi za rad sa bazom podataka.

Čvor **Database** omogućava korisniku Fluentisa izvršavanje određenih operacija nad Fluentis bazom podataka.

Čvor se sastoji od sledećih stavki:

- Database Schemas
- Fluentis Query Studio
  - Novi SQL upit
  - Primeri
  - Izvoz u Excel
  - Izvoz u tabelu
- Data Sources

**### Database Schemas**

Odabirom stavke **Database Schemas** otvara se obrazac u kojem je moguće dodavati šeme baze podataka pored onih koje su već standardno dostupne.

Obrazac se sastoji od:

- Trake sa alatima (Ribbon menu) sa uobičajenim radnjama (Traži, Kreiraj, Izbriši).
- Standardnog filtera koji omogućava filtriranje zapisa prema nazivu i/ili tipu.
- Tabele sa rezultatima koja prikazuje postojeće šeme baze podataka.

Za kreiranje novih tabela u bazi podataka, uključujući i one putem automatizovanih čarobnjaka (pogledajte čarobnjak za proširenja), **neophodno** je kreirati prilagođenu šemu baze podataka.

**### Fluentis Query Studio**

Alat Fluentis Query Studio omogućava rad sa Fluentis bazom podataka, uz prethodnu dodelu odgovarajućih prava korisniku putem alata Arm.

![](/img/it-it/applications/database/20250520090348.png)

Kao što je prikazano na slici, obrazac se sastoji od:

- Trake sa alatima (Ribbon) sa dugmadima **Sačuvaj** i **Izvrši**.
- Sa desne strane nalazi se **Object Explorer**, koji omogućava proširivanje različitih elemenata baze podataka (tabele, pogledi, uskladištene procedure, funkcije, parametri i dinamički parametri).
- U gornjem levom delu nalazi se uređivač za pisanje SQL upita.
- U donjem levom delu nalazi se tabela sa rezultatima upita.

**### Data Sources**

![](/img/it-it/applications/database/20250520085246.png)

Izvori podataka (Data Sources) predstavljaju izvore koji omogućavaju strukturiran i organizovan prikaz podataka. Mogu se ponovo koristiti za popunjavanje kontrolnih tabli i/ili dodatnih podataka (ExtraData).

Obrazac za upravljanje izvorima podataka sastoji se od:

- Trake sa alatima (Ribbon menu) sa uobičajenim radnjama koje korisniku omogućavaju kreiranje, uređivanje i brisanje zapisa.
- Standardnog filtera koji omogućava pretraživanje zapisa.
- Tabele sa rezultatima koja prikazuje zapise (izvore podataka).