---
title: Uvod
sidebar_position: 1
---

Modul omogućuje planiranje i evidenciju internih edukacija i programa osposobljavanja zaposlenika s ciljem povećanja razine znanja i kompetencija potrebnih za održavanje i kontinuirano unapređenje sustava upravljanja.

## Dokumenti koji se koriste

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/erp-home/registers/employee/training-courses/basic-course-management">Osnovni tečajevi</Link>
        <p>Osnovni tečajevi predstavljaju predloške edukacija koje se provode jednokratno ili periodično, primjerice prilikom zapošljavanja novih djelatnika, promjene radnog mjesta ili obnove edukacija propisanih zakonima i internim pravilnicima.</p>
        <p>Uz Vrstu osnovnog tečaja i Naziv evidentiraju se: valjanost, planirani broj sati i troškovi, sadržaj edukacije, sektor i područje interesa, kategorija, predavač i njegovi zahtjevi te ostali povezani podaci. U sekciji Obnova (ako je predviđena) definiraju se podaci o obnovi tečaja, sadržaj, planirani sati i troškovi, učestalost te dodatni podaci. Također je moguće definirati radna mjesta za koja je pohađanje tečaja obavezno.</p>
        <p>Pomoću funkcija Planiraj sljedeći tečaj i Planiraj sljedeću obnovu moguće je automatski generirati novi tečaj ili obnovu koristeći podatke definirane u osnovnom tečaju.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/erp-home/registers/employee/training-courses/training-courses-intro">Tečajevi osposobljavanja (obuke)</Link>
        <p>Tečajevi osposobljavanja sadrže podatke o stvarno provedenim programima informiranja, edukacije i stručnog osposobljavanja zaposlenika.</p>
        <p>Evidentiraju se podaci kao što su: vrsta tečaja, godina, broj i datum, naziv tečaja, poveznica na osnovni tečaj, informacija radi li se o planiranom tečaju ili obnovi, podaci o potvrdi održavanja, sadržaj, koordinator i odgovorna osoba, predavač i eventualni su-predavač, sektor i područje interesa, kategorija, vrsta aktivnosti (informiranje, edukacija ili osposobljavanje), lokacija održavanja, planirani i ostvareni sati, planirani i ostvareni troškovi te ostali povezani podaci.</p>
        <p>U dodatnim sekcijama moguće je evidentirati termine održavanja tečaja, planirane i ostvarene sate teorijske i praktične nastave, obrađene teme, uključena radna mjesta, zaposlenike koji sudjeluju u edukaciji, ostvarene sate po zaposleniku te rezultate provjere i ocjene učinkovitosti edukacije.</p>
    </div>
</div>

## Za početak korištenja

**Osnovni tečajevi:**

- definirati [*Vrstu osnovnog tečaja*](/docs/configurations/tables/employee/training-courses/basic-course-type)
- kreirati novi [*Osnovni tečaj*](/docs/erp-home/registers/employee/training-courses/basic-course-management)

**Tečajevi osposobljavanja:**

- definirati [*Vrstu tečaja osposobljavanja*](/docs/configurations/tables/employee/training-courses/course-type)
- radi lakšeg upravljanja tečajevima konfigurirati [*Parametre upravljanja zaposlenicima*](/docs/configurations/parameters/employees/staff-management) u sekciji *Tečajevi osposobljavanja*
- kreirati novi [*Tečaj osposobljavanja*](/docs/erp-home/registers/employee/training-courses/training-courses-intro)

## Povezanost s drugim modulima

Modul **Tečajevi osposobljavanja** nije povezan ni s jednim drugim modulom.