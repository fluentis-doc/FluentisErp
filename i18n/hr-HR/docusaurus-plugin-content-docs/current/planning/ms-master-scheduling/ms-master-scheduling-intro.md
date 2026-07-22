---
title: Uvod
sidebar_position: 1
---

Modul planiranja u Fluentisu integrirani je sustav osmišljen za upravljanje ključnim aspektima planiranja proizvodnje, kao što su **Generalno planiranje**, **Planiranje ograničenog kapaciteta**, **MRP (Planiranje potreba za materijalom)** te upravljanje **Planiranim nalozima/narudžbama**.
**Generalno planiranje** u Fluentisu temelji se na konceptu beskonačnog kapaciteta, pružajući fleksibilnost u raspoređivanju operacija bez uzimanja u obzir fizičkih ograničenja resursa. Koristi logiku *što ranije* za pokretanje operacija čim je moguće te logiku *što kasnije* za planiranje operacija što bliže roku, uz poštivanje zadanih rokova.
**Planiranje ograničenog kapaciteta** alat je namijenjen optimizaciji upravljanja proizvodnim resursima unutar proizvodnog poduzeća. Uvažava stvarna ograničenja resursa i omogućuje izradu realnih i provedivih proizvodnih planova.
Sustav **MRP** olakšava analizu raspoloživosti materijala i resursa te predlaže učinkovite strategije za optimizaciju nabave i korištenja materijala, s ciljem povećanja produktivnosti i smanjenja otpada. Planirani nalozi, koji se mogu generirati automatski ili ručno, omogućuju pravovremeno upravljanje potrebama poduzeća te pružaju fleksibilnost u izmjeni podataka poput datuma proizvodnje.

Sveukupno, sustav Fluentis odgovara na izazove upravljanja proizvodnjom integriranjem naprednih metoda za optimizaciju učinkovitosti i operativnih troškova.

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">

### MS - Glavno vremensko raspoređivanje

<p><Link to="/docs/planning/ms-master-scheduling/general-schedule" className="bold-link">Generalno planiranje</Link></p>
<p>Radi na principu beskonačnog kapaciteta i omogućuje planiranje operacija logikom *što ranije* ili *što kasnije*. Ovakav fleksibilan pristup omogućuje optimizirano upravljanje proizvodnim potrebama i rokovima izvršenja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">MRP</Link></p>
<p>Omogućuje analizu raspoloživosti materijala i resursa te optimizaciju upravljanja zalihama i proizvodnjom kroz prijedloge za ubrzavanje, nadopunu ili otkazivanje naloga. Sustav povećava operativnu učinkovitost i smanjuje razinu zaliha.</p>
<p><Link to="/docs/planning/ms-master-scheduling/finite-capacityscheduling" className="bold-link">Planiranje ograničenog kapaciteta</Link></p>
<p>Optimizira upravljanje proizvodnim resursima uzimajući u obzir stvarne kapacitete poduzeća, omogućujući izradu realnih proizvodnih planova, smanjenje zastoja i povećanje učinkovitosti.</p>
<p><Link to="/docs/planning/ms-master-scheduling/fcs-scheduling" className="bold-link">A.F.C.S. planiranje</Link></p>
<p>Omogućuje detaljnu simulaciju i optimizaciju proizvodnih procesa, poboljšava točnost rokova isporuke, upravljanje kritičnim točkama te učinkovitost cjelokupnog procesa planiranja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/fcs-execution" className="bold-link">A.F.C.S. izvršenja</Link></p>
<p>Omogućuje detaljan pregled i upravljanje svim informacijama vezanim uz simulacije planiranja.</p>
<p><Link to="/docs/planning/ms-master-scheduling/fcs-gantts-and-histograms/fcs-kpi" className="bold-link">A.F.C.S. gantogrami i histogrami</Link></p>
<p>Omogućuje prikaz podataka simulacija u obliku gantograma i histograma.</p>
<p><Link to="/docs/planning/ms-master-scheduling/planned-orders/new-planned-order" className="bold-link">Planirani nalozi/narudžbe</Link></p>
<p>Omogućuje učinkovito kreiranje i upravljanje planiranim proizvodnim, nabavnim i kooperantskim nalozima.</p>
<p><Link to="/docs/planning/ms-master-scheduling/planned-orders/procedures/release-planned-orders" className="bold-link">Izdavanje planiranih naloga</Link></p>
<p>Omogućuje pretvaranje planiranih proizvodnih, nabavnih i kooperantskih naloga u stvarne proizvodne naloge, zahtjeve za nabavu i kooperantske naloge.</p>
    </div>
</div>

## Za početak rada

Prije korištenja modula planiranja potrebno je:

- kreirati artikle u [*Šifrarniku artikala*](/docs/erp-home/registers/items/create-new-item);
- kreirati [*Sastavnice*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies);
- kreirati [*Tehnološke postupke*](/docs/erp-home/registers/production/routes/new-route);
- kreirati [*Radne centre*](/docs/erp-home/registers/production/routes/work-center);
- definirati [*Tvornički kalendar*](/docs/configurations/tables/production/factory-calendar/);
- definirati [*Kalendare proizvodnih kapaciteta*](/docs/configurations/tables/production/productive-capacity-calendar/);
- definirati [*Vrste dokumenata*](/docs/configurations/tables/production/documents-types/);
- definirati [*MS parametre*](/docs/configurations/parameters/production/mps-parameters/);
- definirati [*Parametre proizvodnih naloga*](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro/).

## Povezanost s drugim modulima

Ovaj modul usko je povezan sa:

- [*Šifarnikom artikala*](/docs/erp-home/registers/items/create-new-item);
- [*Sastavnicama*](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies);
- [*Tehnološkim postupcima*](/docs/erp-home/registers/production/routes/new-route);
- [*Radnim centrima*](/docs/erp-home/registers/production/routes/work-center);
- [*Planiranim nalozima*](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders);
- [*Proizvodnim nalozima*](/docs/production/pp-production-in-progress/production-orders/search-production-orders).