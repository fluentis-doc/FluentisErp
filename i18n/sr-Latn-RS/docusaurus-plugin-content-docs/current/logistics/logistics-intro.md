---
title: LOGISTIKA
sidebar_position: 1
---

Područje **Logistika** u sistemu **Fluentis ERP** obuhvata sve funkcionalnosti pravog logističkog odeljenja, omogućavajući praćenje i sledljivost kretanja robe u skladištu, kao i svih artikala unutar i izvan organizacije.

U ovom području objedinjeni su dokumenti vezani za nabavni i prodajni proces, kao i interna skladišna kretanja povezana sa procesima proizvodne transformacije.

## Moduli područja

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/items/items-intro">Artikli</Link>
        <p><Link to="/docs/logistics/items/items-intro" className="bold-link">Artikli</Link></p>
        <p>Omogućava detaljno upravljanje artiklima te obezbeđuje sledljivost i efikasno upravljanje zalihama unutar skladišta.</p>

        <p><Link to="/docs/logistics/items/stocks-visualization" className="bold-link">Pregled zaliha</Link></p>
        <p>Omogućava jednostavan pregled skladišnih zaliha i poređenje fizičkih i knjigovodstvenih količina.</p>
    </div>

    <div className="card">
###     <Link to="/docs/logistics/warehouse/warehouse-intro">Skladište</Link>
        <p><Link to="/docs/logistics/warehouse/stock-records/record" className="bold-link">Skladišna knjiženja</Link></p>
        <p>Omogućava upravljanje ulaznim i izlaznim skladišnim kretanjima uz potpunu sledljivost zaliha.</p>
        <p><Link to="/docs/logistics/warehouse/location/locations" className="bold-link">Lokacije</Link></p>
        <p>Omogućava povezivanje artikala sa određenim skladišnim lokacijama radi povećanja logističke efikasnosti.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Izveštaji upravljanja</Link></p>
        <p>Omogućavaju detaljan pregled zaliha i skladišnih stanja te olakšavaju upravljanje i praćenje artikala.</p>
        <p><Link to="/docs/logistics/warehouse/warehouse-intro" className="bold-link">Računovodstveni izveštaji</Link></p>
        <p>Pružaju pregled skladišnih kretanja te podržavaju evidentiranje i kontrolu poslovnih transakcija.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/lots-serial-numbers/lots-serial-number-intro">Lotovi i serijski brojevi</Link>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Šifarnik lotova</Link></p>
        <p>Omogućava pretragu i pregled podataka o lotovima, uključujući povezana ulazna i izlazna skladišna kretanja.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/lots-register" className="bold-link">Sledljivost lota</Link></p>
        <p>Generiše izveštaje o statusu i korišćenju lotova, unapred i unazad kroz proizvodni lanac.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Kreiranje lota iz lota</Link></p>
        <p>Omogućava kreiranje novog lota na osnovu postojećeg uz upravljanje povezanim ulaznim i izlaznim kretanjima.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/create-lot-from-lot" className="bold-link">Kreiranje lota iz lota sa zamenom artikla</Link></p>
        <p>Omogućava kreiranje novog lota uz istovremenu promenu povezanog artikla i upravljanje pripadajućim lotovima.</p>
        <p><Link to="/docs/logistics/lots-serial-numbers/serial-number-register" className="bold-link">Šifarnik serijskih brojeva</Link></p>
        <p>Omogućava upravljanje i sledljivost svakog pojedinačnog artikla putem jedinstvenog serijskog broja, što je posebno korisno za artikle visoke vrednosti ili kritične artikle.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/picking/picking-intro">Picking (Komisioniranje robe)</Link>
        <p><Link to="/docs/logistics/picking/picking-management" className="bold-link">Picking (Komisioniranje robe)</Link></p>
        <p>Omogućava kreiranje lista za preuzimanje robe, olakšavajući izbor artikala za isporuku kupcima ili za interna skladišna kretanja.</p>
        <p><Link to="/docs/logistics/picking/unload-picking" className="bold-link">Razduženje</Link></p>
        <p>Kreira skladišna knjiženja i generiše precizne evidencije za odabrane pickinge.</p>
        <p><Link to="/docs/logistics/picking/unload-check-row-management" className="bold-link">Razduženje prema potvrđenim stavkama</Link></p>
        <p>Izvršava razduženje označenih redova pickinga te olakšava kretanje robe na osnovu potvrđenih stavki.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/udc/loading-unit-intro">Utovarne jedinice</Link>
        <p><Link to="/docs/logistics/udc/loading-unit-management/search-pallet" className="bold-link">Upravljanje utovarnim jedinicama</Link></p>
        <p>Omogućava kreiranje, prijem i izdavanje utovarnih jedinica te obezbeđuje efikasnu kontrolu skladišnih kretanja.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/loading-unit" className="bold-link">Lista za preuzimanje utovarnih jedinica / Packing lista</Link></p>
        <p>Omogućava upravljanje preuzimanjem utovarnih jedinica za otpremu te olakšava organizaciju artikala namenjenih isporuci kupcima.</p>
        <p><Link to="/docs/logistics/udc/loading-unit-packing-lists/transfer-unit" className="bold-link">Lista za prenos utovarnih jedinica</Link></p>
        <p>Omogućava premeštanje utovarnih jedinica unutar skladišta i pojednostavljuje upravljanje zalihama.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/physical-inventory/physical-inventory-intro">Fizičke inventure (zalihe)</Link>
        <p><Link to="/docs/logistics/physical-inventory/inventory-management/search-physical-inventory" className="bold-link">Fizička inventura</Link></p>
        <p>Omogućava izradu inventurnih lista i upoređivanje fizičkih i knjigovodstvenih zaliha radi usklađivanja podataka.</p>
        <p><Link to="/docs/logistics/physical-inventory/stock-difference" className="bold-link">Razlike u inventurnim listama</Link></p>
        <p>Omogućava obračun odstupanja između knjigovodstvenih i fizičkih količina te generisanje knjiženja za usklađivanje zaliha.</p>
        <p><Link to="/docs/logistics/physical-inventory/closing-history" className="bold-link">Arhiva zatvaranja skladišta</Link></p>
        <p>Sadrži podatke o zatvaranjima skladišta i omogućava pregled istorijskih podataka o vrednovanju i zalihama.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-history" className="bold-link">Arhiva skladišta</Link></p>
        <p>Evidentira vrednovane inventure i omogućava detaljan pregled stanja zaliha kroz vreme.</p>
        <p><Link to="/docs/logistics/physical-inventory/warehouse-valorization" className="bold-link">Valorizacija skladišta</Link></p>
        <p>Omogućava zatvaranje skladišta na određeni datum i kreiranje početnih knjiženja sa stanjem zaliha.</p>
        <p><Link to="/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity" className="bold-link">Procenjena vrednost inventara</Link></p>
        <p>Generiše detaljne izveštaje o inventuri, uključujući količine i vrednosti artikala na osnovu prosečnog ili poslednjeg troška.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/load-plans/search-plan">Planovi utovara</Link>
        <p><Link to="/docs/logistics/load-plans/search-plan" className="bold-link">Planovi utovara</Link></p>
        <p>Optimizuju raspored i smeštaj robe unutar transportnog sredstva, obezbeđujući stabilnost, sigurnost i efikasnost tokom transporta.</p>
     </div>
    <div className="card">
