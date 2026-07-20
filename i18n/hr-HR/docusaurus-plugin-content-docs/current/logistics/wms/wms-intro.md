---
title: Uvod
sidebar_position: 1
---

Uvođenje sustava za upravljanje skladištem (**WMS**) ključno je za poduzeća koja žele optimizirati svoje logističke procese.

**WMS**, kao što je **Fluentis**, pruža skup alata i funkcionalnosti osmišljenih za povećanje učinkovitosti, točnosti i sljedivosti unutar skladišta. Uz **Fluentis WMS**, poduzeća mogu automatizirati ključne procese kao što su zaprimanje robe, skladištenje, preuzimanje, pakiranje i otprema, smanjujući mogućnost ljudskih pogrešaka i povećavajući produktivnost.

Implementacija **WMS-a** omogućuje učinkovitije upravljanje zalihama, smanjujući rizik od viškova ili nestašica. Osim toga, zahvaljujući uvidu u operacije u stvarnom vremenu, **WMS** omogućuje poduzećima donošenje informiranih odluka i brzo reagiranje na promjene u potražnji. Mogućnost praćenja robe tijekom cijelog njezina životnog ciklusa u skladištu također doprinosi usklađenosti sa zakonskim zahtjevima i povećanju zadovoljstva kupaca.

U konačnici, korištenje **WMS-a** pomaže poduzećima pojednostaviti logističke procese, smanjiti troškove i poboljšati kvalitetu usluge, stvarajući konkurentsku prednost na sve dinamičnijem i složenijem tržištu.

## Konfiguracija

