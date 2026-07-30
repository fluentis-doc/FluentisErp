---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u izborniku **Nabava > Primke**. Primka se kreira kada dobavljač isporuči naručenu robu. Ovaj modul omogućuje evidentiranje ulaznih kretanja robe, olakšava kontrolu i sljedivost zaprimljene robe te omogućuje precizno upravljanje raspoloživim zalihama u skladištu.

## **Prethodna konfiguracija modula**

Prije korištenja modula potrebno je definirati sljedeće tablice i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definiranje numeracija koje će se koristiti za primke.
- [**Vrste prometa nabave**](/docs/configurations/tables/purchase/purchase-turnover/): definiranje vrsta fakturiranja nabave koje će se koristiti u dokumentima.
- [**Tipovi primki**](/docs/configurations/tables/purchase/purchase-orders-type): kreiranje i definiranje vrsta primki koje će se koristiti.
- [**Parametri nabavne primke**](/docs/configurations/parameters/purchase/purchase-orders-parameters): specifične postavke za upravljanje primkama.

## **Povezanost s drugim modulima**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Narudžbe dobavljaču</Link>
        <p>Primka se može kreirati izvršenjem jedne ili više narudžbi dobavljaču, bilo izravno unutar primke pomoću gumba <strong>Izvršenje/Izuzimanje narudžbi</strong>, bilo putem odgovarajućeg <Link to="/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders">postupka</Link>.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Zaprimanje robe</Link>
        <p>Postupak <Link to="/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt">Izrada primke iz prijema robe</Link> omogućuje kreiranje primke čak i kada je narudžba već izvršena kroz <strong>Prijem robe</strong>.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistika</Link>
        <p>Nakon kreiranja i kontrole, primku je moguće <Link to="/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse">proknjižiti u skladište</Link> kako bi se evidentirao dolazak robe i ažuriralo stanje zaliha.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Ulazni računi</Link>
        <p>Postupak <Link to="/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization">Valorizacija primke</Link> omogućuje kreiranje ulaznih računa na temelju primki.</p>
    </div>
</div>