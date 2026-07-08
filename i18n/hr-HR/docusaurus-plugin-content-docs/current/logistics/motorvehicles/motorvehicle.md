---
title: Novo vozilo
sidebar_position: 2
description: Vodič za upravljanje i definiranje vozila u modulu Logistika sustava Fluentis ERP.
schema: HowTo
tags:
  - logistika
  - vozila
  - definiranje
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

Tablica za upravljanje vozilima nalazi se na putanji **Logistika > Motorna vozila > Novo vozilo**.  
U ovoj je tablici moguće definirati različita *vozila* koja se koriste i njihove dimenzije.  
Primjer korištenja definiranih vozila nalazi se u [Planovima utovara](/docs/logistics/load-plans/create-plan/), na kartici *Priprema plana utovara*.  
Tablica omogućuje unos novih zapisa te pretraživanje, pregled, izmjenu ili brisanje postojećih.

## Pretraživanje vozila

Forma se sastoji od područja filtra i područja rezultata.  
Nakon postavljanja željenih filtara kliknite na gumb **Traži** kako bi se rezultati prikazali u tablici rezultata.

## Unos vozila

Za unos novog vozila:

1. Kliknite na prvi prazan redak u tablici ili pritisnite gumb **Novo**.
2. Popunite najmanje sljedeća obvezna polja:

- **Tip motornog vozila**: vrsta vozila odabrana iz tablice *Vrste vozila*;
- **Šifra**: identifikacijska šifra vozila;
- **Broj tablice**: registracijska oznaka vozila;
- **Datum knjiženja/registracije**: datum registracije vozila;
- **Vrsta goriva vozila**: vrsta goriva koja se koristi, definirana u tablici [Vrste goriva](/docs/configurations/tables/logistics/motorvehicle-gas-type).

Moguće je unijeti i neobvezna polja kao što su:

- **Marka**: marka vozila definirana u tablici [Marke vozila](/docs/configurations/tables/logistics/motorvehicle-brands);
- **Model**: označava model vozila definiran u tablici [Marke vozila](/docs/configurations/tables/logistics/motorvehicle-brands);        
- **Početni datum**: označava datum početka korištenja vozila;     
- **Datum isteka ugovora**: označava datum isteka ugovora za vozilo;  
- **Datum zatvaranja**: označava datum od kojeg više nije moguće koristiti vozilo;  
- **Opis**: omogućuje unos slobodnog opisa vozila;  
- **Konto (račun)**: omogućuje unos konta klijenta povezanog s vozilom;   
- **Vlasništvo (svojstvo) vozila**: omogućuje odabir vrste [Vlasništva vozila](/docs/configurations/tables/logistics/motorvehicle-ownership); 
- **Dodijeljeni vozač**: omogućuje odabir [Dodijeljenog vozača](/docs/logistics/motorvehicles/motorvehicle-drivers) za vozilo; 
- **Podružnica poduzeća**: omogućuje odabir podružnice poduzeća;        
- **Projekt**: omogućuje odabir projekta dodijeljenog vozilu.

## Detalji vozila

U donjem dijelu forme dostupne su sljedeće kartice:

### Detalji

Polja koja se odnose na fizičke karakteristike i kapacitet vozila:

- **Odjeljak (razmak)**: odjeljak vozila;
- **Registracijska oznaka**: identifikacijska registracijska oznaka;
- **Jedinica mjere za kapacitet**: mjerna jedinica za nosivost;
- **Maksimalni kapacitet**: maksimalna nosivost prema definiranoj mjernoj jedinici;
- **Jedinica mjere za dimenzije**: mjerna jedinica koja se koristi za dimenzije (visinu, širinu i dubinu) i pripadajuće tolerancije;
- **Visina**: visina izražena u mjernoj jedinici dimenzija;
- **Širina**: širina izražena u mjernoj jedinici dimenzija;
- **Dubina**: dubina izražena u mjernoj jedinici dimenzija;
- **Dopuštenje visine**: tolerancija visine;
- **Dopuštenje širine**: tolerancija širine;
- **MJ volumena**: mjerna jedinica za volumen;
- **Volumen**: volumen izražen u mjernoj jedinici volumena;
- **Broj jedinica tereta (paleta) koje se mogu smjestiti**: maksimalan broj jedinica tereta koje se mogu prevoziti;
- **Broj razina**: maksimalan broj mogućih slojeva tereta.

### Razdoblje neaktivnosti vozila

Omogućuje unos razdoblja tijekom kojih vozilo nije moguće koristiti.  
Ti se podaci prikazuju u [Planiranju](/docs/logistics/shipping/calendar).

Dostupna su sljedeća polja:

- **Opis**: omogućuje unos opisa razdoblja neaktivnosti vozila;          
- **Od datuma**: omogućuje unos datuma početka razdoblja neaktivnosti vozila;          
- **Do datuma**: omogućuje unos datuma završetka razdoblja neaktivnosti vozila;          
- **Razlog**: omogućuje odabir razloga definiranog u tablici [Razlozi odsutnosti vozača](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Sažetak i dodatne informacije

U ovom je dokumentu opisan cjelokupan postupak definiranja i upravljanja novim vozilima u modulu Logistika ERP sustava.

Za više informacija:

- [Planovi utovara](/docs/logistics/load-plans/create-plan/)
- [Dodijeljeni vozač](/docs/logistics/motorvehicles/motorvehicle-drivers)
- [Planiranje otprema i kalendar](/docs/logistics/shipping/calendar)
- [Opći vodič za zajedničke funkcije, gumbe i polja](/docs/guide/common)