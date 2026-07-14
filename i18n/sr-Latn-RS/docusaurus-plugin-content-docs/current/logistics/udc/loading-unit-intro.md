---
title: Uvod
sidebar_position: 1
---

Modul **Utovarne jedinice (UJ)** omogućava upravljanje utovarnim jedinicama tokom celog njihovog životnog ciklusa – od kreiranja, preko skladišnih premeštanja, do otpreme kupcu.

Utovarne jedinice mogu se kreirati ručno ili putem **WMS Mobile** aplikacije. Najčešće ih koriste preduzeća koja skladište robu na paletama ili prilikom otpreme formiraju jednu utovarnu jedinicu koja sadrži sve artikle namenjene isporuci.

## Dokumenti u modulu

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/logistics/udc/loading-unit-intro">Utovarne jedinice</Link>

<p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Upravljanje UJ</Link></p>
<p>Omogućava upravljanje celokupnim životnim ciklusom utovarnih jedinica – od njihovog kreiranja, preko skladišnih premeštanja, do otpreme. Utovarne jedinice mogu se kreirati ručno ili putem WMS Mobile aplikacije, čime se sistem prilagođava različitim logističkim procesima.</p>

<p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Lista za preuzimanje UJ / Packing lista</Link></p>
<p>Omogućava preuzimanje utovarnih jedinica kao celine, za razliku od standardnog pickinga koji se zasniva na pojedinačnim artiklima. Posebno je korisna prilikom pripreme robe za otpremu kupcu jer omogućava grupisanje artikala unutar unapred definisanih utovarnih jedinica.</p>

<p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista za prenos UJ</Link></p>
<p>Omogućava upravljanje premeštanjem utovarnih jedinica unutar sopstvenih skladišta. Za razliku od Liste za preuzimanje UJ, koja služi za otpremu robe kupcima, Lista za prenos UJ namenjena je optimizaciji internih skladišnih premeštanja između različitih skladišta i skladišnih lokacija.</p>

    </div>
</div>

## Preduslovi za korišćenje

Za rad sa modulom **Upravljanje UJ** potrebno je:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item) i definisati njihove parametre na kartici [Pakovanje](/docs/erp-home/registers/items/create-new-item)
- definisati [*Vrstu grupe UJ*](/docs/configurations/tables/logistics/loading-unit-group-type/)
- definisati [*Vrstu UJ*](/docs/configurations/tables/logistics/loading-unit-types/)
- pravilno konfigurisati [*Predloške skladišta*](/docs/configurations/tables/logistics/warehouse-templates)
- definisati [*Početne parametre skladišta*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)
- kreirati zaposlenog u tabeli [Zaposleni](/docs/project-management/registers/employee/new-employee/)

Za korišćenje **Liste za preuzimanje UJ / Packing liste** i **Liste za prenos UJ** dodatno je potrebno:

- definisati [*Vrstu pickinga*](/docs/configurations/tables/logistics/picking-type/)

## Povezanost sa drugim modulima

Modul je usko povezan sa:

- [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item)
- [*Skladišnim knjiženjima*](/docs/logistics/warehouse/stock-records/record)
- svim dokumentima koji generišu skladišna knjiženja ulaza i izlaza robe uz korišćenje utovarnih jedinica.