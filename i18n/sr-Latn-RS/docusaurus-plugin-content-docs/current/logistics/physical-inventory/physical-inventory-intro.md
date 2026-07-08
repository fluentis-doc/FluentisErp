---
title: Uvod u fizičke inventure
description: Uvod u funkcionalnosti područja Fizičke inventure – izrada inventurnih lista, utvrđivanje zaliha, usklađivanje fizičkih i logičkih zaliha, vrednovanje i istorijski podaci.
keywords:
  - fizičke inventure
  - skladište
  - vrednovanje
  - inventurne razlike
sidebar_position: 1
schema: TechArticle
tags:
  - inventura
  - skladište
last_update:
  author: Fluentis Documentation Team
---

# Uvod u fizičke inventure

Modul omogućava operateru izradu i upravljanje inventurnim listama, utvrđivanje fizičkih zaliha i njihovo poređenje sa logičkim zalihama evidentiranim u sistemu.  
Na osnovu konfigurisanih parametara Fluentis omogućava automatsko usklađivanje logičkih zaliha sa fizičkim, čime se stanje u informacionom sistemu usklađuje sa stvarnim stanjem robe u skladištu.  

Nakon završetka faze usklađivanja moguće je sprovesti **vrednovanje skladišta**.

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Fizičke inventure</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Fizičke inventure</Link></p>
        <p>Omogućavaju operaterima izradu inventurnih lista, utvrđivanje fizičkih zaliha i poređenje dobijenih podataka sa logičkim zalihama evidentiranim u sistemu. Putem automatizovanog postupka Fluentis olakšava usklađivanje fizičkih i logičkih zaliha, čime se osigurava preciznije i efikasnije upravljanje resursima.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Inventurne razlike</Link></p>
        <p>Omogućavaju efikasno usklađivanje fizičkih i logičkih zaliha unutar skladišta. Ova funkcionalnost operaterima omogućava sistematsko upravljanje utvrđenim razlikama i njihovo evidentiranje, osiguravajući pritom sledljivost i tačno knjiženje svakog skladišnog kretanja.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Istorija zatvaranja</Link></p>
        <p>Omogućava pristup sačuvanim istorijskim podacima o zatvaranjima skladišta, čime se operaterima omogućava praćenje i analiza promena zaliha tokom vremena. Ova funkcionalnost omogućava pregled detaljnih informacija kao što su poslednji trošak, prosečni trošak i skladišne zalihe, dobijenih postupkom vrednovanja.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Istorija skladišta</Link></p>
        <p>Omogućava korisnicima pregled sačuvanih istorijskih podataka o skladišnim operacijama. Ova funkcionalnost omogućava pregled detaljne arhive zatvaranja i vrednovanja sprovedenih tokom vremena i analizu podataka kao što su poslednji i prosečni trošak svakog artikla, kao i zalihe povezane sa svakim pojedinačnim zatvaranjem.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Vrednovanje skladišta</Link></p>
        <p>Omogućava operaterima sprovođenje zatvaranja skladišta na određeni datum, evidentiranje preostalih zaliha i usklađivanje logističkih podataka sa računovodstvenim, čime se osigurava precizno upravljanje resursima i povezanim troškovima.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Vrednosni inventar količina</Link></p>
        <p>Omogućava preduzećima jasan i detaljan pregled sopstvenih zaliha. Putem ovog izveštaja korisnici mogu pristupiti potpunim informacijama ne samo o fizičkim količinama artikala na skladištu već i o njihovoj vrednosti.</p>
    </div>
</div>

## Kako započeti sa korišćenjem fizičkih inventura

Za pravilan rad sa **fizičkim inventurama** potrebno je pripremiti sledeće podatke:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)
- definisati [*Skladišne predloške*](/docs/configurations/tables/logistics/warehouse-templates)
- konfigurisati [*Početne parametre skladišta*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)
- postaviti [*Parametre inventurnih razlika*](/docs/configurations/parameters/logistics/stock-difference/)
- definisati [*Vrstu inventurne liste*](/docs/configurations/tables/logistics/stock-lists-types/)
- kreirati zaposlenog u tabeli [*Zaposleni*](/docs/project-management/registers/employee/new-employee/)

## Povezivanje sa drugim modulima

U [*Skladišnim knjiženjima*](/docs/logistics/warehouse/stock-records/record) moguće je pregledati:

- rezultate fizičkih inventura  
- zatvaranja skladišta  
- kretanja generisana usklađivanjem zaliha  

Time se omogućava potpun i integrisan pregled inventurnog procesa.