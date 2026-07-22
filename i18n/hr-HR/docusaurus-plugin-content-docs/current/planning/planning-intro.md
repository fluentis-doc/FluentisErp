---
title: Uvod
sidebar_position: 1
---

Kroz postupak **Planiranja proizvodnje** poduzeće definira i organizira proizvodne strategije usmjerene na pravodobno ispunjavanje isporuka kupcima, što često može biti u suprotnosti s ciljevima upravljanja i učinkovitosti proizvodnih odjela.

U **Fluentis ERP-u** moguće je postaviti različite strategije planiranja proizvodnje, kao što su:

- **MTO (Make to Order)** – proizvodnja po narudžbi;
- **MTS (Make to Stock)** – proizvodnja za zalihu;
- **ATO (Assembly to Order)** – sastavljanje po narudžbi;
- **ETO (Engineering to Order)** – projektiranje i proizvodnja po narudžbi.

U praksi su potrebe često kombinirane, pa odabir odgovarajuće proizvodne strategije izravno utječe na sposobnost poduzeća da postigne ravnotežu između zadovoljenja potražnje i upravljanja proizvodnim kapacitetima.

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/planning/mps-master-production-scheduling/job-orders-intro">Radni nalozi proizvodnje</Link>

<p><Link to="/docs/planning/mps-master-production-scheduling/job-order-creation" className="bold-link">Generiranje radnih nalozi proizvodnje</Link></p>
<p>Omogućuje kreiranje proizvodnih naloga na temelju narudžbi kupaca, prognoza, minimalnih zaliha i potreba skladišta.</p>
<p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-monoproduct-job-order" className="bold-link">Monoproizvodni nalozi</Link></p>
<p>Omogućuje upravljanje proizvodnim nalozima koji se odnose na jedan artikl.</p>
<p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/new-multiproduct-job-order" className="bold-link">Multiproizvodni nalozi</Link></p>
<p>Omogućuje upravljanje proizvodnim nalozima koji grupiraju više artikala povezanih s istim kupcem ili projektom.</p>
<p><Link to="/docs/planning/mps-master-production-scheduling/production-job-orders/valorization" className="bold-link">Kalkulacija troškova</Link></p>
<p>Omogućuje izračun troškova povezanih s proizvodnjom te prikaz planskih i stvarnih troškova.</p>

    </div>
</div>

<div className="cardContainer">
    <div className="card">

### <Link to="/docs/planning/ms-master-scheduling/ms-master-scheduling-intro">MS - Glavno vremensko raspoređivanje</Link>

<p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">Generalno planiranje</Link></p>
<p>Radi na principu beskonačnog kapaciteta te omogućuje planiranje operacija logikom *što ranije* ili *što kasnije*. Ovakav fleksibilan pristup omogućuje optimizirano upravljanje proizvodnim potrebama i rokovima izvršenja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">MRP</Link></p>
<p>Optimizira upravljanje zalihama i proizvodnjom, povećava učinkovitost te smanjuje razinu zaliha.</p>
<p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Planiranje ograničenog kapaciteta</Link></p>
<p>Omogućuje optimizaciju upravljanja proizvodnim resursima unutar proizvodnog poduzeća.</p>
<p><Link to="/docs/planning/ms-master-scheduling/fcs-scheduling" className="bold-link">A.F.C.S. planiranje</Link></p>
<p>Omogućuje detaljnu simulaciju i optimizaciju proizvodnih procesa, poboljšava točnost rokova isporuke, upravljanje kritičnim točkama te učinkovitost cjelokupnog procesa planiranja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Planirani nalozi/narudžbe</Link></p>
<p>Omogućuje učinkovito kreiranje i upravljanje planiranim proizvodnim, nabavnim i kooperantskim nalozima.</p>
<p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Izdavanje planiranih naloga</Link></p>
<p>Omogućuje pretvaranje planiranih naloga u stvarne dokumente.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">

### <Link to="/docs/planning/capacity-requirements-planning/capacity-requirements-planning-intro">CRP – Planiranje potrebnih kapaciteta</Link>

<p><Link to="/docs/planning/capacity-requirements-planning/work-center-capacity" className="bold-link">Kapacitet radnih centara</Link></p>
<p>Omogućuje praćenje i upravljanje opterećenjem proizvodnih centara te ističe moguća preopterećenja i neučinkovitosti.</p>
<p><Link to="/docs/planning/capacity-requirements-planning/gantt-visualization/gantt-visualization-intro" className="bold-link">Gantt simulacija</Link></p>
<p>Omogućuje učinkovito planiranje i praćenje aktivnosti, optimizirajući upravljanje vremenom i resursima.</p>
<p><Link to="/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown" className="bold-link">Redoslijed faza</Link></p>
<p>Omogućuje organizaciju proizvodnih faza kroz ručno definirani redoslijed ili prema pravilima koja definira korisnik.</p>

    </div>
</div>