---
title: Uvod
sidebar_position: 1
---

Modul se nalazi u meniju **Nabavka > Primke**. Primka se kreira kada dobavljač isporuči naručenu robu. Ovaj modul omogućava evidentiranje ulaznih kretanja robe, olakšava kontrolu i sledljivost primljene robe i omogućava precizno upravljanje raspoloživim zalihama u skladištu.

## **Prethodna konfiguracija modula**

Pre korišćenja modula potrebno je definisati sledeće tabele i parametre:

- [**Numeracije**](/docs/configurations/tables/fluentis-numerations): definisanje numeracija koje će se koristiti za primke.
- [**Tipovi prometa nabavke**](/docs/configurations/tables/purchase/purchase-turnover/): definisanje tipova fakturisanja nabavke koji će se koristiti u dokumentima.
- [**Tipovi primki**](/docs/configurations/tables/purchase/purchase-orders-type): kreiranje i definisanje tipova primki koji će se koristiti.
- [**Parametri nabavne primke**](/docs/configurations/parameters/purchase/purchase-orders-parameters): specifična podešavanja za upravljanje primkama.

## **Povezanost sa drugim modulima**

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/purchase/purchase-orders/general-overview">Narudžbine dobavljaču</Link>
        <p>Primka se može kreirati izvršenjem jedne ili više narudžbina dobavljaču, bilo direktno unutar primke pomoću dugmeta <strong>Izvršenje/Preuzimanje narudžbina</strong>, bilo putem odgovarajuće <Link to="/docs/purchase/purchase-delivery-note/procedures/create-delivery-notes-from-orders">procedure</Link>.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/goods-reception/receipt-goods-form-settings-and-structure">Prijem robe</Link>
        <p>Postupak <Link to="/docs/purchase/purchase-delivery-note/procedures/create-delivery-note-from-goods-receipt">Kreiranje primke iz prijema robe</Link> omogućava kreiranje primke čak i kada je narudžbina već izvršena kroz <strong>Prijem robe</strong>.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/warehouse/stock-records/records">Logistika</Link>
        <p>Nakon kreiranja i kontrole, primku je moguće <Link to="/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse">proknjižiti u skladište</Link> kako bi se evidentirao prijem robe i ažuriralo stanje zaliha.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchase-invoices/general-overview">Ulazni računi</Link>
        <p>Postupak <Link to="/docs/purchase/purchase-invoices/procedures/purchase-delivery-note-valorization">Valorizacija primke</Link> omogućava kreiranje ulaznih računa na osnovu primki.</p>
    </div>
</div>