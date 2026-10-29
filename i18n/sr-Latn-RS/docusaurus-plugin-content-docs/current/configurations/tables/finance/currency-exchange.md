---
title: Devizni kursevi
sidebar_position: 4
---

Tabela deviznih kurseva, zajednička za sva preduzeća u istoj bazi podataka, omogućava podešavanje zvaničnih kurseva za svaki dan, koji će se koristiti u različitim procedurama sistema. Posebno se ističe da program iz ove tabele preuzima poslednji važeći kurs unazad od datuma dokumenta/knjiženja koji se unosi.

:::note Napomena
Tabela se može popuniti ručnim unosom kursa za određenu valutu i datum ili se može izvršiti automatsko ažuriranje preuzimanjem kurseva pomoću dugmeta **_Preuzmi kursne liste_** na traci menija.

Klikom na dugme pojavljuje se **iskačući prozor** u kojem se unose **datumi Od / Do** za pretraživanje kurseva. Takođe se može aktivirati opcija **Automatski unos**, koja direktno popunjava tabelu (preporučuje se da ostane aktivirana).

**PAŽNJA:** Preuzimaju se kursevi samo za valute za koje je označeno dugme Preuzmi kurseve u tabeli [**Valute**](/docs/configurations/tables/general-settings/currencies).
:::

##### Specifična polja

**Kurs**: obično se unosi valuta preduzeća (npr. evro).

**Opis**: opis valute.

**Prema**: referentna valuta.

**Opis**: opis referentne valute.

**Datum valute**: datum na koji se kurs odnosi.

**Direktna vrednost**: reč je o kursu izraženom „direktnom kotacijom” (izvesno za neizvesno). U slučaju evra, to je zvanični kurs na određeni dan.

**Vrednost kursa**: reč je o kursu izraženom „indirektnom kotacijom” (neizvesno za izvesno), koji program stvarno koristi pri izračunavanju protivvrednosti. U slučaju evra, to je recipročna vrednost zvaničnog kursa na određeni dan.