---
title: Novo vozilo
sidebar_position: 2
description: Vodič za upravljanje i definisanje vozila u modulu Logistika sistema Fluentis ERP.
schema: HowTo
tags:
  - logistika
  - vozila
  - definisanje
last_update:
  author: Fluentis Documentation Team
  date: 12-11-2025
keywords:
  - vozila
  - logistika
  - dimenzije
  - plan utovara
---

# Novo vozilo

Tabela za upravljanje vozilima nalazi se na putanji **Logistika > Motorna vozila > Novo vozilo**.  
U ovoj je tabeli moguće definisati različita *vozila* koja se koriste i njihove dimenzije.  
Primer korišćenja definisanih vozila nalazi se u [Planovima utovara](/docs/logistics/load-plans/create-plan/), na kartici *Priprema plana utovara*.  
Tabela omogućava unos novih zapisa te pretraživanje, pregled, izmenu ili brisanje postojećih.

## Pretraživanje vozila

Forma se sastoji od oblasti filtera i oblasti rezultata.  
Nakon postavljanja željenih filtera kliknite na dugme **Traži** kako bi se rezultati prikazali u tabeli rezultata.

## Unos vozila

Za unos novog vozila:

1. Kliknite na prvi prazan red u tabeli ili pritisnite dugme **Novo**.
2. Popunite najmanje sledeća obavezna polja:

- **Tip motornog vozila**: vrsta vozila izabrana iz tabele *Vrste vozila*;
- **Šifra**: identifikaciona šifra vozila;
- **Broj tablice**: registarska oznaka vozila;
- **Datum knjiženja/registracije**: datum registracije vozila;
- **Vrsta goriva vozila**: vrsta goriva koja se koristi, definisana u tabeli [Vrste goriva](/docs/configurations/tables/logistics/motorvehicle-gas-type).

Moguće je uneti i neobavezna polja kao što su:

- **Marka**: marka vozila definisana u tabeli [Marke vozila](/docs/configurations/tables/logistics/motorvehicle-brands);
- **Model**: označava model vozila definisan u tabeli [Marke vozila](/docs/configurations/tables/logistics/motorvehicle-brands);        
- **Početni datum**: označava datum početka korišćenja vozila;     
- **Datum isteka ugovora**: označava datum isteka ugovora za vozilo;  
- **Datum zatvaranja**: označava datum od kojeg više nije moguće koristiti vozilo;  
- **Opis**: omogućava unos slobodnog opisa vozila;  
- **Konto (račun)**: omogućava unos konta klijenta povezanog sa vozilom;   
- **Vlasništvo (svojstvo) vozila**: omogućava izbor vrste [Vlasništva vozila](/docs/configurations/tables/logistics/motorvehicle-ownership); 
- **Dodeljeni vozač**: omogućava izbor [Dodeljenog vozača](/docs/logistics/motorvehicles/motorvehicle-drivers) za vozilo; 
- **Podružnica preduzeća**: omogućava izbor podružnice preduzeća;        
- **Projekat**: omogućava izbor projekta dodeljenog vozilu.

## Detalji vozila

U donjem delu forme dostupne su sledeće kartice:

### Detalji

Polja koja se odnose na fizičke karakteristike i kapacitet vozila:

- **Odeljak (razmak)**: odeljak vozila;
- **Registarska oznaka**: identifikaciona registarska oznaka;
- **Jedinica mere za kapacitet**: merna jedinica za nosivost;
- **Maksimalni kapacitet**: maksimalna nosivost prema definisanoj mernoj jedinici;
- **Jedinica mere za dimenzije**: merna jedinica koja se koristi za dimenzije (visinu, širinu i dubinu) i pripadajuće tolerancije;
- **Visina**: visina izražena u mernoj jedinici dimenzija;
- **Širina**: širina izražena u mernoj jedinici dimenzija;
- **Dubina**: dubina izražena u mernoj jedinici dimenzija;
- **Dopuštenje visine**: tolerancija visine;
- **Dopuštenje širine**: tolerancija širine;
- **JM volumena**: merna jedinica za volumen;
- **Volumen**: volumen izražen u mernoj jedinici volumena;
- **Broj jedinica tereta (paleta) koje se mogu smestiti**: maksimalan broj jedinica tereta koje se mogu prevoziti;
- **Broj nivoa**: maksimalan broj mogućih slojeva tereta.

### Period neaktivnosti vozila

Omogućava unos perioda tokom kojih vozilo nije moguće koristiti.  
Ti se podaci prikazuju u [Planiranju](/docs/logistics/shipping/calendar).

Dostupna su sledeća polja:

- **Opis**: omogućava unos opisa perioda neaktivnosti vozila;          
- **Od datuma**: omogućava unos datuma početka perioda neaktivnosti vozila;          
- **Do datuma**: omogućava unos datuma završetka perioda neaktivnosti vozila;          
- **Razlog**: omogućava izbor razloga definisanog u tabeli [Razlozi odsustva vozača](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Sažetak i dodatne informacije

U ovom je dokumentu opisan celokupan postupak definisanja i upravljanja novim vozilima u modulu Logistika ERP sistema.

Za više informacija:

- [Planovi utovara](/docs/logistics/load-plans/create-plan/)
- [Dodeljeni vozač](/docs/logistics/motorvehicles/motorvehicle-drivers)
- [Planiranje otprema i kalendar](/docs/logistics/shipping/calendar)
- [Opšti vodič za zajedničke funkcije, dugmad i polja](/docs/guide/common)