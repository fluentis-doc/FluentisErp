---
title: Evidentiranje prijema robe na skladište
sidebar_position: 1
---

Obrazac se otvara putem putanje **Podizvođač > Povrati > Procedure > Evidentiranje prijema robe na skladište** i omogućava knjiženje povrata na skladište koji su već provereni, a još nisu evidentirani.

## Filter

Na ovoj kartici korisnik može pretraživati i prenositi povrate na skladište prema dostupnim kriterijumima filtriranja.

### Posebne funkcije

> **Pretraži**: omogućava primenu filtera pretrage na kompletnu bazu povrata podizvođača koji su uneseni, provereni i još nisu knjiženi.

> **Knjiženje**: omogućava evidentiranje odabranih povrata na skladište prema definisanim algoritmima skladišnog knjiženja.

### Specifična polja

- **Broj dokumenta**: prikazuje broj dokumenta povrata.

- **Datum dokumenta**: prikazuje datum povrata.

- **Datum knjiženja zaliha**: nalazi se u donjem delu obrasca. Podrazumevano je postavljen na tekući datum, ali ga korisnik može promeniti.

Nakon odabira povrata podizvođača koje je potrebno knjižiti, potrebno je kliknuti dugme **Knjiženje** kako bi se izvršile skladišne operacije.

Tokom ove procedure aplikacija istovremeno:

- evidentira na skladište proizvode proizvedene kod podizvođača,
- razdužuje materijale koji su korišćeni sa skladišta podizvođača,
- evidentira eventualne vraćene materijale na odgovarajuće skladište za povrate.

## Sažeci

Na ovoj kartici moguće je poništiti operaciju knjiženja povrata i vratiti stanje sistema na ono koje je postojalo pre izvršene operacije.

Podaci prikazani u donjim tabelama **Povrati** i **Knjiženje** odnose se na trenutno odabranu operaciju knjiženja iz gornje tabele nakon primene filtera.

### Posebne funkcije

> **Pretraži**: koristi se za pretragu već izvršenih knjiženja povrata. Rezultati se prikazuju u tabeli **Knjiženje skladišta povratom**.

> **Vrati**: pokreće proceduru za potpuno poništavanje odabrane operacije iz tabele **Knjiženje skladišta povratom**. Ako je jednom operacijom knjiženo više povrata, svi će biti vraćeni u status **nije knjiženo**.

> **Otkaži prijem na skladište**: pokreće proceduru za poništavanje knjiženja samo odabranih povrata prikazanih u donjoj tabeli na kartici **Povrati**.