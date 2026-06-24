---
title: Uvod
sidebar_position: 1
---

Modul omogućava planiranje i evidenciju internih edukacija i programa osposobljavanja zaposlenih sa ciljem povećanja nivoa znanja i kompetencija potrebnih za održavanje i kontinuirano unapređenje sistema upravljanja.

## Dokumenti koji se koriste

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/erp-home/registers/employee/training-courses/basic-course-management">Osnovni kursevi</Link>
        <p>Osnovni kursevi predstavljaju predloške edukacija koje se sprovode jednokratno ili periodično, na primer prilikom zapošljavanja novih zaposlenih, promene radnog mesta ili obnove edukacija propisanih zakonima i internim pravilnicima.</p>
        <p>Uz Vrstu osnovnog kursa i Naziv evidentiraju se: važenje, planirani broj sati i troškovi, sadržaj edukacije, sektor i oblast interesovanja, kategorija, predavač i njegovi zahtevi, kao i ostali povezani podaci. U sekciji Obnova (ako je predviđena) definišu se podaci o obnovi kursa, sadržaj, planirani sati i troškovi, učestalost i dodatni podaci. Takođe je moguće definisati radna mesta za koja je pohađanje kursa obavezno.</p>
        <p>Pomoću funkcija Planiraj sledeći kurs i Planiraj sledeću obnovu moguće je automatski generisati novi kurs ili obnovu koristeći podatke definisane u osnovnom kursu.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/erp-home/registers/employee/training-courses/training-courses-intro">Kursevi osposobljavanja (obuke)</Link>
        <p>Kursevi osposobljavanja sadrže podatke o stvarno sprovedenim programima informisanja, edukacije i stručnog osposobljavanja zaposlenih.</p>
        <p>Evidentiraju se podaci kao što su: vrsta kursa, godina, broj i datum, naziv kursa, povezanost sa osnovnim kursom, informacija da li se radi o planiranom kursu ili obnovi, podaci o potvrdi održavanja, sadržaj, koordinator i odgovorno lice, predavač i eventualni kopredavač, sektor i oblast interesovanja, kategorija, vrsta aktivnosti (informisanje, edukacija ili osposobljavanje), lokacija održavanja, planirani i ostvareni sati, planirani i ostvareni troškovi, kao i ostali povezani podaci.</p>
        <p>U dodatnim sekcijama moguće je evidentirati termine održavanja kursa, planirane i ostvarene sate teorijske i praktične nastave, obrađene teme, uključena radna mesta, zaposlene koji učestvuju u edukaciji, ostvarene sate po zaposlenom, kao i rezultate provere i ocene efikasnosti edukacije.</p>
    </div>
</div>

## Za početak korišćenja

**Osnovni kursevi:**

- definisati [*Vrstu osnovnog kursa*](/docs/configurations/tables/employee/training-courses/basic-course-type)
- kreirati novi [*Osnovni kurs*](/docs/erp-home/registers/employee/training-courses/basic-course-management)

**Kursevi osposobljavanja:**

- definisati [*Vrstu kursa osposobljavanja*](/docs/configurations/tables/employee/training-courses/course-type)
- radi lakšeg upravljanja kursevima konfigurisati [*Parametre upravljanja zaposlenima*](/docs/configurations/parameters/employees/staff-management) u sekciji *Kursevi osposobljavanja*
- kreirati novi [*Kurs osposobljavanja*](/docs/erp-home/registers/employee/training-courses/training-courses-intro)

## Povezanost sa drugim modulima

Modul **Kursevi osposobljavanja** nije povezan ni sa jednim drugim modulom.