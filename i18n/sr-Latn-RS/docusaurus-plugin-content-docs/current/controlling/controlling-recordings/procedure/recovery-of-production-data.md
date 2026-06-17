---
title: Dohvat podataka iz proizvodnje
sidebar_position: 1
---

Funkcija preuzimanja podataka iz proizvodnje omogućava učitavanje podataka radi dodele fizičkih kretanja (materijala i vremena) proizvodnim nalozima, kao i za vrednovanje troškova obrade.

Forma je podeljena na tri odvojene procedure.

## DOHVAT SATI/TROŠKOVA PO PROJEKTU

Ova procedura omogućava preuzimanje podataka o radnim satima proizvodnog osoblja iz modula ***Upravljanje prijavljenim satima***, kao i podataka iz modula Projekti, uključujući izvršene ***aktivnosti*** i ***intervencije***. Ovi podaci se zatim upisuju u ***zapise fizičkih kretanja*** i ***projekte***.

Dostupne opcije:

- Izbor [***područja***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) za koje se preuzimaju podaci
- Definisanje ***datuma***
- Izbor ***godine*** kontrolinga
- Definisanje vremenskog opsega ***Od datuma*** – ***Do datuma***
- Definisanje ***vrste merenja*** (prva ili druga jedinica mere definisana na centru)
- Izbor ***vrste projekta*** za prenos podataka u fizička kretanja projekta:
  - ***Svi projekti iz prijavljenih sati*** – preuzimaju se svi projekti navedeni u prijavama sati
  - ***Sati na povezanim projektima*** – preuzimaju se glavni projekti povezani sa prijavljenim projektima
  - ***Vrednovanje sati iz intercompany okruženja*** – evidentiraju se sati koje su zaposleni uneli u drugom preduzeću unutar iste baze podataka

Sa desne strane moguće je dodati i ekonomsku valorizaciju vremenskih podataka:

- ***Valorizacija putnih troškova*** aktivnosti/intervencija
- ***Upravljanje radnim vremenom za projekte***, pri čemu FluentisERP uzima u obzir samo sate povezane sa projektom
- ***Vrednovanje troškova resursa koji nisu redovno evidentirani*** primenom troška resursa na broj sati u periodu, uz mogućnost korekcije preko faktora *efikasnosti*
- ***Vrednovanje intercompany troškova/prihoda resursa***, kojim se obračunavaju troškovi ili prihodi intercompany usluga evidentiranih kroz sate rada

## DOHVAT FIZIČKIH KRETANJA

Ova procedura preuzima podatke iz proizvodnih dokumenata i vrednuje vreme rada mašina, vreme rada zaposlenih i vreme pripreme mašina i opreme.

Podaci se upisuju u ***zapise fizičkih kretanja*** i ***projekte/proizvodne naloge***. Podaci se proveravaju u odnosu na centar troška dodeljen mašini ili radnoj grupi. Ako je za centar definisano praćenje vremena rada mašine, rada zaposlenih ili pripreme, koristiće se podaci iz tabele ***Jedinice mere centara u kontrolingu***.

Podaci koji se unose:

- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) analize
- ***Datum*** evidentiranja
- ***Godina***
- Raspon ***Od datuma*** – ***Do datuma***

Opcije za obračun vremena:

- ***Završna vremena*** – vrednovanje stvarnog vremena iz proizvodnih prijava
- ***Vreme ciklusa*** – vrednovanje teorijskog ciklusa proporcionalno proizvedenoj količini
- ***Vreme standardne faze*** – vrednovanje na osnovu standardne faze prijavljene proizvodnje

Ako su mašine ili oprema povezani sa osnovnim sredstvima, procedura takođe vrednuje ***zapise fizičkih kretanja*** (uključujući i one vezane za projekte) prema proizvedenim količinama u periodu, kako bi se omogućio obračun amortizacije prema količini.

## DOHVAT TROŠKOVA IZ NALOGA

Ova procedura omogućava ***preuzimanje troškova internih i eksternih obrada proizvodnje***.

Potrebno je uneti:

- [***Područje***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- ***Datum*** evidentiranja
- ***Godinu***
- ***Šablon*** knjiženja
- Raspon ***Od datuma*** – ***Do datuma***
- ***Konto za eksternu obradu*** koji se koristi za vrednovanje eksternih obrada evidentiranih preko konta rada

Za troškove preuzete sa konta rada koristi se:

- cena iz ulazne fakture, ako je obrada fakturisana
- cena iz prijema obrade, ako faktura još nije evidentirana

Troškovi se vrednuju u odnosu na centar troška povezan sa kontom troška.

Za interne obrade vrednovanje se može vršiti prema:

- ***Standardnom trošku***
- ***Poslednjem trošku***
- ***Prosečnom trošku***

u zavisnosti od količina iz proizvodnih dokumenata ili materijala korišćenih u intervencijama kod trećih lica.

Rezultati obrade upisuju se u ***Vrednosti iz proizvodnje*** unutar modula Upravljanje projektima. Procedura filtrira samo podatke povezane sa projektima i obrađuje ih ***isključivo*** za potrebe konačnog obračuna projekta.

Dodatna kartica ***Projekti*** omogućava izbor specifičnih dokumenata za vrednovanje troškova. Ukoliko se ne definišu filteri, vrednovaće se sva kretanja naloga unutar izabranog perioda.