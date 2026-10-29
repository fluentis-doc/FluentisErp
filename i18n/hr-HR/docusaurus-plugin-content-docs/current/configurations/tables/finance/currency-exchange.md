---
title: Devizni tečajevi
sidebar_position: 4
---

Tablica Tečajevi valuta, zajednička za sve tvrtke iste baze podataka, omogućuje postavljanje službenih tečajeva za svaki dan koji će se koristiti u različitim procedurama u sustavu. Posebno se ističe da program preuzima iz ove tablice posljednji važeći tečaj unatrag od datuma dokumenta/knjiženja koji se unosi.

:::note Napomena
Tablica se može popuniti ručno unosom tečaja za određenu valutu i datum, ili se može izvršiti automatsko ažuriranje preuzimanjem tečajeva putem gumba ***Preuzmi tečajne liste*** u traci izbornika.

 Klikom na gumb pojavit će se **pop-up** u kojem se unose **datumi Od / Do** za pretraživanje tečajeva te se može aktivirati **Automatski umetak**, koje izravno popunjava tablicu (preporučuje se da ostane aktivirano).

**PAŽNJA:** preuzimaju se tečajevi samo za valute koje imaju označen gumb Preuzmi tečajeve u tablici [**Valuta**](/docs/configurations/tables/general-settings/currencies).
:::


##### Specifična polja

**Tečaj**: obično se unosi valuta tvrtke (npr. euro).

**Opis**: opis valute.

**Na**: referentna valuta.

**Opis**: opis referentne valute.

**Datum valute**: datum na koji se tečaj odnosi.

**Direktna vrijednost**: riječ je o tečaju „izravnom kotacijom” (izvjesno za neizvjesno). U slučaju eura, to je službeni tečaj na određeni dan.

**Vrijednost tečaja**: riječ je o tečaju „neizravnom kotacijom” (neizvjesno za izvjesno), koji program stvarno koristi pri izračunu protuvrijednosti. U slučaju eura, to je recipročna vrijednost službenog tečaja na određeni dan.
