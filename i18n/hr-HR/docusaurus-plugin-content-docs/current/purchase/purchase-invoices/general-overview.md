---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u izborniku **Nabava > Ulazni računi**. Ulazni računi su porezni dokumenti koje izdaju dobavljači za isporučenu robu ili pružene usluge te predstavljaju osnovu za računovodstveno knjiženje i plaćanje dobavljačima.

## Konfiguracija modula

Prije korištenja modula potrebno je definirati sljedeće tablice i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definiranje numeracija koje će se koristiti za ulazne račune.
- [**Promet nabave**](/docs/configurations/tables/purchase/purchase-turnover/): definiranje vrsta prometa nabave koje će se koristiti u dokumentima.
- [**Vrste ulaznih računa**](/docs/configurations/tables/purchase/purchase-invoices-type): stvaranje i definiranje vrsta ulaznih računa koje će se koristiti.
- [**Parametri ulaznih računa**](/docs/configurations/parameters/purchase/purchase-invoices-parameters): specifične postavke za upravljanje ulaznim računima.
- [**Parametri grupiranja ulaznih računa**](/docs/configurations/parameters/purchase/invoice-grouping/): definiranje uvjeta za grupiranje otpremnica u račun.

## **Povezani moduli**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Narudžbe dobavljača</Link>
        <p>Ulazni račun može se kreirati obradom jedne ili više narudžbi dobavljača iz samog računa pomoću gumba <strong>Izuzimanje iz narudžbe</strong>.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">Primka</Link>
        <p>Ulazni račun može se kreirati obradom jedne ili više otpremnica, bilo iz samog računa pomoću gumba <strong>Izvršenje primke</strong>, bilo putem postupka <Link to="/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization">Valorizacija primke</Link>.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/subcontractor/subcontractor-returns/insert-returns/search-returns">Podizvođač</Link>
        <p>Postupak <em>Vrednovanje povratnih otpremnica</em> omogućuje stvaranje ulaznog računa obradom jednog ili više povrata od podizvođača.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Prijem robe</Link>
        <p>Postupak <Link to="/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt">Kreiranje ulaznih računa iz prijema robe</Link> omogućuje stvaranje ulaznog računa na temelju prethodno evidentiranog prijema robe.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistika</Link>
        <p>Ulazni računi tipa <em>odmah</em> mogu se proknjižiti u skladište kako bi se evidentirao primitak robe i ažuriralo stanje zaliha.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting">Knjiženje</Link>
        <p>Automatsko knjiženje ulaznih računa ažurira računovodstvene i financijske evidencije te osigurava usklađenost s poslovnim knjigama.</p>
    </div>
</div>