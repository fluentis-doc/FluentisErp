---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u meniju **Nabavka > Ulazni računi**. Ulazni računi su poreski dokumenti koje izdaju dobavljači za isporučenu robu ili pružene usluge i predstavljaju osnov za računovodstveno knjiženje i plaćanje dobavljačima.

## Konfiguracija modula

Pre korišćenja modula potrebno je definisati sledeće tabele i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definisanje numeracija koje će se koristiti za ulazne račune.
- [**Promet nabavke**](/docs/configurations/tables/purchase/purchase-turnover/): definisanje tipova prometa nabavke koji će se koristiti u dokumentima.
- [**Tipovi ulaznih računa**](/docs/configurations/tables/purchase/purchase-invoices-type): kreiranje i definisanje tipova ulaznih računa koji će se koristiti.
- [**Parametri ulaznih računa**](/docs/configurations/parameters/purchase/purchase-invoices-parameters): specifična podešavanja za upravljanje ulaznim računima.
- [**Parametri grupisanja ulaznih računa**](/docs/configurations/parameters/purchase/invoice-grouping/): definisanje uslova za grupisanje otpremnica u račun.

## **Povezani moduli**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Narudžbine dobavljača</Link>
        <p>Ulazni račun može se kreirati obradom jedne ili više narudžbina dobavljača iz samog računa pomoću dugmeta <strong>Preuzimanje iz narudžbine</strong>.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-delivery-note/general-overview">Prijem robe</Link>
        <p>Ulazni račun može se kreirati obradom jednog ili više prijema robe, bilo iz samog računa pomoću dugmeta <strong>Izvršenje prijema robe</strong>, bilo putem procedure <Link to="/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization">Valorizacija prijema robe</Link>.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/subcontractor/subcontractor-returns/insert-returns/search-returns">Podizvođač</Link>
        <p>Procedura <em>Valorizacija povratnih otpremnica</em> omogućava kreiranje ulaznog računa obradom jednog ili više povrata od podizvođača.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Prijem robe</Link>
        <p>Procedura <Link to="/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt">Kreiranje ulaznih računa iz prijema robe</Link> omogućava kreiranje ulaznog računa na osnovu prethodno evidentiranog prijema robe.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistika</Link>
        <p>Ulazni računi tipa <em>Neposredni</em> mogu se knjižiti u skladište kako bi se evidentirao prijem robe i ažuriralo stanje zaliha.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/accounting/purchase-invoices-accounting">Knjiženje</Link>
        <p>Automatsko knjiženje ulaznih računa ažurira računovodstvene i finansijske evidencije i obezbeđuje usklađenost sa poslovnim knjigama.</p>
    </div>
</div>