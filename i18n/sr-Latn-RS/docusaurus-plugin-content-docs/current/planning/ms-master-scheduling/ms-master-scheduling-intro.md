---
title: Uvod
sidebar_position: 1
---

Modul planiranja u Fluentisu predstavlja integrisani sistem osmišljen za upravljanje ključnim aspektima planiranja proizvodnje, kao što su **Opšte planiranje**, **Planiranje konačnih kapaciteta**, **MRP (Planiranje potreba za materijalom)** i upravljanje **Planiranim nalozima/narudžbinama**.
**Opšte planiranje** u Fluentisu zasniva se na konceptu beskonačnog kapaciteta, pružajući fleksibilnost u raspoređivanju operacija bez uzimanja u obzir fizičkih ograničenja resursa. Koristi logiku *što ranije* za pokretanje operacija čim je to moguće i logiku *što kasnije* za planiranje operacija što bliže roku, uz poštovanje zadatih rokova.
**Planiranje konačnih kapaciteta** predstavlja alat namenjen optimizaciji upravljanja proizvodnim resursima unutar proizvodnog preduzeća. Uvažava stvarna ograničenja resursa i omogućava izradu realnih i izvodljivih proizvodnih planova.
Sistem **MRP** olakšava analizu raspoloživosti materijala i resursa i predlaže efikasne strategije za optimizaciju nabavke i korišćenja materijala, sa ciljem povećanja produktivnosti i smanjenja otpada. Planirani nalozi, koji se mogu generisati automatski ili ručno, omogućavaju pravovremeno upravljanje potrebama preduzeća i pružaju fleksibilnost u izmeni podataka kao što su datumi proizvodnje.

Sveukupno, Fluentis sistem odgovara na izazove upravljanja proizvodnjom integrisanjem naprednih metoda za optimizaciju efikasnosti i operativnih troškova.

## Moduli oblasti

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### MS - Glavno vremensko planiranje

<p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">Opšte planiranje</Link></p>
<p>Radi po principu beskonačnog kapaciteta i omogućava planiranje operacija logikom *što ranije* ili *što kasnije*. Ovakav fleksibilan pristup omogućava optimizovano upravljanje proizvodnim potrebama i rokovima izvršenja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">MRP</Link></p>
<p>Omogućava analizu raspoloživosti materijala i resursa i optimizaciju upravljanja zalihama i proizvodnjom kroz predloge za ubrzavanje, dopunu ili otkazivanje naloga. Sistem povećava operativnu efikasnost i smanjuje nivo zaliha.</p>
<p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Planiranje konačnih kapaciteta</Link></p>
<p>Optimizuje upravljanje proizvodnim resursima uzimajući u obzir stvarne kapacitete preduzeća, omogućavajući izradu realnih proizvodnih planova, smanjenje zastoja i povećanje efikasnosti.</p>
<p><Link to="/docs/planning/ms-master-scheduling/fcs-scheduling" className="bold-link">A.F.C.S. planiranje</Link></p>
<p>Omogućava detaljnu simulaciju i optimizaciju proizvodnih procesa, poboljšava tačnost rokova isporuke, upravljanje kritičnim tačkama i efikasnost celokupnog procesa planiranja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/fcs-execution" className="bold-link">A.F.C.S. izvršenja</Link></p>
<p>Omogućava detaljan pregled i upravljanje svim informacijama vezanim za simulacije planiranja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/fcs-gantts-and-histograms/fcs-kpi" className="bold-link">A.F.C.S. gantogrami i histogrami</Link></p>
<p>Omogućava prikaz podataka simulacija u obliku gantograma i histograma.</p>
<p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Planirani nalozi/narudžbine</Link></p>
<p>Omogućava efikasno kreiranje i upravljanje planiranim proizvodnim, nabavnim i kooperantskim nalozima.</p>
<p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Izdavanje planiranih naloga</Link></p>
<p>Omogućava pretvaranje planiranih proizvodnih, nabavnih i kooperantskih naloga u stvarne proizvodne naloge, zahteve za nabavku i kooperantske naloge.</p>
    </div>
</div>

## Za početak rada

Pre korišćenja modula planiranja potrebno je:

- kreirati artikle u [*Šifarniku artikala*](/docs/erp-home/registers/items/create-new-item);
- kreirati [*Sastavnice*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies);
- kreirati [*Tehnološke postupke*](/docs/erp-home/registers/production/routes/new-route);
- kreirati [*Radne centre*](/docs/erp-home/registers/production/routes/work-center);
- definisati [*Fabrički kalendar*](/docs/configurations/tables/production/factory-calendar/);
- definisati [*Kalendare proizvodnih kapaciteta*](/docs/configurations/tables/production/productive-capacity-calendar/);
- definisati [*Vrste dokumenata*](/docs/configurations/tables/production/documents-types/);
- definisati [*MS parametre*](/docs/configurations/parameters/production/mps-parameters/);
- definisati [*Parametre proizvodnih naloga*](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro/).

## Povezanost sa drugim modulima

Ovaj modul je usko povezan sa:

- [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item);
- [*Sastavnicama*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies);
- [*Tehnološkim postupcima*](/docs/erp-home/registers/production/routes/new-route);
- [*Radnim centrima*](/docs/erp-home/registers/production/routes/work-center);
- [*Planiranim nalozima*](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders);
- [*Proizvodnim nalozima*](/docs/production/pp-production-in-progress/production-orders/search-production-orders).