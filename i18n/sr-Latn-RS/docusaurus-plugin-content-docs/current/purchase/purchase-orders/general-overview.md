---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u meniju **Nabavka > Narudžbine dobavljača** i predstavlja jednu od međufaza procesa nabavke. Narudžbine dobavljača su formalni dokumenti koje izdaje odeljenje **Nabavka** radi naručivanja robe ili usluga od dobavljača prema unapred definisanim uslovima. Sadrže podatke o proizvodima ili uslugama koje se nabavljaju, uključujući količine, cene, rokove isporuke, uslove plaćanja i ostale ugovorne odredbe.

## Konfiguracija modula

Pre korišćenja modula potrebno je definisati sledeće tabele i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definisanje numeracija koje će se koristiti za narudžbine.
- [**Tipovi narudžbina dobavljača**](/docs/configurations/tables/purchase/purchase-orders-type): kreiranje i definisanje tipova narudžbina koje će se koristiti.
- [**Parametri narudžbina dobavljača**](/docs/configurations/parameters/purchase/purchase-orders-parameters): specifična podešavanja za upravljanje narudžbinama dobavljača.

## Povezani moduli

Narudžbine dobavljača mogu se unositi ručno ili automatski kreirati na osnovu postojećih dokumenata. Automatsko kreiranje moguće je na sledeće načine:

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Zahtevi za nabavku</Link>
        <p>Postupak <Link to="/docs/purchase/purchase-orders/procedures/create-purchase-orders-from-purchase-requests">Automatsko kreiranje narudžbina</Link> omogućava kreiranje narudžbina dobavljača na osnovu odobrenih zahteva za nabavku.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/offer-request/settings">Zahtev za ponudu</Link>
        <p>Narudžbine dobavljača mogu se kreirati iz zahteva za ponudu pomoću postupka <Link to="/docs/purchase/offer-request/procedures/order-creation">Kreiranje narudžbine dobavljača iz zahteva za ponudu</Link>.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-orders/settings">Narudžbine kupaca</Link>
        <p>Postupak <em>Automatsko kreiranje narudžbina</em> omogućava i kreiranje <em>narudžbine dobavljača</em> na osnovu <em>narudžbine kupca</em>. Alternativno, narudžbina dobavljača može se kreirati iz filtera <Link to="/docs/sales/sales-orders/create-new-sales-orders/search-sales-orders">Pretraga narudžbina kupaca</Link> pomoću dugmeta <strong>Kreiranje narudžbina dobavljača</strong>.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-job-order/general-overview">Nalog za nabavku</Link>
        <p>Narudžbine dobavljača mogu se kreirati i potpunom ili delimičnom realizacijom naloga za nabavku, na osnovu unapred definisanih i sa dobavljačem ugovorenih uslova.</p>
    </div>
</div>

Nakon potvrde, narudžbina dobavljača može se realizovati putem **prijema robe** ili **ulaznog računa**. Time se omogućava evidentiranje robe u skladištu i naknadno knjiženje ulaznog računa u sistemu, uz obezbeđivanje tačnog praćenja zaliha i finansijskih tokova.

Modul takođe omogućava kreiranje [**prijema robe**](/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure), čime korisnik može realizovati narudžbinu dobavljača, evidentirati prijem robe, smestiti je u skladište ili na unapred definisane skladišne lokacije, a zatim izvršiti zvanični prijem u skladište.