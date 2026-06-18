---
title: Uvod
sidebar_position: 1
---

Modul **Izveštavanje** omogućava korisniku upravljanje reklasifikacijama bilansa, kako na podacima iz glavne knjige, tako i na podacima iz analitičkog računovodstva po centrima troškova. Pored izveštaja, dostupan je i napredan postupak poređenja kreiranih reklasifikacija, kako na podacima iz glavne knjige, tako i na podacima iz upravljačkog računovodstva. U drugom slučaju moguće je slobodno porediti različita područja analize i različite vremenske periode (mesece ili nedelje, u zavisnosti od početne konfiguracije).

Modul se nalazi u okviru oblasti *Kontroling* i kao izvor podataka koristi informacije obrađene kroz *Privremena zatvaranja* ili *Upravljačka knjiženja*. Ova druga mogućnost dostupna je samo društvima koja su aktivirala i konfigurisala *Kontroling*.

## Početna konfiguracija modula

- [***Tipovi reklasifikacije***](/docs/configurations/tables/controlling/reporting/reclassification-types): definišu vrste reklasifikacija koje će se koristiti.

- [***Šeme reklasifikacije***](/docs/controlling/reclassifications/create-reclassification-model): potrebno je proveriti potpunost modela unapred učitanih kroz opciju *Fast start* u odnosu na eventualne prilagođene šifarnike kontnog plana.

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/reclassifications/create-reclassification-model">Šeme reklasifikacije</Link>
        <p>- za definisanje logičke strukture prikaza i vrednovanja izveštaja</p>
###     <Link to="/docs/controlling/reclassifications/reclassifications-management" className="bold-link">Reklasifikacije</Link>
        <p>- za primenu podataka privremenih zatvaranja na model reklasifikacije</p>
###     <Link to="/docs/controlling/reclassifications/comparations" className="bold-link">Poređenje reklasifikacija</Link>
        <p>- za poređenje podataka reklasifikovanih na osnovu istog modela reklasifikacije između različitih godina i perioda</p>
    </div>
</div>