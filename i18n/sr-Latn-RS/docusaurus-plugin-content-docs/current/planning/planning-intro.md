---
title: Uvod
sidebar_position: 1
---

Kroz postupak **Planiranja proizvodnje** preduzeće definiše i organizuje proizvodne strategije usmerene na pravovremeno ispunjavanje isporuka kupcima, što često može biti u suprotnosti sa ciljevima upravljanja i efikasnosti proizvodnih odeljenja.

U **Fluentis ERP-u** moguće je postaviti različite strategije planiranja proizvodnje, kao što su:

- **MTO (Make to Order)** – proizvodnja po narudžbini;
- **MTS (Make to Stock)** – proizvodnja za zalihu;
- **ATO (Assembly to Order)** – sastavljanje po narudžbini;
- **ETO (Engineering to Order)** – projektovanje i proizvodnja po narudžbini.

U praksi su potrebe često kombinovane, pa izbor odgovarajuće proizvodne strategije direktno utiče na sposobnost preduzeća da postigne ravnotežu između zadovoljenja potražnje i upravljanja proizvodnim kapacitetima.

## Moduli oblasti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/planning/mps-master-production-scheduling/job-orders-intro">Radni nalozi proizvodnje</Link>

<p><Link to="/docs/planning/mps-master-production-scheduling/job-order-creation" className="bold-link">Generisanje radnih naloga proizvodnje</Link></p>
<p>Omogućava kreiranje proizvodnih naloga na osnovu narudžbina kupaca, prognoza, minimalnih zaliha i potreba skladišta.</p>
<p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order" className="bold-link">Monoproizvodni nalozi</Link></p>
<p>Omogućava upravljanje proizvodnim nalozima koji se odnose na jedan artikl.</p>
<p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order" className="bold-link">Multiproizvodni nalozi</Link></p>
<p>Omogućava upravljanje proizvodnim nalozima koji grupišu više artikala povezanih sa istim kupcem ili projektom.</p>
<p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/valorization" className="bold-link">Kalkulacija troškova</Link></p>
<p>Omogućava obračun troškova povezanih sa proizvodnjom i prikaz planskih i stvarnih troškova.</p>

    </div>
</div>

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/planning/ms-master-scheduling/ms-master-scheduling-intro">MS - Glavno vremensko planiranje</Link>

<p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">Generalno planiranje</Link></p>
<p>Radi po principu beskonačnog kapaciteta i omogućava planiranje operacija logikom *što ranije* ili *što kasnije*. Ovakav fleksibilan pristup omogućava optimizovano upravljanje proizvodnim potrebama i rokovima izvršenja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">MRP</Link></p>
<p>Optimizuje upravljanje zalihama i proizvodnjom, povećava efikasnost i smanjuje nivo zaliha.</p>
<p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Planiranje ograničenog kapaciteta</Link></p>
<p>Omogućava optimizaciju upravljanja proizvodnim resursima unutar proizvodnog preduzeća.</p>
<p><Link to="/docs/planning/ms-master-scheduling/fcs-scheduling" className="bold-link">A.F.C.S. planiranje</Link></p>
<p>Omogućava detaljnu simulaciju i optimizaciju proizvodnih procesa, poboljšava tačnost rokova isporuke, upravljanje kritičnim tačkama i efikasnost celokupnog procesa planiranja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Planirani nalozi/narudžbine</Link></p>
<p>Omogućava efikasno kreiranje i upravljanje planiranim proizvodnim, nabavnim i kooperantskim nalozima.</p>
<p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Izdavanje planiranih naloga</Link></p>
<p>Omogućava pretvaranje planiranih naloga u stvarne dokumente.</p>

    </div>
</div>

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/planning/capacity-requirements-planning/capacity-requirements-planning-intro">CRP – Planiranje potrebnih kapaciteta</Link>

<p><Link to="/docs/planning/capacity-requirements-planning/work-center-capacity" className="bold-link">Kapacitet radnih centara</Link></p>
<p>Omogućava praćenje i upravljanje opterećenjem proizvodnih centara i ističe moguća preopterećenja i neefikasnosti.</p>
<p><Link to="/docs/planning/capacity-requirements-planning/gantt-visualization/gantt-visualization-intro" className="bold-link">Gantt simulacija</Link></p>
<p>Omogućava efikasno planiranje i praćenje aktivnosti, optimizujući upravljanje vremenom i resursima.</p>
<p><Link to="/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown" className="bold-link">Redosled faza</Link></p>
<p>Omogućava organizaciju proizvodnih faza kroz ručno definisan redosled ili prema pravilima koje definiše korisnik.</p>

    </div>
</div>