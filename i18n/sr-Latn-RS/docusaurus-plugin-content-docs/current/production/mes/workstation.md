---
title: Radne stanice
description: Upravljanje i konfiguracija radnih stanica u Fluentis MES-u, uključujući povezivanje sa proizvodnim resursima.
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
Uvod u radne stanice unutar **Fluentis MES-a** ključan je za efikasno upravljanje resursima i proizvodnim operacijama.  
Namenska tabela omogućava definisanje radnih stanica, njihovu pretragu, uređivanje i povezivanje sa operativnim resursima.
:::

Sistem omogućava strukturirano upravljanje radnim stanicama i korisnicima omogućava:

- unos novih šifara radnih stanica;
- pretragu postojećih radnih stanica putem namenskih filtera;
- povezivanje jednog ili više resursa;
- uticaj na način inicijalnog učitavanja MES-a, u zavisnosti od povezanih resursa.

## Upravljanje radnim stanicama

Tabela omogućava upravljanje šiframa različitih vrsta *radnih stanica*.
Moguće je unositi nove zapise ili pretraživati postojeće radi pregleda, izmene ili brisanja.

## Pretraga radnih stanica

Forma za pretragu sastoji se od:

- **Područja filtera**: omogućava postavljanje kriterijuma pretrage.
- **Tabela rezultata**: prikazuje listu pronađenih radnih stanica.

### Postupak pretrage

1. Postaviti željene filtere.
2. Kliknuti na dugme **Pretraži**.
3. Pregledati rezultate u tabeli.

## Unos radne stanice

Za kreiranje nove šifre:

1. Kliknuti na prvi prazan red u tabeli ili pritisnuti **Novo**.
2. Popuniti sledeća polja:
   - **Šifra**: naziv računara koji će služiti kao radna stanica.
     :::note
     Naziv računara moguće je dobiti izvršavanjem komande `hostname` u komandnoj liniji.
     :::
   - **Opis**: opis računara koji će služiti kao radna stanica.

3. U pomoćnoj tabeli povezati **resurse**.

## Povezivanje resursa

U ovoj tabeli moguće je povezati *resurse* koji će moći raditi na pojedinoj radnoj stanici.

- Ako je uz radnu stanicu povezan samo jedan resurs (npr. tipa *radni centar*), prilikom pokretanja MES-a taj resurs će se automatski učitati zajedno sa svim fazama koje su već započete i povezane sa njim.  
  Primer radne stanice namenjene jednom radnom centru.

- Ako je uz radnu stanicu povezano više resursa (npr. više *radnih centara*), prilikom pokretanja MES-a nijedan od njih neće se automatski učitati, već će korisnik moći odabrati samo jedan od povezanih resursa.  
  Primer radne stanice namenjene odeljenju u kojem se evidentiraju aktivnosti svih radnih centara tog odeljenja.

- Ako uz radnu stanicu nije povezan nijedan resurs, prilikom pokretanja MES-a nijedan resurs neće biti automatski učitan, a korisnik će moći odabrati bilo koji resurs definisan u tabeli [Proizvodni resursi](/docs/production/mes/production-resources).  
  Primer radne stanice namenjene alatničaru koji evidentira svoje aktivnosti za sve radne centre.

## Sažetak i dodatne informacije

Radne stanice u Fluentis MES-u omogućavaju:

- Definisanje operativnih mesta koja se koriste u proizvodnom procesu.
- Povezivanje jednog ili više resursa sa direktnim uticajem na ponašanje sistema.
- Automatizovano ili prilagodljivo učitavanje proizvodnih faza.
- Upravljanje matičnim podacima putem strukturirane forme za pretragu, unos i izmenu podataka.

Za dodatne informacije pogledajte:

- [Proizvodni resursi](/docs/production/mes/production-resources)
- [Zajedničke funkcionalnosti](/docs/guide/common)