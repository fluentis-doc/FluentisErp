---
title: Uvod 
sidebar_position: 1
---

**Fluentis ERP** omogućuje upravljanje proizvodnjom i svim njezinim operativnim aspektima u tvrtkama iz sektora proizvodnje i industrije koje se suočavaju s često kompleksnim scenarijima vezanim uz procjenu troškova, upravljanje materijalima i aktivnostima. Algoritmi **Fluentis-a** omogućuju upravljanje svim internim i vanjskim poslovnim procesima tijekom cijelog životnog ciklusa proizvoda, počevši od procjene i dizajna, preko nabave materijala i resursa za proizvodnju, do raspoređivanja unutarnje proizvodnje ili proizvodnje na narudžbu, te prikupljanja podataka o proizvodnji i kontrole troškova. Također je podržana integracija proizvodnih postrojenja i automatiziranih skladišta u skladu s konceptom Industrije 4.0.

U Fluentis ERP-u, primjena modela MES implementirana je uz široku paletu parametara za integrirano upravljanje podacima iz proizvodnih procesa koji značajno utječu na profitabilnost tvrtke. U MES softveru Fluentis-a, dokumenti koji se odnose na proizvodne narudžbe koje su stvarno pokrenute, ali ne nužno i izvršne, definiraju redoslijed izvođenja u svakom odjelu, a detaljnije u svakom radnom centru, pružajući sve potrebne informacije za izvršenje proizvodnih aktivnosti. Materijali, faze, podfaze, alati i općenito sva dokumentacija podrške usmjerena su na automatizaciju, organizaciju i fluidnost izvođenja aktivnosti.  
Glavni algoritam specijaliziranog ERP-a za proizvodnju definiran je prema MRP-u, sustavu planiranja koji osigurava pravilnu alokaciju materijala i resursa potrebnih za realizaciju proizvodnih aktivnosti. Algoritam MRP-a konfiguriran je prema nizu parametara kako bi se najbolje prilagodio specifičnim potrebama proizvodne realnosti tvrtke.  

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/planning/ms-master-scheduling/mrp">MRP - Material Requirement Planning</Link>
        <p><Link to="/docs/planning/ms-master-scheduling/mrp" className="bold-link">M.R.P.</Link></p>
        <p>Procedura MRP (Material Requirements Planning) je integrirani sustav planiranja resursa koji pomaže poduzećima u optimizaciji upravljanja zalihama i proizvodnjom, sinkronizirajući dostupnost materijala s potrebama proizvodnje kako bi se poboljšala operativna učinkovitost i smanjili troškovi.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/production/production-intro">MES - Manufacturing Execution System</Link>
        <p><Link to="/docs/production/pp-production-in-progress/production-orders/search-production-orders" className="bold-link">Proizvodni nalozi</Link></p>
        <p>Modul je osmišljen za optimizaciju i pojednostavljenje planiranja proizvodnih procesa. Omogućuje upravljanje narudžbama u stanju Pokrenuto i Izvršno, omogućujući jasnu razliku između narudžbi spremnih za pokretanje i onih koje su već u fazi izvršenja.</p>
        <p><Link to="/docs/production/pp-production-in-progress/picking-materials-list" className="bold-link">Popis za podizanja matrijala</Link></p>
        <p>Omogućuje učinkovito upravljanje i kretanje materijala namijenjenih proizvodnji.</p>
        <p><Link to="/docs/production/pp-production-in-progress/signals/sisgnals" className="bold-link">Deklaracije o proizvodnji</Link></p>
        <p>Ovaj modul omogućuje korisnicima generiranje izjava o proizvodnji prateći napredak svake faze, čime se osigurava potpuna vidljivost i kontrola nad proizvodnim procesom.</p>
        <p><Link to="/docs/production/pp-production-in-progress/procedures/signals-record" className="bold-link">Zapis signala</Link></p>
        <p>Ova procedura omogućuje istovremeno registriranje više izjava o proizvodnji.</p>
        <p><Link to="/docs/production/pp-production-in-progress/procedures/production-orders-release" className="bold-link">Izdavanje  proizvodnih naloga</Link></p>
        <p>Postupak puštanja proizvodnih naloga u Fluentisu omogućuje promjenu stanja narudžbi s Pokrenuto na Izvršno, pri čemu se istovremeno generiraju potrebni skladišni pokreti.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/production/mes/mes-intro">Fluentis MES</Link>
        <p><Link to="/docs/production/mes/workstation" className="bold-link">Radna stanica</Link></p>
        <p>Omogućuju učinkovito upravljanje proizvodnim operacijama, omogućavajući kodiranje, filtriranje i povezivanje resursa. Zahvaljujući svom intuitivnom sučelju, korisnici mogu optimizirati tijek rada i poboljšati operativnu učinkovitost.</p>
        <p><Link to="/docs/production/mes/production-resources" className="bold-link">Proizvodni resursi</Link></p>
        <p>Omogućuje jednostavno i brzo prilagođavanje izgleda i ponašanja pojedinog radnog centra, prilagođavajući sustav specifičnim poslovnim potrebama.</p>
        <p><Link to="/docs/production/mes/mes-main-form" className="bold-link">MES</Link></p>
        <p>Osmišljena je za optimizaciju i pojednostavljenje procesa prijave proizvodnih aktivnosti. Ovo sučelje omogućuje operaterima da u realnom vremenu prate i upravljaju proizvodnim resursima, olakšavajući unos podataka vezanih za faze obrade i proizvedene količine.</p>
    </div>
</div>