###     <Link to="/docs/logistics/shipping/shippings-intro">Dostava</Link>
        <p><Link to="/docs/logistics/shipping/shippings" className="bold-link">Dostave</Link></p>
        <p>Pomoću groupage upravljanja moguće je objediniti pošiljke različitih kupaca ili dobavljača u jednu transportnu jedinicu.</p>
        <p><Link to="/docs/logistics/shipping/calendar" className="bold-link">Kalendar</Link></p>
        <p>Omogućava efikasno planiranje i upravljanje operativnim i logističkim aktivnostima, optimizujući resurse i poboljšavajući koordinaciju otprema.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/motorvehicles/motorvehicle-management">Motorna vozila</Link>
        <p><Link to="/docs/logistics/motorvehicles/motorvehicle" className="bold-link">Upravljanje vozilima</Link></p>
        <p>Ključno za optimizaciju korišćenja, održavanja i bezbednosti vozila u vlasništvu preduzeća.</p>
        <p><Link to="/docs/logistics/motorvehicles/material-consumption/material-consumption-filter" className="bold-link">Potrošnja materijala</Link></p>
        <p>Omogućava upravljanje skladišnim kretanjima povezanim sa potrošnjom materijala vezanih za vozila.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/logistics/wms/wms-intro">WMS</Link>
        <p><Link to="/docs/logistics/wms/purchase/receiving-goods" className="bold-link">Nabavka</Link></p>
        <p>Omogućava identifikaciju i precizan prijem pristigle robe, kreiranje prijemnice nabavke te, po potrebi, upravljanje utovarnim jedinicama.</p>
        <p><Link to="/docs/logistics/wms/logistics/load-item" className="bold-link">Logistika</Link></p>
        <p>Omogućava upravljanje svim skladišnim kretanjima, proveru stanja zaliha i sprovođenje inventure.</p>
        <p><Link to="/docs/logistics/wms/udc/load-move-pallet" className="bold-link">Utovarne jedinice</Link></p>
        <p>Omogućava upravljanje svim skladišnim kretanjima koja koriste utovarne jedinice.</p>
        <p><Link to="/docs/logistics/wms/sales/check-row-management" className="bold-link">Prodaja</Link></p>
        <p>Omogućava upravljanje procesom otpreme robe kupcima.</p>
    </div>
</div>