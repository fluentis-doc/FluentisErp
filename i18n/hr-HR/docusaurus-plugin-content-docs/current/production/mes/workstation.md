---
title: Radne stanice
description: Upravljanje i konfiguracija radnih stanica u Fluentis MES-u, uključujući povezivanje s proizvodnim resursima.
keywords:
  - Fluentis MES
  - Radne stanice
  - Proizvodni resursi
  - Konfiguracija MES-a
  - Radni centri
sidebar_position: 3
schema: TechArticle
tags:
  - MES
  - Proizvodnja
  - Radne stanice
  - Fluentis
last_update:
  author: Fluentis Documentation Team
---

# Radne stanice

:::important
Uvod u radne stanice unutar **Fluentis MES-a** ključan je za učinkovito upravljanje resursima i proizvodnim operacijama.  
Namjenska tablica omogućuje definiranje radnih stanica, njihovo pretraživanje, uređivanje te povezivanje s operativnim resursima.
:::

Sustav omogućuje strukturirano upravljanje radnim stanicama te korisnicima omogućuje:

- unos novih šifri radnih stanica;
- pretraživanje postojećih radnih stanica putem namjenskih filtara;
- povezivanje jednog ili više resursa;
- utjecaj na način inicijalnog učitavanja MES-a, ovisno o povezanim resursima.

## Upravljanje radnim stanicama

Tablica omogućuje upravljanje šiframa različitih vrsta *radnih stanica*.
Moguće je unositi nove zapise ili pretraživati postojeće radi pregleda, izmjene ili brisanja.

## Pretraga radnih stanica

Forma za pretragu sastoji se od:

- **Područja filtara**: omogućuje postavljanje kriterija pretrage.
- **Tablice rezultata**: prikazuje popis pronađenih radnih stanica.

### Postupak pretrage

1. Postaviti željene filtre.
2. Kliknuti na gumb **Pretraži**.
3. Pregledati rezultate u tablici.

## Unos radne stanice

Za kreiranje nove šifre:

1. Kliknuti na prvi prazni redak u tablici ili pritisnuti **Novo**.
2. Popuniti sljedeća polja:
   - **Šifra**: naziv računala koje će služiti kao radna stanica.
     :::note
     Naziv računala moguće je dohvatiti izvršavanjem naredbe `hostname` u naredbenom retku.
     :::
   - **Opis**: opis računala koje će služiti kao radna stanica.

3. U pomoćnoj tablici povezati **resurse**.

## Povezivanje resursa

U ovoj tablici moguće je povezati *resurse* koji će moći raditi na pojedinoj radnoj stanici.

- Ako je uz radnu stanicu povezan samo jedan resurs (npr. tipa *radni centar*), prilikom pokretanja MES-a taj će se resurs automatski učitati zajedno sa svim fazama koje su već započete i povezane s njim.  
  Primjer radne stanice namijenjene jednom radnom centru.

- Ako je uz radnu stanicu povezano više resursa (npr. više *radnih centara*), prilikom pokretanja MES-a nijedan od njih neće se automatski učitati, već će korisnik moći odabrati samo jedan od povezanih resursa.  
  Primjer radne stanice namijenjene odjelu u kojem se evidentiraju aktivnosti svih radnih centara tog odjela.

- Ako uz radnu stanicu nije povezan nijedan resurs, prilikom pokretanja MES-a nijedan resurs neće biti automatski učitan, a korisnik će moći odabrati bilo koji resurs definiran u tablici [Proizvodni resursi](/docs/production/mes/production-resources).  
  Primjer radne stanice namijenjene alatničaru koji evidentira svoje aktivnosti za sve radne centre.

  ## Sažetak i dodatne informacije

Radne stanice u Fluentis MES-u omogućuju:
- Definiranje operativnih mjesta koja se koriste u proizvodnom procesu.
- Povezivanje jednog ili više resursa s izravnim utjecajem na ponašanje sustava.
- Automatizirano ili prilagodljivo učitavanje proizvodnih faza.
- Upravljanje matičnim podacima putem strukturirane forme za pretraživanje, unos i izmjenu podataka.

Za dodatne informacije pogledajte:
- [Proizvodni resursi](/docs/production/mes/production-resources)  
- [Zajedničke funkcionalnosti](/docs/guide/common)