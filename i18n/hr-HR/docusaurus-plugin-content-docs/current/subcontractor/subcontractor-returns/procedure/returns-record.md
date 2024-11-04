---
title: Zapisi isporuke robe na skladište
sidebar_position: 1
---

Obrazac se otvara putem puta  **Podizvođač > Povrati > Procedure > Zapis isporuke robe na skladište** i omogućuje registraciju povrata u skladište koji su već provjereni i još nisu registrirani.

## Filter 

Na ovoj kartici korisnik ima mogućnost pretraživanja i prijenosa povrataka u skladište prema dostupnim kriterijima filtra. 
  
*Poseban gumb*:

> **Traži**: omogućuje primjenu filtara pretrage na cijelu bazu podataka Povrata Podizvođača koji su uneseni, provjereni i još nisu registrirani;     
> **Razduženje**: omogućuje izdavanje odabranih povrataka iz skladišta prema algoritmima izdavanja.

*Specifična polja*:

**Broj dokumenta**: u ovom stupcu prikazuje se broj povratka iz konta lavoro;  
**Zadani  datum dokumenta**: u ovom stupcu prikazuje se datum povratka iz konta lavoro;  
**Datum zapisa zalihe**: nalazi se u donjem dijelu forme i prema zadanim postavkama postavljen je na trenutni datum, ali se može promijeniti.

Nakon što se odaberu povrati podizvođača, koristite gumb *Razduženje* za izvršavanje skladišnih operacija: istovremeno s ovom operacijom, aplikacija vrši unos proizvedenih artikala izvan tvrtke na skladište, izdavanje materijala koji su korišteni iz skladišta izvan tvrtke te eventualni unos povrata na odgovarajuće skladište za povrate.

## Sažeci

Na ovoj kartici moguće je izvršiti 'rollback' operacije registracije povrata konta lavoro, vraćajući situaciju na stanje prije same operacije. 

Podaci u donjim tablicama, **Povrati** i **Registracije**, odgovaraju odabranim zapisima o registraciji iz tablice na vrhu (nakon primjene filtriranja podataka).

*Specifični gumbi*:
> **Traži**: koristi se za pretraživanje izvršenih izdavanja povrata. Rezultat ove procedure prikazuje se u tablici rezultata,  *Razduženje skladišta povratom*;    
> **Vrati**: pokreće proceduru za poništavanje cijele operacije registracije odabrane iz tablice  *Razduženje skladišta povratom*; dakle, ako je istom operacijom registrirano više povrata, svi ti povrati će biti vraćeni u stanje "nije izdano";    
> **Otkaži isporuke na skladište**: pokreće proceduru za poništavanje registracije samo odabranih povrata u donjoj tablici, u kartici *Povrati*.