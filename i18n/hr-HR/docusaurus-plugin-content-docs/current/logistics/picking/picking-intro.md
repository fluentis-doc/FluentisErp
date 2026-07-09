---
title: Uvod
sidebar_position: 1
---

Uvod u upravljanje pickingom (listom/pripremom za slaganje/preuzimanje robe) u sustavu Fluentis usmjeren je na učinkovito kreiranje i upravljanje listama za preuzimanje radi optimizacije logističkih operacija unutar poduzeća. Sustav omogućuje kreiranje *pickinga* za pojedinačne artikle putem jednostavnih i brzih postupaka, kao što je automatski unos artikala iz narudžbi kupaca, čime se olakšava postupak realizacije.
Slaganja robe se mogu unositi ručno ili automatski, primjerice iz planova utovara. Na temelju *pickinga* moguće je kreirati otpremnicu ili izlazni račun.
Upravljanje *pickingom* u sustavu Fluentis ključan je element za optimizaciju logističkih operacija, kojim se osiguravaju učinkovitost i visoka razina kontrole nad postupcima preuzimanja i kretanja artikala.

## Dokumenti kojima se upravlja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-management">Picking (slaganje robe)</Link>
        <p>Ova funkcionalnost omogućuje korisnicima učinkovito kreiranje lista za preuzimanje na temelju različitih vrsta *pickinga* koje je moguće konfigurirati u sustavu. Kreiranjem *pickinga* operateri mogu odabrati artikle koje je potrebno realizirati te definirati važne podatke kao što su količina i lokacija preuzimanja.</p> 
    </div>
</div>

## Za početak korištenja

**Pickinga (slaganja robe)**:
- definirajte [*Vrstu slaganja robe*](/docs/configurations/tables/logistics/picking-type/)      
- definirajte [*Parametre slaganja robe*](//docs/configurations/parameters/logistics/picking-parameters/)        
- ispravno definirajte [*Skladišne predloške*](/docs/configurations/tables/logistics/warehouse-templates) koji će se koristiti
- kreirajte artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)

## Povezivanje s drugim modulima
Picking je moguće kreirati ručno, ali i na temelju [Liste za preuzimanje materijala](/docs/production/pp-production-in-progress/picking-materials-list).
Osim toga, iz pickinga je moguće izravno kreirati [otpremnice](/docs/sales/sales-delivery-notes/insert-delivery-notes/search-sales-dn) i [izlazne račune](/docs/sales/sales-invoices/general-overview).