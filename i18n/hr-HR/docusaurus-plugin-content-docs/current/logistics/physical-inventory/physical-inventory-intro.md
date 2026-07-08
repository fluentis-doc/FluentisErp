---
title: Uvod u fizičke inventure
description: Uvod u funkcionalnosti područja Fizičke inventure – izrada inventurnih lista, utvrđivanje zaliha, usklađivanje fizičkih i logičkih zaliha, vrednovanje i povijesni podaci.
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

Modul omogućuje operateru izradu i upravljanje inventurnim listama, utvrđivanje fizičkih zaliha i njihovu usporedbu s logičkim zalihama evidentiranima u sustavu.  
Na temelju konfiguriranih parametara Fluentis omogućuje automatsko usklađivanje logičkih zaliha s fizičkima, čime se stanje u informacijskom sustavu usklađuje sa stvarnim stanjem robe u skladištu.  

Nakon dovršetka faze usklađivanja moguće je provesti **vrednovanje skladišta**.

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Fizičke inventure</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Fizičke inventure</Link></p>
        <p>Omogućuju operaterima izradu inventurnih lista, utvrđivanje fizičkih zaliha i usporedbu dobivenih podataka s logičkim zalihama evidentiranima u sustavu. Putem automatiziranog postupka Fluentis olakšava usklađivanje fizičkih i logičkih zaliha, čime se osigurava preciznije i učinkovitije upravljanje resursima.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Inventurne razlike</Link></p>
        <p>Omogućuju učinkovito usklađivanje fizičkih i logičkih zaliha unutar skladišta. Ova funkcionalnost operaterima omogućuje sustavno upravljanje utvrđenim razlikama i njihovo evidentiranje, osiguravajući pritom sljedivost i točno knjiženje svakog skladišnog kretanja.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Povijest zatvaranja</Link></p>
        <p>Omogućuje pristup pohranjenim povijesnim podacima o zatvaranjima skladišta, čime se operaterima omogućuje praćenje i analiza promjena zaliha tijekom vremena. Ova funkcionalnost omogućuje pregled detaljnih informacija kao što su posljednji trošak, prosječni trošak i skladišne zalihe, dobivenih postupkom vrednovanja.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Povijest skladišta</Link></p>
        <p>Omogućuje korisnicima pregled pohranjenih povijesnih podataka o skladišnim operacijama. Ova funkcionalnost omogućuje pregled detaljne arhive zatvaranja i vrednovanja provedenih tijekom vremena te analizu podataka kao što su posljednji i prosječni trošak svakog artikla, kao i zalihe povezane sa svakim pojedinim zatvaranjem.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Vrednovanje skladišta</Link></p>
        <p>Omogućuje operaterima provođenje zatvaranja skladišta na određeni datum, evidentiranje preostalih zaliha i usklađivanje logističkih podataka s računovodstvenima, čime se osigurava precizno upravljanje resursima i povezanim troškovima.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Vrijednosni inventar količina</Link></p>
        <p>Omogućuje poduzećima jasan i detaljan pregled vlastitih zaliha. Putem ovog izvještaja korisnici mogu pristupiti potpunim informacijama ne samo o fizičkim količinama artikala na skladištu nego i o njihovoj vrijednosti.</p>
    </div>
</div>

## Kako započeti s korištenjem fizičkih inventura

Za pravilan rad s **fizičkim inventurama** potrebno je pripremiti sljedeće podatke:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)
- definirati [*Skladišne predloške*](/docs/configurations/tables/logistics/warehouse-templates)
- konfigurirati [*Početne parametre skladišta*](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters)
- postaviti [*Parametre inventurnih razlika*](/docs/configurations/parameters/logistics/stock-difference/)
- definirati [*Vrstu inventurne liste*](/docs/configurations/tables/logistics/stock-lists-types/)
- kreirati zaposlenika u tablici [*Zaposlenici*](/docs/project-management/registers/employee/new-employee/)

## Povezivanje s drugim modulima

U [*Skladišnim knjiženjima*](/docs/logistics/warehouse/stock-records/record) moguće je pregledati:

- rezultate fizičkih inventura  
- zatvaranja skladišta  
- kretanja generirana usklađivanjem zaliha  

Time se omogućuje potpun i integriran pregled inventurnog procesa.