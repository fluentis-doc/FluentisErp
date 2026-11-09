---
title: Uvod
sidebar_position: 1
---

Skladišna knjiženja predstavljaju ključni element operativnog upravljanja robom jer omogućavaju precizno praćenje kretanja i stanja zaliha.

Ovaj proces je ključan kako bi se obezbedilo da količine artikala na ulazu i izlazu uvek budu ažurirane i usklađene sa stvarnim stanjem u skladištu.

Istovremeno, upravljanje lokacijama pruža dodatni nivo preciznosti jer omogućava razvrstavanje artikala u različite oblasti unutar skladišta, kao što su police i odeljci. Upotrebom prilagodljive strukture stabla operateri mogu da dodele određene tipove lokacija i definišu ključne parametre kao što su širina, visina i kapacitet, čime se povećava efikasnost premeštanja i preuzimanja artikala.

Ispravna integracija skladišnih knjiženja sa podacima o lokacijama omogućava optimizaciju toka robe i olakšava efikasno i prilagodljivo upravljanje logistikom.

## Upravljani dokumenti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
### <Link to="/docs/logistics/warehouse/stock-records/record">Skladište</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Knjiženja</Link></p>
        <p>Omogućavaju efikasno upravljanje logističkim operacijama i precizno evidentiranje kretanja unutar sistema. Knjiženja se mogu automatski generisati različitim postupcima, kao što su ulaz na osnovu dokumenata (na primer, otpremnica i nabavnih faktura) ili izlaz (putem otpremnica i prodajnih faktura). Ovaj postupak ne samo da pojednostavljuje unos kretanja već obezbeđuje i sinhronizaciju podataka između različitih operativnih dokumenata.</p>
        </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Lokacije</Link></p>
        <p>Korisnicima omogućavaju strukturiranje skladišnih lokacija unutar skladišta prema hijerarhijskoj strukturi koja se može jednostavno prilagoditi poslovnim potrebama. Svaka lokacija može se definisati na osnovu različitih parametara, uključujući tip lokacije (na primer, oblast, polica, regal, odeljak) i njene fizičke karakteristike, kao što su širina, visina i nosivost.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Izveštaji upravljanja</Link></p>
        <p>Ovi ispisi operaterima omogućavaju detaljne provere i donošenje informisanih odluka o nabavci, upravljanju zalihama i analizi kretanja artikala. Zahvaljujući prilagodljivim izveštajima i različitim filterima, korisnici mogu dobiti detaljne informacije o sledećem:</p>
        <p><Link to="/docs/logistics/warehouse/management-reports/not-handled-items-report" className="bold-link">Artikli bez kretanja</Link> - <Link to="/docs/logistics/warehouse/management-reports/print-labels" className="bold-link">Štampanje etiketa</Link></p>
        <p><Link to="/docs/logistics/warehouse/management-reports/safety-stock-execution" className="bold-link">Sigurnosna zaliha</Link> - <Link to="/docs/logistics/warehouse/management-reports/rotation-index" className="bold-link">Indeks obrta</Link></p>
    </div>
    <div className="card">
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Računovodstveni izveštaji</Link></p>
        <p>Ovi ispisi pružaju detaljne izveštaje o ulaznim i izlaznim kretanjima i omogućavaju precizno evidentiranje transakcija. Svaki šablon ispisa može se prilagoditi kako bi se dobile određene informacije, čime se obezbeđuju usklađenost i transparentnost u upravljanju imovinom. Korisnici mogu jednostavno pratiti kretanja i upravljati računovodstvenim knjiženjima putem alata kao što su:</p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-selection" className="bold-link">Izbor kretanja</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-inventory-journal" className="bold-link">Skladišni dnevnik</Link></p>
        <p><Link to="/docs/logistics/warehouse/accountancy-reports/print-warehouse-day-book" className="bold-link">Dnevnik skladišta</Link> - <Link to="/docs/logistics/warehouse/accountancy-reports/print-movement-cards" className="bold-link">Kartice kretanja</Link></p>
    </div>
</div>

## Prvi koraci za korišćenje

**Skladišna knjiženja:**
- kreirati artikle u [**Šifarniku artikala**](/docs/erp-home/registers/items/create-new-item)
- definisati [**Skladišta**](/docs/configurations/tables/logistics/warehouses)
- ispravno definisati [**Skladišne šablone**](/docs/configurations/tables/logistics/warehouse-templates) koji će se koristiti
- definisati [**Početne parametre skladišta**](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)

**Lokacija:**
- definisati [**Tipove lokacija**](/docs/configurations/tables/logistics/locations-types)
- definisati [**Statuse lokacija**](/docs/configurations/tables/logistics/location-status)
- definisati stablo [Lokacija](/docs/logistics/warehouse/location/locations)

## Povezanost sa drugim modulima

[Skladišna knjiženja](/docs/logistics/warehouse/stock-records/record) povezana su sa svim dokumentima koji generišu ulazna i/ili izlazna kretanja.