---
title: Uvod
sidebar_position: 1
---

Od verzije Fluentis ERP 2025 moguće su dve različite metode upravljanja budžetom.

1. Budžet po mestima troškova, koji se integriše sa kontrolingom radi vrednovanja određene oblasti analize budžeta i može se vrednovati pomoću specifičnih pokretača troškova (nosilaca troškova). Nakon toga se poredi sa stvarnim podacima u okviru funkcionalnosti Poređenje modela reklasifikacije.
Modul omogućava učitavanje detaljnih podataka uvozom iz Excela, odnosno uvozom planiranih budžetskih podataka.

2. Upravljanje budžetom i bez potpune primene modula kontrolinga. Obrada je moguća prema analitičkim kontima glavne knjige, mestima troškova, profitnim centrima i modelu reklasifikacije.

## Početna konfiguracija modula

Za korišćenje modula potrebno je prethodno definisati:

- tabelu [**Tip područja**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas), pri čemu mora postojati poseban tip namenjen budžetskim područjima;
- tabelu [**Područje**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas), gde mora postojati najmanje jedno budžetsko područje povezano sa odgovarajućim tipom područja;
- strukturu [**Centara troškova**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) u okviru organizacije.
- Za korisnike koji ne koriste kompletan modul kontrolinga (upravljanje budžetom bez korišćenja vanbilansnih knjiženja) moguće je konfigurisati tabelu **Vrste budžeta** (jednostavna tabela za definisanje kategorija i dodeljivanje numeracije) i tabelu **Vrste perioda**(/docs/configurations/tables/controlling/forecast/period-types).

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