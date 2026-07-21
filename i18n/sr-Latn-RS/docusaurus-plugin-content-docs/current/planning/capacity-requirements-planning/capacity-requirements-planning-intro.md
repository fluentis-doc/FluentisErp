---
title: Uvod
sidebar_position: 1
---

Modul **CRP – Planiranje potreba kapaciteta (Capacity Requirements Planning)** omogućava kontrolu opterećenja proizvodnih resursa pomoću alata kao što su **Kapacitet radnih centara**, **Gantt simulacija** i **Sekvenca/redosled faza**, koji omogućavaju analizu, izmenu i pomeranje planiranih proizvodnih naloga, naloga nabavke i naloga kooperacije prema potrebama poslovanja.

## Moduli oblasti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     CRP – Planiranje kapaciteta
        <p><Link to="/docs/planning/capacity-requirements-planning/work-center-capacity" className="bold-link">Kapacitet radnog centra</Link></p>
        <p>Omogućava trenutni pregled opterećenja svakog aktivnog radnog centra unutar pojedinih odeljenja za određeni vremenski period, omogućavajući brzo prepoznavanje vršnih opterećenja ili proizvodnih neefikasnosti.</p>
        <p><Link to="/docs/planning/capacity-requirements-planning/gantt-visualization/gantt-visualization-intro" className="bold-link">Gantt simulacija</Link></p>
        <p>Omogućava efikasno planiranje i praćenje projektnih aktivnosti, optimizujući upravljanje vremenom i resursima.</p>
        <p><Link to="/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown" className="bold-link">Redosled faza</Link></p>
        <p>Omogućava organizaciju proizvodnih faza kroz ručno definisanu sekvencu ili sekvencu zasnovanu na pravilima koja definiše korisnik.</p>
    </div>
</div>

## Za početak korišćenja

Za korišćenje **Kapaciteta radnih centara** i **Sekvence faza** potrebno je:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)
- kreirati [*Sastavnice*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)
- kreirati [*Tehnološke postupke*](/docs/erp-home/registers/production/routes/new-route)
- kreirati [*Radne centre*](/docs/erp-home/registers/production/routes/work-center)
- kreirati [*Fabrički kalendar*](/docs/configurations/tables/production/factory-calendar/)
- kreirati [*Kalendare proizvodnih kapaciteta*](/docs/configurations/tables/production/productive-capacity-calendar/)

## Povezanost sa drugim modulima

Ovi moduli su usko povezani sa [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item), [*Sastavnicama*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), [*Tehnološkim postupcima*](/docs/erp-home/registers/production/routes/new-route), [*Radnim centrima*](/docs/erp-home/registers/production/routes/work-center), [*Planiranim nalozima*](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) i [*Proizvodnim nalozima*](/docs/production/pp-production-in-progress/production-orders/search-production-orders).