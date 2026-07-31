---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u izborniku **Nabava > Narudžbe dobavljača** i predstavlja jednu od međufaza nabavnog procesa. Narudžbe dobavljača formalni su dokumenti koje izdaje odjel **Nabava** radi naručivanja robe ili usluga od dobavljača prema unaprijed definiranim uvjetima. Sadrže podatke o proizvodima ili uslugama koje se nabavljaju, uključujući količine, cijene, rokove isporuke, uvjete plaćanja i ostale ugovorne odredbe.

## Konfiguracija modula

Prije korištenja modula potrebno je definirati sljedeće tablice i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definiranje numeracija koje će se koristiti za narudžbe.
- [**Tipovi narudžbi dobavljača**](/docs/configurations/tables/purchase/purchase-orders-type): stvaranje i definiranje vrsta narudžbi koje će se koristiti.
- [**Parametri narudžbi dobavljača**](/docs/configurations/parameters/purchase/purchase-orders-parameters): specifične postavke za upravljanje narudžbama dobavljača.

## Povezani moduli

Narudžbe dobavljača mogu se unositi ručno ili automatski kreirati na temelju postojećih dokumenata. Automatsko kreiranje moguće je na sljedeće načine:

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Zahtjevi za nabavom</Link>
        <p>Postupak <Link to="/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests">Automatsko kreiranje narudžbi</Link> omogućuje stvaranje narudžbi dobavljača na temelju odobrenih zahtjeva za nabavu.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Upit za ponudu</Link>
        <p>Narudžbe dobavljača mogu se kreirati iz upita za ponudu pomoću postupka <Link to="/docs/purchase/offer-request/procedures/order-creation">Izrada narudžbe dobavljača iz zahtjeva za ponudu</Link>.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Narudžbe kupaca</Link>
        <p>Postupak <em>Automatsko kreiranje narudžbi</em> omogućuje i stvaranje <em>narudžbe dobavljača</em> na temelju <em>narudžbe kupca</em>. Alternativno, narudžba dobavljača može se kreirati iz filtra <Link to="/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders">Pretraživanje narudžbi kupaca</Link> pomoću gumba <strong>Kreiranje narudžbi dobavljača</strong>.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-job-order/general-overview">Nalog za nabavom</Link>
        <p>Narudžbe dobavljača mogu se kreirati i potpunom ili djelomičnom obradom projekta nabave, na temelju unaprijed definiranih i s dobavljačem ugovorenih uvjeta.</p>
    </div>
</div>

Nakon potvrde, narudžba dobavljača može se obraditi putem **primke** ili **ulaznog računa**. Time se omogućuje evidentiranje robe u skladištu te naknadno knjiženje ulaznog računa u sustavu, uz osiguravanje točnog praćenja zaliha i financijskih tokova.

Modul također omogućuje kreiranje [**prijema robe**](/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure), čime korisnik može obraditi narudžbu dobavljača, evidentirati primitak robe, smjestiti je u skladište ili na unaprijed definirane skladišne lokacije te naknadno izvršiti službeni skladišni primitak.