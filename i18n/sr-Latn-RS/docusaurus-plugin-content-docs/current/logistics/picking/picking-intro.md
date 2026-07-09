---
title: Uvod
sidebar_position: 1
---

Uvod u upravljanje pickingom (listom/pripremom za slaganje/preuzimanje robe) u sistemu Fluentis usmeren je na efikasno kreiranje i upravljanje listama za preuzimanje radi optimizacije logističkih operacija unutar preduzeća. Sistem omogućava kreiranje *pickinga* za pojedinačne artikle putem jednostavnih i brzih postupaka, kao što je automatski unos artikala iz naloga kupaca, čime se olakšava postupak realizacije.
Slaganja robe mogu se unositi ručno ili automatski, na primer iz planova utovara. Na osnovu *pickinga* moguće je kreirati otpremnicu ili izlazni račun.
Upravljanje *pickingom* u sistemu Fluentis ključan je element za optimizaciju logističkih operacija, kojim se osiguravaju efikasnost i visok nivo kontrole nad postupcima preuzimanja i kretanja artikala.

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-management">Picking (slaganje robe)</Link>
        <p>Ova funkcionalnost omogućava korisnicima efikasno kreiranje lista za preuzimanje na osnovu različitih vrsta *pickinga* koje je moguće konfigurisati u sistemu. Kreiranjem *pickinga* operateri mogu odabrati artikle koje je potrebno realizovati i definisati važne podatke kao što su količina i lokacija preuzimanja.</p> 
    </div>
</div>

## Za početak korišćenja

**Pickinga (slaganja robe)**:
- definišite [*Vrstu slaganja robe*](/docs/configurations/tables/logistics/picking-type/)      
- definišite [*Parametre slaganja robe*](//docs/configurations/parameters/logistics/picking-parameters/)        
- ispravno definišite [*Skladišne predloške*](/docs/configurations/tables/logistics/warehouse-templates) koji će se koristiti
- kreirajte artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)

## Povezivanje sa drugim modulima
Picking je moguće kreirati ručno, ali i na osnovu [Liste za preuzimanje materijala](/docs/production/pp-production-in-progress/picking-materials-list).
Osim toga, iz pickinga je moguće direktno kreirati [otpremnice](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) i [izlazne račune](/docs/sales/sales-invoices/general-overview).