[Konfiguracija WMS-a](/docs/logistics/wms/configuration)

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Nabava</Link>
        <p><Link to="/docs/logistics/wms/purchase/receiving-goods" className="bold-link">Prijem robe</Link></p>
        <p>Funkcija zaprimanja robe ključna je za logističko upravljanje jer omogućuje identifikaciju i precizno evidentiranje pristigle robe. Kroz sustav operateri mogu filtrirati i odabrati neizvršene narudžbe dobavljačima, generirati dokument primke robe (DDT) te, prema potrebi, upravljati utovarnim jedinicama. Ovaj proces osigurava da svaki artikl bude evidentiran s podacima o lotu i količini, povećavajući učinkovitost skladišta i omogućujući preciznu kontrolu skladišnih kretanja.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Logistika</Link>
        <p><Link to="/docs/logistics/wms/logistics/load-item" className="bold-link">Utovar artikla</Link></p>
        <p>Funkcija učitavanja robe omogućuje precizno evidentiranje zaprimanja artikala u skladište.</p>
        <p><Link to="/docs/logistics/wms/logistics/unload-item" className="bold-link">Utovar artikla</Link></p>
        <p>Funkcija preuzimanja robe namijenjena je jednostavnom preuzimanju artikala iz skladišta.</p>
        <p><Link to="/docs/logistics/wms/logistics/move-item" className="bold-link">Premještanje artikla</Link></p>
        <p>Funkcija premještanja artikla omogućuje kreiranje prijenosa artikla s jedne skladišne lokacije na drugu.</p>
        <p><Link to="/docs/logistics/wms/logistics/item-adjustment" className="bold-link">Ispravak artikla</Link></p>
        <p>Ova procedura koristi se za provođenje pozitivnih ili negativnih korekcija artikla.</p>
        <p><Link to="/docs/logistics/wms/logistics/item-stocks" className="bold-link">(Stanje) zaliha artikla</Link></p>
        <p>Funkcija stanja zaliha omogućuje operaterima brz pregled skladišnih zaliha za svaki registrirani artikl.</p>
        <p><Link to="/docs/logistics/wms/logistics/inventory" className="bold-link">Inventura</Link></p>
        <p>Ova procedura omogućuje evidentiranje i upravljanje fizičkim zalihama artikala, olakšavajući i ubrzavajući proces brojanja.</p>
        <p><Link to="/docs/logistics/wms/logistics/confirm-picking" className="bold-link">Potvrda pickinga (odabira)</Link></p>
        <p>Ovaj alat omogućuje učinkovito upravljanje prijenosom potvrđenih artikala između različitih skladišta ili skladišnih lokacija, uz automatsko kreiranje potrebnih skladišnih knjiženja.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Utovarna jedinica</Link>
        <p><Link to="/docs/logistics/wms/udc/load-move-pallet" className="bold-link">Utovar/Premještanje utovarne jedinice</Link></p>
        <p>Funkcija omogućuje učitavanje ili premještanje utovarnih jedinica očitavanjem barkoda, čime se pojednostavljuju i ubrzavaju logističke operacije.</p>

        <p><Link to="/docs/logistics/wms/udc/load-move-udc-multiple" className="bold-link">Utovar/Premještanje više utovarnih jedinica</Link></p>
        <p>Omogućuje istovremeno upravljanje većim brojem utovarnih jedinica, povećavajući učinkovitost skladišnih operacija kroz masovno učitavanje ili premještanje.</p>

        <p><Link to="/docs/logistics/wms/udc/loading-unit-picking-list" className="bold-link">Liste za preuzimanje / Packing List</Link></p>
        <p>Omogućuje kreiranje pickinga utovarnih jedinica, olakšavajući pripremu pošiljki izravno povezanih s narudžbama kupaca.</p>

        <p><Link to="/docs/logistics/wms/udc/loading-unit-transfer-list" className="bold-link">Liste za prijenos</Link></p>
        <p>Omogućuje upravljanje premještanjem utovarnih jedinica unutar skladišta te olakšava organizaciju i sljedivost tijekom prijenosa između različitih skladišnih lokacija.</p>

        <p><Link to="/docs/logistics/wms/udc/confirm-packing-list" className="bold-link">Potvrda odabira</Link></p>
        <p>Funkcija se koristi za potvrdu lista preuzimanja i kreiranje skladišnih knjiženja izlaza robe.</p>

        <p><Link to="/docs/logistics/wms/udc/confirm-transfer" className="bold-link">Potvrda prijenosa</Link></p>
        <p>Ova procedura služi za potvrđivanje postojećih lista prijenosa i upravljanje povezanim skladišnim knjiženjima.</p>

        <p><Link to="/docs/logistics/wms/udc/move-loading-unit-item" className="bold-link">Premještanje artikala između dvije utovarne jedinice</Link></p>
        <p>Ova funkcija omogućuje jednostavan prijenos artikala iz jedne utovarne jedinice u drugu.</p>

        <p><Link to="/docs/logistics/wms/udc/loading-unit-adjustment" className="bold-link">Korekcija (podešavanje) utovarne jedinice</Link></p>
        <p>Omogućuje izmjenu artikala sadržanih u utovarnoj jedinici, uključujući pozitivne i negativne korekcije količina.</p>

        <p><Link to="/docs/logistics/wms/udc/loading-unit-inventory" className="bold-link">Inventura utovarnih jedinica</Link></p>
        <p>Ova procedura omogućuje provođenje precizne inventure utovarnih jedinica koje se nalaze u skladištu.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Prodaja</Link>
        <p><Link to="/docs/logistics/wms/sales/check-row-management" className="bold-link">Upravljanje potvrdom preuzimanja</Link></p>
        <p>Upravljanje potvrdom preuzimanja u Fluentis WMS-u omogućuje operaterima potvrđivanje redaka pickinga i grupiranje artikala u utovarne jedinice, čime se optimiziraju skladišne operacije. Zahvaljujući ovoj funkcionalnosti moguće je učinkovito kreirati i upravljati utovarnim jedinicama tijekom preuzimanja robe, osiguravajući preciznu kontrolu i veću operativnu učinkovitost.</p>
    </div>
</div>

## Za početak korištenja

**Upravljanja utovarnim jedinicama** potrebno je:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)
- ispravno definirati [*Predloške skladišta*](/docs/configurations/tables/logistics/warehouse-templates)
- definirati [*Početne parametre skladišta*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)
- kreirati zaposlenika u tablici [Zaposlenici](/docs/project-management/registers/employee/new-employee/)
- [konfigurirati](https://docs.fluentis.com/FluentisErp/docs/logistics/wms/configuration) aplikaciju **Fluentis WMS**
- definirati [*Parametre ulaza/izlaza po korisniku*](/docs/configurations/parameters/general-parameters/deliverynotes-grouping)
- definirati [*Barcode Tokenizer*](/docs/configurations/tables/general-settings/barcode-tokenizer)