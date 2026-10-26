---
title: Ploča Alata/aplikacija u Fluentis ERP-u
description: Pregled ploče Alati u Fluentis ERP-u – upravljanje dokumentacijom, konfiguracija, praćenje aktivnosti i integrirani moduli za napredne korisnike.
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
  - konfiguracija sustava
last_update:
  author: Fluentis Documentation Team
  date: 2025-10-22
---

# Ploča Alati

Ploča **Alati** sadrži popis aplikacija i modula koji se mogu konfigurirati i kojima se može upravljati unutar sustava **Fluentis ERP**.

Predstavlja centraliziranu pristupnu točku za napredne korisnike koji žele nadzirati, pratiti i prilagođavati ponašanje ERP sustava.

## Glavni odjeljci ploče Alati

### ⚙️ Application Resource Manager (ARM)

Ploča omogućuje **brzi pristup naredbama** za upravljanje aplikacijskim resursima, kao što su:
- konfiguracija korisnika,
- definiranje ograničenja i
- održavanje globalnih postavki.

Detaljnija konfiguracija parametara obično se obavlja putem namjenskog web-portala [**ARM**](https://docs.fluentis.com/Arm/), namijenjenog sistemskom upravljanju sustavom Fluentis.

### 🔹 Revizijski trag (Audit Trail)

- **Praćenje aktivnosti**
  Omogućuje pregled i analizu procesa u tijeku, planiranih operacija i dovršenih aktivnosti. Koristan je za praćenje performansi i dijagnosticiranje mogućih operativnih problema.

- **Konfiguracija**
  Odjeljak namijenjen definiranju parametara sustava, veza, sigurnosnih opcija i postavki aplikacije. Ovdje je moguće prilagoditi Fluentis potrebama tvrtke.

- **Povijest aktivnosti**  
Prikazuje kronološki zapis operacija koje su izvršili korisnici ili automatski procesi.  
Omogućuje potpunu sljedivost i transparentnost promjena provedenih u sustavu.

### 🔗 BizLink 

Modul namijenjen integraciji s vanjskim sustavima putem API-ja i servisa.  
Omogućuje konfiguriranje komunikacije između Fluentisa i drugih poslovnih platformi.

- **Ulazni / izlazni dokumenti**  
  Nadzor i arhiviranje poslovnih i operativnih dokumenata.
- **Uvozi na zahtjev**  
  Funkcija za uvoz dokumenata ili podataka iz vanjskih izvora.
- **Konfiguracija i transkodiranje**  
  Upravljanje formatima, tokovima i kodiranjima dokumenata.
- **SDI i NSO dokumenti**  
  Integracija sa sustavima za elektroničko fakturiranje i čvorom za distribuciju narudžbi.
- **WebApi Controller**  
  Sučelje za upravljanje API pozivima i digitalnim tokovima dokumenata.

### 📂 Upravljanje dokumentacijom

Odjeljak **Upravljanje dokumentacijom** na ploči *\*Alati\** sustava Fluentis ERP omogućuje upravljanje svim aspektima poslovne dokumentacije, od njezine klasifikacije do upravljanja ugovorima i sadržajem.  
To je središnje mjesto za nadzor, arhiviranje i dijeljenje informacija u digitalnom obliku unutar organizacije.

- **Dokumenti**  
Omogućuje izradu, izmjenu i arhiviranje poslovnih dokumenata.

- **Vrste dokumenata**  
Upravlja **klasifikacijom i definiranjem vrsta dokumenata**, uz postavljanje metapodataka, predložaka numeriranja i pravila sljedivosti.  
Omogućuje standardizaciju upravljanja digitalnim sadržajem u tvrtki.

- **Ugovori**  
Modul namijenjen upravljanju **poslovnim ugovorima**: izradi, produljenju, rokovima isteka i prilozima.  
Pruža alate za praćenje statusa ugovora i automatizaciju obavijesti o produljenju ili zatvaranju.

- **Mape**  
Odjeljak koji omogućuje organiziranje dokumenata u **hijerarhijske strukture**, čime se olakšavaju pretraživanje i dijeljenje informacija.  
Svaka mapa može se povezati s određenim ulogama, odjelima ili projektima.

- **Uređivači**  
Sadrži alate za **uređivanje i pregled digitalnih dokumenata** izravno unutar sustava Fluentis, bez potrebe za korištenjem vanjskih aplikacija.

### 🧠 Fluentis Supervisor

Ovaj alat omogućuje zakazivanje izvršavanja zadataka (*taskova*), odnosno nizova radnji različite složenosti, kao što su izvršavanje upita, pohranjene procedure ili opće skripte. Izvršavanje se obično završava slanjem strukturirane i organizirane e-pošte.

- **Aktivnosti**
- **Zadaci i događaji**
- **Distribucijske liste**

## 🧭 Zaključak

Ploča **Alati sustava Fluentis ERP** osmišljena je kako bi omogućila potpunu kontrolu nad poslovnom infrastrukturom, objedinjujući konfiguraciju, dokumentaciju, nadzor i komunikaciju između sustava.  
Njezina modularnost omogućuje jednostavnu prilagodbu različitim poslovnim potrebama, uz istodobno očuvanje dosljednosti, sigurnosti i operativne sljedivosti.