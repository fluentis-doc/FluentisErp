---
title: Panel Alati/aplikacija u Fluentis ERP-u
description: Pregled panela Alati u Fluentis ERP-u – upravljanje dokumentacijom, konfiguracija, praćenje aktivnosti i integrisani moduli za napredne korisnike.
keywords:
  - Fluentis ERP
  - ERP alati
  - upravljanje dokumentacijom
  - konfiguracija Fluentisa
  - praćenje aktivnosti
  - BizLink
  - Fluentis Supervisor
slug: /applications/applications-intro
sidebar_position: 0
sidebar_label: ALATI
tags:
  - ERP
  - alati
  - upravljanje dokumentacijom
  - konfiguracija sistema
last_update:
  author: Fluentis Documentation Team
  date: 2025-10-22
---

# Panel Alati

Panel **Alati** sadrži listu aplikacija i modula koji se mogu konfigurisati i kojima se može upravljati unutar sistema **Fluentis ERP**.

Predstavlja centralizovanu pristupnu tačku za napredne korisnike koji žele da nadziru, prate i prilagođavaju ponašanje ERP sistema.

## Glavni odeljci panela Alati

### ⚙️ Application Resource Manager (ARM)

Panel omogućava **brzi pristup komandama** za upravljanje aplikativnim resursima, kao što su:
- konfiguracija korisnika,
- definisanje ograničenja i
- održavanje globalnih podešavanja.

Detaljnija konfiguracija parametara obično se obavlja putem namenski razvijenog veb-portala [**ARM**](https://docs.fluentis.com/Arm/), namenjenog sistemskom upravljanju sistemom Fluentis.

### 🔹 Revizijski trag (Audit Trail)

- **Monitor aktivnosti**  
  Omogućava pregled i analizu procesa u toku, planiranih operacija i završenih aktivnosti. Koristan je za praćenje performansi i dijagnostikovanje mogućih operativnih problema.

- **Konfigurisanje**  
  Odeljak namenjen definisanju parametara sistema, veza, bezbednosnih opcija i podešavanja aplikacije. Ovde je moguće prilagoditi Fluentis potrebama preduzeća.

- **Istorija aktivnosti**  
  Prikazuje hronološki zapis operacija koje su izvršili korisnici ili automatski procesi.  
  Omogućava potpunu sledljivost i transparentnost promena sprovedenih u sistemu.

### 🔗 BizLink

Modul namenjen integraciji sa eksternim sistemima putem API-ja i servisa.  
Omogućava konfigurisanje komunikacije između sistema Fluentis i drugih poslovnih platformi.

- **Ulazni / izlazni dokumenti**  
  Nadzor i arhiviranje poslovnih i operativnih dokumenata.
- **Uvoz podataka na zahtev**  
  Funkcija za uvoz dokumenata ili podataka iz eksternih izvora.
- **Konfiguracija i transkodiranje**  
  Upravljanje formatima, tokovima i kodiranjima dokumenata.
- **SDI i NSO dokumenti**  
  Integracija sa sistemima za elektronsko fakturisanje i čvorom za distribuciju narudžbina.
- **WebApi Controller**  
  Interfejs za upravljanje API pozivima i digitalnim tokovima dokumenata.

### 📂 Upravljanje dokumentima

Odeljak **Upravljanje dokumentima** na panelu *Alati* sistema Fluentis ERP omogućava upravljanje svim aspektima poslovne dokumentacije, od njene klasifikacije do upravljanja ugovorima i sadržajem.  
To je centralno mesto za nadzor, arhiviranje i deljenje informacija u digitalnom obliku unutar organizacije.

- **Dokumenti**  
  Omogućava izradu, izmenu i arhiviranje poslovnih dokumenata.

- **Tipovi dokumenata**  
  Upravlja **klasifikacijom i definisanjem tipova dokumenata**, uz podešavanje metapodataka, šablona numerisanja i pravila sledljivosti.  
  Omogućava standardizaciju upravljanja digitalnim sadržajem u preduzeću.

- **Ugovori**  
  Modul namenjen upravljanju **poslovnim ugovorima**: izradi, produženju, rokovima isteka i prilozima.  
  Pruža alate za praćenje statusa ugovora i automatizaciju obaveštenja o produženju ili zatvaranju.

- **Mape (Fascikle)**  
  Odeljak koji omogućava organizovanje dokumenata u **hijerarhijske strukture**, čime se olakšavaju pretraga i deljenje informacija.  
  Svaka fascikla može se povezati sa određenim ulogama, odeljenjima ili projektima.

- **Urednici**  
  Sadrži alate za **uređivanje i pregled digitalnih dokumenata** direktno unutar sistema Fluentis, bez potrebe za korišćenjem eksternih aplikacija.

### 🧠 Fluentis Supervisor

Ovaj alat omogućava zakazivanje izvršavanja zadataka (*taskova*), odnosno nizova radnji različite složenosti, kao što su izvršavanje upita, sačuvanih procedura ili opštih skripti. Izvršavanje se obično završava slanjem strukturirane i organizovane e-pošte.

- **Aktivnosti**
- **Zadaci i događaji**
- **Distribucione liste**

## 🧭 Zaključak

Panel **Alati sistema Fluentis ERP** osmišljen je kako bi omogućio potpunu kontrolu nad poslovnom infrastrukturom, objedinjujući konfiguraciju, dokumentaciju, nadzor i komunikaciju između sistema.  
Njegova modularnost omogućava jednostavno prilagođavanje različitim poslovnim potrebama, uz istovremeno očuvanje doslednosti, bezbednosti i operativne sledljivosti.