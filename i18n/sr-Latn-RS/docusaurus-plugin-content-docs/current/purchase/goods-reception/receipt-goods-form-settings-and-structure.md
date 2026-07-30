---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u oblasti nabavke pod **Nabavka > Prijem robe** i predstavlja međukorak koji omogućava evidentiranje prijema robe od dobavljača, čime se ažuriraju zalihe u skladištu bez potrebe za prethodnim kreiranjem Otpremnice (DDT) ili Ulaznog računa.

## **Prethodna konfiguracija modula**

Pre korišćenja modula potrebno je konfigurisati sledeće tabele i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definisanje numeracija koje će se koristiti za dokumente prijema robe.
- [**Tip prijema robe**](/docs/configurations/tables/purchase/goods-receipt-types)
- [**Parametri narudžbina dobavljaču**](/docs/configurations/parameters/purchase/purchase-orders-parameters): na kartici **Utovar** potrebno je definisati parametre koji će se koristiti za **Knjiženje primljene robe**.

## **Povezanost sa ostalim modulima**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistika</Link>
        <p>Prijem robe može se knjižiti u skladište putem odgovarajućeg [postupka](/docs/purchase/goods-reception/procedures/good-receipt-load).</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Primke i Ulazni računi</Link>
        <p>Na osnovu prijema robe moguće je izvršiti [Kreiranje primke](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) ili [Kreiranje ulaznog računa](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt).</p>
    </div>
</div>