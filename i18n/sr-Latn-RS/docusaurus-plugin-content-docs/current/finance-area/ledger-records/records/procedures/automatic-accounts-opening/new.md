---
title: Novo
sidebar_position: 2
---

Postupak Automatsko otvaranje konta može se koristiti kao alternativa unosu kroz **[Generiranje zapisa glavne knjige](/docs/finance-area/ledger-records/records/ledger-record),**  **za evidentiranje početnog salda na početku razdoblja**.

**Od prvog zatvaranja bilance, sljedeća otvaranja konta mogu se upravljati izravno putem postupka zatvaranja.**

NAPOMENA:

Ovim postupkom bilježe se isključivo početna računovodstvena salda razdbolja, a ne otvaranje pripadajućih računovodstvenih stavki.  

 **Datum otvaranja**: to je **datum obrade** i nema nikakve veze s datumom zapisa koji će biti naveden u odgovarajućem polju na dnu prozora;

**Broj otvaranja**: automatski generiran redni broj;

**Opis**: omogućuje korisniku da detaljnjije opiše zapis, poput bilješke;

**Konto** i **Vrsta konta**: filteri za pretraživanje unutar liste kontnog plana;

**Datum unosa** i **Datum obračuna**: obavezna polja koja se dodjeljuju zapisu otvaranja;  

**Broj**: bit će dodijeljen nakon evidentiranja;

**Predložak otvaranja računa** i **Opis kretanja**: dodjeljuju se za dnevnik glavne knjige.

Nakon postavljanja ovih obaveznih podataka, moguće je spremiti postavke i aktivirati na cijelu listu podkonta. Sljedeća faza je evidentiranje po podkontima za saldo dugovanja ili potraživanja pri otvaranju računa, uz eventualni iznos otvaranja u valuti.  

![](/img/it-it/finance-area/ledger-records/records/automatic-accounts-opening/new/image01.png)

 

Primjer (nerealističan)

 

Samo kada ukupno dugovanje i ukupno potraživanje budu jednaki, bit će moguće evidentirati povrat salda u računovodstvu (u suprotnom će se, pritiskom na naredbu za knjiženje, prikazati poruka o pogrešci).

 

OPERATIVNI SAVJETI:

Korisnik može više puta otvoriti istu obradu otvaranja konta kako bi dovršio postupak (operacija može biti dugotrajna i odvijati se tijekom više dana) prije nego što nastavi, ili se može kreirati više različitih otvaranja računa, primjerice jedno za aktivu, drugo za pasivu, ili za klijente/dobavljače itd.  

U obrascu nije predviđen postupak povratka (rollback): jednostavno se može izbrisati otvaranje, a aplikacija će zatražiti potvrdu brisanja.

U slučaju izmjena u detaljima otvaranja računa NAKON knjiženja, moguće je ponovno pritisnuti naredbu Kreiraj zapis otvaranja (na alatnoj traci) kako bi se ažurirala prethodna računovodstvena stavka. Pojavit će se poruka upozorenja i potvrde o ažuriranju stavke.  



| Funkcija | Značenje |
| --- | --- |
| Spremi | Tipka za spremanje zaglavlja otvaranja konta koji se može aktivirati nakon unosa opisa i predloška knjiženja. |
| Traži | Tipka za pretraživanje liste konta koji se namjeravu unijeti u otvaranje, koristeći polja podkonta i vrste konta. |
| Kreiraj zapis otvaranja | Tipka za kreiranje zapisa otvaranja konta. |
| Otvori zapis otvaranja konta | Tipka koja otvara zapis otvaranja. |
| Izbriši detalj | Briše sadržaj polja koja se odnose na odabrani redak. PAŽNJA: redci koji se odnose na sadržaj polja vezanih uz konto ne mogu se izbrisati; ako ostanu prazni, neće biti uključeni u stavku otvaranja. |






