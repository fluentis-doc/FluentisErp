---
title: Uvod
sidebar_position: 1
---

Modul uključuje funkcionalnosti za pretraživanje, unos i izmjenu računovodstvenih zapisa/knjiženja te povezanih poreznih tretmana.  
S ovim modulom moguće je potpuno upravljanje poslovnim računovodstvom. 

Zapisi/knjiženja/kretanja se generiraju putem procedura za knjiženje dokumenata iz prodaje i nabave ili se unose izravno, tj. ručno.  

Iz modula se pristupa prikazu bilance, prikazu konta, kao i pokretanju raznih **ispisa**, grupiranih u tri grupe:

- **Računovodstveni**: Bilance, Izvodi računa, računovodstveni pregledi i drugi detaljni ispisi. 
- **Porezni**: Računovodstvene knjige, Registar PDV-a, PDV obračun
- **Analitičko računovodstvo**:  Kretanje troškovnih centara povezano s računovodstvenim zapisima/knjiženjima.


**Procedure** modula omogućuju: 

- Izračun i knjiženje dokumenata usklađivanja
- Automatsko zatvaranje i ponovo otvaranje računa
- Izračun razlika tečaja na kraju godine (valutna usklađivanja)
- Upravljanje privremenim zapisima
- Preuređivanje PDV protokola 

Prije nego što se pristupi unosu ili realizaciji knjiženja, potrebno je osigurati da su svi podaci ispravno postavljeni, kao i [**parametri**](/docs/configurations/parameters/finance/accounting-parameters) modula.

Računovodstveni podaci koriste se u modulu za kontroling za obradu međugodišnjih/privremenih zatvaranja i za obradu svih knjiženja troškovnih centara povezanih s njima.
Modul je usko povezan s blagajnom, s kojom razmjenjuje podatke i prima računovodstvena knjiženja od automatskih procedura za knjiženje različitih računovodstvenih događaja povezanih s transakcijama blagajne (bankovni transferi, aktivni portfelj itd.).

Jedna od ključnih karakteristika modula za računovodstvene zapise je njegova logika temeljena na [**računovodstvenim predlošcima**](/docs/configurations/tables/finance/ledger-records-templates/ledger-records-templates-intro) koji se mogu slobodno konfigurirati za definiranje vlastitih računovodstvenih shema. 


:::important Vidi također
[**VIDEO TUTORIJALI ZA RAČUNOVODSTVENE ZAPISNIKE**](/docs/video/finance/intro)
:::