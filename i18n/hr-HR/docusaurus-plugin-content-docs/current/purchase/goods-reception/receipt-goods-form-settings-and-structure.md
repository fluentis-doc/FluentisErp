---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u području nabave pod **Nabava > Prijem robe** i predstavlja međukorak koji omogućuje evidentiranje dolaska robe od dobavljača, čime se ažuriraju skladišne zalihe bez potrebe za prethodnim kreiranjem Otpremnice (DDT) ili Ulaznog računa.

## **Prethodna konfiguracija modula**

Prije korištenja modula potrebno je konfigurirati sljedeće tablice i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definiranje numeracija koje će se koristiti za dokumente zaprimanja robe.
- [**Tip prijema robe**](/docs/configurations/tables/purchase/goods-receipt-types)
- [**Parametri narudžbi dobavljaču**](/docs/configurations/parameters/purchase/purchase-orders-parameters): na kartici **Utovar** potrebno je definirati parametre koji će se koristiti za **Knjiženje zaprimljene robe**.

## **Povezanost s ostalim modulima**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistika</Link>
        <p>Zaprimanje robe može se knjižiti u skladište putem odgovarajućeg [postupka](/docs/purchase/goods-reception/procedures/good-receipt-load).</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Primke i Ulazni računi</Link>
        <p>Na temelju zaprimanja robe moguće je izvršiti [Kreiranje primke](/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt) ili [Kreiranje ulaznog računa](/docs/purchase/purchase-invoices/procedures/create-purchase-invoices-from-goods-receipt).</p>
    </div>
</div>