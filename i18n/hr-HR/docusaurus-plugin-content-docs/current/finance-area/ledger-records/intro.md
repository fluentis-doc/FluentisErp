---
title: Uvod
sidebar_position: 1
---

Modul uključuje funkcionalnosti za pretraživanje, unos i izmjenu računovodstvenih zapisnika te povezane porezne pokrete.  
S ovim modulom moguće je potpuno upravljanje poslovnim računovodstvom. 

Zapisnici se generiraju putem procedura za knjiženje dokumenata iz aktivnog i pasivnog ciklusa ili se unose izravno, ručno.  

Iz modula se pristupa prikazu bilance, prikazu računa, kao i pokretanju raznih **ispisa**, grupiranih u tri bloka:

- **Računovodstveni**: Bilance, Izvodi računa, računovodstvene situacije i drugi detaljni ispisi. 
- **Fiscali**: Računovodstvene knjige, Registar PDV-a, PDV obračun, Izjave o namjeri.
- **Analitičko računovodstvo**:  Kretanje troškovnih centara povezano s računovodstvenim kretanjima.


**Procedure** modula omogućuju: 

- Izračun i knjiženje usklađivačkih isprava
- Automatsko zatvaranje i ponovo otvaranje računa
- Izračun razlika tečaja na kraju godine (Valutna usklađivanja)
- Upravljanje privremenim zapisima
- Preuređivanje PDV protokola 

Prije nego što pristupite unosu ili realizaciji zapisnika, potrebno je osigurati da su svi tablični podaci ispravno postavljeni, kao i [**parametri**](/docs/configurations/parameters/finance/accounting-parameters) modula.

Računovodstveni podaci koriste se u modulu za kontroling za obradu međugodišnjih zatvaranja i za obradu svih kretanja troškovnih centara povezanih s njima.
Modul je usko povezan s blagajnom, s kojom razmjenjuje podatke i prima računovodstvene pokrete od automatskih procedura za knjiženje različitih računovodstvenih događaja povezanih s transakcijama blagajne (bankovni transferi, aktivni portfelj itd.).

Jedna od ključnih karakteristika modula za računovodstvene zapisnike je njegova logika temeljena na [**računovodstvenim predlošcima**](/docs/configurations/tables/finance/ledger-records-templates/ledger-records-templates-intro) koji se mogu slobodno konfigurirati za definiranje vlastitih računovodstvenih shema. 


:::important Vidi također
[**VIDEO TUTORIJALI ZA RAČUNOVODSTVENE ZAPISNIKE**](/docs/video/finance/intro)
:::