---
title: Uvod
sidebar_position: 1
---

Uvođenje sistema za upravljanje skladištem (**WMS**) ključno je za preduzeća koja žele optimizovati svoje logističke procese.

**WMS**, kao što je **Fluentis**, pruža skup alata i funkcionalnosti osmišljenih za povećanje efikasnosti, tačnosti i sledljivosti unutar skladišta. Uz **Fluentis WMS**, preduzeća mogu automatizovati ključne procese kao što su prijem robe, skladištenje, preuzimanje, pakovanje i otprema, smanjujući mogućnost ljudskih grešaka i povećavajući produktivnost.

Implementacija **WMS-a** omogućava efikasnije upravljanje zalihama, smanjujući rizik od viškova ili nestašica. Osim toga, zahvaljujući uvidu u operacije u realnom vremenu, **WMS** omogućava preduzećima donošenje informisanih odluka i brzo reagovanje na promene u potražnji. Mogućnost praćenja robe tokom celog njenog životnog ciklusa u skladištu takođe doprinosi usklađenosti sa zakonskim zahtevima i povećanju zadovoljstva kupaca.

Na kraju, korišćenje **WMS-a** pomaže preduzećima da pojednostave logističke procese, smanje troškove i poboljšaju kvalitet usluge, stvarajući konkurentsku prednost na sve dinamičnijem i složenijem tržištu.

## Konfiguracija

