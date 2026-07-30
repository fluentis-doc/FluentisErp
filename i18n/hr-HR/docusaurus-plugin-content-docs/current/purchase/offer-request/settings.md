---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u izborniku **Nabava > Upit za ponudom** i predstavlja jedan od međukoraka u procesu nabave.

Upit za ponudom služe za upravljanje postupkom prikupljanja i usporedbe ponuda dobavljača, kako bi se odabrali najpovoljniji uvjeti nabave.

## **Preduvjeti za korištenje modula**

Prije korištenja modula potrebno je popuniti sljedeće tablice i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definiranje numeracija koje će se koristiti za Zahtjeve za ponudom.
- [**Vrste upita za ponudom**](/docs/configurations/tables/purchase/purchase-offer-type): definiranje vrsta upita za ponudom.

## **Povezanost s ostalim modulima**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-requests/general-overview">Zahtjevi za nabavu</Link>
        <p>Upiti za ponudom mogu se generirati iz <i>Zahtjeva za nabavu</i> pomoću gumba <strong>RDO generator</strong> koji se nalazi unutar Zahtjeva za nabavu.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Narudžbe dobavljaču</Link>
        <p>Nakon odabira najpovoljnije ponude, upit za ponudom moguće je pretvoriti u narudžbu dobavljaču korištenjem postupka <Link to="/docs/purchase/offer-request/procedures/order-creation">Izrada narudžbe dobavljača iz zahtjeva (upita) za ponudu</Link>.</p>
    </div>
</div>