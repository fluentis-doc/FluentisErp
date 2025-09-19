---
title: Devizni tečajevi
sidebar_position: 4
---

Tablica Tečajevi valuta, zajednička za sve tvrtke iste baze podataka, omogućuje postavljanje službenih tečajeva za svaki dan koji će se koristiti u različitim procedurama u sustavu. Posebno se ističe da program preuzima iz ove tablice posljednji važeći tečaj unatrag od datuma dokumenta/knjiženja koji se unosi.

:::note Napomena
Tablica se može popuniti ručno unosom tečaja za određenu valutu i datum, ili se može izvršiti automatsko ažuriranje preuzimanjem tečajeva putem gumba ***Preuzmi tečajeve*** u traci izbornika.

 Klikom na gumb pojavit će se **popup** u kojem se unose **datumi Od / Do** za pretraživanje tečajeva te se može aktivirati **označavanje Automatski unos**, koje izravno popunjava tablicu (preporučuje se da ostane aktivirano).

**PAŽNJA:** preuzimaju se tečajevi samo za valute koje imaju označen gumb Preuzmi tečajeve u tablici [**Valuta**](/docs/configurations/tables/general-settings/currencies).
:::


##### Specifična polja

**Tečaj**: obično se unosi valuta tvrtke (npr. euro).

**Opis**: opis valute.

**U**: referentna valuta.

**Opis**: opis referentne valute.

**Datum tečaja**: datum na koji se tečaj odnosi.

**Vrijednost tečaja**: to je tečaj 'neizvjesno za sigurno', koji program koristi za izračun protuvrijednosti. Za euro, to je vrijednost obrnuta od službenog tečaja za taj dan.

**Vrijednost izravno**: to je tečaj 'sigurno za neizvjesno'. Za euro, to je vrijednost službenog tečaja za taj dan.