[Konfiguracija WMS-a](/docs/logistics/wms/configuration)

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Nabavka</Link>
        <p><Link to="/docs/logistics/wms/purchase/receiving-goods" className="bold-link">Prijem robe</Link></p>
        <p>Funkcija prijema robe ključna je za logističko upravljanje jer omogućava identifikaciju i precizno evidentiranje pristigle robe. Kroz sistem operateri mogu filtrirati i odabrati neizvršene narudžbine dobavljačima, generisati dokument prijema robe (DDT) te, prema potrebi, upravljati utovarnim jedinicama. Ovaj proces osigurava da svaki artikl bude evidentiran sa podacima o lotu i količini, povećavajući efikasnost skladišta i omogućavajući preciznu kontrolu skladišnih kretanja.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Logistika</Link>
        <p><Link to="/docs/logistics/wms/logistics/load-item" className="bold-link">Utovar artikla</Link></p>
        <p>Funkcija utovara robe omogućava precizno evidentiranje prijema artikala u skladište.</p>
        <p><Link to="/docs/logistics/wms/logistics/unload-item" className="bold-link">Istovar artikla</Link></p>
        <p>Funkcija preuzimanja robe namenjena je jednostavnom izdavanju artikala iz skladišta.</p>
        <p><Link to="/docs/logistics/wms/logistics/move-item" className="bold-link">Premeštanje artikla</Link></p>
        <p>Funkcija premeštanja artikla omogućava kreiranje prenosa artikla sa jedne skladišne lokacije na drugu.</p>
        <p><Link to="/docs/logistics/wms/logistics/item-adjustment" className="bold-link">Korekcija artikla</Link></p>
        <p>Ova procedura koristi se za sprovođenje pozitivnih ili negativnih korekcija artikla.</p>
        <p><Link to="/docs/logistics/wms/logistics/item-stocks" className="bold-link">Zaliha artikla</Link></p>
        <p>Funkcija pregleda zaliha omogućava operaterima brz uvid u skladišne zalihe za svaki registrovani artikl.</p>
        <p><Link to="/docs/logistics/wms/logistics/inventory" className="bold-link">Inventar</Link></p>
        <p>Ova procedura omogućava evidentiranje i upravljanje fizičkim zalihama artikala, olakšavajući i ubrzavajući proces brojanja.</p>
        <p><Link to="/docs/logistics/wms/logistics/confirm-picking" className="bold-link">Potvrda pickinga (odabira)</Link></p>
        <p>Ovaj alat omogućava efikasno upravljanje prenosom potvrđenih artikala između različitih skladišta ili skladišnih lokacija, uz automatsko kreiranje potrebnih skladišnih knjiženja.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Utovarna jedinica</Link>

        <p><Link to="/docs/logistics/wms/udc/load-move-pallet" className="bold-link">Utovar/Premeštanje utovarne jedinice</Link></p>
        <p>Funkcija omogućava učitavanje ili premeštanje utovarnih jedinica očitavanjem barkoda, čime se pojednostavljuju i ubrzavaju logističke operacije.</p>

        <p><Link to="/docs/logistics/wms/udc/load-move-udc-multiple" className="bold-link">Utovar/Premeštanje više utovarnih jedinica</Link></p>
        <p>Omogućava istovremeno upravljanje većim brojem utovarnih jedinica, povećavajući efikasnost skladišnih operacija kroz masovno učitavanje ili premeštanje.</p>

        <p><Link to="/docs/logistics/wms/udc/loading-unit-picking-list" className="bold-link">Liste za preuzimanje / Packing lista</Link></p>
        <p>Omogućava kreiranje pickinga utovarnih jedinica, olakšavajući pripremu pošiljki direktno povezanih sa narudžbinama kupaca.</p>

        <p><Link to="/docs/logistics/wms/udc/loading-unit-transfer-list" className="bold-link">Liste za prenos</Link></p>
        <p>Omogućava upravljanje premeštanjem utovarnih jedinica unutar skladišta te olakšava organizaciju i sledljivost tokom prenosa između različitih skladišnih lokacija.</p>

        <p><Link to="/docs/logistics/wms/udc/confirm-packing-list" className="bold-link">Potvrda preuzimanja</Link></p>
        <p>Funkcija se koristi za potvrdu lista preuzimanja i kreiranje skladišnih knjiženja izlaza robe.</p>

        <p><Link to="/docs/logistics/wms/udc/confirm-transfer" className="bold-link">Potvrda prenosa</Link></p>
        <p>Ova procedura služi za potvrđivanje postojećih lista prenosa i upravljanje povezanim skladišnim knjiženjima.</p>

        <p><Link to="/docs/logistics/wms/udc/move-loading-unit-item" className="bold-link">Premeštanje artikala između dve utovarne jedinice</Link></p>
        <p>Ova funkcija omogućava jednostavan prenos artikala iz jedne utovarne jedinice u drugu.</p>

        <p><Link to="/docs/logistics/wms/udc/loading-unit-adjustment" className="bold-link">Korekcija (podešavanje) utovarne jedinice</Link></p>
        <p>Omogućava izmenu artikala sadržanih u utovarnoj jedinici, uključujući pozitivne i negativne korekcije količina.</p>

        <p><Link to="/docs/logistics/wms/udc/loading-unit-inventory" className="bold-link">Inventar utovarnih jedinica</Link></p>
        <p>Ova procedura omogućava sprovođenje precizne inventure utovarnih jedinica koje se nalaze u skladištu.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">Prodaja</Link>
        <p><Link to="/docs/logistics/wms/sales/check-row-management" className="bold-link">Upravljanje potvrdom preuzimanja</Link></p>
        <p>Upravljanje potvrdom preuzimanja u Fluentis WMS-u omogućava operaterima potvrđivanje redova pickinga i grupisanje artikala u utovarne jedinice, čime se optimizuju skladišne operacije. Zahvaljujući ovoj funkcionalnosti moguće je efikasno kreirati i upravljati utovarnim jedinicama tokom preuzimanja robe, obezbeđujući preciznu kontrolu i veću operativnu efikasnost.</p>
    </div>
</div>

## Za početak korišćenja

**Upravljanja utovarnim jedinicama** potrebno je:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)
- ispravno definisati [*Predloške skladišta*](/docs/configurations/tables/logistics/warehouse-templates)
- definisati [*Početne parametre skladišta*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)
- kreirati zaposlenog u tabeli [Zaposleni](/docs/project-management/registers/employee/new-employee/)
- [konfigurisati](https://docs.fluentis.com/FluentisErp/docs/logistics/wms/configuration) aplikaciju **Fluentis WMS**
- definisati [*Parametre ulaza/izlaza po korisniku*](/docs/configurations/parameters/general-parameters/deliverynotes-grouping)
- definisati [*Barcode Tokenizer*](/docs/configurations/tables/general-settings/barcode-tokenizer)
