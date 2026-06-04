---
title: Business Areas - Riznica
sidebar_position: 2
---

**Kreiraj datoteku Sepa** (kod FS-PR-SEPA-PaymentRequest): Ovaj parametar omogućuje povezivanje određenog Bizlink 'SEPA' toka za izvoz SEPA naloga za plaćanje u eurima. Svaka zemljopisna lokalizacija ima zadani format generiranja (trenutno je za Italiju verzija 4.01), ali u slučaju promjene formata može biti korisno promijeniti tip datoteke koja će se generirati, počevši od određenog datuma.  

**SDD (SEPA izravno terećenje)** (kod FS-PR-SEPA-SDD): kao i prethodni parametar, ali za SDD datoteke koje se mogu generirati iz Izvadaka efekata (trenutno za Italiju verzija 1.01).  

**Kreiranje SEPA datoteka za inozemstvo** (codice FS-PR-SEPA-ForeignPaymentRequest): kao prvi parametar, ali za datoteke naloga za plaćanje u valuti (inozemne uplate).  

Trenutno dostupni tokovi su:  

- *EsteroSEPA_XML_Payment*
- *ExportSDDWorkflow*
- *ExportSDDWorkflow_1.01*
- *SEPA_XML_Payments_Export*
- *SEPA_XML_Payments_Export_4.01*
- *SEPA_XML_Payments_Export_FR*
- *SEPA_XML_Payments_Export_HR*
- *SEPA_XML_Payments_Export_RO*
- *SEPA_XML_Payments_Export_RS*
- *SEPA_XML_Payments_Export_SI*


**Detalji prometa** (kod FS-PR-DocFinanceNote): za poduzeća koja primaju bankovne prometne stavke iz DocFinance sustava, ovim parametrom se može definirati kako će ***FluentisERP*** popunjavati opise uvezenih stavki. Logika kodiranja teksta slijedi postojeću logiku korištenu kod računovodstvenih šifri, s dodatkom oznake (DF) koja označava opis preuzet direktno iz DocFinance datoteke.  

:::tip Napomena 
Na primjer:  
- ako se parametar postavi na "(2) FT.N. (DF) del (4) – (6)" generirat će se tekst:  
"Opis šifre" + FT.N. + "Opis iz DocFinance" del "datum dokumenta stavke" - "Opis podračuna stavke"    
- ako se parametar postavi na "FT. (3) del (4)", tj. bez korištenja teksta iz DocFinance, dobit ćemo:  
    - za stavke povezane s otvorenim stavkama, napomena tipa FT. + "broj dokumenta" + del + "datum dokumenta"  
    - za stavke koje nisu povezane s otvorenim stavkama, koristit će se zadani tekst iz DocFinance datoteke.  
:::