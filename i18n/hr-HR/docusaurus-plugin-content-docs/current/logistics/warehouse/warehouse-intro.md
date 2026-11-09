---
title: Uvod
sidebar_position: 1
---

Skladišna knjiženja predstavljaju ključan element operativnog upravljanja robom jer omogućuju precizno praćenje kretanja i stanja zaliha.

Ovaj je proces ključan kako bi se osiguralo da su količine artikala na ulazu i izlazu uvijek ažurirane i usklađene sa stvarnim stanjem u skladištu.

Istodobno, upravljanje lokacijama pruža dodatnu razinu preciznosti jer omogućuje razvrstavanje artikala u različita područja unutar skladišta, kao što su police i odjeljci. Upotrebom prilagodljive strukture stabla operateri mogu dodijeliti određene vrste lokacija te definirati ključne parametre kao što su širina, visina i kapacitet, čime se povećava učinkovitost premještanja i preuzimanja artikala.

Ispravna integracija skladišnih knjiženja s podacima o lokacijama omogućuje optimizaciju tijeka robe i olakšava učinkovito i prilagodljivo upravljanje logistikom.

## Upravljani dokumenti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/logistics/warehouse/stock-records/record">Skladište</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Knjiženja</Link></p>
        <p>Omogućuju učinkovito upravljanje logističkim operacijama i precizno evidentiranje kretanja unutar sustava. Knjiženja se mogu automatski generirati različitim postupcima, kao što su ulaz na temelju dokumenata (primjerice, otpremnica i nabavnih računa) ili izlaz (putem otpremnica i prodajnih računa). Ovaj postupak ne samo da pojednostavljuje unos kretanja nego osigurava i sinkronizaciju podataka između različitih operativnih dokumenata.</p>
        </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Lokacije</Link></p>
        <p>Korisnicima omogućuju strukturiranje skladišnih lokacija unutar skladišta prema hijerarhijskoj strukturi koja se može jednostavno prilagoditi poslovnim potrebama. Svaka se lokacija može definirati na temelju različitih parametara, uključujući vrstu lokacije (primjerice, područje, polica, regal, odjeljak) i njezine fizičke karakteristike, kao što su širina, visina i nosivost.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Izvještaji upravljanja</Link></p>
        <p>Ovi ispisi operaterima omogućuju detaljne provjere i donošenje informiranih odluka o nabavi, upravljanju zalihama i analizi kretanja artikala. Zahvaljujući prilagodljivim izvještajima i različitim filtrima, korisnici mogu dobiti detaljne informacije o sljedećem:</p>
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Artikli bez kretanja</Link> - <Link to="/docs/logistics/warehouse/management-reports/print-labels" className="bold-link">Ispis etiketa</Link></p>
        <p><Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution" className="bold-link">Sigurnosna zaliha</Link> - <Link to="/docs/logistics/warehouse/management-reports/rotation-index" className="bold-link">Indeks obrtaja</Link></p>
    </div>
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Izvještaji računovodstva</Link></p>
        <p>Ovi ispisi pružaju detaljne izvještaje o ulaznim i izlaznim kretanjima te omogućuju precizno evidentiranje transakcija. Svaki predložak ispisa može se prilagoditi kako bi se dobile određene informacije, čime se osiguravaju usklađenost i transparentnost u upravljanju imovinom. Korisnici mogu jednostavno pratiti kretanja i upravljati računovodstvenim knjiženjima putem alata kao što su:</p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Odabir kretanja</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-inventory-journal" className="bold-link">Skladišni dnevnik</Link></p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-warehouse-day-book" className="bold-link">Dnevnik skladišta</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-cards" className="bold-link">Kartice kretanja</Link></p>
    </div>
</div>

## Prvi koraci za korištenje

**Skladišnih knjiženja:**
- kreirati artikle u [**Šifarniku artikala**](/docs/erp-home/registers/items/create-new-item)
- definirati [**Skladišta**](/docs/configurations/tables/logistics/warehouses)
- ispravno definirati [**Skladišne predloške**](/docs/configurations/tables/logistics/warehouse-templates) koji će se koristiti
- definirati [**Početne parametre skladišta**](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)

**Lokacija:**
- definirati [**Vrste lokacija**](/docs/configurations/tables/logistics/locations-types)
- definirati [**Status lokacija**](/docs/configurations/tables/logistics/location-status)
- definirati stablo [Lokacija](/docs/logistics/warehouse/location/locations)

## Povezanost s drugim modulima

[Skladišna knjiženja](/docs/logistics/warehouse/stock-records/record) povezana su sa svim dokumentima koji generiraju ulazna i/ili izlazna kretanja.