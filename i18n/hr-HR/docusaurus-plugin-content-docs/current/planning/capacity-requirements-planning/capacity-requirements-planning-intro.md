---
title: Uvod
sidebar_position: 1
---

Modul **CRP – Planiranje zahtjeva za kapacitetom (Capacity Requirements Planning)** omogućuje kontrolu opterećenja proizvodnih resursa pomoću alata kao što su **Kapacitet radnih centara**, **Gantt simulacija** i **Sekvenca/redoslijed faza**, koji omogućuju analizu, izmjenu i pomicanje planiranih proizvodnih naloga, naloga nabave i naloga kooperacije prema potrebama poslovanja.

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     CRP – Planiranje kapaciteta
        <p><Link to="/docs/planning/capacity-requirements-planning/work-center-capacity" className="bold-link">Kapacitet radnog centra</Link></p>
        <p>Omogućuje trenutačan pregled opterećenja svakog aktivnog radnog centra unutar pojedinih odjela za određeno vremensko razdoblje, omogućujući brzo prepoznavanje vršnih opterećenja ili proizvodnih neučinkovitosti.</p>
        <p><Link to="/docs/planning/capacity-requirements-planning/gantt-visualization/gantt-visualization-intro" className="bold-link">Gantt simulacija</Link></p>
        <p>Omogućuje učinkovito planiranje i praćenje projektnih aktivnosti, optimizirajući upravljanje vremenom i resursima.</p>
        <p><Link to="/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown" className="bold-link">Redoslijed faza</Link></p>
        <p>Omogućuje organizaciju proizvodnih faza kroz ručno definiranu sekvencu ili sekvencu temeljenu na pravilima koje definira korisnik.</p>
    </div>
</div>

## Za početak korištenja

**Kapaciteta radnih centara** i **Sekvence faza** potrebno je:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item)
- kreirati [*Sastavnice*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)
- kreirati [*Tehnološke postupke*](/docs/erp-home/registers/production/routes/new-route)
- kreirati [*Radne centre*](/docs/erp-home/registers/production/routes/work-center)
- kreirati [*Tvornički kalendar*](/docs/configurations/tables/production/factory-calendar/)
- kreirati [*Kalendare proizvodnih kapaciteta*](/docs/configurations/tables/production/productive-capacity-calendar/)

## Povezanost s drugim modulima

Ovi moduli usko su povezani sa [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item), [*Sastavnicama*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), [*Tehnološkim postupcima*](/docs/erp-home/registers/production/routes/new-route), [*Radnim centrima*](/docs/erp-home/registers/production/routes/work-center), [*Planiranim nalozima*](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders) i [*Proizvodnim nalozima*](/docs/production/pp-production-in-progress/production-orders/search-production-orders).