---
title: Dohvat podataka iz proizvodnje
sidebar_position: 1 
---

Funkcija dohvata (preuzimanja) podataka iz proizvodnje omogućuje učitavanje podataka radi dodjele fizičkih
pokreta (odnosno kretanja materijala i vremena) na proizvodne naloge te radi vrednovanja troškova obrade.

Obrazac je podijeljen na tri zasebne procedure:

## DOHVAT SATA/TROŠKOVA PO PROJEKTU
Ova procedura omogućuje preuzimanje podataka o radnim satima proizvodnog osoblja (iz modula ***Upravljanje prijavljenim satima***)  te podataka iz modula Projekti, uključujući odrađene ***aktivnosti*** i ***Intervencije***, Ti se podaci zatim unose u ***zapise fizičkih pokreta*** i ***projekata***. Dostupne opcije:
- Odabir [***Područja***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) na kojem će se preuzimati podaci
- Definiranje ***Datuma***
- Odabir ***Godine*** kontrolinga
- Postavljanje vremenskog okvira ***Od datuma*** - ***Do datuma***
- Definiranje ***vrste mjerenja***, (prva ili druga jedinica mjere postavljena u centrima)
- Odabir ***vrste projekta***, za prijenos podataka u fizičke pokrete projekta:
    - ***Svi projekti u deklariranim satima***, preuzimaju se svi projekti referencirani u prijavama sati
    - ***Sati na povezane projekte***, preuzimaju se glavni projekti povezani s prijavljenima
    - ***Vrednovanje sati iz intercompanya***, čime se u aktivnom poduzeću registriraju sati koje su zaposlenici unijeli u drugom poduzeću unutar baze podataka.
S desne strane također možemo dodati i ekonomsku valorizaciju našim dosad kvantitativnim razmatranjima o vremenu: 
- ***Valorizacija putnih troškova*** aktivnosti/intervencija 
- ***Upravljanje radnim vremenom za projekte***, pri čemu se u FluentisERP razmatraju samo sati povezani s projektom
- ***Vrednovanje troškova resursa koji nisu redvono evidentirani*** primjenom troška resursa na broj sati u periodu, uz mogućnost korekcije putem faktora *Efikasnosti*
- ***Procijeni međukompanijske troškove/prihode resursa***: omogućujući vrednovanje troškova ili prihoda od intercompany usluga prijavljenih u satima

## DOHVAT FIZIČKIH POKRETA
Ova procedura preuzima podatke iz proizvodnih dokumenata te vrednuje vrijeme stroja, vrijeme rada i vrijeme postavljanja stroja i opreme. Podaci se upisuju u ***zapise fizičkih kretanja i projekata/proizvodnih*** naloga. Podaci se provjeravaju u odnosu na centar troškova pridružen stroju ili radnoj grupi. Ako je centar postavljen za mjerenje vremena stroja, rada ili postavljanja, koristit će se podaci iz tablice ***Jedinice mjere centara u kontrolingu***.
Podaci koji se unose:
- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) analize
- ***Datum*** evidentiranja
- ***Godina*** 
- Raspon ***Od datuma*** - ***Do datuma***
Opcije za obračun vremena:
- ***Završna vremena***– vrednovanje stvarnog vremena iz proizvodnih prijava
- ***Vrijeme ciklusa*** – vrednovanje teorijskog ciklusa, proporcionalno proizvedenoj količini
- ***Vrijeme standardne faze*** – vrednovanje na temelju standardne faze prijavljene proizvodnje. Ako su strojevi ili oprema povezani s osnovnim sredstvima, postupak također vrednuje ***zapise fizičkih pokreta*** (i one za projekt) s obzirom
na količine proizvedene u periodu, kako bi se omogućio obračun amortizacije na količinu.

## DOHVAT TROŠKOVA IZ NALOGA
Ova procedura omogućuje ***dohvat troškova internih i eksternih obrada proizvodnje***.
Podaci koji se unose:
- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- ***Datum*** evidentiranja
- ***Godina*** 
- ***Predložak*** knjiženja
- Raspon ***Od datuma*** - ***Do datuma***
- ***Konto za vanjsku obradu*** koji se koristi za vrednovanje eksternih obrada evidentiranih kroz konto rada. Za troškove preuzete iz konta rada, koristi se cijena iz ulazne fakture, ako je obrada fakturirana, cijena iz prijema obrade,
ako faktura još nije izdana. Troškovi se vrednuju u odnosu na centar troškova pridružen kontu troškova. Za interne obrade,
vrednovanje se može izvršiti prema ***Standardnom trošku, Posljednjem trošku ili Prosječnom trošku***, ovisno o količinama iz
proizvodnih dokumenata ili materijalima korištenima u intervencijama kod trećih strana.

Rezultati obrade unose se u ***Vrijednosti iz proizvodnje***, dio modula Upravljanje projektima. Ova procedura filtrira samo one podatke koji su povezani s projektima i obrađuje ih ***isključivo*** za potrebe konačnog obračuna projekta

Dodatna opcija (tab) ***Projekti*** omogućuje selekciju specifičnih dokumenata za vrednovanje troškova. Ako se ne postave filteri, vrednovat će se svi pokreti naloga unutar odabranog perioda.
