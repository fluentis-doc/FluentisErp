---
title: Uvod
sidebar_position: 1
---

Upravljanje **Generisanjem radnih naloga proizvodnje** omogućava kreiranje proizvodnih naloga na osnovu različitih izvora potražnje, kao što su narudžbine kupaca, prognoze prodaje, minimalne zalihe i potrebe skladišta.

Korisnik može konfigurisati različite parametre za optimizaciju procesa, izborom relevantnih narudžbina i postavljanjem specifičnih kriterijuma za proizvodnju.

Ovaj sistem olakšava planiranje proizvodnih aktivnosti omogućavajući izbor između različitih operativnih načina rada, kao što su monoproizvodni ili multiproizvodni nalozi, kao i organizaciju rada prema definisanim prioritetima. Takođe je moguće ažurirati postojeće naloge ili kreirati nove na osnovu specifičnih potreba nabavke i proizvodnje.

Fleksibilan pristup **Generisanju radnih naloga proizvodnje** pomaže da proizvodnja odgovori zahtevima tržišta i poslovnim prioritetima, optimizujući upravljanje resursima i povećavajući ukupnu operativnu efikasnost.

## Moduli oblasti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     Proizvodni nalozi
        <p><Link to="/docs/planning/mps-master-production-scheduling/job-order-creation" className="bold-link">Generisanje radnih naloga proizvodnje</Link></p>
        <p>Omogućava kreiranje proizvodnih naloga na osnovu narudžbina kupaca, prognoza, minimalnih zaliha i potreba skladišta.</p>

        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders" className="bold-link">Radni nalozi proizvodnje</Link></p>
        <p>Omogućava prikaz zaglavnih podataka svih proizvodnih naloga.</p>

        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/job-orders-detail" className="bold-link">Radni nalozi proizvodnje (detalji)</Link></p>
        <p>Omogućava prikaz zaglavnih podataka kao i podataka o artiklima koji se nalaze unutar proizvodnog naloga.</p>

        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order" className="bold-link">Radni nalozi monoproizvoda</Link></p>
        <p>Omogućava upravljanje proizvodnim nalozima namenjenim jednom artiklu.</p>

        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order" className="bold-link">Radni nalozi multiproizvoda</Link></p>
        <p>Omogućava upravljanje proizvodnim nalozima sa grupisanjem više artikala povezanih sa istim kupcem ili projektom.</p>

        <p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/valorization" className="bold-link">Obračun troškova</Link></p>
        <p>Omogućava obračun troškova povezanih sa proizvodnjom uz prikaz planskih i stvarnih troškova.</p>
    </div>
</div>

## Za početak korišćenja

**Proizvodni nalozi**:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)
- definisati [*Vrste dokumenata*](/docs/configurations/tables/production/documents-types/)
- definisati [*MPS parametre*](/docs/configurations/parameters/production/mps-parameters/)

## Povezanost sa drugim modulima

Ovi moduli su usko povezani sa [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item), [*Narudžbinama kupaca*](/docs/sales/sales-orders/settings) i *Prognozama prodaje*.