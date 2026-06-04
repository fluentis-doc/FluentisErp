---
title: Uvod
sidebar_position: 1
---

Kvalifikacija dobavljača odnosi se na proces odobravanja potencijalnih dobavljača i procjene postojećih putem kvantitativnih i kvalitativnih procjena. Primarni cilj je sastaviti rang listu dostupnih dobavljača u svrhu kvalitete proizvoda/usluga.   


## Upravljani dokumenti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/vendor-rating/initial-vendor-rating">Početne i periodične procjene</Link>
        <p>To je *subjektivni* kriterij evaluacije temeljen na unaprijed definiranim pitanjima (*Check-list*) za *Kategorije dobavljača* postavljenim novim potencijalnim ili starim dobavljačima.</p>
    </div>
    <div className="card">
###     <Link to="/docs/quality/vendor-rating/vendor-rating-on-nc">Periodične procjene nesukladnosti</Link>
        <p>To je *objektivni* kriterij ocjenjivanja temeljen na *nesukladnostima* pripisanim *dobavljačima* u određenom vremenskom razdoblju.</p>
    </div>
</div>


## Za početak korištenja   

   **Početne i periodične procjene**:
- treba definirati: [*Tip procjene*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type), konto [*Dobavljača*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) i [*Procjenu dobavljača*](/docs/configurations/tables/quality/vendor-rating/vendor-ratings)   
- kako bi se olakšalo upravljanje *Početnim i periodičnim procjenama* treba postaviti i [*Parametre kvalifikacija dobavljača*](/docs/configurations/parameters/quality/vendor-ratings) u odjelu *Početne procjene*   
- treba unijeti novu [*Početnu procjenu*](/docs/quality/vendor-rating/initial-vendor-rating)   

   **Periodične procjene nesukladnosti**:
- treba definirati [*Tip procjene*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type)   
- kako bi se olakšalo upravljanje *Periodičnim procjenama nesukladnosti* treba postaviti i [*Parametre kvalifikacija dobavljača*](/docs/configurations/parameters/quality/vendor-ratings) u odjelu *Periodične procjene nesukladnosti*   
- morate se unijeti barem jedna nova [*Nesukladnost dobavljača*](/docs/quality/claims-and-non-compliance/non-compliances/non-compliance) s datumom uključenim u razdoblje koje se želi procijeniti   
- mora se razraditi [*Periodična procjena nesukladnosti*](/docs/quality/vendor-rating/vendor-rating-on-nc)   


## Povezanost s drugim modulima
Modul *Dokumenti vanjskog podrijetla* nije povezan ni s jednim drugim modulom.   
