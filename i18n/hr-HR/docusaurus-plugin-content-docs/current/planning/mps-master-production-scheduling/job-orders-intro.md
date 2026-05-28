---
title: Uvod
sidebar_position: 1
---

Upravljanje **Generiranjem proizvodnih naloga** omogućuje kreiranje radnih naloga na temelju različitih ulaznih podataka kao što su narudžbe kupaca, prognoze prodaje, minimalne zalihe i potrebe skladišta.
Korisnik može konfigurirati različite parametre za optimizaciju procesa, odabirom relevantnih narudžbi i postavljanjem specifičnih kriterija za proizvodnju.

Ovaj sustav olakšava planiranje proizvodnih aktivnosti, omogućujući odabir između različitih operativnih načina rada, poput jednoartikalskih ili višeartikalskih naloga, te organizaciju rada prema definiranim prioritetima. Također je moguće ažurirati postojeće naloge ili kreirati nove na temelju specifičnih potreba nabave i distribucije.

Fleksibilan pristup **Generiranju proizvodnih naloga** pomaže osigurati da proizvodnja odgovara tržišnim zahtjevima i poslovnim prioritetima, optimizirajući upravljanje resursima i poboljšavajući ukupnu operativnu učinkovitost.

## Moduli područja 

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     Proizvodni nalozi
        <p><Link to="/docs/planning/mps-master-production-scheduling/job-order-creation" className="bold-link">Generiranje proizvodnih naloga</Link></p>
        <p>Omogućuje kreiranje proizvodnih naloga na temelju narudžbi kupaca, prognoza, minimalnih zaliha i potreba skladišta.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders" className="bold-link">Proizvodni nalozi</Link></p>
        <p>Omogućuje prikaz zaglavnih podataka svih proizvodnih naloga.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders-detail" className="bold-link">Proizvodni nalozi (detalji)</Link></p>
        <p>Omogućuje prikaz zaglavnih podataka kao i podataka o artiklima koji se nalaze unutar proizvodnog naloga.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order" className="bold-link">Nalozi monoproizvoda</Link></p>
        <p>Omogućuje upravljanje proizvodnim nalozima namijenjenima jednom artiklu.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order" className="bold-link">Nalozi multiproizvoda</Link></p>
        <p>Omogućuje upravljanje proizvodnim nalozima s grupiranjem više artikala povezanih s istim kupcem ili projektom.</p>
        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/valorization" className="bold-link">Obračun troškova.</Link></p>
        <p>Omogućuje izračun troškova povezanih s proizvodnjom, uz prikaz planskih i stvarnih troškova. </p>
    </div>
</div> 

## Za početak korištenja   

**Proizvodni nalozi**:
- ckreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item) 
- definirati [*Vrste dokumenta*](/docs/configurations/tables/production/documents-types/)  
- definirati [*Parametre MS*](/docs/configurations/parameters/production/mps-parameters/)   

## Povezanost s drugim modulima.
Oni su usko povezani s [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item), s [*Narudžbama kupaca*](/docs/sales/sales-orders/settings) i s **Prognozama prodaje**.


