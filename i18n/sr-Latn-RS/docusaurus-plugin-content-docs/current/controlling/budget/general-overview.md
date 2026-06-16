---
title: Uvod
sidebar_position: 1
---

Modul Budžetiranje omogućava upravljanje budžetom po centrima troškova i integrisan je sa modulom kontrolinga u okviru **Fluentis ERP-a**, kako bi se vrednovalo određeno analitičko područje budžeta.

To područje može biti povezano sa specifičnim nosiocima troškova, a zatim se upoređuje sa stvarnim podacima kroz analize i poređenja u okviru reklasifikovanih izveštaja.

Modul je sastavni deo kontrolinga i omogućava učitavanje detaljnih budžetskih podataka putem Excel uvoza, koristeći unapred pripremljene planirane vrednosti.

## Početna konfiguracija modula

Za korišćenje modula potrebno je prethodno definisati:

- tabelu [**Tip područja**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas), pri čemu mora postojati poseban tip namenjen budžetskim područjima;
- tabelu [**Područje**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas), gde mora postojati najmanje jedno budžetsko područje povezano sa odgovarajućim tipom područja;
- strukturu [**Centara troškova**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) u okviru organizacije.

## Dokumenti i funkcionalnosti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/controlling/budget/budget-excel-import">Uvoz budžeta iz Excel datoteke putem Bizlink-a</Link>
<p>- koristi se za unos eksterno pripremljenih budžetskih podataka u kontroling</p>

### <Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Budžetska knjiženja</Link>
<p>- koristi se za ručne izmene i dopune budžetskih podataka</p>

### <Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Istorija poslovnih knjiženja</Link>
<p>- omogućava izradu budžeta na osnovu postojećih podataka o realizaciji, primenom <a href="/docs/configurations/tables/controlling/analytical-accounting/variation-percentages">procenata promene</a></p>

    </div>
</div>