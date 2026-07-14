---
title: Uvod
sidebar_position: 1
---

Modul **Utovarne jedinice (UJ)** omogućuje upravljanje utovarnim jedinicama tijekom cijelog njihovog životnog ciklusa – od kreiranja, preko skladišnih premještanja, do otpreme kupcu.

Utovarne jedinice mogu se kreirati ručno ili putem **WMS Mobile** aplikacije. Najčešće ih koriste poduzeća koja skladište robu na paletama ili prilikom otpreme formiraju jednu utovarnu jedinicu koja sadrži sve artikle namijenjene isporuci.

## Dokumenti u modulu

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/logistics/udc/loading-unit-intro">Utovarne jedinice</Link>

<p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Upravljanje UJ</Link></p>
<p>Omogućuje upravljanje cjelokupnim životnim ciklusom utovarnih jedinica – od njihovog kreiranja, preko skladišnih premještanja, do otpreme. Utovarne jedinice mogu se kreirati ručno ili putem WMS Mobile aplikacije, čime se sustav prilagođava različitim logističkim procesima.</p>

<p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Lista za preuzimanje UJ / Packing lista</Link></p>
<p>Omogućuje preuzimanje utovarnih jedinica kao cjeline, za razliku od standardnog pickinga koji se temelji na pojedinačnim artiklima. Posebno je korisna prilikom pripreme robe za otpremu kupcu jer omogućuje grupiranje artikala unutar unaprijed definiranih utovarnih jedinica.</p>

<p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista za prijenos UJ</Link></p>
<p>Omogućuje upravljanje premještanjem utovarnih jedinica unutar vlastitih skladišta. Za razliku od Liste za preuzimanje UJ, koja služi za otpremu robe kupcima, Lista za prijenos utovarnih jedinica namijenjena je optimizaciji internih skladišnih premještanja između različitih skladišta i skladišnih lokacija.</p>

    </div>
</div>

## Preduvjeti za korištenje

Za rad s modulom **Upravljanje UJ** potrebno je:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item) te definirati njihove parametre na kartici [Pakiranje](/docs/erp-home/registers/items/create-new-item)
- definirati [*Vrstu grupe UJ*](/docs/configurations/tables/logistics/loading-unit-group-type/)
- definirati [*Vrstu UJ*](/docs/configurations/tables/logistics/loading-unit-types/)
- pravilno konfigurirati [*Predloške skladišta*](/docs/configurations/tables/logistics/warehouse-templates)
- definirati [*Početne parametre skladišta*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)
- kreirati zaposlenika u tablici [Zaposlenici](/docs/project-management/registers/employee/new-employee/)

Za korištenje **Liste za preuzimanje UJ / Packing liste** i **Liste za prijenos UJ** dodatno je potrebno:

- definirati [*Vrstu pickinga*](/docs/configurations/tables/logistics/picking-type/)

## Povezanost s drugim modulima

Modul je usko povezan sa:

- [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item)
- [*Knjiženjima skladišta*](/docs/logistics/warehouse/stock-records/record)
- svim dokumentima koji generiraju skladišna knjiženja ulaza i izlaza robe uz korištenje utovarnih jedinica.