---
title: Uvod
sidebar_position: 1
---

Kvalifikacija dobavljača predstavlja proces odobravanja potencijalnih dobavljača i ocenjivanja postojećih dobavljača putem kvantitativnih i kvalitativnih procena.

Osnovni cilj je kreiranje rang liste dostupnih dobavljača na osnovu kvaliteta proizvoda i usluga koje pružaju.

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/vendor-rating/initial-vendor-rating">Početne i periodične procene</Link>
        <p>Predstavljaju subjektivni kriterijum evaluacije zasnovan na unapred definisanim pitanjima (Check-lista) za određene kategorije dobavljača, namenjen novim potencijalnim ili postojećim dobavljačima.</p>
    </div>

    <div className="card">
###     <Link to="/docs/quality/vendor-rating/vendor-rating-on-nc">Periodične procene na osnovu neusaglašenosti</Link>
        <p>Predstavljaju objektivni kriterijum ocenjivanja zasnovan na evidentiranim neusaglašenostima koje su pripisane dobavljačima u određenom vremenskom periodu.</p>
    </div>
</div>

## Početak korišćenja

### Početne i periodične procene

- potrebno je definisati [*Vrstu procene*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type), konto [*Dobavljača*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) i [*Ocenu dobavljača*](/docs/configurations/tables/quality/vendor-rating/vendor-ratings);
- radi lakšeg upravljanja potrebno je podesiti [*Parametre kvalifikacije dobavljača*](/docs/configurations/parameters/quality/vendor-ratings) u sekciji *Početne procene*;
- potrebno je kreirati novu [*Početnu procenu*](/docs/quality/vendor-rating/initial-vendor-rating).

### Periodične procene na osnovu neusaglašenosti

- potrebno je definisati [*Vrstu procene*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type);
- radi lakšeg upravljanja potrebno je podesiti [*Parametre kvalifikacije dobavljača*](/docs/configurations/parameters/quality/vendor-ratings) u sekciji *Periodične procene na osnovu neusaglašenosti*;
- potrebno je evidentirati najmanje jednu novu [*Neusaglašenost dobavljača*](/docs/quality/claims-and-non-compliance/non-compliances/non-compliance) sa datumom koji pripada periodu koji se ocenjuje;
- potrebno je izvršiti [*Periodičnu procenu na osnovu neusaglašenosti*](/docs/quality/vendor-rating/vendor-rating-on-nc).