---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u meniju **Nabavka > Upit za ponudom** i predstavlja jedan od međukoraka u procesu nabavke.

Upiti za ponudom služe za upravljanje postupkom prikupljanja i upoređivanja ponuda dobavljača kako bi se izabrali najpovoljniji uslovi nabavke.

## **Preduslovi za korišćenje modula**

Pre korišćenja modula potrebno je popuniti sledeće tabele i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definisanje numeracija koje će se koristiti za Zahteve za ponudom.
- [**Vrste upita za ponudom**](/docs/configurations/tables/purchase/purchase-offer-type): definisanje vrsta upita za ponudom.

## **Povezanost sa ostalim modulima**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Zahtevi za nabavku</Link>
        <p>Upiti za ponudom mogu se generisati iz <i>Zahteva za nabavku</i> pomoću dugmeta <strong>RDO generator</strong> koje se nalazi unutar Zahteva za nabavku.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Narudžbe dobavljaču</Link>
        <p>Nakon izbora najpovoljnije ponude, upit za ponudom moguće je pretvoriti u narudžbinu dobavljaču korišćenjem postupka <Link to="/docs/purchase/offer-request/procedures/order-creation">Kreiranje narudžbine dobavljaču iz zahteva (upita) za ponudu</Link>.</p>
    </div>
</div>