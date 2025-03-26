---
title: Upravljanje F24
sidebar_position: 2
---

## Automatsko popunjavanje

Kreiranje modela F24 podrazumijeva učitavanje novog modela unutar kojeg su podaci iz zaglavlja popunjeni na temelju referenci unesenih unutar tablice [**Tvrtka**.](/docs/configurations/tables/general-settings/company). 
 

Razdoblje PDV-a i razdoblje zadržavanja (koja se sastoje od dva polja mjesec / godina) predloženi su kao trenutni mjesec: mogu se promijeniti kako bi se pozvao referentni mjesec (kako za podatke o PDV-u koji se treba platiti, tako i za akontacije poreza koje treba platiti).

Posebice, što se tiče PDV obračuna, tražit će se razdoblje pohranjeno u obrascu **[Uplate PDV-a](/docs/finance-area/declarations/declarations/vat-payment)** prisutnom u glavnoj knjizi (gdje se automatski pohranjuju vrijednosti obračuna prilikom njegovog završnog ispisa: omogućeno je ručno unositi vrijednosti).

Moguće je odabrati obradu samo podataka o PDV-u ili samo podataka o zadržavanju brisanjem podataka iz polja (period i godina referencije) podataka koji nisu od interesa.

Jednom kada se pohrane podaci o zaglavlju, aktivirat će se tipka **Predloži vrijednosti** koji će popuniti razne retke prve **Kartice blagajne**.

Jednom kada su **ručno** ispunjene sve **ostale sekcije** deklaracije, ovisno o potrebama, postavljen potpisnik/signatar i putanja za kreiranje datoteke, bit će moguće izvršiti kreiranje datoteke s odgovarajućom tipkom koja će stvoriti datoteku s imenom strukturiranim kao 'PDV broj tvrtke' + '_' + 'Broj deklaracije' + '_' + 'Datum deklaracije' s ekstenzijom F24. U slučaju nedostajućih obaveznih podataka bit će prikazana poruka o grešci koja objašnjava problem, a datoteka neće biti kreirana.

Moguće je otkazati stvaranje datoteke putem odgovarajuće tipke za upravljanje.

Putem tipke **Kreiraj datoteku** moguće je kreirati datoteku koja će biti poslana Poreznoj upravi putem odgovarajućih kanala (npr. Entratel).
Datoteka se automatski arhivira u Dokumentima i može se pregledati i preuzeti lokalno putem gumba i padajuće liste **Dokumenti**, koja se nalazi na traci s alatima.

:::note[Napomena]
Za kreiranje datoteke potrebna je prisutnost (može biti vraćena poruka upozorenja) dva Bizlink konektora nazvana F24 (Upravlja usluga s autentifikacijom) i F24Errors, tipa Folder Output i s povezivanjem na partnera AgeEnt, Tok AgeEnt, Operacija toka i dokument toka F24 (F24Errors za drugi).
:::

## Knjiženje

U zaglavlju modela moguće je ispuniti polja za eventualne **Bankovni troškovi** i za račun **Banke za plaćanje**.
U ovom trenutku je moguće pritisnuti gumb **Knjiženje** za automatsko generiranje knjiženja koje bilježi izlaz iz banke i povrat računa (automatski napunjenih) gdje je učitana dugovanja za zadržane poreze za uplatu i za PDV za uplatu (primjer računa koji se obično nazivaju Državni proračun c/porezi na zadržane iznose i Državni proračun C/PDV).

:::tip[Napomena]
Računi koji se automatski koriste za učitavanje dugovanja za PDV i dugovanja za akontacije poreza na dohodak postavljeni su, respektivno, u [**parametrima računovodstva**](/docs/configurations/parameters/finance/accounting-parameters#conti) što se tiče PDV-a, te u tablici [**Tipovi odbitka poreza**](/docs/configurations/tables/finance/withholding-tax-types) za akontacije poreza na dohodak, zadani račun koji je mogao biti zamijenjen tijekom faze [**knjigovodstvene obrade isplate naknada**](/docs/finance-area/professional-men/accounting/payments-accounting/parameters)
:::



| Funkcija | Značenje |
| --- | --- |
| Spremi | Spremi model u upotrebi. |
| Predloži vrijednosti | Izvršava preuzimanje podataka iz uplate PDV-a i od poreza na isplaćene naknade. |
| Novi detalj | Postavlja kursor u mreži za unos detalja. |
| Obriši detalj | Briše odabrani redak detalja. |






